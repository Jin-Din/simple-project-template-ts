import { Feature, FeatureCollection, Point, Polygon, LineString } from "geojson";
import type { GeoJSONSource, LngLatLike, MarkerOptions } from "mapbox-gl";
import { Map } from "sxgis-mapboxgl-mapex";
// import mapboxgl from "mapbox-gl";
import mapboxgl from "@/libs/mapboxgl";
// import "@cgcs2000/mapbox-gl/dist/mapbox-gl.css"; //如果全局没有引入样式，就在此引入样式
import length from "@turf/length";
import * as turf from "@turf/turf";

/**
 * 距离量算，函数式
 * @param map
 * @returns
 */
export const useMeasureLine = (map: Map) => {
  if (map === null) return;

  let isMeasure: boolean = true;
  let jsonPoint!: FeatureCollection<Point>; //节点
  let jsonLine!: FeatureCollection<LineString>; //线
  let points: number[][] = []; //存储节点，用于计算距离
  let markers: mapboxgl.Marker[] = [];
  let tooltip!: mapboxgl.Marker;

  // 禁止双击缩放
  map.doubleClickZoom.disable();
  //设置鼠标样式
  map.getCanvas().style.cursor = "crosshair";

  clearMeasure();

  jsonPoint = {
    type: "FeatureCollection",
    features: [],
  };
  jsonLine = {
    type: "FeatureCollection",
    features: [],
  };
  // let points: any[][] = [];
  const ele = document.createElement("div");
  ele.setAttribute("class", "measure-length measure-result");
  const option: MarkerOptions = {
    element: ele,
    anchor: "left",
    offset: [8, 0],
  };
  tooltip = new mapboxgl.Marker(option); //.setLngLat([0, 0]).addTo(map);
  // let markers = [];

  let source = map.getSource("ml-points");
  if (source) {
    (map.getSource("ml-points") as GeoJSONSource).setData(jsonPoint);
    (map.getSource("ml-line-move") as GeoJSONSource).setData(jsonLine);
    (map.getSource("ml-line") as GeoJSONSource).setData(jsonLine);
  } else {
    map.addSource("ml-points", {
      type: "geojson",
      data: jsonPoint,
    });
    map.addSource("ml-line", {
      type: "geojson",
      data: jsonLine,
    });
    map.addSource("ml-line-move", {
      type: "geojson",
      data: jsonLine,
    });
    map.addLayer({
      id: "ml-line-move",
      type: "line",
      source: "ml-line-move",
      paint: {
        "line-color": "#ff0000",
        "line-width": 2,
        "line-opacity": 0.65,
      },
    });
    map.addLayer({
      id: "ml-line",
      type: "line",
      source: "ml-line",
      paint: {
        "line-color": "#ff0000",
        "line-width": 2,
        "line-opacity": 0.65,
      },
    });
    map.addLayer({
      id: "ml-points",
      type: "circle",
      source: "ml-points",
      paint: {
        "circle-color": "#ffffff",
        "circle-radius": 3,
        "circle-stroke-width": 2,
        "circle-stroke-color": "#ff0000",
      },
    });
  }

  const mapClick = (_e: any) => {
    if (isMeasure) {
      let coords = [_e.lngLat.lng, _e.lngLat.lat];
      addMeasureRes(coords as LngLatLike);
      addPoint(coords);
      points.push(coords);
    }
  };
  map.on("click", mapClick);
  const mapMouseMove = (_e: any) => {
    if (isMeasure) {
      let coords = [_e.lngLat.lng, _e.lngLat.lat];
      let ele: HTMLElement = tooltip.getElement();
      if (jsonPoint.features.length > 0) {
        let prev = jsonPoint.features[jsonPoint.features.length - 1];
        let json: Feature<LineString> = {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [prev.geometry.coordinates, coords],
          },
          properties: null,
        };
        (map.getSource("ml-line-move") as mapboxgl.GeoJSONSource).setData(json);
        ele.innerHTML = getLength(coords).toString();
      } else {
        ele.innerHTML = "点击地图开始测量";
      }
      tooltip.setLngLat(coords as LngLatLike);
    }
  };
  map.on("mousemove", mapMouseMove);

  const dblclick = (_e: any) => {
    if (isMeasure) {
      let coords = [_e.lngLat.lng, _e.lngLat.lat];
      addPoint(coords);
      isMeasure = false;
      map.getCanvas().style.cursor = "";
      tooltip.remove();
      // 添加关闭按钮
      const ele: HTMLDivElement = document.createElement("div");
      ele.setAttribute("class", "measure-length measure-result close");

      const option: MarkerOptions = {
        element: ele,
        anchor: "bottom-left",
        offset: [-5, -10],
      };
      ele.innerHTML = "x";
      new mapboxgl.Marker(option).setLngLat(coords as LngLatLike).addTo(map);
      ele.onclick = (__e) => {
        __e.stopPropagation();
        map.doubleClickZoom.enable();
        clearMeasure();
      };

      mapOff();
    }
  };
  map.on("dblclick", dblclick);

  function clearMeasure() {
    clearDoms();
    let source = map.getSource("ml-points");
    let json: FeatureCollection = {
      type: "FeatureCollection",
      features: [],
    };
    if (source) {
      (map.getSource("ml-points") as GeoJSONSource).setData(json);
      (map.getSource("ml-line-move") as GeoJSONSource).setData(json);
      (map.getSource("ml-line") as GeoJSONSource).setData(json);
    }
    // let sourceArea = map.getSource("ma-points-area");
    // if (sourceArea) {
    //   (map.getSource("ma-points-area") as GeoJSONSource).setData(json);
    //   (map.getSource("ma-line-area") as GeoJSONSource).setData(json);
    // }
  }
  //清除Dom
  function clearDoms() {
    //递归循环删除
    let eles = document.getElementsByClassName("measure-length");

    while (eles.length > 0) {
      for (let index = 0; index < eles.length; index++) {
        eles[index].remove();
      }
      eles = document.getElementsByClassName("measure-length");
    }
  }

  function addPoint(coords: number[]) {
    if (jsonPoint.features.length > 0) {
      let prev = jsonPoint.features[jsonPoint.features.length - 1];
      jsonLine.features.push({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [prev.geometry.coordinates, coords],
        },
        properties: null,
      });
      (map.getSource("ml-line") as GeoJSONSource).setData(jsonLine);
    }
    jsonPoint.features.push({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: coords,
      },
      properties: null,
    });
    (map.getSource("ml-points") as GeoJSONSource).setData(jsonPoint);
  }

  function getLength(coords: number[]) {
    let _points = points.concat([coords]);
    let line = turf.lineString(_points);
    let len = length(line); //默认 kilometer
    return len < 1 ? Math.round(len * 1000) + "m" : len.toFixed(2) + "km";
  }

  function addMeasureRes(coords: mapboxgl.LngLatLike) {
    const ele = document.createElement("div");
    ele.setAttribute("class", "measure-length measure-result");
    const option: MarkerOptions = {
      element: ele,
      anchor: "left",
      offset: [8, 0],
    };
    ele.innerHTML = points.length === 0 ? "起点" : getLength(coords as number[]);
    let marker = new mapboxgl.Marker(option).setLngLat(coords).addTo(map);
    markers.push(marker);
  }
  //事件解绑
  function mapOff() {
    map.off("click", mapClick);
    map.off("mousemove", mapMouseMove);
    map.off("dblclick", dblclick);
    console.log("mapoff");
  }
};

/**
 * 面积量算，函数式
 * @param map
 * @returns
 */
export const useMeasureArea = (map: mapboxgl.Map) => {
  if (map === null) return;

  let isMeasure: boolean = true;
  let jsonPoint!: FeatureCollection<Point>;
  let jsonPolygon!: FeatureCollection<Polygon>;
  let points: number[][] = [];
  // private markers: mapboxgl.Marker[] = [];
  let tooltip!: mapboxgl.Marker;

  // 禁止双击缩放
  map.doubleClickZoom.disable();
  //设置鼠标样式
  map.getCanvas().style.cursor = "crosshair";

  clearMeasure();
  jsonPoint = {
    type: "FeatureCollection",
    features: [],
  };
  jsonPolygon = {
    type: "FeatureCollection",
    features: [],
  };

  points = []; //清空初始化
  let ele = document.createElement("div");
  ele.setAttribute("class", "measure-area measure-result");
  const option: MarkerOptions = {
    element: ele,
    anchor: "left",
    offset: [8, 0],
  };
  tooltip = new mapboxgl.Marker(option).setLngLat([0, 0]).addTo(map);
  let source = map.getSource("ma-points-area");
  if (source) {
    (map.getSource("ma-points-area") as GeoJSONSource).setData(jsonPoint);
    (map.getSource("ma-line-area") as GeoJSONSource).setData(jsonPolygon);
  } else {
    map.addSource("ma-points-area", {
      type: "geojson",
      data: jsonPoint,
    });
    map.addSource("ma-line-area", {
      type: "geojson",
      data: jsonPolygon,
    });
    map.addLayer({
      id: "ma-line-area",
      type: "fill",
      source: "ma-line-area",
      paint: {
        "fill-color": "#ff0000",
        "fill-opacity": 0.1,
      },
    });
    map.addLayer({
      id: "ma-line-area-stroke",
      type: "line",
      source: "ma-line-area",
      paint: {
        "line-color": "#ff0000",
        "line-width": 2,
        "line-opacity": 0.65,
      },
    });
    map.addLayer({
      id: "ma-points-area",
      type: "circle",
      source: "ma-points-area",
      paint: {
        "circle-color": "#ffffff",
        "circle-radius": 3,
        "circle-stroke-width": 2,
        "circle-stroke-color": "#ff0000",
      },
    });
  }

  const mapClick = (_e: any) => {
    if (isMeasure) {
      let coords = [_e.lngLat.lng, _e.lngLat.lat];
      points.push(coords);
      addPoint(coords);
    }
  };
  map.on("click", mapClick);

  const dblclick = (_e: any) => {
    if (isMeasure) {
      let coords = [_e.lngLat.lng, _e.lngLat.lat];
      points.push(coords);
      isMeasure = false;
      map.getCanvas().style.cursor = "";

      tooltip.getElement().innerHTML = getArea(coords);
      tooltip.setLngLat(coords as LngLatLike);
      // 添加关闭按钮
      let _ele = document.createElement("div");
      _ele.setAttribute("class", "measure-area measure-result close");
      let option: MarkerOptions = {
        element: _ele,
        anchor: "bottom-left",
        offset: [-5, -10],
      };
      _ele.innerHTML = "x";
      new mapboxgl.Marker(option).setLngLat(coords as LngLatLike).addTo(map);
      _ele.onclick = (__e) => {
        __e.stopPropagation();
        map.doubleClickZoom.enable();
        clearMeasure();
      };

      mapOff();
    }
  };
  map.on("dblclick", dblclick);

  const mapMouseMove = (_e: any) => {
    if (isMeasure) {
      let coords = [_e.lngLat.lng, _e.lngLat.lat];
      let ele: HTMLElement = tooltip.getElement();
      let len = jsonPoint.features.length;
      if (len === 0) {
        ele.innerHTML = "点击地图开始测量";
      } else if (len === 1) {
        ele.innerHTML = "点击地图继续绘制";
      } else {
        let pts = points.concat([coords]); //拼接坐标点
        pts = pts.concat([points[0]]); //闭合
        let json: Feature<Polygon> = {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [pts],
          },
          properties: null,
        };
        (map.getSource("ma-line-area") as GeoJSONSource).setData(json);
        ele.innerHTML = getArea(coords);
      }
      tooltip.setLngLat(coords as LngLatLike);
    }
  };
  map.on("mousemove", mapMouseMove);

  function getArea(coords: number[]) {
    let pts = points.concat([coords]);
    pts = pts.concat([points[0]]);
    let polygon = turf.polygon([pts]);
    let area = turf.area(polygon);
    return area < 1000 ? Math.round(area) + "m²" : (area / 1000000).toFixed(2) + "km²";
  }
  function addPoint(coords: any[]) {
    jsonPoint.features.push({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: coords,
      },
      properties: null,
    });
    (map.getSource("ma-points-area") as GeoJSONSource).setData(jsonPoint);
  }

  function clearMeasure() {
    clearDoms();

    let json: FeatureCollection<Point> = {
      type: "FeatureCollection",
      features: [],
    };
    // let source = map.getSource("ml-points");
    // if (source) {
    //   (map.getSource("ml-points") as GeoJSONSource).setData(json);
    //   (map.getSource("ml-line-move") as GeoJSONSource).setData(json);
    //   (map.getSource("ml-line") as GeoJSONSource).setData(json);
    // }
    let sourceArea = map.getSource("ma-points-area");
    if (sourceArea) {
      (map.getSource("ma-points-area") as GeoJSONSource).setData(json);
      (map.getSource("ma-line-area") as GeoJSONSource).setData(json);
    }
  }
  //清除Dom
  function clearDoms() {
    //递归循环删除
    let eles = document.getElementsByClassName("measure-area");

    while (eles.length > 0) {
      for (let index = 0; index < eles.length; index++) {
        eles[index].remove();
      }
      eles = document.getElementsByClassName("measure-area");
    }
  }
  //事件解绑
  function mapOff() {
    map.off("click", mapClick);
    map.off("mousemove", mapMouseMove);
    map.off("dblclick", dblclick);
    console.log("mapoff");
  }
};
