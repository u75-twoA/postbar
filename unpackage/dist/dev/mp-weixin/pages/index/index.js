"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const aip_api = require("../../aip/api.js");
if (!Array) {
  const _easycom_up_avatar2 = common_vendor.resolveComponent("up-avatar");
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_scroll_list2 = common_vendor.resolveComponent("up-scroll-list");
  (_easycom_up_avatar2 + _easycom_up_search2 + _easycom_up_icon2 + _easycom_up_scroll_list2)();
}
const _easycom_up_avatar = () => "../../uni_modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_up_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_scroll_list = () => "../../uni_modules/uview-plus/components/u-scroll-list/u-scroll-list.js";
if (!Math) {
  (_easycom_up_avatar + _easycom_up_search + _easycom_up_icon + _easycom_up_scroll_list)();
}
const src = "";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const buttonStyle = {
      color: "white",
      backgroundColor: "#00aaff",
      padding: "5px 10px",
      borderRadius: "5px",
      border: "none"
    };
    const list = common_vendor.ref([]);
    const cardList = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      aip_api.apiSendpost().then((res) => {
        list.value = res;
      });
      aip_api.apiCard().then((res) => {
        cardList.value = res;
      });
    });
    const search = () => {
    };
    const change = (item) => {
      item.is_p = !item.is_p;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          src
        }),
        b: common_vendor.o(search),
        c: common_vendor.o(($event) => keyword.value = $event),
        d: common_vendor.p({
          placeholder: "搜索吧/帖子",
          shape: "round",
          clearabled: true,
          actionStyle: buttonStyle,
          bgColor: "#FFF",
          modelValue: keyword.value
        }),
        e: common_vendor.p({
          name: "bookmark",
          size: "30",
          color: "#696969"
        }),
        f: common_vendor.p({
          name: "arrow-right",
          size: "15"
        }),
        g: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.f(item, (item1, index1, i1) => {
              return {
                a: item1.image,
                b: common_vendor.t(item1.name),
                c: index1
              };
            }),
            b: index
          };
        }),
        h: common_vendor.f(cardList.value, (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.tag1),
            d: common_vendor.t(item.tag2),
            e: common_vendor.t(item.is_p ? "已关注" : "+关注"),
            f: common_vendor.n(item.is_p ? "not-attention" : "is-attention"),
            g: common_vendor.o(($event) => change(item), index),
            h: common_vendor.t(item.title),
            i: common_vendor.t(item.content),
            j: item.image,
            k: "0b1a49d8-5-" + i0,
            l: common_vendor.t(item.shares),
            m: "0b1a49d8-6-" + i0,
            n: common_vendor.t(item.comments),
            o: "0b1a49d8-7-" + i0,
            p: common_vendor.t(item.likes),
            q: index
          };
        }),
        i: common_assets._imports_0,
        j: common_vendor.p({
          name: "share-square",
          size: "20"
        }),
        k: common_vendor.p({
          name: "chat",
          size: "20"
        }),
        l: common_vendor.p({
          name: "thumb-up",
          size: "20"
        }),
        m: common_vendor.gei(_ctx, "")
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
