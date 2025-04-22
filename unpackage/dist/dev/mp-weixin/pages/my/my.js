"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const aip_api = require("../../aip/api.js");
if (!Array) {
  const _easycom_up_cell2 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group2 = common_vendor.resolveComponent("up-cell-group");
  (_easycom_up_cell2 + _easycom_up_cell_group2)();
}
const _easycom_up_cell = () => "../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_up_cell_group = () => "../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_up_cell + _easycom_up_cell_group)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const setFun = () => {
      common_vendor.index.showModal({
        title: "温馨提示",
        content: "请授权微信登录后才能正常使用小程序",
        success(res) {
          if (res.confirm) {
            common_vendor.index.login({
              success: (data) => {
                common_vendor.index.__f__("log", "at pages/my/my.vue:88", data);
                aip_api.login(data).then((res2) => {
                  common_vendor.index.__f__("log", "at pages/my/my.vue:90", res2);
                });
              }
            });
          }
        },
        fail(err) {
          common_vendor.index.__f__("log", "at pages/my/my.vue:110", err, "err");
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.o(setFun),
        c: common_assets._imports_1$2,
        d: common_assets._imports_2$1,
        e: common_assets._imports_3$1,
        f: common_assets._imports_4$1,
        g: common_vendor.p({
          icon: "account",
          title: "个人信息",
          isLink: true
        }),
        h: common_vendor.p({
          icon: "kefu-ermai",
          title: "用户反馈",
          isLink: true
        }),
        i: common_vendor.p({
          icon: "email",
          title: "我的邮件",
          isLink: true
        }),
        j: common_vendor.p({
          icon: "gift",
          title: "分享有礼",
          isLink: true,
          border: false
        }),
        k: common_vendor.p({
          border: false
        }),
        l: common_vendor.gei(_ctx, "")
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
