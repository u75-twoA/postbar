"use strict";
const common_vendor = require("../common/vendor.js");
const aip_http = require("./http.js");
const aip_http1 = require("./http1.js");
const apiSendpost = () => {
  return aip_http1.http("/api/sendpost");
};
const waterfall = () => {
  return aip_http.http("/waterfall");
};
const adminLike = () => {
  return aip_http1.http("/admin/like");
};
const notice = () => {
  return aip_http.http("/notice");
};
const chat = () => {
  return aip_http.http("/chat");
};
const apiCard = () => {
  return aip_http1.http("/api/card");
};
const love = () => {
  return aip_http.http("/love");
};
const reply = () => {
  return aip_http.http("/reply");
};
function login(data) {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: "http://192.168.1.102:3000/api/auth/login",
      method: "POST",
      data,
      header: {
        "token": common_vendor.index.getStorageSync("token") || ""
      },
      success: (res) => {
        resolve(res.data);
      }
    });
  });
}
exports.adminLike = adminLike;
exports.apiCard = apiCard;
exports.apiSendpost = apiSendpost;
exports.chat = chat;
exports.login = login;
exports.love = love;
exports.notice = notice;
exports.reply = reply;
exports.waterfall = waterfall;
//# sourceMappingURL=../../.sourcemap/mp-weixin/aip/api.js.map
