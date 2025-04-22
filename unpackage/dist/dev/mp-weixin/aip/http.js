"use strict";
const common_vendor = require("../common/vendor.js");
let baseUrl = "";
baseUrl = "http://127.0.0.1:4523/m1/6032339-5722127-default";
function http(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + url,
      data,
      method,
      header: {
        "token": common_vendor.index.getStorageSync("token") || ""
      },
      success: (res) => {
        resolve(res.data);
      }
    });
  });
}
exports.http = http;
//# sourceMappingURL=../../.sourcemap/mp-weixin/aip/http.js.map
