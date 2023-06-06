<template>
  <STitleContentPanel>
    <template #title>
      <div class="title">
        <div>FChart</div>
      </div>
    </template>
    <div class="chart-container">
      <SChart id="fChart" :chartOptions="option" autoresize />
    </div>
  </STitleContentPanel>
</template>

<script setup lang="ts">
//@名称:地质灾害(DiZhiZaiHaiChart.vue)
//@作者:lvp
//@日期:
//@修改：Jin 2022/12/31
//@说明:

import { EChartsOption } from "echarts";

let option = ref<EChartsOption>({});

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

  //渲染数据的时候计算一下 百分比
  //抓取数据
  let data = [50, 60, 70, 20, 30, 10];
  let className = ["滑坡", "崩塌", "泥石流", "地面塌陷", "地裂缝", "地面沉降"];
  let defaultData = [100, 100, 100, 100, 100, 100];
  return {
    grid: {
      left: "5%",
      right: "5%",
      bottom: "0%",
      top: "0%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
      formatter: function (params: any) {
        return (
          params[0].name +
          "<br/>" +
          "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
          params[0].seriesName +
          " : " +
          params[0].value +
          "个"
        );
      },
    },
    backgroundColor: "#ffffff00",
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLabel: {
          show: true,
          fontSize: 15,
          color: "#fff",
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: className,
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        // axisLine: {},
        show: true,
        axisLabel: {
          color: "#ffffff",
          fontSize: "15",
          formatter: function (value: any) {
            return value + "个";
          },
        },
        data: data,
      },
    ],
    series: [
      {
        name: "",
        // barGap: 60,
        type: "pictorialBar",
        zlevel: 1,
        itemStyle: {
          // barBorderRadius: 0,
          color: "#5CD6EE",
        },
        symbol: "rich", //图形类型，带圆角的矩形
        symbolMargin: "3", //图形垂直间隔
        symbolRepeat: true, //图形是否重复
        symbolSize: [5, 15], //图形元素的尺寸
        barWidth: 15,
        barGap: "200%",
        data: data,
      },
      {
        name: "背景",
        type: "bar",
        barWidth: 15,
        barGap: "200%",
        data: defaultData,
        itemStyle: {
          color: "rgba(24,31,68,0.5)",
          // barBorderRadius: 0,
        },
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

<style scoped lang="less"></style>

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
