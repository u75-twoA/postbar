"use strict";
const common_vendor = require("../../common/vendor.js");
const aip_api = require("../../aip/api.js");
if (!Array) {
  const _easycom_up_lazy_load2 = common_vendor.resolveComponent("up-lazy-load");
  const _easycom_up_waterfall2 = common_vendor.resolveComponent("up-waterfall");
  (_easycom_up_lazy_load2 + _easycom_up_waterfall2)();
}
const _easycom_up_lazy_load = () => "../../uni_modules/uview-plus/components/u-lazy-load/u-lazy-load.js";
const _easycom_up_waterfall = () => "../../uni_modules/uview-plus/components/u-waterfall/u-waterfall.js";
if (!Math) {
  (_easycom_up_lazy_load + _easycom_up_waterfall)();
}
const _sfc_main = {
  __name: "enter",
  setup(__props) {
    const flowList = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      aip_api.waterfall().then((res) => {
        flowList.value = res;
        common_vendor.index.__f__("log", "at pages/enter/enter.vue:75", flowList.value, "flowList.value");
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          leftList
        }, s0, i0) => {
          return {
            a: common_vendor.f(leftList, (item, index, i1) => {
              return {
                a: "0a5256c0-1-" + i0 + "-" + i1 + ",0a5256c0-0",
                b: common_vendor.p({
                  threshold: "-450",
                  image: item.image,
                  index,
                  ["border-radius"]: "10"
                }),
                c: common_vendor.t(item.description),
                d: item.avatar,
                e: common_vendor.t(item.name),
                f: common_vendor.t(item.tag1),
                g: common_vendor.t(item.tag2),
                h: index
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "left",
          path: "a",
          vueId: "0a5256c0-0"
        }),
        b: common_vendor.w(({
          rightList
        }, s0, i0) => {
          return {
            a: common_vendor.f(rightList, (item, index, i1) => {
              return {
                a: "0a5256c0-2-" + i0 + "-" + i1 + ",0a5256c0-0",
                b: common_vendor.p({
                  threshold: "-450",
                  image: item.image,
                  index,
                  ["border-radius"]: "10"
                }),
                c: common_vendor.t(item.description),
                d: item.avatar,
                e: common_vendor.t(item.name),
                f: common_vendor.t(item.tag1),
                g: common_vendor.t(item.tag2),
                h: index
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "right",
          path: "b",
          vueId: "0a5256c0-0"
        }),
        c: common_vendor.o(($event) => flowList.value = $event),
        d: common_vendor.p({
          modelValue: flowList.value
        }),
        e: common_vendor.gei(_ctx, "")
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/enter/enter.js.map
