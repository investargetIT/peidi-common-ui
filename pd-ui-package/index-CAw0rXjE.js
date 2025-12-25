import { getCurrentInstance as F, inject as j, ref as x, computed as u, unref as l, readonly as Ke, getCurrentScope as Mt, onScopeDispose as Lt, onMounted as He, nextTick as Ue, shallowRef as zt, watchEffect as Dt, watch as ee, isRef as At, warn as Ft, provide as Bt, defineComponent as _, createElementBlock as S, openBlock as v, mergeProps as kt, renderSlot as H, createElementVNode as C, normalizeClass as I, createVNode as ue, Transition as Ge, withCtx as Q, withDirectives as Ze, normalizeStyle as Je, createTextVNode as Vt, toDisplayString as We, vShow as Qe, shallowReactive as Ye, createBlock as R, createCommentVNode as W, resolveDynamicComponent as Rt, Fragment as Kt, withModifiers as Ht, isVNode as qe, render as Oe } from "vue";
var Ut = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value",
      alphaDescription: "alpha {alpha}, current color is {color}",
      hueLabel: "pick hue value",
      hueDescription: "hue {hue}, current color is {color}",
      svLabel: "pick saturation and brightness value",
      svDescription: "saturation {saturation}, brightness {brightness}, current color is {color}",
      predefineDescription: "select {value} as the color"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      close: "Close this dialog"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const Xe = Symbol(), Y = "el", Gt = "is-", N = (e, t, n, r, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), r && (s += `__${r}`), o && (s += `--${o}`), s;
}, et = Symbol("namespaceContextKey"), Zt = (e) => {
  const t = e || (F() ? j(et, x(Y)) : x(Y));
  return u(() => l(t) || Y);
}, pe = (e, t) => {
  const n = Zt(t);
  return {
    namespace: n,
    b: (c = "") => N(n.value, e, c, "", ""),
    e: (c) => c ? N(n.value, e, "", c, "") : "",
    m: (c) => c ? N(n.value, e, "", "", c) : "",
    be: (c, f) => c && f ? N(n.value, e, c, f, "") : "",
    em: (c, f) => c && f ? N(n.value, e, "", c, f) : "",
    bm: (c, f) => c && f ? N(n.value, e, c, "", f) : "",
    bem: (c, f, h) => c && f && h ? N(n.value, e, c, f, h) : "",
    is: (c, ...f) => {
      const h = f.length >= 1 ? f[0] : !0;
      return c && h ? `${Gt}${c}` : "";
    },
    cssVar: (c) => {
      const f = {};
      for (const h in c)
        c[h] && (f[`--${n.value}-${h}`] = c[h]);
      return f;
    },
    cssVarName: (c) => `--${n.value}-${c}`,
    cssVarBlock: (c) => {
      const f = {};
      for (const h in c)
        c[h] && (f[`--${n.value}-${e}-${h}`] = c[h]);
      return f;
    },
    cssVarBlockName: (c) => `--${n.value}-${e}-${c}`
  };
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Jt = () => {
}, Wt = Object.prototype.hasOwnProperty, se = (e, t) => Wt.call(e, t), Qt = Array.isArray, q = (e) => typeof e == "function", k = (e) => typeof e == "string", tt = (e) => e !== null && typeof e == "object", Yt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, qt = /-\w/g, Xt = Yt(
  (e) => e.replace(qt, (t) => t.slice(1).toUpperCase())
);
var en = typeof global == "object" && global && global.Object === Object && global, tn = typeof self == "object" && self && self.Object === Object && self, de = en || tn || Function("return this")(), B = de.Symbol, nt = Object.prototype, nn = nt.hasOwnProperty, rn = nt.toString, K = B ? B.toStringTag : void 0;
function on(e) {
  var t = nn.call(e, K), n = e[K];
  try {
    e[K] = void 0;
    var r = !0;
  } catch {
  }
  var o = rn.call(e);
  return r && (t ? e[K] = n : delete e[K]), o;
}
var an = Object.prototype, sn = an.toString;
function ln(e) {
  return sn.call(e);
}
var cn = "[object Null]", un = "[object Undefined]", Se = B ? B.toStringTag : void 0;
function rt(e) {
  return e == null ? e === void 0 ? un : cn : Se && Se in Object(e) ? on(e) : ln(e);
}
function pn(e) {
  return e != null && typeof e == "object";
}
var dn = "[object Symbol]";
function fe(e) {
  return typeof e == "symbol" || pn(e) && rt(e) == dn;
}
function fn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var me = Array.isArray, xe = B ? B.prototype : void 0, Ee = xe ? xe.toString : void 0;
function ot(e) {
  if (typeof e == "string")
    return e;
  if (me(e))
    return fn(e, ot) + "";
  if (fe(e))
    return Ee ? Ee.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function at(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var mn = "[object AsyncFunction]", gn = "[object Function]", vn = "[object GeneratorFunction]", hn = "[object Proxy]";
function yn(e) {
  if (!at(e))
    return !1;
  var t = rt(e);
  return t == gn || t == vn || t == mn || t == hn;
}
var oe = de["__core-js_shared__"], Pe = (function() {
  var e = /[^.]+$/.exec(oe && oe.keys && oe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function _n(e) {
  return !!Pe && Pe in e;
}
var bn = Function.prototype, wn = bn.toString;
function Cn(e) {
  if (e != null) {
    try {
      return wn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var On = /[\\^$.*+?()[\]{}|]/g, Sn = /^\[object .+?Constructor\]$/, xn = Function.prototype, En = Object.prototype, Pn = xn.toString, Tn = En.hasOwnProperty, $n = RegExp(
  "^" + Pn.call(Tn).replace(On, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function In(e) {
  if (!at(e) || _n(e))
    return !1;
  var t = yn(e) ? $n : Sn;
  return t.test(Cn(e));
}
function Nn(e, t) {
  return e?.[t];
}
function st(e, t) {
  var n = Nn(e, t);
  return In(n) ? n : void 0;
}
function jn(e, t) {
  return e === t || e !== e && t !== t;
}
var Mn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ln = /^\w*$/;
function zn(e, t) {
  if (me(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || fe(e) ? !0 : Ln.test(e) || !Mn.test(e) || t != null && e in Object(t);
}
var U = st(Object, "create");
function Dn() {
  this.__data__ = U ? U(null) : {}, this.size = 0;
}
function An(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Fn = "__lodash_hash_undefined__", Bn = Object.prototype, kn = Bn.hasOwnProperty;
function Vn(e) {
  var t = this.__data__;
  if (U) {
    var n = t[e];
    return n === Fn ? void 0 : n;
  }
  return kn.call(t, e) ? t[e] : void 0;
}
var Rn = Object.prototype, Kn = Rn.hasOwnProperty;
function Hn(e) {
  var t = this.__data__;
  return U ? t[e] !== void 0 : Kn.call(t, e);
}
var Un = "__lodash_hash_undefined__";
function Gn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = U && t === void 0 ? Un : t, this;
}
function M(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
M.prototype.clear = Dn;
M.prototype.delete = An;
M.prototype.get = Vn;
M.prototype.has = Hn;
M.prototype.set = Gn;
function Zn() {
  this.__data__ = [], this.size = 0;
}
function te(e, t) {
  for (var n = e.length; n--; )
    if (jn(e[n][0], t))
      return n;
  return -1;
}
var Jn = Array.prototype, Wn = Jn.splice;
function Qn(e) {
  var t = this.__data__, n = te(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Wn.call(t, n, 1), --this.size, !0;
}
function Yn(e) {
  var t = this.__data__, n = te(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function qn(e) {
  return te(this.__data__, e) > -1;
}
function Xn(e, t) {
  var n = this.__data__, r = te(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function V(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
V.prototype.clear = Zn;
V.prototype.delete = Qn;
V.prototype.get = Yn;
V.prototype.has = qn;
V.prototype.set = Xn;
var er = st(de, "Map");
function tr() {
  this.size = 0, this.__data__ = {
    hash: new M(),
    map: new (er || V)(),
    string: new M()
  };
}
function nr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ne(e, t) {
  var n = e.__data__;
  return nr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function rr(e) {
  var t = ne(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function or(e) {
  return ne(this, e).get(e);
}
function ar(e) {
  return ne(this, e).has(e);
}
function sr(e, t) {
  var n = ne(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function D(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
D.prototype.clear = tr;
D.prototype.delete = rr;
D.prototype.get = or;
D.prototype.has = ar;
D.prototype.set = sr;
var ir = "Expected a function";
function ge(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ir);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var a = e.apply(this, r);
    return n.cache = s.set(o, a) || s, a;
  };
  return n.cache = new (ge.Cache || D)(), n;
}
ge.Cache = D;
var lr = 500;
function cr(e) {
  var t = ge(e, function(r) {
    return n.size === lr && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ur = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pr = /\\(\\)?/g, dr = cr(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ur, function(n, r, o, s) {
    t.push(o ? s.replace(pr, "$1") : r || n);
  }), t;
});
function fr(e) {
  return e == null ? "" : ot(e);
}
function mr(e, t) {
  return me(e) ? e : zn(e, t) ? [e] : dr(fr(e));
}
function gr(e) {
  if (typeof e == "string" || fe(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function vr(e, t) {
  t = mr(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[gr(t[n++])];
  return n && n == r ? e : void 0;
}
function hr(e, t, n) {
  var r = e == null ? void 0 : vr(e, t);
  return r === void 0 ? n : r;
}
function yr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
const _r = (e) => e === void 0, ae = (e) => typeof e == "boolean", L = (e) => typeof e == "number", br = (e) => typeof Element > "u" ? !1 : e instanceof Element, wr = (e) => k(e) ? !Number.isNaN(Number(e)) : !1;
var Cr = Object.defineProperty, Or = Object.defineProperties, Sr = Object.getOwnPropertyDescriptors, Te = Object.getOwnPropertySymbols, xr = Object.prototype.hasOwnProperty, Er = Object.prototype.propertyIsEnumerable, $e = (e, t, n) => t in e ? Cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pr = (e, t) => {
  for (var n in t || (t = {}))
    xr.call(t, n) && $e(e, n, t[n]);
  if (Te)
    for (var n of Te(t))
      Er.call(t, n) && $e(e, n, t[n]);
  return e;
}, Tr = (e, t) => Or(e, Sr(t));
function Xo(e, t) {
  var n;
  const r = zt();
  return Dt(() => {
    r.value = e();
  }, Tr(Pr({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ke(r);
}
var Ie;
const $ = typeof window < "u", $r = (e) => typeof e == "string", Ir = () => {
};
$ && ((Ie = window?.navigator) != null && Ie.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ve(e) {
  return typeof e == "function" ? e() : l(e);
}
function Nr(e) {
  return e;
}
function he(e) {
  return Mt() ? (Lt(e), !0) : !1;
}
function jr(e, t = !0) {
  F() ? He(e) : t ? e() : Ue(e);
}
function Mr(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = x(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    o.value = !1, a();
  }
  function m(...y) {
    a(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...y);
    }, ve(t));
  }
  return r && (o.value = !0, $ && m()), he(i), {
    isPending: Ke(o),
    start: m,
    stop: i
  };
}
function it(e) {
  var t;
  const n = ve(e);
  return (t = n?.$el) != null ? t : n;
}
const lt = $ ? window : void 0;
function Lr(...e) {
  let t, n, r, o;
  if ($r(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = lt) : [t, n, r, o] = e, !t)
    return Ir;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], a = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, g, T, E) => (p.addEventListener(g, T, E), () => p.removeEventListener(g, T, E)), m = ee(() => [it(t), ve(o)], ([p, g]) => {
    a(), p && s.push(...n.flatMap((T) => r.map((E) => i(p, T, E, g))));
  }, { immediate: !0, flush: "post" }), y = () => {
    m(), a();
  };
  return he(y), y;
}
function zr(e, t = !1) {
  const n = x(), r = () => n.value = !!e();
  return r(), jr(r, t), n;
}
const Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, je = "__vueuse_ssr_handlers__";
Ne[je] = Ne[je] || {};
var Me = Object.getOwnPropertySymbols, Dr = Object.prototype.hasOwnProperty, Ar = Object.prototype.propertyIsEnumerable, Fr = (e, t) => {
  var n = {};
  for (var r in e)
    Dr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Me)
    for (var r of Me(e))
      t.indexOf(r) < 0 && Ar.call(e, r) && (n[r] = e[r]);
  return n;
};
function Br(e, t, n = {}) {
  const r = n, { window: o = lt } = r, s = Fr(r, ["window"]);
  let a;
  const i = zr(() => o && "ResizeObserver" in o), m = () => {
    a && (a.disconnect(), a = void 0);
  }, y = ee(() => it(e), (g) => {
    m(), i.value && o && g && (a = new ResizeObserver(t), a.observe(g, s));
  }, { immediate: !0, flush: "post" }), p = () => {
    m(), y();
  };
  return he(p), {
    isSupported: i,
    stop: p
  };
}
var Le;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Le || (Le = {}));
var kr = Object.defineProperty, ze = Object.getOwnPropertySymbols, Vr = Object.prototype.hasOwnProperty, Rr = Object.prototype.propertyIsEnumerable, De = (e, t, n) => t in e ? kr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Kr = (e, t) => {
  for (var n in t || (t = {}))
    Vr.call(t, n) && De(e, n, t[n]);
  if (ze)
    for (var n of ze(t))
      Rr.call(t, n) && De(e, n, t[n]);
  return e;
};
const Hr = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Kr({
  linear: Nr
}, Hr);
class ct extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ea(e, t) {
  throw new ct(`[${e}] ${t}`);
}
function G(e, t) {
  if (typeof process < "u" && process.env.NODE_ENV !== "production") {
    const n = k(e) ? new ct(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Ae = {
  current: 0
}, Fe = x(0), ut = 2e3, Be = Symbol("elZIndexContextKey"), pt = Symbol("zIndexContextKey"), Ur = (e) => {
  const t = F() ? j(Be, Ae) : Ae, n = e || (F() ? j(pt, void 0) : void 0), r = u(() => {
    const a = l(n);
    return L(a) ? a : ut;
  }), o = u(() => r.value + Fe.value), s = () => (t.current++, Fe.value = t.current, o.value);
  return !$ && !j(Be) && G("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: s
  };
}, Gr = (e) => (t, n) => Zr(t, n, l(e)), Zr = (e, t, n) => hr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var s;
  return `${(s = t?.[o]) != null ? s : `{${o}}`}`;
}), Jr = (e) => {
  const t = u(() => l(e).name), n = At(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Gr(e)
  };
}, dt = Symbol("localeContextKey"), Wr = (e) => {
  const t = e || j(dt, x());
  return Jr(u(() => t.value || Ut));
}, ft = "__epPropKey", O = (e) => e, Qr = (e) => tt(e) && !!e[ft], mt = (e, t) => {
  if (!tt(e) || Qr(e))
    return e;
  const { values: n, required: r, default: o, type: s, validator: a } = e, m = {
    type: s,
    required: !!r,
    validator: n || a ? (y) => {
      let p = !1, g = [];
      if (n && (g = Array.from(n), se(e, "default") && g.push(o), p || (p = g.includes(y))), a && (p || (p = a(y))), !p && g.length > 0) {
        const T = [...new Set(g)].map((E) => JSON.stringify(E)).join(", ");
        Ft(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${T}], got value ${JSON.stringify(y)}.`);
      }
      return p;
    } : void 0,
    [ft]: !0
  };
  return se(e, "default") && (m.default = o), m;
}, Z = (e) => yr(Object.entries(e).map(([t, n]) => [
  t,
  mt(n, t)
])), Yr = ["", "default", "small", "large"], qr = mt({
  type: String,
  values: Yr,
  required: !1
}), gt = Symbol("size"), ta = () => {
  const e = j(gt, {});
  return u(() => l(e.size) || "");
}, Xr = Symbol("emptyValuesContextKey"), eo = Z({
  emptyValues: Array,
  valueOnClear: {
    type: O([
      String,
      Number,
      Boolean,
      Function
    ]),
    default: void 0,
    validator: (e) => (e = q(e) ? e() : e, Qt(e) ? e.every((t) => !t) : !e)
  }
}), ke = (e) => Object.keys(e), X = x();
function vt(e, t = void 0) {
  const n = F() ? j(Xe, X) : X;
  return e ? u(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
function to(e, t) {
  const n = vt(), r = pe(e, u(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Y;
  })), o = Wr(u(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = Ur(u(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || ut;
  })), a = u(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return ht(u(() => l(n) || {})), {
    ns: r,
    locale: o,
    zIndex: s,
    size: a
  };
}
const ht = (e, t, n = !1) => {
  var r;
  const o = !!F(), s = o ? vt() : void 0, a = (r = void 0) != null ? r : o ? Bt : void 0;
  if (!a) {
    G("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = u(() => {
    const m = l(e);
    return s?.value ? no(s.value, m) : m;
  });
  return a(Xe, i), a(dt, u(() => i.value.locale)), a(et, u(() => i.value.namespace)), a(pt, u(() => i.value.zIndex)), a(gt, {
    size: u(() => i.value.size || "")
  }), a(Xr, u(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !X.value) && (X.value = i.value), i;
}, no = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...ke(e), ...ke(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
};
var ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const ro = "utils/dom/style", yt = (e = "") => e.split(" ").filter((t) => !!t.trim()), na = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, ra = (e, t) => {
  !e || !t.trim() || e.classList.add(...yt(t));
}, oa = (e, t) => {
  !e || !t.trim() || e.classList.remove(...yt(t));
}, aa = (e, t) => {
  var n;
  if (!$ || !e || !t)
    return "";
  let r = Xt(t);
  r === "float" && (r = "cssFloat");
  try {
    const o = e.style[r];
    if (o)
      return o;
    const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return s ? s[r] : "";
  } catch {
    return e.style[r];
  }
};
function ie(e, t = "px") {
  if (!e)
    return "";
  if (L(e) || wr(e))
    return `${e}${t}`;
  if (k(e))
    return e;
  G(ro, "binding value must be a string or number");
}
const _t = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, oo = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), sa = (e) => (e.install = Jt, e), ao = Z({
  size: {
    type: O([Number, String])
  },
  color: {
    type: String
  }
}), so = _({
  name: "ElIcon",
  inheritAttrs: !1
}), io = /* @__PURE__ */ _({
  ...so,
  props: ao,
  setup(e) {
    const t = e, n = pe("icon"), r = u(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: _r(o) ? void 0 : ie(o),
        "--color": s
      };
    });
    return (o, s) => (v(), S("i", kt({
      class: l(n).b(),
      style: l(r)
    }, o.$attrs), [
      H(o.$slots, "default")
    ], 16));
  }
});
var lo = /* @__PURE__ */ ye(io, [["__file", "icon.vue"]]);
const Ve = _t(lo);
var co = /* @__PURE__ */ _({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      C("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752z"
      })
    ]));
  }
}), uo = co, po = /* @__PURE__ */ _({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), bt = po, fo = /* @__PURE__ */ _({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      C("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), mo = fo, go = /* @__PURE__ */ _({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), vo = go, ho = /* @__PURE__ */ _({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"
      }),
      C("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112s-67.2 48-112 48"
      })
    ]));
  }
}), ia = ho, yo = /* @__PURE__ */ _({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), le = yo, _o = /* @__PURE__ */ _({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"
      })
    ]));
  }
}), bo = _o, wo = /* @__PURE__ */ _({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), wt = wo, Co = /* @__PURE__ */ _({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), la = Co, Oo = /* @__PURE__ */ _({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (v(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      C("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ct = Oo;
const So = O([
  String,
  Object,
  Function
]), xo = {
  Close: vo,
  SuccessFilled: wt,
  InfoFilled: le,
  WarningFilled: Ct,
  CircleCloseFilled: bt
}, Re = {
  primary: le,
  success: wt,
  warning: Ct,
  error: bt,
  info: le
}, ca = {
  validating: bo,
  success: uo,
  error: mo
}, ua = () => $ && /firefox/i.test(window.navigator.userAgent), Eo = () => $ && /android/i.test(window.navigator.userAgent), Po = (e) => e, ce = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, To = (e) => {
  if (e.code && e.code !== "Unidentified")
    return e.code;
  const t = $o(e);
  if (t) {
    if (Object.values(ce).includes(t))
      return t;
    switch (t) {
      case " ":
        return ce.space;
      default:
        return "";
    }
  }
  return "";
}, $o = (e) => {
  let t = e.key && e.key !== "Unidentified" ? e.key : "";
  if (!t && e.type === "keyup" && Eo()) {
    const n = e.target;
    t = n.value.charAt(n.selectionStart - 1);
  }
  return t;
}, Io = Z({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: !0
  },
  color: String,
  badgeStyle: {
    type: O([String, Object, Array])
  },
  offset: {
    type: O(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), No = _({
  name: "ElBadge"
}), jo = /* @__PURE__ */ _({
  ...No,
  props: Io,
  setup(e, { expose: t }) {
    const n = e, r = pe("badge"), o = u(() => n.isDot ? "" : L(n.value) && L(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = u(() => {
      var a, i, m, y, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: ie(-((i = (a = n.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: ie((y = (m = n.offset) == null ? void 0 : m[1]) != null ? y : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: o
    }), (a, i) => (v(), S("div", {
      class: I(l(r).b())
    }, [
      H(a.$slots, "default"),
      ue(Ge, {
        name: `${l(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Q(() => [
          Ze(C("sup", {
            class: I([
              l(r).e("content"),
              l(r).em("content", a.type),
              l(r).is("fixed", !!a.$slots.default),
              l(r).is("dot", a.isDot),
              l(r).is("hide-zero", !a.showZero && a.value === 0),
              a.badgeClass
            ]),
            style: Je(l(s))
          }, [
            H(a.$slots, "content", { value: l(o) }, () => [
              Vt(We(l(o)), 1)
            ])
          ], 6), [
            [Qe, !a.hidden && (l(o) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Mo = /* @__PURE__ */ ye(jo, [["__file", "badge.vue"]]);
const Lo = _t(Mo), zo = Z({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: O(Object)
  },
  size: qr,
  button: {
    type: O(Object)
  },
  card: {
    type: O(Object)
  },
  dialog: {
    type: O(Object)
  },
  link: {
    type: O(Object)
  },
  experimentalFeatures: {
    type: O(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: O(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...eo
}), w = {
  placement: "top"
}, pa = _({
  name: "ElConfigProvider",
  props: zo,
  setup(e, { slots: t }) {
    const n = ht(e);
    return ee(() => e.message, (r) => {
      var o, s;
      Object.assign(w, (s = (o = n?.value) == null ? void 0 : o.message) != null ? s : {}, r ?? {});
    }, { immediate: !0, deep: !0 }), () => H(t, "default", { config: n?.value });
  }
}), Ot = [
  "primary",
  "success",
  "info",
  "warning",
  "error"
], St = [
  "top",
  "top-left",
  "top-right",
  "bottom",
  "bottom-left",
  "bottom-right"
], A = "top", b = Po({
  customClass: "",
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  plain: !1,
  offset: 16,
  placement: void 0,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: $ ? document.body : void 0
}), Do = Z({
  customClass: {
    type: String,
    default: b.customClass
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: b.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: b.duration
  },
  icon: {
    type: So,
    default: b.icon
  },
  id: {
    type: String,
    default: b.id
  },
  message: {
    type: O([
      String,
      Object,
      Function
    ]),
    default: b.message
  },
  onClose: {
    type: O(Function),
    default: b.onClose
  },
  showClose: {
    type: Boolean,
    default: b.showClose
  },
  type: {
    type: String,
    values: Ot,
    default: b.type
  },
  plain: {
    type: Boolean,
    default: b.plain
  },
  offset: {
    type: Number,
    default: b.offset
  },
  placement: {
    type: String,
    values: St,
    default: b.placement
  },
  zIndex: {
    type: Number,
    default: b.zIndex
  },
  grouping: {
    type: Boolean,
    default: b.grouping
  },
  repeatNum: {
    type: Number,
    default: b.repeatNum
  }
}), Ao = {
  destroy: () => !0
}, P = Ye({}), Fo = (e) => (P[e] || (P[e] = Ye([])), P[e]), Bo = (e, t) => {
  const n = P[t] || [], r = n.findIndex((a) => a.id === e), o = n[r];
  let s;
  return r > 0 && (s = n[r - 1]), { current: o, prev: s };
}, ko = (e, t) => {
  const { prev: n } = Bo(e, t);
  return n ? n.vm.exposed.bottom.value : 0;
}, Vo = (e, t, n) => (P[n] || []).findIndex((s) => s.id === e) > 0 ? 16 : t, Ro = _({
  name: "ElMessage"
}), Ko = /* @__PURE__ */ _({
  ...Ro,
  props: Do,
  emits: Ao,
  setup(e, { expose: t, emit: n }) {
    const r = e, { Close: o } = xo, s = x(!1), { ns: a, zIndex: i } = to("message"), { currentZIndex: m, nextZIndex: y } = i, p = x(), g = x(!1), T = x(0);
    let E;
    const _e = u(() => r.type ? r.type === "error" ? "danger" : r.type : "info"), c = u(() => {
      const d = r.type;
      return { [a.bm("icon", d)]: d && Re[d] };
    }), f = u(() => r.icon || Re[r.type] || ""), h = u(() => r.placement || A), Et = u(() => ko(r.id, h.value)), be = u(() => Vo(r.id, r.offset, h.value) + Et.value), Pt = u(() => T.value + be.value), Tt = u(() => h.value.includes("left") ? a.is("left") : h.value.includes("right") ? a.is("right") : a.is("center")), we = u(() => h.value.startsWith("top") ? "top" : "bottom"), $t = u(() => ({
      [we.value]: `${be.value}px`,
      zIndex: m.value
    }));
    function re() {
      r.duration !== 0 && ({ stop: E } = Mr(() => {
        J();
      }, r.duration));
    }
    function Ce() {
      E?.();
    }
    function J() {
      g.value = !1, Ue(() => {
        var d;
        s.value || ((d = r.onClose) == null || d.call(r), n("destroy"));
      });
    }
    function It(d) {
      To(d) === ce.esc && J();
    }
    return He(() => {
      re(), y(), g.value = !0;
    }), ee(() => r.repeatNum, () => {
      Ce(), re();
    }), Lr(document, "keydown", It), Br(p, () => {
      T.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: Pt,
      close: J
    }), (d, Nt) => (v(), R(Ge, {
      name: l(a).b("fade"),
      onBeforeEnter: (jt) => s.value = !0,
      onBeforeLeave: d.onClose,
      onAfterLeave: (jt) => d.$emit("destroy"),
      persisted: ""
    }, {
      default: Q(() => [
        Ze(C("div", {
          id: d.id,
          ref_key: "messageRef",
          ref: p,
          class: I([
            l(a).b(),
            { [l(a).m(d.type)]: d.type },
            l(a).is("closable", d.showClose),
            l(a).is("plain", d.plain),
            l(a).is("bottom", l(we) === "bottom"),
            l(Tt),
            d.customClass
          ]),
          style: Je(l($t)),
          role: "alert",
          onMouseenter: Ce,
          onMouseleave: re
        }, [
          d.repeatNum > 1 ? (v(), R(l(Lo), {
            key: 0,
            value: d.repeatNum,
            type: l(_e),
            class: I(l(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : W("v-if", !0),
          l(f) ? (v(), R(l(Ve), {
            key: 1,
            class: I([l(a).e("icon"), l(c)])
          }, {
            default: Q(() => [
              (v(), R(Rt(l(f))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          H(d.$slots, "default", {}, () => [
            d.dangerouslyUseHTMLString ? (v(), S(Kt, { key: 1 }, [
              W(" Caution here, message could've been compromised, never use user's input as message "),
              C("p", {
                class: I(l(a).e("content")),
                innerHTML: d.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (v(), S("p", {
              key: 0,
              class: I(l(a).e("content"))
            }, We(d.message), 3))
          ]),
          d.showClose ? (v(), R(l(Ve), {
            key: 2,
            class: I(l(a).e("closeBtn")),
            onClick: Ht(J, ["stop"])
          }, {
            default: Q(() => [
              ue(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 46, ["id"]), [
          [Qe, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ho = /* @__PURE__ */ ye(Ko, [["__file", "message.vue"]]);
let Uo = 1;
const Go = (e) => {
  if (!e.appendTo)
    e.appendTo = document.body;
  else if (k(e.appendTo)) {
    let n = document.querySelector(e.appendTo);
    br(n) || (G("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), n = document.body), e.appendTo = n;
  }
}, Zo = (e) => {
  !e.placement && k(w.placement) && w.placement && (e.placement = w.placement), e.placement || (e.placement = A), St.includes(e.placement) || (G("ElMessage", `Invalid placement: ${e.placement}. Falling back to '${A}'.`), e.placement = A);
}, xt = (e) => {
  const t = !e || k(e) || qe(e) || q(e) ? { message: e } : e, n = {
    ...b,
    ...t
  };
  return Go(n), Zo(n), ae(w.grouping) && !n.grouping && (n.grouping = w.grouping), L(w.duration) && n.duration === 3e3 && (n.duration = w.duration), L(w.offset) && n.offset === 16 && (n.offset = w.offset), ae(w.showClose) && !n.showClose && (n.showClose = w.showClose), ae(w.plain) && !n.plain && (n.plain = w.plain), n;
}, Jo = (e) => {
  const t = e.props.placement || A, n = P[t], r = n.indexOf(e);
  if (r === -1)
    return;
  n.splice(r, 1);
  const { handler: o } = e;
  o.close();
}, Wo = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Uo++}`, o = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), Jo(p);
    },
    onDestroy: () => {
      Oe(null, s);
    }
  }, i = ue(Ho, a, q(a.message) || qe(a.message) ? {
    default: q(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || z._context, Oe(i, s), e.appendChild(s.firstElementChild);
  const m = i.component, p = {
    id: r,
    vnode: i,
    vm: m,
    handler: {
      close: () => {
        m.exposed.close();
      }
    },
    props: i.component.props
  };
  return p;
}, z = (e = {}, t) => {
  if (!$)
    return { close: () => {
    } };
  const n = xt(e), r = Fo(n.placement || A);
  if (n.grouping && r.length) {
    const s = r.find(({ vnode: a }) => {
      var i;
      return ((i = a.props) == null ? void 0 : i.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (L(w.max) && r.length >= w.max)
    return { close: () => {
    } };
  const o = Wo(n, t);
  return r.push(o), o.handler;
};
Ot.forEach((e) => {
  z[e] = (t = {}, n) => {
    const r = xt(t);
    return z({ ...r, type: e }, n);
  };
});
function Qo(e) {
  for (const t in P)
    if (se(P, t)) {
      const n = [...P[t]];
      for (const r of n)
        (!e || e === r.props.type) && r.handler.close();
    }
}
function Yo(e) {
  if (!P[e])
    return;
  [...P[e]].forEach((n) => n.handler.close());
}
z.closeAll = Qo;
z.closeAllByPlacement = Yo;
z._context = null;
const da = oo(z, "$message");
export {
  to as $,
  q as A,
  pe as B,
  la as C,
  ia as D,
  Ut as E,
  Br as F,
  Ve as G,
  tt as H,
  _t as I,
  To as J,
  ce as K,
  vt as L,
  bo as M,
  Jt as N,
  sa as O,
  pa as P,
  ie as Q,
  ea as R,
  B as S,
  na as T,
  ra as U,
  ca as V,
  aa as W,
  oa as X,
  Yr as Y,
  xo as Z,
  ye as _,
  me as a,
  Re as a0,
  se as a1,
  _r as a2,
  da as a3,
  rt as b,
  mr as c,
  at as d,
  jn as e,
  vr as f,
  st as g,
  $ as h,
  pn as i,
  L as j,
  ua as k,
  Z as l,
  k as m,
  O as n,
  Po as o,
  So as p,
  mo as q,
  G as r,
  yr as s,
  gr as t,
  qr as u,
  Zt as v,
  Xo as w,
  ta as x,
  Lr as y,
  br as z
};
