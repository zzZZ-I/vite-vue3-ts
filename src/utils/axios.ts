import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { logoutCodeList } from "../api/config";

axios.defaults.timeout = 20000;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

interface RequestData {
  [prop: string]: any;
}
// // 参数字符串化，post使用
// const stringify = function (data: RequestData) {
//   if (!data) return ""
//   const keys = Object.keys(data)
//   const argsStr = keys.reduce((prev, next) => prev + "&" + next + "=" + data[next], "")
//   return argsStr.substr(1)
// }
// 请求拦截器
axios.interceptors.request.use(
  // eslint-disable-next-line func-names
  function (config: AxiosRequestConfig) {
    const path = (config.url || "").split("?")[0];
    let search = (config.url || "").split("?")[1] || "";

    // 添加时间戳
    search = `?_v=${Date.now()}${search ? `&${search}` : ""}`;
    // eslint-disable-next-line no-param-reassign
    config.url = path + search;
    return config;
  },
  // eslint-disable-next-line func-names
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  // eslint-disable-next-line func-names
  function (response: AxiosResponse) {
    if (logoutCodeList.includes(response.data.code)) {
      // login()
      return Promise.reject(new Error("请重新登录"));
    }
    return response.data || response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// get 请求
const get = (url: string, data?: RequestData, options?: any) =>
  axios({
    method: "get",
    url,
    params: {
      ...data
    },
    ...options
  });

// post 请求
const post = (url: string, data?: RequestData, options?: any) =>
  axios({
    method: "post",
    url,
    data,
    ...options
  });

// delete请求
const del = (url: string, data?: RequestData, options?: any) =>
  axios({
    method: "delete",
    url,
    data,
    ...options
  });

// put请求
const put = (url: string, data?: RequestData, options?: any) =>
  axios({
    method: "put",
    url,
    data,
    ...options
  });

export { get, post, del, put };
