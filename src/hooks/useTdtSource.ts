/**
 *
 * @param token 天地图 token 【必须设置一次】
 * @returns
 */
let tiandituToken: string | undefined;
export default (token?: string) => {
  token ?? (tiandituToken = token);
  if (tiandituToken) throw new Error("token未是指。天地图的token 是必须的！");

  //#region （cgcs200）
  const tianditu_img_c_source = {
    type: "raster",
    tiles: [0, 1, 2, 3, 4, 5, 6, 7].map((index) => `https://t${index}.tianditu.gov.cn/DataServer?T=img_c&x={x}&y={y}&l={z}&tk=${tiandituToken}`),
    tileSize: 256,
  };
  const tianditu_cia_c_source = {
    type: "raster",
    tiles: [0, 1, 2, 3, 4, 5, 6, 7].map((index) => `https://t${index}.tianditu.gov.cn/DataServer?T=cia_c&x={x}&y={y}&l={z}&tk=${tiandituToken}`),
    tileSize: 256,
  };
  const tianditu_vec_c_source = {
    type: "raster",
    tiles: [0, 1, 2, 3, 4, 5, 6, 7].map((index) => `https://t${index}.tianditu.gov.cn/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=${tiandituToken}`),
    tileSize: 256,
  };
  const tianditu_cva_c_source = {
    type: "raster",
    tiles: [0, 1, 2, 3, 4, 5, 6, 7].map((index) => `https://t${index}.tianditu.gov.cn/DataServer?T=cva_c&x={x}&y={y}&l={z}&tk=${tiandituToken}`),
    tileSize: 256,
  };
  //#endreion

  //#region web墨卡托
  const tianditu_img_w_source = {
    type: "raster",
    tiles: [0, 1, 2, 3, 4, 5, 6, 7].map((index) => `https://t${index}.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${tiandituToken}`),
    tileSize: 256,
  };
  const tianditu_cia_w_source = {
    type: "raster",
    tiles: [0, 1, 2, 3, 4, 5, 6, 7].map((index) => `https://t${index}.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${tiandituToken}`),
    tileSize: 256,
  };
  const tianditu_vec_w_source = {
    type: "raster",
    tiles: [0, 1, 2, 3, 4, 5, 6, 7].map((index) => `https://t${index}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=${tiandituToken}`),
    tileSize: 256,
  };
  const tianditu_cva_w_source = {
    type: "raster",
    tiles: [0, 1, 2, 3, 4, 5, 6, 7].map((index) => `https://t${index}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=${tiandituToken}`),
    tileSize: 256,
  };
  //#endregion

  return {
    tianditu_img_c_source,
    tianditu_cia_c_source,
    tianditu_vec_c_source,
    tianditu_cva_c_source,
    //
    tianditu_img_w_source,
    tianditu_cia_w_source,
    tianditu_vec_w_source,
    tianditu_cva_w_source,
  };
};
