import { ISDistrict } from "@/types/sxgis";
import type { LngLatBoundsLike } from "mapbox-gl";

export interface ISDistrictTree extends ISDistrict {
  bbox?: LngLatBoundsLike;
  children: ISDistrictTree[];
}
const districtTree = {
  data: [
    {
      name: "西安市",
      pac: "610100000",
      bbox: [
        [107.6583195, 33.69593961],
        [109.8240627, 34.74393535],
      ],
      children: [
        {
          name: "新城区",
          pac: "610102000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [108.9423919, 34.23595774],
            [109.0257702, 34.29828485],
          ],
        },
        {
          name: "碑林区",
          pac: "610103000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [108.905076, 34.23157621],
            [109.0015667, 34.26931022],
          ],
        },
        {
          name: "莲湖区",
          pac: "610104000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [108.8492218, 34.24089296],
            [108.9487448, 34.29432617],
          ],
        },
        {
          name: "灞桥区",
          pac: "610111000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [108.9908366, 34.16775971],
            [109.2730366, 34.45978303],
          ],
        },
        {
          name: "未央区",
          pac: "610112000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [108.7858187, 34.24752683],
            [109.0397493, 34.43815607],
          ],
        },
        {
          name: "雁塔区",
          pac: "610113000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [108.8025191, 34.16576281],
            [109.0500166, 34.25690401],
          ],
        },
        {
          name: "阎良区",
          pac: "610114000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [109.149471, 34.58821011],
            [109.4275942, 34.74393535],
          ],
        },
        {
          name: "临潼区",
          pac: "610115000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [109.093469, 34.27245765],
            [109.4600575, 34.65953665],
          ],
        },
        {
          name: "高陵区",
          pac: "610117000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [108.9508098, 34.42208193],
            [109.1723855, 34.59763632],
          ],
        },
        {
          name: "鄠邑区",
          pac: "610118000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [108.3665356, 33.76425217],
            [108.768826, 34.26621085],
          ],
        },
        {
          name: "蓝田县",
          pac: "610122000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [109.1258834, 33.83969937],
            [109.8240627, 34.33775911],
          ],
        },
        {
          name: "周至县",
          pac: "610124000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [107.6583195, 33.69593961],
            [108.5151292, 34.2340272],
          ],
        },
        {
          name: "长安区",
          pac: "610116000",
          citycode: "610100000",
          cityname: "西安市",
          bbox: [
            [108.6371024, 33.79247508],
            [109.226427, 34.29954954],
          ],
        },
      ],
    },
    {
      name: "铜川市",
      pac: "610200000",
      bbox: [
        [108.5794451, 34.80578348],
        [109.4908198, 35.58361993],
      ],
      children: [
        {
          name: "王益区",
          pac: "610202000",
          citycode: "610200000",
          cityname: "铜川市",
          bbox: [
            [108.9482617, 34.95337184],
            [109.1479331, 35.19844435],
          ],
        },
        {
          name: "印台区",
          pac: "610203000",
          citycode: "610200000",
          cityname: "铜川市",
          bbox: [
            [108.8523232, 34.98486533],
            [109.4420892, 35.36342379],
          ],
        },
        {
          name: "耀州区",
          pac: "610204000",
          citycode: "610200000",
          cityname: "铜川市",
          bbox: [
            [108.5794451, 34.80578348],
            [109.0932192, 35.3228762],
          ],
        },
        {
          name: "宜君县",
          pac: "610222000",
          citycode: "610200000",
          cityname: "铜川市",
          bbox: [
            [108.9201067, 35.12286952],
            [109.4908198, 35.58361993],
          ],
        },
      ],
    },
    {
      name: "宝鸡市",
      pac: "610300000",
      bbox: [
        [106.3067221, 33.58095285],
        [108.0488438, 35.10513212],
      ],
      children: [
        {
          name: "渭滨区",
          pac: "610302000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [106.8915736, 34.12135572],
            [107.323438, 34.48255732],
          ],
        },
        {
          name: "金台区",
          pac: "610303000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [106.8917573, 34.3503459],
            [107.2880526, 34.53166161],
          ],
        },
        {
          name: "陈仓区",
          pac: "610304000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [106.3067221, 34.12679786],
            [107.5836819, 34.74950726],
          ],
        },
        {
          name: "凤翔区",
          pac: "610322000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [107.1763555, 34.3453768],
            [107.6464149, 34.7560906],
          ],
        },
        {
          name: "岐山县",
          pac: "610323000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [107.5277863, 34.13146525],
            [107.8774229, 34.61537075],
          ],
        },
        {
          name: "扶风县",
          pac: "610324000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [107.7506782, 34.2149374],
            [108.0488438, 34.63249605],
          ],
        },
        {
          name: "陇县",
          pac: "610327000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [106.4431504, 34.58534371],
            [107.1327251, 35.10513212],
          ],
        },
        {
          name: "千阳县",
          pac: "610328000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [106.9439754, 34.56223881],
            [107.3764894, 34.9489127],
          ],
        },
        {
          name: "麟游县",
          pac: "610329000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [107.3203534, 34.55800383],
            [108.0306452, 34.97576518],
          ],
        },
        {
          name: "凤县",
          pac: "610330000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [106.403697, 33.58095285],
            [107.1243899, 34.30474867],
          ],
        },
        {
          name: "太白县",
          pac: "610331000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [107.0539374, 33.64578968],
            [107.7780274, 34.17154456],
          ],
        },
        {
          name: "眉县",
          pac: "610326000",
          citycode: "610300000",
          cityname: "宝鸡市",
          bbox: [
            [107.6441853, 33.97616307],
            [108.0327916, 34.32320361],
          ],
        },
      ],
    },
    {
      name: "咸阳市",
      pac: "610400000",
      bbox: [
        [107.6481204, 34.19896376],
        [109.1733998, 35.54442672],
      ],
      children: [
        {
          name: "秦都区",
          pac: "610402000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.5601704, 34.23680949],
            [108.7976193, 34.49432037],
          ],
        },
        {
          name: "杨陵区",
          pac: "610403000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [107.9414044, 34.22261283],
            [108.1314913, 34.33522939],
          ],
        },
        {
          name: "渭城区",
          pac: "610404000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.668384, 34.32936059],
            [108.9577651, 34.48939695],
          ],
        },
        {
          name: "三原县",
          pac: "610422000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.7723733, 34.56401841],
            [109.1733998, 34.84183409],
          ],
        },
        {
          name: "泾阳县",
          pac: "610423000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.4948513, 34.4443309],
            [108.9728924, 34.73948485],
          ],
        },
        {
          name: "乾县",
          pac: "610424000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.0041747, 34.32580436],
            [108.4055235, 34.75467379],
          ],
        },
        {
          name: "礼泉县",
          pac: "610425000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.2937095, 34.3468296],
            [108.6962089, 34.8341104],
          ],
        },
        {
          name: "长武县",
          pac: "610428000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [107.6481204, 34.99433554],
            [107.9664169, 35.31234924],
          ],
        },
        {
          name: "旬邑县",
          pac: "610429000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.1253167, 34.94934113],
            [108.8700561, 35.54442672],
          ],
        },
        {
          name: "淳化县",
          pac: "610430000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.3078453, 34.71511462],
            [108.8209899, 35.04356445],
          ],
        },
        {
          name: "武功县",
          pac: "610431000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.0130354, 34.20231611],
            [108.3283465, 34.44273426],
          ],
        },
        {
          name: "兴平市",
          pac: "610481000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [108.296946, 34.19896376],
            [108.6218911, 34.44801886],
          ],
        },
        {
          name: "彬州市",
          pac: "610482000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [107.8144431, 34.8425293],
            [108.3526773, 35.28578801],
          ],
        },
        {
          name: "永寿县",
          pac: "610426000",
          citycode: "610400000",
          cityname: "咸阳市",
          bbox: [
            [107.9446413, 34.48418449],
            [108.3515217, 34.96268278],
          ],
        },
      ],
    },
    {
      name: "渭南市",
      pac: "610500000",
      bbox: [
        [108.9593817, 34.21040332],
        [110.6100596, 35.86808965],
      ],
      children: [
        {
          name: "临渭区",
          pac: "610502000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [109.3814121, 34.23838434],
            [109.7648788, 34.79499051],
          ],
        },
        {
          name: "华州区",
          pac: "610503000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [109.5994492, 34.21040332],
            [110.0363392, 34.61899507],
          ],
        },
        {
          name: "潼关县",
          pac: "610522000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [110.1589285, 34.39250083],
            [110.4243261, 34.65016024],
          ],
        },
        {
          name: "大荔县",
          pac: "610523000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [109.7059344, 34.56874164],
            [110.2697624, 35.02791083],
          ],
        },
        {
          name: "合阳县",
          pac: "610524000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [109.9761278, 34.97835848],
            [110.4086741, 35.42982059],
          ],
        },
        {
          name: "澄城县",
          pac: "610525000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [109.6808041, 34.92608992],
            [110.0936302, 35.44889317],
          ],
        },
        {
          name: "蒲城县",
          pac: "610526000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [109.3378414, 34.75053271],
            [109.9152841, 35.17613226],
          ],
        },
        {
          name: "白水县",
          pac: "610527000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [109.2758734, 35.06214853],
            [109.7651032, 35.45097173],
          ],
        },
        {
          name: "富平县",
          pac: "610528000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [108.9593817, 34.68638405],
            [109.4409418, 35.10551827],
          ],
        },
        {
          name: "韩城市",
          pac: "610581000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [110.1160996, 35.31308364],
            [110.6100596, 35.86808965],
          ],
        },
        {
          name: "华阴市",
          pac: "610582000",
          citycode: "610500000",
          cityname: "渭南市",
          bbox: [
            [109.8910063, 34.3672751],
            [110.2102592, 34.66836025],
          ],
        },
      ],
    },
    {
      name: "延安市",
      pac: "610600000",
      bbox: [
        [107.6490683, 35.3439091],
        [110.5462337, 37.50035813],
      ],
      children: [
        {
          name: "宝塔区",
          pac: "610602000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [109.2365263, 36.17610026],
            [110.0916961, 37.03920163],
          ],
        },
        {
          name: "安塞区",
          pac: "610603000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [108.8459201, 36.51346601],
            [109.441038699999, 37.32634452],
          ],
        },
        {
          name: "延长县",
          pac: "610621000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [109.6855792, 36.27322997],
            [110.4981175, 36.77331919],
          ],
        },
        {
          name: "延川县",
          pac: "610622000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [109.6055202, 36.62153561],
            [110.4470665, 37.09843678],
          ],
        },
        {
          name: "子长市",
          pac: "610681000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [109.200974, 36.9946477],
            [110.037317, 37.50035813],
          ],
        },
        {
          name: "志丹县",
          pac: "610625000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [108.1990836, 36.35820677],
            [109.0619095, 37.19745869],
          ],
        },
        {
          name: "吴起县",
          pac: "610626000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [107.6490683, 36.55911496],
            [108.5496929, 37.40792985],
          ],
        },
        {
          name: "甘泉县",
          pac: "610627000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [108.7597461, 36.11663311],
            [109.5617102, 36.62746523],
          ],
        },
        {
          name: "富县",
          pac: "610628000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [108.4925132, 35.73356125],
            [109.7158158, 36.3877777],
          ],
        },
        {
          name: "洛川县",
          pac: "610629000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [109.3047047, 35.35237686],
            [109.7638568, 36.0696443],
          ],
        },
        {
          name: "宜川县",
          pac: "610630000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [109.6938788, 35.71062039],
            [110.5462337, 36.40219885],
          ],
        },
        {
          name: "黄龙县",
          pac: "610631000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [109.6476659, 35.40512689],
            [110.2812033, 36.03376392],
          ],
        },
        {
          name: "黄陵县",
          pac: "610632000",
          citycode: "610600000",
          cityname: "延安市",
          bbox: [
            [108.510635, 35.3439091],
            [109.454654, 35.82335525],
          ],
        },
      ],
    },
    {
      name: "汉中市",
      pac: "610700000",
      bbox: [
        [105.4882197, 32.14769354],
        [108.2795021, 33.87901259],
      ],
      children: [
        {
          name: "汉台区",
          pac: "610702000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [106.8548411, 33.02817526],
            [107.1747084, 33.36635155],
          ],
        },
        {
          name: "南郑区",
          pac: "610703000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [106.5029906, 32.40537971],
            [107.3730547, 33.12877632],
          ],
        },
        {
          name: "城固县",
          pac: "610722000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [107.0318664, 32.7506998],
            [107.4950835, 33.66901589],
          ],
        },
        {
          name: "洋县",
          pac: "610723000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [107.1843465, 33.03789863],
            [108.045693, 33.72078563],
          ],
        },
        {
          name: "西乡县",
          pac: "610724000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [107.257474, 32.53769477],
            [108.2360201, 33.22774887],
          ],
        },
        {
          name: "勉县",
          pac: "610725000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [106.3437768, 32.89278894],
            [106.9613943, 33.63719761],
          ],
        },
        {
          name: "宁强县",
          pac: "610726000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [105.4882197, 32.61874227],
            [106.5805126, 33.21210825],
          ],
        },
        {
          name: "略阳县",
          pac: "610727000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [105.6987749, 33.10928264],
            [106.5173205, 33.62361604],
          ],
        },
        {
          name: "镇巴县",
          pac: "610728000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [107.4240622, 32.14769354],
            [108.2795021, 32.84526378],
          ],
        },
        {
          name: "留坝县",
          pac: "610729000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [106.6377169, 33.28054258],
            [107.3366137, 33.87901259],
          ],
        },
        {
          name: "佛坪县",
          pac: "610730000",
          citycode: "610700000",
          cityname: "汉中市",
          bbox: [
            [107.6655037, 33.25791381],
            [108.1579861, 33.7517691],
          ],
        },
      ],
    },
    {
      name: "榆林市",
      pac: "610800000",
      bbox: [
        [107.2468631, 36.81597563],
        [111.2419402, 39.58525385],
      ],
      children: [
        {
          name: "榆阳区",
          pac: "610802000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [108.9386509, 37.81316088],
            [110.4053343, 38.92123438],
          ],
        },
        {
          name: "横山区",
          pac: "610803000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [108.9421377, 37.36283897],
            [110.0404581, 38.25215235],
          ],
        },
        {
          name: "府谷县",
          pac: "610822000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [110.3762782, 38.70916408],
            [111.2419402, 39.58525385],
          ],
        },
        {
          name: "靖边县",
          pac: "610824000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [108.2917057, 36.97456409],
            [109.3365538, 38.05156197],
          ],
        },
        {
          name: "定边县",
          pac: "610825000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [107.2468631, 36.81597563],
            [108.374253, 37.88778999],
          ],
        },
        {
          name: "绥德县",
          pac: "610826000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [110.0690179, 37.27330645],
            [110.6957667, 37.75363977],
          ],
        },
        {
          name: "佳县",
          pac: "610828000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [110.0308578, 37.69827438],
            [110.7532231, 38.38725497],
          ],
        },
        {
          name: "吴堡县",
          pac: "610829000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [110.5367379, 37.44016747],
            [110.7916595, 37.72908647],
          ],
        },
        {
          name: "清涧县",
          pac: "610830000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [109.9512526, 36.94280573],
            [110.6491443, 37.41512314],
          ],
        },
        {
          name: "子洲县",
          pac: "610831000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [109.4888444, 37.25583035],
            [110.1226176, 37.80307288],
          ],
        },
        {
          name: "神木市",
          pac: "610881000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [109.6575894, 38.2080703],
            [110.9180985, 39.45464148],
          ],
        },
        {
          name: "米脂县",
          pac: "610827000",
          citycode: "610800000",
          cityname: "榆林市",
          bbox: [
            [109.8170297, 37.65654383],
            [110.4924386, 38.08955584],
          ],
        },
      ],
    },
    {
      name: "安康市",
      pac: "610900000",
      bbox: [
        [108.0161817, 31.70667349],
        [110.2012982, 33.84266585],
      ],
      children: [
        {
          name: "汉滨区",
          pac: "610902000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [108.5005498, 32.36895975],
            [109.3845244, 33.28458986],
          ],
        },
        {
          name: "汉阴县",
          pac: "610921000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [108.1855222, 32.6397267],
            [108.7302868, 33.15714824],
          ],
        },
        {
          name: "石泉县",
          pac: "610922000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [108.0161817, 32.76270129],
            [108.4784993, 33.33994679],
          ],
        },
        {
          name: "宁陕县",
          pac: "610923000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [108.0381415, 33.11880904],
            [108.9461194, 33.84266585],
          ],
        },
        {
          name: "紫阳县",
          pac: "610924000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [108.0973294, 32.1322331],
            [108.7117766, 32.80088217],
          ],
        },
        {
          name: "岚皋县",
          pac: "610925000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [108.6242717, 31.9343002],
            [109.1748752, 32.54850865],
          ],
        },
        {
          name: "平利县",
          pac: "610926000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [108.9823075, 31.84617538],
            [109.5549048, 32.62866109],
          ],
        },
        {
          name: "镇坪县",
          pac: "610927000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [109.1862195, 31.70667349],
            [109.6359981, 32.22463468],
          ],
        },
        {
          name: "旬阳市",
          pac: "610928000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [108.9653962, 32.48156086],
            [109.8118329, 33.21136928],
          ],
        },
        {
          name: "白河县",
          pac: "610929000",
          citycode: "610900000",
          cityname: "安康市",
          bbox: [
            [109.632243, 32.54423101],
            [110.2012982, 32.91552052],
          ],
        },
      ],
    },
    {
      name: "商洛市",
      pac: "611000000",
      bbox: [
        [108.5707537, 33.09590769],
        [111.0316559, 34.43373721],
      ],
      children: [
        {
          name: "商州区",
          pac: "611002000",
          citycode: "611000000",
          cityname: "商洛市",
          bbox: [
            [109.501872, 33.63783567],
            [110.2486738, 34.18660686],
          ],
        },
        {
          name: "洛南县",
          pac: "611021000",
          citycode: "611000000",
          cityname: "商洛市",
          bbox: [
            [109.7375111, 33.85928912],
            [110.6719948, 34.43373721],
          ],
        },
        {
          name: "丹凤县",
          pac: "611022000",
          citycode: "611000000",
          cityname: "商洛市",
          bbox: [
            [110.1297515, 33.35901224],
            [110.8118035, 33.95148494],
          ],
        },
        {
          name: "商南县",
          pac: "611023000",
          citycode: "611000000",
          cityname: "商洛市",
          bbox: [
            [110.4017412, 33.09590769],
            [111.0316559, 33.74462607],
          ],
        },
        {
          name: "山阳县",
          pac: "611024000",
          citycode: "611000000",
          cityname: "商洛市",
          bbox: [
            [109.5396819, 33.16003578],
            [110.4900343, 33.70600256],
          ],
        },
        {
          name: "镇安县",
          pac: "611025000",
          citycode: "611000000",
          cityname: "商洛市",
          bbox: [
            [108.5707537, 33.12679892],
            [109.6200361, 33.70113958],
          ],
        },
        {
          name: "柞水县",
          pac: "611026000",
          citycode: "611000000",
          cityname: "商洛市",
          bbox: [
            [108.8253217, 33.42456935],
            [109.6057517, 33.92456642],
          ],
        },
      ],
    },
  ],
};

export default districtTree;