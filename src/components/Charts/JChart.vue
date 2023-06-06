<template>
  <STitleContentPanel>
    <template #title>
      <div class="title-container">
        <!-- <div class="title-icon"></div> -->
        <div class="title">JChart</div>

        <div class="dateline">数据统计时间:2022年9月</div>
      </div>
    </template>
    <div class="chart-container">
      <div class="item">
        <div class="item-title">鉴定证书累计</div>
        <div class="item-value">8546<span class="item-unit">家</span></div>
        <div class="item-icon">
          <icon-svg-certificate color="#099a6c"></icon-svg-certificate>
        </div>
      </div>
      <div class="item">
        <div class="item-title">鉴定企业</div>
        <div class="item-value">154<span class="item-unit">家</span></div>
        <div class="item-icon">
          <icon-svg-certifiedenterprise color="#099a6c"></icon-svg-certifiedenterprise>
        </div>
      </div>
      <div class="item">
        <div class="item-title">今日申请</div>
        <div class="item-value">118<span class="item-unit">家</span></div>
        <div class="item-icon">
          <icon-svg-applied color="#099a6c"></icon-svg-applied>
        </div>
      </div>
      <div class="item">
        <div class="item-title">今日鉴定</div>
        <div class="item-value">32<span class="item-unit">家</span></div>
        <div class="item-icon">
          <icon-svg-identified color="#099a6c"></icon-svg-identified>
        </div>
      </div>
    </div>
  </STitleContentPanel>
</template>

<script setup lang="ts">
//@名称:
//@作者:
//@日期:
//@说明:
import { ref } from "vue";
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px 0px;
  // height: 160px;
  height: 100%;
  .item {
    position: relative;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.436);
    border-radius: 8px;
    padding: 10px 10px;
    padding-left: 14px;
    width: 42%;
    // height: 42%;

    &:nth-child(2) {
      border-left: 4px solid #03b12b;
      // border-right: 4px solid #03b12b;
    }
    &:nth-child(4) {
      border-left: 4px solid #14c6ff;
      // border-right: 4px solid #14c6ff;
    }
    &:nth-child(1) {
      border-left: 4px solid #ff8a26;
      // border-right: 4px solid #ff8a26;
    }
    &:nth-child(3) {
      border-left: 4px solid #3186fd;
      // border-right: 4px solid #3186fd;
    }
    .item-title {
      font-weight: 600;
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
</style>
