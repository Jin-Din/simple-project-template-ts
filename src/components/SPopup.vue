<template>
  <div class="main-root">
    <div v-if="props.contentType === 'poi'" ref="popup" class="poi-result-popup" style="z-index: 0">
      <div class="poi-result-title-container">
        <div class="poi-result-title">{{ poiData?.name }}</div>
      </div>
      <!--poi 结果-->
      <div class="poi-result-panel">
        <div class="poi-result-item">
          <div class="poi-result-item-label">地址：</div>
          <div class="poi-result-item-value">{{ poiData?.address }}</div>
        </div>
        <div class="poi-result-item">
          <div class="poi-result-item-label">电话：</div>
          <div class="poi-result-item-value">{{ poiData?.telephone }}</div>
        </div>
        <!-- <div class="poi-result-item-qrcode">
          <img style="width: 60px; height: 60px" src="/img/qr.png" />
        </div> -->
      </div>
      <!--周边搜索-->
      <div class="nearby-search-panel">
        <!-- <div class="search-nearby-input">
          <input type="text" placeholder="在此附近..." v-model="searchKey" ref="nearbySearchInput" @keyup.enter.prevent="nearbySearch" />
          <button @click="nearbySearch">搜索</button>
        </div> -->

        <div class="search-theme-suggest">
          <el-button-group>
            <el-button plain>周边搜索</el-button>
            <el-button plain @click="driveHere(0)">从这出发</el-button>
            <el-button plain @click="driveHere(1)">到这里去</el-button>
          </el-button-group>
        </div>
        <el-button-group size="default">
          <el-tooltip placement="top" content="收藏">
            <el-button plain>
              <el-icon>
                <Star />
              </el-icon>
            </el-button>
          </el-tooltip>
          <el-popover placement="top" title="使用手机导航" width="300" trigger="hover">
            <template #reference>
              <el-button plain>
                <el-icon><Position /></el-icon>
              </el-button>
            </template>
            <div style="display: flex; justify-content: center; gap: 14px">
              <div style="display: flex; flex-direction: column; align-items: center" v-for="item in qrCodeList" :key="item.name">
                <span style="font-weight: 600; text-align: center; margin-bottom: 8px">{{ item.name }}</span>
                <qrcode-vue :value="item.qrcode.value" level="Q"></qrcode-vue>
              </div>
            </div>
          </el-popover>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

import QrcodeVue from "qrcode.vue";
import { Star, Search, Iphone, Position } from "@element-plus/icons-vue";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";
import { ref } from "vue";

type PopupContentType = null | "poi";

interface ISProps {
  contentType: PopupContentType;
  poiData?: {
    coordinates: [number, number];
    name: string;
    address: string;
    telephone: string;
  };
}
const props = defineProps<ISProps>();
// const props = defineProps({
//   poiData: {
//     type: Object,
//     default: () => ({
//       coordinates: [0, 0],
//       name: "aa",
//       address: "aaa",
//       telephone: "aaa",
//     }),
//   },
// });
const emits = defineEmits(["searchNearbyKey", "navFromHere", "navToHere"]);

// 取前三个
let searchKey = ref(""); //搜索关键字
//跳转百度地图导航二维码
const qrCodeBD = computed(() => {
  //粗纠正，精度不高，实际不准。这里为了演示用，
  const TO_BLNG = function (lng: number | undefined) {
    return lng ? lng + 0.0065 : 0;
  };
  const TO_BLAT = function (lat: number | undefined) {
    return lat ? lat + 0.006 : 0;
  };
  let longitude = TO_BLNG(props.poiData?.coordinates[0]);
  let latitude = TO_BLAT(props.poiData?.coordinates[1]);

  let destination = props.poiData?.name;
  let baiduUrl = `marker?location=${latitude},${longitude}&title=${destination}&content=${destination}`;
  return `https://api.map.baidu.com/${baiduUrl}&output=html&src=webapp.baidu.openAPIdemo`;
  //   return `bdapp://map/show?center=40.057406655722,116.29644071728&zoom=11&traffic=on&bounds=37.8608310000,112.5963090000,42.1942670000,118.9491260000&src=andr.baidu.openAPIdemo`;
});
//跳转高德地图导航二维码
const qrCodeGD = computed(() => {
  let longitude = props.poiData?.coordinates[0];
  let latitude = props.poiData?.coordinates[1];
  let destination = props.poiData?.name;
  let baiduUrl = `marker?location=${latitude},${longitude}&title=${destination}&content=${destination}`;
  // 高德
  return `https://uri.amap.com/marker?position=${longitude},${latitude}&name=${destination}&src=mypage&coordinate=gaode&callnative=1`;
  //   return `https://api.map.baidu.com/${baiduUrl}&output=html&src=webapp.baidu.openAPIdemo`;
});

//二维码清单，返回百度导航和高德导航的链接二维码
const qrCodeList = computed(() => {
  return [
    {
      name: "百度导航",
      qrcode: qrCodeBD,
    },
    {
      name: "高德导航",
      qrcode: qrCodeGD,
    },
  ];
});
const nearbySearch = () => {
  let key = searchKey.value;
  if (!key) return;
  emits("searchNearbyKey", { coordinates: props.poiData?.coordinates, keyword: key, themes: "" });
};
const driveHere = (flag: number = 1) => {
  emits(flag === 0 ? "navFromHere" : "navToHere", { data: props.poiData });
};
</script>

<style lang="less" scoped>
.main-root {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 14px;
  width: 380px;
}
.poi-result-popup {
  .poi-result-title-container {
    width: 100%;
    padding-bottom: 8px;
    margin-bottom: 10px;
    margin-right: 10px;
    border-bottom: 1px solid rgb(196, 196, 196);
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .poi-result-title {
      flex: 1;
      font-size: 1.2em;
      font-weight: bold;
    }
    .poi-result-favorite {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  .poi-result-panel {
    position: relative;
    padding: 4px 0;
    .poi-result-item {
      display: flex;
      align-items: flex-start;
      margin: 6px 0;
      .poi-result-item-label {
        width: 66px;
        text-align: right;
      }
      .poi-result-item-value {
        flex: 1;
      }
    }
    .poi-result-item-qrcode {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.nearby-search-panel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}
.search-nearby-input {
  align-self: center;
  display: flex;
  margin-right: auto;
  align-items: center;
  input {
    width: 70px;
    margin-right: 1px;
  }
  button {
    align-self: center;
  }
}
.search-theme-suggest {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.search-theme-btn {
  cursor: pointer;
  margin: 0 2px;

  &:hover {
    color: #2194e0;
  }
}
.poi-theme-more {
  .poi-theme-more-top {
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-right: 10px;
    padding-bottom: 2px;
    border-bottom: 1px solid rgb(196, 196, 196);
  }
  .poi-theme-more-item-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
