import { defineAsyncComponent as p } from "vue";
const s = /* @__PURE__ */ Object.assign({ "./pd-ui/pd-PwdChangeForm/pd-PwdChangeForm.vue": () => import("./pd-PwdChangeForm-CSVR5aUh.js"), "./pd-ui/pd-Test/pd-Test.vue": () => import("./pd-Test-T5hV5jAw.js") }), m = (o) => {
  for (const [e, n] of Object.entries(s)) {
    const t = e.slice(e.lastIndexOf("/") + 1, e.lastIndexOf("."));
    o.component(t, p(n));
  }
};
export {
  m as default
};
