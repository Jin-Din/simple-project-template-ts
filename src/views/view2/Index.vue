<template>
  <div class="root-app">
    <div class="header">
      <div class="logo-title">基础地理信息一张图(演示)</div>
    </div>
    <div class="main-container">
      <SBaseMap config="configs/map.json" @onMapLoaded="maploaded">
        <template #right-bottom="{ map, mapConfig }">
          <div class="right-bottom-panel-container">
            <div class="toolbar">
              <Measure :map="map"></Measure>
              <Navigation :map="mapRef"></Navigation>
            </div>
            <BaseMapSwitch :map="map" :mapConfig="mapConfig"></BaseMapSwitch>
          </div>
        </template>
      </SBaseMap>

      <RouterView v-if="bMapInited"></RouterView>
    </div>

    <!--左侧面板-->
    <Transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft">
      <!---->
      <div class="panel left-panel" v-if="bMapInited">
        <AChart class="panel-item" />
        <EChart class="panel-item" />
        <DChart class="panel-item" />
        <IChart class="panel-item" />
      </div>
    </Transition>
    <!--右侧面板-->
    <Transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
      <div class="panel right-panel" v-if="bMapInited">
        <CChart class="panel-item" />
        <KChart class="panel-item" />
        <FChart class="panel-item" />
        <LChart class="panel-item" />
      </div>
    </Transition>
    <!--底部面板-->
    <Transition enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOutDown">
      <div class="bottom-panel" v-if="bMapInited">
        <BChart class="panel-item-height-100" />
        <HChart class="panel-item-height-100" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import "animate.css";
import SBaseMap from "@/components/SBaseMap.vue";
import type { Map } from "@jindin/mapboxgl-mapex";
import BaseMapSwitch from "@/components/BaseMapSwitch.vue";

import { usePubStore } from "@/store";

let map: Map;
let mapRef = ref<Map>(null as unknown as Map);
let pubStore = usePubStore();

const bMapInited = computed(() => {
  return pubStore.map;
});

const maploaded = (mapInstance: Map) => {
  map = mapInstance;
  mapRef.value = mapInstance;
  pubStore.map = map;
};
</script>

<style scoped lang="less">
.root-app {
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url("@public/img/map_bg_2.jpg");
  display: grid;
  grid-template-columns: 0.22fr 0.56fr 0.22fr;
  grid-template-rows: 0.75fr 0.25fr;
}
.main-container {
  grid-row: 1/2;
  grid-column: 2/3;
}
.header {
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 2;
  color: #ffffff;
  background-image: url("@assets/img/header/header_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  .logo-title {
    margin-top: 18px;
    font-size: 2.6em;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .el-menu-demo {
    flex: 1;
    background-color: transparent;
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

.panel {
  position: relative;
  // width: 24%;
  // bottom: 35px;
  top: 72px;
  overflow: auto;
  .panel-item {
    height: calc((100% - 70px) / 3);
    // display: flex;
    // flex-direction: column;
    // justify-content: space-evenly;
    // align-content: stretch;
  }
}
.left-panel {
  grid-row: 1/3;
  grid-column: 1/2;
  // left: 10px;
  background: #08517851; /* #08517851 fallback for old browsers */
  background: -webkit-linear-gradient(to right, #002f5e, #08517851); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #002f5e, #08517851); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.right-panel {
  grid-row: 1/3;
  grid-column: 3/4;
  // right: 58px;
  background: #08517851; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #002f5e, #08517851); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #002f5e, #08517851); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.top-center {
  position: absolute;
  left: 25%;
  right: calc(25% + 50px);
  top: 100px;

  // gap: 20px;
  display: flex;
  // gap: 2px 2px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.bottom-panel {
  grid-row: 2/3;
  grid-column: 2/3;

  overflow: hidden;
  display: flex;
  height: 100%;
  background: #08517851; /* 08517851 fallback for old browsers */
  background: -webkit-linear-gradient(to right, #002f5e, #08517851); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #002f5e, #08517851);
  .panel-item-height-100 {
    height: 100%;
  }
}

.right-bottom-panel-container {
  position: absolute;
  right: 8px;
  bottom: 5px;
  .toolbar {
    // position: absolute;
    // right: 10px;
    // bottom: 110px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
