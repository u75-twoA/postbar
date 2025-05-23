"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 是否虚线
    dashed: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.divider.dashed
    },
    // 是否细线
    hairline: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.divider.hairline
    },
    // 是否以点替代文字，优先于text字段起作用
    dot: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.divider.dot
    },
    // 内容文本的位置，left-左边，center-中间，right-右边
    textPosition: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.divider.textPosition
    },
    // 文本内容
    text: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.divider.text
    },
    // 文本大小
    textSize: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.divider.textSize
    },
    // 文本颜色
    textColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.divider.textColor
    },
    // 线条颜色
    lineColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.divider.lineColor
    }
  }
});
exports.props = props;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-divider/props.js.map
