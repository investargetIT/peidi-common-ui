import { ref as oe, computed as le, watch as Ke, getCurrentInstance as Rt, isRef as zt, h as ie, Fragment as Vt, inject as en, onMounted as tn, onUnmounted as nn, createVNode as pt, Text as gt, defineAsyncComponent as rn } from "vue";
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
const sn = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", re = (e) => sn ? Symbol(e) : e, on = (e, t, n) => ln({ l: e, k: t, s: n }), ln = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), A = (e) => typeof e == "number" && isFinite(e), cn = (e) => at(e) === "[object Date]", Ne = (e) => at(e) === "[object RegExp]", Pe = (e) => F(e) && Object.keys(e).length === 0;
function ae(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
let _t;
const un = () => _t || (_t = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bt(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const V = Array.isArray, R = (e) => typeof e == "function", O = (e) => typeof e == "string", x = (e) => typeof e == "boolean", j = (e) => (
  // eslint-disable-line
  e !== null && typeof e == "object"
), Wt = Object.prototype.toString, at = (e) => Wt.call(e), F = (e) => at(e) === "[object Object]", fn = (e) => e == null ? "" : V(e) || F(e) && e.toString === Wt ? JSON.stringify(e, null, 2) : String(e), ht = 2;
function mn(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const s = [];
  for (let o = 0; o < r.length; o++)
    if (a += r[o].length + 1, a >= t) {
      for (let c = o - ht; c <= o + ht || n > a; c++) {
        if (c < 0 || c >= r.length)
          continue;
        const p = c + 1;
        s.push(`${p}${" ".repeat(3 - String(p).length)}|  ${r[c]}`);
        const g = r[c].length;
        if (c === o) {
          const h = t - (a - g) + 1, E = Math.max(1, n > a ? g - h : n - t);
          s.push("   |  " + " ".repeat(h) + "^".repeat(E));
        } else if (c > o) {
          if (n > a) {
            const h = Math.max(Math.min(n - a, g), 1);
            s.push("   |  " + "^".repeat(h));
          }
          a += g + 1;
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
const pn = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function gn(e) {
  return pn.test(e);
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
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : gn(t) ? _n(t) : "*" + t;
}
function vn(e) {
  const t = [];
  let n = -1, r = 0, a = 0, s, o, c, p, g, h, E;
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
    const w = e[n + 1];
    if (r === 5 && w === "'" || r === 6 && w === '"')
      return n++, c = "\\" + w, k[
        0
        /* APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && C())) {
      if (p = bn(s), E = Z[r], g = E[p] || E.l || 8, g === 8 || (r = g[0], g[1] !== void 0 && (h = k[g[1]], h && (c = s, h() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const vt = /* @__PURE__ */ new Map();
function Le(e, t) {
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
const yn = (e) => e, kn = (e) => "", En = "text", wn = (e) => e.length === 0 ? "" : e.join(""), Nn = fn;
function yt(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ln(e) {
  const t = A(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (A(e.named.count) || A(e.named.n)) ? A(e.named.count) ? e.named.count : A(e.named.n) ? e.named.n : t : t;
}
function Tn(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function On(e = {}) {
  const t = e.locale, n = Ln(e), r = j(e.pluralRules) && O(t) && R(e.pluralRules[t]) ? e.pluralRules[t] : yt, a = j(e.pluralRules) && O(t) && R(e.pluralRules[t]) ? yt : void 0, s = (N) => N[r(n, N.length, a)], o = e.list || [], c = (N) => o[N], p = e.named || {};
  A(e.pluralIndex) && Tn(n, p);
  const g = (N) => p[N];
  function h(N) {
    const u = R(e.messages) ? e.messages(N) : j(e.messages) ? e.messages[N] : !1;
    return u || (e.parent ? e.parent.message(N) : kn);
  }
  const E = (N) => e.modifiers ? e.modifiers[N] : yn, k = F(e.processor) && R(e.processor.normalize) ? e.processor.normalize : wn, C = F(e.processor) && R(e.processor.interpolate) ? e.processor.interpolate : Nn, w = F(e.processor) && O(e.processor.type) ? e.processor.type : En, I = {
    list: c,
    named: g,
    plural: s,
    linked: (N, u) => {
      const _ = h(N)(I);
      return O(u) ? E(u)(_) : _;
    },
    message: h,
    type: w,
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
const B = " ", Fn = "\r", W = `
`, Cn = "\u2028", Dn = "\u2029";
function Mn(e) {
  const t = e;
  let n = 0, r = 1, a = 1, s = 0;
  const o = (S) => t[S] === Fn && t[S + 1] === W, c = (S) => t[S] === W, p = (S) => t[S] === Dn, g = (S) => t[S] === Cn, h = (S) => o(S) || c(S) || p(S) || g(S), E = () => n, k = () => r, C = () => a, w = () => s, I = (S) => o(S) || p(S) || g(S) ? W : t[S], N = () => I(n), u = () => I(n + s);
  function _() {
    return s = 0, h(n) && (r++, a = 0), o(n) && n++, n++, a++, t[n];
  }
  function v() {
    return o(n + s) && s++, s++, t[n + s];
  }
  function f() {
    n = 0, r = 1, a = 1, s = 0;
  }
  function L(S = 0) {
    s = S;
  }
  function T() {
    const S = n + s;
    for (; S !== n; )
      _();
    s = 0;
  }
  return {
    index: E,
    line: k,
    column: C,
    peekOffset: w,
    charAt: I,
    currentChar: N,
    currentPeek: u,
    next: _,
    peek: v,
    reset: f,
    resetPeek: L,
    skipToPeek: T
  };
}
const Q = void 0, kt = "'", xn = "tokenizer";
function $n(e, t = {}) {
  const n = t.location !== !1, r = Mn(e), a = () => r.index(), s = () => Pn(r.line(), r.column(), r.index()), o = s(), c = a(), p = {
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
  }, g = () => p, { onError: h } = t;
  function E(l, i, d, ...b) {
    const P = g();
    if (i.column += d, i.offset += d, h) {
      const D = qe(P.startLoc, i), H = Fe(l, D, {
        domain: xn,
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
  function w(l, i) {
    return l.currentChar() === i ? (l.next(), i) : (E(0, s(), 0, i), "");
  }
  function I(l) {
    let i = "";
    for (; l.currentPeek() === B || l.currentPeek() === W; )
      i += l.currentPeek(), l.peek();
    return i;
  }
  function N(l) {
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
  function L(l, i) {
    const { currentType: d } = i;
    if (d !== 2)
      return !1;
    I(l);
    const b = l.currentPeek() === kt;
    return l.resetPeek(), b;
  }
  function T(l, i) {
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
  function $(l, i) {
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
      return D === "{" ? u(l.peek()) : D === "@" || D === "%" || D === "|" || D === ":" || D === "." || D === B || !D ? !1 : D === W ? (l.peek(), b()) : u(D);
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
      return m === "{" ? D === "%" ? !1 : P : m === "@" || !m ? D === "%" ? !0 : P : m === "%" ? (l.peek(), d(P, "%", !0)) : m === "|" ? D === "%" || H ? !0 : !(D === B || D === W) : m === B ? (l.peek(), d(!0, B, H)) : m === W ? (l.peek(), d(!0, W, H)) : !0;
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
  function xe(l) {
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
    for (; i = xe(l); )
      d += i;
    return d;
  }
  function $e(l) {
    const i = (d) => {
      const b = l.currentChar();
      return b === "{" || b === "}" || b === "@" || !b ? d : b === "%" ? me(l) ? (d += b, l.next(), i(d)) : d : b === "|" ? d : b === B || b === W ? me(l) ? (d += b, l.next(), i(d)) : q(l) ? d : (d += b, l.next(), i(d)) : (d += b, l.next(), i(d));
    };
    return i("");
  }
  function Ae(l) {
    N(l);
    let i = "", d = "";
    for (; i = he(l); )
      d += i;
    return l.currentChar() === Q && E(6, s(), 0), d;
  }
  function Re(l) {
    N(l);
    let i = "";
    return l.currentChar() === "-" ? (l.next(), i += `-${ve(l)}`) : i += ve(l), l.currentChar() === Q && E(6, s(), 0), i;
  }
  function ft(l) {
    N(l), w(l, "'");
    let i = "", d = "";
    const b = (D) => D !== kt && D !== W;
    for (; i = X(l, b); )
      i === "\\" ? d += Ve(l) : d += i;
    const P = l.currentChar();
    return P === W || P === Q ? (E(2, s(), 0), P === W && (l.next(), w(l, "'")), d) : (w(l, "'"), d);
  }
  function Ve(l) {
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
        return E(3, s(), 0, i), "";
    }
  }
  function ye(l, i, d) {
    w(l, i);
    let b = "";
    for (let P = 0; P < d; P++) {
      const D = J(l);
      if (!D) {
        E(4, s(), 0, `\\${i}${b}${l.currentChar()}`);
        break;
      }
      b += D;
    }
    return `\\${i}${b}`;
  }
  function We(l) {
    N(l);
    let i = "", d = "";
    const b = (P) => P !== "{" && P !== "}" && P !== B && P !== W;
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
      return P === "{" || P === "%" || P === "@" || P === "|" || !P || P === B ? b : P === W ? (b += P, l.next(), i(d, b)) : (b += P, l.next(), i(!0, b));
    };
    return i(!1, "");
  }
  function de(l) {
    N(l);
    const i = w(
      l,
      "|"
      /* Pipe */
    );
    return N(l), i;
  }
  function pe(l, i) {
    let d = null;
    switch (l.currentChar()) {
      case "{":
        return i.braceNest >= 1 && E(8, s(), 0), l.next(), d = k(
          i,
          2,
          "{"
          /* BraceLeft */
        ), N(l), i.braceNest++, d;
      case "}":
        return i.braceNest > 0 && i.currentType === 2 && E(7, s(), 0), l.next(), d = k(
          i,
          3,
          "}"
          /* BraceRight */
        ), i.braceNest--, i.braceNest > 0 && N(l), i.inLinked && i.braceNest === 0 && (i.inLinked = !1), d;
      case "@":
        return i.braceNest > 0 && E(6, s(), 0), d = z(l, i) || C(i), i.braceNest = 0, d;
      default:
        let P = !0, D = !0, H = !0;
        if (q(l))
          return i.braceNest > 0 && E(6, s(), 0), d = k(i, 1, de(l)), i.braceNest = 0, i.inLinked = !1, d;
        if (i.braceNest > 0 && (i.currentType === 5 || i.currentType === 6 || i.currentType === 7))
          return E(6, s(), 0), i.braceNest = 0, ge(l, i);
        if (P = v(l, i))
          return d = k(i, 5, Ae(l)), N(l), d;
        if (D = f(l, i))
          return d = k(i, 6, Re(l)), N(l), d;
        if (H = L(l, i))
          return d = k(i, 7, ft(l)), N(l), d;
        if (!P && !D && !H)
          return d = k(i, 13, We(l)), E(1, s(), 0, d.value), N(l), d;
        break;
    }
    return d;
  }
  function z(l, i) {
    const { currentType: d } = i;
    let b = null;
    const P = l.currentChar();
    switch ((d === 8 || d === 9 || d === 12 || d === 10) && (P === W || P === B) && E(9, s(), 0), P) {
      case "@":
        return l.next(), b = k(
          i,
          8,
          "@"
          /* LinkedAlias */
        ), i.inLinked = !0, b;
      case ".":
        return N(l), l.next(), k(
          i,
          9,
          "."
          /* LinkedDot */
        );
      case ":":
        return N(l), l.next(), k(
          i,
          10,
          ":"
          /* LinkedDelimiter */
        );
      default:
        return q(l) ? (b = k(i, 1, de(l)), i.braceNest = 0, i.inLinked = !1, b) : T(l, i) || $(l, i) ? (N(l), z(l, i)) : S(l, i) ? (N(l), k(i, 12, je(l))) : M(l, i) ? (N(l), P === "{" ? pe(l, i) || b : k(i, 11, Ue(l))) : (d === 8 && E(9, s(), 0), i.braceNest = 0, i.inLinked = !1, ge(l, i));
    }
  }
  function ge(l, i) {
    let d = {
      type: 14
      /* EOF */
    };
    if (i.braceNest > 0)
      return pe(l, i) || C(i);
    if (i.inLinked)
      return z(l, i) || C(i);
    const b = l.currentChar();
    switch (b) {
      case "{":
        return pe(l, i) || C(i);
      case "}":
        return E(5, s(), 0), l.next(), k(
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
          return k(i, 0, $e(l));
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
    const { currentType: l, offset: i, startLoc: d, endLoc: b } = p;
    return p.lastType = l, p.lastOffset = i, p.lastStartLoc = d, p.lastEndLoc = b, p.offset = a(), p.startLoc = s(), r.currentChar() === Q ? k(
      p,
      14
      /* EOF */
    ) : ge(r, p);
  }
  return {
    nextToken: He,
    currentOffset: a,
    currentPosition: s,
    context: g
  };
}
const An = "parser", Rn = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Vn(e, t, n) {
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
function Wn(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(u, _, v, f, ...L) {
    const T = u.currentPosition();
    if (T.offset += f, T.column += f, n) {
      const S = qe(v, T), $ = Fe(_, S, {
        domain: An,
        args: L
      });
      n($);
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
    const v = u.context(), { lastOffset: f, lastStartLoc: L } = v, T = a(5, f, L);
    return T.index = parseInt(_, 10), u.nextToken(), s(T, u.currentOffset(), u.currentPosition()), T;
  }
  function p(u, _) {
    const v = u.context(), { lastOffset: f, lastStartLoc: L } = v, T = a(4, f, L);
    return T.key = _, u.nextToken(), s(T, u.currentOffset(), u.currentPosition()), T;
  }
  function g(u, _) {
    const v = u.context(), { lastOffset: f, lastStartLoc: L } = v, T = a(9, f, L);
    return T.value = _.replace(Rn, Vn), u.nextToken(), s(T, u.currentOffset(), u.currentPosition()), T;
  }
  function h(u) {
    const _ = u.nextToken(), v = u.context(), { lastOffset: f, lastStartLoc: L } = v, T = a(8, f, L);
    return _.type !== 12 ? (r(u, 11, v.lastStartLoc, 0), T.value = "", s(T, f, L), {
      nextConsumeToken: _,
      node: T
    }) : (_.value == null && r(u, 13, v.lastStartLoc, 0, K(_)), T.value = _.value || "", s(T, u.currentOffset(), u.currentPosition()), {
      node: T
    });
  }
  function E(u, _) {
    const v = u.context(), f = a(7, v.offset, v.startLoc);
    return f.value = _, s(f, u.currentOffset(), u.currentPosition()), f;
  }
  function k(u) {
    const _ = u.context(), v = a(6, _.offset, _.startLoc);
    let f = u.nextToken();
    if (f.type === 9) {
      const L = h(u);
      v.modifier = L.node, f = L.nextConsumeToken || u.nextToken();
    }
    switch (f.type !== 10 && r(u, 13, _.lastStartLoc, 0, K(f)), f = u.nextToken(), f.type === 2 && (f = u.nextToken()), f.type) {
      case 11:
        f.value == null && r(u, 13, _.lastStartLoc, 0, K(f)), v.key = E(u, f.value || "");
        break;
      case 5:
        f.value == null && r(u, 13, _.lastStartLoc, 0, K(f)), v.key = p(u, f.value || "");
        break;
      case 6:
        f.value == null && r(u, 13, _.lastStartLoc, 0, K(f)), v.key = c(u, f.value || "");
        break;
      case 7:
        f.value == null && r(u, 13, _.lastStartLoc, 0, K(f)), v.key = g(u, f.value || "");
        break;
      default:
        r(u, 12, _.lastStartLoc, 0);
        const L = u.context(), T = a(7, L.offset, L.startLoc);
        return T.value = "", s(T, L.offset, L.startLoc), v.key = T, s(v, L.offset, L.startLoc), {
          nextConsumeToken: f,
          node: v
        };
    }
    return s(v, u.currentOffset(), u.currentPosition()), {
      node: v
    };
  }
  function C(u) {
    const _ = u.context(), v = _.currentType === 1 ? u.currentOffset() : _.offset, f = _.currentType === 1 ? _.endLoc : _.startLoc, L = a(2, v, f);
    L.items = [];
    let T = null;
    do {
      const M = T || u.nextToken();
      switch (T = null, M.type) {
        case 0:
          M.value == null && r(u, 13, _.lastStartLoc, 0, K(M)), L.items.push(o(u, M.value || ""));
          break;
        case 6:
          M.value == null && r(u, 13, _.lastStartLoc, 0, K(M)), L.items.push(c(u, M.value || ""));
          break;
        case 5:
          M.value == null && r(u, 13, _.lastStartLoc, 0, K(M)), L.items.push(p(u, M.value || ""));
          break;
        case 7:
          M.value == null && r(u, 13, _.lastStartLoc, 0, K(M)), L.items.push(g(u, M.value || ""));
          break;
        case 8:
          const q = k(u);
          L.items.push(q.node), T = q.nextConsumeToken || null;
          break;
      }
    } while (_.currentType !== 14 && _.currentType !== 1);
    const S = _.currentType === 1 ? _.lastOffset : u.currentOffset(), $ = _.currentType === 1 ? _.lastEndLoc : u.currentPosition();
    return s(L, S, $), L;
  }
  function w(u, _, v, f) {
    const L = u.context();
    let T = f.items.length === 0;
    const S = a(1, _, v);
    S.cases = [], S.cases.push(f);
    do {
      const $ = C(u);
      T || (T = $.items.length === 0), S.cases.push($);
    } while (L.currentType !== 14);
    return T && r(u, 10, v, 0), s(S, u.currentOffset(), u.currentPosition()), S;
  }
  function I(u) {
    const _ = u.context(), { offset: v, startLoc: f } = _, L = C(u);
    return _.currentType === 14 ? L : w(u, v, f, L);
  }
  function N(u) {
    const _ = $n(u, { ...e }), v = _.context(), f = a(0, v.offset, v.startLoc);
    return t && f.loc && (f.loc.source = u), f.body = I(_), v.currentType !== 14 && r(_, 13, v.lastStartLoc, 0, u[v.offset] || ""), s(f, _.currentOffset(), _.currentPosition()), f;
  }
  return { parse: N };
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
function Et(e, t) {
  for (let n = 0; n < e.length; n++)
    st(e[n], t);
}
function st(e, t) {
  switch (e.type) {
    case 1:
      Et(e.cases, t), t.helper(
        "plural"
        /* PLURAL */
      );
      break;
    case 2:
      Et(e.items, t);
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
  function c(w, I) {
    s.code += w;
  }
  function p(w, I = !0) {
    const N = I ? r : "";
    c(a ? N + "  ".repeat(w) : N);
  }
  function g(w = !0) {
    const I = ++s.indentLevel;
    w && p(I);
  }
  function h(w = !0) {
    const I = --s.indentLevel;
    w && p(I);
  }
  function E() {
    p(s.indentLevel);
  }
  return {
    context: o,
    push: c,
    indent: g,
    deindent: h,
    newline: E,
    helper: (w) => `_${w}`,
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
  const n = O(t.mode) ? t.mode : "normal", r = O(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], c = Hn(e, {
    filename: r,
    breakLineCode: a,
    needIndent: s
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(s), o.length > 0 && (c.push(`const { ${o.map((h) => `${h}: _${h}`).join(", ")} } = ctx`), c.newline()), c.push("return "), ue(c, e), c.deindent(s), c.push("}");
  const { code: p, map: g } = c.context();
  return {
    ast: e,
    code: p,
    map: g ? g.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Jn(e, t = {}) {
  const r = Wn({ ...t }).parse(e);
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
const Ce = -1, Te = "";
function Zn() {
  return {
    upper: (e) => O(e) ? e.toUpperCase() : e,
    lower: (e) => O(e) ? e.toLowerCase() : e,
    // prettier-ignore
    capitalize: (e) => O(e) ? `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}` : e
  };
}
let jt;
function Xn(e) {
  jt = e;
}
function zn(e = {}) {
  const t = O(e.locale) ? e.locale : "en-US", n = V(e.fallbackLocale) || F(e.fallbackLocale) || O(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = F(e.messages) ? e.messages : { [t]: {} }, a = F(e.datetimeFormats) ? e.datetimeFormats : { [t]: {} }, s = F(e.numberFormats) ? e.numberFormats : { [t]: {} }, o = Object.assign({}, e.modifiers || {}, Zn()), c = e.pluralRules || {}, p = R(e.missing) ? e.missing : null, g = x(e.missingWarn) || Ne(e.missingWarn) ? e.missingWarn : !0, h = x(e.fallbackWarn) || Ne(e.fallbackWarn) ? e.fallbackWarn : !0, E = !!e.fallbackFormat, k = !!e.unresolving, C = R(e.postTranslation) ? e.postTranslation : null, w = F(e.processor) ? e.processor : null, I = x(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter, u = R(e.messageCompiler) ? e.messageCompiler : jt, _ = R(e.onWarn) ? e.onWarn : ae, v = e, f = j(v.__datetimeFormatters) ? v.__datetimeFormatters : /* @__PURE__ */ new Map(), L = j(v.__numberFormatters) ? v.__numberFormatters : /* @__PURE__ */ new Map(), T = {
    locale: t,
    fallbackLocale: n,
    messages: r,
    datetimeFormats: a,
    numberFormats: s,
    modifiers: o,
    pluralRules: c,
    missing: p,
    missingWarn: g,
    fallbackWarn: h,
    fallbackFormat: E,
    unresolving: k,
    postTranslation: C,
    processor: w,
    warnHtmlMessage: I,
    escapeParameter: N,
    messageCompiler: u,
    onWarn: _,
    __datetimeFormatters: f,
    __numberFormatters: L
  };
  return process.env.NODE_ENV !== "production" && (T.__emitter = v.__emitter != null ? v.__emitter : void 0), T;
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
    return O(c) ? c : t;
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
    for (; V(s); )
      s = wt(a, s, t);
    const o = V(t) ? t : F(t) ? t.default ? t.default : null : t;
    s = O(o) ? [o] : o, V(s) && wt(a, s, !1), r.__localeChainCache.set(n, a);
  }
  return a;
}
function wt(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && x(r); a++) {
    const s = t[a];
    O(s) && (r = tr(e, t[a], n));
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
    e.push(a), (V(n) || F(n)) && n[a] && (r = n[a]);
  }
  return r;
}
function _e(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), De(e, n, t);
}
const rr = /<\/?[\w\s="/.':;#-\/]+>/, ar = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function sr(e, t) {
  (x(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && rr.test(e) && ae(Ie(ar, { source: e }));
}
const or = (e) => e;
let Nt = /* @__PURE__ */ Object.create(null);
function lr(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && sr(e, t);
    const r = (t.onCacheKey || or)(e), a = Nt[r];
    if (a)
      return a;
    let s = !1;
    const o = t.onError || In;
    t.onError = (g) => {
      s = !0, o(g);
    };
    const { code: c } = Jn(e, t), p = new Function(`return ${c}`)();
    return s ? p : Nt[r] = p;
  }
}
function ce(e) {
  return Fe(e, null, process.env.NODE_ENV !== "production" ? { messages: cr } : void 0);
}
const cr = {
  14: "Invalid arguments",
  15: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  16: "The argument provided is not a valid ISO date string"
}, Lt = () => "", Oe = (e) => R(e);
function Tt(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, fallbackLocale: s } = e, [o, c] = Be(...t), p = x(c.missingWarn) ? c.missingWarn : e.missingWarn, g = x(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, h = x(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, E = O(c.default) || x(c.default) ? x(c.default) ? o : c.default : n ? o : "", k = n || E !== "", C = O(c.locale) ? c.locale : e.locale;
  h && ir(c);
  let [w, I, N] = ur(e, o, C, s, g, p), u = o;
  if (O(w) || Oe(w) || k && (w = E, u = w), !(O(w) || Oe(w)) || !O(I))
    return a ? Ce : o;
  if (process.env.NODE_ENV !== "production" && O(w) && e.messageCompiler == null)
    return ae(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${o}'.`), o;
  let _ = !1;
  const f = Ut(e, o, I, w, u, () => {
    _ = !0;
  });
  if (_)
    return w;
  const L = dr(e, I, N, c), T = On(L), S = fr(e, f, T);
  return r ? r(S) : S;
}
function ir(e) {
  V(e.list) ? e.list = e.list.map((t) => O(t) ? bt(t) : t) : j(e.named) && Object.keys(e.named).forEach((t) => {
    O(e.named[t]) && (e.named[t] = bt(e.named[t]));
  });
}
function ur(e, t, n, r, a, s) {
  const { messages: o, onWarn: c } = e, p = De(e, r, n);
  let g = {}, h, E = null, k = n, C = null;
  const w = "translate";
  for (let I = 0; I < p.length; I++) {
    if (h = C = p[I], process.env.NODE_ENV !== "production" && n !== h && ot(a, t) && c(fe(1, {
      key: t,
      target: h
    })), process.env.NODE_ENV !== "production" && n !== h) {
      const f = e.__emitter;
      f && f.emit("fallback", {
        type: w,
        key: t,
        from: k,
        to: C,
        groupId: `${w}:${t}`
      });
    }
    g = o[h] || {};
    let N = null, u, _;
    if (process.env.NODE_ENV !== "production" && te && (N = window.performance.now(), u = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", U && U(u)), (E = Le(g, t)) === null && (E = g[t]), process.env.NODE_ENV !== "production" && te) {
      const f = window.performance.now(), L = e.__emitter;
      L && N && E && L.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: E,
        time: f - N,
        groupId: `${w}:${t}`
      }), u && _ && U && ne && (U(_), ne("intlify message resolve", u, _));
    }
    if (O(E) || R(E))
      break;
    const v = lt(e, t, h, s, w);
    v !== t && (E = v), k = C;
  }
  return [E, h, g];
}
function Ut(e, t, n, r, a, s) {
  const { messageCompiler: o, warnHtmlMessage: c } = e;
  if (Oe(r)) {
    const k = r;
    return k.locale = k.locale || n, k.key = k.key || t, k;
  }
  let p = null, g, h;
  process.env.NODE_ENV !== "production" && te && (p = window.performance.now(), g = "intlify-message-compilation-start", h = "intlify-message-compilation-end", U && U(g));
  const E = o(r, mr(e, n, a, r, c, s));
  if (process.env.NODE_ENV !== "production" && te) {
    const k = window.performance.now(), C = e.__emitter;
    C && p && C.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: k - p,
      groupId: `translate:${t}`
    }), g && h && U && ne && (U(h), ne("intlify message compilation", g, h));
  }
  return E.locale = n, E.key = t, E.source = r, E;
}
function fr(e, t, n) {
  let r = null, a, s;
  process.env.NODE_ENV !== "production" && te && (r = window.performance.now(), a = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", U && U(a));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && te) {
    const c = window.performance.now(), p = e.__emitter;
    p && r && p.emit("message-evaluation", {
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
  if (!O(t) && !A(t))
    throw ce(
      14
      /* INVALID_ARGUMENT */
    );
  const s = A(t) ? String(t) : t;
  return A(n) ? a.plural = n : O(n) ? a.default = n : F(n) && !Pe(n) ? a.named = n : V(n) && (a.list = n), A(r) ? a.plural = r : O(r) ? a.default = r : F(r) && Object.assign(a, r), [s, a];
}
function mr(e, t, n, r, a, s) {
  return {
    warnHtmlMessage: a,
    onError: (o) => {
      if (s && s(o), process.env.NODE_ENV !== "production") {
        const c = `Message compilation error: ${o.message}`, p = o.location && mn(r, o.location.start.offset, o.location.end.offset), g = e.__emitter;
        g && g.emit("compile-error", {
          message: r,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(p ? `${c}
${p}` : c);
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
    messages: (p) => {
      const g = Le(n, p);
      if (O(g)) {
        let h = !1;
        const k = Ut(e, p, t, g, p, () => {
          h = !0;
        });
        return h ? Lt : k;
      } else return Oe(g) ? g : Lt;
    }
  };
  return e.processor && (c.processor = e.processor), r.list && (c.list = r.list), r.named && (c.named = r.named), A(r.plural) && (c.pluralIndex = r.plural), c;
}
const Ot = typeof Intl < "u", Ht = {
  dateTimeFormat: Ot && typeof Intl.DateTimeFormat < "u",
  numberFormat: Ot && typeof Intl.NumberFormat < "u"
};
function St(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Ht.dateTimeFormat)
    return s(fe(
      4
      /* CANNOT_FORMAT_DATE */
    )), Te;
  const [c, p, g, h] = Je(...t), E = x(g.missingWarn) ? g.missingWarn : e.missingWarn, k = x(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn, C = !!g.part, w = O(g.locale) ? g.locale : e.locale, I = De(e, a, w);
  if (!O(c) || c === "")
    return new Intl.DateTimeFormat(w).format(p);
  let N = {}, u, _ = null, v = w, f = null;
  const L = "datetime format";
  for (let $ = 0; $ < I.length; $++) {
    if (u = f = I[$], process.env.NODE_ENV !== "production" && w !== u && ot(k, c) && s(fe(5, {
      key: c,
      target: u
    })), process.env.NODE_ENV !== "production" && w !== u) {
      const M = e.__emitter;
      M && M.emit("fallback", {
        type: L,
        key: c,
        from: v,
        to: f,
        groupId: `${L}:${c}`
      });
    }
    if (N = n[u] || {}, _ = N[c], F(_))
      break;
    lt(e, c, u, E, L), v = f;
  }
  if (!F(_) || !O(u))
    return r ? Ce : c;
  let T = `${u}__${c}`;
  Pe(h) || (T = `${T}__${JSON.stringify(h)}`);
  let S = o.get(T);
  return S || (S = new Intl.DateTimeFormat(u, Object.assign({}, _, h)), o.set(T, S)), C ? S.formatToParts(p) : S.format(p);
}
function Je(...e) {
  const [t, n, r, a] = e;
  let s = {}, o = {}, c;
  if (O(t)) {
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
  } else if (A(t))
    c = t;
  else
    throw ce(
      14
      /* INVALID_ARGUMENT */
    );
  return O(n) ? s.key = n : F(n) && (s = n), O(r) ? s.locale = r : F(r) && (o = r), F(a) && (o = a), [s.key || "", c, s, o];
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
    )), Te;
  const [c, p, g, h] = Qe(...t), E = x(g.missingWarn) ? g.missingWarn : e.missingWarn, k = x(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn, C = !!g.part, w = O(g.locale) ? g.locale : e.locale, I = De(e, a, w);
  if (!O(c) || c === "")
    return new Intl.NumberFormat(w).format(p);
  let N = {}, u, _ = null, v = w, f = null;
  const L = "number format";
  for (let $ = 0; $ < I.length; $++) {
    if (u = f = I[$], process.env.NODE_ENV !== "production" && w !== u && ot(k, c) && s(fe(3, {
      key: c,
      target: u
    })), process.env.NODE_ENV !== "production" && w !== u) {
      const M = e.__emitter;
      M && M.emit("fallback", {
        type: L,
        key: c,
        from: v,
        to: f,
        groupId: `${L}:${c}`
      });
    }
    if (N = n[u] || {}, _ = N[c], F(_))
      break;
    lt(e, c, u, E, L), v = f;
  }
  if (!F(_) || !O(u))
    return r ? Ce : c;
  let T = `${u}__${c}`;
  Pe(h) || (T = `${T}__${JSON.stringify(h)}`);
  let S = o.get(T);
  return S || (S = new Intl.NumberFormat(u, Object.assign({}, _, h)), o.set(T, S)), C ? S.formatToParts(p) : S.format(p);
}
function Qe(...e) {
  const [t, n, r, a] = e;
  let s = {}, o = {};
  if (!A(t))
    throw ce(
      14
      /* INVALID_ARGUMENT */
    );
  const c = t;
  return O(n) ? s.key = n : F(n) && (s = n), O(r) ? s.locale = r : F(r) && (o = r), F(a) && (o = a), [s.key || "", c, s, o];
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
}, pr = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, gr = {
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
class Er {
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
      get: (o, c) => this.target ? this.target.on[c] : (...p) => {
        this.onQueue.push({
          method: c,
          args: p
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (o, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...p) => (this.targetQueue.push({
        method: c,
        args: p,
        resolve: () => {
        }
      }), this.fallbacks[c](...p)) : (...p) => new Promise((g) => {
        this.targetQueue.push({
          method: c,
          args: p,
          resolve: g
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
function wr(e, t) {
  const n = e, r = Yt(), a = _r(), s = br && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    a.emit(hr, e, t);
  else {
    const o = s ? new Er(n, a) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: o
    }), o && t(o.proxiedTarget);
  }
}
function Nr() {
  let e = !1;
  process.env.NODE_ENV;
}
function Lr() {
  const e = un();
  e.__INTLIFY__ = !0, console.info(`You are running a development build of vue-i18n.
Make sure to use the production build (*.prod.js) when deploying for production.`);
}
const Tr = {
  6: "Fall back to {type} '{key}' with root locale.",
  7: "Not supported 'preserve'.",
  8: "Not supported 'formatter'.",
  9: "Not supported 'preserveDirectiveContent'.",
  10: "Not supported 'getChoiceIndex'.",
  11: "Component name legacy compatible: '{name}' -> 'i18n'",
  12: "Not found parent scope. use the global scope."
};
function Me(e, ...t) {
  return Ie(Tr[e], ...t);
}
function G(e, ...t) {
  return Fe(e, null, process.env.NODE_ENV !== "production" ? { messages: Or, args: t } : void 0);
}
const Or = {
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
  return ((t, n, r, a) => e(n, r, Rt() || void 0, a));
}
function Kt(e, t) {
  const { messages: n, __i18n: r } = t, a = F(n) ? n : V(r) ? {} : { [e]: {} };
  return V(r) && r.forEach(({ locale: s, resource: o }) => {
    s ? (a[s] = a[s] || {}, Se(o, a[s])) : Se(o, a);
  }), a;
}
const Ir = Object.prototype.hasOwnProperty;
function Pr(e, t) {
  return Ir.call(e, t);
}
const we = (e) => !j(e) || V(e);
function Se(e, t) {
  if (we(e) || we(t))
    throw G(
      20
      /* INVALID_VALUE */
    );
  for (const n in e)
    Pr(e, n) && (we(e[n]) || we(t[n]) ? t[n] = e[n] : Se(e[n], t[n]));
}
function qt(e = {}) {
  const { __root: t } = e, n = t === void 0;
  let r = x(e.inheritLocale) ? e.inheritLocale : !0;
  const a = oe(
    // prettier-ignore
    t && r ? t.locale.value : O(e.locale) ? e.locale : "en-US"
  ), s = oe(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : O(e.fallbackLocale) || V(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value
  ), o = oe(Kt(a.value, e)), c = oe(F(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }), p = oe(F(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let g = t ? t.missingWarn : x(e.missingWarn) || Ne(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : x(e.fallbackWarn) || Ne(e.fallbackWarn) ? e.fallbackWarn : !0, E = t ? t.fallbackRoot : x(e.fallbackRoot) ? e.fallbackRoot : !0, k = !!e.fallbackFormat, C = R(e.missing) ? e.missing : null, w = R(e.missing) ? Dt(e.missing) : null, I = R(e.postTranslation) ? e.postTranslation : null, N = x(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, u = !!e.escapeParameter;
  const _ = t ? t.modifiers : F(e.modifiers) ? e.modifiers : {};
  let v = e.pluralRules || t && t.pluralRules, f;
  function L() {
    return zn({
      locale: a.value,
      fallbackLocale: s.value,
      messages: o.value,
      datetimeFormats: c.value,
      numberFormats: p.value,
      modifiers: _,
      pluralRules: v,
      missing: w === null ? void 0 : w,
      missingWarn: g,
      fallbackWarn: h,
      fallbackFormat: k,
      unresolving: !0,
      postTranslation: I === null ? void 0 : I,
      warnHtmlMessage: N,
      escapeParameter: u,
      __datetimeFormatters: F(f) ? f.__datetimeFormatters : void 0,
      __numberFormatters: F(f) ? f.__numberFormatters : void 0,
      __emitter: F(f) ? f.__emitter : void 0
    });
  }
  f = L(), _e(f, a.value, s.value);
  const T = le({
    get: () => a.value,
    set: (m) => {
      a.value = m, f.locale = a.value;
    }
  }), S = le({
    get: () => s.value,
    set: (m) => {
      s.value = m, f.fallbackLocale = s.value, _e(f, a.value, m);
    }
  }), $ = le(() => o.value), M = le(() => c.value), q = le(() => p.value);
  function me() {
    return R(I) ? I : null;
  }
  function X(m) {
    I = m, f.postTranslation = m;
  }
  function he() {
    return C;
  }
  function xe(m) {
    m !== null && (w = Dt(m)), C = m, f.missing = w;
  }
  function J(m, y, Y, ee, Zt, Xt) {
    const mt = L(), ke = m(mt);
    if (A(ke) && ke === Ce) {
      const Ee = y();
      if (process.env.NODE_ENV !== "production" && t && (E || ae(Me(6, {
        key: Ee,
        type: Y
      })), process.env.NODE_ENV !== "production")) {
        const { __emitter: dt } = mt;
        dt && dt.emit("fallback", {
          type: Y,
          key: Ee,
          to: "global",
          groupId: `${Y}:${Ee}`
        });
      }
      return t && E ? ee(t) : Zt(Ee);
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
    return J((y) => Tt(y, ...m), () => Be(...m)[0], "translate", (y) => y.t(...m), (y) => y, (y) => O(y));
  }
  function $e(...m) {
    return J((y) => St(y, ...m), () => Je(...m)[0], "datetime format", (y) => y.d(...m), () => Te, (y) => O(y));
  }
  function Ae(...m) {
    return J((y) => Pt(y, ...m), () => Qe(...m)[0], "number format", (y) => y.n(...m), () => Te, (y) => O(y));
  }
  function Re(m) {
    return m.map((y) => O(y) ? pt(gt, null, y, 0) : y);
  }
  const Ve = {
    normalize: Re,
    interpolate: (m) => m,
    type: "vnode"
  };
  function ye(...m) {
    return J(
      (y) => {
        let Y;
        const ee = y;
        try {
          ee.processor = Ve, Y = Tt(ee, ...m);
        } finally {
          ee.processor = null;
        }
        return Y;
      },
      () => Be(...m)[0],
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[Xe](...m),
      (y) => [pt(gt, null, y, 0)],
      (y) => V(y)
    );
  }
  function We(...m) {
    return J(
      (y) => Pt(y, ...m),
      () => Qe(...m)[0],
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[et](...m),
      () => [],
      (y) => O(y) || V(y)
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
      (y) => O(y) || V(y)
    );
  }
  function Ue(m) {
    v = m, f.pluralRules = v;
  }
  function de(m, y) {
    const Y = O(y) ? y : a.value, ee = z(Y);
    return Le(ee, m) !== null;
  }
  function pe(m) {
    const y = o.value[a.value] || {}, Y = Le(y, m);
    return Y ?? (t ? t.tm(m) || {} : {});
  }
  function z(m) {
    return o.value[m] || {};
  }
  function ge(m, y) {
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
    return p.value[m] || {};
  }
  function P(m, y) {
    p.value[m] = y, f.numberFormats = p.value, Ft(f, m, y);
  }
  function D(m, y) {
    p.value[m] = Object.assign(p.value[m] || {}, y), f.numberFormats = p.value, Ft(f, m, y);
  }
  Ct++, t && (Ke(t.locale, (m) => {
    r && (a.value = m, f.locale = m, _e(f, a.value, s.value));
  }), Ke(t.fallbackLocale, (m) => {
    r && (s.value = m, f.fallbackLocale = m, _e(f, a.value, s.value));
  }));
  const H = {
    id: Ct,
    locale: T,
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
    messages: $,
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
      return g;
    },
    set missingWarn(m) {
      g = m, f.missingWarn = g;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(m) {
      h = m, f.fallbackWarn = h;
    },
    get fallbackRoot() {
      return E;
    },
    set fallbackRoot(m) {
      E = m;
    },
    get fallbackFormat() {
      return k;
    },
    set fallbackFormat(m) {
      k = m, f.fallbackFormat = k;
    },
    get warnHtmlMessage() {
      return N;
    },
    set warnHtmlMessage(m) {
      N = m, f.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return u;
    },
    set escapeParameter(m) {
      u = m, f.escapeParameter = m;
    },
    t: ve,
    d: $e,
    n: Ae,
    te: de,
    tm: pe,
    getLocaleMessage: z,
    setLocaleMessage: ge,
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
    setMissingHandler: xe,
    [Xe]: ye,
    [et]: We,
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
      validator: (e) => A(e) || !isNaN(e)
    }
  },
  /* eslint-enable */
  setup(e, t) {
    const { slots: n, attrs: r } = t, a = ut({ useScope: e.scope }), s = Object.keys(n).filter((o) => o !== "_");
    return () => {
      const o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = O(e.plural) ? +e.plural : e.plural);
      const c = Fr(t, s), p = a[Xe](e.keypath, c, o);
      return O(e.tag) ? ie(e.tag, { ...r }, p) : j(e.tag) ? ie(e.tag, { ...r }, p) : ie(Vt, { ...r }, p);
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
    e.locale && (o.locale = e.locale), O(e.format) ? o.key = e.format : j(e.format) && (O(e.format.key) && (o.key = e.format.key), c = Object.keys(e.format).reduce((h, E) => n.includes(E) ? Object.assign({}, h, { [E]: e.format[E] }) : h, {}));
    const p = r(e.value, o, c);
    let g = [o.key];
    return V(p) ? g = p.map((h, E) => {
      const k = a[h.type];
      return k ? k({ [h.type]: h.value, index: E, parts: p }) : [h.value];
    }) : O(p) && (g = [p]), O(e.tag) ? ie(e.tag, { ...s }, g) : j(e.tag) ? ie(e.tag, { ...s }, g) : ie(Vt, { ...s }, g);
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
], xt = {
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
function xr(e) {
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
    const c = $r(a);
    n.textContent = o.t(...Ar(c));
  };
  return {
    beforeMount: t,
    beforeUpdate: t
  };
}
function $r(e) {
  if (O(e))
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
function Ar(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e, o = {}, c = r || {};
  return O(n) && (o.locale = n), A(a) && (o.plural = a), A(s) && (o.plural = s), [t, c, o];
}
function Rr(e, t, ...n) {
  const r = F(n[0]) ? n[0] : {}, a = !!r.useI18nComponentName, s = x(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && s && a && ae(Me(11, {
    name: Ye.name
  })), s && (e.component(a ? "i18n" : Ye.name, Ye), e.component(Mt.name, Mt), e.component(xt.name, xt)), e.directive("t", xr(t));
}
let nt;
async function Vr(e, t) {
  return new Promise((n, r) => {
    try {
      wr({
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
          o.vnode.el.__INTLIFY__ && s.instanceData && (t.mode === "legacy" ? o.vnode.el.__INTLIFY__ !== t.global.__composer && $t(s.instanceData, o.vnode.el.__INTLIFY__) : $t(s.instanceData, o.vnode.el.__INTLIFY__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Ge[
            "vue-i18n-resource-inspector"
            /* CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: pr[
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
          color: gr[
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
function $t(e, t) {
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
    R(r) && "source" in r ? t[n] = Hr(r) : j(r) ? t[n] = it(r) : t[n] = r;
  }), t;
}
const Wr = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function jr(e) {
  return e.replace(/[<>"&]/g, Ur);
}
function Ur(e) {
  return Wr[e] || e;
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
    e.state = At(t.mode === "composition" ? t.global : t.global.__composer);
  else {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e.nodeId);
    if (n) {
      const r = t.mode === "composition" ? n : n.__composer;
      e.state = At(r);
    }
  }
}
function At(e) {
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
  const p = "Datetime formats info", g = [
    {
      type: p,
      key: "numberFormats",
      editable: !1,
      value: e.numberFormats.value
    }
  ];
  return t[p] = g, t;
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
      if (process.env.NODE_ENV !== "production" && (o.__VUE_I18N__ = s), o.__VUE_I18N_SYMBOL__ = a, o.provide(o.__VUE_I18N_SYMBOL__, s), t && Zr(o, s.global), Rr(o, s, ...c), process.env.NODE_ENV !== "production") {
        if (!await Vr(o, s))
          throw G(
            21
            /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
          );
        const g = Gt();
        {
          const h = r;
          h[be] && h[be](g);
        }
        g.on("*", rt);
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
  const t = Rt();
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
    const p = Object.keys(c);
    if (p.length && p.forEach((g) => {
      r.mergeLocaleMessage(g, c[g]);
    }), j(e.datetimeFormats)) {
      const g = Object.keys(e.datetimeFormats);
      g.length && g.forEach((h) => {
        r.mergeDateTimeFormat(h, e.datetimeFormats[h]);
      });
    }
    if (j(e.numberFormats)) {
      const g = Object.keys(e.numberFormats);
      g.length && g.forEach((h) => {
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
    const c = t.type, p = {
      ...e
    };
    c.__i18n && (p.__i18n = c.__i18n), r && (p.__root = r), o = qt(p), Br(s, t, o), s.__setInstance(t, o);
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
Nr();
process.env.NODE_ENV !== "production" && Lr();
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
  },
  dataTable: {
    operation: "操作",
    reset: "重置",
    query: "查询",
    add: "新增",
    confirm: "确认",
    confirmDelete: "确认删除该条数据吗？",
    confirmDeleteTitle: "删除确认",
    cancel: "取消",
    pleaseFillInCompleteInfo: "请填写完整信息",
    noData: "暂无数据",
    dataFetchFailed: "数据获取失败",
    deleteSuccess: "删除成功",
    deleteError: "删除失败",
    addSuccess: "新增成功",
    addError: "新增失败",
    editSuccess: "编辑成功",
    editError: "编辑失败",
    addData: "新增数据",
    editData: "编辑数据"
  },
  excelExport: {
    exportSuccess: "导出成功",
    exportError: "导出失败",
    exportExcel: "导出Excel"
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
  },
  dataTable: {
    operation: "Operation",
    reset: "Reset",
    query: "Query",
    add: "Add",
    confirm: "Confirm",
    confirmDelete: "Are you sure you want to delete this item?",
    confirmDeleteTitle: "Delete Confirmation",
    cancel: "Cancel",
    pleaseFillInCompleteInfo: "Please fill in complete information",
    noData: "No data available",
    dataFetchFailed: "Data fetch failed",
    deleteSuccess: "Delete successful",
    deleteError: "Delete failed",
    addSuccess: "Add successful",
    addError: "Add failed",
    editSuccess: "Edit successful",
    editError: "Edit failed",
    addData: "Add Data",
    editData: "Edit Data"
  },
  excelExport: {
    exportSuccess: "Export successful",
    exportError: "Export failed",
    exportExcel: "Export Excel"
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
  "./pd-ui/pd-DataTable/pd-DataTable.vue": () => import("./pd-DataTable-15ogI6G3.js"),
  "./pd-ui/pd-EchartsContainer/pd-EchartsContainer.vue": () => import("./pd-EchartsContainer-4DObMw2_.js"),
  "./pd-ui/pd-ExcelExport/pd-ExcelExport.vue": () => import("./pd-ExcelExport-D6QNrImC.js"),
  "./pd-ui/pd-PwdChangeForm/pd-PwdChangeForm.vue": () => import("./pd-PwdChangeForm-rZdb110w.js"),
  "./pd-ui/pd-Test/pd-Test.vue": () => import("./pd-Test-DeIzXQ7F.js")
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
