<template>
  <div class="panel_container">
    <div class="title_panel">
      <div class="title-icon"></div>
      <div class="title-content">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="content_panel">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
//@名称:
//@作者:
//@日期:
//@说明:
import { ref } from "vue";
</script>

<style scoped lang="less">
.panel_container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // max-height: 100%;
  // min-height: calc((100vh - 100px) / 3.2);

  // border: 1px solid #4995cb;

  margin: 0px 5px;
}

.title_panel {
  position: relative;
  width: 100%;
  padding: 2px 0px;
  height: 30px;
  line-height: 30px;
  font-weight: 600;
  display: flex;
  // font-size: 1.3rem;

  // padding: 2px 0;
  // border: 1px solid black;
  // text-align: center;
  // border-bottom: 1px solid;
  // border-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #00bbf2 60%, rgba(255, 255, 255, 0) 99%) 2 2 2 2;
  // border-image: -moz-linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #00bbf2 60%, rgba(255, 255, 255, 0) 99%) 2 2 2 2;
  // border-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #00bbf2 60%, rgba(255, 255, 255, 0) 99%) 2 2 2 2;

  background: #085078; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #85d8ce4f, #08507800); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #85d8ce4f, #08507800); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  .title-icon {
    width: 4px;
    background-color: #19a075;
    height: 100%;
    margin-right: 8px;
  }
  .title-content {
    position: relative;
    flex: 1;
  }
}

.content_panel {
  position: relative;
  // margin-top: 4px;
  width: 100%;
  flex: 1;
  overflow: hidden;
}
</style>
