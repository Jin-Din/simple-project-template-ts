import { defineStore } from "pinia";

export interface ISRouterQueryInfo {
  hash: string;
  query: {};
}
export interface ISRouterQuery {
  info: ISRouterQueryInfo;
  isThirdPart: boolean;
  pac: string;
}
/**
 * 路由存储
 */
export const useRouterConfStore = defineStore("routerConf", {
  state: () => {
    const curRouterQuery = {
      info: {
        hash: "",
        query: {},
      },
      isThirdPart: false,
      pac: "",
    } as ISRouterQuery;
    // const curRouterQuery = routerQuery;
    const clientWidth = document.body.clientWidth;
    const clientHeight = document.body.clientHeight;
    return {
      curRouterQuery,
      clientWidth,
      clientHeight,
    };
  },
  actions: {
    // changeCurRouterQuery(routerQuery: ISRouterQuery) {
    //   this.curRouterQuery = routerQuery;
    // },
    // changeWindowSize(clientWidth: number, clientHeight: number) {
    //   this.clientWidth = clientWidth;
    //   this.clientHeight = clientHeight;
    // }
  },
  persist: {
    enabled: true,
    strategies: [
      // {
      //   //指定paths中的属性使用localStorage 方式存储
      //   storage: localStorage,
      //   paths: ["Token"],
      // },
      {
        //指定paths中的数据使用sessionStorage 方式存储
        key: "router_conf",
        storage: window.sessionStorage,
        // storage: sessionStorage,
        // paths: ["UserName", "Name", "Tel"],
      },
    ],
  },
  // persist: {
  //   key: "router_conf",
  //   storage: window.sessionStorage,
  // },
});
