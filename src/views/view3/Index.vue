<template>
  <div class="root-app">
    <div class="top-bar">
      <div class="logo">
        <!-- <img class="logo-img" src="/img/jhlogo.png" /> -->
        <div class="logo-title"></div>
      </div>
      <div class="nav-bar">
        <RouterLink to="/nj" class="nav-item" :class="{ active: path === '/nj' }">农业机械</RouterLink>
        <RouterLink to="/zz" class="nav-item" :class="{ active: path === '/zz' }">种植业</RouterLink>
        <RouterLink to="/xm" class="nav-item" :class="{ active: path === '/xm' }">畜牧业</RouterLink>
        <RouterLink to="/ncp" class="nav-item" :class="{ active: path === '/ncp' }">农产品追溯</RouterLink>
      </div>
      <div class="top-bar-right">
        <div class="user-login">
          <el-icon :size="24" color="#666">
            <HomeFilled />
          </el-icon>
          <span>导航页</span>
        </div>
        <div class="user-login">
          <el-icon :size="24" color="#666">
            <UserFilled />
          </el-icon>
          <span>管理员</span>
        </div>
      </div>
    </div>
    <SBaseMap config="configs/map3857.json" @onMapLoaded="maploaded">
      <template #right-bottom="{ map, mapConfig }">
        <div class="right-bottom-panel-container">
          <div class="toolbar">
            <SMapScene :map="map"></SMapScene>
            <SMapLocation :map="map"></SMapLocation>
            <Measure :map="map"></Measure>
            <Navigation :map="mapRef"></Navigation>
          </div>
          <BaseMapSwitch :map="map" :mapConfig="mapConfig"></BaseMapSwitch>
        </div>
      </template>
    </SBaseMap>
    <!-- <div class="mask"></div> -->
    <!--转圈动画-->
    <!-- <div class="circle-img"></div> -->
    <router-view class="content"></router-view>
  </div>
</template>

<script setup lang="ts">
//@名称: 首页入口
//@作者:Jin
//@日期:
//@说明:
import { useRoute } from "vue-router";
import { UserFilled, HomeFilled } from "@element-plus/icons-vue";
import { usePubStore } from "@/store";
import type { Map } from "@jindin/mapboxgl-mapex";
import SBaseMap from "@/components/SBaseMap.vue";

// import useTdtSource from "@/hooks/useTdtSource";
// import { tdtLayer, tdtImageLayer } from "@/libs/tdtLayer";

onMounted(async () => {});

let path = ref("");
const route = useRoute();
const pubStore = usePubStore();

let map: Map;
let mapRef = ref<Map>(null as unknown as Map);

const bMapInited = computed(() => {
  return pubStore.map;
});

const maploaded = (mapInstance: Map) => {
  map = mapInstance;
  mapRef.value = mapInstance;
  // const tdtlayer = new tdtLayer();
  // console.log("add tdt custom source");

  // map.addSource(tdtImageLayer.id, tdtImageLayer);
};
</script>

<style scoped lang="less">
.root-app {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-rows: auto 1fr;

  .mask {
    position: absolute;
    pointer-events: none;
    background-image: url("@assets/img/mapbg_marker.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .circle-img {
    position: absolute;
    left: calc(50% - 459px);
    top: 50px;
    width: 918px;
    height: 918px;
    background-image: url("@assets/img/circle.png");
    background-size: 100% 100%;
  }

  @keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  .circle-img {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    animation: rotation 60s linear infinite;
    -moz-animation: rotation 60s linear infinite;
    -webkit-animation: rotation 60s linear infinite;
    -o-animation: rotation 60s linear infinite;
  }
  .link {
    font-size: 1.12em;
    font-weight: 600;
    color: black;
    text-align: center;
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }

  .top-bar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // background-color: var(--theme-color);

    // color: #ffffff;
    // background-image: url("@/assets/img/header-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // border-bottom: 4px solid var(--theme-color);
    box-shadow: 0 5px 8px #bbbbbb;
    z-index: 9;
    .logo {
      display: flex;
      align-items: center;
      align-self: center;
      height: 80px;
      padding: 0 32px;
      // background-image: url("./assets/img/heade-title-bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .logo-img {
        width: 60px;
        height: 60px;
      }

      .logo-title {
        margin-left: 0px;
        width: 494px;
        height: 80px;
        background-image: url("@assets/img/title.png");
        background-size: 100% 100%;
      }
    }

    .el-menu-demo {
      flex: 1;
      background-color: transparent;
      justify-content: center;
      margin-right: 20px;
      display: none;
    }
    .nav-bar {
      flex: 1;
      background-color: transparent;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: stretch;
      gap: 20px;

      .nav-item {
        text-decoration: none;
        color: black;
        font-weight: 700;

        display: flex;
        align-items: center;
        font-size: 18px;
        padding: 18px 24px;
        &:hover {
          cursor: pointer;
          color: #31b6b6;
          background-color: #31b6b60e;
        }
        &.active {
          cursor: pointer;
          border-bottom: 3px solid #31b6b6;
          background-color: rgba(255, 255, 255, 0.425);
          color: #31b6b6;
        }
      }
    }
    .top-bar-right {
      height: 100%;
      margin-left: auto;
      cursor: pointer;
      display: flex;
      justify-content: center;
      // align-items: center;
      padding: 0 10px;
      gap: 2px;

      .user-login {
        color: #666;
        font-weight: 600;

        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px 10px;
        gap: 2px;

        &:hover {
          background-color: #ecf5ff;
          // text-decoration: underline;
          color: #31b6b6;
        }
      }
    }
  }
}
.mapboxgl-popup-close-button {
  padding: 3px;
  font-size: 20px;
}
.toolbar {
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

// :deep(.el-sub-menu__title) {
//   font-size: 1.12em;
//   font-weight: 600;
// }
:deep(.el-menu-item) {
  font-size: 18px;
  font-weight: 600;
}
:deep(.el-menu--horizontal) {
  font-size: 1.02em;
  font-weight: 600;
  border-bottom: 0;

  .el-menu-item.is-active {
    background-color: rgba(255, 255, 255, 0.9);
    // border-bottom: 3px;
  }
}
</style>
