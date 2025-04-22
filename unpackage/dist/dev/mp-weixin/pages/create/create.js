"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const aip_api = require("../../aip/api.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_textarea2 = common_vendor.resolveComponent("u-textarea");
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_u_list_item2 = common_vendor.resolveComponent("u-list-item");
  const _easycom_u_list2 = common_vendor.resolveComponent("u-list");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_icon2 + _easycom_u_input2 + _easycom_u_textarea2 + _easycom_u_divider2 + _easycom_uni_segmented_control2 + _easycom_uni_tag2 + _easycom_u_list_item2 + _easycom_u_list2 + _easycom_up_popup2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_textarea = () => "../../uni_modules/uview-plus/components/u-textarea/u-textarea.js";
const _easycom_u_divider = () => "../../uni_modules/uview-plus/components/u-divider/u-divider.js";
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_u_list_item = () => "../../uni_modules/uview-plus/components/u-list-item/u-list-item.js";
const _easycom_u_list = () => "../../uni_modules/uview-plus/components/u-list/u-list.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_up_icon + _easycom_u_input + _easycom_u_textarea + _easycom_u_divider + _easycom_uni_segmented_control + _easycom_uni_tag + _easycom_u_list_item + _easycom_u_list + _easycom_up_popup)();
}
const _sfc_main = {
  __name: "create",
  setup(__props) {
    const show = common_vendor.ref(false);
    const close = () => {
      show.value = !show.value;
    };
    const items = ["我的关注", "最近浏览"];
    const current = common_vendor.ref(0);
    const list = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      aip_api.notice().then((res) => {
        list.value = res;
        common_vendor.index.__f__("log", "at pages/create/create.vue:96", list.value);
      });
    });
    const onClickItem = (e) => {
      if (current.value != e.currentIndex) {
        current.value = e.currentIndex;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "close",
          size: "25",
          color: "#000"
        }),
        b: common_assets._imports_0$1,
        c: common_vendor.p({
          placeholder: "请输入标题",
          border: "surround",
          clearable: true
        }),
        d: common_vendor.p({
          placeholder: "请输入内容"
        }),
        e: common_assets._imports_1,
        f: common_vendor.p({
          name: "arrow-right",
          size: "13"
        }),
        g: common_vendor.o(close),
        h: common_vendor.p({
          name: "close",
          size: "18",
          color: "#000"
        }),
        i: common_vendor.o(onClickItem),
        j: common_vendor.p({
          current: current.value,
          values: items,
          styleType: "button",
          activeColor: "#4cd964"
        }),
        k: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.name),
            c: "19bfcc6e-10-" + i0 + "," + ("19bfcc6e-9-" + i0),
            d: index,
            e: "19bfcc6e-9-" + i0 + ",19bfcc6e-8"
          };
        }),
        l: common_vendor.p({
          text: "item",
          inverted: true,
          size: "mini",
          circle: "true",
          type: "primary"
        }),
        m: current.value === 0,
        n: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.name),
            c: "19bfcc6e-13-" + i0 + "," + ("19bfcc6e-12-" + i0),
            d: index,
            e: "19bfcc6e-12-" + i0 + ",19bfcc6e-11"
          };
        }),
        o: common_vendor.p({
          text: "item",
          inverted: true,
          size: "mini",
          circle: "true",
          type: "primary"
        }),
        p: current.value === 1,
        q: common_vendor.o(close),
        r: common_vendor.p({
          show: show.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/create/create.js.map
