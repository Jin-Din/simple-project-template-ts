<template>
  <STitleContentPanel>
    <template #title>
      <div class="title">
        <div>EChart</div>
      </div>
    </template>
    <div class="chart-container">
      <SChart id="EChart" :chartOptions="option" autoresize />
    </div>
  </STitleContentPanel>
</template>

<script setup lang="ts">
//@名称:救灾物资储备库(JiuZaiWuZiChuBeiKuChart.vue)
//@作者:lvp
//@日期:
//@修改：Jin 2022/12/31
//@说明:

import { EChartsOption } from "echarts";
import { onMounted, ref } from "vue";

const option = ref<EChartsOption>({});

onMounted(() => {
  option.value = getOption();
});

function getOption(): EChartsOption {
  // 清空图表数据
  clearChartsData();

  // // 初始化图表
  // if(JSON.stringify(data) == "{}" || data==null){
  // 		return;
  // 	}
  return {
    backgroundColor: "#344b5800",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        // textStyle: {
        //   color: "#fff"
        // }
      },
    },
    legend: {
      show: true,
      bottom: 25,
      icon: "rect",
      itemHeight: 15,
      itemWidth: 28,
      textStyle: {
        color: "#fff",
        fontSize: 15,
      },
    },
    grid: {
      borderWidth: 0,
      top: 10,
      bottom: 75,
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.5)",
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
        axisLabel: {
          interval: 0,
          color: "rgba(255,255,255,1)",
          fontSize: 15,
        },
        data: ["县级储备库", "乡镇储备库", "社区（村）储备库（点）"],
      },
    ],
    yAxis: [
      {
        type: "value",
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
          color: "rgba(255,255,255,1)",
          fontSize: 15,
        },
        splitArea: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "储备库(个)",
        type: "bar",
        stack: "总量",
        barMaxWidth: 20,
        barGap: "10%",
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(35, 157, 250, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(35, 157, 250, 0)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        data: [509, 917, 1455],
      },

      {
        name: "折算金额",
        type: "line",
        symbolSize: 10,
        symbol: "circle",
        itemStyle: {
          color: "rgba(255, 196, 53, 1)",
        },
        lineStyle: {
          width: 2,
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 67, 2, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 196, 53, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        data: [1036, 3693, 2962],
      },
    ],
  };
}

// 清空图表数据
function clearChartsData() {
  // 清空数据
  option.value = {};
}

// 点击事件
function handleTooltipClick() {}
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
