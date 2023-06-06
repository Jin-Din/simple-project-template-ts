//图片路径转换，代替require
/**
 * 动态引入public目录下的图片。可用于 <img :src='图片地址'/> 这种方式
 * @param path 图片地址，如果是production环境，会在地址前加入import.meta.env.BASE_URL
 * @returns {*|string} 返回地址
 */
export const getImageUrl = (path: string): any | string => {
  // const env = process.env.NODE_ENV;
  // if (env === "production")
  if (import.meta.env.PROD) {
    //正式环境，地址加入前缀
    //判断是否是json且以'/' 开头，则去掉 '/'  --- 记得下次验证一下
    // path = `${import.meta.env.BASE_URL}${path.endsWith(".json") && path.startsWith("/") ? path.slice(path.indexOf("/") + 1) : path}`;
  }
  //不管正式环境还是开发环境，地址
  path = `${import.meta.env.BASE_URL}${path.startsWith("/") ? path.slice(path.indexOf("/") + 1) : path}`;
  return new URL(path, import.meta.url).href;
};
export const getUrl = (path: string): string => {
  // const env = process.env.NODE_ENV;
  // if (env === "production")
  if (import.meta.env.PROD) {
    //正式环境，地址加入前缀
    //判断是否是json且以'/' 开头，则去掉 '/'  --- 记得下次验证一下
    // path = `${import.meta.env.BASE_URL}${path.endsWith(".json") && path.startsWith("/") ? path.slice(path.indexOf("/") + 1) : path}`;
  }
  //不管正式环境还是开发环境，地址
  path = `${import.meta.env.BASE_URL}${path.startsWith("/") ? path.slice(path.indexOf("/") + 1) : path}`;
  // console.log(path);

  return new URL(path, import.meta.url).href;
};

export const formatPac = (pac: string): string => {
  return pac.replace(/(0+)\b/gi, ""); //去掉 后面 多个 0
};
