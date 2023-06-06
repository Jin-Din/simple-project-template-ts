//video.js
import videojs from "video.js";
import VueVideoPlayer from "@videojs-player/vue"; //video.js vue 版本
import "video.js/dist/video-js.css";

//npm 安装
// npm install video.js @videojs-player/vue --save
//使用
//  <video-player></video-player>

export default (app) => {
  app.use(VueVideoPlayer);
};
