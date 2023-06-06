import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "首页",
    redirect: "/3",
  },
  {
    path: "/1",
    name: "首页1",
    component: () => import("@/views/view1/Index.vue"),
  },
  {
    path: "/2",
    name: "首页2",
    component: () => import("@/views/view2/Index.vue"),
  },
  {
    path: "/3",
    name: "首页3",
    component: () => import("@/views/view3/Index.vue"),
  },
];

export default routes;
