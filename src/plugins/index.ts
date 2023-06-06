import { App } from "vue";

import element from "./element/index";
import echarts from "./echarts/index";
import http from "./http/index";
import videojs from "./videojs";
import nprogress from "./nprogress";
const plugins = [http, element, echarts, videojs, nprogress];

export default (app: App) => {
  plugins.map((plugin) => plugin(app));
};
