 /*------------------------------------*\
       Plugins - Table of contents
   \*------------------------------------*/
 /*
 - jQuery UI
 - AOS - Animate On Scroll Library
 - Slick Slider
 - HC-Sticky
 - Scroll Spy
 - Bootstrap
 - Menu on scroll
 - anime.js
 - Jarallax
*/


 /*! jQuery UI - v1.13.1 - 2022-02-28
  * http://jqueryui.com
  * Includes: effect.js
  * Copyright jQuery Foundation and other contributors; Licensed MIT */

 ! function(t) {
   "use strict";
   "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
 }(function(u) {
   "use strict";
   u.ui = u.ui || {};
   u.ui.version = "1.13.1";
   var a = u,
     n = {},
     e = n.toString,
     f = /^([\-+])=\s*(\d+\.?\d*)/,
     t = [{
       re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
       parse: function(t) {
         return [t[1], t[2], t[3], t[4]]
       }
     }, {
       re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
       parse: function(t) {
         return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
       }
     }, {
       re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
       parse: function(t) {
         return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), t[4] ? (parseInt(t[4], 16) / 255).toFixed(2) : 1]
       }
     }, {
       re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
       parse: function(t) {
         return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), t[4] ? (parseInt(t[4] + t[4], 16) / 255).toFixed(2) : 1]
       }
     }, {
       re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
       space: "hsla",
       parse: function(t) {
         return [t[1], t[2] / 100, t[3] / 100, t[4]]
       }
     }],
     l = a.Color = function(t, e, n, r) {
       return new a.Color.fn.parse(t, e, n, r)
     },
     d = {
       rgba: {
         props: {
           red: {
             idx: 0,
             type: "byte"
           },
           green: {
             idx: 1,
             type: "byte"
           },
           blue: {
             idx: 2,
             type: "byte"
           }
         }
       },
       hsla: {
         props: {
           hue: {
             idx: 0,
             type: "degrees"
           },
           saturation: {
             idx: 1,
             type: "percent"
           },
           lightness: {
             idx: 2,
             type: "percent"
           }
         }
       }
     },
     p = {
       byte: {
         floor: !0,
         max: 255
       },
       percent: {
         max: 1
       },
       degrees: {
         mod: 360,
         floor: !0
       }
     },
     s = l.support = {},
     r = a("<p>")[0],
     h = a.each;

   function g(t) {
     return null == t ? t + "" : "object" == typeof t ? n[e.call(t)] || "object" : typeof t
   }

   function m(t, e, n) {
     var r = p[e.type] || {};
     return null == t ? n || !e.def ? null : e.def : (t = r.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : r.mod ? (t + r.mod) % r.mod : Math.min(r.max, Math.max(0, t)))
   }

   function c(r) {
     var o = l(),
       i = o._rgba = [];
     return r = r.toLowerCase(), h(t, function(t, e) {
       var n = e.re.exec(r),
         n = n && e.parse(n),
         e = e.space || "rgba";
       if (n) return n = o[e](n), o[d[e].cache] = n[d[e].cache], i = o._rgba = n._rgba, !1
     }), i.length ? ("0,0,0,0" === i.join() && a.extend(i, M.transparent), o) : M[r]
   }

   function o(t, e, n) {
     return 6 * (n = (n + 1) % 1) < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
   }
   r.style.cssText = "background-color:rgba(1,1,1,.5)", s.rgba = -1 < r.style.backgroundColor.indexOf("rgba"), h(d, function(t, e) {
     e.cache = "_" + t, e.props.alpha = {
       idx: 3,
       type: "percent",
       def: 1
     }
   }), a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
     n["[object " + e + "]"] = e.toLowerCase()
   }), (l.fn = a.extend(l.prototype, {
     parse: function(o, t, e, n) {
       if (void 0 === o) return this._rgba = [null, null, null, null], this;
       (o.jquery || o.nodeType) && (o = a(o).css(t), t = void 0);
       var i = this,
         r = g(o),
         s = this._rgba = [];
       return void 0 !== t && (o = [o, t, e, n], r = "array"), "string" === r ? this.parse(c(o) || M._default) : "array" === r ? (h(d.rgba.props, function(t, e) {
         s[e.idx] = m(o[e.idx], e)
       }), this) : "object" === r ? (h(d, o instanceof l ? function(t, e) {
         o[e.cache] && (i[e.cache] = o[e.cache].slice())
       } : function(t, n) {
         var r = n.cache;
         h(n.props, function(t, e) {
           if (!i[r] && n.to) {
             if ("alpha" === t || null == o[t]) return;
             i[r] = n.to(i._rgba)
           }
           i[r][e.idx] = m(o[t], e, !0)
         }), i[r] && a.inArray(null, i[r].slice(0, 3)) < 0 && (null == i[r][3] && (i[r][3] = 1), n.from && (i._rgba = n.from(i[r])))
       }), this) : void 0
     },
     is: function(t) {
       var o = l(t),
         i = !0,
         s = this;
       return h(d, function(t, e) {
         var n, r = o[e.cache];
         return r && (n = s[e.cache] || e.to && e.to(s._rgba) || [], h(e.props, function(t, e) {
           if (null != r[e.idx]) return i = r[e.idx] === n[e.idx]
         })), i
       }), i
     },
     _space: function() {
       var n = [],
         r = this;
       return h(d, function(t, e) {
         r[e.cache] && n.push(t)
       }), n.pop()
     },
     transition: function(t, s) {
       var e = (f = l(t))._space(),
         n = d[e],
         t = 0 === this.alpha() ? l("transparent") : this,
         a = t[n.cache] || n.to(t._rgba),
         c = a.slice(),
         f = f[n.cache];
       return h(n.props, function(t, e) {
         var n = e.idx,
           r = a[n],
           o = f[n],
           i = p[e.type] || {};
         null !== o && (null === r ? c[n] = o : (i.mod && (o - r > i.mod / 2 ? r += i.mod : r - o > i.mod / 2 && (r -= i.mod)), c[n] = m((o - r) * s + r, e)))
       }), this[e](c)
     },
     blend: function(t) {
       if (1 === this._rgba[3]) return this;
       var e = this._rgba.slice(),
         n = e.pop(),
         r = l(t)._rgba;
       return l(a.map(e, function(t, e) {
         return (1 - n) * r[e] + n * t
       }))
     },
     toRgbaString: function() {
       var t = "rgba(",
         e = a.map(this._rgba, function(t, e) {
           return null != t ? t : 2 < e ? 1 : 0
         });
       return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")"
     },
     toHslaString: function() {
       var t = "hsla(",
         e = a.map(this.hsla(), function(t, e) {
           return null == t && (t = 2 < e ? 1 : 0), t = e && e < 3 ? Math.round(100 * t) + "%" : t
         });
       return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")"
     },
     toHexString: function(t) {
       var e = this._rgba.slice(),
         n = e.pop();
       return t && e.push(~~(255 * n)), "#" + a.map(e, function(t) {
         return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
       }).join("")
     },
     toString: function() {
       return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
     }
   })).parse.prototype = l.fn, d.hsla.to = function(t) {
     if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
     var e = t[0] / 255,
       n = t[1] / 255,
       r = t[2] / 255,
       o = t[3],
       i = Math.max(e, n, r),
       s = Math.min(e, n, r),
       a = i - s,
       c = i + s,
       t = .5 * c,
       n = s === i ? 0 : e === i ? 60 * (n - r) / a + 360 : n === i ? 60 * (r - e) / a + 120 : 60 * (e - n) / a + 240,
       c = 0 == a ? 0 : t <= .5 ? a / c : a / (2 - c);
     return [Math.round(n) % 360, c, t, null == o ? 1 : o]
   }, d.hsla.from = function(t) {
     if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
     var e = t[0] / 360,
       n = t[1],
       r = t[2],
       t = t[3],
       n = r <= .5 ? r * (1 + n) : r + n - r * n,
       r = 2 * r - n;
     return [Math.round(255 * o(r, n, e + 1 / 3)), Math.round(255 * o(r, n, e)), Math.round(255 * o(r, n, e - 1 / 3)), t]
   }, h(d, function(c, t) {
     var e = t.props,
       i = t.cache,
       s = t.to,
       a = t.from;
     l.fn[c] = function(t) {
       if (s && !this[i] && (this[i] = s(this._rgba)), void 0 === t) return this[i].slice();
       var n = g(t),
         r = "array" === n || "object" === n ? t : arguments,
         o = this[i].slice();
       return h(e, function(t, e) {
         t = r["object" === n ? t : e.idx];
         null == t && (t = o[e.idx]), o[e.idx] = m(t, e)
       }), a ? ((t = l(a(o)))[i] = o, t) : l(o)
     }, h(e, function(s, a) {
       l.fn[s] || (l.fn[s] = function(t) {
         var e, n = g(t),
           r = "alpha" === s ? this._hsla ? "hsla" : "rgba" : c,
           o = this[r](),
           i = o[a.idx];
         return "undefined" === n ? i : ("function" === n && (n = g(t = t.call(this, i))), null == t && a.empty ? this : ("string" === n && (e = f.exec(t)) && (t = i + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)), o[a.idx] = t, this[r](o)))
       })
     })
   }), (l.hook = function(t) {
     t = t.split(" ");
     h(t, function(t, i) {
       a.cssHooks[i] = {
         set: function(t, e) {
           var n, r, o = "";
           if ("transparent" !== e && ("string" !== g(e) || (n = c(e)))) {
             if (e = l(n || e), !s.rgba && 1 !== e._rgba[3]) {
               for (r = "backgroundColor" === i ? t.parentNode : t;
                 ("" === o || "transparent" === o) && r && r.style;) try {
                 o = a.css(r, "backgroundColor"), r = r.parentNode
               } catch (t) {}
               e = e.blend(o && "transparent" !== o ? o : "_default")
             }
             e = e.toRgbaString()
           }
           try {
             t.style[i] = e
           } catch (t) {}
         }
       }, a.fx.step[i] = function(t) {
         t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), a.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
       }
     })
   })("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), a.cssHooks.borderColor = {
     expand: function(n) {
       var r = {};
       return h(["Top", "Right", "Bottom", "Left"], function(t, e) {
         r["border" + e + "Color"] = n
       }), r
     }
   };
   var i, b, y, v, x, C, w, k, _, S, M = a.Color.names = {
       aqua: "#00ffff",
       black: "#000000",
       blue: "#0000ff",
       fuchsia: "#ff00ff",
       gray: "#808080",
       green: "#008000",
       lime: "#00ff00",
       maroon: "#800000",
       navy: "#000080",
       olive: "#808000",
       purple: "#800080",
       red: "#ff0000",
       silver: "#c0c0c0",
       teal: "#008080",
       white: "#ffffff",
       yellow: "#ffff00",
       transparent: [null, null, null, 0],
       _default: "#ffffff"
     },
     j = "ui-effects-",
     B = "ui-effects-style",
     I = "ui-effects-animated";

   function H(t) {
     var e, n, r = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
       o = {};
     if (r && r.length && r[0] && r[r[0]])
       for (n = r.length; n--;) "string" == typeof r[e = r[n]] && (o[e.replace(/-([\da-z])/gi, function(t, e) {
         return e.toUpperCase()
       })] = r[e]);
     else
       for (e in r) "string" == typeof r[e] && (o[e] = r[e]);
     return o
   }

   function T(t, e, n, r) {
     return t = {
       effect: t = u.isPlainObject(t) ? (e = t).effect : t
     }, "function" == typeof(e = null == e ? {} : e) && (r = e, n = null, e = {}), "number" != typeof e && !u.fx.speeds[e] || (r = n, n = e, e = {}), "function" == typeof n && (r = n, n = null), e && u.extend(t, e), n = n || e.duration, t.duration = u.fx.off ? 0 : "number" == typeof n ? n : n in u.fx.speeds ? u.fx.speeds[n] : u.fx.speeds._default, t.complete = r || e.complete, t
   }

   function W(t) {
     return !t || "number" == typeof t || u.fx.speeds[t] || ("string" == typeof t && !u.effects.effect[t] || ("function" == typeof t || "object" == typeof t && !t.effect))
   }

   function R(t, e) {
     var n = e.outerWidth(),
       e = e.outerHeight(),
       t = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, n, e, 0];
     return {
       top: parseFloat(t[1]) || 0,
       right: "auto" === t[2] ? n : parseFloat(t[2]),
       bottom: "auto" === t[3] ? e : parseFloat(t[3]),
       left: parseFloat(t[4]) || 0
     }
   }
   u.effects = {
     effect: {}
   }, v = ["add", "remove", "toggle"], x = {
     border: 1,
     borderBottom: 1,
     borderColor: 1,
     borderLeft: 1,
     borderRight: 1,
     borderTop: 1,
     borderWidth: 1,
     margin: 1,
     padding: 1
   }, u.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
     u.fx.step[e] = function(t) {
       ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (a.style(t.elem, e, t.end), t.setAttr = !0)
     }
   }), u.fn.addBack || (u.fn.addBack = function(t) {
     return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
   }), u.effects.animateClass = function(o, t, e, n) {
     var i = u.speed(t, e, n);
     return this.queue(function() {
       var n = u(this),
         t = n.attr("class") || "",
         e = (e = i.children ? n.find("*").addBack() : n).map(function() {
           return {
             el: u(this),
             start: H(this)
           }
         }),
         r = function() {
           u.each(v, function(t, e) {
             o[e] && n[e + "Class"](o[e])
           })
         };
       r(), e = e.map(function() {
         return this.end = H(this.el[0]), this.diff = function(t, e) {
           var n, r, o = {};
           for (n in e) r = e[n], t[n] !== r && (x[n] || !u.fx.step[n] && isNaN(parseFloat(r)) || (o[n] = r));
           return o
         }(this.start, this.end), this
       }), n.attr("class", t), e = e.map(function() {
         var t = this,
           e = u.Deferred(),
           n = u.extend({}, i, {
             queue: !1,
             complete: function() {
               e.resolve(t)
             }
           });
         return this.el.animate(this.diff, n), e.promise()
       }), u.when.apply(u, e.get()).done(function() {
         r(), u.each(arguments, function() {
           var e = this.el;
           u.each(this.diff, function(t) {
             e.css(t, "")
           })
         }), i.complete.call(n[0])
       })
     })
   }, u.fn.extend({
     addClass: (y = u.fn.addClass, function(t, e, n, r) {
       return e ? u.effects.animateClass.call(this, {
         add: t
       }, e, n, r) : y.apply(this, arguments)
     }),
     removeClass: (b = u.fn.removeClass, function(t, e, n, r) {
       return 1 < arguments.length ? u.effects.animateClass.call(this, {
         remove: t
       }, e, n, r) : b.apply(this, arguments)
     }),
     toggleClass: (i = u.fn.toggleClass, function(t, e, n, r, o) {
       return "boolean" == typeof e || void 0 === e ? n ? u.effects.animateClass.call(this, e ? {
         add: t
       } : {
         remove: t
       }, n, r, o) : i.apply(this, arguments) : u.effects.animateClass.call(this, {
         toggle: t
       }, e, n, r)
     }),
     switchClass: function(t, e, n, r, o) {
       return u.effects.animateClass.call(this, {
         add: e,
         remove: t
       }, n, r, o)
     }
   }), u.expr && u.expr.pseudos && u.expr.pseudos.animated && (u.expr.pseudos.animated = (C = u.expr.pseudos.animated, function(t) {
     return !!u(t).data(I) || C(t)
   })), !1 !== u.uiBackCompat && u.extend(u.effects, {
     save: function(t, e) {
       for (var n = 0, r = e.length; n < r; n++) null !== e[n] && t.data(j + e[n], t[0].style[e[n]])
     },
     restore: function(t, e) {
       for (var n, r = 0, o = e.length; r < o; r++) null !== e[r] && (n = t.data(j + e[r]), t.css(e[r], n))
     },
     setMode: function(t, e) {
       return e = "toggle" === e ? t.is(":hidden") ? "show" : "hide" : e
     },
     createWrapper: function(n) {
       if (n.parent().is(".ui-effects-wrapper")) return n.parent();
       var r = {
           width: n.outerWidth(!0),
           height: n.outerHeight(!0),
           float: n.css("float")
         },
         t = u("<div></div>").addClass("ui-effects-wrapper").css({
           fontSize: "100%",
           background: "transparent",
           border: "none",
           margin: 0,
           padding: 0
         }),
         e = {
           width: n.width(),
           height: n.height()
         },
         o = document.activeElement;
       try {
         o.id
       } catch (t) {
         o = document.body
       }
       return n.wrap(t), n[0] !== o && !u.contains(n[0], o) || u(o).trigger("focus"), t = n.parent(), "static" === n.css("position") ? (t.css({
         position: "relative"
       }), n.css({
         position: "relative"
       })) : (u.extend(r, {
         position: n.css("position"),
         zIndex: n.css("z-index")
       }), u.each(["top", "left", "bottom", "right"], function(t, e) {
         r[e] = n.css(e), isNaN(parseInt(r[e], 10)) && (r[e] = "auto")
       }), n.css({
         position: "relative",
         top: 0,
         left: 0,
         right: "auto",
         bottom: "auto"
       })), n.css(e), t.css(r).show()
     },
     removeWrapper: function(t) {
       var e = document.activeElement;
       return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), t[0] !== e && !u.contains(t[0], e) || u(e).trigger("focus")), t
     }
   }), u.extend(u.effects, {
     version: "1.13.1",
     define: function(t, e, n) {
       return n || (n = e, e = "effect"), u.effects.effect[t] = n, u.effects.effect[t].mode = e, n
     },
     scaledDimensions: function(t, e, n) {
       if (0 === e) return {
         height: 0,
         width: 0,
         outerHeight: 0,
         outerWidth: 0
       };
       var r = "horizontal" !== n ? (e || 100) / 100 : 1,
         e = "vertical" !== n ? (e || 100) / 100 : 1;
       return {
         height: t.height() * e,
         width: t.width() * r,
         outerHeight: t.outerHeight() * e,
         outerWidth: t.outerWidth() * r
       }
     },
     clipToBox: function(t) {
       return {
         width: t.clip.right - t.clip.left,
         height: t.clip.bottom - t.clip.top,
         left: t.clip.left,
         top: t.clip.top
       }
     },
     unshift: function(t, e, n) {
       var r = t.queue();
       1 < e && r.splice.apply(r, [1, 0].concat(r.splice(e, n))), t.dequeue()
     },
     saveStyle: function(t) {
       t.data(B, t[0].style.cssText)
     },
     restoreStyle: function(t) {
       t[0].style.cssText = t.data(B) || "", t.removeData(B)
     },
     mode: function(t, e) {
       t = t.is(":hidden");
       return "toggle" === e && (e = t ? "show" : "hide"), e = (t ? "hide" === e : "show" === e) ? "none" : e
     },
     getBaseline: function(t, e) {
       var n, r;
       switch (t[0]) {
         case "top":
           n = 0;
           break;
         case "middle":
           n = .5;
           break;
         case "bottom":
           n = 1;
           break;
         default:
           n = t[0] / e.height
       }
       switch (t[1]) {
         case "left":
           r = 0;
           break;
         case "center":
           r = .5;
           break;
         case "right":
           r = 1;
           break;
         default:
           r = t[1] / e.width
       }
       return {
         x: r,
         y: n
       }
     },
     createPlaceholder: function(t) {
       var e, n = t.css("position"),
         r = t.position();
       return t.css({
         marginTop: t.css("marginTop"),
         marginBottom: t.css("marginBottom"),
         marginLeft: t.css("marginLeft"),
         marginRight: t.css("marginRight")
       }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", e = u("<" + t[0].nodeName + ">").insertAfter(t).css({
         display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
         visibility: "hidden",
         marginTop: t.css("marginTop"),
         marginBottom: t.css("marginBottom"),
         marginLeft: t.css("marginLeft"),
         marginRight: t.css("marginRight"),
         float: t.css("float")
       }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(j + "placeholder", e)), t.css({
         position: n,
         left: r.left,
         top: r.top
       }), e
     },
     removePlaceholder: function(t) {
       var e = j + "placeholder",
         n = t.data(e);
       n && (n.remove(), t.removeData(e))
     },
     cleanUp: function(t) {
       u.effects.restoreStyle(t), u.effects.removePlaceholder(t)
     },
     setTransition: function(r, t, o, i) {
       return i = i || {}, u.each(t, function(t, e) {
         var n = r.cssUnit(e);
         0 < n[0] && (i[e] = n[0] * o + n[1])
       }), i
     }
   }), u.fn.extend({
     effect: function() {
       function t(t) {
         var e = u(this),
           n = u.effects.mode(e, a) || i;
         e.data(I, !0), c.push(n), i && ("show" === n || n === i && "hide" === n) && e.show(), i && "none" === n || u.effects.saveStyle(e), "function" == typeof t && t()
       }
       var r = T.apply(this, arguments),
         o = u.effects.effect[r.effect],
         i = o.mode,
         e = r.queue,
         n = e || "fx",
         s = r.complete,
         a = r.mode,
         c = [];
       return u.fx.off || !o ? a ? this[a](r.duration, s) : this.each(function() {
         s && s.call(this)
       }) : !1 === e ? this.each(t).each(f) : this.queue(n, t).queue(n, f);

       function f(t) {
         var e = u(this);

         function n() {
           "function" == typeof s && s.call(e[0]), "function" == typeof t && t()
         }
         r.mode = c.shift(), !1 === u.uiBackCompat || i ? "none" === r.mode ? (e[a](), n()) : o.call(e[0], r, function() {
           e.removeData(I), u.effects.cleanUp(e), "hide" === r.mode && e.hide(), n()
         }) : (e.is(":hidden") ? "hide" === a : "show" === a) ? (e[a](), n()) : o.call(e[0], r, n)
       }
     },
     show: (_ = u.fn.show, function(t) {
       if (W(t)) return _.apply(this, arguments);
       t = T.apply(this, arguments);
       return t.mode = "show", this.effect.call(this, t)
     }),
     hide: (k = u.fn.hide, function(t) {
       if (W(t)) return k.apply(this, arguments);
       t = T.apply(this, arguments);
       return t.mode = "hide", this.effect.call(this, t)
     }),
     toggle: (w = u.fn.toggle, function(t) {
       if (W(t) || "boolean" == typeof t) return w.apply(this, arguments);
       t = T.apply(this, arguments);
       return t.mode = "toggle", this.effect.call(this, t)
     }),
     cssUnit: function(t) {
       var n = this.css(t),
         r = [];
       return u.each(["em", "px", "%", "pt"], function(t, e) {
         0 < n.indexOf(e) && (r = [parseFloat(n), e])
       }), r
     },
     cssClip: function(t) {
       return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : R(this.css("clip"), this)
     },
     transfer: function(t, e) {
       var n = u(this),
         r = u(t.to),
         o = "fixed" === r.css("position"),
         i = u("body"),
         s = o ? i.scrollTop() : 0,
         a = o ? i.scrollLeft() : 0,
         i = r.offset(),
         i = {
           top: i.top - s,
           left: i.left - a,
           height: r.innerHeight(),
           width: r.innerWidth()
         },
         r = n.offset(),
         c = u("<div class='ui-effects-transfer'></div>");
       c.appendTo("body").addClass(t.className).css({
         top: r.top - s,
         left: r.left - a,
         height: n.innerHeight(),
         width: n.innerWidth(),
         position: o ? "fixed" : "absolute"
       }).animate(i, t.duration, t.easing, function() {
         c.remove(), "function" == typeof e && e()
       })
     }
   }), u.fx.step.clip = function(t) {
     t.clipInit || (t.start = u(t.elem).cssClip(), "string" == typeof t.end && (t.end = R(t.end, t.elem)), t.clipInit = !0), u(t.elem).cssClip({
       top: t.pos * (t.end.top - t.start.top) + t.start.top,
       right: t.pos * (t.end.right - t.start.right) + t.start.right,
       bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
       left: t.pos * (t.end.left - t.start.left) + t.start.left
     })
   }, S = {}, u.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
     S[t] = function(t) {
       return Math.pow(t, e + 2)
     }
   }), u.extend(S, {
     Sine: function(t) {
       return 1 - Math.cos(t * Math.PI / 2)
     },
     Circ: function(t) {
       return 1 - Math.sqrt(1 - t * t)
     },
     Elastic: function(t) {
       return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
     },
     Back: function(t) {
       return t * t * (3 * t - 2)
     },
     Bounce: function(t) {
       for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11;);
       return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
     }
   }), u.each(S, function(t, e) {
     u.easing["easeIn" + t] = e, u.easing["easeOut" + t] = function(t) {
       return 1 - e(1 - t)
     }, u.easing["easeInOut" + t] = function(t) {
       return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
     }
   });
   u.effects
 });


 /* AOS - Animate On Scroll Library */
 ! function(e, t) {
   "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
 }(this, function() {
   return function(e) {
     function t(o) {
       if (n[o]) return n[o].exports;
       var i = n[o] = {
         exports: {},
         id: o,
         loaded: !1
       };
       return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
     }
     var n = {};
     return t.m = e, t.c = n, t.p = "dist/", t(0)
   }([function(e, t, n) {
     "use strict";

     function o(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     var i = Object.assign || function(e) {
         for (var t = 1; t < arguments.length; t++) {
           var n = arguments[t];
           for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
         }
         return e
       },
       r = n(1),
       a = (o(r), n(6)),
       u = o(a),
       c = n(7),
       f = o(c),
       s = n(8),
       d = o(s),
       l = n(9),
       p = o(l),
       m = n(10),
       b = o(m),
       v = n(11),
       y = o(v),
       g = n(14),
       h = o(g),
       w = [],
       k = !1,
       x = {
         offset: 120,
         delay: 0,
         easing: "ease",
         duration: 400,
         disable: !1,
         once: !1,
         startEvent: "DOMContentLoaded",
         throttleDelay: 99,
         debounceDelay: 50,
         disableMutationObserver: !1
       },
       j = function() {
         var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
         if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w
       },
       O = function() {
         w = (0, h.default)(), j()
       },
       _ = function() {
         w.forEach(function(e, t) {
           e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
         })
       },
       S = function(e) {
         return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
       },
       z = function(e) {
         x = i(x, e), w = (0, h.default)();
         var t = document.all && !window.atob;
         return S(x.disable) || t ? _() : (document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
           j(!0)
         }) : document.addEventListener(x.startEvent, function() {
           j(!0)
         }), window.addEventListener("resize", (0, f.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
           (0, b.default)(w, x.once)
         }, x.throttleDelay)), x.disableMutationObserver || (0, d.default)("[data-aos]", O), w)
       };
     e.exports = {
       init: z,
       refresh: j,
       refreshHard: O
     }
   }, function(e, t) {}, , , , , function(e, t) {
     (function(t) {
       "use strict";

       function n(e, t, n) {
         function o(t) {
           var n = b,
             o = v;
           return b = v = void 0, k = t, g = e.apply(o, n)
         }

         function r(e) {
           return k = e, h = setTimeout(s, t), _ ? o(e) : g
         }

         function a(e) {
           var n = e - w,
             o = e - k,
             i = t - n;
           return S ? j(i, y - o) : i
         }

         function c(e) {
           var n = e - w,
             o = e - k;
           return void 0 === w || n >= t || n < 0 || S && o >= y
         }

         function s() {
           var e = O();
           return c(e) ? d(e) : void(h = setTimeout(s, a(e)))
         }

         function d(e) {
           return h = void 0, z && b ? o(e) : (b = v = void 0, g)
         }

         function l() {
           void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
         }

         function p() {
           return void 0 === h ? g : d(O())
         }

         function m() {
           var e = O(),
             n = c(e);
           if (b = arguments, v = this, w = e, n) {
             if (void 0 === h) return r(w);
             if (S) return h = setTimeout(s, t), o(w)
           }
           return void 0 === h && (h = setTimeout(s, t)), g
         }
         var b, v, y, g, h, w, k = 0,
           _ = !1,
           S = !1,
           z = !0;
         if ("function" != typeof e) throw new TypeError(f);
         return t = u(t) || 0, i(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
       }

       function o(e, t, o) {
         var r = !0,
           a = !0;
         if ("function" != typeof e) throw new TypeError(f);
         return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
           leading: r,
           maxWait: t,
           trailing: a
         })
       }

       function i(e) {
         var t = "undefined" == typeof e ? "undefined" : c(e);
         return !!e && ("object" == t || "function" == t)
       }

       function r(e) {
         return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
       }

       function a(e) {
         return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
       }

       function u(e) {
         if ("number" == typeof e) return e;
         if (a(e)) return s;
         if (i(e)) {
           var t = "function" == typeof e.valueOf ? e.valueOf() : e;
           e = i(t) ? t + "" : t
         }
         if ("string" != typeof e) return 0 === e ? e : +e;
         e = e.replace(l, "");
         var n = m.test(e);
         return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
       }
       var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
           return typeof e
         } : function(e) {
           return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
         },
         f = "Expected a function",
         s = NaN,
         d = "[object Symbol]",
         l = /^\s+|\s+$/g,
         p = /^[-+]0x[0-9a-f]+$/i,
         m = /^0b[01]+$/i,
         b = /^0o[0-7]+$/i,
         v = parseInt,
         y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
         g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
         h = y || g || Function("return this")(),
         w = Object.prototype,
         k = w.toString,
         x = Math.max,
         j = Math.min,
         O = function() {
           return h.Date.now()
         };
       e.exports = o
     }).call(t, function() {
       return this
     }())
   }, function(e, t) {
     (function(t) {
       "use strict";

       function n(e, t, n) {
         function i(t) {
           var n = b,
             o = v;
           return b = v = void 0, O = t, g = e.apply(o, n)
         }

         function r(e) {
           return O = e, h = setTimeout(s, t), _ ? i(e) : g
         }

         function u(e) {
           var n = e - w,
             o = e - O,
             i = t - n;
           return S ? x(i, y - o) : i
         }

         function f(e) {
           var n = e - w,
             o = e - O;
           return void 0 === w || n >= t || n < 0 || S && o >= y
         }

         function s() {
           var e = j();
           return f(e) ? d(e) : void(h = setTimeout(s, u(e)))
         }

         function d(e) {
           return h = void 0, z && b ? i(e) : (b = v = void 0, g)
         }

         function l() {
           void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0
         }

         function p() {
           return void 0 === h ? g : d(j())
         }

         function m() {
           var e = j(),
             n = f(e);
           if (b = arguments, v = this, w = e, n) {
             if (void 0 === h) return r(w);
             if (S) return h = setTimeout(s, t), i(w)
           }
           return void 0 === h && (h = setTimeout(s, t)), g
         }
         var b, v, y, g, h, w, O = 0,
           _ = !1,
           S = !1,
           z = !0;
         if ("function" != typeof e) throw new TypeError(c);
         return t = a(t) || 0, o(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
       }

       function o(e) {
         var t = "undefined" == typeof e ? "undefined" : u(e);
         return !!e && ("object" == t || "function" == t)
       }

       function i(e) {
         return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
       }

       function r(e) {
         return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
       }

       function a(e) {
         if ("number" == typeof e) return e;
         if (r(e)) return f;
         if (o(e)) {
           var t = "function" == typeof e.valueOf ? e.valueOf() : e;
           e = o(t) ? t + "" : t
         }
         if ("string" != typeof e) return 0 === e ? e : +e;
         e = e.replace(d, "");
         var n = p.test(e);
         return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
       }
       var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
           return typeof e
         } : function(e) {
           return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
         },
         c = "Expected a function",
         f = NaN,
         s = "[object Symbol]",
         d = /^\s+|\s+$/g,
         l = /^[-+]0x[0-9a-f]+$/i,
         p = /^0b[01]+$/i,
         m = /^0o[0-7]+$/i,
         b = parseInt,
         v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
         y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
         g = v || y || Function("return this")(),
         h = Object.prototype,
         w = h.toString,
         k = Math.max,
         x = Math.min,
         j = function() {
           return g.Date.now()
         };
       e.exports = n
     }).call(t, function() {
       return this
     }())
   }, function(e, t) {
     "use strict";

     function n(e, t) {
       var n = window.document,
         r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
         a = new r(o);
       i = t, a.observe(n.documentElement, {
         childList: !0,
         subtree: !0,
         removedNodes: !0
       })
     }

     function o(e) {
       e && e.forEach(function(e) {
         var t = Array.prototype.slice.call(e.addedNodes),
           n = Array.prototype.slice.call(e.removedNodes),
           o = t.concat(n).filter(function(e) {
             return e.hasAttribute && e.hasAttribute("data-aos")
           }).length;
         o && i()
       })
     }
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var i = function() {};
     t.default = n
   }, function(e, t) {
     "use strict";

     function n(e, t) {
       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }

     function o() {
       return navigator.userAgent || navigator.vendor || window.opera || ""
     }
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var i = function() {
         function e(e, t) {
           for (var n = 0; n < t.length; n++) {
             var o = t[n];
             o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
           }
         }
         return function(t, n, o) {
           return n && e(t.prototype, n), o && e(t, o), t
         }
       }(),
       r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
       a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
       u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
       c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
       f = function() {
         function e() {
           n(this, e)
         }
         return i(e, [{
           key: "phone",
           value: function() {
             var e = o();
             return !(!r.test(e) && !a.test(e.substr(0, 4)))
           }
         }, {
           key: "mobile",
           value: function() {
             var e = o();
             return !(!u.test(e) && !c.test(e.substr(0, 4)))
           }
         }, {
           key: "tablet",
           value: function() {
             return this.mobile() && !this.phone()
           }
         }]), e
       }();
     t.default = new f
   }, function(e, t) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var n = function(e, t, n) {
         var o = e.node.getAttribute("data-aos-once");
         t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
       },
       o = function(e, t) {
         var o = window.pageYOffset,
           i = window.innerHeight;
         e.forEach(function(e, r) {
           n(e, i + o, t)
         })
       };
     t.default = o
   }, function(e, t, n) {
     "use strict";

     function o(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var i = n(12),
       r = o(i),
       a = function(e, t) {
         return e.forEach(function(e, n) {
           e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
         }), e
       };
     t.default = a
   }, function(e, t, n) {
     "use strict";

     function o(e) {
       return e && e.__esModule ? e : {
         default: e
       }
     }
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var i = n(13),
       r = o(i),
       a = function(e, t) {
         var n = 0,
           o = 0,
           i = window.innerHeight,
           a = {
             offset: e.getAttribute("data-aos-offset"),
             anchor: e.getAttribute("data-aos-anchor"),
             anchorPlacement: e.getAttribute("data-aos-anchor-placement")
           };
         switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
           case "top-bottom":
             break;
           case "center-bottom":
             n += e.offsetHeight / 2;
             break;
           case "bottom-bottom":
             n += e.offsetHeight;
             break;
           case "top-center":
             n += i / 2;
             break;
           case "bottom-center":
             n += i / 2 + e.offsetHeight;
             break;
           case "center-center":
             n += i / 2 + e.offsetHeight / 2;
             break;
           case "top-top":
             n += i;
             break;
           case "bottom-top":
             n += e.offsetHeight + i;
             break;
           case "center-top":
             n += e.offsetHeight / 2 + i
         }
         return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
       };
     t.default = a
   }, function(e, t) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var n = function(e) {
       for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
       return {
         top: n,
         left: t
       }
     };
     t.default = n
   }, function(e, t) {
     "use strict";
     Object.defineProperty(t, "__esModule", {
       value: !0
     });
     var n = function(e) {
       return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
         return {
           node: e
         }
       })
     };
     t.default = n
   }])
 });


 /* Slick Slider */
 ! function(i) {
   "use strict";
   "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
 }(function(i) {
   "use strict";
   var e = window.Slick || {};
   (e = function() {
     var e = 0;
     return function(t, o) {
       var s, n = this;
       n.defaults = {
         accessibility: !0,
         adaptiveHeight: !1,
         appendArrows: i(t),
         appendDots: i(t),
         arrows: !0,
         asNavFor: null,
         prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
         nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
         autoplay: !1,
         autoplaySpeed: 3e3,
         centerMode: !1,
         centerPadding: "50px",
         cssEase: "ease",
         customPaging: function(e, t) {
           return i('<button type="button" />').text(t + 1)
         },
         dots: !1,
         dotsClass: "slick-dots",
         draggable: !0,
         easing: "linear",
         edgeFriction: .35,
         fade: !1,
         focusOnSelect: !1,
         focusOnChange: !1,
         infinite: !0,
         initialSlide: 0,
         lazyLoad: "ondemand",
         mobileFirst: !1,
         pauseOnHover: !0,
         pauseOnFocus: !0,
         pauseOnDotsHover: !1,
         respondTo: "window",
         responsive: null,
         rows: 1,
         rtl: !1,
         slide: "",
         slidesPerRow: 1,
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 500,
         swipe: !0,
         swipeToSlide: !1,
         touchMove: !0,
         touchThreshold: 5,
         useCSS: !0,
         useTransform: !0,
         variableWidth: !1,
         vertical: !1,
         verticalSwiping: !1,
         waitForAnimate: !0,
         zIndex: 1e3
       }, n.initials = {
         animating: !1,
         dragging: !1,
         autoPlayTimer: null,
         currentDirection: 0,
         currentLeft: null,
         currentSlide: 0,
         direction: 1,
         $dots: null,
         listWidth: null,
         listHeight: null,
         loadIndex: 0,
         $nextArrow: null,
         $prevArrow: null,
         scrolling: !1,
         slideCount: null,
         slideWidth: null,
         $slideTrack: null,
         $slides: null,
         sliding: !1,
         slideOffset: 0,
         swipeLeft: null,
         swiping: !1,
         $list: null,
         touchObject: {},
         transformsEnabled: !1,
         unslicked: !1
       }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
     }
   }()).prototype.activateADA = function() {
     this.$slideTrack.find(".slick-active").attr({
       "aria-hidden": "false"
     }).find("a, input, button, select").attr({
       tabindex: "0"
     })
   }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
     var s = this;
     if ("boolean" == typeof t) o = t, t = null;
     else if (t < 0 || t >= s.slideCount) return !1;
     s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
       i(t).attr("data-slick-index", e)
     }), s.$slidesCache = s.$slides, s.reinit()
   }, e.prototype.animateHeight = function() {
     var i = this;
     if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
       var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
       i.$list.animate({
         height: e
       }, i.options.speed)
     }
   }, e.prototype.animateSlide = function(e, t) {
     var o = {},
       s = this;
     s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
       left: e
     }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
       top: e
     }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
       animStart: s.currentLeft
     }).animate({
       animStart: e
     }, {
       duration: s.options.speed,
       easing: s.options.easing,
       step: function(i) {
         i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
       },
       complete: function() {
         t && t.call()
       }
     })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
       s.disableTransition(), t.call()
     }, s.options.speed))
   }, e.prototype.getNavTarget = function() {
     var e = this,
       t = e.options.asNavFor;
     return t && null !== t && (t = i(t).not(e.$slider)), t
   }, e.prototype.asNavFor = function(e) {
     var t = this.getNavTarget();
     null !== t && "object" == typeof t && t.each(function() {
       var t = i(this).slick("getSlick");
       t.unslicked || t.slideHandler(e, !0)
     })
   }, e.prototype.applyTransition = function(i) {
     var e = this,
       t = {};
     !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
   }, e.prototype.autoPlay = function() {
     var i = this;
     i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
   }, e.prototype.autoPlayClear = function() {
     var i = this;
     i.autoPlayTimer && clearInterval(i.autoPlayTimer)
   }, e.prototype.autoPlayIterator = function() {
     var i = this,
       e = i.currentSlide + i.options.slidesToScroll;
     i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
   }, e.prototype.buildArrows = function() {
     var e = this;
     !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
       "aria-disabled": "true",
       tabindex: "-1"
     }))
   }, e.prototype.buildDots = function() {
     var e, t, o = this;
     if (!0 === o.options.dots) {
       for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
       o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
     }
   }, e.prototype.buildOut = function() {
     var e = this;
     e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
       i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
     }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
   }, e.prototype.buildRows = function() {
     var i, e, t, o, s, n, r, l = this;
     if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
       for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
         var d = document.createElement("div");
         for (e = 0; e < l.options.rows; e++) {
           var a = document.createElement("div");
           for (t = 0; t < l.options.slidesPerRow; t++) {
             var c = i * r + (e * l.options.slidesPerRow + t);
             n.get(c) && a.appendChild(n.get(c))
           }
           d.appendChild(a)
         }
         o.appendChild(d)
       }
       l.$slider.empty().append(o), l.$slider.children().children().children().css({
         width: 100 / l.options.slidesPerRow + "%",
         display: "inline-block"
       })
     }
   }, e.prototype.checkResponsive = function(e, t) {
     var o, s, n, r = this,
       l = !1,
       d = r.$slider.width(),
       a = window.innerWidth || i(window).width();
     if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
       s = null;
       for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
       null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
     }
   }, e.prototype.changeSlide = function(e, t) {
     var o, s, n, r = this,
       l = i(e.currentTarget);
     switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
       case "previous":
         s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
         break;
       case "next":
         s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
         break;
       case "index":
         var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
         r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
         break;
       default:
         return
     }
   }, e.prototype.checkNavigable = function(i) {
     var e, t;
     if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
     else
       for (var o in e) {
         if (i < e[o]) {
           i = t;
           break
         }
         t = e[o]
       }
     return i
   }, e.prototype.cleanUpEvents = function() {
     var e = this;
     e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
   }, e.prototype.cleanUpSlideEvents = function() {
     var e = this;
     e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
   }, e.prototype.cleanUpRows = function() {
     var i, e = this;
     e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
   }, e.prototype.clickHandler = function(i) {
     !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
   }, e.prototype.destroy = function(e) {
     var t = this;
     t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
       i(this).attr("style", i(this).data("originalStyling"))
     }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
   }, e.prototype.disableTransition = function(i) {
     var e = this,
       t = {};
     t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
   }, e.prototype.fadeSlide = function(i, e) {
     var t = this;
     !1 === t.cssTransitions ? (t.$slides.eq(i).css({
       zIndex: t.options.zIndex
     }), t.$slides.eq(i).animate({
       opacity: 1
     }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
       opacity: 1,
       zIndex: t.options.zIndex
     }), e && setTimeout(function() {
       t.disableTransition(i), e.call()
     }, t.options.speed))
   }, e.prototype.fadeSlideOut = function(i) {
     var e = this;
     !1 === e.cssTransitions ? e.$slides.eq(i).animate({
       opacity: 0,
       zIndex: e.options.zIndex - 2
     }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
       opacity: 0,
       zIndex: e.options.zIndex - 2
     }))
   }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
     var e = this;
     null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
   }, e.prototype.focusHandler = function() {
     var e = this;
     e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
       t.stopImmediatePropagation();
       var o = i(this);
       setTimeout(function() {
         e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
       }, 0)
     })
   }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
     return this.currentSlide
   }, e.prototype.getDotCount = function() {
     var i = this,
       e = 0,
       t = 0,
       o = 0;
     if (!0 === i.options.infinite)
       if (i.slideCount <= i.options.slidesToShow) ++o;
       else
         for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
     else if (!0 === i.options.centerMode) o = i.slideCount;
     else if (i.options.asNavFor)
       for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
     else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
     return o - 1
   }, e.prototype.getLeft = function(i) {
     var e, t, o, s, n = this,
       r = 0;
     return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
   }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
     return this.options[i]
   }, e.prototype.getNavigableIndexes = function() {
     var i, e = this,
       t = 0,
       o = 0,
       s = [];
     for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
     return s
   }, e.prototype.getSlick = function() {
     return this
   }, e.prototype.getSlideCount = function() {
     var e, t, o = this;
     return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
       if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
     }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
   }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
     this.changeSlide({
       data: {
         message: "index",
         index: parseInt(i)
       }
     }, e)
   }, e.prototype.init = function(e) {
     var t = this;
     i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
   }, e.prototype.initADA = function() {
     var e = this,
       t = Math.ceil(e.slideCount / e.options.slidesToShow),
       o = e.getNavigableIndexes().filter(function(i) {
         return i >= 0 && i < e.slideCount
       });
     e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
       "aria-hidden": "true",
       tabindex: "-1"
     }).find("a, input, button, select").attr({
       tabindex: "-1"
     }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
       var s = o.indexOf(t);
       i(this).attr({
         role: "tabpanel",
         id: "slick-slide" + e.instanceUid + t,
         tabindex: -1
       }), -1 !== s && i(this).attr({
         "aria-describedby": "slick-slide-control" + e.instanceUid + s
       })
     }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
       var n = o[s];
       i(this).attr({
         role: "presentation"
       }), i(this).find("button").first().attr({
         role: "tab",
         id: "slick-slide-control" + e.instanceUid + s,
         "aria-controls": "slick-slide" + e.instanceUid + n,
         "aria-label": s + 1 + " of " + t,
         "aria-selected": null,
         tabindex: "-1"
       })
     }).eq(e.currentSlide).find("button").attr({
       "aria-selected": "true",
       tabindex: "0"
     }).end());
     for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
     e.activateADA()
   }, e.prototype.initArrowEvents = function() {
     var i = this;
     !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
       message: "previous"
     }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
       message: "next"
     }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
   }, e.prototype.initDotEvents = function() {
     var e = this;
     !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
       message: "index"
     }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
   }, e.prototype.initSlideEvents = function() {
     var e = this;
     e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
   }, e.prototype.initializeEvents = function() {
     var e = this;
     e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
       action: "start"
     }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
       action: "move"
     }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
       action: "end"
     }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
       action: "end"
     }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
   }, e.prototype.initUI = function() {
     var i = this;
     !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
   }, e.prototype.keyHandler = function(i) {
     var e = this;
     i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
       data: {
         message: !0 === e.options.rtl ? "next" : "previous"
       }
     }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
       data: {
         message: !0 === e.options.rtl ? "previous" : "next"
       }
     }))
   }, e.prototype.lazyLoad = function() {
     function e(e) {
       i("img[data-lazy]", e).each(function() {
         var e = i(this),
           t = i(this).attr("data-lazy"),
           o = i(this).attr("data-srcset"),
           s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
           r = document.createElement("img");
         r.onload = function() {
           e.animate({
             opacity: 0
           }, 100, function() {
             o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
               opacity: 1
             }, 200, function() {
               e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
             }), n.$slider.trigger("lazyLoaded", [n, e, t])
           })
         }, r.onerror = function() {
           e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
         }, r.src = t
       })
     }
     var t, o, s, n = this;
     if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
       for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
     e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
   }, e.prototype.loadSlider = function() {
     var i = this;
     i.setPosition(), i.$slideTrack.css({
       opacity: 1
     }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
   }, e.prototype.next = e.prototype.slickNext = function() {
     this.changeSlide({
       data: {
         message: "next"
       }
     })
   }, e.prototype.orientationChange = function() {
     var i = this;
     i.checkResponsive(), i.setPosition()
   }, e.prototype.pause = e.prototype.slickPause = function() {
     var i = this;
     i.autoPlayClear(), i.paused = !0
   }, e.prototype.play = e.prototype.slickPlay = function() {
     var i = this;
     i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
   }, e.prototype.postSlide = function(e) {
     var t = this;
     t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
   }, e.prototype.prev = e.prototype.slickPrev = function() {
     this.changeSlide({
       data: {
         message: "previous"
       }
     })
   }, e.prototype.preventDefault = function(i) {
     i.preventDefault()
   }, e.prototype.progressiveLazyLoad = function(e) {
     e = e || 1;
     var t, o, s, n, r, l = this,
       d = i("img[data-lazy]", l.$slider);
     d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
       s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
     }, r.onerror = function() {
       e < 3 ? setTimeout(function() {
         l.progressiveLazyLoad(e + 1)
       }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
     }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
   }, e.prototype.refresh = function(e) {
     var t, o, s = this;
     o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
       currentSlide: t
     }), s.init(), e || s.changeSlide({
       data: {
         message: "index",
         index: t
       }
     }, !1)
   }, e.prototype.registerBreakpoints = function() {
     var e, t, o, s = this,
       n = s.options.responsive || null;
     if ("array" === i.type(n) && n.length) {
       s.respondTo = s.options.respondTo || "window";
       for (e in n)
         if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
           for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
           s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
         } s.breakpoints.sort(function(i, e) {
         return s.options.mobileFirst ? i - e : e - i
       })
     }
   }, e.prototype.reinit = function() {
     var e = this;
     e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
   }, e.prototype.resize = function() {
     var e = this;
     i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
       e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
     }, 50))
   }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
     var o = this;
     if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
     o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
   }, e.prototype.setCSS = function(i) {
     var e, t, o = this,
       s = {};
     !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
   }, e.prototype.setDimensions = function() {
     var i = this;
     !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
       padding: "0px " + i.options.centerPadding
     }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
       padding: i.options.centerPadding + " 0px"
     })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
     var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
     !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
   }, e.prototype.setFade = function() {
     var e, t = this;
     t.$slides.each(function(o, s) {
       e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
         position: "relative",
         right: e,
         top: 0,
         zIndex: t.options.zIndex - 2,
         opacity: 0
       }) : i(s).css({
         position: "relative",
         left: e,
         top: 0,
         zIndex: t.options.zIndex - 2,
         opacity: 0
       })
     }), t.$slides.eq(t.currentSlide).css({
       zIndex: t.options.zIndex - 1,
       opacity: 1
     })
   }, e.prototype.setHeight = function() {
     var i = this;
     if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
       var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
       i.$list.css("height", e)
     }
   }, e.prototype.setOption = e.prototype.slickSetOption = function() {
     var e, t, o, s, n, r = this,
       l = !1;
     if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
     else if ("multiple" === n) i.each(o, function(i, e) {
       r.options[i] = e
     });
     else if ("responsive" === n)
       for (t in s)
         if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
         else {
           for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
           r.options.responsive.push(s[t])
         } l && (r.unload(), r.reinit())
   }, e.prototype.setPosition = function() {
     var i = this;
     i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
   }, e.prototype.setProps = function() {
     var i = this,
       e = document.body.style;
     i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
   }, e.prototype.setSlideClasses = function(i) {
     var e, t, o, s, n = this;
     if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
       var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
       e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
     } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
     "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
   }, e.prototype.setupInfinite = function() {
     var e, t, o, s = this;
     if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
       for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
       for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
       s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
         i(this).attr("id", "")
       })
     }
   }, e.prototype.interrupt = function(i) {
     var e = this;
     i || e.autoPlay(), e.interrupted = i
   }, e.prototype.selectHandler = function(e) {
     var t = this,
       o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
       s = parseInt(o.attr("data-slick-index"));
     s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
   }, e.prototype.slideHandler = function(i, e, t) {
     var o, s, n, r, l, d = null,
       a = this;
     if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
       if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
         a.postSlide(o)
       }) : a.postSlide(o));
       else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
       a.postSlide(o)
     }) : a.postSlide(o));
     else {
       if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
         a.postSlide(s)
       })) : a.postSlide(s), void a.animateHeight();
       !0 !== t ? a.animateSlide(d, function() {
         a.postSlide(s)
       }) : a.postSlide(s)
     }
   }, e.prototype.startLoad = function() {
     var i = this;
     !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
   }, e.prototype.swipeDirection = function() {
     var i, e, t, o, s = this;
     return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
   }, e.prototype.swipeEnd = function(i) {
     var e, t, o = this;
     if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
     if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
     if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
       switch (t = o.swipeDirection()) {
         case "left":
         case "down":
           e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
           break;
         case "right":
         case "up":
           e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
       }
       "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
     } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
   }, e.prototype.swipeHandler = function(i) {
     var e = this;
     if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
       case "start":
         e.swipeStart(i);
         break;
       case "move":
         e.swipeMove(i);
         break;
       case "end":
         e.swipeEnd(i)
     }
   }, e.prototype.swipeMove = function(i) {
     var e, t, o, s, n, r, l = this;
     return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
   }, e.prototype.swipeStart = function(i) {
     var e, t = this;
     if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
     void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
   }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
     var i = this;
     null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
   }, e.prototype.unload = function() {
     var e = this;
     i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
   }, e.prototype.unslick = function(i) {
     var e = this;
     e.$slider.trigger("unslick", [e, i]), e.destroy()
   }, e.prototype.updateArrows = function() {
     var i = this;
     Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
   }, e.prototype.updateDots = function() {
     var i = this;
     null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
   }, e.prototype.visibility = function() {
     var i = this;
     i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
   }, i.fn.slick = function() {
     var i, t, o = this,
       s = arguments[0],
       n = Array.prototype.slice.call(arguments, 1),
       r = o.length;
     for (i = 0; i < r; i++)
       if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
     return o
   }
 });

 /*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
 ! function(t, e) {
   "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
 }(this, (function(t) {
   "use strict";

   function e(t) {
     if (t && t.__esModule) return t;
     var e = Object.create(null);
     return t && Object.keys(t).forEach((function(s) {
       if ("default" !== s) {
         var i = Object.getOwnPropertyDescriptor(t, s);
         Object.defineProperty(e, s, i.get ? i : {
           enumerable: !0,
           get: function() {
             return t[s]
           }
         })
       }
     })), e.default = t, Object.freeze(e)
   }
   var s = e(t);
   const i = {
       find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
       findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
       children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
       parents(t, e) {
         const s = [];
         let i = t.parentNode;
         for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && s.push(i), i = i.parentNode;
         return s
       },
       prev(t, e) {
         let s = t.previousElementSibling;
         for (; s;) {
           if (s.matches(e)) return [s];
           s = s.previousElementSibling
         }
         return []
       },
       next(t, e) {
         let s = t.nextElementSibling;
         for (; s;) {
           if (s.matches(e)) return [s];
           s = s.nextElementSibling
         }
         return []
       }
     },
     n = t => {
       do {
         t += Math.floor(1e6 * Math.random())
       } while (document.getElementById(t));
       return t
     },
     o = t => {
       let e = t.getAttribute("data-bs-target");
       if (!e || "#" === e) {
         let s = t.getAttribute("href");
         if (!s || !s.includes("#") && !s.startsWith(".")) return null;
         s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]), e = s && "#" !== s ? s.trim() : null
       }
       return e
     },
     r = t => {
       const e = o(t);
       return e && document.querySelector(e) ? e : null
     },
     a = t => {
       const e = o(t);
       return e ? document.querySelector(e) : null
     },
     l = t => {
       t.dispatchEvent(new Event("transitionend"))
     },
     c = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
     h = t => c(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? i.findOne(t) : null,
     d = (t, e, s) => {
       Object.keys(s).forEach(i => {
         const n = s[i],
           o = e[i],
           r = o && c(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
         var a;
         if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`)
       })
     },
     u = t => !(!c(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
     g = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
     p = t => {
       if (!document.documentElement.attachShadow) return null;
       if ("function" == typeof t.getRootNode) {
         const e = t.getRootNode();
         return e instanceof ShadowRoot ? e : null
       }
       return t instanceof ShadowRoot ? t : t.parentNode ? p(t.parentNode) : null
     },
     f = () => {},
     m = t => t.offsetHeight,
     _ = () => {
       const {
         jQuery: t
       } = window;
       return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
     },
     b = [],
     v = () => "rtl" === document.documentElement.dir,
     y = t => {
       var e;
       e = () => {
         const e = _();
         if (e) {
           const s = t.NAME,
             i = e.fn[s];
           e.fn[s] = t.jQueryInterface, e.fn[s].Constructor = t, e.fn[s].noConflict = () => (e.fn[s] = i, t.jQueryInterface)
         }
       }, "loading" === document.readyState ? (b.length || document.addEventListener("DOMContentLoaded", () => {
         b.forEach(t => t())
       }), b.push(e)) : e()
     },
     w = t => {
       "function" == typeof t && t()
     },
     E = (t, e, s = !0) => {
       if (!s) return void w(t);
       const i = (t => {
         if (!t) return 0;
         let {
           transitionDuration: e,
           transitionDelay: s
         } = window.getComputedStyle(t);
         const i = Number.parseFloat(e),
           n = Number.parseFloat(s);
         return i || n ? (e = e.split(",")[0], s = s.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0
       })(e) + 5;
       let n = !1;
       const o = ({
         target: s
       }) => {
         s === e && (n = !0, e.removeEventListener("transitionend", o), w(t))
       };
       e.addEventListener("transitionend", o), setTimeout(() => {
         n || l(e)
       }, i)
     },
     A = (t, e, s, i) => {
       let n = t.indexOf(e);
       if (-1 === n) return t[!s && i ? t.length - 1 : 0];
       const o = t.length;
       return n += s ? 1 : -1, i && (n = (n + o) % o), t[Math.max(0, Math.min(n, o - 1))]
     },
     T = /[^.]*(?=\..*)\.|.*/,
     C = /\..*/,
     k = /::\d+$/,
     L = {};
   let O = 1;
   const D = {
       mouseenter: "mouseover",
       mouseleave: "mouseout"
     },
     I = /^(mouseenter|mouseleave)/i,
     N = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

   function S(t, e) {
     return e && `${e}::${O++}` || t.uidEvent || O++
   }

   function x(t) {
     const e = S(t);
     return t.uidEvent = e, L[e] = L[e] || {}, L[e]
   }

   function M(t, e, s = null) {
     const i = Object.keys(t);
     for (let n = 0, o = i.length; n < o; n++) {
       const o = t[i[n]];
       if (o.originalHandler === e && o.delegationSelector === s) return o
     }
     return null
   }

   function P(t, e, s) {
     const i = "string" == typeof e,
       n = i ? s : e;
     let o = R(t);
     return N.has(o) || (o = t), [i, n, o]
   }

   function j(t, e, s, i, n) {
     if ("string" != typeof e || !t) return;
     if (s || (s = i, i = null), I.test(e)) {
       const t = t => function(e) {
         if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
       };
       i ? i = t(i) : s = t(s)
     }
     const [o, r, a] = P(e, s, i), l = x(t), c = l[a] || (l[a] = {}), h = M(c, r, o ? s : null);
     if (h) return void(h.oneOff = h.oneOff && n);
     const d = S(r, e.replace(T, "")),
       u = o ? function(t, e, s) {
         return function i(n) {
           const o = t.querySelectorAll(e);
           for (let {
               target: r
             } = n; r && r !== this; r = r.parentNode)
             for (let a = o.length; a--;)
               if (o[a] === r) return n.delegateTarget = r, i.oneOff && B.off(t, n.type, e, s), s.apply(r, [n]);
           return null
         }
       }(t, s, i) : function(t, e) {
         return function s(i) {
           return i.delegateTarget = t, s.oneOff && B.off(t, i.type, e), e.apply(t, [i])
         }
       }(t, s);
     u.delegationSelector = o ? s : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
   }

   function H(t, e, s, i, n) {
     const o = M(e[s], i, n);
     o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent])
   }

   function R(t) {
     return t = t.replace(C, ""), D[t] || t
   }
   const B = {
       on(t, e, s, i) {
         j(t, e, s, i, !1)
       },
       one(t, e, s, i) {
         j(t, e, s, i, !0)
       },
       off(t, e, s, i) {
         if ("string" != typeof e || !t) return;
         const [n, o, r] = P(e, s, i), a = r !== e, l = x(t), c = e.startsWith(".");
         if (void 0 !== o) {
           if (!l || !l[r]) return;
           return void H(t, l, r, o, n ? s : null)
         }
         c && Object.keys(l).forEach(s => {
           ! function(t, e, s, i) {
             const n = e[s] || {};
             Object.keys(n).forEach(o => {
               if (o.includes(i)) {
                 const i = n[o];
                 H(t, e, s, i.originalHandler, i.delegationSelector)
               }
             })
           }(t, l, s, e.slice(1))
         });
         const h = l[r] || {};
         Object.keys(h).forEach(s => {
           const i = s.replace(k, "");
           if (!a || e.includes(i)) {
             const e = h[s];
             H(t, l, r, e.originalHandler, e.delegationSelector)
           }
         })
       },
       trigger(t, e, s) {
         if ("string" != typeof e || !t) return null;
         const i = _(),
           n = R(e),
           o = e !== n,
           r = N.has(n);
         let a, l = !0,
           c = !0,
           h = !1,
           d = null;
         return o && i && (a = i.Event(e, s), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
           bubbles: l,
           cancelable: !0
         }), void 0 !== s && Object.keys(s).forEach(t => {
           Object.defineProperty(d, t, {
             get: () => s[t]
           })
         }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
       }
     },
     $ = new Map;
   var W = {
     set(t, e, s) {
       $.has(t) || $.set(t, new Map);
       const i = $.get(t);
       i.has(e) || 0 === i.size ? i.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
     },
     get: (t, e) => $.has(t) && $.get(t).get(e) || null,
     remove(t, e) {
       if (!$.has(t)) return;
       const s = $.get(t);
       s.delete(e), 0 === s.size && $.delete(t)
     }
   };
   class q {
     constructor(t) {
       (t = h(t)) && (this._element = t, W.set(this._element, this.constructor.DATA_KEY, this))
     }
     dispose() {
       W.remove(this._element, this.constructor.DATA_KEY), B.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
         this[t] = null
       })
     }
     _queueCallback(t, e, s = !0) {
       E(t, e, s)
     }
     static getInstance(t) {
       return W.get(t, this.DATA_KEY)
     }
     static getOrCreateInstance(t, e = {}) {
       return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
     }
     static get VERSION() {
       return "5.0.2"
     }
     static get NAME() {
       throw new Error('You have to implement the static method "NAME", for each component!')
     }
     static get DATA_KEY() {
       return "bs." + this.NAME
     }
     static get EVENT_KEY() {
       return "." + this.DATA_KEY
     }
   }
   class z extends q {
     static get NAME() {
       return "alert"
     }
     close(t) {
       const e = t ? this._getRootElement(t) : this._element,
         s = this._triggerCloseEvent(e);
       null === s || s.defaultPrevented || this._removeElement(e)
     }
     _getRootElement(t) {
       return a(t) || t.closest(".alert")
     }
     _triggerCloseEvent(t) {
       return B.trigger(t, "close.bs.alert")
     }
     _removeElement(t) {
       t.classList.remove("show");
       const e = t.classList.contains("fade");
       this._queueCallback(() => this._destroyElement(t), t, e)
     }
     _destroyElement(t) {
       t.remove(), B.trigger(t, "closed.bs.alert")
     }
     static jQueryInterface(t) {
       return this.each((function() {
         const e = z.getOrCreateInstance(this);
         "close" === t && e[t](this)
       }))
     }
     static handleDismiss(t) {
       return function(e) {
         e && e.preventDefault(), t.close(this)
       }
     }
   }
   B.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', z.handleDismiss(new z)), y(z);
   class F extends q {
     static get NAME() {
       return "button"
     }
     toggle() {
       this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
     }
     static jQueryInterface(t) {
       return this.each((function() {
         const e = F.getOrCreateInstance(this);
         "toggle" === t && e[t]()
       }))
     }
   }

   function U(t) {
     return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
   }

   function K(t) {
     return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
   }
   B.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
     t.preventDefault();
     const e = t.target.closest('[data-bs-toggle="button"]');
     F.getOrCreateInstance(e).toggle()
   }), y(F);
   const V = {
       setDataAttribute(t, e, s) {
         t.setAttribute("data-bs-" + K(e), s)
       },
       removeDataAttribute(t, e) {
         t.removeAttribute("data-bs-" + K(e))
       },
       getDataAttributes(t) {
         if (!t) return {};
         const e = {};
         return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(s => {
           let i = s.replace(/^bs/, "");
           i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = U(t.dataset[s])
         }), e
       },
       getDataAttribute: (t, e) => U(t.getAttribute("data-bs-" + K(e))),
       offset(t) {
         const e = t.getBoundingClientRect();
         return {
           top: e.top + document.body.scrollTop,
           left: e.left + document.body.scrollLeft
         }
       },
       position: t => ({
         top: t.offsetTop,
         left: t.offsetLeft
       })
     },
     Q = {
       interval: 5e3,
       keyboard: !0,
       slide: !1,
       pause: "hover",
       wrap: !0,
       touch: !0
     },
     X = {
       interval: "(number|boolean)",
       keyboard: "boolean",
       slide: "(boolean|string)",
       pause: "(string|boolean)",
       wrap: "boolean",
       touch: "boolean"
     },
     Y = "next",
     G = "prev",
     Z = "left",
     J = "right",
     tt = {
       ArrowLeft: J,
       ArrowRight: Z
     };
   class et extends q {
     constructor(t, e) {
       super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = i.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
     }
     static get Default() {
       return Q
     }
     static get NAME() {
       return "carousel"
     }
     next() {
       this._slide(Y)
     }
     nextWhenVisible() {
       !document.hidden && u(this._element) && this.next()
     }
     prev() {
       this._slide(G)
     }
     pause(t) {
       t || (this._isPaused = !0), i.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (l(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
     }
     cycle(t) {
       t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
     }
     to(t) {
       this._activeElement = i.findOne(".active.carousel-item", this._element);
       const e = this._getItemIndex(this._activeElement);
       if (t > this._items.length - 1 || t < 0) return;
       if (this._isSliding) return void B.one(this._element, "slid.bs.carousel", () => this.to(t));
       if (e === t) return this.pause(), void this.cycle();
       const s = t > e ? Y : G;
       this._slide(s, this._items[t])
     }
     _getConfig(t) {
       return t = {
         ...Q,
         ...V.getDataAttributes(this._element),
         ..."object" == typeof t ? t : {}
       }, d("carousel", t, X), t
     }
     _handleSwipe() {
       const t = Math.abs(this.touchDeltaX);
       if (t <= 40) return;
       const e = t / this.touchDeltaX;
       this.touchDeltaX = 0, e && this._slide(e > 0 ? J : Z)
     }
     _addEventListeners() {
       this._config.keyboard && B.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (B.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), B.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
     }
     _addTouchEventListeners() {
       const t = t => {
           !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
         },
         e = t => {
           this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
         },
         s = t => {
           !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
         };
       i.find(".carousel-item img", this._element).forEach(t => {
         B.on(t, "dragstart.bs.carousel", t => t.preventDefault())
       }), this._pointerEvent ? (B.on(this._element, "pointerdown.bs.carousel", e => t(e)), B.on(this._element, "pointerup.bs.carousel", t => s(t)), this._element.classList.add("pointer-event")) : (B.on(this._element, "touchstart.bs.carousel", e => t(e)), B.on(this._element, "touchmove.bs.carousel", t => e(t)), B.on(this._element, "touchend.bs.carousel", t => s(t)))
     }
     _keydown(t) {
       if (/input|textarea/i.test(t.target.tagName)) return;
       const e = tt[t.key];
       e && (t.preventDefault(), this._slide(e))
     }
     _getItemIndex(t) {
       return this._items = t && t.parentNode ? i.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
     }
     _getItemByOrder(t, e) {
       const s = t === Y;
       return A(this._items, e, s, this._config.wrap)
     }
     _triggerSlideEvent(t, e) {
       const s = this._getItemIndex(t),
         n = this._getItemIndex(i.findOne(".active.carousel-item", this._element));
       return B.trigger(this._element, "slide.bs.carousel", {
         relatedTarget: t,
         direction: e,
         from: n,
         to: s
       })
     }
     _setActiveIndicatorElement(t) {
       if (this._indicatorsElement) {
         const e = i.findOne(".active", this._indicatorsElement);
         e.classList.remove("active"), e.removeAttribute("aria-current");
         const s = i.find("[data-bs-target]", this._indicatorsElement);
         for (let e = 0; e < s.length; e++)
           if (Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
             s[e].classList.add("active"), s[e].setAttribute("aria-current", "true");
             break
           }
       }
     }
     _updateInterval() {
       const t = this._activeElement || i.findOne(".active.carousel-item", this._element);
       if (!t) return;
       const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
       e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
     }
     _slide(t, e) {
       const s = this._directionToOrder(t),
         n = i.findOne(".active.carousel-item", this._element),
         o = this._getItemIndex(n),
         r = e || this._getItemByOrder(s, n),
         a = this._getItemIndex(r),
         l = Boolean(this._interval),
         c = s === Y,
         h = c ? "carousel-item-start" : "carousel-item-end",
         d = c ? "carousel-item-next" : "carousel-item-prev",
         u = this._orderToDirection(s);
       if (r && r.classList.contains("active")) return void(this._isSliding = !1);
       if (this._isSliding) return;
       if (this._triggerSlideEvent(r, u).defaultPrevented) return;
       if (!n || !r) return;
       this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
       const g = () => {
         B.trigger(this._element, "slid.bs.carousel", {
           relatedTarget: r,
           direction: u,
           from: o,
           to: a
         })
       };
       if (this._element.classList.contains("slide")) {
         r.classList.add(d), m(r), n.classList.add(h), r.classList.add(h);
         const t = () => {
           r.classList.remove(h, d), r.classList.add("active"), n.classList.remove("active", d, h), this._isSliding = !1, setTimeout(g, 0)
         };
         this._queueCallback(t, n, !0)
       } else n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, g();
       l && this.cycle()
     }
     _directionToOrder(t) {
       return [J, Z].includes(t) ? v() ? t === Z ? G : Y : t === Z ? Y : G : t
     }
     _orderToDirection(t) {
       return [Y, G].includes(t) ? v() ? t === G ? Z : J : t === G ? J : Z : t
     }
     static carouselInterface(t, e) {
       const s = et.getOrCreateInstance(t, e);
       let {
         _config: i
       } = s;
       "object" == typeof e && (i = {
         ...i,
         ...e
       });
       const n = "string" == typeof e ? e : i.slide;
       if ("number" == typeof e) s.to(e);
       else if ("string" == typeof n) {
         if (void 0 === s[n]) throw new TypeError(`No method named "${n}"`);
         s[n]()
       } else i.interval && i.ride && (s.pause(), s.cycle())
     }
     static jQueryInterface(t) {
       return this.each((function() {
         et.carouselInterface(this, t)
       }))
     }
     static dataApiClickHandler(t) {
       const e = a(this);
       if (!e || !e.classList.contains("carousel")) return;
       const s = {
           ...V.getDataAttributes(e),
           ...V.getDataAttributes(this)
         },
         i = this.getAttribute("data-bs-slide-to");
       i && (s.interval = !1), et.carouselInterface(e, s), i && et.getInstance(e).to(i), t.preventDefault()
     }
   }
   B.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", et.dataApiClickHandler), B.on(window, "load.bs.carousel.data-api", () => {
     const t = i.find('[data-bs-ride="carousel"]');
     for (let e = 0, s = t.length; e < s; e++) et.carouselInterface(t[e], et.getInstance(t[e]))
   }), y(et);
   const st = {
       toggle: !0,
       parent: ""
     },
     it = {
       toggle: "boolean",
       parent: "(string|element)"
     };
   class nt extends q {
     constructor(t, e) {
       super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = i.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
       const s = i.find('[data-bs-toggle="collapse"]');
       for (let t = 0, e = s.length; t < e; t++) {
         const e = s[t],
           n = r(e),
           o = i.find(n).filter(t => t === this._element);
         null !== n && o.length && (this._selector = n, this._triggerArray.push(e))
       }
       this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
     }
     static get Default() {
       return st
     }
     static get NAME() {
       return "collapse"
     }
     toggle() {
       this._element.classList.contains("show") ? this.hide() : this.show()
     }
     show() {
       if (this._isTransitioning || this._element.classList.contains("show")) return;
       let t, e;
       this._parent && (t = i.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === t.length && (t = null));
       const s = i.findOne(this._selector);
       if (t) {
         const i = t.find(t => s !== t);
         if (e = i ? nt.getInstance(i) : null, e && e._isTransitioning) return
       }
       if (B.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
       t && t.forEach(t => {
         s !== t && nt.collapseInterface(t, "hide"), e || W.set(t, "bs.collapse", null)
       });
       const n = this._getDimension();
       this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
         t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
       }), this.setTransitioning(!0);
       const o = "scroll" + (n[0].toUpperCase() + n.slice(1));
       this._queueCallback(() => {
         this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n] = "", this.setTransitioning(!1), B.trigger(this._element, "shown.bs.collapse")
       }, this._element, !0), this._element.style[n] = this._element[o] + "px"
     }
     hide() {
       if (this._isTransitioning || !this._element.classList.contains("show")) return;
       if (B.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
       const t = this._getDimension();
       this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", m(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
       const e = this._triggerArray.length;
       if (e > 0)
         for (let t = 0; t < e; t++) {
           const e = this._triggerArray[t],
             s = a(e);
           s && !s.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1))
         }
       this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(() => {
         this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), B.trigger(this._element, "hidden.bs.collapse")
       }, this._element, !0)
     }
     setTransitioning(t) {
       this._isTransitioning = t
     }
     _getConfig(t) {
       return (t = {
         ...st,
         ...t
       }).toggle = Boolean(t.toggle), d("collapse", t, it), t
     }
     _getDimension() {
       return this._element.classList.contains("width") ? "width" : "height"
     }
     _getParent() {
       let {
         parent: t
       } = this._config;
       t = h(t);
       const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
       return i.find(e, t).forEach(t => {
         const e = a(t);
         this._addAriaAndCollapsedClass(e, [t])
       }), t
     }
     _addAriaAndCollapsedClass(t, e) {
       if (!t || !e.length) return;
       const s = t.classList.contains("show");
       e.forEach(t => {
         s ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", s)
       })
     }
     static collapseInterface(t, e) {
       let s = nt.getInstance(t);
       const i = {
         ...st,
         ...V.getDataAttributes(t),
         ..."object" == typeof e && e ? e : {}
       };
       if (!s && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), s || (s = new nt(t, i)), "string" == typeof e) {
         if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
         s[e]()
       }
     }
     static jQueryInterface(t) {
       return this.each((function() {
         nt.collapseInterface(this, t)
       }))
     }
   }
   B.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
     ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
     const e = V.getDataAttributes(this),
       s = r(this);
     i.find(s).forEach(t => {
       const s = nt.getInstance(t);
       let i;
       s ? (null === s._parent && "string" == typeof e.parent && (s._config.parent = e.parent, s._parent = s._getParent()), i = "toggle") : i = e, nt.collapseInterface(t, i)
     })
   })), y(nt);
   const ot = new RegExp("ArrowUp|ArrowDown|Escape"),
     rt = v() ? "top-end" : "top-start",
     at = v() ? "top-start" : "top-end",
     lt = v() ? "bottom-end" : "bottom-start",
     ct = v() ? "bottom-start" : "bottom-end",
     ht = v() ? "left-start" : "right-start",
     dt = v() ? "right-start" : "left-start",
     ut = {
       offset: [0, 2],
       boundary: "clippingParents",
       reference: "toggle",
       display: "dynamic",
       popperConfig: null,
       autoClose: !0
     },
     gt = {
       offset: "(array|string|function)",
       boundary: "(string|element)",
       reference: "(string|element|object)",
       display: "string",
       popperConfig: "(null|object|function)",
       autoClose: "(boolean|string)"
     };
   class pt extends q {
     constructor(t, e) {
       super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
     }
     static get Default() {
       return ut
     }
     static get DefaultType() {
       return gt
     }
     static get NAME() {
       return "dropdown"
     }
     toggle() {
       g(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show())
     }
     show() {
       if (g(this._element) || this._menu.classList.contains("show")) return;
       const t = pt.getParentFromElement(this._element),
         e = {
           relatedTarget: this._element
         };
       if (!B.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
         if (this._inNavbar) V.setDataAttribute(this._menu, "popper", "none");
         else {
           if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
           let e = this._element;
           "parent" === this._config.reference ? e = t : c(this._config.reference) ? e = h(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
           const i = this._getPopperConfig(),
             n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
           this._popper = s.createPopper(e, this._menu, i), n && V.setDataAttribute(this._menu, "popper", "static")
         }
         "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => B.on(t, "mouseover", f)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B.trigger(this._element, "shown.bs.dropdown", e)
       }
     }
     hide() {
       if (g(this._element) || !this._menu.classList.contains("show")) return;
       const t = {
         relatedTarget: this._element
       };
       this._completeHide(t)
     }
     dispose() {
       this._popper && this._popper.destroy(), super.dispose()
     }
     update() {
       this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
     }
     _addEventListeners() {
       B.on(this._element, "click.bs.dropdown", t => {
         t.preventDefault(), this.toggle()
       })
     }
     _completeHide(t) {
       B.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => B.off(t, "mouseover", f)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), V.removeDataAttribute(this._menu, "popper"), B.trigger(this._element, "hidden.bs.dropdown", t))
     }
     _getConfig(t) {
       if (t = {
           ...this.constructor.Default,
           ...V.getDataAttributes(this._element),
           ...t
         }, d("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !c(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
       return t
     }
     _getMenuElement() {
       return i.next(this._element, ".dropdown-menu")[0]
     }
     _getPlacement() {
       const t = this._element.parentNode;
       if (t.classList.contains("dropend")) return ht;
       if (t.classList.contains("dropstart")) return dt;
       const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
       return t.classList.contains("dropup") ? e ? at : rt : e ? ct : lt
     }
     _detectNavbar() {
       return null !== this._element.closest(".navbar")
     }
     _getOffset() {
       const {
         offset: t
       } = this._config;
       return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
     }
     _getPopperConfig() {
       const t = {
         placement: this._getPlacement(),
         modifiers: [{
           name: "preventOverflow",
           options: {
             boundary: this._config.boundary
           }
         }, {
           name: "offset",
           options: {
             offset: this._getOffset()
           }
         }]
       };
       return "static" === this._config.display && (t.modifiers = [{
         name: "applyStyles",
         enabled: !1
       }]), {
         ...t,
         ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
       }
     }
     _selectMenuItem({
       key: t,
       target: e
     }) {
       const s = i.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(u);
       s.length && A(s, e, "ArrowDown" === t, !s.includes(e)).focus()
     }
     static dropdownInterface(t, e) {
       const s = pt.getOrCreateInstance(t, e);
       if ("string" == typeof e) {
         if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
         s[e]()
       }
     }
     static jQueryInterface(t) {
       return this.each((function() {
         pt.dropdownInterface(this, t)
       }))
     }
     static clearMenus(t) {
       if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
       const e = i.find('[data-bs-toggle="dropdown"]');
       for (let s = 0, i = e.length; s < i; s++) {
         const i = pt.getInstance(e[s]);
         if (!i || !1 === i._config.autoClose) continue;
         if (!i._element.classList.contains("show")) continue;
         const n = {
           relatedTarget: i._element
         };
         if (t) {
           const e = t.composedPath(),
             s = e.includes(i._menu);
           if (e.includes(i._element) || "inside" === i._config.autoClose && !s || "outside" === i._config.autoClose && s) continue;
           if (i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
           "click" === t.type && (n.clickEvent = t)
         }
         i._completeHide(n)
       }
     }
     static getParentFromElement(t) {
       return a(t) || t.parentNode
     }
     static dataApiKeydownHandler(t) {
       if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ot.test(t.key)) return;
       const e = this.classList.contains("show");
       if (!e && "Escape" === t.key) return;
       if (t.preventDefault(), t.stopPropagation(), g(this)) return;
       const s = () => this.matches('[data-bs-toggle="dropdown"]') ? this : i.prev(this, '[data-bs-toggle="dropdown"]')[0];
       return "Escape" === t.key ? (s().focus(), void pt.clearMenus()) : "ArrowUp" === t.key || "ArrowDown" === t.key ? (e || s().click(), void pt.getInstance(s())._selectMenuItem(t)) : void(e && "Space" !== t.key || pt.clearMenus())
     }
   }
   B.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', pt.dataApiKeydownHandler), B.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", pt.dataApiKeydownHandler), B.on(document, "click.bs.dropdown.data-api", pt.clearMenus), B.on(document, "keyup.bs.dropdown.data-api", pt.clearMenus), B.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
     t.preventDefault(), pt.dropdownInterface(this)
   })), y(pt);
   class ft {
     constructor() {
       this._element = document.body
     }
     getWidth() {
       const t = document.documentElement.clientWidth;
       return Math.abs(window.innerWidth - t)
     }
     hide() {
       const t = this.getWidth();
       this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), this._setElementAttributes(".sticky-top", "marginRight", e => e - t)
     }
     _disableOverFlow() {
       this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
     }
     _setElementAttributes(t, e, s) {
       const i = this.getWidth();
       this._applyManipulationCallback(t, t => {
         if (t !== this._element && window.innerWidth > t.clientWidth + i) return;
         this._saveInitialAttribute(t, e);
         const n = window.getComputedStyle(t)[e];
         t.style[e] = s(Number.parseFloat(n)) + "px"
       })
     }
     reset() {
       this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight")
     }
     _saveInitialAttribute(t, e) {
       const s = t.style[e];
       s && V.setDataAttribute(t, e, s)
     }
     _resetElementAttributes(t, e) {
       this._applyManipulationCallback(t, t => {
         const s = V.getDataAttribute(t, e);
         void 0 === s ? t.style.removeProperty(e) : (V.removeDataAttribute(t, e), t.style[e] = s)
       })
     }
     _applyManipulationCallback(t, e) {
       c(t) ? e(t) : i.find(t, this._element).forEach(e)
     }
     isOverflowing() {
       return this.getWidth() > 0
     }
   }
   const mt = {
       isVisible: !0,
       isAnimated: !1,
       rootElement: "body",
       clickCallback: null
     },
     _t = {
       isVisible: "boolean",
       isAnimated: "boolean",
       rootElement: "(element|string)",
       clickCallback: "(function|null)"
     };
   class bt {
     constructor(t) {
       this._config = this._getConfig(t), this._isAppended = !1, this._element = null
     }
     show(t) {
       this._config.isVisible ? (this._append(), this._config.isAnimated && m(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
         w(t)
       })) : w(t)
     }
     hide(t) {
       this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
         this.dispose(), w(t)
       })) : w(t)
     }
     _getElement() {
       if (!this._element) {
         const t = document.createElement("div");
         t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t
       }
       return this._element
     }
     _getConfig(t) {
       return (t = {
         ...mt,
         ..."object" == typeof t ? t : {}
       }).rootElement = h(t.rootElement), d("backdrop", t, _t), t
     }
     _append() {
       this._isAppended || (this._config.rootElement.appendChild(this._getElement()), B.on(this._getElement(), "mousedown.bs.backdrop", () => {
         w(this._config.clickCallback)
       }), this._isAppended = !0)
     }
     dispose() {
       this._isAppended && (B.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1)
     }
     _emulateAnimation(t) {
       E(t, this._getElement(), this._config.isAnimated)
     }
   }
   const vt = {
       backdrop: !0,
       keyboard: !0,
       focus: !0
     },
     yt = {
       backdrop: "(boolean|string)",
       keyboard: "boolean",
       focus: "boolean"
     };
   class wt extends q {
     constructor(t, e) {
       super(t), this._config = this._getConfig(e), this._dialog = i.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new ft
     }
     static get Default() {
       return vt
     }
     static get NAME() {
       return "modal"
     }
     toggle(t) {
       return this._isShown ? this.hide() : this.show(t)
     }
     show(t) {
       this._isShown || this._isTransitioning || B.trigger(this._element, "show.bs.modal", {
         relatedTarget: t
       }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), B.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), B.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
         B.one(this._element, "mouseup.dismiss.bs.modal", t => {
           t.target === this._element && (this._ignoreBackdropClick = !0)
         })
       }), this._showBackdrop(() => this._showElement(t)))
     }
     hide(t) {
       if (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning) return;
       if (B.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
       this._isShown = !1;
       const e = this._isAnimated();
       e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), B.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), B.off(this._element, "click.dismiss.bs.modal"), B.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, e)
     }
     dispose() {
       [window, this._dialog].forEach(t => B.off(t, ".bs.modal")), this._backdrop.dispose(), super.dispose(), B.off(document, "focusin.bs.modal")
     }
     handleUpdate() {
       this._adjustDialog()
     }
     _initializeBackDrop() {
       return new bt({
         isVisible: Boolean(this._config.backdrop),
         isAnimated: this._isAnimated()
       })
     }
     _getConfig(t) {
       return t = {
         ...vt,
         ...V.getDataAttributes(this._element),
         ..."object" == typeof t ? t : {}
       }, d("modal", t, yt), t
     }
     _showElement(t) {
       const e = this._isAnimated(),
         s = i.findOne(".modal-body", this._dialog);
       this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s && (s.scrollTop = 0), e && m(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => {
         this._config.focus && this._element.focus(), this._isTransitioning = !1, B.trigger(this._element, "shown.bs.modal", {
           relatedTarget: t
         })
       }, this._dialog, e)
     }
     _enforceFocus() {
       B.off(document, "focusin.bs.modal"), B.on(document, "focusin.bs.modal", t => {
         document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
       })
     }
     _setEscapeEvent() {
       this._isShown ? B.on(this._element, "keydown.dismiss.bs.modal", t => {
         this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
       }) : B.off(this._element, "keydown.dismiss.bs.modal")
     }
     _setResizeEvent() {
       this._isShown ? B.on(window, "resize.bs.modal", () => this._adjustDialog()) : B.off(window, "resize.bs.modal")
     }
     _hideModal() {
       this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
         document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), B.trigger(this._element, "hidden.bs.modal")
       })
     }
     _showBackdrop(t) {
       B.on(this._element, "click.dismiss.bs.modal", t => {
         this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
       }), this._backdrop.show(t)
     }
     _isAnimated() {
       return this._element.classList.contains("fade")
     }
     _triggerBackdropTransition() {
       if (B.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
       const {
         classList: t,
         scrollHeight: e,
         style: s
       } = this._element, i = e > document.documentElement.clientHeight;
       !i && "hidden" === s.overflowY || t.contains("modal-static") || (i || (s.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(() => {
         t.remove("modal-static"), i || this._queueCallback(() => {
           s.overflowY = ""
         }, this._dialog)
       }, this._dialog), this._element.focus())
     }
     _adjustDialog() {
       const t = this._element.scrollHeight > document.documentElement.clientHeight,
         e = this._scrollBar.getWidth(),
         s = e > 0;
       (!s && t && !v() || s && !t && v()) && (this._element.style.paddingLeft = e + "px"), (s && !t && !v() || !s && t && v()) && (this._element.style.paddingRight = e + "px")
     }
     _resetAdjustments() {
       this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
     }
     static jQueryInterface(t, e) {
       return this.each((function() {
         const s = wt.getOrCreateInstance(this, t);
         if ("string" == typeof t) {
           if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
           s[t](e)
         }
       }))
     }
   }
   B.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
     const e = a(this);
     ["A", "AREA"].includes(this.tagName) && t.preventDefault(), B.one(e, "show.bs.modal", t => {
       t.defaultPrevented || B.one(e, "hidden.bs.modal", () => {
         u(this) && this.focus()
       })
     }), wt.getOrCreateInstance(e).toggle(this)
   })), y(wt);
   const Et = {
       backdrop: !0,
       keyboard: !0,
       scroll: !1
     },
     At = {
       backdrop: "boolean",
       keyboard: "boolean",
       scroll: "boolean"
     };
   class Tt extends q {
     constructor(t, e) {
       super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
     }
     static get NAME() {
       return "offcanvas"
     }
     static get Default() {
       return Et
     }
     toggle(t) {
       return this._isShown ? this.hide() : this.show(t)
     }
     show(t) {
       this._isShown || B.trigger(this._element, "show.bs.offcanvas", {
         relatedTarget: t
       }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || ((new ft).hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
         B.trigger(this._element, "shown.bs.offcanvas", {
           relatedTarget: t
         })
       }, this._element, !0))
     }
     hide() {
       this._isShown && (B.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (B.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
         this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new ft).reset(), B.trigger(this._element, "hidden.bs.offcanvas")
       }, this._element, !0)))
     }
     dispose() {
       this._backdrop.dispose(), super.dispose(), B.off(document, "focusin.bs.offcanvas")
     }
     _getConfig(t) {
       return t = {
         ...Et,
         ...V.getDataAttributes(this._element),
         ..."object" == typeof t ? t : {}
       }, d("offcanvas", t, At), t
     }
     _initializeBackDrop() {
       return new bt({
         isVisible: this._config.backdrop,
         isAnimated: !0,
         rootElement: this._element.parentNode,
         clickCallback: () => this.hide()
       })
     }
     _enforceFocusOnElement(t) {
       B.off(document, "focusin.bs.offcanvas"), B.on(document, "focusin.bs.offcanvas", e => {
         document === e.target || t === e.target || t.contains(e.target) || t.focus()
       }), t.focus()
     }
     _addEventListeners() {
       B.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), B.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
         this._config.keyboard && "Escape" === t.key && this.hide()
       })
     }
     static jQueryInterface(t) {
       return this.each((function() {
         const e = Tt.getOrCreateInstance(this, t);
         if ("string" == typeof t) {
           if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
           e[t](this)
         }
       }))
     }
   }
   B.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
     const e = a(this);
     if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), g(this)) return;
     B.one(e, "hidden.bs.offcanvas", () => {
       u(this) && this.focus()
     });
     const s = i.findOne(".offcanvas.show");
     s && s !== e && Tt.getInstance(s).hide(), Tt.getOrCreateInstance(e).toggle(this)
   })), B.on(window, "load.bs.offcanvas.data-api", () => i.find(".offcanvas.show").forEach(t => Tt.getOrCreateInstance(t).show())), y(Tt);
   const Ct = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
     kt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
     Lt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
     Ot = (t, e) => {
       const s = t.nodeName.toLowerCase();
       if (e.includes(s)) return !Ct.has(s) || Boolean(kt.test(t.nodeValue) || Lt.test(t.nodeValue));
       const i = e.filter(t => t instanceof RegExp);
       for (let t = 0, e = i.length; t < e; t++)
         if (i[t].test(s)) return !0;
       return !1
     };

   function Dt(t, e, s) {
     if (!t.length) return t;
     if (s && "function" == typeof s) return s(t);
     const i = (new window.DOMParser).parseFromString(t, "text/html"),
       n = Object.keys(e),
       o = [].concat(...i.body.querySelectorAll("*"));
     for (let t = 0, s = o.length; t < s; t++) {
       const s = o[t],
         i = s.nodeName.toLowerCase();
       if (!n.includes(i)) {
         s.remove();
         continue
       }
       const r = [].concat(...s.attributes),
         a = [].concat(e["*"] || [], e[i] || []);
       r.forEach(t => {
         Ot(t, a) || s.removeAttribute(t.nodeName)
       })
     }
     return i.body.innerHTML
   }
   const It = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
     Nt = new Set(["sanitize", "allowList", "sanitizeFn"]),
     St = {
       animation: "boolean",
       template: "string",
       title: "(string|element|function)",
       trigger: "string",
       delay: "(number|object)",
       html: "boolean",
       selector: "(string|boolean)",
       placement: "(string|function)",
       offset: "(array|string|function)",
       container: "(string|element|boolean)",
       fallbackPlacements: "array",
       boundary: "(string|element)",
       customClass: "(string|function)",
       sanitize: "boolean",
       sanitizeFn: "(null|function)",
       allowList: "object",
       popperConfig: "(null|object|function)"
     },
     xt = {
       AUTO: "auto",
       TOP: "top",
       RIGHT: v() ? "left" : "right",
       BOTTOM: "bottom",
       LEFT: v() ? "right" : "left"
     },
     Mt = {
       animation: !0,
       template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
       trigger: "hover focus",
       title: "",
       delay: 0,
       html: !1,
       selector: !1,
       placement: "top",
       offset: [0, 0],
       container: !1,
       fallbackPlacements: ["top", "right", "bottom", "left"],
       boundary: "clippingParents",
       customClass: "",
       sanitize: !0,
       sanitizeFn: null,
       allowList: {
         "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
         a: ["target", "href", "title", "rel"],
         area: [],
         b: [],
         br: [],
         col: [],
         code: [],
         div: [],
         em: [],
         hr: [],
         h1: [],
         h2: [],
         h3: [],
         h4: [],
         h5: [],
         h6: [],
         i: [],
         img: ["src", "srcset", "alt", "title", "width", "height"],
         li: [],
         ol: [],
         p: [],
         pre: [],
         s: [],
         small: [],
         span: [],
         sub: [],
         sup: [],
         strong: [],
         u: [],
         ul: []
       },
       popperConfig: null
     },
     Pt = {
       HIDE: "hide.bs.tooltip",
       HIDDEN: "hidden.bs.tooltip",
       SHOW: "show.bs.tooltip",
       SHOWN: "shown.bs.tooltip",
       INSERTED: "inserted.bs.tooltip",
       CLICK: "click.bs.tooltip",
       FOCUSIN: "focusin.bs.tooltip",
       FOCUSOUT: "focusout.bs.tooltip",
       MOUSEENTER: "mouseenter.bs.tooltip",
       MOUSELEAVE: "mouseleave.bs.tooltip"
     };
   class jt extends q {
     constructor(t, e) {
       if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
       super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
     }
     static get Default() {
       return Mt
     }
     static get NAME() {
       return "tooltip"
     }
     static get Event() {
       return Pt
     }
     static get DefaultType() {
       return St
     }
     enable() {
       this._isEnabled = !0
     }
     disable() {
       this._isEnabled = !1
     }
     toggleEnabled() {
       this._isEnabled = !this._isEnabled
     }
     toggle(t) {
       if (this._isEnabled)
         if (t) {
           const e = this._initializeOnDelegatedTarget(t);
           e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
         } else {
           if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
           this._enter(null, this)
         }
     }
     dispose() {
       clearTimeout(this._timeout), B.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose()
     }
     show() {
       if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
       if (!this.isWithContent() || !this._isEnabled) return;
       const t = B.trigger(this._element, this.constructor.Event.SHOW),
         e = p(this._element),
         i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
       if (t.defaultPrevented || !i) return;
       const o = this.getTipElement(),
         r = n(this.constructor.NAME);
       o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this._config.animation && o.classList.add("fade");
       const a = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement,
         l = this._getAttachment(a);
       this._addAttachmentClass(l);
       const {
         container: c
       } = this._config;
       W.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c.appendChild(o), B.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
       const h = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
       h && o.classList.add(...h.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
         B.on(t, "mouseover", f)
       });
       const d = this.tip.classList.contains("fade");
       this._queueCallback(() => {
         const t = this._hoverState;
         this._hoverState = null, B.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
       }, this.tip, d)
     }
     hide() {
       if (!this._popper) return;
       const t = this.getTipElement();
       if (B.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
       t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => B.off(t, "mouseover", f)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
       const e = this.tip.classList.contains("fade");
       this._queueCallback(() => {
         this._isWithActiveTrigger() || ("show" !== this._hoverState && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), B.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
       }, this.tip, e), this._hoverState = ""
     }
     update() {
       null !== this._popper && this._popper.update()
     }
     isWithContent() {
       return Boolean(this.getTitle())
     }
     getTipElement() {
       if (this.tip) return this.tip;
       const t = document.createElement("div");
       return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip
     }
     setContent() {
       const t = this.getTipElement();
       this.setElementContent(i.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
     }
     setElementContent(t, e) {
       if (null !== t) return c(e) ? (e = h(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Dt(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
     }
     getTitle() {
       let t = this._element.getAttribute("data-bs-original-title");
       return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t
     }
     updateAttachment(t) {
       return "right" === t ? "end" : "left" === t ? "start" : t
     }
     _initializeOnDelegatedTarget(t, e) {
       const s = this.constructor.DATA_KEY;
       return (e = e || W.get(t.delegateTarget, s)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), W.set(t.delegateTarget, s, e)), e
     }
     _getOffset() {
       const {
         offset: t
       } = this._config;
       return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
     }
     _getPopperConfig(t) {
       const e = {
         placement: t,
         modifiers: [{
           name: "flip",
           options: {
             fallbackPlacements: this._config.fallbackPlacements
           }
         }, {
           name: "offset",
           options: {
             offset: this._getOffset()
           }
         }, {
           name: "preventOverflow",
           options: {
             boundary: this._config.boundary
           }
         }, {
           name: "arrow",
           options: {
             element: `.${this.constructor.NAME}-arrow`
           }
         }, {
           name: "onChange",
           enabled: !0,
           phase: "afterWrite",
           fn: t => this._handlePopperPlacementChange(t)
         }],
         onFirstUpdate: t => {
           t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
         }
       };
       return {
         ...e,
         ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
       }
     }
     _addAttachmentClass(t) {
       this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
     }
     _getAttachment(t) {
       return xt[t.toUpperCase()]
     }
     _setListeners() {
       this._config.trigger.split(" ").forEach(t => {
         if ("click" === t) B.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
         else if ("manual" !== t) {
           const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
             s = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
           B.on(this._element, e, this._config.selector, t => this._enter(t)), B.on(this._element, s, this._config.selector, t => this._leave(t))
         }
       }), this._hideModalHandler = () => {
         this._element && this.hide()
       }, B.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {
         ...this._config,
         trigger: "manual",
         selector: ""
       } : this._fixTitle()
     }
     _fixTitle() {
       const t = this._element.getAttribute("title"),
         e = typeof this._element.getAttribute("data-bs-original-title");
       (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
     }
     _enter(t, e) {
       e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
         "show" === e._hoverState && e.show()
       }, e._config.delay.show) : e.show())
     }
     _leave(t, e) {
       e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
         "out" === e._hoverState && e.hide()
       }, e._config.delay.hide) : e.hide())
     }
     _isWithActiveTrigger() {
       for (const t in this._activeTrigger)
         if (this._activeTrigger[t]) return !0;
       return !1
     }
     _getConfig(t) {
       const e = V.getDataAttributes(this._element);
       return Object.keys(e).forEach(t => {
         Nt.has(t) && delete e[t]
       }), (t = {
         ...this.constructor.Default,
         ...e,
         ..."object" == typeof t && t ? t : {}
       }).container = !1 === t.container ? document.body : h(t.container), "number" == typeof t.delay && (t.delay = {
         show: t.delay,
         hide: t.delay
       }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), d("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Dt(t.template, t.allowList, t.sanitizeFn)), t
     }
     _getDelegateConfig() {
       const t = {};
       if (this._config)
         for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
       return t
     }
     _cleanTipClass() {
       const t = this.getTipElement(),
         e = t.getAttribute("class").match(It);
       null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
     }
     _handlePopperPlacementChange(t) {
       const {
         state: e
       } = t;
       e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
     }
     static jQueryInterface(t) {
       return this.each((function() {
         const e = jt.getOrCreateInstance(this, t);
         if ("string" == typeof t) {
           if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
           e[t]()
         }
       }))
     }
   }
   y(jt);
   const Ht = new RegExp("(^|\\s)bs-popover\\S+", "g"),
     Rt = {
       ...jt.Default,
       placement: "right",
       offset: [0, 8],
       trigger: "click",
       content: "",
       template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
     },
     Bt = {
       ...jt.DefaultType,
       content: "(string|element|function)"
     },
     $t = {
       HIDE: "hide.bs.popover",
       HIDDEN: "hidden.bs.popover",
       SHOW: "show.bs.popover",
       SHOWN: "shown.bs.popover",
       INSERTED: "inserted.bs.popover",
       CLICK: "click.bs.popover",
       FOCUSIN: "focusin.bs.popover",
       FOCUSOUT: "focusout.bs.popover",
       MOUSEENTER: "mouseenter.bs.popover",
       MOUSELEAVE: "mouseleave.bs.popover"
     };
   class Wt extends jt {
     static get Default() {
       return Rt
     }
     static get NAME() {
       return "popover"
     }
     static get Event() {
       return $t
     }
     static get DefaultType() {
       return Bt
     }
     isWithContent() {
       return this.getTitle() || this._getContent()
     }
     getTipElement() {
       return this.tip || (this.tip = super.getTipElement(), this.getTitle() || i.findOne(".popover-header", this.tip).remove(), this._getContent() || i.findOne(".popover-body", this.tip).remove()), this.tip
     }
     setContent() {
       const t = this.getTipElement();
       this.setElementContent(i.findOne(".popover-header", t), this.getTitle());
       let e = this._getContent();
       "function" == typeof e && (e = e.call(this._element)), this.setElementContent(i.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
     }
     _addAttachmentClass(t) {
       this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
     }
     _getContent() {
       return this._element.getAttribute("data-bs-content") || this._config.content
     }
     _cleanTipClass() {
       const t = this.getTipElement(),
         e = t.getAttribute("class").match(Ht);
       null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
     }
     static jQueryInterface(t) {
       return this.each((function() {
         const e = Wt.getOrCreateInstance(this, t);
         if ("string" == typeof t) {
           if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
           e[t]()
         }
       }))
     }
   }
   y(Wt);
   const qt = {
       offset: 10,
       method: "auto",
       target: ""
     },
     zt = {
       offset: "number",
       method: "string",
       target: "(string|element)"
     };
   class Ft extends q {
     constructor(t, e) {
       super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, B.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
     }
     static get Default() {
       return qt
     }
     static get NAME() {
       return "scrollspy"
     }
     refresh() {
       const t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
         e = "auto" === this._config.method ? t : this._config.method,
         s = "position" === e ? this._getScrollTop() : 0;
       this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), i.find(this._selector).map(t => {
         const n = r(t),
           o = n ? i.findOne(n) : null;
         if (o) {
           const t = o.getBoundingClientRect();
           if (t.width || t.height) return [V[e](o).top + s, n]
         }
         return null
       }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
         this._offsets.push(t[0]), this._targets.push(t[1])
       })
     }
     dispose() {
       B.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
     }
     _getConfig(t) {
       if ("string" != typeof(t = {
           ...qt,
           ...V.getDataAttributes(this._element),
           ..."object" == typeof t && t ? t : {}
         }).target && c(t.target)) {
         let {
           id: e
         } = t.target;
         e || (e = n("scrollspy"), t.target.id = e), t.target = "#" + e
       }
       return d("scrollspy", t, zt), t
     }
     _getScrollTop() {
       return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
     }
     _getScrollHeight() {
       return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
     }
     _getOffsetHeight() {
       return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
     }
     _process() {
       const t = this._getScrollTop() + this._config.offset,
         e = this._getScrollHeight(),
         s = this._config.offset + e - this._getOffsetHeight();
       if (this._scrollHeight !== e && this.refresh(), t >= s) {
         const t = this._targets[this._targets.length - 1];
         this._activeTarget !== t && this._activate(t)
       } else {
         if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
         for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
       }
     }
     _activate(t) {
       this._activeTarget = t, this._clear();
       const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
         s = i.findOne(e.join(","));
       s.classList.contains("dropdown-item") ? (i.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"), s.classList.add("active")) : (s.classList.add("active"), i.parents(s, ".nav, .list-group").forEach(t => {
         i.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), i.prev(t, ".nav-item").forEach(t => {
           i.children(t, ".nav-link").forEach(t => t.classList.add("active"))
         })
       })), B.trigger(this._scrollElement, "activate.bs.scrollspy", {
         relatedTarget: t
       })
     }
     _clear() {
       i.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
     }
     static jQueryInterface(t) {
       return this.each((function() {
         const e = Ft.getOrCreateInstance(this, t);
         if ("string" == typeof t) {
           if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
           e[t]()
         }
       }))
     }
   }
   B.on(window, "load.bs.scrollspy.data-api", () => {
     i.find('[data-bs-spy="scroll"]').forEach(t => new Ft(t))
   }), y(Ft);
   class Ut extends q {
     static get NAME() {
       return "tab"
     }
     show() {
       if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
       let t;
       const e = a(this._element),
         s = this._element.closest(".nav, .list-group");
       if (s) {
         const e = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";
         t = i.find(e, s), t = t[t.length - 1]
       }
       const n = t ? B.trigger(t, "hide.bs.tab", {
         relatedTarget: this._element
       }) : null;
       if (B.trigger(this._element, "show.bs.tab", {
           relatedTarget: t
         }).defaultPrevented || null !== n && n.defaultPrevented) return;
       this._activate(this._element, s);
       const o = () => {
         B.trigger(t, "hidden.bs.tab", {
           relatedTarget: this._element
         }), B.trigger(this._element, "shown.bs.tab", {
           relatedTarget: t
         })
       };
       e ? this._activate(e, e.parentNode, o) : o()
     }
     _activate(t, e, s) {
       const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.children(e, ".active") : i.find(":scope > li > .active", e))[0],
         o = s && n && n.classList.contains("fade"),
         r = () => this._transitionComplete(t, n, s);
       n && o ? (n.classList.remove("show"), this._queueCallback(r, t, !0)) : r()
     }
     _transitionComplete(t, e, s) {
       if (e) {
         e.classList.remove("active");
         const t = i.findOne(":scope > .dropdown-menu .active", e.parentNode);
         t && t.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
       }
       t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m(t), t.classList.contains("fade") && t.classList.add("show");
       let n = t.parentNode;
       if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
         const e = t.closest(".dropdown");
         e && i.find(".dropdown-toggle", e).forEach(t => t.classList.add("active")), t.setAttribute("aria-expanded", !0)
       }
       s && s()
     }
     static jQueryInterface(t) {
       return this.each((function() {
         const e = Ut.getOrCreateInstance(this);
         if ("string" == typeof t) {
           if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
           e[t]()
         }
       }))
     }
   }
   B.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
     ["A", "AREA"].includes(this.tagName) && t.preventDefault(), g(this) || Ut.getOrCreateInstance(this).show()
   })), y(Ut);
   const Kt = {
       animation: "boolean",
       autohide: "boolean",
       delay: "number"
     },
     Vt = {
       animation: !0,
       autohide: !0,
       delay: 5e3
     };
   class Qt extends q {
     constructor(t, e) {
       super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
     }
     static get DefaultType() {
       return Kt
     }
     static get Default() {
       return Vt
     }
     static get NAME() {
       return "toast"
     }
     show() {
       B.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), m(this._element), this._element.classList.add("showing"), this._queueCallback(() => {
         this._element.classList.remove("showing"), this._element.classList.add("show"), B.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
       }, this._element, this._config.animation))
     }
     hide() {
       this._element.classList.contains("show") && (B.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => {
         this._element.classList.add("hide"), B.trigger(this._element, "hidden.bs.toast")
       }, this._element, this._config.animation)))
     }
     dispose() {
       this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose()
     }
     _getConfig(t) {
       return t = {
         ...Vt,
         ...V.getDataAttributes(this._element),
         ..."object" == typeof t && t ? t : {}
       }, d("toast", t, this.constructor.DefaultType), t
     }
     _maybeScheduleHide() {
       this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
         this.hide()
       }, this._config.delay)))
     }
     _onInteraction(t, e) {
       switch (t.type) {
         case "mouseover":
         case "mouseout":
           this._hasMouseInteraction = e;
           break;
         case "focusin":
         case "focusout":
           this._hasKeyboardInteraction = e
       }
       if (e) return void this._clearTimeout();
       const s = t.relatedTarget;
       this._element === s || this._element.contains(s) || this._maybeScheduleHide()
     }
     _setListeners() {
       B.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), B.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), B.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), B.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), B.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
     }
     _clearTimeout() {
       clearTimeout(this._timeout), this._timeout = null
     }
     static jQueryInterface(t) {
       return this.each((function() {
         const e = Qt.getOrCreateInstance(this, t);
         if ("string" == typeof t) {
           if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
           e[t](this)
         }
       }))
     }
   }
   return y(Qt), {
     Alert: z,
     Button: F,
     Carousel: et,
     Collapse: nt,
     Dropdown: pt,
     Modal: wt,
     Offcanvas: Tt,
     Popover: Wt,
     ScrollSpy: Ft,
     Tab: Ut,
     Toast: Qt,
     Tooltip: jt
   }
 }));

 /* Chocolat-1.0.4 */
 /* jQuery plugin for lightbox */
 ! function() {
   "use strict";
   let e = void 0;

   function t(e, t) {
     return new Promise(s => {
       const i = () => {
         t.removeEventListener("transitionend", i), s()
       };
       t.addEventListener("transitionend", i);
       const l = t.getAttribute("class"),
         n = t.getAttribute("style");
       e(), l === t.getAttribute("class") && n === t.getAttribute("style") && i(), 0 === parseFloat(getComputedStyle(t).transitionDuration) && i()
     })
   }

   function s({
     src: e,
     srcset: t,
     sizes: s
   }) {
     const i = new Image;
     return i.src = e, t && (i.srcset = t), s && (i.sizes = s), "decode" in i ? new Promise((e, t) => {
       i.decode().then(() => {
         e(i)
       }).catch(() => {
         t(i)
       })
     }) : new Promise((e, t) => {
       i.onload = e(i), i.onerror = t(i)
     })
   }

   function i(e) {
     let t, s;
     const {
       imgHeight: i,
       imgWidth: l,
       containerHeight: n,
       containerWidth: a,
       canvasWidth: o,
       canvasHeight: c,
       imageSize: h
     } = e, r = i / l;
     return "cover" == h ? r < n / a ? s = (t = n) / r : t = (s = a) * r : "native" == h ? (t = i, s = l) : (r > c / o ? s = (t = c) / r : t = (s = o) * r, "scale-down" === h && (s >= l || t >= i) && (s = l, t = i)), {
       height: t,
       width: s
     }
   }

   function l(e) {
     return e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : Promise.reject()
   }

   function n() {
     return document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : Promise.reject()
   }
   const a = {
     container: document.body,
     className: void 0,
     imageSize: "scale-down",
     fullScreen: !1,
     loop: !1,
     linkImages: !0,
     setIndex: 0,
     firstImageIndex: 0,
     lastImageIndex: !1,
     currentImageIndex: void 0,
     allowZoom: !0,
     closeOnBackgroundClick: !0,
     setTitle: function() {
       return ""
     },
     description: function() {
       return this.images[this.settings.currentImageIndex].title
     },
     pagination: function() {
       const e = this.settings.lastImageIndex + 1;
       return this.settings.currentImageIndex + 1 + "/" + e
     },
     afterInitialize() {},
     afterMarkup() {},
     afterImageLoad() {},
     afterClose() {},
     zoomedPaddingX: function(e, t) {
       return 0
     },
     zoomedPaddingY: function(e, t) {
       return 0
     }
   };
   class o {
     constructor(e, t) {
       this.settings = t, this.elems = {}, this.images = [], this.events = [], this.state = {
         fullScreenOpen: !1,
         initialZoomState: null,
         initialized: !1,
         timer: !1,
         visible: !1
       }, this._cssClasses = ["chocolat-open", "chocolat-in-container", "chocolat-cover", "chocolat-zoomable", "chocolat-zoomed", "chocolat-zooming-in", "chocolat-zooming-out"], NodeList.prototype.isPrototypeOf(e) || HTMLCollection.prototype.isPrototypeOf(e) ? e.forEach((e, t) => {
         this.images.push({
           title: e.getAttribute("title"),
           src: e.getAttribute("href"),
           srcset: e.getAttribute("data-srcset"),
           sizes: e.getAttribute("data-sizes")
         }), this.off(e, "click.chocolat"), this.on(e, "click.chocolat", e => {
           this.init(t), e.preventDefault()
         })
       }) : this.images = e, this.settings.container instanceof Element || this.settings.container instanceof HTMLElement ? this.elems.container = this.settings.container : this.elems.container = document.body, this.api = {
         open: e => (e = parseInt(e) || 0, this.init(e)),
         close: () => this.close(),
         next: () => this.change(1),
         prev: () => this.change(-1),
         goto: e => this.open(e),
         current: () => this.settings.currentImageIndex,
         position: () => this.position(this.elems.img),
         destroy: () => this.destroy(),
         set: (e, t) => (this.settings[e] = t, t),
         get: e => this.settings[e],
         getElem: e => this.elems[e]
       }
     }
     init(e) {
       return this.state.initialized || (this.markup(), this.attachListeners(), this.settings.lastImageIndex = this.images.length - 1, this.state.initialized = !0), this.settings.afterInitialize.call(this), this.load(e)
     }
     load(e) {
       if (this.state.visible || (this.state.visible = !0, setTimeout(() => {
           this.elems.overlay.classList.add("chocolat-visible"), this.elems.wrapper.classList.add("chocolat-visible")
         }, 0), this.elems.container.classList.add("chocolat-open")), this.settings.fullScreen && l(this.elems.wrapper), this.settings.currentImageIndex === e) return Promise.resolve();
       let i, n, a = setTimeout(() => {
           this.elems.loader.classList.add("chocolat-visible")
         }, 1e3),
         o = setTimeout(() => {
           o = void 0, i = t(() => {
             this.elems.imageCanvas.classList.remove("chocolat-visible")
           }, this.elems.imageCanvas)
         }, 80);
       return s(this.images[e]).then(e => (n = e, o ? (clearTimeout(o), Promise.resolve()) : i)).then(() => {
         const t = e + 1;
         return null != this.images[t] && s(this.images[t]), this.settings.currentImageIndex = e, this.elems.description.textContent = this.settings.description.call(this), this.elems.pagination.textContent = this.settings.pagination.call(this), this.arrows(), this.position(n).then(() => (this.elems.loader.classList.remove("chocolat-visible"), clearTimeout(a), this.appear(n)))
       }).then(() => {
         this.elems.container.classList.toggle("chocolat-zoomable", this.zoomable(n, this.elems.wrapper)), this.settings.afterImageLoad.call(this)
       })
     }
     position({
       naturalHeight: e,
       naturalWidth: s
     }) {
       const l = {
           imgHeight: e,
           imgWidth: s,
           containerHeight: this.elems.container.clientHeight,
           containerWidth: this.elems.container.clientWidth,
           canvasWidth: this.elems.imageCanvas.clientWidth,
           canvasHeight: this.elems.imageCanvas.clientHeight,
           imageSize: this.settings.imageSize
         },
         {
           width: n,
           height: a
         } = i(l);
       return t(() => {
         Object.assign(this.elems.imageWrapper.style, {
           width: n + "px",
           height: a + "px"
         })
       }, this.elems.imageWrapper)
     }
     appear(e) {
       return this.elems.imageWrapper.removeChild(this.elems.img), this.elems.img = e, this.elems.img.setAttribute("class", "chocolat-img"), this.elems.imageWrapper.appendChild(this.elems.img), t(() => {
         this.elems.imageCanvas.classList.add("chocolat-visible")
       }, this.elems.imageCanvas)
     }
     change(e) {
       if (!this.state.visible) return;
       if (!this.settings.linkImages) return;
       this.zoomOut();
       const t = this.settings.currentImageIndex + parseInt(e);
       if (t > this.settings.lastImageIndex) {
         if (this.settings.loop) return this.load(this.settings.firstImageIndex)
       } else {
         if (!(t < this.settings.firstImageIndex)) return this.load(t);
         if (this.settings.loop) return this.load(this.settings.lastImageIndex)
       }
     }
     arrows() {
       this.settings.loop ? (this.elems.left.classList.add("active"), this.elems.right.classList.add("active")) : this.settings.linkImages ? (this.elems.right.classList.toggle("active", this.settings.currentImageIndex !== this.settings.lastImageIndex), this.elems.left.classList.toggle("active", this.settings.currentImageIndex !== this.settings.firstImageIndex)) : (this.elems.left.classList.remove("active"), this.elems.right.classList.remove("active"))
     }
     close() {
       if (this.state.fullScreenOpen) return void n();
       this.state.visible = !1;
       const e = t(() => {
           this.elems.overlay.classList.remove("chocolat-visible")
         }, this.elems.overlay),
         s = t(() => {
           this.elems.wrapper.classList.remove("chocolat-visible")
         }, this.elems.wrapper);
       return Promise.all([e, s]).then(() => {
         this.elems.container.classList.remove("chocolat-open"), this.settings.afterClose.call(this)
       })
     }
     destroy() {
       for (let e = this.events.length - 1; e >= 0; e--) {
         const {
           element: t,
           eventName: s
         } = this.events[e];
         this.off(t, s)
       }
       this.state.initialized && (this.state.fullScreenOpen && n(), this.settings.currentImageIndex = void 0, this.state.visible = !1, this.state.initialized = !1, this.elems.container.classList.remove(...this._cssClasses), this.elems.wrapper.parentNode.removeChild(this.elems.wrapper))
     }
     markup() {
       this.elems.container.classList.add("chocolat-open", this.settings.className), "cover" == this.settings.imageSize && this.elems.container.classList.add("chocolat-cover"), this.elems.container !== document.body && this.elems.container.classList.add("chocolat-in-container"), this.elems.wrapper = document.createElement("div"), this.elems.wrapper.setAttribute("id", "chocolat-content-" + this.settings.setIndex), this.elems.wrapper.setAttribute("class", "chocolat-wrapper"), this.elems.container.appendChild(this.elems.wrapper), this.elems.overlay = document.createElement("div"), this.elems.overlay.setAttribute("class", "chocolat-overlay"), this.elems.wrapper.appendChild(this.elems.overlay), this.elems.loader = document.createElement("div"), this.elems.loader.setAttribute("class", "chocolat-loader"), this.elems.wrapper.appendChild(this.elems.loader), this.elems.layout = document.createElement("div"), this.elems.layout.setAttribute("class", "chocolat-layout"), this.elems.wrapper.appendChild(this.elems.layout), this.elems.top = document.createElement("div"), this.elems.top.setAttribute("class", "chocolat-top"), this.elems.layout.appendChild(this.elems.top), this.elems.center = document.createElement("div"), this.elems.center.setAttribute("class", "chocolat-center"), this.elems.layout.appendChild(this.elems.center), this.elems.left = document.createElement("div"), this.elems.left.setAttribute("class", "chocolat-left"), this.elems.center.appendChild(this.elems.left), this.elems.imageCanvas = document.createElement("div"), this.elems.imageCanvas.setAttribute("class", "chocolat-image-canvas"), this.elems.center.appendChild(this.elems.imageCanvas), this.elems.imageWrapper = document.createElement("div"), this.elems.imageWrapper.setAttribute("class", "chocolat-image-wrapper"), this.elems.imageCanvas.appendChild(this.elems.imageWrapper), this.elems.img = document.createElement("img"), this.elems.img.setAttribute("class", "chocolat-img"), this.elems.imageWrapper.appendChild(this.elems.img), this.elems.right = document.createElement("div"), this.elems.right.setAttribute("class", "chocolat-right"), this.elems.center.appendChild(this.elems.right), this.elems.bottom = document.createElement("div"), this.elems.bottom.setAttribute("class", "chocolat-bottom"), this.elems.layout.appendChild(this.elems.bottom), this.elems.close = document.createElement("span"), this.elems.close.setAttribute("class", "chocolat-close"), this.elems.top.appendChild(this.elems.close), this.elems.description = document.createElement("span"), this.elems.description.setAttribute("class", "chocolat-description"), this.elems.bottom.appendChild(this.elems.description), this.elems.pagination = document.createElement("span"), this.elems.pagination.setAttribute("class", "chocolat-pagination"), this.elems.bottom.appendChild(this.elems.pagination), this.elems.setTitle = document.createElement("span"), this.elems.setTitle.setAttribute("class", "chocolat-set-title"), this.elems.setTitle.textContent = this.settings.setTitle(), this.elems.bottom.appendChild(this.elems.setTitle), this.elems.fullscreen = document.createElement("span"), this.elems.fullscreen.setAttribute("class", "chocolat-fullscreen"), this.elems.bottom.appendChild(this.elems.fullscreen), this.settings.afterMarkup.call(this)
     }
     attachListeners() {
       this.off(document, "keydown.chocolat"), this.on(document, "keydown.chocolat", e => {
         this.state.initialized && (37 == e.keyCode ? this.change(-1) : 39 == e.keyCode ? this.change(1) : 27 == e.keyCode && this.close())
       });
       const t = this.elems.wrapper.querySelector(".chocolat-right");
       this.off(t, "click.chocolat"), this.on(t, "click.chocolat", () => {
         this.change(1)
       });
       const s = this.elems.wrapper.querySelector(".chocolat-left");
       this.off(s, "click.chocolat"), this.on(s, "click.chocolat", () => {
         this.change(-1)
       }), this.off(this.elems.close, "click.chocolat"), this.on(this.elems.close, "click.chocolat", this.close.bind(this)), this.off(this.elems.fullscreen, "click.chocolat"), this.on(this.elems.fullscreen, "click.chocolat", () => {
         this.state.fullScreenOpen ? n() : l(this.elems.wrapper)
       }), this.off(document, "fullscreenchange.chocolat"), this.on(document, "fullscreenchange.chocolat", () => {
         document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement ? this.state.fullScreenOpen = !0 : this.state.fullScreenOpen = !1
       }), this.off(document, "webkitfullscreenchange.chocolat"), this.on(document, "webkitfullscreenchange.chocolat", () => {
         document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement ? this.state.fullScreenOpen = !0 : this.state.fullScreenOpen = !1
       }), this.settings.closeOnBackgroundClick && (this.off(this.elems.overlay, "click.chocolat"), this.on(this.elems.overlay, "click.chocolat", this.close.bind(this))), this.off(this.elems.wrapper, "click.chocolat"), this.on(this.elems.wrapper, "click.chocolat", () => {
         null !== this.state.initialZoomState && this.state.visible && (this.elems.container.classList.add("chocolat-zooming-out"), this.zoomOut().then(() => {
           this.elems.container.classList.remove("chocolat-zoomed"), this.elems.container.classList.remove("chocolat-zooming-out")
         }))
       }), this.off(this.elems.imageWrapper, "click.chocolat"), this.on(this.elems.imageWrapper, "click.chocolat", e => {
         null === this.state.initialZoomState && this.elems.container.classList.contains("chocolat-zoomable") && (e.stopPropagation(), this.elems.container.classList.add("chocolat-zooming-in"), this.zoomIn(e).then(() => {
           this.elems.container.classList.add("chocolat-zoomed"), this.elems.container.classList.remove("chocolat-zooming-in")
         }))
       }), this.on(this.elems.wrapper, "mousemove.chocolat", e => {
         if (null === this.state.initialZoomState || !this.state.visible) return;
         const t = this.elems.wrapper.getBoundingClientRect(),
           s = t.top + window.scrollY,
           i = t.left + window.scrollX,
           l = this.elems.wrapper.clientHeight,
           n = this.elems.wrapper.clientWidth,
           a = this.elems.img.width,
           o = this.elems.img.height,
           c = [e.pageX - n / 2 - i, e.pageY - l / 2 - s];
         let h = 0;
         if (a > n) {
           const e = this.settings.zoomedPaddingX(a, n);
           h = c[0] / (n / 2), h *= (a - n) / 2 + e
         }
         let r = 0;
         if (o > l) {
           const e = this.settings.zoomedPaddingY(o, l);
           r = c[1] / (l / 2), r *= (o - l) / 2 + e
         }
         this.elems.img.style.marginLeft = -h + "px", this.elems.img.style.marginTop = -r + "px"
       }), this.on(window, "resize.chocolat", t => {
         this.state.initialized && this.state.visible && function(t, s) {
           clearTimeout(e), e = setTimeout(function() {
             s()
           }, t)
         }(50, () => {
           const e = {
               imgHeight: this.elems.img.naturalHeight,
               imgWidth: this.elems.img.naturalWidth,
               containerHeight: this.elems.wrapper.clientHeight,
               containerWidth: this.elems.wrapper.clientWidth,
               canvasWidth: this.elems.imageCanvas.clientWidth,
               canvasHeight: this.elems.imageCanvas.clientHeight,
               imageSize: this.settings.imageSize
             },
             {
               width: t,
               height: s
             } = i(e);
           this.position(this.elems.img).then(() => {
             this.elems.container.classList.toggle("chocolat-zoomable", this.zoomable(this.elems.img, this.elems.wrapper))
           })
         })
       })
     }
     zoomable(e, t) {
       const s = t.clientWidth,
         i = t.clientHeight,
         l = !(!this.settings.allowZoom || !(e.naturalWidth > s || e.naturalHeight > i)),
         n = e.clientWidth > e.naturalWidth || e.clientHeight > e.naturalHeight;
       return l && !n
     }
     zoomIn(e) {
       return this.state.initialZoomState = this.settings.imageSize, this.settings.imageSize = "native", this.position(this.elems.img)
     }
     zoomOut(e) {
       return this.settings.imageSize = this.state.initialZoomState || this.settings.imageSize, this.state.initialZoomState = null, this.elems.img.style.margin = 0, this.position(this.elems.img)
     }
     on(e, t, s) {
       const i = this.events.push({
         element: e,
         eventName: t,
         cb: s
       });
       e.addEventListener(t.split(".")[0], this.events[i - 1].cb)
     }
     off(e, t) {
       const s = this.events.findIndex(s => s.element === e && s.eventName === t);
       this.events[s] && (e.removeEventListener(t.split(".")[0], this.events[s].cb), this.events.splice(s, 1))
     }
   }
   const c = [];
   window.Chocolat = function(e, t) {
     const s = Object.assign({}, a, {
         images: []
       }, t, {
         setIndex: c.length
       }),
       i = new o(e, s);
     return c.push(i), i
   }
 }();

 /*
  anime.js
  2017 Julian Garnier
  Released under the MIT license
 */
 var $jscomp$this = this;
 (function(v, p) {
   "function" === typeof define && define.amd ? define([], p) : "object" === typeof module && module.exports ? module.exports = p() : v.anime = p()
 })(this, function() {
   function v(a) {
     if (!g.col(a)) try {
       return document.querySelectorAll(a)
     } catch (b) {}
   }

   function p(a) {
     return a.reduce(function(a, d) {
       return a.concat(g.arr(d) ? p(d) : d)
     }, [])
   }

   function w(a) {
     if (g.arr(a)) return a;
     g.str(a) && (a = v(a) || a);
     return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a]
   }

   function F(a, b) {
     return a.some(function(a) {
       return a === b
     })
   }

   function A(a) {
     var b = {},
       d;
     for (d in a) b[d] = a[d];
     return b
   }

   function G(a, b) {
     var d = A(a),
       c;
     for (c in a) d[c] = b.hasOwnProperty(c) ? b[c] : a[c];
     return d
   }

   function B(a, b) {
     var d = A(a),
       c;
     for (c in b) d[c] = g.und(a[c]) ? b[c] : a[c];
     return d
   }

   function S(a) {
     a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(a, b, d, h) {
       return b + b + d + d + h + h
     });
     var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
     a = parseInt(b[1], 16);
     var d = parseInt(b[2], 16),
       b = parseInt(b[3], 16);
     return "rgb(" + a + "," + d + "," + b + ")"
   }

   function T(a) {
     function b(a, b, c) {
       0 >
         c && (c += 1);
       1 < c && --c;
       return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
     }
     var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);
     a = parseInt(d[1]) / 360;
     var c = parseInt(d[2]) / 100,
       d = parseInt(d[3]) / 100;
     if (0 == c) c = d = a = d;
     else {
       var e = .5 > d ? d * (1 + c) : d + c - d * c,
         l = 2 * d - e,
         c = b(l, e, a + 1 / 3),
         d = b(l, e, a);
       a = b(l, e, a - 1 / 3)
     }
     return "rgb(" + 255 * c + "," + 255 * d + "," + 255 * a + ")"
   }

   function x(a) {
     if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a)) return a[2]
   }

   function U(a) {
     if (-1 < a.indexOf("translate")) return "px";
     if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg"
   }

   function H(a, b) {
     return g.fnc(a) ? a(b.target, b.id, b.total) : a
   }

   function C(a, b) {
     if (b in a.style) return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
   }

   function I(a, b) {
     if (g.dom(a) && F(V, b)) return "transform";
     if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b])) return "attribute";
     if (g.dom(a) && "transform" !== b && C(a, b)) return "css";
     if (null != a[b]) return "object"
   }

   function W(a, b) {
     var d = U(b),
       d = -1 < b.indexOf("scale") ?
       1 : 0 + d;
     a = a.style.transform;
     if (!a) return d;
     for (var c = [], e = [], l = [], h = /(\w+)\((.+?)\)/g; c = h.exec(a);) e.push(c[1]), l.push(c[2]);
     a = l.filter(function(a, c) {
       return e[c] === b
     });
     return a.length ? a[0] : d
   }

   function J(a, b) {
     switch (I(a, b)) {
       case "transform":
         return W(a, b);
       case "css":
         return C(a, b);
       case "attribute":
         return a.getAttribute(b)
     }
     return a[b] || 0
   }

   function K(a, b) {
     var d = /^(\*=|\+=|-=)/.exec(a);
     if (!d) return a;
     b = parseFloat(b);
     a = parseFloat(a.replace(d[0], ""));
     switch (d[0][0]) {
       case "+":
         return b + a;
       case "-":
         return b - a;
       case "*":
         return b *
           a
     }
   }

   function D(a) {
     return g.obj(a) && a.hasOwnProperty("totalLength")
   }

   function X(a, b) {
     function d(c) {
       c = void 0 === c ? 0 : c;
       return a.el.getPointAtLength(1 <= b + c ? b + c : 0)
     }
     var c = d(),
       e = d(-1),
       l = d(1);
     switch (a.property) {
       case "x":
         return c.x;
       case "y":
         return c.y;
       case "angle":
         return 180 * Math.atan2(l.y - e.y, l.x - e.x) / Math.PI
     }
   }

   function L(a, b) {
     var d = /-?\d*\.?\d+/g;
     a = D(a) ? a.totalLength : a;
     if (g.col(a)) b = g.rgb(a) ? a : g.hex(a) ? S(a) : g.hsl(a) ? T(a) : void 0;
     else {
       var c = x(a);
       a = c ? a.substr(0, a.length - c.length) : a;
       b = b ? a + b : a
     }
     b += "";
     return {
       original: b,
       numbers: b.match(d) ? b.match(d).map(Number) : [0],
       strings: b.split(d)
     }
   }

   function Y(a, b) {
     return b.reduce(function(b, c, e) {
       return b + a[e - 1] + c
     })
   }

   function M(a) {
     return (a ? p(g.arr(a) ? a.map(w) : w(a)) : []).filter(function(a, d, c) {
       return c.indexOf(a) === d
     })
   }

   function Z(a) {
     var b = M(a);
     return b.map(function(a, c) {
       return {
         target: a,
         id: c,
         total: b.length
       }
     })
   }

   function aa(a, b) {
     var d = A(b);
     if (g.arr(a)) {
       var c = a.length;
       2 !== c || g.obj(a[0]) ? g.fnc(b.duration) || (d.duration = b.duration / c) : a = {
         value: a
       }
     }
     return w(a).map(function(a, c) {
       c = c ? 0 : b.delay;
       a = g.obj(a) && !D(a) ? a : {
         value: a
       };
       g.und(a.delay) && (a.delay = c);
       return a
     }).map(function(a) {
       return B(a, d)
     })
   }

   function ba(a, b) {
     var d = {},
       c;
     for (c in a) {
       var e = H(a[c], b);
       g.arr(e) && (e = e.map(function(a) {
         return H(a, b)
       }), 1 === e.length && (e = e[0]));
       d[c] = e
     }
     d.duration = parseFloat(d.duration);
     d.delay = parseFloat(d.delay);
     return d
   }

   function ca(a) {
     return g.arr(a) ? y.apply(this, a) : N[a]
   }

   function da(a, b) {
     var d;
     return a.tweens.map(function(c) {
       c = ba(c, b);
       var e = c.value,
         l = J(b.target, a.name),
         h = d ? d.to.original : l,
         h = g.arr(e) ? e[0] : h,
         m = K(g.arr(e) ?
           e[1] : e, h),
         l = x(m) || x(h) || x(l);
       c.isPath = D(e);
       c.from = L(h, l);
       c.to = L(m, l);
       c.start = d ? d.end : a.offset;
       c.end = c.start + c.delay + c.duration;
       c.easing = ca(c.easing);
       c.elasticity = (1E3 - Math.min(Math.max(c.elasticity, 1), 999)) / 1E3;
       g.col(c.from.original) && (c.round = 1);
       return d = c
     })
   }

   function ea(a, b) {
     return p(a.map(function(a) {
       return b.map(function(b) {
         var c = I(a.target, b.name);
         if (c) {
           var d = da(b, a);
           b = {
             type: c,
             property: b.name,
             animatable: a,
             tweens: d,
             duration: d[d.length - 1].end,
             delay: d[0].delay
           }
         } else b = void 0;
         return b
       })
     })).filter(function(a) {
       return !g.und(a)
     })
   }

   function O(a, b, d) {
     var c = "delay" === a ? Math.min : Math.max;
     return b.length ? c.apply(Math, b.map(function(b) {
       return b[a]
     })) : d[a]
   }

   function fa(a) {
     var b = G(ga, a),
       d = G(ha, a),
       c = Z(a.targets),
       e = [],
       g = B(b, d),
       h;
     for (h in a) g.hasOwnProperty(h) || "targets" === h || e.push({
       name: h,
       offset: g.offset,
       tweens: aa(a[h], d)
     });
     a = ea(c, e);
     return B(b, {
       children: [],
       animatables: c,
       animations: a,
       duration: O("duration", a, d),
       delay: O("delay", a, d)
     })
   }

   function n(a) {
     function b() {
       return window.Promise && new Promise(function(a) {
         return Q = a
       })
     }

     function d(a) {
       return f.reversed ?
         f.duration - a : a
     }

     function c(a) {
       for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length;) {
         var g = d[b],
           h = g.animatable,
           m = g.tweens;
         e.tween = m.filter(function(b) {
           return a < b.end
         })[0] || m[m.length - 1];
         e.isPath$1 = e.tween.isPath;
         e.round = e.tween.round;
         e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity);
         m = Y(e.tween.to.numbers.map(function(a) {
           return function(b, c) {
             c = a.isPath$1 ? 0 : a.tween.from.numbers[c];
             b = c + a.eased * (b - c);
             a.isPath$1 && (b = X(a.tween.value,
               b));
             a.round && (b = Math.round(b * a.round) / a.round);
             return b
           }
         }(e)), e.tween.to.strings);
         ia[g.type](h.target, g.property, m, c, h.id);
         g.currentValue = m;
         b++;
         e = {
           isPath$1: e.isPath$1,
           tween: e.tween,
           eased: e.eased,
           round: e.round
         }
       }
       if (c)
         for (var k in c) E || (E = C(document.body, "transform") ? "transform" : "-webkit-transform"), f.animatables[k].target.style[E] = c[k].join(" ");
       f.currentTime = a;
       f.progress = a / f.duration * 100
     }

     function e(a) {
       if (f[a]) f[a](f)
     }

     function g() {
       f.remaining && !0 !== f.remaining && f.remaining--
     }

     function h(a) {
       var h = f.duration,
         l = f.offset,
         n = f.delay,
         P = f.currentTime,
         q = f.reversed,
         r = d(a),
         r = Math.min(Math.max(r, 0), h);
       if (f.children) {
         var p = f.children;
         if (r >= f.currentTime)
           for (var u = 0; u < p.length; u++) p[u].seek(r);
         else
           for (u = p.length; u--;) p[u].seek(r)
       }
       r > l && r < h ? (c(r), !f.began && r >= n && (f.began = !0, e("begin")), e("run")) : (r <= l && 0 !== P && (c(0), q && g()), r >= h && P !== h && (c(h), q || g()));
       a >= h && (f.remaining ? (t = m, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), "Promise" in window && (Q(), R = b()), f.completed || (f.completed = !0, e("complete"))),
         k = 0);
       e("update")
     }
     a = void 0 === a ? {} : a;
     var m, t, k = 0,
       Q = null,
       R = b(),
       f = fa(a);
     f.reset = function() {
       var a = f.direction,
         b = f.loop;
       f.currentTime = 0;
       f.progress = 0;
       f.paused = !0;
       f.began = !1;
       f.completed = !1;
       f.reversed = "reverse" === a;
       f.remaining = "alternate" === a && 1 === b ? 2 : b;
       for (a = f.children.length; a--;) b = f.children[a], b.seek(b.offset), b.reset()
     };
     f.tick = function(a) {
       m = a;
       t || (t = m);
       h((k + m - t) * n.speed)
     };
     f.seek = function(a) {
       h(d(a))
     };
     f.pause = function() {
       var a = q.indexOf(f); - 1 < a && q.splice(a, 1);
       f.paused = !0
     };
     f.play = function() {
       f.paused && (f.paused = !1, t = 0, k = d(f.currentTime), q.push(f), z || ja())
     };
     f.reverse = function() {
       f.reversed = !f.reversed;
       t = 0;
       k = d(f.currentTime)
     };
     f.restart = function() {
       f.pause();
       f.reset();
       f.play()
     };
     f.finished = R;
     f.reset();
     f.autoplay && f.play();
     return f
   }
   var ga = {
       update: void 0,
       begin: void 0,
       run: void 0,
       complete: void 0,
       loop: 1,
       direction: "normal",
       autoplay: !0,
       offset: 0
     },
     ha = {
       duration: 1E3,
       delay: 0,
       easing: "easeOutElastic",
       elasticity: 500,
       round: 0
     },
     V = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
     E, g = {
       arr: function(a) {
         return Array.isArray(a)
       },
       obj: function(a) {
         return -1 < Object.prototype.toString.call(a).indexOf("Object")
       },
       svg: function(a) {
         return a instanceof SVGElement
       },
       dom: function(a) {
         return a.nodeType || g.svg(a)
       },
       str: function(a) {
         return "string" === typeof a
       },
       fnc: function(a) {
         return "function" === typeof a
       },
       und: function(a) {
         return "undefined" === typeof a
       },
       hex: function(a) {
         return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
       },
       rgb: function(a) {
         return /^rgb/.test(a)
       },
       hsl: function(a) {
         return /^hsl/.test(a)
       },
       col: function(a) {
         return g.hex(a) ||
           g.rgb(a) || g.hsl(a)
       }
     },
     y = function() {
       function a(a, d, c) {
         return (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a
       }
       return function(b, d, c, e) {
         if (0 <= b && 1 >= b && 0 <= c && 1 >= c) {
           var g = new Float32Array(11);
           if (b !== d || c !== e)
             for (var h = 0; 11 > h; ++h) g[h] = a(.1 * h, b, c);
           return function(h) {
             if (b === d && c === e) return h;
             if (0 === h) return 0;
             if (1 === h) return 1;
             for (var m = 0, k = 1; 10 !== k && g[k] <= h; ++k) m += .1;
             --k;
             var k = m + (h - g[k]) / (g[k + 1] - g[k]) * .1,
               l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
             if (.001 <= l) {
               for (m = 0; 4 > m; ++m) {
                 l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
                 if (0 === l) break;
                 var n = a(k, b, c) - h,
                   k = k - n / l
               }
               h = k
             } else if (0 === l) h = k;
             else {
               var k = m,
                 m = m + .1,
                 f = 0;
               do n = k + (m - k) / 2, l = a(n, b, c) - h, 0 < l ? m = n : k = n; while (1e-7 < Math.abs(l) && 10 > ++f);
               h = n
             }
             return a(h, d, e)
           }
         }
       }
     }(),
     N = function() {
       function a(a, b) {
         return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b)
       }
       var b = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
         d = {
           In: [
             [.55, .085, .68, .53],
             [.55, .055, .675, .19],
             [.895, .03, .685, .22],
             [.755, .05, .855, .06],
             [.47, 0, .745, .715],
             [.95, .05, .795, .035],
             [.6, .04, .98,
               .335
             ],
             [.6, -.28, .735, .045], a
           ],
           Out: [
             [.25, .46, .45, .94],
             [.215, .61, .355, 1],
             [.165, .84, .44, 1],
             [.23, 1, .32, 1],
             [.39, .575, .565, 1],
             [.19, 1, .22, 1],
             [.075, .82, .165, 1],
             [.175, .885, .32, 1.275],
             function(b, c) {
               return 1 - a(1 - b, c)
             }
           ],
           InOut: [
             [.455, .03, .515, .955],
             [.645, .045, .355, 1],
             [.77, 0, .175, 1],
             [.86, 0, .07, 1],
             [.445, .05, .55, .95],
             [1, 0, 0, 1],
             [.785, .135, .15, .86],
             [.68, -.55, .265, 1.55],
             function(b, c) {
               return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2
             }
           ]
         },
         c = {
           linear: y(.25, .25, .75, .75)
         },
         e = {},
         l;
       for (l in d) e.type = l, d[e.type].forEach(function(a) {
         return function(d,
           e) {
           c["ease" + a.type + b[e]] = g.fnc(d) ? d : y.apply($jscomp$this, d)
         }
       }(e)), e = {
         type: e.type
       };
       return c
     }(),
     ia = {
       css: function(a, b, d) {
         return a.style[b] = d
       },
       attribute: function(a, b, d) {
         return a.setAttribute(b, d)
       },
       object: function(a, b, d) {
         return a[b] = d
       },
       transform: function(a, b, d, c, e) {
         c[e] || (c[e] = []);
         c[e].push(b + "(" + d + ")")
       }
     },
     q = [],
     z = 0,
     ja = function() {
       function a() {
         z = requestAnimationFrame(b)
       }

       function b(b) {
         var c = q.length;
         if (c) {
           for (var d = 0; d < c;) q[d] && q[d].tick(b), d++;
           a()
         } else cancelAnimationFrame(z), z = 0
       }
       return a
     }();
   n.version = "2.0.2";
   n.speed = 1;
   n.running = q;
   n.remove = function(a) {
     a = M(a);
     for (var b = q.length; b--;)
       for (var d = q[b], c = d.animations, e = c.length; e--;) F(a, c[e].animatable.target) && (c.splice(e, 1), c.length || d.pause())
   };
   n.getValue = J;
   n.path = function(a, b) {
     var d = g.str(a) ? v(a)[0] : a,
       c = b || 100;
     return function(a) {
       return {
         el: d,
         property: a,
         totalLength: d.getTotalLength() * (c / 100)
       }
     }
   };
   n.setDashoffset = function(a) {
     var b = a.getTotalLength();
     a.setAttribute("stroke-dasharray", b);
     return b
   };
   n.bezier = y;
   n.easings = N;
   n.timeline = function(a) {
     var b = n(a);
     b.pause();
     b.duration = 0;
     b.add = function(a) {
       b.children.forEach(function(a) {
         a.began = !0;
         a.completed = !0
       });
       w(a).forEach(function(a) {
         var c = b.duration,
           d = a.offset;
         a.autoplay = !1;
         a.offset = g.und(d) ? c : K(d, c);
         b.seek(a.offset);
         a = n(a);
         a.duration > c && (b.duration = a.duration);
         a.began = !0;
         b.children.push(a)
       });
       b.reset();
       b.seek(0);
       b.autoplay && b.restart();
       return b
     };
     return b
   };
   n.random = function(a, b) {
     return Math.floor(Math.random() * (b - a + 1)) + a
   };
   return n
 });

 /*!
  * Jarallax v2.0.2 (https://github.com/nk-o/jarallax)
  * Copyright 2022 nK <https://nkdev.info>
  * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
  */
 ! function(e, t) {
   "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).jarallax = t()
 }(this, (function() {
   "use strict";

   function e(e) {
     "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e, {
       capture: !0,
       once: !0,
       passive: !0
     })
   }
   let t;
   t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
   var i = t;
   const {
     navigator: o
   } = i, n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o.userAgent);
   let a, s;

   function l() {
     n ? (!a && document.body && (a = document.createElement("div"), a.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(a)), s = (a ? a.clientHeight : 0) || i.innerHeight || document.documentElement.clientHeight) : s = i.innerHeight || document.documentElement.clientHeight
   }
   l(), i.addEventListener("resize", l), i.addEventListener("orientationchange", l), i.addEventListener("load", l), e((() => {
     l()
   }));
   const r = [];

   function m() {
     r.length && (r.forEach(((e, t) => {
       const {
         instance: o,
         oldData: n
       } = e, a = o.$item.getBoundingClientRect(), l = {
         width: a.width,
         height: a.height,
         top: a.top,
         bottom: a.bottom,
         wndW: i.innerWidth,
         wndH: s
       }, m = !n || n.wndW !== l.wndW || n.wndH !== l.wndH || n.width !== l.width || n.height !== l.height, c = m || !n || n.top !== l.top || n.bottom !== l.bottom;
       r[t].oldData = l, m && o.onResize(), c && o.onScroll()
     })), i.requestAnimationFrame(m))
   }
   let c = 0;
   class p {
     constructor(e, t) {
       const i = this;
       i.instanceID = c, c += 1, i.$item = e, i.defaults = {
         type: "scroll",
         speed: .5,
         imgSrc: null,
         imgElement: ".jarallax-img",
         imgSize: "cover",
         imgPosition: "50% 50%",
         imgRepeat: "no-repeat",
         keepImg: !1,
         elementInViewport: null,
         zIndex: -100,
         disableParallax: !1,
         disableVideo: !1,
         videoSrc: null,
         videoStartTime: 0,
         videoEndTime: 0,
         videoVolume: 0,
         videoLoop: !0,
         videoPlayOnlyVisible: !0,
         videoLazyLoading: !0,
         onScroll: null,
         onInit: null,
         onDestroy: null,
         onCoverImage: null
       };
       const n = i.$item.dataset || {},
         a = {};
       if (Object.keys(n).forEach((e => {
           const t = e.substr(0, 1).toLowerCase() + e.substr(1);
           t && void 0 !== i.defaults[t] && (a[t] = n[e])
         })), i.options = i.extend({}, i.defaults, a, t), i.pureOptions = i.extend({}, i.options), Object.keys(i.options).forEach((e => {
           "true" === i.options[e] ? i.options[e] = !0 : "false" === i.options[e] && (i.options[e] = !1)
         })), i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))), "string" == typeof i.options.disableParallax && (i.options.disableParallax = new RegExp(i.options.disableParallax)), i.options.disableParallax instanceof RegExp) {
         const e = i.options.disableParallax;
         i.options.disableParallax = () => e.test(o.userAgent)
       }
       if ("function" != typeof i.options.disableParallax && (i.options.disableParallax = () => !1), "string" == typeof i.options.disableVideo && (i.options.disableVideo = new RegExp(i.options.disableVideo)), i.options.disableVideo instanceof RegExp) {
         const e = i.options.disableVideo;
         i.options.disableVideo = () => e.test(o.userAgent)
       }
       "function" != typeof i.options.disableVideo && (i.options.disableVideo = () => !1);
       let s = i.options.elementInViewport;
       s && "object" == typeof s && void 0 !== s.length && ([s] = s), s instanceof Element || (s = null), i.options.elementInViewport = s, i.image = {
         src: i.options.imgSrc || null,
         $container: null,
         useImgTag: !1,
         position: "fixed"
       }, i.initImg() && i.canInitParallax() && i.init()
     }
     css(e, t) {
       return "string" == typeof t ? i.getComputedStyle(e).getPropertyValue(t) : (Object.keys(t).forEach((i => {
         e.style[i] = t[i]
       })), e)
     }
     extend(e, ...t) {
       return e = e || {}, Object.keys(t).forEach((i => {
         t[i] && Object.keys(t[i]).forEach((o => {
           e[o] = t[i][o]
         }))
       })), e
     }
     getWindowData() {
       return {
         width: i.innerWidth || document.documentElement.clientWidth,
         height: s,
         y: document.documentElement.scrollTop
       }
     }
     initImg() {
       const e = this;
       let t = e.options.imgElement;
       return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image, t.src = e.options.imgSrc) : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage))
     }
     canInitParallax() {
       return !this.options.disableParallax()
     }
     init() {
       const e = this,
         t = {
           position: "absolute",
           top: 0,
           left: 0,
           width: "100%",
           height: "100%",
           overflow: "hidden"
         };
       let o = {
         pointerEvents: "none",
         transformStyle: "preserve-3d",
         backfaceVisibility: "hidden",
         willChange: "transform,opacity"
       };
       if (!e.options.keepImg) {
         const t = e.$item.getAttribute("style");
         if (t && e.$item.setAttribute("data-jarallax-original-styles", t), e.image.useImgTag) {
           const t = e.image.$item.getAttribute("style");
           t && e.image.$item.setAttribute("data-jarallax-original-styles", t)
         }
       }
       if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
           position: "relative"
         }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
           zIndex: 0
         }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
           "z-index": e.options.zIndex
         }), "fixed" === this.image.position && e.css(e.image.$container, {
           "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
           "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
         }), e.image.$container.setAttribute("id", `jarallax-container-${e.instanceID}`), e.$item.appendChild(e.image.$container), e.image.useImgTag ? o = e.extend({
           "object-fit": e.options.imgSize,
           "object-position": e.options.imgPosition,
           "max-width": "none"
         }, t, o) : (e.image.$item = document.createElement("div"), e.image.src && (o = e.extend({
           "background-position": e.options.imgPosition,
           "background-size": e.options.imgSize,
           "background-repeat": e.options.imgRepeat,
           "background-image": e.image.bgImage || `url("${e.image.src}")`
         }, t, o))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) {
         const t = function(e) {
           const t = [];
           for (; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
           return t
         }(e.$item).filter((e => {
           const t = i.getComputedStyle(e),
             o = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
           return o && "none" !== o || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
         }));
         e.image.position = t.length ? "absolute" : "fixed"
       }
       o.position = e.image.position, e.css(e.image.$item, o), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
         "background-image": "none"
       }), e.addToParallaxList()
     }
     addToParallaxList() {
       r.push({
         instance: this
       }), 1 === r.length && i.requestAnimationFrame(m)
     }
     removeFromParallaxList() {
       const e = this;
       r.forEach(((t, i) => {
         t.instance.instanceID === e.instanceID && r.splice(i, 1)
       }))
     }
     destroy() {
       const e = this;
       e.removeFromParallaxList();
       const t = e.$item.getAttribute("data-jarallax-original-styles");
       if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
         const i = e.image.$item.getAttribute("data-jarallax-original-styles");
         e.image.$item.removeAttribute("data-jarallax-original-styles"), i ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
       }
       e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
     }
     clipContainer() {}
     coverImage() {
       const e = this,
         t = e.image.$container.getBoundingClientRect(),
         i = t.height,
         {
           speed: o
         } = e.options,
         n = "scroll" === e.options.type || "scroll-opacity" === e.options.type;
       let a = 0,
         l = i,
         r = 0;
       return n && (0 > o ? (a = o * Math.max(i, s), s < i && (a -= o * (i - s))) : a = o * (i + s), 1 < o ? l = Math.abs(a - s) : 0 > o ? l = a / o + Math.abs(a) : l += (s - i) * (1 - o), a /= 2), e.parallaxScrollDistance = a, r = n ? (s - l) / 2 : (i - l) / 2, e.css(e.image.$item, {
         height: `${l}px`,
         marginTop: `${r}px`,
         left: "fixed" === e.image.position ? `${t.left}px` : "0",
         width: `${t.width}px`
       }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
         image: {
           height: l,
           marginTop: r
         },
         container: t
       }
     }
     isVisible() {
       return this.isElementInViewport || !1
     }
     onScroll(e) {
       const t = this,
         o = t.$item.getBoundingClientRect(),
         n = o.top,
         a = o.height,
         l = {};
       let r = o;
       if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= s && r.left <= i.innerWidth, !e && !t.isElementInViewport) return;
       const m = Math.max(0, n),
         c = Math.max(0, a + n),
         p = Math.max(0, -n),
         d = Math.max(0, n + a - s),
         g = Math.max(0, a - (n + a - s)),
         u = Math.max(0, -n + s - a),
         f = 1 - (s - n) / (s + a) * 2;
       let h = 1;
       if (a < s ? h = 1 - (p || d) / a : c <= s ? h = c / s : g <= s && (h = g / s), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (l.transform = "translate3d(0,0,0)", l.opacity = h), "scale" === t.options.type || "scale-opacity" === t.options.type) {
         let e = 1;
         0 > t.options.speed ? e -= t.options.speed * h : e += t.options.speed * (1 - h), l.transform = `scale(${e}) translate3d(0,0,0)`
       }
       if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
         let e = t.parallaxScrollDistance * f;
         "absolute" === t.image.position && (e -= n), l.transform = `translate3d(0,${e}px,0)`
       }
       t.css(t.image.$item, l), t.options.onScroll && t.options.onScroll.call(t, {
         section: o,
         beforeTop: m,
         beforeTopEnd: c,
         afterTop: p,
         beforeBottom: d,
         beforeBottomEnd: g,
         afterBottom: u,
         visiblePercent: h,
         fromViewportCenter: f
       })
     }
     onResize() {
       this.coverImage()
     }
   }
   const d = function(e, t, ...i) {
     ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
     const o = e.length;
     let n, a = 0;
     for (; a < o; a += 1)
       if ("object" == typeof t || void 0 === t ? e[a].jarallax || (e[a].jarallax = new p(e[a], t)) : e[a].jarallax && (n = e[a].jarallax[t].apply(e[a].jarallax, i)), void 0 !== n) return n;
     return e
   };
   d.constructor = p;
   const g = i.jQuery;
   if (void 0 !== g) {
     const e = function(...e) {
       Array.prototype.unshift.call(e, this);
       const t = d.apply(i, e);
       return "object" != typeof t ? t : this
     };
     e.constructor = d.constructor;
     const t = g.fn.jarallax;
     g.fn.jarallax = e, g.fn.jarallax.noConflict = function() {
       return g.fn.jarallax = t, this
     }
   }
   return e((() => {
     d(document.querySelectorAll("[data-jarallax]"))
   })), d
 }));
