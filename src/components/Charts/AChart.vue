<template>
  <STitleContentPanel>
    <template #title>
      <div class="title">
        <div>AChart</div>
      </div>
    </template>
    <div class="chart-container">
      <SChart id="aChart" :chartOptions="option" autoresize />
    </div>
  </STitleContentPanel>
</template>

<script setup lang="ts">
//@名称:历史灾害 LiShiZaiHaiChart
//@作者:lvp
//@日期:
//@修改：Jin 2022/12/31
//@说明:

import { EChartsOption } from "echarts";
import { computed, onMounted, ref } from "vue";

interface ISChartDataValue {
  name: string;
  value: number;
}

//设置当前组件的id，用于标识当前组件
const componentName = "AChart";
/**
 * 定义props
 */
const props = defineProps({
  map: {
    type: Object,
  },
  activeId: {
    type: String,
    default: "AChart", //由父组件传入
  },
});
/**
 * 定义emits
 */
const emits = defineEmits(["onActive"]);

let option = ref({} as EChartsOption);
//拉取数据
let echartData = ref<ISChartDataValue[]>([
  {
    name: "干旱灾害",
    value: 33,
  },
  {
    name: "洪涝灾害",
    value: 29,
  },
  {
    name: "台风灾害",
    value: 22,
  },
  {
    name: "风雹灾害",
    value: 18,
  },
  {
    name: "低温冷冻灾害",
    value: 32,
  },
  {
    name: "雪灾",
    value: 27,
  },
  {
    name: "沙尘暴灾害",
    value: 22,
  },
  {
    name: "地震灾害",
    value: 19,
  },
  {
    name: "地质灾害",
    value: 32,
  },
  {
    name: "森林草原火灾",
    value: 24,
  },
]);
let formatNumber = function (num: number) {
  let reg = /(?=(\B)(\d{3})+$)/g;
  return num.toString().replace(reg, ",");
};

const total = computed(() => {
  return echartData.value.reduce((a: number, b: any) => {
    return a + b.value * 1;
  }, 0);
});

// 清空图表数据
function clearChartsData() {
  // 清空数据
  option.value = {};
}

// 点击事件
function handleTooltipClick() {}

function getOption(): EChartsOption {
  // // 初始化图表
  // if(JSON.stringify(data) == "{}" || data==null){
  // 		return;
  // 	}
  let bgColor = "#00103700";
  let title = "总计";
  // let color = ['#38cafb', '#4caff9', '#4adeca', '#2aa7ee', '#0270f2', '#488cf7'];
  let color = ["#2A8BFD", "#BAFF7F", "#00FAC1", "#00CAFF", "#FDE056", "#4ED33C", "#FF8A26", "#FF5252", "#9689FF"];

  return {
    backgroundColor: bgColor,
    color: color,
    title: [
      {
        text: "\n{name|" + title + "}\n{val|" + formatNumber(total.value) + "}",
        top: "center",
        left: "center",
        textStyle: {
          rich: {
            name: {
              fontSize: 20,
              fontWeight: "normal",
              color: "#fefefe",
              padding: [10, 0],
            },
            val: {
              fontSize: 30,
              fontWeight: 600,
              color: "#fff",
              padding: [0, 0],
            },
          },
        },
      },
      {
        text: "单位：个",
        top: 20,
        left: 20,
        textStyle: {
          fontSize: 14,
          color: "#666666",
          fontWeight: 400,
        },
        show: false,
      },
    ],
    series: [
      {
        type: "pie",
        roseType: "radius",
        radius: ["45%", "82%"],
        center: ["50%", "58%"],
        data: echartData.value,
        // hoverAnimation: false,
        itemStyle: {
          borderColor: bgColor,
          borderWidth: 2,
        },
        labelLine: {
          length: 10,
          length2: 10,
          lineStyle: {
            // color: '#e6e6e6'
          },
        },
        label: {
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
              color: "#fff",
            },
            value: {
              fontSize: 15,
              fontWeight: 600,
              padding: [10, 0, 0, 20],
              // color: 'inherit'
              color: "#fff",
            },
          },
        },
      },
    ],
  };
}

onMounted(() => {
  option.value = getOption();
});
</script>

<style lang="less" scoped>
.chart-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.echarts {
  width: 100%;
  height: 100%;
  flex: auto;
  min-height: 0;
  background: transparent;
  padding: 5px;
}

.echarts.active {
  background: transparent;
}
</style>
