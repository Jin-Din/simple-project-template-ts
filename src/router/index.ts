import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { start, close } from "@/utils/nprogress"; //路由切换进度条
import { usePubStore, useRouterConfStore } from "@/store";
import { isEqual } from "lodash-es";
declare module "vue-router" {
  interface RouteMeta {
    requireAuth?: boolean;
  }
}
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

//beforeEach路由切换之前触发
router.beforeEach((to, from, next) => {
  start(); //开始进度条

  // 记录路由存储，可以解决路由History模式下页面刷新404的问题。
  // const confStore = useRouterConfStore();
  // const { curRouterQuery } = storeToRefs(confStore);
  // const { query } = curRouterQuery.value.info;

  // if (isEqual(query, to.query)) {
  //   next();
  // } else {
  //   next({
  //     path: to.path,
  //     query,
  //   });
  // }
  next();
});

//afterEach路由切换之后触发
router.afterEach(() => {
  close(); //结束进度条
});

export default router;
