import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist"; //导入 pinia持久化插件

const store = createPinia();
store.use(piniaPluginPersist); //使用pinia 持久化

export * from "./user";
export * from "./pub";
export * from "./router";
export default store;
