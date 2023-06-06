<template>
  <STitleContentPanel>
    <template #title
      ><div class="title-container">
        <div class="title">IChart</div>

        <!-- <div class="title-map" @click="handleItemClick">
          <el-icon color="#099a6c"><LocationInformation /></el-icon>
          地图
        </div> -->
        <!-- <el-button style="float: right" @click="handleItemClick">地图</el-button> -->
      </div>
    </template>
    <div class="chart-container">
      <SChart class="chart" :chartOptions="option"> </SChart>
      <div class="nj-info">
        <div class="info-value">{{ totalData.value }}</div>
        <div class="info-name">{{ totalData.name }}</div>
      </div>
      <div class="nj-info">
        <div class="info-value">{{ offlineData.value }}</div>
        <div class="info-name">{{ offlineData.name }}</div>
      </div>
      <div class="nj-info">
        <div class="info-value">{{ classData.value }}</div>
        <div class="info-name">{{ classData.name }}</div>
      </div>
      <div class="nj-info">
        <div class="info-value">{{ onlineData.value }}</div>
        <div class="info-name">{{ onlineData.name }}</div>
      </div>
    </div>
  </STitleContentPanel>
</template>

<script setup lang="ts">
//@名称:农机作业监测
//@作者:
//@日期:
//@说明:
import STitleContentPanel from "@/components/STitleContentPanel.vue";
import { LocationInformation } from "@element-plus/icons-vue";
import { ref } from "vue";
import * as echarts from "echarts";
import { EChartsOption } from "echarts";

interface ISEmit {
  (e: "onActive", info: { id: string; label: string }): void;
}
//设置当前组件的id，用于
const componentName = "nongjizuoye";
const props = defineProps({
  map: {
    type: Object,
  },
  activeId: {
    type: String,
    default: "nongjizuoye", //由父组件传入
  },
});
const emits = defineEmits<ISEmit>();
interface ISChartDataValue {
  name: string;
  value: number;
  itemStyle?: any;
}

let option = ref({} as EChartsOption);
onMounted(() => {
  option.value = getOption();

  //地图上加载点位
  // showMachines();
});

let formatNumber = function (num: number) {
  let reg = /(?=(\B)(\d{3})+$)/g;
  return num.toString().replace(reg, ",");
};
let onlineData: ISChartDataValue = {
  name: "在线设备",
  value: 934,
  itemStyle: {
    color: "#00CAFF",
  },
};
let offlineData: ISChartDataValue = {
  name: "离线设备",
  value: 311,
  itemStyle: {
    color: "gray",
  },
};
let totalData: ISChartDataValue = {
  name: "农业机械总数",
  value: 1245,
  itemStyle: {
    color: "#9689FF",
  },
};
let classData: ISChartDataValue = {
  name: "机械种类",
  value: 8,
  itemStyle: {
    color: "#FDE056",
  },
};
//拉取数据
let echartData = ref<ISChartDataValue[]>([offlineData, onlineData]);

// const total = computed(() => {
//   return echartData.value.reduce((a: number, b: any) => {
//     return a + b.value * 1;
//   }, 0);
// });
const getOption = (): EChartsOption => {
  let ratio = ((onlineData.value / totalData.value) * 100).toFixed(1);
  let title = "在线率";
  let color = ["#2A8BFD", "#BAFF7F", "#00FAC1", "#00CAFF", "#FDE056", "#4ED33C", "#FF8A26", "#FF5252", "#9689FF"];

  return {
    // color: color,
    title: [
      {
        text: "\n{val|" + ratio + "%}\n{name|" + title + "}",
        top: "30%",
        left: "center",
        textStyle: {
          rich: {
            name: {
              fontSize: 18,
              fontWeight: "bold",
              padding: [4, 0],
            },
            val: {
              fontSize: 22,
              fontWeight: 600,

              padding: [0, 0],
            },
          },
        },
      },
    ],
    legend: {
      show: false,
      top: "4",
      left: "4",
      orient: "vertical",
      icon: "circle",
      itemHeight: 15,
      itemWidth: 28,
      textStyle: {
        // color: "#fff",
        // fontSize: 15,
      },
    },
    series: [
      {
        type: "pie",
        itemStyle: totalData.itemStyle,
        radius: ["85%", "90%"],
        center: ["50%", "50%"],
        data: [totalData],
        labelLine: {
          length: 10,
          length2: 10,
          lineStyle: {},
        },
        label: {
          show: false,
          formatter: (params: any) => {
            return "{name|" + params.name + "}\n{value|" + formatNumber(params.value) + "个}";
          },
          // padding: [0 , -100, 25, -100],
          rich: {
            icon: {
              fontSize: 15,
              color: "inherit",
            },
            name: {
              fontSize: 15,
              padding: [0, 0, 0, 10],
            },
            value: {
              fontSize: 15,
              fontWeight: 600,
              padding: [10, 0, 0, 20],
              // color: 'inherit'
            },
          },
        },
      },
      {
        type: "pie",
        // roseType: "radius",
        radius: ["45%", "80%"],
        center: ["50%", "50%"],
        data: echartData.value,
        // hoverAnimation: false,
        itemStyle: {
          // borderColor: bgColor,
          borderWidth: 2,
        },
        labelLine: {
          length: 10,
          length2: 10,
          lineStyle: {},
        },
        label: {
          show: false,
          formatter: (params: any) => {
            return "{name|" + params.name + "}\n{value|" + formatNumber(params.value) + "个}";
          },
          // padding: [0 , -100, 25, -100],
          rich: {
            icon: {
              fontSize: 15,
              color: "inherit",
            },
            name: {
              fontSize: 15,
              padding: [0, 0, 0, 10],
            },
            value: {
              fontSize: 15,
              fontWeight: 600,
              padding: [10, 0, 0, 20],
              // color: 'inherit'
            },
          },
        },
      },
    ],
  };
};

const handleItemClick = () => {
  emits("onActive", { id: componentName, label: "农机作业监督" });
};
</script>

<style scoped lang="less">
.title-container {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 4px;
  .title-icon {
    width: 4px;
    background-color: #19a075;
    height: 100%;
  }
  .title {
    font-size: 1.3rem;
  }
  .title-map {
    margin-left: auto;
    margin-right: 4px;
    font-size: 0.95rem;
    color: #19a075;
    cursor: pointer;
  }
}
.chart-container {
  position: relative;
  width: 100%;
  // height: 180px;
  height: 100%;
  display: grid;
  grid-template-columns: 28% auto 28%;
  grid-template-rows: 1fr 1fr;
  .nj-info {
    align-self: center;
    justify-self: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 4px;

    &:nth-child(2) {
      align-self: center;
      justify-self: flex-end;
    }
    &:nth-child(3) {
      align-self: center;
      justify-self: flex-start;
    }
    &:nth-child(4) {
      align-self: center;
      justify-self: flex-end;
    }
    &:nth-child(5) {
      align-self: center;
      justify-self: flex-start;
    }
    .info-value {
      font-size: 1.3em;
      color: #313131;
      font-weight: 700;
    }
    .info-name {
      font-size: 0.8em;
      font-weight: 600;
    }
  }
  .chart {
    grid-row: 1/3;
    grid-column: 2/3;
  }
}
</style>
