import type { ISMapConfig, Map } from "@jindin/mapboxgl-mapex";

export interface ISConfig {
  urls: Urls | Record<string, any>;
}
interface Urls {
  home: string;
  district: District;
}

interface District {
  cityUrl: string;
  countyUrl: string;
  townUrl: string;
  cityPtUrl: string;
  countyPtUrl: string;
  townPtUrl: string;
}

export const usePubStore = defineStore("pubData", {
  state: () => {
    return {
      map: null as unknown as Map,
      mapConfig: null as unknown as ISMapConfig,
      urls: null as unknown as Urls,
    };
  },
  getters: {
    getMap: (state) => {
      return state.map as unknown as Map;
    },
    getUrls: (state) => {
      return state.urls as unknown as Urls;
    },
    // getDrawer: (state) => {
    //   return state.drawer;
    // },
  },
  actions: {
    setMap(map: Map) {
      this.map = map;
    },
    setMapConfig(mapConfig: ISMapConfig) {
      this.mapConfig = mapConfig;
    },
    setUrls(urls: Urls) {
      this.urls = urls;
    },
    // setConfig(cfg: ISConfig) {
    //   this.config = cfg;
    // },
  },
});
