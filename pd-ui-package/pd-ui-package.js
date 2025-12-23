import { ref as oe, computed as le, watch as Ke, getCurrentInstance as Wt, isRef as zt, h as ie, Fragment as xt, inject as en, onMounted as tn, onUnmounted as nn, createVNode as gt, Text as pt, defineAsyncComponent as rn } from "vue";
const te = typeof window < "u";
let U, ne;
if (process.env.NODE_ENV !== "production") {
  const e = te && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (U = (t) => e.mark(t), ne = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const an = /\{([0-9a-zA-Z]+)\}/g;
function Ie(e, ...t) {
  return t.length === 1 && j(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(an, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const sn = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", re = (e) => sn ? Symbol(e) : e, on = (e, t, n) => ln({ l: e, k: t, s: n }), ln = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), V = (e) => typeof e == "number" && isFinite(e), cn = (e) => at(e) === "[object Date]", Le = (e) => at(e) === "[object RegExp]", Pe = (e) => F(e) && Object.keys(e).length === 0;
function ae(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
let _t;
const un = () => _t || (_t = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bt(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const x = Array.isArray, W = (e) => typeof e == "function", T = (e) => typeof e == "string", $ = (e) => typeof e == "boolean", j = (e) => (
  // eslint-disable-line
  e !== null && typeof e == "object"
), At = Object.prototype.toString, at = (e) => At.call(e), F = (e) => at(e) === "[object Object]", fn = (e) => e == null ? "" : x(e) || F(e) && e.toString === At ? JSON.stringify(e, null, 2) : String(e), ht = 2;
function mn(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const s = [];
  for (let o = 0; o < r.length; o++)
    if (a += r[o].length + 1, a >= t) {
      for (let c = o - ht; c <= o + ht || n > a; c++) {
        if (c < 0 || c >= r.length)
          continue;
        const g = c + 1;
        s.push(`${g}${" ".repeat(3 - String(g).length)}|  ${r[c]}`);
        const p = r[c].length;
        if (c === o) {
          const h = t - (a - p) + 1, w = Math.max(1, n > a ? p - h : n - t);
          s.push("   |  " + " ".repeat(h) + "^".repeat(w));
        } else if (c > o) {
          if (n > a) {
            const h = Math.max(Math.min(n - a, p), 1);
            s.push("   |  " + "^".repeat(h));
          }
          a += p + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
process.env.NODE_ENV;
const dn = (e) => (
  // eslint-disable-line
  e !== null && typeof e == "object"
), Z = [];
Z[
  0
  /* BEFORE_PATH */
] = {
  w: [
    0
    /* BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* APPEND */
  ],
  "[": [
    4
    /* IN_SUB_PATH */
  ],
  o: [
    7
    /* AFTER_PATH */
  ]
};
Z[
  1
  /* IN_PATH */
] = {
  w: [
    1
    /* IN_PATH */
  ],
  ".": [
    2
    /* BEFORE_IDENT */
  ],
  "[": [
    4
    /* IN_SUB_PATH */
  ],
  o: [
    7
    /* AFTER_PATH */
  ]
};
Z[
  2
  /* BEFORE_IDENT */
] = {
  w: [
    2
    /* BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* APPEND */
  ],
  0: [
    3,
    0
    /* APPEND */
  ]
};
Z[
  3
  /* IN_IDENT */
] = {
  i: [
    3,
    0
    /* APPEND */
  ],
  0: [
    3,
    0
    /* APPEND */
  ],
  w: [
    1,
    1
    /* PUSH */
  ],
  ".": [
    2,
    1
    /* PUSH */
  ],
  "[": [
    4,
    1
    /* PUSH */
  ],
  o: [
    7,
    1
    /* PUSH */
  ]
};
Z[
  4
  /* IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* APPEND */
  ],
  '"': [
    6,
    0
    /* APPEND */
  ],
  "[": [
    4,
    2
    /* INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* APPEND */
  ]
};
Z[
  5
  /* IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* APPEND */
  ]
};
Z[
  6
  /* IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* APPEND */
  ]
};
const gn = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function pn(e) {
  return gn.test(e);
}
function _n(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function bn(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function hn(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : pn(t) ? _n(t) : "*" + t;
}
function vn(e) {
  const t = [];
  let n = -1, r = 0, a = 0, s, o, c, g, p, h, w;
  const k = [];
  k[
    0
    /* APPEND */
  ] = () => {
    o === void 0 ? o = c : o += c;
  }, k[
    1
    /* PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, k[
    2
    /* INC_SUB_PATH_DEPTH */
  ] = () => {
    k[
      0
      /* APPEND */
    ](), a++;
  }, k[
    3
    /* PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, r = 4, k[
        0
        /* APPEND */
      ]();
    else {
      if (a = 0, o === void 0 || (o = hn(o), o === !1))
        return !1;
      k[
        1
        /* PUSH */
      ]();
    }
  };
  function C() {
    const N = e[n + 1];
    if (r === 5 && N === "'" || r === 6 && N === '"')
      return n++, c = "\\" + N, k[
        0
        /* APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && C())) {
      if (g = bn(s), w = Z[r], p = w[g] || w.l || 8, p === 8 || (r = p[0], p[1] !== void 0 && (h = k[p[1]], h && (c = s, h() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const vt = /* @__PURE__ */ new Map();
function Ee(e, t) {
  if (!dn(e))
    return null;
  let n = vt.get(t);
  if (n || (n = vn(t), n && vt.set(t, n)), !n)
    return null;
  const r = n.length;
  let a = e, s = 0;
  for (; s < r; ) {
    const o = a[n[s]];
    if (o === void 0)
      return null;
    a = o, s++;
  }
  return a;
}
const yn = (e) => e, kn = (e) => "", wn = "text", Nn = (e) => e.length === 0 ? "" : e.join(""), Ln = fn;
function yt(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function En(e) {
  const t = V(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (V(e.named.count) || V(e.named.n)) ? V(e.named.count) ? e.named.count : V(e.named.n) ? e.named.n : t : t;
}
function On(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Tn(e = {}) {
  const t = e.locale, n = En(e), r = j(e.pluralRules) && T(t) && W(e.pluralRules[t]) ? e.pluralRules[t] : yt, a = j(e.pluralRules) && T(t) && W(e.pluralRules[t]) ? yt : void 0, s = (L) => L[r(n, L.length, a)], o = e.list || [], c = (L) => o[L], g = e.named || {};
  V(e.pluralIndex) && On(n, g);
  const p = (L) => g[L];
  function h(L) {
    const u = W(e.messages) ? e.messages(L) : j(e.messages) ? e.messages[L] : !1;
    return u || (e.parent ? e.parent.message(L) : kn);
  }
  const w = (L) => e.modifiers ? e.modifiers[L] : yn, k = F(e.processor) && W(e.processor.normalize) ? e.processor.normalize : Nn, C = F(e.processor) && W(e.processor.interpolate) ? e.processor.interpolate : Ln, N = F(e.processor) && T(e.processor.type) ? e.processor.type : wn, I = {
    list: c,
    named: p,
    plural: s,
    linked: (L, u) => {
      const _ = h(L)(I);
      return T(u) ? w(u)(_) : _;
    },
    message: h,
    type: N,
    interpolate: C,
    normalize: k
  };
  return I;
}
const Sn = {
  // tokenizer error messages
  0: "Expected token: '{0}'",
  1: "Invalid token in placeholder: '{0}'",
  2: "Unterminated single quote in placeholder",
  3: "Unknown escape sequence: \\{0}",
  4: "Invalid unicode escape sequence: {0}",
  5: "Unbalanced closing brace",
  6: "Unterminated closing brace",
  7: "Empty placeholder",
  8: "Not allowed nest placeholder",
  9: "Invalid linked format",
  // parser error messages
  10: "Plural must have messages",
  11: "Unexpected empty linked modifier",
  12: "Unexpected empty linked key",
  13: "Unexpected lexical analysis in token: '{0}'"
};
function Fe(e, t, n = {}) {
  const { domain: r, messages: a, args: s } = n, o = process.env.NODE_ENV !== "production" ? Ie((a || Sn)[e] || "", ...s || []) : e, c = new SyntaxError(String(o));
  return c.code = e, t && (c.location = t), c.domain = r, c;
}
function In(e) {
  throw e;
}
function Pn(e, t, n) {
  return { line: e, column: t, offset: n };
}
function qe(e, t, n) {
  return { start: e, end: t };
}
const B = " ", Fn = "\r", A = `
`, Cn = "\u2028", Dn = "\u2029";
function Mn(e) {
  const t = e;
  let n = 0, r = 1, a = 1, s = 0;
  const o = (S) => t[S] === Fn && t[S + 1] === A, c = (S) => t[S] === A, g = (S) => t[S] === Dn, p = (S) => t[S] === Cn, h = (S) => o(S) || c(S) || g(S) || p(S), w = () => n, k = () => r, C = () => a, N = () => s, I = (S) => o(S) || g(S) || p(S) ? A : t[S], L = () => I(n), u = () => I(n + s);
  function _() {
    return s = 0, h(n) && (r++, a = 0), o(n) && n++, n++, a++, t[n];
  }
  function v() {
    return o(n + s) && s++, s++, t[n + s];
  }
  function f() {
    n = 0, r = 1, a = 1, s = 0;
  }
  function E(S = 0) {
    s = S;
  }
  function O() {
    const S = n + s;
    for (; S !== n; )
      _();
    s = 0;
  }
  return {
    index: w,
    line: k,
    column: C,
    peekOffset: N,
    charAt: I,
    currentChar: L,
    currentPeek: u,
    next: _,
    peek: v,
    reset: f,
    resetPeek: E,
    skipToPeek: O
  };
}
const Q = void 0, kt = "'", $n = "tokenizer";
function Rn(e, t = {}) {
  const n = t.location !== !1, r = Mn(e), a = () => r.index(), s = () => Pn(r.line(), r.column(), r.index()), o = s(), c = a(), g = {
    currentType: 14,
    offset: c,
    startLoc: o,
    endLoc: o,
    lastType: 14,
    lastOffset: c,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, p = () => g, { onError: h } = t;
  function w(l, i, d, ...b) {
    const P = p();
    if (i.column += d, i.offset += d, h) {
      const D = qe(P.startLoc, i), H = Fe(l, D, {
        domain: $n,
        args: b
      });
      h(H);
    }
  }
  function k(l, i, d) {
    l.endLoc = s(), l.currentType = i;
    const b = { type: i };
    return n && (b.loc = qe(l.startLoc, l.endLoc)), d != null && (b.value = d), b;
  }
  const C = (l) => k(
    l,
    14
    /* EOF */
  );
  function N(l, i) {
    return l.currentChar() === i ? (l.next(), i) : (w(0, s(), 0, i), "");
  }
  function I(l) {
    let i = "";
    for (; l.currentPeek() === B || l.currentPeek() === A; )
      i += l.currentPeek(), l.peek();
    return i;
  }
  function L(l) {
    const i = I(l);
    return l.skipToPeek(), i;
  }
  function u(l) {
    if (l === Q)
      return !1;
    const i = l.charCodeAt(0);
    return i >= 97 && i <= 122 || // a-z
    i >= 65 && i <= 90;
  }
  function _(l) {
    if (l === Q)
      return !1;
    const i = l.charCodeAt(0);
    return i >= 48 && i <= 57;
  }
  function v(l, i) {
    const { currentType: d } = i;
    if (d !== 2)
      return !1;
    I(l);
    const b = u(l.currentPeek());
    return l.resetPeek(), b;
  }
  function f(l, i) {
    const { currentType: d } = i;
    if (d !== 2)
      return !1;
    I(l);
    const b = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), P = _(b);
    return l.resetPeek(), P;
  }
  function E(l, i) {
    const { currentType: d } = i;
    if (d !== 2)
      return !1;
    I(l);
    const b = l.currentPeek() === kt;
    return l.resetPeek(), b;
  }
  function O(l, i) {
    const { currentType: d } = i;
    if (d !== 8)
      return !1;
    I(l);
    const b = l.currentPeek() === ".";
    return l.resetPeek(), b;
  }
  function S(l, i) {
    const { currentType: d } = i;
    if (d !== 9)
      return !1;
    I(l);
    const b = u(l.currentPeek());
    return l.resetPeek(), b;
  }
  function R(l, i) {
    const { currentType: d } = i;
    if (!(d === 8 || d === 12))
      return !1;
    I(l);
    const b = l.currentPeek() === ":";
    return l.resetPeek(), b;
  }
  function M(l, i) {
    const { currentType: d } = i;
    if (d !== 10)
      return !1;
    const b = () => {
      const D = l.currentPeek();
      return D === "{" ? u(l.peek()) : D === "@" || D === "%" || D === "|" || D === ":" || D === "." || D === B || !D ? !1 : D === A ? (l.peek(), b()) : u(D);
    }, P = b();
    return l.resetPeek(), P;
  }
  function q(l) {
    I(l);
    const i = l.currentPeek() === "|";
    return l.resetPeek(), i;
  }
  function me(l, i = !0) {
    const d = (P = !1, D = "", H = !1) => {
      const m = l.currentPeek();
      return m === "{" ? D === "%" ? !1 : P : m === "@" || !m ? D === "%" ? !0 : P : m === "%" ? (l.peek(), d(P, "%", !0)) : m === "|" ? D === "%" || H ? !0 : !(D === B || D === A) : m === B ? (l.peek(), d(!0, B, H)) : m === A ? (l.peek(), d(!0, A, H)) : !0;
    }, b = d();
    return i && l.resetPeek(), b;
  }
  function X(l, i) {
    const d = l.currentChar();
    return d === Q ? Q : i(d) ? (l.next(), d) : null;
  }
  function he(l) {
    return X(l, (d) => {
      const b = d.charCodeAt(0);
      return b >= 97 && b <= 122 || // a-z
      b >= 65 && b <= 90 || // A-Z
      b >= 48 && b <= 57 || // 0-9
      b === 95 || b === 36;
    });
  }
  function $e(l) {
    return X(l, (d) => {
      const b = d.charCodeAt(0);
      return b >= 48 && b <= 57;
    });
  }
  function J(l) {
    return X(l, (d) => {
      const b = d.charCodeAt(0);
      return b >= 48 && b <= 57 || // 0-9
      b >= 65 && b <= 70 || // A-F
      b >= 97 && b <= 102;
    });
  }
  function ve(l) {
    let i = "", d = "";
    for (; i = $e(l); )
      d += i;
    return d;
  }
  function Re(l) {
    const i = (d) => {
      const b = l.currentChar();
      return b === "{" || b === "}" || b === "@" || !b ? d : b === "%" ? me(l) ? (d += b, l.next(), i(d)) : d : b === "|" ? d : b === B || b === A ? me(l) ? (d += b, l.next(), i(d)) : q(l) ? d : (d += b, l.next(), i(d)) : (d += b, l.next(), i(d));
    };
    return i("");
  }
  function Ve(l) {
    L(l);
    let i = "", d = "";
    for (; i = he(l); )
      d += i;
    return l.currentChar() === Q && w(6, s(), 0), d;
  }
  function We(l) {
    L(l);
    let i = "";
    return l.currentChar() === "-" ? (l.next(), i += `-${ve(l)}`) : i += ve(l), l.currentChar() === Q && w(6, s(), 0), i;
  }
  function ft(l) {
    L(l), N(l, "'");
    let i = "", d = "";
    const b = (D) => D !== kt && D !== A;
    for (; i = X(l, b); )
      i === "\\" ? d += xe(l) : d += i;
    const P = l.currentChar();
    return P === A || P === Q ? (w(2, s(), 0), P === A && (l.next(), N(l, "'")), d) : (N(l, "'"), d);
  }
  function xe(l) {
    const i = l.currentChar();
    switch (i) {
      case "\\":
      case "'":
        return l.next(), `\\${i}`;
      case "u":
        return ye(l, i, 4);
      case "U":
        return ye(l, i, 6);
      default:
        return w(3, s(), 0, i), "";
    }
  }
  function ye(l, i, d) {
    N(l, i);
    let b = "";
    for (let P = 0; P < d; P++) {
      const D = J(l);
      if (!D) {
        w(4, s(), 0, `\\${i}${b}${l.currentChar()}`);
        break;
      }
      b += D;
    }
    return `\\${i}${b}`;
  }
  function Ae(l) {
    L(l);
    let i = "", d = "";
    const b = (P) => P !== "{" && P !== "}" && P !== B && P !== A;
    for (; i = X(l, b); )
      d += i;
    return d;
  }
  function je(l) {
    let i = "", d = "";
    for (; i = he(l); )
      d += i;
    return d;
  }
  function Ue(l) {
    const i = (d = !1, b) => {
      const P = l.currentChar();
      return P === "{" || P === "%" || P === "@" || P === "|" || !P || P === B ? b : P === A ? (b += P, l.next(), i(d, b)) : (b += P, l.next(), i(!0, b));
    };
    return i(!1, "");
  }
  function de(l) {
    L(l);
    const i = N(
      l,
      "|"
      /* Pipe */
    );
    return L(l), i;
  }
  function ge(l, i) {
    let d = null;
    switch (l.currentChar()) {
      case "{":
        return i.braceNest >= 1 && w(8, s(), 0), l.next(), d = k(
          i,
          2,
          "{"
          /* BraceLeft */
        ), L(l), i.braceNest++, d;
      case "}":
        return i.braceNest > 0 && i.currentType === 2 && w(7, s(), 0), l.next(), d = k(
          i,
          3,
          "}"
          /* BraceRight */
        ), i.braceNest--, i.braceNest > 0 && L(l), i.inLinked && i.braceNest === 0 && (i.inLinked = !1), d;
      case "@":
        return i.braceNest > 0 && w(6, s(), 0), d = z(l, i) || C(i), i.braceNest = 0, d;
      default:
        let P = !0, D = !0, H = !0;
        if (q(l))
          return i.braceNest > 0 && w(6, s(), 0), d = k(i, 1, de(l)), i.braceNest = 0, i.inLinked = !1, d;
        if (i.braceNest > 0 && (i.currentType === 5 || i.currentType === 6 || i.currentType === 7))
          return w(6, s(), 0), i.braceNest = 0, pe(l, i);
        if (P = v(l, i))
          return d = k(i, 5, Ve(l)), L(l), d;
        if (D = f(l, i))
          return d = k(i, 6, We(l)), L(l), d;
        if (H = E(l, i))
          return d = k(i, 7, ft(l)), L(l), d;
        if (!P && !D && !H)
          return d = k(i, 13, Ae(l)), w(1, s(), 0, d.value), L(l), d;
        break;
    }
    return d;
  }
  function z(l, i) {
    const { currentType: d } = i;
    let b = null;
    const P = l.currentChar();
    switch ((d === 8 || d === 9 || d === 12 || d === 10) && (P === A || P === B) && w(9, s(), 0), P) {
      case "@":
        return l.next(), b = k(
          i,
          8,
          "@"
          /* LinkedAlias */
        ), i.inLinked = !0, b;
      case ".":
        return L(l), l.next(), k(
          i,
          9,
          "."
          /* LinkedDot */
        );
      case ":":
        return L(l), l.next(), k(
          i,
          10,
          ":"
          /* LinkedDelimiter */
        );
      default:
        return q(l) ? (b = k(i, 1, de(l)), i.braceNest = 0, i.inLinked = !1, b) : O(l, i) || R(l, i) ? (L(l), z(l, i)) : S(l, i) ? (L(l), k(i, 12, je(l))) : M(l, i) ? (L(l), P === "{" ? ge(l, i) || b : k(i, 11, Ue(l))) : (d === 8 && w(9, s(), 0), i.braceNest = 0, i.inLinked = !1, pe(l, i));
    }
  }
  function pe(l, i) {
    let d = {
      type: 14
      /* EOF */
    };
    if (i.braceNest > 0)
      return ge(l, i) || C(i);
    if (i.inLinked)
      return z(l, i) || C(i);
    const b = l.currentChar();
    switch (b) {
      case "{":
        return ge(l, i) || C(i);
      case "}":
        return w(5, s(), 0), l.next(), k(
          i,
          3,
          "}"
          /* BraceRight */
        );
      case "@":
        return z(l, i) || C(i);
      default:
        if (q(l))
          return d = k(i, 1, de(l)), i.braceNest = 0, i.inLinked = !1, d;
        if (me(l))
          return k(i, 0, Re(l));
        if (b === "%")
          return l.next(), k(
            i,
            4,
            "%"
            /* Modulo */
          );
        break;
    }
    return d;
  }
  function He() {
    const { currentType: l, offset: i, startLoc: d, endLoc: b } = g;
    return g.lastType = l, g.lastOffset = i, g.lastStartLoc = d, g.lastEndLoc = b, g.offset = a(), g.startLoc = s(), r.currentChar() === Q ? k(
      g,
      14
      /* EOF */
    ) : pe(r, g);
  }
  return {
    nextToken: He,
    currentOffset: a,
    currentPosition: s,
    context: p
  };
}
const Vn = "parser", Wn = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function xn(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function An(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(u, _, v, f, ...E) {
    const O = u.currentPosition();
    if (O.offset += f, O.column += f, n) {
      const S = qe(v, O), R = Fe(_, S, {
        domain: Vn,
        args: E
      });
      n(R);
    }
  }
  function a(u, _, v) {
    const f = {
      type: u,
      start: _,
      end: _
    };
    return t && (f.loc = { start: v, end: v }), f;
  }
  function s(u, _, v, f) {
    u.end = _, t && u.loc && (u.loc.end = v);
  }
  function o(u, _) {
    const v = u.context(), f = a(3, v.offset, v.startLoc);
    return f.value = _, s(f, u.currentOffset(), u.currentPosition()), f;
  }
  function c(u, _) {
    const v = u.context(), { lastOffset: f, lastStartLoc: E } = v, O = a(5, f, E);
    return O.index = parseInt(_, 10), u.nextToken(), s(O, u.currentOffset(), u.currentPosition()), O;
  }
  function g(u, _) {
    const v = u.context(), { lastOffset: f, lastStartLoc: E } = v, O = a(4, f, E);
    return O.key = _, u.nextToken(), s(O, u.currentOffset(), u.currentPosition()), O;
  }
  function p(u, _) {
    const v = u.context(), { lastOffset: f, lastStartLoc: E } = v, O = a(9, f, E);
    return O.value = _.replace(Wn, xn), u.nextToken(), s(O, u.currentOffset(), u.currentPosition()), O;
  }
  function h(u) {
    const _ = u.nextToken(), v = u.context(), { lastOffset: f, lastStartLoc: E } = v, O = a(8, f, E);
    return _.type !== 12 ? (r(u, 11, v.lastStartLoc, 0), O.value = "", s(O, f, E), {
      nextConsumeToken: _,
      node: O
    }) : (_.value == null && r(u, 13, v.lastStartLoc, 0, K(_)), O.value = _.value || "", s(O, u.currentOffset(), u.currentPosition()), {
      node: O
    });
  }
  function w(u, _) {
    const v = u.context(), f = a(7, v.offset, v.startLoc);
    return f.value = _, s(f, u.currentOffset(), u.currentPosition()), f;
  }
  function k(u) {
    const _ = u.context(), v = a(6, _.offset, _.startLoc);
    let f = u.nextToken();
    if (f.type === 9) {
      const E = h(u);
      v.modifier = E.node, f = E.nextConsumeToken || u.nextToken();
    }
    switch (f.type !== 10 && r(u, 13, _.lastStartLoc, 0, K(f)), f = u.nextToken(), f.type === 2 && (f = u.nextToken()), f.type) {
      case 11:
        f.value == null && r(u, 13, _.lastStartLoc, 0, K(f)), v.key = w(u, f.value || "");
        break;
      case 5:
        f.value == null && r(u, 13, _.lastStartLoc, 0, K(f)), v.key = g(u, f.value || "");
        break;
      case 6:
        f.value == null && r(u, 13, _.lastStartLoc, 0, K(f)), v.key = c(u, f.value || "");
        break;
      case 7:
        f.value == null && r(u, 13, _.lastStartLoc, 0, K(f)), v.key = p(u, f.value || "");
        break;
      default:
        r(u, 12, _.lastStartLoc, 0);
        const E = u.context(), O = a(7, E.offset, E.startLoc);
        return O.value = "", s(O, E.offset, E.startLoc), v.key = O, s(v, E.offset, E.startLoc), {
          nextConsumeToken: f,
          node: v
        };
    }
    return s(v, u.currentOffset(), u.currentPosition()), {
      node: v
    };
  }
  function C(u) {
    const _ = u.context(), v = _.currentType === 1 ? u.currentOffset() : _.offset, f = _.currentType === 1 ? _.endLoc : _.startLoc, E = a(2, v, f);
    E.items = [];
    let O = null;
    do {
      const M = O || u.nextToken();
      switch (O = null, M.type) {
        case 0:
          M.value == null && r(u, 13, _.lastStartLoc, 0, K(M)), E.items.push(o(u, M.value || ""));
          break;
        case 6:
          M.value == null && r(u, 13, _.lastStartLoc, 0, K(M)), E.items.push(c(u, M.value || ""));
          break;
        case 5:
          M.value == null && r(u, 13, _.lastStartLoc, 0, K(M)), E.items.push(g(u, M.value || ""));
          break;
        case 7:
          M.value == null && r(u, 13, _.lastStartLoc, 0, K(M)), E.items.push(p(u, M.value || ""));
          break;
        case 8:
          const q = k(u);
          E.items.push(q.node), O = q.nextConsumeToken || null;
          break;
      }
    } while (_.currentType !== 14 && _.currentType !== 1);
    const S = _.currentType === 1 ? _.lastOffset : u.currentOffset(), R = _.currentType === 1 ? _.lastEndLoc : u.currentPosition();
    return s(E, S, R), E;
  }
  function N(u, _, v, f) {
    const E = u.context();
    let O = f.items.length === 0;
    const S = a(1, _, v);
    S.cases = [], S.cases.push(f);
    do {
      const R = C(u);
      O || (O = R.items.length === 0), S.cases.push(R);
    } while (E.currentType !== 14);
    return O && r(u, 10, v, 0), s(S, u.currentOffset(), u.currentPosition()), S;
  }
  function I(u) {
    const _ = u.context(), { offset: v, startLoc: f } = _, E = C(u);
    return _.currentType === 14 ? E : N(u, v, f, E);
  }
  function L(u) {
    const _ = Rn(u, { ...e }), v = _.context(), f = a(0, v.offset, v.startLoc);
    return t && f.loc && (f.loc.source = u), f.body = I(_), v.currentType !== 14 && r(_, 13, v.lastStartLoc, 0, u[v.offset] || ""), s(f, _.currentOffset(), _.currentPosition()), f;
  }
  return { parse: L };
}
function K(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function jn(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function wt(e, t) {
  for (let n = 0; n < e.length; n++)
    st(e[n], t);
}
function st(e, t) {
  switch (e.type) {
    case 1:
      wt(e.cases, t), t.helper(
        "plural"
        /* PLURAL */
      );
      break;
    case 2:
      wt(e.items, t);
      break;
    case 6:
      st(e.key, t), t.helper(
        "linked"
        /* LINKED */
      );
      break;
    case 5:
      t.helper(
        "interpolate"
        /* INTERPOLATE */
      ), t.helper(
        "list"
        /* LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* INTERPOLATE */
      ), t.helper(
        "named"
        /* NAMED */
      );
      break;
  }
}
function Un(e, t = {}) {
  const n = jn(e);
  n.helper(
    "normalize"
    /* NORMALIZE */
  ), e.body && st(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Hn(e, t) {
  const { filename: n, breakLineCode: r, needIndent: a } = t, s = {
    source: e.loc.source,
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: a,
    indentLevel: 0
  }, o = () => s;
  function c(N, I) {
    s.code += N;
  }
  function g(N, I = !0) {
    const L = I ? r : "";
    c(a ? L + "  ".repeat(N) : L);
  }
  function p(N = !0) {
    const I = ++s.indentLevel;
    N && g(I);
  }
  function h(N = !0) {
    const I = --s.indentLevel;
    N && g(I);
  }
  function w() {
    g(s.indentLevel);
  }
  return {
    context: o,
    push: c,
    indent: p,
    deindent: h,
    newline: w,
    helper: (N) => `_${N}`,
    needIndent: () => s.needIndent
  };
}
function Gn(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* LINKED */
  )}(`), ue(e, t.key), t.modifier && (e.push(", "), ue(e, t.modifier)), e.push(")");
}
function Yn(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* NORMALIZE */
  )}([`), e.indent(r());
  const a = t.items.length;
  for (let s = 0; s < a && (ue(e, t.items[s]), s !== a - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Kn(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* PLURAL */
    )}([`), e.indent(r());
    const a = t.cases.length;
    for (let s = 0; s < a && (ue(e, t.cases[s]), s !== a - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function qn(e, t) {
  t.body ? ue(e, t.body) : e.push("null");
}
function ue(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      qn(e, t);
      break;
    case 1:
      Kn(e, t);
      break;
    case 2:
      Yn(e, t);
      break;
    case 6:
      Gn(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* INTERPOLATE */
      )}(${n(
        "list"
        /* LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* INTERPOLATE */
      )}(${n(
        "named"
        /* NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw new Error(`unhandled codegen node type: ${t.type}`);
  }
}
const Bn = (e, t = {}) => {
  const n = T(t.mode) ? t.mode : "normal", r = T(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], c = Hn(e, {
    filename: r,
    breakLineCode: a,
    needIndent: s
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(s), o.length > 0 && (c.push(`const { ${o.map((h) => `${h}: _${h}`).join(", ")} } = ctx`), c.newline()), c.push("return "), ue(c, e), c.deindent(s), c.push("}");
  const { code: g, map: p } = c.context();
  return {
    ast: e,
    code: g,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Jn(e, t = {}) {
  const r = An({ ...t }).parse(e);
  return Un(r, { ...t }), Bn(r, { ...t });
}
const Qn = {
  0: "Not found '{key}' key in '{locale}' locale messages.",
  1: "Fall back to translate '{key}' key with '{target}' locale.",
  2: "Cannot format a number value due to not supported Intl.NumberFormat.",
  3: "Fall back to number format '{key}' key with '{target}' locale.",
  4: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  5: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function fe(e, ...t) {
  return Ie(Qn[e], ...t);
}
const Ce = -1, Oe = "";
function Zn() {
  return {
    upper: (e) => T(e) ? e.toUpperCase() : e,
    lower: (e) => T(e) ? e.toLowerCase() : e,
    // prettier-ignore
    capitalize: (e) => T(e) ? `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}` : e
  };
}
let jt;
function Xn(e) {
  jt = e;
}
function zn(e = {}) {
  const t = T(e.locale) ? e.locale : "en-US", n = x(e.fallbackLocale) || F(e.fallbackLocale) || T(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = F(e.messages) ? e.messages : { [t]: {} }, a = F(e.datetimeFormats) ? e.datetimeFormats : { [t]: {} }, s = F(e.numberFormats) ? e.numberFormats : { [t]: {} }, o = Object.assign({}, e.modifiers || {}, Zn()), c = e.pluralRules || {}, g = W(e.missing) ? e.missing : null, p = $(e.missingWarn) || Le(e.missingWarn) ? e.missingWarn : !0, h = $(e.fallbackWarn) || Le(e.fallbackWarn) ? e.fallbackWarn : !0, w = !!e.fallbackFormat, k = !!e.unresolving, C = W(e.postTranslation) ? e.postTranslation : null, N = F(e.processor) ? e.processor : null, I = $(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, u = W(e.messageCompiler) ? e.messageCompiler : jt, _ = W(e.onWarn) ? e.onWarn : ae, v = e, f = j(v.__datetimeFormatters) ? v.__datetimeFormatters : /* @__PURE__ */ new Map(), E = j(v.__numberFormatters) ? v.__numberFormatters : /* @__PURE__ */ new Map(), O = {
    locale: t,
    fallbackLocale: n,
    messages: r,
    datetimeFormats: a,
    numberFormats: s,
    modifiers: o,
    pluralRules: c,
    missing: g,
    missingWarn: p,
    fallbackWarn: h,
    fallbackFormat: w,
    unresolving: k,
    postTranslation: C,
    processor: N,
    warnHtmlMessage: I,
    escapeParameter: L,
    messageCompiler: u,
    onWarn: _,
    __datetimeFormatters: f,
    __numberFormatters: E
  };
  return process.env.NODE_ENV !== "production" && (O.__emitter = v.__emitter != null ? v.__emitter : void 0), O;
}
function ot(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function er(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function lt(e, t, n, r, a) {
  const { missing: s, onWarn: o } = e;
  if (process.env.NODE_ENV !== "production") {
    const c = e.__emitter;
    c && c.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (s !== null) {
    const c = s(e, n, t, a);
    return T(c) ? c : t;
  } else
    return process.env.NODE_ENV !== "production" && er(r, t) && o(fe(0, { key: t, locale: n })), t;
}
function De(e, t, n) {
  const r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let a = r.__localeChainCache.get(n);
  if (!a) {
    a = [];
    let s = [n];
    for (; x(s); )
      s = Nt(a, s, t);
    const o = x(t) ? t : F(t) ? t.default ? t.default : null : t;
    s = T(o) ? [o] : o, x(s) && Nt(a, s, !1), r.__localeChainCache.set(n, a);
  }
  return a;
}
function Nt(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && $(r); a++) {
    const s = t[a];
    T(s) && (r = tr(e, t[a], n));
  }
  return r;
}
function tr(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const s = a.join("-");
    r = nr(e, s, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function nr(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (x(n) || F(n)) && n[a] && (r = n[a]);
  }
  return r;
}
function _e(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), De(e, n, t);
}
const rr = /<\/?[\w\s="/.':;#-\/]+>/, ar = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function sr(e, t) {
  ($(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && rr.test(e) && ae(Ie(ar, { source: e }));
}
const or = (e) => e;
let Lt = /* @__PURE__ */ Object.create(null);
function lr(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && sr(e, t);
    const r = (t.onCacheKey || or)(e), a = Lt[r];
    if (a)
      return a;
    let s = !1;
    const o = t.onError || In;
    t.onError = (p) => {
      s = !0, o(p);
    };
    const { code: c } = Jn(e, t), g = new Function(`return ${c}`)();
    return s ? g : Lt[r] = g;
  }
}
function ce(e) {
  return Fe(e, null, process.env.NODE_ENV !== "production" ? { messages: cr } : void 0);
}
const cr = {
  14: "Invalid arguments",
  15: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  16: "The argument provided is not a valid ISO date string"
}, Et = () => "", Te = (e) => W(e);
function Ot(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, fallbackLocale: s } = e, [o, c] = Be(...t), g = $(c.missingWarn) ? c.missingWarn : e.missingWarn, p = $(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, h = $(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, w = T(c.default) || $(c.default) ? $(c.default) ? o : c.default : n ? o : "", k = n || w !== "", C = T(c.locale) ? c.locale : e.locale;
  h && ir(c);
  let [N, I, L] = ur(e, o, C, s, p, g), u = o;
  if (T(N) || Te(N) || k && (N = w, u = N), !(T(N) || Te(N)) || !T(I))
    return a ? Ce : o;
  if (process.env.NODE_ENV !== "production" && T(N) && e.messageCompiler == null)
    return ae(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${o}'.`), o;
  let _ = !1;
  const f = Ut(e, o, I, N, u, () => {
    _ = !0;
  });
  if (_)
    return N;
  const E = dr(e, I, L, c), O = Tn(E), S = fr(e, f, O);
  return r ? r(S) : S;
}
function ir(e) {
  x(e.list) ? e.list = e.list.map((t) => T(t) ? bt(t) : t) : j(e.named) && Object.keys(e.named).forEach((t) => {
    T(e.named[t]) && (e.named[t] = bt(e.named[t]));
  });
}
function ur(e, t, n, r, a, s) {
  const { messages: o, onWarn: c } = e, g = De(e, r, n);
  let p = {}, h, w = null, k = n, C = null;
  const N = "translate";
  for (let I = 0; I < g.length; I++) {
    if (h = C = g[I], process.env.NODE_ENV !== "production" && n !== h && ot(a, t) && c(fe(1, {
      key: t,
      target: h
    })), process.env.NODE_ENV !== "production" && n !== h) {
      const f = e.__emitter;
      f && f.emit("fallback", {
        type: N,
        key: t,
        from: k,
        to: C,
        groupId: `${N}:${t}`
      });
    }
    p = o[h] || {};
    let L = null, u, _;
    if (process.env.NODE_ENV !== "production" && te && (L = window.performance.now(), u = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", U && U(u)), (w = Ee(p, t)) === null && (w = p[t]), process.env.NODE_ENV !== "production" && te) {
      const f = window.performance.now(), E = e.__emitter;
      E && L && w && E.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: w,
        time: f - L,
        groupId: `${N}:${t}`
      }), u && _ && U && ne && (U(_), ne("intlify message resolve", u, _));
    }
    if (T(w) || W(w))
      break;
    const v = lt(e, t, h, s, N);
    v !== t && (w = v), k = C;
  }
  return [w, h, p];
}
function Ut(e, t, n, r, a, s) {
  const { messageCompiler: o, warnHtmlMessage: c } = e;
  if (Te(r)) {
    const k = r;
    return k.locale = k.locale || n, k.key = k.key || t, k;
  }
  let g = null, p, h;
  process.env.NODE_ENV !== "production" && te && (g = window.performance.now(), p = "intlify-message-compilation-start", h = "intlify-message-compilation-end", U && U(p));
  const w = o(r, mr(e, n, a, r, c, s));
  if (process.env.NODE_ENV !== "production" && te) {
    const k = window.performance.now(), C = e.__emitter;
    C && g && C.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: k - g,
      groupId: `translate:${t}`
    }), p && h && U && ne && (U(h), ne("intlify message compilation", p, h));
  }
  return w.locale = n, w.key = t, w.source = r, w;
}
function fr(e, t, n) {
  let r = null, a, s;
  process.env.NODE_ENV !== "production" && te && (r = window.performance.now(), a = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", U && U(a));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && te) {
    const c = window.performance.now(), g = e.__emitter;
    g && r && g.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: c - r,
      groupId: `translate:${t.key}`
    }), a && s && U && ne && (U(s), ne("intlify message evaluation", a, s));
  }
  return o;
}
function Be(...e) {
  const [t, n, r] = e, a = {};
  if (!T(t) && !V(t))
    throw ce(
      14
      /* INVALID_ARGUMENT */
    );
  const s = V(t) ? String(t) : t;
  return V(n) ? a.plural = n : T(n) ? a.default = n : F(n) && !Pe(n) ? a.named = n : x(n) && (a.list = n), V(r) ? a.plural = r : T(r) ? a.default = r : F(r) && Object.assign(a, r), [s, a];
}
function mr(e, t, n, r, a, s) {
  return {
    warnHtmlMessage: a,
    onError: (o) => {
      if (s && s(o), process.env.NODE_ENV !== "production") {
        const c = `Message compilation error: ${o.message}`, g = o.location && mn(r, o.location.start.offset, o.location.end.offset), p = e.__emitter;
        p && p.emit("compile-error", {
          message: r,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(g ? `${c}
${g}` : c);
      } else
        throw o;
    },
    onCacheKey: (o) => on(t, n, o)
  };
}
function dr(e, t, n, r) {
  const { modifiers: a, pluralRules: s } = e, c = {
    locale: t,
    modifiers: a,
    pluralRules: s,
    messages: (g) => {
      const p = Ee(n, g);
      if (T(p)) {
        let h = !1;
        const k = Ut(e, g, t, p, g, () => {
          h = !0;
        });
        return h ? Et : k;
      } else return Te(p) ? p : Et;
    }
  };
  return e.processor && (c.processor = e.processor), r.list && (c.list = r.list), r.named && (c.named = r.named), V(r.plural) && (c.pluralIndex = r.plural), c;
}
const Tt = typeof Intl < "u", Ht = {
  dateTimeFormat: Tt && typeof Intl.DateTimeFormat < "u",
  numberFormat: Tt && typeof Intl.NumberFormat < "u"
};
function St(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Ht.dateTimeFormat)
    return s(fe(
      4
      /* CANNOT_FORMAT_DATE */
    )), Oe;
  const [c, g, p, h] = Je(...t), w = $(p.missingWarn) ? p.missingWarn : e.missingWarn, k = $(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, C = !!p.part, N = T(p.locale) ? p.locale : e.locale, I = De(e, a, N);
  if (!T(c) || c === "")
    return new Intl.DateTimeFormat(N).format(g);
  let L = {}, u, _ = null, v = N, f = null;
  const E = "datetime format";
  for (let R = 0; R < I.length; R++) {
    if (u = f = I[R], process.env.NODE_ENV !== "production" && N !== u && ot(k, c) && s(fe(5, {
      key: c,
      target: u
    })), process.env.NODE_ENV !== "production" && N !== u) {
      const M = e.__emitter;
      M && M.emit("fallback", {
        type: E,
        key: c,
        from: v,
        to: f,
        groupId: `${E}:${c}`
      });
    }
    if (L = n[u] || {}, _ = L[c], F(_))
      break;
    lt(e, c, u, w, E), v = f;
  }
  if (!F(_) || !T(u))
    return r ? Ce : c;
  let O = `${u}__${c}`;
  Pe(h) || (O = `${O}__${JSON.stringify(h)}`);
  let S = o.get(O);
  return S || (S = new Intl.DateTimeFormat(u, Object.assign({}, _, h)), o.set(O, S)), C ? S.formatToParts(g) : S.format(g);
}
function Je(...e) {
  const [t, n, r, a] = e;
  let s = {}, o = {}, c;
  if (T(t)) {
    if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))
      throw ce(
        16
        /* INVALID_ISO_DATE_ARGUMENT */
      );
    c = new Date(t);
    try {
      c.toISOString();
    } catch {
      throw ce(
        16
        /* INVALID_ISO_DATE_ARGUMENT */
      );
    }
  } else if (cn(t)) {
    if (isNaN(t.getTime()))
      throw ce(
        15
        /* INVALID_DATE_ARGUMENT */
      );
    c = t;
  } else if (V(t))
    c = t;
  else
    throw ce(
      14
      /* INVALID_ARGUMENT */
    );
  return T(n) ? s.key = n : F(n) && (s = n), T(r) ? s.locale = r : F(r) && (o = r), F(a) && (o = a), [s.key || "", c, s, o];
}
function It(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function Pt(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: s } = e, { __numberFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Ht.numberFormat)
    return s(fe(
      2
      /* CANNOT_FORMAT_NUMBER */
    )), Oe;
  const [c, g, p, h] = Qe(...t), w = $(p.missingWarn) ? p.missingWarn : e.missingWarn, k = $(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, C = !!p.part, N = T(p.locale) ? p.locale : e.locale, I = De(e, a, N);
  if (!T(c) || c === "")
    return new Intl.NumberFormat(N).format(g);
  let L = {}, u, _ = null, v = N, f = null;
  const E = "number format";
  for (let R = 0; R < I.length; R++) {
    if (u = f = I[R], process.env.NODE_ENV !== "production" && N !== u && ot(k, c) && s(fe(3, {
      key: c,
      target: u
    })), process.env.NODE_ENV !== "production" && N !== u) {
      const M = e.__emitter;
      M && M.emit("fallback", {
        type: E,
        key: c,
        from: v,
        to: f,
        groupId: `${E}:${c}`
      });
    }
    if (L = n[u] || {}, _ = L[c], F(_))
      break;
    lt(e, c, u, w, E), v = f;
  }
  if (!F(_) || !T(u))
    return r ? Ce : c;
  let O = `${u}__${c}`;
  Pe(h) || (O = `${O}__${JSON.stringify(h)}`);
  let S = o.get(O);
  return S || (S = new Intl.NumberFormat(u, Object.assign({}, _, h)), o.set(O, S)), C ? S.formatToParts(g) : S.format(g);
}
function Qe(...e) {
  const [t, n, r, a] = e;
  let s = {}, o = {};
  if (!V(t))
    throw ce(
      14
      /* INVALID_ARGUMENT */
    );
  const c = t;
  return T(n) ? s.key = n : F(n) && (s = n), T(r) ? s.locale = r : F(r) && (o = r), F(a) && (o = a), [s.key || "", c, s, o];
}
function Ft(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
const Ge = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, gr = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, pr = {
  "vue-i18n-timeline": 16764185
};
function Gt() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const a = e.get(n);
      a && a.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const a = e.get(n);
      a && a.splice(a.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((a) => a(r)), (e.get("*") || []).slice().map((a) => a(n, r));
    }
  };
}
function _r() {
  return Yt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Yt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const br = typeof Proxy == "function", hr = "devtools-plugin:setup", vr = "plugin:settings:set";
let se, Ze;
function yr() {
  var e;
  return se !== void 0 || (typeof window < "u" && window.performance ? (se = !0, Ze = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (se = !0, Ze = globalThis.perf_hooks.performance) : se = !1), se;
}
function kr() {
  return yr() ? Ze.now() : Date.now();
}
class wr {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const o in t.settings) {
        const c = t.settings[o];
        r[o] = c.defaultValue;
      }
    const a = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const o = localStorage.getItem(a), c = JSON.parse(o);
      Object.assign(s, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(o) {
        try {
          localStorage.setItem(a, JSON.stringify(o));
        } catch {
        }
        s = o;
      },
      now() {
        return kr();
      }
    }, n && n.on(vr, (o, c) => {
      o === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (o, c) => this.target ? this.target.on[c] : (...g) => {
        this.onQueue.push({
          method: c,
          args: g
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (o, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...g) => (this.targetQueue.push({
        method: c,
        args: g,
        resolve: () => {
        }
      }), this.fallbacks[c](...g)) : (...g) => new Promise((p) => {
        this.targetQueue.push({
          method: c,
          args: g,
          resolve: p
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Nr(e, t) {
  const n = e, r = Yt(), a = _r(), s = br && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    a.emit(hr, e, t);
  else {
    const o = s ? new wr(n, a) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: o
    }), o && t(o.proxiedTarget);
  }
}
function Lr() {
  let e = !1;
  process.env.NODE_ENV;
}
function Er() {
  const e = un();
  e.__INTLIFY__ = !0, console.info(`You are running a development build of vue-i18n.
Make sure to use the production build (*.prod.js) when deploying for production.`);
}
const Or = {
  6: "Fall back to {type} '{key}' with root locale.",
  7: "Not supported 'preserve'.",
  8: "Not supported 'formatter'.",
  9: "Not supported 'preserveDirectiveContent'.",
  10: "Not supported 'getChoiceIndex'.",
  11: "Component name legacy compatible: '{name}' -> 'i18n'",
  12: "Not found parent scope. use the global scope."
};
function Me(e, ...t) {
  return Ie(Or[e], ...t);
}
function G(e, ...t) {
  return Fe(e, null, process.env.NODE_ENV !== "production" ? { messages: Tr, args: t } : void 0);
}
const Tr = {
  14: "Unexpected return type in composer",
  15: "Invalid argument",
  16: "Must be called at the top of a `setup` function",
  17: "Need to install with `app.use` function",
  22: "Unexpected error",
  18: "Not available in legacy mode",
  19: "Required in value: {0}",
  20: "Invalid value",
  21: "Cannot setup vue-devtools plugin"
}, Xe = re("__transrateVNode"), ze = re("__datetimeParts"), et = re("__numberParts"), be = re("__enableEmitter"), tt = re("__disableEmitter"), Sr = re("__setPluralRules");
let Ct = 0;
function Dt(e) {
  return ((t, n, r, a) => e(n, r, Wt() || void 0, a));
}
function Kt(e, t) {
  const { messages: n, __i18n: r } = t, a = F(n) ? n : x(r) ? {} : { [e]: {} };
  return x(r) && r.forEach(({ locale: s, resource: o }) => {
    s ? (a[s] = a[s] || {}, Se(o, a[s])) : Se(o, a);
  }), a;
}
const Ir = Object.prototype.hasOwnProperty;
function Pr(e, t) {
  return Ir.call(e, t);
}
const Ne = (e) => !j(e) || x(e);
function Se(e, t) {
  if (Ne(e) || Ne(t))
    throw G(
      20
      /* INVALID_VALUE */
    );
  for (const n in e)
    Pr(e, n) && (Ne(e[n]) || Ne(t[n]) ? t[n] = e[n] : Se(e[n], t[n]));
}
function qt(e = {}) {
  const { __root: t } = e, n = t === void 0;
  let r = $(e.inheritLocale) ? e.inheritLocale : !0;
  const a = oe(
    // prettier-ignore
    t && r ? t.locale.value : T(e.locale) ? e.locale : "en-US"
  ), s = oe(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : T(e.fallbackLocale) || x(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value
  ), o = oe(Kt(a.value, e)), c = oe(F(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }), g = oe(F(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let p = t ? t.missingWarn : $(e.missingWarn) || Le(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : $(e.fallbackWarn) || Le(e.fallbackWarn) ? e.fallbackWarn : !0, w = t ? t.fallbackRoot : $(e.fallbackRoot) ? e.fallbackRoot : !0, k = !!e.fallbackFormat, C = W(e.missing) ? e.missing : null, N = W(e.missing) ? Dt(e.missing) : null, I = W(e.postTranslation) ? e.postTranslation : null, L = $(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, u = !!e.escapeParameter;
  const _ = t ? t.modifiers : F(e.modifiers) ? e.modifiers : {};
  let v = e.pluralRules || t && t.pluralRules, f;
  function E() {
    return zn({
      locale: a.value,
      fallbackLocale: s.value,
      messages: o.value,
      datetimeFormats: c.value,
      numberFormats: g.value,
      modifiers: _,
      pluralRules: v,
      missing: N === null ? void 0 : N,
      missingWarn: p,
      fallbackWarn: h,
      fallbackFormat: k,
      unresolving: !0,
      postTranslation: I === null ? void 0 : I,
      warnHtmlMessage: L,
      escapeParameter: u,
      __datetimeFormatters: F(f) ? f.__datetimeFormatters : void 0,
      __numberFormatters: F(f) ? f.__numberFormatters : void 0,
      __emitter: F(f) ? f.__emitter : void 0
    });
  }
  f = E(), _e(f, a.value, s.value);
  const O = le({
    get: () => a.value,
    set: (m) => {
      a.value = m, f.locale = a.value;
    }
  }), S = le({
    get: () => s.value,
    set: (m) => {
      s.value = m, f.fallbackLocale = s.value, _e(f, a.value, m);
    }
  }), R = le(() => o.value), M = le(() => c.value), q = le(() => g.value);
  function me() {
    return W(I) ? I : null;
  }
  function X(m) {
    I = m, f.postTranslation = m;
  }
  function he() {
    return C;
  }
  function $e(m) {
    m !== null && (N = Dt(m)), C = m, f.missing = N;
  }
  function J(m, y, Y, ee, Zt, Xt) {
    const mt = E(), ke = m(mt);
    if (V(ke) && ke === Ce) {
      const we = y();
      if (process.env.NODE_ENV !== "production" && t && (w || ae(Me(6, {
        key: we,
        type: Y
      })), process.env.NODE_ENV !== "production")) {
        const { __emitter: dt } = mt;
        dt && dt.emit("fallback", {
          type: Y,
          key: we,
          to: "global",
          groupId: `${Y}:${we}`
        });
      }
      return t && w ? ee(t) : Zt(we);
    } else {
      if (Xt(ke))
        return ke;
      throw G(
        14
        /* UNEXPECTED_RETURN_TYPE */
      );
    }
  }
  function ve(...m) {
    return J((y) => Ot(y, ...m), () => Be(...m)[0], "translate", (y) => y.t(...m), (y) => y, (y) => T(y));
  }
  function Re(...m) {
    return J((y) => St(y, ...m), () => Je(...m)[0], "datetime format", (y) => y.d(...m), () => Oe, (y) => T(y));
  }
  function Ve(...m) {
    return J((y) => Pt(y, ...m), () => Qe(...m)[0], "number format", (y) => y.n(...m), () => Oe, (y) => T(y));
  }
  function We(m) {
    return m.map((y) => T(y) ? gt(pt, null, y, 0) : y);
  }
  const xe = {
    normalize: We,
    interpolate: (m) => m,
    type: "vnode"
  };
  function ye(...m) {
    return J(
      (y) => {
        let Y;
        const ee = y;
        try {
          ee.processor = xe, Y = Ot(ee, ...m);
        } finally {
          ee.processor = null;
        }
        return Y;
      },
      () => Be(...m)[0],
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[Xe](...m),
      (y) => [gt(pt, null, y, 0)],
      (y) => x(y)
    );
  }
  function Ae(...m) {
    return J(
      (y) => Pt(y, ...m),
      () => Qe(...m)[0],
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[et](...m),
      () => [],
      (y) => T(y) || x(y)
    );
  }
  function je(...m) {
    return J(
      (y) => St(y, ...m),
      () => Je(...m)[0],
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[ze](...m),
      () => [],
      (y) => T(y) || x(y)
    );
  }
  function Ue(m) {
    v = m, f.pluralRules = v;
  }
  function de(m, y) {
    const Y = T(y) ? y : a.value, ee = z(Y);
    return Ee(ee, m) !== null;
  }
  function ge(m) {
    const y = o.value[a.value] || {}, Y = Ee(y, m);
    return Y ?? (t ? t.tm(m) || {} : {});
  }
  function z(m) {
    return o.value[m] || {};
  }
  function pe(m, y) {
    o.value[m] = y, f.messages = o.value;
  }
  function He(m, y) {
    o.value[m] = o.value[m] || {}, Se(y, o.value[m]), f.messages = o.value;
  }
  function l(m) {
    return c.value[m] || {};
  }
  function i(m, y) {
    c.value[m] = y, f.datetimeFormats = c.value, It(f, m, y);
  }
  function d(m, y) {
    c.value[m] = Object.assign(c.value[m] || {}, y), f.datetimeFormats = c.value, It(f, m, y);
  }
  function b(m) {
    return g.value[m] || {};
  }
  function P(m, y) {
    g.value[m] = y, f.numberFormats = g.value, Ft(f, m, y);
  }
  function D(m, y) {
    g.value[m] = Object.assign(g.value[m] || {}, y), f.numberFormats = g.value, Ft(f, m, y);
  }
  Ct++, t && (Ke(t.locale, (m) => {
    r && (a.value = m, f.locale = m, _e(f, a.value, s.value));
  }), Ke(t.fallbackLocale, (m) => {
    r && (s.value = m, f.fallbackLocale = m, _e(f, a.value, s.value));
  }));
  const H = {
    id: Ct,
    locale: O,
    fallbackLocale: S,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(m) {
      r = m, m && t && (a.value = t.locale.value, s.value = t.fallbackLocale.value, _e(f, a.value, s.value));
    },
    get availableLocales() {
      return Object.keys(o.value).sort();
    },
    messages: R,
    datetimeFormats: M,
    numberFormats: q,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return v || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(m) {
      p = m, f.missingWarn = p;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(m) {
      h = m, f.fallbackWarn = h;
    },
    get fallbackRoot() {
      return w;
    },
    set fallbackRoot(m) {
      w = m;
    },
    get fallbackFormat() {
      return k;
    },
    set fallbackFormat(m) {
      k = m, f.fallbackFormat = k;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(m) {
      L = m, f.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return u;
    },
    set escapeParameter(m) {
      u = m, f.escapeParameter = m;
    },
    t: ve,
    d: Re,
    n: Ve,
    te: de,
    tm: ge,
    getLocaleMessage: z,
    setLocaleMessage: pe,
    mergeLocaleMessage: He,
    getDateTimeFormat: l,
    setDateTimeFormat: i,
    mergeDateTimeFormat: d,
    getNumberFormat: b,
    setNumberFormat: P,
    mergeNumberFormat: D,
    getPostTranslationHandler: me,
    setPostTranslationHandler: X,
    getMissingHandler: he,
    setMissingHandler: $e,
    [Xe]: ye,
    [et]: Ae,
    [ze]: je,
    [Sr]: Ue
  };
  return process.env.NODE_ENV !== "production" && (H[be] = (m) => {
    f.__emitter = m;
  }, H[tt] = () => {
    f.__emitter = void 0;
  }), H;
}
const ct = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
  }
}, Ye = {
  /* eslint-disable */
  name: "i18n-t",
  props: {
    ...ct,
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => V(e) || !isNaN(e)
    }
  },
  /* eslint-enable */
  setup(e, t) {
    const { slots: n, attrs: r } = t, a = ut({ useScope: e.scope }), s = Object.keys(n).filter((o) => o !== "_");
    return () => {
      const o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = T(e.plural) ? +e.plural : e.plural);
      const c = Fr(t, s), g = a[Xe](e.keypath, c, o);
      return T(e.tag) ? ie(e.tag, { ...r }, g) : j(e.tag) ? ie(e.tag, { ...r }, g) : ie(xt, { ...r }, g);
    };
  }
};
function Fr({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? e.default ? e.default() : [] : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function Bt(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const o = { part: !0 };
    let c = {};
    e.locale && (o.locale = e.locale), T(e.format) ? o.key = e.format : j(e.format) && (T(e.format.key) && (o.key = e.format.key), c = Object.keys(e.format).reduce((h, w) => n.includes(w) ? Object.assign({}, h, { [w]: e.format[w] }) : h, {}));
    const g = r(e.value, o, c);
    let p = [o.key];
    return x(g) ? p = g.map((h, w) => {
      const k = a[h.type];
      return k ? k({ [h.type]: h.value, index: w, parts: g }) : [h.value];
    }) : T(g) && (p = [g]), T(e.tag) ? ie(e.tag, { ...s }, p) : j(e.tag) ? ie(e.tag, { ...s }, p) : ie(xt, { ...s }, p);
  };
}
const Cr = [
  "localeMatcher",
  "style",
  "unit",
  "unitDisplay",
  "currency",
  "currencyDisplay",
  "useGrouping",
  "numberingSystem",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "notation",
  "formatMatcher"
], Mt = {
  /* eslint-disable */
  name: "i18n-n",
  props: {
    ...ct,
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  },
  /* eslint-enable */
  setup(e, t) {
    const n = ut({ useScope: "parent" });
    return Bt(e, t, Cr, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[et](...r)
    ));
  }
}, Dr = [
  "dateStyle",
  "timeStyle",
  "fractionalSecondDigits",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "localeMatcher",
  "timeZone",
  "hour12",
  "hourCycle",
  "formatMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName"
], $t = {
  /* eslint-disable */
  name: "i18n-d",
  props: {
    ...ct,
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  },
  /* eslint-enable */
  setup(e, t) {
    const n = ut({ useScope: "parent" });
    return Bt(e, t, Dr, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ze](...r)
    ));
  }
};
function Mr(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function $r(e) {
  const t = (n, { instance: r, value: a, modifiers: s }) => {
    if (!r || !r.$)
      throw G(
        22
        /* UNEXPECTED_ERROR */
      );
    const o = Mr(e, r.$);
    process.env.NODE_ENV !== "production" && s.preserve && ae(Me(
      7
      /* NOT_SUPPORTED_PRESERVE */
    ));
    const c = Rr(a);
    n.textContent = o.t(...Vr(c));
  };
  return {
    beforeMount: t,
    beforeUpdate: t
  };
}
function Rr(e) {
  if (T(e))
    return { path: e };
  if (F(e)) {
    if (!("path" in e))
      throw G(19, "path");
    return e;
  } else
    throw G(
      20
      /* INVALID_VALUE */
    );
}
function Vr(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e, o = {}, c = r || {};
  return T(n) && (o.locale = n), V(a) && (o.plural = a), V(s) && (o.plural = s), [t, c, o];
}
function Wr(e, t, ...n) {
  const r = F(n[0]) ? n[0] : {}, a = !!r.useI18nComponentName, s = $(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && s && a && ae(Me(11, {
    name: Ye.name
  })), s && (e.component(a ? "i18n" : Ye.name, Ye), e.component(Mt.name, Mt), e.component($t.name, $t)), e.directive("t", $r(t));
}
let nt;
async function xr(e, t) {
  return new Promise((n, r) => {
    try {
      Nr({
        id: "vue-devtools-plugin-vue-i18n",
        label: Ge[
          "vue-devtools-plugin-vue-i18n"
          /* PLUGIN */
        ],
        app: e
      }, (a) => {
        nt = a, a.on.walkComponentTree((s, o) => {
          Jt(o.currentAppRecord, s.componentTreeData, t);
        }), a.on.inspectComponent((s) => {
          const o = s.componentInstance;
          o.vnode.el.__INTLIFY__ && s.instanceData && (t.mode === "legacy" ? o.vnode.el.__INTLIFY__ !== t.global.__composer && Rt(s.instanceData, o.vnode.el.__INTLIFY__) : Rt(s.instanceData, o.vnode.el.__INTLIFY__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Ge[
            "vue-i18n-resource-inspector"
            /* CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: gr[
            "vue-i18n-resource-inspector"
            /* CUSTOM_INSPECTOR */
          ]
        }), a.on.getInspectorTree((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && Gr(s, t);
        }), a.on.getInspectorState((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && Yr(s, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Ge[
            "vue-i18n-timeline"
            /* TIMELINE */
          ],
          color: pr[
            "vue-i18n-timeline"
            /* TIMELINE */
          ]
        }), n(!0);
      });
    } catch (a) {
      console.error(a), r(!1);
    }
  });
}
function Jt(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  for (const a of t) {
    const s = e.instanceMap.get(a.id);
    if (s && s.vnode.el.__INTLIFY__ && s.vnode.el.__INTLIFY__ !== r) {
      const c = {
        label: `i18n (${s.type.name || s.type.displayName || s.type.__file} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      a.tags.push(c);
    }
    Jt(e, a.children, n);
  }
}
function Rt(e, t) {
  const n = "vue-i18n: composer properties";
  e.state.push({
    type: n,
    key: "locale",
    editable: !1,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !1,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !1,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: it(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function it(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    W(r) && "source" in r ? t[n] = Hr(r) : j(r) ? t[n] = it(r) : t[n] = r;
  }), t;
}
const Ar = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function jr(e) {
  return e.replace(/[<>"&]/g, Ur);
}
function Ur(e) {
  return Ar[e] || e;
}
function Hr(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${jr(e.source)}")` : "(?)"}`
    }
  };
}
function Gr(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, a] of t.__instances) {
    const s = t.mode === "composition" ? a : a.__composer;
    if (n === s)
      continue;
    const o = r.type.name || r.type.displayName || r.type.__file;
    e.rootNodes.push({
      id: s.id.toString(),
      label: `${o} Scope`
    });
  }
}
function Yr(e, t) {
  if (e.nodeId === "global")
    e.state = Vt(t.mode === "composition" ? t.global : t.global.__composer);
  else {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e.nodeId);
    if (n) {
      const r = t.mode === "composition" ? n : n.__composer;
      e.state = Vt(r);
    }
  }
}
function Vt(e) {
  const t = {}, n = "Locale related info", r = [
    {
      type: n,
      key: "locale",
      editable: !1,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !1,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !1,
      value: e.inheritLocale
    }
  ];
  t[n] = r;
  const a = "Locale messages info", s = [
    {
      type: a,
      key: "messages",
      editable: !1,
      value: it(e.messages.value)
    }
  ];
  t[a] = s;
  const o = "Datetime formats info", c = [
    {
      type: o,
      key: "datetimeFormats",
      editable: !1,
      value: e.datetimeFormats.value
    }
  ];
  t[o] = c;
  const g = "Datetime formats info", p = [
    {
      type: g,
      key: "numberFormats",
      editable: !1,
      value: e.numberFormats.value
    }
  ];
  return t[g] = p, t;
}
function rt(e, t) {
  if (nt) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), nt.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function Kr(e = {}) {
  const t = !!e.globalInjection, n = /* @__PURE__ */ new Map(), r = qt(e), a = re(process.env.NODE_ENV !== "production" ? "vue-i18n" : ""), s = {
    // mode
    get mode() {
      return "composition";
    },
    // install plugin
    async install(o, ...c) {
      if (process.env.NODE_ENV !== "production" && (o.__VUE_I18N__ = s), o.__VUE_I18N_SYMBOL__ = a, o.provide(o.__VUE_I18N_SYMBOL__, s), t && Zr(o, s.global), Wr(o, s, ...c), process.env.NODE_ENV !== "production") {
        if (!await xr(o, s))
          throw G(
            21
            /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
          );
        const p = Gt();
        {
          const h = r;
          h[be] && h[be](p);
        }
        p.on("*", rt);
      }
    },
    // global accessor
    get global() {
      return r;
    },
    // @internal
    __instances: n,
    // @internal
    __getInstance(o) {
      return n.get(o) || null;
    },
    // @internal
    __setInstance(o, c) {
      n.set(o, c);
    },
    // @internal
    __deleteInstance(o) {
      n.delete(o);
    }
  };
  return s;
}
function ut(e = {}) {
  const t = Wt();
  if (t == null)
    throw G(
      16
      /* MUST_BE_CALL_SETUP_TOP */
    );
  if (!t.appContext.app.__VUE_I18N_SYMBOL__)
    throw G(
      17
      /* NOT_INSLALLED */
    );
  const n = en(t.appContext.app.__VUE_I18N_SYMBOL__);
  if (!n)
    throw G(
      22
      /* UNEXPECTED_ERROR */
    );
  const r = n.mode === "composition" ? n.global : n.global.__composer, a = Pe(e) ? "__i18n" in t.type ? "local" : "global" : e.useScope ? e.useScope : "local";
  if (a === "global") {
    let c = j(e.messages) ? e.messages : {};
    "__i18nGlobal" in t.type && (c = Kt(r.locale.value, {
      messages: c,
      __i18n: t.type.__i18nGlobal
    }));
    const g = Object.keys(c);
    if (g.length && g.forEach((p) => {
      r.mergeLocaleMessage(p, c[p]);
    }), j(e.datetimeFormats)) {
      const p = Object.keys(e.datetimeFormats);
      p.length && p.forEach((h) => {
        r.mergeDateTimeFormat(h, e.datetimeFormats[h]);
      });
    }
    if (j(e.numberFormats)) {
      const p = Object.keys(e.numberFormats);
      p.length && p.forEach((h) => {
        r.mergeNumberFormat(h, e.numberFormats[h]);
      });
    }
    return r;
  }
  if (a === "parent") {
    let c = qr(n, t);
    return c == null && (process.env.NODE_ENV !== "production" && ae(Me(
      12
      /* NOT_FOUND_PARENT_SCOPE */
    )), c = r), c;
  }
  if (n.mode === "legacy")
    throw G(
      18
      /* NOT_AVAILABLE_IN_LEGACY_MODE */
    );
  const s = n;
  let o = s.__getInstance(t);
  if (o == null) {
    const c = t.type, g = {
      ...e
    };
    c.__i18n && (g.__i18n = c.__i18n), r && (g.__root = r), o = qt(g), Br(s, t, o), s.__setInstance(t, o);
  }
  return o;
}
function qr(e, t) {
  let n = null;
  const r = t.root;
  let a = t.parent;
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      n = s.__getInstance(a);
    else {
      const o = s.__getInstance(a);
      o != null && (n = o.__composer);
    }
    if (n != null || r === a)
      break;
    a = a.parent;
  }
  return n;
}
function Br(e, t, n) {
  let r = null;
  tn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__INTLIFY__ = n, r = Gt();
      const a = n;
      a[be] && a[be](r), r.on("*", rt);
    }
  }, t), nn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__INTLIFY__) {
      r && r.off("*", rt);
      const a = n;
      a[tt] && a[tt](), delete t.vnode.el.__INTLIFY__;
    }
    e.__deleteInstance(t);
  }, t);
}
const Jr = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Qr = ["t", "d", "n", "tm"];
function Zr(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  Jr.forEach((r) => {
    const a = Object.getOwnPropertyDescriptor(t, r);
    if (!a)
      throw G(
        22
        /* UNEXPECTED_ERROR */
      );
    const s = zt(a.value) ? {
      get() {
        return a.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(o) {
        a.value.value = o;
      }
    } : {
      get() {
        return a.get && a.get();
      }
    };
    Object.defineProperty(n, r, s);
  }), e.config.globalProperties.$i18n = n, Qr.forEach((r) => {
    const a = Object.getOwnPropertyDescriptor(t, r);
    if (!a)
      throw G(
        22
        /* UNEXPECTED_ERROR */
      );
    Object.defineProperty(e.config.globalProperties, `$${r}`, a);
  });
}
Xn(lr);
Lr();
process.env.NODE_ENV !== "production" && Er();
const Xr = {
  global: {
    locales: "zh-cn"
  },
  test: {
    button: "这是测试按钮"
  },
  pwdChangeForm: {
    title: "修改密码",
    oldPwd: "旧密码",
    newPwd: "新密码",
    confirmPwd: "确认密码",
    submit: "确认",
    oldPwdPlaceholder: "请输入旧密码",
    newPwdPlaceholder: "请输入新密码",
    confirmPwdPlaceholder: "请确认新密码",
    confirmPwdError: "两次输入密码不一致",
    pwdChangeSuccess: "密码修改成功",
    pwdChangeError: "密码修改失败"
  }
}, zr = {
  global: {
    locales: "en"
  },
  test: {
    button: "Test Button"
  },
  pwdChangeForm: {
    title: "Change Password",
    oldPwd: "Old Password",
    newPwd: "New Password",
    confirmPwd: "Confirm Password",
    submit: "Confirm",
    oldPwdPlaceholder: "Please input old password",
    newPwdPlaceholder: "Please input new password",
    confirmPwdPlaceholder: "Please confirm new password",
    confirmPwdError: "Passwords do not match",
    pwdChangeSuccess: "Password changed successfully",
    pwdChangeError: "Password change failed"
  }
}, ea = "zh-cn", ta = {
  "zh-cn": Xr,
  en: zr
};
function na(e) {
  const t = e?.locale || ea, n = { ...ta, ...e?.messages };
  return Kr({
    // 使用 Composition API 模式
    locale: t,
    fallbackLocale: "zh-cn",
    messages: n,
    missingWarn: !1,
    fallbackWarn: !1,
    missing: (r, a) => a
  });
}
let Qt = null;
function ra(e) {
  Qt = e;
}
function aa() {
  return Qt;
}
function la() {
  const e = aa();
  if (!e)
    return {
      t: (r, a) => r,
      locale: oe("zh-cn"),
      changeLocale: (r) => {
      }
    };
  const { t, locale: n } = e.global;
  return {
    // 翻译函数
    t: (r, a) => {
      const s = t(r, a);
      return typeof s == "string" ? s : r;
    },
    // 当前语言（响应式）
    locale: n,
    // 切换语言
    changeLocale: (r) => {
      n.value = r;
    }
  };
}
const sa = /* @__PURE__ */ Object.assign({
  "./pd-ui/pd-PwdChangeForm/pd-PwdChangeForm.vue": () => import("./pd-PwdChangeForm-tFrLQ1xa.js"),
  "./pd-ui/pd-Test/pd-Test.vue": () => import("./pd-Test-DP_M-9m_.js")
}), ca = {
  install(e, t = {}) {
    let n = t.i18n;
    if (!n) {
      const r = typeof t.locale == "function" ? t.locale() : t.locale;
      n = na({
        locale: r,
        messages: t.messages
      }), e.use(n);
    }
    ra(n);
    for (const [r, a] of Object.entries(sa)) {
      const s = r.slice(r.lastIndexOf("/") + 1, r.lastIndexOf("."));
      e.component(s, rn(a));
    }
    if (e.provide("pd-ui-config", {
      locale: n.global.locale,
      t: n.global.t
    }), typeof t.locale == "function") {
      const r = le(() => {
        const a = t.locale;
        return a();
      });
      Ke(r, (a) => {
        n && n.global && (n.global.locale.value = a);
      });
    }
  }
};
export {
  na as createPdI18n,
  ca as default,
  ea as defaultLocale,
  zr as en,
  aa as getGlobalI18n,
  ta as messages,
  ra as setGlobalI18n,
  la as useLocale,
  Xr as zhcn
};
