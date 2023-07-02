//如果在html中已引入，则可注释掉
// import "mapbox-gl/dist/mapbox-gl.css"

//自定义的mapbox样式
import "@assets/css/mapbox.css";

const { mapboxgl } = window; //在script 中引入 mapbox js 文件，
mapboxgl.workerCount = 6; //开启多核模式，加快地图渲染速度
mapboxgl.maxParallelImageRequests = 32; //获取或者设置并行加载图片（raster tiles, sprites, icons等）的最大值， 该值将影响加载较多栅格瓦片的地图的性能。默认值为16
mapboxgl.accessToken = "pk.eyJ1Ijoib25lZ2lzZXIiLCJhIjoiY2plZHptcnVuMW5tazMzcWVteHM2aGFsZiJ9.ERWP7zZ-N6fmNl3cRocJ1g";

export default () => {};
