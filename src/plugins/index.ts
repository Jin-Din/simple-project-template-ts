import { App } from "vue";

import element from "./element/index";
import echarts from "./echarts/index";
import http from "./http/index";
import videojs from "./videojs";
import nprogress from "./nprogress";
import mapboxgl2 from "./mapboxgl";
const plugins = [http, element, echarts, videojs, nprogress, mapboxgl2];

export default (app: App) => {
  plugins.map((plugin) => plugin(app));
};
