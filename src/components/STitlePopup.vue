<template>
  <div ref="popup" class="result-popup" style="z-index: 0">
    <div class="result-panel">
      <div class="result-title-container">
        <div class="result-title">{{ props.title }}</div>
      </div>
      <div class="result-item" v-for="(item, index) in props.results">
        <span class="result-item-label">{{ item.label }}:</span>
        <div class="result-item-value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface ISProps {
  title: string;
  results?: ISKeyValue[];
}

interface ISKeyValue {
  label: string;
  value: string;
}

const props = withDefaults(defineProps<ISProps>(), {
  title: "",
});
</script>

<style lang="less" scoped>
.result-popup {
  font-size: 14px;
  .result-panel {
    .result-title-container {
      width: 100%;

      margin-bottom: 10px;
      margin-right: 10px;
      padding-bottom: 2px;
      border-bottom: 1px solid rgb(196, 196, 196);
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .result-title {
        flex: 1;
        font-weight: bold;
      }
      .result-favorite {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    .result-item {
      width: 100%;
      margin-bottom: 2;
      display: flex;
      align-items: flex-start;
      .result-item-label {
        // width: 36px;
        text-align: right;
        font-weight: bold;
        padding-right: 8px;
      }
      .result-item-value {
        flex: 1;
      }
    }
  }
}
</style>
