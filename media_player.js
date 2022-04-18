// Copyright Google Inc. All Rights Reserved.
(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    'use strict';
    var k, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    ea("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.xm = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.xm
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    ea("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(aa(this))
                }
            })
        }
        return a
    });
    var fa = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        n = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ha = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ia = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ka;
    if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
    else {
        var la;
        a: {
            var ma = {
                    a: !0
                },
                na = {};
            try {
                na.__proto__ = ma;
                la = na.a;
                break a
            } catch (a) {}
            la = !1
        }
        ka = la ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var oa = ka,
        q = function(a, b) {
            a.prototype = ia(b.prototype);
            a.prototype.constructor = a;
            if (oa) oa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.se = b.prototype
        },
        pa = pa || {},
        r = this || self,
        qa = function() {},
        ra = function(a) {
            a.Ri = void 0;
            a.Xd = function() {
                return a.Ri ? a.Ri : a.Ri = new a
            }
        },
        sa = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        ta = function(a) {
            var b = sa(a);
            return "array" ==
                b || "object" == b && "number" == typeof a.length
        },
        ua = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        va = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        wa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        xa = function(a, b, c) {
            xa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                va : wa;
            return xa.apply(null, arguments)
        },
        t = function(a, b) {
            a = a.split(".");
            var c = r;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
        },
        za = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.se = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.so = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d,
                    g)
            }
        },
        Aa = function(a) {
            return a
        };
    var Ba = r.cast || {},
        cast = null;

    function Ca() {
        return !(!Ba.__platform__ || !Ba.__platform__.metrics)
    }

    function Da(a, b) {
        Ca() && Ba.__platform__.metrics.logBoolToUma(a, b)
    }

    function Ea(a) {
        Ca() && Ba.__platform__.metrics.logEventToUma(a)
    }

    function v(a, b) {
        Ca() && Ba.__platform__.metrics.logIntToUma(a, b)
    };

    function Fa(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Fa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    za(Fa, Error);
    Fa.prototype.name = "CustomError";
    var Ga = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Fa.call(this, c + a[d])
    };
    za(Ga, Fa);
    Ga.prototype.name = "AssertionError";
    var Ha = function(a, b) {
        throw new Ga("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var Ia = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ja = Array.prototype.lastIndexOf ? function(a, b) {
            return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
        } : function(a, b) {
            var c = a.length - 1;
            0 > c && (c = Math.max(0, a.length + c));
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
            for (; 0 <= c; c--)
                if (c in a && a[c] === b) return c;
            return -1
        };

    function Ka(a, b) {
        b = Ia(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function La(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    var Ma = function(a, b) {
        this.mn = 100;
        this.Om = a;
        this.Qn = b;
        this.bh = 0;
        this.Gg = null
    };
    Ma.prototype.get = function() {
        if (0 < this.bh) {
            this.bh--;
            var a = this.Gg;
            this.Gg = a.next;
            a.next = null
        } else a = this.Om();
        return a
    };
    Ma.prototype.put = function(a) {
        this.Qn(a);
        this.bh < this.mn && (this.bh++, a.next = this.Gg, this.Gg = a)
    };
    var Oa = function(a, b) {
            return 0 == Na(b, a.substr(0, b.length))
        },
        Pa = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Na = function(a, b) {
            a = String(a).toLowerCase();
            b = String(b).toLowerCase();
            return a < b ? -1 : a == b ? 0 : 1
        },
        Qa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function Ra() {
        var a = r.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function Sa(a) {
        return -1 != Ra().indexOf(a)
    };
    var Ta = function(a) {
        Ta[" "](a);
        return a
    };
    Ta[" "] = qa;
    var Va = function(a) {
        var b = Ua;
        return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9)
    };
    var Wa = Sa("Opera"),
        Xa = Sa("Trident") || Sa("MSIE"),
        Ya = Sa("Edge"),
        Za = Sa("Gecko") && !(-1 != Ra().toLowerCase().indexOf("webkit") && !Sa("Edge")) && !(Sa("Trident") || Sa("MSIE")) && !Sa("Edge"),
        $a = -1 != Ra().toLowerCase().indexOf("webkit") && !Sa("Edge"),
        ab;
    a: {
        var bb = "",
            cb = function() {
                var a = Ra();
                if (Za) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Ya) return /Edge\/([\d\.]+)/.exec(a);
                if (Xa) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if ($a) return /WebKit\/(\S+)/.exec(a);
                if (Wa) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();cb && (bb = cb ? cb[1] : "");
        if (Xa) {
            var db, eb = r.document;
            db = eb ? eb.documentMode : void 0;
            if (null != db && db > parseFloat(bb)) {
                ab = String(db);
                break a
            }
        }
        ab = bb
    }
    var fb = ab,
        Ua = {},
        gb = function() {
            return Va(function() {
                for (var a = 0, b = Pa(String(fb)).split("."), c = Pa("9").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                    var f = b[e] || "",
                        g = c[e] || "";
                    do {
                        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        if (0 == f[0].length && 0 == g[0].length) break;
                        a = Qa(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Qa(0 == f[2].length, 0 == g[2].length) || Qa(f[2], g[2]);
                        f = f[3];
                        g = g[3]
                    } while (0 == a)
                }
                return 0 <= a
            })
        };

    function hb(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function ib(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function jb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function kb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }

    function lb(a) {
        if (!a || "object" !== typeof a) return a;
        if ("function" === typeof a.clone) return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
            c;
        for (c in a) b[c] = lb(a[c]);
        return b
    }
    var mb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function nb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < mb.length; f++) c = mb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var ob;
    var pb = {},
        qb = function(a, b) {
            this.Ul = b === pb ? a : ""
        };
    qb.prototype.toString = function() {
        return this.Ul.toString()
    };
    var rb = function(a) {
            if (a instanceof qb && a.constructor === qb) return a.Ul;
            Ha("expected object of type SafeStyle, got '" + a + "' of type " + sa(a));
            return "type_error:SafeStyle"
        },
        sb = new qb("", pb);
    var tb = {},
        ub = function(a, b, c) {
            this.Tl = c === tb ? a : ""
        };
    ub.prototype.toString = function() {
        return this.Tl.toString()
    };
    var vb = function(a) {
        if (void 0 === ob) {
            var b = null;
            var c = r.trustedTypes;
            if (c && c.createPolicy) try {
                b = c.createPolicy("goog#html", {
                    createHTML: Aa,
                    createScript: Aa,
                    createScripturl:('http://192.168.100.6:9182/CORS/' + Aa.replace(/^(?:[a-z]+:)?\/\//i,''))
                })
            } catch (d) {
                r.console && r.console.error(d.message)
            }
            ob = b
        }
        a = (b = ob) ? b.createHTML(a) : a;
        return new ub(a, null, tb)
    };
    var wb = function(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    var xb, yb = function() {
        var a = r.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !Sa("Presto") && (a = function() {
            var e = wb("IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = xa(function(l) {
                if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !Sa("Trident") && !Sa("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.zk;
                    c.zk = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    zk: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            r.setTimeout(e, 0)
        }
    };

    function zb(a) {
        r.setTimeout(function() {
            throw a;
        }, 0)
    };
    var Ab = function() {
        this.Ph = this.Fe = null
    };
    Ab.prototype.add = function(a, b) {
        var c = Bb.get();
        c.set(a, b);
        this.Ph ? this.Ph.next = c : this.Fe = c;
        this.Ph = c
    };
    Ab.prototype.remove = function() {
        var a = null;
        this.Fe && (a = this.Fe, this.Fe = this.Fe.next, this.Fe || (this.Ph = null), a.next = null);
        return a
    };
    var Bb = new Ma(function() {
            return new Cb
        }, function(a) {
            return a.reset()
        }),
        Cb = function() {
            this.next = this.scope = this.Wd = null
        };
    Cb.prototype.set = function(a, b) {
        this.Wd = a;
        this.scope = b;
        this.next = null
    };
    Cb.prototype.reset = function() {
        this.next = this.scope = this.Wd = null
    };
    var Hb = function(a, b) {
            Db || Eb();
            Fb || (Db(), Fb = !0);
            Gb.add(a, b)
        },
        Db, Eb = function() {
            if (r.Promise && r.Promise.resolve) {
                var a = r.Promise.resolve(void 0);
                Db = function() {
                    a.then(Ib)
                }
            } else Db = function() {
                var b = Ib;
                "function" !== typeof r.setImmediate || r.Window && r.Window.prototype && !Sa("Edge") && r.Window.prototype.setImmediate == r.setImmediate ? (xb || (xb = yb()), xb(b)) : r.setImmediate(b)
            }
        },
        Fb = !1,
        Gb = new Ab,
        Ib = function() {
            for (var a; a = Gb.remove();) {
                try {
                    a.Wd.call(a.scope)
                } catch (b) {
                    zb(b)
                }
                Bb.put(a)
            }
            Fb = !1
        };
    var Jb = Object.freeze || function(a) {
        return a
    };
    var w = function() {
        this.Oe = this.Oe;
        this.dh = this.dh
    };
    w.prototype.Oe = !1;
    w.prototype.N = function() {
        this.Oe || (this.Oe = !0, this.M())
    };
    w.prototype.M = function() {
        if (this.dh)
            for (; this.dh.length;) this.dh.shift()()
    };
    var Kb = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ef = !1
    };
    Kb.prototype.stopPropagation = function() {
        this.Ef = !0
    };
    Kb.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var Lb = function() {
        if (!r.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            r.addEventListener("test", qa, b), r.removeEventListener("test", qa, b)
        } catch (c) {}
        return a
    }();
    var Mb = function(a, b) {
        Kb.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.$c = null;
        a && this.ta(a, b)
    };
    za(Mb, Kb);
    var Nb = Jb({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    Mb.prototype.ta = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (Za) {
                a: {
                    try {
                        Ta(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
            d.screenY || 0) : (this.offsetX = $a || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = $a || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId =
            a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Nb[a.pointerType] || "";
        this.state = a.state;
        this.$c = a;
        a.defaultPrevented && Mb.se.preventDefault.call(this)
    };
    Mb.prototype.stopPropagation = function() {
        Mb.se.stopPropagation.call(this);
        this.$c.stopPropagation ? this.$c.stopPropagation() : this.$c.cancelBubble = !0
    };
    Mb.prototype.preventDefault = function() {
        Mb.se.preventDefault.call(this);
        var a = this.$c;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Ob = "closure_listenable_" + (1E6 * Math.random() | 0);
    var Pb = 0;
    var Qb = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Fg = e;
            this.key = ++Pb;
            this.Lf = this.eg = !1
        },
        Rb = function(a) {
            a.Lf = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.Fg = null
        };
    var Sb = function(a) {
        this.src = a;
        this.La = {};
        this.Wf = 0
    };
    Sb.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.La[f];
        a || (a = this.La[f] = [], this.Wf++);
        var g = Tb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.eg = !1)) : (b = new Qb(b, this.src, f, !!d, e), b.eg = c, a.push(b));
        return b
    };
    Sb.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.La)) return !1;
        var e = this.La[a];
        b = Tb(e, b, c, d);
        return -1 < b ? (Rb(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.La[a], this.Wf--), !0) : !1
    };
    var Ub = function(a, b) {
        var c = b.type;
        c in a.La && Ka(a.La[c], b) && (Rb(b), 0 == a.La[c].length && (delete a.La[c], a.Wf--))
    };
    Sb.prototype.Fi = function(a, b, c, d) {
        a = this.La[a.toString()];
        var e = -1;
        a && (e = Tb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    Sb.prototype.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return hb(this.La, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var Tb = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Lf && f.listener == b && f.capture == !!c && f.Fg == d) return e
        }
        return -1
    };
    var Vb = "closure_lm_" + (1E6 * Math.random() | 0),
        Wb = {},
        Xb = 0,
        x = function(a, b, c, d, e) {
            if (d && d.once) Yb(a, b, c, d, e);
            else if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) x(a, b[f], c, d, e);
            else c = Zb(c), a && a[Ob] ? a.Fb.add(String(b), c, !1, ua(d) ? !!d.capture : !!d, e) : $b(a, b, c, !1, d, e)
        },
        $b = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = ua(e) ? !!e.capture : !!e,
                h = ac(a);
            h || (a[Vb] = h = new Sb(a));
            c = h.add(b, c, d, g, f);
            if (!c.proxy) {
                d = bc();
                c.proxy = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) Lb || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
                else if (a.attachEvent) a.attachEvent(cc(b.toString()), d);
                else if (a.addListener && a.removeListener) a.addListener(d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                Xb++
            }
        },
        bc = function() {
            var a = dc,
                b = function(c) {
                    return a.call(b.src, b.listener, c)
                };
            return b
        },
        Yb = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Yb(a, b[f], c, d, e);
            else c = Zb(c), a && a[Ob] ? a.Fb.add(String(b), c, !0, ua(d) ? !!d.capture : !!d, e) : $b(a, b, c, !0, d, e)
        },
        y = function(a,
            b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) y(a, b[f], c, d, e);
            else d = ua(d) ? !!d.capture : !!d, c = Zb(c), a && a[Ob] ? a.Fb.remove(String(b), c, d, e) : a && (a = ac(a)) && (b = a.Fi(b, c, d, e)) && ec(b)
        },
        ec = function(a) {
            if ("number" !== typeof a && a && !a.Lf) {
                var b = a.src;
                if (b && b[Ob]) Ub(b.Fb, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(cc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    Xb--;
                    (c = ac(b)) ? (Ub(c, a), 0 == c.Wf && (c.src = null, b[Vb] = null)) :
                    Rb(a)
                }
            }
        },
        cc = function(a) {
            return a in Wb ? Wb[a] : Wb[a] = "on" + a
        },
        dc = function(a, b) {
            if (a.Lf) a = !0;
            else {
                b = new Mb(b, this);
                var c = a.listener,
                    d = a.Fg || a.src;
                a.eg && ec(a);
                a = c.call(d, b)
            }
            return a
        },
        ac = function(a) {
            a = a[Vb];
            return a instanceof Sb ? a : null
        },
        gc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Zb = function(a) {
            if ("function" === typeof a) return a;
            a[gc] || (a[gc] = function(b) {
                return a.handleEvent(b)
            });
            return a[gc]
        };
    var hc = function() {
        w.call(this);
        this.Fb = new Sb(this);
        this.Am = this;
        this.xj = null
    };
    za(hc, w);
    hc.prototype[Ob] = !0;
    hc.prototype.addEventListener = function(a, b, c, d) {
        x(this, a, b, c, d)
    };
    hc.prototype.removeEventListener = function(a, b, c, d) {
        y(this, a, b, c, d)
    };
    hc.prototype.dispatchEvent = function(a) {
        var b, c = this.xj;
        if (c)
            for (b = []; c; c = c.xj) b.push(c);
        c = this.Am;
        var d = a.type || a;
        if ("string" === typeof a) a = new Kb(a, c);
        else if (a instanceof Kb) a.target = a.target || c;
        else {
            var e = a;
            a = new Kb(d, c);
            nb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.Ef && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = ic(g, d, !0, a) && e
            }
        a.Ef || (g = a.currentTarget = c, e = ic(g, d, !0, a) && e, a.Ef || (e = ic(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.Ef && f < b.length; f++) g = a.currentTarget = b[f], e = ic(g, d, !1, a) && e;
        return e
    };
    hc.prototype.M = function() {
        hc.se.M.call(this);
        if (this.Fb) {
            var a = this.Fb,
                b = 0,
                c;
            for (c in a.La) {
                for (var d = a.La[c], e = 0; e < d.length; e++) ++b, Rb(d[e]);
                delete a.La[c];
                a.Wf--
            }
        }
        this.xj = null
    };
    var ic = function(a, b, c, d) {
        b = a.Fb.La[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Lf && g.capture == c) {
                var h = g.listener,
                    l = g.Fg || g.src;
                g.eg && Ub(a.Fb, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    hc.prototype.Fi = function(a, b, c, d) {
        return this.Fb.Fi(String(a), b, c, d)
    };
    hc.prototype.hasListener = function(a, b) {
        return this.Fb.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    var jc = function(a, b) {
        this.name = a;
        this.value = b
    };
    jc.prototype.toString = function() {
        return this.name
    };
    var kc = new jc("OFF", Infinity),
        lc = new jc("SEVERE", 1E3),
        mc = new jc("WARNING", 900),
        nc = new jc("INFO", 800),
        oc = new jc("CONFIG", 700),
        pc = new jc("FINE", 500),
        qc = [kc, new jc("SHOUT", 1200), lc, mc, nc, oc, pc, new jc("FINER", 400), new jc("FINEST", 300), new jc("ALL", 0)],
        rc = null,
        sc = function() {
            this.fg = 0;
            this.clear()
        },
        tc;
    sc.prototype.clear = function() {
        this.da = Array(this.fg);
        this.Hk = -1;
        this.gl = !1
    };
    var uc = function(a, b, c) {
        this.rg = void 0;
        this.reset(a || kc, b, c, void 0, void 0)
    };
    uc.prototype.reset = function(a, b, c, d, e) {
        this.ue = d || Date.now();
        this.rl = a;
        this.sn = b;
        this.tl = c;
        this.rg = void 0;
        this.vd = "number" === typeof e ? e : vc
    };
    var vc = 0,
        wc = function(a, b) {
            this.level = null;
            this.Wk = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.fj = {
                Ia: function() {
                    return a
                }
            }
        },
        xc = function(a) {
            if (a.level) return a.level;
            if (a.parent) return xc(a.parent);
            Ha("Root logger has no level set.");
            return kc
        },
        yc = function(a, b) {
            for (; a;) a.Wk.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        zc = function() {
            this.entries = {};
            var a = new wc("");
            a.level = oc;
            this.entries[""] = a
        },
        Ac, Bc = function(a, b, c) {
            var d = a.entries[b];
            if (d) return void 0 !== c && (d.level = c), d;
            d = Bc(a, b.substr(0,
                b.lastIndexOf(".")));
            var e = new wc(b, d);
            a.entries[b] = e;
            d.children.push(e);
            void 0 !== c && (e.level = c);
            return e
        },
        Cc = function() {
            Ac || (Ac = new zc);
            return Ac
        },
        z = function(a) {
            return Bc(Cc(), a, void 0).fj
        },
        Dc = function(a, b, c) {
            var d;
            if (d = a)
                if (d = a && b) {
                    d = b.value;
                    var e = a ? xc(Bc(Cc(), a.Ia())) : kc;
                    d = d >= e.value
                }
            if (d) {
                b = b || kc;
                d = Bc(Cc(), a.Ia());
                "function" === typeof c && (c = c());
                tc || (tc = new sc);
                e = tc;
                a = a.Ia();
                if (0 < e.fg) {
                    var f = (e.Hk + 1) % e.fg;
                    e.Hk = f;
                    e.gl ? (e = e.da[f], e.reset(b, c, a), a = e) : (e.gl = f == e.fg - 1, a = e.da[f] = new uc(b, c, a))
                } else a =
                    new uc(b, c, a);
                a.rg = void 0;
                yc(d, a)
            }
        },
        A = function(a, b) {
            a && Dc(a, lc, b)
        },
        C = function(a, b) {
            a && Dc(a, mc, b)
        },
        E = function(a, b) {
            a && Dc(a, nc, b)
        },
        Ec = function(a, b) {
            a && Dc(a, pc, b)
        };
    var Fc = function() {};
    Fc.prototype.wk = null;
    var Hc = function(a) {
        var b;
        (b = a.wk) || (b = {}, Gc(a) && (b[0] = !0, b[1] = !0), b = a.wk = b);
        return b
    };
    var Ic, Jc = function() {};
    za(Jc, Fc);
    var Kc = function(a) {
            return (a = Gc(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        Gc = function(a) {
            if (!a.al && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.al = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.al
        };
    Ic = new Jc;
    var Nc = function(a) {
            this.l = 0;
            this.Yl = void 0;
            this.Kd = this.wc = this.qd = null;
            this.Eg = this.yi = !1;
            if (a != qa) try {
                var b = this;
                a.call(void 0, function(c) {
                    Lc(b, 2, c)
                }, function(c) {
                    if (!(c instanceof Mc)) try {
                        if (c instanceof Error) throw c;
                        throw Error("Promise rejected.");
                    } catch (d) {}
                    Lc(b, 3, c)
                })
            } catch (c) {
                Lc(this, 3, c)
            }
        },
        Oc = function() {
            this.next = this.context = this.ie = this.tf = this.Zc = null;
            this.ag = !1
        };
    Oc.prototype.reset = function() {
        this.context = this.ie = this.tf = this.Zc = null;
        this.ag = !1
    };
    var Pc = new Ma(function() {
            return new Oc
        }, function(a) {
            a.reset()
        }),
        Qc = function(a, b, c) {
            var d = Pc.get();
            d.tf = a;
            d.ie = b;
            d.context = c;
            return d
        };
    Nc.prototype.then = function(a, b, c) {
        return Rc(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    Nc.prototype.$goog_Thenable = !0;
    Nc.prototype.io = function(a, b) {
        return Rc(this, null, a, b)
    };
    Nc.prototype.catch = Nc.prototype.io;
    Nc.prototype.cancel = function(a) {
        if (0 == this.l) {
            var b = new Mc(a);
            Hb(function() {
                Sc(this, b)
            }, this)
        }
    };
    var Sc = function(a, b) {
            if (0 == a.l)
                if (a.qd) {
                    var c = a.qd;
                    if (c.wc) {
                        for (var d = 0, e = null, f = null, g = c.wc; g && (g.ag || (d++, g.Zc == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.l && 1 == d ? Sc(c, b) : (f ? (d = f, d.next == c.Kd && (c.Kd = d), d.next = d.next.next) : Tc(c), Uc(c, e, 3, b)))
                    }
                    a.qd = null
                } else Lc(a, 3, b)
        },
        Wc = function(a, b) {
            a.wc || 2 != a.l && 3 != a.l || Vc(a);
            a.Kd ? a.Kd.next = b : a.wc = b;
            a.Kd = b
        },
        Rc = function(a, b, c, d) {
            var e = Qc(null, null, null);
            e.Zc = new Nc(function(f, g) {
                e.tf = b ? function(h) {
                    try {
                        var l = b.call(d, h);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                } : f;
                e.ie = c ? function(h) {
                    try {
                        var l =
                            c.call(d, h);
                        void 0 === l && h instanceof Mc ? g(h) : f(l)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.Zc.qd = a;
            Wc(a, e);
            return e.Zc
        };
    Nc.prototype.jo = function(a) {
        this.l = 0;
        Lc(this, 2, a)
    };
    Nc.prototype.ko = function(a) {
        this.l = 0;
        Lc(this, 3, a)
    };
    var Lc = function(a, b, c) {
            if (0 == a.l) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.l = 1;
                a: {
                    var d = c,
                        e = a.jo,
                        f = a.ko;
                    if (d instanceof Nc) {
                        Wc(d, Qc(e || qa, f || null, a));
                        var g = !0
                    } else {
                        if (d) try {
                            var h = !!d.$goog_Thenable
                        } catch (m) {
                            h = !1
                        } else h = !1;
                        if (h) d.then(e, f, a), g = !0;
                        else {
                            if (ua(d)) try {
                                var l = d.then;
                                if ("function" === typeof l) {
                                    Xc(d, l, e, f, a);
                                    g = !0;
                                    break a
                                }
                            } catch (m) {
                                f.call(a, m);
                                g = !0;
                                break a
                            }
                            g = !1
                        }
                    }
                }
                g || (a.Yl = c, a.l = b, a.qd = null, Vc(a), 3 != b || c instanceof Mc || Yc(a, c))
            }
        },
        Xc = function(a, b, c, d, e) {
            var f = !1,
                g = function(l) {
                    f ||
                        (f = !0, c.call(e, l))
                },
                h = function(l) {
                    f || (f = !0, d.call(e, l))
                };
            try {
                b.call(a, g, h)
            } catch (l) {
                h(l)
            }
        },
        Vc = function(a) {
            a.yi || (a.yi = !0, Hb(a.Xm, a))
        },
        Tc = function(a) {
            var b = null;
            a.wc && (b = a.wc, a.wc = b.next, b.next = null);
            a.wc || (a.Kd = null);
            return b
        };
    Nc.prototype.Xm = function() {
        for (var a; a = Tc(this);) Uc(this, a, this.l, this.Yl);
        this.yi = !1
    };
    var Uc = function(a, b, c, d) {
            if (3 == c && b.ie && !b.ag)
                for (; a && a.Eg; a = a.qd) a.Eg = !1;
            if (b.Zc) b.Zc.qd = null, Zc(b, c, d);
            else try {
                b.ag ? b.tf.call(b.context) : Zc(b, c, d)
            } catch (e) {
                $c.call(null, e)
            }
            Pc.put(b)
        },
        Zc = function(a, b, c) {
            2 == b ? a.tf.call(a.context, c) : a.ie && a.ie.call(a.context, c)
        },
        Yc = function(a, b) {
            a.Eg = !0;
            Hb(function() {
                a.Eg && $c.call(null, b)
            })
        },
        $c = zb,
        Mc = function(a) {
            Fa.call(this, a)
        };
    za(Mc, Fa);
    Mc.prototype.name = "cancel";
    var ad = function(a, b, c) {
        if ("function" === typeof a) c && (a = xa(a, c));
        else if (a && "function" == typeof a.handleEvent) a = xa(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : r.setTimeout(a, b || 0)
    };
    var bd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        cd = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
    var F = function(a) {
        hc.call(this);
        this.headers = new Map;
        this.Uh = a || null;
        this.vc = !1;
        this.Th = this.C = null;
        this.ql = this.nf = "";
        this.bc = 0;
        this.jf = "";
        this.cd = this.Oi = this.Ig = this.wi = !1;
        this.qc = 0;
        this.Aa = null;
        this.Nf = "";
        this.Oh = this.Ln = this.Ee = !1;
        this.ek = null
    };
    za(F, hc);
    F.prototype.va = z("goog.net.XhrIo");
    var dd = /^https?$/i,
        ed = ["POST", "PUT"],
        fd = function(a) {
            a.Nf = "arraybuffer"
        };
    F.prototype.setTrustToken = function(a) {
        this.ek = a
    };
    F.prototype.send = function(a, b, c, d) {
        if (this.C) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.nf + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.nf = a;
        this.jf = "";
        this.bc = 0;
        this.ql = b;
        this.wi = !1;
        this.vc = !0;
        this.C = this.ri();
        this.Th = this.Uh ? Hc(this.Uh) : Hc(Ic);
        this.C.onreadystatechange = xa(this.Kl, this);
        this.Ln && "onprogress" in this.C && (this.C.onprogress = xa(function(g) {
            this.Il(g, !0)
        }, this), this.C.upload && (this.C.upload.onprogress = xa(this.Il, this)));
        try {
            Ec(this.va, gd(this, "Opening Xhr")),
                this.Oi = !0, this.C.open(b, String(a), !0), this.Oi = !1
        } catch (g) {
            Ec(this.va, gd(this, "Error opening Xhr: " + g.message));
            hd(this, g);
            return
        }
        a = c || "";
        c = new Map(this.headers);
        if (d)
            if (Object.getPrototypeOf(d) === Object.prototype)
                for (var e in d) c.set(e, d[e]);
            else if ("function" === typeof d.keys && "function" === typeof d.get) {
            e = n(d.keys());
            for (var f = e.next(); !f.done; f = e.next()) f = f.value, c.set(f, d.get(f))
        } else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find(function(g) {
            return "content-type" ==
                g.toLowerCase()
        });
        e = r.FormData && a instanceof r.FormData;
        !(0 <= Ia(ed, b)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = n(c);
        for (d = b.next(); !d.done; d = b.next()) c = n(d.value), d = c.next().value, c = c.next().value, this.C.setRequestHeader(d, c);
        this.Nf && (this.C.responseType = this.Nf);
        "withCredentials" in this.C && this.C.withCredentials !== this.Ee && (this.C.withCredentials = this.Ee);
        if ("setTrustToken" in this.C && this.ek) try {
            this.C.setTrustToken(this.ek)
        } catch (g) {
            Ec(this.va, gd(this, "Error SetTrustToken: " +
                g.message))
        }
        try {
            id(this), 0 < this.qc && (this.Oh = jd(this.C), Ec(this.va, gd(this, "Will abort after " + this.qc + "ms if incomplete, xhr2 " + this.Oh)), this.Oh ? (this.C.timeout = this.qc, this.C.ontimeout = xa(this.om, this)) : this.Aa = ad(this.om, this.qc, this)), Ec(this.va, gd(this, "Sending request")), this.Ig = !0, this.C.send(a), this.Ig = !1
        } catch (g) {
            Ec(this.va, gd(this, "Send error: " + g.message)), hd(this, g)
        }
    };
    var jd = function(a) {
        return Xa && gb() && "number" === typeof a.timeout && void 0 !== a.ontimeout
    };
    F.prototype.ri = function() {
        return this.Uh ? Kc(this.Uh) : Kc(Ic)
    };
    F.prototype.om = function() {
        "undefined" != typeof pa && this.C && (this.jf = "Timed out after " + this.qc + "ms, aborting", this.bc = 8, Ec(this.va, gd(this, this.jf)), this.dispatchEvent("timeout"), this.abort(8))
    };
    var hd = function(a, b) {
            a.vc = !1;
            a.C && (a.cd = !0, a.C.abort(), a.cd = !1);
            a.jf = b;
            a.bc = 5;
            kd(a);
            ld(a)
        },
        kd = function(a) {
            a.wi || (a.wi = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    F.prototype.abort = function(a) {
        this.C && this.vc && (Ec(this.va, gd(this, "Aborting")), this.vc = !1, this.cd = !0, this.C.abort(), this.cd = !1, this.bc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ld(this))
    };
    F.prototype.M = function() {
        this.C && (this.vc && (this.vc = !1, this.cd = !0, this.C.abort(), this.cd = !1), ld(this, !0));
        F.se.M.call(this)
    };
    F.prototype.Kl = function() {
        this.Oe || (this.Oi || this.Ig || this.cd ? md(this) : this.An())
    };
    F.prototype.An = function() {
        md(this)
    };
    var md = function(a) {
        if (a.vc && "undefined" != typeof pa)
            if (a.Th[1] && 4 == nd(a) && 2 == od(a)) Ec(a.va, gd(a, "Local request error detected and ignored"));
            else if (a.Ig && 4 == nd(a)) ad(a.Kl, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == nd(a)) {
            Ec(a.va, gd(a, "Request complete"));
            a.vc = !1;
            try {
                var b = od(a);
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.nf).match(bd)[1] || null;
                        if (!f && r.self && r.self.location) {
                            var g =
                                r.self.location.protocol;
                            f = g.substr(0, g.length - 1)
                        }
                        e = !dd.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    a.bc = 6;
                    try {
                        var h = 2 < nd(a) ? a.C.statusText : ""
                    } catch (l) {
                        Ec(a.va, "Can not get status: " + l.message), h = ""
                    }
                    a.jf = h + " [" + od(a) + "]";
                    kd(a)
                }
            } finally {
                ld(a)
            }
        }
    };
    F.prototype.Il = function(a, b) {
        this.dispatchEvent(pd(a, "progress"));
        this.dispatchEvent(pd(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var pd = function(a, b) {
            return {
                type: b,
                lengthComputable: a.lengthComputable,
                loaded: a.loaded,
                total: a.total
            }
        },
        ld = function(a, b) {
            if (a.C) {
                id(a);
                var c = a.C,
                    d = a.Th[0] ? qa : null;
                a.C = null;
                a.Th = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    A(a.va, "Problem encountered resetting onreadystatechange: " + e.message)
                }
            }
        },
        id = function(a) {
            a.C && a.Oh && (a.C.ontimeout = null);
            a.Aa && (r.clearTimeout(a.Aa), a.Aa = null)
        };
    F.prototype.Ze = function() {
        return !!this.C
    };
    var nd = function(a) {
            return a.C ? a.C.readyState : 0
        },
        od = function(a) {
            try {
                return 2 < nd(a) ? a.C.status : -1
            } catch (b) {
                return -1
            }
        },
        qd = function(a) {
            try {
                if (!a.C) return null;
                if ("response" in a.C) return a.C.response;
                switch (a.Nf) {
                    case "":
                    case "text":
                        return a.C.responseText;
                    case "arraybuffer":
                        if ("mozResponseArrayBuffer" in a.C) return a.C.mozResponseArrayBuffer
                }
                A(a.va, "Response type " + a.Nf + " is not supported on this browser");
                return null
            } catch (b) {
                return Ec(a.va, "Can not get response: " + b.message), null
            }
        };
    F.prototype.getResponseHeader = function(a) {
        if (this.C && 4 == nd(this)) return a = this.C.getResponseHeader(a), null === a ? void 0 : a
    };
    F.prototype.getAllResponseHeaders = function() {
        return this.C && 4 == nd(this) ? this.C.getAllResponseHeaders() || "" : ""
    };
    var gd = function(a, b) {
        return b + " [" + a.ql + " " + a.nf + " " + od(a) + "]"
    };
    var rd = function(a) {
            return Oa(a, "audio/")
        },
        sd = function(a) {
            return Oa(a, "video/")
        },
        td = function(a) {
            a = a.toLowerCase();
            return !a.includes(",") && !!a.match(/^(mp4a|[ae]c-3)/)
        },
        ud = RegExp("dv(he|av).[s|d|p][e|t|w][n|r|h|b][a|h]?[e|t|w]?"),
        vd = function(a) {
            var b = void 0 === a.codecs ? null : a.codecs,
                c = void 0 === a.width ? null : a.width,
                d = void 0 === a.height ? null : a.height,
                e = void 0 === a.framerate ? null : a.framerate;
            a = "" + (void 0 === a.mimeType ? "" : a.mimeType);
            b && (a += "; codecs=" + b);
            c && d && (a += "; width=" + c + "; height=" + d);
            e && (a += "; framerate=" +
                e);
            if (c = b) a: for (c = !1, b = b.split(","), d = 0; d < b.length; d++) {
                if (b[d].match(ud)) {
                    c = !1;
                    break a
                }
                0 === b[d].indexOf("hev1.2") && (c = !0)
            }
            c && (a += "; eotf=smpte2084");
            return a
        },
        wd = function(a) {
            if (!a) return 100;
            switch (a.code) {
                case MediaError.MEDIA_ERR_ABORTED:
                    return 101;
                case MediaError.MEDIA_ERR_NETWORK:
                    return 103;
                case MediaError.MEDIA_ERR_DECODE:
                    return 102;
                case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    return 104;
                default:
                    return 100
            }
        };
    var G = {},
        xd = (G["application/ttml+xml"] = 1, G["text/vtt"] = 2, G["text/mp4"] = 3, G["audio/mp4"] = 4, G["video/mp4"] = 5, G["video/mp2t"] = 6, G["audio/webm"] = 7, G["video/webm"] = 8, G["application/x-mpegurl"] = 9, G["application/vnd.apple.mpegurl"] = 10, G["application/dash+xml"] = 11, G["application/vnd.ms-sstr+xml"] = 12, G["text/cea608"] = 13, G["video/ogg"] = 14, G["audio/aac"] = 15, G["audio/mp3"] = 16, G["audio/ogg"] = 17, G["audio/wav"] = 18, G["image/gif"] = 19, G["image/jpg"] = 20, G["image/png"] = 21, G["text/mp2t"] = 22, G["application/mp4"] = 23, G["audio/mpeg"] =
            24, G),
        H = {},
        yd = (H.zm = 0, H["mp4a.a6"] = 1, H["ec-3"] = 2, H["mp4a.40.2"] = 3, H["mp4a.40.5"] = 4, H["mp4a.67"] = 5, H["avc1.4D40"] = 6, H["avc1.4D401E"] = 7, H["mp4a.a5"] = 8, H["ac-3"] = 9, H.vorbis = 10, H.opus = 11, H.vp8 = 12, H.vp9 = 13, H.avc1 = 14, H["mp4a.40"] = 15, H);

    function zd(a) {
        if (a) {
            if (sd(a)) return "Video";
            if (rd(a)) return "Audio"
        }
    }

    function Ad(a) {
        switch (a) {
            case "webvtt":
                return 1;
            case "ttml":
                return 2;
            case "cea608":
                return 3
        }
        return 0
    }

    function Bd(a, b) {
        switch (b) {
            case 1:
                switch (a) {
                    case "clearkey":
                        return 101;
                    case "widevine":
                        return 102;
                    case "playready":
                        return 103
                }
                break;
            case 2:
                switch (a) {
                    case "widevine":
                        return 201;
                    case "aes_128":
                        return 202;
                    case "aes_128_ckp":
                        return 203
                }
                break;
            case 3:
                switch (a) {
                    case "playready":
                        return 301
                }
        }
        return 0
    }
    var Cd = function(a, b) {
            b = zd(b);
            void 0 !== b && v("Cast.MPL." + b + "Bitrate", a)
        },
        Dd = function(a, b) {
            b = zd(b);
            if (void 0 !== b) {
                v("Cast.MPL.Available" + b + "Bitrates", a.length);
                for (var c = 0; c < a.length; c++) v("Cast.MPL.Available" + b + "Bitrate" + c, a[c])
            }
        },
        Ed = function(a) {
            a.split(",").forEach(function(b) {
                var c = yd[b];
                v("Cast.MPL.Codec", c ? c : 0 == b.lastIndexOf("avc1", 0) ? yd.avc1 : 0 == b.lastIndexOf("mp4a.40", 0) ? yd["mp4a.40"] : yd.zm)
            })
        },
        Fd = function(a, b) {
            v("Cast.MPL.ProtocolProtection", Bd(a, b))
        };
    var Gd = function(a, b, c) {
        b = b || new Uint8Array(a.length);
        var d = 0;
        for (c = c || 0; d < a.length; d++) b[d + c] = a.charCodeAt(d);
        return b
    };
    var Hd = function(a) {
        return !!a && "function" === typeof a.then
    };
    var Id, Jd = "undefined" !== typeof TextEncoder;
    var Kd = {},
        Ld = null,
        Nd = function(a) {
            var b;
            void 0 === b && (b = 0);
            Md();
            b = Kd[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    l = a[e + 2],
                    m = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | l >> 6];
                l = b[l & 63];
                c[f++] = "" + m + g + h + l
            }
            m = 0;
            l = d;
            switch (a.length - e) {
                case 2:
                    m = a[e + 1], l = b[(m & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
            }
            return c.join("")
        },
        Pd = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 :
                c - 1);
            var d = new Uint8Array(c),
                e = 0;
            Od(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        Od = function(a, b) {
            function c(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        p = Ld[m];
                    if (null != p) return p;
                    if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            Md();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Md = function() {
            if (!Ld) {
                Ld = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                        b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Kd[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Ld[f] && (Ld[f] = e)
                    }
                }
            }
        };
    var Qd = "function" === typeof Uint8Array;

    function Rd(a) {
        return Qd && null != a && a instanceof Uint8Array
    }
    var Sd;
    var Td = function(a) {
        this.uc = a;
        if (null !== a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    Td.prototype.Ka = function() {
        return null == this.uc
    };
    var Ud = 0,
        Vd = 0;

    function Wd(a) {
        if (a.constructor === Uint8Array) return a;
        if (a.constructor === ArrayBuffer) return new Uint8Array(a);
        if (a.constructor === Array) return new Uint8Array(a);
        if (a.constructor === String) return Pd(a);
        if (a.constructor === Td) {
            if (a.Ka()) var b = Sd || (Sd = new Uint8Array(0));
            else {
                b = Uint8Array;
                var c = a.uc;
                null == c || Rd(c) || ("string" === typeof c ? c = Pd(c) : (Ha("Cannot coerce to Uint8Array: " + sa(c)), c = null));
                a = a.uc = c;
                b = new b(a)
            }
            return b
        }
        if (a instanceof Uint8Array) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers");
    };
    var Xd = function() {
        this.da = []
    };
    Xd.prototype.length = function() {
        return this.da.length
    };
    Xd.prototype.end = function() {
        var a = this.da;
        this.da = [];
        return a
    };
    var Yd = function(a, b) {
            for (; 127 < b;) a.da.push(b & 127 | 128), b >>>= 7;
            a.da.push(b)
        },
        Zd = function(a, b) {
            if (0 <= b) Yd(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.da.push(b & 127 | 128), b >>= 7;
                a.da.push(1)
            }
        };
    k = Xd.prototype;
    k.Qh = function(a) {
        this.da.push(a >>> 0 & 255)
    };
    k.Gd = function(a) {
        this.da.push(a >>> 0 & 255);
        this.da.push(a >>> 8 & 255)
    };
    k.A = function(a) {
        this.da.push(a >>> 0 & 255);
        this.da.push(a >>> 8 & 255);
        this.da.push(a >>> 16 & 255);
        this.da.push(a >>> 24 & 255)
    };
    k.pk = function(a) {
        var b = a >>> 0;
        a = Math.floor((a - b) / 4294967296) >>> 0;
        Ud = b;
        Vd = a;
        this.A(Ud);
        this.A(Vd)
    };
    k.wm = function(a) {
        this.da.push(a >>> 0 & 255);
        this.da.push(a >>> 8 & 255);
        this.da.push(a >>> 16 & 255);
        this.da.push(a >>> 24 & 255)
    };
    k.mk = function(a) {
        var b = a;
        b = (a = 0 > b ? 1 : 0) ? -b : b;
        if (0 === b) 0 < 1 / b ? Ud = Vd = 0 : (Vd = 0, Ud = 2147483648);
        else if (isNaN(b)) Vd = 0, Ud = 2147483647;
        else if (3.4028234663852886E38 < b) Vd = 0, Ud = (a << 31 | 2139095040) >>> 0;
        else if (1.1754943508222875E-38 > b) b = Math.round(b / Math.pow(2, -149)), Vd = 0, Ud = (a << 31 | b) >>> 0;
        else {
            var c = Math.floor(Math.log(b) / Math.LN2);
            b *= Math.pow(2, -c);
            b = Math.round(8388608 * b);
            16777216 <= b && ++c;
            Vd = 0;
            Ud = (a << 31 | c + 127 << 23 | b & 8388607) >>> 0
        }
        this.A(Ud)
    };
    k.kk = function(a) {
        this.da.push(a ? 1 : 0)
    };
    k.vm = function(a) {
        Zd(this, a)
    };
    k.lk = function(a) {
        for (; 8192 < a.length;) Array.prototype.push.apply(this.da, a.subarray(0, 8192)), a = a.subarray(8192);
        Array.prototype.push.apply(this.da, a)
    };
    var $d = function() {
            this.di = [];
            this.yd = 0;
            this.oa = new Xd
        },
        ae = function(a, b) {
            0 !== b.length && (a.di.push(b), a.yd += b.length)
        },
        be = function(a, b) {
            if (b = b.Si) {
                ae(a, a.oa.end());
                for (var c = 0; c < b.length; c++) ae(a, b[c])
            }
        };
    k = $d.prototype;
    k.wm = function(a, b) {
        null != b && (ce(a, b, -2147483648 <= b && 2147483648 > b), null != b && (de(a, b), Yd(this.oa, 8 * a), Zd(this.oa, b)))
    };
    k.A = function(a, b) {
        null != b && (ce(a, b, 0 <= b && 4294967296 > b), null != b && (Yd(this.oa, 8 * a), Yd(this.oa, b)))
    };
    k.pk = function() {};
    k.mk = function(a, b) {
        null != b && (Yd(this.oa, 8 * a + 5), this.oa.mk(b))
    };
    k.kk = function(a, b) {
        null != b && (ce(a, b, "boolean" === typeof b || "number" === typeof b), Yd(this.oa, 8 * a), this.oa.kk(b))
    };
    k.vm = function(a, b) {
        null != b && (b = parseInt(b, 10), de(a, b), Yd(this.oa, 8 * a), Zd(this.oa, b))
    };
    k.lk = function(a, b) {
        null != b && ee(this, a, Wd(b))
    };
    var ee = function(a, b, c) {
        Yd(a.oa, 8 * b + 2);
        Yd(a.oa, c.length);
        ae(a, a.oa.end());
        ae(a, c)
    };

    function de(a, b) {
        ce(a, b, b === Math.floor(b));
        ce(a, b, -2147483648 <= b && 2147483648 > b)
    }

    function ce(a, b, c) {
        c || Ha("for [" + b + "] at [" + a + "]")
    };
    var fe = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;

    function ge(a) {
        Object.isFrozen(a) || (fe ? a[fe] |= 1 : void 0 !== a.Lg ? a.Lg |= 1 : Object.defineProperties(a, {
            Lg: {
                value: 1,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
        return a
    };

    function he(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var ie = Symbol("exempted jspb subclass"),
        je = Symbol("generated by jspb"),
        ke = Object.freeze(ge([]));
    var le = function(a, b, c) {
            return -1 === b ? null : b >= a.sd ? a.Lb ? a.Lb[b] : void 0 : (void 0 === c ? 0 : c) && a.Lb && (c = a.Lb[b], null != c) ? c : a.bb[b + a.Vc]
        },
        me = function(a, b, c, d) {
            b < a.sd && (void 0 === d || !d) ? a.bb[b + a.Vc] = c : (a.Lb || (a.Lb = a.bb[a.sd + a.Vc] = {}))[b] = c;
            return a
        },
        ne = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = le(a, b, c);
            null == d && (d = ke);
            d === ke && (d = ge(d.slice()), me(a, b, d, c));
            return d
        },
        oe = function(a, b) {
            a = le(a, b);
            return null == a ? a : !!a
        },
        qe = function(a, b, c, d) {
            (c = pe(a, c)) && c !== b && null != d && (a.cb && c in a.cb && (a.cb[c] = void 0), me(a, c, void 0));
            return me(a, b, d)
        };

    function re(a, b) {
        return pe(a, se) === b ? b : -1
    }
    var pe = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != le(a, e) && (0 !== c && me(a, c, void 0, !1), c = e)
            }
            return c
        },
        te = function(a, b, c, d) {
            a.cb || (a.cb = {});
            var e = a.cb[c];
            if (!e) {
                d = ne(a, c, void 0 === d ? !1 : d);
                e = [];
                for (var f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.cb[c] = e
            }
            return e
        };

    function ue(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (Rd(a)) return Nd(a);
                    if (a instanceof Td) {
                        if (a.Ka()) a = "";
                        else {
                            var b = a.uc;
                            null != b && "string" !== typeof b && (Qd && b instanceof Uint8Array ? b = Nd(b) : (Ha("Cannot coerce to b64 string: " + sa(b)), b = null));
                            a = a.uc = b
                        }
                        return a
                    }
                }
        }
        return a
    };

    function ve(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = we(a, b);
            else if (he(a)) {
                var c = {},
                    d;
                for (d in a) c[d] = ve(a[d], b);
                a = c
            } else a = b(a);
            return a
        }
    }

    function we(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = ve(c[d], b);
        if (b = Array.isArray(a)) a = fe ? a[fe] : a.Lg, b = (null == a ? 0 : a) & 1;
        b && ge(c);
        return c
    }

    function xe(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = ue(a);
        return Array.isArray(a) ? we(a, xe) : a
    }

    function ye(a) {
        return Rd(a) ? new Uint8Array(a) : a
    };
    var ze;
    var Ae = function(a, b, c) {
        !0 !== this[ie] && Object.getPrototypeOf(Object.getPrototypeOf(this));
        var d = ze;
        ze = null;
        a || (a = d);
        d = this.constructor.pn;
        a || (a = d ? [d] : []);
        this.Vc = (d ? 0 : -1) - (this.constructor.xo || 0);
        this.cb = void 0;
        this.bb = a;
        a: {
            d = this.bb.length;a = d - 1;
            if (d && (d = this.bb[a], he(d))) {
                this.sd = a - this.Vc;
                this.Lb = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.sd = Math.max(b, a + 1 - this.Vc), this.Lb = void 0) : this.sd = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.sd) a += this.Vc, (d = this.bb[a]) ? Array.isArray(d) && ge(d) : this.bb[a] =
                    ke;
                else {
                    d = this.Lb || (this.Lb = this.bb[this.sd + this.Vc] = {});
                    var e = d[a];
                    e ? Array.isArray(e) && ge(e) : d[a] = ke
                }
    };
    k = Ae.prototype;
    k.Kh = function() {
        return this.toJSON()
    };
    k.toJSON = function() {
        return we(this.bb, xe)
    };
    k.toString = function() {
        return this.bb.toString()
    };
    k.getExtension = function(a) {
        return a.vo(this)
    };
    k.clone = function() {
        var a = this.constructor,
            b = we(this.bb, ye);
        ze = b;
        a = new a(b);
        ze = null;
        Be(a, this);
        return a
    };

    function Be(a, b) {
        b.Si && (a.Si = b.Si.slice());
        var c = b.cb;
        if (c) {
            b = b.Lb;
            for (var d in c) {
                var e = c[d];
                if (e) {
                    var f = !(!b || !b[d]),
                        g = +d;
                    if (Array.isArray(e)) {
                        if (e.length) {
                            g = te(a, e[0].constructor, g, f);
                            for (var h = 0; h < Math.min(g.length, e.length); h++) Be(g[h], e[h])
                        }
                    } else {
                        h = a;
                        var l = e.constructor;
                        if (-1 === g) g = null;
                        else {
                            h.cb || (h.cb = {});
                            var m = h.cb[g];
                            m ? g = m : (f = le(h, g, void 0 === f ? !1 : f), null == f ? g = m : (l = new l(f), g = h.cb[g] = l))
                        }
                        g && Be(g, e)
                    }
                }
            }
        }
    };

    function Ce(a, b, c) {
        if (c) {
            var d = {},
                e;
            for (e in c) {
                var f = c[e],
                    g = f.qo;
                g || (d.Ge = f.yo || f.Fo.Rh, f.Hm ? (d.Yh = De(f.Hm), g = function(h) {
                    return function(l, m, p) {
                        return h.Ge(l, m, p, h.Yh)
                    }
                }(d)) : f.qn ? (d.Xh = Ee(f.Ym.to, f.qn), g = function(h) {
                    return function(l, m, p) {
                        return h.Ge(l, m, p, h.Xh)
                    }
                }(d)) : g = d.Ge, f.qo = g);
                g(b, a, f.Ym);
                d = {
                    Ge: d.Ge,
                    Yh: d.Yh,
                    Xh: d.Xh
                }
            }
        }
        be(b, a)
    }
    var Fe = Symbol("serializeBinaryToWriterCache");

    function De(a) {
        var b = a[Fe];
        if (!b) {
            var c = Ge(a);
            b = function(d, e) {
                return He(d, e, c)
            };
            a[Fe] = b
        }
        return b
    }

    function Ee(a, b) {
        var c = a[Fe];
        c || (c = function(d, e) {
            return Ce(d, e, b)
        }, a[Fe] = c);
        return c
    }
    var Ie = Symbol("serializerFnCache");

    function Je(a, b) {
        a.push(b)
    }

    function Ke(a, b, c) {
        a.push(b, c.Rh)
    }

    function Le(a, b, c, d, e) {
        var f = De(e),
            g = c.Rh;
        a.push(b, function(h, l, m) {
            return g(h, l, m, d, f)
        })
    }

    function Me(a, b, c, d, e, f) {
        var g = Ee(d, f),
            h = c.Rh;
        a.push(b, function(l, m, p) {
            return h(l, m, p, d, g)
        })
    }

    function Ge(a) {
        var b = a[Ie];
        if (!b) {
            b = a[Ie] = [];
            var c = Je,
                d = Ke,
                e = Le,
                f = Me;
            a = a();
            var g = 0;
            a.length && "number" !== typeof a[0] && (c(b, a[0]), g++);
            for (; g < a.length;) {
                c = a[g++];
                for (var h = g + 1; h < a.length && "number" !== typeof a[h];) h++;
                var l = a[g++];
                h -= g;
                switch (h) {
                    case 0:
                        d(b, c, l);
                        break;
                    case 1:
                        d(b, c, l, a[g++]);
                        break;
                    case 2:
                        e(b, c, l, a[g++], a[g++]);
                        break;
                    case 3:
                        h = a[g++];
                        var m = a[g++],
                            p = a[g++];
                        Array.isArray(p) ? e(b, c, l, h, m, p) : f(b, c, l, h, m, p);
                        break;
                    case 4:
                        f(b, c, l, a[g++], a[g++], a[g++], a[g++]);
                        break;
                    default:
                        throw Error("unexpected number of binary field arguments: " +
                            h);
                }
            }
        }
        return b
    }

    function He(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        Ce(a, b, e ? c[0] : void 0)
    }
    var Ne = function(a, b) {
        var c = new $d;
        He(a, c, Ge(b));
        ae(c, c.oa.end());
        a = new Uint8Array(c.yd);
        b = c.di;
        for (var d = b.length, e = 0, f = 0; f < d; f++) {
            var g = b[f];
            a.set(g, e);
            e += g.length
        }
        c.di = [a];
        return a
    };

    function Oe(a, b) {
        return {
            Eo: a,
            Rh: b
        }
    }

    function Pe(a, b, c) {
        b = le(b, c);
        if (null != b) {
            if (Jd) {
                if (/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b)) throw Error("Found an unpaired surrogate");
                b = (Id || (Id = new TextEncoder)).encode(b)
            } else {
                for (var d = 0, e = new Uint8Array(3 * b.length), f = 0; f < b.length; f++) {
                    var g = b.charCodeAt(f);
                    if (128 > g) e[d++] = g;
                    else {
                        if (2048 > g) e[d++] = g >> 6 | 192;
                        else {
                            if (55296 <= g && 57343 >= g) {
                                if (56319 >= g && f < b.length) {
                                    var h = b.charCodeAt(++f);
                                    if (56320 <= h && 57343 >= h) {
                                        g = 1024 * (g - 55296) + h - 56320 + 65536;
                                        e[d++] = g >> 18 | 240;
                                        e[d++] = g >> 12 & 63 | 128;
                                        e[d++] = g >> 6 & 63 | 128;
                                        e[d++] = g & 63 | 128;
                                        continue
                                    }
                                }
                                throw Error("Found an unpaired surrogate");
                            }
                            e[d++] = g >> 12 | 224;
                            e[d++] = g >> 6 & 63 | 128
                        }
                        e[d++] = g & 63 | 128
                    }
                }
                b = e.subarray(0, d)
            }
            ee(a, c, b)
        }
    }
    var Qe = Oe(function(a, b, c, d) {
            if (5 !== a.mb()) return !1;
            qe(b, c, d, a.Bo());
            return !0
        }, function(a, b, c) {
            a.mk(c, le(b, c))
        }),
        Re = Oe(function(a, b, c) {
            if (0 !== a.mb() && 2 !== a.mb()) return !1;
            a.Do(ne(b, c));
            return !0
        }, function(a, b, c) {
            b = ne(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = a,
                        f = c,
                        g = b[d];
                    null != g && (de(f, g), Yd(e.oa, 8 * f), Zd(e.oa, g))
                }
        }),
        Te = Oe(function(a, b, c, d) {
            if (0 !== a.mb()) return !1;
            qe(b, c, d, Se(a));
            return !0
        }, function(a, b, c) {
            a.wm(c, le(b, c))
        }),
        Ue = Oe(function(a, b, c, d) {
                if (0 !== a.mb()) return !1;
                qe(b, c, d, a.zo());
                return !0
            },
            function(a, b, c) {
                a.kk(c, le(b, c))
            }),
        Ve = Oe(function(a, b, c) {
            if (2 !== a.mb()) return !1;
            me(b, c, a.Pn());
            return !0
        }, Pe),
        We = Oe(function(a, b, c, d) {
            if (2 !== a.mb()) return !1;
            qe(b, c, d, a.Pn());
            return !0
        }, Pe),
        Xe = Oe(function(a, b, c, d, e) {
            if (2 !== a.mb()) return !1;
            var f = a.Co;
            var g = te(b, d, c, void 0 === g ? !1 : g);
            d = new d;
            b = ne(b, c);
            g.push(d);
            b.push(d.bb);
            f.call(a, d, e);
            return !0
        }, function(a, b, c, d, e) {
            b = te(b, d, c);
            if (null != b)
                for (d = 0; d < b.length; d++) {
                    var f = a;
                    Yd(f.oa, 8 * c + 2);
                    var g = f.oa.end();
                    ae(f, g);
                    g.push(f.yd);
                    f = g;
                    e(b[d], a);
                    g = a;
                    var h = f.pop();
                    for (h = g.yd + g.oa.length() - h; 127 < h;) f.push(h & 127 | 128), h >>>= 7, g.yd++;
                    f.push(h);
                    g.yd++
                }
        }),
        Ye = Oe(function(a, b, c) {
            if (2 !== a.mb()) return !1;
            me(b, c, a.On());
            return !0
        }, function(a, b, c) {
            a.lk(c, le(b, c))
        }),
        Ze = Oe(function(a, b, c) {
            if (2 !== a.mb()) return !1;
            a = a.On();
            ne(b, c).push(a);
            return !0
        }, function(a, b, c) {
            b = ne(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) a.lk(c, b[d])
        }),
        $e = Oe(function(a, b, c) {
            if (0 !== a.mb()) return !1;
            me(b, c, I(a));
            return !0
        }, function(a, b, c) {
            a.A(c, le(b, c))
        }),
        af = Oe(function(a, b, c) {
            if (0 !== a.mb()) return !1;
            me(b, c,
                a.Ao());
            return !0
        }, function(a, b, c) {
            a.vm(c, le(b, c))
        });
    var bf = function() {
        Ae.apply(this, arguments)
    };
    q(bf, Ae);
    bf.prototype[je] = !0;
    var cf = function(a) {
        bf.call(this, a)
    };
    q(cf, bf);
    k = cf.prototype;
    k.Ia = function() {
        return le(this, 1)
    };
    k.getStringValue = function() {
        return le(this, re(this, 2))
    };
    k.setStringValue = function(a) {
        return qe(this, 2, se, a)
    };
    k.getFloatValue = function() {
        var a = re(this, 4);
        a = le(this, a);
        return null == a ? a : +a
    };
    k.setFloatValue = function(a) {
        return qe(this, 4, se, a)
    };
    k.xh = function() {
        return Ne(this, df)
    };
    var df = function() {
            return [1, Ve, 2, We, se, 3, Te, se, 4, Qe, se, 5, Ue, se]
        },
        se = [2, 3, 4, 5];
    var ff = function(a) {
        bf.call(this, a, -1, ef)
    };
    q(ff, bf);
    ff.prototype.xh = function() {
        return Ne(this, gf)
    };
    var gf = function() {
            return [1, Re, 2, Xe, cf, df]
        },
        ef = [1, 2];
    ff.pn = "scs.sc";
    var hf = RegExp("^(-)?P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)D)?(T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$"),
        jf = function(a, b, c, d, e, f) {
            "string" === typeof a ? (this.Hd = "y" == a ? b : 0, this.md = "m" == a ? b : 0, this.xc = "d" == a ? b : 0, this.Cc = "h" == a ? b : 0, this.Jc = "n" == a ? b : 0, this.Qc = "s" == a ? b : 0) : (this.Hd = a || 0, this.md = b || 0, this.xc = c || 0, this.Cc = d || 0, this.Jc = e || 0, this.Qc = f || 0)
        };
    jf.prototype.Yb = function(a) {
        return a.Hd == this.Hd && a.md == this.md && a.xc == this.xc && a.Cc == this.Cc && a.Jc == this.Jc && a.Qc == this.Qc
    };
    jf.prototype.clone = function() {
        return new jf(this.Hd, this.md, this.xc, this.Cc, this.Jc, this.Qc)
    };
    jf.prototype.add = function(a) {
        this.Hd += a.Hd;
        this.md += a.md;
        this.xc += a.xc;
        this.Cc += a.Cc;
        this.Jc += a.Jc;
        this.Qc += a.Qc
    };
    var kf = function() {
            this.Xl = Date.now()
        },
        lf = null;
    kf.prototype.set = function(a) {
        this.Xl = a
    };
    kf.prototype.reset = function() {
        this.set(Date.now())
    };
    kf.prototype.get = function() {
        return this.Xl
    };
    var mf = function(a) {
        this.In = a || "";
        lf || (lf = new kf);
        this.co = lf
    };
    k = mf.prototype;
    k.rk = !0;
    k.hm = !0;
    k.$n = !0;
    k.Zn = !0;
    k.im = !1;
    k.ao = !1;
    var nf = function(a) {
            return 10 > a ? "0" + a : String(a)
        },
        of = function(a) {
            mf.call(this, a)
        };
    za(of, mf);
    var pf = function(a, b) {
        var c = [];
        c.push(a.In, " ");
        if (a.hm) {
            var d = new Date(b.ue);
            c.push("[", nf(d.getFullYear() - 2E3) + nf(d.getMonth() + 1) + nf(d.getDate()) + " " + nf(d.getHours()) + ":" + nf(d.getMinutes()) + ":" + nf(d.getSeconds()) + "." + nf(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        if (a.$n) {
            d = c.push;
            var e = a.co.get();
            e = (b.ue - e) / 1E3;
            var f = e.toFixed(3),
                g = 0;
            if (1 > e) g = 2;
            else
                for (; 100 > e;) g++, e *= 10;
            for (; 0 < g--;) f = " " + f;
            d.call(c, "[", f, "s] ")
        }
        a.Zn && c.push("[", b.tl, "] ");
        a.ao && c.push("[", b.rl.name, "] ");
        c.push(b.sn);
        a.im && (b = b.rg,
            void 0 !== b && c.push("\n", b instanceof Error ? b.message : String(b)));
        a.rk && c.push("\n");
        return c.join("")
    };
    var qf = function() {
        this.Nn = xa(this.Bm, this);
        this.ug = new of;
        this.ug.hm = !1;
        this.ug.im = !1;
        this.fl = this.ug.rk = !1;
        this.Zm = {}
    };
    qf.prototype.Bm = function(a) {
        function b(f) {
            if (f) {
                if (f.value >= lc.value) return "error";
                if (f.value >= mc.value) return "warn";
                if (f.value >= oc.value) return "log"
            }
            return "debug"
        }
        if (!this.Zm[a.tl]) {
            var c = pf(this.ug, a),
                d = rf;
            if (d) {
                var e = b(a.rl);
                sf(d, e, c, a.rg)
            }
        }
    };
    var tf = null,
        rf = r.console,
        sf = function(a, b, c, d) {
            if (a[b]) a[b](c, void 0 === d ? "" : d);
            else a.log(c, void 0 === d ? "" : d)
        };
    var uf = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        vf = function(a) {
            a = Pa(a);
            if ("" == a || Oa(a, "url(")) return null;
            if (0 < a.indexOf("(")) {
                if (/"|'/.test(a)) return null;
                for (var b = /([\-\w]+)\(/g, c; c = b.exec(a);)
                    if (!(c[1].toLowerCase() in uf)) return null
            }
            return a
        };

    function wf(a, b) {
        a = r[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }

    function xf(a) {
        var b = r.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    wf("Element", "attributes") || wf("Node", "attributes");
    wf("Element", "innerHTML") || wf("HTMLElement", "innerHTML");
    wf("Node", "nodeName");
    wf("Node", "nodeType");
    wf("Node", "parentNode");
    wf("Node", "childNodes");
    wf("HTMLElement", "style") || wf("Element", "style");
    wf("HTMLStyleElement", "sheet");
    var yf = xf("getPropertyValue"),
        zf = xf("setProperty");
    wf("Element", "namespaceURI") || wf("Node", "namespaceURI");

    function Af(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (Xa && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    };
    var Bf = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        Df = function(a) {
            if (!a) return sb;
            var b = document.createElement("div").style;
            Cf(a).forEach(function(c) {
                var d = $a && c in Bf ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = Af(yf, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = vf(c), null != c && Af(zf, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
            });
            return new qb(b.cssText ||
                "", pb)
        },
        Ef = function(a) {
            if (Xa && 10 > document.documentMode) return sb;
            var b = document;
            "function" === typeof HTMLTemplateElement && (b = wb("TEMPLATE").content.ownerDocument);
            b = b.implementation.createHTMLDocument("").createElement("DIV");
            b.style.cssText = a;
            return Df(b.style)
        },
        Cf = function(a) {
            ta(a) ? a = La(a) : (a = jb(a), Ka(a, "cssText"));
            return a
        };
    var Ff = function(a) {
            if (a.Gb && "function" == typeof a.Gb) return a.Gb();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
            if ("string" === typeof a) return a.split("");
            if (ta(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return ib(a)
        },
        Gf = function(a) {
            if (a.Yd && "function" == typeof a.Yd) return a.Yd();
            if (!a.Gb || "function" != typeof a.Gb) {
                if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
                if (!("undefined" !== typeof Set &&
                        a instanceof Set)) {
                    if (ta(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return jb(a)
                }
            }
        },
        Hf = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (ta(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
            else
                for (var d = Gf(a), e = Ff(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        };
    var If = function(a, b) {
        this.Km = a[r.Symbol.iterator]();
        this.nn = b;
        this.tn = 0
    };
    If.prototype[Symbol.iterator] = function() {
        return this
    };
    If.prototype.next = function() {
        var a = this.Km.next();
        return {
            value: a.done ? void 0 : this.nn.call(void 0, a.value, this.tn++),
            done: a.done
        }
    };
    var Jf = function(a, b) {
        return new If(a, b)
    };
    var Kf = "StopIteration" in r ? r.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        Lf = function() {};
    Lf.prototype.ah = function() {
        throw Kf;
    };
    Lf.prototype.next = function() {
        return Mf
    };
    var Mf = Jb({
        done: !0,
        value: void 0
    });
    Lf.prototype.Id = function() {
        return this
    };
    var Rf = function(a) {
            if (a instanceof Nf || a instanceof Of || a instanceof Pf) return a;
            if ("function" == typeof a.ah) return new Nf(function() {
                return Qf(a)
            });
            if ("function" == typeof a[Symbol.iterator]) return new Nf(function() {
                return a[Symbol.iterator]()
            });
            if ("function" == typeof a.Id) return new Nf(function() {
                return Qf(a.Id())
            });
            throw Error("Not an iterator or iterable.");
        },
        Qf = function(a) {
            if (!(a instanceof Lf)) return a;
            var b = !1;
            return {
                next: function() {
                    for (var c; !b;) try {
                        c = a.ah();
                        break
                    } catch (d) {
                        if (d !== Kf) throw d;
                        b = !0
                    }
                    return {
                        value: c,
                        done: b
                    }
                }
            }
        },
        Nf = function(a) {
            this.Di = a
        };
    Nf.prototype.Id = function() {
        return new Of(this.Di())
    };
    Nf.prototype[Symbol.iterator] = function() {
        return new Pf(this.Di())
    };
    Nf.prototype.bk = function() {
        return new Pf(this.Di())
    };
    var Of = function(a) {
        this.ce = a
    };
    q(Of, Lf);
    Of.prototype.ah = function() {
        var a = this.ce.next();
        if (a.done) throw Kf;
        return a.value
    };
    Of.prototype.next = function() {
        return this.ce.next()
    };
    Of.prototype[Symbol.iterator] = function() {
        return new Pf(this.ce)
    };
    Of.prototype.bk = function() {
        return new Pf(this.ce)
    };
    var Pf = function(a) {
        Nf.call(this, function() {
            return a
        });
        this.ce = a
    };
    q(Pf, Nf);
    Pf.prototype.next = function() {
        return this.ce.next()
    };
    var Sf = function(a, b) {
        this.pb = {};
        this.ua = [];
        this.ra = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    k = Sf.prototype;
    k.bd = function() {
        return this.size
    };
    k.Gb = function() {
        Tf(this);
        for (var a = [], b = 0; b < this.ua.length; b++) a.push(this.pb[this.ua[b]]);
        return a
    };
    k.Yd = function() {
        Tf(this);
        return this.ua.concat()
    };
    k.li = function(a) {
        return this.has(a)
    };
    k.has = function(a) {
        return Uf(this.pb, a)
    };
    k.Yb = function(a) {
        if (this === a) return !0;
        if (this.size != a.bd()) return !1;
        var b = Vf;
        Tf(this);
        for (var c, d = 0; c = this.ua[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };
    var Vf = function(a, b) {
        return a === b
    };
    Sf.prototype.Ka = function() {
        return 0 == this.size
    };
    Sf.prototype.clear = function() {
        this.pb = {};
        this.ra = this.size = this.ua.length = 0
    };
    Sf.prototype.remove = function(a) {
        return this.delete(a)
    };
    Sf.prototype.delete = function(a) {
        return Uf(this.pb, a) ? (delete this.pb[a], --this.size, this.ra++, this.ua.length > 2 * this.size && Tf(this), !0) : !1
    };
    var Tf = function(a) {
        if (a.size != a.ua.length) {
            for (var b = 0, c = 0; b < a.ua.length;) {
                var d = a.ua[b];
                Uf(a.pb, d) && (a.ua[c++] = d);
                b++
            }
            a.ua.length = c
        }
        if (a.size != a.ua.length) {
            var e = {};
            for (c = b = 0; b < a.ua.length;) d = a.ua[b], Uf(e, d) || (a.ua[c++] = d, e[d] = 1), b++;
            a.ua.length = c
        }
    };
    k = Sf.prototype;
    k.get = function(a, b) {
        return Uf(this.pb, a) ? this.pb[a] : b
    };
    k.set = function(a, b) {
        Uf(this.pb, a) || (this.size += 1, this.ua.push(a), this.ra++);
        this.pb[a] = b
    };
    k.addAll = function(a) {
        if (a instanceof Sf)
            for (var b = a.Yd(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    k.forEach = function(a, b) {
        for (var c = this.Yd(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new Sf(this)
    };
    k.keys = function() {
        return Rf(this.Id(!0)).bk()
    };
    k.values = function() {
        return Rf(this.Id(!1)).bk()
    };
    k.entries = function() {
        var a = this;
        return Jf(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    k.Id = function(a) {
        Tf(this);
        var b = 0,
            c = this.ra,
            d = this,
            e = new Lf;
        e.next = function() {
            if (c != d.ra) throw Error("The map has changed since the iterator was created");
            if (b >= d.ua.length) return Mf;
            var g = d.ua[b++];
            return {
                value: a ? g : d.pb[g],
                done: !1
            }
        };
        var f = e.next;
        e.ah = function() {
            var g = f.call(e);
            if (g.done) throw Kf;
            return g.value
        };
        return e
    };
    var Uf = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Wf = function() {
            this.Za = [];
            this.zb = []
        },
        Xf = function(a) {
            0 === a.Za.length && (a.Za = a.zb, a.Za.reverse(), a.zb = [])
        };
    Wf.prototype.enqueue = function(a) {
        this.zb.push(a)
    };
    var Yf = function(a) {
            Xf(a);
            return a.Za.pop()
        },
        Zf = function(a) {
            Xf(a);
            a = a.Za;
            return a[a.length - 1]
        };
    k = Wf.prototype;
    k.bd = function() {
        return this.Za.length + this.zb.length
    };
    k.Ka = function() {
        return 0 === this.Za.length && 0 === this.zb.length
    };
    k.clear = function() {
        this.Za = [];
        this.zb = []
    };
    k.contains = function(a) {
        return 0 <= Ia(this.Za, a) || 0 <= Ia(this.zb, a)
    };
    k.remove = function(a) {
        var b = this.Za;
        var c = Ja(b, a);
        0 <= c ? (Array.prototype.splice.call(b, c, 1), b = !0) : b = !1;
        return b || Ka(this.zb, a)
    };
    k.Gb = function() {
        for (var a = [], b = this.Za.length - 1; 0 <= b; --b) a.push(this.Za[b]);
        var c = this.zb.length;
        for (b = 0; b < c; ++b) a.push(this.zb[b]);
        return a
    };
    var J = function(a, b) {
        this.Xb = this.Ed = this.ic = "";
        this.le = null;
        this.ad = this.sb = "";
        this.$a = this.kn = !1;
        if (a instanceof J) {
            this.$a = void 0 !== b ? b : a.$a;
            $f(this, a.ic);
            var c = a.Ed;
            ag(this);
            this.Ed = c;
            c = a.Xb;
            ag(this);
            this.Xb = c;
            bg(this, a.le);
            c = a.sb;
            ag(this);
            this.sb = c;
            cg(this, a.ub.clone());
            a = a.ad;
            ag(this);
            this.ad = a
        } else a && (c = String(a).match(bd)) ? (this.$a = !!b, $f(this, c[1] || "", !0), a = c[2] || "", ag(this), this.Ed = dg(a), a = c[3] || "", ag(this), this.Xb = dg(a, !0), bg(this, c[4]), a = c[5] || "", ag(this), this.sb = dg(a, !0), cg(this, c[6] ||
            "", !0), a = c[7] || "", ag(this), this.ad = dg(a)) : (this.$a = !!b, this.ub = new eg(null, this.$a))
    };
    J.prototype.toString = function() {
        var a = [],
            b = this.ic;
        b && a.push(fg(b, gg, !0), ":");
        var c = this.Xb;
        if (c || "file" == b) a.push("//"), (b = this.Ed) && a.push(fg(b, gg, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.le, null != c && a.push(":", String(c));
        if (c = this.sb) this.Xb && "/" != c.charAt(0) && a.push("/"), a.push(fg(c, "/" == c.charAt(0) ? hg : ig, !0));
        (c = this.ub.toString()) && a.push("?", c);
        (c = this.ad) && a.push("#", fg(c, jg));
        return a.join("")
    };
    J.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.ic;
        c ? $f(b, a.ic) : c = !!a.Ed;
        if (c) {
            var d = a.Ed;
            ag(b);
            b.Ed = d
        } else c = !!a.Xb;
        c ? (d = a.Xb, ag(b), b.Xb = d) : c = null != a.le;
        d = a.sb;
        if (c) bg(b, a.le);
        else if (c = !!a.sb) {
            if ("/" != d.charAt(0))
                if (this.Xb && !this.sb) d = "/" + d;
                else {
                    var e = b.sb.lastIndexOf("/"); - 1 != e && (d = b.sb.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length &&
                        f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? (ag(b), b.sb = d) : c = "" !== a.ub.toString();
        c ? cg(b, a.ub.clone()) : c = !!a.ad;
        c && (a = a.ad, ag(b), b.ad = a);
        return b
    };
    J.prototype.clone = function() {
        return new J(this)
    };
    var $f = function(a, b, c) {
            ag(a);
            a.ic = c ? dg(b, !0) : b;
            a.ic && (a.ic = a.ic.replace(/:$/, ""))
        },
        bg = function(a, b) {
            ag(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.le = b
            } else a.le = null
        },
        cg = function(a, b, c) {
            ag(a);
            b instanceof eg ? (a.ub = b, a.ub.Sj(a.$a)) : (c || (b = fg(b, kg)), a.ub = new eg(b, a.$a))
        };
    J.prototype.getQuery = function() {
        return this.ub.toString()
    };
    J.prototype.removeParameter = function(a) {
        ag(this);
        this.ub.remove(a);
        return this
    };
    var ag = function(a) {
        if (a.kn) throw Error("Tried to modify a read-only Uri");
    };
    J.prototype.Sj = function(a) {
        this.$a = a;
        this.ub && this.ub.Sj(a)
    };
    var lg = function(a) {
            return a instanceof J ? a.clone() : new J(a, void 0)
        },
        dg = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        fg = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, mg), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        mg = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        gg = /[#\/\?@]/g,
        ig = /[#\?:]/g,
        hg = /[#\?]/g,
        kg = /[#\?@]/g,
        jg = /#/g,
        eg = function(a, b) {
            this.Ha = this.fa = null;
            this.Va = a || null;
            this.$a = !!b
        },
        ng = function(a) {
            a.fa || (a.fa = new Map, a.Ha = 0, a.Va && cd(a.Va, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
    k = eg.prototype;
    k.bd = function() {
        ng(this);
        return this.Ha
    };
    k.add = function(a, b) {
        ng(this);
        this.Va = null;
        a = og(this, a);
        var c = this.fa.get(a);
        c || this.fa.set(a, c = []);
        c.push(b);
        this.Ha += 1;
        return this
    };
    k.remove = function(a) {
        ng(this);
        a = og(this, a);
        return this.fa.has(a) ? (this.Va = null, this.Ha -= this.fa.get(a).length, this.fa.delete(a)) : !1
    };
    k.clear = function() {
        this.fa = this.Va = null;
        this.Ha = 0
    };
    k.Ka = function() {
        ng(this);
        return 0 == this.Ha
    };
    k.li = function(a) {
        ng(this);
        a = og(this, a);
        return this.fa.has(a)
    };
    k.forEach = function(a, b) {
        ng(this);
        this.fa.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    k.Yd = function() {
        ng(this);
        for (var a = Array.from(this.fa.values()), b = Array.from(this.fa.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.Gb = function(a) {
        ng(this);
        var b = [];
        if ("string" === typeof a) this.li(a) && (b = b.concat(this.fa.get(og(this, a))));
        else {
            a = Array.from(this.fa.values());
            for (var c = 0; c < a.length; c++) b = b.concat(a[c])
        }
        return b
    };
    k.set = function(a, b) {
        ng(this);
        this.Va = null;
        a = og(this, a);
        this.li(a) && (this.Ha -= this.fa.get(a).length);
        this.fa.set(a, [b]);
        this.Ha += 1;
        return this
    };
    k.get = function(a, b) {
        if (!a) return b;
        a = this.Gb(a);
        return 0 < a.length ? String(a[0]) : b
    };
    k.toString = function() {
        if (this.Va) return this.Va;
        if (!this.fa) return "";
        for (var a = [], b = Array.from(this.fa.keys()), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.Gb(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.Va = a.join("&")
    };
    k.clone = function() {
        var a = new eg;
        a.Va = this.Va;
        this.fa && (a.fa = new Map(this.fa), a.Ha = this.Ha);
        return a
    };
    var og = function(a, b) {
        b = String(b);
        a.$a && (b = b.toLowerCase());
        return b
    };
    eg.prototype.Sj = function(a) {
        a && !this.$a && (ng(this), this.Va = null, this.fa.forEach(function(b, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < b.length && (this.Va = null, this.fa.set(og(this, d), La(b)), this.Ha += b.length))
        }, this));
        this.$a = a
    };
    eg.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) Hf(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
    };
    var qg = function(a) {
        bf.call(this, a, -1, pg)
    };
    q(qg, bf);
    qg.prototype.getType = function() {
        var a = le(this, 11);
        return null == a ? 0 : a
    };
    qg.prototype.xh = function() {
        return Ne(this, rg)
    };
    var rg = function() {
            return [2, Ze, 4, Ye, 7, $e, 9, $e, 10, $e, 11, af, 12, $e, 13, Ze, 14, Xe, sg, tg, 15, Ve, 16, Ve, 17, $e, 1, af, 3, Ve, 5, Ve, 6, Ve, 8, Ye]
        },
        sg = function(a) {
            bf.call(this, a)
        };
    q(sg, bf);
    sg.prototype.xh = function() {
        return Ne(this, tg)
    };
    var tg = function() {
            return [1, Ye, 2, Ye, 3, Ye, 4, Ye, 5, $e]
        },
        pg = [2, 13, 14];
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function ug(a, b) {
        var c = a.parseFromString;
        b instanceof ub && b.constructor === ub ? b = b.Tl : (Ha("expected object of type SafeHtml, got '" + b + "' of type " + sa(b)), b = "type_error:SafeHtml");
        return c.call(a, b, "text/xml")
    };
    var wg = function(a) {
            vg();
            return vb(a)
        },
        vg = qa;
    t("cast.player.api.VERSION", "1.0.0");
    console.log("CAST SDK MPL Version: 1.0.0.113");
    t("cast.player.api.ErrorCode", {
        UNKNOWN: 0,
        PLAYBACK: 1,
        MEDIAKEYS: 2,
        NETWORK: 3,
        MANIFEST: 4
    });
    var xg = ["cast.player.api.ErrorCode.UNKNOWN", "cast.player.api.ErrorCode.PLAYBACK", "cast.player.api.ErrorCode.MEDIAKEYS", "cast.player.api.ErrorCode.NETWORK", "cast.player.api.ErrorCode.MANIFEST"];
    t("cast.player.api.HlsSegmentFormat", {
        MPEG2_TS: 0,
        MPEG_AUDIO_ES: 1,
        PACKED_AUDIO_AC3: 2,
        ro: 3,
        MPEG_LAYER_3: 4,
        TS_AAC: 5,
        PACKED_AUDIO_E_AC3: 6,
        FMP4: 7,
        TS_HE_AAC: 8
    });
    t("cast.player.api.HlsVideoSegmentFormat", {
        MPEG2_TS: 0,
        FMP4: 1
    });
    t("cast.player.api.CaptionsType", {
        UNKNOWN: "unknown",
        WEBVTT: "webvtt",
        TTML: "ttml",
        CEA608: "cea608",
        STPP: "stpp"
    });
    t("cast.player.api.ContentProtection", {
        NONE: "none",
        CLEARKEY: "clearkey",
        PLAYREADY: "playready",
        WIDEVINE: "widevine",
        AES_128: "aes_128",
        AES_128_CKP: "aes_128_ckp"
    });
    var yg = {
        DEBUG: 0,
        INFO: 800,
        WARNING: 900,
        ERROR: 1E3,
        NONE: Infinity
    };
    t("cast.player.api.LoggerLevel", yg);
    t("cast.player.api.StreamingProtocolType", {
        UNKNOWN: 0,
        MPEG_DASH: 1,
        HLS: 2,
        SMOOTH_STREAMING: 3
    });
    t("cast.player.api.DateRangeEventType", {
        DATE_RANGE_CHANGED: "daterangechanged",
        DATE_RANGE_ENTER: "daterangeenter",
        DATE_RANGE_EXIT: "daterangeexit"
    });
    var zg = function() {
        this.timeoutInterval = 3E4;
        this.headers = this.url = null;
        this.withCredentials = !1;
        this.protectionSystem = this.content = null;
        this.skipRequest = !1;
        this.setResponse = null;
        this.interval = {
            time: 0,
            duration: 0
        };
        this.ne = null
    };
    t("cast.player.api.RequestInfo", zg);
    var Ag = function(a, b, c, d, e) {
        this.url = a;
        this.errorCode = b;
        this.status = c;
        this.responseHeaders = d;
        this.response = e
    };
    t("cast.player.api.RequestStatus", Ag);
    var Bg = function(a, b, c, d, e, f, g, h, l, m) {
        this.codecs = a;
        this.codecsProvided = void 0 === h ? !1 : h;
        this.mimeType = b;
        this.bitrates = c;
        this.streamsGroupedByBitrate = l;
        this.streamsGroupedByCdn = m;
        this.language = d;
        this.name = e;
        this.role = f;
        this.hlsMediaInfo = void 0 === g ? null : g
    };
    t("cast.player.api.StreamInfo", Bg);
    var Cg = function(a) {
        a = void 0 === a ? {} : a;
        var b = void 0 === a.url ? null : a.url,
            c = void 0 === a.characteristics ? null : a.characteristics,
            d = void 0 === a.groupId ? null : a.groupId,
            e = void 0 === a.autoSelect ? !1 : a.autoSelect,
            f = void 0 === a.channels ? null : a.channels,
            g = void 0 === a.forced ? !1 : a.forced,
            h = void 0 === a.assocLanguage ? null : a.assocLanguage;
        this.isDefault = void 0 === a.isDefault ? !1 : a.isDefault;
        this.url = b;
        this.characteristics = c;
        this.groupId = d;
        this.autoSelect = e;
        this.channels = f;
        this.forced = g;
        this.assocLanguage = h
    };
    t("cast.player.api.HlsMediaInfo", Cg);
    t("cast.player.api.EmsgInfo", function() {});
    t("cast.player.api.HlsDateRangeInfo", function() {});
    window.VTTCue = window.VTTCue || window.TextTrackCue;
    var Dg = function(a) {
        var b = Bc(Cc(), "").fj;
        a: {
            if (!rc) {
                rc = {};
                for (var c = 0, d; d = qc[c]; c++) rc[d.value] = d, rc[d.name] = d
            }
            if (a in rc) a = rc[a];
            else {
                for (c = 0; c < qc.length; ++c)
                    if (d = qc[c], d.value <= a) {
                        a = d;
                        break a
                    }
                a = null
            }
        }
        b && (Bc(Cc(), b.Ia()).level = a)
    };
    t("cast.player.api.setLoggerLevel", Dg);
    tf || (tf = new qf);
    if (tf) {
        var Eg = tf;
        if (1 != Eg.fl) {
            var Fg = Bc(Cc(), "").fj,
                Gg = Eg.Nn;
            Fg && Bc(Cc(), Fg.Ia()).Wk.push(Gg);
            Eg.fl = !0
        }
    };
    var Hg = function(a) {
        this.url = a;
        this.updateCaptionsRequestInfo = this.updateSegmentRequestInfo = this.updateManifestRequestInfo = null
    };
    t("cast.player.api.HostBase", Hg);
    var Ig = {
            clearkey: "org.w3.clearkey",
            playready: "com.chromecast.playready",
            widevine: "com.widevine.alpha"
        },
        Jg = z("cast.player.common"),
        Lg = function(a) {
            return Kg(a.role, a.mimeType, a.codecs)
        },
        Kg = function(a, b, c) {
            return "caption" == a || Oa(b, "text/") || "application/ttml+xml" === b || "application/mp4" == b && "stpp" == c
        },
        Ng = function(a, b) {
            b && (b = new Uint8Array(new ArrayBuffer(16)), b.set(a), Mg(b.subarray(0, 4)), Mg(b.subarray(4, 6)), Mg(b.subarray(6, 8)), a = b);
            this.Xf = a
        };
    Ng.prototype.Yb = function(a) {
        if (!a) return !1;
        var b = this.Xf;
        a = a.Xf;
        for (var c = 0; 16 > c; c++)
            if (b[c] != a[c]) return !1;
        return !0
    };
    Ng.prototype.Kh = function() {
        return this.Xf
    };
    Ng.prototype.toString = function() {
        for (var a = "", b = 0; b < this.Xf.length; b++) a += ("0" + this.Xf[b].toString(16)).slice(-2);
        return a
    };
    var Mg = function(a) {
            for (var b = 0, c = a.length - 1; b < c; b++, c--) {
                var d = a[b];
                a[b] = a[c];
                a[c] = d
            }
        },
        Og = new Ng([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]),
        Pg = new Ng([237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237]),
        Qg = new Ng([16, 119, 239, 236, 192, 178, 77, 2, 172, 227, 60, 30, 82, 226, 251, 75]),
        Rg = function(a, b) {
            return MediaSource.isTypeSupported(a + '; codecs="' + b + '"')
        },
        Sg = function(a) {
            return "mp4a.a6" == a || "ec-3" == a
        },
        Tg = function(a, b, c) {
            for (a = a.toString(b); a.length < c;) a = "0" + a;
            return a
        },
        Ug = function(a) {
            for (var b =
                    a.length / 2, c = new Uint8Array(b), d = 0; d < b; d++) c[d] = parseInt(a.substr(2 * d, 2), 16);
            return c
        },
        Vg = function(a) {
            if (Ba.__platform__ && Ba.__platform__.queryPlatformValue) return Ba.__platform__.queryPlatformValue(a)
        },
        Wg = function(a) {
            switch (a) {
                case 2:
                    return "mp4a.a5";
                case 6:
                    return "mp4a.a6";
                case 4:
                    return "";
                case 8:
                    return "mp4a.40.5";
                default:
                    return "mp4a.40.2"
            }
        },
        Xg = function(a) {
            a = a.split(",");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].match(ud);
                if (c && !Rg("video/mp4", c[0])) {
                    E(Jg, c[0] + " removed");
                    a.splice(b, 1);
                    break
                }
                if (c = a[b]) {
                    var d =
                        c.split(".");
                    2 != d.length || "avc1" != d[0] && "avc3" != d[0] || (c = d[0] + "." + d[1].toUpperCase())
                }
                a[b] = c
            }
            return a.join(",")
        },
        Yg = function(a) {
            return a.split(",").find(function(b) {
                return !td(b)
            })
        },
        Zg = function(a) {
            return a.split(",").find(function(b) {
                return td(b)
            })
        },
        $g = Ba.__platform__ && Ba.__platform__.display,
        ah = Ba.__platform__ && Ba.__platform__.canDisplayType,
        bh = parseFloat(Vg("log-level-mpl"));
    0 <= Ia(ib(yg), bh) ? Dg(bh) : Dg(900);
    var ch = {
            "Cast.MPL.SegmentStats.Size": {
                min: 0,
                max: 1E6,
                xl: 100
            },
            "Cast.MPL.SegmentStats.Time": {
                min: 0,
                max: 2E4,
                xl: 20
            }
        },
        dh = function(a, b) {
            ch[a] ? Ca() && Ba.__platform__.metrics.logHistogramValueToUma(a, b, ch[a].min, ch[a].max, ch[a].xl) : C(Jg, "Invalid histogram name")
        },
        eh = function(a, b) {
            dh("Cast.MPL.SegmentStats.Size", a);
            dh("Cast.MPL.SegmentStats.Time", b)
        };
    var gh = function(a) {
        Hg.call(this, a.url);
        this.initialBandwidth = 3145728;
        this.autoResumeDuration = 10;
        this.autoResumeNumberOfSegments = 3;
        this.autoPauseDuration = 1;
        var b = a.segmentRequestRetryLimit;
        0 > b && (A(fh, "segmentRequestRetryLimit should be >= 0"), b = 3);
        this.segmentRequestRetryLimit = b;
        this.useSingleKeySession = !1;
        this.mediaElement = a.mediaElement || null;
        this.url = a.url;
        this.licenseUrl = a.licenseUrl || null;
        this.decodeContentId = !0 === a.decodeContentId;
        this.protectionSystem = a.protectionSystem || null;
        this.licenseCustomData =
            a.licenseCustomData || null;
        this.qk = !0 === a.aggressiveStallHandling;
        this.Ok = !0 === a.disableSourceBufferTimeAdjust;
        this.Li = !0 === a.hlsContentKeyProtection;
        this.enableSmoothLiveRefresh = !0 === a.enableSmoothLiveRefresh;
        this.enableDurationOnLive = !0 === a.enableDurationOnLive;
        this.skipSegmentOnNetworkFailure = !0 === a.skipSegmentOnNetworkFailure;
        this.preferSequenceNumberForPlaylistMatching = !0 === a.preferSequenceNumberForPlaylistMatching;
        this.ignoreTtmlPositionInfo = !0 === a.ignoreTtmlPositionInfo;
        this.enableSideloadedTextTrackStyling = !0 === a.enableSideloadedTextTrackStyling;
        this.useRelativeCueTimestamps = !0 === a.useRelativeCueTimestamps;
        this.emeServerCertificate = a.emeServerCertificate || null;
        this.no = a.useWidevineL3 || !1;
        this.optInRedundantStreams = a.optInRedundantStreams || !1;
        this.onTimedMetadata = this.onQualityLevelChanged = this.onCue = this.onAutoPause = this.onMediaDownloadEnded = this.onManifestReady = this.processLicense = this.processSegment = this.processManifest = this.processMetadata = this.prepareLicenseRequest = this.getQualityLevel = this.trackBandwidth =
            this.updateCaptionsRequestInfo = this.updateSegmentRequestInfo = this.updateLicenseRequestInfo = this.updateManifestRequestInfo = this.onError = null
    };
    q(gh, Hg);
    gh.prototype.Z = function(a, b, c, d) {
        var e = a;
        if (b) {
            e = b.errorCode;
            if (6 == b.errorCode && 0 <= b.status) var f = b.status;
            var g = a;
            null != e && (g = 10 * g + e % 10, null != f && (g = 1E3 * g + f % 1E3));
            e = g
        }
        v("Cast.MPL.Error", e);
        f = Math.floor(a / 100);
        A(d || fh, "error: " + xg[f] + "/" + e + (c ? " (" + c + ")" : ""));
        if (this.onError) this.onError(f, b, a)
    };
    var hh = function(a, b) {
        return a.processManifest ? a.processManifest(b) : b
    };
    t("cast.player.api.Host", gh);
    var fh = z("cast.player.api.Host");
    t("cast.player.cache.ContentCacheCallbacks", function() {});
    var ih = function(a) {
        gh.call(this, a)
    };
    q(ih, gh);
    t("cast.player.api.ContentCacheHost", ih);
    var jh = function() {};
    jh.prototype.load = function() {
        A(kh, "Cache is deprecated");
        return Promise.reject("Cache is deprecated")
    };
    jh.prototype.Uc = function() {};
    t("cast.player.api.ContentCache", jh);
    jh.setCacheHitCallback = function() {};
    jh.setCacheInsertCallback = function() {};
    jh.prototype.unload = jh.prototype.Uc;
    jh.prototype.load = jh.prototype.load;
    var kh = z("cast.player.api.ContentCache");
    t("cast.player.api.DetailedErrorCode", {
        MEDIA_UNKNOWN: 100,
        MEDIA_ABORTED: 101,
        MEDIA_DECODE: 102,
        MEDIA_NETWORK: 103,
        MEDIA_SRC_NOT_SUPPORTED: 104,
        SOURCE_BUFFER_FAILURE: 110,
        MEDIAKEYS_UNKNOWN: 200,
        MEDIAKEYS_NETWORK: 201,
        MEDIAKEYS_UNSUPPORTED: 202,
        MEDIAKEYS_WEBCRYPTO: 203,
        NETWORK_UNKNOWN: 300,
        SEGMENT_NETWORK: 301,
        HLS_NETWORK_MASTER_PLAYLIST: 311,
        HLS_NETWORK_PLAYLIST: 312,
        HLS_NETWORK_NO_KEY_RESPONSE: 313,
        HLS_NETWORK_KEY_LOAD: 314,
        HLS_NETWORK_INVALID_SEGMENT: 315,
        HLS_SEGMENT_PARSING: 316,
        DASH_NETWORK: 321,
        DASH_NO_INIT: 322,
        SMOOTH_NETWORK: 331,
        SMOOTH_NO_MEDIA_DATA: 332,
        MANIFEST_UNKNOWN: 400,
        HLS_MANIFEST_MASTER: 411,
        HLS_MANIFEST_PLAYLIST: 412,
        DASH_MANIFEST_UNKNOWN: 420,
        DASH_MANIFEST_NO_PERIODS: 421,
        DASH_MANIFEST_NO_MIMETYPE: 422,
        DASH_INVALID_SEGMENT_INFO: 423,
        SMOOTH_MANIFEST: 431,
        SEGMENT_UNKNOWN: 500,
        TEXT_UNKNOWN: 600,
        APP: 900,
        BREAK_CLIP_LOADING_ERROR: 901,
        BREAK_SEEK_INTERCEPTOR_ERROR: 902,
        IMAGE_ERROR: 903,
        LOAD_INTERRUPTED: 904,
        LOAD_FAILED: 905,
        GENERIC: 999
    });
    var lh = function(a) {
            this.buffer = a;
            this.Qd = new DataView(a.buffer, a.byteOffset);
            this.offset = 0
        },
        mh = function(a) {
            return a.buffer[a.offset++]
        },
        nh = function(a) {
            var b = a.Qd.getUint16(a.offset);
            a.offset += 2;
            return b
        },
        I = function(a) {
            var b = a.Qd.getUint32(a.offset);
            a.offset += 4;
            return b
        },
        Se = function(a) {
            var b = a.Qd.getInt32(a.offset);
            a.offset += 4;
            return b
        },
        oh = function(a) {
            var b = I(a);
            a = I(a);
            return 4294967296 * b + a
        },
        ph = function(a, b) {
            var c = a.buffer.subarray(a.offset, a.offset + b);
            a.offset += b;
            return c
        },
        qh = function(a) {
            for (var b =
                    a.offset; a.offset < a.buffer.length && 0 !== a.Qd.getUint8(a.offset);) a.offset++;
            b = new Uint8Array(a.Qd.buffer, a.Qd.byteOffset + b, a.offset - b);
            a.offset++;
            a = [];
            for (var c = 0, d = 0; c < b.length;) {
                var e = b[c++];
                if (128 > e) a[d++] = String.fromCharCode(e);
                else if (191 < e && 224 > e) {
                    var f = b[c++];
                    a[d++] = String.fromCharCode((e & 31) << 6 | f & 63)
                } else if (239 < e && 365 > e) {
                    f = b[c++];
                    var g = b[c++],
                        h = b[c++];
                    e = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
                    a[d++] = String.fromCharCode(55296 + (e >> 10));
                    a[d++] = String.fromCharCode(56320 + (e & 1023))
                } else f = b[c++],
                    g = b[c++], a[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63)
            }
            return a.join("")
        },
        rh = function(a) {
            return a.buffer.subarray(a.offset)
        },
        K = function(a, b) {
            a.offset += b
        };
    var th = function(a) {
            this.Kk = a;
            this.ci = this.za = this.ue = this.mode = this.Zg = 0;
            this.zi = new sh(this);
            this.Ai = new sh(this);
            this.Yc = [];
            this.reset()
        },
        uh = function(a) {
            return a.ue + a.za
        };
    th.prototype.clear = function() {
        this.ci = this.ue = this.mode = 0;
        this.Yc = [];
        this.reset()
    };
    th.prototype.reset = function() {
        this.mode = 0;
        this.zi.reset(0);
        this.Ai.reset(1)
    };
    var wh = function(a, b, c) {
            if (255 == a && 255 == b || !a && !b) return {
                bg: a,
                cg: b,
                result: 0
            };
            a = vh[a];
            b = vh[b];
            if (a & 128) {
                if (!(b & 128) && 0 != c.l && c.bi == b) return {
                    bg: a,
                    cg: b,
                    result: 1
                }
            } else if (b & 128 && 1 <= a && 31 >= a) return {
                bg: a,
                cg: b,
                result: 2
            };
            return {
                bg: a,
                cg: b,
                result: 3
            }
        },
        yh = function(a, b, c) {
            255 == b && 255 == c || !b && !c ? (45 == ++a.ci && a.reset(), a.zi.hd.clear(), a.Ai.hd.clear()) : (a.ci = 0, xh(a.zi, b, c))
        };
    th.prototype.decode = function() {
        this.Yc.sort(function(c, d) {
            var e = c.time - d.time;
            return 0 == e ? c.order - d.order : e
        });
        for (var a = 0; a < this.Yc.length; a++) {
            var b = this.Yc[a];
            this.ue = b.time;
            0 == b.type ? yh(this, b.Ak, b.Bk) : 1 == b.type && this.Zg & 496 && xh(this.Ai, b.Ak, b.Bk)
        }
        this.Yc.length = 0
    };
    var vh = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
            12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
        ],
        zh = function() {
            this.rc = 0
        };
    zh.prototype.set = function(a) {
        this.rc = a
    };
    zh.prototype.get = function() {
        return this.rc
    };
    var Ah = function() {
        this.bi = this.uk = this.l = 0
    };
    Ah.prototype.clear = function() {
        this.l = 0
    };
    Ah.prototype.update = function() {
        this.l = 2 == this.l ? 1 : 0
    };
    Ah.prototype.matches = function(a, b) {
        return 0 != this.l && a == this.uk && b == this.bi
    };
    var Bh = function() {
        this.timestamp = this.tc = 0;
        this.$e = !1
    };
    Bh.prototype.reset = function() {
        this.timestamp = this.tc = 0;
        this.$e = !1
    };
    var Ch = function(a) {
            this.Ab = [];
            for (var b = 0; 15 >= b; b++) {
                this.Ab[b] = [];
                for (var c = 0; 32 >= c; c++) this.Ab[b][c] = new Bh
            }
            this.ba = this.Da = this.Ea = 0;
            this.style = new zh;
            this.ja = a;
            this.qf = 0
        },
        Eh = function(a) {
            for (var b = "", c = uh(a.ja), d = c, e = 1; 15 >= e; ++e) {
                for (var f = "", g = !1, h = 1; 32 >= h; ++h) {
                    var l = a.Ab[e][h];
                    if (0 != l.tc) {
                        var m = String.fromCharCode(l.tc);
                        " " != m && (g = !0);
                        f += m;
                        var p = l.timestamp;
                        p < c && (c = p);
                        p > d && (d = p);
                        3 == a.style.rc ? (!l.$e && " " == m && g && 32 > h && Dh(a.ja.Kk, c, c, b ? b + "\n" + f : f), l.$e = !0) : l.reset()
                    }
                }
                f && (b = b ? b + "\n" + f : f)
            }
            b && Dh(a.ja.Kk,
                c, d, b)
        };
    Ch.prototype.reset = function(a) {
        for (var b = 0; 15 >= b; b++)
            for (var c = 0; 32 >= c; c++) this.Ab[b][c].reset();
        this.qf = a;
        this.ba = 0;
        this.Da = this.Ea = 1
    };
    var Fh = function(a) {
            return a.Ab[a.Ea][a.Da]
        },
        Ih = function(a, b, c) {
            2 <= b && 1 < a.Da && (--a.Da, Fh(a).tc = 0);
            var d = Fh(a);
            d.timestamp = uh(a.ja);
            a: {
                switch (b) {
                    case 0:
                        b = Gh[(c & 127) - 32];
                        break a;
                    case 1:
                        b = Hh[c & 15];
                        break a
                }
                b = 0
            }
            d.tc = b;
            32 > a.Da && a.Da++
        },
        Jh = function(a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; 32 >= f; f++) {
                    var g = a.Ab[b + e][f],
                        h = a.Ab[c + e][f];
                    g.tc = h.tc;
                    g.timestamp = h.timestamp;
                    g.$e = h.$e
                }
        },
        Kh = function(a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; 32 >= e; e++) a.Ab[b + d][e].reset()
        },
        Lh = function(a) {
            a.Ea = 0 < a.ba ? a.ba : 1;
            a.Da = 1;
            Kh(a,
                0, 15)
        },
        Gh = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        Hh = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        Mh = function(a) {
            this.ja = a;
            this.ii = 0;
            this.style = new zh;
            this.kj = new Ch(a);
            this.lj = new Ch(a);
            this.ka =
                new Ch(a);
            this.Db = this.kj;
            this.fe = this.lj;
            this.X = this.Db
        };
    Mh.prototype.reset = function(a, b) {
        this.ii = b;
        this.style.set(2);
        this.Db = this.kj;
        this.fe = this.lj;
        this.X = this.Db;
        var c = (a << 2) + (b << 1);
        this.kj.reset(c);
        this.lj.reset(c);
        this.ka.reset((a << 2) + (b << 1) + 1)
    };
    var Nh = function(a, b) {
            var c = a.Db;
            switch (a.style.get()) {
                case 4:
                    if (0 < c.ba) break;
                case 1:
                case 2:
                    Eh(c), Lh(a.Db), Lh(a.fe), c.Ea = 15, c.ba = b
            }
            a.style.set(3);
            a.X = c;
            a.X.style = a.style;
            a.ja.mode = 1 << c.qf;
            c.Da = 1;
            c.ba != b && (c.ba > b ? (Eh(c), Kh(c, c.Ea - c.ba, b)) : c.Ea < b && (b = c.ba), c.ba = b)
        },
        Oh = function(a) {
            a.style.set(1);
            a.X = a.fe;
            a.X.ba = 0;
            a.X.style = a.style;
            a.ja.mode = 1 << a.X.qf
        },
        Ph = function(a) {
            a.style.set(4);
            a.X = a.ka;
            a.X.style = a.style;
            a.ja.mode = 1 << a.X.qf
        },
        sh = function(a) {
            this.ja = a;
            this.hd = new Ah;
            this.Bi = 0;
            this.dg = new Mh(a);
            this.vk =
                new Mh(a);
            this.si = this.dg
        };
    sh.prototype.reset = function(a) {
        this.Bi = a;
        this.hd.clear();
        this.si = this.dg;
        this.dg.reset(a, 0);
        this.vk.reset(a, 1)
    };
    var xh = function(a, b, c) {
        a.hd.update();
        b = wh(b, c, a.hd);
        switch (b.result) {
            case 0:
                return;
            case 1:
            case 2:
                return
        }
        var d = b.bg;
        c = b.cg;
        if (32 <= d || !d) a.ja.mode & a.ja.Zg && (b = d, b & 128 && (b = 127), c & 128 && (c = 127), a = a.si.X, b & 96 && Ih(a, 0, b), c & 96 && Ih(a, 0, c));
        else if (d & 16) a: if (!a.hd.matches(d, c) && (b = a.hd, b.uk = d, b.bi = c, b.l = 2, b = d & 8 ? a.vk : a.dg, a.si = b, a.ja.mode = 1 << (a.Bi << 2) + (b.ii << 1) + (4 == b.style.rc ? 1 : 0), (a.ja.mode | 1 << (a.Bi << 2) + (b.ii << 1) + (4 != b.style.rc ? 1 : 0)) & a.ja.Zg))
            if (c & 64) {
                a = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(d & 7) << 1 | c >>
                    5 & 1
                ];
                c = c & 16 ? 4 * ((c & 14) >> 1) : 0;
                d = b.X;
                switch (b.style.get()) {
                    case 4:
                        a = d.Ea;
                        break;
                    case 3:
                        if (a != d.Ea) {
                            if (a < d.ba && (a = d.ba, a == d.Ea)) break;
                            var e = 1 + d.Ea - d.ba,
                                f = 1 + a - d.ba;
                            Jh(d, f, e, d.ba);
                            b = e;
                            var g = d.ba;
                            f < e ? (e = f + g - e, 0 < e && (b += e, g -= e)) : (e = e + g - f, 0 < e && (g -= e));
                            Kh(d, b, g)
                        }
                }
                d.Ea = a;
                d.Da = c + 1
            } else switch (d & 7) {
                case 1:
                    switch (c & 112) {
                        case 32:
                            Ih(b.X, 0, 32);
                            break a;
                        case 48:
                            57 == c ? (b = b.X, Fh(b).tc = 0, 32 > b.Da && b.Da++) : Ih(b.X, 1, c & 15)
                    }
                    break;
                case 2:
                    c & 32 && Ih(b.X, 2, c & 31);
                    break;
                case 3:
                    c & 32 && Ih(b.X, 3, c & 31);
                    break;
                case 4:
                case 5:
                    if (32 <= c && 47 >=
                        c) switch (c) {
                        case 32:
                            Oh(b);
                            break;
                        case 33:
                            b = b.X;
                            1 < b.Da && (--b.Da, Fh(b).tc = 0);
                            break;
                        case 36:
                            b = b.X;
                            a = Fh(b);
                            for (c = 0; 15 >= c; c++)
                                for (d = 0; 32 >= d; d++)
                                    if (b.Ab[c][d] == a) {
                                        for (; 32 >= d; d++) b.Ab[c][d].reset();
                                        break
                                    }
                            break;
                        case 37:
                            Nh(b, 2);
                            break;
                        case 38:
                            Nh(b, 3);
                            break;
                        case 39:
                            Nh(b, 4);
                            break;
                        case 40:
                            Ih(b.X, 0, 32);
                            break;
                        case 41:
                            b.style.set(2);
                            b.X = b.Db;
                            b.X.ba = 0;
                            b.X.style = b.style;
                            b.ja.mode = 1 << b.X.qf;
                            break;
                        case 42:
                            a = b.ka;
                            a.ba = 15;
                            a.style.set(4);
                            Lh(a);
                            Ph(b);
                            break;
                        case 43:
                            Ph(b);
                            break;
                        case 44:
                            a = b.Db;
                            switch (b.style.get()) {
                                case 1:
                                case 2:
                                case 3:
                                    Eh(a)
                            }
                            Kh(a,
                                0, 15);
                            break;
                        case 45:
                            b: {
                                a = b.X;
                                switch (b.style.get()) {
                                    default:
                                        case 2:
                                        case 1:
                                        break b;
                                    case 4:
                                            if (15 > a.Ea) {
                                            ++a.Ea;
                                            a.Da = 1;
                                            break b
                                        }
                                    case 3:
                                }
                                2 > a.ba && (a.ba = 2, a.Ea < a.ba && (a.Ea = a.ba));b = a.Ea - a.ba + 1;Eh(a);Jh(a, b, b + 1, a.ba - 1);Kh(a, a.Ea, 1)
                            }
                            break;
                        case 46:
                            Kh(b.fe, 0, 15);
                            break;
                        case 47:
                            Eh(b.Db), a = b.fe, b.fe = b.Db, b.Db = a, Oh(b)
                    }
                    break;
                case 7:
                    switch (c) {
                        case 33:
                        case 34:
                        case 35:
                            b = b.X, 32 < (b.Da += c & 3) && (b.Da = 32)
                    }
            }
    };
    var Qh = function(a) {
        this.gi = a;
        this.lc = 0;
        this.xb = new Uint8Array(5120)
    };
    Qh.prototype.clear = function() {
        this.lc = 0
    };
    Qh.prototype.append = function(a) {
        this.xb.set(a, this.lc);
        this.lc += a.length
    };
    Qh.prototype.process = function(a) {
        for (var b, c = b = 0, d = 0; c < this.lc;) 2 == b && 3 == this.xb[c] ? b = 0 : (0 == this.xb[c] ? b++ : b = 0, this.xb[d] = this.xb[c], d++), c++;
        b = c - d;
        for (c = 0; c + b < this.lc;) {
            for (var e = 0; 255 == this.xb[c];) e += 255, c++;
            e += this.xb[c++];
            for (d = 0; 255 == this.xb[c];) d += 255, c++;
            d += this.xb[c++];
            if (4 == e) {
                e = this.gi.ja;
                var f = a,
                    g = new lh(this.xb.subarray(c, c + d));
                if (181 == mh(g) && 49 == nh(g) && 1195456820 == I(g) && 3 == mh(g)) {
                    var h = mh(g);
                    if (0 != (h & 64)) {
                        h &= 31;
                        K(g, 1);
                        for (var l = 0; l < h; l++) {
                            var m = mh(g),
                                p = (m & 4) >> 2,
                                u = mh(g),
                                D = mh(g);
                            p && e.Yc.push({
                                time: f,
                                type: m & 3,
                                Ak: u,
                                Bk: D,
                                order: e.Yc.length
                            })
                        }
                    }
                }
            }
            c += d
        }
        this.lc = 0
    };
    var Rh = [96E3, 88200, 64E3, 48E3, 44100, 32E3, 24E3, 22050, 16E3, 12E3, 11025, 8E3, 7350],
        Sh = function(a) {
            A(z("cast.player.mp4.base"), a)
        },
        Th = function(a, b, c) {
            if (0 > a || 32 <= a) return Sh("Invalid object type id: " + a), null;
            var d = Rh.indexOf(b);
            return 0 > d ? (Sh("Invalid sample rate: " + b), null) : 0 > c || 16 < c ? (Sh("Invalid channels: " + c), null) : new Uint8Array([a << 3 | d >> 1, d << 7 | c << 3])
        };
    var Vh = function(a) {
        this.la = Uh(a)
    };
    Vh.prototype.reset = function(a) {
        this.la = Uh(a)
    };
    var Uh = function(a) {
        for (var b = -1, c = 0; c < a.length; c++) {
            var d = parseInt(a.charAt(c), 10);
            if (isNaN(d)) throw Error("Invalid positive base 10 integer string");
            0 > b && d && (b = c)
        }
        return a.substr(b, a.length)
    };
    Vh.prototype.toString = function() {
        return this.la
    };
    Vh.prototype.add = function(a) {
        if (0 > a || Math.floor(a) != a) throw Error("Value must be a positive integer");
        var b = a + "",
            c = Math.max(b.length, this.la.length);
        a = [];
        for (var d = 0, e = 0; e < c; e++) {
            var f = d + parseInt(e < b.length ? b.charAt(b.length - 1 - e) : "0", 10) + parseInt(e < this.la.length ? this.la.charAt(this.la.length - 1 - e) : "0", 10);
            10 <= f ? (d = 1, f -= 10) : d = 0;
            a.push(f)
        }
        b = 0 < d ? "1" : "";
        for (c = a.length - 1; 0 <= c; c--) b += a[c];
        this.la = b
    };
    var Wh = function(a, b) {
        if (b.la.length < a.la.length) return !0;
        if (b.la.length > a.la.length) return !1;
        for (var c = 0; c < b.la.length; c++) {
            var d = parseInt(a.la.charAt(c), 10),
                e = parseInt(b.la.charAt(c), 10);
            if (d < e) return !1;
            if (d > e) break
        }
        return !0
    };
    var Xh = function(a) {
        lh.call(this, a)
    };
    q(Xh, lh);
    var Yh = function(a) {
            this.buffer = new Uint8Array(new ArrayBuffer(a ? a : 2E4));
            this.offset = 0
        },
        Zh = function(a) {
            return a.buffer.subarray(0, a.offset)
        };
    Yh.prototype.Qh = function(a) {
        L(this, [a])
    };
    Yh.prototype.Gd = function(a) {
        L(this, [a >> 8, a])
    };
    Yh.prototype.A = function(a) {
        L(this, [a >> 24, a >> 16, a >> 8, a])
    };
    Yh.prototype.pk = function(a) {
        this.A(a / 4294967296);
        this.A(a % 4294967296)
    };
    var L = function(a, b) {
        var c = b.length;
        if (!(a.offset + c <= a.buffer.length)) {
            for (var d = a.buffer.length; d < a.offset + c;) d *= 2;
            d = new Uint8Array(new ArrayBuffer(d));
            d.set(a.buffer, 0);
            a.buffer = d
        }
        a.buffer.set(b, a.offset);
        a.offset += c
    };
    var $h = function(a) {
        Yh.call(this, a)
    };
    q($h, Yh);
    var ai = function(a, b, c) {
        (new DataView(a.buffer, a.byteOffset, a.byteLength)).setUint32(b, c)
    };
    var bi = function(a) {
            this.U = new Xh(a);
            this.Rc = 0;
            this.ye = this.$g = null;
            this.ih = a;
            this.Ib = 0;
            this.Rc = I(this.U);
            this.Ib = 4;
            this.$g = I(this.U);
            this.Ib += 4;
            1 === this.Rc && (this.Rc = oh(this.U), this.Ib += 8);
            1970628964 === this.$g && (this.ye = new Ng(ph(this.U, 16)), this.Ib += 16)
        },
        ci = function(a) {
            switch (a.$g) {
                case 1836019574:
                case 1836019558:
                case 1836475768:
                case 1953653099:
                case 1953653094:
                case 1701082227:
                case 1835297121:
                case 1835626086:
                case 1684631142:
                case 1937007212:
                    return !0;
                default:
                    return !1
            }
        };
    bi.prototype.Ia = function() {
        return this.$g
    };
    var di = function(a) {
            return a.ih.subarray(0, a.Rc)
        },
        M = function(a) {
            return di(a).subarray(a.Ib)
        };
    bi.prototype.s = function(a) {
        L(a, this.ih.subarray(0, this.Rc))
    };
    var N = function(a) {
        bi.call(this, a);
        this.Ac = this.ra = 0;
        a = I(this.U);
        this.Ib += 4;
        this.ra = a >>> 24;
        this.Ac = a & 16777215
    };
    q(N, bi);
    var ei = function(a) {
        N.call(this, a)
    };
    q(ei, N);
    ei.prototype.Gi = function(a) {
        for (var b = this.ra, c = mh(this.U), d = Array(c), e = 0; e < c; e++) {
            if (1 === b) {
                var f = I(this.U);
                var g = I(this.U);
                var h = I(this.U);
                var l = I(this.U);
                var m = new Vh(Math.floor(4294967296 * f / 1E4).toString() + "0000");
                m.add(f % 1E4 * 7296 % 1E4);
                m.add(g);
                f = 4294967296 / a * f + g / a;
                h = 4294967296 / a * h + l / a
            } else l = I(this.U), h = I(this.U), m = new Vh(l.toString()), f = l / a, h /= a;
            d[e] = {
                time: f,
                duration: h,
                ec: m,
                offset: 0,
                size: 0,
                url: null
            }
        }
        return d
    };
    var fi = new Ng([212, 128, 126, 242, 202, 57, 70, 149, 142, 84, 38, 203, 158, 70, 167, 159]),
        gi = function(a) {
            N.call(this, a)
        };
    q(gi, N);
    gi.prototype.Gi = function(a) {
        var b = this.ra;
        K(this.U, 4);
        var c = I(this.U),
            d = 0 === b ? I(this.U) : oh(this.U),
            e = 0 === b ? I(this.U) : oh(this.U),
            f = a + di(this).byteOffset,
            g = this.Rc;
        K(this.U, 2);
        a = nh(this.U);
        b = Array(a);
        e = f + g + e;
        for (f = 0; f < a; f++) {
            g = I(this.U) & 2147483647;
            var h = I(this.U);
            K(this.U, 4);
            b[f] = {
                time: d / c,
                duration: h / c,
                ec: null,
                offset: e,
                size: g,
                url: null
            };
            d += h;
            e += g
        }
        return b
    };
    var hi = function(a) {
        N.call(this, a);
        this.uh = new Uint8Array([]);
        this.Lj = null;
        this.Zi = !1;
        this.rb()
    };
    q(hi, N);
    hi.prototype.rb = function() {
        var a = new Xh(M(this)),
            b = this.Ac;
        b & 1 && K(a, 20);
        var c = I(a);
        this.Lj = rh(a);
        this.Zi = b & 2 ? !0 : !1;
        this.uh = new Uint8Array(new ArrayBuffer(c));
        for (b = 0; b < c; b++)
            if (this.Zi) {
                K(a, 8);
                var d = 6 * nh(a);
                this.uh[b] = 10 + d;
                K(a, d)
            } else this.uh[b] = 8, K(a, 8)
    };
    var ii = new Ng([162, 57, 79, 82, 90, 155, 79, 20, 162, 68, 108, 66, 124, 100, 141, 244]),
        ji = function(a) {
            N.call(this, a);
            this.yc = 0;
            this.rb()
        };
    q(ji, N);
    ji.prototype.rb = function() {
        var a = new Xh(M(this));
        K(a, 4);
        K(a, 4);
        this.yc = I(a)
    };
    var ki = function(a) {
        N.call(this, a);
        this.th = 0;
        this.am = [];
        this.sh = [];
        this.rb()
    };
    q(ki, N);
    ki.prototype.rb = function() {
        var a = new Xh(M(this));
        this.th = I(a);
        var b = this.Ac;
        b & 1 && K(a, 4);
        b & 4 && K(a, 4);
        var c = !!(b & 256),
            d = !!(b & 512),
            e = !!(b & 1024);
        b = !!(b & 2048);
        for (var f = 0; f < this.th; f++) c && K(a, 4), d && this.am.push(I(a)), e && K(a, 4), b && (1 === this.ra ? this.sh.push(Se(a)) : this.sh.push(I(a)))
    };
    ki.prototype.yh = function(a) {
        ai(M(this), 4, a)
    };
    var li = function(a) {
        N.call(this, a);
        this.Fa = 9E4;
        this.rb()
    };
    q(li, N);
    li.prototype.rb = function() {
        var a = new Xh(M(this));
        1 === this.ra ? (K(a, 8), K(a, 8)) : (K(a, 4), K(a, 4));
        this.Fa = I(a)
    };
    var mi = function(a) {
        N.call(this, a)
    };
    q(mi, N);
    var ni = function(a) {
        N.call(this, a);
        this.$j = new Ng(ph(this.U, 16));
        a = I(this.U);
        this.lg = ph(this.U, a)
    };
    q(ni, N);
    ni.prototype.getData = function() {
        return this.lg
    };
    var oi = function(a) {
        N.call(this, a);
        this.nc = 1 === this.ra ? oh(this.U) : I(this.U)
    };
    q(oi, N);
    oi.prototype.getStartTime = function() {
        return this.nc
    };
    var pi = function(a) {
        N.call(this, a)
    };
    q(pi, N);
    var qi = function(a) {
        bi.call(this, a)
    };
    q(qi, bi);
    qi.prototype.yh = function(a, b) {
        var c = O(M(this), 1953653094, void 0, void 0);
        if (c) {
            var d = O(M(c), 1953658222, void 0, void 0);
            d && d.yh(a - this.ih.byteOffset);
            b && (a = O(M(c), 1935763823, void 0, void 0)) && (b -= this.ih.byteOffset, c = 0, a.Ac & 1 && (c += 8), c += 4, d = M(a), 0 != a.ra && (ai(d, c, Math.floor(b / 4294967296)), c += 4), ai(d, c, Math.floor(b % 4294967296)))
        }
    };
    var ri = function(a, b) {
            var c = O(a, 1836019558);
            a = M(O(a, 1835295092)).byteOffset;
            b ? c.yh(a + b, a) : c.yh(a)
        },
        si = function(a) {
            N.call(this, a);
            this.jj = [];
            this.cm = [];
            this.vi = 0;
            this.rb()
        };
    q(si, N);
    si.prototype.rb = function() {
        var a = new Xh(M(this));
        this.vi = I(a);
        for (var b = 0; b < this.vi; b++) {
            if (1 === this.ra) {
                this.cm.push(oh(a));
                var c = this.jj,
                    d = c.push,
                    e = I(a),
                    f = I(a),
                    g = e & 2147483648;
                g && (f = ~f + 1 >>> 0, e = ~e >>> 0, 0 === f && (e = e + 1 >>> 0));
                e = 4294967296 * e + f;
                d.call(c, g ? -e : e)
            } else 0 === this.ra && (this.cm.push(I(a)), this.jj.push(Se(a)));
            K(a, 2);
            K(a, 2)
        }
    };
    var ti = function(a) {
        N.call(this, a);
        this.uc = this.Nj = "";
        this.Eb = this.nc = this.Ni = this.qg = this.kh = this.Fa = 0;
        this.wl = [];
        this.rb()
    };
    q(ti, N);
    ti.prototype.getStartTime = function() {
        return this.nc
    };
    ti.prototype.rb = function() {
        var a = new Xh(M(this));
        0 === this.ra ? (this.Nj = qh(a), this.uc = qh(a), this.Fa = I(a), this.kh = I(a), this.qg = I(a), this.Ni = I(a)) : 1 === this.ra && (this.Fa = I(a), this.kh = oh(a), this.qg = I(a), this.Ni = I(a), this.Nj = qh(a), this.uc = qh(a));
        for (; a.offset < a.buffer.length;) this.wl.push(mh(a))
    };
    var ui = function(a) {
            switch (a.Ia()) {
                case 1701671783:
                    return new ti(di(a));
                case 1701606260:
                    return new si(di(a));
                case 1836019558:
                    return new qi(di(a));
                case 1835296868:
                    return new li(di(a));
                case 1953658222:
                    return new ki(di(a));
                case 1935763823:
                    return new pi(di(a));
                case 1936286840:
                    return new gi(di(a));
                case 1952868452:
                    return new mi(di(a));
                case 1970628964:
                    var b = a.ye;
                    return ii.Yb(b) ? new hi(di(a)) : fi.Yb(b) ? new ei(di(a)) : a;
                case 1886614376:
                    return new ni(di(a));
                case 1952867444:
                    return new oi(di(a));
                case 1953654136:
                    return new ji(di(a));
                case 1702061171:
                case 1751411826:
                case 1835427940:
                case 1836476516:
                case 1935763834:
                case 1935894637:
                case 1937011571:
                case 1952804451:
                case 1953196132:
                    return new N(di(a));
                default:
                    return a
            }
        },
        O = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            for (var e = 0; e < a.length;) {
                var f = new bi(a.subarray(e));
                e += f.Rc;
                if (f.Ia() === b && (1970628964 != b || c && c.Yb(f.ye))) return ui(f);
                if (d && ci(f) && (f = O(M(f), b, c, d))) return f
            }
            return null
        },
        vi = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            for (var d = 0, e = []; d < a.length;) {
                var f = new bi(a.subarray(d));
                d += f.Rc;
                if (b) {
                    var g =
                        f.Ia();
                    g && b.includes(g) && e.push(ui(f))
                } else e.push(ui(f));
                c && ci(f) && (e = e.concat(vi(M(f), b, c)))
            }
            return e
        },
        wi = function(a, b) {
            return vi(a, void 0, void 0 === b ? !1 : b)
        };
    var xi = function(a) {
        this.mc = new Qh(a);
        this.Vd = 0;
        this.Fa = 9E4;
        this.yc = null;
        this.Nb = []
    };
    k = xi.prototype;
    k.ta = function(a) {
        a ? this.Nb = vi(a, [1835296868, 1953654136, 1953658222, 1835295092], !0) : (this.Nb = [], this.Vd = 0)
    };
    k.dm = function(a) {
        this.Vd = a
    };
    k.fm = function(a) {
        this.Fa = a
    };
    k.Ka = function() {
        return !this.Nb.length
    };
    k.Mg = function() {
        return !this.Nb.length
    };
    k.parse = function() {
        if (this.Nb.length) {
            for (var a, b, c, d = 0, e = 0; e < this.Nb.length; e++) {
                var f = this.Nb[e];
                switch (f.Ia()) {
                    case 1835296868:
                        this.Fa = f.Fa;
                        break;
                    case 1953654136:
                        this.yc = f.yc;
                        break;
                    case 1953658222:
                        a = f.th;
                        b = f.am;
                        c = f.sh;
                        break;
                    case 1835295092:
                        var g = b,
                            h = c;
                        if (a && g && g.length && h) {
                            f = new lh(M(f));
                            if (this.yc && this.Fa) var l = this.yc / this.Fa;
                            else if (this.Nb.length) {
                                l = 0;
                                for (var m = n(this.Nb), p = m.next(); !p.done; p = m.next()) p = p.value, 1953658222 == p.Ia() && (l += p.th);
                                l = l ? this.Vd / l : 0
                            } else l = 0;
                            m = 0;
                            for (p = g[0]; f.offset <
                                f.buffer.length;) {
                                var u = I(f);
                                6 == (mh(f) & 31) ? (this.mc.append(ph(f, u - 1)), this.mc.process(0 == h.length ? d : d + h[m] / this.Fa)) : K(f, u - 1);
                                p -= u + 4;
                                0 == p && (d += l, m++, p = g[m])
                            }
                        }
                }
            }
            this.Nb = []
        }
    };
    var yi = function() {
        this.B = null;
        this.Ud = this.hc = this.$k = this.Zh = this.Dg = this.Af = this.K = 0;
        this.Ql = this.Ek = !1
    };
    yi.prototype.Ka = function() {
        return null === this.B
    };
    yi.prototype.Mg = function() {
        return this.K >= this.B.length
    };
    yi.prototype.ta = function(a) {
        this.B = a;
        this.Ud = this.hc = this.Zh = this.Dg = this.Af = this.K = 0
    };
    yi.prototype.parse = function() {
        for (var a = this.K; this.K < this.B.length && !(524288 < this.K - a);) {
            for (; this.K < this.B.length && 71 != this.B[this.K];) this.K++;
            if (this.K + 188 > this.B.length) break;
            var b = this.K + 188,
                c = b - 1;
            this.K++;
            var d = this.B[this.K] & 64,
                e = this.B[this.K] & 31;
            this.K++;
            e = e << 8 | this.B[this.K];
            this.K++;
            var f = (this.B[this.K] & 48) >> 4;
            this.K++;
            f & 2 && (this.K += this.B[this.K] + 1);
            if (0 == e || e == this.Af)
                if (d && this.K++, c = this.B[this.K], this.K++, 0 == c)
                    for (c = this.K, d = this.B[c] & 15, c++, d = d << 8 | this.B[c], c++, d = c + d - 4, c += 5; c < d;)
                        if (e =
                            this.B[c], c++, e = (e << 8) + this.B[c], c++, 0 == e) c += 2;
                        else {
                            this.Af = this.B[c] & 31;
                            c++;
                            this.Af = (this.Af << 8) + this.B[c];
                            break
                        }
            else {
                if (2 == c)
                    for (this.Ql = !0, c = this.K, d = this.B[c] & 15, c++, d = d << 8 | this.B[c], c++, d = c + d - 4, c = c + 5 + 2, e = this.B[c] & 15, c++, e = e << 8 | this.B[c], c += e + 1; c < d;) {
                        e = this.B[c];
                        c++;
                        f = this.B[c] & 31;
                        c++;
                        f = f << 8 | this.B[c];
                        c++;
                        switch (e) {
                            case 27:
                            case 219:
                                this.Dg = f;
                                break;
                            case 15:
                            case 207:
                                this.Ek = !0;
                                this.Zh = f;
                                break;
                            case 21:
                                this.$k = f
                        }
                        e = this.B[c] & 15;
                        c++;
                        e = e << 8 | this.B[c];
                        c += e + 1
                    }
            } else if (e == this.$k) this.Pl(this.K, c, !!d);
            else if (e == this.Dg || e == this.Zh) d && this.Aj(this.K), e == this.Dg && this.Ol(this.K, c);
            this.K = b
        }
    };
    var zi = function(a, b) {
        var c = ((a.B[b] & 14) << 13) / 1.373291015625;
        c += (a.B[b + 1] << 6) / 1.373291015625;
        c += (a.B[b + 2] & 254) / 5.4931640625;
        c += a.B[b + 3] / 703.125;
        return c += (a.B[b + 4] & 254) / 18E4
    };
    yi.prototype.Aj = function(a) {
        if (0 == this.B[a] && 0 == this.B[a + 1] && 1 == this.B[a + 2]) {
            a += 7;
            var b = this.B[a] >> 6 & 3;
            a++;
            var c = this.B[a];
            a++;
            this.K = a + c;
            2 == b ? this.Ud = this.hc = zi(this, a) : 3 == b && (this.hc = zi(this, a), this.Ud = zi(this, a + 5))
        }
    };
    yi.prototype.Pl = function() {};
    yi.prototype.Ol = function() {};
    var Ai = function(a) {
        yi.call(this);
        this.mc = new Qh(a)
    };
    q(Ai, yi);
    Ai.prototype.ta = function(a) {
        yi.prototype.ta.call(this, a);
        this.mc.clear()
    };
    Ai.prototype.dm = function() {};
    Ai.prototype.fm = function() {};
    Ai.prototype.Ol = function(a, b) {
        for (var c = 0;;) {
            var d = Bi(this, a, b),
                e = 0 <= d;
            if (0 < this.mc.lc || 6 === c || e) {
                c = e ? d - 1 : b;
                var f = this.mc;
                f.lc + (c - a + 1) <= f.xb.length || this.mc.process(this.hc);
                this.mc.append(this.B.subarray(a, c + 1))
            }
            if (!e) break;
            this.mc.process(this.hc);
            a = d;
            c = this.B[a++] & 31
        }
    };
    var Bi = function(a, b, c) {
        if (b >= c) return -1;
        for (c -= 3; b <= c;) {
            if (0 == a.B[b] && 0 == a.B[b + 1]) {
                if (0 == a.B[b + 2] && 1 == a.B[b + 3]) return b + 4;
                if (1 == a.B[b + 2]) return b + 3
            }
            b++
        }
        return -1
    };
    var Ci = function() {
            this.rf = null
        },
        Di = function(a, b) {
            a.rf = a.rf || Vg("receiver-flags") || null;
            return !(!a.rf || !a.rf[b])
        },
        Ei = function() {
            var a = Ci.Xd();
            return Di(a, "enable_respect_discontinuity_sequence")
        };
    Ci.prototype.reset = function() {
        this.rf = null
    };
    ra(Ci);
    var Fi = function(a, b, c) {
        this.v = a;
        this.yk = "cast-captions-cue-styling";
        this.Gk = "[" + this.yk + '="true"]::cue';
        for (a = this.v; a.parentNode;) a = a.parentNode;
        this.Jj = 0 > a.toString().toLowerCase().indexOf("shadow") ? document.head : a;
        a = this.Jj.getElementById ? this.Jj.getElementById("cue-style") : document.getElementById("cue-style");
        a || (a = document.createElement("style"), a.id = "cue-style", a.type = "text/css", this.Jj.appendChild(a), a.appendChild(document.createTextNode("")));
        this.Pm = a;
        this.Nd = this.Pm.sheet;
        this.gg = b;
        this.Jm =
            c
    };
    Fi.prototype.Pf = function(a, b) {
        var c = this,
            d = this.gg.Bg();
        if (!(0 === a.length || 0 < d.length)) {
            switch (this.Jm) {
                case "webvtt":
                    Gi(this, ".white", "color: rgba(255,255,255,1);"), Gi(this, ".lime", "color: rgba(0,255,0,1);"), Gi(this, ".cyan", "color: rgba(0,255,255,1);"), Gi(this, ".red", "color: rgba(255,0,0,1);"), Gi(this, ".yellow", "color: rgba(255,255,0,1);"), Gi(this, ".magenta", "color: rgba(255,0,255,1);"), Gi(this, ".blue", "color: rgba(0,0,255,1);"), Gi(this, ".black", "color: rgba(0,0,0,1);"), Gi(this, ".bg_white", "background-color: rgba(255,255,255,1);"), Gi(this,
                        ".bg_lime", "background-color: rgba(0,255,0,1);"), Gi(this, ".bg_cyan", "background-color: rgba(0,255,255,1);"), Gi(this, ".bg_red", "background-color: rgba(255,0,0,1);"), Gi(this, ".bg_yellow", "background-color: rgba(255,255,0,1);"), Gi(this, ".bg_magenta", "background-color: rgba(255,0,255,1);"), Gi(this, ".bg_blue", "background-color: rgba(0,0,255,1);"), Gi(this, ".bg_black", "background-color: rgba(0,0,0,1);"), a = Hi(b, a)
            }
            a = n(a);
            for (b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                d = b.wh.map(function(e) {
                    return "" + c.Gk + e
                });
                d = d.join(",\n");
                try {
                    this.Nd.insertRule(d + " { " + b.rules + " }", this.Nd.cssRules.length)
                } catch (e) {
                    C(Ii, "Found invalid style: " + (d + " { " + b.rules + " }"))
                }
            }
            this.v.setAttribute(this.yk, !0)
        }
    };
    Fi.prototype.Ld = function() {
        if (!(0 < this.gg.Bg().length))
            for (var a = this.Nd.cssRules.length - 1; 0 <= a; a--) this.Nd.deleteRule(a)
    };
    var Gi = function(a, b, c) {
            a.Nd.insertRule(a.Gk + "(" + b + ") { " + c + " }", a.Nd.cssRules.length)
        },
        Hi = function(a, b) {
            if (!a) return b;
            for (var c = n(b), d = c.next(); !d.done; d = c.next()) d = d.value, d.wh = d.wh.filter(function(e) {
                if (!e.includes("#")) return !0;
                if (!a.Mi) return !1;
                for (var f = e, g, h; h = Ji.exec(e);) g = h[0], h = h[1].replace(/^0*/, ""), h = String.fromCodePoint(parseInt(h, 16)), f = f.replace(g, h);
                f = f.replace(/\\/g, "");
                return a.Mi && f.includes(a.Mi)
            }).map(function(e) {
                return e.startsWith("(#") ? "" : e
            });
            return b.filter(function(e) {
                return 0 <
                    e.wh.length
            })
        },
        Ji = /\\([0-9A-Fa-f]{1,6})\s?/g,
        Ii = z("cast.player.core.CaptionsStyler");
    var Ki = function() {
            this.Le = new Wf
        },
        Li = function(a) {
            return a.Le.Gb().map(function(b) {
                return lb(b)
            })
        };
    Ki.prototype.yj = function(a, b) {
        a = (new TextDecoder).decode(a);
        return this.parse(a, b)
    };
    var Mi = function(a) {
        this.Le = new Wf;
        this.vg = 30;
        this.fn = a;
        this.Cg = null
    };
    q(Mi, Ki);
    var Ni = function(a, b) {
            a = n(a);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.localName === b) return c;
            return null
        },
        Qi = function(a, b) {
            var c = b.split(":");
            if (1 == c.length) {
                var d = 0;
                if (c = c[0].match(Oi)) switch (b = parseFloat(c[1]), c[2]) {
                    case "h":
                        d = 3600 * b;
                        break;
                    case "m":
                        d = 60 * b;
                        break;
                    case "s":
                        d = b;
                        break;
                    case "ms":
                        d = b / 1E3;
                        break;
                    case "f":
                        d = b / a.vg
                } else C(Pi, "unsupported time expression: " + b);
                return d
            }
            d = 3600 * parseInt(c[0], 10) + 60 * parseInt(c[1], 10) + parseFloat(c[2]);
            4 == c.length && (d += parseInt(c[3], 10) / a.vg);
            return d
        },
        Ri = function(a, b) {
            var c = "";
            b = n(b.childNodes);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, d.nodeType == Node.TEXT_NODE ? (d = d.textContent.trim()) && (c += d) : "span" == d.localName ? (c += Ri(a, d), (d = d.attributes.getNamedItem("tts:fontStyle")) && "italic" == d.value && (c = "<i>" + c + "</i>")) : "br" == d.localName && (c += "\n");
            return c
        };
    Mi.prototype.parse = function(a, b) {
        var c = [],
            d = new DOMParser;
        a = ug(d, wg(a));
        a = Ni(a.childNodes, "tt");
        if (!a) return C(Pi, "missing tt"), c;
        if (d = a.attributes.getNamedItem("tts:extent")) this.Cg = Si(this, d.value, !0);
        var e = d = null,
            f = Ni(a.childNodes, "head");
        if (f) {
            if (e = Ni(f.childNodes, "styling")) {
                d = null;
                e = n(e.childNodes);
                for (var g = e.next(); !g.done; g = e.next()) {
                    var h = g.value;
                    "style" === h.nodeName && h.attributes && (g = h.attributes.getNamedItem("xml:id")) && (h = Ti(this, {
                        node: h,
                        pc: d
                    }), d = d || new Map, d.set(g.value, h))
                }
            } else d =
                null;
            e = d;
            if (g = Ni(f.childNodes, "layout")) {
                f = null;
                g = n(g.childNodes);
                for (h = g.next(); !h.done; h = g.next()) {
                    var l = h.value;
                    "region" === l.nodeName && l.attributes && (h = l.attributes.getNamedItem("xml:id")) && (l = Ti(this, {
                        node: l,
                        pc: e
                    }), l.textAlign = l.textAlign || "left", f = f || new Map, f.set(h.value, l))
                }
                e = f
            } else e = null
        }
        f = Ni(a.childNodes, "body");
        if (!f) return C(Pi, "missing body"), c;
        (c = a.attributes.getNamedItem("ttp:frameRate")) ? this.vg = parseInt(c.value, 10): (C(Pi, "defaulting frameRate to30"), this.vg = 30);
        c = {};
        if (a = Ni(a.childNodes,
                "head"))
            if (a = Ni(a.childNodes, "metadata"))
                for (a = n(a.childNodes), g = a.next(); !g.done; g = a.next()) g = g.value, "image" == g.localName && (c["#" + g.attributes.getNamedItem("xml:id").value] = Ri(this, g));
        a = Ti(this, {
            node: f,
            pc: d,
            Pi: !0
        });
        return Ui(this, {
            node: f,
            T: b,
            Kf: e,
            pc: d,
            bl: c,
            $d: a
        })
    };
    var Ui = function(a, b) {
            var c = b.node,
                d = b.T,
                e = b.Kf,
                f = b.pc,
                g = b.bl;
            b = b.$d;
            var h = null,
                l = null,
                m = null,
                p = [];
            if (!c.attributes) return p;
            for (var u = Ri(a, c), D = n(c.attributes), B = D.next(); !B.done; B = D.next()) switch (B = B.value, B.localName) {
                case "begin":
                    h = Qi(a, B.value) + d;
                    break;
                case "end":
                    l = Qi(a, B.value) + d;
                    break;
                case "backgroundImage":
                    g[B.value] && (m = g[B.value])
            }(u || m) && null !== h && null !== l ? (D = Ti(a, {
                node: c,
                pc: f,
                Kf: e,
                $d: b
            }), h = new VTTCue(h, l, u), !a.fn && (D.textAlign && (h.align = D.textAlign), l = D.origin) && (h.line = l.y, "%" === l.unit &&
                (h.position = l.x, "left" !== h.align && "right" !== h.align && (h.position = 50)), h.snapToLines = !1), p.push({
                te: h,
                gn: m,
                ve: D
            })) : (u || m || h || l) && C(Pi, "Cue not recognized: begin=" + h + ", end=" + l + ", cueText=" + (u + ", imageData=" + m));
            c = n(c.children);
            for (m = c.next(); !m.done; m = c.next()) h = m.value, m = Ti(a, {
                node: h,
                pc: f,
                $d: b,
                Pi: !0
            }), Array.prototype.push.apply(p, Ui(a, {
                node: h,
                T: d,
                Kf: e,
                pc: f,
                bl: g,
                $d: m
            }));
            return p
        },
        Vi = function(a) {
            if ("auto" === a) return null;
            a = a.split(" ");
            return 2 !== a.length ? (C(Pi, "Two numbers are expected in tts:origin"),
                null) : a.find(function(b) {
                return !b.includes("%")
            }) ? (C(Pi, "Only percentage values are supported in tts:origin!"), null) : {
                x: parseInt(a[0], 10),
                y: parseInt(a[1], 10),
                unit: "%"
            }
        },
        Si = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            if ("auto" === b) return null;
            var d = b.split(" ");
            if (2 !== d.length) return C(Pi, "Two numbers are expected in tts:extent"), null;
            b = parseInt(d[0], 10);
            var e = parseInt(d[1], 10);
            d = d.find(function(f) {
                return f.includes("%")
            }) ? "%" : "px";
            !c && a.Cg && (b *= 100 / a.Cg.width, e *= 100 / a.Cg.height, d = "%");
            return {
                width: b,
                height: e,
                unit: d
            }
        },
        Ti = function(a, b) {
            var c = b.node,
                d = void 0 === b.pc ? null : b.pc,
                e = void 0 === b.Kf ? null : b.Kf,
                f = void 0 === b.$d ? void 0 : b.$d;
            b = void 0 === b.Pi ? !1 : b.Pi;
            f = f && Object.assign({}, f) || {};
            if (!c.attributes) return f;
            if (d) {
                var g = c.attributes.getNamedItem("style");
                g && Object.assign(f, d.get(g.value))
            }
            e && (d = c.attributes.getNamedItem("region")) && Object.assign(f, e.get(d.value));
            c = n(c.attributes);
            for (d = c.next(); !d.done; d = c.next()) switch (e = a, d = d.value, g = f, d.name) {
                case "tts:origin":
                    g.origin = Vi(d.value);
                    break;
                case "tts:extent":
                    g.Pe =
                        Si(e, d.value);
                    break;
                case "tts:textAlign":
                    g.textAlign = d.value
            }
            if (b) {
                a = {};
                b = n(Object.entries(f));
                for (f = b.next(); !f.done; f = b.next()) c = n(f.value), f = c.next().value, c = c.next().value, Wi.has(f) && (a[f] = c);
                f = a
            }
            return f
        },
        Pi = z("cast.player.core.TtmlParser"),
        Oi = /([0-9]*\.?[0-9]+)?(h|ms|m|s|f)/,
        Wi = new Set("color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline visibility wrapOption".split(" "));
    var Xi = function() {
        Mi.apply(this, arguments)
    };
    q(Xi, Mi);
    Xi.prototype.yj = function(a, b) {
        a = O(a, 1835295092);
        if (!a) return [];
        a = rh(new lh(M(a)));
        return Mi.prototype.yj.call(this, a, b)
    };
    var Yi = function() {
        this.Le = new Wf;
        this.sg = -1;
        var a = Ci.Xd();
        this.gm = Di(a, "enable_allow_more_digits_for_hours_in_webvtt")
    };
    q(Yi, Ki);
    Yi.prototype.parse = function(a, b) {
        this.sg = -1;
        for (var c = a.trim().split(Zi), d = 0, e = 0, f = n(c[0].split("\n")), g = f.next(); !g.done; g = f.next())
            if (g = g.value, 0 == g.indexOf("X-TIMESTAMP-MAP")) {
                (f = g.match(this.gm ? $i : aj)) && (d = bj(f[1]));
                (f = g.match(cj)) && (e = parseInt(f[1], 10) / 9E4);
                break
            }
        b += e - d;
        if (isNaN(b)) return C(dj, "invalid time offset"), [];
        d = [];
        c = n(c);
        for (e = c.next(); !e.done; e = c.next())
            if (e = e.value) {
                for (var h = b, l = null, m = null, p = null, u = null, D = g = f = null, B = 0, ya = e.split("\n"), ja = 0; ja < ya.length; ja++) {
                    var fc = ya[ja];
                    if (l =
                        fc.match(this.gm ? ej : fj)) {
                        m = fc.match(gj);
                        p = fc.match(hj);
                        u = fc.match(ij);
                        f = fc.match(jj);
                        g = fc.match(kj);
                        0 < ja && (D = ya[ja - 1]);
                        break
                    }
                    B++
                }
                l ? (ja = bj(l[1]), l = bj(l[2]), B = ya.slice(B + 1).join("\n"), isNaN(ja) || isNaN(l) || !B ? (C(dj, "skipped cue, begin=" + ja + ", end=" + l + ", text=" + B), f = null) : (h = new VTTCue(ja + h, l + h, B), m && (h.align = m[1]), p && (h.snapToLines = "true" === p[1]), u && (m = parseInt(u[1], 10), !h.snapToLines && (100 < m || 0 > m) && (m = 100), h.line = m), f && (h.position = parseInt(f[1], 10)), g && (h.size = parseInt(g[1], 10)), f = {
                    te: h,
                    Mi: D
                })) : f = null;
                f && (-1 === this.sg && (this.sg = a.indexOf(e)), d.push(f))
            }
        lj(this, a);
        return d
    };
    var lj = function(a, b) {
            b = b.substring(0, a.sg);
            b = b.replace(/::cue()/g, "::cue");
            a.Le.clear();
            for (var c, d; d = mj.exec(b);) 3 > d.length || (c = d[1].split(",").map(function(e) {
                e = e.trim();
                (e = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")"))) && (e = "(" + e + ")");
                return e
            }), d = d[2].trim(), (d = rb(Ef(d))) && a.Le.enqueue({
                wh: c,
                rules: d
            }))
        },
        bj = function(a) {
            var b = a.split(":");
            if (3 < b.length) return C(dj, "unexpected time format=" + a), 0;
            a = 0;
            b = n(b);
            for (var c = b.next(); !c.done; c = b.next()) a = 60 * a + parseFloat(c.value);
            return a
        },
        dj = z("cast.player.core.WebvttParser"),
        Zi = /\n\s*\n/,
        cj = /MPEGTS:([\d]*)/,
        gj = /align:(start|middle|end|left|center|right)/,
        hj = /snapToLines:?(true|false)?/,
        ij = /line:(-*\d+)/,
        jj = /position:(\d*)%/,
        kj = /size:(\d*)%/,
        mj = /(::cue[^{}]*)\s*\{([^\.{}]+)\}/g,
        aj = RegExp("LOCAL:((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}.[\\d]{3})"),
        $i = RegExp("LOCAL:((?:[\\d]{2,}:)?[\\d]{2}:[\\d]{2}.[\\d]{3})"),
        fj = RegExp("((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}.[\\d]{3})"),
        ej = RegExp("((?:[\\d]{2,}:)?[\\d]{2}:[\\d]{2}.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2,}:)?[\\d]{2}:[\\d]{2}.[\\d]{3})");
    var nj = function(a, b, c, d) {
        w.call(this);
        this.g = b;
        this.Vf = document.createElement("track");
        this.Vf.src = b.url;
        this.Vf.kind = "captions";
        this.g.mediaElement.appendChild(this.Vf);
        this.Rb = this.Vf.track;
        this.Rb.mode = void 0 !== d ? "showing" : "hidden";
        this.gg = a;
        this.rc = c;
        v("Cast.MPL.Captions", Ad(this.rc));
        this.Mc = null;
        "ttml" === c ? this.Mc = new Mi(this.g.ignoreTtmlPositionInfo) : "webvtt" === c ? this.Mc = new Yi : d && "application/mp4" === d && "stpp" === c && (this.Mc = new Xi(this.g.ignoreTtmlPositionInfo));
        this.Rf = null;
        this.g.enableSideloadedTextTrackStyling &&
            (this.Rf = new Fi(this.g.mediaElement, a, c));
        this.fb = null;
        this.pm = 0;
        this.ti = null
    };
    q(nj, w);
    nj.prototype.M = function() {
        oj(this);
        this.Rb.mode = "disabled";
        this.Vf.remove();
        w.prototype.M.call(this)
    };
    var oj = function(a) {
        var b = a.Rb.cues;
        if (b)
            for (; 0 < b.length;) a.Rb.removeCue(b[0]);
        if (a.g.mediaElement.parentNode) {
            b = n(a.g.mediaElement.parentNode.getElementsByClassName("mpl_img_cap"));
            for (var c = b.next(); !c.done; c = b.next()) c.value.remove()
        }
        a.Ld()
    };
    k = nj.prototype;
    k.createBuffer = function() {};
    k.reset = function() {
        oj(this);
        this.fb = null
    };
    k.bf = function() {
        return !0
    };
    k.Tk = function() {
        return Infinity
    };
    k.append = function(a, b, c, d) {
        d && (this.pm = b.time - c);
        if (this.Mc) {
            var e = this.g.useRelativeCueTimestamps || "ttml" === this.rc ? b.time : this.pm;
            c = pj(this);
            d = 0 < c.length ? c[c.length - 1].startTime : -Infinity;
            for (a = this.Mc.yj(a, e); 0 < a.length;) {
                e = a.pop();
                var f = e.te,
                    g = !1;
                if (f.startTime < d || .1 >= Math.abs(f.startTime - d))
                    for (var h = c.length - 1; 0 <= h; h--)
                        if (c[h].text == f.text && .1 >= Math.abs(c[h].startTime - f.startTime) && .1 >= Math.abs(c[h].endTime - f.endTime)) {
                            g = !0;
                            break
                        }
                g || this.addCue(e)
            }
        }
        this.fb = b
    };
    k.lb = function(a) {
        return this.fb ? this.fb.time + this.fb.duration - a : 0
    };
    var qj = function(a, b) {
        var c = b.te,
            d = a.g.mediaElement.parentNode;
        c.id = "cap-" + Date.now();
        c.onenter = function(e, f, g) {
            a.ti = e;
            if (null !== f) {
                var h = document.createElement("img");
                h.setAttribute("id", e.te.id);
                h.setAttribute("src", "data:image/png;base64," + f);
                h.setAttribute("class", "mpl_img_cap");
                h.style.position = "absolute";
                h.style.left = "0";
                h.style.bottom = "0";
                h.style.right = "0";
                h.style.margin = "0 auto";
                e.ve && e.ve.Pe ? (h.style.width = e.ve.Pe.width + e.ve.Pe.unit, h.style.height = e.ve.Pe.height + e.ve.Pe.unit) : (h.style.width =
                    "100%", h.style.height = "100%");
                h.style.zIndex = 5;
                g.appendChild(h)
            }
            a.Pf()
        }.bind(a, b, b.gn || null, d);
        c.onexit = function(e) {
            a.ti = null;
            (e = document.getElementById(e.id)) && e.remove();
            a.Ld()
        }.bind(a, c)
    };
    nj.prototype.Pf = function() {
        this.Rf && this.Mc && this.Rf.Pf(Li(this.Mc), this.ti)
    };
    nj.prototype.Ld = function() {
        this.Rf && this.Rf.Ld()
    };
    nj.prototype.addCue = function(a) {
        if (this.g.onCue) this.g.onCue(this.rc);
        this.Rb.addCue(a.te);
        qj(this, a)
    };
    var pj = function(a) {
        for (var b = [], c = a.Rb.cues, d = a.gg.getCurrentTime(), e = 0; e < c.length;) {
            var f = c[e];
            f.endTime < d ? (a.Rb.removeCue(f), f.id && (f = document.getElementById(f.id)) && f.remove()) : (b.push(f), e++)
        }
        return b
    };
    nj.prototype.parse = function(a, b) {
        for (a = this.Mc.parse(a, b); 0 < a.length;) this.addCue(a.pop())
    };
    var rj = function() {};
    rj.prototype.mh = function() {};
    t("cast.player.core.ProcessSourceDataCallback", rj);
    var sj = function(a, b, c, d, e, f) {
        w.call(this);
        this.g = a;
        this.Kn = e;
        this.ha = c;
        this.hn = !c.codecsProvided;
        this.ma = d;
        this.J = b;
        this.xe = !1;
        this.wa = this.fb = this.Nc = null;
        this.Jd = f;
        this.zc = new Wf;
        this.Rd = 0;
        this.createBuffer();
        this.na = null;
        this.Qf = !0;
        this.Dk = !1
    };
    q(sj, w);
    k = sj.prototype;
    k.M = function() {
        w.prototype.M.call(this);
        this.zc.clear();
        this.wa && (y(this.wa, "updateend", this.Nl, !1, this), this.Qf && "closed" != this.ma.readyState && this.ma.removeSourceBuffer(this.wa))
    };
    k.createBuffer = function() {
        if (null === this.wa && "open" == this.ma.readyState) {
            var a = this.ha.mimeType + '; codecs="' + Xg(this.ha.codecs) + '"',
                b = this.Jd.findIndex(function(c) {
                    return c == a
                });
            if (0 > b) {
                try {
                    this.wa = this.ma.addSourceBuffer(a)
                } catch (c) {
                    throw this.g.Z(110, void 0, c.message), c;
                }
                E(P, "create new source buffer " + a);
                this.Jd.push(a)
            } else this.wa = this.ma.sourceBuffers[b], tj(this), this.g.mediaElement.currentTime = this.g.mediaElement.currentTime, E(P, "reuse source buffer index: " + b + ", mimetype: " + a);
            x(this.wa, "updateend",
                this.Nl, !1, this);
            uj(this)
        }
    };
    k.lb = function(a) {
        var b = this.Rd + (this.Nc ? this.Nc.duration : 0);
        return this.fb ? this.fb.time + this.fb.duration - a + b : b
    };
    k.reset = function() {
        this.Nc = this.fb = null;
        this.zc.clear();
        this.Rd = 0;
        this.bf() ? vj(this) : wj(this);
        this.bf() ? xj(this) : (E(P, this.J + ": delay abort, push to deferred queue"), this.zc.enqueue({
            wj: 0,
            $h: null
        }))
    };
    k.bf = function() {
        return null !== this.wa && !this.xe && this.zc.Ka()
    };
    k.Tk = function() {
        return rd(this.ha.mimeType) ? 40 : 20
    };
    var uj = function(a) {
        for (; !a.zc.Ka();) {
            var b = Yf(a.zc),
                c = b.$h;
            switch (b.wj) {
                case 2:
                    E(P, a.J + ": dequeue append");
                    a.Rd -= c.interval.duration;
                    yj(a, c.data, c.interval, c.T, c.$, c.timescale);
                    return;
                case 1:
                    E(P, a.J + ": dequeue remove");
                    vj(a);
                    return;
                case 0:
                    E(P, a.J + ": dequeue abort"), xj(a)
            }
        }
    };
    sj.prototype.Nl = function() {
        for (var a = this.wa.buffered, b = 0; b < a.length; b++) E(P, this.J + ": " + a.start(b) + " - " + a.end(b));
        E(P, this.J + ": updateend");
        null !== this.Nc && 0 != this.Nc.duration && (this.fb = this.Nc);
        this.Nc = null;
        this.xe = !1;
        uj(this)
    };
    var yj = function(a, b, c, d, e, f) {
            var g = a.wa.timestampOffset;
            if (e) {
                xj(a);
                var h = zj(a, c.time);
                a.wa.timestampOffset = h - d;
                E(P, a.J + ": timestampOffset = " + a.wa.timestampOffset)
            } else h = zj(a, c.time);
            a.xe = !0;
            try {
                a.wa.appendBuffer(b)
            } catch (l) {
                E(P, a.J + ": append failed " + l);
                a.xe = !1;
                e && (a.wa.timestampOffset = g);
                Aj(a, b, c, d, e, f);
                22 === l.code && Bj(a, 2);
                return
            }
            E(P, a.J + ": successfully append " + b.length + " bytes");
            Cj(a, 2);
            a.Nc = {
                time: h,
                duration: c.duration
            };
            a.Kn.mh(a.ha.mimeType, a.ha.codecs, b, a.wa.timestampOffset, h, c.duration,
                f)
        },
        xj = function(a) {
            "open" == a.ma.readyState ? (E(P, a.J + ": abort"), a.wa.abort()) : A(P, a.J + ": unable to abort")
        },
        vj = function(a) {
            E(P, a.J + ": remove");
            tj(a)
        },
        wj = function(a) {
            E(P, a.J + ": delay remove, push to deferred queue");
            a.zc.enqueue({
                wj: 1,
                $h: null
            });
            Bj(a, 1)
        };
    sj.prototype.append = function(a, b, c, d, e) {
        if (this.hn && !this.Dk) {
            var f = this.ha.mimeType;
            if (0 == Na("/mp2t", f.substr(f.length - 5, 5))) {
                f = new yi;
                for (f.ta(a); !f.Mg();) f.parse();
                f = f.Ql ? f.Ek : void 0
            } else f = !0;
            void 0 !== f && (this.Dk = !0, f || Da("Cast.MPL.RemoveDefaultAudioCodecs", !0))
        }
        this.bf() ? yj(this, a, b, c, d, e) : Aj(this, a, b, c, d, e)
    };
    var Aj = function(a, b, c, d, e, f) {
            E(P, a.J + ": delay append, push to deferred queue");
            a.Rd += c.duration;
            a.zc.enqueue({
                wj: 2,
                $h: {
                    data: b,
                    interval: {
                        time: c.time,
                        duration: c.duration
                    },
                    T: d,
                    $: e,
                    timescale: f
                }
            })
        },
        zj = function(a, b) {
            if (!a.fb || a.g.Ok) return b;
            var c = b,
                d = a.wa.buffered;
            0 < d.length && (b = d.end(d.length - 1));
            E(P, a.J + ": adjustTime: " + c + " : " + b);
            return b
        },
        tj = function(a) {
            if (a.wa.updating) wj(a);
            else {
                a.xe = !0;
                try {
                    a.wa.remove(0, Infinity), E(P, a.J + ": successfully removed all buffered data"), Cj(a, 1)
                } catch (b) {
                    a.xe = !1, E(P, a.J +
                        ": remove failed!"), b.message = "SourceBuffer error unrelated to SourceBuffer.updating", wj(a)
                }
            }
        },
        Bj = function(a, b) {
            if (null === a.na) switch (b) {
                case 2:
                case 1:
                    a.na = setTimeout(function() {
                        uj(a)
                    }, 2E3), E(P, a.J + ": set up timeout ID to processDeferred_ " + a.na)
            }
        },
        Cj = function(a, b) {
            if (null !== a.na) switch (b) {
                case 2:
                case 1:
                    E(P, a.J + ": cleared timeout ID " + a.na), clearTimeout(a.na), a.na = null
            }
        },
        P = z("cast.player.core.SourceBufferManager");
    var Dj = function(a, b) {
        nj.call(this, a, b, "webvtt");
        this.va = z("cast.player.cea608.InbandCaptionsManager");
        this.ja = new th(this);
        this.ja.Zg = 1;
        this.Ua = null;
        this.za = 0;
        this.Eb = null;
        this.Od = [];
        this.hh = this.uj.bind(this);
        this.na = null;
        this.je = new Wf
    };
    q(Dj, nj);
    Dj.prototype.M = function() {
        this.reset();
        nj.prototype.M.call(this)
    };
    Dj.prototype.uj = function() {
        if (this.Ua.Ka()) {
            var a = Yf(this.je);
            this.za != a.T && (this.ja.clear(), this.Eb = null);
            this.za = a.T;
            this.ja.za = a.Qm;
            this.Ua.ta(a.data);
            this.Ua.dm(a.duration);
            a.timescale && this.Ua.fm(a.timescale)
        }
        this.Ua.parse();
        if (this.Ua.Mg()) {
            this.ja.decode();
            if (0 < this.Od.length) {
                for (pj(this); 0 < this.Od.length;) a = this.Od.pop(), "number" !== typeof a.start || isNaN(a.start) || "number" !== typeof a.end || isNaN(a.end) || (a = new VTTCue(a.start, a.end, a.text), a.position = 20, a.align = "start", this.addCue({
                    te: a
                }));
                this.Od.length = 0
            }
            this.Ua.ta(null)
        }
        this.je.Ka() && this.Ua.Ka() ? this.na = null : this.na = setTimeout(this.hh, 20)
    };
    var Dh = function(a, b, c, d) {
        null !== a.Eb && b < a.Eb && (b = a.Eb);
        .1 > c - b && (c = b + .1);
        a.Eb = c;
        a.Od.push({
            start: b,
            end: c,
            text: d
        })
    };
    Dj.prototype.mh = function(a, b, c, d, e, f, g) {
        var h = !sd(a),
            l = Ci.Xd();
        Di(l, "enable_ignore_audio_for_cea608_decoding") && (h || (h = b && td(b)));
        if (!h) {
            if (!this.Ua) switch (a) {
                case "video/mp2t":
                    this.Ua = new Ai(this);
                    break;
                case "video/mp4":
                    this.Ua = new xi(this);
                    break;
                default:
                    return
            }
            1 < this.je.bd() ? C(this.va, "Dropped segment") : (this.je.enqueue({
                data: c,
                duration: f,
                T: d,
                Qm: "video/mp4" == a ? e : d,
                timescale: g
            }), E(this.va, "Pending " + this.je.bd()), null === this.na && (this.na = setTimeout(this.hh, 20)))
        }
    };
    Dj.prototype.reset = function() {
        nj.prototype.reset.call(this);
        this.za = 0;
        this.Eb = null;
        this.Od.length = 0;
        this.Ua && this.Ua.ta(null);
        this.ja.clear();
        this.je.clear();
        null !== this.na && (clearTimeout(this.na), this.na = null)
    };
    var Ej = function(a) {
        F.call(this);
        this.Tb = null;
        this.vj = a
    };
    q(Ej, F);
    Ej.prototype.ri = function() {
        this.Tb && (this.Tb.onprogress = null);
        this.Tb = F.prototype.ri.call(this);
        this.Tb.onprogress = this.vj;
        return this.Tb
    };
    Ej.prototype.M = function() {
        this.Tb && (this.Tb.onprogress = null);
        F.prototype.M.call(this)
    };
    Ej.send = function(a) {
        var b = this;
        return new Nc(function(c, d) {
            var e = new Ej(function() {});
            x(e, "success", function(f) {
                c(qd(f.target))
            }, !1, b);
            x(e, "error", d, !1, b);
            x(e, "timeout", d, !1, b);
            e.send(a)
        })
    };
    var Fj = function(a, b, c) {
            var d = Date.now();
            this.clientId = a;
            this.blockIds = b;
            this.flags = c;
            this.timestamp = d
        },
        Hj = function() {
            var a = Gj();
            this.ji = a && a.clientId || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        };
    Hj.prototype.initialize = function() {
        var a = Gj();
        if (void 0 === a || void 0 === a.timestamp) var b = !0;
        else b = Date.now() - a.timestamp, a = a.flags.expirationHrs, "number" !== typeof a && (a = 3), b = b > 36E5 * a;
        Da("Cast.MPL.ExperimentationCheckExpired", b);
        b && (b = "https://$Env$.google.com/cast/senderconfig/config?hw=mpl&id=$ClientId$".replace(/\$Env\$/g, "clients3").replace(/\$ClientId\$/g, this.ji.toString()), Ej.send(b).then(this.pd.bind(this), this.dc.bind(this)))
    };
    Hj.prototype.pd = function(a) {
        Da("Cast.MPL.ExperimentationFetchResult", !0);
        try {
            var b = JSON.parse(a.substring(5));
            var c = new ff(b[0])
        } catch (g) {
            Ij(this, "Failed to parse experimentation flags.");
            return
        }
        a = ne(c, 1);
        b = te(c, cf, 2);
        c = {};
        b = n(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = d.Ia(),
                f = void 0;
            switch (pe(d, se)) {
                case 2:
                    f = oe(d, re(d, 5));
                    break;
                case 3:
                    f = le(d, re(d, 3));
                    break;
                case 4:
                    f = d.getFloatValue();
                    break;
                case 5:
                    f = oe(d, re(d, 5))
            }
            c[e] = f
        }
        Jj("Cast.MPL.ExperimentationDownloadedBlockId", a);
        window.localStorage.setItem("cast.player.common.Experimentation",
            JSON.stringify(new Fj(this.ji, a, c)));
        E(Kj, "Flags: " + c.toString())
    };
    Hj.prototype.dc = function() {
        Da("Cast.MPL.ExperimentationFetchResult", !1);
        Ij(this, "Failed to download experimentation flags.")
    };
    var Ij = function(a, b) {
            C(Kj, b);
            window.localStorage.setItem("cast.player.common.Experimentation", JSON.stringify(new Fj(a.ji, [], {})))
        },
        Jj = function(a, b) {
            if (void 0 !== b && 0 < b.length) {
                b = n(b);
                for (var c = b.next(); !c.done; c = b.next()) v(a, c.value)
            }
        },
        Gj = function() {
            var a = window.localStorage.getItem("cast.player.common.Experimentation");
            return a ? JSON.parse(a) : void 0
        };
    ra(Hj);
    var Kj = z("cast.player.common.Experimentation");
    Hj.Xd().initialize();
    var Lj = function(a) {
        var b = this,
            c = a.streamsGroupedByBitrate,
            d = void 0 === a.nd ? 0 : a.nd;
        a = void 0 === a.Kc ? 3 : a.Kc;
        this.bitrates = Array.from(c.keys());
        this.Ji = {};
        this.bitrates.forEach(function(e, f) {
            b.Ji[f] = c.get(e)
        });
        this.Ga = new Map;
        this.bitrates.forEach(function(e, f) {
            b.Ga.set(f, c.get(e).slice())
        });
        this.Na = {};
        this.nd = d;
        this.Kc = a
    };
    Lj.prototype.yg = function() {
        return this.nd
    };
    Lj.prototype.xg = function() {
        return this.Kc
    };
    var Mj = function(a, b) {
        var c;
        b = n(b);
        for (c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = a.bitrates.indexOf(d.bitrate);
            a.Ga.has(c) ? a.Ga.get(c).push(d) : a.Ga.set(c, [d]);
            a.Na[c] = 0
        }
    };
    Lj.prototype.dk = function() {
        for (var a = 0; a < this.bitrates.length; a++) Mj(this, this.Ji[a].slice());
        return this.Ga
    };
    Lj.prototype.zd = function(a) {
        this.Na[a] || (this.Na[a] = 0);
        this.Na[a]++;
        this.Na[a] > (1 === this.Ga.size ? this.xg() : this.yg()) && this.Ga.has(a) && this.Ga.delete(a);
        return this.Ga
    };
    var Nj = function(a) {
        Lj.call(this, a)
    };
    q(Nj, Lj);
    Nj.prototype.zd = function(a, b) {
        for (var c = 0, d = this.bitrates[0], e = 1; e < this.bitrates.length; e++) this.bitrates[e] < d && (d = this.bitrates[e], c = e);
        if (!b || b && a === c) this.Ga = new Map, this.Ga.set(c, this.Ji[c].slice());
        return Lj.prototype.zd.call(this, a, b)
    };
    var Oj = function(a) {
        var b = void 0 === a.streamsGroupedByCdn ? void 0 : a.streamsGroupedByCdn;
        Lj.call(this, {
            streamsGroupedByBitrate: a.streamsGroupedByBitrate,
            nd: void 0 === a.nd ? 2 : a.nd,
            Kc: void 0 === a.Kc ? 2 : a.Kc
        });
        this.Yj = b
    };
    q(Oj, Lj);
    var Pj = function(a, b) {
        var c;
        a = n(a.Yj.entries());
        for (c = a.next(); !c.done; c = a.next()) {
            c = n(c.value);
            c.next();
            var d = c.next().value;
            if (c = d.find(function(e) {
                    return e.index === b
                })) return d
        }
        return []
    };
    Oj.prototype.dk = function(a) {
        a = Pj(this, a);
        Mj(this, a);
        return this.Ga
    };
    Oj.prototype.zd = function(a) {
        var b = -1,
            c, d = n(this.Yj.entries());
        for (c = d.next(); !c.done; c = d.next())
            if (c = n(c.value), c.next(), c = c.next().value.find(function(e) {
                    return e.index === a
                })) {
                b = this.bitrates.indexOf(c.bitrate);
                break
            }
        if (-1 === b) return Da("Cast.MPL.UnknownBitrateEncountered", !0), this.Ga;
        this.Na[b] || (this.Na[b] = 0);
        this.Na[b]++;
        this.Na[b] > (1 === this.Ga.size ? this.xg() : this.yg()) && this.Ga.has(b) && this.Ga.delete(b);
        return this.Ga
    };
    var Qj = function(a) {
        w.call(this);
        this.ho = a;
        this.Ii = this.Bd = null;
        this.wb = 0;
        this.Ij = null;
        this.Ub = 400;
        this.m = new Ej(function() {});
        x(this.m, "success", this.pd.bind(this));
        x(this.m, "error", this.dc.bind(this));
        x(this.m, "timeout", this.Dn.bind(this))
    };
    q(Qj, w);
    Qj.prototype.M = function() {
        this.m.N();
        w.prototype.M.call(this)
    };
    Qj.prototype.load = function(a) {
        (this.Bd = a.url) ? (this.Ii = a.headers, this.m.Ee = a.withCredentials, this.m.qc = Math.max(0, a.timeoutInterval), this.wb = 0, this.m.send(this.Bd, void 0, void 0, this.Ii)) : C(Jg, "No url provided for request")
    };
    Qj.prototype.abort = function() {
        this.m.abort()
    };
    var Rj = function(a) {
        return new Ag(a.Bd, a.m.bc, od(a.m), a.m.getAllResponseHeaders(), qd(a.m))
    };
    Qj.prototype.pd = function(a) {
        clearTimeout(this.Ij);
        this.Ub = 400;
        this.pe(qd(a.target))
    };
    Qj.prototype.dc = function() {
        Sj(this, 408 == od(this.m) ? 0 : this.Ub)
    };
    Qj.prototype.Dn = function() {
        Sj(this, 0)
    };
    var Sj = function(a, b) {
        a.wb++;
        clearTimeout(a.Ij);
        3 < a.wb ? a.pe(null) : (1 < a.wb && (a.Ub = 2 * b), a.Ij = setTimeout(function() {
            a.m.send(a.Bd, void 0, void 0, a.Ii)
        }, b))
    };
    Qj.prototype.pe = function(a) {
        this.wb = 0;
        var b = this.m;
        this.ho.gh(a, b.Tb && b.Tb.responseURL ? b.Tb.responseURL : null)
    };
    var Tj = function(a) {
        Qj.call(this, a);
        this.I = this.g = null
    };
    q(Tj, Qj);
    Tj.prototype.ee = function(a, b) {
        this.g = a;
        this.I = new zg;
        this.I.url = this.Bd = b;
        this.I.setResponse = this.pe.bind(this);
        a.updateManifestRequestInfo && a.updateManifestRequestInfo(this.I);
        this.I.skipRequest || this.load(this.I)
    };
    Tj.prototype.pe = function(a) {
        var b = this;
        if (this.g && (a = hh(this.g, a), Hd(a))) {
            a.then(function(c) {
                Qj.prototype.pe.call(b, c)
            });
            return
        }
        Qj.prototype.pe.call(this, a)
    };
    var Uj = function(a) {
            if (a[7] << 8 | 1 != a[6]) return C(Jg, "PlayReady header object is not valid"), null;
            var b = a[9] << 8 | a[8];
            b += 10;
            for (var c = "", d = 10; d < b; d += 2) c += String.fromCharCode(a[d + 1] << 8 | a[d]);
            d = b = null;
            var e = new DOMParser;
            c = vb(c.trim());
            c = ug(e, c).childNodes[0].firstElementChild;
            c = n(c.children);
            for (e = c.next(); !e.done; e = c.next()) e = e.value, "LA_URL" == e.nodeName ? d = e.textContent : "KID" == e.nodeName && (b = Gd(window.atob(e.textContent)));
            return b ? {
                systemId: Og,
                Ue: a,
                hf: new Ng(b, !0),
                url:('http://192.168.100.6:9182/CORS/' + d.replace(/^(?:[a-z]+:)?\/\//i,'')),
                Tg: 8
            } : (C(Jg, "PlayReady rights management header does not have KID"),
                null)
        },
        Q = function(a) {
            this.host = a;
            this.Oc = this.kd = this.uri = null;
            this.Wi = this.Ui = this.Y = void 0;
            this.duration = -1;
            this.o = [];
            this.Qi = [];
            this.yn = this.ee.bind(this);
            this.Aa = null;
            this.Vj = !1;
            this.Fj = 1E4
        },
        Wj = function(a) {
            var b = Vj(a.o);
            b || (b = a.o.find(function(c) {
                return 1 == c.type && !Sg(c.codecs)
            }));
            b && (b.enabled = !0);
            a = n(a.o);
            for (b = a.next(); !b.done; b = a.next())
                if (b = b.value, 2 == b.type) {
                    b.enabled = !0;
                    break
                }
        },
        Vj = function(a) {
            return a.find(function(b) {
                return 1 == b.type && Sg(b.codecs) && Rg("audio/mp4", b.codecs)
            })
        };
    k = Q.prototype;
    k.getDefaultAudioStreamIndex = function() {
        for (var a = -1, b = 0; b < this.o.length; b++) {
            var c = this.o[b];
            if (1 == c.type && Rg("audio/mp4", c.codecs)) {
                if (Sg(c.codecs)) return b;
                0 > a && (a = b)
            }
        }
        return a
    };
    k.getStreamCount = function() {
        return this.o.length
    };
    k.enableStream = function(a, b) {
        var c = this.o[a];
        c.index = -1;
        c.ca = -1;
        c.$ = !0;
        c.enabled = b;
        c.ib = !1;
        this.Qi[a] = []
    };
    k.isStreamEnabled = function(a) {
        return this.o[a].enabled
    };
    k.getQualityLevel = function(a) {
        return this.o[a].ca
    };
    k.getStreamInfo = function(a) {
        var b, c;
        a = this.o[a];
        var d = [],
            e = new Map,
            f = new Map;
        f.set("cdn", []);
        a.F.forEach(function(g, h) {
            c = {
                index: h,
                bitrate: b
            };
            b = g.bitrate;
            d.push(b);
            e.has(b) ? e.get(b).push(c) : e.set(b, [c]);
            f.get("cdn").push(c)
        });
        return new Bg(a.codecs, a.mimeType, d, a.language, a.name, a.role, void 0, !0, e, f)
    };
    k.gh = function(a, b) {
        if (a) {
            b && (this.uri = new J(b));
            b = null !== this.Aa;
            var c = this.o;
            this.o = [];
            this.zj(a);
            this.hk();
            this.Vj && (this.Aa = setTimeout(this.yn, this.Fj));
            if (b) Xj(this, c), this.Oc.Ad();
            else {
                Wj(this);
                if (this.host.onManifestReady) this.host.onManifestReady();
                this.Oc.onManifestReady()
            }
        } else this.Gj()
    };
    k.Gj = function() {};
    k.Qb = function() {};
    k.zj = function() {};
    k.hk = function() {};
    var Xj = function(a, b) {
            for (var c = a.host.mediaElement.paused, d = {}, e = 0; e < b.length; d = {
                    yb: d.yb
                }, e++) {
                d.yb = b[e];
                var f = a.o[e];
                if (f.name !== d.yb.name) {
                    E(Q.va, "The order of adaptations in manifest changes.");
                    f = e;
                    var g = a.o.findIndex(function(D) {
                        return function(B) {
                            return B.name == D.yb.name
                        }
                    }(d));
                    if (0 > g) {
                        a.Qb("New manifest has content out of sync. Continue with old one.");
                        a.o = b;
                        break
                    }
                    var h = a.o[f];
                    a.o[f] = a.o[g];
                    a.o[g] = h;
                    f = a.o[f]
                }
                f.enabled = d.yb.enabled;
                f.ca = d.yb.ca;
                f.ib = d.yb.ib;
                g = [];
                h = !0;
                for (var l = d.yb.index, m = 0; m <
                    f.F.length; m++) {
                    var p = d.yb.F[m],
                        u = f.F[m];
                    u.T = p.T;
                    g[m] = Yj(p, u, l, c);
                    if (!g[m]) {
                        h = !1;
                        C(Q.va, "Old and new representations are out of sync.");
                        break
                    }
                }
                if (!(0 > l))
                    if (h) {
                        for (h = 0; h < f.F.length; h++) f.F[h].i = g[h].i, f.F[h].P = g[h].P;
                        f.$ = d.yb.$;
                        f.index = g[0].index
                    } else f.$ = !0, f.index = 0
            }
        },
        Yj = function(a, b, c, d) {
            if ("number" !== typeof a.P || "number" !== typeof b.P) var e = null;
            else e = a.P + c - b.P, e = 0 < e ? {
                i: b.i,
                index: e,
                P: b.P
            } : {
                i: a.i.slice(c, b.P - a.P).concat(b.i),
                index: 0,
                P: a.P + c
            };
            if (e) a = e;
            else {
                e = {
                    i: [],
                    index: 0,
                    P: b.P
                };
                var f = b.i[0];
                0 <=
                    c && f.time < a.i[c].time ? (e.i = b.i, e.index = Zj(a.i[c].time, b.i), a = e) : (f = Zj(f.time, a.i), -1 == f ? a = null : (c > f ? (e.i = b.i, e.index = c - f) : (e.i = d ? b.i : a.i.slice(c, f).concat(b.i), e.index = 0, "number" !== typeof b.P || d || (e.P -= f - c)), a = e))
            }
            return a
        },
        Zj = function(a, b) {
            for (var c = .5 * b[0].duration, d = 0; d < b.length; d++)
                if (Math.abs(b[d].time - a) <= c) return d;
            return -1
        };
    k = Q.prototype;
    k.load = function(a) {
        this.Oc = a;
        this.ee()
    };
    k.ee = function() {
        var a = this.host.url;
        this.uri = new J(a);
        this.kd = new Tj(this);
        this.kd.ee(this.host, a)
    };
    k.Uc = function() {
        this.kd && (this.kd.N(), this.kd = null);
        null !== this.Aa && (clearTimeout(this.Aa), this.Aa = null)
    };
    k.Ah = function(a, b, c) {
        a = this.o[a];
        a.ca = b;
        a.ib = !0;
        ak(c)
    };
    k.updateLicenseRequestInfo = function() {};
    k.getDuration = function() {
        return this.Y ? -1 : this.duration
    };
    k.Ja = function(a) {
        a = this.o[a];
        var b = a.ca;
        if (0 > b) return null;
        a = a.F[b];
        var c = a.i;
        if (0 == c.length) return null;
        b = c[0].time;
        var d = c.length - 1;
        c = c[d].time + c[d].duration;
        this.Y && (c -= 20, c < b && (c = b));
        return {
            start: b - a.T,
            end: c - a.T
        }
    };
    k.seek = function(a, b) {
        var c = this.o[a],
            d = c.F[c.ca],
            e = d.i;
        a = this.Ja(a);
        if (!a) return null;
        b < a.start && (b = a.start);
        b > a.end && (b = a.end);
        b += d.T;
        for (a = e.length - 1; 0 <= a; a--)
            if (b >= e[a].time) return c.index = a, c.ib = !0, b - d.T;
        return null
    };
    k.$b = function(a) {
        a = this.o[a];
        var b = a.index + 1;
        return b < a.F[a.ca].i.length ? (a.index = b, !0) : !1
    };
    k.isLiveStream = function() {
        return this.Y || !1
    };
    k.isEventStream = function() {
        return this.Ui || !1
    };
    k.isLiveSeekableRangeMovingWindow = function() {
        return this.Wi
    };
    k.isLiveDone = function() {};
    k.Ec = function(a) {
        var b = this.o[a];
        a = b.index;
        b = b.F[b.ca].i;
        return !this.Y && a == b.length - 1
    };
    k.getSegmentInterval = function(a) {
        var b = this.o[a],
            c = b.ca;
        return 0 <= c && (a = b.index, 0 <= a && (b = b.F[c], c = b.i, a < c.length)) ? {
            time: c[a].time - b.T,
            duration: c[a].duration
        } : {
            time: 0,
            duration: 0
        }
    };
    k.reset = function(a) {
        this.o[a].index = -1
    };
    k.ge = function(a) {
        a = this.o[a];
        var b = a.F[a.ca];
        null !== b.Kb || null !== b.L && null !== b.L.ta || (a.ib = !1);
        return a.ib
    };
    k.zh = function(a, b) {
        this.o[a].ib = !1;
        262144 < b.length ? C(bk, "init data (" + b.length + " bytes) is too large to cache") : this.Qi[a][this.o[a].ca] = b
    };
    k.Se = function(a) {
        var b = this.o[a];
        var c = this.Qi[a];
        return (b = b && c ? c[b.ca] || null : null) ? (this.o[a].ib = !1, b) : null
    };
    k.wg = function() {
        return null
    };
    k.updateSegmentRequestInfo = function(a, b) {
        b.interval = this.getSegmentInterval(a)
    };
    k.processSegment = function() {};
    k.zg = function() {
        return 0
    };
    k.Ck = function() {
        return !1
    };
    var ck = function(a, b) {
        void 0 === a.Y && Da("Cast.MPL.Live", b);
        a.Y = b
    };
    Q.prototype.getStreamInfo = Q.prototype.getStreamInfo;
    Q.prototype.getQualityLevel = Q.prototype.getQualityLevel;
    Q.prototype.isStreamEnabled = Q.prototype.isStreamEnabled;
    Q.prototype.enableStream = Q.prototype.enableStream;
    Q.prototype.getStreamCount = Q.prototype.getStreamCount;
    Q.prototype.getDefaultAudioStreamIndex = Q.prototype.getDefaultAudioStreamIndex;
    var bk = z("cast.player.comon.StreamingProtocolBase");
    var R = function(a, b) {
        this.Im = a;
        this.ye = b ? b : null;
        this.h = null
    };
    R.prototype.s = function(a) {
        var b = Zh(a).length;
        this.h = a;
        this.nk();
        this.G();
        a = Zh(a).length - b;
        this.h.buffer.set([a >> 24, a >> 16, a >> 8, a], b)
    };
    R.prototype.nk = function() {
        this.h.A(0);
        this.h.A(this.Im);
        this.ye && L(this.h, this.ye.Kh())
    };
    R.prototype.G = function() {
        throw Error("writeBody() should be  overriden.");
    };
    var S = function(a, b, c) {
        R.call(this, a);
        this.ra = b;
        this.Ac = c
    };
    q(S, R);
    S.prototype.nk = function() {
        R.prototype.nk.call(this);
        this.h.A(this.ra << 24 | this.Ac & 16777215)
    };
    var dk = function(a) {
        S.call(this, 1935763823, 0, 0);
        this.K = a
    };
    q(dk, S);
    dk.prototype.G = function() {
        this.h.A(1);
        this.h.A(this.K)
    };
    var ek = function(a) {
        S.call(this, 1952867444, 1, 0);
        this.Ie = a
    };
    q(ek, S);
    ek.prototype.G = function() {
        this.h.pk(this.Ie)
    };
    var fk = function(a, b) {
        S.call(this, 1935763834, 0, 0);
        this.Nk = a;
        this.$l = b
    };
    q(fk, S);
    fk.prototype.G = function() {
        this.h.Qh(this.Nk);
        this.h.A(this.$l.length);
        0 == this.Nk && L(this.h, this.$l)
    };
    var gk = function(a, b) {
        S.call(this, 1702061171, 0, 0);
        this.wn = a;
        this.Ke = b
    };
    q(gk, S);
    gk.prototype.G = function() {
        L(this.h, [3, 25, 0, 1, 0, 4, 17, this.wn, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, this.Ke[0], this.Ke[1]])
    };
    var hk = function(a, b) {
        R.call(this, 1635148611);
        this.km = a;
        this.Sl = b
    };
    q(hk, R);
    hk.prototype.G = function() {
        L(this.h, [1, 77, 64, 30, 255, 225]);
        this.h.Gd(this.km.length);
        L(this.h, this.km);
        this.h.Qh(1);
        this.h.Gd(this.Sl.length);
        L(this.h, this.Sl)
    };
    var ik = function() {
        S.call(this, 1937011571, 0, 0)
    };
    q(ik, S);
    ik.prototype.G = function() {
        this.h.A(0)
    };
    var jk = function(a, b, c) {
        S.call(this, 1952804451, 0, 1);
        this.Vm = c ? 0 : a;
        this.Um = b;
        this.Mk = c
    };
    q(jk, S);
    jk.prototype.G = function() {
        this.h.A(256 | this.Vm);
        L(this.h, this.Um.Kh());
        this.Mk && (this.h.Qh(16), L(this.h, this.Mk))
    };
    var kk = function(a) {
        S.call(this, 1936027235, 0, 2);
        this.Kj = a
    };
    q(kk, S);
    kk.prototype.G = function() {
        this.h.A(this.Kj.length);
        for (var a = 0; a < this.Kj.length; a++) {
            var b = this.Kj[a].lm;
            this.h.Gd(b.length);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                this.h.Gd(d.ei);
                this.h.A(d.fi)
            }
        }
    };
    var lk = function(a, b) {
        S.call(this, 1935894637, 0, 0);
        this.Vn = a;
        this.Wn = b
    };
    q(lk, S);
    lk.prototype.G = function() {
        this.h.A(this.Vn);
        this.h.A(this.Wn)
    };
    var mk = function(a) {
        R.call(this, 1718775137);
        this.Rm = a
    };
    q(mk, R);
    mk.prototype.G = function() {
        this.h.A(this.Rm)
    };
    var nk = function(a) {
        S.call(this, 1751411826, 0, 0);
        this.dn = a
    };
    q(nk, S);
    nk.prototype.G = function() {
        this.h.A(0);
        this.h.A(this.dn);
        L(this.h, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    };
    var ok = function(a) {
        S.call(this, 1835296868, 0, 0);
        this.jb = a
    };
    q(ok, S);
    ok.prototype.G = function() {
        this.h.A(0);
        this.h.A(0);
        this.h.A(this.jb);
        this.h.A(0);
        L(this.h, [85, 196, 0, 0])
    };
    var pk = function(a, b) {
        S.call(this, 1953196132, 0, 3);
        this.po = a;
        this.en = b
    };
    q(pk, S);
    pk.prototype.G = function() {
        this.h.A(0);
        this.h.A(0);
        L(this.h, [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0]);
        this.h.A(this.po << 16);
        this.h.A(this.en << 16)
    };
    var qk = function(a) {
        S.call(this, 1953654136, 0, 0);
        this.jn = a
    };
    q(qk, S);
    qk.prototype.G = function() {
        var a = 65536;
        this.jn && (a &= -65537);
        L(this.h, [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        this.h.A(a)
    };
    var rk = function(a, b) {
        S.call(this, 1886614376, 0, 0);
        this.$j = a;
        this.Jb = b
    };
    q(rk, S);
    rk.prototype.G = function() {
        L(this.h, this.$j.Kh());
        this.h.A(this.Jb.length);
        L(this.h, this.Jb)
    };
    var sk = function(a) {
        S.call(this, 1836476516, 0, 0);
        this.jb = a
    };
    q(sk, S);
    sk.prototype.G = function() {
        this.h.A(0);
        this.h.A(0);
        this.h.A(this.jb);
        L(this.h, [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2])
    };
    var tk = function(a) {
        S.call(this, 1952868452, 0, 8);
        this.yc = a
    };
    q(tk, S);
    tk.prototype.G = function() {
        this.h.A(1);
        this.h.A(this.yc)
    };
    var uk = function(a) {
        S.call(this, 1953658222, 0, 513);
        this.Mj = a
    };
    q(uk, S);
    uk.prototype.G = function() {
        this.h.A(this.Mj.length);
        this.h.A(0);
        for (var a = 0; a < this.Mj.length; a++) this.h.A(this.Mj[a].length)
    };
    var vk = function(a) {
        S.call(this, 1835427940, 0, 0);
        this.vd = a
    };
    q(vk, S);
    vk.prototype.G = function() {
        this.h.A(this.vd)
    };
    var wk = function(a) {
        R.call(this, 1835295092);
        this.Jk = a
    };
    q(wk, R);
    wk.prototype.G = function() {
        for (var a = 0; a < this.Jk.length; a++) L(this.h, this.Jk[a])
    };
    var yk = function(a) {
        var b = new Uint8Array(2 + a.length);
        b[1] = 1;
        Gd(a, b, 2);
        rk.call(this, xk, b)
    };
    q(yk, rk);
    var xk = new Ng([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]);
    var zk = function(a, b, c, d) {
        w.call(this);
        this.g = a;
        this.O = b;
        this.ln = d;
        this.Jb = c;
        this.v = this.nl = null;
        this.ac = "none";
        this.Jh = this.Ih = this.Gc = null;
        this.Mh = !1;
        this.m = new F;
        fd(this.m);
        x(this.m, "success", this.pd, !1, this);
        x(this.m, "error", this.dc, !1, this)
    };
    q(zk, w);
    zk.prototype.M = function() {
        this.v && (this.Gc && y(this.Gc, "message", this.El, !1, this), this.v = null);
        this.Gc && (this.Gc.close(), this.Gc = null);
        this.m.N();
        w.prototype.M.call(this)
    };
    zk.prototype.createSession = function(a) {
        E(Ak, "create session");
        this.Jh = Date.now();
        var b = this.g.licenseCustomData;
        if (b) {
            var c = new $h(this.Jb.length + b.length + 34);
            L(c, this.Jb);
            (new yk(b)).s(c);
            b = Zh(c)
        } else b = this.Jb;
        this.v = this.g.mediaElement;
        this.ac = a;
        this.Gc = a = this.v.mediaKeys.createSession();
        x(this.Gc, "message", this.El, !1, this);
        a.generateRequest("cenc", b.buffer).catch(this.Cl.bind(this))
    };
    zk.prototype.pd = function(a) {
        E(Ak, "xhr success");
        var b = this.Ih;
        null !== b && v("Cast.MPL.LicenseReq.ServerLatency", Date.now() - b);
        this.Ih = null;
        this.Vk(qd(a.target))
    };
    zk.prototype.Vk = function(a) {
        var b = this;
        if (a) {
            a = new Uint8Array(a);
            if (this.g.processLicense && (a = this.g.processLicense(a), Hd(a))) {
                a.then(function(c) {
                    Bk(b, c)
                });
                return
            }
            Bk(this, a)
        } else this.g.Z(201, void 0)
    };
    var Bk = function(a, b) {
        a.Mh = !0;
        a.Gc.update(b.buffer).then(function() {
            a.Mh = !1;
            var c = a.ln;
            E(Ck, "key session ended: " + c.wd);
            8 < c.Ya.length ? c.Ya.shift().N() : c.wd++;
            c.wd < c.Ya.length && c.Ya[c.wd].createSession(c.ac)
        }, function(c) {
            a.Mh = !1;
            a.Cl(c)
        })
    };
    k = zk.prototype;
    k.dc = function() {
        E(Ak, "xhr error");
        var a = new Ag(String(this.m.nf), this.m.bc, od(this.m), this.m.getAllResponseHeaders(), qd(this.m));
        this.g.Z(201, a)
    };
    k.El = function(a) {
        E(Ak, "message");
        this.nl = new Uint8Array(a.$c.message);
        this.g.prepareLicenseRequest && !this.g.prepareLicenseRequest() || this.Sc()
    };
    k.Cl = function(a) {
        E(Ak, "keyerror " + a);
        this.g.Z(202)
    };
    k.Sc = function() {
        var a = new zg;
        a.timeoutInterval = 18E4;
        a.protectionSystem = this.ac;
        a.content = this.nl;
        a.setResponse = this.Vk.bind(this);
        this.O.updateLicenseRequestInfo(a);
        this.g.licenseUrl && (a.url = this.g.licenseUrl);
        if (!a.url && this.Jb && "playready" == this.ac) {
            var b = new ni(this.Jb);
            if (b = Uj(b.getData())) a.url = b.url
        }
        if (this.g.updateLicenseRequestInfo && (this.g.updateLicenseRequestInfo(a), a.skipRequest)) return;
        this.m.Ee = a.withCredentials;
        this.m.qc = Math.max(0, a.timeoutInterval);
        this.m.send(a.url, "POST", a.content,
            a.headers);
        a = this.Jh;
        null !== a && v("Cast.MPL.LicenseReq.GenLatency", Date.now() - a);
        this.Jh = null;
        this.Ih = Date.now()
    };
    k.Ye = function() {
        return null !== this.Jh || null !== this.Ih || this.Mh
    };
    var Ak = z("cast.player.core.MediaKeySession");
    var Ek = function(a, b, c, d, e) {
        w.call(this);
        this.g = a;
        this.O = b;
        this.Ya = [];
        this.wd = 0;
        this.ac = null;
        x(this.g.mediaElement, "encrypted", this.Al, !1, this);
        c && 0 < c.length && (a.protectionSystem && (c.includes(a.protectionSystem) ? c.splice(0, 0, c.splice(c.indexOf(a.protectionSystem), 1)[0]) : C(Ck, "Preferred protection system not found")), Dk(this, {
            bj: c,
            Ug: 0,
            Cm: d,
            oo: e
        }))
    };
    q(Ek, w);
    Ek.prototype.M = function() {
        y(this.g.mediaElement, "encrypted", this.Al, !1, this);
        for (var a = n(this.Ya), b = a.next(); !b.done; b = a.next()) b.value.N();
        this.Ya.length = 0;
        w.prototype.M.call(this)
    };
    var Dk = function(a, b) {
            Fk(a, b).catch(function(c) {
                b.Ug++;
                b.Ug < b.bj.length ? Dk(a, b) : (A(Ck, c.toString()), C(Ck, "unsupported protection system"), a.g.Z(202))
            })
        },
        Fk = function(a, b) {
            var c = b.bj[b.Ug];
            b = Gk(a, b);
            return navigator.requestMediaKeySystemAccess(Ig[c], [b]).then(function(d) {
                return d.createMediaKeys()
            }).then(function(d) {
                var e = a.g.mediaElement.setMediaKeys(d);
                return a.g.emeServerCertificate && a.g.emeServerCertificate.length ? d.setServerCertificate(a.g.emeServerCertificate).then(function(f) {
                    f || C(Ck, "Server certificates are not supported by the keysystem. The server certificate has been ignored.");
                    return e
                }, function(f) {
                    A(Ck, "Invalid server certificate provided. " + f.toString());
                    return Promise.reject(f)
                }) : e
            }).then(function() {
                a.ac = c;
                Fd(a.ac, a.O.zg());
                0 < a.Ya.length && a.Ya[0].createSession(c);
                return Promise.resolve()
            })
        };
    Ek.prototype.Al = function(a) {
        a = a.$c;
        E(Ck, "onencrypted: " + this.wd);
        (a = a.initData) ? this.createSession(new Uint8Array(a)): E(Ck, "invalid init data")
    };
    var Hk = function(a, b) {
        return a.Ya.some(function(c) {
            a: if (b.length != c.Jb.length) c = !1;
                else {
                    for (var d = b.length, e = 0; e < d; e++)
                        if (b[e] != c.Jb[e]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }return c
        })
    };
    Ek.prototype.createSession = function(a) {
        Hk(this, a) || (a = new zk(this.g, this.O, a, this), this.ac && this.wd == this.Ya.length && a.createSession(this.ac), this.Ya.push(a))
    };
    Ek.prototype.Sc = function() {
        this.Ya[this.wd].Sc()
    };
    Ek.prototype.Ye = function() {
        return this.Ya.some(function(a) {
            return a.Ye()
        })
    };
    var Gk = function(a, b) {
            var c = b.bj[b.Ug],
                d = {
                    initDataTypes: ["cenc"]
                },
                e = b.Cm || "";
            b = b.oo || "";
            e = e.replace("video/mp2t", "audio/mp4");
            b = b.replace("video/mp2t", "video/mp4");
            if (e) {
                var f = Ik[c] || "";
                "widevine" === c && a.g.no && (f = "SW_SECURE_CRYPTO");
                d.audioCapabilities = [{
                    contentType: e,
                    robustness: f
                }]
            }
            b && (d.videoCapabilities = [{
                contentType: b,
                robustness: Jk[c] || ""
            }]);
            return d
        },
        Kk = {},
        Ik = (Kk.widevine = "HW_SECURE_CRYPTO", Kk),
        Lk = {},
        Jk = (Lk.widevine = "HW_SECURE_ALL", Lk),
        Ck = z("cast.player.core.MediaKeysManager");
    var Mk = function(a, b) {
        this.bitrates = a;
        this.Ki = [];
        for (a = 0; a < this.bitrates.length; a++) this.Ki.push(a);
        this.un = void 0 !== b ? b : 3;
        this.Na = {};
        this.Pd = this.Ki.slice()
    };
    Mk.prototype.yg = function() {
        return 0
    };
    Mk.prototype.xg = function() {
        return this.un
    };
    Mk.prototype.dk = function() {
        this.Na = {};
        this.Pd = this.Ki.slice()
    };
    Mk.prototype.zd = function(a) {
        this.Na[a] || (this.Na[a] = 0);
        this.Na[a]++;
        this.Na[a] > (1 == this.Pd.length ? this.xg() : this.yg()) && (a = this.Pd.indexOf(a), -1 < a && this.Pd.splice(a, 1));
        return this.Pd
    };
    var Nk = function(a, b) {
        Mk.call(this, a, b)
    };
    q(Nk, Mk);
    Nk.prototype.zd = function(a, b) {
        for (var c = 0, d = this.bitrates[0], e = 1; e < this.bitrates.length; e++) this.bitrates[e] < d && (d = this.bitrates[e], c = e);
        if (!b || b && a == c) this.Pd = [c];
        return Mk.prototype.zd.call(this, a, b)
    };
    var Pk = function(a, b, c, d) {
        this.g = a;
        this.J = b;
        this.H = c;
        this.Ba = this.Ei();
        this.sa = this.Je(this.Ba);
        E(Ok, this.J + ": initial " + this.H[this.sa]);
        this.fc = 0;
        this.sc = null;
        this.mf = Date.now();
        this.Yg = d;
        Dd(this.H, d)
    };
    k = Pk.prototype;
    k.Ei = function() {
        var a = this.g.initialBandwidth;
        3145728 === this.g.initialBandwidth && (a = parseFloat(window.localStorage.getItem("cast.player.core.QualityManager.currentBandwidth")), a = "number" === typeof a && a > this.g.initialBandwidth ? a : this.g.initialBandwidth);
        return a
    };
    k.N = function() {
        this.jd()
    };
    k.qm = function(a, b) {
        b && (this.Ba = 0 < a ? 8 * this.fc / (a / 1E3) : 0);
        this.fc = 0;
        this.sc = null;
        E(Ok, this.J + ": current=" + this.Ba.toFixed(2));
        this.Uf(this.Ba)
    };
    k.sm = function(a, b) {
        0 >= a || (this.g.trackBandwidth && this.g.trackBandwidth(this.J, a, b), eh(b, a), a = 0 < a ? 8 * b / (a / 1E3) : 0, this.Ba = .8 * a + (1 - .8) * this.Ba, E(Ok, this.J + ": current=" + a.toFixed(2) + ", average=" + this.Ba.toFixed(2)), this.Uf(a), this.fc = 0)
    };
    k.rm = function(a) {
        this.fc = a
    };
    k.Je = function(a, b) {
        for (var c = -1, d = Number.MAX_VALUE, e = void 0 !== b ? b[0] : 0, f = 0; f < this.H.length; f++)
            if (void 0 === b || -1 !== b.indexOf(f)) {
                if (a >= this.H[f]) {
                    var g = a - this.H[f];
                    g < d && (c = f, d = g)
                }
                this.H[e] > this.H[f] && (e = f)
            }
        return 0 > c ? e : c
    };
    k.ik = function(a, b, c) {
        var d = Date.now();
        if (!a && null !== this.sc && d - this.sc < 2E3 * (b || 0)) return this.sa;
        this.sc = d;
        a = this.Je(.7 * this.Ba, c);
        if (this.g.getQualityLevel) {
            if (1 !== this.H.length || 0 !== this.H[0]) a = this.g.getQualityLevel(this.J, a, this.sa, this.H);
            a >= this.H.length && (C(Ok, this.J + ": Host provided an invalid quality level!"), a = this.H.length - 1)
        }
        a != this.sa && (E(Ok, this.J + ": from " + this.H[this.sa] + " to " + this.H[a]), this.jd(), this.sa = a);
        return this.sa
    };
    k.Uf = function(a) {
        3E5 > Date.now() - this.mf || (v("Cast.MPL.Bandwidth", a), Qk || window.localStorage.setItem("cast.player.core.QualityManager.currentBandwidth", "" + a), this.jd())
    };
    k.jd = function() {
        var a = Date.now();
        Cd(this.H[this.sa], this.Yg);
        this.mf = a
    };
    var Ok = z("cast.player.core.legacy_qualitymanager"),
        Qk = document.domain.includes("gstatic.com");
    var Sk = function(a, b, c) {
        var d = this;
        this.g = a;
        this.J = b;
        this.Xj = c.streamsGroupedByBitrate;
        this.Yj = c.streamsGroupedByCdn;
        this.H = Array.from(c.streamsGroupedByBitrate.keys());
        this.Nh = new Map;
        this.H.forEach(function(e, f) {
            d.Nh.set(f, d.Xj.get(e))
        });
        this.jg = 0;
        this.Ba = this.Ei();
        this.sa = this.Je(this.Ba);
        E(Rk, this.J + ": initial bitrate is " + this.H[this.sa.ab]);
        this.fc = 0;
        this.sc = null;
        this.mf = Date.now();
        this.Yg = c.mimeType;
        Dd(this.H, this.Yg)
    };
    k = Sk.prototype;
    k.Ei = function() {
        var a = this.g.initialBandwidth;
        3145728 === this.g.initialBandwidth && (a = parseFloat(window.localStorage.getItem("cast.player.core.QualityManager.currentBandwidth")), a = "number" === typeof a && a > this.g.initialBandwidth ? a : this.g.initialBandwidth);
        return a
    };
    k.N = function() {
        this.jd()
    };
    k.qm = function(a, b) {
        b && (this.Ba = 0 < a ? 8 * this.fc / (a / 1E3) : 0);
        this.fc = 0;
        this.sc = null;
        E(Rk, this.J + ": current=" + this.Ba.toFixed(2));
        this.Uf(this.Ba)
    };
    k.sm = function(a, b) {
        0 >= a || (this.g.trackBandwidth && this.g.trackBandwidth(this.J, a, b), eh(b, a), a = 0 < a ? 8 * b / (a / 1E3) : 0, this.Ba = .8 * a + (1 - .8) * this.Ba, E(Rk, this.J + ": current=" + a.toFixed(2) + ", average=" + this.Ba.toFixed(2)), this.Uf(a), this.fc = 0)
    };
    k.rm = function(a) {
        this.fc = a
    };
    k.Je = function(a, b, c) {
        if (void 0 === c ? 0 : c) {
            c = this.Xj.get(this.H[this.sa.ab]);
            var d = c.length;
            1 >= d ? (Da("Cast.MPL.IncorrectFallbackCdnCyclingBehavior", !0), this.jg = 0, c = null) : (this.jg = (this.jg + 1) % d, c = {
                ab: this.sa.ab,
                Jg: c[this.jg].index
            });
            if (c) return c
        }
        c = void 0;
        b ? (c = Array.from(b.keys()), b = c[0]) : b = 0;
        d = -1;
        for (var e = Number.MAX_VALUE, f = 0; f < this.H.length; f++)
            if (void 0 === c || -1 !== c.indexOf(f)) {
                if (a >= this.H[f]) {
                    var g = a - this.H[f];
                    g < e && (d = f, e = g)
                }
                this.H[b] > this.H[f] && (b = f)
            }
        a = 0 > d ? b : d;
        return {
            ab: a,
            Jg: this.Nh.get(a)[0].index
        }
    };
    var Tk = function(a, b) {
        a.Nh.clear();
        b.forEach(function(c, d) {
            a.Nh.set(d, c)
        })
    };
    Sk.prototype.ik = function(a) {
        var b = a.ed,
            c = void 0 === a.Of ? void 0 : a.Of,
            d = void 0 === a.Cd ? void 0 : a.Cd;
        a = void 0 === a.af ? !1 : a.af;
        d && Tk(this, d);
        var e = Date.now();
        if (!b && null !== this.sc && e - this.sc < 2E3 * (c || 0)) return this.sa.Jg;
        this.sc = e;
        b = this.Je(.7 * this.Ba, d, a);
        d = c = b.ab;
        a = 1 === this.H.length && 0 === this.H[0];
        (this.g.getQualityLevel || this.g.fo && this.g.fo.wo) && !a && (this.g.getQualityLevel && (c = this.g.getQualityLevel(this.J, c, this.sa.ab, this.H)), c >= this.H.length ? C(Rk, this.J + ": Host provided an invalid quality level!") :
            d !== c && (b.ab = c, b.Jg = this.Xj.get(this.H[c])[0].index));
        b.ab !== this.sa.ab && (E(Rk, this.J + ": from " + (this.H[this.sa.ab] + " to ") + this.H[b.ab]), this.jd());
        this.sa = b;
        return this.sa.Jg
    };
    Sk.prototype.Uf = function(a) {
        3E5 > Date.now() - this.mf || (v("Cast.MPL.Bandwidth", a), Uk || window.localStorage.setItem("cast.player.core.QualityManager.currentBandwidth", "" + a), this.jd())
    };
    Sk.prototype.jd = function() {
        var a = Date.now();
        Cd(this.H[this.sa.ab], this.Yg);
        this.mf = a
    };
    var Rk = z("cast.player.core.QualityManager"),
        Uk = document.domain.includes("gstatic.com");
    var T = function(a, b, c, d, e, f, g, h) {
        w.call(this);
        this.pa = a;
        this.host = b;
        this.protocol = c;
        this.ig = f;
        this.W = d;
        this.ha = this.protocol.getStreamInfo(d);
        this.Ta = Lg(this.ha) ? new nj(a, b, this.ha.codecs, this.ha.mimeType) : new sj(b, d, this.ha, e, a, h);
        Lg(this.ha) && this.pa.em(this.Ta);
        a = this.ha;
        Ed(a.codecs);
        v("Cast.MPL.MimeType", xd[a.mimeType] || 0);
        v("Cast.MPL.StreamType", rd(a.mimeType) ? 1 : sd(a.mimeType) ? 2 : Lg(a) ? 3 : 0);
        this.Pg = !1;
        this.l = 1;
        this.ph = 0;
        this.re = !1;
        this.Sh = this.wb = 0;
        this.Ub = 400;
        this.fd = this.gd = this.be = this.Qg = !1;
        this.pl = this.ai = 0;
        this.Cb = new Wf;
        this.I = new zg;
        this.I.setResponse = this.Rn.bind(this);
        this.m = new Ej(this.vj.bind(this));
        fd(this.m);
        x(this.m, "success", this.pd, !1, this);
        x(this.m, "error", this.dc.bind(this, !1));
        x(this.m, "timeout", this.dc.bind(this, !0));
        x(this.m, "ready", this.Cn, !1, this);
        this.H = this.ha.bitrates;
        this.qe = null;
        a = Ci.Xd();
        this.mo = Di(a, "enable_fallback_content_delivery_networks");
        this.Dd = b.optInRedundantStreams;
        Da("Cast.MPL.UseFallbackCdnLogic", this.Dd);
        this.hi = !1;
        this.mo ? (b = new Sk(b, d, this.ha),
            c = this.ha, d = this.host, a = c.streamsGroupedByBitrate, c = c.streamsGroupedByCdn, d = this.Dd ? new Oj({
                streamsGroupedByBitrate: a,
                streamsGroupedByCdn: c,
                nd: d.segmentRequestRetryLimit,
                Kc: d.segmentRequestRetryLimit
            }) : new Nj({
                streamsGroupedByBitrate: a,
                Kc: d.segmentRequestRetryLimit
            })) : (b = new Pk(b, d, this.H, this.ha.mimeType), d = this.ha, a = this.host, d = this.Dd ? new Mk(d.bitrates, 2) : new Nk(d.bitrates, a.segmentRequestRetryLimit));
        this.oe = b;
        this.Rk = g || d;
        this.kg = this.Bj = -1
    };
    q(T, w);
    var Vk = function(a) {
        void 0 !== a.Ta.Qf && (a.Ta.Qf = !1);
        w.prototype.N.call(a)
    };
    T.prototype.N = function() {
        void 0 !== this.Ta.Qf && (this.Ta.Qf = !0);
        w.prototype.N.call(this)
    };
    T.prototype.M = function() {
        clearTimeout(this.qe);
        this.qe = null;
        this.Ta.N();
        this.oe.N();
        this.m.N();
        w.prototype.M.call(this)
    };
    T.prototype.Rn = function(a, b) {
        a ? Wk(this, {
            ae: this.fd,
            data: new Uint8Array(a),
            interval: this.I.interval,
            ne: this.I.ne
        }, b) : this.dc(!1);
        this.Qg = !1;
        this.be && (Xk(this), this.be = !1)
    };
    var Yk = function(a, b) {
            var c = b.ed,
                d = void 0 === b.Of ? void 0 : b.Of,
                e = void 0 === b.Cd ? void 0 : b.Cd;
            b = void 0 === b.af ? !1 : b.af;
            a.kg = a.Dd ? a.oe.ik({
                ed: c,
                Of: d,
                Cd: e,
                af: b
            }) : a.oe.ik(c, d, e);
            c = a.kg;
            d = a.protocol.getQualityLevel(a.W);
            c === d ? a = !1 : (a.Bj = d, a.Pg = !0, a.protocol.Ah(a.W, c, a, a.pa), a = !0);
            return a
        },
        al = function(a, b, c, d, e, f, g) {
            g && Zk(a, b, c.time);
            if (a.gd) {
                E($k, a.W + ": segment processed");
                a.gd = !1;
                if (a.host.processSegment) {
                    g = a.host.processSegment(a.W, b);
                    if (Hd(g)) {
                        g.then(function(h) {
                            h instanceof Uint8Array && (b = h);
                            a.Ta.append(b,
                                c, d, e, f);
                            a.lh()
                        });
                        return
                    }
                    g instanceof Uint8Array && (b = g)
                }
                a.Ta.append(b, c, d, e, f)
            } else E($k, a.W + ": not processing");
            a.lh()
        },
        dl = function(a, b) {
            a.gd ? bl(a, b, "processing previous segment") : a.Cb.Ka() ? cl(a, b) ? a.Df(b) : (bl(a, b, "segment duration will go beyond buffer limit"), a.qe = setTimeout(a.lh.bind(a), 1E3)) : bl(a, b, "queue has " + a.Cb.bd() + " segments")
        },
        bl = function(a, b, c) {
            E($k, a.W + ": queue segment (" + b.data.length + ") as " + c);
            a.Cb.enqueue(b)
        };
    T.prototype.lh = function() {
        if (!this.gd && !this.Cb.Ka()) {
            var a = Zf(this.Cb);
            cl(this, a) ? (E($k, this.W + ": dequeue segment"), Yf(this.Cb), this.Df(a)) : (E($k, this.W + ": delay process downloaded segment"), this.qe = setTimeout(this.lh.bind(this), 1E3))
        }
    };
    var cl = function(a, b) {
        var c = a.lb(a.pa.getCurrentTime());
        return c <= a.host.autoPauseDuration ? !0 : c + b.interval.duration <= a.Ta.Tk()
    };
    T.prototype.Df = function(a) {
        E($k, this.W + ": process segment");
        this.gd = !0;
        this.protocol.processSegment(this.W, a, this)
    };
    T.prototype.reset = function() {
        E($k, this.W + ": reset");
        this.l = 1;
        this.ph = 0;
        this.re = !1;
        el(this);
        this.gd = this.be = !1;
        this.Cb.clear();
        clearTimeout(this.qe);
        this.qe = null;
        this.fd || this.m.abort();
        this.protocol.reset(this.W);
        this.Ta.reset();
        this.pa.Lc()
    };
    T.prototype.pd = function(a) {
        this.hi && (Ea("Cast.MPL.SuccessfulCdnSwitch"), this.hi = !1);
        var b = this.protocol.getQualityLevel(this.W);
        b = this.Rk.dk(b);
        Wk(this, {
            ae: this.fd,
            headers: this.m.getAllResponseHeaders(),
            data: new Uint8Array(qd(a.target)),
            interval: this.I.interval,
            ne: this.I.ne
        }, void 0, b)
    };
    var Wk = function(a, b, c, d) {
        a.oe.sm(void 0 !== c ? c : Date.now() - a.ph, b.data.length);
        el(a);
        dl(a, b);
        a.fd ? (a.fd = !1, a.protocol.zh(a.W, b.data), c = !0) : c = a.re = !1;
        if (!c && (c = a.lb(a.pa.getCurrentTime()), Yk(a, {
                ed: 10 > c,
                Of: b.interval.duration,
                Cd: d
            }), a.ai = .8 * c + (1 - .8) * a.ai, 3E5 < Date.now() - a.pl && (v("Cast.MPL.AverageBufferDuration", parseInt(a.ai, 10)), a.pl = Date.now()), a.Pg)) return;
        a.pa.Lc()
    };
    T.prototype.Cn = function() {
        this.be && (Xk(this), this.be = !1)
    };
    T.prototype.dc = function(a) {
        this.oe.qm(Date.now() - this.ph, a);
        var b = this.protocol.getQualityLevel(this.W);
        a = this.Rk.zd(b, a);
        if (this.Dd ? 0 === a.size : 0 === a.length) Ea("Cast.MPL.SegmentRequestFailoverOptionsExhausted"), this.host.skipSegmentOnNetworkFailure ? (el(this), this.pa.Lc()) : (this.l = -1, a = this.Qg ? void 0 : new Ag(this.I.url, this.m.bc, od(this.m), this.m.getAllResponseHeaders(), qd(this.m)), this.host.Z(301, a));
        else {
            if (b = this.Dd) {
                var c = this.protocol.getQualityLevel(this.W);
                b = this.protocol.Ck(c);
                a: {
                    for (var d =
                            n(Array.from(a.values())), e = d.next(); !e.done; e = d.next()) {
                        e = n(e.value);
                        for (var f = e.next(); !f.done; f = e.next())
                            if (f.value.index === c) {
                                c = !1;
                                break a
                            }
                    }
                    c = !0
                }
                b = b && !c
            }(d = b) ? (this.hi = Yk(this, {
                ed: !0,
                Cd: a,
                af: !0
            }), this.wb++, this.Sh = Date.now(), this.pa.Lc()) : Yk(this, {
                ed: !0,
                Cd: a
            }) ? (this.re = !0, this.pa.Lc()) : (this.wb++, this.Sh = Date.now(), this.pa.Lc(this.Ub));
            b = fl(this, this.Bj);
            e = this.H.indexOf(b);
            c = fl(this, this.kg); - 1 !== b && -1 !== c && (d = d && c === b, a = this.Dd ? !a.has(e) : !a.includes(e), e = this.Bj === this.kg, Da("Cast.MPL.ValidStreamSwitchOnNetworkError",
                d || c < b && a || e))
        }
    };
    var fl = function(a, b) {
        a = n(a.ha.streamsGroupedByBitrate.entries());
        for (var c = a.next(); !c.done; c = a.next()) {
            c = n(c.value);
            var d = c.next().value;
            if (void 0 !== c.next().value.find(function(e) {
                    return e.index === b
                })) return d
        }
        return -1
    };
    T.prototype.vj = function(a) {
        this.oe.rm(a.loaded)
    };
    T.prototype.lb = function(a) {
        return this.Ta.lb(a)
    };
    T.prototype.createBuffer = function() {
        this.Ta.createBuffer()
    };
    var ak = function(a) {
            a.Pg = !1;
            a.pa.zl();
            gl(a, !1);
            if (a.fd) Xk(a);
            else if (hl(a), a.pa.Lc(), a.host.onQualityLevelChanged) a.host.onQualityLevelChanged(a.W)
        },
        Xk = function(a) {
            if (il(a)) a.be = !0;
            else {
                a.ph = Date.now();
                a.protocol.updateSegmentRequestInfo(a.W, a.I);
                a.I.timeoutInterval = Math.max(2E3 * a.I.interval.duration, 1E4);
                a.I.skipRequest = !1;
                if (a.host.updateSegmentRequestInfo && (a.host.updateSegmentRequestInfo(a.I, a.W), a.I.skipRequest)) {
                    a.Qg = !0;
                    return
                }
                E($k, a.W + ": send request to get segment.");
                a.m.Ee = a.I.withCredentials;
                a.m.qc = Math.max(0, a.I.timeoutInterval);
                a.m.send(a.I.url, void 0, void 0, a.I.headers)
            }
        };
    T.prototype.Ze = function() {
        return 0 < this.l || this.gd || il(this) || !this.Ta.bf() || !this.Cb.Ka()
    };
    T.prototype.Yi = function() {
        var a;
        if (a = !this.Pg && 2 > this.Cb.bd() && !il(this)) a = Zf(this.Cb), a = !(a && !cl(this, a));
        return a
    };
    var il = function(a) {
            return a.m.Ze() || a.Qg
        },
        gl = function(a, b) {
            if (a.protocol.ge(a.W)) {
                var c = a.protocol.Se(a.W);
                null !== c ? dl(a, {
                    ae: !0,
                    data: c,
                    interval: {
                        time: a.I.interval.time,
                        duration: 0
                    }
                }) : (a.fd = !0, a.re = a.re || b)
            }
        },
        hl = function(a) {
            var b = a.protocol.wg(a.W);
            b && a.ig(b)
        };
    T.prototype.Hj = function() {
        if (0 < this.wb || this.re) {
            if (0 < this.wb) {
                if (Date.now() - this.Sh < this.Ub) return;
                this.Ub *= 2
            }
            Xk(this)
        } else if (1 == this.l) {
            var a = this.pa.getCurrentTime(),
                b = this.protocol.seek(this.W, a);
            "number" === typeof b ? (E($k, this.W + ": seek success " + a), this.l = 2, this.pa.Ml(b), gl(this, !0), hl(this), Xk(this)) : E($k, this.W + ": seek failure " + a)
        } else this.protocol.$b(this.W) && (gl(this, !0), hl(this), Xk(this)), this.protocol.Ec(this.W) && (this.l = 0)
    };
    var el = function(a) {
            a.wb = 0;
            a.Sh = 0;
            a.Ub = 400
        },
        Zk = function(a, b, c) {
            if (a.host.processMetadata) {
                var d = vi(b, [1701671783], !0);
                0 !== d.length && (d = d.map(function(e) {
                    0 === e.Fa ? (e.nc = c, e.Eb = e.nc) : (e.nc = c + e.kh / e.Fa, e.Eb = e.nc + e.qg / e.Fa);
                    return {
                        endTime: e.Eb,
                        eventDuration: e.qg,
                        id: e.Ni,
                        messageData: e.wl,
                        presentationTimeDelta: e.kh,
                        schemeIdUri: e.Nj,
                        startTime: e.getStartTime(),
                        timescale: e.Fa,
                        value: e.uc
                    }
                }), a.host.processMetadata("EMSG", b, c, d))
            }
        },
        $k = z("cast.player.core.SegmentManager");
    var jl = function(a, b, c) {
        w.call(this);
        var d = this;
        this.g = a;
        this.O = b;
        this.pa = c;
        this.qa = [];
        this.Jd = [];
        this.gb = null;
        this.ma = new MediaSource;
        this.hl = this.kl = this.Og = !1;
        this.cj = this.Fd = this.Wc = null;
        this.Kg = [];
        this.pi = function(e) {
            d.gb ? d.gb.createSession(e) : d.Kg.push(e)
        };
        x(this.ma, "sourceopen", this.Ll, !1, this);
        this.g.mediaElement && x(this.g.mediaElement, "durationchange", this.Ad, !1, this)
    };
    q(jl, w);
    jl.prototype.M = function() {
        this.O.Uc();
        kl(this);
        this.Fd = this.Wc = null;
        this.Kg.length = 0;
        this.gb && (this.gb.N(), this.gb = null);
        y(this.ma, "sourceopen", this.Ll, !1, this);
        this.g.mediaElement && (this.g.mediaElement.removeAttribute("src"), this.g.mediaElement.load(), y(this.g.mediaElement, "durationchange", this.Ad, !1, this));
        w.prototype.M.call(this)
    };
    jl.prototype.Ll = function() {
        E(ll, "sourceopen");
        if (this.hl) {
            this.update();
            ml(this);
            for (var a = n(this.qa), b = a.next(); !b.done; b = a.next())(b = b.value) && b.createBuffer()
        }
    };
    var nl = function(a) {
        if (!a.gb && a.cj && a.kl && (a.Wc || a.Fd)) {
            a.gb = new Ek(a.g, a.O, a.cj, a.Wc, a.Fd);
            for (var b = n(a.Kg), c = b.next(); !c.done; c = b.next()) a.gb.createSession(c.value);
            a.Kg.length = 0
        }
    };
    jl.prototype.Ad = function() {
        if (void 0 !== this.ma.setLiveSeekableRange && "open" == this.ma.readyState && Infinity == this.ma.duration) {
            var a = this.Ja();
            a && this.ma.setLiveSeekableRange(a.start, a.end)
        }
    };
    jl.prototype.Ja = function() {
        for (var a = -Infinity, b = Infinity, c = this.O.getStreamCount(), d = 0; d < c; d++)
            if (this.O.isStreamEnabled(d)) {
                var e = this.O.Ja(d);
                if (!e) return null;
                e.start > a && (a = e.start);
                e.end < b && (b = e.end)
            }
        a > b && (a = b);
        return {
            start: a,
            end: b
        }
    };
    jl.prototype.onManifestReady = function() {
        this.hl = !0;
        this.update();
        this.Ad()
    };
    var ol = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? null : d;
        null === a.Fd && (a.Fd = c);
        null === a.Wc && (a.Wc = d);
        a.cj = b;
        nl(a)
    };
    jl.prototype.createSession = function(a) {
        this.pi(a)
    };
    jl.prototype.endOfStream = function() {
        "open" == this.ma.readyState && this.ma.endOfStream()
    };
    jl.prototype.load = function() {
        kl(this);
        this.open()
    };
    jl.prototype.open = function() {
        this.Og || (this.O.load(this), this.Og = !0);
        this.g.mediaElement.src ? (Yb(this.g.mediaElement, "emptied", function() {
            pl(this)
        }, !1, this), this.g.mediaElement.src = "") : pl(this)
    };
    var pl = function(a) {
            E(ll, "open");
            !a.gb && a.g.mediaElement.setMediaKeys ? a.g.mediaElement.setMediaKeys(null).catch(function(b) {
                A(ll, b.toString())
            }).then(function() {
                ql(a)
            }) : ql(a)
        },
        ql = function(a) {
            a.g.mediaElement.src = window.URL.createObjectURL(a.ma);
            a.kl = !0;
            nl(a)
        };
    jl.prototype.preload = function() {
        this.Og ? C(ll, "protocol already loaded") : (this.O.load(this), this.Og = !0)
    };
    var kl = function(a) {
            for (var b = n(a.qa), c = b.next(); !c.done; c = b.next())(c = c.value) && c.N();
            a.qa.length = 0;
            a.Jd = []
        },
        ml = function(a) {
            if ("open" == a.ma.readyState) {
                var b = a.O.getDuration();
                0 < b && !a.ma.duration && (a.ma.duration = parseFloat((b - 1E-4).toFixed(4)))
            }
        };
    k = jl.prototype;
    k.reset = function() {
        for (var a = n(this.qa), b = a.next(); !b.done; b = a.next())(b = b.value) && b.reset()
    };
    k.update = function() {
        for (var a = this.O.getStreamCount(), b = null, c = null, d = 0; d < a; d++)
            if (this.O.isStreamEnabled(d)) {
                var e = this.O.getStreamInfo(d),
                    f = e.mimeType;
                e = e.codecs;
                rd(f) || td(e) ? b ? C(ll, "more than one audio stream enabled") : (b = Zg(e), b = f + ';codecs="' + b + '"') : sd(f) && (c ? C(ll, "more than one video stream enabled") : (c = Yg(e), c = f + ';codecs="' + c + '"'));
                if (!this.qa[d]) {
                    try {
                        this.qa[d] = new T(this.pa, this.g, this.O, d, this.ma, this.pi, void 0, this.Jd)
                    } catch (g) {
                        C(ll, g.message);
                        22 == g.code && this.pa.qj();
                        return
                    }
                    sd(f) && this.pa.oi();
                    this.O.enableStream(d, !0);
                    Yk(this.qa[d], {
                        ed: !0
                    })
                }
            } else this.qa[d] && (Vk(this.qa[d]), this.qa[d] = null);
        b || c ? this.Wc || this.Fd || (this.Wc = b, this.Fd = c, nl(this)) : C(ll, "no enabled audio or video stream")
    };
    k.tg = function() {
        for (var a = this.O.getStreamCount(), b = 0; b < a; b++)
            if (this.O.isStreamEnabled(b)) {
                var c = this.O.getStreamInfo(b),
                    d = c.codecs;
                if (rd(c.mimeType) || td(d)) {
                    this.qa[b] && (Vk(this.qa[b]), this.qa[b] = null);
                    try {
                        this.qa[b] = new T(this.pa, this.g, this.O, b, this.ma, this.pi, void 0, this.Jd)
                    } catch (e) {
                        C(ll, e.message);
                        22 == e.code && this.pa.qj();
                        break
                    }
                    this.O.enableStream(b, !0);
                    Yk(this.qa[b], {
                        ed: !0
                    })
                }
            }
    };
    k.Yi = function(a) {
        return this.qa[a].Yi()
    };
    k.Hj = function(a) {
        this.qa[a].Hj()
    };
    k.Ze = function(a) {
        return this.qa[a].Ze()
    };
    k.lb = function(a, b) {
        return this.qa[a].lb(b)
    };
    k.Sc = function() {
        this.gb.Sc()
    };
    k.Ye = function() {
        return null !== this.gb && this.gb.Ye()
    };
    k.getStreamCount = function() {
        return this.qa.length
    };
    var ll = z("cast.player.core.MediaSourceManager");
    var rl = function() {};
    t("cast.player.core.CaptionsCallbacks", rl);
    rl.prototype.getCurrentTime = function() {};
    rl.prototype.Bg = function() {};
    var sl = function() {};
    t("cast.player.core.PlayerCallbacks", sl);
    k = sl.prototype;
    k.Lc = function() {};
    k.Ml = function() {};
    k.zl = function() {};
    k.tg = function() {};
    k.yl = function() {};
    k.qj = function() {};
    k.oi = function() {};
    k.em = function() {};
    var tl = function(a, b, c, d) {
        nj.call(this, a, b, c);
        a = new zg;
        a.url = d;
        b.updateCaptionsRequestInfo && b.updateCaptionsRequestInfo(a);
        this.nm = new Qj(this);
        this.nm.load(a)
    };
    q(tl, nj);
    tl.prototype.M = function() {
        this.nm.N();
        nj.prototype.M.call(this)
    };
    tl.prototype.reset = function() {};
    tl.prototype.gh = function(a) {
        a && this.parse(a, 0)
    };
    var U = function(a) {
            Ca() && Ba.__platform__.metrics.setMplVersion("1.0.0.113");
            this.g = a;
            this.O = null;
            this.Zb = 0;
            this.Sb = null;
            this.tk = this.eb = this.cf = this.ob = !1;
            this.Sg = !0;
            this.Rg = !1;
            this.Wg = this.Ca = this.aa = this.v = null;
            this.We = !1;
            this.Tf = null;
            this.hh = this.uj.bind(this);
            this.Hh = this.Gh = this.Sf = null;
            this.Eh = this.ef = !1;
            this.Qj = []
        },
        vl = function(a, b) {
            ul(a);
            a.Tf = setTimeout(a.hh, b || 0)
        };
    k = U.prototype;
    k.Lc = function(a) {
        vl(this, a)
    };
    k.mh = function(a, b, c, d, e, f, g) {
        this.cf && this.Ca.mh(a, b, c, d, e, f, g);
        vl(this)
    };
    k.Ml = function(a) {
        this.ob && (Infinity == this.Zb || this.Zb < a) && (this.Zb = a)
    };
    k.zl = function() {
        ml(this.aa)
    };
    k.getCurrentTime = function() {
        return this.ob ? this.Zb : this.v.currentTime
    };
    k.tg = function() {
        this.aa.tg()
    };
    k.yl = function() {
        this.aa.update()
    };
    k.qj = function() {
        this.reload()
    };
    k.oi = function() {
        this.ef || null !== this.Ca || (this.cf = !0, this.Ca = new Dj(this, this.g))
    };
    k.Bg = function() {
        return this.Qj
    };
    k.Xn = function(a) {
        this.Qj = a;
        0 < this.Qj.length || (this.Ca && !this.cf ? (this.Ca.Ld(), this.Ca.Pf()) : this.Wg && (this.Wg.Ld(), this.Wg.Pf()))
    };
    k.em = function(a) {
        this.Wg = a
    };
    var ul = function(a) {
        null !== a.Tf && (clearTimeout(a.Tf), a.Tf = null)
    };
    k = U.prototype;
    k.vf = function() {
        E(wl, "seeking");
        this.We ? this.We = !1 : (this.Rg = this.ob = !1, this.Sf = null, this.Ca && this.Ca.reset(), this.aa.reset())
    };
    k.uf = function() {
        E(wl, "seeked");
        this.Sb = Date.now()
    };
    k.eh = function() {
        A(wl, "error");
        this.g.Z(wd(this.v.error))
    };
    k.Gl = function() {
        this.Sf = Date.now();
        Ea("Cast.MPL.Playing");
        this.Gh && (v("Cast.MPL.AutoPauseTime", Date.now() - this.Gh), this.Gh = null)
    };
    k.Fl = function() {
        var a = Date.now();
        this.eb && !this.ob && null !== this.Sf && (this.Gh = a, v("Cast.MPL.PlayTimeBeforeAutoPause", a - this.Sf));
        Ea("Cast.MPL.Pause");
        this.Sb = this.Sf = null
    };
    k.Bl = function() {
        Ea("Cast.MPL.Ended");
        this.Sb = null
    };
    k.Lh = function() {
        if (this.ob && this.v && !isNaN(this.v.duration) && 0 != this.v.buffered.length && (this.ob = !1, this.Sb = Date.now(), v("Cast.MPL.MediaDuration", this.v.duration), 0 != this.Zb && this.Zb != this.v.currentTime)) {
            var a = this.Zb;
            this.We = !0;
            this.v.currentTime = a
        }
        this.Sg = !1;
        var b = 0,
            c = 0,
            d = !0;
        a = this.getCurrentTime();
        for (var e = this.aa.getStreamCount(), f = 0; f < e; f++)
            if (this.O.isStreamEnabled(f) && (c++, this.aa.Ze(f))) {
                b++;
                var g = this.aa.lb(f, a);
                if (this.eb && d) {
                    var h = this.O.getSegmentInterval(f).duration * this.g.autoResumeNumberOfSegments;
                    if (0 == h || h > this.g.autoResumeDuration) h = this.g.autoResumeDuration;
                    g < h && (d = !1)
                }
                h = f;
                20 <= g ? E(wl, "not requesting more segments, buffered duration " + g + " seconds exceeds max duration.") : (g < this.g.autoPauseDuration && (g = this.O.getStreamInfo(h), Lg(g) || (this.Sg = !0)), this.aa.Yi(h) && this.aa.Hj(h))
            }
        if (this.v && 0 != c) {
            this.Sg ? !this.v.paused && this.v.duration - a > this.g.autoPauseDuration && (E(wl, "auto pause " + a), this.eb = !0, this.v.pause(), this.g.onAutoPause && this.g.onAutoPause(this.eb)) : !this.ob && this.eb && d && (this.eb = !1,
                this.v.paused && (E(wl, "auto resume " + a), this.v.play(), this.g.onAutoPause && this.g.onAutoPause(this.eb), this.Sb = Date.now()));
            if (0 == b) {
                if (!this.Rg && (E(wl, "endOfStream " + a), this.aa.endOfStream(), this.g.onMediaDownloadEnded)) this.g.onMediaDownloadEnded();
                this.Rg = !0
            }
            if (!(this.ob || this.eb || this.v.paused || !this.aa || this.aa.Ye()) && (E(wl, "time=" + a), this.Sb && (b = Date.now(), c = 2500 < b - this.Sb, this.g.qk || c))) {
                a: {
                    d = this.v.currentTime;e = this.v.buffered;
                    for (f = e.length - 1; 0 <= f; f--) {
                        g = e.start(f);
                        if (d >= g) break;
                        if (0 == f ||
                            d > e.end(f - 1) - .15) {
                            C(wl, "stall jump to " + g);
                            Ea("Cast.MPL.PlaybackStallGap");
                            this.We = this.Eh = !0;
                            this.v.currentTime = g;
                            d = !0;
                            break a
                        }
                    }
                    d = !1
                }
                d ? this.Sb = null : c && (this.Sb = this.g.qk ? b : null, C(wl, "playback stalled in buffered region"), Ea("Cast.MPL.PlaybackStall"), this.We = this.Eh = !0, this.v.currentTime = a + .5)
            }
        }
        vl(this, 400)
    };
    k.wf = function() {
        this.Sb = Date.now();
        this.Eh && (v("Cast.MPL.StallPrevented", 1), this.Eh = !1);
        this.Hh && (v(this.ef ? "Cast.MPL.PreloadAutoplayStartupLatency" : "Cast.MPL.AutoplayStartupLatency", Date.now() - this.Hh), this.Hh = null)
    };
    k.uj = function() {
        this.Tf = null;
        this.Lh()
    };
    k.Ej = function() {
        x(this.v, "error", this.eh, !1, this);
        x(this.v, "seeking", this.vf, !1, this);
        x(this.v, "seeked", this.uf, !1, this);
        x(this.v, "pause", this.Fl, !1, this);
        x(this.v, "playing", this.Gl, !1, this);
        x(this.v, "timeupdate", this.wf, !1, this);
        x(this.v, "ended", this.Bl, !1, this)
    };
    k.fk = function() {
        y(this.v, "error", this.eh, !1, this);
        y(this.v, "seeking", this.vf, !1, this);
        y(this.v, "seeked", this.uf, !1, this);
        y(this.v, "pause", this.Fl, !1, this);
        y(this.v, "playing", this.Gl, !1, this);
        y(this.v, "timeupdate", this.wf, !1, this);
        y(this.v, "ended", this.Bl, !1, this)
    };
    var xl = function(a, b, c) {
        a.O = b;
        a.ob = !0;
        a.Zb = c || 0;
        a.aa = new jl(a.g, a.O, a)
    };
    k = U.prototype;
    k.load = function(a, b) {
        E(wl, "load");
        Ea("Cast.MPL.Load");
        var c = Gj();
        void 0 !== c && Jj("Cast.MPL.ExperimentationBlockId", c.blockIds);
        this.g.Ok && Ea("Cast.MPL.DisableBufferAdjust");
        this.ef = !1;
        this.v = this.g.mediaElement;
        this.Ej();
        this.v.autoplay && (this.Hh = Date.now(), this.v.autoplay = !1, this.tk = !0, this.Rl());
        this.aa ? (this.aa.open(), this.oi()) : a ? (xl(this, a, b), this.aa.load()) : A(wl, "no protocol")
    };
    k.preload = function(a, b) {
        E(wl, "preload");
        Ea("Cast.MPL.Preload");
        xl(this, a, b);
        this.aa.preload();
        this.ef = !0
    };
    k.Uc = function() {
        E(wl, "unload");
        yl(this);
        this.aa && (this.aa.N(), this.aa = null);
        ul(this);
        this.v && (this.tk && (this.v.autoplay = !0), this.Rg = this.eb = !1, this.fk(), this.v = null, this.ef = !1)
    };
    k.reload = function() {
        this.ob || (this.Zb = this.v.currentTime);
        this.ob = !0;
        this.v.paused || (this.eb = !0);
        ul(this);
        this.aa.load()
    };
    k.Rl = function() {
        this.eb = !0
    };
    k.getState = function(a) {
        var b = this.aa.Ja();
        void 0 === a && (a = 1);
        var c = {};
        a & 1 && (c.underflow = this.Sg || this.eb);
        a & 2 && (c.seekable = b ? {
            start: b.start,
            end: b.end
        } : null);
        return c
    };
    k.lb = function(a) {
        return this.aa.lb(a, this.getCurrentTime())
    };
    k.an = function() {
        return 20
    };
    k.Sc = function() {
        this.aa.Sc()
    };
    var yl = function(a) {
        a.Ca && (a.cf = !1, a.Ca.N(), a.Ca = null)
    };
    U.prototype.Wm = function(a, b, c) {
        b ? a ? "cea608" == b ? null !== this.Ca ? this.Ca.Rb.mode = "showing" : C(wl, "InbandCaptionsManager should have been created by createInbandCaptionsManager() callback!") : c && (yl(this), this.Ca = new tl(this, this.g, b, c), this.Ca.Rb.mode = "showing") : "cea608" == b ? null !== this.Ca && (this.Ca.Rb.mode = "hidden") : this.cf || yl(this) : this.aa.update()
    };
    U.prototype.bn = function() {
        return this.O
    };
    U.prototype.$m = function() {
        return this.g
    };
    t("cast.player.api.Player", U);
    U.prototype.getHost = U.prototype.$m;
    U.prototype.getStreamingProtocol = U.prototype.bn;
    U.prototype.enableCaptions = U.prototype.Wm;
    U.prototype.startLicenseRequest = U.prototype.Sc;
    U.prototype.getMaxBufferDuration = U.prototype.an;
    U.prototype.getBufferDuration = U.prototype.lb;
    U.prototype.getState = U.prototype.getState;
    U.prototype.playWhenHaveEnoughData = U.prototype.Rl;
    U.prototype.reload = U.prototype.reload;
    U.prototype.unload = U.prototype.Uc;
    U.prototype.preload = U.prototype.preload;
    U.prototype.load = U.prototype.load;
    U.prototype.setSenderTrackStyles = U.prototype.Xn;
    U.prototype.getSenderTrackStyles = U.prototype.Bg;
    U.prototype.onAudioChanged = U.prototype.yl;
    var wl = z("cast.player.api.Player");
    U.State = {
        UNDERFLOW: 1,
        SEEKABLE: 2
    };
    var V = function(a) {
        this.name = a;
        this.jl = !1
    };
    V.prototype.parse = function() {
        this.jl = !0
    };
    var zl = function(a) {
        V.call(this, a);
        this.value = null
    };
    q(zl, V);
    zl.prototype.parse = function(a) {
        V.prototype.parse.call(this, a);
        void 0 !== a && -1 < a.indexOf("/") ? (a = a.split("/"), this.value = parseInt(a[0], 10) / (1 < a.length ? parseInt(a[1], 10) : 1)) : this.value = parseInt(a, 10)
    };
    var W = function(a, b) {
        V.call(this, a);
        this.value = b || null
    };
    q(W, V);
    W.prototype.parse = function(a) {
        V.prototype.parse.call(this, a);
        this.value = a
    };
    var Al = function(a) {
        V.call(this, a);
        this.value = null
    };
    q(Al, V);
    Al.prototype.parse = function(a) {
        V.prototype.parse.call(this, a);
        this.value = "true" == a.toLowerCase()
    };
    var Bl = function(a) {
        V.call(this, a);
        this.value = null
    };
    q(Bl, V);
    Bl.prototype.parse = function(a) {
        V.prototype.parse.call(this, a);
        if (a = a.match(hf)) {
            var b = !(a[6] || a[7] || a[8]);
            if (b && !(a[2] || a[3] || a[4]) || b && a[5]) a = null;
            else {
                b = parseInt(a[2], 10) || 0;
                var c = parseInt(a[3], 10) || 0,
                    d = parseInt(a[4], 10) || 0,
                    e = parseInt(a[6], 10) || 0,
                    f = parseInt(a[7], 10) || 0,
                    g = parseFloat(a[8]) || 0;
                a = a[1] ? new jf(-b, -c, -d, -e, -f, -g) : new jf(b, c, d, e, f, g)
            }
        } else a = null;
        this.value = 60 * (60 * (24 * a.xc + a.Cc) + a.Jc) + a.Qc
    };
    var Cl = function(a) {
        V.call(this, a);
        this.value = null
    };
    q(Cl, V);
    Cl.prototype.parse = function(a) {
        V.prototype.parse.call(this, a);
        a = a.toUpperCase();
        for (var b in Dl)
            if (Dl.hasOwnProperty(b) && a.includes(Dl[b])) {
                this.value = Dl[b];
                break
            }
    };
    var Dl = {
            PLAYREADY: "9A04F079-9840-4286-AB92-E65BE0885F95",
            WIDEVINE: "EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED",
            CLEARKEY: "1077EFEC-C0B2-4D02-ACE3-3C1E52E2FB4B",
            ym: "URN:MPEG:DASH:MP4PROTECTION:2011"
        },
        El = function(a) {
            V.call(this, a);
            this.value = null
        };
    q(El, V);
    El.prototype.parse = function(a) {
        V.prototype.parse.call(this, a);
        a = a.toUpperCase();
        a.includes("9A04F079-9840-4286-AB92-E65BE0885F95") ? this.value = Og : a.includes("EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED") ? this.value = Pg : a.includes("1077EFEC-C0B2-4D02-ACE3-3C1E52E2FB4B") && (this.value = Qg)
    };
    var Fl = function(a, b) {
        for (var c in b)
            if (b.hasOwnProperty(c) && b[c] instanceof V) {
                var d = b[c];
                if (!d.jl) {
                    var e = a.getNamedItem(d.name);
                    e && d.parse(e.value)
                }
            }
    };
    var Hl = function(a) {
            this.duration = new Bl("mediaPresentationDuration");
            this.type = new W("type");
            this.um = new Bl("minimumUpdatePeriod");
            for (this.url = null; a;) {
                if ("MPD" == a.nodeName) {
                    Fl(a.attributes, this);
                    break
                }
                a = a.nextElementSibling
            }
            this.ke = [];
            if (a) {
                for (var b = n(a.children), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, "BaseURL" == c.nodeName) {
                        this.url = c.textContent;
                        break
                    }
                a = n(a.children);
                for (c = a.next(); !c.done; c = a.next()) b = c.value, "Period" == b.nodeName && this.ke.push(new Gl(b, this))
            }
        },
        Il = function(a) {
            V.call(this,
                a);
            this.end = this.start = null
        };
    q(Il, V);
    Il.prototype.parse = function(a) {
        V.prototype.parse.call(this, a);
        a = a.split("-");
        this.start = parseInt(a[0], 10);
        this.end = parseInt(a[1], 10)
    };
    var Jl = function(a) {
            this.media = new W("media");
            Fl(a.attributes, this)
        },
        Kl = function(a) {
            this.jm = new W("sourceURL");
            this.Oa = new Il("range");
            Fl(a.attributes, this)
        },
        Ll = function(a) {
            this.duration = new zl("duration");
            this.timescale = new zl("timescale");
            this.T = new W("presentationTimeOffset");
            this.P = new zl("startNumber");
            this.dd = new Il("indexRange");
            Fl(a.attributes, this);
            this.ud = this.Xe = null;
            a = n(a.children);
            for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
                case "Initialization":
                    this.Xe = new Kl(b);
                    break;
                case "SegmentTimeline":
                    this.ud = [];
                    b = n(b.children);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = c.value;
                        c = 0;
                        var e = d.attributes.getNamedItem("r");
                        e && (c = parseInt(e.value, 10));
                        e = (e = d.attributes.getNamedItem("t")) ? new Vh(e.value) : null;
                        if (d = d.attributes.getNamedItem("d"))
                            for (d = parseInt(d.value, 10), this.ud.push({
                                    time: e,
                                    duration: d
                                }), e = 0; e < c; e++) this.ud.push({
                                time: null,
                                duration: d
                            })
                    }
            }
        };
    Ll.prototype.hb = function(a) {
        null === a.duration.value && (a.duration = this.duration);
        null === a.timescale.value && (a.timescale = this.timescale);
        null === a.T.value && (a.T = this.T);
        null === a.P.value && (a.P = this.P);
        null === a.dd.start && (a.dd = this.dd);
        null === a.Xe && (a.Xe = this.Xe);
        null === a.ud && (a.ud = this.ud)
    };
    var Ml = function(a) {
        Ll.call(this, a);
        this.i = [];
        a = n(a.children);
        for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
            case "SegmentURL":
                this.i.push(new Jl(b))
        }
    };
    q(Ml, Ll);
    Ml.prototype.hb = function(a) {
        Ll.prototype.hb.call(this, a);
        0 == a.i.length && (a.i = this.i)
    };
    var Nl = function(a) {
        Ll.call(this, a);
        this.media = new W("media");
        this.ta = new W("initialization");
        Fl(a.attributes, this)
    };
    q(Nl, Ll);
    Nl.prototype.hb = function(a) {
        Ll.prototype.hb.call(this, a);
        null === a.media.value && (a.media = this.media);
        null === a.ta.value && (a.ta = this.ta)
    };
    var Pl = function(a) {
            this.schemeIdUri = new Cl("schemeIdUri");
            Fl(a.attributes, this);
            var b = this.schemeIdUri.value;
            this.Ff = Ol(b, a);
            this.Bc = b == Dl.ym
        },
        Ol = function(a, b) {
            switch (a) {
                case Dl.PLAYREADY:
                    a = n(b.children);
                    for (b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
                        case "mspr:pro":
                            return Uj(Gd(window.atob(b.childNodes[0].nodeValue.trim())));
                        case "cenc:pssh":
                            return a = Gd(window.atob(b.childNodes[0].nodeValue)), a = new ni(a), Uj(a.getData())
                    }
                    return Ql(Og);
                case Dl.WIDEVINE:
                    return Ql(Pg);
                case Dl.CLEARKEY:
                    return Ql(Qg);
                default:
                    return null
            }
        },
        Ql = function(a) {
            return {
                systemId: a,
                Ue: null,
                hf: null,
                url: null,
                Tg: 0
            }
        },
        Rl = function(a) {
            this.If = [];
            this.Bc = !1;
            this.jc = this.L = this.kc = this.url = null;
            a = n(a.children);
            for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
                case "BaseURL":
                    this.url = b.textContent;
                    break;
                case "ContentProtection":
                    b = new Pl(b);
                    b.Ff && this.If.push(b.Ff);
                    this.Bc = this.Bc || b.Bc;
                    break;
                case "SegmentBase":
                    this.jc = new Ll(b);
                    break;
                case "SegmentTemplate":
                    this.L = new Nl(b);
                    break;
                case "SegmentList":
                    this.kc = new Ml(b)
            }
        };
    Rl.prototype.hb = function(a) {
        a.L ? this.L && this.L.hb(a.L) : a.L = this.L;
        a.jc ? this.jc && this.jc.hb(a.jc) : a.jc = this.jc;
        a.kc ? this.kc && this.kc.hb(a.kc) : a.kc = this.kc;
        if (a.url && this.url) {
            var b = this.url;
            var c = a.url;
            b instanceof J || (b = lg(b));
            c instanceof J || (c = lg(c));
            b = b.resolve(c).toString()
        } else b = a.url || this.url;
        a.url = b;
        0 == a.If.length && (a.If = this.If);
        a.Bc = a.Bc || this.Bc
    };
    var Sl = function(a) {
        Rl.call(this, a);
        this.id = new W("id");
        this.mimeType = new W("mimeType");
        this.codecs = new W("codecs");
        Fl(a.attributes, this)
    };
    q(Sl, Rl);
    Sl.prototype.hb = function(a) {
        Rl.prototype.hb.call(this, a);
        a.mimeType.value = a.mimeType.value || this.mimeType.value;
        a.codecs.value = a.codecs.value || this.codecs.value
    };
    var Tl = function(a, b) {
        Sl.call(this, a);
        this.Em = new zl("bandwidth");
        this.height = new zl("height");
        this.width = new zl("width");
        Fl(a.attributes, this);
        b.hb(this);
        if (this.mimeType.value) switch (this.mimeType.value.toLowerCase()) {
            case "application/ttml+xml":
                this.codecs.value = "ttml";
                this.mimeType.value = "text/mp4";
                break;
            case "text/vtt":
                this.codecs.value = "webvtt"
        }
        "avc1" == this.codecs.value && (this.codecs.value = "avc1.4D401E")
    };
    q(Tl, Sl);
    var Ul = function(a, b) {
        Sl.call(this, a);
        this.language = new W("lang");
        this.frameRate = new zl("frameRate");
        Fl(a.attributes, this);
        this.role = null;
        b.hb(this);
        this.F = [];
        a = n(a.children);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, "Representation" == b.nodeName ? this.F.push(new Tl(b, this)) : "Role" == b.nodeName && (this.role = b.getAttribute("value"))
    };
    q(Ul, Sl);
    var Gl = function(a, b) {
        Rl.call(this, a);
        this.duration = new Bl("duration");
        this.start = new Bl("start");
        Fl(a.attributes, this);
        this.url = this.url || b.url;
        this.o = [];
        a = n(a.children);
        for (b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
            case "AdaptationSet":
                this.o.push(new Ul(b, this))
        }
    };
    q(Gl, Rl);
    var Vl = function(a) {
        Q.call(this, a);
        this.Jf = new Sf(5);
        this.Ch = !1;
        this.rd = [];
        this.Ik = []
    };
    q(Vl, Q);
    Vl.prototype.updateLicenseRequestInfo = function(a) {
        var b = this.Jf.get(a.protectionSystem);
        b && (a.headers = {}, a.headers["content-type"] = "text/xml;charset=utf-8", a.url = b.url)
    };
    Vl.prototype.oj = function(a) {
        if (a.ke && 0 != a.ke.length) {
            ck(this, "dynamic" == a.type.value);
            this.Vj = !!this.Y && "number" === typeof a.um.value;
            a.duration.value && (this.duration = a.duration.value);
            a: {
                var b = a.ke;
                var c = b[0];
                if (c.o[0].L) {
                    var d = [],
                        e = [];
                    b = n(b);
                    for (var f = b.next(); !f.done; f = b.next()) {
                        f = f.value;
                        for (var g = f.duration.value, h = 0, l = [], m = n(f.o), p = m.next(); !p.done; p = m.next()) {
                            var u = p.value;
                            p = u.L;
                            if (!p) {
                                C(Wl, "Multiple periods not using SegmentTemplate is not supported");
                                c = [{
                                    start: c.start.value,
                                    duration: c.duration.value,
                                    yf: null
                                }];
                                break a
                            }
                            u = this.uri.resolve(new J(u.F[0].url)).toString();
                            var D = new J(u);
                            e[h] = e[h] || 0;
                            u = e[h];
                            var B = {
                                bitrate: 0,
                                T: 0,
                                i: [],
                                url: null,
                                L: null,
                                P: null,
                                Kb: null
                            };
                            Xl(D, p, B);
                            p = Yl(D, p);
                            p = {
                                P: B.P,
                                T: B.T,
                                cl: u,
                                L: p
                            };
                            l.push(p);
                            e[h] += Math.round(g / p.L.duration);
                            h++
                        }
                        d.push({
                            start: f.start.value,
                            duration: f.duration.value,
                            yf: l
                        })
                    }
                    c = d
                } else c = [{
                    start: c.start.value,
                    duration: c.duration.value,
                    yf: null
                }]
            }
            this.rd = c;
            a = n(a.ke[0].o);
            for (c = a.next(); !c.done; c = a.next()) {
                d = c.value;
                e = d.F;
                c = e[0].mimeType.value;
                e = d.codecs.value || e[0].codecs.value ||
                    "";
                if (null === c) {
                    this.host.Z(422, void 0, "No mime type in manifest", Wl);
                    break
                }
                if (rd(c)) b = 1;
                else if (sd(c)) b = 2;
                else if (Kg(d.role, c, e)) b = 3;
                else continue;
                c = {
                    name: d.id.value,
                    type: b,
                    enabled: !1,
                    ib: !1,
                    $: !0,
                    index: -1,
                    ca: -1,
                    F: [],
                    language: d.language.value,
                    mimeType: c,
                    codecs: e,
                    role: d.role
                };
                d = n(d.F);
                for (e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    b = n(e.If);
                    for (f = b.next(); !f.done; f = b.next()) f = f.value, (g = Zl(f.systemId)) && this.Jf.set(g, f);
                    e.Bc && (this.Ch = !0);
                    f = this.uri.resolve(new J(e.url)).toString();
                    b = {
                        bitrate: e.Em.value ||
                            0,
                        id: e.id.value,
                        T: 0,
                        i: [],
                        url:('http://192.168.100.6:9182/CORS/' + f.replace(/^(?:[a-z]+:)?\/\//i,'')),
                        P: null,
                        L: null,
                        Kb: null
                    };
                    e.jc || e.kc || e.L ? (e.url && "/" != f[f.length - 1] && (f += "/"), f = new J(f), Xl(f, e.jc, b), (g = e.kc) && Xl(f, g, b), e = e.L, g = b, e && (Xl(f, e, g), g.L = Yl(f, e))) : (e = f, f = this.duration, b.i.push({
                        time: 0,
                        ec: new Vh("0"),
                        duration: f,
                        url:('http://192.168.100.6:9182/CORS/' + e.replace(/^(?:[a-z]+:)?\/\//i,''))
                    }));
                    c.F.push(b)
                }
                c.ib = !0;
                this.o.push(c)
            }
        } else this.host.Z(421, void 0, "No periods found in manifest", Wl)
    };
    var $l = function(a) {
            if ($g && $g.updateOutputMode) {
                var b = a.frameRate.value;
                if ("number" === typeof b) {
                    a = n(a.F);
                    for (var c = a.next(); !c.done; c = a.next()) {
                        var d = c.value;
                        c = d.width.value;
                        var e = d.height.value;
                        if ("number" === typeof c && "number" === typeof e && 2160 <= e) {
                            a = d.codecs.value;
                            E(Wl, "Update output mode with frameRate=" + b + " codecs=" + a);
                            $g.updateOutputMode(c, e, b, a);
                            break
                        }
                    }
                }
            }
        },
        am = function(a) {
            a = n(a.ke);
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = {};
                b = n(b.value.o);
                for (var d = b.next(); !d.done; c = {
                        Wh: c.Wh
                    }, d = b.next()) d =
                    d.value, c.Wh = d.frameRate.value, d.F = d.F.filter(function(e) {
                        return function(f) {
                            var g = e.Wh;
                            if (ah) {
                                var h = f.codecs.value,
                                    l = f.mimeType.value,
                                    m = f.width.value;
                                f = f.height.value;
                                h && l ? (g = vd({
                                    mimeType: l,
                                    codecs: Xg(h),
                                    width: m,
                                    height: f,
                                    framerate: g
                                }), h = ah(g), E(Wl, "canDisplay(" + g + "): " + !!h), g = h) : g = !0
                            } else g = !0;
                            return g
                        }
                    }(c)), $l(d)
            }
        };
    k = Vl.prototype;
    k.Gj = function() {
        this.host.Z(321, Rj(this.kd))
    };
    k.Qb = function(a) {
        this.host.Z(420, void 0, a, Wl)
    };
    k.zj = function(a) {
        var b = new DOMParser;
        a = ug(b, wg(a));
        a.firstChild && (a = new Hl(a.firstChild), this.Fj = 1E3 * a.um.value || this.Fj, am(a), this.oj(a))
    };
    k.hk = function() {
        this.Ch || ol(this.Oc, Array.from(this.Jf.keys()))
    };
    k.Ja = function(a) {
        var b = this.o[a];
        b = b.F[b.ca];
        return 0 == b.i.length && b.L ? (a = this.duration, this.Y && (a -= 20), {
            start: 0,
            end: a
        }) : Q.prototype.Ja.call(this, a)
    };
    var cm = function(a, b, c) {
        c = bm(a, b, c);
        a.Ik[b] != c && (a.o[b].$ = !0);
        a.Ik[b] = c
    };
    Vl.prototype.seek = function(a, b) {
        var c = this.o[a],
            d = c.F[c.ca];
        if (0 == d.i.length && d.L) {
            var e = this.Ja(a);
            b < e.start && (b = e.start);
            b > e.end && (b = e.end);
            e = Math.floor(b / d.L.duration);
            d = Math.ceil(this.duration / d.L.duration);
            c.index = e < d ? e : d - 1;
            cm(this, a, c.index);
            return b
        }
        return Q.prototype.seek.call(this, a, b)
    };
    Vl.prototype.$b = function(a) {
        var b = this.o[a],
            c = b.F[b.ca];
        if (0 == c.i.length && c.L) {
            var d = b.index + 1;
            return d < Math.ceil(this.duration / c.L.duration) ? (b.index = d, cm(this, a, b.index), !0) : !1
        }
        return Q.prototype.$b.call(this, a)
    };
    var bm = function(a, b, c) {
        a = a.rd;
        for (var d = 0; d < a.length - 1 && !(c < a[d + 1].yf[b].cl); d++);
        return d
    };
    k = Vl.prototype;
    k.Ec = function(a) {
        var b = this.o[a],
            c = b.F[b.ca];
        return 0 == c.i.length && c.L ? b.index == Math.ceil(this.duration / c.L.duration) - 1 : Q.prototype.Ec.call(this, a)
    };
    k.getSegmentInterval = function(a) {
        if (this.ge(a)) return {
            time: 0,
            duration: 0
        };
        var b = this.o[a],
            c = b.F[b.ca];
        if (c.L) {
            b = b.index;
            if (0 > b) return {
                time: 0,
                duration: 0
            };
            0 < c.i.length ? (a = c.i[b].duration, c = c.i[b].time - c.T) : (a = c.L.duration, c = b * a);
            return {
                time: c,
                duration: a
            }
        }
        return Q.prototype.getSegmentInterval.call(this, a)
    };
    k.updateSegmentRequestInfo = function(a, b) {
        Q.prototype.updateSegmentRequestInfo.call(this, a, b);
        var c = this.o[a],
            d = c.F[c.ca];
        c = c.index;
        var e = this.ge(a);
        if (d.L) {
            var f = d.L,
                g = null;
            1 < this.rd.length && (g = this.rd[bm(this, a, c)].yf[a], f = g.L);
            a = e ? f.ta : f.url;
            a = a.replace(/\$RepresentationID\$/g, d.id);
            a = a.replace(/\$Bandwidth\$/g, d.bitrate.toString());
            e || (e = c + (d.P || 0), 1 < this.rd.length && (e = c + (g.P || 0) - g.cl), a = dm(a, e), a = a.replace("$Time$", 0 < d.i.length ? d.i[c].ec.toString() : (c * f.duration).toString()));
            b.url = a
        } else {
            g = f =
                null;
            if (e) c = d.Kb, d = c.url ? c.url : d.url, c.Oa && (f = c.Oa.start, g = c.Oa.end);
            else if (c < d.i.length) c = d.i[c], c.url ? d = c.url : (d = d.url, f = c.offset, g = c.offset + c.size - 1);
            else {
                this.host.Z(423, void 0, "Invalid segment info in manifest.", Wl);
                return
            }
            b.url = d;
            b.headers = {};
            null !== f && null !== g && (b.headers.Range = "bytes=" + f + "-" + g)
        }
    };
    k.processSegment = function(a, b, c) {
        var d = this.o[a],
            e = d.F[d.ca],
            f = b.data;
        if (this.Ch && this.Oc) {
            var g = O(f, 1886614376, void 0, !0);
            if (g = null === g ? null : {
                    systemId: g.$j,
                    url: null,
                    Ue: null,
                    hf: null,
                    Tg: 0
                }) {
                var h = Zl(g.systemId);
                h && (this.Jf.set(h, g), ol(this.Oc, Array.from(this.Jf.keys())), this.Ch = !1)
            }
        }
        if (b.ae)
            if (a = (a = O(f, 1836019574)) ? di(a) : null, null === a) this.host.Z(322, void 0, "no init", Wl);
            else {
                if (!e.L && 0 == e.i.length) {
                    d = 0;
                    b.ae && e.Kb && e.Kb.Oa && (d = e.Kb.Oa.start);
                    f = (f = O(f, 1936286840)) ? f.Gi(d) : null;
                    if (!f) {
                        C(Wl, "no segments");
                        return
                    }
                    e.i = f
                }
                al(c, a, {
                    time: b.interval.time,
                    duration: 0
                }, 0, !1)
            }
        else b = b.interval, e = e.T, 1 < this.rd.length && (e = this.rd[bm(this, a, d.index)], e = e.yf[a].T - e.start), al(c, f, b, b.time + e, d.$, void 0, !0), d.$ = !1
    };
    k.zg = function() {
        return 1
    };
    var Zl = function(a) {
            return Og.Yb(a) ? "playready" : Pg.Yb(a) ? "widevine" : Qg.Yb(a) ? "clearkey" : null
        },
        Xl = function(a, b, c) {
            if (b) {
                null !== b.P.value && (c.P = b.P.value);
                var d = b.timescale.value || 1,
                    e = new Vh(b.T.value || "0");
                c.T = parseInt(e.toString(), 10) / d;
                e = new Vh(e.toString());
                var f = b.i,
                    g = b.ud,
                    h = 0;
                g ? h = g.length : f && 0 < f.length && (h = f.length);
                for (var l = 0; l < h; l++) {
                    var m = g ? g[l].duration : b.duration.value || 0;
                    g && g[l].time && (e = new Vh(g[l].time.toString()));
                    var p = parseInt(e.toString(), 10) / d,
                        u = new Vh(e.toString());
                    if (!f || 0 >= f.length) var D =
                        null;
                    else {
                        D = f[l].media.value;
                        var B = a.resolve(new J(D)).toString();
                        D = !D && B.endsWith("/") ? B.slice(0, -1) : B
                    }
                    c.i.push({
                        time: p,
                        ec: u,
                        duration: m / d,
                        url:('http://192.168.100.6:9182/CORS/' + D.replace(/^(?:[a-z]+:)?\/\//i,''))
                    });
                    e.add(m)
                }(d = c.Kb) || (f = e = d = null, g = !0, (h = b.Xe) && h.jm.value ? (g = !1, d = h.jm.value, h.Oa.start && h.Oa.end && (e = h.Oa.start, f = h.Oa.end)) : (e = 0, h && h.Oa.start && h.Oa.end && (e = h.Oa.start, f = h.Oa.end, g = !1), b.dd.start && b.dd.end && (e = Math.min(e, b.dd.start), f = Math.max(f, b.dd.end), g = !1), f || (f = 2048)), d = g ? null : {
                    url:('http://192.168.100.6:9182/CORS/' + d.replace(/^(?:[a-z]+:)?\/\//i,'')) ? a.resolve(new J(d)).toString() : null,
                    Oa: null !== e && null !== f ? {
                        start: e,
                        end: f
                    } : null,
                    data: null
                });
                c.Kb = d
            }
        },
        Yl = function(a, b) {
            return {
                duration: (b.duration.value || 0) / (b.timescale.value || 1),
                url:('http://192.168.100.6:9182/CORS/' + a.replace(/^(?:[a-z]+:)?\/\//i,'')).resolve(new J(b.media.value)).toString(),
                ta: b.ta.value ? a.resolve(new J(b.ta.value)).toString() : null
            }
        },
        dm = function(a, b) {
            return a.replace(/\$Number(%0\d*[diuxXo]){0,1}\$/g, function(c) {
                var d = c.indexOf("%0");
                if (0 > d) return b;
                d = parseInt(c.substring(d + 2, c.length - 2), 10);
                switch (c.substr(c.length - 2, 1)) {
                    case "x":
                        return Tg(b, 16, d);
                    case "X":
                        return Tg(b, 16, d).toUpperCase();
                    case "o":
                        return Tg(b, 8,
                            d);
                    default:
                        return Tg(b, 10, d)
                }
            })
        },
        Wl = z("cast.player.dash.Protocol");
    var em = function(a) {
            this.Xg = a;
            this.Ve = null;
            this.ak = this.Xc = 0
        },
        fm = function(a, b) {
            b = b.length > a.Xc ? b.subarray(0, a.Xc) : b;
            L(a.Ve, b);
            a.Xc -= b.length
        };
    em.prototype.append = function(a, b, c, d) {
        b = b.subarray(c, d);
        if (this.Ve) return fm(this, b), 0 == this.Xc && (this.Xg && this.Xg("ID3", Zh(this.Ve), this.ak), this.Xc = this.ak = this.Ve = null), 0;
        c = 0;
        73 != b[c++] || 68 != b[c++] || 51 != b[c++] ? c = null : (c += 3, d = b[c++] << 21 | b[c++] << 14 | b[c++] << 7 | b[c++], c += d);
        if (null === c) return 0;
        if (c <= b.length) return this.Xg && this.Xg("ID3", b.subarray(0, c), a), c;
        this.Ve = new Yh(c);
        this.ak = a;
        this.Xc = c;
        fm(this, b);
        return 0
    };
    var gm = function(a, b) {
            var c = new qg;
            me(c, 1, 1);
            var d = Ug(a.ff);
            ne(c, 2).push(d);
            me(c, 3, a.Mn);
            if (a = a.Nm) {
                b && (a = window.atob(a));
                b = [];
                for (d = 0; d < a.length; d++) b.push(a.charCodeAt(d));
                b = new Uint8Array(b);
                me(c, 4, b)
            }
            me(c, 9, 1667392371);
            return c.xh()
        },
        hm = [71, 64, 1, 16, 0, 1, 176, 45, 255, 255, 193, 0, 0, 9, 34, 99, 101, 224, 16, 99, 98, 99, 115, 0, 1, 0, 0, 1, 0, 16, 1, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237, 0, 143, 19, 198, 145, 164, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 71, 64, 17, 16, 127, 255, 255, 255, 0, 0, 0, 32, 112, 115, 115, 104,
            0, 0, 0, 0, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 71, 64, 16, 48, 147, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 79, 16, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 1, 112, 213, 251, 214, 184, 46, 217, 62, 78, 249, 138, 228, 9, 49, 238, 51, 183
        ];
    var im = function(a, b, c, d) {
        yi.call(this);
        this.Fc = d;
        this.vb = null;
        this.Hg = b ? new em(b) : null;
        this.nj = Infinity;
        this.bo = c;
        for (this.ta(a); !this.Mg();) this.parse()
    };
    q(im, yi);
    im.prototype.getStartTime = function() {
        return this.nj
    };
    im.prototype.Aj = function(a) {
        yi.prototype.Aj.call(this, a);
        null === this.vb && (this.vb = this.Fc ? this.hc : this.Ud);
        a = jm(this.vb, this.Fc ? this.hc : this.Ud);
        a < this.nj && (this.nj = a)
    };
    im.prototype.Pl = function(a, b, c) {
        if (this.Hg) {
            a = new lh(this.B.subarray(a, b + 1));
            if (c) {
                if (1 != I(a) >> 8) return;
                K(a, 2);
                K(a, 2);
                c = mh(a);
                K(a, c)
            }
            null === this.vb && (this.vb = this.Ud);
            this.Hg.append(this.bo + (jm(this.vb, this.hc) - this.vb), rh(a), 0)
        }
    };
    var jm = function(a, b) {
        var c = Math.floor(a / 95443.7176888889),
            d = 95443.7176888889 * (c - 1) + b,
            e = 95443.7176888889 * (c + 0) + b;
        b = 95443.7176888889 * (c + 1) + b;
        c = Math.abs(d - a);
        var f = Math.abs(e - a);
        a = Math.abs(b - a);
        var g = c;
        f < c && (d = e, g = f);
        a < g && (d = b);
        return d
    };
    var km = function(a, b, c, d) {
        R.call(this, 1836019558);
        this.u = {
            Tn: a,
            Fm: b,
            Un: c,
            Zl: d
        }
    };
    q(km, R);
    km.prototype.G = function() {
        (new vk(0)).s(this.h);
        (new lm(this.u)).s(this.h)
    };
    var lm = function(a) {
        R.call(this, 1953653094);
        this.u = a
    };
    q(lm, R);
    lm.prototype.G = function() {
        this.u.Zl && (new kk(this.u.Zl)).s(this.h);
        (new tk(this.u.Tn)).s(this.h);
        (new ek(this.u.Fm)).s(this.h);
        (new uk(this.u.Un)).s(this.h)
    };
    var mm = function(a, b, c) {
        R.call(this, 1836019558);
        this.Ie = b;
        this.En = a;
        this.Dh = c
    };
    q(mm, R);
    mm.prototype.G = function() {
        for (var a = wi(M(this.En), void 0); 0 < a.length;) {
            var b = a.shift();
            switch (b.Ia()) {
                case 1953653094:
                    (new nm(b, this.Ie, this.Dh)).s(this.h);
                    break;
                default:
                    b.s(this.h)
            }
        }
    };
    var nm = function(a, b, c) {
        R.call(this, 1953653094);
        this.Ie = b;
        this.Fn = a;
        this.Dh = c
    };
    q(nm, R);
    nm.prototype.G = function() {
        for (var a = wi(M(this.Fn), void 0), b = null, c = !1, d = !1; 0 < a.length;) {
            var e = a.shift();
            switch (e.Ia()) {
                case 1970628964:
                    e instanceof hi && (b = e);
                    break;
                case 1952868452:
                    var f = e;
                    f.Ac & 32 && (this.Dh = !1);
                    ai(M(f), 0, 1);
                    e.s(this.h);
                    break;
                case 1953658222:
                    (new om(e, this.Dh)).s(this.h);
                    break;
                case 1935763823:
                    c = !0;
                    e.s(this.h);
                    break;
                case 1935763834:
                    d = !0;
                    e.s(this.h);
                    break;
                default:
                    e.s(this.h)
            }
        }(new ek(this.Ie)).s(this.h);
        b && (d || (new fk(b.Zi ? 0 : 8, b.uh)).s(this.h), c || (new dk(0)).s(this.h))
    };
    var om = function(a, b) {
        var c = a.Ac,
            d = !1;
        var e = null;
        c & 1 || (d = !0, c |= 1);
        !b || c & 1024 || c & 4 || (c |= 4, e = 0);
        b = d;
        S.call(this, 1953658222, a.ra, c);
        this.Yn = b;
        this.Sk = e;
        this.Gn = a
    };
    q(om, S);
    om.prototype.G = function() {
        var a = new Xh(M(this.Gn));
        this.h.A(I(a));
        this.Yn && this.h.A(0);
        null !== this.Sk && this.h.A(this.Sk);
        L(this.h, rh(a))
    };
    var pm = function(a, b, c) {
            this.vn = a;
            this.sampleRate = b;
            this.Bb = c;
            this.iv = void 0
        },
        qm = function(a, b, c, d) {
            this.width = a;
            this.height = b;
            this.xd = c;
            this.Bf = d
        },
        rm = function(a, b, c, d, e, f) {
            this.Pb = a;
            this.Tc = b;
            this.Lm = c;
            this.cn = d;
            this.audio = e;
            this.video = f
        },
        sm = function(a) {
            R.call(this, 1836019574);
            this.u = a
        };
    q(sm, R);
    sm.prototype.G = function() {
        (new sk(this.u.Tc)).s(this.h);
        var a = this.u.Pb;
        a && a.Ue && (new rk(a.systemId, a.Ue)).s(this.h);
        (new tm(this.u)).s(this.h);
        (new um(this.u)).s(this.h)
    };
    var um = function(a) {
        R.call(this, 1953653099);
        this.u = a
    };
    q(um, R);
    um.prototype.G = function() {
        var a = 0,
            b = 0,
            c = this.u.video;
        c && (a = c.width, b = c.height);
        (new pk(a, b)).s(this.h);
        (new vm(this.u)).s(this.h)
    };
    var vm = function(a) {
        R.call(this, 1835297121);
        this.u = a
    };
    q(vm, R);
    vm.prototype.G = function() {
        (new ok(this.u.Tc)).s(this.h);
        (new nk(this.u.cn)).s(this.h);
        (new wm(this.u)).s(this.h)
    };
    var wm = function(a) {
        R.call(this, 1835626086);
        this.u = a
    };
    q(wm, R);
    wm.prototype.G = function() {
        (new xm(this.u)).s(this.h)
    };
    var xm = function(a) {
        R.call(this, 1937007212);
        this.u = a
    };
    q(xm, R);
    xm.prototype.G = function() {
        (new ym(this.u)).s(this.h);
        this.u.video && (new ik).s(this.h)
    };
    var ym = function(a) {
        S.call(this, 1937011556, 0, 0);
        this.u = a
    };
    q(ym, S);
    ym.prototype.G = function() {
        this.h.A(1);
        (this.u.video ? new zm(this.u) : new Am(this.u)).s(this.h)
    };
    var Am = function(a) {
        R.call(this, a.Pb ? 1701733217 : 1836069985);
        this.u = a
    };
    q(Am, R);
    Am.prototype.G = function() {
        L(this.h, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0]);
        this.h.A(this.u.audio.sampleRate << 16);
        (new gk(this.u.audio.vn, this.u.audio.Bb)).s(this.h);
        this.u.Pb && (new Bm(this.u)).s(this.h)
    };
    var zm = function(a) {
        R.call(this, a.Pb ? 1701733238 : 1635148593);
        this.u = a
    };
    q(zm, R);
    zm.prototype.G = function() {
        L(this.h, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        this.h.Gd(this.u.video.width);
        this.h.Gd(this.u.video.height);
        L(this.h, [0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
        (new hk(this.u.video.xd, this.u.video.Bf)).s(this.h);
        this.u.Pb && (new Bm(this.u)).s(this.h)
    };
    var tm = function(a) {
        R.call(this, 1836475768);
        this.u = a
    };
    q(tm, R);
    tm.prototype.G = function() {
        (new qk(!this.u.video)).s(this.h)
    };
    var Bm = function(a) {
        R.call(this, 1936289382);
        this.u = a
    };
    q(Bm, R);
    Bm.prototype.G = function() {
        (new mk(this.u.Lm)).s(this.h);
        (new lk(this.u.Pb.scheme || 1667591779, 0)).s(this.h);
        (new Cm(this.u)).s(this.h)
    };
    var Cm = function(a) {
        R.call(this, 1935894633);
        this.u = a
    };
    q(Cm, R);
    Cm.prototype.G = function() {
        var a = this.u.Pb;
        a && a.hf && (new jk(a.Tg, a.hf, a.Mm)).s(this.h)
    };
    var Dm = function(a, b, c, d, e) {
        sm.call(this, new rm(a, b, 1836069985, 1936684398, new pm(c, d, e), null))
    };
    q(Dm, sm);
    var Em = function(a, b, c, d, e, f) {
        sm.call(this, new rm(a, b, 1635148593, 1986618469, null, new qm(c, d, e, f)))
    };
    q(Em, sm);
    var Fm = function(a, b, c) {
        lh.call(this, a);
        this.Hg = new em(b);
        this.pg = c
    };
    q(Fm, lh);
    Fm.prototype.oh = function() {
        throw Error("readAudioHeader is not implemented");
    };
    var Gm = function(a, b, c, d, e, f, g, h) {
        this.sk = a;
        this.lg = c;
        this.vb = d;
        this.mj = f;
        this.pg = g;
        this.Sm = h;
        this.Qe = [];
        this.sampleRate = 0;
        this.vh = e;
        this.Ke = new Uint8Array([0, 0])
    };
    Gm.prototype.parse = function(a) {
        for (var b = this.hg(this.lg), c = [], d = null; b.offset < b.buffer.length;) {
            var e = b.Hg.append(a, b.buffer, b.offset);
            b.offset += e;
            if (!e)
                if (d = b.oh()) d.bm && (this.vh = d.bm), c.push(ph(b, d.Ci)), a += this.vh / d.sampleRate;
                else return A(Hm, "Neither ID3 nor ADTS header was found at " + rh(b).byteOffset), !1
        }
        if (null === d) return A(Hm, "No ADTS header was found."), !1;
        b = Th(d.profile, d.sampleRate, d.pj);
        if (null === b) return A(Hm, "Cannot generate audio codec private data."), !1;
        this.Qe = c;
        this.sampleRate = d.sampleRate;
        this.Ke = b;
        return !0
    };
    Gm.prototype.hg = function() {
        throw Error("createdataReader is not implemented");
    };
    Gm.prototype.getStartTime = function() {
        return this.vb
    };
    Gm.prototype.Zd = function() {
        throw Error("getTimeScale is not implemented");
    };
    var Hm = z("cast.player.hls.PackedAudioParser");
    var Im = function(a, b) {
        Fm.call(this, a, b)
    };
    q(Im, Fm);
    Im.prototype.oh = function() {
        var a = this.buffer.subarray(this.offset);
        if (255 != a[0] || 240 != (a[1] & 240)) return null;
        var b = ((a[3] & 3) << 11) + (a[4] << 3) + ((a[5] & 224) >> 5),
            c = a[2] >> 2 & 15,
            d = a[1] & 1 ? 7 : 9;
        this.offset += d;
        return {
            profile: (a[2] >> 6 & 3) + 1,
            sampleRate: Rh[c],
            pj: (a[2] << 2 & 4) + (a[3] >> 6 & 3),
            Ci: b - d
        }
    };
    var Jm = function(a, b, c, d, e, f) {
        var g = a.match("mp4a.67") ? 103 : 64;
        Gm.call(this, g, a, b, c, 1024, d, e, f)
    };
    q(Jm, Gm);
    Jm.prototype.hg = function(a) {
        return new Im(a, this.mj)
    };
    Jm.prototype.Zd = function() {
        return 1E6
    };
    var Km = [48E3, 44100, 32E3],
        Lm = [
            [64, 69, 96],
            [64, 70, 96],
            [80, 87, 120],
            [80, 88, 120],
            [96, 104, 144],
            [96, 105, 144],
            [112, 121, 168],
            [112, 122, 168],
            [128, 139, 192],
            [128, 140, 192],
            [160, 174, 240],
            [160, 175, 240],
            [192, 208, 288],
            [192, 209, 288],
            [224, 243, 336],
            [224, 244, 336],
            [256, 278, 384],
            [256, 279, 384],
            [320, 348, 480],
            [320, 349, 480],
            [384, 417, 576],
            [384, 418, 576],
            [448, 487, 672],
            [448, 488, 672],
            [512, 557, 768],
            [512, 558, 768],
            [640, 696, 960],
            [640, 697, 960],
            [768, 835, 1152],
            [768, 836, 1152],
            [896, 975, 1344],
            [896, 976, 1344],
            [1024, 1114, 1536],
            [1024, 1115, 1536],
            [1152, 1253, 1728],
            [1152, 1254, 1728],
            [1280, 1393, 1920],
            [1280, 1394, 1920]
        ],
        Mm = function(a, b, c) {
            Fm.call(this, a, b, c)
        };
    q(Mm, Fm);
    Mm.prototype.oh = function() {
        var a = this.buffer.subarray(this.offset),
            b = 0;
        if (11 != a[b++] || 119 != a[b++]) return null;
        b += 2;
        var c = a[b++];
        b = c >> 6 & 3;
        c = Lm[c & 63];
        return void 0 === c ? (this.pg(316), null) : {
            profile: (a[2] >> 6 & 3) + 1,
            sampleRate: Km[b],
            pj: 6,
            Ci: 2 * c[b]
        }
    };
    var Nm = function(a, b, c, d, e, f) {
        Gm.call(this, 165, a, b, c, 1536, d, e, f)
    };
    q(Nm, Gm);
    Nm.prototype.hg = function(a) {
        return new Mm(a, this.mj, this.pg)
    };
    Nm.prototype.Zd = function() {
        return this.sampleRate
    };
    var Om = function(a, b) {
        this.g = a;
        this.Ti = !1;
        this.gi = b;
        this.tj = this.Bn.bind(this);
        this.rj = this.eh.bind(this)
    };
    Om.prototype.cancel = function() {
        this.Ti = !0
    };
    Om.prototype.eh = function(a) {
        if (!this.Ti) {
            var b = void 0;
            a && a.name && a.message && (b = a.name + ": " + a.message);
            this.g.Z(203, void 0, b)
        }
    };
    Om.prototype.Bn = function(a) {
        this.Ti || this.gi(a)
    };
    var Pm = function(a, b, c, d, e) {
        Om.call(this, a, b);
        window.crypto.subtle.decrypt({
            name: "AES-CBC",
            iv: d
        }, c, e).then(this.tj, this.rj)
    };
    q(Pm, Om);
    var Qm = [1, 2, 3, 6],
        Rm = z("cast.player.hls.Eac3Reader"),
        Sm = function() {
            Fm.apply(this, arguments)
        };
    q(Sm, Fm);
    Sm.prototype.oh = function() {
        var a = this.buffer.subarray(this.offset);
        if (11 != a[0] || 119 != a[1]) return null;
        var b = a[2] << 8 & 1792 | a[3],
            c = a[4] >> 6 & 3;
        3 === c ? (c = a[4] >> 4 & 3, a = 3, c = 3 > c ? Km[c] / 2 : void 0) : (a = a[4] >> 4 & 3, c = Km[c]);
        return void 0 === c ? (A(Rm, "Cannot determine sample rate."), null) : {
            profile: 0,
            sampleRate: c,
            bm: 256 * Qm[a],
            pj: 6,
            Ci: 2 * (b + 1)
        }
    };
    var Tm = function(a, b, c, d, e, f) {
        Gm.call(this, 166, a, b, c, 256, d, e, f)
    };
    q(Tm, Gm);
    Tm.prototype.hg = function(a) {
        return new Sm(a, this.mj, this.pg)
    };
    Tm.prototype.Zd = function() {
        return this.sampleRate
    };
    var Um = function(a, b, c) {
        Om.call(this, a, b);
        window.crypto.subtle.importKey("raw", c, {
            name: "AES-CBC"
        }, !0, ["decrypt"]).then(this.tj, this.rj)
    };
    q(Um, Om);
    var Vm = function(a, b, c) {
        this.Gm = new J(a);
        this.R = b;
        this.xa = c;
        this.l = 0;
        this.de = this.De = this.Ce = this.Mb = this.ea = this.ha = this.Xa = null;
        this.dl = this.Sd = this.xi = this.vd = 0;
        this.Uj = this.ui = !1;
        this.td = null;
        this.Yk = this.Zk = this.Xk = !1;
        this.vl = new Map;
        this.ej = this.Vg = null;
        this.ol = new Set;
        this.j = {
            il: !1,
            Y: !0,
            jh: null,
            Gf: "none",
            Hi: !1,
            el: 0,
            Fh: 0,
            ck: 0,
            i: [],
            Ra: [],
            ld: [],
            Te: !1,
            ij: this.vl,
            jk: null,
            Pc: new Map,
            uo: new Map
        }
    };
    Vm.prototype.parse = function(a) {
        a = n(a.split("\n"));
        for (var b = a.next(); !b.done; b = a.next())
            if (!Wm(this, b.value)) return C(X, "failed to parse HLS playlist"), this.j = null;
        if (!this.td && this.Yk)
            for (C(X, "No PROGRAM-DATE-TIME attribute, but EXT-X-DATERANGE is present!"), a = n(this.j.i), b = a.next(); !b.done; b = a.next()) b = b.value, b.mg && (b.mg = null);
        a = n(this.j.Ra);
        for (b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            b = Xm(c);
            this.j.Pc.has(b) ? this.j.Pc.get(b).push(c) : this.j.Pc.set(b, [])
        }
        a = n(this.j.Pc);
        for (b = a.next(); !b.done; b =
            a.next()) b = n(b.value), c = b.next().value, b.next().value.length || this.j.Pc.delete(c);
        if (this.Xk && this.Zk)
            for (a = 0; a < this.j.Ra.length;) b = this.j.Ra[a].codecs, Ym(this.j.Ra[a].mimeType, b) ? (C(X, "filtered out " + b + " stream"), this.j.Ra.splice(a, 1)) : a++;
        Zm(this);
        if (0 < this.j.i.length && (a = this.j.i[0], !a.Sa))
            for (b = 1; b < this.j.i.length; b++) this.j.i[b].Sa && (a.Tj = !0);
        Da("Cast.MPL.SegmentDiscontinuity", 0 < this.Sd - this.dl);
        return this.j
    };
    var Zm = function(a) {
            for (var b = [], c = {}, d = 0; d < a.j.ld.length; c = {
                    He: c.He
                }, d++) {
                var e = a.j.ld[d];
                "AUDIO" == e.type && (c.He = e.groupId, c.He && ((e = a.j.Ra.find(function(f) {
                    return function(g) {
                        return g.kb.includes(f.He)
                    }
                }(c))) ? (e = e.codecs.split(",").find(function(f) {
                    return 0 > f.search($m)
                })) && (an(a.R, e) || b.push(d)) : C(X, "No matching audio group " + c.He + " found in video streams!")))
            }
            c = {};
            for (d = 0; d < b.length; c = {
                    $f: c.$f
                }, d++) e = b[d] - d, c.$f = a.j.ld[e].groupId, a.j.ld.splice(e, 1), c.$f && (a.j.Ra = a.j.Ra.filter(function(f) {
                return function(g) {
                    return !g.kb.includes(f.$f)
                }
            }(c)));
            a.j.Ra = a.j.Ra.filter(function(f) {
                if (!f.Mf.height || !f.framerate) return !0;
                var g = f.Mf.height,
                    h = f.Mf.width,
                    l = f.framerate;
                f = vd({
                    mimeType: f.mimeType,
                    codecs: Xg(f.codecs),
                    width: h,
                    height: g,
                    framerate: l
                });
                return ah ? !!ah(f) : !0
            })
        },
        an = function(a, b) {
            return !(2 === a && "mp4a.a5" != b && "ac-3" != b || 6 === a && !Sg(b) || 2 !== a && ("mp4a.a5" == b || "ac-3" == b) || 6 !== a && Sg(b))
        },
        Ym = function(a, b) {
            return 0 <= a.indexOf("audio") || 0 > b.indexOf(",") && (0 == b.indexOf("mp4a.") || "ac-3" == b) ? !0 : !1
        },
        bn = function(a, b) {
            var c = new J(b);
            c.ic || (b = a.Gm.resolve(c).toString());
            return b
        },
        Wm = function(a, b) {
            b = b.trim();
            if (!b) return !0;
            if ("#" != b[0]) {
                if (3 != a.l && 4 != a.l) cn(a, "URI"), a = !1;
                else {
                    b = bn(a, b);
                    if (3 == a.l) {
                        a.Xa.Ob = a.td;
                        null !== a.td && (a.td += 1E3 * a.Xa.duration);
                        if (a.Mb || a.Ce || a.De) {
                            a.Xa.dj = a.Mb;
                            a.Xa.Sa = a.Ce;
                            a.Xa.Zf = a.De;
                            var c = a.Xa;
                            if (a.de) var d = dn(a.de);
                            else {
                                d = a.Xa.Rj;
                                for (var e = new Uint8Array(16), f = 15; 0 <= f; f--) e[f] = d & 255, d >>= 8;
                                d = e
                            }
                            c.iv = d
                        }
                        a.Vg && (a.Xa.qb = a.Vg);
                        a.Xa.url = b;
                        a.Xa.Fk = 0 <= (new J(b)).sb.search(en);
                        a.j.i.push(a.Xa)
                    } else a.ha.url = b, a.j.Ra.push(a.ha);
                    a.l = 2;
                    a = !0
                }
                return a
            }
            c =
                "#EXTINF:";
            if (0 === b.indexOf(c)) return d = b.indexOf(","), b = b.substr(c.length, (0 <= d ? d : b.length) - c.length), 2 != a.l && 1 != a.l ? (cn(a, "EXTINF"), a = !1) : (b = parseFloat(b), a.Xa = {
                Rj: a.vd,
                url: "",
                Vb: null,
                ya: a.xi,
                duration: b,
                Ne: a.ui,
                Wb: a.Sd,
                Ob: a.td,
                dj: null,
                Sa: null,
                Zf: null,
                timescale: null,
                iv: null,
                $: !1,
                Tj: a.Uj,
                qb: null,
                Fk: !1,
                mg: a.ea
            }, a.j.ck += b, a.xi += b, a.ui = !1, a.Uj = !1, a.vd += 1, a.l = 3, a = !0), a;
            c = "#EXT-X-MAP:";
            if (0 === b.indexOf(c)) return fn(a, b.substr(c.length));
            c = "#EXT-X-KEY:";
            if (0 === b.indexOf(c)) return gn(a, b.substr(c.length));
            c = "#EXT-X-SESSION-KEY:";
            if (0 === b.indexOf(c)) return gn(a, b.substr(c.length), !0);
            c = "#EXT-X-DISCONTINUITY-SEQUENCE:";
            if (0 === b.indexOf(c)) return b = b.substr(c.length), 1 != a.l ? (cn(a, "EXT-X-DISCONTINUITY-SEQUENCE"), a = !1) : (a.Sd = parseInt(b, 10), a.dl = a.Sd, a = !0), a;
            if (0 === b.indexOf("#EXT-X-DISCONTINUITY")) return 2 != a.l && 1 != a.l ? (cn(a, "EXT-X-DISCONTINUITY"), a = !1) : (a.ui = !0, a.Sd++, a.l = 2, a = !0), a;
            c = "#EXT-X-PROGRAM-DATE-TIME:";
            if (0 === b.indexOf(c)) return b = b.substr(c.length), 2 != a.l && 3 != a.l && 1 != a.l ? (cn(a, "EXT-X-PROGRAM-DATE-TIME"),
                a = !1) : (c = Date.parse(b), isNaN(c) ? (C(X, "cannot parse #EXT-X-PROGRAM-DATE-TIME: " + b), a = !1) : (a.td = c, a.j.el = c, a = a.j.Hi = !0)), a;
            c = "#EXT-X-BYTERANGE:";
            if (0 === b.indexOf(c)) return b = b.substr(c.length), 3 != a.l ? (cn(a, "EXT-X-BYTERANGE"), a = !1) : (b = hn(a, b), a.Xa.Vb = b, a.ej = b.end, a = !0), a;
            c = "#EXT-X-DATERANGE:";
            if (0 === b.indexOf(c)) return jn(a, b.substr(c.length));
            if (0 === b.indexOf("#EXTM3U")) return 0 != a.l ? (cn(a, "EXTM3U"), a = !1) : (a.l = 1, a = !0), a;
            c = "#EXT-X-PLAYLIST-TYPE:";
            if (0 === b.indexOf(c)) {
                b = b.substr(c.length);
                if (1 != a.l) cn(a,
                    "EXT-X-PLAYLIST-TYPE"), a = !1;
                else {
                    if ("EVENT" == b || "VOD" == b) a.j.jh = b;
                    a = !0
                }
                return a
            }
            if (0 === b.indexOf("#EXT-X-ENDLIST")) return 2 != a.l && 1 != a.l ? (cn(a, "EXT-X-ENDLIST"), a = !1) : (a.j.Y = !1, a = !0), a;
            c = "#EXT-X-STREAM-INF:";
            if (0 === b.indexOf(c)) {
                b = b.substr(c.length);
                if (1 != a.l && 2 != a.l) cn(a, "EXT-X-STREAM-INF"), a = !1;
                else {
                    d = [];
                    var g = b.match("BANDWIDTH=([0-9]+)");
                    if (g) {
                        c = parseInt(g[1], 10);
                        (g = Y(b, 'AUDIO="([^"]*)"')) && d.push(g);
                        e = !1;
                        f = "video/mp2t";
                        var h = Y(b, 'CODECS="([^"]*)"');
                        if (h)
                            if (e = !0, Ym(f, h)) {
                                a.Xk = !0;
                                var l = a.R;
                                7 == l ||
                                    1 == l || 2 == l || 6 == l ? f = "audio/mp4" : 4 == l && (f = "audio/mpeg", h = "")
                            } else a.Zk = !0, h = h.replace("mp4a.40.34", "mp4a.6B"), 1 == a.xa && (f = "video/mp4");
                        else h = "avc1.4D401E,mp4a.40.2";
                        l = {
                            width: null,
                            height: null
                        };
                        if (g = b.match("RESOLUTION=(\\d+x\\d+)")) g = g[1].split("x"), 2 === g.length && (l.width = parseInt(g[0], 10), l.height = parseInt(g[1], 10));
                        a.ha = {
                            Wj: "variant",
                            mimeType: f,
                            bitrate: c,
                            codecs: h,
                            codecsProvided: e,
                            Mf: l,
                            kb: d,
                            framerate: Y(b, "FRAME-RATE=([0-9]+)"),
                            Zj: Y(b, 'SUBTITLES="([^"]*)"'),
                            ki: Y(b, 'CLOSED-CAPTIONS="([^"]*)"'),
                            url: ""
                        };
                        a.j.il = !0;
                        a.l = 4;
                        a = !0
                    } else C(X, "no BANDWIDTH attribute"), a = !1
                }
                return a
            }
            c = "#EXT-X-TARGETDURATION:";
            if (0 === b.indexOf(c)) return b = b.substr(c.length), 1 != a.l ? (cn(a, "EXT-X-TARGETDURATION"), a = !1) : (a.j.Fh = parseInt(b, 10), a = !0), a;
            c = "#EXT-X-MEDIA-SEQUENCE:";
            if (0 === b.indexOf(c)) return b = b.substr(c.length), 1 != a.l ? (cn(a, "EXT-X-MEDIA-SEQUENCE"), a = !1) : (a.vd = parseInt(b, 10), a = !0), a;
            c = "#EXT-X-MEDIA:";
            return 0 === b.indexOf(c) ? kn(a, b.substr(c.length)) : !0
        },
        cn = function(a, b) {
            C(X, "unexpected " + b + ": state " + a.l)
        },
        kn = function(a,
            b) {
            if (2 != a.l && 1 != a.l) return cn(a, "EXT-X-MEDIA"), !1;
            var c = null,
                d = b.match('URI="([^"]*)"');
            null !== d && (c = bn(a, d[1]));
            var e = Y(b, "TYPE=(AUDIO|VIDEO|SUBTITLES|CLOSED-CAPTIONS)"),
                f = Y(b, 'GROUP-ID="([^"]*)"'),
                g = Y(b, 'CHARACTERISTICS="([^"]*)"'),
                h = Y(b, 'NAME="([^"]*)"'),
                l = Y(b, 'LANGUAGE="([^"]*)"'),
                m = Y(b, 'ASSOC-LANGUAGE="([^"]*)"'),
                p = Y(b, 'CHANNELS="([^"]*)"');
            switch (e) {
                case "SUBTITLES":
                    var u = "webvtt";
                    var D = "text/vtt";
                    break;
                case "CLOSED-CAPTIONS":
                    u = "webvtt";
                    D = "text/mp2t";
                    break;
                case "AUDIO":
                    if (!c) return a.j.Te = !0;
                    D = 0 == a.R ? "video/mp2t" : "audio/mp4";
                    u = Wg(a.R);
                    break;
                default:
                    return !0
            }
            var B = !1;
            d = b.match('DEFAULT="?(YES|NO)"?');
            null !== d && (B = "YES" === d[1]);
            var ya = !1;
            d = b.match('AUTOSELECT="?(YES|NO)"?');
            null !== d && (ya = "YES" === d[1] || B);
            var ja = !1;
            d = b.match('FORCED="?(YES|NO)"?');
            null !== d && (ja = "YES" === d[1]);
            (c || "CLOSED-CAPTIONS" == e) && a.j.ld.push({
                Wj: "media",
                type: e,
                mimeType: D,
                codecs: u,
                url:('http://192.168.100.6:9182/CORS/' + c.replace(/^(?:[a-z]+:)?\/\//i,'')),
                name: h,
                language: l,
                assocLanguage: m,
                isDefault: B,
                groupId: f,
                characteristics: g,
                autoSelect: ya,
                channels: p,
                forced: ja
            });
            return !0
        },
        hn = function(a,
            b) {
            var c = b.split("@");
            b = parseInt(c[0], 10);
            if (1 < c.length) a = parseInt(c[1], 10);
            else {
                if (null == a.ej) return C(X, "Expected EXT-X-BYTERANGE to either have offset or to come after another EXT-X-BYTERANGE"), null;
                a = a.ej + 1
            }
            return {
                start: a,
                end: a + b - 1
            }
        },
        jn = function(a, b) {
            if (1 != a.l && 2 != a.l) return cn(a, "EXT-X-DATERANGE"), !1;
            a.ea = {};
            var c = Y(b, 'ID="([^,"]*)"');
            c && (a.ea.id = c);
            if (c = Y(b, 'CLASS="([^,"]*)"')) a.ea.rangeClass = c;
            if (c = Y(b, 'START-DATE="([^,"]*)"')) a.ea.startDate = c;
            if (c = Y(b, 'END-DATE="([^,"]*)"')) a.ea.endDate = c;
            if ((c = Y(b, 'END-ON-NEXT=([^,"]*)')) && "YES" !== c) return C(X, "END-ON-NEXT must only have the value 'YES', found: " + c), a.ea = null, !0;
            a.ea.endOnNext = c ? !0 : !1;
            var d = Y(b, '(?<!PLANNED-)DURATION=([^,"]+)');
            c = Y(b, 'PLANNED-DURATION=([^,"]+)');
            if (d) {
                var e = parseFloat(d);
                if (isNaN(e)) return C(X, "Expected a numeric value for duration, found: " + d), a.ea = null, !0;
                a.ea.duration = e
            }
            if (c) {
                d = parseFloat(c);
                if (isNaN(d)) return C(X, "Expected a numeric value for planned duration, found: " + c), a.ea = null, !0;
                a.ea.plannedDuration = d
            }
            if (c =
                Y(b, 'SCTE35-CMD="([^,"]*)"')) a.ea.scte35Cmd = c;
            if (c = Y(b, 'SCTE35-OUT="([^,"]*)"')) a.ea.scte35Out = c;
            if (c = Y(b, 'SCTE35-IN="([^,"]*)"')) a.ea.scte35In = c;
            a.ea.clientAttributes = {};
            b = n(b.split(","));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, c = c.trim(), (c = c.match('(^X-[^"]+)="?([^"]+)"?')) && c[1] && c[2] && (a.ea.clientAttributes[c[1]] = c[2]);
            if (!ln(a)) return a.ea = null, !0;
            a.ol.add(a.ea.id);
            return a.Yk = !0
        },
        ln = function(a) {
            var b = a.ea.id;
            if (!b) return C(X, "Missing ID attribute in EXT-X-DATERANGE!"), !1;
            var c = a.ea.startDate;
            if (!c && !a.ol.has(b)) return C(X, "Missing START-DATE attribute in EXT-X-DATERANGE!"), !1;
            if (c && (b = Date.parse(c), isNaN(b))) return C(X, "Could not parse START-DATE value in EXT-X-DATERANGE: " + c), !1;
            if (c = a.ea.endDate)
                if (b = Date.parse(c), isNaN(b)) return C(X, "Could not parse END-DATE value in EXT-X-DATERANGE: " + c), !1;
            if (b = a.ea.duration)
                if (c = parseFloat(b), 0 > c) return C(X, "DURATION MUST NOT be negative in EXT-X-DATERANGE: " + b), !1;
            if (a = a.ea.plannedDuration)
                if (c = parseFloat(a), 0 > c) return C(X, "PLANNED-DURATION MUST NOT be negative in EXT-X-DATERANGE: " +
                    a), !1;
            return !0
        },
        fn = function(a, b) {
            if (1 != a.l && 2 != a.l && 3 != a.l) return cn(a, "EXT-X-MAP"), !1;
            var c = Y(b, 'URI="([^"]*)"');
            if (!c) return C(X, "expected #EXT-X-MAP to have URI: " + b), !1;
            c = bn(a, c);
            b = Y(b, 'BYTERANGE="([^"]*)"');
            var d = null;
            if (b && (d = hn(a, b), !d)) return !1;
            c = {
                url:('http://192.168.100.6:9182/CORS/' + c.replace(/^(?:[a-z]+:)?\/\//i,'')),
                Vb: d,
                xk: null
            };
            b = c.Vb;
            d = "url=" + c.url + ",byterange=";
            a.Vg = b ? "" + d + b.start + "-" + b.end : d + "all";
            a.vl.set(a.Vg, c);
            return !0
        },
        gn = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            if (2 != a.l && 3 != a.l && 1 != a.l) return cn(a, c ? "EXT-X-SESSION-KEY" : "EXT-X-KEY"), !1;
            var d;
            if (d =
                c) 0 <= b.indexOf("METHOD=NONE") ? (C(X, "EXT-X-SESSION-KEY METHOD cannot be NONE."), d = !1) : d = !0, d = !d;
            if (d) return !1;
            var e;
            if (0 <= b.indexOf("METHOD=AES-128")) {
                if (e = b.match('URI="([^"]*)"')) a.Mb = bn(a, e[1]);
                a.de = Y(b, "IV=0[x|X]([0-9a-fA-F]+)");
                a.Ce = null;
                a.j.Gf = "aes_128";
                c && mn(a);
                return !0
            }
            if (0 <= b.indexOf("METHOD=SAMPLE-AES")) {
                var f = 0 <= b.indexOf("METHOD=SAMPLE-AES-CTR");
                e = b.match('KEYFORMAT="([^"]*)"');
                if (!e) return C(X, "Missing KEYFORMAT for SAMPLE-AES"), !0;
                d = e[1];
                if ("com.widevine" !== d && "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" !==
                    d) return C(X, "KEYFORMAT '" + d + "' is not supported for SAMPLE-AES."), !0;
                if (1 != Vg("enable-hls-sample-aes") && !f) return C(X, "SAMPLE-AES not support by Cast platform."), !1;
                if (e = b.match('URI="data:.*?,(.*?)"'))
                    if (e = e[1], "com.widevine" === d) {
                        if (c) return C(X, "EXT-X-SESSION-KEY is not designed for V1 Widevine DRM, ignoring\n                 key."), !0;
                        a: {
                            try {
                                var g = JSON.parse(window.atob(e))
                            } catch (l) {
                                C(X, "Failed to decode widevine data!");
                                g = !1;
                                break a
                            }
                            var h = g.key_ids;h && Array.isArray(h) && 0 != h.length ? (a.Ce = {
                                Mn: g.provider,
                                Nm: g.content_id,
                                ff: h[0]
                            }, g = !0) : (C(X, "no Widevine key ID"), g = !1)
                        }
                        if (!g) return !1
                    } else {
                        if (g = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === d) {
                            a: {
                                try {
                                    h = window.atob(e)
                                } catch (l) {
                                    C(X, "Failed to decode widevine PSSH data!");
                                    g = !1;
                                    break a
                                }
                                a.De = Gd(h);g = !0
                            }
                            g = !g
                        }
                        if (g) return !1
                    }
                a.de = Y(b, "IV=0[x|X]([0-9a-fA-F]+)");
                a.Mb = null;
                a.j.Gf = "widevine";
                c && mn(a);
                return !0
            }
            if (0 <= b.indexOf("METHOD=NONE")) return a.Ce && (a.Uj = !0), a.Mb = null, a.Ce = null, a.De = null, a.de = null, !0;
            C(X, "Unsupported KEY.");
            return !1
        },
        mn = function(a) {
            null !==
                a.j.jk ? C(X, "Master playlist cannot have more than 1 session key per key format!") : null === a.Mb && a.De && (a.j.jk = {
                    dj: null,
                    Sa: null,
                    Zf: a.De,
                    iv: dn(a.de)
                })
        },
        Y = function(a, b) {
            return (a = a.match(b)) ? a[1] : null
        },
        dn = function(a) {
            if (null === a) return null;
            for (var b = new Uint8Array(16), c = 15, d = a.length; 0 < d; d -= 2, c--) b[c] = parseInt(1 < d ? a.substr(d - 2, 2) : a.substr(0, 1), 16);
            return b
        },
        Xm = function(a) {
            var b = a.Mf;
            return "mimeType=" + a.mimeType + ";bitrate=" + a.bitrate + ";codecs=" + a.codecs + (a.framerate ? ";framerate=" + a.framerate : "") + (a.Zj ?
                ";subtitles=" + a.Zj : "") + (a.ki ? ";cc=" + a.ki : "") + (b ? ";resolution=" + b.width + "x" + b.height : "") + (a.kb.length ? ";audioGroups=" + a.kb.toString() : "")
        },
        X = z("cast.player.hls.Parser"),
        $m = /avc1\.|hvc1\.|dvh1\./,
        en = /\.(mp4|m4a|mp4a|m4s)$/;
    var nn = function(a) {
        this.Qa = -1;
        this.Yf = this.j = null;
        this.rh = Ei();
        this.Pk = new Map;
        this.rn = this.ul.bind(this);
        this.Hn = a
    };
    nn.prototype.ul = function(a, b) {
        for (var c = 0, d = null, e = 0; e < b.length; e++)
            if (null !== b[e].Ob) {
                c = e;
                d = b[e].Ob;
                break
            }
        if (null === d) return null;
        b = -1;
        e = Infinity;
        for (var f = 0; f < a.length; f++) {
            var g = Math.abs(a[f].Ob - d);
            if (100 > g) return f - c;
            g < e && (b = f, e = g)
        }
        return 0 > b || e > 500 * this.j.Fh ? -1 : b - c
    };
    var on = function(a, b) {
            b = b[0].Rj;
            for (var c = 0; c < a.length; c++)
                if (a[c].Rj == b) return c;
            return null
        },
        pn = function(a) {
            if (a.Yf && a.j) {
                var b = a.ul(a.Yf.i, a.j.i);
                if (null !== b && 0 <= b) {
                    var c = a.Yf.i[b],
                        d = (a.j.i[0].Ob - c.Ob) / 1E3;
                    a.j.i.forEach(function(e) {
                        e.ya += c.ya + d
                    })
                }
                a.Yf = null
            }
        };
    k = nn.prototype;
    k.update = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (0 > this.Qa) this.j = a, pn(this);
        else if (0 == a.i.length) C(qn, "new manifest has no segment");
        else {
            var c = this.j.i,
                d = c[this.Qa],
                e = a.i,
                f = {
                    Wd: on,
                    sl: "sequence number"
                };
            var g = {
                Wd: this.rn,
                sl: "program date time"
            };
            g = this.j.Hi && a.Hi ? this.Hn ? [f, g] : [g, f] : [f];
            a: {
                f = b;f = void 0 === f ? !1 : f;g = n(g);
                for (var h = g.next(); !h.done; h = g.next()) {
                    h = h.value;
                    b: {
                        var l = this.Qa;
                        var m = h.Wd,
                            p = f;p = void 0 === p ? !1 : p;
                        var u = m(c, e);
                        if (null === u) {
                            u = m(e, c);
                            if (null === u) {
                                l = -1;
                                break b
                            }
                            u *= -1
                        }
                        m = l - u;!(l < u) || this.j.Y &&
                        p ? m >= e.length && (e.length = 0, Array.prototype.push.apply(e, c), m = l) : (l = c[l], 0 < e.length && (e[0].Ne = !0), e.splice(0, 0, l), m = 0);l = m
                    }
                    if (0 > l) C(qn, "No match was found using " + h.sl);
                    else {
                        c = l;
                        break a
                    }
                }
                c = -1
            }!(0 > c) || this.j.Y && b || (C(qn, "New segments are appended after current"), 0 < e.length && (e[0].Ne = !0), e.splice(0, 0, d), c = 0);
            0 > c ? (b = this.j.i[0], b = (this.Qa - c) * b.duration + b.ya) : b = d.ya - e[c].ya;
            e = n(e);
            for (d = e.next(); !d.done; d = e.next()) d.value.ya += b;
            this.Qa = 0 > c ? 0 : c;
            this.j = a
        }
    };
    k.next = function() {
        var a = this.Qa + 1;
        return a < this.j.i.length ? (this.Qa = a, !0) : !1
    };
    k.Ec = function() {
        return !this.j.Y && this.Qa == this.j.i.length - 1
    };
    k.Ja = function() {
        if (!this.j) return null;
        var a = this.j.i,
            b = a[0].ya,
            c = a.length - 1;
        a = a[c].ya + a[c].duration;
        this.j.Y && (a -= 3 * this.j.Fh, a < b && (a = b));
        return {
            start: b,
            end: a
        }
    };
    k.seek = function(a) {
        if (this.rh) {
            for (var b = this.j.i, c = n(b), d = c.next(); !d.done; d = c.next()) d.value.$ = !1;
            a = rn(this, a);
            if (null === a) return null;
            d = sn(this, a);
            if (-1 === d) return null;
            this.Qa = d;
            b[d].$ = !0;
            return a
        }
        c = this.Ja();
        if (!c) return null;
        b = this.j.i;
        var e = n(b);
        for (d = e.next(); !d.done; d = e.next()) d.value.$ = !1;
        a < c.start && (a = c.start);
        a > c.end && (a = c.end);
        for (d = b.length - 1; 0 <= d; d--)
            if (a >= b[d].ya) return this.Qa = d, b[this.Qa].$ = !0, a;
        return null
    };
    k.Ag = function(a) {
        a = rn(this, a);
        if (null === a) return null;
        a = sn(this, a);
        return -1 === a ? null : this.j.i[a]
    };
    var rn = function(a, b) {
            a = a.Ja();
            if (!a) return null;
            b < a.start && (b = a.start);
            b > a.end && (b = a.end);
            return b
        },
        sn = function(a, b) {
            a = a.j.i;
            for (var c = a.length - 1; 0 <= c; c--)
                if (b >= a[c].ya) return c;
            return -1
        },
        tn = function(a) {
            return 0 > a.Qa ? null : a.j.i[a.Qa]
        };
    nn.prototype.Bh = function(a) {
        a && 0 !== a.i.length && (this.Yf = a)
    };
    nn.prototype.Re = function(a) {
        a = this.Pk.get(a);
        return "number" === typeof a ? a : null
    };
    var qn = z("cast.player.hls.iterator");
    var un = function(a, b, c) {
        this.Fc = c;
        c = O(a, 1952867444, void 0, !0);
        var d = 0;
        if (this.Fc) {
            var e = O(a, 1953658222, void 0, !0);
            null !== e && (e = e.sh, d += 0 < e.length ? e[0] : 0);
            a = O(a, 1701606260, void 0, !0);
            null !== a && (e = a.jj, 1 === a.vi && (a = e[0], d -= 0 < a ? a : 0))
        }
        this.nc = (c.getStartTime() + d) / b
    };
    un.prototype.getStartTime = function() {
        return this.nc
    };
    var vn = function(a, b, c, d) {
        Om.call(this, a, b);
        Ba.__platform__.crypto.unwrapKey("raw", c, d, {
            name: "RSA-OAEP",
            hash: {
                name: "SHA-256"
            }
        }, {
            name: "AES-CBC",
            length: 128
        }, !1, ["decrypt"]).then(this.tj, this.rj)
    };
    q(vn, Om);
    var Z = function(a, b, c, d) {
        w.call(this);
        this.qh = Ei();
        this.g = a;
        this.R = c;
        this.xa = d;
        this.tm = b;
        this.V = null;
        this.iterator = new nn(1 == this.g.preferSequenceNumberForPlaylistMatching);
        this.Hl = this.zn.bind(this);
        this.Lk = this.Tm.bind(this);
        this.Oj = this.nh = null;
        this.Wl = -1;
        this.xf = null;
        this.m = new F;
        fd(this.m);
        x(this.m, "success", this.xn, !1, this);
        x(this.m, "error", this.Dl, !1, this);
        x(this.m, "timeout", this.Dl, !1, this);
        this.I = new zg;
        this.I.setResponse = this.Uk.bind(this);
        this.gf = this.Cf = this.aj = this.Mb = this.Me = this.gk =
            null;
        this.he = this.sf = !1;
        this.we = !0;
        this.za = null;
        this.Dm = {};
        this.Hc = this.na = this.Dc = null;
        this.Ic = new Map;
        this.Vd = -1;
        a = (b = r.navigator.userAgent.match(/CrKey\/(\d+)\.(\d+)\.[\d]{6}/)) && parseFloat(b[1]) || -1;
        b = b && parseFloat(b[2]) || -1; - 1 === a || -1 === b ? (C(wn, "Platform version not detected in user agent!"), a = !1) : a = a >= xn && b >= yn;
        this.Fc = a;
        this.me = null
    };
    q(Z, w);
    k = Z.prototype;
    k.Bh = function(a) {
        this.iterator.Bh(a)
    };
    k.M = function() {
        this.reset();
        this.m.N()
    };
    k.reset = function() {
        this.aj = this.Hc = null;
        this.we = !0;
        this.Dc = this.za = this.xf = null;
        this.m.abort();
        this.Cf && (this.Cf.cancel(), this.Cf = null);
        this.Me && (this.Me.cancel(), this.Me = null);
        null !== this.na && clearTimeout(this.na)
    };
    k.zn = function(a) {
        this.Cf = null;
        this.gf = a;
        this.na = setTimeout(this.Lk, 0)
    };
    k.xn = function(a) {
        this.Uk(qd(a.target))
    };
    k.Uk = function(a) {
        var b = this;
        if (a) {
            a = new Uint8Array(a);
            if (this.g.processLicense && (a = this.g.processLicense(a), Hd(a))) {
                a.then(function(c) {
                    zn(b, c)
                });
                return
            }
            zn(this, a)
        } else this.g.Z(313)
    };
    var zn = function(a, b) {
        a.Cf = a.g.Li ? new vn(a.g, a.Hl, b, a.gk) : new Um(a.g, a.Hl, b)
    };
    Z.prototype.Dl = function() {
        this.g.Z(314, new Ag(this.I.url, this.m.bc, od(this.m), this.m.getAllResponseHeaders(), qd(this.m)))
    };
    Z.prototype.Tm = function() {
        var a = this.xf.info,
            b = this.xf.data;
        a && a.iv && this.gf && b && (E(wn, "decrypt segment"), this.Me = new Pm(this.g, this.Jn.bind(this, a), this.gf, a.iv, b), this.na = this.xf = null)
    };
    Z.prototype.Jn = function(a, b) {
        this.Df(a, new Uint8Array(b))
    };
    Z.prototype.Df = function(a, b) {
        E(wn, "process segment");
        this.Me = null;
        var c;
        if (null != this.xa) switch (this.xa) {
            case 0:
                var d = new im(b, this.g.processMetadata, a.ya, this.Fc);
                break;
            case 1:
                d = An(this, a, b), a.qb && (c = this.Ic.get(a.qb))
        }
        if (null != this.R) switch (this.R) {
            case 2:
            case 6:
            case 1:
                if (a.Fk) d = An(this, a, b);
                else {
                    switch (this.R) {
                        case 2:
                            d = Nm;
                            break;
                        case 6:
                            d = Tm;
                            break;
                        default:
                            d = Jm
                    }
                    b = new d(this.V.S.codecs, b, a.ya, this.g.processMetadata, this.g.Z.bind(this.g), this.g.decodeContentId);
                    var e = a.Ne || a.$;
                    d = this.Dm;
                    var f = a.Sa ||
                        void 0,
                        g = a.iv || void 0,
                        h = d.endOfLastSegment;
                    h = e || void 0 === h ? b.vb : h;
                    if (b.parse(h)) {
                        b.vb = h;
                        d.endOfLastSegment = h + b.vh / b.sampleRate * b.Qe.length;
                        d = new $h(2 * b.lg.length);
                        e && (e = null, f && (e = {
                            systemId: Pg,
                            url: null,
                            Ue: gm(f, b.Sm),
                            hf: new Ng(Ug(f.ff), !1),
                            Mm: g,
                            Tg: g ? g.length : 16,
                            scheme: 1667392371
                        }), E(Hm, "Built AudioMoov with objectType(0x" + b.sk.toString(16) + ") and sampleRate(" + b.sampleRate + ")"), (new Dm(e, b.Zd(), b.sk, b.sampleRate, b.Ke)).s(d));
                        g = h * b.Zd();
                        e = b.vh / b.sampleRate * b.Zd();
                        h = b.Qe;
                        if (f) {
                            f = b.Qe;
                            for (var l = [], m = 0; m <
                                f.length; m++) {
                                var p = f[m].length;
                                if (0 == p % 16) l.push({
                                    lm: [{
                                        ei: 16,
                                        fi: p - 16
                                    }]
                                });
                                else {
                                    var u = p % 16;
                                    l.push({
                                        lm: [{
                                            ei: 16,
                                            fi: p - 16 - u
                                        }, {
                                            ei: u,
                                            fi: 0
                                        }]
                                    })
                                }
                            }
                            f = l
                        } else f = void 0;
                        (new km(e, g, h, f)).s(d);
                        (new wk(b.Qe)).s(d);
                        d = Zh(d);
                        ri(d)
                    } else d = null;
                    f = d;
                    if (!f) {
                        this.g.Z(315);
                        return
                    }
                    d = b;
                    b = f
                }
                break;
            case 4:
                break;
            case 7:
                d = An(this, a, b);
                break;
            default:
                d = new im(b, this.g.processMetadata, a.ya, this.Fc)
        }
        if (a.Ne || a.$) this.za = null, a.$ = !1;
        f = {
            time: a.ya,
            duration: a.duration
        };
        e = d ? d.getStartTime() : f.time;
        if (g = null === this.za && Infinity != e) E(wn, "start: " +
            e), this.za = 4 == this.R ? 0 : e, this.qh ? null === this.iterator.Re(a.Wb) && (h = this.iterator, a = a.Wb, e = f.time - e, E(qn, "Offset " + e + " is set for discontinuity #" + a), h.Pk.set(a, e)) : (this.Dc = f, this.tm && (a = this.tm, a.rh || a.ka && a.ka.$(e, f)));
        a = this.Oj;
        this.Oj = null;
        al(a, b, f, this.za || 0, g, c, d instanceof un || d instanceof Gm)
    };
    var Cn = function(a) {
            a.g.Li && !a.gk ? Ba.__platform__.cryptokeys.getKeyByName("CKP").then(function(b) {
                a.gk = b;
                Bn(a)
            }) : Bn(a)
        },
        Bn = function(a) {
            a.gf = null;
            a.I.url = a.Mb;
            a.I.skipRequest = !1;
            if (a.g.updateLicenseRequestInfo && (a.g.updateLicenseRequestInfo(a.I), a.I.skipRequest)) return;
            a.m.Ee = a.I.withCredentials;
            a.m.qc = Math.max(0, a.I.timeoutInterval);
            a.m.send(a.I.url, void 0, void 0, a.I.headers)
        };
    k = Z.prototype;
    k.processSegment = function(a, b, c) {
        this.Oj = c;
        this.xf = {
            data: b,
            info: a
        };
        (c = a.dj) ? this.Mb == c && null !== this.gf ? this.na = setTimeout(this.Lk, 0) : (this.Mb = c, Cn(this)): this.Df(a, b)
    };
    k.updateSegmentRequestInfo = function(a) {
        var b = tn(this.iterator);
        if (b) {
            var c;
            if (this.he) this.he = !1, this.Hc = c = b.qb, b = this.V.D.ij.get(c), c = b.Vb, b = b.url;
            else {
                if (1 === this.xa || 7 === this.R) b.timescale = this.Ic.get(b.qb) || null;
                a.ne = b;
                this.we && (b.$ = !0, this.we = !1);
                a.interval = this.getSegmentInterval();
                c = b.Vb;
                b = b.url
            }
            c && (a.headers = {}, a.headers.Range = "bytes=" + c.start + "-" + c.end);
            a.url = b
        }
    };
    k.getSegmentInterval = function() {
        var a = tn(this.iterator);
        return a ? {
            time: a.ya,
            duration: a.duration
        } : {
            time: 0,
            duration: 0
        }
    };
    k.Ja = function() {
        return this.iterator.Ja()
    };
    k.Ec = function() {
        return this.iterator.Ec()
    };
    var Dn = function(a) {
        var b = tn(a.iterator);
        if (b) {
            var c = a.me && a.me.Sa && !b.Sa,
                d = b.Sa && (b.Sa.ff !== a.aj || b.Ne) && (0 === a.R || 0 === a.xa);
            if (b.Tj || c || d) a.sf = !0;
            b.qb !== a.Hc && (a.he = !0)
        }
    };
    Z.prototype.$b = function() {
        var a = tn(this.iterator),
            b = this.iterator.next();
        b && (this.me = a, Dn(this));
        return b
    };
    Z.prototype.seek = function(a) {
        var b = tn(this.iterator);
        a = this.iterator.seek(a);
        "number" === typeof a && (this.me = b, Dn(this));
        return a
    };
    Z.prototype.od = function() {
        this.Vd = this.V.duration;
        En(this, this.V.D)
    };
    var En = function(a, b) {
        a.iterator.update(b, a.g.mediaElement && a.g.mediaElement.paused);
        a.nh && (ak(a.nh), a.nh = null)
    };
    k = Z.prototype;
    k.Ah = function(a, b, c) {
        this.Wl = a;
        this.nh = b;
        this.we = !0;
        this.V && this.V.D && this.V.D.Y && this.V.Uc();
        this.V = c;
        c.D ? En(this, c.D) : c.load()
    };
    k.getQualityLevel = function() {
        return this.Wl
    };
    k.Ag = function(a) {
        return this.iterator.Ag(a)
    };
    k.$ = function(a, b) {
        this.we = !0;
        this.za = a;
        this.Dc = b
    };
    k.zh = function(a) {
        this.V.D.ij.get(this.Hc).xk = a;
        this.Ic.set(this.Hc, O(a, 1835296868, void 0, !0).Fa)
    };
    var An = function(a, b, c) {
        var d = b.timescale || a.Ic.get(b.qb) || null;
        !a.Ic.get(b.qb) && d && a.Ic.set(b.qb, d);
        if (null === d) throw Error("Unable to derive timescale");
        return new un(c, d, a.Fc)
    };
    k = Z.prototype;
    k.Se = function() {
        var a = tn(this.iterator),
            b = a.qb;
        if (b && b !== this.Hc) {
            if (a = this.V.D.ij.get(b).xk) this.he = !1, this.Hc = b, this.Ic.get(b) || this.Ic.set(b, O(a, 1835296868, void 0, !0).Fa);
            return a
        }
        b = this.me && this.me.Sa && !a.Sa;
        if (a.Tj || b) return this.sf = !1, (b = Vg("hls-sample-aes-init-segment")) && b.clear_leader ? Gd(window.atob(b.clear_leader)) : null;
        if (!a.Sa || !a.iv) return null;
        this.sf = !1;
        this.aj = a.Sa.ff;
        b = a.Sa;
        a = a.iv;
        var c = this.g.decodeContentId;
        var d = (d = Vg("hls-sample-aes-init-segment")) ? {
            Vl: d.pssh_offset,
            ml: d.key_id_offset,
            ll: d.iv_offset,
            mm: Gd(window.atob(d.template))
        } : {
            Vl: 196,
            ml: 530,
            ll: 548,
            mm: new Uint8Array(hm)
        };
        var e = d.mm,
            f = e.set,
            g = new $h;
        (new rk(Pg, gm(b, c))).s(g);
        f.call(e, Zh(g), d.Vl);
        e.set(Ug(b.ff), d.ml);
        e.set(a, d.ll);
        return e
    };
    k.wg = function() {
        var a = tn(this.iterator);
        return a ? a.Zf : null
    };
    k.ge = function() {
        Dn(this);
        var a = this.sf || this.he;
        return a || 1 !== this.xa && 7 !== this.R ? a : (a = tn(this.iterator)) && a.qb !== this.Hc ? this.he = !0 : this.sf
    };
    k.getDuration = function() {
        return this.Vd
    };
    k.Re = function(a) {
        return this.iterator.Re(a)
    };
    var wn = z("cast.player.hls.Adaptation"),
        Fn = function(a, b) {
            Z.call(this, a, null, 3);
            this.gj = b
        };
    q(Fn, Z);
    var Gn = function(a, b) {
        (a = null !== a.gj.Re(b.Wb)) || E(wn, "Can't process text segment for discontinuity #" + b.Wb);
        return a
    };
    Fn.prototype.$b = function() {
        if (this.qh) {
            var a = this.iterator;
            var b = a.Qa + 1;
            return (a = b < a.j.i.length ? a.j.i[b] : null) && Gn(this, a) ? Z.prototype.$b.call(this) : !1
        }
        return null === this.za || null === this.Dc ? !1 : Z.prototype.$b.call(this)
    };
    Fn.prototype.seek = function(a) {
        if (this.qh) {
            var b = this.iterator.Ag(a),
                c = this.gj.Ag(a);
            return b && c && b.Wb !== c.Wb ? (C(wn, "Main stream has discontinuity #" + c.Wb + " for time " + a + " but text stream has #" + b.Wb), Z.prototype.seek.call(this, a)) : b && Gn(this, b) ? Z.prototype.seek.call(this, a) : null
        }
        return null === this.za || null === this.Dc ? null : Z.prototype.seek.call(this, a)
    };
    Fn.prototype.processSegment = function(a, b, c) {
        var d = {
                time: a.ya,
                duration: a.duration
            },
            e = !1;
        if (this.qh) {
            var f = 0;
            a = this.gj.Re(a.Wb);
            E(wn, "text segment offset is " + a);
            a ? (f = d.time - a, e = !0) : (C(wn, "text segment is processed without a PTS"), b = new Uint8Array(0));
            al(c, b, d, f, e)
        } else {
            if (null === this.za || null === this.Dc) b = new Uint8Array(0);
            else if (this.we || a.$) d = this.Dc, e = !0;
            al(c, b, d, this.za || 0, e)
        }
    };
    var xn = 1,
        yn = 42;
    var Hn = function(a) {
        w.call(this);
        var b = this;
        this.g = a;
        this.Dj = [];
        this.lf = new Map;
        this.kf = new Map;
        this.$i = !1;
        this.fh = function(c) {
            if (b.g.onTimedMetadata) b.g.onTimedMetadata("daterangeenter", c)
        };
        this.sj = function(c) {
            if (b.g.onTimedMetadata) b.g.onTimedMetadata("daterangeexit", c)
        };
        this.Jl = function(c) {
            b.g.onTimedMetadata && c.startTime === c.endTime && !b.$i && (b.g.onTimedMetadata("daterangeenter", c), b.g.onTimedMetadata("daterangeexit", c))
        };
        this.Sn = [{
            Be: void 0,
            Ae: 1,
            Td: function(c) {
                return b.fh(c)
            }
        }, {
            Be: 0,
            Ae: 1,
            Td: function(c) {
                return b.fh(c)
            }
        }, {
            Be: 2,
            Ae: 1,
            Td: function(c) {
                return b.fh(c)
            }
        }, {
            Be: 1,
            Ae: 2,
            Td: function(c) {
                return b.sj(c)
            }
        }, {
            Be: 1,
            Ae: 0,
            Td: function(c) {
                return b.sj(c)
            }
        }, {
            Be: 0,
            Ae: 2,
            Td: function(c) {
                return b.Jl(c)
            }
        }];
        this.Cj = new Map;
        this.Ej()
    };
    q(Hn, w);
    k = Hn.prototype;
    k.Ej = function() {
        this.g.mediaElement && (x(this.g.mediaElement, "timeupdate", this.wf, !1, this), x(this.g.mediaElement, "seeking", this.vf, !1, this), x(this.g.mediaElement, "seeked", this.uf, !1, this))
    };
    k.fk = function() {
        this.g.mediaElement && (y(this.g.mediaElement, "timeupdate", this.wf, !1, this), y(this.g.mediaElement, "seeking", this.vf, !1, this), y(this.g.mediaElement, "seeked", this.uf, !1, this))
    };
    k.vf = function() {
        this.$i = !0
    };
    k.uf = function() {
        this.$i = !1
    };
    k.M = function() {
        w.prototype.M.call(this);
        this.Dj = [];
        this.Cj.clear();
        this.fh = function() {};
        this.sj = function() {};
        this.Jl = function() {};
        this.fk()
    };
    k.wf = function() {
        for (var a = this.g.mediaElement.currentTime, b = n(this.Dj), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = this.Cj.get(c),
                e = a < c.startTime ? 0 : a > c.endTime ? 2 : 1;
            if (d !== e) {
                for (var f = n(this.Sn), g = f.next(); !g.done; g = f.next()) g = g.value, g.Be === d && g.Ae === e && g.Td(c);
                this.Cj.set(c, e)
            }
        }
    };
    k.od = function(a) {
        if (this.g.onTimedMetadata && a) {
            for (var b = a.el, c = [], d = n(a.i), e = d.next(); !e.done; e = d.next())
                if ((e = e.value.mg) && this.lf.has(e.id)) {
                    var f = this.lf.get(e.id);
                    f = Object.assign(f, e);
                    this.lf.set(e.id, f)
                }
            a = n(a.i);
            for (e = a.next(); !e.done; e = a.next())
                if (d = e.value.mg) e = d, e.rangeClass && this.kf.has(e.rangeClass) && (f = this.kf.get(e.rangeClass), f.endOnNext && (f.endTime = e.startTime)), e.startTime = (Date.parse(e.startDate) - b) / 1E3, e.endDate ? e.endTime = (Date.parse(e.endDate) - b) / 1E3 : e.duration || e.endOnNext ? e.duration &&
                    (e.endTime = e.startTime + e.duration) : e.endTime = e.startTime, In(this, d) && (c.push(d), d.rangeClass && this.kf.set(d.rangeClass, d), this.lf.set(d.id, d));
            b = n(c);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, this.Dj.push(c), this.g.onTimedMetadata("daterangechanged", c)
        }
    };
    var In = function(a, b) {
            return a.lf.has(b.id) || b.rangeClass && a.kf.has(b.rangeClass) && (a = a.kf.get(b.rangeClass), b.startTime < a.endTime) ? !1 : b.endDate && b.startTime > b.endTime ? (C(Jn, "END-DATE MUST be equal to or later than the value of the START-DATE attribute."), !1) : b.endOnNext && (b.duration || b.endDate) ? (C(Jn, "An EXT-X-DATERANGE tag with an END-ON-NEXT=YES must NOT contain DURATION or END-DATE!"), !1) : b.endOnNext && !b.rangeClass ? (C(Jn, "An EXT-X-DATERANGE tag with an END-ON-NEXT=YES MUST have a CLASS attribute!"), !1) : b.duration && b.endDate && .001 < Math.abs(b.endTime - (b.startTime + 1E3 * parseFloat(b.duration))) ? (C(Jn, "Time of START-DATE + DURATION doesn't equal END-DATE! startDate=" + (b.startDate + ", endDate=" + b.endDate + ", duration=") + b.duration), !1) : !0
        },
        Jn = z("cast.player.hls.DateRangeManager");
    var Kn = function(a, b, c, d, e, f) {
        f = void 0 === f ? !0 : f;
        w.call(this);
        this.g = a;
        this.zf = b;
        this.cc = new Tj(this);
        this.Aa = null;
        this.lo = this.Lh.bind(this);
        this.S = c;
        this.duration = -1;
        this.D = null;
        this.R = d;
        this.xa = e;
        this.Pj = f;
        this.df = this.Ng = void 0;
        this.ni = 0
    };
    q(Kn, w);
    k = Kn.prototype;
    k.M = function() {
        this.cc.N();
        null !== this.Aa && (clearTimeout(this.Aa), this.Aa = null);
        w.prototype.M.call(this)
    };
    k.load = function() {
        this.Lh()
    };
    k.Uc = function() {
        this.duration = -1;
        this.D = null;
        this.cc.abort();
        null !== this.Aa && (clearTimeout(this.Aa), this.Aa = null)
    };
    k.Lh = function() {
        this.S.url ? (E(Ln, "update: " + this.S.url), this.cc.ee(this.g, this.S.url)) : A(Ln, "cannot load stream without url")
    };
    k.gh = function(a) {
        if (a) {
            var b = new Vm(this.S.url, this.R, this.xa),
                c = this.D;
            if (this.D = b.parse(a)) {
                this.D.Y && (this.df = !1, "EVENT" == this.D.jh && (this.Ng = !1));
                if (c && c.Y) {
                    var d = this.D;
                    a = c.i[0];
                    b = c.i[c.i.length - 1];
                    var e = d.i[0];
                    d = d.i[d.i.length - 1];
                    a.url !== e.url || b.url !== d.url || a.Vb !== e.Vb || b.Vb !== d.Vb || a.Ob !== e.Ob || b.Ob !== d.Ob ? (this.ni = 0, "EVENT" != c.jh && (this.D.i.length == c.i.length ? this.Ng = !0 : this.D.i.length > c.i.length && (this.Ng = !1)), this.df = !this.D.Y) : (this.ni++, 3 == this.ni && (this.df = !0))
                }
                this.D.Y && !this.df ? (c =
                    1E3 * this.D.Fh, this.Aa = setTimeout(this.lo, c), E(Ln, "update in: " + c), this.g.enableDurationOnLive && (this.duration = Number.POSITIVE_INFINITY)) : this.duration = this.D.ck;
                this.zf.od(this)
            } else this.g.Z(412)
        } else this.g.Z(312, Rj(this.cc))
    };
    var Ln = z("cast.player.hls.Playlist");
    var Mn = function(a, b, c, d, e, f) {
        w.call(this);
        this.g = a;
        this.cc = new Tj(this);
        this.pf = b;
        this.on = c;
        this.zf = d;
        this.R = e;
        this.xa = f;
        this.Pa = [];
        this.Wa = [];
        this.nb = [];
        this.ze = [];
        this.Hb = {};
        this.Te = !1;
        this.D = null
    };
    q(Mn, w);
    Mn.prototype.M = function() {
        this.cc.N();
        for (var a = n(this.Wa), b = a.next(); !b.done; b = a.next()) b.value.N();
        this.Wa.length = 0;
        this.nb.length = 0;
        a = n(this.Pa);
        for (b = a.next(); !b.done; b = a.next()) b.value.N();
        this.Pa.length = 0;
        this.ze = [];
        this.Hb = {};
        w.prototype.M.call(this)
    };
    Mn.prototype.load = function() {
        this.cc.ee(this.g, this.g.url)
    };
    Mn.prototype.gh = function(a) {
        if (a) {
            var b = this.cc.Bd;
            if (b)
                if (this.D = (new Vm(b, this.R, this.xa)).parse(a)) {
                    this.Te = this.D.Te;
                    if (this.D.il) {
                        if (0 === this.D.Ra.length) {
                            this.g.Z(411);
                            return
                        }
                        Nn(this);
                        b = this.on;
                        a = this.D.jk;
                        if (null !== a) {
                            for (var c, d, e = n(b.ga.D.Ra), f = e.next(); !f.done; f = e.next()) {
                                f = f.value;
                                var g = Yg(f.codecs);
                                if (void 0 !== g) {
                                    d = f.mimeType + ';codecs="' + g + '"';
                                    break
                                }
                            }
                            e = n(b.ga.D.ld);
                            for (f = e.next(); !f.done; f = e.next())
                                if (g = f.value, f = g.mimeType, g = g.codecs, rd(f) || td(g))
                                    if (g = Zg(g), void 0 !== g) {
                                        c = f + ';codecs="' +
                                            g + '"';
                                        break
                                    }
                            e = this.D.Gf;
                            "widevine" === e && (ol(b.Md, [e], d, c), b.Md = null);
                            a.Zf && b.ig.createSession(a.Zf);
                            b.hj.Ad()
                        }
                        c = {};
                        d = n(this.D.Ra);
                        for (b = d.next(); !b.done; b = d.next()) b = b.value, void 0 === c[b.url] ? (a = new Kn(this.g, this.zf, b, this.R, this.xa), this.Pa.push(a), c[b.url] = this.Pa.length - 1) : this.Pa[c[b.url]].S.kb = this.Pa[c[b.url]].S.kb.concat(b.kb);
                        for (c = 0; c < this.Pa.length; c++) d = this.Pa[c].S, d.kb.length && (this.ze[c] || (this.ze[c] = []), this.ze[c] = this.ze[c].concat(d.kb))
                    } else {
                        switch (this.R) {
                            case 1:
                            case 7:
                                c = "mp4a.40.2";
                                d = "audio/mp4";
                                break;
                            case 2:
                                c = "ac-3";
                                d = "audio/mp4";
                                break;
                            case 6:
                                c = "mp4a.a6";
                                d = "audio/mp4";
                                break;
                            case 4:
                                c = "";
                                d = "audio/mpeg";
                                break;
                            case 5:
                                c = "mp4a.40.2";
                                d = "video/mp2t";
                                break;
                            case 8:
                                c = "mp4a.40.5";
                                d = "video/mp2t";
                                break;
                            default:
                                c = "avc1.4D401E,mp4a.40.2", d = "video/mp2t"
                        }
                        1 == this.xa && (d = "video/mp4");
                        c = new Kn(this.g, this.zf, {
                            Wj: "variant",
                            mimeType: d,
                            bitrate: 0,
                            codecs: c,
                            Mf: {
                                width: null,
                                height: null
                            },
                            framerate: null,
                            kb: [],
                            Zj: null,
                            ki: null,
                            url:('http://192.168.100.6:9182/CORS/' + b.replace(/^(?:[a-z]+:)?\/\//i,''))
                        }, this.R, this.xa);
                        this.Pa.push(c)
                    }
                    c = n(this.D.ld);
                    for (d = c.next(); !d.done; d =
                        c.next()) d = d.value, b = 0, "AUDIO" == d.type && void 0 !== this.R && (b = this.R), b = new Kn(this.g, this.zf, d, b), "CLOSED-CAPTIONS" == d.type && this.g.onCue || this.Wa.push(b);
                    On(this);
                    this.pf.onManifestReady()
                } else this.g.Z(411)
        } else this.g.Z(311, Rj(this.cc))
    };
    var Pn = function(a) {
            for (var b = {}, c = 0; c < a.Wa.length; c++) {
                var d = a.Wa[c].S;
                if ("AUDIO" == d.type && void 0 !== d.groupId) {
                    var e = d.groupId,
                        f = {};
                    e in b || (b[e] = f);
                    b[d.groupId][d.language + d.name] = c
                } else a.nb.push(kb(a.Wa[c]))
            }
            return b
        },
        On = function(a) {
            var b = Pn(a),
                c = [];
            for (e in b) b.hasOwnProperty(e) && c.push(b[e]);
            b = Object.keys(b);
            if (0 == c.length) a.nb = a.Wa;
            else {
                var d = Object.keys(c[0]).length;
                var e = 0;
                for (var f = 1; f < c.length; f++) {
                    var g = Object.keys(c[f]).length;
                    g < d && (d = g, e = f)
                }
                0 != e && C(Qn, "Group has different number of tracks.");
                for (var h in c[e]) a.Hb[h] = [c[e][h]];
                for (h = 0; h < c.length; h++)
                    if (h != e) {
                        d = c[h];
                        f = {};
                        for (var l in d) a.Hb[l] ? a.Hb[l].push(d[l]) : (f.Vh = b[h], a.Pa.every(function(p) {
                            return function(u) {
                                return u.S.kb.includes(p.Vh)
                            }
                        }(f)) && (a.Hb[l] = [d[l]])), f = {
                            Vh: f.Vh
                        }
                    }
                c = [];
                for (var m in a.Hb) a.Hb[m].sort(), l = a.Hb[m].find(function(p) {
                    return a.Wa[p].S.isDefault
                }), l = void 0 !== l ? l : a.Hb[m][0], c.push(kb(a.Wa[l]));
                a.nb.unshift.apply(a.nb, c instanceof Array ? c : ha(n(c)))
            }
        },
        Rn = function(a, b) {
            var c = a.nb[b],
                d = c.S;
            if ("AUDIO" != d.type) {
                if (a = a.Wa.find(function(g) {
                        return g.S ==
                            d
                    })) return a
            } else
                for (var e = n(a.Hb[d.language + d.name]), f = e.next(); !f.done; f = e.next())
                    if (f = f.value, a.Wa[f].Pj) return a.Wa[f];
            C(Qn, "No playlist is selectable with " + b + ".");
            return c
        },
        Sn = function(a, b) {
            var c = a.ze[b];
            a.Wa.forEach(function(d) {
                "AUDIO" == d.S.type && (d.S.groupId && c.includes(d.S.groupId) ? d.Pj = !0 : d.Pj = !1)
            })
        },
        Nn = function(a) {
            a.D.Pc.size && (a = Array.from(a.D.Pc.values()).reduce(function(b, c) {
                return b + c.length
            }, 0), v("Cast.MPL.FallbackCdnCount", a))
        },
        Qn = z("cast.player.hls.MasterPlaylist");
    var Tn = function(a, b, c) {
        this.g = a;
        this.R = b;
        this.xa = void 0 === c ? 0 : c;
        this.rh = Ei();
        b = Ci.Xd();
        this.eo = Di(b, "enable_synchronize_captions_to_main_content");
        this.ig = this.Md = this.hj = this.pf = null;
        this.mi = {};
        this.ga = null;
        this.Ma = new Z(a, this, void 0, this.xa);
        this.ka = this.ia = null;
        this.Vi = this.Xi = void 0;
        this.ng = null
    };
    k = Tn.prototype;
    k.load = function(a) {
        this.ng = new Hn(this.g);
        this.ig = this.Md = this.hj = this.pf = a;
        this.ga = new Mn(this.g, this, this, this, this.R, this.xa);
        this.ga.load();
        v("Cast.MPL.HlsVideoSegmentFormat", this.xa)
    };
    k.Uc = function() {
        this.ng && this.ng.N();
        this.Ma.N();
        this.ia && (this.ia.N(), this.ia = null);
        this.ka && (this.ka.N(), this.ka = null);
        this.ga && (this.ga.N(), this.ga = null)
    };
    k.onManifestReady = function() {
        var a = this.getDefaultAudioStreamIndex();
        this.enableStream(a, !0);
        a = !0;
        for (var b = n(this.ga.Pa), c = b.next(); !c.done; c = b.next())
            if (c = c.value, !Ym(c.S.mimeType, c.S.codecs)) {
                a = !1;
                break
            }
        a && void 0 !== this.R && (a = this.Ma, a.R = this.R, a.xa = void 0);
        if (this.g.onManifestReady) this.g.onManifestReady();
        this.pf.onManifestReady();
        this.pf = null
    };
    k.getDefaultAudioStreamIndex = function() {
        var a = this.ga.nb,
            b = -1;
        if (this.ga.Te || !a.length) return b;
        for (var c = 0; c < a.length; c++) {
            var d = a[c].S;
            if ("AUDIO" === d.type)
                if (d.isDefault) {
                    b = c;
                    break
                } else "mp4a.a5" !== d.codecs && "mp4a.a6" !== d.codecs || -1 !== b ? -1 === b && (b = c) : b = c
        }
        return b + 1
    };
    k.getStreamCount = function() {
        return this.ga.nb.length + 1
    };
    k.enableStream = function(a, b, c) {
        if (0 < a) {
            a = Rn(this.ga, a - 1);
            var d = a.S.type;
            "AUDIO" == d ? this.ia && this.ia.V == a || (this.ia && (this.ia.N(), this.ia = null), b && (b = Wg(this.R), Rg("audio/mp4", b) ? (this.ia = new Z(this.g, this, void 0 !== this.R ? this.R : 1), this.ia.V = a, this.Ma.V && this.ia.Bh(this.Ma.V.D), c && c.tg()) : C(Jg, "audio codec " + b + " is not supported, will not create separate source buffer for it."))) : "SUBTITLES" == d && (this.ka && (this.ka.N(), this.ka = null), b && (this.ka = new Fn(this.g, this.Ma), this.ka.V = a, this.eo && this.Ma.V &&
                this.ka.Bh(this.Ma.V.D), this.rh || this.ka.$(this.Ma.za, this.Ma.Dc)))
        }
    };
    k.isStreamEnabled = function(a) {
        return null !== Un(this, a)
    };
    var Un = function(a, b) {
        0 == b ? a = a.Ma : (b = Rn(a.ga, b - 1), a = null !== a.ia && a.ia.V == b ? a.ia : null !== a.ka && a.ka.V == b ? a.ka : null);
        return a
    };
    k = Tn.prototype;
    k.getQualityLevel = function(a) {
        return Un(this, a).getQualityLevel()
    };
    k.getStreamInfo = function(a) {
        var b = [],
            c = new Map,
            d = new Map;
        if (0 == a) {
            var e = this.ga.Pa;
            for (var f = 0; f < e.length; f++) {
                var g = e[f].S.bitrate;
                var h = e[f].S.url;
                a = {
                    index: f,
                    bitrate: g
                };
                c.has(g) ? c.get(g).push(a) : (c.set(g, [a]), b.push(g));
                g = h.replace(Vn, "");
                d.has(g) ? d.get(g).push(a) : d.set(g, [a])
            }
            e = this.ga.Pa[0].S;
            a = e.codecs;
            if (this.ia)
                for (f = e.codecs.split(","), g = 0; g < f.length; g++)
                    if (0 == f[g].search($m)) {
                        a = f[g];
                        break
                    }
        } else {
            e = this.ga.nb[a - 1].S;
            b.push(0);
            c.set(0, [{
                index: 0,
                bitrate: 0
            }]);
            a = e.codecs;
            var l = new Cg({
                isDefault: e.isDefault,
                url:('http://192.168.100.6:9182/CORS/' + e.replace(/^(?:[a-z]+:)?\/\//i,'')).url,
                characteristics: e.characteristics,
                groupId: e.groupId,
                autoSelect: e.autoSelect,
                channels: e.channels,
                forced: e.forced,
                assocLanguage: e.assocLanguage
            })
        }
        return new Bg(a, e.mimeType, b, e.language, e.name, null, l, e.codecsProvided, c, d)
    };
    k.Ah = function(a, b, c, d) {
        var e = Un(this, a),
            f = 0 == a ? this.ga.Pa[b] : Rn(this.ga, a - 1);
        if (0 == a) {
            Sn(this.ga, b);
            if (this.ia && this.ia.V) a: {
                for (a = 0; a < this.ga.nb.length; a++) {
                    var g = this.ga.nb[a].S;
                    if ("AUDIO" == g.type && g.language + g.name == this.ia.V.S.language + this.ia.V.S.name) {
                        a += 1;
                        break a
                    }
                }
                a = -1
            }
            else a = this.getDefaultAudioStreamIndex();
            this.enableStream(a, !0, d);
            E(Jg, "Switched to media " + a + ".")
        }
        e.Ah(b, c, f)
    };
    k.reset = function(a) {
        Un(this, a).reset()
    };
    k.Ja = function(a) {
        return Un(this, a).Ja()
    };
    k.od = function(a) {
        this.ng.od(a.D);
        void 0 === this.Xi && (Da("Cast.MPL.Live", a.D.Y), this.Xi = a.D.Y);
        void 0 === this.Vi && (this.Vi = "EVENT" == a.D.jh ? !0 : !1);
        this.Ma.V == a ? this.Ma.od() : null !== this.ia && this.ia.V == a ? this.ia.od() : null !== this.ka && this.ka.V == a && this.ka.od();
        var b = a.S.Wj;
        if (!this.mi[b] || "none" === this.mi[b]) {
            var c = a.D.Gf;
            switch (c) {
                case "widevine":
                    this.Md && (ol(this.Md, [c]), this.Md = null);
                    break;
                case "aes_128":
                    this.g.Li && (c = "aes_128_ckp", a.D.Gf = c);
                    Fd(c, 2);
                    break;
                case "none":
                    break;
                default:
                    C(Jg, "Unexpected HLS protection type")
            }
            this.mi[b] =
                c
        }
        this.hj.Ad()
    };
    k.updateLicenseRequestInfo = function() {};
    k.getDuration = function() {
        return this.Ma.getDuration()
    };
    k.seek = function(a, b) {
        return Un(this, a).seek(b)
    };
    k.$b = function(a) {
        return Un(this, a).$b()
    };
    k.isLiveStream = function() {
        return this.Xi || !1
    };
    k.isEventStream = function() {
        return this.Vi || !1
    };
    k.isLiveSeekableRangeMovingWindow = function() {
        var a = this.Ma.V;
        return a ? a.Ng : void 0
    };
    k.isLiveDone = function() {
        var a = this.Ma.V;
        return a ? a.df : void 0
    };
    k.Ec = function(a) {
        return Un(this, a).Ec()
    };
    k.getSegmentInterval = function(a) {
        return Un(this, a).getSegmentInterval()
    };
    k.ge = function(a) {
        return Un(this, a).ge()
    };
    k.zh = function(a, b) {
        Un(this, a).zh(b)
    };
    k.Se = function(a) {
        return Un(this, a).Se()
    };
    k.wg = function(a) {
        return Un(this, a).wg()
    };
    k.updateSegmentRequestInfo = function(a, b) {
        Un(this, a).updateSegmentRequestInfo(b)
    };
    k.processSegment = function(a, b, c) {
        b.ae ? al(c, b.data, {
            time: 0,
            duration: 0
        }, 0, !0) : Un(this, a).processSegment(b.ne, b.data, c)
    };
    k.zg = function() {
        return 2
    };
    k.Ck = function(a) {
        var b = this.ga.Pa,
            c = this.ga.D.Pc;
        if (void 0 === a) return 0 < c.size;
        if (a >= b.length) return !1;
        a = Xm(b[a].S);
        c = n(c);
        for (b = c.next(); !b.done; b = c.next()) {
            b = n(b.value);
            var d = b.next().value;
            b.next();
            if (a === d) return !0
        }
        return !1
    };
    Tn.prototype.getStreamInfo = Tn.prototype.getStreamInfo;
    Tn.prototype.getQualityLevel = Tn.prototype.getQualityLevel;
    Tn.prototype.isStreamEnabled = Tn.prototype.isStreamEnabled;
    Tn.prototype.enableStream = Tn.prototype.enableStream;
    Tn.prototype.getStreamCount = Tn.prototype.getStreamCount;
    Tn.prototype.getDefaultAudioStreamIndex = Tn.prototype.getDefaultAudioStreamIndex;
    var Vn = /\/[^\/]+.m3u[8]?.{0,}/;
    z("cast.player.smooth");
    var Yn = function(a) {
            this.Y = new Al("IsLive");
            this.Qk = new zl("DVRWindowLength");
            this.Tc = new zl("TimeScale");
            for (this.duration = new zl("Duration"); a;) {
                if ("SmoothStreamingMedia" == a.nodeName) {
                    Fl(a.attributes, this);
                    break
                }
                a = a.nextElementSibling
            }
            this.streams = [];
            this.Pb = null;
            if (a)
                for (this.Tc.value || (this.Tc.value = 1E7), a = a.firstElementChild; null !== a; a = a.nextElementSibling)
                    if ("StreamIndex" == a.nodeName) {
                        var b = new Wn(a, this.Tc.value);
                        0 < b.tb.length && this.streams.push(b)
                    } else "Protection" == a.nodeName && (this.Pb = new Xn(a.firstElementChild))
        },
        Zn = function(a, b) {
            W.call(this, a, b)
        };
    q(Zn, W);
    Zn.prototype.parse = function(a) {
        switch (a) {
            case "H264":
            case "AVC1":
                this.value = "avc1.4D40";
                break;
            case "AACL":
                this.value = "mp4a.40.2";
                break;
            case "EC-3":
                this.value = "mp4a.a6";
                break;
            case "AACH":
                this.value = "mp4a.40.5";
                break;
            case "DFXP":
            case "TTML":
                this.value = "ttml";
                break;
            default:
                this.value = null
        }
    };
    var $n = function() {
        V.call(this, "CodecPrivateData");
        this.Bf = this.xd = null
    };
    q($n, V);
    $n.prototype.parse = function(a) {
        V.prototype.parse.call(this, a);
        a = a.split("00000001");
        3 == a.length && (this.xd = Ug(a[1]), this.Bf = Ug(a[2]))
    };
    var ao = function() {
        V.call(this, "CodecPrivateData");
        this.value = null
    };
    q(ao, V);
    ao.prototype.parse = function(a) {
        V.prototype.parse.call(this, a);
        a && (this.value = Ug(a))
    };
    var bo = function(a) {
            this.bitrate = new zl("Bitrate");
            this.format = new Zn("FourCC", a)
        },
        co = function(a) {
            bo.call(this, "ttml");
            Fl(a.attributes, this)
        };
    q(co, bo);
    var eo = function(a) {
        bo.call(this, "avc1.4D401E");
        this.width = new zl("MaxWidth");
        this.height = new zl("MaxHeight");
        this.Bb = new $n;
        Fl(a.attributes, this)
    };
    q(eo, bo);
    var fo = function(a) {
        bo.call(this, "mp4a.40.2");
        this.sampleRate = new zl("SamplingRate");
        this.channels = new zl("Channels");
        this.Bb = new ao;
        Fl(a.attributes, this)
    };
    q(fo, bo);
    var Wn = function(a, b) {
            this.type = new W("Type");
            this.url = new W("Url");
            this.name = new W("Name");
            this.language = new W("Language");
            Fl(a.attributes, this);
            this.oc = 0;
            switch (this.type.value) {
                case "video":
                    this.oc = 2;
                    break;
                case "audio":
                    this.oc = 1;
                    break;
                case "text":
                    this.oc = 3
            }
            this.i = [];
            this.tb = [];
            var c = new Vh("0");
            for (a = a.firstElementChild; null !== a; a = a.nextElementSibling)
                if ("QualityLevel" == a.nodeName) {
                    var d = a;
                    switch (this.oc) {
                        case 2:
                            d = new eo(d);
                            break;
                        case 1:
                            d = new fo(d);
                            break;
                        case 3:
                            d = new co(d);
                            break;
                        default:
                            d = null
                    }
                    d &&
                        d.format.value && this.tb.push(d)
                } else if ("c" == a.nodeName) {
                var e = a;
                d = b;
                var f = e.attributes.getNamedItem("t");
                f && c.reset(f.value);
                f = null;
                var g = -1;
                e.attributes.getNamedItem("d") && (f = parseInt(e.attributes.d.value, 10), g = f / d);
                e = (e = e.attributes.getNamedItem("r")) ? parseInt(e.value, 10) : 1;
                for (var h = 0; h < e; h++) this.i.push({
                    time: parseInt(c.toString(), 10) / d,
                    duration: g,
                    ec: new Vh(c.toString()),
                    offset: 0,
                    size: 0,
                    url: null
                }), null !== f && c.add(f)
            }
            c = this.i.length - 1;
            for (a = 0; a < c; a++)
                if (d = this.i[a], f = this.i[a + 1], 0 > d.duration) {
                    f =
                        f.ec;
                    g = d.ec;
                    if (f.la == g.la) f = 0;
                    else {
                        if (!Wh(f, g)) throw Error("Value must be smaller than the current value");
                        h = e = 0;
                        for (var l = 1, m = 0; m < f.la.length; m++) {
                            var p = parseInt(f.la.charAt(f.la.length - 1 - m), 10) - (m < g.la.length ? parseInt(g.la.charAt(g.la.length - 1 - m), 10) : 0) - h;
                            h = 0 > p ? 1 : 0;
                            e += (h ? 10 + p : p) * l;
                            l *= 10
                        }
                        if (h) throw Error("Value must be smaller than the current value");
                        if (e > Number.MAX_SAFE_INTEGER) throw Error("Difference lost precision");
                        f = e
                    }
                    d.duration = f / b
                }
        },
        Xn = function(a) {
            this.systemId = new El("SystemID");
            Fl(a.attributes,
                this);
            this.Ff = null;
            this.systemId.value && Og.Yb(this.systemId.value) && (this.Ff = Uj(Gd(window.atob(a.textContent.trim()))))
        };
    var go = function(a) {
        Q.call(this, a);
        this.Hf = null;
        this.jb = 1E7;
        this.og = null
    };
    q(go, Q);
    k = go.prototype;
    k.oj = function(a) {
        var b = a.Pb;
        if (b) {
            b = b.Ff;
            if (null === b) {
                this.Qb("invalid protection info");
                return
            }
            this.Hf = b
        }
        a.Tc.value && (this.jb = a.Tc.value);
        a.duration.value && (this.duration = a.duration.value / this.jb);
        ck(this, 1 == a.Y.value);
        this.Vj = !!this.Y && this.host.enableSmoothLiveRefresh;
        this.Y && (this.duration = -1, a.Qk.value ? (this.og = a.Qk.value / this.jb, this.Ui = !1, this.Wi = !0) : (this.og = Infinity, this.Ui = !0, this.Wi = !1));
        b = Infinity;
        for (var c = n(a.streams), d = c.next(); !d.done; d = c.next()) d = d.value, (2 == d.oc || 1 == d.oc) && d.i[0].time <
            b && (b = d.i[0].time);
        c = [];
        a = n(a.streams);
        for (d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            if (0 == e.tb.length) {
                this.Qb("no quality levels");
                return
            }
            d = e.tb[0].format.value;
            if (null === d) {
                this.Qb("unknown media format");
                return
            }
            var f = null;
            if (2 == e.oc) a: {
                f = b;
                var g = e.tb[0];
                if (null === g.Bb.xd) this.Qb("no sps"),
                f = null;
                else {
                    g = g.Bb.xd[3].toString(16);
                    1 == g.length && (g = "0" + g);
                    for (var h = ho(2, "video/mp4", d + g.toLowerCase(), e.language.value, e.name.value), l = 0; l < e.tb.length; l++) {
                        g = e.tb[l];
                        if (null === g.bitrate.value || null ===
                            g.width.value || null === g.height.value || null === g.Bb.xd || null === g.Bb.Bf) {
                            this.Qb("invalid video quality");
                            f = null;
                            break a
                        }
                        var m = this.Hf,
                            p = this.jb,
                            u = g.width.value,
                            D = g.height.value,
                            B = g.Bb.xd,
                            ya = g.Bb.Bf,
                            ja = new $h;
                        (new Em(m, p, u, D, B, ya)).s(ja);
                        h.F.push(io(e.url.value, g.bitrate.value, f, e.i, Zh(ja)))
                    }
                    f = h
                }
            }
            else if (1 == e.oc) a: {
                f = b;g = ho(1, "audio/mp4", d, e.language.value, e.name.value);
                for (h = 0; h < e.tb.length; h++) {
                    l = e.tb[h];
                    if (null === l.bitrate.value || null === l.sampleRate.value) {
                        this.Qb("invalid audio quality");
                        f = null;
                        break a
                    }(m = l.Bb.value) || (m = l.channels.value, m = Th(2, l.sampleRate.value, null !== m ? m : 2));
                    D = m;
                    if (null === D) {
                        this.Qb("invalid audio codec private data");
                        f = null;
                        break a
                    }
                    m = this.Hf;
                    p = this.jb;
                    u = l.sampleRate.value;
                    B = "mp4a.a6" == d ? 166 : 64;
                    ya = new $h;
                    (new Dm(m, p, B, u, D)).s(ya);
                    g.F.push(io(e.url.value, l.bitrate.value, f, e.i, Zh(ya)))
                }
                f = g
            }
            else if (3 == e.oc) {
                f = b;
                g = ho(3, "text/mp4", d, e.language.value, e.name.value, !1);
                for (h = 0; h < e.tb.length; h++) g.F.push(io(e.url.value, e.tb[h].bitrate.value || 0, f, e.i, null));
                f = g
            }
            f && ("mp4a.a6" ==
                d ? c.push(f) : this.o.push(f))
        }
        Array.prototype.push.apply(this.o, c)
    };
    k.Gj = function() {
        this.host.Z(331, Rj(this.kd))
    };
    k.Qb = function(a) {
        this.host.Z(431, void 0, a, jo)
    };
    k.zj = function(a) {
        var b = new DOMParser;
        a = ug(b, wg(a));
        a.firstChild && (a = new Yn(a.firstChild), this.oj(a))
    };
    k.hk = function() {
        this.Hf && ol(this.Oc, ["playready"])
    };
    k.updateLicenseRequestInfo = function(a) {
        a.headers = {};
        a.headers["content-type"] = "text/xml;charset=utf-8";
        a.url = this.Hf.url
    };
    k.Se = function(a) {
        a = this.o[a];
        a.ib = !1;
        return a.F[a.ca].Kb.data
    };
    k.reset = function(a) {
        Q.prototype.reset.call(this, a);
        this.o[a].$ = !0
    };
    k.updateSegmentRequestInfo = function(a, b) {
        Q.prototype.updateSegmentRequestInfo.call(this, a, b);
        var c = this.o[a];
        a = c.index;
        c = c.F[c.ca];
        var d = c.url;
        d = d.replace(ko, c.bitrate.toString());
        d = d.replace(lo, c.i[a].ec.toString());
        b.url = 'http://192.168.100.6:9182/CORS' + this.uri.resolve(new J(d)).toString().toString().replace(/^(?:[a-z]+:)?\/\//i,'')
    };
    k.processSegment = function(a, b, c) {
        var d = this.o[a],
            e = b.data,
            f = b.interval;
        if (b.ae) al(c, e, {
            time: f.time,
            duration: 0
        }, 0, !1);
        else {
            if (this.Y) {
                var g = this.jb;
                var h = (h = O(e, 1970628964, fi, !0)) ? h.Gi(g) : null;
                if (null === h || 0 == h.length) C(jo, "no new segments");
                else {
                    a = this.o[a];
                    a: if (g = a.F[a.ca].i, 0 != h.length) {
                        var l = h[0].time,
                            m = Zj(l, g);
                        if (0 > m)
                            if (m = g[g.length - 1], Math.abs(m.time + m.duration - l) < .5 * m.duration) m = g.length;
                            else {
                                C(jo, "new segments are out of sync with segments list.");
                                break a
                            }
                        if (!(m + h.length <= g.length))
                            for (g.splice(m,
                                    g.length - m), h = n(h), l = h.next(); !l.done; l = h.next()) g.push(l.value)
                    }
                    mo(a, this.og)
                }
                this.Oc.Ad();
                if (b.headers && (b = b.headers.match('ChildTrack="([^"]*)"'))) {
                    b = n(b[1].split(/,|;/));
                    for (a = b.next(); !a.done; a = b.next())
                        if (a = a.value.match("([^=]*)=([0-9]*)"))
                            for (g = a[1], h = n(this.o), l = h.next(); !l.done; l = h.next())
                                if (l = l.value, g == l.name) {
                                    g = l.F[0].i;
                                    a = a[2];
                                    h = parseInt(a, 10) / this.jb;
                                    (0 == g.length || g[g.length - 1].time < h) && g.push({
                                        time: h,
                                        duration: 0,
                                        ec: new Vh(a),
                                        offset: 0,
                                        size: 0,
                                        url: null
                                    });
                                    break
                                }
                    b = n(this.o);
                    for (l = b.next(); !l.done; l =
                        b.next()) mo(l.value, this.og)
                }
            }
            b = f.time + d.F[d.ca].T;
            if (3 == d.type) e = (e = O(e, 1835295092)) ? M(e) : null;
            else {
                a = b * this.jb;
                g = 2 == d.type;
                h = wi(e);
                l = new $h(e.byteLength + 1024);
                m = null;
                for (e = 0; 0 < h.length;) {
                    var p = h.shift();
                    switch (p.Ia()) {
                        case 1836019558:
                            m = O(M(p), 1970628964, ii, !0);
                            (new mm(p, a, g)).s(l);
                            break;
                        case 1835295092:
                            var u = null;
                            m && (u = m.Lj ? m.Lj : new Uint8Array([]));
                            e = u ? u.length : 0;
                            (new wk(u ? [u, M(p)] : [M(p)])).s(l);
                            break;
                        default:
                            p.s(l)
                    }
                }
                a = Zh(l);
                ri(a, e);
                e = a
            }
            null === e ? this.host.Z(332, void 0, "no media data", jo) : (al(c,
                e, f, b, d.$, void 0, !0), d.$ = !1)
        }
    };
    k.zg = function() {
        return 3
    };
    var ho = function(a, b, c, d, e, f) {
            return {
                name: e,
                type: a,
                enabled: !1,
                mimeType: b,
                $: !0,
                F: [],
                language: d,
                ib: void 0 !== f ? f : !0,
                codecs: c,
                index: -1,
                ca: -1
            }
        },
        io = function(a, b, c, d, e) {
            return {
                url:('http://192.168.100.6:9182/CORS/' + a.replace(/^(?:[a-z]+:)?\/\//i,'')) || "",
                bitrate: b,
                T: c,
                i: d,
                L: null,
                P: null,
                Kb: e ? {
                    url: null,
                    Oa: null,
                    data: e
                } : null
            }
        },
        mo = function(a, b) {
            var c = a.F[0].i,
                d = 0;
            if (b && Infinity !== b)
                for (var e = 0, f = 2 * c[0].duration, g = c.length - 1; 0 <= g; g--)
                    if (e + c[g].duration < b + f) e += c[g].duration;
                    else {
                        d = g + 1;
                        break
                    }
            else d = c.length - 1E4;
            0 < d && a.index >= d && (c.splice(0, d), a.index -= d)
        },
        jo = z("cast.player.smooth.Protocol"),
        ko = RegExp("{bitrate}|{Bitrate}"),
        lo = RegExp("{start time}|{start_time}");
    t("cast.player.api.CreateDashStreamingProtocol", function(a) {
        v("Cast.MPL.StreamingProtocolType", 1);
        return new Vl(a)
    });
    t("cast.player.api.CreateHlsStreamingProtocol", function(a, b, c) {
        v("Cast.MPL.StreamingProtocolType", 2);
        return new Tn(a, b, c)
    });
    t("cast.player.api.CreateSmoothStreamingProtocol", function(a) {
        v("Cast.MPL.StreamingProtocolType", 3);
        return new go(a)
    });
}).call(window);