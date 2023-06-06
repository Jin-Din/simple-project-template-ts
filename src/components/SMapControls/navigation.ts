import { Map, LngLatBoundsLike } from "mapbox-gl";

interface ISOption {
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  fullExtent?: LngLatBoundsLike;
  initalExtent?: LngLatBoundsLike;
}
const defaultOption = {
  minZoom: 5,
  maxZoom: 28,
  fullExtent: [
    [105.783333, 32.166667],
    [111.45, 39.983333],
  ],
};

// let map: Map;
let thisMap = ref<Map>(null as unknown as Map);
export default (map: Ref<Map>, option?: ISOption) => {
  thisMap = map;
  let mapOption = { ...defaultOption, ...option };

  //   const currentZoom = computed(() => {
  //     return disabled.value ? -1 : thisMap.value.getZoom();
  //   });
  const zoomInDisabled = computed(() => {
    // console.log(mapOption.maxZoom);

    return disabled.value || currentZoom.value >= mapOption.maxZoom;
  });
  const zoomOutDisabled = computed(() => {
    return disabled.value || currentZoom.value <= mapOption.minZoom;
  });
  const compassArrow = computed(() => {
    // thisMap.value.
  });
  const disabled = computed(() => {
    return !thisMap.value;
  });

  const currentZoom = ref(0);
  const zoomEnd = () => {
    if (disabled.value) return;
    currentZoom.value = thisMap.value.getZoom();
    // console.log(currentZoom.value);
  };
  watch(
    () => thisMap.value,
    (newValue, oldValue) => {
      if (newValue) {
        _setMinMaxZoom(newValue.getMinZoom(), newValue.getMaxZoom());
        if (oldValue) {
          oldValue.off("zoomend", zoomEnd);
        }
        newValue.on("zoomend", zoomEnd);
      }
    },
    { immediate: true }
  );
  function zoomOut() {
    if (disabled.value) return;
    let zoom = thisMap.value.getZoom() - 1;
    zoom = zoom < mapOption.minZoom ? mapOption.minZoom : zoom;
    thisMap.value.zoomOut();
  }
  function zoomIn() {
    if (disabled.value) return;
    let zoom = thisMap.value.getZoom() + 1;
    zoom > mapOption.maxZoom ? mapOption.maxZoom : zoom;
    thisMap.value.zoomIn();
  }

  function _setMinMaxZoom(minZoom: number, maxZoom: number) {
    if (disabled.value) return;
    console.log(minZoom + "," + maxZoom);

    mapOption = {
      ...mapOption,
      ...{
        minZoom,
        maxZoom,
      },
    };
  }
  function setMap(map: Map) {
    thisMap.value = map;
  }
  function resetNorth() {
    if (disabled.value) return;
    thisMap.value.resetNorthPitch();
  }
  function setFullExtent() {
    if (disabled.value) return;
    let bbox = mapOption.fullExtent as LngLatBoundsLike;
    thisMap.value.fitBounds(bbox);
  }
  return {
    zoomOut,
    zoomIn,
    zoomInDisabled,
    zoomOutDisabled,

    setMap,
    resetNorth,
    setFullExtent,
  };
};
