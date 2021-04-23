export const server = {
  shop: "/financial-shop-server/intf/h5/",
  file: "/file-server/",
  user: "/isales-user/agent/",
  workBench: "/isales-work-bench/agent/",
  isalesWxwork: "/isales-wxwork/",
  wxwork: "/isales-wxwork/agent/",
  bench: "/isales-work-bench/",
  iwxwork: "/isales-wxwork/",
  isalesInformation: "/isales-information/"
};

/**
 * 未登录或需重新登录的状态码
 * 5003 ：当前用户已在别处登录，请尝试更改密码或重新登录！
 * 101401 ：请求中不含token，请重新登陆！
 * 101402 ：token 解析失败，请尝试重新登录！
 * 101403 ：token 已过期，请重新登录！
 * 101404 ：token 已过期未找到，请重新登录！
 */
export const logoutCodeList = [5003, 101401, 101402, 101403, 101404];
