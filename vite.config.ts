import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  return {
    base: "/",
    server: {
      host: "0.0.0.0",
      // proxy: {
      //   "/": {
      //     target: "http://localhost:8080", // 实际请求地址
      //     changeOrigin: true, // 是否跨域
      //     // rewrite: (path) => path.replace(/^\/mabc/, ""),
      //   },
      // },
    },
    // devServer: {
    //   // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    //   historyApiFallback: {
    //     index: "/index.html", //与output的publicPath
    //   },
    // },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@assets": resolve(__dirname, "src/assets"),
        "@public": resolve(__dirname, "public"),
      },
    },
    plugins: [
      vue(),
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          "pinia",
          // custom
          {
            axios: [
              // default imports
              ["default", "axios"], // import { default as axios } from 'axios',
            ],
          },
        ],
        // Auto import for module exports under directories
        // by default it only scan one level of modules under the directory
        // 本项目中的文件夹
        dirs: [
          "./src/hooks/**",
          "./src/utils/**",
          // './composables' // only root modules
          // './composables/**', // all nested modules
          // ...
        ],

        resolvers: [ElementPlusResolver()],
        //生成 `auto-import.d.ts` 全局声明
        dts: "src/types/auto-import.d.ts",
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            // prefix - 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
            // 此处我们配置成了 icon，即组件名以 icon 开头

            // collection - 图标集名
            // icon - 图标名
            //{prefix}-{collection}-{icon}
            prefix: "icon",
            // 标识自定义图标集，和 Icons({customCollections:{svg:...}}) 中的svg 对应
            customCollections: ["svg"],

            /**
             * enabledCollections: ["ep"],==> 开启导入 element plus 图标
             *  @iconify-json/ep 是 Element Plus 的图标库，所以 IconsResolver 配置了 enabledCollections: ['ep']
             * 注意：通过此方法自动引入后，使用icon时，请采用以下方式才生效。（添加i-eq作为icon前缀）
             * <el-icon :size="70" color="#409EFC" class="no-inherit">
             *     <i-ep-share />
             * </el-icon>
             */
            // enabledCollections: ["ep"],
          }),
        ],
        //生成 `auto-import-components.d.ts` 全局声明
        dts: "src/types/auto-import-components.d.ts",
      }),

      Icons({
        compiler: "vue3",
        //自动按需安装使用iconify 图标
        autoInstall: true,
        // 自定义图标加载
        customCollections: {
          // 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
          svg: FileSystemIconLoader("public/img/svg", (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
          // about图标集
          // about: FileSystemIconLoader("src/assets/svg/about", (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
        },
      }),
    ],
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          //打包移除 console.log 和 debugger
          drop_console: command === "build",
          drop_debugger: command === "build",
        },
      },
    },
  };
});
