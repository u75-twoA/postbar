"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const aip_api = require("../../../aip/api.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = {
  __name: "reply",
  setup(__props) {
    const list = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      aip_api.reply().then((res) => {
        list.value = res;
        common_vendor.index.__f__("log", "at pages/mail/reply/reply.vue:56", list.value);
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
            e: "10e735fe-0-" + i0,
            f: "10e735fe-1-" + i0,
            g: index
          };
        }),
        b: common_assets._imports_0$4,
        c: common_vendor.p({
          name: "chat",
          size: "35rpx"
        }),
        d: common_vendor.p({
          name: "thumb-up",
          size: "35rpx"
        }),
        e: common_vendor.gei(_ctx, "")
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/mail/reply/reply.js.map
