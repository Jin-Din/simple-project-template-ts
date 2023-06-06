import { usePubStore } from "@/store";
import * as turf from "@turf/turf";
const pubStore = usePubStore();
/**
 * 创建农机测试数据
 */
export const createVehicleTestData = async () => {
  let url = pubStore.urls.district.townPtUrl; //"http://210.74.129.81:8080/YouMapServer/rest/service/AnnTown/MapServer/0/query";
  let [error, result] = await useTryCatchPromise(
    axios.get(url, {
      params: {
        where: "1=1",
        returnGeometry: true,
        f: "json",
        fjson: "geojson",
        outFields: "*",
      },
    })
  );
  let catalogs = ["玉米收割机", "履带式收割机", "轮式拖拉机", "谷物联合收割机", "青(黄)饲料收割机", "玉米“5335”一体机", "小麦宽幅沟播机"];

  if (result) {
    let newFeatureCollection = {
      type: "FeatureCollection",
      features: [] as any[],
    };

    result.data.features.forEach((feature: any) => {
      let { properties, geometry, type } = feature;
      let { CITYCODE, COUNTYCODE, PAC, NAME, PAC_民政 } = properties;
      if (PAC.startsWith("6101")) return; // 西安跳过
      let { coordinates } = geometry;
      let count = (Math.random() * (50 - 10) + 10) / 10; //默认在 1 - 5
      for (let index = 0; index < count; index++) {
        let vTypeId = Math.floor(Math.random() * catalogs.length); //生成几个 0 到 catalogs.length 的随机整数（包括 0 和 4）
        let state = Math.floor(Math.random() * 2); //随机生成在线离线状态[0,1]
        let cloneFeature = { geometry, type, properties: {} };
        let xOffset = (Math.random() * (50 - 10) + 10) / 1000; // 取值在 0.001 - 0.005
        let yOffset = (Math.random() * (50 - 10) + 10) / 1000; // 取值在 0.01 - 0.05
        cloneFeature.properties = {
          CITYCODE,
          COUNTYCODE,
          PAC,
          TOWN: NAME,
          NAME: `${NAME}${index + 1}号机`,
          ...{
            vTypeId: vTypeId + "", //转换成字符串
            vTypeName: catalogs[vTypeId],
            vState: state + "", //是否在线，//转换成字符串
          },
        };
        cloneFeature.geometry = {
          type: "Point",
          coordinates: [coordinates[0] + xOffset, coordinates[1] + yOffset],
        };
        newFeatureCollection.features.push(cloneFeature);
      }
    });

    console.log(newFeatureCollection);
  }
};
//创建播种面积的测试数据
export const createAreaTestData = async () => {
  // let url = pubStore.urls.district.countyUrl;
  // console.log(url);

  // let [error, result] = await useTryCatchPromise(
  //   axios.get(url, {
  //     params: {
  //       where: "1=1",
  //       returnGeometry: true,
  //       f: "json",
  //       fjson: "geojson",
  //       outFields: "*",
  //     },
  //   })
  // );
  //调用简版的行政区划数据
  let [error, result] = await useTryCatchPromise(axios.get(`/data/maps/counties_full.json`));
  if (result) {
    let newFeature = {
      features: result.data.features.map((feature: any) => {
        let { properties } = feature;
        let { name: district, adcode } = properties;
        let pac = "" + adcode; // 转换为字符串
        if (pac.startsWith("6101")) return; // 西安跳过
        console.log(pac);
        // let pac: string = properties.PAC;
        //默认 0.1-0.3
        let random = (Math.random() * (30 - 10) + 10) / 100; //默认在 0.1 - 0.3
        //陕南三个县
        //陕南三个县特殊处理 6110, 商洛 6109,6107  取值在 0.05 - 0.10
        let southPacs = ["6107", "6109", "6110"];
        if (southPacs.some((item) => String(pac).startsWith(item))) {
          random = (Math.random() * (10 - 5) + 5) / 100; // 0.05 - 0.10
        }
        //陕北二个县  取值 0.07 - 0.10
        if (["6106", "6108"].some((item) => String(pac).startsWith(item))) {
          random = (Math.random() * (10 - 7) + 7) / 100; // 0.07 - 0.10
        }

        let total = formatArea(turf.area(feature.geometry) * random); //计算面积,平方米转 万亩
        let xiaomai = formatNumber(total * randomDoubleNum(50, 100, 1000));
        let daogu = formatNumber(total * randomDoubleNum(10, 20, 1000));
        let yumi = formatNumber(total * randomDoubleNum(20, 50, 1000));
        let other = formatNumber(total * randomDoubleNum(1, 10, 1000));
        return {
          district,
          pac,
          total,
          daogu,
          xiaomai,
          yumi,
          other,
        };
      }),
    } as GeoJSON.FeatureCollection;

    let areas = newFeature.features.map((item: any) => {
      return item.total;
    });

    areas.sort((a, b) => {
      return a - b;
    });
    console.log(areas);
    console.log(newFeature);
  }
};
//对离线的二次处理，目的是为了减少离线状态的个数
export const reduceOffline = () => {
  axios.get("/data/nj/vehicles.json").then((res) => {
    let features = res.data.features.map((feature: { properties: { vState: string } }) => {
      if (feature.properties.vState === "0") {
        // console.log("d");
        let s = String(Math.floor(Math.random() * 2));
        // console.log(s);

        feature.properties.vState = s;
        return feature;
      }

      return feature;
    });
    console.log(features.filter((item: { properties: { vState: string } }) => item.properties.vState === "0").length);
    console.log(features);
  });
};
/**
 * 计算面积,平方米转 万亩,保留3为小数
 */
const formatArea = (num: number) => {
  return Number((num / 666.667 / 10000).toFixed(3)); //计算面积,平方米转 万亩
};

const formatNumber = (num: number, precision: number = 2) => {
  return Number(num.toFixed(precision));
};
/**
 * 在最大值和最小值之间随机生成整数
 */
const randomIntNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * 在最大值和最小值之间随机生成整数,如 min:5,max:10,precision:100 => [0.05,0.10]
 */
const randomDoubleNum = (min: number = 5, max: number = 10, precision: number = 100) => {
  return (Math.random() * (max - min) + min) / 100;
};
/**
 * 合并所有区县（临时测试）
 */
export const combineCounties = async () => {
  let full = {
    type: "FeatureCollection",
    features: [],
  };

  // 生成一个Promise对象的数组
  const promises = ["西安市", "咸阳市", "宝鸡市", "渭南市", "铜川市", "延安市", "榆林市", "汉中市", "安康市", "商洛市"].map(function (city) {
    return axios.get(`/data/maps/${city}.json`);
  });

  Promise.all(promises)
    .then(function (posts) {
      //@ts-ignore
      full.features = posts.reduce((prev, item) => {
        return [...prev, ...item.data.features];
      }, []);

      console.log(full);
    })
    .catch(function (reason) {
      console.log("出错了", reason);
    });
};
