"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const aip_api = require("../../aip/api.js");
const _sfc_main = {
  __name: "love",
  setup(__props) {
    const list = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      aip_api.love().then((res) => {
        list.value = res;
        common_vendor.index.__f__("log", "at pages/love/love.vue:40", list.value);
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: item.avata,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.date),
            d: common_vendor.t(item.title),
            e: index
          };
        }),
        b: common_assets._imports_0$4,
        c: common_vendor.gei(_ctx, "")
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/love/love.js.map
