<template>
  <div class="root-container" @mouseleave="bShow = false">
    <Transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
      <div class="items-container" v-if="bShow">
        <el-tooltip content="距离量算" placement="top" effect="dark">
          <div class="toolbar-item toolbar-item-hover" @click="handleMeasureLine">
            <!-- <img src="@assets/img/tools/measure_line.png" /> -->
            <el-icon size="30">
              <svg
                t="1683362951331"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="27419"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="32"
                height="32"
              >
                <path
                  d="M929.19 352.19c3.12 3.12 3.12 8.19 0 11.31L363.51 929.19c-3.12 3.12-8.19 3.12-11.31 0L94.81 671.81c-3.12-3.12-3.12-8.19 0-11.31L660.49 94.81c3.12-3.12 8.19-3.12 11.31 0l257.39 257.38z m-424.26 5.66l108.89 108.89c3.12 3.12 3.12 8.19 0 11.31l-36.77 36.77c-3.12 3.12-8.19 3.12-11.31 0L456.85 405.93l-50.91 50.91 62.23 62.23c3.12 3.12 3.12 8.19 0 11.31l-36.77 36.77c-3.12 3.12-8.19 3.12-11.31 0l-62.23-62.23-50.91 50.91 62.23 62.23c3.12 3.12 3.12 8.19 0 11.31l-36.77 36.77c-3.12 3.12-8.19 3.12-11.31 0l-62.23-62.23-62.23 62.23 161.22 161.22 469.52-469.52-161.23-161.21-62.23 62.23 62.23 62.23c3.12 3.12 3.12 8.19 0 11.31l-36.77 36.77c-3.12 3.12-8.19 3.12-11.31 0l-62.23-62.23-50.91 50.91z"
                  p-id="27420"
                ></path>
              </svg>
            </el-icon>
          </div>
        </el-tooltip>
        <el-tooltip content="面积量算" placement="top" effect="dark">
          <div class="toolbar-item toolbar-item-hover" @click="handleMeasureArea">
            <el-icon size="30">
              <svg
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="32"
                height="32"
              >
                <path
                  d="M497.92 560.192l-81.728 83.2-22.816-22.464 82.368-83.84-78.144-81.28-77.408 78.752-22.816-22.4 78.016-79.424-71.936-74.816-79.264 80.64-22.816-22.4 79.904-81.28L128 175.424V896h692.832l-140.832-146.464-71.808 73.024-22.816-22.4 72.416-73.696-71.936-74.848-73.664 74.944-22.816-22.4 74.304-75.616-65.728-68.352zM96 96l800 832H96V96z m159.424 485.056l191.04 186.912h-191.04v-186.912z m34.56 75.072V736h79.68l-79.68-79.872z"
                  p-id="22418"
                ></path>
              </svg>
            </el-icon>

            <!-- <img src="@assets/img/tools/measure_area.png" /> -->
          </div>
        </el-tooltip>
      </div>
    </Transition>
    <div class="toolbar-item" @click="handleActive">
      <el-icon size="30">
        <svg
          t="1683361822560"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="18470"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="32"
          height="32"
        >
          <path
            d="M397.842286 819.090286l501.357714-504.484572a100.132571 100.132571 0 0 0 0-140.964571L847.469714 121.6a98.614857 98.614857 0 0 0-140.086857 0L213.796571 618.294857a44.086857 44.086857 0 0 0-14.518857 14.628572l-1.828571 1.828571 0.566857 0.566857c-0.365714 0.713143-0.786286 1.389714-1.133714 2.121143l-104.228572 248.941714a37.961143 37.961143 0 0 0 8.082286 42.678857 37.504 37.504 0 0 0 26.459429 10.971429 38.070857 38.070857 0 0 0 16.054857-3.657143l238.811428-105.545143 0.768-0.365714a47.177143 47.177143 0 0 0 5.814857-3.382857l0.566858 0.566857 4.388571-4.425143a47.963429 47.963429 0 0 0 4.242286-4.132571zM743.917714 158.354286a47.232 47.232 0 0 1 67.035429 0l51.730286 52.041143a47.963429 47.963429 0 0 1 0 67.456l-25.746286 25.910857a25.782857 25.782857 0 0 0-5.193143-7.405715L775.314286 241.261714a25.691429 25.691429 0 0 0-36.571429 0.548572 26.093714 26.093714 0 0 0 0.530286 36.736l56.356571 55.094857a25.709714 25.709714 0 0 0 6.838857 4.681143l-409.6 412.251428-118.765714-119.497143zM153.325714 875.282286l83.894857-200.429715 112.786286 113.517715z m142.427429-412.891429a25.6 25.6 0 0 0 18.285714-7.606857 26.112 26.112 0 0 0 0-36.754286l-21.723428-21.851428a25.6 25.6 0 0 0 5.705142-4.077715l56.356572-55.094857a26.093714 26.093714 0 0 0 0.530286-36.736 25.709714 25.709714 0 0 0-36.571429-0.530285l-56.32 55.003428a25.453714 25.453714 0 0 0-4.571429 6.272L218.349714 321.828571l37.558857-36.717714a26.093714 26.093714 0 0 0 0.530286-36.754286 25.728 25.728 0 0 0-36.571428-0.530285l-38.052572 37.193143-35.675428-35.913143 118.857142-119.515429 167.094858 168.228572a25.728 25.728 0 0 0 36.571428 0 26.093714 26.093714 0 0 0 0-36.754286L292.571429 83.894857a41.142857 41.142857 0 0 0-58.715429 3.657143L73.142857 249.106286l204.342857 205.696a25.6 25.6 0 0 0 18.267429 7.606857z m644.443428 267.739429l-176.073142-177.188572a25.728 25.728 0 0 0-36.571429 0 26.093714 26.093714 0 0 0 0 36.754286l167.113143 168.228571-118.857143 119.515429-35.675429-35.913143 37.010286-38.4a26.093714 26.093714 0 0 0-0.530286-36.754286 25.709714 25.709714 0 0 0-36.571428 0.530286l-36.571429 37.796572-38.034285-38.528 53.723428-55.643429a26.112 26.112 0 0 0-0.530286-36.754286 25.691429 25.691429 0 0 0-36.571428 0.530286l-53.138286 55.113143-20.882286-21.010286a25.728 25.728 0 0 0-36.571428 0 26.112 26.112 0 0 0 0 36.754286L775.917714 950.857143l160.64-161.645714a48.64 48.64 0 0 0 13.641143-26.112 37.522286 37.522286 0 0 0-10.002286-32.969143z"
            p-id="18471"
          ></path>
        </svg>
      </el-icon>
      <!-- <img src="@assets/img/tools/measure.png" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
//@名称: 量算工具
//@作者: Jin
//@日期:
//@说明:

import { Map } from "@jindin/mapboxgl-mapex";
import { useMeasureLine, useMeasureArea } from "./measure";
import "./measure.css";
interface ISProps {
  map: Map;
}
const props = defineProps<ISProps>();

let bShow = ref(false);

const handleActive = () => {
  bShow.value = true;
};
const handleMeasureLine = () => {
  //距离量算
  useMeasureLine(props.map);
};

const handleMeasureArea = () => {
  //面积量算
  useMeasureArea(props.map);
};
</script>

<style scoped lang="less">
.root-container {
  display: flex;
  justify-content: flex-end;
  gap: 1px;
}
.items-container {
  display: flex;
  justify-content: flex-end;

  // gap: 1px;
}

.toolbar-item {
  width: 38px;
  height: 38px;
  cursor: pointer;
  background-color: var(--theme-color-70);
  border-radius: 0;
  border-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toolbar-item-hover {
  &:hover {
    background-color: #666666;
    // background-color: var(--theme-color-90);
    color: var(--theme-color-70);
    cursor: pointer;
  }
}
</style>
