import "./styles/main.css";
import { IControl } from "mapbox-gl";
import type { Map, Layer } from "mapbox-gl";
import components from "./components";
import expression from "./expression";
import { createElement, toObject } from "./utils";

export type LayersView = string[] | Record<string, boolean | string[]>;

export type LegendControlOptions = {
  collapsed?: boolean;
  toggler?: boolean;
  layers?: LayersView;
  container?: HTMLElement; //Jin add.指定容器。如果为空则为默认创建，反之，加载到指定的容器。如果container不为空，则外部需手动调用onAdd,而不是用map.addControl
  labelPrefix?: string | string[]; //Jin add.图例名前缀，如果指定，则在图例显示时会将前缀删除掉.
  onToggle?: (layer: string, visibility: boolean) => void;
};

const defaults: LegendControlOptions = {
  collapsed: false,
  toggler: false,
  layers: undefined,
};

export default class LegendControl implements IControl {
  private _options: {
    layers?: Record<string, boolean | string[]>;
  } & Omit<LegendControlOptions, "layers">;

  private _container: HTMLElement;

  private _map!: Map;

  constructor(options: LegendControlOptions = {}) {
    const { container, layers, ...rest } = options;

    container?.classList.add(...["mapboxgl-ctrl", "mapboxgl-ctrl-legend"]);
    this._container =
      container ||
      createElement("div", {
        classes: ["mapboxgl-ctrl", "mapboxgl-ctrl-legend"],
      });
    this._options = { ...defaults, ...rest, layers: toObject(layers) };
    this._loadPanes = this._loadPanes.bind(this);
  }

  onAdd(map: Map) {
    this._map = map;
    this._map.on("styledata", this._loadPanes);
    return this._container;
  }

  onRemove() {
    this._container.parentNode?.removeChild(this._container);
    this._map?.off("styledata", this._loadPanes);
  }

  addLayers(layers: LayersView) {
    this._options.layers = { ...this._options.layers, ...toObject(layers) };
    if (this._map.isStyleLoaded()) this._loadPanes();
  }

  removeLayers(layerIds: string[]) {
    layerIds.forEach((id) => {
      delete this._options.layers?.[id];
      const pane = document.querySelector(`.mapboxgl-ctrl-legend-pane--${id}`);
      if (pane) this._container.removeChild(pane);
    });
  }

  removeAllLayers() {
    const { layers } = this._options;
    if (layers) {
      let layerids = Object.keys(layers).map((item) => item);
      console.log(layerids);
      this.removeLayers(layerids);
    }
  }
  /**
   * [自定义扩展] 返回已加载的图层id
   * @returns
   */
  getLayers(): string[] {
    const { layers } = this._options;
    return layers ? Object.keys(layers).map((item) => item) : [];
  }
  private _isAttributeVisible(layerId: string, attribute: string) {
    const { layers } = this._options;
    if (!layers) return true;
    const key = Object.keys(layers).find((regex) => layerId.match(regex));
    const layer = !!key && layers[key];
    return Array.isArray(layer) ? layer.includes(attribute) : layer;
  }

  private _getBlock(layer: Layer, attribute: string, value: any) {
    const [property] = attribute.split("-").slice(-1);
    const component = components[property as keyof typeof components];
    if (!component) return;
    const parsed = expression.parse(value);
    return parsed && component(parsed, layer, this._map);
  }

  private _toggleButton(layerId: string) {
    if (!this._options.toggler) return undefined;
    const visibility = this._map?.getLayoutProperty(layerId, "visibility") || "visible";
    const button = createElement("div", {
      classes: ["toggler", `toggler--${visibility}`],
    });
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const visible = visibility === "none" ? "visible" : "none";
      this._map?.setLayoutProperty(layerId, "visibility", visible);
      this._options.onToggle?.(layerId, visible === "visible");
    });
    return button;
  }

  private _loadPanes() {
    const { collapsed, layers } = this._options;
    this._map
      .getStyle()
      .layers.filter((layer) => (layer as Layer).source && (layer as Layer).source !== "composite")
      .filter(({ id }) => !layers || Object.keys(layers).some((key) => id.match(key)))
      .reverse() // Show in order that are drawn on map (first layers at the bottom, last on top)
      .forEach((layer) => {
        const { id, layout, paint, metadata } = layer as Layer;

        // Construct all required blocks, break if none
        const paneBlocks = Object.entries({ ...layout, ...paint }).reduce((acc, [attribute, value]) => {
          if (!this._isAttributeVisible(id, attribute)) return acc;
          const block = this._getBlock(layer, attribute, value);
          if (block) acc.push(block);
          return acc;
        }, [] as HTMLElement[]);
        if (!paneBlocks.length) return;

        // (re)Construct pane and replace (if already exist)
        const selector = `mapboxgl-ctrl-legend-pane--${id}`;
        const prevPane = this._container.querySelector(`.${selector}`);
        const pane = createElement("details", {
          classes: ["mapboxgl-ctrl-legend-pane", selector],
          attributes: {
            open: prevPane ? prevPane.getAttribute("open") !== null : !collapsed,
          },
          content: [
            createElement("summary", {
              content: [metadata?.name || this._formatLabel(id), this._toggleButton(id)], //Jin modify 格式化显示的label
            }),
            ...paneBlocks,
          ],
        });
        if (prevPane) this._container.replaceChild(pane, prevPane);
        else this._container.appendChild(pane);
      });
  }
  //Jin modify 格式化显示的label，去除prefix
  private _formatLabel(id: string) {
    if (this._options.labelPrefix) {
      let labelPrefix: string | string[] = this._options.labelPrefix;
      if (typeof labelPrefix === "string") {
        return id.startsWith(labelPrefix) ? id.replace(labelPrefix, "") : id;
      }
      // debugger;
      let labelPrefixs = labelPrefix as string[];
      // console.log(labelPrefixs);
      let hit = labelPrefixs.find((prefix) => id.startsWith(prefix));
      if (hit) return id.replace(hit, "");

      return id;
    }
    return id;
  }
}
