<template>
  <STitleContentPanel>
    <template #title>
      <div class="title">
        <div>DChart</div>
      </div>
    </template>
    <div class="chart-container">
      <SChart id="dChart" :chartOptions="option" autoresize />
    </div>
  </STitleContentPanel>
</template>

<script setup lang="ts">
//@名称:
//@作者:lvp
//@日期:
//@修改：Jin 2022/12/31
//@说明:
import * as echarts from "echarts";
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
  // 构造图表数据
  let yAxisData = ["水利局", "林业局", "气象局", "自规局", "工信局", "应急局", "交通局", "农业局", "住建局", "地震局"];
  let seriesData1 = [27, 43, 27, 65, 35, 73, 49, 53, 27, 66];
  let seriesData2 = [5, 6, 9, 15, 24, 65, 32, 46, 11, 23];

  //   if(data.length > 0){
  //     data.forEach(element => {
  //       yAxisData.push(element.pacName.substring(0,2));
  //       seriesData1.push(element.peopleCount);
  //       seriesData2.push(element.objCount);
  //     });
  //   }

  // console.log(yAxisData);
  // console.log(seriesData1);
  // console.log(seriesData2);

  return {
    backgroundColor: "#3284d400",
    legend: {
      show: true,
      bottom: 0,
      textStyle: {
        color: "#fff", // 文字的颜色。
        fontSize: 15,
      },
    },
    grid: {
      top: "2%",
      left: "2%",
      bottom: "1%",
      right: "7%",
      containLabel: true,
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        inverse: true,
        data: yAxisData,
        show: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          fontSize: 15,
          margin: 20,
          color: "#fff",
        },
      },
    ],
    series: [
      {
        name: "灾害管理人员总数(人)",
        type: "bar",
        barGap: "-100%",
        barMaxWidth: 13,
        barMinWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
            {
              offset: 1,
              color: "#bbfbff",
            },
            {
              offset: 0,
              color: "#61e3f4",
            },
          ]),
          // borderRadius: [0, 0, 0, 0],
          borderRadius: [5, 5, 5, 5],
        },
        label: {
          show: true,
          position: "right",
          fontSize: 15,
          color: "#fff",
          formatter: (params: any) => (params.value ? `${params.value}` : ""),
        },
        data: seriesData1,
      },
      {
        name: "专家队伍人员总数(人)",
        type: "bar",
        barMaxWidth: 13,
        barMinWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
            {
              offset: 1,
              color: "#45c9fe",
            },
            {
              offset: 0,
              color: "#016bec",
            },
          ]),
          // borderRadius: [0, 5, 5, 0],
          borderRadius: [5, 10, 10, 5],
        },
        label: {
          show: true,
          position: "right",
          color: "#0d7cef",
          fontSize: 15,
          formatter: (params: any) => (params.value ? `${params.value}` : ""),
        },
        data: seriesData2,
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
