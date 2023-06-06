<template>
  <STitleContentPanel>
    <template #title>
      <div class="title-container">
        <!-- <div class="title-icon"></div> -->
        <div class="title">GChart</div>

        <div class="dateline">数据统计时间:2022年9月</div>
      </div></template
    >
    <div class="root-container">
      <div class="chart-container">
        <div class="sum-container">
          <div style="margin: 8px 0; font-weight: 700; font-size: 1.35em; color: #ff8a26">{{ total }} <span style="font-size: 0.7em">万元</span></div>
          <div style="font-weight: 600; color: #666">中央补助资金</div>
        </div>
        <!-- <v-chart class="chart" :option="option" autoresize></v-chart> -->
        <SChart class="chart" :chartOptions="option"> </SChart>
      </div>
      <div class="item-container">
        <div class="item">
          <div class="item-title">补贴机具</div>
          <div class="item-value">8.79<span class="item-unit">万套</span></div>
          <div class="item-icon">
            <!-- <icon-svg-certificate color="#099a6c"></icon-svg-certificate> -->
          </div>
        </div>

        <div class="item">
          <div class="item-title">受益农户和农业生产组织</div>
          <div class="item-value">6.99<span class="item-unit">万户</span></div>
          <div class="item-icon">
            <!-- <icon-svg-certificate color="#099a6c"></icon-svg-certificate> -->
          </div>
        </div>
        <div class="item">
          <div class="item-title">销售总价</div>
          <div class="item-value">192931.79<span class="item-unit">万元</span></div>
          <div class="item-icon">
            <!-- <icon-svg-certificate color="#099a6c"></icon-svg-certificate> -->
          </div>
        </div>
        <div class="item">
          <div class="item-title">农业生产经验组织</div>
          <div class="item-value">0.097<span class="item-unit">万户</span></div>
          <div class="item-icon">
            <!-- <icon-svg-certificate color="#099a6c"></icon-svg-certificate> -->
          </div>
        </div>
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
type ChartDataValue = ISChartDataValue & EChartsOption;
onMounted(() => {
  option.value = getOption();
});
let usedData: ChartDataValue = {
  name: "已使用",
  value: 9298.8,
  itemStyle: {
    color: "#2fdb9a",
  },
};
let unUsedData: ChartDataValue = {
  name: "未使用",
  value: 36225.54,
  itemStyle: {
    color: "#ff8a26",
  },
  label: {
    position: "inside",
  },
};
const data = computed(() => {
  return [usedData, unUsedData];
});
const total = computed(() => {
  return data.value.reduce((v, item) => {
    return v + item.value;
  }, 0);
});
const ratio = computed(() => {
  return (usedData.value / total.value) * 100;
});

function getOption(): EChartsOption {
  /** @type EChartsOption */
  return {
    title: {
      text: `${ratio.value.toFixed(1)}%`,
      left: "center",
      top: "41.5%",
      zlevel: 3, //层级
      textStyle: {
        // fontweight: "700",
        color: "#303030",
        fontSize: "1.2em",
      },
    },
    legend: {
      show: true,
      right: "0",
      top: "0",
      icon: "rect",
      orient: "vertical",
      itemHeight: 10,
      itemWidth: 14,
      textStyle: {
        fontSize: 12,
      },
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      // 内圆
      {
        type: "pie",
        zlevel: 2, //层级
        radius: ["0", "60%"],
        center: ["50%", "45%"],
        animation: false,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(0,0,0,.3)",
          color: "#fff",
        },
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        tooltip: {
          formatter: "中央补助资金:{c}万元",
        },
        data: [total.value],
      },
      // 占比环
      {
        type: "pie",
        clockwise: true,
        // silent: true,
        radius: ["65%", "85%"],
        center: ["50%", "45%"],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        tooltip: {
          formatter: "{b}:{c}万元",
        },
        data: data.value,
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
    font-size: 1.3em;
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
  // justify-content: space-evenly;
  // align-content: stretch;
  .chart-container {
    position: relative;
    flex: 0.45;
    display: flex;
    // height: 230px;
    .sum-container {
      flex: 0.45;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .chart {
      position: relative;
      // width: 100%;
      height: 100%;
      // height: 110px;
      flex: 0.55;
    }
  }
  .item-container {
    flex: 0.55;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 2px 4px;
    .item {
      position: relative;
      flex-shrink: 0;
      // background-color: rgba(255, 255, 255, 0.19);
      // border-radius: 8px;
      padding: 0px 12px;
      // padding-left: 14px;
      width: 42%;
      // height: 44%;
      .item-title {
        font-weight: 600;
        font-size: 0.9em;
        color: #666;
      }
      .item-value {
        margin-top: 4px;
        font-size: 1.4em;
        color: #099a6c;
      }
      .item-unit {
        margin-left: 8px;
        font-size: 0.6em;
      }
      .item-icon {
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
