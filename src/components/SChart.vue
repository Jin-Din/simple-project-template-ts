<template>
  <v-chart
    class="echarts"
    :option="props.chartOptions"
    :update-options="props.updateOptions"
    @timelinechanged="handleTimelinechanged"
    @legendselectchanged="handleLegendselectchanged"
    autoresize
  />
  <!-- <v-chart
      :option="props.chartOptions"
      :update-options="props.updateOptions"
      @timelinechanged="handleTimelinechanged"
      @legendselectchanged="handleLegendselectchanged"
      @legendselected="handleLegendselected"
      @legendunselected="handleLegendunselected"
      @legendselectall="handleLegendselectall"
      @legendinverseselect="handleLegendinverseselect"
      autoresize
    /> -->
</template>

<script setup lang="ts">
import { EChartsOption, SetOptionOpts } from "echarts";

interface ISProps {
  chartOptions: object;
  updateOptions: SetOptionOpts;
}
interface ISEchartsLegendSelectChanged {
  type: string;
  name: string;
  selected: {
    [name: string]: boolean;
  };
}
const props = withDefaults(defineProps<ISProps>(), {
  updateOptions: () => ({
    notMerge: false,
  }),
});
const emits = defineEmits<{
  (e: "onTimelinechanged", currentIndex: number): void;
  (e: "onLegendselectchanged", params: ISEchartsLegendSelectChanged): void;
}>();

function handleTimelinechanged(currentIndex: number) {
  emits("onTimelinechanged", currentIndex);
}

function handleLegendselectchanged(params: ISEchartsLegendSelectChanged) {
  emits("onLegendselectchanged", params);
}
</script>

<style lang="less" scoped>
.echarts {
  width: 100%;
  height: 100%;
  flex: auto;
  min-height: 0;
  background: transparent;
  padding: 5px;
}
</style>
