<template>
  <div>
    <Transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
      <div class="location-container" v-if="bOpen">
        <div class="close" @click="handleShowPanel(false)">X</div>
        <div class="title-container">坐标定位</div>
        <div class="coord-item">
          <div class="item-label">经度:</div>

          <el-input class="item-input" v-model="coordX" type="number" clearable placeholder="请输入经度"> </el-input>
        </div>
        <div class="coord-item">
          <div class="item-label">纬度:</div>
          <el-input class="item-input" v-model="coordY" type="number" clearable placeholder="请输入纬度"> </el-input>
        </div>
        <div class="button-group">
          <el-button class="location-button" @click="handleLocationTo">定位</el-button>
        </div>
      </div>
    </Transition>
    <el-tooltip content="坐标定位" placement="left" effect="dark">
      <el-button class="location-item" plain @click="handleShowPanel(true)">
        <el-icon size="30" color="white">
          <svg
            t="1685440681248"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3057"
            width="48"
            height="48"
          >
            <path
              d="M512 902.4a390.4 390.4 0 1 1 0-780.8 390.4 390.4 0 0 1 0 780.8z m0-64a326.4 326.4 0 1 0 0-652.8 326.4 326.4 0 0 0 0 652.8z"
              fill="#ffffff"
              p-id="3058"
            ></path>
            <path d="M870.4 544a32 32 0 1 1 0-64h102.4a32 32 0 1 1 0 64h-102.4z" fill="#ffffff" p-id="3059"></path>
            <path d="M512 512m-204.8 0a204.8 204.8 0 1 0 409.6 0 204.8 204.8 0 1 0-409.6 0Z" fill="#ffffff" p-id="3060"></path>
            <path
              d="M544 153.6a32 32 0 1 1-64 0V51.2a32 32 0 1 1 64 0v102.4zM480 870.4a32 32 0 1 1 64 0v102.4a32 32 0 1 1-64 0v-102.4zM153.6 480a32 32 0 1 1 0 64H51.2a32 32 0 1 1 0-64h102.4z"
              fill="#ffffff"
              p-id="3061"
            ></path>
          </svg>
        </el-icon>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
//@名称:
//@作者: Jin
//@日期:
//@说明:

import mapboxgl, { Map } from "@jindin/mapboxgl-mapex";

interface ISCoordinate {
  center: [number, number];
  pitch: number;
  zoom: number;
  bearing: number;
}

interface ISProps {
  map: Map;
}
const bOpen = ref(false);
const props = defineProps<ISProps>();

let coordX = ref(0);
let coordY = ref(0);

const marker1 = new mapboxgl.Marker({
  color: "red",
});
onMounted(async () => {});

const handleShowPanel = (bshow: boolean) => {
  bOpen.value = bshow;

  !bshow && clearMarker();
};
const clearMarker = () => {
  if (marker1) marker1.remove();
};
const handleLocationTo = () => {
  props.map.flyTo({
    center: [coordX.value, coordY.value],
    zoom: 12,
  });

  //添加闪烁点
  if (marker1) marker1.setLngLat([coordX.value, coordY.value]).addTo(props.map);
};
</script>

<style scoped lang="less">
.root-location {
  position: relative;
  display: flex;
}
.location-item {
  width: 38px;
  height: 38px;
  // cursor: pointer;
  background-color: var(--theme-color);
  border-radius: 0;
  border-width: 0;
  // border-style: solid;
  // border-color: #666666;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  &:hover {
    background-color: #666666;
  }
  // &:last-child {
  //   border-bottom-width: 1px;
  // }
}
.location-container {
  position: absolute;
  width: 350px;
  right: 56px;
  background-color: rgba(2, 53, 36, 0.649);
  padding: 4px;
  .title-container {
    display: flex;
    align-items: center;
    margin: 8px;
    font-weight: 700;
    font-size: 1.1em;
  }
  .close {
    position: absolute;
    cursor: pointer;
    right: 0px;
    top: 0px;
    width: 24px;
    height: 24px;
    background-color: rgba(2, 53, 36, 0.349);
    text-align: center;
  }
  .coord-item {
    display: flex;
    align-items: center;
    margin: 10px;
    .item-label {
      font-weight: 600;
      width: 60px;
    }
  }
  .button-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
    .location-button {
      width: 120px;
    }
  }
}
</style>
