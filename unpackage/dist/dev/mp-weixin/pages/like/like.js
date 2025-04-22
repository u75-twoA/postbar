"use strict";
const common_vendor = require("../../common/vendor.js");
const aip_api = require("../../aip/api.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = {
  __name: "like",
  setup(__props) {
    const list = common_vendor.ref([]);
    common_vendor.ref(false);
    common_vendor.onLoad(() => {
      aip_api.adminLike().then((res) => {
        list.value = res;
      });
    });
    const oncollect = (item) => {
      item.is_p = !item.is_p;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "arrow-left",
          size: "20"
        }),
        b: common_vendor.p({
          name: "more-dot-fill",
          size: "30"
        }),
        c: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.is_p ? "已关注" : "关注"),
            d: common_vendor.n(item.is_p ? "u-right-two" : "u-right"),
            e: common_vendor.o(($event) => oncollect(item), index),
            f: common_vendor.t(item.title),
            g: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/like/like.js.map
