// echarts
import "echarts";
import vueECharts from "vue-echarts";

export default (app) => {
  // 注册全局组件
  app.component("v-chart", vueECharts);
};
