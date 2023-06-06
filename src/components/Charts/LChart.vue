<template>
  <STitleContentPanel>
    <template #title>
      <div class="title-container">
        <!-- <div class="title-icon"></div> -->
        <div class="title">LChart</div>

        <div class="dateline">数据统计时间:2022年9月</div>
      </div>
    </template>
    <div class="root-container">
      <div class="left-chart">
        <SChart class="chart" v-for="(optionPie, index) in pieOptions" :key="index" :chartOptions="optionPie"> </SChart>
      </div>
      <div class="right-chart">
        <SChart class="chart" :chartOptions="optionBar"> </SChart>
      </div>
    </div>
  </STitleContentPanel>
</template>

<script setup lang="ts">
//@名称:LChart
//@作者:
//@日期:
//@说明:
import { ref } from "vue";
import { EChartsOption } from "echarts";
import * as echarts from "echarts";
const optionBar = ref({} as EChartsOption);
// const optionPie = ref({} as EChartsOption);
interface ISChartDataValue {
  name: string;
  value: number;
}
//农业机械设施
interface ISJXSSData {
  title: string;
  color: string;
  max: number;
  current: number;
}
// let pieOptions = ref<EChartsOption[]>([]);
let pieDataList: ISJXSSData[] = [
  {
    title: "8个省级以上全程\n机械化示范县",
    color: "#00caff",
    max: 8,
    current: 5,
  },
  {
    title: "5个机手\n实训基地",
    color: "#07ba74",
    max: 5,
    current: 3,
  },
  {
    title: "40个农机\n应急服务",
    color: "#ff8a26",
    max: 40,
    current: 34,
  },
  {
    title: "50个农机综合\n农事服务中心",
    color: "#f9b746",
    max: 50,
    current: 42,
  },
];
onMounted(() => {
  optionBar.value = getOption();
  //   optionPie.value = getOptionPie();
});

const pieOptions = computed(() => {
  return pieDataList.map((item) => getOptionPie(item));
});

function getOption(): EChartsOption {
  let echartData = [
    {
      name: "大荔县",
      value: 78,
    },
    {
      name: "蒲城县",
      value: 67,
    },
    {
      name: "华阴县",
      value: 91,
    },
    {
      name: "紫阳县",
      value: 55,
    },
    {
      name: "靖边县",
      value: 75,
    },
  ];
  echartData.sort((a, b) => {
    return b.value - a.value;
  });
  let catalogs: string[] = echartData.map((item) => {
    return item.name;
  });
  let mianji: ISChartDataValue[] = echartData.map((item) => {
    return {
      name: item.name,
      value: item.value,
    };
  });

  /** @type EChartsOption */
  return {
    legend: {
      show: true,
      top: "4",
      right: "center",
      icon: "rect",
      itemHeight: 12,
      itemWidth: 20,
      textStyle: {
        fontSize: 15,
      },
    },
    grid: {
      top: "15%",
      bottom: 10,
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: catalogs,
        axisLabel: {
          show: false,
          // margin: 30,
          // fontSize: 14,
          // align: "left",
          // padding: [3, 0, 0, 0],
          // color: "#000",
        },
      },
    ],
    xAxis: [
      {
        type: "value",

        name: "",
        nameTextStyle: {
          color: "#666",
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "rgba(255,255,255,.5)",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          interval: 0,
          color: "#666",
          fontSize: 15,
        },
        splitArea: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "",
        type: "bar",
        barGap: "10%",
        barWidth: "20%",
        label: {
          show: true,
          position: "right",
          formatter: "{b}",
          fontSize: " 0.86rem",
        },
        itemStyle: {
          color: "#00ca95",
        },
        emphasis: {},
        data: echartData.map((item) => {
          return { name: item.name, value: 0 };
        }),
        z: 1,
      },
      {
        name: "机械化示范区进程",
        type: "bar",
        showBackground: true,
        // barGap: "10%",
        barWidth: "20%",
        label: {
          show: true,
          position: "insideRight",
          formatter: "{c}%",
        },
        itemStyle: {
          color: "#00ca95",
        },
        emphasis: {},
        data: echartData,
        z: 1,
      },
    ],
  };
}

function getOptionPie(inputData: ISJXSSData): EChartsOption {
  //   let inputData = {
  //     title: "5个手机培训基地",
  //     color: "orange",
  //     max: 10,
  //     current: 3,
  //   };
  let { title, color: themeColor, max, current } = inputData;

  let baseColor = "#aaa";

  let ratio = (current / max) * 100;
  let data = [
    {
      name: "完成",
      value: current,
      itemStyle: {
        color: themeColor,
      },
    },
    {
      name: "未完成",
      value: max - current,
      itemStyle: {
        color: baseColor,
      },
    },
  ];
  /** @type EChartsOption */
  return {
    title: [
      {
        text: `${current} / ${max}`,
        left: "center",
        top: "24%",
        zlevel: 3, //层级
        textStyle: {
          // fontweight: "700",
          color: "white",
          fontSize: "1rem",
        },
      },
      {
        text: `${title}`,
        left: "center",
        bottom: 0,
        zlevel: 3, //层级
        textStyle: {
          // fontweight: "700",
          color: "#303030",
          fontSize: "0.75rem",
        },
      },
    ],
    tooltip: {
      trigger: "item",
    },
    grid: {},
    series: [
      // 内圆实心
      {
        type: "pie",
        zlevel: 2, //层级
        radius: ["0", "53%"],
        center: ["50%", "35%"],

        animation: false,
        itemStyle: {
          //   shadowBlur: 10,
          //   shadowColor: "rgba(0,0,0,.3)",
          color: themeColor,
          opacity: 0.7,
        },
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        tooltip: {
          formatter: "{c}个",
          show: false,
        },
        data: [max],
      },
      // 占比环
      {
        type: "pie",
        clockwise: true,
        // silent: true,
        radius: ["58%", "68%"],
        center: ["50%", "35%"],
        itemStyle: {
          color: baseColor,
        },
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        tooltip: {
          formatter: "{b}:{c}个",
        },
        data: data,
      },
    ],
  };
}
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
  .dateline {
    margin-left: auto;
    margin-right: 4px;
    font-size: 0.95rem;
    color: #19a075;
  }
}
.root-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-items: stretch;
  .left-chart {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  .right-chart {
    flex: 1;
  }
}
</style>
