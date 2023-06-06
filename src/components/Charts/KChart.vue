<template>
  <STitleContentPanel>
    <template #title>
      <div class="title-container">
        <!-- <div class="title-icon"></div> -->
        <div class="title">KChart</div>

        <div class="dateline">数据统计时间:2022年9月</div>
      </div>
    </template>
    <div class="chart-container">
      <SChart class="chart" :chartOptions="option"> </SChart>
    </div>
  </STitleContentPanel>
</template>

<script setup lang="ts">
//@名称:KChart
//@作者:
//@日期:
//@说明:
import { ref } from "vue";
import { EChartsOption } from "echarts";
import * as echarts from "echarts";
const option = ref({} as EChartsOption);
interface ISChartDataValue {
  name: string;
  value: number;
}
onMounted(() => {
  option.value = getOption();
});

function getOption(): EChartsOption {
  let echartData = [
    {
      name: "小麦",
      value: 200,
      jixie: 98,
    },
    {
      name: "玉米",
      value: 120,
      jixie: 41,
    },
    {
      name: "大豆",
      value: 170,
      jixie: 56,
    },
    {
      name: "果园",
      value: 120,
      jixie: 33,
    },
  ];
  let catalogs: string[] = echartData.map((item) => {
    return item.name;
  });
  let mianji: ISChartDataValue[] = echartData.map((item) => {
    return {
      name: item.name,
      value: item.value,
    };
  });
  let jixie_mianji: ISChartDataValue[] = echartData.map((item) => {
    return {
      name: item.name,
      value: item.jixie,
    } as ISChartDataValue;
  });
  /** @type EChartsOption */
  return {
    legend: {
      show: true,
      top: "4",
      right: "4",
      icon: "rect",
      itemHeight: 15,
      itemWidth: 28,
      textStyle: {
        fontSize: 15,
      },
    },
    xAxis: [
      {
        type: "category",

        axisLabel: {
          interval: 0,
          fontSize: 12,
          color: "#666",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.9)",
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        z: 10,
        data: catalogs,
      },
    ],
    yAxis: [
      {
        type: "value",

        name: "单位(亩)",
        nameTextStyle: {
          color: "#666",
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.5)",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
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
        name: "机械化耕作面积",
        type: "bar",
        // stack: "总量"
        barMaxWidth: 24,
        // yAxisIndex: 1,
        barGap: "10%",
        label: {
          show: true,
          position: "insideTop",
          // color: "#666",
          color: "#D7F0FF",
        },
        itemStyle: {
          color: "#FF8A26",
        },

        data: jixie_mianji,
        z: 2,
      },
      {
        name: "耕作面积",
        type: "bar",
        barGap: "-100%",
        // showBackground: true,
        // stack: "总量",
        barMaxWidth: 24,
        // yAxisIndex: 1,
        // barGap: "10%",
        label: {
          show: true,
          position: "top",
        },
        itemStyle: {
          color: "#83bff683",
        },

        data: mianji,
        z: 1,
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
.chart-container {
  position: relative;
  width: 100%;
  // height: 260px;
  height: 100%;

  color: #5497fb;
}
</style>
