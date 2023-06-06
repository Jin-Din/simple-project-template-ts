/**
 * 未完成(Jin)
 */
import mapboxgl, { CustomLayerInterface } from "mapbox-gl";

interface ITdtOption {
  token: string;
  tdtType?: string;
  sourceId?: string;
}

export class tdtLayer implements mapboxgl.CustomSourceInterface<HTMLImageElement> {
  id: string = "tdt_custom_source";
  type: "custom" = "custom";
  dataType: "raster" = "raster";
  _option: ITdtOption = {
    token: "48ad25d128061c24f00559d481310004",
  };
  _layerId: string = "";
  tileSize: number = 256;
  constructor(option?: ITdtOption) {
    this._option = { ...this._option, ...(option ?? {}) };
    this._layerId = this.id + "_" + new Date().getTime();
  }
  // minzoom?: number | undefined;
  // maxzoom?: number | undefined;
  // scheme?: string | undefined;
  // tileSize?: number | undefined;
  // attribution?: string | undefined;
  // bounds?: [number, number, number, number] | undefined;
  // hasTile?: ((tileID: { z: number; x: number; y: number; }) => boolean) | undefined;
  // prepareTile?: ((tileID: { z: number; x: number; y: number; }) => HTMLImageElement | undefined) | undefined;
  // unloadTile?: ((tileID: { z: number; x: number; y: number; }) => void) | undefined;

  // onRemove?: ((map: mapboxgl.Map) => void) | undefined;
  async loadTile(tileID: { z: number; x: number; y: number }, options: { signal: AbortSignal }) {
    let { z, x, y } = tileID;
    let index = 0;
    let url = `https://t${index}.tianditu.gov.cn/DataServer?T=img_c&x=${x}&y=${y}&l=${z}&tk=${this._option.token}`;

    let [error, result] = await useTryCatchPromise(
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.onerror = (err) => {
          //无效图片
          let errorImg = new Image();
          errorImg.src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAACyUlEQVRIiY2VzWoUQRDHf9U7+cIsahIj0ajgwaNi1JNHSRQ3ePMk+AyKd30BQfQFFDzrRWOMJBdBEEUEPQVMiHgQjWA2Jtns7E63dM/MTs/MJqSgpqq7q/9V1VU9LSzNHwPuAdPACPANeAI8AJp4NHbk0r6K4VwkHAcGgPWKYTESvgKRtayY2D6SWLdSWJpbdeACWANxHzt4B1LDUHe7BKpjUzd7NP2U6Rcw21KEgzqLrKViGSCtkRSkI+NoLgLzCJPAmp3fiOjvNRBK3omBwwI1ImY2IOwsRLFQSBvHtPIy5vNIewHVHrJjY6M0OOkzsX7IaKaNpq+4rpCQmFuebJLNhxMQzkM4TALoMvVlxiNoamj6/HmVATYL4Ln5s0hzgfZ61W2MEoCo5MR31O85CQvg210cOT5D4+Vtonp1RydRd0dxJqpZyCTRlcd2TP0ozee3MGGvAzQJcMr+WDNMxFUiApUBbntyOwbG404wa+O0Zy97YN0ySXWb0enAgZpCCztdg6hOj+banJULaF7k+rjQ1p09cDJAGomBJBexCxUBaB1wkXYucAnY3zMYxIVODSTJVfxLmSgqkfaiVNec2d5oI0A1ysdlCtFL4cjapz6kt7l0ZMVsDMvxcaWRlzYZEMl0S/rgd7ZuvNlTJobfCF+8mqSkssI7w7RWCvT+H6zfeUQ0EHZOcedM/gCvbd5xTXax9AL4zN/7T2mNbnbNOk/WwUz6VATIVmFdZVlk9AmYpDl6vVschfFq4iBM15Ka7EofgSn3u9f5BizdH1sDeOUceA0UBDknpSzeA1faUA/s4SYdXKpFTLbIsQO/OzUE49Kw3keVgZ5kVrubHr1VpnJNS1RvUXErKxob0UAHJJM/EeYwiYN8LQmGZHNCGbmLUNNi7Cu5rI08VmIe2l+0fc5sFomTZ8AEcALjnuF/wCLGvfE6l2GqA/8Bnpdx0cUesngAAAAASUVORK5CYII=";
          reject(errorImg);
        };
        img.src = url;
      })
    );

    console.log(result);

    return result ?? error;
  }
  onAdd(map: mapboxgl.Map) {
    map.addLayer({
      id: this._layerId,
      type: "raster",
      source: this.id,
    });
  }
  onRemove(map: mapboxgl.Map) {
    map.getLayer(this._layerId) && map.removeLayer(this._layerId);
  }
}

type tdtCustomSource = mapboxgl.CustomSourceInterface<HTMLImageElement> & {
  token: string;
  layerId: string;
};
export const tdtImageLayer: tdtCustomSource = {
  id: "tdt_custom_img_source",
  type: "custom",
  dataType: "raster",
  tileSize: 256,
  token: "48ad25d128061c24f00559d481310004",
  layerId: "tdt_custom_img_source_layer",
  loadTile: async function (tileID: { z: number; x: number; y: number }, options: { signal: AbortSignal }) {
    let _self = this;
    let { z, x, y } = tileID;
    let index = 0;
    let url = `https://t${index}.tianditu.gov.cn/DataServer?T=img_c&x=${x}&y=${y}&l=${z}&tk=${_self.token}`;
    let [error, result] = await useTryCatchPromise(
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.onerror = (err) => {
          //无效图片
          let errorImg = new Image();
          errorImg.src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAACyUlEQVRIiY2VzWoUQRDHf9U7+cIsahIj0ajgwaNi1JNHSRQ3ePMk+AyKd30BQfQFFDzrRWOMJBdBEEUEPQVMiHgQjWA2Jtns7E63dM/MTs/MJqSgpqq7q/9V1VU9LSzNHwPuAdPACPANeAI8AJp4NHbk0r6K4VwkHAcGgPWKYTESvgKRtayY2D6SWLdSWJpbdeACWANxHzt4B1LDUHe7BKpjUzd7NP2U6Rcw21KEgzqLrKViGSCtkRSkI+NoLgLzCJPAmp3fiOjvNRBK3omBwwI1ImY2IOwsRLFQSBvHtPIy5vNIewHVHrJjY6M0OOkzsX7IaKaNpq+4rpCQmFuebJLNhxMQzkM4TALoMvVlxiNoamj6/HmVATYL4Ln5s0hzgfZ61W2MEoCo5MR31O85CQvg210cOT5D4+Vtonp1RydRd0dxJqpZyCTRlcd2TP0ozee3MGGvAzQJcMr+WDNMxFUiApUBbntyOwbG404wa+O0Zy97YN0ySXWb0enAgZpCCztdg6hOj+banJULaF7k+rjQ1p09cDJAGomBJBexCxUBaB1wkXYucAnY3zMYxIVODSTJVfxLmSgqkfaiVNec2d5oI0A1ysdlCtFL4cjapz6kt7l0ZMVsDMvxcaWRlzYZEMl0S/rgd7ZuvNlTJobfCF+8mqSkssI7w7RWCvT+H6zfeUQ0EHZOcedM/gCvbd5xTXax9AL4zN/7T2mNbnbNOk/WwUz6VATIVmFdZVlk9AmYpDl6vVschfFq4iBM15Ka7EofgSn3u9f5BizdH1sDeOUceA0UBDknpSzeA1faUA/s4SYdXKpFTLbIsQO/OzUE49Kw3keVgZ5kVrubHr1VpnJNS1RvUXErKxob0UAHJJM/EeYwiYN8LQmGZHNCGbmLUNNi7Cu5rI08VmIe2l+0fc5sFomTZ8AEcALjnuF/wCLGvfE6l2GqA/8Bnpdx0cUesngAAAAASUVORK5CYII=";
          reject(errorImg);
        };
        img.src = url;
      })
    );

    console.log(result);

    return result ?? error;
  },
  onAdd: function (map: mapboxgl.Map) {
    let _self = this;
    map.addLayer({
      id: _self.layerId,
      type: "raster",
      source: this.id,
    });
  },
  onRemove: function (map: mapboxgl.Map) {
    let _self = this;
    map.getLayer(_self.layerId) && map.removeLayer(_self.layerId);
  },
};

// export default tdtLayer;
