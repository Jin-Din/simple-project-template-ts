<template>
  <div class="root-app">
    <div class="header">
      <div class="logo">
        <img class="logo-img" src="/img/jhlogo.png" />
        <div class="logo-title">基础地理信息一张图(演示)</div>
      </div>
      <!-- active-text-color="#ffd04b" -->
      <el-menu class="el-menu-demo" router mode="horizontal">
        <el-menu-item index="1">
          <template>
            <el-icon><icon-svg-checkin /></el-icon>
          </template>
          登记选址</el-menu-item
        >

        <el-sub-menu index="2">
          <template #title
            ><el-icon><icon-svg-law /></el-icon>行政执法</template
          >
          <el-menu-item index="21">
            <el-icon><icon-svg-navline /></el-icon>路径分析</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title
            ><el-icon><icon-svg-specialequipment /></el-icon>特种设备</template
          >
          <el-menu-item index="31"
            ><el-icon><icon-svg-pipeline /></el-icon>压力管道</el-menu-item
          >
          <el-menu-item index="32">
            <el-icon><icon-svg-lift /></el-icon>电梯查询</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><icon-svg-geoanalysis /></el-icon>空间分析</template
          >
          <el-menu-item index="41">
            <el-icon>
              <icon-svg-heatmap />
            </el-icon>
            企业分布
          </el-menu-item>
          <el-menu-item index="42"
            ><el-icon><icon-svg-floor /></el-icon>楼层控制</el-menu-item
          >
          <el-menu-item index="43">
            <el-icon><icon-svg-camera /></el-icon>明厨亮灶</el-menu-item
          >
        </el-sub-menu>

        <el-sub-menu index="5">
          <template #title
            ><el-icon><icon-svg-resource /></el-icon>资源管理</template
          >
          <el-menu-item index="51"
            ><el-icon><icon-svg-tree /></el-icon>图层目录</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
      <div class="user-login">
        <el-icon :size="32">
          <UserFilled />
        </el-icon>
        <span>管理员</span>
      </div>
    </div>
    <div class="main-container">
      <SBaseMap config="configs/map.json" @onMapLoaded="maploaded">
        <template #default="{ map, mapConfig }">
          <div class="right-bottom-panel-container">
            <div class="toolbar">
              <Measure :map="map"></Measure>
              <Navigation :map="mapRef"></Navigation>
            </div>
            <BaseMapSwitch :map="map" :mapConfig="mapConfig"></BaseMapSwitch>
          </div>
        </template>
      </SBaseMap>
      <!-- <div class="toolbar">
          <el-button-group style="display: flex; flex-direction: column">
            <el-tooltip content="清空临时层" placement="left" effect="dark">
              <el-button class="toolbar-item" plain @click="handleClearLayers"
                ><el-icon><Delete /></el-icon
              ></el-button>
            </el-tooltip>
            <el-tooltip content="地图放大" placement="left" effect="dark">
              <el-button class="toolbar-item" plain :disabled="zoomInDisabled" @click="zoomIn"
                ><el-icon><icon-svg-plus /></el-icon
              ></el-button>
            </el-tooltip>
            <el-tooltip content="地图放小" placement="left" effect="dark">
              <el-button class="toolbar-item" plain :disabled="zoomOutDisabled" @click="zoomOut"
                ><el-icon><icon-svg-minus /></el-icon
              ></el-button>
            </el-tooltip>
            <el-tooltip content="指北" placement="left" effect="dark">
              <el-button class="toolbar-item" plain @click="resetNorth"
                ><el-icon><icon-svg-north /></el-icon
              ></el-button>
            </el-tooltip>
            <el-tooltip content="全屏" placement="left" effect="dark">
              <el-button class="toolbar-item" plain @click="setFullExtent"
                ><el-icon><icon-svg-globe /></el-icon
              ></el-button>
            </el-tooltip>
          </el-button-group>
        </div> -->

      <RouterView v-if="bInited"></RouterView>
      <div class="top-right-panel" v-if="bInited"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SBaseMap from "@/components/SBaseMap.vue";
import type { Map } from "@jindin/mapboxgl-mapex";
import BaseMapSwitch from "@/components/BaseMapSwitch.vue";
import { usePubStore } from "@/store";
import useMapUtils from "@/utils/mapUtils";

let map: Map;
let mapRef = ref<Map>(null as unknown as Map);
// const bInited =ref(false)
let pubStore = usePubStore();
let input = ref("");
let keyword = ref("");

const bInited = computed(() => {
  return pubStore.map;
});

const mapUtils = useMapUtils(mapRef.value);

const maploaded = (mapInstance: Map) => {
  console.log("maploaded");
  // console.log(pubStore.map.getStyle().layers);
  map = mapInstance;
  mapRef.value = mapInstance;
  // bInited.value=true

  //初始化一些常用的图标
  ["green", "gray", "red", "blue", "orange", "yellow", "pink", "purple"].forEach((img) => {
    mapRef.value.loadImage(getImageUrl(`/img/marker/mapbox-marker-icon-20px-${img}.png`), (error, image: any) => {
      if (error) throw error;
      // Add the loaded image to the style's sprite with the ID 'kitten'.
      if (!mapRef.value.hasImage(`marker-${img}`)) mapRef.value.addImage(`marker-${img}`, image);
    });
  });
  // console.log(map.getStyle().layers);
};
</script>

<style scoped lang="less">
.root-app {
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #111b30;
}
.main-container {
  position: relative;
  flex: 1;
  background-image: url("@public/img/bg_black.jpg");
  /* background-color: var(--theme-color); */
}
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: var(--theme-color);
  color: #ffffff;
  // background-image: url("./assets/img/header-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .logo {
    display: flex;
    align-items: center;
    align-self: center;
    height: 70px;
    padding: 0 32px;
    background-image: url("@public/img/heade-title-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .logo-img {
      width: 60px;
      height: 60px;
    }

    .logo-title {
      margin-left: 18px;
      font-size: 1.6em;
      font-weight: 600;
      letter-spacing: 2px;
      margin-right: 12px;
    }
  }

  .el-menu-demo {
    flex: 1;
    background-color: transparent;
    --el-menu-item-font-size: 20px;
    --el-menu-active-color: #ffd04b;
    --el-menu-text-color: white;
    --el-menu-hover-bg-color: rgba(4, 47, 98, 0.2);
    --el-bg-color-overlay: rgba(4, 47, 98, 0.2);
    font-weight: 800;
  }

  .user-login {
    width: 100px;
    margin-left: auto;
    cursor: pointer;
    display: flex;
    align-self: stretch;
    align-items: center;
    padding: 0 10px;
    gap: 2px;

    &:hover {
      background-color: #ffffff48;
    }
  }
}
.cursor-bar {
  position: absolute;
  right: 10px;
  top: 100px;
}
.cursor-items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  background-color: #f1f1f1f1;
}
.cursor {
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid #666666;
  /* background-color: #eeeeee; */
  /* background-color: aquamarine; */
  /* background-image: url("/img/cursor/left_right.png"); */
}
.right-bottom-panel-container {
  position: absolute;
  right: 8px;
  bottom: 25px;
}

.top-right-panel {
  z-index: 9;
  position: absolute;
  right: 10px;
  top: 12px;
  max-height: calc(100% - 100px);
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 8px 8px;
  border-radius: 1px;
  background-color: var(--theme-color-90);
  // gap: 8px;
}
.top-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  // margin-bottom: 8px;
}
.nav-bar-item {
  border-style: solid;
  border-color: #666666;
  border-width: 1px 0px 1px 1px;
  padding: 4px;
  min-width: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--theme-color-90);
  }
  &:first-child {
    margin-left: 4px;
  }
  &:last-child {
    border-width: 1px 1px 1px 1px;
  }
}

.toolbar {
  position: absolute;
  right: 10px;
  bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
