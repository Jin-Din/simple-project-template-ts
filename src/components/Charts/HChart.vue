<template>
  <STitleContentPanel>
    <template #title>
      <div class="title-container">
        <!-- <div class="title-icon"></div> -->
        <div class="title">HChart</div>

        <div class="dateline">数据统计时间:2022年9月</div>
      </div>
    </template>
    <div class="root-container">
      <div class="sum-container">
        <div class="item-container">
          <div class="item-value">23.3 <span class="item-unit">万元</span></div>
          <div class="item-title">生成</div>
        </div>
        <div class="item-container">
          <div class="item-value">27.74 <span class="item-unit">万元</span></div>
          <div class="item-title">已申请</div>
        </div>
        <div class="item-container">
          <div class="item-value">11.41 <span class="item-unit">万元</span></div>
          <div class="item-title">已通过</div>
        </div>
      </div>
      <div class="chart-container">
        <SChart class="chart" :chartOptions="option"> </SChart>
      </div>
    </div>
  </STitleContentPanel>
</template>

<script setup lang="ts">
//@名称:农业机械化播种面积
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
  //"二维码注册",
  let dataTypes: string[] = ["补贴申请", "补贴审核"];
  let catalogs = ["玉米收割机", "履带式收割机", "轮式拖拉机", "谷物联合收割机", "青(黄)饲料收割机"];

  let series = dataTypes.map((catalog) => {});

  /** @type EChartsOption */
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      textStyle: {
        fontWeight: "normal",
        fontSize: 11,
      },
    },
    grid: {
      left: "5%",
      right: "3%",
      top: "20%",
      bottom: "20%",
      containLabel: true,
    },
    legend: {
      bottom: "0",
      itemWidth: 13,
      itemHeight: 9,
      textStyle: {
        fontSize: 9,
      },
    },
    xAxis: [
      {
        type: "category",
        data: catalogs,
        axisLabel: {
          // fontSize: 8,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "万元",
        axisLabel: {
          show: true,
          formatter: "{value}",
          fontSize: 9,
          margin: 5,
        },
      },
      {
        type: "value",
        name: "个数",
        nameTextStyle: {
          color: "#666",
        },
        axisLabel: {
          formatter: "{value}",
          fontSize: 9,
          margin: 5,
        },
      },
    ],
    series: [
      {
        name: "补贴申请",
        type: "bar",
        // itemStyle: { color: "#2F88DF" },

        barWidth: "20%",
        // stack: "asset",
        // emphasis: {
        //   focus: "series",
        // },
        data: [4.7, 6.3, 4.3, 3.3, 4],
      },

      {
        name: "补贴审核",
        type: "bar",
        // itemStyle: { color: "#7FC9FF" },
        barWidth: "20%",
        // barWidth: "50%",
        // stack: "asset",
        // emphasis: {
        //   focus: "series",
        // },
        data: [2.4, 4.3, 1.7, 2.4, 3],
      },

      {
        name: "二维码申领个数",
        type: "line",
        yAxisIndex: 1,
        data: [22, 33, 42, 27, 11, 44],
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
  flex-direction: column;
  .sum-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .item-container {
      margin-top: 6px;
      text-align: center;
      .item-value {
        margin: 4px 0;
        font-weight: 700;
        font-size: 1.1em;
        color: #ff8a26;
      }
      .item-title {
        font-weight: 600;
        color: #666;
        font-size: 0.95em;
      }
      .item-unit {
        margin-left: 2px;
        font-size: 0.6em;
      }
    }
  }

  .chart-container {
    flex: 1;
    position: relative;
    // .chart {
    //   // height: 200px;
    // }
  }
}
</style>
