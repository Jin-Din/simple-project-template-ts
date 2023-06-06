<template>
  <el-popover placement="left-start" title="视野定位" :width="200" trigger="click">
    <template #reference>
      <el-button class="toolbar-item-button" plain>
        <el-icon size="30" color="white">
          <svg
            t="1686014130151"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2026"
            width="48"
            height="48"
          >
            <path
              d="M448.509227 658.020478c-44.013652 0-90.211604-11.959044-138.539249-35.331058A570.976109 570.976109 0 0 1 191.526292 543.34471a895.56314 895.56314 0 0 1-108.122867-109.215017 833.365188 833.365188 0 0 1 108.122867-108.122867A605.269625 605.269625 0 0 1 309.806156 247.208191c48.546075-23.317406 94.68942-35.276451 138.703071-35.27645S539.157692 223.890785 587.649159 247.208191a587.303754 587.303754 0 0 1 119.535836 78.798635 849.474403 849.474403 0 0 1 108.668942 108.122867 835.494881 835.494881 0 0 1-108.668942 109.215017 591.180887 591.180887 0 0 1-119.535836 79.180887c-48.491468 23.535836-95.12628 35.494881-139.139932 35.494881z m0-392.846417c-84.204778 0-168.464164 55.426621-223.890785 102.170649a689.856655 689.856655 0 0 0-62.962457 59.194539l-7.645051 7.590444 7.590444 7.590444c46.197952 49.146758 167.372014 162.457338 287.453925 162.457337 46.744027 0 123.358362-17.911263 224.382252-102.716723a801.419795 801.419795 0 0 0 64.109215-60.06826l7.590444-7.590443-7.535836-7.863481c-47.836177-48.382253-169.010239-160.819113-289.092151-160.819113z"
              p-id="2027"
            ></path>
            <path
              d="M447.963152 555.303754a122.266212 122.266212 0 1 1 122.266212-122.266211 122.430034 122.430034 0 0 1-122.266212 122.266211z m0-191.12628A69.133106 69.133106 0 1 0 516.987043 433.037543 69.078498 69.078498 0 0 0 447.963152 364.068259zM14.92561 245.733788V0h245.733788v53.788396H68.714006V245.733788z m0 623.617748v-245.733789h53.788396v191.78157H260.659398v53.788396zM830.48875 245.733788V53.788396h-191.78157V0h245.733788v245.733788zM977.437555 806.389078a73.392491 73.392491 0 0 1 24.682594-54.880546 19.931741 19.931741 0 0 0 4.095563-24.901023l-33.911263-58.375427a19.604096 19.604096 0 0 0-22.935153-8.846416 76.013652 76.013652 0 0 1-23.098976 3.549488 74.866894 74.866894 0 0 1-73.392492-58.430035 19.658703 19.658703 0 0 0-19.167235-15.563139h-67.167236a19.658703 19.658703 0 0 0-19.167235 15.563139 74.866894 74.866894 0 0 1-73.392492 58.430035 76.013652 76.013652 0 0 1-23.098976-3.549488 19.604096 19.604096 0 0 0-22.935154 8.846416l-33.911262 58.375427a19.986348 19.986348 0 0 0 4.095563 24.901023 73.337884 73.337884 0 0 1 0 109.761093 19.931741 19.931741 0 0 0-4.095563 24.901023l33.911262 58.53925a19.604096 19.604096 0 0 0 22.935154 8.846416 76.013652 76.013652 0 0 1 23.098976-3.549488 74.866894 74.866894 0 0 1 73.392492 58.430034 19.658703 19.658703 0 0 0 19.167235 15.56314h67.221843a19.658703 19.658703 0 0 0 19.167236-15.56314 74.866894 74.866894 0 0 1 73.392491-58.430034 76.013652 76.013652 0 0 1 23.098976 3.549488 19.604096 19.604096 0 0 0 22.935154-8.846416l33.911263-58.375427a19.986348 19.986348 0 0 0-4.095564-24.901024 73.337884 73.337884 0 0 1-24.737201-55.044369z m-18.348123 64.273038l-22.825938 38.771331a98.293515 98.293515 0 0 0-58.75768 4.914676 95.890785 95.890785 0 0 0-30.525597 19.986348 93.651877 93.651877 0 0 0-24.081911 38.989761h-45.542662a93.651877 93.651877 0 0 0-24.136519-38.935154 95.890785 95.890785 0 0 0-30.525597-20.040955 98.293515 98.293515 0 0 0-58.757679-4.914676l-22.825939-38.771331a94.47099 94.47099 0 0 0 12.395904-16.382253 92.832765 92.832765 0 0 0-12.395904-112.43686l22.825939-38.771331a98.293515 98.293515 0 0 0 58.757679-4.914675 95.890785 95.890785 0 0 0 30.525597-19.986349 93.651877 93.651877 0 0 0 24.081911-38.989761H823.116736a93.651877 93.651877 0 0 0 24.136519 38.935154 95.726962 95.726962 0 0 0 30.470989 20.313993 98.293515 98.293515 0 0 0 58.75768 4.914676l22.825938 38.771331a94.525597 94.525597 0 0 0-12.395904 16.382253 92.832765 92.832765 0 0 0 12.232082 112.163822z"
              p-id="2028"
            ></path>
            <path
              d="M800.126975 728.081911a86.989761 86.989761 0 1 0 86.989761 86.989761 86.989761 86.989761 0 0 0-86.989761-86.989761z m32.764505 119.754266a46.361775 46.361775 0 1 1 13.59727-32.764505 46.03413 46.03413 0 0 1-13.542662 32.764505z"
              p-id="2029"
            ></path>
          </svg>
        </el-icon>
        <!-- <img src="@assets/img/tools/minus.png" /> -->
      </el-button>
    </template>
    <div class="sceneview-container">
      <div class="scene-item" v-for="scene in scenes" :key="scene.id + scene.title" @click="handleNavToScene(scene)">
        <el-icon size="24" color="white">
          <svg
            t="1685437805646"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1850"
            width="48"
            height="48"
          >
            <path
              d="M885.32 288.06H736.17v-74.69c0-41.27-33.64-74.68-74.91-74.68H362.74c-41.27 0-74.68 33.42-74.68 74.68v74.69H138.69c-41.27 0-74.69 33.42-74.69 74.46v448.11c0 41.49 33.42 74.68 74.69 74.68h746.63c41.27 0 74.68-33.19 74.68-74.68V362.52c0-41.05-33.42-74.46-74.68-74.46zM181.75 437.2c-20.63 0-37.45-16.6-37.45-37.23 0-20.63 16.82-37.46 37.23-37.46 20.63 0 37.45 16.82 37.45 37.46s-16.82 37.23-37.23 37.23z m330.36 388.01c-130.75 0-237.74-106.98-237.74-238.18 0-131.21 106.53-237.29 237.74-237.29s237.74 106.08 237.74 237.29c-0.45 131.64-106.53 238.18-237.74 238.18z"
              fill="#ffffff"
              p-id="1851"
            ></path>
            <path
              d="M512.11 474.43c-62.35 0-113.04 50.46-113.04 112.81S449.76 700.5 512.11 700.5s112.81-50.69 113.04-113.26c0-62.34-50.69-112.81-113.04-112.81z"
              fill="#ffffff"
              p-id="1852"
            ></path>
          </svg>
        </el-icon>
        <span style="margin-left: 4px"> {{ scene.title }}</span>
      </div>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
//@名称:
//@作者:
//@日期:
//@说明:
import { Map } from "sxgis-mapboxgl-mapex";
import { ref } from "vue";
// import { usePubStore } from "@/store";
// const pubStore = usePubStore();

interface ISMapScene {
  id: number;
  title: string;
  image: string;
  description: string;
  view: ISView;
}

interface ISView {
  center: [number, number];
  pitch: number;
  zoom: number;
  bearing: number;
}

interface ISProps {
  map: Map;
}

const props = defineProps<ISProps>();
const scenes = ref<ISMapScene[]>([]);

onMounted(async () => {
  let [error, result] = await useTryCatchPromise(axios.get("/configs/scenes.json"));
  if (result) {
    scenes.value = result.data;
  }
});

const easingFunctions = {
  easing: function (t: number) {
    return t;
  },
  // start slow and gradually increase speed
  easeInCubic: function (t: number) {
    return t * t * t;
  },
  // start fast with a long, slow wind-down
  easeOutQuint: function (t: number) {
    return 1 - Math.pow(1 - t, 5);
  },
  // slow start and finish with fast middle
  easeInOutCirc: function (t: number) {
    return t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
  },
  // fast start with a "bounce" at the end
  easeOutBounce: function (t: number) {
    var n1 = 7.5625;
    var d1 = 2.75;

    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  },
};
const handleNavToScene = (scene: ISMapScene) => {
  if (props.map) {
    console.log("aaaa");

    let { center, zoom, pitch = 0, bearing = 0 } = scene.view;

    props.map.flyTo({
      center,
      zoom,
      pitch,
      bearing,

      duration: 4000, // Animate over 2 seconds
      // essential: true, // This animation is considered essential with respect to prefers-reduced-motion
      //animate: true,
      //@ts-ignore
      // preloadOnly: true,
      curve: 1,
      speed: 0.8,
      easing: easingFunctions.easing,
    });

    // props.map.easeTo({
    //   center,
    //   zoom,
    //   pitch,
    //   bearing,
    //   duration: 5000, // Animate over 5 seconds
    //   essential: true, // This animation is considered essential with respect to prefers-reduced-motion
    //   animate: true,

    //   //@ts-ignore
    //   curve: 1.2,
    //   speed: 0.2,
    //   easing: easingFunctions.easeOutQuint,
    // });
  }
};
</script>

<style scoped lang="less">
.sceneview-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: auto;
  max-height: 600px;

  .scene-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    padding: 8px 2px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.103);
    }
  }
}
.toolbar-item-button {
  width: 38px;
  height: 38px;
  cursor: pointer;
  background-color: var(--theme-color);
  border-radius: 0;
  border-width: 0;
  // border-style: solid;
  // border-color: #666666;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  &:hover {
    background-color: #666666;
  }
  // &:last-child {
  //   border-bottom-width: 1px;
  // }
}
</style>
