import { createApp } from "vue";
import "./style.css"; //全局样式
import "./assets/css/mapbox.css"; //自定义的mapboxgl样式
import "animate.css"; //动画
import App from "./App.vue";
import store from "./store";
import router from "./router";

import plugins from "./plugins"; //相关插件

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.log("[全局异常]", err, vm, info);
};

app.use(store).use(router);
plugins(app); //注册插件集
app.mount("#app");
