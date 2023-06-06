import { defineStore } from "pinia";

export interface ISUserInfo {
  username: string;
  fullname: string;
  usertype: string;
  email: string;
  mobilephone: string;
  orgname: string;
}
export interface ISUserState {
  isLogin: boolean;
  userInfo: ISUserInfo;
}

export const useUserStore = defineStore("userInfo", {
  state: (): ISUserState => {
    const isLogin = false; //process.env.NODE_ENV != "production";
    const userInfo: ISUserInfo = {
      username: "12345568@qq.com",
      fullname: "大树人",
      usertype: "",
      email: "",
      mobilephone: "",
      orgname: "",
    };
    return { userInfo, isLogin };
  },
  actions: {
    changeUserInfo(userInfo: ISUserInfo) {
      this.isLogin = true;
      this.userInfo = userInfo ?? { username: "12345568@qq.com", fullname: "大树人钱立" };
    },
    setLoginState(login: boolean) {
      this.isLogin = login;
    },
  },
  persist: {
    //开启持久化存储
    enabled: true,
    strategies: [
      {
        //指定paths中的属性使用localStorage 方式存储
        storage: localStorage,
        paths: ["Token"],
      },
      {
        //指定paths中的数据使用sessionStorage 方式存储
        storage: sessionStorage,
        paths: ["UserName", "Name", "Tel"],
      },
    ],
  },
});
