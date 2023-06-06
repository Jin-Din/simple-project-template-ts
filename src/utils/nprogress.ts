import NProgress from "nprogress";

// 打开进度条
export const start = () => {
  NProgress.start();
};
// 关闭进度条
export const close = () => {
  NProgress.done();
};
