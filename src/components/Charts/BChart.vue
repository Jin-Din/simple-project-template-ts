<template>
  <STitleContentPanel>
    <template #title>
      <div class="title">
        <div>BChart</div>
      </div>
    </template>
    <div class="chart-container">
      <SChart id="bChart" :chartOptions="option" autoresize />
    </div>
  </STitleContentPanel>
</template>

<script setup>
//@名称:(GongGongFuWuSheShiChart.vue)
//@作者:
//@日期:2022/12/31
//@修改：
//@说明:

import * as echarts from "echarts";
import { onMounted, ref } from "vue";

//设置当前组件的id，用于标识当前组件
const componentName = "bchart";
/**
 * 定义props
 */
const props = defineProps({
  map: {
    type: Object,
  },
  activeId: {
    type: String,
    default: "bchart", //由父组件传入
  },
});
/**
 * 定义emits
 */
const emits = defineEmits(["onActive"]);
const option = ref({});
onMounted(() => {
  option.value = getOption();
});
/**
 * 卸载时处理的内容
 */
onMounted(() => {});

const getOption = () => {
  // 清空图表数据
  clearChartsData();

  const dataSource = [
    {
      value: 125,
      maxValue: 200,
      unit: "个",
      name: "学校",
    },
    {
      value: 26,
      maxValue: 200,
      unit: "个",
      name: "医疗卫生机构",
    },
    {
      value: 53,
      maxValue: 200,
      unit: "个",
      name: "提供住宿机构",
    },
    {
      value: 62,
      maxValue: 200,
      unit: "个",
      name: "公共文化场所",
    },
    {
      value: 83,
      maxValue: 200,
      unit: "个",
      name: "旅游景区",
    },
    {
      value: 58,
      maxValue: 200,
      unit: "个",
      name: "星级饭店",
    },
    {
      value: 52,
      maxValue: 200,
      unit: "个",
      name: "体育场馆",
    },
    {
      value: 66,
      maxValue: 200,
      unit: "个",
      name: "宗教活动场所",
    },
    {
      value: 41,
      maxValue: 200,
      unit: "个",
      name: "商品交易市场",
    },
  ];

  const img =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAACyUlEQVRIiY2VzWoUQRDHf9U7+cIsahIj0ajgwaNi1JNHSRQ3ePMk+AyKd30BQfQFFDzrRWOMJBdBEEUEPQVMiHgQjWA2Jtns7E63dM/MTs/MJqSgpqq7q/9V1VU9LSzNHwPuAdPACPANeAI8AJp4NHbk0r6K4VwkHAcGgPWKYTESvgKRtayY2D6SWLdSWJpbdeACWANxHzt4B1LDUHe7BKpjUzd7NP2U6Rcw21KEgzqLrKViGSCtkRSkI+NoLgLzCJPAmp3fiOjvNRBK3omBwwI1ImY2IOwsRLFQSBvHtPIy5vNIewHVHrJjY6M0OOkzsX7IaKaNpq+4rpCQmFuebJLNhxMQzkM4TALoMvVlxiNoamj6/HmVATYL4Ln5s0hzgfZ61W2MEoCo5MR31O85CQvg210cOT5D4+Vtonp1RydRd0dxJqpZyCTRlcd2TP0ozee3MGGvAzQJcMr+WDNMxFUiApUBbntyOwbG404wa+O0Zy97YN0ySXWb0enAgZpCCztdg6hOj+banJULaF7k+rjQ1p09cDJAGomBJBexCxUBaB1wkXYucAnY3zMYxIVODSTJVfxLmSgqkfaiVNec2d5oI0A1ysdlCtFL4cjapz6kt7l0ZMVsDMvxcaWRlzYZEMl0S/rgd7ZuvNlTJobfCF+8mqSkssI7w7RWCvT+H6zfeUQ0EHZOcedM/gCvbd5xTXax9AL4zN/7T2mNbnbNOk/WwUz6VATIVmFdZVlk9AmYpDl6vVschfFq4iBM15Ka7EofgSn3u9f5BizdH1sDeOUceA0UBDknpSzeA1faUA/s4SYdXKpFTLbIsQO/OzUE49Kw3keVgZ5kVrubHr1VpnJNS1RvUXErKxob0UAHJJM/EeYwiYN8LQmGZHNCGbmLUNNi7Cu5rI08VmIe2l+0fc5sFomTZ8AEcALjnuF/wCLGvfE6l2GqA/8Bnpdx0cUesngAAAAASUVORK5CYII=";

  const obliqueRectangle = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      offset: 10,
    },
    buildPath: (ctx, shape) => {
      ctx.moveTo(shape.x + shape.offset, shape.y);
      ctx.lineTo(shape.x + shape.width + shape.offset, shape.y);
      ctx.lineTo(shape.x + shape.width, shape.y + shape.height);
      ctx.lineTo(shape.x, shape.y + shape.height);
      ctx.closePath();
    },
  });
  echarts.graphic.registerShape("obliqueRectangle", obliqueRectangle);

  return {
    backgroundColor: "#000a3f00",
    grid: [
      {
        left: 40,
        top: 0,
        right: 5,
        bottom: 0,
        containLabel: true,
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "none", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        return (
          params[0].name +
          "<br/>" +
          "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
          "合计：" +
          params[1].data.value +
          " 个"
        );
      },
    },
    xAxis: [
      {
        gridIndex: 0,
        type: "value",
        max: dataSource[0].maxValue,
        axisLabel: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
      },
      {
        gridIndex: 0,
        type: "value",
        max: dataSource[1].maxValue,
        axisLabel: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        type: "category",
        inverse: true,
        data: dataSource.map((item) => item.name),
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
        axisLabel: {
          width: 75,
          padding: [0, 0, 0, -150],
          align: "left",
          formatter: (name, index) => {
            const _index = index + 1;
            const id = _index > 9 ? _index : `0${_index}`;
            return `{icon|}{num|${id}}{value|${name}}`;
          },
          rich: {
            icon: {
              width: 14,
              height: 11,
              backgroundColor: {
                image: img,
              },
            },
            num: {
              padding: [0, 0, 0, 0],
              width: 25,
              color: "#7FE5FF",
              align: "left",
              fontSize: 15,
              fontFamily: "Oswald",
              fontWeight: 400,
              fontStyle: "italic",
            },
            value: {
              // width:
              fontSize: 15,
              color: "#fff",
              fontFamily: "SourceHanSerifSC-Bold",
              fontWeight: 500,
            },
          },
        },
      },
      {
        gridIndex: 0,
        type: "category",
        inverse: true,
        offset: 0,
        // data: dataSource.map((item) => item.name),
        data: dataSource.map(function (item) {
          return {
            name: item.name,
            value: item.value,
            maxValue: item.maxValue,
          };
        }),
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
        axisLabel: {
          padding: [0, 0, 0, 5],
          formatter: (_, index) => {
            return `{value|${dataSource[index].value}}{unit|个}`;
          },
          rich: {
            unit: {
              color: "#fff",
              fontSize: 10,
              verticalAlign: "bottom",
            },
            value: {
              color: "#fff",
              fontSize: 15,
              fontWeight: 500,
            },
          },
        },
      },
    ],
    series: [
      {
        type: "custom",
        xAxisIndex: 1,
        yAxisIndex: 0,
        // data: dataSource.map(() => 100),
        data: dataSource.map(function (item) {
          return {
            name: item.name,
            value: item.maxValue,
            maxValue: item.maxValue,
          };
        }),
        renderItem: (params, api) => {
          const barLayout = api.barLayout({
            count: 1,
            barWidth: 8,
          });
          const { bandWidth, offsetCenter, width: toHeight } = barLayout[0];

          const x = params.coordSys.x;
          const y = bandWidth * (params.dataIndex + 1 / 2) + offsetCenter + params.coordSys.y - toHeight / 2;
          return {
            type: "obliqueRectangle",
            shape: {
              x: x,
              y: y + 2,
              width: api.size([api.value()])[0],
              height: toHeight,
              offset: toHeight * 0.5,
            },
            style: api.style(),
          };
        },
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#22004A", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#1C3D57", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        silent: true,
      },
      {
        type: "custom",
        xAxisIndex: 0,
        yAxisIndex: 0,
        // data: dataSource.map((item) => item.value),
        data: dataSource.map(function (item) {
          return {
            name: item.name,
            value: item.value,
            maxValue: item.maxValue,
          };
        }),
        silent: true,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#2FC7FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#73F3FF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        renderItem: (params, api) => {
          const barLayout = api.barLayout({
            barWidth: 11,
            count: 1,
          });
          const { bandWidth, offsetCenter, width: toHeight } = barLayout[0];
          const x = params.coordSys.x;
          const y = bandWidth * (params.dataIndex + 1 / 2) + offsetCenter + params.coordSys.y - toHeight / 2;
          return {
            type: "obliqueRectangle",
            // type: "path",
            shape: {
              x: x,
              y: y,
              width: api.size([api.value()])[0],
              height: toHeight,
              offset: toHeight * 0.5,
            },
            style: api.style(),
          };
        },
      },
      {
        type: "pictorialBar",
        // data: dataSource.map((item) => item.value),
        data: dataSource.map(function (item) {
          return {
            name: item.name,
            value: item.value,
            maxValue: item.maxValue,
          };
        }),
        xAxisIndex: 0,
        yAxisIndex: 0,
        symbol: "path://M15,0L5,20L0,20L10,0Z",
        // symbolRotate: null,
        symbolSize: [13, 12],
        symbolPosition: "end",
        symbolOffset: [10, 0],
        itemStyle: {
          color: "white",
          shadowColor: "rgba(115, 243, 255, 0.2)",
          shadowBlur: 10,
        },
      },
    ],
  };
};

// 清空图表数据
function clearChartsData() {
  // 清空数据
  option.value = {};
}

// 点击事件，向父组件传递必要的值
function handleClick() {
  emits("onActive", { id: componentName, label: "BChart" });
}
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
