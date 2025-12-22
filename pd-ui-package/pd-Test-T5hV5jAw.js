import { defineComponent as r, createElementBlock as d, openBlock as p, createElementVNode as o, renderSlot as a, toDisplayString as u } from "vue";
const c = { class: "pd-test" }, i = {
  name: "pd-Button"
}, _ = /* @__PURE__ */ r({
  ...i,
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const l = () => {
      alert("点击了按钮");
    };
    return (n, t) => (p(), d("div", c, [
      t[0] || (t[0] = o("h1", null, "pd-Test", -1)),
      o("button", {
        class: "pd-test-btn",
        onClick: l
      }, "Button"),
      o("p", null, "参数内容：" + u(e.title), 1),
      t[1] || (t[1] = o("p", null, "插槽内容：", -1)),
      a(n.$slots, "default", {}, void 0, !0)
    ]));
  }
}), f = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [t, s] of l)
    n[t] = s;
  return n;
}, k = /* @__PURE__ */ f(_, [["__scopeId", "data-v-db3d1350"]]);
export {
  k as default
};
