// /**
//  * vue2 下 eventbus 替代方案
//  * ####################################
//  * 旧项目升级 EventBus#
//  * 在 Vue 3 的 EventBus 里，可以看到它的 API 和旧版是非常接近的，只是去掉了 $ 符号。
//  * 如果要对旧的项目进行升级改造，由于原来都是使用了 $on 、 $emit 等旧的 API ，一个一个组件去修改成新的 API 容易遗漏或者全局替换出错。
//  * 因此可以在创建 eventBus.ts 的时候，通过自定义一个 eventBus 对象来挂载 mitt 的 API 。
//  * #####################################
//  * 使用方法：
//  * import eventBus from "./libs/eventBus";
//  * const app = createApp(App);
//  * app.config.globalProperties.$eventHub = eventBus; //全局eventbus

//  *
//  * **/
// import mitt from "mitt";
//
//
// // 初始化一个 mitt 实例
// const emitter = mitt();
// // 定义一个空对象用来承载我们的自定义方法
// const eventBus: any = {};
// eventBus.$on = emitter.on;
// eventBus.$emit = emitter.emit;
// eventBus.$off = emitter.off;
//
// export default eventBus;

/**
 * 方法二（更合适）：
 * 适用 app.config.globalProperties
 * 如：
 * import eventBus from "./libs/eventBus";
 * app.use(eventBus) //加载到app
 * 也适用 provide/inject,使用
 * import { inject } from 'vue';
 * const eventBus:any = inject("$eventBus")
 * eventBus.emit...
 */

// 作者:Jin
import mitt from "mitt";
import { App } from "vue";

const mittsBus = mitt();

interface ISEventBusOption {
  global: boolean;
  inject: boolean;
  globalPropertyName: string;
  injectName: string;
}

const defaultOptions: ISEventBusOption = {
  global: true,
  inject: true,
  globalPropertyName: "$eventBus", //注册全局的名字，可自定义
  injectName: "$eventBus", //同上
};

//扩展方法
const eventBus = {
  ...mittsBus,
  $emit: mittsBus.emit, //为了兼容vue2下使用$on、$off 这种写法
  $on: mittsBus.on,
  $off: mittsBus.off,
  install,
};

function install(app: App, options?: ISEventBusOption) {
  let opt = {
    ...defaultOptions,
    ...options,
  };
  if (opt.global) {
    app.config.globalProperties[opt.globalPropertyName] = eventBus;
  }
  if (opt.inject) {
    app.provide(opt.injectName, eventBus);
  }
  return eventBus;
}

export default eventBus;
export const bus = eventBus;
