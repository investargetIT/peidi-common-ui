import { defineComponent as x, ref as c, watch as g, reactive as _, resolveComponent as m, createBlock as E, openBlock as U, unref as s, withCtx as d, createVNode as t, createElementVNode as k, createTextVNode as B, toDisplayString as N } from "vue";
import { a as S } from "./index-3k1IXN1T.js";
import { useLocale as R } from "./pd-ui-package.js";
import { a3 as w } from "./index-CAw0rXjE.js";
const j = { class: "dialog-footer" }, z = {
  name: "pd-PwdChangeForm"
}, T = /* @__PURE__ */ x({
  ...z,
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    requestConfig: {
      type: Object,
      required: !0
      // default: () => ({
      //   url: "", // 默认URL
      //   method: "POST",
      //   headers: {},
      //   // 可以添加其他axios配置项，如timeout
      //   timeout: 1000,
      // }),
    }
  },
  emits: ["update:visible"],
  setup(b, { emit: h }) {
    const { t: o } = R(), p = b, C = h, i = c(p.visible);
    g(
      () => p.visible,
      (l) => {
        i.value = l;
      }
    ), g(i, (l) => {
      C("update:visible", l), l || (r.old = "", r.new = "", r.confirm = "", u.value?.resetFields());
    });
    const r = _({
      old: "",
      new: "",
      confirm: ""
    }), v = (l, e, n) => {
      e !== r.new ? n(new Error(o("pwdChangeForm.confirmPwdError"))) : n();
    }, V = _({
      old: [
        {
          required: !0,
          message: o("pwdChangeForm.oldPwdPlaceholder"),
          trigger: "blur"
        }
      ],
      new: [
        {
          required: !0,
          message: o("pwdChangeForm.newPwdPlaceholder"),
          trigger: "blur"
        }
      ],
      confirm: [
        {
          required: !0,
          message: o("pwdChangeForm.confirmPwdPlaceholder"),
          trigger: "blur"
        },
        { required: !0, validator: v, trigger: "blur" }
      ]
    }), u = c(), F = async () => {
      u.value?.validate(async (l) => {
        if (l)
          try {
            const e = await S({
              ...p.requestConfig,
              data: {
                identifier: p.requestConfig.data.identifier,
                oldPassword: r.old,
                newPassword: r.new
              }
            });
            e.data.code === 200 ? (w.success(o("pwdChangeForm.pwdChangeSuccess")), i.value = !1) : w.error(
              e.data.msg || o("pwdChangeForm.pwdChangeError")
            );
          } catch (e) {
            w.error(e.message || o("pwdChangeForm.pwdChangeError"));
          }
      });
    };
    return (l, e) => {
      const n = m("el-input"), f = m("el-form-item"), P = m("el-form"), y = m("el-button"), q = m("el-dialog");
      return U(), E(q, {
        modelValue: i.value,
        "onUpdate:modelValue": e[3] || (e[3] = (a) => i.value = a),
        title: s(o)("pwdChangeForm.title"),
        width: "500"
      }, {
        footer: d(() => [
          k("div", j, [
            t(y, {
              type: "primary",
              onClick: F
            }, {
              default: d(() => [
                B(N(s(o)("pwdChangeForm.submit")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: d(() => [
          t(P, {
            model: r,
            rules: V,
            ref_key: "formRef",
            ref: u,
            "label-width": s(o)("global.locales") === "zh-cn" ? "100px" : "150px",
            "label-position": "left"
          }, {
            default: d(() => [
              t(f, {
                label: s(o)("pwdChangeForm.oldPwd"),
                prop: "old"
              }, {
                default: d(() => [
                  t(n, {
                    modelValue: r.old,
                    "onUpdate:modelValue": e[0] || (e[0] = (a) => r.old = a),
                    type: "password",
                    "show-password": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              t(f, {
                label: s(o)("pwdChangeForm.newPwd"),
                prop: "new"
              }, {
                default: d(() => [
                  t(n, {
                    modelValue: r.new,
                    "onUpdate:modelValue": e[1] || (e[1] = (a) => r.new = a),
                    type: "password",
                    "show-password": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              t(f, {
                label: s(o)("pwdChangeForm.confirmPwd"),
                prop: "confirm"
              }, {
                default: d(() => [
                  t(n, {
                    modelValue: r.confirm,
                    "onUpdate:modelValue": e[2] || (e[2] = (a) => r.confirm = a),
                    type: "password",
                    "show-password": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model", "rules", "label-width"])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  T as default
};
