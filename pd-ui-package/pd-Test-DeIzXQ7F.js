import { defineComponent as p, createElementBlock as d, openBlock as a, createElementVNode as e, renderSlot as u, toDisplayString as o, unref as i } from "vue";
import { useLocale as c } from "./pd-ui-package.js";
import { _ as f } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const m = { class: "pd-test" }, _ = {
  name: "pd-Button"
}, b = /* @__PURE__ */ p({
  ..._,
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(n) {
    const { t: s } = c(), l = () => {
      alert("点击了按钮");
    };
    return (r, t) => (a(), d("div", m, [
      t[0] || (t[0] = e("h1", null, "pd-Test", -1)),
      e("button", {
        class: "pd-test-btn",
        onClick: l
      }, o(i(s)("test.button")), 1),
      e("p", null, "参数内容：" + o(n.title), 1),
      t[1] || (t[1] = e("p", null, "插槽内容：", -1)),
      u(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), C = /* @__PURE__ */ f(b, [["__scopeId", "data-v-b16a749b"]]);
export {
  C as default
};
