import { defineComponent as p, createElementBlock as d, openBlock as a, createElementVNode as n, renderSlot as u, toDisplayString as r, unref as c } from "vue";
import { useLocale as i } from "./pd-ui-package.js";
const f = { class: "pd-test" }, _ = {
  name: "pd-Button"
}, m = /* @__PURE__ */ p({
  ..._,
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { t: s } = i(), o = () => {
      alert("点击了按钮");
    };
    return (l, t) => (a(), d("div", f, [
      t[0] || (t[0] = n("h1", null, "pd-Test", -1)),
      n("button", {
        class: "pd-test-btn",
        onClick: o
      }, r(c(s)("test.button")), 1),
      n("p", null, "参数内容：" + r(e.title), 1),
      t[1] || (t[1] = n("p", null, "插槽内容：", -1)),
      u(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), b = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [l, t] of s)
    o[l] = t;
  return o;
}, g = /* @__PURE__ */ b(m, [["__scopeId", "data-v-b16a749b"]]);
export {
  g as default
};
