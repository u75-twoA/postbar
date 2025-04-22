"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
  __name: "mail",
  setup(__props) {
    common_vendor.onLoad(() => {
      aip_api.chat().then((res) => {
        list.value = res;
      });
    });
    const list = common_vendor.ref([]);
    const select = common_vendor.ref(true);
    const tchange = () => {
      select.value = true;
    };
    const lchange = () => {
      select.value = false;
    };
    const golove = () => {
      common_vendor.index.navigateTo({
        url: "/pages/love/love"
      });
    };
    const goreply = () => {
      common_vendor.index.navigateTo({
        url: "/pages/mail/reply/reply"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "email",
          size: select.value ? "55" : "45",
          color: select.value ? "#1E90FF" : "#778899"
        }),
        b: common_vendor.n(select.value ? "u-tz" : "tz"),
        c: common_vendor.o(tchange),
        d: common_vendor.s(select.value ? "background-color: #F8F8FF;" : "background-color: #fff;"),
        e: common_vendor.p({
          name: "chat",
          size: select.value ? "45" : "55",
          color: select.value ? "#778899" : "#1E90FF"
        }),
        f: common_vendor.n(select.value ? "lz" : "u-lz"),
        g: common_vendor.o(lchange),
        h: common_vendor.s(select.value ? "background-color: #fff;" : "background-color: #F8F8FF;"),
        i: common_assets._imports_0$2,
        j: common_vendor.p({
          name: "arrow-right",
          size: "18"
        }),
        k: common_assets._imports_1$1,
        l: common_vendor.o(($event) => golove()),
        m: common_vendor.p({
          name: "arrow-right",
          size: "18"
        }),
        n: common_assets._imports_2,
        o: common_vendor.o(($event) => goreply()),
        p: common_vendor.p({
          name: "arrow-right",
          size: "18"
        }),
        q: common_assets._imports_3,
        r: common_vendor.p({
          name: "arrow-right",
          size: "18"
        }),
        s: select.value,
        t: common_vendor.p({
          name: "chat",
          size: "28"
        }),
        v: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.category),
            c: common_vendor.t(item.date),
            d: index
          };
        }),
        w: common_assets._imports_4,
        x: !select.value,
        y: common_vendor.gei(_ctx, "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-265cfd4d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mail/mail.js.map
