(function() {
    var _ = window.caf_ = {
        '3pp': 1
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var ca, da, ea, p, ia, la, oa, pa, qa, ra, sa, va, ta, ua, wa, xa, ya, Aa, Ba, Ca, Da, Fa, Ga, Ha, Na, Oa, Qa, Ta, Ua, Va, Wa, Xa, Za, ab, cb, kb, jb, mb, lb, pb, xb, Bb, Eb, Ib, Kb, Qb, Rb, Pb, Ub, bc, ec, dc, gc, uc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Lc, Mc, Nc, Pc, Oc, Qc, Tc, Uc, Sc, Xc, Yc, Zc, $c, ad, bd, cd, dd, ed, fd, hd, id, z, kd, ld, nd, qd, rd, ud, yd, zd, Ad, Bd, Cd, Gd, Jd, Od, Ld, Nd, Td, Ud, Wd, Yd, Zd, Vd, Xd, $d, ae, be, de, ee, fe, ge, ie, je, le, ne, te, ue, ve, xe, ye, ze, Ae, Be, Ge, De, He, Me, Ne, Pe, Qe, Se, Te, Ue, We, Ye, $e, af, Xe, Ze, Ke, Re, ff, df, bf, cf, gf, ef, Le, Ve, kf, mf, lf, nf, of,
        pf, qf, rf, Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, K, Of, Pf, Qf, Rf, Kf, Lf, Nf, Uf, Wf, Xf, Tf, Vf, Zf, $f, eg, fg, gg, lg, mg, tg, qg, rg, sg, ug, vg, wg, zg, yg, Bg, Ag, Cg, Dg, Eg, Fg, Gg, Hg, Ig, Jg, Og, Ng, Kg, Lg, Mg, Rg, Vg, eh, hh, jh, kh, ih, gh, lh, mh, oh, ph, qh, rh, sh, th, yh, zh, Ah, Bh, Ug, xh, Ih, Lh, Nh, Ph, Rh, Th, Vh, Xh, Zh, ai, ci, ei, di, fi, gi, Eh, Hh, hi, Mh, Jh, Qh, Sh, Oh, Gh, ii, Yh, ji, Uh, Wh, $h, bi, ki, qi, li, ri, si, ti, wi, ui, vi, xi, zi, Ai, Bi, yi, Di, Gi, Fi, Ei, Ji, Ki, Li, Mi, Ni, Oi, Pi, Qi, Ri, Si, Ti, Ui, Vi, Wi, Ii, ej, fj, lj, mj, nj, kj, oj, pj, gj, hj, qj, sj, ij, tj, uj, jj, vj, wj, xj, yj, zj, Aj, Bj, Cj, Dj, Ej, Hj,
        Gj, Fj, Ij, Lj, Nj, Qj, Mj, Rj, Oj, Sj, Tj, Uj, Vj, Xj, Yj, Pj, ak, Zj, bk, Jj, Wj, ck, ek, fk, gk, hk, kk, lk, mk, nk, ok, pk, qk, rk, sk, uk, tk, vk, wk, jk, Ck, Dk, Ek, Jk, Ik, Lk, Nk, Ok, Hk, Fk, xk, Pk, Qk, Rk, Gk, Sk, Tk, Uk, Vk, Xk, zk, $k, Mk, al, Zk, Kk, Bk, Yk, Wk, Ak, bl, cl, dl, el, fl, gl, hl, il, jl, kl, ll, nl, ol, ml, ql, rl, sl, tl, wl, zl, yl, Bl, Cl, Al, Dl, El, Fl, Gl, Hl, Il, Jl, Kl, Ll, Nl, Sl, Ul, Vl, Xl, Zl, $l, Ol, Ml, Tl, Ql, Rl, Wl, am, Yl, dm, bm, cm, fm, gm, hm, im, om, jm, lm, mm, nm, pm, qm, rm, sm, tm, km, zm, vm, wm, ym, um, Am, xm, Dm, Hm, Im, Km, Lm, Nm, Om, Pm, Qm, Tm, Wm, Xm, Ym, Vm, gn, on, mn, pn, tn, vn, wn, xn, Fn, In,
        Jn, Kn, Mn, Nn, Qn, ao, lo, mo, On, ho, eo, fo, go, oo, po, ro, qo, so, to, vo, wo, xo, yo, zo, Bo, Co, Do, Fo, Io, Jo, Ko, Oo, Po, Ro, So, To, Qo, Uo, Vo, $o, ap, bp, Yo, mp, pp, op, np, rp, qp, lp, hp, jp, gp, kp, ip, sp, Ap, tp, yp, vp, wp, xp, Bp, zp, up, Fp, Dp, Gp, Ep, Cp, Hp, Ip, Jp, Mp, Np, Op, Pp, Qp, Rp, Sp, Tp, Zp, Vp, bq, cq, aq, Yp, Xp, Up, dq, fq, eq, gq, jq, iq, lq, nq, mq, kq, pq, qq, rq, uq, sq, vq, wq, xq, yq, zq, Bq, Cq, Eq, Fq, Gq, Dq, Jq, Mq, Kq, Tq, Lq, Uq, Oq, Qq, Vq, Wq, Xq, M, Zq, $q, ar, cr, dr, er, fr, gr, hr, ir, jr, kr, lr, mr, nr, or, pr, qr, rr, sr, Yq, tr, ur, vr, wr, xr, yr, zr, Ar, Br, Cr, Dr, Er, br, Fr, Gr, Hr, Ir, Mr, Nr, Or,
        Pr, Qr, Rr, Sr, Tr, Ur, Vr, Wr, Xr, Yr, Zr, $r, as, bs, cs, ds, es, fs, gs, hs, is, js, ks, ls, ms, ns, os, qs, rs, ss, ts, vs, ws, ys, xs, zs, As, Cs, Ds, Es, Fs, Gs, Hs, Is, Ks, Ls, Ms, Os, Ps, Qs, Rs, Ss, Ts, Us, Vs, Ws, Xs, Ys, Zs, $s, at, bt, ct, dt, et, ft, gt, ht, it, jt, kt, lt, nt, N, ot, pt, qt, st, tt, yt, zt, Zt, Yt, $t, bu, du, fu, cu, eu, gu, iu, ku, lu, mu, hu, nu, ou, ju, pu, qu, su, tu, uu, vu, wu, xu, yu, zu, Au, Iu, Hu, Fu, Cu, Du, Bu, Lu, Mu, Nu, Pu, Qu, Ru, Su, Tu, Uu, Vu, Wu, Xu, Yu, Zu, cv, $u, av, bv, dv, gv, ev, hv, iv, jv, mv, nv, pv, ov, qv, sv, tv, xv, zv, vv, wv, Av, Bv, Cv, Dv, Ev, Gv, Hv, Iv, Jv, Lv, Mv, Nv, Ov, Pv, Sv, Qv, Rv, Tv,
        Vv, Wv, Xv, Yv, Zv, $v, aw, cw, dw, ew, fw, hw, iw, gw, jw, kw, lw, mw, nw, ow, pw, rw, sw, tw, uw, vw, ww, xw, qw, yw, zw, Aw, Bw, Cw, Dw, Ew, Fw, Iw, Jw, Nw, Ow, Kw, Pw, Mw, Qw, Vw, Rw, Ww, Xw, Yw, Uw, Tw, $w, Zw, ax, bx, cx, O, ex, hx, jx, kx, lx, mx, nx, ox, px, qx, tx, ux, xx, yx, zx, Ax, Bx, Cx, Dx, Ex, Ix, Jx, P, Mx, Ox, Nx, Px, Qx, Sx, Wx, Xx, Vx, Yx, $x, ay, by, cy, dy, fy, ey, gy, hy, iy, my, jy, ny, oy, ty, uy, vy, wy, ly, Ay, By, Hy, zy, Iy, qy, Cy, Gy, sy, Fy, Ly, Ky, Jy, Dy, Ey, ry, yy, py, ky, Oy, Py, Ny, Sy, Ty, Uy, Wy, Xy, fz, Zy, gz, hz, iz, jz, kz, lz, mz, nz, oz, pz, qz, rz, sz, tz, uz, vz, wz, xz, yz, zz, Az, Bz, Cz, Dz, Ez, Fz, Gz, Hz, Yz,
        Iz, $p, Zz, $z, aA, bA, ha, fa, Nq, Ka, La;
    ca = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    da = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    ea = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    p = function(a, b) {
        if (b) a: {
            var c = fa;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ha(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
    ia = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    };
    _.ja = function(a) {
        return a.raw = a
    };
    _.q = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: da(a)
        }
    };
    _.ka = function(a) {
        if (!(a instanceof Array)) {
            a = _.q(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    la = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    _.r = function(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (na) na(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.qb = b.prototype
    };
    oa = function() {
        this.o = !1;
        this.j = null;
        this.A = void 0;
        this.h = 1;
        this.D = 0;
        this.l = null
    };
    pa = function(a) {
        if (a.o) throw new TypeError("Generator is already running");
        a.o = !0
    };
    qa = function(a, b) {
        a.l = {
            qo: b,
            zp: !0
        };
        a.h = a.D
    };
    ra = function(a, b, c) {
        a.h = c;
        return {
            value: b
        }
    };
    sa = function(a) {
        this.h = new oa;
        this.j = a
    };
    va = function(a, b) {
        pa(a.h);
        var c = a.h.j;
        if (c) return ta(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.h.return);
        a.h.return(b);
        return ua(a)
    };
    ta = function(a, b, c, d) {
        try {
            var e = b.call(a.h.j, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.h.o = !1, e;
            var f = e.value
        } catch (g) {
            return a.h.j = null, qa(a.h, g), ua(a)
        }
        a.h.j = null;
        d.call(a.h, f);
        return ua(a)
    };
    ua = function(a) {
        for (; a.h.h;) try {
            var b = a.j(a.h);
            if (b) return a.h.o = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.h.A = void 0, qa(a.h, c)
        }
        a.h.o = !1;
        if (a.h.l) {
            b = a.h.l;
            a.h.l = null;
            if (b.zp) throw b.qo;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    wa = function(a) {
        this.next = function(b) {
            pa(a.h);
            a.h.j ? b = ta(a, a.h.j.next, b, a.h.B) : (a.h.B(b), b = ua(a));
            return b
        };
        this.throw = function(b) {
            pa(a.h);
            a.h.j ? b = ta(a, a.h.j["throw"], b, a.h.B) : (qa(a.h, b), b = ua(a));
            return b
        };
        this.return = function(b) {
            return va(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    };
    xa = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    ya = function(a) {
        return xa(new wa(new sa(a)))
    };
    _.za = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    Aa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Ba = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                qj: e,
                ik: f
            }
        }
        return {
            qj: -1,
            ik: void 0
        }
    };
    Ca = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    Da = function(a) {
        return a ? a : Array.prototype.fill
    };
    _.w = function(a, b, c) {
        a = a.split(".");
        c = c || _.u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    _.Ea = function(a) {
        a = a.split(".");
        for (var b = _.u, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    };
    Fa = function() {};
    Ga = function(a) {
        a.Yb = void 0;
        a.L = function() {
            return a.Yb ? a.Yb : a.Yb = new a
        }
    };
    Ha = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.Ia = function(a) {
        var b = Ha(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.Ja = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.Ma = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Ka) && a[Ka] || (a[Ka] = ++La)
    };
    Na = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Oa = function(a, b, c) {
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
    };
    _.Pa = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Pa = Na : _.Pa = Oa;
        return _.Pa.apply(null, arguments)
    };
    Qa = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    _.Ra = function() {
        return Date.now()
    };
    _.Sa = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.qb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ct = function(d, e, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
            return b.prototype[e].apply(d, g)
        }
    };
    Ta = function(a) {
        return a
    };
    Ua = function() {
        return !(!cast.__platform__ || !cast.__platform__.metrics)
    };
    Va = function() {
        this.playbackType = 0;
        this.deviceName = ""
    };
    Wa = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Wa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    Xa = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Wa.call(this, c + a[d])
    };
    _.Ya = function(a, b) {
        throw new Xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    Za = function(a, b, c) {
        if ("number" != typeof a || !isFinite(a)) {
            var d = [a],
                e = "Assertion failed";
            b ? (e += ": " + b, d = Array.prototype.slice.call(arguments, 2)) : e += ": Expected %s to be a finite number but it is not.";
            throw new Xa("" + e, d || []);
        }
    };
    _.$a = function() {};
    ab = function(a) {
        var b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };
    _.bb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    cb = function(a) {
        function b() {
            c = 0
        }
        var c = 0;
        return function(d) {
            c || (c = _.u.setTimeout(b, 3E5), a.apply(void 0, arguments))
        }
    };
    _.eb = function(a, b) {
        return 0 <= db(a, b)
    };
    _.hb = function(a, b) {
        b = db(a, b);
        var c;
        (c = 0 <= b) && _.fb(a, b);
        return c
    };
    _.fb = function(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    };
    _.ib = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    kb = function(a, b, c, d) {
        return Array.prototype.splice.apply(a, jb(arguments, 1))
    };
    jb = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    mb = function(a, b) {
        if (!_.Ia(a) || !_.Ia(b) || a.length != b.length) return !1;
        for (var c = a.length, d = lb, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    lb = function(a, b) {
        return a === b
    };
    _.nb = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    _.ob = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    };
    pb = function(a, b) {
        var c = _.Ia(b),
            d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a) return;
            a = a[d[c]]
        }
        return a
    };
    _.qb = function(a, b) {
        return null !== a && b in a
    };
    _.rb = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    };
    _.ub = function(a) {
        for (var b in a) return !1;
        return !0
    };
    _.vb = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    xb = function(a) {
        if (!a || "object" !== typeof a) return a;
        if ("function" === typeof a.clone) return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
            c;
        for (c in a) b[c] = xb(a[c]);
        return b
    };
    _.zb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < yb.length; f++) c = yb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Bb = function() {
        if (void 0 === Ab) {
            var a = null,
                b = _.u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ta,
                        createScript: Ta,
                        createScriptURL: Ta
                    })
                } catch (c) {
                    _.u.console && _.u.console.error(c.message)
                }
                Ab = a
            } else Ab = a
        }
        return Ab
    };
    Eb = function(a, b) {
        this.h = a === Cb && b || "";
        this.j = Db
    };
    _.Fb = function(a) {
        if (a instanceof Eb && a.constructor === Eb && a.j === Db) return a.h;
        _.Ya("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    };
    _.Gb = function(a) {
        return new Eb(Cb, a)
    };
    Ib = function(a, b) {
        this.h = b === Hb ? a : "";
        this.Jb = !0
    };
    Kb = function(a, b) {
        this.h = b === Jb ? a : ""
    };
    _.Lb = function(a) {
        if (a instanceof Kb && a.constructor === Kb) return a.h;
        _.Ya("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Ha(a));
        return "type_error:TrustedResourceUrl"
    };
    _.Nb = function(a) {
        var b = Bb();
        a = b ? b.createScriptURL(a) : a;
        return new Kb(a, Jb)
    };
    _.Ob = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    Qb = function(a, b) {
        return 0 == Pb(b, a.substr(0, b.length))
    };
    Rb = function(a, b) {
        return 0 == Pb(b, a.substr(a.length - b.length, b.length))
    };
    Pb = function(a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a == b ? 0 : 1
    };
    _.Sb = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };
    _.Xb = function(a, b) {
        var c = 0;
        a = (0, _.Tb)(String(a)).split(".");
        b = (0, _.Tb)(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Ub(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ub(0 == f[2].length, 0 == g[2].length) || Ub(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    };
    Ub = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    _.Zb = function(a, b) {
        this.h = b === _.Yb ? a : ""
    };
    _.$b = function(a) {
        if (a instanceof _.Zb && a.constructor === _.Zb) return a.h;
        _.Ya("expected object of type SafeUrl, got '" + a + "' of type " + Ha(a));
        return "type_error:SafeUrl"
    };
    bc = function(a, b) {
        this.h = b === ac ? a : "";
        this.Jb = !0
    };
    _.cc = function() {
        var a = _.u.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    _.y = function(a) {
        return -1 != _.cc().indexOf(a)
    };
    ec = function() {
        return _.y("Safari") && !(dc() || _.y("Coast") || _.y("Opera") || _.y("Edge") || _.y("Edg/") || _.y("OPR") || _.y("Firefox") || _.y("FxiOS") || _.y("Silk") || _.y("Android"))
    };
    dc = function() {
        return (_.y("Chrome") || _.y("CriOS")) && !_.y("Edge") || _.y("Silk")
    };
    gc = function(a, b, c) {
        this.h = c === fc ? a : "";
        this.j = b;
        this.Jb = this.Bg = !0
    };
    _.hc = function(a) {
        if (a instanceof gc && a.constructor === gc) return a.h;
        _.Ya("expected object of type SafeHtml, got '" + a + "' of type " + Ha(a));
        return "type_error:SafeHtml"
    };
    _.rc = function(a) {
        if (a instanceof gc) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Bg && (c = a.ng());
        a = b && a.Jb ? a.nb() : String(a);
        ic.test(a) && (-1 != a.indexOf("&") && (a = a.replace(jc, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(kc, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(lc, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(nc, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(oc, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(pc, "&#0;")));
        return _.qc(a, c)
    };
    _.qc = function(a, b) {
        var c = Bb();
        a = c ? c.createHTML(a) : a;
        return new gc(a, b, fc)
    };
    uc = function(a, b) {
        if (a.tagName && sc[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
        if (tc())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = _.hc(b)
    };
    _.wc = function(a, b) {
        if (!Number.isFinite(a)) return String(a);
        a = String(a);
        var c = a.indexOf("."); - 1 === c && (c = a.length);
        var d = "-" === a[0] ? "-" : "";
        d && (a = a.substring(1));
        return d + vc("0", Math.max(0, b - c)) + a
    };
    xc = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    yc = function(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    };
    zc = function(a) {
        return Qb(a, "text/") || "application/ttml+xml" === a
    };
    Ac = function(a) {
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
    Bc = function() {
        this.contentId = "";
        this.contentUrl = void 0;
        this.streamType = "NONE";
        this.mediaCategory = void 0;
        this.contentType = "";
        this.userActionStates = this.vmapAdsRequest = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.breakClips = this.breaks = this.customData = this.textTrackStyle = this.tracks = this.startAbsoluteTime = this.duration = this.entity = this.metadata = void 0
    };
    Cc = function() {
        this.repeatMode = this.description = this.name = this.queueType = this.entity = this.id = void 0;
        this.shuffle = !1;
        this.containerMetadata = this.startTime = this.startIndex = this.items = void 0
    };
    Dc = function(a) {
        this.url = a;
        this.width = this.height = void 0
    };
    Ec = function() {
        this.muted = this.level = void 0
    };
    Fc = function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    };
    Gc = function(a, b) {
        this.playerState = "LOADING";
        this.media = a;
        this.mediaSessionId = b
    };
    Hc = function() {
        this.type = "QUEUE_CHANGE";
        this.sequenceNumber = this.reorderItemIds = this.insertBefore = this.itemIds = this.changeType = this.requestId = void 0
    };
    Ic = function() {
        this.type = "QUEUE_ITEMS";
        this.sequenceNumber = this.items = this.requestId = void 0
    };
    Jc = function() {
        this.type = "QUEUE_ITEM_IDS";
        this.sequenceNumber = this.itemIds = this.requestId = void 0
    };
    Lc = function(a, b) {
        this.currentBreakTime = a;
        this.currentBreakClipTime = b;
        this.whenSkippable = this.breakClipId = this.breakId = void 0
    };
    Mc = function(a, b, c, d, e) {
        a = new Date(a, b, c);
        e = e || 0;
        return a.valueOf() + 864E5 * (((void 0 !== d ? d : 3) - e + 7) % 7 - ((a.getDay() + 6) % 7 - e + 7) % 7)
    };
    Nc = function() {};
    Pc = function(a) {
        if ("number" == typeof a) {
            var b = new Nc;
            b.j = a;
            var c = a;
            if (0 == c) c = "Etc/GMT";
            else {
                var d = ["Etc/GMT", 0 > c ? "-" : "+"];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                0 != c && d.push(":", _.wc(c, 2));
                c = d.join("")
            }
            b.o = c;
            c = a;
            0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, 0 != c && d.push(":", c), c = d.join(""));
            a = Oc(a);
            b.A = [c, c];
            b.h = {
                Ts: a,
                si: a
            };
            b.l = [];
            return b
        }
        b = new Nc;
        b.o = a.id;
        b.j = -a.std_offset;
        b.A = a.names;
        b.h = a.names_ext;
        b.l = a.transitions;
        return b
    };
    Oc = function(a) {
        var b = ["GMT"];
        b.push(0 >= a ? "+" : "-");
        a = Math.abs(a);
        b.push(_.wc(Math.floor(a / 60) % 100, 2), ":", _.wc(a % 60, 2));
        return b.join("")
    };
    Qc = function(a, b) {
        b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5;
        for (var c = 0; c < a.l.length && b >= a.l[c];) c += 2;
        return 0 == c ? 0 : a.l[c - 1]
    };
    Tc = function() {
        this.j = [];
        this.h = Rc;
        Sc(this, 6)
    };
    Uc = function(a) {
        return a.getHours ? a.getHours() : 0
    };
    Sc = function(a, b) {
        if (4 > b) var c = a.h.Dh[b];
        else if (8 > b) c = a.h.ti[b - 4];
        else if (12 > b) c = a.h.Ik[b - 8], c = c.replace("{1}", a.h.Dh[b - 8]), c = c.replace("{0}", a.h.ti[b - 8]);
        else {
            Sc(a, 10);
            return
        }
        b = c;
        for (Vc && (b = b.replace(/\u200f/g, "")); b;) {
            c = b;
            for (var d = 0; d < Wc.length; ++d) {
                var e = b.match(Wc[d]);
                if (e) {
                    var f = e[0];
                    b = b.substring(f.length);
                    0 == d && ("''" == f ? f = "'" : (f = f.substring(1, "'" == e[1] ? f.length - 1 : f.length), f = f.replace(/''/g, "'")));
                    a.j.push({
                        text: f,
                        type: d
                    });
                    break
                }
            }
            if (c === b) throw Error("Malformed pattern part: " + b);
        }
    };
    Xc = function(a, b) {
        b = String(b);
        a = a.h || Rc;
        if (void 0 !== a.wn) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = b.charCodeAt(d);
                c.push(48 <= e && 57 >= e ? String.fromCharCode(a.wn + e - 48) : b.charAt(d))
            }
            b = c.join("")
        }
        return b
    };
    Yc = function(a) {
        if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
    };
    Zc = function(a, b, c, d, e, f) {
        var g = b.length;
        switch (b.charAt(0)) {
            case "G":
                return c = 0 < d.getFullYear() ? 1 : 0, 4 <= g ? a.h.Qk[c] : a.h.Rk[c];
            case "y":
                return c = d.getFullYear(), 0 > c && (c = -c), 2 == g && (c %= 100), Xc(a, _.wc(c, g));
            case "Y":
                return c = (new Date(Mc(d.getFullYear(), d.getMonth(), d.getDate(), a.h.Ih, a.h.Hh))).getFullYear(), 0 > c && (c = -c), 2 == g && (c %= 100), Xc(a, _.wc(c, g));
            case "M":
                a: switch (c = d.getMonth(), g) {
                    case 5:
                        a = a.h.Hm[c];
                        break a;
                    case 4:
                        a = a.h.Yl[c];
                        break a;
                    case 3:
                        a = a.h.Xm[c];
                        break a;
                    default:
                        a = Xc(a, _.wc(c + 1, g))
                }
                return a;
            case "k":
                return Yc(e), Xc(a, _.wc(Uc(e) || 24, g));
            case "S":
                return Xc(a, (e.getMilliseconds() / 1E3).toFixed(Math.min(3, g)).substr(2) + (3 < g ? _.wc(0, g - 3) : ""));
            case "E":
                return c = d.getDay(), 4 <= g ? a.h.vn[c] : a.h.Zm[c];
            case "a":
                return Yc(e), g = Uc(e), a.h.rf[12 <= g && 24 > g ? 1 : 0];
            case "b":
                return Yc(e), g = Uc(e), a.h.rf[12 <= g && 24 > g ? 1 : 0];
            case "B":
                return Yc(e), g = Uc(e), a.h.rf[12 <= g && 24 > g ? 1 : 0];
            case "h":
                return Yc(e), Xc(a, _.wc(Uc(e) % 12 || 12, g));
            case "K":
                return Yc(e), Xc(a, _.wc(Uc(e) % 12, g));
            case "H":
                return Yc(e), Xc(a, _.wc(Uc(e), g));
            case "c":
                a: switch (c =
                    d.getDay(), g) {
                    case 5:
                        a = a.h.cn[c];
                        break a;
                    case 4:
                        a = a.h.fn[c];
                        break a;
                    case 3:
                        a = a.h.en[c];
                        break a;
                    default:
                        a = Xc(a, _.wc(c, 1))
                }
                return a;
            case "L":
                a: switch (c = d.getMonth(), g) {
                    case 5:
                        a = a.h.bn[c];
                        break a;
                    case 4:
                        a = a.h.an[c];
                        break a;
                    case 3:
                        a = a.h.dn[c];
                        break a;
                    default:
                        a = Xc(a, _.wc(c + 1, g))
                }
                return a;
            case "Q":
                return c = Math.floor(d.getMonth() / 3), 4 > g ? a.h.Ym[c] : a.h.Rm[c];
            case "d":
                return Xc(a, _.wc(d.getDate(), g));
            case "m":
                return Yc(e), Xc(a, _.wc(e.getMinutes(), g));
            case "s":
                return Yc(e), Xc(a, _.wc(e.getSeconds(), g));
            case "v":
                return a =
                    f || Pc(c.getTimezoneOffset()), a.o;
            case "V":
                return a = f || Pc(c.getTimezoneOffset()), 2 >= g ? a.o : 0 < Qc(a, c) ? void 0 !== a.h.Lk ? a.h.Lk : a.h.DST_GENERIC_LOCATION : void 0 !== a.h.si ? a.h.si : a.h.STD_GENERIC_LOCATION;
            case "w":
                return c = Mc(e.getFullYear(), e.getMonth(), e.getDate(), a.h.Ih, a.h.Hh), Xc(a, _.wc(Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1, g));
            case "z":
                return a = f || Pc(c.getTimezoneOffset()), 4 > g ? a.A[0 < Qc(a, c) ? 2 : 0] : a.A[0 < Qc(a, c) ? 3 : 1];
            case "Z":
                return b = f || Pc(c.getTimezoneOffset()),
                    4 > g ? (a = -(b.j - Qc(b, c)), g = [0 > a ? "-" : "+"], a = Math.abs(a), g.push(_.wc(Math.floor(a / 60) % 100, 2), _.wc(a % 60, 2)), a = g.join("")) : a = Xc(a, Oc(b.j - Qc(b, c))), a;
            default:
                return ""
        }
    };
    $c = function() {
        return Reflect.construct(HTMLElement, [], this.constructor)
    };
    ad = function() {
        var a = $c.call(this) || this;
        var b = a.attachShadow({
            mode: "open"
        });
        (0, cast.receiver.C.uk)(b);
        a.l = b.getElementById("title");
        a.o = b.getElementById("album");
        a.A = b.getElementById("artist");
        a.j = b.getElementById("album-art");
        a.B = b.getElementById("bg-image");
        a.h = b.getElementById("logo");
        return a
    };
    bd = function(a, b, c) {
        "none" === window.getComputedStyle(a.h, null).backgroundImage && cast.receiver.C.Y.bg(c).then(function() {
            a.h.textContent = "";
            a.h.style.backgroundImage = cast.receiver.C.Y.Ua(c);
            a.h.classList.add("app-icon")
        }).catch(function() {
            a.h.style.backgroundImage = "";
            a.h.classList.remove("app-icon");
            a.h.textContent = b
        })
    };
    cd = function() {
        this.title = void 0;
        this.items = [];
        this.targetAspectRatio = void 0
    };
    dd = function(a) {
        this.entity = a;
        this.mediaBadge = this.imageType = this.duration = this.image = this.subtitle = this.title = void 0
    };
    ed = function(a, b) {
        a: {
            if (b) {
                if (Qb(b, "video/")) {
                    b = "Video";
                    break a
                }
                if (Qb(b, "audio/")) {
                    b = "Audio";
                    break a
                }
            }
            b = void 0
        }
        if (void 0 !== b) {
            z("Cast.Shaka.Available" + b + "Bitrates", a.length);
            for (var c = 0; c < a.length; c++) z("Cast.Shaka.Available" + b + "Bitrate" + c, a[c])
        }
    };
    fd = function(a, b) {
        cast.platform.metrics.logBoolToUma(a, b)
    };
    hd = function(a, b) {
        b.split(",").forEach(function(c) {
            var d = gd[c];
            z(a, d ? d : _.Ob(c, "avc1") ? gd.avc1 : _.Ob(c, "mp4a.40") ? gd["mp4a.40"] : gd.Im)
        })
    };
    id = function(a) {
        cast.platform.metrics.logEventToUma(a)
    };
    z = function(a, b) {
        cast.platform.metrics.logIntToUma(a, b)
    };
    kd = function(a) {
        z("Cast.Controls.ButtonClick", jd[a] || 0)
    };
    ld = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    _.A = function() {
        this.G = this.G;
        this.D = this.D
    };
    _.md = function(a, b) {
        b = Qa(ld, b);
        a.G ? b() : (a.D || (a.D = []), a.D.push(b))
    };
    _.C = function(a, b) {
        this.type = a;
        this.h = this.target = b;
        this.defaultPrevented = !1
    };
    nd = function(a) {
        nd[" "](a);
        return a
    };
    _.od = function(a, b) {
        try {
            return nd(a[b]), !0
        } catch (c) {}
        return !1
    };
    qd = function(a, b) {
        var c = pd;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    rd = function() {
        var a = _.u.document;
        return a ? a.documentMode : void 0
    };
    _.td = function(a) {
        return qd(a, function() {
            return 0 <= _.Xb(sd, a)
        })
    };
    ud = function(a, b) {
        _.C.call(this, a ? a.type : "");
        this.relatedTarget = this.h = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.l = null;
        a && this.init(a, b)
    };
    _.wd = function(a) {
        return !(!a || !a[vd])
    };
    yd = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.xe = e;
        this.key = ++xd;
        this.Ld = this.fe = !1
    };
    zd = function(a) {
        a.Ld = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.xe = null
    };
    Ad = function(a) {
        this.src = a;
        this.listeners = {};
        this.h = 0
    };
    Bd = function(a, b) {
        var c = b.type;
        c in a.listeners && _.hb(a.listeners[c], b) && (zd(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.h--))
    };
    Cd = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Ld && f.listener == b && f.capture == !!c && f.xe == d) return e
        }
        return -1
    };
    _.Ed = function(a, b, c, d, e) {
        if (d && d.once) return _.Dd(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) _.Ed(a, b[f], c, d, e);
            return null
        }
        c = _.Fd(c);
        return _.wd(a) ? a.listen(b, c, _.Ja(d) ? !!d.capture : !!d, e) : Gd(a, b, c, !1, d, e)
    };
    Gd = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = _.Ja(e) ? !!e.capture : !!e,
            k = _.Hd(a);
        k || (a[Id] = k = new Ad(a));
        c = k.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = Jd();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Kd || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Ld(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Md++;
        return c
    };
    Jd = function() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = Nd;
        return a
    };
    _.Dd = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) _.Dd(a, b[f], c, d, e);
            return null
        }
        c = _.Fd(c);
        return _.wd(a) ? a.listenOnce(b, c, _.Ja(d) ? !!d.capture : !!d, e) : Gd(a, b, c, !0, d, e)
    };
    Od = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Od(a, b[f], c, d, e);
        else d = _.Ja(d) ? !!d.capture : !!d, c = _.Fd(c), _.wd(a) ? a.unlisten(b, c, d, e) : a && (a = _.Hd(a)) && (b = a.Ed(b, c, d, e)) && _.Pd(b)
    };
    _.Pd = function(a) {
        if ("number" !== typeof a && a && !a.Ld) {
            var b = a.src;
            if (_.wd(b)) Bd(b.B, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ld(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Md--;
                (c = _.Hd(b)) ? (Bd(c, a), 0 == c.h && (c.src = null, b[Id] = null)) : zd(a)
            }
        }
    };
    Ld = function(a) {
        return a in Qd ? Qd[a] : Qd[a] = "on" + a
    };
    Nd = function(a, b) {
        if (a.Ld) a = !0;
        else {
            b = new ud(b, this);
            var c = a.listener,
                d = a.xe || a.src;
            a.fe && _.Pd(a);
            a = c.call(d, b)
        }
        return a
    };
    _.Hd = function(a) {
        a = a[Id];
        return a instanceof Ad ? a : null
    };
    _.Fd = function(a) {
        if ("function" === typeof a) return a;
        a[Rd] || (a[Rd] = function(b) {
            return a.handleEvent(b)
        });
        return a[Rd]
    };
    _.Sd = function() {
        _.A.call(this);
        this.B = new Ad(this);
        this.fa = this;
        this.H = null
    };
    Td = function(a, b, c, d) {
        b = a.B.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Ld && g.capture == c) {
                var k = g.listener,
                    l = g.xe || g.src;
                g.fe && Bd(a.B, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    Ud = function(a) {
        _.Sd.call(this);
        this.l = a;
        this.j = 0;
        this.F = this.h = !1;
        this.o = !0;
        this.I = this.A = !1
    };
    Wd = function(a, b) {
        a.F = b;
        Vd(a)
    };
    Yd = function(a, b) {
        a.o = b;
        a.o && (a.h = !1, Xd(a));
        Vd(a)
    };
    Zd = function(a) {
        var b = !a.F && !a.o && !a.A;
        return a.I ? b : a.h && b
    };
    Vd = function(a) {
        Zd(a) || clearTimeout(a.j)
    };
    Xd = function(a) {
        a.dispatchEvent(new _.C("EXPIRED"))
    };
    $d = function(a) {
        clearTimeout(a.j);
        a.j = setTimeout(function() {
            Zd(a) && a.dispatchEvent(new _.C("EXPIRED"))
        }, a.l)
    };
    ae = function(a, b) {
        this.name = a;
        this.value = b
    };
    be = function() {
        this.clear()
    };
    de = function(a, b, c) {
        this.h = void 0;
        this.reset(a || ce, b, c, void 0, void 0)
    };
    ee = function(a, b) {
        this.level = null;
        this.j = [];
        this.h = (void 0 === b ? null : b) || null;
        this.children = [];
        this.bc = {
            h: function() {
                return a
            }
        }
    };
    fe = function(a) {
        if (a.level) return a.level;
        if (a.h) return fe(a.h);
        _.Ya("Root logger has no level set.");
        return ce
    };
    ge = function(a, b) {
        for (; a;) a.j.forEach(function(c) {
            c(b)
        }), a = a.h
    };
    ie = function() {
        this.entries = {};
        var a = new ee("");
        a.level = he;
        this.entries[""] = a
    };
    je = function(a, b, c) {
        var d = a.entries[b];
        if (d) return void 0 !== c && (d.level = c), d;
        d = je(a, b.substr(0, b.lastIndexOf(".")));
        var e = new ee(b, d);
        a.entries[b] = e;
        d.children.push(e);
        void 0 !== c && (e.level = c);
        return e
    };
    le = function() {
        ke || (ke = new ie);
        return ke
    };
    _.D = function(a) {
        return je(le(), a, void 0).bc
    };
    ne = function(a, b, c, d) {
        var e;
        if (e = a)
            if (e = a && b) {
                e = b.value;
                var f = a ? fe(je(le(), a.h())) : ce;
                e = e >= f.value
            }
        e && (b = b || ce, e = je(le(), a.h()), "function" === typeof c && (c = c()), me || (me = new be), a = new de(b, c, a.h()), a.h = d, ge(e, a))
    };
    _.E = function(a, b, c) {
        a && ne(a, oe, b, c)
    };
    _.H = function(a, b, c) {
        a && ne(a, pe, b, c)
    };
    _.I = function(a, b) {
        a && ne(a, qe, b, void 0)
    };
    _.se = function(a, b) {
        a && ne(a, re, b, void 0)
    };
    te = function(a, b) {
        this.o = a;
        this.l = b;
        this.j = 0;
        this.h = null
    };
    ue = function(a, b) {
        a.l(b);
        100 > a.j && (a.j++, b.next = a.h, a.h = b)
    };
    ve = function(a, b, c) {
        return a + c * (b - a)
    };
    _.we = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    xe = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    };
    ye = function() {
        var a = _.u.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.y("Presto") && (a = function() {
            var e = _.we(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = (0, _.Pa)(function(l) {
                    if (("*" == k || l.origin == k) && l.data == g) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, k)
                }
            }
        });
        if ("undefined" !== typeof a && !_.y("Trident") && !_.y("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Li;
                    c.Li = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Li: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            _.u.setTimeout(e, 0)
        }
    };
    ze = function(a) {
        _.u.setTimeout(function() {
            throw a;
        }, 0)
    };
    Ae = function() {
        this.j = this.h = null
    };
    Be = function() {
        this.next = this.scope = this.h = null
    };
    Ge = function(a, b) {
        Ce || De();
        Ee || (Ce(), Ee = !0);
        Fe.add(a, b)
    };
    De = function() {
        if (_.u.Promise && _.u.Promise.resolve) {
            var a = _.u.Promise.resolve(void 0);
            Ce = function() {
                a.then(He)
            }
        } else Ce = function() {
            var b = He;
            "function" !== typeof _.u.setImmediate || _.u.Window && _.u.Window.prototype && !_.y("Edge") && _.u.Window.prototype.setImmediate == _.u.setImmediate ? (Ie || (Ie = ye()), Ie(b)) : _.u.setImmediate(b)
        }
    };
    He = function() {
        for (var a; a = Fe.remove();) {
            try {
                a.h.call(a.scope)
            } catch (b) {
                ze(b)
            }
            ue(Je, a)
        }
        Ee = !1
    };
    Me = function(a) {
        this.h = 0;
        this.D = void 0;
        this.o = this.j = this.l = null;
        this.A = this.B = !1;
        if (a != Fa) try {
            var b = this;
            a.call(void 0, function(c) {
                Ke(b, 2, c)
            }, function(c) {
                if (!(c instanceof Le)) try {
                    if (c instanceof Error) throw c;
                    throw Error("Promise rejected.");
                } catch (d) {}
                Ke(b, 3, c)
            })
        } catch (c) {
            Ke(this, 3, c)
        }
    };
    Ne = function() {
        this.next = this.context = this.onRejected = this.l = this.h = null;
        this.j = !1
    };
    Pe = function(a, b, c) {
        var d = Oe.get();
        d.l = a;
        d.onRejected = b;
        d.context = c;
        return d
    };
    _.J = function(a) {
        if (a instanceof Me) return a;
        var b = new Me(Fa);
        Ke(b, 2, a);
        return b
    };
    Qe = function(a) {
        return new Me(function(b, c) {
            c(a)
        })
    };
    Se = function(a, b, c) {
        Re(a, b, c, null) || Ge(Qa(b, a))
    };
    Te = function(a) {
        return new Me(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(m, n) {
                        d--;
                        e[m] = n;
                        0 == d && b(e)
                    }, g = function(m) {
                        c(m)
                    }, k = 0, l; k < a.length; k++) l = a[k], Se(l, Qa(f, k), g);
            else b(e)
        })
    };
    Ue = function(a) {
        return new Me(function(b) {
            var c = a.length,
                d = [];
            if (c)
                for (var e = function(k, l, m) {
                        c--;
                        d[k] = l ? {
                            hg: !0,
                            value: m
                        } : {
                            hg: !1,
                            reason: m
                        };
                        0 == c && b(d)
                    }, f = 0, g; f < a.length; f++) g = a[f], Se(g, Qa(e, f, !0), Qa(e, f, !1));
            else b(d)
        })
    };
    We = function() {
        var a, b, c = new Me(function(d, e) {
            a = d;
            b = e
        });
        return new Ve(c, a, b)
    };
    Ye = function(a, b) {
        b = Pe(b, b, void 0);
        b.j = !0;
        Xe(a, b);
        return a
    };
    $e = function(a, b) {
        return Ze(a, null, b, void 0)
    };
    af = function(a, b) {
        if (0 == a.h)
            if (a.l) {
                var c = a.l;
                if (c.j) {
                    for (var d = 0, e = null, f = null, g = c.j; g && (g.j || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.h && 1 == d ? af(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : bf(c), cf(c, e, 3, b)))
                }
                a.l = null
            } else Ke(a, 3, b)
    };
    Xe = function(a, b) {
        a.j || 2 != a.h && 3 != a.h || df(a);
        a.o ? a.o.next = b : a.j = b;
        a.o = b
    };
    Ze = function(a, b, c, d) {
        var e = Pe(null, null, null);
        e.h = new Me(function(f, g) {
            e.l = b ? function(k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    g(m)
                }
            } : f;
            e.onRejected = c ? function(k) {
                try {
                    var l = c.call(d, k);
                    void 0 === l && k instanceof Le ? g(k) : f(l)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.h.l = a;
        Xe(a, e);
        return e.h
    };
    Ke = function(a, b, c) {
        0 == a.h && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.h = 1, Re(c, a.F, a.H, a) || (a.D = c, a.h = b, a.l = null, df(a), 3 != b || c instanceof Le || ef(a, c)))
    };
    Re = function(a, b, c, d) {
        if (a instanceof Me) return Xe(a, Pe(b || Fa, c || null, d)), !0;
        if (a) try {
            var e = !!a.$goog_Thenable
        } catch (g) {
            e = !1
        } else e = !1;
        if (e) return a.then(b, c, d), !0;
        if (_.Ja(a)) try {
            var f = a.then;
            if ("function" === typeof f) return ff(a, f, b, c, d), !0
        } catch (g) {
            return c.call(d, g), !0
        }
        return !1
    };
    ff = function(a, b, c, d, e) {
        function f(l) {
            k || (k = !0, d.call(e, l))
        }

        function g(l) {
            k || (k = !0, c.call(e, l))
        }
        var k = !1;
        try {
            b.call(a, g, f)
        } catch (l) {
            f(l)
        }
    };
    df = function(a) {
        a.B || (a.B = !0, Ge(a.G, a))
    };
    bf = function(a) {
        var b = null;
        a.j && (b = a.j, a.j = b.next, b.next = null);
        a.j || (a.o = null);
        return b
    };
    cf = function(a, b, c, d) {
        if (3 == c && b.onRejected && !b.j)
            for (; a && a.A; a = a.l) a.A = !1;
        if (b.h) b.h.l = null, gf(b, c, d);
        else try {
            b.j ? b.l.call(b.context) : gf(b, c, d)
        } catch (e) {
            hf.call(null, e)
        }
        ue(Oe, b)
    };
    gf = function(a, b, c) {
        2 == b ? a.l.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
    };
    ef = function(a, b) {
        a.A = !0;
        Ge(function() {
            a.A && hf.call(null, b)
        })
    };
    Le = function(a) {
        Wa.call(this, a)
    };
    Ve = function(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    };
    _.jf = function(a, b, c) {
        if ("function" === typeof a) c && (a = (0, _.Pa)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, _.Pa)(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : _.u.setTimeout(a, b || 0)
    };
    kf = function(a) {
        var b = null;
        return $e(new Me(function(c, d) {
            b = _.jf(function() {
                c(void 0)
            }, a); - 1 == b && d(Error("Failed to schedule timer."))
        }), function(c) {
            _.u.clearTimeout(b);
            throw c;
        })
    };
    mf = function(a) {
        _.Sd.call(this);
        a || (a = {});
        this.l = 0 != a.En;
        this.j = a.mt || lf;
        this.o = a.binaryType || "blob";
        this.h = this.j(this.Kd)
    };
    lf = function(a) {
        return Math.min(1E3 * Math.pow(2, a), 6E4)
    };
    nf = function(a, b, c) {
        _.C.call(this, "a");
        this.code = a;
        this.reason = b;
        this.wasClean = c
    };
    of = function(a) {
        _.C.call(this, "c");
        this.message = a
    };
    pf = function(a) {
        _.C.call(this, "b");
        this.data = a
    };
    qf = function() {
        this.j = new _.Sd;
        this.h = !1
    };
    rf = function(a, b) {
        b = "string" === typeof b ? new _.C(b) : b;
        b.target = a;
        a.j.dispatchEvent(b)
    };
    Af = function() {
        this.h = null
    };
    Bf = function(a) {
        a.h = a.h || cast.receiver.platform.Ja("receiver-flags") || null;
        return a.h
    };
    Cf = function(a, b) {
        a = Bf(a);
        return !(!a || !a[b])
    };
    Df = function() {
        var a = cast.receiver.Bb.L();
        return Cf(a, "enable_dpad_ui")
    };
    Ef = function() {
        var a = cast.receiver.Bb.L();
        return Cf(a, "enable_new_media_controls_overlay")
    };
    Ff = function() {
        var a = cast.receiver.Bb.L();
        return Cf(a, "enable_media_browse_suggestion_chips")
    };
    Gf = function() {
        var a = cast.receiver.Bb.L();
        return Cf(a, "enable_shaka_timeout_interval")
    };
    Hf = function() {
        var a = cast.receiver.Bb.L();
        return (a = Bf(a)) && a.shaka_version_for_s_release || null
    };
    _.Jf = function(a, b) {
        return /-[a-z]/.test(b) ? !1 : If && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + yc(b)) : !!a.getAttribute("data-" + yc(b))
    };
    K = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    Of = function() {
        var a = this;
        this.h = [];
        this.B = function() {};
        this.l = _.u.document;
        this.o = this.j = null;
        this.A = function(b) {
            Kf(a, b.target)
        };
        this.D = function(b) {
            Lf(a);
            a.j || (a.B(), _.I(Mf, "Focus lost, " + Nf(b.relatedTarget ? b.relatedTarget : null)))
        }
    };
    Pf = function(a, b) {
        a.l && (a.l.removeEventListener("focusin", a.A), a.l.removeEventListener("focusout", a.D));
        a.l = b;
        b.addEventListener("focusin", a.A);
        b.addEventListener("focusout", a.D)
    };
    Qf = function(a, b) {
        if (b) {
            if (If && a.dataset) a.dataset.focusable = "";
            else {
                if (/-[a-z]/.test("focusable")) throw Error('"focusable" is not a valid dataset property name.');
                a.setAttribute("data-" + yc("focusable"), "")
            }
            a.setAttribute("tabindex", -1)
        } else !/-[a-z]/.test("focusable") && (If && a.dataset ? _.Jf(a, "focusable") && delete a.dataset.focusable : a.removeAttribute("data-" + yc("focusable"))), a.removeAttribute("tabindex")
    };
    Rf = function(a) {
        return a ? "function" === typeof a.Ji ? a.Ji() : "none" != a.style.display && !a.disabled && a.hasAttribute("tabindex") && _.Jf(a, "focusable") : !1
    };
    Kf = function(a, b) {
        b.classList.add("focused");
        a.j !== b ? _.H(Mf, "Wrong element focused: " + Nf(a.j) + ", " + Nf(b)) : a.o = b;
        a.j = null;
        for (var c = []; b;) c.unshift(b), b = b.parentElement && b.parentElement.closest("[data-focusable]") || null;
        Lf(a);
        a.h = c;
        a.h.forEach(function(d) {
            d.classList.add("focused")
        })
    };
    Lf = function(a) {
        a.h.forEach(function(b) {
            b.classList.remove("focused")
        });
        a.h = []
    };
    Nf = function(a) {
        if (!a) return "no element";
        var b = a.tagName.toLowerCase();
        a.id && (b = [b, a.id].join("#"));
        (a = [].join.call(a.classList, ".")) && (b = [b, a].join("."));
        return b
    };
    Uf = function() {
        this.D = 40;
        this.h = 1;
        this.j = 3;
        this.G = this.l = 0;
        this.P = !1;
        this.M = this.J = "";
        this.F = Sf.ci;
        this.H = "";
        this.o = 1;
        this.B = !1;
        this.A = [];
        this.I = this.N = !1;
        var a = Sf.Jk;
        a.replace(/ /g, "\u00a0");
        var b = [0];
        this.J = Tf(this, a, b);
        for (var c = b[0], d = -1, e = 0, f = 0, g = 0, k = -1, l = a.length, m = !0; b[0] < l && m; b[0]++) switch (a.charAt(b[0])) {
            case "#":
                0 < f ? g++ : e++;
                0 <= k && 0 > d && k++;
                break;
            case "0":
                if (0 < g) throw Error('Unexpected "0" in pattern "' + a + '"');
                f++;
                0 <= k && 0 > d && k++;
                break;
            case ",":
                0 < k && this.A.push(k);
                k = 0;
                break;
            case ".":
                if (0 <= d) throw Error('Multiple decimal separators in pattern "' +
                    a + '"');
                d = e + f + g;
                break;
            case "E":
                if (this.I) throw Error('Multiple exponential symbols in pattern "' + a + '"');
                this.I = !0;
                this.G = 0;
                b[0] + 1 < l && "+" == a.charAt(b[0] + 1) && (b[0]++, this.P = !0);
                for (; b[0] + 1 < l && "0" == a.charAt(b[0] + 1);) b[0]++, this.G++;
                if (1 > e + f || 1 > this.G) throw Error('Malformed exponential pattern "' + a + '"');
                m = !1;
                break;
            default:
                b[0]--, m = !1
        }
        0 == f && 0 < e && 0 <= d && (f = d, 0 == f && f++, g = e - f, e = f - 1, f = 1);
        if (0 > d && 0 < g || 0 <= d && (d < e || d > e + f) || 0 == k) throw Error('Malformed pattern "' + a + '"');
        g = e + f + g;
        this.j = 0 <= d ? g - d : 0;
        0 <= d && (this.l = e +
            f - d, 0 > this.l && (this.l = 0));
        this.h = (0 <= d ? d : g) - e;
        this.I && (this.D = e + this.h, 0 == this.j && 0 == this.h && (this.h = 1));
        this.A.push(Math.max(0, k));
        this.N = 0 == d || d == g;
        c = b[0] - c;
        this.M = Tf(this, a, b);
        b[0] < a.length && ";" == a.charAt(b[0]) ? (b[0]++, 1 != this.o && (this.B = !0), this.F = Tf(this, a, b), b[0] += c, this.H = Tf(this, a, b)) : (this.F += this.J, this.H += this.M)
    };
    Wf = function(a, b, c, d) {
        if (a.l > a.j) throw Error("Min value must be less than max value");
        d || (d = []);
        var e = Vf(b, a.j);
        e = Math.round(e);
        if (isFinite(e)) {
            var f = Math.floor(Vf(e, -a.j));
            b = Math.floor(e - Vf(f, a.j))
        } else f = b, b = 0;
        e = b;
        var g = f;
        f = e;
        var k = 0 < a.l || 0 < f || !1;
        e = a.l;
        k && (e = a.l);
        var l = "";
        for (b = g; 1E20 < b;) l = "0" + l, b = Math.round(Vf(b, -1));
        l = b + l;
        var m = Sf.Kk;
        b = Sf.ui.charCodeAt(0);
        var n = l.length,
            t = 0;
        if (0 < g || 0 < c) {
            for (g = n; g < c; g++) d.push(String.fromCharCode(b));
            if (2 <= a.A.length)
                for (c = 1; c < a.A.length; c++) t += a.A[c];
            c = n - t;
            if (0 <
                c) {
                g = a.A;
                t = n = 0;
                for (var v, x = Sf.Jh, B = l.length, G = 0; G < B; G++)
                    if (d.push(String.fromCharCode(b + 1 * Number(l.charAt(G)))), 1 < B - G)
                        if (v = g[t], G < c) {
                            var W = c - G;
                            (1 === v || 0 < v && 1 === W % v) && d.push(x)
                        } else t < g.length && (G === c ? t += 1 : v === G - c - n + 1 && (d.push(x), n += v, t += 1))
            } else {
                c = l;
                l = a.A;
                g = Sf.Jh;
                v = c.length;
                x = [];
                for (n = l.length - 1; 0 <= n && 0 < v; n--) {
                    t = l[n];
                    for (B = 0; B < t && 0 <= v - B - 1; B++) x.push(String.fromCharCode(b + 1 * Number(c.charAt(v - B - 1))));
                    v -= t;
                    0 < v && x.push(g)
                }
                d.push.apply(d, x.reverse())
            }
        } else k || d.push(String.fromCharCode(b));
        (a.N || k) && d.push(m);
        k = String(f);
        f = k.split("e+");
        if (2 == f.length) {
            if (k = parseFloat(f[0])) {
                m = k;
                if (isFinite(m)) {
                    for (c = 0; 1 <= (m /= 10);) c++;
                    m = c
                } else m = 0 < m ? m : 0;
                m = 0 - m - 1;
                k = -1 > m ? k && isFinite(k) ? Vf(Math.round(Vf(k, -1)), 1) : k : k && isFinite(k) ? Vf(Math.round(Vf(k, m)), -m) : k
            }
            k = String(k);
            k = k.replace(".", "");
            k += vc("0", parseInt(f[1], 10) - k.length + 1)
        }
        a.j + 1 > k.length && (k = "1" + vc("0", a.j - k.length) + k);
        for (a = k.length;
            "0" == k.charAt(a - 1) && a > e + 1;) a--;
        for (e = 1; e < a; e++) d.push(String.fromCharCode(b + 1 * Number(k.charAt(e))))
    };
    Xf = function(a, b, c) {
        c.push(Sf.Tk);
        0 > b ? (b = -b, c.push(Sf.ci)) : a.P && c.push(Sf.Nm);
        b = "" + b;
        for (var d = Sf.ui, e = b.length; e < a.G; e++) c.push(d);
        c.push(b)
    };
    Tf = function(a, b, c) {
        for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
            var g = b.charAt(c[0]);
            if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
            else if (e) d += g;
            else switch (g) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += Sf.Gh) : (g = Sf.Gh, d += g in Yf ? Yf[g][1] : g);
                    break;
                case "%":
                    if (!a.B && 1 != a.o) throw Error("Too many percent/permill");
                    if (a.B && 100 != a.o) throw Error("Inconsistent use of percent/permill characters");
                    a.o = 100;
                    a.B = !1;
                    d += Sf.Jm;
                    break;
                case "\u2030":
                    if (!a.B && 1 != a.o) throw Error("Too many percent/permill");
                    if (a.B && 1E3 != a.o) throw Error("Inconsistent use of percent/permill characters");
                    a.o = 1E3;
                    a.B = !1;
                    d += Sf.Km;
                    break;
                default:
                    d += g
            }
        }
        return d
    };
    Vf = function(a, b) {
        if (!a || !isFinite(a) || 0 == b) return a;
        a = String(a).split("e");
        return parseFloat(a[0] + "e" + (parseInt(a[1] || 0, 10) + b))
    };
    Zf = function(a) {
        return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
    };
    $f = function(a, b) {
        if (void 0 === b) {
            b = a + "";
            var c = b.indexOf(".");
            b = Math.min(-1 === c ? 0 : b.length - c - 1, 3)
        }
        return 1 == (a | 0) && 0 == b ? "one" : "other"
    };
    eg = function(a) {
        this.l = a;
        this.j = this.h = this.A = null;
        a = Sf;
        var b = ag;
        if (bg !== a || cg !== b) bg = a, cg = b, dg = new Uf;
        this.B = dg
    };
    fg = function(a, b, c, d, e) {
        for (var f = 0; f < b.length; f++) switch (b[f].type) {
            case 4:
                e.push(b[f].value);
                break;
            case 3:
                var g = b[f].value,
                    k = a,
                    l = e,
                    m = c[g];
                void 0 === m ? l.push("Undefined parameter - " + g) : (k.h.push(m), l.push(k.o(k.h)));
                break;
            case 2:
                g = b[f].value;
                k = a;
                l = c;
                m = d;
                var n = e,
                    t = g.ee;
                void 0 === l[t] ? n.push("Undefined parameter - " + t) : (t = g[l[t]], void 0 === t && (t = g.other), fg(k, t, l, m, n));
                break;
            case 0:
                g = b[f].value;
                gg(a, g, c, hg, d, e);
                break;
            case 1:
                g = b[f].value;
                gg(a, g, c, ig, d, e);
                break;
            default:
                _.Ya("Unrecognized block type: " +
                    b[f].type)
        }
    };
    gg = function(a, b, c, d, e, f) {
        var g = b.ee,
            k = b.Gi,
            l = +c[g];
        isNaN(l) ? f.push("Undefined or invalid parameter - " + g) : (k = l - k, g = b[c[g]], void 0 === g && (d = d(Math.abs(k)), g = b[d], void 0 === g && (g = b.other)), b = [], fg(a, g, c, e, b), c = b.join(""), e ? f.push(c) : (a = a.B.format(k), f.push(c.replace(/#/g, a))))
    };
    lg = function(a, b) {
        var c = a.A,
            d = (0, _.Pa)(a.o, a);
        b = b.replace(jg, function() {
            c.push("'");
            return d(c)
        });
        return b = b.replace(kg, function(e, f) {
            c.push(f);
            return d(c)
        })
    };
    mg = function(a) {
        var b = 0,
            c = [],
            d = [],
            e = /[{}]/g;
        e.lastIndex = 0;
        for (var f; f = e.exec(a);) {
            var g = f.index;
            "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
                type: 1
            }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
                type: 0,
                value: b
            }), b = g + 1), c.push("{"))
        }
        b = a.substring(b);
        "" != b && d.push({
            type: 0,
            value: b
        });
        return d
    };
    tg = function(a, b) {
        var c = [];
        b = mg(b);
        for (var d = 0; d < b.length; d++) {
            var e = {};
            if (0 == b[d].type) e.type = 4, e.value = b[d].value;
            else if (1 == b[d].type) {
                var f = b[d].value;
                switch (ng.test(f) ? 0 : og.test(f) ? 1 : pg.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                    case 2:
                        e.type = 2;
                        e.value = qg(a, b[d].value);
                        break;
                    case 0:
                        e.type = 0;
                        e.value = rg(a, b[d].value);
                        break;
                    case 1:
                        e.type = 1;
                        e.value = sg(a, b[d].value);
                        break;
                    case 3:
                        e.type = 3;
                        e.value = b[d].value;
                        break;
                    default:
                        _.Ya("Unknown block type for pattern: " + b[d].value)
                }
            } else _.Ya("Unknown part of the pattern.");
            c.push(e)
        }
        return c
    };
    qg = function(a, b) {
        var c = "";
        b = b.replace(pg, function(k, l) {
            c = l;
            return ""
        });
        var d = {};
        d.ee = c;
        b = mg(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            var g;
            1 == b[e].type ? g = tg(a, b[e].value) : _.Ya("Expected block type.");
            d[f.replace(/\s/g, "")] = g;
            e++
        }
        return d
    };
    rg = function(a, b) {
        var c = "",
            d = 0;
        b = b.replace(ng, function(l, m, n) {
            c = m;
            n && (d = parseInt(n, 10));
            return ""
        });
        var e = {};
        e.ee = c;
        e.Gi = d;
        b = mg(b);
        for (var f = 0; f < b.length;) {
            var g = b[f].value;
            f++;
            var k;
            1 == b[f].type ? k = tg(a, b[f].value) : _.Ya("Expected block type.");
            e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = k;
            f++
        }
        return e
    };
    sg = function(a, b) {
        var c = "";
        b = b.replace(og, function(k, l) {
            c = l;
            return ""
        });
        var d = {};
        d.ee = c;
        d.Gi = 0;
        b = mg(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            if (1 == b[e].type) var g = tg(a, b[e].value);
            else _.Ya("Expected block type.");
            d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
            e++
        }
        return d
    };
    ug = function() {
        var a = $c.call(this) || this;
        (0, cast.receiver.C.vk)(a);
        a.M = Of.L();
        a.G = Ud.L();
        a.l = !1;
        a.A = function() {};
        a.D = 0;
        a.o = a.querySelector("#break-countdown");
        a.I = a.o.querySelector("#break-countdown-text");
        a.B = a.o.querySelector("#break-clip-index-text");
        a.h = a.querySelector("#break-skip-btn");
        a.j = a.querySelector("#break-skip-btn-countdown");
        a.J = a.j.querySelector("#skip-ad-btn-countdown-text");
        a.o.querySelector("#ad-label").textContent = cast.receiver.V.fi;
        a.h.querySelector("#skip-ad-btn-text").textContent =
            cast.receiver.V.Bm;
        a.h.addEventListener("touchstart", function(b) {
            b.stopPropagation()
        });
        a.h.addEventListener("click", function() {
            kd("SKIP_AD");
            a.A()
        });
        Df() && a.h.addEventListener("keydown", function(b) {
            "Enter" === b.key && (kd("SKIP_AD"), $d(a.G), a.A(), b.stopPropagation())
        });
        Qf(a.h, !1);
        K(a, !1);
        K(a.h, !1);
        K(a.j, !1);
        return a
    };
    vg = function(a) {
        var b = a.H - a.F;
        0 > b && (b = 0);
        b = cast.receiver.C.Y.Na(b);
        1 < a.D && (b = " (" + b + ")");
        a.I.textContent = b
    };
    wg = function(a, b, c) {
        a.D = c;
        0 < c ? (a.B.textContent = 1 < c ? cast.receiver.V.ej(b, c) : "", vg(a)) : a.B.textContent = ""
    };
    zg = function() {
        this.h = null;
        cast.__platform__ && cast.__platform__.channel ? (_.I(xg, "Opening platform websocket"), yg(this, new qf)) : (_.I(xg, "Opening net websocket"), yg(this, new mf({
            En: !0
        })));
        this.j = new _.Sd
    };
    yg = function(a, b) {
        a.h && a.h.dispose();
        a.h = b;
        a.h.addEventListener("d", a.rl.bind(a));
        a.h.addEventListener("a", a.nl.bind(a));
        a.h.addEventListener("b", a.pl.bind(a));
        a.h.addEventListener("c", a.ql.bind(a))
    };
    Bg = function(a, b) {
        _.se(xg, "IpcChannel " + b);
        b = new Ag(cast.receiver.oa.ce, cast.receiver.oa.Xa, JSON.stringify({
            type: b
        }));
        b.target = a;
        a.j.dispatchEvent(b)
    };
    Ag = function(a, b, c) {
        _.C.call(this, a);
        this.senderId = b;
        this.data = c
    };
    Cg = function(a, b, c, d) {
        _.A.call(this);
        this.j = a;
        this.B = b;
        this.F = !1;
        this.J = [];
        this.o = d || "STRING";
        this.A = new _.Sd;
        this.l = null;
        this.H = this.oo;
        this.M = this.On;
        this.h = {};
        a = _.q(c);
        for (b = a.next(); !b.done; b = a.next()) this.h[b.value] = null;
        this.I = this.Kh.bind(this);
        this.B.addEventListener(this.j, this.I)
    };
    Dg = function(a, b, c, d) {
        a.Kh(new Ag(b, c, d))
    };
    Eg = function(a, b) {
        a.J.push(b)
    };
    Fg = function(a, b) {
        b.target = a;
        return a.A.dispatchEvent(b)
    };
    Gg = function(a, b, c) {
        _.C.call(this, a);
        this.senderId = b;
        this.data = c
    };
    Hg = function(a, b) {
        this.h = a[_.u.Symbol.iterator]();
        this.j = b;
        this.l = 0
    };
    Ig = function(a, b) {
        return new Hg(a, b)
    };
    Jg = function() {};
    Og = function(a) {
        if (a instanceof Kg || a instanceof Lg || a instanceof Mg) return a;
        if ("function" == typeof a.Qe) return new Kg(function() {
            return Ng(a)
        });
        if ("function" == typeof a[Symbol.iterator]) return new Kg(function() {
            return a[Symbol.iterator]()
        });
        if ("function" == typeof a.Jc) return new Kg(function() {
            return Ng(a.Jc())
        });
        throw Error("Not an iterator or iterable.");
    };
    Ng = function(a) {
        if (!(a instanceof Jg)) return a;
        var b = !1;
        return {
            next: function() {
                for (var c; !b;) try {
                    c = a.Qe();
                    break
                } catch (d) {
                    if (d !== Pg) throw d;
                    b = !0
                }
                return {
                    value: c,
                    done: b
                }
            }
        }
    };
    Kg = function(a) {
        this.h = a
    };
    Lg = function(a) {
        this.h = a
    };
    Mg = function(a) {
        Kg.call(this, function() {
            return a
        });
        this.l = a
    };
    _.Qg = function(a, b) {
        this.j = {};
        this.h = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof _.Qg)
                for (c = a.og(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    _.Sg = function(a) {
        if (a.size != a.h.length) {
            for (var b = 0, c = 0; b < a.h.length;) {
                var d = a.h[b];
                Rg(a.j, d) && (a.h[c++] = d);
                b++
            }
            a.h.length = c
        }
        if (a.size != a.h.length) {
            var e = {};
            for (c = b = 0; b < a.h.length;) d = a.h[b], Rg(e, d) || (a.h[c++] = d, e[d] = 1), b++;
            a.h.length = c
        }
    };
    Rg = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Vg = function() {
        this.o = _.Tg.L();
        this.j = null;
        this.B = 0;
        this.l = null;
        this.h = new _.Qg;
        this.G = this.F.bind(this);
        this.A = Ug(this.o, cast.receiver.vc.$k, "JSON");
        this.A.l = this.D.bind(this);
        for (var a = _.q([cast.receiver.Eb.Qb, cast.receiver.media.eb]), b = a.next(); !b.done; b = a.next())(b = this.o.h[b.value] || null) && Eg(b, this.G)
    };
    eh = function(a, b) {
        var c = 5;
        b && a.j && a.j[b] && 0 < a.j[b] && (c = Math.min(a.j[b], 2E3));
        return c
    };
    hh = function(a, b, c, d, e, f) {
        _.E(fh, b);
        a.A.send(c, new gh(d, e || "INJECT_ERROR", void 0 !== f ? JSON.stringify(f) : void 0));
        "WRAPPED_ERROR" == e ? cast.receiver.Wa.Jg(f && f.code || "") : cast.receiver.Wa.Jg("INJECT_ERROR")
    };
    jh = function(a, b, c, d) {
        a.A.send(b, new ih(c, d));
        cast.receiver.Wa.Jg("SUCCESS")
    };
    kh = function(a, b, c) {
        this.type = a;
        this.requestId = b;
        this.data = c
    };
    ih = function(a, b) {
        kh.call(this, "SUCCESS", a, b)
    };
    gh = function(a, b, c) {
        kh.call(this, "ERROR", a, c);
        this.code = b
    };
    lh = function() {
        var a = _.u.navigator.userAgent.match(/CrKey\/(\d+)\.(\d+)\.[\d]{6}/);
        return {
            majorVersion: a && parseFloat(a[1]) || -1,
            minorVersion: a && parseFloat(a[2]) || -1
        }
    };
    mh = function() {
        this.h = _.Ra()
    };
    oh = function(a) {
        this.o = a || "";
        nh || (nh = new mh);
        this.A = nh
    };
    ph = function(a) {
        return 10 > a ? "0" + a : String(a)
    };
    qh = function(a) {
        oh.call(this, a)
    };
    rh = function(a, b) {
        var c = [];
        c.push(a.o, " ");
        if (a.j) {
            var d = new Date(b.l);
            c.push("[", ph(d.getFullYear() - 2E3) + ph(d.getMonth() + 1) + ph(d.getDate()) + " " + ph(d.getHours()) + ":" + ph(d.getMinutes()) + ":" + ph(d.getSeconds()) + "." + ph(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        d = c.push;
        var e = a.A.get();
        e = (b.l - e) / 1E3;
        var f = e.toFixed(3),
            g = 0;
        if (1 > e) g = 2;
        else
            for (; 100 > e;) g++, e *= 10;
        for (; 0 < g--;) f = " " + f;
        d.call(c, "[", f, "s] ");
        c.push("[", b.j, "] ");
        c.push(b.A);
        a.l && (b = b.h, void 0 !== b && c.push("\n", b instanceof Error ? b.message : String(b)));
        a.h && c.push("\n");
        return c.join("")
    };
    sh = function() {
        this.A = (0, _.Pa)(this.o, this);
        this.h = new qh;
        this.h.j = !1;
        this.h.l = !1;
        this.l = this.h.h = !1;
        this.j = {}
    };
    th = function(a, b, c, d) {
        if (a[b]) a[b](c, void 0 === d ? "" : d);
        else a.log(c, void 0 === d ? "" : d)
    };
    _.Tg = function() {
        _.A.call(this);
        uh || (uh = new sh);
        if (uh) {
            var a = uh;
            if (1 != a.l) {
                var b = je(le(), "").bc,
                    c = a.A;
                b && je(le(), b.h()).j.push(c);
                a.l = !0
            }
        }
        this.config_ = _.vb(vh);
        this.W = !1;
        this.M = new zg;
        this.o = {};
        this.J = new _.Sd;
        this.l = new Cg(cast.receiver.oa.ce, this.M, _.ob(this.o), "JSON");
        _.md(this, this.l);
        this.j = this.H = this.N = null;
        this.ha = !1;
        this.B = this.F = null;
        this.T = !0;
        this.A = "notstarted";
        this.sa = null;
        this.ma = 0;
        this.h = {};
        this.X = this.P = this.aa = this.$ = this.Z = null;
        this.pa = this.ja = this.fa = !1;
        this.l.addEventListener(cast.receiver.oa.Xa,
            this.vq.bind(this));
        _.Ed(window, "unload", this.Rg, !1, this);
        _.Ed(document, "visibilitychange", this.yj, !1, this);
        z("Cast.V2.Version", Number(cast.receiver.bi));
        wh && wh(this);
        this.ra = We();
        this.I = We();
        (a = cast.receiver.platform.Ja("device-capabilities")) && xh(this, a)
    };
    yh = function(a) {
        var b = a.toLocaleLowerCase();
        return ["com.vizio.vue", "com.vizio.smartcast"].some(function(c) {
            return b.includes(c)
        })
    };
    zh = function(a, b, c, d) {
        var e = {
            type: "ready"
        };
        c && (e.statusText = c);
        d && (e.dialData = d);
        e.activeNamespaces = b;
        e.version = cast.receiver.VERSION;
        e.messagesVersion = cast.receiver.oa.Wl;
        e.sdkCapabilities = {
            show_media_controls_supported: !0,
            group_capabilities_supported: !0,
            playback_device_status_supported: !0
        };
        a.l.send(cast.receiver.oa.Xa, e)
    };
    Ah = function(a, b, c) {
        var d = {
            type: "setappstate"
        };
        void 0 != b && (d.statusText = b);
        void 0 != c && (d.dialData = c);
        a.l.send(cast.receiver.oa.Xa, d)
    };
    Bh = function(a) {
        fd("Cast.Receiver.disableRemoteControlOptimizedUi", !0);
        a.fa = !0
    };
    Ug = function(a, b, c) {
        if (b == cast.receiver.oa.ce) throw Error("Protected namespace");
        if (!_.Ob(b, cast.receiver.oa.sd)) throw Error("Invalid namespace prefix");
        if (!a.h[b]) {
            if (a.ha) throw Error("New namespaces can not be requested after start has been called");
            a.h[b] = new Cg(b, a.M, _.ob(a.o), c);
            _.md(a, a.h[b])
        }
        if (c && a.h[b].o != c) throw Error("Invalid messageType for the namespace");
        return a.h[b]
    };
    xh = function(a, b) {
        a.j = b ? _.vb(b) : {};
        if (cast.receiver.platform.oj()) {
            a.j.hasOwnProperty("is_hdr_supported") || (a.j.is_hdr_supported = cast.receiver.platform.canDisplayType("video/mp4; codecs=hev1.2.4.L153.B0; eotf=smpte2084"));
            a.j.hasOwnProperty("is_dv_supported") || (a.j.is_dv_supported = cast.receiver.platform.canDisplayType("video/mp4; codecs=dvhe.04.06"));
            b = !a.j.hasOwnProperty("is_dolby_atmos_supported");
            var c = lh();
            c = c.majorVersion >= Ch && c.minorVersion >= Dh;
            b && c && (a.j.is_dolby_atmos_supported = cast.receiver.platform.canDisplayType("audio/mp4; codecs=ec-3; spatialRendering=true"));
            cast.receiver.platform.Ja("enabled-for-dev") && (a.j.is_device_registered = !0);
            cast.receiver.platform.Ja("enable-hls-sample-aes") && (a.j.is_cbcs_supported = !0)
        }
    };
    Ih = function(a, b) {
        var c = b.launchingSenderId,
            d = _.ob(a.h);
        a.U = b.version;
        a.T = !Eh(a);
        xh(a, b.deviceCapabilities);
        a.N = {
            id: b.applicationId,
            name: b.applicationName,
            iconUrl: b.iconUrl,
            sessionId: b.sessionId,
            namespaces: d,
            launchingSenderId: c,
            launchedFrom: b.launchedFrom || "UNKNOWN"
        };
        a.A = "ready";
        for (var e in a.h) a.h[e].F = !0;
        a.ra.resolve(a.N);
        a.W && (a.W = !1, Ah(a, a.config_.statusText, a.config_.dialData));
        _.I(Fh, "Dispatching CastReceiverManager system ready event");
        b = new Gh(a.N);
        a.Z && a.Z(b);
        Hh(a, b)
    };
    Lh = function(a, b) {
        if (yh(b.id)) _.I(Fh, "Ignored connection from " + b.id);
        else {
            _.I(Fh, "Dispatching CastReceiverManager sender connected event [" + b.id + "]");
            _.qb(a.o, b.id) && _.E(Fh, "Unexpected connected message for already connected sender: " + b.id);
            a.o[b.id] = b;
            var c = new Jh(b.id, b.userAgent),
                d;
            for (d in a.h) {
                var e = a.h[d],
                    f = b.id;
                _.qb(e.h, f) ? _.E(Kh, "Unexpected sender already registered [" + e.j + ", " + f + "]") : (_.I(Kh, "Registering sender [" + e.j + ", " + f + "]"), e.h[f] = null)
            }
            1 < a.getSenders().length && !a.pa && (id("Cast.Receiver.MultipleSendersConnected"),
                a.pa = !0);
            Hh(a, c)
        }
    };
    Nh = function(a, b, c) {
        if (yh(b)) _.I(Fh, "Ignored disconnection from " + b);
        else {
            switch (c) {
                case "closed_by_peer":
                    c = "requested_by_sender";
                    break;
                case "transport_invalid_message":
                    c = "error";
                    break;
                default:
                    c = "unknown"
            }
            _.I(Fh, "Dispatching sender disconnected event [" + b + "] Reason: " + c);
            if (_.qb(a.o, b)) {
                var d = a.o[b].userAgent;
                delete a.o[b];
                c = new Mh(b, d, c);
                for (var e in a.h) {
                    d = a.h[e];
                    var f = b;
                    _.qb(d.h, f) && (_.I(Kh, "Unregistering sender [" + d.j + ", " + f + "]"), d.h[f] && d.h[f].close(), delete d.h[f])
                }
                Hh(a, _.vb(c));
                a.$ && a.$(c)
            } else _.E(Fh,
                "Unknown sender disconnected: " + b)
        }
    };
    Ph = function(a, b) {
        a.sa = b;
        _.I(Fh, "Dispatching system volume changed event [" + b.level + ", " + b.muted + "]");
        Hh(a, new Oh(b))
    };
    Rh = function(a, b) {
        b == a.F ? _.I(Fh, "Ignoring visibility changed event, state is already " + b) : (_.I(Fh, "Dispatching visibility changed event " + b), a.F = b, b = new Qh(0 != b), a.aa && a.aa(b), Hh(a, b))
    };
    Th = function(a, b) {
        b != a.B && (_.I(Fh, "Dispatching standby changed event " + b), a.B = b, Hh(a, new Sh(1 == b)))
    };
    Vh = function(a, b) {
        _.I(Fh, "Dispatching showmediacontrols " + b);
        a.ma = b;
        Hh(a, new Uh(b))
    };
    Xh = function(a, b) {
        _.I(Fh, "Dispatching maxvideoresolutionchanged " + b);
        Hh(a, new Wh(b))
    };
    Zh = function(a) {
        _.I(Fh, "Dispatching feedback started event");
        var b = new Yh;
        a.P ? a.P(b) : a.Md("")
    };
    ai = function(a, b) {
        var c = new $h;
        c.capabilities = b.capabilities;
        Hh(a, c)
    };
    ci = function(a, b) {
        var c = new bi;
        c.requestId = b.requestId;
        c.newGroupCapabilities = b.newGroupCapabilities;
        a.l.send(cast.receiver.oa.Xa, {
            type: "allowgroupchangeresponse",
            requestId: c.requestId,
            allowChange: !0,
            reason: void 0
        });
        Hh(a, c)
    };
    ei = function(a, b) {
        a.$b() ? _.E(Fh, "initTouchScreenOptimizedApp() method cannot be called after CastReceiverManager.start() has been called") : (void 0 === b && _.E(Fh, "setTouchScreenOptimizedApp() has to be called with 1 required argument"), di(a, b))
    };
    di = function(a, b) {
        _.I(Fh, "Touchscreen-optimized app: " + b);
        cast.receiver.platform.setTouchInputSupport(b).then(function(c) {
            _.I(Fh, function() {
                return "Touch supported options: " + JSON.stringify(c)
            });
            b ? a.I.resolve("touch-optimized") : c && c.displayControls ? a.I.resolve("non-touch-optimized") : a.I.resolve("no-controls")
        }, function() {
            _.I(Fh, "Touch support is blocked");
            a.I.resolve("no-controls")
        });
        a.ja = !0
    };
    fi = function(a) {
        var b = We();
        a.ra.promise.then(function() {
            _.I(Fh, "Touch input supported: " + a.j && a.j.touch_input_supported);
            a.j && a.j.touch_input_supported ? b.resolve(!0) : b.resolve(!1)
        });
        return b.promise
    };
    gi = function(a) {
        var b = We();
        fi(a).then(function(c) {
            a.I.promise.then(function(d) {
                c || (d = "no-controls");
                b.resolve(d)
            })
        });
        return b.promise
    };
    Eh = function(a) {
        if (!a.U) return _.E(Fh, "No System Version"), !1;
        var b = ["1", "11"];
        if (!b.length) return _.E(Fh, "Version provided is not valid: 1.11"), !1;
        var c = a.U.split(".");
        if (!c.length) return _.E(Fh, "System Version format is not valid " + a.U), !1;
        for (var d = 0; d < b.length; d++) {
            var e = parseInt(b[d], 10);
            if (isNaN(e)) return _.E(Fh, "Version is not numeric: 1.11"), !1;
            var f = c.length > d ? parseInt(c[d], 10) : 0;
            if (isNaN(f)) return _.E(Fh, "System Version is not numeric: " + a.U), !1;
            if (e > f) return !1
        }
        return !0
    };
    Hh = function(a, b) {
        b.target = a;
        var c = !1;
        try {
            c = a.J.dispatchEvent(b)
        } catch (d) {
            window.setTimeout(function() {
                throw d;
            }, 0)
        }
        return c
    };
    hi = function(a, b) {
        _.C.call(this, a);
        this.data = b
    };
    Mh = function(a, b, c) {
        hi.call(this, "senderdisconnected", a);
        this.senderId = a;
        this.userAgent = b;
        this.reason = c
    };
    Jh = function(a, b) {
        hi.call(this, "senderconnected", a);
        this.senderId = a;
        this.userAgent = b
    };
    Qh = function(a) {
        hi.call(this, "visibilitychanged", a);
        this.isVisible = a
    };
    Sh = function(a) {
        hi.call(this, "standbychanged", null);
        this.isStandby = a
    };
    Oh = function(a) {
        hi.call(this, "systemvolumechanged", a);
        this.data = a
    };
    Gh = function(a) {
        hi.call(this, "ready", a);
        this.data = a
    };
    ii = function() {
        hi.call(this, "shutdown", null)
    };
    Yh = function() {
        hi.call(this, "feedbackstarted", null)
    };
    ji = function(a) {
        hi.call(this, "playbackdevicestatus", null);
        this.playbackDeviceStatus = a
    };
    Uh = function(a) {
        hi.call(this, "showmediacontrols", null);
        this.mediaControlsState = a
    };
    Wh = function(a) {
        hi.call(this, "maxvideoresolutionchanged", null);
        this.height = a
    };
    $h = function() {
        hi.call(this, "groupcapabilities", null);
        this.capabilities = void 0
    };
    bi = function() {
        hi.call(this, "allowgroupchange", null);
        this.newGroupCapabilities = void 0
    };
    ki = function() {
        this.h = _.Tg.L();
        this.j = Ug(this.h, "urn:x-cast:com.google.cast.broadcast", "JSON");
        this.j.l = this.l.bind(this)
    };
    qi = function(a) {
        if (!a) return null;
        var b = new cd;
        b.title = li(a.title);
        Object.values(mi).includes(a.targetAspectRatio) && (b.targetAspectRatio = a.targetAspectRatio, "PORTRAIT_2_TO_3" === a.targetAspectRatio && _.H(ni, "UI for the browse items with portrait orientation is not final and is a subject to change."));
        if (!Array.isArray(a.items)) return null;
        b.items = a.items.map(function(c) {
            if (!c.entity || "string" !== typeof c.entity) return _.H(ni, "BrowseItem.entity should be a non-empty string"), null;
            var d = new dd(c.entity);
            "string" === typeof c.title && (d.title = c.title);
            "string" === typeof c.subtitle && (d.subtitle = c.subtitle);
            if (!d.title && !d.subtitle) return _.H(ni, "At least one of the BrowseItem.title or BrowseItem.subtitle should be non-empty strings"), null;
            "number" === typeof c.duration && (d.duration = c.duration);
            c.image && "string" === typeof c.image.url && (d.image = new Dc(c.image.url));
            Object.values(oi).includes(c.imageType) && (d.imageType = c.imageType);
            Object.values(pi).includes(c.mediaBadge) && (d.mediaBadge = c.mediaBadge);
            return d
        }).filter(function(c) {
            return !!c
        });
        if (1 > b.items.length) return null;
        30 < b.items.length && (a = b.items.length, b.items = b.items.slice(0, 30), _.E(ni, "BrowseContent.items length is " + a + " that exceeds maximum allowed length of 30 elements. BrowseContent.items list is truncated to 30 elements"));
        return b
    };
    li = function(a) {
        return "string" === typeof a ? a : ""
    };
    ri = function(a, b) {
        a.element.disabled = b;
        a.element.setAttribute("aria-disabled", String(b));
        Qf(a.element, !b)
    };
    si = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        var e = document.createElement("img");
        e.setAttribute("role", "presentation");
        e.classList.add("btn-icon");
        var f = _.we(document, "DIV");
        if (!Df()) {
            var g = document.createElement("goog-ripple");
            g.setAttribute("recenters", "");
            f.appendChild(g)
        }
        f.appendChild(e);
        f.className = "btn";
        d && f.classList.add(d);
        f.src = "";
        f.title = c;
        f.setAttribute("role", "button");
        f.addEventListener("click", b);
        Qf(f, !0);
        Df() && f.addEventListener("keydown", function(k) {
            "Enter" === k.key && ($d(a.A), b(k), k.stopPropagation())
        });
        return f
    };
    ti = function(a, b, c) {
        b ? (a.h.textContent = b, K(a.h, !0)) : (a.h.textContent = "", K(a.h, !1));
        c ? a.l.setAttribute("connected", "true") : a.l.removeAttribute("connected")
    };
    wi = function() {
        cast.receiver.C.Pb.call(this, function() {
            a.h ? a.l() : a.o()
        }, "", "btn-play-pause");
        var a = this;
        this.o = function() {};
        this.l = function() {};
        this.h = !1;
        this.j = !0;
        ui(this);
        this.j = !0;
        vi(this)
    };
    ui = function(a) {
        var b = cast.receiver.V.ji;
        a.element.dataset.state = "paused";
        a.element.title = b;
        a.h = !1;
        vi(a)
    };
    vi = function(a) {
        ri(a, a.h && !a.j)
    };
    xi = function(a, b, c) {
        cast.receiver.C.Pb.call(this, a, b, c)
    };
    zi = function() {
        var a = $c.call(this) || this;
        a.B = Ef() && Df();
        a.B ? (0, cast.receiver.C.Ak)(a) : (0, cast.receiver.C.Bk)(a);
        a.o = null;
        a.H = !1;
        a.F = Ud.L();
        a.T = !0;
        a.U = !1;
        a.I = null;
        a.D = {};
        a.l = {};
        [cast.receiver.C.ga.SLOT_PRIMARY_1, cast.receiver.C.ga.SLOT_PRIMARY_2, cast.receiver.C.ga.SLOT_SECONDARY_1, cast.receiver.C.ga.SLOT_SECONDARY_2].forEach(function(b) {
            a.D[b] = a.querySelector(".slot." + b)
        });
        a.J = function() {};
        a.M = function() {};
        a.P = function() {};
        a.N = function() {};
        a.A = Of.L();
        a.j = null;
        a.h = a.B ? null : new cast.receiver.C.Om;
        a.B ||
            (xe(a.h.element, a.querySelector("play-placeholder")), a.h.l = function() {
                a.J()
            }, a.h.o = function() {
                a.M()
            });
        a.G = new xi(function() {
            a.P()
        }, cast.receiver.V.Em, "btn-stop");
        xe(a.G.element, a.querySelector("stop-placeholder"));
        K(a.G.element, !1);
        Df() && (Qf(a, !0), a.addEventListener("keydown", function(b) {
            b.preventDefault();
            if ("ArrowRight" === b.key) {
                a: {
                    var c = yi(a);
                    for (var d = 0; d < c.length - 1; d++)
                        if (a.A.isFocused(c[d])) {
                            c = c[d + 1];
                            break a
                        }
                    c = null
                }
                c && (a.j = c, a.A.focus(a.j), $d(a.F), b.stopPropagation())
            }
            if ("ArrowLeft" === b.key) {
                a: {
                    c =
                    yi(a);
                    for (d = 1; d < c.length; d++)
                        if (a.A.isFocused(c[d])) {
                            c = c[d - 1];
                            break a
                        }
                    c = null
                }
                c && (a.j = c, a.A.focus(a.j), $d(a.F), b.stopPropagation())
            }
        }), a.addEventListener("focus", function() {
            if (a.j && Rf(a.j)) a.A.focus(a.j);
            else if (a.h && Rf(a.h.element)) a.A.focus(a.h.element);
            else
                for (var b in a.l)
                    if (Rf(a.l[b].element)) {
                        a.A.focus(a.l[b].element);
                        break
                    }
        }));
        return a
    };
    Ai = function(a) {
        a.o = new cast.receiver.C.Nk(function() {
            a.N()
        });
        a.querySelector(".device-controller-slot").appendChild(a.o.j)
    };
    Bi = function(a) {
        a.o && K(a.o.j, a.T && (a.H || a.I === cast.receiver.C.Ka.AUDIO || a.U))
    };
    yi = function(a) {
        return Array.from(a.querySelectorAll("[data-focusable]")).filter(function(b) {
            return Rf(b)
        })
    };
    Di = function() {
        this.H = this.F = this.D = this.G = this.B = this.l = this.o = null;
        this.A = _.Tg.L();
        this.h = Ug(this.A, Ci, "JSON");
        this.h.l = this.I.bind(this);
        this.j = new _.Qg
    };
    Gi = function(a, b, c, d) {
        _.J().then(function() {
            return d(c)
        }).then(function(e) {
            e = Ei(c, e);
            a.h.send(b, e)
        }, function(e) {
            e && "ERROR" == e.type ? (e = Ei(c, e), a.h.send(b, e)) : (e = "Got a rejected promise " + JSON.stringify(e), Fi(e, c, "APP_ERROR"), a.h.send(b, Fi(e, c, "APP_ERROR")))
        })
    };
    Fi = function(a, b, c) {
        _.E(Hi, a);
        a = new Ii(c);
        a.requestId = b.requestId;
        return a
    };
    Ei = function(a, b) {
        if (!b) return Fi("No response data", a, "APP_ERROR");
        switch (b.type) {
            case "SUCCESS":
            case "ERROR":
                return b.requestId = a.requestId, b
        }
        return Fi("Invalid response data " + JSON.stringify(b), a, "APP_ERROR")
    };
    Ji = function(a) {
        var b = Di.L();
        if (null !== a && "function" !== typeof a) throw _.E(Hi, "Given handler is not a function or null"), Error("Given handler is not a function or null");
        b.H = a
    };
    Ki = function(a, b, c) {
        if (b) {
            var d = a.j.get(b);
            d ? (a.j.delete(b), d(c)) : _.H(Hi, "No matching request for response " + JSON.stringify(c))
        }
    };
    Li = function(a) {
        this.type = a
    };
    Mi = function() {
        this.type = "REFRESH_CREDENTIALS"
    };
    Ni = function(a, b) {
        this.type = "PLAY_STRING";
        this.stringId = a;
        this.arguments = b
    };
    Oi = function(a, b) {
        this.title = a;
        this.entity = b
    };
    Pi = function(a, b) {
        this.listTitle = a || "";
        this.displayItems = b
    };
    Qi = function(a) {
        this.displayItemLists = a
    };
    Ri = function(a) {
        this.opaqueContext = "";
        this.displayContext = a
    };
    Si = function(a) {
        this.type = "SET_APPLICATION_CONTEXT";
        this.context = JSON.stringify(a ? a : {});
        this.requestId = Date.now()
    };
    Ti = function() {
        this.type = "USER_ACTION"
    };
    Ui = function() {
        this.type = "SHOW_REMOTE_CONTROL_OVERLAY"
    };
    Vi = function(a) {
        this.type = a
    };
    Wi = function(a) {
        this.type = "SUCCESS";
        this.status = a
    };
    Ii = function(a, b, c) {
        this.type = "ERROR";
        this.code = a;
        this.reason = b;
        this.customData = c
    };
    ej = function(a) {
        if (!Xi.test(a)) throw Error("'" + a + "' is not a valid alpha hex color");
        5 == a.length && (a = a.replace(dj, "#$1$1$2$2$3$3$4$4"));
        a = a.toLowerCase();
        return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16), parseInt(a.substr(7, 2), 16) / 255]
    };
    fj = function(a) {
        var b = a.slice(0);
        b[3] = Math.round(1E3 * a[3]) / 1E3;
        return "rgba(" + b.join(",") + ")"
    };
    lj = function(a, b, c, d) {
        _.A.call(this);
        this.h = a;
        this.l = this.o = null;
        for (a = this.h; a.parentNode;) a = a.parentNode;
        this.A = 0 > a.toString().toLowerCase().indexOf("shadow") ? document.head : a;
        this.j = [];
        this.F = !1;
        this.B = "cast-captions-" + Math.floor(1E6 * Math.random()).toString();
        this.I = "[" + this.B + '="true"]::cue ';
        this.J = new RegExp(/^[\.'":%,;\s\-0-9a-z]+$/i);
        this.H = void 0;
        gj(this, b);
        hj(this);
        ij(this);
        d && jj(this, d);
        kj(this, c)
    };
    mj = function(a, b) {
        a = _.q(a.j);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = c.track;
            b(c) ? d.mode = "showing" : (d.mode = "showing", d.mode = "disabled")
        }
    };
    nj = function(a) {
        return a.j.map(function(b) {
            return parseInt(b.id, 10)
        })
    };
    kj = function(a, b) {
        mj(a, function(c) {
            return _.eb(b, parseInt(c.id, 10))
        })
    };
    oj = function(a, b) {
        mj(a, function(c) {
            return cast.receiver.ad(b, c.srclang)
        })
    };
    pj = function(a) {
        var b = [];
        a = _.q(a.j);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, "showing" == c.track.mode && b.push(parseInt(c.id, 10));
        return b
    };
    gj = function(a, b) {
        b = _.q(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = c.trackContentId;
            if ("TEXT" == c.type && d) {
                var e = c.trackContentType;
                if (Rb(d, "vtt") || void 0 !== e && 0 == Pb(e, "text/vtt")) d = document.createElement("track"), d.src = c.trackContentId, d.id = c.trackId, d.label = c.name, d.srclang = c.language, d.kind = (c.subtype || "CAPTIONS").toLowerCase(), a.j.push(d)
            }
        }
        qj(a);
        0 < a.j.length && !a.h.getAttribute("crossorigin") && (a.h.setAttribute("crossorigin", "anonymous"), a.F = !0);
        b = _.q(a.j);
        for (c = b.next(); !c.done; c =
            b.next()) c = c.value, a.h.contains(c) || a.h.appendChild(c)
    };
    hj = function(a, b) {
        if (void 0 === b ? 0 : b) a.h.removeAttribute(a.B), a.A.contains(a.l) && a.A.removeChild(a.l), a.o = null, a.l = null;
        else if (a.l)
            for (b = a.o.cssRules.length - 1; 0 <= b; b--) a.o.deleteRule(b)
    };
    qj = function(a) {
        a.F && (a.h.removeAttribute("crossorigin"), a.F = !1)
    };
    sj = function(a, b, c) {
        1 == c || a.J.test(b) ? a.o.insertRule(a.I + "{ " + b + " }", a.o.cssRules.length) : _.H(rj, "Invalid css cue: " + b)
    };
    ij = function(a) {
        if (!a.l) {
            var b;
            a.A.getElementById ? b = a.A.getElementById("cue-style") : b = document.getElementById("cue-style");
            b || (b = document.createElement("style"), b.id = "cue-style", b.type = "text/css", a.A.appendChild(b), b.appendChild(document.createTextNode("")));
            a.l = b;
            a.o = a.l.sheet
        }
        sj(a, "font-size: 4.1vh;");
        sj(a, "font-family: monospace;");
        sj(a, "font-style: normal;");
        sj(a, "font-weight: normal;");
        sj(a, "background-color: black;");
        sj(a, "color: white;");
        a.h.setAttribute(a.B, !0)
    };
    tj = function(a, b) {
        try {
            var c = fj(ej(a))
        } catch (d) {
            _.H(rj, "Invalid color: " + a)
        }
        if (c) switch (a = "rgba(204, 204, 204, " + parseInt(a.substring(7, 9), 16) + ")", b) {
            case "OUTLINE":
                return "text-shadow: 0 0 4px " + c + ", 0 0 4px " + c + ", 0 0 4px " + c + ", 0 0 4px " + c + ";";
            case "DROP_SHADOW":
                return "text-shadow: 0px 2px 3px " + c + ", 0px 2px 4px " + c + ", 0px 2px 5px " + c + ";";
            case "RAISED":
                return "text-shadow: 1px 1px " + c + ", 2px 2px " + c + ", 3px 3px " + c + ";";
            case "DEPRESSED":
                return "text-shadow: 1px 1px " + a + ", 0 1px " + a + ", -1px -1px " + c + ", 0 -1px " +
                    c + ";"
        }
        return ""
    };
    uj = function(a) {
        switch (a) {
            case "BOLD":
                return "font-weight: bold;";
            case "BOLD_ITALIC":
                return "font-style: italic; font-weight: bold;";
            case "ITALIC":
                return "font-style: italic;"
        }
        return "font-style: normal;"
    };
    jj = function(a, b) {
        a.H = b;
        if (void 0 !== b.foregroundColor) try {
            var c = fj(ej(b.foregroundColor));
            sj(a, "color: " + c + ";", !0)
        } catch (k) {
            _.H(rj, "Invalid color: " + b.foregroundColor)
        }
        if (void 0 !== b.backgroundColor) try {
            var d = fj(ej(b.backgroundColor));
            sj(a, "background-color: " + d + ";", !0)
        } catch (k) {
            _.H(rj, "Invalid color: " + b.backgroundColor)
        }
        void 0 !== b.fontScale && sj(a, "font-size: " + 100 * b.fontScale + "%;");
        if (void 0 !== b.fontFamily || void 0 !== b.fontGenericFamily) {
            c = b.fontFamily;
            d = b.fontGenericFamily;
            var e = "font-family: ",
                f =
                "";
            void 0 !== c && (e += '"' + c + '"', f = ", ");
            if (void 0 !== d) {
                switch (d) {
                    case "SANS_SERIF":
                        var g = '"Droid Sans", sans-serif';
                        break;
                    case "MONOSPACED_SANS_SERIF":
                        g = '"Droid Sans Mono", monospace';
                        break;
                    case "SERIF":
                        g = '"Droid Serif", serif';
                        break;
                    case "MONOSPACED_SERIF":
                        g = '"Cutive Mono", serif-monospace';
                        break;
                    case "CASUAL":
                        g = '"Short Stack", casual';
                        break;
                    case "CURSIVE":
                        g = "Quintessential, cursive";
                        break;
                    case "SMALL_CAPITALS":
                        g = '"Alegreya Sans SC", sans-serif-smallcaps'
                }
                e += f + g
            }
            sj(a, e + ";")
        }
        void 0 !== b.fontStyle && sj(a,
            uj(b.fontStyle));
        void 0 !== b.edgeType && (g = void 0 !== b.foregroundColor ? b.foregroundColor : "#FFFFFFFF", b = void 0 !== b.edgeColor ? tj(b.edgeColor, b.edgeType) : tj(g, b.edgeType), sj(a, b, !0))
    };
    vj = function(a) {
        this.ca = L;
        this.h = a;
        this.H = function() {};
        this.F = function() {};
        this.I = function() {};
        this.A = 0;
        this.o = this.D = null;
        this.J = 0;
        this.l = this.j = null;
        this.B = !1;
        this.G = !0;
        _.Ed(this.h, "error", this.sl, !1, this);
        _.Ed(this.h, "ended", this.Lh, !1, this);
        _.Ed(this.h, "loadedmetadata", this.tl, !1, this);
        _.I(this.ca, "Using default Player")
    };
    wj = function(a) {
        var b = a.h.duration;
        if (isNaN(b) || null == a.o) return b;
        if (null != a.D) return a.D;
        a.D = 0 <= a.o ? Math.min(a.J + a.o, b) : Math.max(b + a.o, a.A);
        return a.D
    };
    xj = function(a) {
        null != a.o && (Od(a.h, "timeupdate", a.Aj, !1, a), a.D = null, a.o = null)
    };
    yj = function(a) {
        if (null == a.o) return !1;
        var b = wj(a);
        return isNaN(b) ? !1 : a.h.currentTime >= b ? (a.Lh(), !0) : !1
    };
    zj = function(a, b) {
        a.l = b ? b.slice(0) : a.l;
        a.l = a.l || [];
        if (a.j) {
            var c = nj(a.j);
            a.l = a.l.filter(function(d) {
                return !c.includes(d)
            }).concat(pj(a.j))
        }
        0 == a.l.length && (a.l = null)
    };
    Aj = function(a) {
        this.itemId = a;
        this.customData = this.activeTrackIds = this.preloadTime = this.playbackDuration = this.startTime = this.autoplay = this.media = void 0
    };
    Bj = function(a) {
        this.h = void 0;
        this.o = "REPEAT_OFF";
        this.l = 0;
        this.A = this.j = this.B = void 0;
        this.G = a;
        this.F = 1;
        this.D = 0
    };
    Cj = function(a) {
        a.D = 0;
        a.h.forEach(function(b, c) {
            b.orderId = c;
            a.D++
        })
    };
    Dj = function(a, b) {
        a.A && (a.A.shuffle = b)
    };
    Ej = function(a) {
        return !(!a.A || !a.A.shuffle)
    };
    Hj = function(a, b) {
        if (a.j) return Promise.resolve(a.j.initialize(b)).then(function(c) {
            c ? (Fj(a, c, !0, !0), Cj(a)) : Gj(a, b)
        });
        Gj(a, b)
    };
    Gj = function(a, b) {
        var c = b.queueData;
        c && c.items ? Fj(a, c) : (c = new Aj(a.G()), c.media = b.media, c.autoplay = b.autoplay, c.activeTrackIds = b.activeTrackIds, c.customData = b.customData, c.itemId = 1, a.h = [c], b.queueData && Ij(a, b.queueData));
        Cj(a)
    };
    Fj = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Jj(a, b, void 0 === c ? !1 : c) || _.H(Kj, "The passed in queueData is not completely valid: " + b);
        d && b.items && Lj(b.items);
        a.h = b.items;
        Ij(a, b)
    };
    Ij = function(a, b) {
        a.A = b;
        a.o = b.repeatMode || a.o;
        a.l = b.startIndex || 0;
        a.B = b.startTime || void 0
    };
    Lj = function(a) {
        a = _.q(a);
        for (var b = a.next(); !b.done; b = a.next()) b = b.value, b.preloadTime = null != b.preloadTime ? b.preloadTime : 0
    };
    Nj = function(a, b) {
        var c = new Jc;
        c.requestId = b;
        c.itemIds = a.qc().map(function(d) {
            return d.itemId
        });
        c.sequenceNumber = Mj(a, !1);
        return c
    };
    Qj = function(a, b) {
        return new Promise(function(c, d) {
            var e = void 0,
                f = a.l + b;
            0 <= f && f < a.h.length ? (e = new Hc, e.changeType = "NO_CHANGE", c(e)) : (f = Oj(a), 1 == b ? e = a.j.nextItems.bind(a.j, f) : -1 == b ? e = a.j.prevItems.bind(a.j, f) : 1 < b ? e = a.j.fetchItems.bind(a.j, f, b, 0) : -1 > b ? e = a.j.fetchItems.bind(a.j, f, 0, -b) : d("Should not be requesting more items on the current item"), Promise.resolve(e()).then(function(g) {
                Lj(g);
                var k = new Hc;
                if (0 < g.length) {
                    _.I(Kj, "Fetched more items " + g);
                    var l = 0 <= b ? void 0 : a.h[0].itemId;
                    Pj(a, g, l);
                    k.changeType =
                        "INSERT";
                    k.itemIds = g.map(function(m) {
                        return m.itemId
                    });
                    k.insertBefore = l;
                    k.sequenceNumber = Mj(a, !0)
                } else k.changeType = "NO_CHANGE", k.sequenceNumber = Mj(a, !1);
                c(k)
            }, function() {
                return d("Failed to get more items from the queue.")
            }))
        })
    };
    Mj = function(a, b) {
        return b ? a.F++ : a.F - 1
    };
    Rj = function(a) {
        return void 0 !== a.h
    };
    Oj = function(a) {
        if (!(0 > a.l) && a.h) return a.h[a.l].itemId
    };
    Sj = function(a, b) {
        a.o = b;
        a.A && (a.A.repeatMode = b)
    };
    Tj = function(a, b) {
        for (var c = [], d = 0; d < b.length; d++)
            for (var e = 0; e < a.h.length; e++)
                if (b[d] == a.h[e].itemId) {
                    c.push(b[d]);
                    break
                }
        return c
    };
    Uj = function(a, b) {
        for (var c = 0; c < a.h.length; c++)
            if (b == a.h[c].itemId) return c;
        return -1
    };
    Vj = function(a) {
        return "REPEAT_ALL_AND_SHUFFLE" == a.o || "REPEAT_ALL" == a.o
    };
    Xj = function(a, b) {
        b = Uj(a, b);
        if (-1 == b || a.l == b) return !1;
        Wj(a, b);
        return !0
    };
    Yj = function(a, b, c) {
        if (b && 0 != b.length) {
            for (var d = a.h[a.l].itemId, e = void 0 !== c ? c : -1, f = a.h.length - b.length, g = [], k = -1 == e ? !0 : !1, l = 0; l < a.h.length; l++) _.eb(b, a.h[l].itemId) ? k || a.h[l].itemId != b[0] || (f = g.length) : (g.push(a.h[l]), e == a.h[l].itemId && (f = g.length - 1, k = !0));
            e = [];
            for (k = 0; k < b.length; k++) {
                a: {
                    for (l = 0; l < a.h.length; l++)
                        if (b[k] == a.h[l].itemId) {
                            l = a.h[l];
                            break a
                        }
                    l = null
                }
                e.push(l)
            }
            Qa(kb, g, f, 0).apply(null, e);
            a.h = g;
            if (a.j && a.j.onItemsReordered) a.j.onItemsReordered(e, c);
            void 0 !== d && Xj(a, d);
            Ej(a) || Cj(a)
        }
    };
    Pj = function(a, b, c, d) {
        for (var e = _.q(b), f = e.next(); !f.done; f = e.next()) f = f.value, "number" !== typeof f.itemId && (f.itemId = a.G());
        e = "number" === typeof c ? Uj(a, c) : a.h.length;
        e = -1 == e ? a.h.length : e;
        Qa(kb, a.h, e, 0).apply(null, b);
        void 0 !== d ? a.l = e + d : a.l >= e && (a.l += b.length);
        if (a.j && a.j.onItemsInserted) a.j.onItemsInserted(b, c);
        Ej(a) ? b.forEach(function(g) {
            g.orderId = a.D;
            a.D++
        }) : Cj(a);
        return b.map(function(g) {
            return g.itemId
        })
    };
    ak = function(a, b, c) {
        if (0 > a.l) return "QUEUE_ENDED";
        b = a.l + b;
        var d = !1;
        b >= a.h.length ? (b = Vj(a) ? b % a.h.length : -1, d = !0) : 0 > b && (b = Vj(a) ? a.h.length + (b + 1) % a.h.length - 1 : 0, d = !0);
        c && Wj(a, b);
        return -1 == b ? "QUEUE_ENDED" : d ? ("REPEAT_ALL_AND_SHUFFLE" === a.o && Dj(a, !0), Ej(a) ? (Zj(a), "QUEUE_SHUFFLED") : "QUEUE_LOOP") : "QUEUE_ACTIVE"
    };
    Zj = function(a) {
        var b = a.h.length;
        if (!(3 > a.h.length))
            for (Dj(a, !0); 0 < b;) {
                var c = Math.floor(Math.random() * b);
                --b;
                var d = a.h[c];
                a.h[c] = a.h[b];
                a.h[b] = d
            }
    };
    bk = function(a) {
        3 > a.h.length || (Dj(a, !1), a.h.sort(function(b, c) {
            return b.orderId - c.orderId
        }))
    };
    Jj = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (void 0 !== b.startIndex && ("number" !== typeof b.startIndex || 0 > b.startIndex)) return _.E(Kj, "Invalid startIndex " + b.startIndex), !1;
        var d = (b.startIndex || 0) + 1;
        if (!b.items || b.items.length < d) return _.E(Kj, "Invalid number of items"), !1;
        if (b.repeatMode && !cast.receiver.media.tj(b.repeatMode)) return _.E(Kj, "Invalid repeatMode"), !1;
        for (d = 0; d < b.items.length; d++)
            if (b.items[d].media)
                if (void 0 === b.items[d].preloadTime || "number" === typeof b.items[d].preloadTime && !isNaN(b.items[d].preloadTime))
                    if (c ||
                        void 0 === b.items[d].itemId) b.items[d].itemId = "number" === typeof b.items[d].itemId ? b.items[d].itemId : a.G();
                    else return _.E(Kj, "ItemId should not be defined, element at index: " + d), !1;
        else return _.E(Kj, "Bad preloadTime (" + b.items[d].preloadTime + "), in element at index: " + d), !1;
        else return _.E(Kj, "Media is mandatory, missing in element at index: " + d), !1;
        return !0
    };
    Wj = function(a, b) {
        a.l = b;
        if (a.j && a.j.onCurrentItemIdChanged && 0 <= b && b < a.h.length) a.j.onCurrentItemIdChanged(a.h[b].itemId)
    };
    ck = function(a) {
        return a.j && a.h && 0 < a.h.length && a.l == a.h.length - 1 ? Qj(a, 1) : Promise.reject("No need to prefetch more for now.")
    };
    ek = function(a) {
        return a === dk ? 2 : "__touch_controls__" === a ? 3 : a === cast.receiver.vc.be ? 4 : "__physical_remote__" === a ? 5 : "*:*" === a ? 6 : 1
    };
    fk = function(a) {
        return a.h ? a.h.videoWidth : 0
    };
    gk = function(a) {
        return a.h ? a.h.videoHeight : 0
    };
    hk = function(a) {
        return !!a && "function" === typeof a.then
    };
    _.ik = function() {
        this.h = [];
        this.j = []
    };
    kk = function(a, b, c) {
        var d = this;
        this.yh = _.Tg.L();
        ki.L();
        this.U = c || "local";
        cast.receiver.Wa.Qq(this.U);
        this.A = Ug(this.yh, cast.receiver.media.eb, "JSON");
        this.G = 0;
        this.aa = this.D = null;
        this.B = 1;
        this.lf = b || 12303;
        this.oi = this.$h = this.I = this.H = this.h = this.l = null;
        this.F = !1;
        this.vf = void 0;
        this.J = this.o = null;
        this.Ta = !0;
        this.Zh = null;
        this.j = new Bj(this.cj.bind(this));
        this.W = !1;
        this.M = null;
        this.Sm = 1;
        this.bf = -1;
        this.wf = new _.ik;
        this.tf = this.P = !1;
        this.N = [];
        this.Ch = this.Nn;
        this.Bh = null;
        this.ha = this.Yn;
        this.Z = this.bo;
        this.Be = this.ao;
        this.$ = this.jo;
        this.wa = null;
        this.sa = this.ko;
        this.X = this.$n;
        this.Ga = this.no;
        this.Ze = this.lo;
        this.Wc = this.Qn;
        this.$a = this.Pn;
        this.Pe = this.fo;
        this.Ge = this.eo;
        this.pa = this.Ui;
        this.Se = this.ho;
        this.Ve = this.io;
        this.Ah = null;
        this.zf = this.Zn;
        this.yf = this.Xn;
        this.xf = this.Rn;
        this.Ce = this.co;
        this.onError = this.Sn;
        this.ja = function() {};
        this.ma = this.Af = null;
        this.ai = this.Tn;
        this.ki = this.Un;
        this.mi = this.Vn;
        this.ni = this.mo;
        this.fa = null;
        this.Zc = this.Wn;
        this.ra = this.xa = null;
        this.Ba = new cast.receiver.un(this.broadcastStatus.bind(this, !1));
        this.yh.X = function(e) {
            var f = d.Ba;
            f.j = e;
            f.l()
        };
        this.zh = new _.Sd;
        this.sf = this.Bf = this.T = !1;
        this.zb(a);
        this.A.l = this.Qg.bind(this);
        jk(this)
    };
    lk = function(a) {
        if (a.h) return a.h.customData || void 0
    };
    mk = function(a) {
        return a.h ? a.h.activeTrackIds || null : null
    };
    nk = function(a) {
        return Rj(a.j) ? a.j : null
    };
    ok = function(a) {
        for (var b = 0; b < a.length; b++)
            if (void 0 === a[b].trackId || void 0 === a[b].type) return !1;
        return !0
    };
    pk = function(a, b) {
        if (!b || 0 == b.length) return !0;
        if (!a || b.length > a.length) return _.E(L, "Too many track IDs"), !1;
        for (var c = 0, d = 0, e = 0; e < b.length; e++) {
            for (var f = !1, g = 0; g < a.length; g++)
                if (b[e] == a[g].trackId) {
                    f = !0;
                    break
                }
            if (!f) return _.E(L, "Track ID does not exist: " + b[e]), !1;
            "AUDIO" == a[g].type ? d++ : "VIDEO" == a[g].type && c++;
            if (1 < d || 1 < c) return _.E(L, "Maximum one active video and one active audio track supported"), !1
        }
        return !0
    };
    qk = function(a, b, c) {
        c.mediaSessionId = a.G;
        cast.receiver.Wa.Kg(c.type, b);
        a.Qg(new Gg("message", b, c))
    };
    rk = function(a, b, c, d) {
        b && (_.E(L, "Sending error: " + b.type + " " + b.reason), a.ja && c == a.U ? (b.requestId = d, a.ja(b)) : a.Ca(c, d, b.type, b.reason))
    };
    sk = function(a) {
        if (!a.h) return "IDLE";
        var b = a.l.getState();
        return "PLAYING" == b && !a.Bf && a.F ? "BUFFERING" : b
    };
    uk = function(a, b, c, d) {
        function e(k) {
            k ? f.status = [k] : f = null;
            return f
        }
        var f = {
                type: "MEDIA_STATUS"
            },
            g = a.o && a.o.message.media || null;
        if (!a.h && !a.H && !g) return f.status = [], f;
        a = tk(a, b, c, void 0 === d ? !1 : d);
        return hk(a) ? a.then(e) : e(a)
    };
    tk = function(a, b, c, d) {
        var e = !1;
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f = a.o && a.o.message.media || null;
        if (!a.h && !a.H && !f) return Promise.resolve(null);
        var g = {
            mediaSessionId: a.G,
            playbackRate: a.B,
            playerState: sk(a),
            currentTime: a.l.getCurrentTimeSec(),
            supportedMediaCommands: a.lf,
            volume: a.l.getVolume()
        };
        a.M && (g.preloadedItemId = a.M);
        var k = fk(a.Ba),
            l = gk(a.Ba);
        0 < k && 0 < l && (g.videoInfo = new Fc(k, l, a.Ba.j));
        if (a.h) g.activeTrackIds = a.h.activeTrackIds, b && (g.media = a.lb() || void 0, k = a.j.A) && (g.queueData = _.vb(k), g.queueData.items =
            void 0), g.currentItemId = a.h.itemId;
        else if (a.H && (b && (g.media = a.H.media || void 0), g.currentItemId = a.H.itemId, a.H = null), Rj(a.j) && (k = a.j.Ub())) g.loadingItemId = k.itemId;
        "IDLE" === g.playerState ? (a.J && (g.idleReason = a.J), f && (g.extendedStatus = new Gc(f, a.o.mediaSessionId))) : a.J = null;
        null != c && (g.customData = c);
        Rj(a.j) && (d && (g.items = a.j.qc(b, a.T && !e)), g.repeatMode = a.j.o);
        if (!a.Ch) return g;
        b = a.Ch(g);
        if (hk(b)) return b.then(function(m) {
            a.sf = !!g.breakStatus && void 0 !== g.breakStatus.currentBreakClipTime;
            return m
        });
        a.sf = !!g.breakStatus && void 0 !== g.breakStatus.currentBreakClipTime;
        return b
    };
    vk = function(a) {
        null != a.aa && (_.u.clearTimeout(a.aa), a.aa = null)
    };
    wk = function(a) {
        var b = a.l.getCurrentTimeSec();
        a.I = b;
        a.$h = b;
        a.oi = Date.now();
        clearTimeout(a.Zh);
        jk(a)
    };
    jk = function(a) {
        a.Zh = setTimeout(function() {
            jk(a);
            var b = sk(a);
            if ("IDLE" != b && "PAUSED" != b && !a.tf) {
                a.P && "PLAYING" == b && (_.H(L, "Triggering load complete, since media is playing."), xk(a));
                var c = a.I;
                a.I = a.l.getCurrentTimeSec();
                var d = a.F;
                a.F = a.Bf ? "BUFFERING" === a.l.getState() : 100 > 1E3 * Math.abs(a.I - c);
                d != a.F ? (ne(L, yk, "Buffering state changed, isPlayerBuffering: " + a.F + " old time: " + c + " current time: " + a.I), a.broadcastStatus(!1)) : a.vf !== b ? (ne(L, yk, "Player state changed, playerState: " + b + " old state: " + a.vf + " current time: " +
                    a.I), a.broadcastStatus(!1)) : a.F || a.sf || (b = 1E3 * (a.I - a.$h) - a.B * (Date.now() - a.oi), 1E3 < Math.abs(b) ? (ne(L, yk, "Time drifted: " + b), a.broadcastStatus(!1)) : a.h && Rj(a.j) && (b = a.j, (b = 0 > b.l ? null : "REPEAT_SINGLE" == b.o ? b.h[b.l] : b.l + 1 >= b.h.length && ("REPEAT_ALL_AND_SHUFFLE" == b.o || "REPEAT_OFF" == b.o) ? null : b.h[(b.l + 1) % b.h.length]) && "number" === typeof b.preloadTime && a.h.media && !a.o && "LIVE" != a.h.media.streamType && zk(a, b.preloadTime) && a.M != b.itemId && (a.ma ? (c = new Ak(b.itemId), c.requestId = 0, c.mediaSessionId = a.G, c.autoplay =
                    b.autoplay, c.currentTime = b.startTime, c.customData = b.customData || void 0, c.activeTrackIds = b.activeTrackIds, c.media = b.media, c = new Bk("preload", c, ""), a.M = b.itemId, _.I(L, "Sending preload event: " + JSON.stringify(c)), a.ma(c) && a.broadcastStatus(!1)) : _.I(L, "Not sending preload event"))))
            }
        }, 1E3)
    };
    Ck = function(a, b) {
        a.Ca("*:*", void 0, "ERROR", b && b.reason, b && b.customData, b && b.detailedErrorCode, a.h ? a.h.itemId : void 0)
    };
    Dk = function(a, b) {
        if (a.Bh) {
            b = xb(b);
            b.type = "CLOUD_STATUS";
            try {
                b = a.Bh(b)
            } catch (c) {
                _.E(L, "Cloud status handler failed. " + c);
                return
            }
            hk(b) ? b.then(function(c) {
                a.A.send("__cloud__", c)
            }) : a.A.send("__cloud__", b)
        }
    };
    Ek = function(a) {
        a.o = null;
        if (a.P)
            for (a.P = !1, a.tf = !1; !a.wf.isEmpty() && !a.P;) {
                var b = a,
                    c = b.Qg,
                    d, e = d = a.wf;
                0 === e.h.length && (e.h = e.j, e.h.reverse(), e.j = []);
                d = d.h.pop();
                c.call(b, d)
            }
    };
    Jk = function(a, b, c, d, e, f) {
        f = void 0 === f ? null : f;
        _.I(L, "Dispatching MediaManager load event");
        _.I(L, "Load message received:" + JSON.stringify(c));
        var g = !1,
            k = e;
        c.media || c.queueData ? c.media && c.media.tracks && !ok(c.media.tracks) ? (_.E(L, "Invalid tracks information"), g = !0) : c.activeTrackIds && c.media && !pk(c.media.tracks, c.activeTrackIds) && (g = !0) : (_.E(L, "Media or QueueData is mandatory"), g = !0);
        e = c.playbackRate;
        if (void 0 !== e && ("number" !== typeof e || .5 > e || 2 < e)) return _.E(L, "Bad value for playback rate " + e), {
            type: "INVALID_REQUEST",
            reason: "INVALID_PARAMS"
        };
        if (g) return k && k(), {
            type: "INVALID_REQUEST",
            reason: "INVALID_PARAMS"
        };
        a.o ? Fk(a, "LOAD_CANCELLED", f && f.customData, f && f.reason, f && f.detailedErrorCode) : a.h && (Gk(a, "INTERRUPTED", !1), k = a.broadcastStatus.bind(a, !1));
        a.o = {
            senderId: b,
            message: c,
            mediaSessionId: d ? a.G + 1 : a.G
        };
        Hk(a, c.media, !1);
        k && k();
        a.P = !0;
        if (d && (a.G++, a.J = null, a.W = void 0 !== c.queueData, d = Hj(a.j, c), hk(d))) return d.then(function() {
            a.W = !0;
            var l = a.j.Ub();
            !l || !l.media || c.media && l.media.contentId == c.media.contentId || (c.media &&
                _.I(L, "Implementation of queueing has provided " + l.media.contentId + " as the first item whilethe original media portion of the LOAD provided " + c.media.contentId), c.media = l.media, c.autoplay = c.autoplay || l.autoplay, c.currentTime = c.currentTime || l.startTime || a.j.B);
            Ik(a, b, c, k)
        }, function() {
            Fk(a, "LOAD_FAILED")
        }), null;
        Ik(a, b, c, k);
        return null
    };
    Ik = function(a, b, c, d) {
        a.h = xb(a.j.Ub());
        a.N = [];
        c.media = a.h.media || c.media;
        a.h.activeTrackIds = c.activeTrackIds;
        vk(a);
        a.D = c;
        if (a.Ta && a.l.preload) {
            var e = a.j.B;
            a.l.preload(void 0 !== c.autoplay ? c.autoplay : !0, 0 < c.currentTime ? c.currentTime : 0 < e ? e : 0, a.h.playbackDuration, a.h.startTime)
        }
        e = new Bk("load", c, b);
        var f = void 0;
        a.ha && (a.B = c.playbackRate ? c.playbackRate : 1, f = a.ha(e));
        Kk(a, e);
        d || a.broadcastStatus(!0);
        a.M = null;
        Promise.resolve(f).then(function() {
            Lk(a, b, c)
        }, function() {
            Lk(a, b, c)
        })
    };
    Lk = function(a, b, c) {
        ck(a.j).then(function(d) {
            Mk(a, d, b, c)
        }, function(d) {
            _.I(L, d)
        })
    };
    Nk = function(a, b) {
        a.o && (b.tracks = b.tracks || void 0, b.tracks && !ok(b.tracks) ? _.E(L, "Invalid tracks information") : b.activeTrackIds && !pk(b.tracks, b.activeTrackIds) ? _.E(L, "Invalid active tracks") : (a.h && a.h.media && (a.h.activeTrackIds = b.activeTrackIds, a.h.media.tracks = b.tracks, a.h.media.textTrackStyle = b.textTrackStyle), a.l.load("", !1, void 0, b, !0)))
    };
    Ok = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        a.h && a.h.media && (a.h.activeTrackIds = b.activeTrackIds, c && (a.h.media.tracks = b.tracks, a.h.media.textTrackStyle = b.textTrackStyle), a.o || a.broadcastStatus(c))
    };
    Hk = function(a, b, c) {
        b && ((void 0 === c ? 0 : c) && a.l && a.l.getMediaCategory && (c = a.l.getMediaCategory()) && (a.h.media.mediaCategory = c), b.mediaCategory || (a = cast.receiver.Y.getMediaCategory(b), b.mediaCategory = a || void 0))
    };
    Fk = function(a, b, c, d, e) {
        var f = a.h ? a.h.itemId : void 0;
        a.h && Gk(a, "ERROR", !1);
        a.o ? (b = b || "LOAD_FAILED", a.o.senderId == a.U ? a.ja && a.ja({
            type: b
        }) : "" != a.o.senderId && a.Ca(a.o.senderId, a.o.message.requestId, b, d, c, e, f), Ek(a)) : _.E(L, "Not sending LOAD error as there is no on going LOAD request")
    };
    xk = function(a) {
        if (a.o) {
            var b = a.o.message.requestId;
            a.broadcastStatus(!0, b, void 0, 0 != b || a.T);
            Ek(a)
        } else _.E(L, "Not sending status as there is no on going LOAD request")
    };
    Pk = function(a, b) {
        var c = !0;
        c = void 0 === c ? !0 : c;
        b = void 0 === b ? null : b;
        var d = a.j.Cd(),
            e;
        if (e = Rj(a.j) && -1 != d) e = a.j, e = d < (e.h && e.h.length || 0) - 1;
        e ? (Ck(a, b), a.xf("ERROR", b)) : (a.o ? Fk(a, "LOAD_FAILED", b && b.customData, b && b.reason, b && b.detailedErrorCode) : Ck(a, b), Gk(a, "ERROR", c))
    };
    Qk = function(a, b, c, d, e, f, g, k, l) {
        c = a.Cp.bind(a, b, c, d, e, f, g, k, void 0 === l ? null : l);
        d = a.j.j ? !0 : !1;
        d ? Qj(a.j, b).then(c, c) : c()
    };
    Rk = function(a, b) {
        a.B = b
    };
    Gk = function(a, b, c, d) {
        c = void 0 === c || c;
        if (d && !c) throw Error("customData and requestId should only be provided in broadcast mode");
        a.h ? (a.j.clear(), a.l.reset(b), b && (a.J = b), a.H = a.h, a.h = null, a.N = []) : _.I(L, "Nothing to reset, Media is already null");
        c && a.broadcastStatus(!1, d, void 0, void 0);
        a.D && (vk(a), a.aa = _.jf(function() {
            a.D = null;
            a.aa = null
        }, 9E5))
    };
    Sk = function(a, b) {
        var c = a.h && a.h.media && a.h.media.tracks;
        if (!c || 0 == c.length) return _.E(L, "No tracks available"), null;
        c = c.filter(function(f) {
            return "TEXT" == f.type
        }).map(function(f) {
            return f.trackId
        });
        if (0 == c.length) return _.E(L, "No text tracks available"), null;
        var d = a.h.activeTrackIds || [],
            e = c.filter(function(f) {
                return 0 <= d.indexOf(f)
            });
        if (!b.enableTextTracks) {
            if (0 < e.length) return a.N = e, d.filter(function(f) {
                return 0 > e.indexOf(f)
            })
        } else if (0 == e.length) return b = d.concat(0 < a.N.length ? a.N : [c[0]]), a.N = [],
            b;
        return d
    };
    Tk = function(a) {
        if (2 > a.length) return !0;
        for (var b = 0; b < a.length; b++)
            for (var c = b + 1; c < a.length; c++)
                if (a[b] == a[c]) return _.E(L, "Duplicate itemId: " + a[b] + "at positions:" + b + " " + c), !1;
        return !0
    };
    Uk = function(a) {
        for (var b = 0; b < a.length; b++) {
            if ("number" !== typeof a[b].itemId) return _.E(L, "Invalid itemId at position: " + b), !1;
            for (var c = b + 1; c < a.length; c++) {
                if ("number" !== typeof a[c].itemId) return _.E(L, "Invalid itemId at position: " + c), !1;
                if (a[b].itemId == a[c].itemId) return _.E(L, "Duplicate itemId: " + a[b].itemId + "at positions:" + b + " " + c), !1
            }
        }
        return !0
    };
    Vk = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = new Aj(a[c].itemId);
            d.media = a[c].media;
            d.autoplay = a[c].autoplay;
            d.startTime = a[c].startTime;
            d.playbackDuration = a[c].playbackDuration;
            d.preloadTime = a[c].preloadTime;
            d.activeTrackIds = a[c].activeTrackIds;
            d.customData = a[c].customData;
            b.push(d)
        }
        return b
    };
    Xk = function(a, b, c, d) {
        if (!b) return null;
        var e = new Wk;
        e.requestId = c || 0;
        e.mediaSessionId = a.G;
        e.type = "LOAD";
        e.autoplay = b.autoplay;
        e.currentTime = void 0 !== d ? d : b.startTime;
        e.activeTrackIds = b.activeTrackIds;
        e.customData = b.customData || void 0;
        e.media = b.media;
        a.D && (e.credentials = a.D.credentials, e.credentialsType = a.D.credentialsType);
        return e
    };
    zk = function(a, b) {
        if (a.h.media.duration - a.l.getCurrentTimeSec() <= b || 0 == b && a.l.Ae && a.l.Ae()) return !0;
        if (null == a.M) return !1;
        a.M = null;
        if (!a.fa) return !1;
        b = new Yk("CANCEL_PRELOAD");
        b.requestId = 0;
        b.mediaSessionId = a.G;
        b = new Bk("cancelpreload", b, "");
        _.I(L, "Sending cancel preload event: " + JSON.stringify(b));
        a.fa(b) && a.broadcastStatus(!1);
        return !1
    };
    $k = function(a, b, c) {
        _.I(L, "Dispatching MediaManager queueUpdate event");
        var d = !1;
        Rj(a.j) ? c.items && !Uk(c.items) ? d = !0 : c.repeatMode && !cast.receiver.media.tj(c.repeatMode) ? (_.E(L, "Invalid repeatMode"), d = !0) : Zk(a, c) || (d = !0) : (_.E(L, "Queue does not exist"), d = !0);
        if (d) return {
            type: "INVALID_REQUEST",
            reason: "INVALID_PARAMS"
        };
        if (c.items && 0 < c.items.length) {
            d = a.j;
            for (var e = c.items, f = [], g = 0; g < e.length; g++)
                for (var k = 0; k < d.h.length; k++)
                    if (e[g].itemId == d.h[k].itemId) {
                        f.push(e[g]);
                        break
                    }
            c.items = Vk(f)
        }
        b = new Bk("queueupdate",
            c, b);
        a.pa && a.pa(b);
        Kk(a, b);
        return null
    };
    Mk = function(a, b, c, d) {
        "NO_CHANGE" === b.changeType && void 0 !== c ? a.A.send(c, b) : (a.A.send("*:*", b), a.T && a.broadcastStatus(!0, d.requestId, d.customData, !0))
    };
    al = function(a, b, c, d, e) {
        var f = new Hc;
        f.changeType = b;
        f.itemIds = c;
        f.sequenceNumber = Mj(a.j, "NO_CHANGE" !== b);
        null != d && (f.insertBefore = d);
        e && (f.reorderItemIds = e);
        a.A.send("*:*", f)
    };
    Zk = function(a, b) {
        if (!b || !b.sequenceNumber) return !0;
        (a = b.sequenceNumber === Mj(a.j, !1)) || _.E(L, "Invalid Queue Sequence Number " + b.sequenceNumber);
        return a
    };
    Kk = function(a, b) {
        b.target = a;
        return a.zh.dispatchEvent(b)
    };
    Bk = function(a, b, c) {
        _.C.call(this, a);
        this.data = b;
        this.senderId = c
    };
    Yk = function(a) {
        this.type = a;
        this.requestId = 0;
        this.sequenceNumber = this.customData = this.mediaSessionId = void 0
    };
    Wk = function() {
        Yk.call(this, "LOAD");
        this.media = new Bc;
        this.autoplay = !1;
        this.loadOptions = this.credentialsType = this.credentials = this.queueData = this.activeTrackIds = this.playbackRate = this.currentTime = void 0
    };
    Ak = function(a) {
        Wk.call(this);
        this.type = "PRELOAD";
        this.itemId = a
    };
    bl = function() {
        Yk.call(this, "EDIT_TRACKS_INFO");
        this.enableTextTracks = this.isSuggestedLanguage = this.textTrackStyle = this.language = this.activeTrackIds = void 0
    };
    cl = function() {
        Yk.call(this, "SEEK");
        this.relativeTime = this.currentTime = this.resumeState = void 0
    };
    dl = function() {
        Yk.call(this, "QUEUE_UPDATE");
        this.shuffle = this.repeatMode = this.items = this.jump = this.currentTime = this.currentItemId = void 0
    };
    el = function(a) {
        Yk.call(this, "SESSION_STATE");
        this.sessionState = a
    };
    fl = function(a) {
        this.h = a
    };
    gl = function(a) {
        a.h.h(new Yk("PLAY"))
    };
    hl = function(a) {
        a.h.h(new Yk("PAUSE"))
    };
    il = function(a, b) {
        var c = new cl;
        c.relativeTime = b;
        a.h.h(c)
    };
    jl = function(a) {
        var b = new dl;
        b.jump = 1;
        a.h.h(b)
    };
    kl = function(a) {
        var b = new dl;
        b.jump = -1;
        a.h.h(b)
    };
    ll = function(a, b, c) {
        var d = new Ti;
        d.userAction = b;
        c && (d.clear = !0);
        a.h.H(d)
    };
    nl = function(a) {
        var b = this;
        this.j = this.l = null;
        this.D = function() {};
        this.A = a;
        this.B = _.Tg.L();
        fi(this.B).then(function() {
            ml(b, b.B)
        })
    };
    ol = function(a, b) {
        if (!a.j) throw Error("Command and control channel is not set");
        a.j.send("system-0", b)
    };
    ml = function(a, b) {
        a.l = b.h[cast.receiver.media.eb] || null;
        a.l ? (Eg(a.l, function(c, d, e) {
            if (e && "MEDIA_STATUS" === e.type) {
                if (d = e.status[0]) a.o = d.mediaSessionId;
                a.D(d)
            }
            return c === a.A
        }), a.j = b.h[cast.receiver.Eb.Qb] || null, a.j && Eg(a.j, function(c) {
            return c === a.A
        })) : _.H(pl, "media namespace is not available.")
    };
    ql = function(a, b, c) {
        _.A.call(this);
        this.h = null;
        this.o = !1;
        this.B = a;
        this.A = c;
        this.j = b || window;
        this.l = (0, _.Pa)(this.yl, this)
    };
    rl = function(a) {
        a = a.j;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
    };
    sl = function(a) {
        a = a.j;
        return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
    };
    tl = function(a, b, c) {
        _.A.call(this);
        this.h = a;
        this.o = b || 0;
        this.j = c;
        this.l = (0, _.Pa)(this.zl, this)
    };
    wl = function(a) {
        a = _.Ma(a);
        delete ul[a];
        _.ub(ul) && vl && vl.stop()
    };
    zl = function() {
        vl || (xl ? vl = new ql(function(b) {
            yl(b)
        }, xl) : vl = new tl(function() {
            yl(_.Ra())
        }, 20));
        var a = vl;
        a.isActive() || a.start()
    };
    yl = function(a) {
        _.nb(ul, function(b) {
            Al(b, a)
        });
        _.ub(ul) || zl()
    };
    Bl = function() {
        _.Sd.call(this);
        this.h = 0;
        this.endTime = this.startTime = null
    };
    Cl = function(a, b, c, d) {
        Bl.call(this);
        if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.j = a;
        this.F = b;
        this.duration = c;
        this.o = d;
        this.coords = [];
        this.progress = this.A = 0;
        this.l = null
    };
    Al = function(a, b) {
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        a.A = 1E3 / (b - a.l);
        a.l = b;
        Dl(a, a.progress);
        1 == a.progress ? (a.h = 0, wl(a), a.hb("finish"), a.hb("end")) : 1 == a.h && a.hb("animate")
    };
    Dl = function(a, b) {
        "function" === typeof a.o && (b = a.o(b));
        a.coords = Array(a.j.length);
        for (var c = 0; c < a.j.length; c++) a.coords[c] = (a.F[c] - a.j[c]) * b + a.j[c]
    };
    El = function(a, b) {
        _.C.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.fps = b.A;
        this.state = b.h
    };
    Fl = function(a) {
        return 1 - Math.pow(1 - a, 3)
    };
    Gl = function(a, b, c, d, e, f, g, k) {
        this.h = a;
        this.D = b;
        this.l = c;
        this.A = d;
        this.o = e;
        this.B = f;
        this.j = g;
        this.G = k
    };
    Hl = function(a, b) {
        if (0 == b) return a.h;
        if (1 == b) return a.j;
        var c = ve(a.h, a.l, b),
            d = ve(a.l, a.o, b);
        a = ve(a.o, a.j, b);
        c = ve(c, d, b);
        d = ve(d, a, b);
        return ve(c, d, b)
    };
    Il = function(a, b) {
        var c = (b - a.h) / (a.j - a.h);
        if (0 >= c) return 0;
        if (1 <= c) return 1;
        for (var d = 0, e = 1, f = 0, g = 0; 8 > g; g++) {
            f = Hl(a, c);
            var k = (Hl(a, c + 1E-6) - f) / 1E-6;
            if (1E-6 > Math.abs(f - b)) return c;
            if (1E-6 > Math.abs(k)) break;
            else f < b ? d = c : e = c, c -= (f - b) / k
        }
        for (g = 0; 1E-6 < Math.abs(f - b) && 8 > g; g++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = Hl(a, c);
        return c
    };
    Jl = function() {
        _.Sd.call(this);
        this.j = this.h = this.I = null;
        this.l = 0;
        this.o = "IDLE";
        this.A = null;
        var a = window,
            b = vl && vl.isActive();
        ld(vl);
        vl = null;
        xl = a;
        b && zl();
        this.F = !1
    };
    Kl = function(a) {
        "number" === typeof a.h && (a.l = a.h)
    };
    Ll = function(a) {
        return a.F && "number" === typeof a.h && "number" === typeof a.j
    };
    Nl = function(a, b) {
        a.dispatchEvent(new Ml(b))
    };
    Sl = function(a, b, c) {
        b !== c && Ol(a, b, c, 1E3, Pl, function(d) {
            a.dispatchEvent(new Ql(d))
        }, function(d) {
            a.dispatchEvent(new Ql(d));
            a.dispatchEvent(new Rl(d))
        })
    };
    Ul = function(a, b) {
        b = void 0 === b ? "SCROLL_UP" : b;
        if (Ll(a) && (Za(a.h), Za(a.j), "IDLE" === a.o && !a.A)) {
            if ("SCROLL_UP" === b) {
                if (a.l === a.j) return;
                b = a.h;
                var c = a.j
            } else if ("SCROLL_DOWN" === b) {
                if (a.l === a.h) return;
                b = a.j;
                c = a.h
            } else return;
            Ol(a, b, c, 700, Pl, function(d) {
                Nl(a, d)
            }, function(d) {
                Nl(a, d);
                a.dispatchEvent(new Tl(d));
                a.l = d
            })
        }
    };
    Vl = function(a) {
        Ll(a) && (Za(a.h), Za(a.j), a.A && (a.o = "ANIMATION_ELIGIBLE", a.A.listenOnce("pause", function(b) {
            a.l = b.coords[0]
        }), a.A.pause()))
    };
    Xl = function(a, b, c) {
        Ll(a) && (Za(a.h), Za(a.j), "ANIMATION_NOT_ELIGIBLE" !== a.o && ("IDLE" === a.o && (a.o = Math.abs(c) > Math.abs(b) ? "ANIMATION_ELIGIBLE" : "ANIMATION_NOT_ELIGIBLE"), "ANIMATION_ELIGIBLE" === a.o && (a.A && (a.A.dispose(), a.A = null), a.l -= c, a.I && cancelAnimationFrame(a.I), a.I = requestAnimationFrame(function() {
            Za(a.h);
            Za(a.j);
            Nl(a, Wl(a.l, a.h, a.j));
            a.I = null
        }))))
    };
    Zl = function(a, b) {
        if (Ll(a))
            if (Za(a.h), Za(a.j), "ANIMATION_ELIGIBLE" !== a.o) a.o = "IDLE";
            else {
                a.o = "IDLE";
                var c = Wl(a.l, a.h, a.j),
                    d = 0 > b ? a.j : a.h;
                Ol(a, c, d, Yl(b, c, d), Fl, function(e) {
                    Nl(a, e)
                }, function(e) {
                    Nl(a, e);
                    a.dispatchEvent(new Tl(d));
                    a.l = d
                })
            }
    };
    $l = function(a) {
        if (Ll(a))
            if (Za(a.h), Za(a.j), "ANIMATION_ELIGIBLE" !== a.o) a.o = "IDLE";
            else {
                a.o = "IDLE";
                var b = Wl(a.l, a.h, a.j),
                    c = b > a.j / 2 ? a.j : a.h;
                Ol(a, b, c, 300, Fl, function(d) {
                    Nl(a, d)
                }, function(d) {
                    Nl(a, d);
                    a.dispatchEvent(new Tl(c));
                    a.l = c
                })
            }
    };
    Ol = function(a, b, c, d, e, f, g) {
        b = new Cl([b], [c], d, e);
        b.listen("animate", function(k) {
            f(k.coords[0])
        });
        b.listen("finish", function(k) {
            g(k.coords[0]);
            a.A && (a.A.dispose(), a.A = null)
        });
        b.play();
        a.A = b
    };
    Ml = function(a) {
        _.C.call(this, "DRAWER_POSITION_CHANGED");
        this.position = a
    };
    Tl = function(a) {
        _.C.call(this, "DRAWER_ANIMATION_FINISHED");
        this.position = a
    };
    Ql = function(a) {
        _.C.call(this, "CAROUSEL_SCROLL_CHANGED");
        this.scrollLeft = a
    };
    Rl = function(a) {
        _.C.call(this, "CAROUSEL_ANIMATION_FINISHED");
        this.scrollLeft = a
    };
    Wl = function(a, b, c) {
        a < b ? a = b : a > c && (a = c);
        return a
    };
    am = function() {
        var a = new Gl(0, 0, .6, 0, 0, 1, 1, 1);
        return function(b) {
            b = Il(a, b);
            if (0 == b) b = a.D;
            else if (1 == b) b = a.G;
            else {
                var c = ve(a.D, a.A, b),
                    d = ve(a.A, a.B, b),
                    e = ve(a.B, a.G, b);
                c = ve(c, d, b);
                d = ve(d, e, b);
                b = ve(c, d, b)
            }
            return b
        }
    };
    Yl = function(a, b, c) {
        a = Math.abs(c - b) / Math.abs(a) * 1E3;
        500 < a && (a = 500);
        return a
    };
    dm = function(a) {
        cast.receiver.C.Pb.call(this, function() {
            a: {
                switch (b.h) {
                    case "REPEAT_OFF":
                        var c = "REPEAT_ALL";
                        break a;
                    case "REPEAT_ALL":
                    case "REPEAT_ALL_AND_SHUFFLE":
                        c = b.j ? "REPEAT_SINGLE" : "REPEAT_OFF";
                        break a
                }
                c = "REPEAT_OFF"
            }
            b.l(c);bm(b, c)
        }, "", "btn-repeat");
        var b = this;
        this.l = a;
        this.j = !0;
        this.h = "REPEAT_OFF";
        cm(this, this.h)
    };
    bm = function(a, b) {
        a.h = b;
        "REPEAT_ALL_AND_SHUFFLE" === a.h ? cm(a, "REPEAT_ALL") : cm(a, a.h)
    };
    cm = function(a, b) {
        a.element.dataset.state = em[b].state;
        a.element.title = em[b].accessibilityText
    };
    fm = function(a, b, c) {
        cast.receiver.C.Pb.call(this, function() {
            d.j(!d.h)
        }, b, c);
        var d = this;
        this.h = !1;
        this.j = a;
        this.element.setAttribute("aria-pressed", String(this.h))
    };
    gm = function(a, b) {
        b !== a.h && (a.h = b, a.element.setAttribute("aria-pressed", String(b)))
    };
    hm = function(a, b, c) {
        _.A.call(this);
        this.F = null != c ? a.bind(c) : a;
        this.B = b;
        this.j = null;
        this.l = !1;
        this.A = 0;
        this.h = null
    };
    im = function(a) {
        a.h = _.jf(function() {
            a.h = null;
            a.l && !a.A && (a.l = !1, im(a))
        }, a.B);
        var b = a.j;
        a.j = null;
        a.F.apply(null, b)
    };
    om = function() {
        var a = $c.call(this) || this;
        a.Ga = Ef() && Df();
        Ef() ? (0, cast.receiver.C.ln)(a) : (0, cast.receiver.C.mn)(a);
        a.D = a.Ga ? jm(a) : null;
        a.Ba = Of.L();
        a.ja = 0;
        a.X = !1;
        a.F = function() {};
        a.G = function() {};
        a.I = a.querySelector("#live-label");
        a.I.textContent = cast.receiver.V.Kf;
        a.l = a.querySelector("#scrubber-layer");
        a.h = a.querySelector("#scrubber");
        a.P = a.l.querySelector("#progress-fill");
        a.A = 0;
        a.ha = a.l.querySelector("#progress-seekable-range");
        a.fa = a.l.querySelector("#progress-seekable-played");
        a.N = a.l.querySelector("#progress-breaks");
        a.M = a.l.querySelector("#progress-loading");
        a.ma = a.querySelector("#current-time");
        a.H = a.querySelector("#total-time");
        a.wa = parseFloat(a.h.min);
        a.sa = parseFloat(a.h.max);
        a.U = 0;
        a.B = 0;
        a.j = !1;
        a.ra = !1;
        a.pa = !1;
        a.W = !1;
        a.Z = function() {};
        a.$ = !1;
        a.T = void 0;
        a.J = void 0;
        a.aa = null;
        a.o = Ud.L();
        a.xa = new hm(function(b) {
            var c = parseFloat(b) + a.U;
            a.ma.textContent = a.aa ? cast.receiver.C.Y.gg(a.aa + c) : cast.receiver.C.Y.Na(c);
            km(a, parseFloat(b), a.B)
        }, 100);
        a.h.addEventListener("input", function() {
            lm(a, a.h.value)
        });
        a.h.addEventListener("change",
            function() {
                mm(a)
            });
        a.h.addEventListener("click", function() {
            a.j && mm(a)
        });
        a.h.addEventListener("touchend", function() {
            a.j = !1
        });
        a.h.addEventListener("touchcancel", function() {
            a.j = !1
        });
        Df() && (Qf(a, !0), a.addEventListener("focus", function() {
            a.Ba.focus(a.h)
        }), a.h.addEventListener("keydown", function(b) {
            b.preventDefault();
            "ArrowLeft" === b.key && (a.j || a.G(), a.h.value = String(parseInt(a.h.value, 10) - 10), lm(a, a.h.value), Wd(a.o, !0), b.stopPropagation());
            "ArrowRight" === b.key && (a.j || a.G(), a.h.value = String(parseInt(a.h.value,
                10) + 10), lm(a, a.h.value), Wd(a.o, !0), b.stopPropagation());
            "Enter" === b.key && (a.j ? (a.Z(parseFloat(a.h.value) + a.U), a.F(), a.j = !1, Wd(a.o, !1), Xd(a.o)) : (a.X ? a.G() : a.F(), $d(a.o)), b.stopPropagation())
        }), a.h.addEventListener("blur", function() {
            a.h.value = a.ja;
            var b = a.h.value;
            "number" === typeof a.A && nm(a, b);
            a.xa.o(b);
            a.j && (a.j = !1, a.F(), Wd(a.o, !1), $d(a.o))
        }));
        return a
    };
    jm = function(a) {
        var b = _.we(document, "IMG");
        b.setAttribute("role", "presentation");
        b.classList.add("btn-icon");
        var c = _.we(document, "DIV");
        c.classList.add("play-pause-indicator", "btn-play-pause");
        c.appendChild(b);
        xe(c, a.querySelector("play-pause-placeholder"));
        return c
    };
    lm = function(a, b) {
        a.j = !0;
        "number" === typeof a.A && nm(a, b);
        a.xa.o(b)
    };
    mm = function(a) {
        a.Z(parseFloat(a.h.value) + a.U);
        a.j = !1
    };
    nm = function(a, b) {
        var c = a.sa - a.A;
        b -= a.A;
        c = c ? b / c : 0;
        b = (.5 - c) / 200;
        0 < c && (c += b);
        a.P.style.transform = "scaleX(" + c + ")";
        a.P.style.left = a.A / a.B * 100 + "%";
        a.T ? b = a.T : (a.T = parseInt(window.getComputedStyle(a.l, null).width, 10), b = a.T || void 0);
        if (a.J) var d = a.J;
        else a.J = parseInt(getComputedStyle(a.M).getPropertyValue("--loading-bar-width"), 10), d = a.J || void 0;
        a.M.style.transform = b && d ? "scaleX(" + b / d * (1 - c) + ")" : "scaleX(0)"
    };
    pm = function(a, b) {
        a.X = b;
        if (a.D) {
            var c = b ? cast.receiver.V.mm : cast.receiver.V.lm;
            a.D.dataset.state = b ? "playing" : "paused";
            a.D.title = c
        }
    };
    qm = function(a) {
        return a.$ && !a.W && "none" != a.style.display
    };
    rm = function(a, b) {
        a.h.max = String(b);
        a.sa = parseFloat(a.h.max)
    };
    sm = function(a, b) {
        for (; a.N.firstChild;) a.N.removeChild(a.N.firstChild);
        b && b.forEach(function(c) {
            var d = 1 < c.width ? c.width : 1,
                e = document.createElement("div");
            e.classList.add("break-mark");
            100 < c.position + d ? e.style.right = "0" : e.style.left = c.position + "%";
            e.style.width = d + "%";
            a.N.appendChild(e)
        })
    };
    tm = function(a) {
        var b = 0 >= a.B || !a.pa || a.W;
        a.h.disabled = b;
        Df() && Qf(a, !b)
    };
    km = function(a, b, c) {
        c = void 0 === c ? -1 : c;
        c = !cast.receiver.C.Y.Yc(c) || 0 >= c ? cast.receiver.C.Y.Na(b) : cast.receiver.V.Fb(cast.receiver.V.cm, {
            CURRENT_TIME: cast.receiver.C.Y.Na(b),
            DURATION: cast.receiver.C.Y.Na(c)
        });
        a.h.setAttribute("aria-valuenow", b);
        a.h.setAttribute("aria-valuetext", c)
    };
    zm = function(a, b, c) {
        var d = this;
        this.j = a;
        this.h = Of.L();
        this.D = a.querySelector("goog-timeline");
        this.o = this.j.querySelector("goog-buttons-bar");
        this.B = this.j.querySelector("#break-skip-btn");
        this.J = a.querySelector("#alert-show-controls");
        this.J.textContent = cast.receiver.V.ei;
        this.I = a.querySelector("#alert-hide-controls");
        this.I.textContent = cast.receiver.V.di;
        this.G = !1;
        this.F = !0;
        this.H = this.M = this.A = !1;
        this.P = b;
        this.N = c;
        this.l = Ud.L();
        this.l.l = 4500;
        this.l.listen("EXPIRED", function() {
            um(d)
        });
        this.l.I = !0;
        Qf(this.j, !0);
        this.h.focus(this.j);
        this.h.B = function() {
            var e = d.h.o;
            e && Rf(e) ? d.h.focus(e) : d.A ? vm(d) : wm(d)
        };
        this.j.addEventListener("keyup", function(e) {
            xm(e)
        });
        this.j.addEventListener("keypress", function(e) {
            xm(e)
        });
        this.j.addEventListener("keydown", function(e) {
            xm(e);
            var f = e.key;
            "Enter" !== f || d.A || (d.G ? d.P() : d.N());
            "BrowserBack" === f ? (e.stopPropagation(), d.A && (e.preventDefault(), um(d))) : ($d(d.l), d.A ? ("ArrowDown" === f && d.h.isFocused(d.D) && Rf(d.o) && d.h.focus(d.o), "ArrowUp" === f && (!d.h.isFocused(d.D) && Rf(d.D) ?
                d.h.focus(d.D) : um(d)), "ArrowRight" === f && d.h.isFocused(d.o) && Rf(d.B) && d.h.focus(d.B), "ArrowLeft" === f && d.h.isFocused(d.B) && d.h.focus(d.o)) : ym(d))
        })
    };
    vm = function(a) {
        Rf(a.D) ? a.h.focus(a.D) : Rf(a.B) ? a.h.focus(a.B) : Rf(a.o) ? a.h.focus(a.o) : a.h.focus(a.j)
    };
    wm = function(a) {
        Rf(a.B) ? a.h.focus(a.B) : a.h.focus(a.j);
        a.o.j = null
    };
    ym = function(a) {
        a.A = !0;
        Am(a);
        a.Mc()
    };
    um = function(a) {
        a.A = !1;
        Am(a);
        a.o.j = null;
        a.Mc()
    };
    Am = function(a) {
        var b = a.A;
        K(a.J, b);
        K(a.I, !b);
        a.j.classList.toggle("active", b)
    };
    xm = function(a) {
        Bm.includes(a.key) && (a.preventDefault(), a.stopPropagation())
    };
    Dm = function(a) {
        if (a !== _.Cm) throw Error("Bad secret");
    };
    _.Em = function() {};
    _.Fm = function(a, b) {
        Dm(b);
        this.h = a
    };
    _.Gm = function(a) {
        if (a instanceof _.Fm) return a.h;
        throw Error("Unexpected type when unwrapping TrustedResourceUrl");
    };
    Hm = function() {};
    Im = function(a, b) {
        Dm(b);
        this.h = a
    };
    _.Jm = function(a) {
        return a instanceof _.Em ? _.Gm(a) : _.Lb(a)
    };
    Km = function(a) {
        if (a instanceof Hm)
            if (a instanceof Im) a = a.h;
            else throw Error("Unexpected type when unwrapping SafeUrl");
        else a = _.$b(a);
        return a
    };
    Lm = function(a, b) {
        throw Error(void 0 === b ? "unexpected value " + a + "!" : b);
    };
    _.Mm = function(a, b) {
        a.src = _.Jm(b);
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        var d = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]");
        (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    Nm = function(a) {
        this.isValid = a
    };
    Om = function(a) {
        return new Nm(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    Pm = function(a) {
        return a && a.Jb ? a.nb() : a
    };
    Qm = function(a, b) {
        return b
    };
    Tm = function(a, b, c) {
        if (Object.hasOwnProperty.call(Rm, a) && (a = Rm[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
            for (var d = null, e = !1, f = 0, g = a.length; f < g; ++f) {
                var k = a[f],
                    l = k.Fa;
                if (!l) return k.da;
                null === d && (d = {});
                l = Object.hasOwnProperty.call(d, l) ? d[l] : d[l] = c(l);
                if (l === k.Ha) return k.da;
                null == l && (e = !0)
            }
            if (e) return null
        }
        b = Sm[b];
        return "number" === typeof b ? b : null
    };
    Wm = function(a) {
        var b = Um;
        if (!b) {
            b = Vm();
            var c = {};
            for (d in b) c[b[d]] = d;
            b = Um = c
        }
        var d = b[a];
        return "string" === typeof d ? d : yc(a)
    };
    Xm = function(a) {
        a = String(a).toLowerCase();
        var b = Vm()[a];
        return "string" === typeof b ? b : xc(a)
    };
    Ym = function(a) {
        a = a.toLowerCase();
        a = Vm()[a];
        return "string" === typeof a ? a : null
    };
    Vm = function() {
        if (!Zm) {
            for (var a = Object.assign({}, $m), b = _.q(an), c = b.next(); !c.done; c = b.next()) c = c.value, a[c.toLowerCase()] = c;
            Zm = a
        }
        return Zm
    };
    gn = function(a, b) {
        var c = window.customElements;
        return c && c.get(a) || !0 === bn[a] ? 2 : "HTMLUnknownElement" === b.name ? 1 : "HTMLElement" === b.name && cn.test(a) ? 3 : 0
    };
    on = function(a, b) {
        var c, d;
        switch (b) {
            case "innerHTML":
                return 1 === mn(a) ? 2 : null;
            case "textContent":
                return a = mn(a), 1 === a || 6 === a ? 1 : null;
            default:
                return null !== (d = null === (c = nn[a.localName]) || void 0 === c ? void 0 : c[b]) && void 0 !== d ? d : null
        }
    };
    mn = function(a) {
        var b = a.localName,
            c = gn(b, a.constructor);
        switch (c) {
            case 0:
            case 1:
                return pn(b, a);
            case 3:
            case 2:
                return 1;
            default:
                Lm(c, "got an unknown element classification")
        }
    };
    pn = function(a, b) {
        var c = Object.hasOwnProperty.call(qn, a) ? qn[a] : null;
        return null !== c ? c : Object.hasOwnProperty.call(rn, a) && b instanceof SVGElement ? rn[a] : null
    };
    tn = function(a) {
        return (a = a.split(sn, 2)) ? {
            url: a[0],
            metadata: a[1]
        } : null
    };
    vn = function(a) {
        var b = String(a.url).replace(un, encodeURIComponent);
        if (a = a.metadata) {
            un.lastIndex = 0;
            if (un.test(a)) return null;
            b += " " + a
        }
        return b
    };
    wn = function(a, b, c) {
        a ? console.warn(b, c) : console.log(b)
    };
    xn = function(a, b, c) {
        return c
    };
    Fn = function(a, b, c) {
        return [, {
            ib: function(d, e, f) {
                return f
            },
            jb: void 0,
            wb: void 0,
            xb: void 0
        }, {
            ib: void 0,
            jb: void 0,
            wb: void 0,
            xb: "HTML"
        }, {
            ib: void 0,
            jb: void 0,
            wb: yn,
            xb: "URL"
        }, {
            ib: void 0,
            jb: void 0,
            wb: yn,
            xb: "RESOURCE_URL"
        }, {
            ib: void 0,
            jb: void 0,
            wb: zn,
            xb: "STYLE"
        }, , {
            ib: void 0,
            jb: void 0,
            wb: An,
            xb: "JAVASCRIPT"
        }, {
            ib: void 0,
            jb: function(d, e, f) {
                f = String(f).toLowerCase();
                a: {
                    var g = null;
                    (d = Bn[d]) && (g = d[e]);
                    if ("number" !== typeof g && ((d = Bn["*"]) && (g = d[e]), "number" !== typeof g)) {
                        e = !1;
                        break a
                    }
                    e = !0 === Cn[g][String(f).toLowerCase()]
                }
                return e ?
                    f : zn
            },
            wb: zn,
            xb: void 0
        }, {
            ib: void 0,
            jb: void 0,
            wb: zn,
            xb: "CONSTANT"
        }, {
            ib: void 0,
            jb: function(d, e, f) {
                return a.test(f) ? f : zn
            },
            wb: zn,
            xb: "CONSTANT"
        }, {
            ib: function(d, e, f, g) {
                if ("string" === typeof f) var k = (k = f.match(Dn)) ? k.map(tn).filter(Boolean) : [];
                else if (Array.isArray(f)) k = f;
                else return yn;
                var l = k;
                k = [];
                var m = [],
                    n = {};
                if (Array.isArray(l))
                    for (var t = 0, v = l.length; t < v; ++t) {
                        var x = l[t],
                            B = x && x.url;
                        if (B) {
                            var G = b(B, "URL", n);
                            if (G) {
                                var W = G !== n;
                                (W ? k : m).push({
                                    url: W ? G : B,
                                    metadata: x.metadata
                                })
                            }
                        }
                    } else m.push(l);
                l = m.length ? JSON.stringify(m) :
                    null;
                m = En;
                if (k.length) {
                    if (!Array.isArray(k)) throw Error();
                    m = k.map(vn).filter(Boolean).join(" , ") || En
                }
                l && c && c(!0, "Failed to sanitize attribute value of <" + d + ">: <" + d + " " + e + '="' + f + '">: ' + l, g);
                return m === En ? yn : m
            },
            jb: void 0,
            wb: void 0,
            xb: void 0
        }]
    };
    In = function(a, b) {
        var c, d;
        if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
            var e = (null === (c = window.ShadyDOM) || void 0 === c ? 0 : c.inUse) && !0 === (null === (d = window.ShadyDOM) || void 0 === d ? void 0 : d.noPatch) ? window.ShadyDOM.wrap : function(t) {
                    return t
                },
                f = function(t) {
                    var v = Gn.get(t);
                    void 0 === v && Gn.set(t, v = []);
                    return v
                },
                g = new Map,
                k = a.createElement;
            a.createElement = function(t, v) {
                t = k.call(a, t, v);
                v = null === v || void 0 === v ? void 0 : v.scope;
                void 0 !== v && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom(t,
                    v), void 0 === v || Hn.has(v) || (v = f(v), v.push.apply(v, _.ka(Array.from(t.content.querySelectorAll("style")).map(function(x) {
                    var B;
                    null === (B = x.parentNode) || void 0 === B ? void 0 : B.removeChild(x);
                    return x.textContent
                })))));
                return t
            };
            var l = document.createDocumentFragment(),
                m = document.createComment("");
            b = b.prototype;
            var n = b.Db;
            b.Db = function(t, v) {
                v = void 0 === v ? this : v;
                var x, B, G, W = e(this.gb).parentNode,
                    F = null === (x = this.options) || void 0 === x ? void 0 : x.scope;
                if ((W instanceof ShadowRoot || W === (null === (B = this.options) || void 0 ===
                        B ? void 0 : B.Ht)) && void 0 !== F && !Hn.has(F)) {
                    var ba = this.gb,
                        mc = this.Rb;
                    l.appendChild(m);
                    this.gb = m;
                    this.Rb = null;
                    n.call(this, t, v);
                    t = (null === t || void 0 === t ? 0 : t._$litType$) ? this.ia.Nf.Pc : document.createElement("template");
                    v = f(F);
                    var wb = 0 !== v.length;
                    if (wb) {
                        var Mb = document.createElement("style");
                        Mb.textContent = v.join("\n");
                        t.content.appendChild(Mb)
                    }
                    Hn.add(F);
                    Gn.delete(F);
                    window.ShadyCSS.prepareTemplateStyles(t, F);
                    wb && window.ShadyCSS.nativeShadow && (F = t.content.querySelector("style"), null !== F && t.content.appendChild(F));
                    l.removeChild(m);
                    if (null === (G = window.ShadyCSS) || void 0 === G ? 0 : G.nativeShadow) F = t.content.querySelector("style"), null !== F && l.appendChild(F.cloneNode(!0));
                    W.insertBefore(l, mc);
                    this.gb = ba;
                    this.Rb = mc
                } else n.call(this, t, v)
            };
            b.vi = function(t) {
                var v, x = null === (v = this.options) || void 0 === v ? void 0 : v.scope,
                    B = g.get(x);
                void 0 === B && g.set(x, B = new Map);
                x = B.get(t.strings);
                void 0 === x && B.set(t.strings, x = new a(t, this.options));
                return x
            }
        }
    };
    Jn = function(a) {
        return a
    };
    Kn = function() {
        return Jn
    };
    Mn = function(a) {
        return null === a || "object" != typeof a && "function" != typeof a || Ln(a)
    };
    Nn = function(a) {
        var b = _.za.apply(1, arguments),
            c = {};
        return c._$litType$ = 1, c.strings = a, c.values = b, c
    };
    Qn = function(a, b) {
        var c = b._$litPart$;
        void 0 === c && (b._$litPart$ = c = new On(b.insertBefore(Pn.createComment(""), null), null, void 0, {}));
        c.Db(a);
        return c
    };
    ao = function(a, b) {
        var c = a.strings,
            d = a._$litType$;
        this.parts = [];
        for (var e = a = 0, f = c.length - 1, g = this.parts, k = c.length - 1, l = [], m = 2 === d ? "<svg>" : "", n, t = Rn, v = 0; v < k; v++) {
            for (var x = c[v], B = -1, G = void 0, W = 0, F; W < x.length;) {
                t.lastIndex = W;
                F = t.exec(x);
                if (null === F) break;
                W = t.lastIndex;
                if (t === Rn)
                    if ("!--" === F[1]) t = Sn;
                    else if (void 0 !== F[1]) t = Tn;
                else if (void 0 !== F[2]) Un.test(F[2]) && (n = new RegExp("</" + F[2], "g")), t = Vn;
                else {
                    if (void 0 !== F[3]) throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
                } else t === Vn ? ">" === F[0] ? (t = null !== n && void 0 !== n ? n : Rn, B = -1) : void 0 === F[1] ? B = -2 : (B = t.lastIndex - F[2].length, G = F[1], t = void 0 === F[3] ? Vn : '"' === F[3] ? Wn : Xn) : t === Wn || t === Xn ? t = Vn : t === Sn || t === Tn ? t = Rn : (t = Vn, n = void 0)
            }
            console.assert(-1 === B || t === Vn || t === Xn || t === Wn, "unexpected parse state B");
            W = t === Vn && c[v + 1].startsWith("/>") ? " " : "";
            m += t === Rn ? x + Yn : 0 <= B ? (l.push(G), x.slice(0, B) + "$lit$" + x.slice(B)) + Zn + W : x + Zn + (-2 === B ? (l.push(void 0), v) : W)
        }
        n = m + (c[k] || "<?>") + (2 === d ? "</svg>" : "");
        if (!Array.isArray(c) || !c.hasOwnProperty("raw")) throw Error("Internal Error: expected template strings to be an array with a 'raw' field. Please file a bug at https://github.com/lit/lit/issues/new?template=bug_report.md and include information about your build tooling, if any.");
        c = [void 0 !== $n ? $n.createHTML(n) : n, l];
        c = _.q(c);
        l = c.next().value;
        c = c.next().value;
        this.Pc = ao.createElement(l, b);
        bo.currentNode = this.Pc.content;
        2 === d && (b = this.Pc.content, d = b.firstChild, d.remove(), b.append.apply(b, _.ka(d.childNodes)));
        for (; null !== (b = bo.nextNode()) && g.length < f;) {
            if (1 === b.nodeType) {
                d = b.localName;
                if (/^(?:textarea|template)$/i.test(d) && b.innerHTML.includes(Zn)) {
                    l = "Expressions are not supported inside `" + d + "` elements. See https://lit.dev/msg/expression-in-" + (d + " for more information.");
                    if ("template" ===
                        d) throw Error(l);
                    co("", l)
                }
                if (b.hasAttributes()) {
                    d = [];
                    l = _.q(b.getAttributeNames());
                    for (n = l.next(); !n.done; n = l.next())
                        if (k = n.value, k.endsWith("$lit$") || k.startsWith(Zn)) n = c[e++], d.push(k), void 0 !== n ? (k = b.getAttribute(n.toLowerCase() + "$lit$").split(Zn), n = /([.?@])?(.*)/.exec(n), g.push({
                            type: 1,
                            index: a,
                            name: n[2],
                            strings: k,
                            Pi: "." === n[1] ? eo : "?" === n[1] ? fo : "@" === n[1] ? go : ho
                        })) : g.push({
                            type: 6,
                            index: a
                        });
                    d = _.q(d);
                    for (n = d.next(); !n.done; n = d.next()) b.removeAttribute(n.value)
                }
                if (Un.test(b.tagName) && (d = b.textContent.split(Zn),
                        l = d.length - 1, 0 < l)) {
                    b.textContent = io ? io.emptyScript : "";
                    for (n = 0; n < l; n++) b.append(d[n], Pn.createComment("")), bo.nextNode(), g.push({
                        type: 2,
                        index: ++a
                    });
                    b.append(d[l], Pn.createComment(""))
                }
            } else if (8 === b.nodeType)
                if (b.data === jo) g.push({
                    type: 2,
                    index: a
                });
                else
                    for (d = -1; - 1 !== (d = b.data.indexOf(Zn, d + 1));) g.push({
                        type: 7,
                        index: a
                    }), d += Zn.length - 1;
            a++
        }
    };
    lo = function(a, b, c, d) {
        c = void 0 === c ? a : c;
        var e, f, g, k;
        if (b === ko) return b;
        var l = void 0 !== d ? null === (e = c.wi) || void 0 === e ? void 0 : e[d] : c.zn,
            m = Mn(b) ? void 0 : b._$litDirective$;
        (null === l || void 0 === l ? void 0 : l.constructor) !== m && (null === (f = null === l || void 0 === l ? void 0 : l._$notifyDirectiveConnectionChanged) || void 0 === f ? void 0 : f.call(l, !1), void 0 === m ? l = void 0 : (l = new m(a), l.xn(a, c, d)), void 0 !== d ? (null !== (g = (k = c).wi) && void 0 !== g ? g : k.wi = [])[d] = l : c.zn = l);
        void 0 !== l && (b = lo(a, l.yn(a, b.values), l, d));
        return b
    };
    mo = function(a, b) {
        this.h = [];
        this.Lf = void 0;
        this.Nf = a;
        this.La = b
    };
    On = function(a, b, c, d) {
        var e;
        this.type = 2;
        this.ia = no;
        this.Lf = void 0;
        this.gb = a;
        this.Rb = b;
        this.La = c;
        this.options = d;
        this.xi = null !== (e = null === d || void 0 === d ? void 0 : d.isConnected) && void 0 !== e ? e : !0;
        this.Lc = void 0
    };
    ho = function(a, b, c, d, e) {
        this.type = 1;
        this.ia = no;
        this.Lf = void 0;
        this.element = a;
        this.name = b;
        this.La = d;
        this.options = e;
        2 < c.length || "" !== c[0] || "" !== c[1] ? (this.ia = Array(c.length - 1).fill(new String), this.strings = c) : this.ia = no;
        this.Kc = void 0
    };
    eo = function() {
        ho.apply(this, arguments);
        this.type = 3
    };
    fo = function() {
        ho.apply(this, arguments);
        this.type = 4
    };
    go = function(a, b, c, d, e) {
        ho.call(this, a, b, c, d, e);
        this.type = 5;
        if (void 0 !== this.strings) throw Error("A `<" + a.localName + ">` has a `@" + b + "=...` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.");
    };
    oo = function(a, b, c) {
        this.element = a;
        this.type = 6;
        this.Lf = void 0;
        this.La = b;
        this.options = c
    };
    po = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    ro = function() {
        var a = $c.call(this) || this;
        a.F = !1;
        a.G = new po;
        qo(a);
        return a
    };
    qo = function(a) {
        a.F || (a.F = !0, setTimeout(function() {
            a.F = !1;
            a.D();
            a.G.resolve()
        }, 0))
    };
    so = function(a, b, c) {
        b = new CustomEvent(b, {
            bubbles: !0,
            composed: !0,
            detail: void 0 === c ? null : c
        });
        a.dispatchEvent(b)
    };
    to = function(a) {
        return void 0 !== (null === a || void 0 === a ? void 0 : a._$litType$)
    };
    vo = function(a, b) {
        var c, d = uo(a.gb).parentNode,
            e = a.Rb;
        if (void 0 === b) uo(d).insertBefore(document.createComment(""), e), uo(d).insertBefore(document.createComment(""), e);
        else {
            var f = uo(b.Rb).nextSibling,
                g = b.La,
                k = g !== a;
            if (k) {
                null === (c = b.Zs) || void 0 === c ? void 0 : c.call(b, a);
                b.La = a;
                var l;
                void 0 !== b.Mf && (l = a.fb) !== g.fb && b.Mf(l)
            }
            if (f !== e || k)
                for (a = b.gb; a !== f;) b = uo(a).nextSibling, uo(d).insertBefore(a, e), a = b
        }
    };
    wo = function(a) {
        return function() {
            var b = _.za.apply(0, arguments),
                c = {};
            return c._$litDirective$ = a, c.values = b, c
        }
    };
    xo = function() {};
    yo = function() {
        this.l = new WeakMap
    };
    zo = function(a) {
        var b;
        if (1 !== a.type || "class" !== a.name || 2 < (null === (b = a.strings) || void 0 === b ? void 0 : b.length)) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    };
    Bo = function() {
        this.j = Ao
    };
    Co = function(a) {
        var b;
        if (1 !== a.type || "style" !== a.name || 2 < (null === (b = a.strings) || void 0 === b ? void 0 : b.length)) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    };
    Do = function() {
        var a = ro.call(this) || this;
        a.j = "";
        a.h = !1;
        a.l = !0;
        a.attachShadow({
            mode: "open"
        });
        return a
    };
    Fo = function(a) {
        return Nn(Eo, a.h ? cast.receiver.V.hi : cast.receiver.V.ji, a.h && !a.l ? "true" : "false", function() {
            a.h ? so(a, "PAUSE") : so(a, "PLAY")
        }, a.h ? "pause-icon" : "play-icon")
    };
    Io = function(a) {
        return a.j ? Nn(Go, cast.receiver.V.Zl, Ho({
            content: cast.receiver.C.Y.Ua(a.j)
        }), function() {
            return so(a, "ALBUM_ART_CLICK")
        }) : null
    };
    Jo = function(a) {
        switch (navigator.language.split("-")[0]) {
            case "ja":
                var b = {
                    PREVIOUS: "\u524d\u306e\u30da\u30fc\u30b8",
                    SHOW_MORE: "\u6b21\u306e\u30da\u30fc\u30b8",
                    PLAY_FIRST: "1\u3064\u76ee\u3092\u518d\u751f\u3057\u3066"
                };
                b.PLAY_TITLE = a + "\u3092\u518d\u751f\u3057\u3066";
                return b;
            default:
                return b = {
                    PREVIOUS: "Previous page",
                    SHOW_MORE: "Next page",
                    PLAY_FIRST: "Play the first one"
                }, b.PLAY_TITLE = "Play " + a, b
        }
    };
    Ko = function() {
        var a = ro.call(this) || this;
        a.attachShadow({
            mode: "open"
        });
        a.j = null;
        a.l = !1;
        a.B = !1;
        a.A = !1;
        a.o = !1;
        a.h = !0;
        a.H = null;
        a.I = new hm(function(b) {
            b.closest("goog-suggestions-bar") || (b = a.shadowRoot.querySelector(".suggestions-bar-root")) && !b.classList.contains("is-hidden") && (id("Cast.Controls.MediaBrowseSuggestionsBarHidden"), a.h = !0, qo(a))
        }, 1E3);
        return a
    };
    Oo = function(a, b) {
        if (!b || 0 === b.items.length) return Nn(Lo);
        var c = b.items.find(function(f) {
                return !!f.title && 14 >= f.title.length
            }),
            d = Jo(c ? c.title : ""),
            e = [{
                he: "play-first-chip",
                ie: function() {
                    var f = b.items[0];
                    z("Cast.Controls.MediaBrowseSuggestionSelected", 3);
                    so(a, "PLAY_CHIP_SELECTED", f)
                },
                label: d.PLAY_FIRST
            }];
        c && e.push({
            he: "play-title-chip",
            ie: function() {
                z("Cast.Controls.MediaBrowseSuggestionSelected", 4);
                so(a, "PLAY_CHIP_SELECTED", c)
            },
            label: d.PLAY_TITLE
        });
        a.A && e.push({
            he: "show-more-chip",
            ie: function() {
                z("Cast.Controls.MediaBrowseSuggestionSelected",
                    2);
                so(a, "SCROLL_CHIP_SELECTED", "SCROLL_RIGHT")
            },
            label: d.SHOW_MORE
        });
        a.B && e.push({
            he: "previous-chip",
            ie: function() {
                z("Cast.Controls.MediaBrowseSuggestionSelected", 1);
                so(a, "SCROLL_CHIP_SELECTED", "SCROLL_LEFT")
            },
            label: d.PREVIOUS
        });
        return Nn(Mo, e.map(function(f) {
            return Nn(No, "suggestion-chip", f.he, f.ie, f.label)
        }))
    };
    Po = function(a) {
        return !!a && 0 < a.items.length
    };
    Ro = function() {
        var a = ro.call(this) || this;
        a.attachShadow({
            mode: "open"
        });
        a.T = "0";
        a.U = "hidden";
        a.X = "visible";
        a.W = "false";
        a.J = "false";
        a.I = "scroll";
        a.h = null;
        a.l = null;
        a.B = !0;
        a.A = null;
        a.H = null;
        a.o = new Do;
        a.j = Ff() && ["en", "ja"].includes(navigator.language.split("-")[0]) ? new Ko : null;
        a.j && a.j.addEventListener("PLAY_CHIP_SELECTED", function(b) {
            a.A && a.A(b.detail)
        });
        a.P = 0;
        a.M = !1;
        a.N = !1;
        Qo(a);
        return a
    };
    So = function(a, b) {
        if (!a.h || !b) return !0;
        b = b.items;
        a = a.h.items;
        if (b.length !== a.length) return !0;
        for (var c = 0; c < b.length; c++)
            if (b[c].entity !== a[c].entity) return !0;
        return !1
    };
    To = function(a, b) {
        a.B !== b && (a.B = b, qo(a))
    };
    Qo = function(a) {
        ya(function(b) {
            if (1 == b.h) return ra(b, a.G.promise, 2);
            so(a, "INITIAL_BROWSE_RENDER_COMPLETE");
            b.h = 0
        })
    };
    Uo = function(a, b) {
        var c, d;
        ya(function(e) {
            if (1 == e.h) return ra(e, a.G.promise, 2);
            c = a.shadowRoot.querySelector(".media-browse-logo");
            d = window.getComputedStyle(c, null);
            "none" === d.backgroundImage && cast.receiver.C.Y.bg(b).then(function() {
                a.l !== b && (a.l = b, qo(a))
            }).catch(function() {
                "" !== a.l && (a.l = "", qo(a))
            });
            e.h = 0
        })
    };
    Vo = function(a, b) {
        a.H = b
    };
    $o = function(a, b) {
        if (!b) return Nn(Wo, Ho({
            overflowX: a.I
        }));
        var c = b.targetAspectRatio ? b.targetAspectRatio.replace(/_/g, "-").toLowerCase() : "",
            d = [],
            e = {};
        b = _.q(b.items);
        for (var f = b.next(); !f.done; e = {
                jc: e.jc
            }, f = b.next()) e.jc = f.value, e.jc && (f = Nn(Xo, c, function(g) {
            return function() {
                var k = g.jc;
                id("Cast.Controls.MediaBrowseItemSelected");
                a.A && a.A(k)
            }
        }(e), Yo(e.jc), e.jc.title || "", e.jc.subtitle || ""), d.push(f));
        a.P = d.length;
        return Nn(Zo, {
            handleEvent: function() {
                a.H && a.H()
            },
            passive: !0
        }, d)
    };
    ap = function(a) {
        if (!a.N && a.j) {
            a.N = !0;
            var b = a.shadowRoot.querySelector(".media-browse-root");
            ["click", "touchstart", "touchmove", "touchend", "touchcancel"].forEach(function(c) {
                b.addEventListener(c, function(d) {
                    a.j.I.o(d.target)
                })
            })
        }
    };
    bp = function(a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        if (a.h && a.h.items) {
            if (a.j) {
                var g = a.j;
                g.B = d;
                g.A = e;
                g.o || (g.o = !0);
                qo(g)
            }
            d = [];
            e = a.h.title;
            b = [].concat(_.ka(a.h.items)).slice(b, c + 1);
            b = _.q(b);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, d.push(new Oi(c.title, c.entity));
            d = new Ri(new Qi([new Pi(e, d)]));
            f = new Si(f ? null : d);
            so(a, "DISPLAY_CONTEXT_UPDATE", f)
        }
    };
    Yo = function(a) {
        var b = {
            "browse-item-img": !0
        };
        a.imageType && (b[a.imageType.replace(/_/g, "-").toLowerCase()] = !0);
        var c = {};
        a.image && a.image.url && (c["background-image"] = cast.receiver.C.Y.Ua(a.image.url), b["has-image"] = !0);
        b = cp(b);
        c = Ho(c);
        if (cast.receiver.C.Y.Yc(a.duration)) {
            var d = cast.receiver.C.Y.Na(a.duration);
            d = Nn(dp, d)
        } else d = null;
        return Nn(ep, b, c, d, "LIVE" !== a.mediaBadge ? null : Nn(fp, cast.receiver.V.Kf))
    };
    mp = function(a, b) {
        function c() {
            d.j = d.h.shadowRoot.querySelector(".media-browse-carousel");
            gp(d)
        }
        var d = this;
        this.h = a;
        this.H = b;
        this.l = new Jl;
        this.B = this.A = this.F = this.o = null;
        this.U = this.D = 0;
        this.J = this.I = !1;
        this.N = this.M = -1;
        this.j = null;
        this.G = !0;
        this.P = this.T = !1;
        this.l.listen("DRAWER_POSITION_CHANGED", function(e) {
            hp(d, e.position)
        });
        this.l.listen("DRAWER_ANIMATION_FINISHED", function(e) {
            e = e.position;
            hp(d, e);
            e >= d.B ? (id("Cast.Controls.MediaBrowsePlayingActive"), ip(d)) : clearTimeout(d.D);
            e === d.A && jp(d)
        });
        this.l.listen("CAROUSEL_SCROLL_CHANGED", function(e) {
            e = e.scrollLeft;
            d.I = !0;
            kp(d);
            d.j && (d.j.scrollLeft = e)
        });
        this.h.addEventListener("INITIAL_BROWSE_RENDER_COMPLETE", c);
        this.h.addEventListener("BROWSE_ITEMS_AVAILABLE", c);
        Vo(this.h, function() {
            d.I || (d.J = !0, kp(d))
        });
        this.h.addEventListener("touchstart", function() {
            clearTimeout(d.D)
        });
        this.h.addEventListener("touchend", function() {
            "PLAYING" === d.o && ip(d)
        });
        lp(this)
    };
    pp = function(a, b) {
        b = void 0 === b ? "SCROLL_UP" : b;
        var c = !("PLAYING" === a.o && a.T);
        c = !(a.J || !a.G) && c;
        switch (b) {
            case "SCROLL_UP":
            case "SCROLL_DOWN":
                "PLAYING" === a.o && Ul(a.l, b);
                break;
            case "SCROLL_LEFT":
            case "SCROLL_RIGHT":
                if (c) {
                    "PLAYING" === a.o ? id("Cast.Controls.InPlayerCarouselScrolling") : "LANDING" === a.o && id("Cast.Controls.LandingCarouselScrolling");
                    a.j = a.h.shadowRoot.querySelector(".media-browse-carousel");
                    c = np(a.j, "scrollLeft");
                    if (a.j) {
                        var d = c,
                            e = op(a.j, "paddingLeft"),
                            f = np(a.j, "offsetWidth"),
                            g = np(a.j, "scrollWidth"),
                            k = a.j.querySelector(".browse-item"),
                            l = op(k, "marginRight");
                        k = op(k, "width") + l;
                        switch (b) {
                            case "SCROLL_RIGHT":
                                d = Math.floor((d + f - e) / k) * k + e - l;
                                d = Math.min(d, g - f);
                                break;
                            case "SCROLL_LEFT":
                                d = Math.ceil((d - f - e) / k) * k + e - l, d = Math.max(d, 0)
                        }
                        b = d
                    } else b = 0;
                    Sl(a.l, c, b)
                }
        }
    };
    op = function(a, b) {
        return a ? (a = getComputedStyle(a)[b]) ? parseInt(a, 10) : 0 : 0
    };
    np = function(a, b) {
        return a ? (a = a[b]) ? parseInt(a, 10) : 0 : 0
    };
    hp = function(a, b) {
        if ("number" !== typeof b || "number" !== typeof a.A || "number" !== typeof a.B) a.H.style.visibility = "hidden";
        else {
            var c = (b - a.A) / (a.B - a.A),
                d = b <= a.A;
            a.T = d;
            var e = b >= a.B;
            a.H.style.opacity = c.toString();
            a.H.style.visibility = d ? "hidden" : "visible";
            d ? (a.h.style.transform = "", a.h.style.transition = "", a.h.style.top = "") : e ? (a.h.style.transform = "none", a.h.style.transition = "initial", a.h.style.top = "0") : (a.h.style.transform = "translateY(-" + b + "px)", a.h.style.transition = "initial", a.h.style.top = "");
            a = a.h;
            b = 1 <= c;
            d =
                0 >= c;
            a.T = .5 < c ? (2 * c - 1).toString() : "0";
            a.U = d ? "hidden" : "visible";
            a.J = !a.B && d ? "true" : "false";
            a.X = b ? "hidden" : "visible";
            a.W = b ? "true" : "false";
            a.I = b ? "scroll" : "hidden";
            qo(a)
        }
    };
    jp = function(a) {
        bp(a.h, 0, 0, !1, !1, !0);
        a.M = -1;
        a.N = -1
    };
    gp = function(a) {
        a.j = a.h.shadowRoot.querySelector(".media-browse-carousel");
        if (a.j) {
            var b = a.j.querySelector(".browse-item");
            if (b) {
                var c, d = op(b, "width"),
                    e = op(b, "marginRight"),
                    f = b.getBoundingClientRect(),
                    g = d + e,
                    k = op(a.j, "paddingLeft"),
                    l = np(a.j, "offsetWidth"),
                    m = np(a.j, "scrollLeft"),
                    n = a.h.h;
                n && (b = function() {
                    var t = e + d / 2;
                    c = Math.max(m - k + e, 0);
                    return c % g <= t ? Math.floor(c / g) : Math.floor(c / g) + 1
                }(), n = function(t, v) {
                    var x = m + k,
                        B = x + l;
                    for (t = t.items; v < t.length; v++)
                        if (x += g, x + g > B) return B - f.x >= d / 2 ? v : v - 1;
                    return t.length - 1
                }(n,
                    b), Number.isInteger(b) && Number.isInteger(n) && (a.M === b && a.N === n || bp(a.h, b, n, 0 < b, n < a.h.h.items.length - 1), a.M = b, a.N = n))
            }
        }
    };
    kp = function(a) {
        clearTimeout(a.U);
        a.U = setTimeout(function() {
            a.J = !1;
            a.I = !1;
            gp(a)
        }, 200)
    };
    ip = function(a) {
        clearTimeout(a.D);
        a.D = setTimeout(function() {
            a.P || pp(a, "SCROLL_DOWN")
        }, 3E4)
    };
    sp = function(a, b) {
        this.x = a;
        this.y = b
    };
    Ap = function(a) {
        _.Sd.call(this);
        var b = this;
        this.j = this.h = null;
        this.M = this.J = 0;
        this.F = !1;
        this.A = this.l = this.I = null;
        a.addEventListener("touchstart", function(c) {
            tp(b, c)
        });
        a.addEventListener("touchmove", function(c) {
            if (b.l) {
                c = up(c.touches);
                var d = c.x - b.h.x,
                    e = c.y - b.h.y,
                    f = Date.now(),
                    g = f - b.o;
                b.J = d / g * 1E3;
                b.M = e / g * 1E3;
                b.o = f;
                b.F || (f = c.x - b.j.x, g = c.y - b.j.y, 25 < f * f + g * g && (b.F = !0, clearTimeout(b.I)));
                b.F && (1 <= Math.abs(d) || 1 <= Math.abs(e)) && (b.dispatchEvent(new vp(d, e)), b.h = new sp(c.x, c.y))
            }
        });
        a.addEventListener("touchend",
            function(c) {
                b.l && (1 > c.touches.length ? ((20 < Math.abs(b.J) || 20 < Math.abs(b.M)) && 100 >= Date.now() - b.o ? b.dispatchEvent(new wp(b.J, b.M)) : b.dispatchEvent(new xp), yp(b)) : (c = up(c.touches), b.h = b.j = new sp(c.x, c.y), b.o = Date.now()))
            });
        a.addEventListener("touchcancel", function() {
            b.l && (b.dispatchEvent(new xp), yp(b))
        });
        a.addEventListener("click", function(c) {
            clearTimeout(b.I);
            b.dispatchEvent(new zp(c.target))
        })
    };
    tp = function(a, b) {
        if (1 === b.touches.length) {
            clearTimeout(a.I);
            a.l = b;
            a.A = b.target;
            a.dispatchEvent(new Bp(a.A));
            var c = a.A;
            a.I = setTimeout(function() {
                a.dispatchEvent(new zp(c))
            }, 300)
        }
        b = up(b.touches);
        a.h = a.j = new sp(b.x, b.y);
        a.o = Date.now()
    };
    yp = function(a) {
        a.l = null;
        a.A = null;
        a.o = void 0;
        a.J = 0;
        a.M = 0;
        a.h = null;
        a.j = null;
        a.F = !1
    };
    vp = function(a, b) {
        _.C.call(this, "SCROLL");
        this.deltaX = a;
        this.deltaY = b
    };
    wp = function(a, b) {
        _.C.call(this, "FLING");
        this.velocityX = a;
        this.velocityY = b
    };
    xp = function() {
        _.C.call(this, "NO_FLING_RELEASE")
    };
    Bp = function(a) {
        _.C.call(this, "FIRST_TOUCH");
        this.Tg = a
    };
    zp = function(a) {
        _.C.call(this, "CONFIRMED_SINGLE_TAP");
        this.Tg = a
    };
    up = function(a) {
        for (var b = 0, c = 0, d = a.length, e = 0; e < d; e++) b += a[e].clientX, c += a[e].clientY;
        return new sp(b / d, c / d)
    };
    Fp = function(a, b, c) {
        var d = this;
        this.j = a;
        this.F = a.querySelector("#scrubber");
        this.T = a.querySelector("#controls-toggle");
        this.Z = a.querySelector("#controls-layer");
        this.X = b;
        this.o = c;
        this.N = !1;
        this.J = a.querySelector("#alert-show-controls");
        this.I = a.querySelector("#alert-hide-controls");
        this.l = !1;
        this.M = !0;
        this.U = this.G = this.W = this.D = this.P = !1;
        this.B = cast.receiver.C.Ka.VIDEO;
        this.H = 4500;
        this.h = Ud.L();
        this.h.l = this.H;
        this.h.listen("EXPIRED", function() {
            d.D = !1;
            Cp(d);
            d.j.classList.remove("scrubbing-ending")
        });
        this.A = new Ap(this.j);
        this.J.textContent = cast.receiver.V.ei;
        this.I.textContent = cast.receiver.V.di;
        this.X.addEventListener("click", function(e) {
            pp(d.o, "SCROLL_UP");
            e.stopPropagation()
        });
        this.A.listen("FIRST_TOUCH", function() {
            var e = d.o;
            e.G = !1;
            Vl(e.l)
        });
        this.A.listen("SCROLL", function(e) {
            var f = d.o,
                g = e.deltaX;
            e = e.deltaY;
            f.G = !1;
            Xl(f.l, g, e)
        });
        this.A.listen("FLING", function(e) {
            var f = d.o;
            e = e.velocityY;
            f.G = !0;
            Zl(f.l, e)
        });
        this.A.listen("NO_FLING_RELEASE", function() {
            var e = d.o;
            e.G = !0;
            gp(e);
            $l(e.l)
        });
        this.Z.addEventListener("touchstart",
            function(e) {
                e.target === d.F && e.stopPropagation()
            });
        this.A.listen("CONFIRMED_SINGLE_TAP", function(e) {
            e.Tg.closest("#controls") && d.j.classList.contains("active") ? $d(d.h) : e.Tg.closest("#controls-layer") && Dp(d)
        });
        this.T.addEventListener("click", function(e) {
            Dp(d);
            e.stopPropagation()
        });
        this.F.addEventListener("input", function() {
            Ep(d, !0)
        });
        this.F.addEventListener("change", function() {
            Ep(d, !1);
            $d(d.h)
        })
    };
    Dp = function(a) {
        a.B === cast.receiver.C.Ka.VIDEO && a.l && a.U || (a.j.classList.contains("active") ? (Ep(a, !1), Xd(a.h)) : (Gp(a), $d(a.h)))
    };
    Gp = function(a) {
        $d(a.h);
        a.D = !0;
        Cp(a)
    };
    Ep = function(a, b) {
        Wd(a.h, b);
        a.P !== b && (a.P = b, clearTimeout(a.$), a.j.classList.toggle("scrubbing", b), b || (a.j.classList.add("scrubbing-ending"), a.$ = setTimeout(function() {
            a.j.classList.remove("scrubbing-ending")
        }, 4E3)))
    };
    Cp = function(a) {
        var b = a.D || a.W && (a.B === cast.receiver.C.Ka.AUDIO || a.G);
        K(a.J, b);
        K(a.I, !b);
        a.T.setAttribute("aria-label", b ? cast.receiver.V.$l : cast.receiver.V.dm);
        a.j.classList.toggle("active", b)
    };
    Hp = function() {
        var a = $c.call(this) || this;
        (0, cast.receiver.C.rn)(a);
        a.h = a.querySelector("#logo");
        a.l = a.querySelector("#title");
        a.A = a.querySelector("#break-title");
        a.j = a.querySelector("#subtitle");
        a.o = a.querySelector("#top-right-video-overlay-image");
        return a
    };
    Ip = function(a, b, c) {
        "none" === window.getComputedStyle(a.h, null).backgroundImage && cast.receiver.C.Y.bg(c).then(function() {
            var d = cast.receiver.C.Y.Ua(c);
            a.h.textContent = "";
            a.h.style.backgroundImage = d;
            a.h.classList.add("app-icon")
        }).catch(function() {
            a.h.style.backgroundImage = "";
            a.h.classList.remove("app-icon");
            a.h.textContent = b
        })
    };
    Jp = function(a, b) {
        b ? (b = cast.receiver.C.Y.Ua(b), a.o.style.content = b) : a.o.style.removeProperty("content")
    };
    Mp = function() {
        var a = $c.call(this) || this;
        var b = a.attachShadow({
            mode: "open"
        });
        _.I(Kp, "<touch-controls> element is created");
        a.A = document.createElement("div");
        a.A.classList.add("touch-layer");
        a.X = Ef() && Df();
        a.X && a.A.classList.add("new-dpad-controls-overlay");
        a.J = Df();
        a.J ? (0, cast.receiver.C.Tl)(a.A) : (0, cast.receiver.C.on)(a.A);
        b.appendChild(a.A);
        a.j = b.querySelector("goog-media-browse");
        a.W = b.querySelector(".media-browse-scrim");
        a.D = new mp(a.j, a.W);
        a.o = b.querySelector("goog-buttons-bar");
        a.F = b.querySelector("goog-video-metadata");
        a.G = b.querySelector("goog-break-ui");
        a.h = b.querySelector("goog-timeline");
        a.U = Of.L();
        Pf(a.U, a.shadowRoot);
        a.B = a.J ? new zm(a.A, function() {
            return a.I()
        }, function() {
            return a.H()
        }) : new Fp(a.A, a.j, a.D);
        a.l = null;
        a.H = function() {};
        a.I = function() {};
        a.P = function() {};
        a.M = function() {};
        a.N = function() {};
        a.T = function() {};
        a.o.J = function() {
            kd("PAUSE");
            a.H()
        };
        a.o.M = function() {
            kd("PLAY");
            a.I()
        };
        a.h.F = function() {
            a.I()
        };
        a.h.G = function() {
            a.H()
        };
        a.o.P = function() {
            kd("STOP");
            a.P()
        };
        a.o.N = function() {
            kd("SHOW_DEVICE_CONTROLLER");
            a.N()
        };
        a.j.addEventListener("PLAY", function() {
            kd("MINI_PLAYER_PLAY");
            a.I()
        });
        a.j.addEventListener("PAUSE", function() {
            kd("MINI_PLAYER_PAUSE");
            a.H()
        });
        a.j.addEventListener("ALBUM_ART_CLICK", function() {
            kd("MINI_PLAYER_ALBUM_ART");
            pp(a.D, "SCROLL_DOWN")
        });
        a.j.addEventListener("DISPLAY_CONTEXT_UPDATE", function(c) {
            a.T(c.detail)
        });
        a.j.addEventListener("SCROLL_CHIP_SELECTED", function(c) {
            _.rb(Lp, c.detail) && pp(a.D, c.detail)
        });
        a.h.Z = function(c) {
            z("Cast.Controls.ScrubberPositionChanged", parseInt(c, 10));
            a.M(c)
        };
        return a
    };
    Np = function(a) {
        var b = getComputedStyle(a.j),
            c = parseInt(b.getPropertyValue("--media-browse-top-padding"), 10);
        b = parseInt(b.getPropertyValue("--media-browse-visible-part-height"), 10);
        a = a.D;
        c = _.u.innerHeight - c;
        a.A = b;
        a.B = c;
        var d = a.l;
        d.h = b;
        d.j = c;
        a.o = null;
        rp(a)
    };
    Op = function(a) {
        a.l = document.createElement("goog-audio-player-compatibility");
        xe(a.l, a.A.querySelector("audio-player-compatibility-placeholder"));
        a.B.Mh()
    };
    Pp = function(a, b) {
        a.j.A = b
    };
    Qp = function(a, b, c) {
        var d = a.h;
        d.ja = b;
        d.j || (d.h.value = b, d.ma.textContent = c ? c : cast.receiver.C.Y.Na(b), km(d, b, d.B), "number" === typeof d.A && nm(d, d.h.value));
        a = a.G;
        a.F = b;
        a.l && vg(a)
    };
    Rp = function(a, b, c) {
        var d = a.h;
        if (b !== d.B || c && d.H.textContent !== c) d.B = b, 0 > b || Infinity === b ? (rm(d, 0), d.H.textContent = "", km(d, parseFloat(d.h.value))) : (d.ra && d.$ || (d.h.min = "0", d.wa = parseFloat(d.h.min), rm(d, b), d.h.style.left = "0", d.h.style.width = "100%"), d.H.textContent = c ? c : cast.receiver.C.Y.Na(b), km(d, parseFloat(d.h.value), b)), tm(d);
        a = a.G;
        a.H = b;
        a.l && vg(a)
    };
    Sp = function(a, b) {
        "IDLE" === b ? (a.l && K(a.l, !1), pm(a.h, !1), a.B.Cf(!0)) : (a.l && K(a.l, !0), a.B.Cf(!1));
        if ("PLAYING" === b) {
            a.B.Qh();
            var c = a.j.o;
            !0 !== c.h && (c.h = !0, qo(c));
            pm(a.h, !0)
        }
        "PAUSED" === b && (a.B.Ph(), c = a.j.o, !1 !== c.h && (c.h = !1, qo(c)), pm(a.h, !1));
        "BUFFERING" === b || "LOADING" === b ? (a.B.nh(!0), c = a.h, K(c.M, !0), nm(c, c.h.value)) : (a.B.nh(!1), c = a.h, K(c.M, !1), nm(c, c.h.value));
        c = a.o;
        if (c.h) {
            if ("PLAYING" === b) {
                var d = c.h,
                    e = cast.receiver.V.hi;
                d.element.dataset.state = "playing";
                d.element.title = e;
                d.h = !0;
                vi(d)
            }
            "PAUSED" === b &&
                ui(c.h)
        }
        a = a.D;
        a.F = b;
        rp(a)
    };
    Tp = function(a, b) {
        a.G.A = b
    };
    Zp = function(a) {
        _.A.call(this);
        var b = this;
        this.T = !0;
        this.l = {};
        this.A = {};
        this.aa = this.Mi();
        this.o = new fl(this.aa);
        this.h = null;
        this.fa = Up();
        Vp(this);
        _.I(Wp, "About to create <touch-controls> element");
        var c = new cast.receiver.C.pn;
        document.body.appendChild(c);
        this.h = c;
        a || Op(this.h);
        this.h.H = function() {
            hl(b.o)
        };
        this.h.I = function() {
            gl(b.o)
        };
        this.h.P = function() {
            b.o.h.h(new Yk("SHUTDOWN"))
        };
        this.h.M = function(d) {
            var e = b.o,
                f = new cl;
            f.currentTime = d;
            e.h.h(f)
        };
        Tp(this.h, function() {
            b.o.h.h(new Yk("SKIP_AD"))
        });
        this.h.N = function() {
            var d = b.o,
                e = _.Tg.L();
            e.isRemoteControl() ? e.l.send(cast.receiver.oa.Xa, {
                type: "showremotecontroloverlay"
            }) : (e = new Ui, e.requestId = 0, ol(d.h, e))
        };
        Pp(this.h, function(d) {
            var e = b.o;
            d = d.entity;
            var f = new Wk;
            f.media = new Bc;
            f.media.entity = d;
            f.autoplay = !0;
            e.h.h(f)
        });
        this.h.T = function(d) {
            ol(b.o.h, d)
        };
        Xp(this, cast.receiver.C.Ka.VIDEO);
        Sp(this.h, "IDLE");
        Rp(this.h, 0);
        Qp(this.h, 0);
        a = _.Tg.L();
        (c = a.pc()) && c.remote_control_overlay_supported && Ai(this.h.o);
        this.h.B.Df(1 === a.ma);
        a.addEventListener("showmediacontrols",
            function(d) {
                b.h.B.Df(1 === d.mediaControlsState)
            });
        cast.receiver.platform.getAccessibilitySettings().then(function(d) {
            var e = b.h;
            d = d.isScreenReaderEnabled;
            e.B.Rh(d);
            e.D.P = d
        });
        a.isRemoteControl() || ((c = a.H) && Yp(this, c), a.addEventListener("playbackdevicestatus", function(d) {
            Yp(b, d.playbackDeviceStatus)
        }));
        Ji(function(d) {
            "SCROLL_LEFT" === d.navigationType ? pp(b.h.D, "SCROLL_LEFT") : "SCROLL_RIGHT" === d.navigationType && pp(b.h.D, "SCROLL_RIGHT");
            return new Wi
        })
    };
    Vp = function(a) {
        a.l[cast.receiver.C.R.QUEUE_NEXT] = new xi(function() {
            kd(cast.receiver.C.R.QUEUE_NEXT);
            jl(a.o)
        }, cast.receiver.V.nm, "btn-next");
        a.l[cast.receiver.C.R.QUEUE_PREV] = new xi(function() {
            kd(cast.receiver.C.R.QUEUE_PREV);
            if (a.j.media && null === a.j.sectionStartTimeInMedia && a.$ !== cast.receiver.C.Ka.PHOTO && 4 <= a.j.currentTime && $p(a, a.j.supportedMediaCommands, cast.framework.K.fc(a.j.media))) {
                var b = a.o,
                    c = new cl;
                c.currentTime = 0;
                b.h.h(c)
            } else kl(a.o)
        }, cast.receiver.V.om, "btn-back");
        a.l[cast.receiver.C.R.SEEK_FORWARD_10] =
            new xi(function() {
                kd(cast.receiver.C.R.SEEK_FORWARD_10);
                il(a.o, 10)
            }, cast.receiver.V.xm, "btn-seek-forward-10");
        a.l[cast.receiver.C.R.SEEK_FORWARD_15] = new xi(function() {
            kd(cast.receiver.C.R.SEEK_FORWARD_15);
            il(a.o, 15)
        }, cast.receiver.V.ym, "btn-seek-forward-15");
        a.l[cast.receiver.C.R.SEEK_FORWARD_30] = new xi(function() {
            kd(cast.receiver.C.R.SEEK_FORWARD_30);
            il(a.o, 30)
        }, cast.receiver.V.zm, "btn-seek-forward-30");
        a.l[cast.receiver.C.R.SEEK_BACKWARD_10] = new xi(function() {
            kd(cast.receiver.C.R.SEEK_BACKWARD_10);
            il(a.o, -10)
        }, cast.receiver.V.tm, "btn-seek-backward-10");
        a.l[cast.receiver.C.R.SEEK_BACKWARD_15] = new xi(function() {
            kd(cast.receiver.C.R.SEEK_BACKWARD_15);
            il(a.o, -15)
        }, cast.receiver.V.vm, "btn-seek-backward-15");
        a.l[cast.receiver.C.R.SEEK_BACKWARD_30] = new xi(function() {
            kd(cast.receiver.C.R.SEEK_BACKWARD_30);
            il(a.o, -30)
        }, cast.receiver.V.wm, "btn-seek-backward-30");
        a.l[cast.receiver.C.R.REPEAT] = a.M = new dm(function(b) {
            kd(cast.receiver.C.R.REPEAT);
            var c = a.o,
                d = new dl;
            d.repeatMode = b;
            c.h.h(d)
        });
        a.l[cast.receiver.C.R.SHUFFLE] =
            a.N = new fm(function(b) {
                kd(cast.receiver.C.R.SHUFFLE);
                var c = a.o,
                    d = new dl;
                d.shuffle = b;
                c.h.h(d);
                gm(a.N, b)
            }, cast.receiver.V.Am, "btn-shuffle");
        a.l[cast.receiver.C.R.CAPTIONS] = a.W = new fm(function(b) {
            kd(cast.receiver.C.R.CAPTIONS);
            var c = a.o,
                d = new bl;
            b ? d.enableTextTracks = !0 : d.activeTrackIds = [];
            c.h.h(d)
        }, cast.receiver.V.gm, "btn-captions");
        a.l[cast.receiver.C.R.LIKE] = a.H = new fm(function(b) {
            kd(cast.receiver.C.R.LIKE);
            ll(a.o, "LIKE", !b);
            gm(a.H, b)
        }, cast.receiver.V.gi, "btn-like");
        a.l[cast.receiver.C.R.DISLIKE] =
            a.F = new fm(function(b) {
                kd(cast.receiver.C.R.DISLIKE);
                ll(a.o, "DISLIKE", !b);
                gm(a.F, b)
            }, cast.receiver.V.jm, "btn-dislike");
        a.l[cast.receiver.C.R.LIKE_HEART] = a.I = new fm(function(b) {
            kd(cast.receiver.C.R.LIKE_HEART);
            ll(a.o, "LIKE", !b);
            gm(a.I, b)
        }, cast.receiver.V.gi, "btn-like-heart");
        a.l[cast.receiver.C.R.LYRICS] = a.J = new fm(function(b) {
            kd(cast.receiver.C.R.LYRICS);
            ll(a.o, "LYRICS", !b);
            gm(a.J, b)
        }, cast.receiver.V.km, "btn-lyrics");
        a.l[cast.receiver.C.R.SLEEP_TIMER] = new xi(function() {
            kd(cast.receiver.C.R.SLEEP_TIMER);
            _.Tg.L().l.send(cast.receiver.oa.Xa, {
                type: "showsleeptimeroverlay"
            })
        }, cast.receiver.V.Dm, "btn-sleep-timer")
    };
    bq = function(a, b, c) {
        var d = $p(a, c, b),
            e = a.h.h;
        d || (e.j = !1);
        e.pa = d;
        tm(e);
        var f = a.h;
        e = !!(c & 1);
        var g = f.o;
        g.h && (g = g.h, g.j = e, vi(g));
        g = f.h;
        g.D && g.D.classList.toggle("hidden", g.X && !e);
        f = f.j.o;
        f.l !== e && (f.l = e, qo(f));
        e = a.h.o;
        e.U = !!(c & 262144);
        Bi(e);
        ri(a.l[cast.receiver.C.R.QUEUE_NEXT], !(c & 64));
        ri(a.l[cast.receiver.C.R.QUEUE_PREV], !(c & 128));
        ri(a.l[cast.receiver.C.R.SHUFFLE], !(c & 256));
        ri(a.l[cast.receiver.C.R.SEEK_FORWARD_10], !d);
        ri(a.l[cast.receiver.C.R.SEEK_FORWARD_15], !d);
        ri(a.l[cast.receiver.C.R.SEEK_FORWARD_30], !d);
        ri(a.l[cast.receiver.C.R.SEEK_BACKWARD_10], !d);
        ri(a.l[cast.receiver.C.R.SEEK_BACKWARD_15], !d);
        ri(a.l[cast.receiver.C.R.SEEK_BACKWARD_30], !d);
        ri(a.M, !(c & 1024));
        a.M.j = !(c & 2048);
        ri(a.N, !(c & 256));
        ri(a.W, !(c & 4096));
        ri(a.H, !(c & 16384));
        ri(a.F, !(c & 32768));
        ri(a.I, !(c & 16384));
        ri(a.J, !(c & 524288));
        d = cast.receiver.C.Y.Ro(b);
        Xp(a, d);
        d === cast.receiver.C.Ka.VIDEO ? a.T && (d = $p(a, c, b), e = !!(c & 128), c = !!(c & 64), aq(b) ? a.la(cast.receiver.C.ga.SLOT_SECONDARY_1, cast.receiver.C.R.CAPTIONS) : e && d ? a.la(cast.receiver.C.ga.SLOT_SECONDARY_1,
            cast.receiver.C.R.QUEUE_PREV) : a.la(cast.receiver.C.ga.SLOT_SECONDARY_1, cast.receiver.C.R.NO_BUTTON), d ? a.la(cast.receiver.C.ga.SLOT_PRIMARY_1, cast.receiver.C.R.SEEK_BACKWARD_30) : e ? a.la(cast.receiver.C.ga.SLOT_PRIMARY_1, cast.receiver.C.R.QUEUE_PREV) : a.la(cast.receiver.C.ga.SLOT_PRIMARY_1, cast.receiver.C.R.NO_BUTTON), d ? a.la(cast.receiver.C.ga.SLOT_PRIMARY_2, cast.receiver.C.R.SEEK_FORWARD_30) : c ? a.la(cast.receiver.C.ga.SLOT_PRIMARY_2, cast.receiver.C.R.QUEUE_NEXT) : a.la(cast.receiver.C.ga.SLOT_PRIMARY_2,
            cast.receiver.C.R.NO_BUTTON), d && c ? a.la(cast.receiver.C.ga.SLOT_SECONDARY_2, cast.receiver.C.R.QUEUE_NEXT) : a.la(cast.receiver.C.ga.SLOT_SECONDARY_2, cast.receiver.C.R.NO_BUTTON)) : a.T && (c & 128 ? a.la(cast.receiver.C.ga.SLOT_PRIMARY_1, cast.receiver.C.R.QUEUE_PREV) : a.la(cast.receiver.C.ga.SLOT_PRIMARY_1, cast.receiver.C.R.NO_BUTTON), c & 64 ? a.la(cast.receiver.C.ga.SLOT_PRIMARY_2, cast.receiver.C.R.QUEUE_NEXT) : a.la(cast.receiver.C.ga.SLOT_PRIMARY_2, cast.receiver.C.R.NO_BUTTON), a.la(cast.receiver.C.ga.SLOT_SECONDARY_1,
            cast.receiver.C.R.NO_BUTTON), a.la(cast.receiver.C.ga.SLOT_SECONDARY_2, cast.receiver.C.R.NO_BUTTON))
    };
    cq = function(a, b, c) {
        var d = !1;
        if (c && b) {
            c = _.q(c);
            for (var e = c.next(); !e.done; e = c.next()) {
                e = e.value;
                for (var f = _.q(b), g = f.next(); !g.done; g = f.next()) g = g.value, g.trackId == e && "TEXT" == g.type && (d = !0)
            }
        }
        gm(a.W, d)
    };
    aq = function(a) {
        return a && a.tracks && a.tracks.some(function(b) {
            return "TEXT" == b.type
        }) || !1
    };
    Yp = function(a, b) {
        var c = [3, 2, 4].includes(b.playbackType),
            d = lh();
        a = a.h.o;
        a.o && ti(a.o, 3 === b.playbackType && 1 === d.majorVersion && 44 > d.minorVersion ? "" : b.deviceName, c)
    };
    Xp = function(a, b) {
        a.$ = b;
        a = a.h;
        if (!a.A.classList.contains(b)) {
            for (var c in cast.receiver.C.Ka) cast.receiver.C.Ka.hasOwnProperty(c) && a.A.classList.remove(cast.receiver.C.Ka[c]);
            a.A.classList.add(b);
            a.B.Oh(b);
            c = a.o;
            c.I = b;
            Bi(c)
        }
    };
    Up = function() {
        var a = window.document.createElement("div");
        (0, cast.receiver.C.Wk)(a);
        window.document.body.appendChild(a);
        return a
    };
    dq = function(a, b) {
        return !!(a || []).find(function(c) {
            return c && c.userAction === b
        })
    };
    fq = function(a, b) {
        _.A.call(this);
        var c = this;
        this.o = b;
        this.h = new fl(this.o);
        this.A = function(d) {
            eq(c, d)
        };
        this.j = null;
        this.o.D = function(d) {
            d && (c.j = "IDLE" === d.playerState && d.extendedStatus && "LOADING" === d.extendedStatus.playerState ? "LOADING" : d.playerState)
        };
        this.l = a;
        this.l.addEventListener("keydown", this.A)
    };
    eq = function(a, b) {
        if (a.j && "IDLE" !== a.j) {
            switch (b.key) {
                case "MediaPlayPause":
                    gq(a);
                    return;
                case "MediaRewind":
                    il(a.h, -10);
                    return;
                case "MediaFastForward":
                    il(a.h, 10);
                    return;
                case "MediaTrackNext":
                    jl(a.h);
                    return;
                case "MediaTrackPrevious":
                    kl(a.h);
                    return;
                case "MediaPause":
                    hl(a.h);
                    return;
                case "MediaPlay":
                    gl(a.h);
                    return;
                case "MediaStop":
                    a.h.h.h(new Yk("STOP"));
                    return
            }
            switch (b.key) {
                case "Enter":
                    gq(a);
                    return;
                case "ArrowLeft":
                    il(a.h, -10);
                    return;
                case "ArrowRight":
                    il(a.h, 10);
                    return
            }
            _.I(hq, "Unhandled keydown event, key: " +
                b.key)
        }
    };
    gq = function(a) {
        "PLAYING" === a.j ? hl(a.h) : gl(a.h)
    };
    jq = function(a, b) {
        _.A.call(this);
        var c = this;
        this.H = a;
        this.F = b;
        this.B = _.Tg.L();
        this.h = this.j = this.A = null;
        this.o = new po;
        this.l = new po;
        fi(this.B).then(function(d) {
            iq(c, d)
        })
    };
    iq = function(a, b) {
        if (b) gi(a.B).then(function(d) {
            "touch-optimized" === d ? (kq(1), lq(a, !0), a.o.resolve(!0), a.l.resolve(!0)) : ("non-touch-optimized" === d ? (lq(a, !1), kq(2), a.l.resolve(!0)) : (kq(3), a.l.resolve(!1)), a.o.resolve(!1))
        });
        else {
            b = cast.receiver.platform.Ja("dpad-controls-overlay-disabled");
            var c = Df();
            b ? (kq(6), a.l.resolve(!1), a.o.resolve(!1)) : c && !a.B.fa ? (lq(a, !0), a.j = a.h.h, a.l.resolve(!0), a.o.resolve(!0), kq(4), a.A = a.F(a.j), _.md(a, a.A), a.j.addEventListener("keyup", function(d) {
                    d.preventDefault();
                    d.stopPropagation()
                }),
                a.j.addEventListener("keydown", function(d) {
                    d.preventDefault();
                    d.stopPropagation()
                }), a.j.addEventListener("keypress", function(d) {
                    d.preventDefault();
                    d.stopPropagation()
                })) : (a.A = a.F(document), _.md(a, a.A), a.l.resolve(!1), a.o.resolve(!1), kq(5))
        }
    };
    lq = function(a, b) {
        a.h = a.H(b);
        _.md(a, a.h)
    };
    nq = function(a, b, c) {
        mq(a, function() {
            a.h.la(b, c, !0)
        })
    };
    mq = function(a, b) {
        ya(function(c) {
            if (1 == c.h) return ra(c, a.o.promise, 2);
            c.A && b.call(a);
            c.h = 0
        })
    };
    kq = function(a) {
        _.I(oq, "Controls type is: " + a);
        z("Cast.Controls.ControlsType", a)
    };
    pq = function() {
        var a = _.Tg.L();
        this.J = Ug(a, "urn:x-cast:com.google.cast.debugoverlay", "JSON");
        this.J.l = this.I.bind(this);
        this.j = this.h = this.B = this.A = null;
        this.l = [];
        this.o = [];
        this.D = null
    };
    qq = function(a) {
        a.h || a.j || (a.l.length = 0, a.o.length = 0, a.H(), a.h || (a.j = window.setInterval(a.H.bind(a), 1E3)))
    };
    rq = function(a) {
        if (a.h || a.j) a.A && (document.body.removeChild(a.A.parentElement), a.A = null), a.B && (window.clearInterval(a.B), a.B = null), a.h && (Od(a.h, "seeking", a.F, !1, a), a.h = null), a.j && (window.clearInterval(a.j), a.j = null)
    };
    uq = function(a, b) {
        if (sq(b)) {
            _.I(tq, "found active video");
            a.h = b;
            b = document.createElement("div");
            b.style.cssText = "position:fixed;box-sizing:border-box;top:0;left:0;max-width:100vw;max-height:100vh;z-index:2000000;color:yellowgreen;text-shadow:1px 1px 2px #000;padding-left:5vw;padding-top:5vh;margin:0;font-size:24px;pointer-events:none;";
            var c = _.Ea("cast.framework.VERSION"),
                d = cast.receiver.bi,
                e = "";
            c ? e = "CAF: " + c + " " : d && (e += "V2: " + d + " ");
            c = document.createTextNode("");
            b.appendChild(c);
            c.textContent = e;
            e =
                document.createTextNode("");
            b.appendChild(e);
            b.id = "__CAST_DEBUG_OVERLAY__";
            document.body.appendChild(b);
            a.A = e;
            _.Ed(a.h, "seeking", a.F, !1, a);
            a.j && (window.clearInterval(a.j), a.j = null);
            a.B = window.setInterval(a.G.bind(a), 1E3);
            a.G()
        }
    };
    sq = function(a) {
        return !(!a.src || a.error || a.ended || !(1 <= a.readyState))
    };
    vq = function() {
        _.A.call(this);
        var a = this;
        this.o = 0;
        this.B = (new Date).getTime();
        this.F = 1;
        this.j = !1;
        this.l = function() {};
        this.H = function() {
            a.j && a.l()
        }
    };
    wq = function(a) {
        return a.h ? a.h.currentTime : a.j ? a.o + (Date.now() - a.B) / 1E3 * a.F : a.o || 0
    };
    xq = function(a) {
        a.j = !0;
        clearInterval(a.A);
        a.A = setInterval(function() {
            a.h || a.H()
        }, 200)
    };
    yq = function() {
        var a = $c.call(this) || this;
        a.j = null;
        a.h = null;
        a.A = 0;
        a.o = !1;
        a.createdCallback();
        return a
    };
    zq = function(a, b, c, d, e) {
        var f = document.createElement("div");
        f.classList.add("wave");
        f.style.width = b + "px";
        f.style.height = b + "px";
        a.o ? f.style.transform = "translate(" + c + "px, " + d + "px) scale(" + e + ")" : (f.style.transform = "scale(" + e + ")", f.style.left = c + "px", f.style.top = d + "px");
        a.shadowRoot.appendChild(f);
        setTimeout(function() {
            f.remove()
        }, a.D)
    };
    Bq = function(a) {
        (0, _.Aq)();
        return _.Nb(a)
    };
    Cq = function() {};
    Eq = function(a) {
        var b;
        (b = a.h) || (b = {}, Dq(a) && (b[0] = !0, b[1] = !0), b = a.h = b);
        return b
    };
    Fq = function() {};
    Gq = function(a) {
        return (a = Dq(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Dq = function(a) {
        if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.j = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.j
    };
    _.Hq = function(a) {
        _.Sd.call(this);
        this.headers = new Map;
        this.T = a || null;
        this.j = !1;
        this.P = this.h = null;
        this.$ = this.M = "";
        this.o = 0;
        this.F = "";
        this.l = this.W = this.J = this.U = !1;
        this.A = 0;
        this.I = null;
        this.aa = "";
        this.N = this.Z = !1;
        this.X = null
    };
    Jq = function(a) {
        return _.Iq && _.td(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    };
    Mq = function(a, b) {
        a.j = !1;
        a.h && (a.l = !0, a.h.abort(), a.l = !1);
        a.F = b;
        a.o = 5;
        Kq(a);
        Lq(a)
    };
    Kq = function(a) {
        a.U || (a.U = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    Tq = function(a) {
        if (a.j && "undefined" != typeof Nq)
            if (a.P[1] && 4 == Oq(a) && 2 == _.Pq(a)) _.se(a.ca, Qq(a, "Local request error detected and ignored"));
            else if (a.J && 4 == Oq(a)) _.jf(a.Dj, 0, a);
        else if (a.dispatchEvent("readystatechange"), a.isComplete()) {
            _.se(a.ca, Qq(a, "Request complete"));
            a.j = !1;
            try {
                var b = _.Pq(a);
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
                        var f = String(a.M).match(_.Rq)[1] || null;
                        if (!f && _.u.self && _.u.self.location) {
                            var g =
                                _.u.self.location.protocol;
                            f = g.substr(0, g.length - 1)
                        }
                        e = !Sq.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    a.o = 6;
                    try {
                        var k = 2 < Oq(a) ? a.h.statusText : ""
                    } catch (l) {
                        _.se(a.ca, "Can not get status: " + l.message), k = ""
                    }
                    a.F = k + " [" + _.Pq(a) + "]";
                    Kq(a)
                }
            } finally {
                Lq(a)
            }
        }
    };
    Lq = function(a, b) {
        if (a.h) {
            Uq(a);
            var c = a.h,
                d = a.P[0] ? Fa : null;
            a.h = null;
            a.P = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                _.E(a.ca, "Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    };
    Uq = function(a) {
        a.h && a.N && (a.h.ontimeout = null);
        a.I && (_.u.clearTimeout(a.I), a.I = null)
    };
    Oq = function(a) {
        return a.h ? a.h.readyState : 0
    };
    _.Pq = function(a) {
        try {
            return 2 < Oq(a) ? a.h.status : -1
        } catch (b) {
            return -1
        }
    };
    Qq = function(a, b) {
        return b + " [" + a.$ + " " + a.M + " " + _.Pq(a) + "]"
    };
    Vq = function(a) {
        this.type = a;
        this.reason = void 0;
        this.requestId = 0;
        this.customData = this.detailedErrorCode = void 0
    };
    Wq = function(a, b) {
        this.start = a;
        this.end = b
    };
    Xq = function(a) {
        this.type = "CUSTOM_STATE";
        this.state = a
    };
    M = function(a) {
        this.type = a;
        this.requestId = 0;
        this.sequenceNumber = this.customData = this.mediaSessionId = void 0
    };
    Zq = function() {
        M.call(this, "LOAD");
        this.media = new Yq;
        this.autoplay = !1;
        this.loadOptions = this.credentialsType = this.credentials = this.queueData = this.activeTrackIds = this.playbackRate = this.currentTime = void 0
    };
    $q = function(a) {
        Zq.call(this);
        this.type = "PRELOAD";
        this.itemId = a
    };
    ar = function(a) {
        Zq.call(this);
        this.type = "PRECACHE";
        this.precacheData = a
    };
    cr = function() {
        M.call(this, "SET_VOLUME");
        this.volume = new br
    };
    dr = function() {
        M.call(this, "EDIT_TRACKS_INFO");
        this.enableTextTracks = this.isSuggestedLanguage = this.textTrackStyle = this.language = this.activeTrackIds = void 0
    };
    er = function() {
        M.call(this, "EDIT_AUDIO_TRACKS");
        this.isSuggestedLanguage = this.language = void 0
    };
    fr = function() {
        M.call(this, "SEEK");
        this.relativeTime = this.currentTime = this.resumeState = void 0
    };
    gr = function() {
        M.call(this, "SET_PLAYBACK_RATE");
        this.relativePlaybackRate = this.playbackRate = void 0
    };
    hr = function() {
        M.call(this, "GET_STATUS");
        this.options = void 0
    };
    ir = function(a) {
        M.call(this, "QUEUE_LOAD");
        this.repeatMode = void 0;
        this.items = a;
        this.currentTime = this.startIndex = void 0
    };
    jr = function(a) {
        M.call(this, "QUEUE_INSERT");
        this.currentTime = this.currentItemId = this.currentItemIndex = this.insertBefore = void 0;
        this.items = a
    };
    kr = function() {
        M.call(this, "QUEUE_UPDATE");
        this.shuffle = this.repeatMode = this.items = this.jump = this.currentTime = this.currentItemId = void 0
    };
    lr = function(a) {
        M.call(this, "QUEUE_REMOVE");
        this.currentTime = this.currentItemId = void 0;
        this.itemIds = a
    };
    mr = function(a) {
        M.call(this, "QUEUE_REORDER");
        this.insertBefore = this.currentTime = this.currentItemId = void 0;
        this.itemIds = a
    };
    nr = function(a, b, c) {
        M.call(this, "QUEUE_GET_ITEM_RANGE");
        this.itemId = a;
        this.nextCount = b;
        this.prevCount = c
    };
    or = function(a) {
        M.call(this, "QUEUE_GET_ITEMS");
        this.itemIds = a
    };
    pr = function() {
        this.customData = this.loadRequestData = void 0
    };
    qr = function() {
        M.call(this, "STORE_SESSION")
    };
    rr = function() {
        M.call(this, "RESUME_SESSION")
    };
    sr = function(a) {
        M.call(this, "SESSION_STATE");
        this.sessionState = a
    };
    Yq = function() {
        this.contentId = "";
        this.contentUrl = void 0;
        this.streamType = "NONE";
        this.mediaCategory = void 0;
        this.contentType = "";
        this.userActionStates = this.vmapAdsRequest = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.breakClips = this.breaks = this.customData = this.textTrackStyle = this.tracks = this.startAbsoluteTime = this.duration = this.entity = this.metadata = void 0
    };
    tr = function(a, b) {
        this.start = a;
        this.end = b
    };
    ur = function(a, b, c, d) {
        tr.call(this, a, b);
        this.isMovingWindow = c;
        this.isLiveDone = d
    };
    vr = function(a, b, c, d, e, f, g) {
        this.id = a;
        this.queueType = this.entity = void 0;
        this.name = b;
        this.description = c;
        this.repeatMode = d;
        this.shuffle = !1;
        this.items = e;
        this.startIndex = f;
        this.startTime = g;
        this.containerMetadata = void 0
    };
    wr = function(a) {
        this.containerType = void 0 === a ? 0 : a;
        this.containerDuration = this.containerImages = this.sections = this.title = void 0
    };
    xr = function(a) {
        this.metadataType = a;
        this.queueItemId = this.sectionStartTimeInContainer = this.sectionStartAbsoluteTime = this.sectionStartTimeInMedia = this.sectionDuration = this.posterUrl = void 0
    };
    yr = function() {
        xr.call(this, 0);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.contentRating = this.title = void 0
    };
    zr = function() {
        xr.call(this, 1);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.contentRating = this.title = void 0
    };
    Ar = function() {
        xr.call(this, 2);
        this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.contentRating = this.title = this.seriesTitle = void 0
    };
    Br = function() {
        xr.call(this, 3);
        this.releaseDate = this.releaseYear = this.secondaryImage = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.contentRating = this.title = this.albumName = void 0
    };
    Cr = function() {
        xr.call(this, 4);
        this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.contentRating = this.title = void 0
    };
    Dr = function() {
        wr.call(this, 1);
        this.releaseDate = this.publisher = this.narrators = this.authors = void 0
    };
    Er = function() {
        xr.call(this, 5);
        this.images = this.subtitle = this.bookTitle = this.chapterNumber = this.contentRating = this.title = this.chapterTitle = void 0
    };
    br = function() {
        this.muted = this.level = void 0
    };
    Fr = function() {
        this.type = "MEDIA_STATUS";
        this.mediaSessionId = 0;
        this.videoInfo = this.queueData = this.media = void 0;
        this.playbackRate = 1;
        this.playerState = "IDLE";
        this.idleReason = void 0;
        this.supportedMediaCommands = this.currentTime = 0;
        this.volume = new br;
        this.disableStreamGrouping = this.liveSeekableRange = this.extendedStatus = this.breakStatus = this.repeatMode = this.items = this.customData = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.activeTrackIds = void 0
    };
    Gr = function() {
        Fr.call(this)
    };
    Hr = function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = void 0;
        this.type = b;
        this.roles = this.assocLanguage = this.forced = this.customData = this.isInband = this.subtype = this.language = this.name = void 0
    };
    Ir = function() {
        this.textTrackStyle = this.language = this.activeTrackIds = this.tracks = void 0
    };
    _.Jr = function(a, b, c) {
        this.id = a;
        this.breakClipIds = b;
        this.position = c;
        this.duration = void 0;
        this.isWatched = !1;
        this.expanded = this.isEmbedded = void 0
    };
    _.Kr = function(a) {
        this.id = a;
        this.vastAdsRequest = this.customData = this.hlsSegmentFormat = this.clickThroughUrl = this.posterUrl = this.whenSkippable = this.duration = this.title = this.contentType = this.contentUrl = this.contentId = void 0
    };
    _.Lr = function() {
        this.adsResponse = this.adTagUrl = void 0
    };
    Mr = function(a, b) {
        this.currentBreakTime = a;
        this.currentBreakClipTime = b;
        this.whenSkippable = this.breakClipId = this.breakId = void 0
    };
    Nr = function() {
        M.call(this, "SET_CREDENTIALS")
    };
    Or = function() {
        M.call(this, "LOAD_BY_ENTITY")
    };
    Pr = function() {
        M.call(this, "CUSTOM_COMMAND")
    };
    Qr = function() {
        M.call(this, "REFRESH_CREDENTIALS")
    };
    Rr = function(a, b) {
        M.call(this, "PLAY_STRING");
        this.stringId = a;
        this.arguments = b
    };
    Sr = function(a) {
        M.call(this, "EXECUTE_ACTION_SCRIPT");
        this.actionScript = JSON.stringify(a)
    };
    Tr = function(a) {
        M.call(this, "SET_APPLICATION_CONTEXT");
        this.context = JSON.stringify(a ? a : {});
        this.requestId = Date.now()
    };
    Ur = function() {
        M.call(this, "SCREEN_NAVIGATION")
    };
    Vr = function() {
        M.call(this, "USER_ACTION")
    };
    Wr = function() {
        M.call(this, "DISPLAY_STATUS")
    };
    Xr = function() {
        M.call(this, "SHOW_REMOTE_CONTROL_OVERLAY")
    };
    Yr = function() {
        M.call(this, "FOCUS_STATE")
    };
    Zr = function(a) {
        this.type = a
    };
    $r = function() {
        this.level = 1;
        this.muted = !1
    };
    as = function(a, b, c) {
        this.type = "senderdisconnected";
        this.senderId = a;
        this.userAgent = b;
        this.reason = c
    };
    bs = function(a, b) {
        this.type = "senderconnected";
        this.senderId = a;
        this.userAgent = b
    };
    cs = function(a) {
        this.type = "visibilitychanged";
        this.isVisible = a
    };
    ds = function(a) {
        this.type = "standbychanged";
        this.isStandby = a
    };
    es = function(a) {
        this.type = "systemvolumechanged";
        this.data = a
    };
    fs = function(a) {
        this.type = "ready";
        this.data = a
    };
    gs = function() {
        this.type = "shutdown"
    };
    hs = function() {
        this.type = "feedbackstarted"
    };
    is = function(a) {
        this.type = "playbackdevicestatus";
        this.playbackDeviceStatus = a
    };
    js = function(a) {
        this.type = "showmediacontrols";
        this.mediaControlsState = a
    };
    ks = function(a) {
        this.type = "maxvideoresolutionchanged";
        this.height = a
    };
    ls = function() {
        this.type = "groupcapabilities";
        this.capabilities = void 0
    };
    ms = function() {
        this.type = "allowgroupchange";
        this.newGroupCapabilities = void 0
    };
    ns = function(a, b) {
        return b.filter(function(c) {
            return c.language && (0, cast.receiver.ad)(c.language, a)
        })
    };
    os = function() {};
    qs = function(a) {
        if (!(a instanceof os)) throw _.E(ps, "Proper AudioTracksManager object can be acquried by calling cast.framework.PlayerManager.getAudioTracksManager()"), Error("AudioTracksManager is not created properly.");
        this.h = this.j = null
    };
    rs = function(a) {
        if (!a.h || !a.h.na()) throw Error("Tracks info is not available.");
    };
    ss = function() {};
    ts = function(a) {
        this.Wg = a
    };
    vs = function(a) {
        if (!(a instanceof ts)) throw _.E(us, "Proper QueueManager object can be acquried by calling cast.framework.PlayerManager.getQueueManager()"), Error("QueueManager is not created properly.");
        this.h = null;
        this.l = !0;
        this.j = a.Wg;
        this.o = !1
    };
    ws = function(a, b) {
        a.h = b;
        a.h.T = a.l
    };
    ys = function(a, b) {
        var c = a.j.lb(),
            d = nk(a.h);
        if (d && c) {
            if (b && c.metadata) {
                var e = c.metadata;
                if (void 0 === e.sectionStartTimeInMedia || void 0 === e.sectionDuration) return;
                var f = a.j.getCurrentTimeSec();
                if (f >= e.sectionStartTimeInMedia && f <= e.sectionStartTimeInMedia + e.sectionDuration) return
            }
            e = a.j.getCurrentTimeSec();
            d = xs(a, e, Oj(d));
            b && !d ? a.o || (_.E(us, "Cannot find section metadata for current time " + e), a.o = !0, id("Cast.CAF.SectionMetadataMissing")) : (a.o = !1, d && c.metadata != d && (c.metadata = d, _.I(us, "Updating current section metadata"),
                id("Cast.CAF.SectionMetadataUpdated"), a.j.cd(c, !0)))
        }
    };
    xs = function(a, b, c) {
        return (a = a.jg()) && a.sections ? a.sections.find(function(d) {
            return (void 0 === d.queueItemId || d.queueItemId == c) && void 0 !== d.sectionStartTimeInMedia && void 0 !== d.sectionDuration && b >= d.sectionStartTimeInMedia && b <= d.sectionStartTimeInMedia + d.sectionDuration
        }) || null : null
    };
    zs = function(a) {
        var b = Oj(nk(a.h)),
            c = a.jg(),
            d = a.j.getStartAbsoluteTime();
        d && c && c.sections && c.sections.forEach(function(e) {
            void 0 !== e.queueItemId && e.queueItemId !== b || void 0 === e.sectionStartAbsoluteTime || void 0 !== e.sectionStartTimeInMedia || (e.sectionStartTimeInMedia = e.sectionStartAbsoluteTime - d)
        })
    };
    As = function() {};
    Cs = function(a) {
        if (!(a instanceof As)) throw _.E(Bs, "Proper TextTracksManager object can be acquried by calling cast.framework.PlayerManager.getTextTracksManager()"), Error("TextTracksManager is not created properly.");
        this.h = this.j = null
    };
    Ds = function(a) {
        if (!a.h || !a.h.na()) throw Error("Tracks info is not available.");
    };
    Es = function() {};
    Fs = function() {
        this.j = {};
        this.l = {};
        this.o = {};
        this.h = this.A.bind(this)
    };
    Gs = function(a, b, c) {
        a.o[b] = c || _.$a
    };
    Hs = function(a, b) {
        a = a.j[b];
        return a == _.$a ? null : a
    };
    Is = function(a, b) {
        _.nb(b, function(c, d) {
            a.l[d] = c || _.$a
        })
    };
    Ks = function(a) {
        _.H(Js, a + " is not supported based on supported media commands.")
    };
    Ls = function(a, b) {
        this.handleEvent = a;
        this.scope = b
    };
    Ms = function() {
        _.A.call(this);
        this.h = {};
        this.j = this.l = null
    };
    Os = function(a, b, c) {
        var d = a.h[b];
        d && d.slice().forEach(function(e) {
            try {
                e.handleEvent.call(e.scope, c)
            } catch (f) {
                _.E(Ns, "Handler for " + b + " encountered an error."), a.j && a.j(b, f), window.setTimeout(function() {
                    throw f;
                }, 0)
            }
        })
    };
    Ps = function(a, b) {
        a.j = b
    };
    Qs = function(a) {
        this.type = a
    };
    Rs = function(a) {
        this.type = "BITRATE_CHANGED";
        this.totalBitrate = a
    };
    Ss = function(a) {
        this.type = "EMSG";
        this.messageData = a.messageData;
        this.schemeIdUri = a.schemeIdUri;
        this.value = a.value;
        this.startTime = a.startTime;
        this.endTime = a.endTime;
        this.timescale = a.timescale;
        this.presentationTimeDelta = a.presentationTimeDelta;
        this.eventDuration = a.eventDuration;
        this.id = a.id;
        this.segmentData = a.segmentData
    };
    Ts = function(a, b, c) {
        this.type = "ERROR";
        this.detailedErrorCode = a;
        this.reason = c;
        this.error = b
    };
    Us = function(a, b) {
        this.type = "ID3";
        this.segmentData = a;
        this.timestamp = b
    };
    Vs = function(a, b) {
        this.type = a;
        this.currentMediaTime = b
    };
    Ws = function(a, b) {
        b = void 0 === b ? !1 : b;
        Vs.call(this, "PAUSE", a);
        this.ended = b
    };
    Xs = function(a) {
        this.type = "MEDIA_STATUS";
        this.mediaStatus = a
    };
    Ys = function(a) {
        this.type = "CUSTOM_STATE";
        this.state = a
    };
    Zs = function(a, b) {
        this.type = "MEDIA_FINISHED";
        this.currentMediaTime = a;
        this.endedReason = b
    };
    $s = function(a, b, c) {
        this.type = a;
        this.requestData = b;
        this.senderId = c
    };
    at = function(a, b) {
        this.type = a;
        this.media = b
    };
    bt = function(a) {
        at.call(this, "MEDIA_INFORMATION_CHANGED", a)
    };
    ct = function(a, b, c, d, e, f, g, k) {
        this.type = a;
        this.currentMediaTime = b;
        this.index = c;
        this.total = d;
        this.whenSkippable = "number" === typeof e ? e : void 0;
        this.endedReason = f;
        this.breakClipId = g;
        this.breakId = k
    };
    dt = function(a) {
        this.type = "BUFFERING";
        this.isBuffering = a
    };
    et = function(a, b) {
        this.type = "CLIP_ENDED";
        this.currentMediaTime = a;
        this.endedReason = b
    };
    ft = function(a, b) {
        this.type = "SEGMENT_DOWNLOADED";
        this.downloadTime = a;
        this.size = b
    };
    gt = function(a) {
        this.type = "CACHE_LOADED";
        this.media = a
    };
    ht = function(a) {
        this.type = "INBAND_TRACK_ADDED";
        this.track = a
    };
    it = function() {
        this.type = "TRACKS_CHANGED"
    };
    jt = function(a, b) {
        this.type = a;
        this.url = b
    };
    kt = function(a, b) {
        this.type = a;
        this.liveSeekableRange = b
    };
    lt = function(a, b) {
        this.type = a;
        this.timedMetadataInfo = b
    };
    nt = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = b.toLowerCase();
        var d = null;
        "string" !== typeof a ? d = "Url(" + a + ") should be string" : "string" !== typeof b && (d = "mimeType(" + b + ") should be string");
        if (d) throw _.E(mt, d), Error(d);
        this.mimeType = b;
        this.url = 'http://192.168.100.6:9182/CORS/' + a;
        this.playbackConfig = c || new Es;
        this.hlsVideoSegmentFormat = this.hlsSegmentFormat = null;
        this.startTime = void 0;
        this.tracksInfo = this.breakClip = this.media = null
    };
    N = function() {};
    ot = function(a) {
        this.type = a
    };
    pt = function(a, b) {
        this.type = "BITRATE_CHANGED";
        this.newBitrate = a;
        this.previousBitrate = b
    };
    qt = function(a, b) {
        this.type = "TIME_TO_TARGET_BITRATE";
        this.bitrate = a;
        this.timeToTargetSec = b
    };
    st = function(a, b) {
        var c = _.we(document, "SCRIPT");
        c.type = "text/javascript";
        _.Mm(c, Bq(a));
        c.onload = function() {
            _.I(rt, "library(" + a + ") is loaded");
            b.resolve()
        };
        c.onerror = function() {
            _.E(rt, "library(" + a + ") cannot be loaded");
            b.reject()
        };
        document.head.appendChild(c)
    };
    tt = function(a) {
        a = /^(\d{1,2})\.(\d{1,2})\.(\d{1,2})$/.exec(a);
        if (!a) return -1;
        var b = _.q(a);
        b.next();
        a = b.next().value;
        var c = b.next().value;
        b = b.next().value;
        return 1E4 * Number(a) + 100 * Number(c) + Number(b)
    };
    yt = function(a) {
        var b = Hf() || ut.Eh,
            c = tt(a);
        if (-1 === c) return _.E(rt, 'Shaka version format is incorrect. It should be MAJOR.MINOR.PATCH, for example "3.2.1".'), b;
        if (c >= vt && c < wt) return _.E(rt, "Shaka version " + a + " is deprecated."), z("Cast.CAF.CustomShakaVersion", c), a;
        if (c >= wt && c < xt) return z("Cast.CAF.CustomShakaVersion", c), a;
        _.E(rt, "Shaka version " + a + " is not supported. " + b + " is loaded instead.");
        return b
    };
    zt = function(a, b) {
        _.A.call(this);
        this.M = b;
        a = this.player = a;
        this.ignoreTtmlPositionInfo = a.j.playbackConfig && a.j.playbackConfig.ignoreTtmlPositionInfo ? a.j.playbackConfig.ignoreTtmlPositionInfo : !1;
        this.tracks = [];
        this.F = [];
        this.l = null;
        this.o = [];
        this.I = -1;
        this.J = 1;
        this.h = null;
        b && (this.h = new lj(b, [], [], null), _.md(this, this.h));
        this.A = null
    };
    Zt = function(a, b) {
        var c = b.type,
            d = b.name,
            e = b.language,
            f = b.trackContentType,
            g = b.subtype,
            k = b.roles;
        return 0 === a.tracks.length ? null : "VIDEO" === c ? a.tracks.find(function(l) {
            return l.type === c
        }) || null : a.tracks.find(function(l) {
            return c === l.type && Yt(d, l.name) && Yt(e, l.language) && Yt(f, l.trackContentType) && Yt(g, l.subtype) && (!k && !l.roles || !!k && !!l.roles && mb(k, l.roles))
        }) || null
    };
    Yt = function(a, b) {
        return !a && !b || !(!a || !b || a !== b)
    };
    $t = function(a, b) {
        if (0 !== b.length) {
            b.sort(function(d, e) {
                return d.trackId - e.trackId
            });
            if (b[0].trackId <= a.I) throw Error("track id conflicts");
            for (var c = 1; c < b.length; c++)
                if (b[c].trackId == b[c - 1].trackId) throw Error("track id conflicts");
            a.tracks = a.tracks.concat(b);
            a.I = b[b.length - 1].trackId;
            a.J = Math.max(a.J, a.I + 1);
            a.h && b.find(function(d) {
                return !a.Fg(d)
            }) && gj(a.h, cast.framework.K.ek(b))
        }
    };
    bu = function(a, b) {
        a.Pa() ? _.E(au, "Cannot change tracks info in disposed state") : b && (b.activeTrackIds && (a.F = b.activeTrackIds), b.textTrackStyle && a.h && a.h.pb(cast.framework.K.dk(b.textTrackStyle)), b.tracks && $t(a, b.tracks))
    };
    du = function(a, b) {
        if (a.Pa()) _.E(au, "Cannot change tracks in disposed state");
        else {
            for (var c = null, d = _.q(a.tracks), e = d.next(); !e.done; e = d.next())
                if (e = e.value, "TEXT" === e.type && e.language && e.language.toLowerCase() === b.toLowerCase()) {
                    c = e.trackId;
                    break
                }
            if (null === c)
                for (d = _.q(a.tracks), e = d.next(); !e.done; e = d.next())
                    if (e = e.value, "TEXT" === e.type && e.language && cast.receiver.ad(e.language, b)) {
                        c = e.trackId;
                        break
                    }
            null === c ? _.H(au, "No matching track.") : cu(a, [c])
        }
    };
    fu = function(a, b) {
        if (a.Pa()) _.E(au, "Cannot change tracks in disposed state");
        else {
            for (var c = null, d = null != a.l ? a.l : null, e = _.q(a.tracks), f = e.next(); !f.done; f = e.next())
                if (f = f.value, "AUDIO" === f.type && f.language && b && f.language.toLowerCase() === b.toLowerCase() && !f.trackContentId) {
                    c = f.trackId;
                    break
                }
            if (null === c)
                for (e = _.q(a.tracks), f = e.next(); !f.done; f = e.next())
                    if (f = f.value, "AUDIO" === f.type && f.language && b && cast.receiver.ad(f.language, b) && !f.trackContentId) {
                        c = f.trackId;
                        break
                    }
            null === c ? _.H(au, "No matching track.") :
                (eu(a, c, a.o), a.ed(d, c))
        }
    };
    cu = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (a.Pa()) _.E(au, "Cannot change tracks in disposed state");
        else {
            for (var d = null, e = null, f = [], g = [], k = null, l = _.q(a.tracks), m = l.next(); !m.done; m = l.next()) {
                m = m.value;
                if (b.includes(m.trackId))
                    if ("TEXT" == m.type)
                        if (a.Fg(m)) f.push(m.trackId);
                        else if (null != m.trackContentId && Rb(m.trackContentId, ".ttml") || null != m.trackContentType && 0 == Pb(m.trackContentType, "application/ttml+xml"))
                    if (null == k) k = m.trackId;
                    else {
                        _.H(au, "Can not sideload more than one TTML text track.");
                        continue
                    }
                else null !=
                    m.trackContentId && Rb(m.trackContentId, ".vtt") || null != m.trackContentType && 0 == Pb(m.trackContentType, "text/vtt") ? g.push(m.trackId) : _.H(au, "unsupported track type " + m.trackContentType + ", " + m.trackContentId);
                else "AUDIO" != m.type || m.trackContentId || (d = m.trackId);
                null != a.l && (e = a.l)
            }
            a.h ? kj(a.h, g) : 0 < g.length && _.H(au, "Cannot enable sideloaded tracks without media element.");
            c && (e = d);
            a.Lj(e, d, f, k, g)
        }
    };
    eu = function(a, b, c) {
        if (null != b || c) null != b && (a.l = b), a.o = c, a.F = null != a.l ? a.o.concat(a.l) : a.o, a.F.sort()
    };
    gu = function(a, b, c) {
        if (a.A || null != b) {
            if (!a.A) {
                if (!a.M) {
                    _.E(au, "Media element is not ready yet.");
                    return
                }
                c = new cast.player.api.Host({
                    url: "",
                    mediaElement: a.M,
                    ignoreTtmlPositionInfo: c
                });
                a.A = new cast.player.api.Player(c)
            }
            a.A.enableCaptions(!1, "ttml");
            null != b && (c = a.tracks.find(function(d) {
                return d.trackId == b
            }), a.A.enableCaptions(!0, "ttml", c.trackContentId))
        }
    };
    iu = function(a, b) {
        b = void 0 === b ? null : b;
        this.mediaElement = null;
        this.j = a;
        this.va = new Ms;
        this.o = 1;
        this.ja = this.$ = null;
        this.Ta = !1;
        this.Ga = b || hu;
        this.l = null;
        this.ma = [];
        this.H = !1;
        this.D = null;
        this.B = We();
        this.M = !1;
        this.sa = null;
        this.T = this.P = void 0;
        this.Wc = this.Al.bind(this);
        this.F = this.J = null;
        this.wa = 1;
        this.Zc = a.media && a.media.mediaCategory ? a.media.mediaCategory : null
    };
    ku = function(a) {
        if (6 !== a.o) {
            a.l = a.Ga(a, a.mediaElement);
            a.l.gd(a.j);
            var b = a.l;
            b.l = b.lg();
            cu(b, b.F);
            a.Hc(a.getPlaybackRate());
            a.Ta ? ju(a, !0) : a.o = 3;
            a.D && (a.D.resolve(), a.D = null)
        }
    };
    lu = function(a, b) {
        if (!a.l) return null;
        b.textTrackStyle && a.l.pb(b.textTrackStyle);
        b.language ? du(a.l, b.language) : b.activeTrackIds && cu(a.l, b.activeTrackIds);
        return a.l.getTracksInfo().activeTrackIds
    };
    mu = function(a, b) {
        a.va.dispatchEvent(b)
    };
    hu = function(a, b) {
        return new zt(a, b)
    };
    nu = function(a, b, c, d) {
        _.Ed(b, c, d);
        a.ma.push({
            type: c,
            listener: d
        })
    };
    ou = function(a, b) {
        for (var c = _.q(a.ma), d = c.next(); !d.done; d = c.next()) d = d.value, Od(b, d.type, d.listener);
        a.ma.length = 0
    };
    ju = function(a, b) {
        b = void 0 === b ? !1 : b;
        pu(a);
        a.sa = a.getCurrentTimeSec();
        b || void 0 !== a.P || void 0 !== a.T || (a.P = a.isLiveDone(), a.T = a.Gc());
        a.J = setTimeout(a.Wc, 500)
    };
    pu = function(a) {
        null != a.J && (clearTimeout(a.J), a.J = null)
    };
    qu = function(a, b, c) {
        iu.call(this, b, void 0 === c ? null : c);
        var d = this;
        this.h = a;
        this.A = null;
        this.N = "IDLE";
        this.I = this.G = null;
        this.h.setEventsListener(function(e) {
            switch (e.type) {
                case "CLIP_ENDED":
                    d.end("END_OF_STREAM");
                    break;
                case "ERROR":
                    d.onError(e.detailedErrorCode || 100, e.error || void 0);
                    break;
                case "STATE_CHANGED":
                    e = d.h.getPlayerState();
                    if (e != d.N) {
                        d.ec("BUFFERING" === e);
                        switch (e) {
                            case "PAUSED":
                                pu(d);
                                var f = new Ws(d.getCurrentTimeSec(), !1);
                                mu(d, f);
                                break;
                            case "PLAYING":
                                ju(d), f = new Vs("PLAYING", d.getCurrentTimeSec()),
                                    mu(d, f), 4 > d.o && (d.o = 4, mu(d, new Qs("CLIP_STARTED")))
                        }
                        d.N = e
                    }
                    break;
                case "TIME_UPDATE":
                    mu(d, new Vs("TIME_UPDATE", d.getCurrentTimeSec()));
                    break;
                case "DURATION_CHANGED":
                    mu(d, new Vs("DURATION_CHANGE", d.getCurrentTimeSec()));
                    break;
                case "BITRATE_CHANGED":
                    mu(d, e);
                    break;
                case "RATE_CHANGED":
                    mu(d, new Vs("RATE_CHANGE", d.getCurrentTimeSec()));
                    d.Hc(d.getPlaybackRate());
                    break;
                case "TEXT_TRACKS_CHANGED":
                case "AUDIO_TRACKS_CHANGED":
                    if (d.l) {
                        e = d.l;
                        if (f = d.h.getTracksInfo()) e.tracks = f.tracks || [], cu(e, f.activeTrackIds ||
                            [], !0);
                        mu(d, new it)
                    }
                    break;
                case "BREAK_INFO_CHANGED":
                    d.G && d.G();
                    break;
                case "BREAK_STATE_CHANGED":
                    d.I && d.I()
            }
        })
    };
    su = function(a, b, c) {
        a.A = a.A ? a.A.then(function() {
            return c()
        }, function() {
            return c()
        }) : new Me(function(d) {
            return d(c())
        });
        return a.A.then(function(d) {
            return d
        }, function(d) {
            _.H(ru, "3P Player " + b + " failed " + JSON.stringify(d));
            return Qe(d)
        })
    };
    tu = function(a, b) {
        if ("PAUSED" !== a.h.getPlayerState()) {
            if (0 >= b) return _.E(ru, "Player is not paused after pause request"), Qe("APP_ERROR");
            _.H(ru, "Player is not paused after pause, yielding");
            return new Me(function(c) {
                setTimeout(function() {
                    return c(tu(a, b - 100))
                }, 100)
            })
        }
    };
    uu = function(a, b) {
        zt.call(this, a, b);
        this.j = a.h
    };
    vu = function(a) {
        return new Me(function(b, c) {
            var d = new Image;
            d.onerror = c;
            d.onload = b;
            d.src = a
        })
    };
    wu = function(a) {
        iu.call(this, a);
        this.h = null
    };
    xu = function(a, b, c) {
        c = void 0 === c ? Infinity : c;
        var d = (a.byteOffset || 0) + a.byteLength;
        b = Math.max(0, Math.min((a.byteOffset || 0) + (void 0 === b ? 0 : b), d));
        return new Uint8Array(a instanceof ArrayBuffer ? a : a.buffer, b, Math.min(b + Math.max(c, 0), d) - b)
    };
    yu = function(a) {
        return document.createElement(a)
    };
    zu = function(a, b, c) {
        iu.call(this, a, void 0 === c ? null : c);
        var d = this;
        this.Ba = a;
        this.I = b;
        this.G = this.Z = this.W = this.X = this.U = this.h = null;
        this.N = this.xa = !1;
        this.fa = void 0;
        this.A = null;
        this.pa = !1;
        this.$a = cb(function() {
            z("Cast.Shaka.Bandwidth", d.h.getStats().estimatedBandwidth)
        });
        this.ha = new Set;
        this.ra = []
    };
    Au = function(a, b, c) {
        var d = {
                id: c.id,
                startTime: c.startTime,
                endTime: c.endTime,
                dashTimedMetadata: {
                    schemeIdUri: c.schemeIdUri,
                    value: c.value,
                    eventElement: c.eventElement
                }
            },
            e = new lt(b, d);
        ("TIMED_METADATA_CHANGED" !== b || 3 <= a.o) && mu(a, e);
        "TIMED_METADATA_CHANGED" !== b || a.ha.has(c) || (a.ha.add(c), a.ra.push(d))
    };
    Iu = function(a) {
        var b = a.Ba.playbackConfig;
        Bu(b);
        Cu(a, b);
        Du(a, b);
        var c = _.vb(Eu);
        "number" === typeof b.segmentRequestRetryLimit && (c.maxAttempts = b.segmentRequestRetryLimit + 1);
        c = {
            abr: {
                defaultBandwidthEstimate: b.initialBandwidth || 2E6
            },
            drm: {
                retryParameters: Eu,
                servers: Fu(b),
                advanced: {
                    "com.widevine.alpha": {
                        audioRobustness: "HW_SECURE_CRYPTO",
                        videoRobustness: "HW_SECURE_ALL"
                    }
                }
            },
            manifest: {
                retryParameters: Eu
            },
            streaming: {
                jumpLargeGaps: !0,
                rebufferingGoal: b.autoResumeDuration || 10,
                retryParameters: c,
                stallThreshold: 5
            },
            textDisplayFactory: function() {
                if (b.enableUITextDisplayer && a.mediaElement && a.mediaElement.parentElement) return fd("Cast.Shaka.UITextDisplayer", !0), new shaka.text.UITextDisplayer(a.mediaElement, a.mediaElement.parentElement);
                fd("Cast.Shaka.UITextDisplayer", !1);
                return new shaka.text.SimpleTextDisplayer(a.mediaElement)
            }
        };
        b.shakaConfig && (_.I(Gu, "Supplying custom Shaka configurations is not recommended. Please use cast.framework.PlaybackConfig instead."), Hu(a, c, b.shakaConfig));
        a.h.configure(c)
    };
    Hu = function(a, b, c, d) {
        d = void 0 === d ? "" : d;
        Object.keys(c).forEach(function(e) {
            var f = d ? d + "." + e : e;
            _.Ja(b[e]) && _.Ja(c[e]) ? Hu(a, b[e], c[e], f) : (e in b && _.I(Gu, "overriding " + f + " Shaka configuration with custom value"), b[e] = c[e])
        })
    };
    Fu = function(a) {
        var b = {},
            c = a.licenseUrl;
        a = a.protectionSystem;
        if (!c) return {};
        if (a) {
            if (!_.rb(Ju, a)) return _.H(Gu, a + " is not a supported protection system by Shaka player."), {};
            var d = Ku[a];
            if (!d) return {};
            b[d] = c;
            return b
        }
        for (d in Ku) b[Ku[d]] = c;
        return b
    };
    Cu = function(a, b) {
        (b.manifestRequestHandler || b.segmentRequestHandler || b.licenseRequestHandler) && a.h.getNetworkingEngine().registerRequestFilter(function(c, d) {
            var e = {
                url: d.uris[0],
                headers: d.headers,
                content: d.body,
                withCredentials: d.allowCrossSiteCredentials
            };
            Gf() && (e.timeoutInterval = d.retryParameters.timeout);
            switch (c) {
                case a.I.net.NetworkingEngine.RequestType.MANIFEST:
                    "function" === typeof b.manifestRequestHandler && b.manifestRequestHandler(e);
                    break;
                case a.I.net.NetworkingEngine.RequestType.SEGMENT:
                    "function" ===
                    typeof b.segmentRequestHandler && b.segmentRequestHandler(e);
                    break;
                case a.I.net.NetworkingEngine.RequestType.LICENSE:
                    "function" === typeof b.licenseRequestHandler && b.licenseRequestHandler(e)
            }
            d.uris[0] = e.url;
            d.headers = e.headers;
            d.body = e.content;
            d.allowCrossSiteCredentials = e.withCredentials;
            Gf() && (e.timeoutInterval ? d.retryParameters.timeout = e.timeoutInterval : _.I(Gu, "NetworkRequestInfo timeoutInterval missing, overriding with default value"))
        })
    };
    Du = function(a, b) {
        var c = a.h.getNetworkingEngine(),
            d = a.I.net.NetworkingEngine.RequestType;
        c.registerResponseFilter(function(e, f) {
            var g = f.data,
                k;
            switch (e) {
                case d.MANIFEST:
                    "function" === typeof b.manifestHandler && g && (k = Promise.resolve(b.manifestHandler((new TextDecoder).decode(g))).then(function(l) {
                        f.data = (new TextEncoder).encode(l).buffer
                    }));
                    break;
                case d.SEGMENT:
                    a.$a();
                    "function" === typeof b.segmentHandler && (k = Promise.resolve(b.segmentHandler(new Uint8Array(g))).then(function(l) {
                        f.data = l.buffer
                    }));
                    mu(a,
                        new ft(f.timeMs, g.byteLength));
                    break;
                case d.LICENSE:
                    "function" === typeof b.licenseHandler && g && (k = Promise.resolve(b.licenseHandler(new Uint8Array(g))).then(function(l) {
                        f.data = l.buffer
                    }))
            }
            return k
        })
    };
    Bu = function(a) {
        for (var b = _.q(["autoResumeNumberOfSegments", "autoPauseDuration", "licenseCustomData", "captionsRequestHandler"]), c = b.next(); !c.done; c = b.next()) c = c.value, void 0 !== a[c] && _.H(Gu, c + " is not supported for Shakaplayer. Its value will be ignored.")
    };
    Lu = function(a, b) {
        if (b && b.code) {
            _.E(Gu, "category: " + b.category + " code: " + b.code);
            var c = b.code,
                d = {
                    shakaErrorCode: c,
                    shakaErrorData: b.data
                };
            a.onError(cast.framework.media.Uj.mg(b), d);
            z("Cast.Shaka.Error", c)
        } else _.E(Gu, JSON.stringify(b))
    };
    Mu = function(a, b) {
        nu(a, b, "loadedmetadata", a.Bl.bind(a, b));
        nu(a, b, "pause", a.Th.bind(a));
        nu(a, b, "play", a.Cl.bind(a));
        nu(a, b, "playing", a.mq.bind(a))
    };
    Nu = function(a) {
        var b = {};
        a = _.q(a.h.getVariantTracks());
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = void 0;
            c.videoId ? d = "video" : c.audioId && (d = "audio");
            b[d] || (b[d] = []);
            b[d].push(c.bandwidth)
        }
        return b
    };
    Pu = function(a) {
        a.h.getVariantTracks().forEach(function(b) {
            !b.active && b.codecs && hd("Cast.Shaka.Codec", b.codecs);
            !b.active && b.mimeType && z("Cast.Shaka.MimeType", Ou[b.mimeType] || 0)
        })
    };
    Qu = function(a) {
        a.h.getVariantTracks().forEach(function(b) {
            b.active && b.codecs && hd("Cast.Shaka.ActiveCodec", b.codecs);
            b.active && b.mimeType && z("Cast.Shaka.ActiveMimeType", Ou[b.mimeType] || 0)
        })
    };
    Ru = function(a) {
        var b = !1;
        id("Cast.Shaka.Load");
        fd("Cast.Shaka.Live", a.h.isLive());
        Qu(a);
        Pu(a);
        a.h.getVariantTracks().forEach(function(f) {
            "variant" === f.type && (b = f.originalVideoId && f.originalVideoId.includes(",") || f.originalAudioId && f.originalAudioId.includes(",") || b)
        });
        fd("Cast.Shaka.IsMultiPeriod", b);
        var c = a.mediaElement.duration;
        a.isLiveStream() && (c = -1, void 0 !== a.j.startTime && (a.pa = !0));
        z("Cast.Shaka.MediaDuration", c);
        c = Nu(a);
        for (var d = _.q(["audio", "video"]), e = d.next(); !e.done; e = d.next()) e = e.value,
            c[e] && ed(c[e], e + "/*");
        ku(a);
        a.l.H = a.Vi.bind(a)
    };
    Su = function(a, b) {
        return cast.framework.common.$c.sh.then(function() {
            return new zu(a, shaka, b)
        })
    };
    Tu = function(a) {
        cast.framework.common.$c.sh.then(function() {
            cast.framework.media.Vj.xp();
            a && shaka.polyfill.installAll()
        })
    };
    Uu = function(a, b) {
        zt.call(this, a, b);
        this.j = a.h;
        this.B = new Map;
        this.H = null
    };
    Vu = function(a, b) {
        return new Uu(a, b)
    };
    Wu = function(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c].audioId] || (b[a[c].audioId] = a[c].id);
        var d = [],
            e;
        for (e in b) b.hasOwnProperty(e) && d.push(b[e]);
        return a.filter(function(f) {
            return d.includes(f.id)
        })
    };
    Xu = function(a, b) {
        iu.call(this, a, b)
    };
    Yu = function(a, b) {
        nu(a, b, "loadedmetadata", a.h.bind(a, b));
        nu(a, b, "error", function() {
            a.onError(Ac(b.error))
        })
    };
    Zu = function() {
        zt.apply(this, arguments)
    };
    cv = function() {
        this.h = $u;
        this.l = av;
        this.j = bv
    };
    $u = function(a, b) {
        b = void 0 === b ? {} : b;
        b.url = b.url || a;
        return new cast.player.api.Host(b)
    };
    av = function(a, b, c, d) {
        switch (a) {
            case "application/x-mpegurl":
            case "application/vnd.apple.mpegurl":
            case "audio/mpegurl":
            case "audio/x-mpegurl":
                return cast.player.api.CreateHlsStreamingProtocol(d, cast.framework.media.Lb.Po(b), cast.framework.media.Lb.Qo(c));
            case "application/vnd.ms-sstr+xml":
                return cast.player.api.CreateSmoothStreamingProtocol(d);
            case "application/dash+xml":
                return cast.player.api.CreateDashStreamingProtocol(d);
            default:
                return _.Ya("Unsupported mimetype: " + a), cast.player.api.CreateHlsStreamingProtocol(d)
        }
    };
    bv = function(a) {
        return new cast.player.api.Player(a)
    };
    dv = function(a, b, c) {
        iu.call(this, a, void 0 === c ? null : c);
        this.U = b;
        this.N = new Set;
        this.W = []
    };
    gv = function(a) {
        if (!a.G) {
            var b = a.j.playbackConfig,
                c = b.mplConfig || {};
            null != b.disableSourceBufferTimeAdjust && (c.disableSourceBufferTimeAdjust = b.disableSourceBufferTimeAdjust);
            null != b.enableSmoothLiveRefresh && (c.enableSmoothLiveRefresh = b.enableSmoothLiveRefresh);
            null != b.ignoreTtmlPositionInfo && (c.ignoreTtmlPositionInfo = b.ignoreTtmlPositionInfo);
            null != b.enableDurationOnLive && (c.enableDurationOnLive = b.enableDurationOnLive);
            c.enableSideloadedTextTrackStyling = !!b.enableSideloadedTextTrackStyling;
            a.A = a.U.h(a.j.url,
                c);
            ev(a.A, b);
            a.A.onError = a.Wp.bind(a);
            a.A.processMetadata = function(d, e, f, g) {
                if ("EMSG" === d) {
                    if (void 0 !== g)
                        for (d = _.q(g), f = d.next(); !f.done; f = d.next()) f = f.value, mu(a, new Ss({
                            endTime: f.endTime,
                            eventDuration: f.eventDuration,
                            id: f.id,
                            messageData: f.messageData,
                            presentationTimeDelta: f.presentationTimeDelta,
                            schemeIdUri: f.schemeIdUri,
                            segmentData: e,
                            startTime: f.startTime,
                            timescale: f.timescale,
                            value: f.value
                        }))
                } else "ID3" === d ? mu(a, new Us(e, f)) : _.H(fv, "MPL metadata event of type " + d + " was ignored.")
            };
            a.A.onTimedMetadata =
                function(d, e) {
                    var f = {
                        id: e.id,
                        startTime: e.startTime,
                        endTime: e.endTime,
                        hlsTimedMetadata: {
                            rangeClass: e.rangeClass,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            duration: e.duration,
                            plannedDuration: e.plannedDuration,
                            scte35Cmd: e.scte35Cmd,
                            scte35Out: e.scte35Out,
                            scte35In: e.scte35In,
                            clientAttributes: e.clientAttributes,
                            endOnNext: e.endOnNext
                        }
                    };
                    switch (d) {
                        case cast.player.api.DateRangeEventType.DATE_RANGE_CHANGED:
                            d = new lt("TIMED_METADATA_CHANGED", f);
                            3 <= a.o && mu(a, d);
                            break;
                        case cast.player.api.DateRangeEventType.DATE_RANGE_ENTER:
                            d =
                                new lt("TIMED_METADATA_ENTER", f);
                            mu(a, d);
                            break;
                        case cast.player.api.DateRangeEventType.DATE_RANGE_EXIT:
                            d = new lt("TIMED_METADATA_EXIT", f), mu(a, d)
                    }
                    a.N.has(e) || (a.W.push(f), a.N.add(e))
                };
            a.A.trackBandwidth = a.El.bind(a);
            a.A.getQualityLevel = a.ap.bind(a);
            a.h = a.U.l(a.j.mimeType, a.j.hlsSegmentFormat, a.j.hlsVideoSegmentFormat, a.A);
            a.G = a.U.j(a.A)
        }
    };
    ev = function(a, b) {
        null != b.initialBandwidth && (a.initialBandwidth = b.initialBandwidth);
        null != b.autoResumeDuration && (a.autoResumeDuration = b.autoResumeDuration);
        null != b.autoResumeNumberOfSegments && (a.autoResumeNumberOfSegments = b.autoResumeNumberOfSegments);
        null != b.autoPauseDuration && (a.autoPauseDuration = b.autoPauseDuration);
        null != b.segmentRequestRetryLimit && (a.segmentRequestRetryLimit = b.segmentRequestRetryLimit);
        null != b.licenseUrl && (a.licenseUrl = b.licenseUrl);
        null != b.protectionSystem && (a.protectionSystem =
            b.protectionSystem);
        null != b.licenseCustomData && (a.licenseCustomData = b.licenseCustomData);
        null != b.manifestRequestHandler && (a.updateManifestRequestInfo = b.manifestRequestHandler);
        null != b.segmentRequestHandler && (a.updateSegmentRequestInfo = function(c) {
            b.segmentRequestHandler(c)
        });
        null != b.licenseRequestHandler && (a.updateLicenseRequestInfo = b.licenseRequestHandler);
        null != b.captionsRequestHandler && (a.updateCaptionsRequestInfo = b.captionsRequestHandler);
        null != b.manifestHandler && (a.processManifest = b.manifestHandler);
        null != b.segmentHandler && (a.processSegment = function(c, d) {
            return b.segmentHandler(d)
        });
        null != b.licenseHandler && (a.processLicense = b.licenseHandler)
    };
    hv = function(a, b) {
        return cast.framework.common.$c.Gj.then(function() {
            return new dv(a, new cv, b)
        })
    };
    iv = function(a, b) {
        zt.call(this, a, b);
        this.A = this.j = a.G;
        this.H = a.h;
        this.B = new Map
    };
    jv = function(a, b) {
        return new iv(a, b)
    };
    mv = function(a, b) {
        a = a.toLowerCase();
        if (_.rb(kv, a)) return a;
        if ("text/mp2t" == a) return "text/cea608";
        b = b ? b.toLowerCase() : null;
        switch (b) {
            case "ttml":
                return "application/ttml+xml";
            case "webvtt":
                return "text/vtt"
        }
        _.H(lv, "cannot guess text mime type. Defaults to VTT");
        return "text/vtt"
    };
    nv = function() {
        this.h = null
    };
    pv = function(a, b) {
        return _.J(ov(a, b)).then(function(c) {
            if (!c) a: {
                c = cast.framework.Ud.get();
                var d = cast.receiver.Bb.L();d = Cf(d, "use_shaka_for_hls");d = c && c.useShakaForHls || d;c = b.mimeType.toLowerCase();
                switch (c) {
                    case "application/x-mpegurl":
                    case "application/vnd.apple.mpegurl":
                    case "audio/mpegurl":
                    case "audio/x-mpegurl":
                        if (d) {
                            c = Su(b, Vu);
                            break a
                        }
                    case "application/vnd.ms-sstr+xml":
                    case "application/dash+xml":
                        d = hv;
                        var e = jv;
                        cast.framework.common.$c.hk && "application/dash+xml" === c && (d = Su, e = Vu);
                        c = d(b, e);
                        break a
                }
                c =
                c.startsWith("image/") ? cast.framework.media.Ag.create(b) : _.J(new Xu(b, cast.framework.media.hn.create))
            }
            return c
        })
    };
    ov = function(a, b) {
        return window.caf_ && window.caf_["3pp"] && a.h ? _.J(a.h(b)).then(function(c) {
            return c && qv(c) ? new qu(c, b, function(d, e) {
                return new cast.framework.media.Hk(d, e)
            }) : null
        }) : null
    };
    qv = function(a) {
        if (!a.getPlayerVersion) return _.E(rv, "Missing implementation of player interface getPlayerVersion method."), id("Cast.CAF.PlayerCreationFailed"), !1;
        a = a.getPlayerVersion();
        if (!a && "number" !== typeof a) return _.E(rv, "Player getPlayerVersion should return a number."), id("Cast.CAF.PlayerCreationFailed"), !1;
        z("Cast.CAF.PlayerVersion", cast.framework.common.hash.Pg(a));
        return !0
    };
    sv = function(a, b, c) {
        this.seekFrom = a;
        this.seekTo = b;
        this.breaks = c
    };
    tv = function(a) {
        this.break = a
    };
    _.uv = function(a, b) {
        this.breaks = a;
        this.breakClips = b
    };
    xv = function(a) {
        var b = this;
        this.j = a;
        this.A = new Map;
        this.o = new Map;
        this.h = this.l = null;
        this.D = this.G = this.B = 0;
        this.j.addEventListener("TIME_UPDATE", function() {
            return vv(b)
        });
        this.j.addEventListener("MEDIA_FINISHED", function() {
            b.h && (wv(b, "BREAK_CLIP_ENDED", b.h, b.l, void 0, b.B), wv(b, "BREAK_ENDED", b.h, b.l, void 0, b.B));
            b.A.clear();
            b.o.clear();
            b.l = null;
            b.h = null;
            b.B = 0;
            b.D = 0
        })
    };
    zv = function(a, b, c) {
        if (!b.id) return _.E(yv, "Break should specify id " + JSON.stringify(b)), !1;
        if (!b.isEmbedded) return _.E(yv, "Only embedded breaks are supported"), !1;
        if (!b.expanded) return _.E(yv, "Only expanded breaks are supported"), !1;
        if (a.o.has(b.id)) return _.E(yv, "Duplicate dynamic break id " + JSON.stringify(b)), !1;
        if ("number" !== typeof b.position || 0 > b.position) return _.E(yv, "Break position should be positive " + JSON.stringify(b)), !1;
        if (!c || 0 === c.length) return _.E(yv, "Break clips were not provided"), !1;
        var d = [],
            e = 0;
        c.forEach(function(f) {
            "number" !== typeof f.duration || 0 >= f.duration ? _.E(yv, "BreakClip should include positive duration " + JSON.stringify(f)) : f.id ? a.A.has(f.id) || d.includes(f.id) ? _.E(yv, "Duplicate dynamic break clip id " + JSON.stringify(f)) : void 0 !== f.whenSkippable ? _.E(yv, "Dynamic BreakClip are not skippable " + JSON.stringify(f)) : (d.push(f.id), e += f.duration) : _.E(yv, "BreakClip should specify id " + JSON.stringify(f))
        });
        if (c.length != d.length) return !1;
        b.duration = e;
        b.breakClipIds = d;
        return !0
    };
    vv = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (a.l || 0 !== a.o.size) {
            var c = a.j.getCurrentTimeSec(),
                d = Av(a, c);
            c = d.Qi;
            var e = d.Ri,
                f = d.currentBreakClipTime,
                g = d.Gn;
            d = d.In;
            var k = !1,
                l = a.j.lb();
            b && l && (l.breaks = a.getBreaks(), l.breakClips = a.getBreakClips(), k = !0);
            e !== a.h && (k = !0, a.h && wv(a, "BREAK_CLIP_ENDED", a.h, a.l, void 0, a.B), a.l && a.l !== c && (wv(a, "BREAK_ENDED", a.h, a.l, void 0, a.B), z("Cast.CAF.DynamicBreakEnded", (Date.now() - a.G) / 1E3)), c && a.l !== c && (wv(a, "BREAK_STARTED", e, c, f, g), id("Cast.CAF.DynamicBreakStarted"), a.G = Date.now()),
                e && c && (wv(a, "BREAK_CLIP_LOADING", e, c, f, g), wv(a, "BREAK_CLIP_STARTED", e, c, f, g)), a.l = c, a.h = e, a.B = g, a.D = d);
            k && a.j.broadcastStatus(!0)
        }
    };
    wv = function(a, b, c, d, e, f) {
        a.j.o.dispatchEvent(new ct(b, e, f + 1, d.breakClipIds.length, void 0, void 0, c.id, d.id))
    };
    Av = function(a, b) {
        var c = void 0,
            d = void 0,
            e = Array.from(a.o.values()).find(function(m) {
                return b >= m.position && b < m.position + m.duration
            }) || null,
            f = e ? e.position : 0;
        c = d = b - f;
        var g = 0,
            k = f,
            l = e ? e.breakClipIds.find(function(m) {
                f += a.A.get(m).duration;
                return f <= b ? (d = b - f, g++, k = f, !1) : !0
            }) : null;
        l = l ? a.A.get(l) : null;
        e && !l && (_.E(yv, "Could not find break clip in dynamic break"), e = null);
        return {
            Qi: e,
            Ri: l,
            currentBreakTime: c,
            currentBreakClipTime: d,
            Gn: g,
            In: k
        }
    };
    Bv = function() {
        this.l = null;
        this.F = this.Si.bind(this);
        this.H = this.Ti.bind(this);
        this.o = !1;
        this.h = this.B = this.D = this.A = this.j = null;
        this.G = void 0
    };
    Cv = function(a, b) {
        a.D = b;
        a.h = new cast.framework.breaks.Ok(b)
    };
    Dv = function(a, b) {
        if (a.h && (a = a.h, 0 !== a.o.size)) {
            var c = a.j.getCurrentTimeSec(),
                d = Av(a, c);
            c = d.Qi;
            var e = d.Ri,
                f = d.currentBreakTime;
            d = d.currentBreakClipTime;
            var g = b.breakStatus = new Mr(void 0, void 0);
            c && e && (g.breakId = c.id, g.breakClipId = e.id, g.currentBreakTime = f, g.currentBreakClipTime = d);
            b.media && (b.media.breakClips = a.getBreakClips(), b.media.breaks = a.getBreaks())
        }
    };
    Ev = function(a, b, c) {
        try {
            var d = a(b, c);
            return _.J(d)
        } catch (e) {
            return Qe(e)
        }
    };
    Gv = function(a) {
        if (null !== a && "function" !== typeof a) throw _.E(Fv, "Fail to set interceptor since interceptor is not a function"), Error("Fail to set interceptor since interceptor is not a function");
    };
    Hv = function(a, b) {
        _.I(Fv, "break seek interceptor is invoked.");
        return Ev(a.H, b)
    };
    Iv = function(a, b, c) {
        _.I(Fv, "break clip initialize interceptor is invoked. ");
        return Ev(a.F, b, c).then(function(d) {
            if (!d) return [];
            d instanceof Array || (d = [d]);
            d = d.map(function(e) {
                return a.j && e.vastAdsRequest && !e.contentId ? a.j.Hn(e) : [e]
            });
            return Ue(d).then(function(e) {
                var f = [];
                e.forEach(function(g) {
                    g.hg ? f.push.apply(f, g.value) : a.l.va.dispatchEvent(new Ts(901, Error(g.reason)))
                });
                return f
            })
        })
    };
    Jv = function(a) {
        if (a.vmapAdsRequest) return !0;
        if (a.breakClips) {
            a = _.q(a.breakClips);
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value, b.vastAdsRequest && !b.contentId) return !0
        }
        return !1
    };
    Lv = function(a, b) {
        if (!Jv(b)) return _.J();
        a.A || (a.A = cast.framework.common.$c.Ep(), a.A.then(function() {
            a.j = new _.Kv(a.D);
            a.D.addEventListener("BREAK_CLIP_LOADING", a.Lp.bind(a));
            a.B && a.j.Mj(a.B);
            void 0 !== a.G && a.j.jf(a.G)
        }));
        return a.A
    };
    Mv = function(a, b) {
        return a.j ? a.j.Rl(b) : (_.E(Fv, "VastManager hasn't been loaded"), _.J(null))
    };
    Nv = function(a, b, c) {
        this.j = a;
        this.l = b;
        this.h = c
    };
    Ov = function(a, b) {
        return null !== b && a.j == b.j && a.h == b.h
    };
    Pv = function(a, b) {
        b.breakId = a.j.id;
        b.breakClipId = a.h.id;
        a = a.h.whenSkippable;
        "number" === typeof a && (b.whenSkippable = a)
    };
    Sv = function(a, b, c, d) {
        c = void 0 === c ? [] : c;
        d = void 0 === d ? [] : d;
        this.h = [];
        this.l = new Map;
        this.B = new Map;
        this.isEmbedded = a;
        this.A = b;
        this.va = new Ms;
        this.F = 0;
        this.D = !1;
        Qv(this, d);
        Rv(this, c);
        b = this.getBreakClips();
        a = xb(this.h);
        b = xb(b);
        this.I = new _.uv(a, b)
    };
    Qv = function(a, b) {
        b.forEach(function(c) {
            Tv(a, c) && a.l.set(c.id, c)
        })
    };
    Rv = function(a, b) {
        b.forEach(function(c) {
            return a.yd(c)
        })
    };
    Tv = function(a, b) {
        return b.id ? a.isEmbedded && ("number" !== typeof b.duration || 0 >= b.duration) ? (_.E(Uv, "Break Clip with invalid duration is ignored"), !1) : a.l.has(b.id) ? (_.H(Uv, "Duplicate break clip id, " + b.id + ", clip is ignored"), !1) : !0 : (_.E(Uv, "Break Clip with no clip id is ignored"), !1)
    };
    Vv = function(a, b) {
        if (!b.id) return _.E(Uv, "Break with no clip is ignored"), !1;
        if (a.isEmbedded && !b.isEmbedded) return _.E(Uv, "Stitched break is ignored in embedded timeline"), !1;
        if (!a.isEmbedded && b.isEmbedded) return _.E(Uv, "Embedded break is ignored in stitched timeline"), !1;
        if ("number" !== typeof b.position) return _.E(Uv, "Break with no position is ignored."), !1;
        if (0 > b.position && b.isEmbedded) return _.E(Uv, "Break with negative position is ignored."), !1;
        var c = b.breakClipIds || [],
            d = c.filter(function(e) {
                return a.l.has(e)
            });
        d.length < c.length && (_.H(Uv, "Unknown clip id in break is ignored."), b.breakClipIds = d);
        return 0 == d.length ? (_.E(Uv, "Break with no break clips is ignored."), !1) : !0
    };
    Wv = function(a, b, c, d) {
        var e = [];
        d.forEach(function(f) {
            if (!f.id) {
                for (; a.l.has("GENERATED:" + a.F);) a.F++;
                f.id = "GENERATED:" + a.F
            }
            a.l.has(f.id) ? a.l.get(f.id) !== f && _.H(Uv, "BreakClip with existing id is ignored. BreakClip id = " + f.id) : Tv(a, f) && a.l.set(f.id, f);
            e.push(f.id)
        });
        b.breakClipIds.splice.apply(b.breakClipIds, [c, 1].concat(_.ka(e)))
    };
    Xv = function(a, b) {
        var c = [],
            d = "seek-" + Date.now();
        a.B.set(d, b.breaks.slice());
        a = _.q(b.breaks);
        for (var e = a.next(); !e.done; e = a.next()) c.push.apply(c, _.ka(e.value.breakClipIds));
        return new _.Jr(d, c, b.seekTo)
    };
    Yv = function(a, b) {
        b.isWatched || (a.D = !0);
        b.isWatched = !0;
        a.B.has(b.id) && (a.B.get(b.id).forEach(function(c) {
            c.isWatched = !0
        }), a.B.delete(b.id))
    };
    Zv = function(a, b, c) {
        var d = b > c,
            e = d ? c : b,
            f = d ? b : c;
        return a.h.filter(function(g) {
            return g.position > e && g.position <= f
        })
    };
    $v = function(a, b, c, d, e) {
        this.sa = a;
        this.Ta = b.contentUrl || b.contentId;
        this.B = c;
        this.$a = e;
        this.va = new Ms;
        this.h = this.mediaElement = null;
        this.timeline = d;
        this.j = null;
        this.U = this.isPlayingBreak = !1;
        this.aa = function() {};
        this.J = function() {};
        this.$ = function() {};
        this.A = 1;
        this.W = 0;
        this.F = null;
        this.ra = !1;
        this.H = We();
        this.ma = !1;
        this.T = this.X = this.ja = null;
        this.Z = !1;
        this.va.addEventListener("BREAK_STARTED", this.ur, this);
        this.va.addEventListener("BREAK_ENDED", this.sr, this);
        this.va.addEventListener("CLIP_STARTED", this.wr,
            this);
        this.va.addEventListener("CLIP_ENDED", this.vr, this)
    };
    aw = function(a) {
        if (!a.j) return !1;
        var b = a.j.h.whenSkippable;
        if ("number" !== typeof b) return !1;
        a = a.Oa();
        return Number(b) <= a
    };
    cw = function(a, b, c, d) {
        a.mediaElement = b;
        return a.Ee(c).then(function() {
            3 > a.A && (a.A = 3);
            a.zj();
            a.aa();
            $e(a.setPlaybackRate(d), function() {
                _.H(bw, "Set playback rate after load failed")
            })
        }, function(e) {
            a.Z || (a.Z = !0, a.J(e));
            return Promise.reject(e)
        })
    };
    dw = function(a, b) {
        a.j && (b &= -3, aw(a) && (b |= 512));
        return b
    };
    ew = function(a, b) {
        a.h && a.h.isLiveStream() && (b.metadata ? b.metadata.sectionStartAbsoluteTime ? "number" === typeof b.metadata.sectionStartTimeInMedia ? ("number" === typeof cast.receiver.media.startAbsoluteTime && _.H(bw, "media.startAbsoluteTime will be updated based on section start absolute time and section start media time."), b.startAbsoluteTime = b.metadata.sectionStartAbsoluteTime - b.metadata.sectionStartTimeInMedia) : (b.startAbsoluteTime || (b.startAbsoluteTime = a.getStartAbsoluteTime() || void 0), b.startAbsoluteTime &&
            (b.metadata.sectionStartTimeInMedia = b.metadata.sectionStartAbsoluteTime - b.startAbsoluteTime)) : b.startAbsoluteTime = void 0 : ("number" === typeof b.startAbsoluteTime && _.E(bw, "media.startAbsoluteTime should not be provided if no metadata"), b.startAbsoluteTime = void 0))
    };
    fw = function(a, b, c, d, e) {
        var f = b.j,
            g = b.h;
        b = b.l + 1;
        var k = f.breakClipIds.length,
            l = g.whenSkippable,
            m = a.Oa() || 0;
        if ("BREAK_CLIP_ENDED" === c) {
            var n = cast.receiver.Bb.L();
            m = Cf(n, "use_correct_time_for_break_clip_ended") ? void 0 !== e ? e : m : void 0 !== a.I ? a.I : m
        }
        a.va.dispatchEvent(new ct(c, m, b, k, l, d, g.id, f.id))
    };
    hw = function(a) {
        a.A = 4;
        "PAUSED" == a.getState() && gw(a, !1)
    };
    iw = function(a, b, c, d, e) {
        c = void 0 === c ? null : c;
        var f = c != a.j,
            g = !1;
        a.j && f && fw(a, a.j, "BREAK_CLIP_ENDED", d, e);
        a.j && "BREAK_ENDED" == b && (fw(a, a.j, b, d, e), g = !0, a.isPlayingBreak = !1, a.U = !1);
        if (a.j = c) z("Cast.CAF.AdMimeType", Ou[a.j.h.contentType || ""] || 0), d = a.j.h, e = d.whenSkippable, fd("Cast.CAF.AdSkippable", null != e && e < d.duration), a.isPlayingBreak || (fw(a, c, "BREAK_STARTED"), a.isPlayingBreak = !0, a.U = aw(a), d = c.j, Yv(a.timeline, d)), f && "BREAK_CLIP_STARTED" == b && fw(a, c, "BREAK_CLIP_LOADING"), fw(a, c, b), g = !0;
        g && gw(a, !1)
    };
    gw = function(a, b) {
        b = b || a.ma || a.timeline.D;
        a.$a(b);
        b && (a.timeline.D = !1, a.ma = !1)
    };
    jw = function(a, b) {
        a.h = null;
        a.I = b.currentMediaTime;
        a.end(b.endedReason)
    };
    kw = function(a, b, c) {
        a.h ? a.h.va.addEventListener(b, c, a) : _.E(bw, "No active player, cannot listen to events")
    };
    lw = function(a, b) {
        a.h ? a.h.va.removeEventListener("CLIP_ENDED", b) : _.E(bw, "No active player, cannot unlisten to events")
    };
    mw = function(a, b) {
        var c = a.getCurrentTimeSec(),
            d = Zv(a.timeline, c, b),
            e = null;
        0 < d.length && (e = $e(Hv(a.sa, new sv(c, b, d)), function(f) {
            a.va.dispatchEvent(new Ts(902, Error(f)));
            return null
        }));
        return _.J(e)
    };
    nw = function(a, b, c) {
        this.l = a;
        this.h = b;
        this.currentIndex = -1;
        this.j = null;
        this.seekTo = c
    };
    ow = function() {
        this.h = this.j = this.l = null
    };
    pw = function(a, b) {
        return a.j < b && b < a.h
    };
    rw = function(a, b, c) {
        b = void 0 === b ? [] : b;
        c = void 0 === c ? [] : c;
        Sv.call(this, !0, a, b, c);
        this.o = [];
        this.H = new Map;
        this.G = new ow;
        this.j = null;
        a = 0;
        b = _.q(this.h);
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = 0, e = 0; e < c.breakClipIds.length; e++) {
                var f = this.kb(c.breakClipIds[e]);
                if (f) {
                    var g = c.position + a,
                        k = g + d;
                    g = new qw(c, f, c.position, g, k, k + f.duration, e);
                    this.H.set(c.id + "___" + f.id, g);
                    this.o.push(g);
                    d += f.duration
                }
            }
            a += d
        }
    };
    sw = function(a, b) {
        return (a = a.o.slice(0).reverse().find(function(c) {
            return c.l < b
        })) ? a.j + (b - a.l) : b
    };
    tw = function(a, b) {
        return a.o.find(function(c) {
            return c.include(b)
        }) || null
    };
    uw = function(a, b) {
        if (pw(a.G, b)) return a.G.getBreakStatus();
        var c = null,
            d = tw(a, b);
        if (d) {
            c = a.h.find(function(g) {
                return g == d.o
            });
            var e = d.h;
            var f = d.j;
            c = new Nv(c, d.A, d.breakClip)
        } else f = a.o.find(function(g) {
            return g.h > b
        }), e = b, f = f ? f.h : Infinity, c = null;
        a.G.cache(c, e, f);
        return c
    };
    vw = function(a) {
        if (a.j.currentIndex === a.j.h.length - 1) return null;
        var b = a.j.h[a.j.currentIndex + 1];
        return new Nv(a.j.l, b.A, b.breakClip)
    };
    ww = function(a, b) {
        a.j.currentIndex++;
        a.j.j = b
    };
    xw = function(a, b) {
        return a.o.slice(0).reverse().find(function(c) {
            return c.o === b
        }).j
    };
    qw = function(a, b, c, d, e, f, g) {
        this.o = a;
        this.breakClip = b;
        this.l = c;
        this.B = d;
        this.h = e;
        this.j = f;
        this.A = g
    };
    yw = function(a, b, c, d, e) {
        cast.framework.media.Player.call(this, a, b, c, d, e);
        this.D = this.l = this.G = null;
        this.o = !1
    };
    zw = function(a) {
        var b = a.timeline;
        a.B.startTime && (a.B.startTime = sw(b, a.B.startTime));
        return pv(nv.L(), a.B)
    };
    Aw = function(a) {
        var b = a.Ya(),
            c = a.timeline,
            d = null,
            e = _.J();
        if (a.l) 0 > c.j.currentIndex || !c.j.h[c.j.currentIndex].include(b) ? (d = vw(c)) ? (e = a.h.seek(c.j.h[c.j.currentIndex + 1].h), ww(c, d)) : (c.j = null, a.l.resolve(), a.l = null, e = a.D, a.D = null) : d = c.j.j;
        else if (d = uw(c, b)) b = d.j, a.j || !b.isWatched || c.A.o || (e = a.h.seek(xw(c, b)), d = null);
        return e.then(function() {
            var f = d,
                g = a.o ? "SKIPPED" : void 0;
            f ? a.j && Ov(a.j, f) || (a.o = !1, iw(a, "BREAK_CLIP_STARTED", f, g)) : a.j && (a.o = !1, iw(a, "BREAK_ENDED", null, g))
        })
    };
    Bw = function(a) {
        Sv.call(this, !0, a, [], []);
        this.j = null
    };
    Cw = function(a, b, c) {
        a.reset();
        Qv(a, c || []);
        b && b.forEach(function(d) {
            return d.isEmbedded = !0
        });
        Rv(a, b || [])
    };
    Dw = function(a, b, c, d, e) {
        cast.framework.media.Player.call(this, a, b, c, d, e);
        this.o = d;
        this.l = this.D = null
    };
    Ew = function(a) {
        if (a.l) {
            var b = a.l.getBreaks();
            Cw(a.o, b, a.l.getBreakClips());
            b && 0 < b.length && z("Cast.CAF.3PPBreaks", b.length)
        }
    };
    Fw = function(a, b, c, d) {
        d = void 0 === d ? Infinity : d;
        this.h = a;
        this.breakStatus = b;
        this.startTime = void 0 === c ? 0 : c;
        this.endTime = d
    };
    Iw = function(a, b, c, d, e) {
        var f = cast.framework.media.util.qe(a.toLowerCase());
        b = (b || "").toLowerCase();
        var g = Gw[f];
        !_.rb(_.Hw, b) && g && _.rb(_.Hw, g) && (b = g);
        b = b || cast.framework.media.util.we(f);
        a = new nt(a, b, c);
        void 0 !== d && (a.hlsSegmentFormat = d);
        void 0 !== e && (a.hlsVideoSegmentFormat = e);
        return a
    };
    Jw = function(a, b, c) {
        b = void 0 === b ? [] : b;
        c = void 0 === c ? [] : c;
        Sv.call(this, !1, a, b, c)
    };
    Nw = function(a, b, c) {
        return _.J().then(function() {
            var d = a.h.find(function(e) {
                return !(e.isWatched && !a.A.o) && e.position == b
            });
            return d ? $e(Kw(a, d, 0, c), function() {
                _.I(Lw, "createMediaClipAt: Cannot create a stitching media clip");
                return null
            }) : null
        }).then(function(d) {
            return d ? d : new Fw(c, null, b, Mw(a, b))
        })
    };
    Ow = function(a, b, c) {
        return _.J().then(function() {
            if (b.isPlayingBreak()) {
                var d = b.breakStatus,
                    e = d.j,
                    f = d.l + 1;
                return _.J().then(function() {
                    if (e.breakClipIds.length > f) return $e(Kw(a, e, f, c), function(k) {
                        if (k instanceof Le) return Qe(k);
                        _.I(Lw, "createNextMediaClip: Cannot create stitching clip in break.")
                    });
                    _.I(Lw, "createNextMediaClip: No more break clip");
                    return null
                }).then(function(k) {
                    if (k) return k;
                    k = d.getPosition();
                    _.I(Lw, "createNextMediaClip: The current break status position is: " + k);
                    return k
                })
            }
            var g =
                a.h.find(function(k) {
                    return !(k.isWatched && !a.A.o) && (k.position >= b.endTime || 0 > k.position)
                });
            if (g) return $e(Kw(a, g, 0, c), function(k) {
                return k instanceof Le ? Qe(k) : null
            }).then(function(k) {
                if (k) return k;
                _.I(Lw, "createNextMediaClip: next break is skipped.");
                return g.position
            });
            _.I(Lw, "createNextMediaClip: No next break");
            return -1
        }).then(function(d) {
            return "number" !== typeof d ? d : 0 > d ? (_.I(Lw, "createNextMediaClip: No more clip"), null) : new Fw(c, null, d, Mw(a, d))
        })
    };
    Kw = function(a, b, c, d) {
        var e = _.J();
        0 === c && (e = Pw(a, b));
        return e.then(function() {
            for (var f = c; f < b.breakClipIds.length; f++) {
                var g = b;
                var k = f,
                    l = d,
                    m = a.kb(g.breakClipIds[k]);
                m ? g = new Fw(cast.framework.media.util.gp(m, l.playbackConfig), new Nv(g, k, m), 0) : (_.I(Lw, "createStitchingMediaClipAt_:No next clip at " + k), g = null);
                if (g) return g
            }
            _.I(Lw, "createValidStitchingClip:No more valid break clip in a break");
            return null
        })
    };
    Pw = function(a, b) {
        if (0 === b.breakClipIds.length) return _.J();
        var c = new tv(b),
            d = b.breakClipIds.map(function(e) {
                return (e = a.kb(e)) ? (e = new window.Proxy(e, {
                    set: function(f, g, k) {
                        k !== f[g] && (f[g] = k, a.D = !0);
                        return !0
                    }
                }), Iv(a.A, e, c)) : _.J([])
            });
        return Ue(d).then(function(e) {
            var f = 0,
                g = b.breakClipIds.slice();
            e.forEach(function(k) {
                k.hg ? (Wv(a, b, f, k.value), f += k.value.length) : (a.va.dispatchEvent(new Ts(901, Error(k.reason))), f++)
            });
            mb(g, b.breakClipIds) || (a.D = !0)
        })
    };
    Mw = function(a, b) {
        var c = a.h.find(function(d) {
            return !(d.isWatched && !a.A.o) && d.position > b
        });
        return c ? c.position : Infinity
    };
    Qw = function(a, b, c, d, e) {
        cast.framework.media.Player.call(this, a, b, c, d, e);
        this.D = this.fa = null;
        this.P = this.timeline;
        this.pa = this.G = this.l = this.o = null;
        this.M = this.N = void 0;
        this.ha = We();
        this.Ba = 1;
        this.wa = 0;
        this.xa = this.Ga = null;
        this.P.va.gf(this.va)
    };
    Vw = function(a, b, c, d) {
        Rw(a);
        return Kw(a.P, b, 0, a.B).then(function(e) {
            if (!e) return _.I(Sw, "Fail to create seek clip"), !1;
            Tw(a, e).then(function(f) {
                if (void 0 === d) {
                    var g = !0;
                    a.h && (g = "PAUSED" !== a.h.Wd())
                } else g = "PLAYBACK_START" == d;
                if (a.h) {
                    lw(a, a.Hf);
                    var k = a.h.end("STOPPED")
                } else k = _.J();
                a.G = c;
                k.then(function() {
                    Uw(a, f, e, g)
                })
            });
            return !0
        })
    };
    Rw = function(a) {
        a.l && (a.l.cancel("0"), a.l = null);
        a.D && (a.D.cancel("0"), a.D = null)
    };
    Ww = function(a, b) {
        return Ow(a.P, b, a.B).then(function(c) {
            return c && !b.isPlayingBreak() && !c.isPlayingBreak() && b.h.url === c.h.url && a.Ya() < b.endTime ? (b.endTime = c.endTime, Ww(a, b)) : c
        })
    };
    Xw = function(a, b) {
        a.l = Ww(a, b);
        var c = a.l;
        a.D = $e(a.l.then(function(d) {
            return d ? Tw(a, d).then(function(e) {
                a.ha.promise.then(function() {
                    _.I(Sw, "Preloading Next Clip");
                    e.preloadContent()
                });
                return e
            }) : (_.I(Sw, "No more clip afterwards"), null)
        }), function(d) {
            d && "0" === d.message && _.I(Sw, "Next player creation is interrupted by seek.")
        }).then(function(d) {
            if (d) return d;
            c === a.l && (a.l = null);
            _.I(Sw, "No more player afterwards");
            return null
        })
    };
    Yw = function(a) {
        _.I(Sw, "switchPlayerAndCip");
        if (a.l) {
            if (a.D) return $e(Te([a.l, a.D]).then(function(b) {
                var c = _.q(b);
                b = c.next().value;
                c = c.next().value;
                if (!b || !c) return !0;
                a.l = null;
                a.D = null;
                Uw(a, c, b, !0);
                return !1
            }), function(b) {
                if (b && "0" === b.message) return _.I(Sw, "Player switching is interrupted by seek."), !1;
                _.E(Sw, "Switch player failed " + b.message);
                return !0
            });
            _.I(Sw, "switchPlayerAndClip_: No next player.");
            return _.J(!0)
        }
        _.I(Sw, "switchPlayerAndClip_: No next clip.");
        return _.J(!0)
    };
    Uw = function(a, b, c, d) {
        _.I(Sw, "loadCurrentPlayerAndCreateNext_: " + c.startTime);
        a.h = b;
        a.o = c;
        a.Pd();
        kw(a, "CLIP_STARTED", a.Hl);
        kw(a, "CLIP_ENDED", a.Hf);
        a.o.breakStatus && iw(a, "BREAK_CLIP_LOADING", a.o.breakStatus, a.N, a.M);
        a.N = void 0;
        a.M = void 0;
        var e = a.mediaElement;
        a.ha = We();
        d = b.pd(e, d).then(function() {
            a.o.breakStatus || (cast.framework.media.Player.prototype.setPlaybackRate.call(a, a.Ba), a.pa = b.l)
        });
        Xw(a, c);
        return d
    };
    Tw = function(a, b) {
        var c = _.vb(b.h);
        c.startTime = b.startTime;
        b.breakStatus || (c.tracksInfo = a.Ga);
        return pv(nv.L(), c)
    };
    $w = function(a) {
        return (a.fa || pv(nv.L(), a.B)).then(function(b) {
            b.va.addEventListener("ERROR", function(c) {
                return cast.framework.media.Player.prototype.Ue.call(a, c)
            });
            return b.pd(a.mediaElement, !1).then(function() {
                Zw(a, b);
                return b.end("STOPPED")
            })
        })
    };
    Zw = function(a, b) {
        a.wa = b.getDurationSec();
        a.pa = b.l;
        a.xa = b.getMediaCategory()
    };
    ax = function(a) {
        this.h = a
    };
    bx = function(a, b, c, d) {
        var e = cast.framework.Ud.get();
        return e && e.usePlayerBreaks ? (e = new cast.framework.timeline.Qm(b), _.J(new cast.framework.media.Pm(b, c, d, e, a.h))) : Lv(b, c).then(function() {
            var f = null;
            c.breaks && 0 !== c.breaks.length || !c.vmapAdsRequest || (f = Mv(b, c.vmapAdsRequest).then(function(g) {
                g && (c.breaks = g.breaks, c.breakClips = g.breakClips)
            }));
            return _.J(f).then(function() {
                if (c.breaks && 0 < c.breaks.length && !c.breaks[0].isEmbedded) {
                    var g = new Jw(b, c.breaks, c.breakClips);
                    var k = new cast.framework.media.kn(b,
                        c, d, g, a.h)
                } else g = new rw(b, c.breaks, c.breakClips), k = new yw(b, c, d, g, a.h);
                b.l = g;
                return _.J(k)
            })
        })
    };
    cx = function(a) {
        this.h = a
    };
    O = function(a) {
        if (!(a instanceof cx)) throw _.E(dx, "Proper Player object can be acquried by calling getPlayer() of cast.framework.Application object"), Error("player is not created properly.");
        this.o = new Ms;
        this.$a = new ax(this.broadcastStatus.bind(this));
        this.j = new Fs;
        this.D = new Fs;
        this.l = null;
        this.M = We();
        this.A = Di.L();
        this.h = this.wa = this.pa = this.B = this.ja = this.ra = this.ma = null;
        this.Ga = _.J();
        this.aa = this.I = null;
        this.T = new qs(new os);
        this.G = new Cs(new As);
        this.Z = new vs(new ts(this));
        this.H = a.h;
        this.Ta =
            Date.now();
        this.W = new Map;
        this.J = 0;
        this.U = null;
        this.F = 1;
        this.X = this.N = null;
        this.$ = !1;
        this.xa = _.Ra();
        this.fa = this.sa = 0;
        this.ha = this.P = !1;
        this.Ba = null;
        ex(this)
    };
    ex = function(a) {
        Ps(a.o, function(c, d) {
            "ERROR" !== c && "*" !== c && a.o.dispatchEvent(new Ts(900, d))
        });
        a.o.addEventListener("MEDIA_FINISHED", a.Vp, a);
        a.o.addEventListener("LIVE_IS_MOVING_WINDOW_CHANGED", a.broadcastStatus, a);
        a.o.addEventListener("LIVE_ENDED", a.broadcastStatus, a);
        a.o.addEventListener("RATE_CHANGE", a.nq, a);
        a.o.addEventListener("ERROR", a.Il, a);
        a.o.addEventListener("REQUEST_PRECACHE", a.qq, a);
        a.o.addEventListener("BUFFERING", a.Mp, a);
        a.o.addEventListener("TIME_UPDATE", function() {
            ys(a.Z, !0)
        });
        a.o.addEventListener("DURATION_CHANGE",
            a.Rp, a);
        a.o.addEventListener("TRACKS_CHANGED", a.zq, a);
        a.A.o = a.tq.bind(a);
        a.A.l = a.Sp.bind(a);
        Gs(a.D, "LOAD_BY_ENTITY", a.A.l.bind(a.A));
        a.A.l = a.D.h;
        Gs(a.D, "SET_CREDENTIALS", a.A.o.bind(a.A));
        a.A.o = a.D.h;
        a.A.B = a.D.h;
        a.A.G = a.D.h;
        a.A.D = a.D.h;
        a.A.F = a.D.h;
        var b = Object.keys(fx).reduce(function(c, d) {
            c[d] = a.vg.bind(a);
            return c
        }, {});
        Is(a.j, b);
        b = Object.keys(gx).reduce(function(c, d) {
            c[d] = a.vg.bind(a);
            return c
        }, {});
        Is(a.D, b)
    };
    hx = function(a) {
        var b = _.Ra(),
            c = (b - a.xa) / 1E3;
        a.xa = b;
        a.P && (a.$ ? a.fa += c : a.sa += c)
    };
    jx = function(a, b, c) {
        z("Cast.CAF.EventListenerAdded", cast.framework.common.analytics.hj(b));
        if (!_.rb(ix, b)) throw a = "addEventListener(" + b + ") failed due to invalid event type", _.E(dx, a), Error(a);
        a.o.addEventListener(b, c)
    };
    kx = function(a, b, c) {
        z("Cast.CAF.EventListenerRemoved", cast.framework.common.analytics.hj(b));
        a.o.removeEventListener(b, c)
    };
    lx = function(a, b, c, d, e) {
        a.l.Ca(b.senderId, b.data.requestId, c || ("LOAD" == b.data.type ? "LOAD_FAILED" : "ERROR"), void 0 === d ? "APP_ERROR" : d, e)
    };
    mx = function(a) {
        z("Cast.CAF.MessageInterceptorDuration", _.Ra() - a)
    };
    nx = function(a) {
        return function() {
            var b = _.Ra();
            return Promise.resolve(a.apply(null, _.ka(_.za.apply(0, arguments)))).then(function(c) {
                mx(b);
                return c
            }).catch(function(c) {
                mx(b);
                return Promise.reject(c)
            })
        }
    };
    ox = function(a, b) {
        b.requestId || (b.requestId = a.Ta++);
        var c = We();
        a.W.set(b.requestId, c);
        return Promise.resolve(c.promise)
    };
    px = function(a, b) {
        if (b) {
            a.J = 0;
            var c = a.W.get(b);
            c && (c.resolve(), a.W.delete(b))
        }
    };
    qx = function(a, b, c) {
        if (b) {
            a.J = 0;
            var d = a.W.get(b);
            d && (d.reject(c), a.W.delete(b))
        }
    };
    tx = function(a, b, c) {
        var d = "ERROR",
            e = "APP_ERROR",
            f = void 0;
        c && (_.rb(rx, c) ? d = c : _.rb(sx, c) ? e = c : (_.rb(rx, c.type) && (d = c.type), _.rb(sx, c.reason) && (e = c.reason)), f = c.customData);
        lx(a, b, d, e, f)
    };
    ux = function(a) {
        var b = a.G.getTracks().length;
        z("Cast.CAF.NumSubtitles", b);
        a.G.getTracks().forEach(function(c) {
            (c = c.trackContentType) && z("Cast.CAF.SubtitleType", Ou[c] || 0)
        })
    };
    xx = function(a) {
        if (a = a.lb()) {
            var b = 0;
            a.streamType && (b = vx[a.streamType] || 0);
            var c = 0;
            a.mediaCategory && (c = wx[a.mediaCategory] || 0);
            z("Cast.CAF.MediaMimeType", Ou[a.contentType] || 0);
            z("Cast.CAF.MediaStreamType", b);
            z("Cast.CAF.MediaCategory", c)
        }
    };
    yx = function(a, b) {
        var c = b.media,
            d = Object.assign(new Es, a.aa);
        a.ma && (d = a.ma(b, d));
        var e = a.ra ? a.ra(b) : c.contentUrl || c.contentId;
        return _.J(d).then(function(f) {
            return f ? _.J(e).then(function(g) {
                if (!g) return _.E(dx, "Load failed, missing content url."), Qe();
                var k = cast.framework.media.util,
                    l = k.hp,
                    m = b.currentTime,
                    n = b.activeTrackIds,
                    t = new Ir;
                c.tracks && (t.tracks = c.tracks || []);
                c.textTrackStyle && (t.textTrackStyle = c.textTrackStyle);
                t.activeTrackIds = n;
                g = l.call(k, c, m, f, g, t);
                c.contentType = g.mimeType;
                return bx(a.$a,
                    a.H, c, g)
            }) : (_.E(dx, "Load failed, missing playback config."), Qe())
        })
    };
    zx = function(a) {
        a && a.media && (a.media.vmapAdsRequest = void 0, (a = a.media.breakClips) && a.forEach(function(b) {
            b.vastAdsRequest = void 0
        }))
    };
    Ax = function(a, b) {
        if (a.h && a.h.na()) {
            var c = a.G,
                d = c.fj();
            0 < d.length ? a.N = d[0].language || null : b && null != a.N ? 0 < c.ue(a.N).length && c.df(a.N) : a.N = null;
            (d = c.sc()) ? a.X = d: b && null != a.X && c.pb(a.X)
        }
    };
    Bx = function(a, b) {
        a.l = b;
        a.M.resolve();
        a.T.j = b;
        a.G.j = b;
        b.ha = a.Yp.bind(a);
        b.ma = a.bq.bind(a);
        b.fa = a.Xp.bind(a);
        b.Ch = a.Qp.bind(a);
        b.zf = function() {};
        b.ja = a.Zp.bind(a);
        b.wa = a.fq.bind(a);
        b.$ = a.cq.bind(a);
        b.Z = a.aq.bind(a);
        b.X = a.$p.bind(a);
        b.sa = a.eq.bind(a);
        Gs(a.j, "load", b.ha.bind(b));
        b.ha = a.j.h;
        Gs(a.j, "preload", b.ma.bind(b));
        b.ma = a.j.h;
        b.Af = a.j.h;
        Gs(a.j, "cancelpreload", b.fa.bind(b));
        b.fa = a.j.h;
        Gs(a.j, "stop", b.Ga.bind(b));
        b.Ga = a.j.h;
        Gs(a.j, "pause", a.Ob.bind(a, b.X.bind(b)));
        b.X = a.j.h;
        Gs(a.j, "play", b.Z.bind(b));
        b.Z = a.j.h;
        Gs(a.j, "playagain", b.Be.bind(b));
        b.Be = a.j.h;
        Gs(a.j, "skipad", a.Ob.bind(a, b.wa.bind(b)));
        b.wa = a.j.h;
        Gs(a.j, "seek", a.Ob.bind(a, b.$.bind(b)));
        b.$ = a.j.h;
        Gs(a.j, "setplaybackrate", a.Ob.bind(a, b.sa.bind(b)));
        b.sa = a.j.h;
        Gs(a.j, "setvolume", a.Ob.bind(a, b.Ze.bind(b)));
        b.Ze = a.j.h;
        Gs(a.j, "getstatus", b.Zc.bind(b));
        b.Zc = a.j.h;
        Gs(a.j, "editaudiotracks", b.$a.bind(b));
        b.$a = a.j.h;
        Gs(a.j, "edittracksinfo", a.Ob.bind(a, b.Wc.bind(b)));
        b.Wc = a.j.h;
        Gs(a.j, "queueload", b.Pe.bind(b));
        b.Pe = a.j.h;
        Gs(a.j, "queueinsert", b.Ge.bind(b));
        b.Ge = a.j.h;
        Gs(a.j, "queueupdate", a.Ob.bind(a, b.pa.bind(b)));
        b.pa = a.j.h;
        Gs(a.j, "queueremove", b.Se.bind(b));
        b.Se = a.j.h;
        Gs(a.j, "queuereorder", b.Ve.bind(b));
        b.Ve = a.j.h;
        b.Bf = !0;
        b.xa = a.uq.bind(a);
        Gs(a.j, "storesession", a.Ob.bind(a, b.xa.bind(b)));
        b.xa = a.j.h;
        b.ra = a.rq.bind(a);
        Gs(a.j, "resumesession", a.Ob.bind(a, b.ra.bind(b)));
        b.ra = a.j.h;
        ws(a.Z, b)
    };
    Cx = function(a, b) {
        lx(a, b, "ERROR", "NOT_SUPPORTED");
        id("Cast.CAF.UnsupportedMediaMessage")
    };
    Dx = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = this.j = null
    };
    Ex = function(a) {
        clearTimeout(a.j);
        a.j = null
    };
    Ix = function(a, b) {
        b == a.h ? _.se(Fx, "state is already set to idle due to " + b) : (a.h = b, b = Gx[b], Ex(a), a.j = setTimeout(function() {
            _.I(Fx, "timer expired");
            cast.framework.common.Vd.Fe(Hx[this.h || "no_media"]);
            this.o()
        }.bind(a), 6E4 * b))
    };
    Jx = function() {};
    P = function(a) {
        if (!(a instanceof Jx)) throw _.E(Kx, "CastReceiverContext is a singleton.Please call CastReceiverContext.getInstance() instead."), Error("CastReceiverContext is not created properly.");
        cast.framework.common.analytics.Fp();
        this.j = _.Tg.L();
        this.B = new Bv;
        this.l = new O(new cx(this.B));
        Cv(this.B, this.l);
        this.h = null;
        this.A = !1;
        this.o = null;
        this.j.addEventListener("shutdown", function() {
            cast.framework.common.Vd.Fe(7)
        })
    };
    Mx = function(a, b) {
        if (a.h) throw Error("Cast receiver options already provided");
        a.h = b;
        cast.framework.Ud.set(a.h);
        for (var c in Lx) void 0 !== b[c] && z("Cast.CAF.StartOption", Lx[c]);
        void 0 !== b.versionCode && z("Cast.CAF.AppVersionCode", cast.framework.common.hash.Pg(b.versionCode));
        a.initialize()
    };
    Ox = function() {
        var a = document.getElementsByTagName("video"),
            b = document.getElementsByTagName("audio"),
            c = Nx();
        if (0 == a.length && 0 == b.length && !c) return _.H(Kx, "MediaElement is not created yet"), null;
        if (c) return c.getMediaElement();
        c = _.q(a);
        for (var d = c.next(); !d.done; d = c.next())
            if (d = d.value, d.classList && d.classList.contains("castMediaElement")) return d;
        c = _.q(b);
        for (d = c.next(); !d.done; d = c.next())
            if (d = d.value, d.classList && d.classList.contains("castMediaElement")) return d;
        return 0 < a.length ? a[0] : b[0]
    };
    Nx = function() {
        var a = document.getElementsByTagName("cast-media-player");
        return 0 < a.length ? a[0] : null
    };
    Px = function(a, b) {
        return Ug(a.j, b, cast.framework.K.ck(a.h && a.h.customNamespaces && a.h.customNamespaces[b] || "JSON"))
    };
    Qx = function(a) {
        var b = a.l;
        b.addEventListener("PLAYER_LOADING", a.Jq.bind(a));
        b.addEventListener("MEDIA_FINISHED", a.Fq.bind(a))
    };
    Sx = function() {
        Rx || (Rx = new P(new Jx));
        return Rx
    };
    Wx = function() {
        var a = this;
        this.j = new Ms;
        this.l = new Ms;
        this.h = Sx();
        if (this.o = this.h.isRemoteControl()) ne(Tx, Ux, "App Running as a Remote Control"), this.B = Px(this.h, "urn:x-cast:com.google.cast.remotecontrol"), this.B.addEventListener("send", function(b) {
            a.l.dispatchEvent(b.data)
        }), this.h.Ei("urn:x-cast:com.google.cast.remotecontrol", this.A.bind(this)), this.addEventListener("APPLICATION_CHANGED", function() {
            return Vx(a, new hr)
        })
    };
    Xx = function(a, b) {
        a.l.addEventListener("SEEK", b)
    };
    Vx = function(a, b) {
        a.h.Kj("urn:x-cast:com.google.cast.remotecontrol", "system-0", b)
    };
    Yx = function() {};
    $x = function(a) {
        if (!(a instanceof Yx)) throw _.E(Zx, "SignalCollector is a singleton. Please call cast.framework.pal.SignalCollector.getInstance() instead."), Error("SignalCollector was not created properly.");
        this.h = Sx()
    };
    ay = function(a) {
        return a.h.$b() ? Promise.resolve() : new Promise(function(b) {
            a.h.addEventListener("ready", function() {
                b()
            })
        })
    };
    by = function(a) {
        this.h = We();
        this.j = Te([kf(a), this.h.promise])
    };
    cy = function(a) {
        nl.call(this, a);
        var b = this;
        this.G = Sx().isRemoteControl();
        this.F = cast.framework.vd.L();
        this.G && this.F.addEventListener("MEDIA_STATUS", function(c) {
            c && c.status && c.status[0] && (c = c.status[0], b.o = c.mediaSessionId, b.D(c))
        })
    };
    dy = function() {
        var a = $c.call(this) || this;
        window.customElements && window.customElements.define && a.createdCallback();
        return a
    };
    fy = function(a, b) {
        if (b) {
            a.l.classList.add("start-animation");
            var c = ey(b);
            a.h = c;
            c.then(function(d) {
                c === a.h && (a.l.classList.remove("start-animation"), d = cast.receiver.C.Y.Ua(d.src), a.j.style.backgroundImage = d)
            })
        } else a.j.style.backgroundImage = "", a.h = null
    };
    ey = function(a) {
        var b = new Image;
        b.src = a;
        return b.decode().then(function() {
            return b
        }).catch(function() {
            return b
        })
    };
    gy = function(a, b, c, d) {
        this.name = a;
        this.isRemoteControl = void 0 === d ? !1 : d;
        this.iconUrl = b;
        this.groupName = void 0 === c ? "" : c
    };
    hy = function() {
        this.applicationData = null;
        this.state = "launching";
        this.isSeeking = !1;
        this.currentTime = this.duration = 0;
        this.playbackRate = 1;
        this.metadata = null;
        this.mediaSessionId = 0;
        this.queueData = this.media = null;
        this.nextThumbnailUrl = this.nextSubtitle = this.nextTitle = this.secondaryImageUrl = this.thumbnailUrl = this.subtitle = this.title = "";
        this.nextMetadata = null;
        this.preloadingNext = !1;
        this.mediaCategory = this.contentType = null;
        this.supportedMediaCommands = 0;
        this.isAtLiveEdge = this.isLive = !1;
        this.sectionDuration =
            this.sectionStartTimeInMedia = this.mediaStartAbsoluteTime = this.liveSeekableRange = null;
        this.breakPercentagePositions = [];
        this.isBreakSkippable = this.isPlayingBreak = !1;
        this.whenSkippable = void 0;
        this.currentBreakClipNumber = this.numberBreakClips = 0;
        this.breakTitle = "";
        this.displayStatus = !1;
        this.displayType = "tv";
        this.dpadUi = !1;
        this.customState = this.presentation = null;
        this.activeTrackIds = []
    };
    iy = function(a, b, c) {
        this.type = a;
        this.field = b;
        this.value = c
    };
    my = function(a) {
        this.l = Sx();
        this.j = this.l.l;
        this.F = cast.framework.vd.L();
        this.G = new Ms;
        this.D = void 0;
        this.P = !1;
        this.N = [];
        this.H = 0;
        this.h = jy(this, a);
        ky(this);
        this.I = this.J = this.M = this.B = this.A = null;
        this.o = new vq;
        ly(this)
    };
    jy = function(a, b) {
        return new window.Proxy(b, {
            set: function(c, d, e) {
                if (e === c[d] && "object" != typeof e) return !0;
                c[d] = e;
                c = new iy(d + cast.framework.C.ba, d, e);
                a.P ? a.N.push(c) : a.G.dispatchEvent(c);
                return !0
            }
        })
    };
    ny = function(a, b) {
        return function() {
            var c = _.za.apply(0, arguments);
            a.P = !0;
            b.apply(null, _.ka(c));
            for (a.P = !1; 0 < a.N.length;) c = a.N.shift(), a.G.dispatchEvent(c)
        }
    };
    oy = function(a, b) {
        b && (a.h.applicationData = new gy(b.name, b.iconUrl))
    };
    ty = function(a, b) {
        b = (a.h.media = b) || new Yq;
        a: {
            switch ((b.contentType || "").toLowerCase().split("/")[0]) {
                case "image":
                    var c = "image";
                    break a;
                case "audio":
                    c = "audio";
                    break a
            }
            c = "video"
        }
        a.h.contentType = c;
        a.h.mediaCategory = b.mediaCategory || cast.receiver.Y.getMediaCategory(cast.framework.K.fc(b)) || "VIDEO";
        a.h.isLive = "LIVE" === b.streamType;
        a.h.metadata = b.metadata || null;
        c = b.metadata || {};
        a.h.title = c.title || "";
        a.h.subtitle = c.subtitle || "";
        var d = c.images;
        a.h.thumbnailUrl = d && d[0] && d[0].url || "";
        a.h.secondaryImageUrl =
            c.secondaryImage && c.secondaryImage.url || "";
        a.H = 0;
        py(a, qy(a));
        ry(a);
        sy(a, b)
    };
    uy = function(a, b) {
        b ? (a.h.preloadingNext = !0, a.h.nextTitle = b.title || "", a.h.nextSubtitle = b.subtitle || "", a.h.nextThumbnailUrl = b.images && b.images[0] && b.images[0].url || "", a.h.nextMetadata = b) : (a.h.preloadingNext = !1, a.h.nextTitle = "", a.h.nextSubtitle = "", a.h.nextThumbnailUrl = "", a.h.nextMetadata = null)
    };
    vy = function(a, b) {
        return !a || "number" !== typeof b || isNaN(b) || 0 == b ? [] : a.map(function(c) {
            return 0 > c.position ? 100 : Math.min(100, c.position / b * 100)
        })
    };
    wy = function(a) {
        a = a.l.h;
        return !!(a && a.uiConfig && a.uiConfig.useStatusOnlyForUi)
    };
    ly = function(a) {
        var b = a.l.isRemoteControl();
        _.I(xy, "Remote control mode enabled: " + b);
        b ? (a.o.l = ny(a, function() {
            a.h.currentTime = wq(a.o);
            yy(a)
        }), Xx(a.F, ny(a, function() {
            var c = a.o;
            c.j = !1;
            clearInterval(c.A);
            a.h.isSeeking = !0
        })), a.F.addEventListener("MEDIA_STATUS", ny(a, function(c) {
            c && c.status && c.status[0] && zy(a, c.status[0])
        })), a.F.addEventListener("APPLICATION_CHANGED", function(c) {
            var d = "",
                e = c.iconUrl,
                f = c.deviceName || "";
            if (c = c.application) d = c.displayName, c = c.appImages, e = e || c && c[0] && c[0].url || "";
            a.h.applicationData =
                new gy(d, e, f, !0)
        }), a.F.addEventListener("CUSTOM_STATE", function(c) {
            a.h.customState = c.state
        })) : a.l.$b() ? Ay(a) : a.l.addEventListener("ready", function() {
            return Ay(a)
        });
        fi(a.l.j).then(function(c) {
            a.h.displayType = c ? "touch" : "tv";
            c = (c = cast.framework.Ud.get()) && c.uiConfig && c.uiConfig.disableRemoteControlOptimizedUi;
            Df() && !c && (a.h.dpadUi = !0)
        })
    };
    Ay = function(a) {
        oy(a, a.l.Rc());
        By(a);
        setTimeout(function() {
            "launching" == a.h.state && Cy(a, "idle")
        }, 1E3)
    };
    By = function(a) {
        wy(a) ? (a.j.addEventListener("REQUEST_SEEK", ny(a, function() {
            var b = a.o;
            b.j = !1;
            clearInterval(b.A);
            a.h.isSeeking = !0
        })), a.j.addEventListener("MEDIA_STATUS", ny(a, function(b) {
            b.mediaStatus && zy(a, b.mediaStatus)
        })), a.o.l = ny(a, function() {
            a.h.currentTime = wq(a.o);
            yy(a)
        })) : (a.j.addEventListener("MEDIA_FINISHED", ny(a, function(b) {
            "INTERRUPTED" === b.endedReason ? Cy(a, "loading") : Cy(a, "idle");
            Dy(a);
            uy(a, void 0)
        })), a.j.addEventListener("PLAYER_LOADING", ny(a, function(b) {
            uy(a, void 0);
            ty(a, b.media);
            "IMAGE" ===
            a.h.mediaCategory ? Cy(a, "playing") : Cy(a, "loading")
        })), a.j.addEventListener("PLAYER_LOAD_COMPLETE", ny(a, function(b) {
            ty(a, b.media);
            "PAUSED" == a.j.getPlayerState() && Cy(a, "paused");
            Ey(a);
            Fy(a, b.media, a.j.getLiveSeekableRange())
        })), a.j.addEventListener("MEDIA_INFORMATION_CHANGED", ny(a, function(b) {
            ty(a, b.media)
        })), a.j.addEventListener("PLAYING", ny(a, function() {
            return Cy(a, "playing")
        })), a.j.addEventListener("PAUSE", ny(a, function(b) {
            b.ended ? uy(a, void 0) : Cy(a, "paused")
        })), a.j.addEventListener("BUFFERING", ny(a,
            function(b) {
                b.isBuffering ? Cy(a, "buffering") : "buffering" === a.h.state && Cy(a, "playing")
            })), a.j.addEventListener("SEEKING", ny(a, function() {
            a.h.isSeeking = !0;
            py(a, qy(a));
            Ey(a);
            uy(a, void 0)
        })), a.j.addEventListener("SEEKED", ny(a, function() {
            a.h.isSeeking = !1;
            py(a, qy(a));
            Ey(a)
        })), a.j.addEventListener("BREAK_STARTED", ny(a, function(b) {
            return Gy(a, b)
        })), a.j.addEventListener("BREAK_ENDED", ny(a, function(b) {
            return Gy(a, b)
        })), a.j.addEventListener("BREAK_CLIP_LOADING", ny(a, function(b) {
            return Gy(a, b)
        })), a.j.addEventListener("BREAK_CLIP_STARTED",
            ny(a, function(b) {
                return Gy(a, b)
            })), a.j.addEventListener("BREAK_CLIP_ENDED", ny(a, function(b) {
            return Gy(a, b)
        })), a.j.addEventListener("DURATION_CHANGE", ny(a, function() {
            return Ey(a)
        })), a.j.addEventListener("TIME_UPDATE", ny(a, function() {
            return Ey(a)
        })), a.j.addEventListener("REQUEST_DISPLAY_STATUS", ny(a, function() {
            "VIDEO" === a.h.mediaCategory && py(a, !0)
        })), a.j.addEventListener("REQUEST_PLAY", function() {
            "VIDEO" === a.h.mediaCategory && "playing" === a.h.state && py(a, !0)
        }), a.j.addEventListener("PLAYER_PRELOADING",
            ny(a, function(b) {
                uy(a, b.media.metadata)
            })), a.j.addEventListener("MEDIA_STATUS", ny(a, function(b) {
            b.mediaStatus && Hy(a, b.mediaStatus)
        })), a.j.addEventListener("CUSTOM_STATE", function(b) {
            a.h.customState = b.state
        }))
    };
    Hy = function(a, b) {
        b.extendedStatus && (b = _.vb(b), Object.assign(b, b.extendedStatus));
        a.h.mediaSessionId !== b.mediaSessionId ? (a.h.mediaSessionId = b.mediaSessionId, ty(a, b.media), a.h.queueData = b.queueData) : (b.queueData && (a.h.queueData = b.queueData), b.media && ty(a, b.media));
        "number" === typeof b.supportedMediaCommands && (a.h.supportedMediaCommands = b.supportedMediaCommands);
        if (b.liveSeekableRange) {
            var c = b.liveSeekableRange;
            a.h.isLive && (Dy(a), Iy(a) ? (a.h.liveSeekableRange = c, Jy(a), Ky(a)) : a.h.liveSeekableRange = null)
        }
        a.h.activeTrackIds =
            b.activeTrackIds || [];
        switch (b.playerState) {
            case "PLAYING":
                Cy(a, "playing");
                break;
            case "PAUSED":
                Cy(a, "paused");
                break;
            case "BUFFERING":
                Cy(a, "buffering");
                break;
            case "IDLE":
                Cy(a, "idle");
                break;
            case "LOADING":
                Cy(a, "loading")
        }
        Ly(a)
    };
    zy = function(a, b) {
        a.h.isSeeking = !1;
        Hy(a, b);
        var c = b.breakStatus,
            d = a.h.media,
            e = a.o,
            f = cast.framework.K.mr(b),
            g = cast.receiver.C.Y.rj(f.breakStatus),
            k = g ? f.breakStatus.currentBreakClipTime : f.currentTime;
        k = k || 0;
        cast.receiver.C.Y.Yc(k) ? (e.o = Number(k), e.B = Date.now(), e.l()) : e.j && (e.o += (Date.now() - e.B) / 1E3 * e.F, e.B = Date.now(), e.l(), "IDLE" !== f.playerState && (e.h || _.H(My, "currentTime was not synchronized from Media Status. Possible incorrect progress bar position")));
        "PLAYING" === f.playerState ? xq(e) : (e.j = !1, clearInterval(e.A));
        e.F = !g && cast.receiver.C.Y.Yc(f.playbackRate) ? f.playbackRate : 1;
        a.h.isPlayingBreak = !!Ny(c);
        e = Oy(c, d);
        f = Py(c, d);
        a: {
            if (a.h.isPlayingBreak) {
                if (!f) {
                    _.E(xy, "Break clip data is not found for currently playing break.");
                    d = void 0;
                    break a
                }
                d = f.duration
            } else {
                if (!d) {
                    d = void 0;
                    break a
                }
                d = d.duration
            }
            cast.receiver.C.Y.Yc(d) || (_.H(xy, "Duration is not a valid number. Duration: " + d), d = void 0)
        }
        a.h.isPlayingBreak ? (py(a, !1, !0), a.h.breakTitle = f && f.title || "") : a.h.breakTitle = "";
        a.h.duration = void 0 === d ? 0 : d;
        ry(a);
        a.D = Ny(c) ? c.whenSkippable :
            void 0;
        yy(a);
        a.h.numberBreakClips = e && Array.isArray(e.breakClipIds) ? e.breakClipIds.length : 0;
        e && f ? (c = e.breakClipIds.indexOf(f.id), c = 0 > c ? 0 : c + 1) : c = 0;
        a.h.currentBreakClipNumber = c;
        b.media && Fy(a, b.media, b.liveSeekableRange)
    };
    Iy = function(a) {
        return !!(a.h.supportedMediaCommands & 2)
    };
    qy = function(a) {
        if (a.h.isPlayingBreak) return !1;
        if ("AUDIO" === a.h.mediaCategory || "VIDEO" === a.h.mediaCategory && a.h.applicationData && a.h.applicationData.isRemoteControl) switch (a.h.state) {
            case "playing":
            case "loading":
            case "buffering":
            case "paused":
                return !0;
            default:
                return !1
        }
        if ("VIDEO" === a.h.mediaCategory) switch (a.h.state) {
            case "loading":
                return !0;
            case "buffering":
            case "playing":
            case "paused":
                return a.h.isSeeking
        }
        return !1
    };
    Cy = function(a, b) {
        a.h.state != b && (a.h.state = b, "VIDEO" !== a.h.mediaCategory || "paused" !== b || a.h.isPlayingBreak ? py(a, qy(a)) : py(a, !0))
    };
    Gy = function(a, b) {
        "BREAK_STARTED" == b.type ? (a.h.isPlayingBreak = !0, py(a, !1, !0)) : "BREAK_ENDED" == b.type && (a.h.isPlayingBreak = !1);
        if (a.h.isPlayingBreak) {
            a.h.numberBreakClips = b.total || 0;
            a.h.currentBreakClipNumber = b.index || 0;
            a.D = b.whenSkippable;
            var c = (a.h.media && a.h.media.breakClips || []).find(function(d) {
                return d.id == b.breakClipId
            });
            a.h.breakTitle = c && c.title || ""
        } else a.D = void 0, a.h.numberBreakClips = 0, a.h.currentBreakClipNumber = 0, a.h.breakTitle = "";
        Ey(a)
    };
    sy = function(a, b) {
        a.h.mediaStartAbsoluteTime = b.startAbsoluteTime || null;
        b.metadata ? (a.h.sectionStartTimeInMedia = "number" === typeof b.metadata.sectionStartTimeInMedia ? b.metadata.sectionStartTimeInMedia : null, a.h.sectionDuration = b.metadata.sectionDuration || null) : (a.h.sectionStartTimeInMedia = null, a.h.sectionDuration = null)
    };
    Fy = function(a, b, c) {
        b && (a.h.isLive = "LIVE" == b.streamType, sy(a, b), a.h.isLive && Iy(a) && c && "number" === typeof c.start && "number" === typeof c.end ? (a.h.liveSeekableRange = c, Jy(a), Ky(a)) : a.h.liveSeekableRange = null)
    };
    Ly = function(a) {
        a.h.isAtLiveEdge = a.h.isLive ? Iy(a) ? "number" === typeof a.h.currentTime && a.h.liveSeekableRange ? 10 > Math.abs(a.h.currentTime - a.h.liveSeekableRange.end) : !1 : "PLAYING" === a.j.getPlayerState() : !1
    };
    Ky = function(a) {
        clearTimeout(a.B);
        a.B = null;
        if (a.h.isLive && Iy(a) && a.h.liveSeekableRange) {
            var b = _.Ra() / 1E3 - a.M;
            a.h.liveSeekableRange.isMovingWindow && (a.h.liveSeekableRange.start = a.J + b);
            a.h.liveSeekableRange.isLiveDone || (a.h.liveSeekableRange.end = a.I + b);
            Ly(a);
            a.G.dispatchEvent(new iy(Qy, "liveSeekableRange", a.h.liveSeekableRange));
            a.B = setTimeout(function() {
                Ky(a)
            }, 500)
        }
    };
    Jy = function(a) {
        a.J = a.h.liveSeekableRange.start;
        a.I = a.h.liveSeekableRange.end;
        a.M = _.Ra() / 1E3
    };
    Dy = function(a) {
        null != a.B && (clearTimeout(a.B), a.B = null, a.M = null, a.J = null, a.I = null)
    };
    Ey = function(a) {
        if (a.h.isPlayingBreak) {
            a.h.duration = a.j.Gb() || 0;
            var b = a.j.Oa();
            null !== b && (a.h.currentTime = b)
        } else a.h.duration = a.j.getDurationSec() || 0, a.h.currentTime = a.j.getCurrentTimeSec() || 0, Ly(a);
        ry(a);
        yy(a);
        Ky(a)
    };
    ry = function(a) {
        a.h.isPlayingBreak ? (a.h.breakPercentagePositions = [], a.H = 0) : a.H != a.h.duration && (a.h.breakPercentagePositions = vy(a.h.media && a.h.media.breaks, a.h.duration), a.H = a.h.duration)
    };
    yy = function(a) {
        if ("number" === typeof a.D && 0 <= a.D) {
            var b = a.D - a.h.currentTime;
            0 < b ? (a.h.whenSkippable = b, a.h.isBreakSkippable = !1) : (a.h.whenSkippable = 0, a.h.isBreakSkippable = !0)
        } else a.h.whenSkippable = void 0, a.h.isBreakSkippable = !1
    };
    py = function(a, b, c) {
        if (b || !a.A || (void 0 === c ? 0 : c))
            if (null !== a.A && (clearTimeout(a.A), a.A = null), a.h.displayStatus = b) a.A = setTimeout(function() {
                a.h.displayStatus = qy(a);
                a.A = null
            }, 5E3)
    };
    ky = function(a) {
        var b = Ry;
        if (b) {
            var c = a.h;
            Object.keys(b).forEach(function(d) {
                return c[d] = b[d]
            })
        } else a.h.supportedMediaCommands = a.j.Wb()
    };
    Oy = function(a, b) {
        return Ny(a) ? (b && b.breaks || []).find(function(c) {
            return c.id === a.breakId
        }) || null : null
    };
    Py = function(a, b) {
        return Ny(a) ? (b && b.breakClips || []).find(function(c) {
            return c.id === a.breakClipId
        }) || null : null
    };
    Ny = function(a) {
        return cast.receiver.C.Y.rj(a)
    };
    Sy = function(a) {
        this.j = a;
        this.F = window.getComputedStyle(this.j);
        this.h = []
    };
    Ty = function(a) {
        a.G = setTimeout(function() {
            void 0 !== a.o && a.h[a.o].classList.remove("visible")
        }, a.A)
    };
    Uy = function(a) {
        return a.j && a.j.children ? Array.from(a.j.children).filter(function(b) {
            var c = window.getComputedStyle(b).backgroundImage;
            if (c && "none" !== c) return b
        }) : []
    };
    Wy = function(a, b) {
        a = a.F.getPropertyValue(b) || "";
        a = a.toLocaleLowerCase().trim();
        var c = parseFloat(a);
        switch (a.replace(/[-+.0-9]/g, "").trim()) {
            case "ms":
                return c;
            case "s":
                return 1E3 * c;
            default:
                return _.E(Vy, "Cannot parse value " + a + " of CSS style " + b), 0
        }
    };
    Xy = function() {
        this.type = "changed"
    };
    fz = function(a) {
        var b = this;
        this.j = new Ms;
        this.h = a;
        this.h.addEventListener(Yy, function() {
            Zy(b)
        });
        this.h.addEventListener($y, function() {
            Zy(b)
        });
        this.h.addEventListener(az, function() {
            Zy(b)
        });
        this.h.addEventListener(bz, function() {
            Zy(b)
        });
        this.h.addEventListener(cz, function() {
            Zy(b)
        });
        this.h.addEventListener(dz, function() {
            Zy(b)
        });
        this.h.addEventListener(Qy, function() {
            Zy(b)
        });
        this.h.addEventListener(ez, function() {
            Zy(b)
        })
    };
    Zy = function(a) {
        a.j.dispatchEvent(new Xy)
    };
    gz = function(a) {
        var b = a.h.h;
        a = Iy(a.h);
        return b.isPlayingBreak ? 0 : "number" === typeof b.sectionStartTimeInMedia ? b.sectionStartTimeInMedia : a && b.liveSeekableRange && b.liveSeekableRange.start ? b.liveSeekableRange.start : 0
    };
    hz = function(a) {
        a = a.h.h;
        return !a.isPlayingBreak && "number" === typeof a.mediaStartAbsoluteTime
    };
    iz = function(a) {
        a = a.h.h.currentTime - gz(a);
        return 0 <= a ? a : 0
    };
    jz = function(a) {
        var b = a.h.h,
            c = hz(a),
            d = iz(a);
        return Iy(a.h) && b.isLive && !b.isPlayingBreak && b.liveSeekableRange && "number" !== typeof b.sectionStartTimeInMedia && !c ? cast.receiver.C.Y.Na(b.currentTime) : c ? cast.receiver.C.Y.gg(b.mediaStartAbsoluteTime + b.currentTime) : cast.receiver.C.Y.Na(d)
    };
    kz = function(a) {
        a = a.h.h;
        return 0 < a.duration || "loading" === a.state || "number" === typeof a.sectionStartTimeInMedia && !!a.sectionDuration
    };
    lz = function(a) {
        var b = a.h.h,
            c = Iy(a.h);
        a = gz(a);
        return b.isPlayingBreak ? b.duration : "number" === typeof b.sectionStartTimeInMedia && b.sectionDuration ? b.sectionDuration : c && b.isLive && b.liveSeekableRange && b.liveSeekableRange.end ? b.liveSeekableRange.end - a : b.isLive ? -1 : b.duration - a
    };
    mz = function(a) {
        if (!kz(a)) return "";
        var b = a.h.h,
            c = lz(a);
        return hz(a) ? cast.receiver.C.Y.gg(b.mediaStartAbsoluteTime + b.sectionStartTimeInMedia + b.sectionDuration) : cast.receiver.C.Y.Na(c)
    };
    nz = function(a) {
        var b = a.h.h;
        a = Iy(a.h);
        return b.isPlayingBreak || !b.isLive || (!a || !b.liveSeekableRange) && "number" === typeof b.sectionStartTimeInMedia && !!b.sectionDuration
    };
    oz = function(a) {
        if (!nz(a)) return null;
        a = gz(a);
        return 0 > a ? 0 - a : 0
    };
    pz = function(a) {
        var b = a.h.h;
        return Iy(a.h) && b.isLive && !b.isPlayingBreak && !!b.liveSeekableRange
    };
    qz = function(a) {
        if (!pz(a)) return null;
        var b = a.h.h,
            c = gz(a);
        a = lz(a);
        return new ur(Math.min(Math.max(0, b.liveSeekableRange.start - c), a), Math.min(Math.max(0, b.liveSeekableRange.end - c), a), b.liveSeekableRange.isMovingWindow, b.liveSeekableRange.isLiveDone)
    };
    rz = function(a) {
        var b = qz(a);
        return b ? b.start / lz(a) * 100 : 0
    };
    sz = function(a) {
        var b = qz(a);
        return b ? (iz(a) - b.start) / lz(a) * 100 : 0
    };
    tz = function(a) {
        var b = qz(a);
        return b ? (b.end - b.start) / lz(a) * 100 : 0
    };
    uz = function(a) {
        var b = a.h.h;
        if (b.isPlayingBreak) return [];
        var c = gz(a);
        a = lz(a);
        var d = b.isLive,
            e = b.liveSeekableRange;
        e = e ? e.end : b.duration;
        var f = [];
        b = _.q(b.media && b.media.breaks || []);
        for (var g = b.next(); !g.done; g = b.next()) {
            g = g.value;
            var k = g.position,
                l = 0;
            d || -1 !== k || (k = c + a);
            g.expanded && (d && -1 === g.duration && e > k ? l = e - k : 0 < g.duration && (l = g.duration));
            0 > k || k + l < c || k > c + a || (k < c && (l -= c - k, k = c), k + l > a + c && (l = a + c - k), k -= c, f.push({
                position: Math.min(100, k / a * 100),
                width: Math.min(100, l / a * 100)
            }))
        }
        return f
    };
    vz = function() {
        var a = $c.call(this) || this;
        window.customElements && window.customElements.define && a.createdCallback();
        return a
    };
    wz = function(a, b) {
        if (b) {
            a.j.setAttribute("isRemoteControl", b.isRemoteControl);
            var c = a.j.querySelector(".logo"),
                d = window.getComputedStyle(c, null);
            "none" == d.backgroundImage && (c.textContent = b.name);
            c = a.j.querySelector(".splash");
            "none" == window.getComputedStyle(c, null).backgroundImage && ("none" == d.backgroundImage ? c.textContent = b.name : c.classList.add("logo"));
            var e = a.j.querySelector(".playback-logo");
            "none" === window.getComputedStyle(e, null).backgroundImage && (b.iconUrl ? (a = new Image, a.src = b.iconUrl, a.decode().then(function() {
                e.style.backgroundImage =
                    cast.receiver.C.Y.Ua(b.iconUrl);
                e.classList.add("app-icon");
                e.textContent = ""
            }, function() {
                e.textContent = b.name;
                e.style.backgroundImage = "";
                e.classList.remove("app-icon")
            })) : (e.textContent = b.name, e.style.backgroundImage = "", e.classList.remove("app-icon")))
        }
    };
    xz = function(a, b) {
        b ? a.style.content = cast.receiver.C.Y.Ua(b) : a.style.removeProperty("content")
    };
    yz = function(a) {
        var b = a.h.applicationData;
        a.Ga.textContent = a.B ? a.B : "touch" === a.h.displayType ? cast.receiver.V.Fb(cast.receiver.V.ii, {
            APP_NAME: b && b.name || ""
        }) : ""
    };
    zz = function(a) {
        for (var b; b = a.lastChild;) a.removeChild(b)
    };
    Az = function(a, b) {
        if (b) {
            var c = document.createElement("span");
            c.textContent = b;
            a.appendChild(c)
        }
    };
    Bz = function(a, b, c) {
        0 < c ? a.$.textContent = 1 < c ? cast.receiver.V.ej(b, c) : "" : (a.$.textContent = "", a.aa.textContent = "")
    };
    Cz = function(a) {
        var b = Math.floor(a.h.duration) - Math.floor(a.h.currentTime);
        0 > b && (b = 0);
        b = cast.receiver.C.Y.Na(b);
        1 < a.h.numberBreakClips && (b = "(" + b + ")");
        a.aa.textContent = b;
        void 0 === a.h.whenSkippable ? (K(a.F, !1), K(a.G, !1)) : 0 < a.h.whenSkippable ? (a.G.textContent = cast.receiver.V.bj(cast.receiver.C.Y.Na(a.h.whenSkippable, !0)), K(a.F, !1), K(a.G, !0)) : (K(a.F, !0), K(a.G, !1))
    };
    Dz = function(a) {
        for (var b = uz(a.J), c = _.q(a.M.querySelectorAll(".breakMarker")), d = c.next(); !d.done; d = c.next()) d.value.remove();
        if (b) {
            var e = b.length - 1;
            b.forEach(function(f, g) {
                var k = document.createElement("div");
                k.classList.add("breakMarker");
                k.style.left = f.position + "%";
                a.M.appendChild(k);
                f = f.width;
                1 < f && (k.style.width = f + "%");
                g === e && (g = a.M.getBoundingClientRect().right, k.getBoundingClientRect().right >= g && (k.style.left = "", k.style.right = "0"))
            })
        }
    };
    Ez = function(a, b, c) {
        a.I.addEventListener(b, c);
        c()
    };
    Fz = function(a) {
        Array.prototype.forEach.call(a.j.getElementsByClassName("breakIcon"), function(b) {
            return b.dataset.adLabel = cast.receiver.V.fi
        });
        Array.prototype.forEach.call(a.j.getElementsByClassName("liveLabel"), function(b) {
            return b.dataset.liveLabel = cast.receiver.V.Kf
        });
        a.F.textContent = cast.framework.V.Cm
    };
    Gz = function(a, b) {
        b ? (a.j.setAttribute("isSeeking", !0), a.o = new cast.framework.common.Mk(3E3), a.o.then(function() {
            a.j.setAttribute("isSeeking", !1)
        })) : a.o && (a.o.resolve(), a.o = null)
    };
    Hz = function(a, b) {
        return a.shadowRoot.getElementById(b)
    };
    Yz = function(a) {
        Zp.call(this, a);
        var b = this;
        a = document.querySelector("cast-media-player");
        this.j = new hy;
        this.U = new my(this.j);
        this.P = a;
        this.X = cast.framework.vd.L();
        this.B = new fz(this.U);
        this.B.addEventListener("changed", function() {
            var c = b.B;
            b.h.h.U = gz(c);
            b.h.h.aa = b.j.mediaStartAbsoluteTime;
            K(b.h.h.H, kz(c));
            Rp(b.h, lz(c), mz(c));
            var d = pz(c),
                e = b.h.h;
            e.ra = d;
            K(e.ha, d);
            K(e.fa, d);
            if (d) {
                d = b.h.h;
                e = cast.framework.K.ak(qz(c));
                var f = rz(c),
                    g = sz(c),
                    k = tz(c);
                d.j || (d.h.min = String(e.start), d.wa = parseFloat(d.h.min), rm(d,
                    e.end), d.h.style.left = f + "%", d.h.style.width = k + "%", d.fa.style.left = f + "%", d.fa.style.width = g + "%", d.ha.style.left = f + "%", d.ha.style.width = k + "%")
            }
            d = nz(c);
            K(b.h.h.P, d);
            d && (d = b.h.h, d.A = oz(c), nm(d, d.h.value));
            Qp(b.h, iz(c) || 0, jz(c));
            b.j.isLive && (c = uz(b.B), sm(b.h.h, c))
        });
        Iz(this, Jz, function() {
            if (b.j.media) {
                var c = cast.framework.K.fc(b.j.media);
                bq(b, c, b.j.supportedMediaCommands);
                if (c) {
                    var d = dq(c.userActionStates, "LIKE");
                    gm(b.H, d);
                    gm(b.I, d);
                    d = dq(c.userActionStates, "DISLIKE");
                    gm(b.F, d);
                    d = dq(c.userActionStates,
                        "LYRICS");
                    gm(b.J, d)
                } else gm(b.H, !1), gm(b.F, !1), gm(b.I, !1), gm(b.J, !1);
                cq(b, c.tracks, b.j.activeTrackIds)
            }
        });
        Iz(this, Kz, function() {
            if (b.j.queueData) {
                var c = cast.framework.K.pr(b.j.queueData);
                c.repeatMode && bm(b.M, c.repeatMode);
                gm(b.N, !!c.shuffle)
            } else bm(b.M, "REPEAT_OFF"), gm(b.N, !1)
        });
        Iz(this, Lz, function() {
            b.j.media && cq(b, b.j.media.tracks ? cast.framework.K.ek(b.j.media.tracks) : void 0, b.j.activeTrackIds)
        });
        Iz(this, Mz, function() {
            b.displayMetadata(b.j.metadata)
        });
        Iz(this, ez, function() {
            b.j.media && bq(b, cast.framework.K.fc(b.j.media),
                b.j.supportedMediaCommands)
        });
        Iz(this, Nz, function() {
            Sp(b.h, Oz[b.j.state] || "IDLE")
        });
        Iz(this, Pz, function() {
            b.h.A.classList.toggle("has-secondary-image-audio", !!b.j.secondaryImageUrl)
        });
        Iz(this, Qz, function() {
            var c = b.h,
                d = b.j.isPlayingBreak,
                e = c.o,
                f;
            for (f in e.l) K(e.l[f].element, !d);
            Bi(e);
            e = c.F;
            K(e.l, !d);
            K(e.j, !d);
            K(e.A, d);
            e = c.G;
            e.l = d;
            K(e, d);
            e.l && vg(e);
            e = c.h;
            e.P.classList.toggle("break", d);
            e.W = d;
            tm(e);
            K(e.I, qm(e));
            e.l.classList.toggle("live", qm(e));
            c.B.Mc()
        });
        Iz(this, Rz, function() {
            b.h.F.A.textContent =
                b.j.breakTitle || ""
        });
        Iz(this, Sz, function() {
            if (!b.j.isLive) {
                var c = uz(b.B);
                sm(b.h.h, c)
            }
        });
        Iz(this, Yy, function() {
            var c = b.h.h;
            c.$ = b.j.isLive;
            K(c.I, qm(c));
            c.l.classList.toggle("live", qm(c))
        });
        Iz(this, Qy, function() {
            b.j.media && bq(b, cast.framework.K.fc(b.j.media), b.j.supportedMediaCommands)
        });
        Iz(this, Tz, function() {
            b.h.h.I.classList.toggle("live-edge", b.j.isAtLiveEdge)
        });
        Iz(this, Uz, function() {
            var c = b.h,
                d = c.G,
                e = b.j.whenSkippable;
            void 0 === e ? (Qf(d.h, !1), K(d.h, !1), K(d.j, !1)) : 0 < e ? (Qf(d.h, !1), K(d.h, !1), K(d.j, !0),
                d.J.textContent = cast.receiver.V.bj(cast.receiver.C.Y.Na(e, !0))) : (Qf(d.h, !0), K(d.h, !0), K(d.j, !1));
            c.B.Mc()
        });
        Iz(this, Vz, function() {
            if (b.j.applicationData) {
                var c = b.j.applicationData,
                    d = c.name,
                    e = c.iconUrl;
                b.Z = d;
                var f = b.h;
                Ip(f.F, d, e);
                Uo(f.j, e);
                f.l && bd(f.l, d, e);
                d = b.h;
                c = !!c.isRemoteControl;
                d.A.classList.toggle("remote-controls", !!c);
                d.B.Nh(c);
                d = d.o;
                d.H = c;
                Bi(d);
                b.displayMetadata(b.j.metadata)
            }
        });
        Iz(this, Wz, function() {
            wg(b.h.G, b.j.currentBreakClipNumber, b.j.numberBreakClips)
        });
        Iz(this, Xz, function() {
            wg(b.h.G,
                b.j.currentBreakClipNumber, b.j.numberBreakClips)
        });
        this.X.addEventListener("APPLICATION_CHANGED", function(c) {
            var d, e = lh();
            3 === c.playbackType && 1 === e.majorVersion && 44 > e.minorVersion ? d = "" : d = c.deviceName || "";
            e = b.h.o;
            e.o && ti(e.o, d, !0);
            d = b.h.o;
            c = 5 === c.playbackType;
            d.classList.toggle("bluetooth", !!c);
            K(d.G.element, c)
        });
        this.P && this.h.A.classList.toggle("default-player", !0)
    };
    Iz = function(a, b, c) {
        a.U.addEventListener(b, c);
        c()
    };
    $p = function(a, b, c) {
        return a.j.isLive ? !!a.j.liveSeekableRange : c ? !!(b & 2) && !isNaN(c.duration) && Infinity !== c.duration && 0 < c.duration : !1
    };
    Zz = function(a) {
        fq.call(this, a, new cy("__physical_remote__"))
    };
    $z = function() {
        this.h = new cast.receiver.C.Gk(function(a) {
            return new Yz(a)
        }, function(a) {
            return new cast.framework.C.Ul(a)
        })
    };
    aA = function() {
        this.h = document.querySelector("cast-media-player");
        this.j = document.querySelector("touch-controls")
    };
    bA = function() {};
    _.aa = [];
    ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    fa = ea(this);
    p("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ha(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    p("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ha(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(da(this))
                }
            })
        }
        return a
    });
    var cA = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) la(d, e) && (a[e] = d[e])
        }
        return a
    };
    p("Object.assign", function(a) {
        return a || cA
    });
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        dA = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if ("undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = ma(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c,
                    e, d) || e
            }
        }(),
        eA;
    if ("function" == typeof Object.setPrototypeOf) eA = Object.setPrototypeOf;
    else {
        var fA;
        a: {
            var gA = {
                    a: !0
                },
                hA = {};
            try {
                hA.__proto__ = gA;
                fA = hA.a;
                break a
            } catch (a) {}
            fA = !1
        }
        eA = fA ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = eA;
    oa.prototype.B = function(a) {
        this.A = a
    };
    oa.prototype.return = function(a) {
        this.l = {
            return: a
        };
        this.h = this.D
    };
    p("Reflect", function(a) {
        return a ? a : {}
    });
    p("Reflect.construct", function() {
        return dA
    });
    p("Reflect.setPrototypeOf", function(a) {
        return a ? a : na ? function(b, c) {
            try {
                return na(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    p("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.l = void 0;
            this.j = [];
            this.D = !1;
            var k = this.o();
            try {
                g(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(k) {
                k(g)
            })
        }
        if (a) return a;
        c.prototype.j = function(g) {
            if (null == this.h) {
                this.h = [];
                var k = this;
                this.l(function() {
                    k.A()
                })
            }
            this.h.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.l = function(g) {
            e(g, 0)
        };
        c.prototype.A = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var k = 0; k < g.length; ++k) {
                    var l =
                        g[k];
                    g[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.o(m)
                    }
                }
            }
            this.h = null
        };
        c.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        b.prototype.o = function() {
            function g(m) {
                return function(n) {
                    l || (l = !0, m.call(k, n))
                }
            }
            var k = this,
                l = !1;
            return {
                resolve: g(this.J),
                reject: g(this.A)
            }
        };
        b.prototype.J = function(g) {
            if (g === this) this.A(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.N(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var k = null != g;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1
                }
                k ? this.I(g) : this.B(g)
            }
        };
        b.prototype.I = function(g) {
            var k = void 0;
            try {
                k = g.then
            } catch (l) {
                this.A(l);
                return
            }
            "function" == typeof k ? this.P(k, g) : this.B(g)
        };
        b.prototype.A = function(g) {
            this.G(2, g)
        };
        b.prototype.B = function(g) {
            this.G(1, g)
        };
        b.prototype.G = function(g, k) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + k + "): Promise already settled in state" + this.h);
            this.h = g;
            this.l = k;
            2 === this.h && this.M();
            this.F()
        };
        b.prototype.M = function() {
            var g = this;
            e(function() {
                if (g.H()) {
                    var k = fa.console;
                    "undefined" !== typeof k && k.error(g.l)
                }
            }, 1)
        };
        b.prototype.H =
            function() {
                if (this.D) return !1;
                var g = fa.CustomEvent,
                    k = fa.Event,
                    l = fa.dispatchEvent;
                if ("undefined" === typeof l) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof k ? g = new k("unhandledrejection", {
                    cancelable: !0
                }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.l;
                return l(g)
            };
        b.prototype.F = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.j(this.j[g]);
                this.j = null
            }
        };
        var f = new c;
        b.prototype.N = function(g) {
            var k = this.o();
            g.ge(k.resolve, k.reject)
        };
        b.prototype.P = function(g, k) {
            var l = this.o();
            try {
                g.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        b.prototype.then = function(g, k) {
            function l(v, x) {
                return "function" == typeof v ? function(B) {
                    try {
                        m(v(B))
                    } catch (G) {
                        n(G)
                    }
                } : x
            }
            var m, n, t = new b(function(v, x) {
                m = v;
                n = x
            });
            this.ge(l(g, m), l(k, n));
            return t
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.ge = function(g, k) {
            function l() {
                switch (m.h) {
                    case 1:
                        g(m.l);
                        break;
                    case 2:
                        k(m.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.h);
                }
            }
            var m = this;
            null == this.j ? f.j(l) : this.j.push(l);
            this.D = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(k, l) {
                l(g)
            })
        };
        b.race = function(g) {
            return new b(function(k, l) {
                for (var m = _.q(g), n = m.next(); !n.done; n = m.next()) d(n.value).ge(k, l)
            })
        };
        b.all = function(g) {
            var k = _.q(g),
                l = k.next();
            return l.done ? d([]) : new b(function(m, n) {
                function t(B) {
                    return function(G) {
                        v[B] = G;
                        x--;
                        0 == x && m(v)
                    }
                }
                var v = [],
                    x = 0;
                do v.push(void 0), x++, d(l.value).ge(t(v.length - 1), n), l = k.next();
                while (!l.done)
            })
        };
        return b
    });
    p("WeakMap", function(a) {
        function b(l) {
            this.h = (k += Math.random() + 1).toString();
            if (l) {
                l = _.q(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }

        function c() {}

        function d(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function e(l) {
            if (!la(l, g)) {
                var m = new c;
                ha(l, g, {
                    value: m
                })
            }
        }

        function f(l) {
            var m = Object[l];
            m && (Object[l] = function(n) {
                if (n instanceof c) return n;
                Object.isExtensible(n) && e(n);
                return m(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [l, 2],
                            [m, 3]
                        ]);
                    if (2 != n.get(l) || 3 != n.get(m)) return !1;
                    n.delete(l);
                    n.set(m, 4);
                    return !n.has(l) && 4 == n.get(m)
                } catch (t) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var k = 0;
        b.prototype.set = function(l, m) {
            if (!d(l)) throw Error("Invalid WeakMap key");
            e(l);
            if (!la(l, g)) throw Error("WeakMap key fail: " + l);
            l[g][this.h] = m;
            return this
        };
        b.prototype.get = function(l) {
            return d(l) && la(l, g) ? l[g][this.h] : void 0
        };
        b.prototype.has = function(l) {
            return d(l) && la(l,
                g) && la(l[g], this.h)
        };
        b.prototype.delete = function(l) {
            return d(l) && la(l, g) && la(l[g], this.h) ? delete l[g][this.h] : !1
        };
        return b
    });
    p("Map", function(a) {
        function b() {
            var k = {};
            return k.previous = k.next = k.head = k
        }

        function c(k, l) {
            var m = k.h;
            return ia(function() {
                if (m) {
                    for (; m.head != k.h;) m = m.previous;
                    for (; m.next != m.head;) return m = m.next, {
                        done: !1,
                        value: l(m)
                    };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? f.has(l) ? m = f.get(l) : (m = "" + ++g, f.set(l, m)) : m = "p_" + l;
            var n = k.j[m];
            if (n && la(k.j, m))
                for (k = 0; k < n.length; k++) {
                    var t = n[k];
                    if (l !== l && t.key !== t.key || l === t.key) return {
                        id: m,
                        list: n,
                        index: k,
                        entry: t
                    }
                }
            return {
                id: m,
                list: n,
                index: -1,
                entry: void 0
            }
        }

        function e(k) {
            this.j = {};
            this.h = b();
            this.size = 0;
            if (k) {
                k = _.q(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var k = Object.seal({
                            x: 4
                        }),
                        l = new a(_.q([
                            [k, "s"]
                        ]));
                    if ("s" != l.get(k) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        n = m.next();
                    if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
                    n = m.next();
                    return n.done || 4 !=
                        n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.j[m.id] = []);
            m.entry ? m.entry.value = l : (m.entry = {
                next: this.h,
                previous: this.h.previous,
                head: this.h,
                key: k,
                value: l
            }, m.list.push(m.entry), this.h.previous.next = m.entry, this.h.previous = m.entry, this.size++);
            return this
        };
        e.prototype.delete = function(k) {
            k = d(this, k);
            return k.entry && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.j[k.id],
                k.entry.previous.next = k.entry.next, k.entry.next.previous = k.entry.previous, k.entry.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.j = {};
            this.h = this.h.previous = b();
            this.size = 0
        };
        e.prototype.has = function(k) {
            return !!d(this, k).entry
        };
        e.prototype.get = function(k) {
            return (k = d(this, k).entry) && k.value
        };
        e.prototype.entries = function() {
            return c(this, function(k) {
                return [k.key, k.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(k) {
                return k.key
            })
        };
        e.prototype.values = function() {
            return c(this,
                function(k) {
                    return k.value
                })
        };
        e.prototype.forEach = function(k, l) {
            for (var m = this.entries(), n; !(n = m.next()).done;) n = n.value, k.call(l, n[1], n[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    p("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Aa(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    p("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Ba(this, b, c).ik
        }
    });
    p("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Aa(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    p("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Aa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    p("Object.setPrototypeOf", function(a) {
        return a || na
    });
    p("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ca(this, function(b, c) {
                return [b, c]
            })
        }
    });
    p("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ca(this, function(b) {
                return b
            })
        }
    });
    p("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
        }
    });
    p("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    p("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) la(b, d) && c.push(b[d]);
            return c
        }
    });
    p("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    p("Set", function(a) {
        function b(c) {
            this.h = new Map;
            if (c) {
                c = _.q(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.q([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return this.h.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] =
            b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    p("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ca(this, function(b, c) {
                return c
            })
        }
    });
    p("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    p("Int8Array.prototype.fill", Da);
    p("Uint8Array.prototype.fill", Da);
    p("Uint8ClampedArray.prototype.fill", Da);
    p("Int16Array.prototype.fill", Da);
    p("Uint16Array.prototype.fill", Da);
    p("Int32Array.prototype.fill", Da);
    p("Uint32Array.prototype.fill", Da);
    p("Float32Array.prototype.fill", Da);
    p("Float64Array.prototype.fill", Da);
    p("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Ba(this, b, c).qj
        }
    });
    p("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) la(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    p("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    Nq = Nq || {};
    _.u = this || self;
    Ka = "closure_uid_" + (1E9 * Math.random() >>> 0);
    La = 0;
    _.u.cast = _.u.cast || {};
    cast = _.u.cast;
    cast.el = !1;
    cast.platform = {};
    cast.platform.metrics = {};
    cast.platform.metrics.logBoolToUma = function(a, b) {
        Ua() && cast.__platform__.metrics.logBoolToUma(a, b)
    };
    cast.platform.metrics.logEventToUma = function(a) {
        Ua() && cast.__platform__.metrics.logEventToUma(a)
    };
    cast.platform.metrics.logHistogramValueToUma = function(a, b, c, d, e) {
        Ua() && cast.__platform__.metrics.logHistogramValueToUma(a, b, c, d, e)
    };
    cast.platform.metrics.logIntToUma = function(a, b) {
        Ua() && cast.__platform__.metrics.logIntToUma(a, b)
    };
    cast.platform.metrics.Ct = Ua;
    cast.platform.metrics.setMplVersion = function(a) {
        Ua() && cast.__platform__.metrics.setMplVersion(a)
    };
    cast.receiver = {};
    cast.receiver.analytics = {};
    var iA = cast.platform.metrics.logEventToUma;
    _.w("cast.receiver.analytics.logEvent", iA, void 0);
    var jA = cast.platform.metrics.logBoolToUma;
    _.w("cast.receiver.analytics.logBool", jA, void 0);
    var kA = cast.platform.metrics.logIntToUma;
    _.w("cast.receiver.analytics.logInt", kA, void 0);
    var lA = cast.platform.metrics.logHistogramValueToUma;
    _.w("cast.receiver.analytics.logHistogramValue", lA, void 0);
    cast.receiver.analytics.ut = jA;
    cast.receiver.analytics.vt = iA;
    cast.receiver.analytics.wt = lA;
    cast.receiver.analytics.xt = kA;
    cast.receiver.C = {};
    cast.receiver.C.uk = function(a) {
        a.innerHTML = "<style>.audio-player-glanceable{width:100vw;height:100vh;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}.bg-image,.scrim{position:absolute;width:100%;height:100%}.bg-image{background:#000 center / cover no-repeat;background-image:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1024_600.jpg'));transform:scale(1.25);transform-origin:center;filter:blur(37px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.bg-image{filter:blur(50px);background-image:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1280_800.jpg'))}}.scrim{background:rgba(0,0,0,0.7)}.playback-logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:#fff;font-family:'Roboto',Arial,sans-serif;font-weight:500;order:-2;overflow:hidden;font-size:36px;height:40px;line-height:40px}.playback-logo.app-icon{height:68px}.overlay{top:0;left:0;position:absolute;box-sizing:border-box;width:100%;padding:0 var(--cast-controls-horizontal-padding);display:flex;flex-direction:column;justify-content:center;height:calc(var(--cast-controls-safe-area-height) + 30px);padding-top:2px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.overlay{height:calc(var(--cast-controls-safe-area-height) + 48px);padding-top:38px}}.content{display:flex;justify-content:space-between;flex-direction:row;height:352px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.content{height:420px}}.metadataPlaceHolder{display:flex;flex-direction:column;justify-content:center;margin-top:0;height:100%;flex:none;margin-right:5%;width:55%}.album-art{object-fit:contain;margin:0 0 auto auto;zoom:5;max-width:40%;max-height:100%}.album{font-weight:500;margin-top:auto;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#dfe1e5;font-size:24px;letter-spacing:1.2px;line-height:24px}.title{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fff;font-weight:normal;margin-top:18px;font-size:56px;line-height:76px;word-break:break-word}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.title{margin-top:32px;font-size:68px;line-height:80px}}.artist{margin-bottom:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:normal;color:#dfe1e5;font-size:28px;letter-spacing:1.4px;line-height:30px;margin-top:14px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.artist{font-size:32px;letter-spacing:1.6px;line-height:40px;margin-top:24px}}</style><div class=audio-player-glanceable><div class=bg-image id=bg-image></div><div class=scrim></div><div class=overlay><div class=content><div class=metadataPlaceHolder><div class=playback-logo id=logo></div><div class=album id=album></div><div class=title id=title></div><div class=artist id=artist></div></div><img alt=\"\" class=album-art id=album-art></div></div></div>"
    };
    cast.receiver.C.Ka = {
        AUDIO: "audio",
        VIDEO: "video",
        PHOTO: "photo"
    };
    cast.receiver.oa = {};
    cast.receiver.oa.sd = "urn:x-cast:";
    cast.receiver.oa.ce = cast.receiver.oa.sd + "com.google.cast.system";
    cast.receiver.oa.Wl = "1.0";
    cast.receiver.oa.Xa = "SystemSender";
    _.Sa(Wa, Error);
    Wa.prototype.name = "CustomError";
    _.Sa(Xa, Wa);
    Xa.prototype.name = "AssertionError";
    var db, mA;
    db = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    mA = Array.prototype.lastIndexOf ? function(a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
    } : function(a, b) {
        var c = a.length - 1;
        0 > c && (c = Math.max(0, a.length + c));
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
        for (; 0 <= c; c--)
            if (c in a && a[c] === b) return c;
        return -1
    };
    _.nA = Array.prototype.forEach ? function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };
    _.oA = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k)
            }
        return d
    };
    _.pA = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };
    _.qA = Array.prototype.reduce ? function(a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    } : function(a, b, c) {
        var d = c;
        (0, _.nA)(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    };
    _.rA = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    };
    var yb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Ab;
    Eb.prototype.Jb = !0;
    Eb.prototype.nb = function() {
        return this.h
    };
    Eb.prototype.toString = function() {
        return "Const{" + this.h + "}"
    };
    var Db = {},
        Cb = {};
    var Hb = {};
    Ib.prototype.nb = function() {
        return this.h.toString()
    };
    Ib.prototype.toString = function() {
        return this.h.toString()
    };
    _.h = Kb.prototype;
    _.h.Jb = !0;
    _.h.nb = function() {
        return this.h.toString()
    };
    _.h.Bg = !0;
    _.h.ng = function() {
        return 1
    };
    _.h.toString = function() {
        return this.h + ""
    };
    var Jb = {};
    var jc, kc, lc, nc, oc, pc, ic;
    _.Tb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    jc = /&/g;
    kc = /</g;
    lc = />/g;
    nc = /"/g;
    oc = /'/g;
    pc = /\x00/g;
    ic = /[\x00&<>"']/;
    _.h = _.Zb.prototype;
    _.h.Jb = !0;
    _.h.nb = function() {
        return this.h.toString()
    };
    _.h.Bg = !0;
    _.h.ng = function() {
        return 1
    };
    _.h.toString = function() {
        return this.h.toString()
    };
    _.sA = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i");
    _.Yb = {};
    _.tA = new _.Zb("about:invalid#zClosurez", _.Yb);
    var ac = {};
    bc.prototype.nb = function() {
        return this.h
    };
    bc.prototype.toString = function() {
        return this.h.toString()
    };
    var fc = {};
    gc.prototype.ng = function() {
        return this.j
    };
    gc.prototype.nb = function() {
        return this.h.toString()
    };
    gc.prototype.toString = function() {
        return this.h.toString()
    };
    var uA = new gc(_.u.trustedTypes && _.u.trustedTypes.emptyHTML || "", 0, fc);
    var sc = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        tc = _.bb(function() {
            if ("undefined" === typeof document) return !1;
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            if (!a.firstChild) return !1;
            b = a.firstChild.firstChild;
            a.innerHTML = _.hc(uA);
            return !b.parentElement
        });
    var vc = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    var vA = RegExp("dv(he|av).[s|d|p][e|t|w][n|r|h|b][a|h]?[e|t|w]?");
    cast.receiver.media = {};
    cast.receiver.media.eb = cast.receiver.oa.sd + "com.google.cast.media";
    var wA = {
            AUDIO: "AUDIO",
            VIDEO: "VIDEO",
            IMAGE: "IMAGE"
        },
        xA = {
            INVALID_PLAYER_STATE: "INVALID_PLAYER_STATE",
            LOAD_FAILED: "LOAD_FAILED",
            LOAD_CANCELLED: "LOAD_CANCELLED",
            INVALID_REQUEST: "INVALID_REQUEST",
            ERROR: "ERROR"
        };
    _.w("cast.receiver.media.repeatMode", {
        REPEAT_OFF: "REPEAT_OFF",
        REPEAT_ALL: "REPEAT_ALL",
        REPEAT_SINGLE: "REPEAT_SINGLE",
        REPEAT_ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    }, void 0);
    cast.receiver.media.tj = function(a) {
        return "REPEAT_OFF" == a || "REPEAT_ALL" == a || "REPEAT_SINGLE" == a || "REPEAT_ALL_AND_SHUFFLE" == a
    };
    cast.receiver.Y = {};
    cast.receiver.Y.getMediaCategory = function(a) {
        if (!a) return null;
        if (a.metadata) switch (a.metadata.metadataType) {
            case 1:
                return "VIDEO";
            case 2:
                return "VIDEO";
            case 3:
                return "AUDIO";
            case 5:
                return "AUDIO";
            case 4:
                return "IMAGE"
        }
        a = (a.contentType || "").toUpperCase().split("/")[0];
        return wA[a] ? wA[a] : null
    };
    var yA = {
            Rk: ["BC", "AD"],
            Qk: ["Before Christ", "Anno Domini"],
            Hm: "JFMAMJJASOND".split(""),
            bn: "JFMAMJJASOND".split(""),
            Yl: "January February March April May June July August September October November December".split(" "),
            an: "January February March April May June July August September October November December".split(" "),
            Xm: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            dn: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            vn: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            fn: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            Zm: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            en: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            zs: "SMTWTFS".split(""),
            cn: "SMTWTFS".split(""),
            Ym: ["Q1", "Q2", "Q3", "Q4"],
            Rm: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
            rf: ["AM", "PM"],
            Dh: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
            ti: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
            Ik: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
            Hh: 6,
            Ys: [5, 6],
            Ih: 5
        },
        Rc = yA;
    Rc = yA;
    var Wc = [/^'(?:[^']|'')*('|$)/, /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/];
    Tc.prototype.format = function(a, b) {
        if (!a) throw Error("The date to format must be non-null.");
        var c = b ? 6E4 * (a.getTimezoneOffset() - (b.j - Qc(b, a))) : 0,
            d = c ? new Date(a.getTime() + c) : a,
            e = d;
        b && d.getTimezoneOffset() != a.getTimezoneOffset() && (d = new Date(d.getTime() + 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset())), e = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
        c = [];
        for (var f = 0; f < this.j.length; ++f) {
            var g = this.j[f].text;
            1 == this.j[f].type ? c.push(Zc(this, g, a, d, e, b)) : c.push(g)
        }
        return c.join("")
    };
    var Vc = !1;
    cast.receiver.C.Y = {};
    cast.receiver.C.Y.gg = function(a) {
        a = new Date(1E3 * a);
        return (new Tc).format(a)
    };
    cast.receiver.C.Y.rj = function(a) {
        return !!a && void 0 !== a.currentBreakClipTime && void 0 !== a.breakClipId
    };
    cast.receiver.C.Y.Yc = function(a) {
        return "number" === typeof a && isFinite(a) && !isNaN(a)
    };
    cast.receiver.C.Y.Na = function(a, b) {
        if (!cast.receiver.C.Y.Yc(a)) return "";
        var c = 0 > a ? "-" : "";
        a = Math.abs(a);
        a = (void 0 === b ? 0 : b) ? Math.ceil(a) : Math.floor(a);
        b = Math.floor(a / 3600);
        var d = Math.floor(a / 60) % 60;
        a %= 60;
        return b ? "" + c + String(b) + ":" + _.wc(d, 2) + ":" + _.wc(a, 2) : "" + c + String(d) + ":" + _.wc(a, 2)
    };
    cast.receiver.C.Y.bg = function(a) {
        return new Promise(function(b, c) {
            if (a) {
                var d = new Image;
                d.src = a;
                d.decode().then(function() {
                    b(a)
                }, function() {
                    c(a)
                })
            } else c(a)
        })
    };
    cast.receiver.C.Y.Ua = function(a) {
        return 'url("' + String(a).replace(/"/g, '\\"') + '")'
    };
    cast.receiver.C.Y.Ro = function(a) {
        if (a = a.mediaCategory || cast.receiver.Y.getMediaCategory(a)) switch (a) {
            case "AUDIO":
                return cast.receiver.C.Ka.AUDIO;
            case "IMAGE":
                return cast.receiver.C.Ka.PHOTO
        }
        return cast.receiver.C.Ka.VIDEO
    };
    $c.prototype = HTMLElement.prototype;
    $c.prototype.constructor = $c;
    Object.setPrototypeOf($c, HTMLElement);
    _.r(ad, $c);
    ad.prototype.setTitle = function(a) {
        this.l.textContent = a
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-audio-player-compatibility", ad);
    cast.receiver.C.Lr = ad;
    cast.receiver.VERSION = "2.0.0";
    cast.receiver.bi = "0128";
    cast.receiver.ad = function(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return 0 == a.indexOf(b) || 0 == b.indexOf(a)
    };
    cast.receiver.C.vk = function(a) {
        a.innerHTML = '<div class=break-countdown id=break-countdown><span class=ad-label id=ad-label></span><span id=break-clip-index-text></span><span id=break-countdown-text></span></div><div class=break-skip id=break-skip-btn role=button><span class=skip-ad-text id=skip-ad-btn-text></span><img alt="" class=skip-ad-icon role=presentation src=""><div class=break-skip-scrim></div><div class=break-skip-highlight></div></div><div class="break-skip break-skip-btn-countdown" id=break-skip-btn-countdown><span class=skip-ad-text id=skip-ad-btn-countdown-text></span><div class=break-skip-scrim></div></div>'
    };
    var oi = {
            MUSIC_TRACK: "MUSIC_TRACK",
            MUSIC_ALBUM: "MUSIC_ALBUM",
            ARTIST: "ARTIST",
            PLAYLIST: "PLAYLIST",
            EPISODE: "EPISODE",
            MOVIE: "MOVIE",
            PHOTO: "PHOTO",
            PODCAST: "PODCAST",
            MUSIC_GENRE: "MUSIC_GENRE",
            AUDIO_BOOK: "AUDIO_BOOK",
            RADIO_STATION: "RADIO_STATION",
            MUSIC_MIX: "MUSIC_MIX",
            VIDEO: "VIDEO",
            TV_SHOW: "TV_SHOW",
            NEWS: "NEWS"
        },
        mi = {
            SQUARE_1_TO_1: "SQUARE_1_TO_1",
            PORTRAIT_2_TO_3: "PORTRAIT_2_TO_3",
            LANDSCAPE_16_TO_9: "LANDSCAPE_16_TO_9"
        },
        pi = {
            LIVE: "LIVE"
        };
    var zA = {
        QUEUE_NEXT: "queue-next",
        QUEUE_PREV: "queue-prev",
        SEEK_FORWARD_10: "seek-forward-10",
        SEEK_FORWARD_15: "seek-forward-15",
        SEEK_FORWARD_30: "seek-forward-30",
        SEEK_BACKWARD_10: "seek-backward-10",
        SEEK_BACKWARD_15: "seek-backward-15",
        SEEK_BACKWARD_30: "seek-backward-30",
        CAPTIONS: "captions",
        REPEAT: "repeat",
        SHUFFLE: "shuffle",
        LIKE: "like",
        LIKE_HEART: "like-heart",
        DISLIKE: "dislike",
        LYRICS: "lyrics",
        SLEEP_TIMER: "sleep-timer",
        NO_BUTTON: "no-button"
    };
    _.w("cast.receiver.ui.ControlsButton", zA, void 0);
    cast.receiver.C.R = zA;
    var AA = {
        SLOT_1: "slot-1",
        SLOT_2: "slot-2",
        SLOT_3: "slot-3",
        SLOT_4: "slot-4",
        SLOT_PRIMARY_1: "slot-primary-1",
        SLOT_PRIMARY_2: "slot-primary-2",
        SLOT_SECONDARY_1: "slot-secondary-1",
        SLOT_SECONDARY_2: "slot-secondary-2"
    };
    _.w("cast.receiver.ui.ControlsSlot", AA, void 0);
    cast.receiver.C.ga = AA;
    var BA = {},
        Ou = (BA["application/ttml+xml"] = 1, BA["text/vtt"] = 2, BA["text/mp4"] = 3, BA["audio/mp4"] = 4, BA["video/mp4"] = 5, BA["video/mp2t"] = 6, BA["audio/webm"] = 7, BA["video/webm"] = 8, BA["application/x-mpegurl"] = 9, BA["application/vnd.apple.mpegurl"] = 10, BA["application/dash+xml"] = 11, BA["application/vnd.ms-sstr+xml"] = 12, BA["text/cea608"] = 13, BA["video/ogg"] = 14, BA["audio/aac"] = 15, BA["audio/mp3"] = 16, BA["audio/ogg"] = 17, BA["audio/wav"] = 18, BA["image/gif"] = 19, BA["image/jpg"] = 20, BA["image/png"] = 21, BA["text/mp2t"] = 22, BA["application/mp4"] =
            23, BA["audio/mpeg"] = 24, BA),
        CA = {},
        gd = (CA.Im = 0, CA["mp4a.a6"] = 1, CA["ec-3"] = 2, CA["mp4a.40.2"] = 3, CA["mp4a.40.5"] = 4, CA["mp4a.67"] = 5, CA["avc1.4D40"] = 6, CA["avc1.4D401E"] = 7, CA["mp4a.a5"] = 8, CA["ac-3"] = 9, CA.vorbis = 10, CA.opus = 11, CA.vp8 = 12, CA.vp9 = 13, CA.avc1 = 14, CA["mp4a.40"] = 15, CA);
    var DA = {},
        EA = (DA.SQUARE_1_TO_1 = 1, DA.PORTRAIT_2_TO_3 = 2, DA.LANDSCAPE_16_TO_9 = 3, DA),
        FA = {},
        jd = (FA[cast.receiver.C.R.NO_BUTTON] = 1, FA[cast.receiver.C.R.QUEUE_NEXT] = 2, FA[cast.receiver.C.R.QUEUE_PREV] = 3, FA[cast.receiver.C.R.SEEK_FORWARD_10] = 4, FA[cast.receiver.C.R.SEEK_FORWARD_15] = 5, FA[cast.receiver.C.R.SEEK_FORWARD_30] = 6, FA[cast.receiver.C.R.SEEK_BACKWARD_10] = 7, FA[cast.receiver.C.R.SEEK_BACKWARD_15] = 8, FA[cast.receiver.C.R.SEEK_BACKWARD_30] = 9, FA[cast.receiver.C.R.CAPTIONS] = 10, FA[cast.receiver.C.R.REPEAT] =
            11, FA[cast.receiver.C.R.SHUFFLE] = 12, FA[cast.receiver.C.R.LIKE] = 13, FA[cast.receiver.C.R.DISLIKE] = 14, FA.PLAY = 15, FA.PAUSE = 16, FA.SKIP_AD = 17, FA.STOP = 18, FA.SHOW_DEVICE_CONTROLLER = 19, FA.MINI_PLAYER_PLAY = 21, FA.MINI_PLAYER_PAUSE = 22, FA.MINI_PLAYER_ALBUM_ART = 23, FA[cast.receiver.C.R.SLEEP_TIMER] = 24, FA[cast.receiver.C.R.LIKE_HEART] = 25, FA[cast.receiver.C.R.LYRICS] = 26, FA);
    _.A.prototype.G = !1;
    _.A.prototype.Pa = function() {
        return this.G
    };
    _.A.prototype.dispose = function() {
        this.G || (this.G = !0, this.ea())
    };
    _.A.prototype.ea = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };
    _.C.prototype.j = function() {
        this.defaultPrevented = !0
    };
    var GA = Object.freeze || function(a) {
        return a
    };
    var Kd = function() {
        if (!_.u.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            _.u.addEventListener("test", Fa, b), _.u.removeEventListener("test", Fa, b)
        } catch (c) {}
        return a
    }();
    nd[" "] = Fa;
    var HA, IA, JA, LA;
    HA = _.y("Opera");
    _.Iq = _.y("Trident") || _.y("MSIE");
    IA = _.y("Edge");
    JA = _.y("Gecko") && !(_.Sb(_.cc(), "WebKit") && !_.y("Edge")) && !(_.y("Trident") || _.y("MSIE")) && !_.y("Edge");
    _.KA = _.Sb(_.cc(), "WebKit") && !_.y("Edge");
    a: {
        var MA = "",
            NA = function() {
                var a = _.cc();
                if (JA) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (IA) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Iq) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.KA) return /WebKit\/(\S+)/.exec(a);
                if (HA) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();NA && (MA = NA ? NA[1] : "");
        if (_.Iq) {
            var OA = rd();
            if (null != OA && OA > parseFloat(MA)) {
                LA = String(OA);
                break a
            }
        }
        LA = MA
    }
    var sd = LA,
        pd = {},
        PA;
    if (_.u.document && _.Iq) {
        var QA = rd();
        PA = QA ? QA : parseInt(sd, 10) || void 0
    } else PA = void 0;
    _.RA = PA;
    _.Sa(ud, _.C);
    var SA = GA({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    ud.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.h = b;
        (b = a.relatedTarget) ? JA && (_.od(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX :
            a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : SA[a.pointerType] || "";
        this.state = a.state;
        this.l = a;
        a.defaultPrevented && ud.qb.j.call(this)
    };
    ud.prototype.j = function() {
        ud.qb.j.call(this);
        var a = this.l;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var vd = "closure_listenable_" + (1E6 * Math.random() | 0);
    var xd = 0;
    Ad.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.h++);
        var g = Cd(a, b, d, e); - 1 < g ? (b = a[g], c || (b.fe = !1)) : (b = new yd(b, this.src, f, !!d, e), b.fe = c, a.push(b));
        return b
    };
    Ad.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = Cd(e, b, c, d);
        return -1 < b ? (zd(e[b]), _.fb(e, b), 0 == e.length && (delete this.listeners[a], this.h--), !0) : !1
    };
    Ad.prototype.Ed = function(a, b, c, d) {
        a = this.listeners[a.toString()];
        var e = -1;
        a && (e = Cd(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Id = "closure_lm_" + (1E6 * Math.random() | 0),
        Qd = {},
        Md = 0,
        Rd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.Sa(_.Sd, _.A);
    _.Sd.prototype[vd] = !0;
    _.h = _.Sd.prototype;
    _.h.gf = function(a) {
        this.H = a
    };
    _.h.addEventListener = function(a, b, c, d) {
        _.Ed(this, a, b, c, d)
    };
    _.h.removeEventListener = function(a, b, c, d) {
        Od(this, a, b, c, d)
    };
    _.h.dispatchEvent = function(a) {
        var b, c = this.H;
        if (c)
            for (b = []; c; c = c.H) b.push(c);
        c = this.fa;
        var d = a.type || a;
        if ("string" === typeof a) a = new _.C(a, c);
        else if (a instanceof _.C) a.target = a.target || c;
        else {
            var e = a;
            a = new _.C(d, c);
            _.zb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; 0 <= f; f--) {
                var g = a.h = b[f];
                e = Td(g, d, !0, a) && e
            }
        g = a.h = c;
        e = Td(g, d, !0, a) && e;
        e = Td(g, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++) g = a.h = b[f], e = Td(g, d, !1, a) && e;
        return e
    };
    _.h.ea = function() {
        _.Sd.qb.ea.call(this);
        if (this.B) {
            var a = this.B,
                b = 0,
                c;
            for (c in a.listeners) {
                for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, zd(d[e]);
                delete a.listeners[c];
                a.h--
            }
        }
        this.H = null
    };
    _.h.listen = function(a, b, c, d) {
        return this.B.add(String(a), b, !1, c, d)
    };
    _.h.listenOnce = function(a, b, c, d) {
        return this.B.add(String(a), b, !0, c, d)
    };
    _.h.unlisten = function(a, b, c, d) {
        return this.B.remove(String(a), b, c, d)
    };
    _.h.Ed = function(a, b, c, d) {
        return this.B.Ed(String(a), b, c, d)
    };
    _.r(Ud, _.Sd);
    Ud.prototype.dispose = function() {
        _.Sd.prototype.dispose.call(this);
        clearTimeout(this.j)
    };
    Ga(Ud);
    ae.prototype.toString = function() {
        return this.name
    };
    var ce = new ae("OFF", Infinity),
        Ux = new ae("SHOUT", 1200),
        oe = new ae("SEVERE", 1E3),
        pe = new ae("WARNING", 900),
        qe = new ae("INFO", 800),
        he = new ae("CONFIG", 700),
        re = new ae("FINE", 500),
        yk = new ae("FINER", 400),
        TA = [ce, Ux, oe, pe, qe, he, re, yk, new ae("FINEST", 300), new ae("ALL", 0)],
        UA = null,
        me;
    be.prototype.clear = function() {};
    de.prototype.reset = function(a, b, c, d) {
        this.l = d || _.Ra();
        this.o = a;
        this.A = b;
        this.j = c;
        this.h = void 0
    };
    var ke;
    te.prototype.get = function() {
        if (0 < this.j) {
            this.j--;
            var a = this.h;
            this.h = a.next;
            a.next = null
        } else a = this.o();
        return a
    };
    _.VA = _.Iq || _.KA;
    var Ie;
    Ae.prototype.add = function(a, b) {
        var c = Je.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.h = c;
        this.j = c
    };
    Ae.prototype.remove = function() {
        var a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.j = null), a.next = null);
        return a
    };
    var Je = new te(function() {
        return new Be
    }, function(a) {
        return a.reset()
    });
    Be.prototype.set = function(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    };
    Be.prototype.reset = function() {
        this.next = this.scope = this.h = null
    };
    var Ce, Ee = !1,
        Fe = new Ae;
    Ne.prototype.reset = function() {
        this.context = this.onRejected = this.l = this.h = null;
        this.j = !1
    };
    var Oe = new te(function() {
        return new Ne
    }, function(a) {
        a.reset()
    });
    Me.prototype.then = function(a, b, c) {
        return Ze(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    Me.prototype.$goog_Thenable = !0;
    Me.prototype.cancel = function(a) {
        if (0 == this.h) {
            var b = new Le(a);
            Ge(function() {
                af(this, b)
            }, this)
        }
    };
    Me.prototype.F = function(a) {
        this.h = 0;
        Ke(this, 2, a)
    };
    Me.prototype.H = function(a) {
        this.h = 0;
        Ke(this, 3, a)
    };
    Me.prototype.G = function() {
        for (var a; a = bf(this);) cf(this, a, this.h, this.D);
        this.B = !1
    };
    var hf = ze;
    _.Sa(Le, Wa);
    Le.prototype.name = "cancel";
    _.Sa(mf, _.Sd);
    _.h = mf.prototype;
    _.h.bb = null;
    _.h.Nb = null;
    _.h.Fc = void 0;
    _.h.Xf = !1;
    _.h.Kd = 0;
    _.h.Ac = null;
    _.h.ca = _.D("goog.net.WebSocket");
    _.h.open = function(a, b) {
        null != this.Ac && _.u.clearTimeout(this.Ac);
        this.Ac = null;
        this.Nb = a;
        (this.Fc = b) ? (_.I(this.ca, "Opening the WebSocket on " + this.Nb + " with protocol " + this.Fc), this.bb = new WebSocket(this.Nb, this.Fc)) : (_.I(this.ca, "Opening the WebSocket on " + this.Nb), this.bb = new WebSocket(this.Nb));
        this.bb.binaryType = this.o;
        this.bb.onopen = (0, _.Pa)(this.gq, this);
        this.bb.onclose = (0, _.Pa)(this.Pp, this);
        this.bb.onmessage = (0, _.Pa)(this.jl, this);
        this.bb.onerror = (0, _.Pa)(this.il, this)
    };
    _.h.close = function() {
        null != this.Ac && _.u.clearTimeout(this.Ac);
        this.Ac = null;
        this.bb && (_.I(this.ca, "Closing the WebSocket."), this.Xf = !0, this.bb.close(), this.bb = null)
    };
    _.h.send = function(a) {
        this.bb.send(a)
    };
    _.h.gq = function() {
        _.I(this.ca, "WebSocket opened on " + this.Nb);
        this.dispatchEvent("d");
        this.Kd = 0;
        this.h = this.j(this.Kd)
    };
    _.h.Pp = function(a) {
        _.I(this.ca, "The WebSocket on " + this.Nb + " closed.");
        this.dispatchEvent(new nf(a.code, a.reason, a.wasClean));
        this.bb = null;
        this.Xf ? (_.I(this.ca, "The WebSocket closed normally."), this.Nb = null, this.Fc = void 0) : (_.E(this.ca, "The WebSocket disconnected unexpectedly: " + a.data), this.l && (_.I(this.ca, "Seconds until next reconnect attempt: " + Math.floor(this.h / 1E3)), this.Ac = _.jf((0, _.Pa)(this.open, this, this.Nb, this.Fc), this.h, this), this.Kd++, this.h = this.j(this.Kd)));
        this.Xf = !1
    };
    _.h.jl = function(a) {
        this.dispatchEvent(new of(a.data))
    };
    _.h.il = function(a) {
        a = a.data;
        _.E(this.ca, "An error occurred: " + a);
        this.dispatchEvent(new pf(a))
    };
    _.h.ea = function() {
        mf.qb.ea.call(this);
        this.close()
    };
    _.Sa(nf, _.C);
    _.Sa(of, _.C);
    _.Sa(pf, _.C);
    cast.receiver.platform = {};
    cast.receiver.platform.Fh = {
        "port-for-web-server": "8008"
    };
    cast.receiver.platform.oj = function() {
        return !(!cast.__platform__ || !cast.__platform__.canDisplayType)
    };
    cast.receiver.platform.canDisplayType = function(a) {
        return cast.__platform__.canDisplayType(a)
    };
    cast.receiver.platform.setTouchInputSupport = function(a) {
        return cast.__platform__ && "function" === typeof cast.__platform__.setTouchInputSupport ? cast.__platform__.setTouchInputSupport(a) : Promise.reject()
    };
    cast.receiver.platform.getAccessibilitySettings = function() {
        return cast.__platform__ && cast.__platform__.accessibility && cast.__platform__.accessibility.getAccessibilitySettings ? cast.__platform__.accessibility.getAccessibilitySettings() : Promise.resolve({
            isScreenReaderEnabled: !1,
            isColorInversionEnabled: !1
        })
    };
    cast.__platform__ && cast.__platform__.canDisplayType || delete window.cast.receiver.platform.canDisplayType;
    cast.receiver.platform.Ja = function(a) {
        if (cast.__platform__ && cast.__platform__.queryPlatformValue) return cast.__platform__.queryPlatformValue(a);
        if (a in cast.receiver.platform.Fh) return cast.receiver.platform.Fh[a]
    };
    cast.receiver.platform.getHdcpVersion = function() {
        return cast.__platform__ && cast.__platform__.display && cast.__platform__.display.getHdcpVersion ? cast.__platform__.display.getHdcpVersion() : Promise.reject(Error("getHdcpVersion is not available"))
    };
    _.h = qf.prototype;
    _.h.open = function() {
        this.h ? _.E(WA, "PlatformChannel Already open") : cast.__platform__.channel.open((0, _.Pa)(this.ml, this), (0, _.Pa)(this.ll, this))
    };
    _.h.close = function() {
        this.h ? cast.__platform__.channel.close((0, _.Pa)(this.kl, this)) : _.E(WA, "PlatformChannel Cannot close unopened channel")
    };
    _.h.send = function(a) {
        cast.__platform__.channel.send(a)
    };
    _.h.ml = function(a) {
        this.h = a;
        rf(this, a ? "d" : "b")
    };
    _.h.kl = function() {
        this.h && (this.h = !1, rf(this, "a"))
    };
    _.h.ll = function(a) {
        rf(this, new of(a))
    };
    _.h.addEventListener = function(a, b) {
        this.j.listen(a, b)
    };
    _.h.removeEventListener = function(a, b) {
        this.j.unlisten(a, b)
    };
    var WA = _.D("cast.receiver.platform.WebSocket");
    Af.prototype.reset = function() {
        this.h = null
    };
    Ga(Af);
    cast.receiver.Bb = Af;
    _.XA = _.y("Firefox") || _.y("FxiOS");
    !_.y("Android") || dc();
    dc();
    ec();
    var If = !_.Iq && !ec();
    var Mf = _.D("cast.receiver.ui.FocusService");
    Of.prototype.focus = function(a) {
        this.j = a;
        a.focus()
    };
    Of.prototype.isFocused = function(a) {
        return this.h.includes(a)
    };
    Ga(Of);
    var YA = {
            Rr: {
                1E3: {
                    other: "0K"
                },
                1E4: {
                    other: "00K"
                },
                1E5: {
                    other: "000K"
                },
                1E6: {
                    other: "0M"
                },
                1E7: {
                    other: "00M"
                },
                1E8: {
                    other: "000M"
                },
                1E9: {
                    other: "0B"
                },
                1E10: {
                    other: "00B"
                },
                1E11: {
                    other: "000B"
                },
                1E12: {
                    other: "0T"
                },
                1E13: {
                    other: "00T"
                },
                1E14: {
                    other: "000T"
                }
            },
            Qr: {
                1E3: {
                    other: "0 thousand"
                },
                1E4: {
                    other: "00 thousand"
                },
                1E5: {
                    other: "000 thousand"
                },
                1E6: {
                    other: "0 million"
                },
                1E7: {
                    other: "00 million"
                },
                1E8: {
                    other: "000 million"
                },
                1E9: {
                    other: "0 billion"
                },
                1E10: {
                    other: "00 billion"
                },
                1E11: {
                    other: "000 billion"
                },
                1E12: {
                    other: "0 trillion"
                },
                1E13: {
                    other: "00 trillion"
                },
                1E14: {
                    other: "000 trillion"
                }
            }
        },
        ag = YA;
    ag = YA;
    var Yf = {
        AED: [2, "dh", "\u062f.\u0625."],
        ALL: [0, "Lek", "Lek"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BGN: [2, "lev", "lev"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CDF: [2, "FrCD", "CDF"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [32, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [50, "K\u010d", "K\u010d"],
        DKK: [50, "kr.", "kr."],
        DOP: [2, "RD$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        ETB: [2, "Birr", "Birr"],
        EUR: [2, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        HRK: [2, "kn", "kn"],
        HUF: [34,
            "Ft", "Ft"
        ],
        IDR: [0, "Rp", "Rp"],
        ILS: [34, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        IRR: [0, "Rial", "IRR"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        LTL: [2, "Lt", "Lt"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MVR: [2, "Rf", "MVR"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [50, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "PHP"],
        PKR: [0, "Rs", "PKRs."],
        PLN: [50, "z\u0142", "z\u0142"],
        RON: [2, "RON", "RON"],
        RSD: [0, "din", "RSD"],
        RUB: [50, "\u20bd",
            "RUB"
        ],
        SAR: [2, "SAR", "SAR"],
        SEK: [50, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "\u20ba", "TRY"],
        TWD: [2, "$", "NT$"],
        TZS: [0, "TSh", "TSh"],
        UAH: [2, "\u0433\u0440\u043d.", "UAH"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "$U"],
        VND: [48, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var ZA = {
            Kk: ".",
            Jh: ",",
            Jm: "%",
            ui: "0",
            Nm: "+",
            ci: "-",
            Tk: "E",
            Km: "\u2030",
            Zk: "\u221e",
            Gm: "NaN",
            Jk: "#,##0.###",
            Ns: "#E0",
            Gs: "#,##0%",
            Tr: "\u00a4#,##0.00",
            Gh: "USD"
        },
        Sf = ZA;
    Sf = ZA;
    Uf.prototype.format = function(a) {
        if (this.l > this.j) throw Error("Min value must be less than max value");
        if (isNaN(a)) return Sf.Gm;
        var b = [];
        var c = $A;
        a = Vf(a, -c.po);
        var d = 0 > a || 0 == a && 0 > 1 / a;
        d ? c.wj ? b.push(c.wj) : (b.push(c.prefix), b.push(this.F)) : (b.push(c.prefix), b.push(this.J));
        if (isFinite(a))
            if (a = a * (d ? -1 : 1) * this.o, this.I) {
                var e = a;
                if (0 == e) Wf(this, e, this.h, b), Xf(this, 0, b);
                else {
                    var f = Math.floor(Math.log(e) / Math.log(10) + 2E-15);
                    e = Vf(e, -f);
                    var g = this.h;
                    1 < this.D && this.D > this.h ? (g = f % this.D, 0 > g && (g = this.D + g), e = Vf(e,
                        g), f -= g, g = 1) : 1 > this.h ? (f++, e = Vf(e, -1)) : (f -= this.h - 1, e = Vf(e, this.h - 1));
                    Wf(this, e, g, b);
                    Xf(this, f, b)
                }
            } else Wf(this, a, this.h, b);
        else b.push(Sf.Zk);
        d ? c.xj ? b.push(c.xj) : (isFinite(a) && b.push(c.Yj), b.push(this.H)) : (isFinite(a) && b.push(c.Yj), b.push(this.M));
        return b.join("")
    };
    var $A = {
        po: 0,
        wj: "",
        xj: "",
        prefix: "",
        Yj: ""
    };
    var ig = Zf;
    ig = Zf;
    var hg = $f;
    hg = $f;
    var bg = null,
        cg = null,
        dg = null,
        kg = RegExp("'([{}#].*?)'", "g"),
        jg = RegExp("''", "g");
    eg.prototype.format = function(a) {
        if (this.l) {
            this.A = [];
            var b = lg(this, this.l);
            this.j = tg(this, b);
            this.l = null
        }
        if (this.j && 0 != this.j.length)
            for (this.h = _.ib(this.A), b = [], fg(this, this.j, a, !1, b), a = b.join(""); 0 < this.h.length;) a = a.replace(this.o(this.h), this.h.pop());
        else a = "";
        return a
    };
    var ng = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
        og = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
        pg = /^\s*(\w+)\s*,\s*select\s*,/;
    eg.prototype.o = function(a) {
        return "\ufddf_" + (a.length - 1).toString(10) + "_"
    };
    cast.receiver.V = {
        Kf: "LIVE",
        ji: "Play",
        hi: "Pause",
        Em: "Stop",
        mm: "Playing",
        lm: "Paused",
        nm: "Next item",
        om: "Previous item",
        xm: "Seek forward 10 seconds",
        ym: "Seek forward 15 seconds",
        zm: "Seek forward 30 seconds",
        tm: "Seek backward 10 seconds",
        vm: "Seek backward 15 seconds",
        wm: "Seek backward 30 seconds",
        Am: "Shuffle",
        gm: "Captions",
        gi: "Thumbs up",
        jm: "Thumbs down",
        rm: "Repeat. State: Off.",
        qm: "Repeat. State: All.",
        sm: "Repeat. State: One.",
        km: "Lyrics",
        Bm: "Skip Ad",
        fi: "Ad",
        Dm: "Sleep timer",
        dm: "Show controls.",
        $l: "Hide controls.",
        ei: "Controls are visible.",
        di: "Controls are hidden.",
        Zl: "Go to playback.",
        fm: "Show {MEDIA_BROWSE_TITLE}.",
        cm: "{CURRENT_TIME} of {DURATION}",
        ii: "Playing {APP_NAME}",
        im: "Device Controller"
    };
    cast.receiver.V.Fb = function(a, b) {
        return (new eg(a)).format(b)
    };
    cast.receiver.V.dj = function(a) {
        return cast.receiver.V.Fb("Your video will play in {FORMATTED_TIME}", {
            FORMATTED_TIME: a
        })
    };
    cast.receiver.V.bj = function(a) {
        return cast.receiver.V.Fb("Skip in {FORMATTED_TIME}", {
            FORMATTED_TIME: a
        })
    };
    cast.receiver.V.ig = function(a, b) {
        return b ? a ? cast.receiver.V.Fb("Season {SEASON}, Episode {EPISODE}", {
            SEASON: a,
            EPISODE: b
        }) : cast.receiver.V.Fb("Episode {EPISODE}", {
            EPISODE: b
        }) : cast.receiver.V.Fb("Season {SEASON}", {
            SEASON: a
        })
    };
    cast.receiver.V.ej = function(a, b) {
        return a + " of " + b
    };
    _.r(ug, $c);
    window.customElements && window.customElements.define && window.customElements.define("goog-break-ui", ug);
    cast.receiver.C.Mr = ug;
    _.D("cast.receiver.CastChannel");
    _.h = zg.prototype;
    _.h.rl = function() {
        Bg(this, "opened")
    };
    _.h.nl = function() {
        Bg(this, "closed")
    };
    _.h.pl = function() {
        Bg(this, "error")
    };
    _.h.ql = function(a) {
        _.se(xg, "Received message: " + a.message);
        var b = (a = JSON.parse(a.message)) && a.namespace;
        a && b && a.senderId && a.data ? (a = new Ag(b, a.senderId, a.data), a.target = this, this.j.dispatchEvent(a)) : _.E(xg, "IpcChannel Message received is invalid")
    };
    _.h.open = function() {
        _.I(xg, "Opening message bus websocket");
        this.h.open("ws://localhost:" + cast.receiver.platform.Ja("port-for-web-server") + "/v2/ipc")
    };
    _.h.close = function() {
        _.I(xg, "Closing message bus websocket");
        this.h.close()
    };
    _.h.send = function(a, b, c) {
        a = JSON.stringify({
            namespace: a,
            senderId: b,
            data: c
        });
        _.se(xg, "IPC message sent: " + a);
        this.h.send(a)
    };
    _.h.addEventListener = function(a, b) {
        this.j.listen(a, b)
    };
    _.h.removeEventListener = function(a, b) {
        this.j.unlisten(a, b)
    };
    var xg = _.D("cast.receiver.IpcChannel");
    _.r(Ag, _.C);
    _.r(Cg, _.A);
    _.h = Cg.prototype;
    _.h.Kh = function(a) {
        ne(Kh, yk, "Dispatching CastMessageBus message");
        var b = "STRING" == this.o ? a.data : this.M(a.data);
        Fg(this, new Gg(a.senderId, a.senderId, b));
        a = new Gg("message", a.senderId, b);
        this.l && this.l(a);
        Fg(this, a)
    };
    _.h.send = function(a, b) {
        this.F || this.j == cast.receiver.oa.ce || _.H(Kh, "Application should not send requests before the system is ready (they will be ignored)");
        Fg(this, new Gg("send", a, b));
        for (var c = _.q(this.J), d = c.next(); !d.done; d = c.next())
            if (d = d.value, d(a, this.j, b)) return;
        if ("STRING" == this.o) {
            if ("string" !== typeof b) throw Error("Wrong argument, CastMessageBus type is STRING");
            this.B.send(this.j, a, b)
        } else this.B.send(this.j, a, this.H(b))
    };
    _.h.oo = function(a) {
        if ("JSON" != this.o) throw Error("Unexpected message type for JSON serialization");
        return this.j === cast.receiver.media.eb ? JSON.stringify(a, function(b, c) {
            return null === c ? void 0 : c
        }) : JSON.stringify(a)
    };
    _.h.On = function(a) {
        if ("JSON" != this.o) throw Error("Unexpected message type for JSON serialization");
        return JSON.parse(a)
    };
    _.h.ea = function() {
        _.A.prototype.ea.call(this);
        this.B.removeEventListener(this.j, this.I);
        this.A.dispose();
        for (var a in this.h) this.h[a] && this.h[a].close();
        this.h = {};
        ne(Kh, yk, "Disposed CastMessageBus[" + (this.j + "]"))
    };
    _.h.addEventListener = function(a, b) {
        _.Ed(this.A, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        Od(this.A, a, b)
    };
    _.h.dispatchEvent = function(a) {
        return Fg(this, a)
    };
    var Kh = _.D("cast.receiver.CastMessageBus");
    _.r(Gg, _.C);
    cast.receiver.Eb = {};
    cast.receiver.Eb.Qb = cast.receiver.oa.sd + "com.google.cast.cac";
    cast.receiver.vc = {};
    cast.receiver.vc.$k = cast.receiver.oa.sd + "com.google.cast.inject";
    cast.receiver.vc.be = "__inject__";
    Hg.prototype[Symbol.iterator] = function() {
        return this
    };
    Hg.prototype.next = function() {
        var a = this.h.next();
        return {
            value: a.done ? void 0 : this.j.call(void 0, a.value, this.l++),
            done: a.done
        }
    };
    var Pg = "StopIteration" in _.u ? _.u.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    Jg.prototype.Qe = function() {
        throw Pg;
    };
    Jg.prototype.next = function() {
        return aB
    };
    var aB = GA({
        done: !0,
        value: void 0
    });
    Jg.prototype.Jc = function() {
        return this
    };
    Kg.prototype.Jc = function() {
        return new Lg(this.h())
    };
    Kg.prototype[Symbol.iterator] = function() {
        return new Mg(this.h())
    };
    Kg.prototype.j = function() {
        return new Mg(this.h())
    };
    _.r(Lg, Jg);
    Lg.prototype.Qe = function() {
        var a = this.h.next();
        if (a.done) throw Pg;
        return a.value
    };
    Lg.prototype.next = function() {
        return this.h.next()
    };
    Lg.prototype[Symbol.iterator] = function() {
        return new Mg(this.h)
    };
    Lg.prototype.j = function() {
        return new Mg(this.h)
    };
    _.r(Mg, Kg);
    Mg.prototype.next = function() {
        return this.l.next()
    };
    _.h = _.Qg.prototype;
    _.h.uc = ca(1);
    _.h.og = function() {
        _.Sg(this);
        return this.h.concat()
    };
    _.h.has = function(a) {
        return Rg(this.j, a)
    };
    _.h.isEmpty = function() {
        return 0 == this.size
    };
    _.h.clear = function() {
        this.j = {};
        this.l = this.size = this.h.length = 0
    };
    _.h.remove = function(a) {
        return this.delete(a)
    };
    _.h.delete = function(a) {
        return Rg(this.j, a) ? (delete this.j[a], --this.size, this.l++, this.h.length > 2 * this.size && _.Sg(this), !0) : !1
    };
    _.h.get = function(a, b) {
        return Rg(this.j, a) ? this.j[a] : b
    };
    _.h.set = function(a, b) {
        Rg(this.j, a) || (this.size += 1, this.h.push(a), this.l++);
        this.j[a] = b
    };
    _.h.forEach = function(a, b) {
        for (var c = this.og(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    _.h.clone = function() {
        return new _.Qg(this)
    };
    _.h.keys = function() {
        return Og(this.Jc(!0)).j()
    };
    _.h.values = function() {
        return Og(this.Jc(!1)).j()
    };
    _.h.entries = function() {
        var a = this;
        return Ig(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    _.h.Jc = function(a) {
        _.Sg(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new Jg;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.h.length) return aB;
            var g = d.h[b++];
            return {
                value: a ? g : d.j[g],
                done: !1
            }
        };
        var f = e.next;
        e.Qe = function() {
            var g = f.call(e);
            if (g.done) throw Pg;
            return g.value
        };
        return e
    };
    Vg.prototype.D = function(a) {
        var b = this,
            c = a.data,
            d = c.requestId,
            e = a.senderId;
        if ("WRAPPED" != c.type) hh(this, "Unsupported message type " + c.type, e, d);
        else {
            a = JSON.parse(c.data);
            c = a.namespace;
            var f = this.o.h[c] || null;
            if (f) {
                var g = !1,
                    k = null;
                if (c == cast.receiver.Eb.Qb) a.data.requestId = d, g = !0;
                else if (c == cast.receiver.media.eb) k = a.data, k.requestId = d, k.mediaSessionId = this.B, k = k.type;
                else {
                    hh(this, "Unsupported namespace " + c, e, d);
                    return
                }
                this.h.set(d, e);
                try {
                    this.l = null, Dg(f, c, cast.receiver.vc.be, JSON.stringify(a.data))
                } catch (m) {
                    throw this.h.delete(d),
                        hh(this, "Injecting " + a.data + " failed with " + m, e, d), m;
                }
                if (!g) {
                    var l = function() {
                        return b.l ? (b.h.delete(d), hh(b, "Error " + JSON.stringify(b.l), e, d, "WRAPPED_ERROR", b.l), !0) : !1
                    };
                    l() || setTimeout(function() {
                        !l() && b.h.has(d) && (b.h.delete(d), jh(b, e, d))
                    }, eh(this, k))
                }
            } else hh(this, "Unregistered namespace " + c, e, d, "WRAPPED_ERROR", {
                type: "ERROR",
                code: "UNREGISTERED_NAMESPACE"
            })
        }
    };
    Vg.prototype.F = function(a, b, c) {
        if (b == cast.receiver.media.eb && "STRING" == (this.o.h[b] || null).o) try {
            c = JSON.parse(c)
        } catch (g) {
            return _.E(fh, "Parse failed: " + c), !1
        }
        var d = c.type;
        b == cast.receiver.media.eb && "MEDIA_STATUS" == d && c.status && c.status[0] && (this.B = c.status[0].mediaSessionId);
        if (a !== cast.receiver.vc.be && "*:*" !== a) return !1;
        a = "*:*" === a;
        var e = c.requestId,
            f = this.h.get(e);
        if (void 0 === e) return a || _.H(fh, "No requestId in " + c), !a;
        if (b == cast.receiver.media.eb) {
            switch (d) {
                case "INVALID_REQUEST":
                case "INVALID_PLAYER_STATE":
                case "LOAD_CANCELLED":
                case "LOAD_FAILED":
                case "ERROR":
                    b =
                        c.reason;
                    this.l = {
                        type: "ERROR",
                        code: b ? b : d
                    };
                    break;
                case "MEDIA_STATUS":
                    f && (this.h.delete(e), jh(this, f, e))
            }
            return !a
        }
        if (!f) return _.E(fh, "Request not found " + e), !a;
        this.h.delete(e);
        if (b != cast.receiver.Eb.Qb) return _.E(fh, "Unsupported namespace " + b), !a;
        d = c;
        switch (d.type) {
            case "SUCCESS":
                jh(this, f, e, Object.getOwnPropertyNames(c).some(function(g) {
                    return "type" != g && "requestId" != g && void 0 !== c[g]
                }) ? JSON.stringify(c) : void 0);
                break;
            case "ERROR":
                hh(this, "Wrapped error", f, e, "WRAPPED_ERROR", d);
                break;
            default:
                hh(this,
                    "Unknown message type " + c, f, e)
        }
        return !a
    };
    Ga(Vg);
    var fh = _.D("cast.receiver.InjectManager");
    _.r(ih, kh);
    _.r(gh, kh);
    var nh = null;
    mh.prototype.set = function(a) {
        this.h = a
    };
    mh.prototype.reset = function() {
        this.set(_.Ra())
    };
    mh.prototype.get = function() {
        return this.h
    };
    oh.prototype.h = !0;
    oh.prototype.j = !0;
    oh.prototype.l = !1;
    _.Sa(qh, oh);
    sh.prototype.o = function(a) {
        function b(f) {
            if (f) {
                if (f.value >= oe.value) return "error";
                if (f.value >= pe.value) return "warn";
                if (f.value >= he.value) return "log"
            }
            return "debug"
        }
        if (!this.j[a.j]) {
            var c = rh(this.h, a),
                d = bB;
            if (d) {
                var e = b(a.o);
                th(d, e, c, a.h)
            }
        }
    };
    sh.prototype.removeFilter = function(a) {
        delete this.j[a]
    };
    var uh = null,
        bB = _.u.console;
    _.r(_.Tg, _.A);
    _.h = _.Tg.prototype;
    _.h.start = function(a) {
        if (a) {
            if (!a) throw Error("Cannot validate undefined config.");
            if (void 0 != a.maxInactivity && 5 > a.maxInactivity) throw Error("config.maxInactivity must be greater than or equal to 5 seconds.");
            _.zb(this.config_, a || {})
        }
        this.config_.versionCode && 0 <= this.config_.versionCode && (Number.isInteger(this.config_.versionCode) ? (z("Cast.Receiver.VersionCode", this.config_.versionCode), _.I(Fh, "App Version " + this.config_.versionCode)) : _.E(Fh, "Receiver versionCode needs to be an integer"));
        Vg.L();
        this.ja || di(this, !1);
        this.ha = !0;
        this.M.open()
    };
    _.h.stop = function() {
        this.dispose();
        window.close()
    };
    _.h.isRemoteControl = function() {
        return !!cast.receiver.platform.Ja("is-remote-control-mode-enabled")
    };
    _.h.$b = function() {
        return "ready" == this.A
    };
    _.h.getSenders = function() {
        return _.ob(this.o)
    };
    _.h.se = function(a) {
        return this.o[a] ? _.vb(this.o[a]) : null
    };
    _.h.ug = function() {
        return null == this.F ? this.B ? "notvisible" : "unknown" : this.F ? "visible" : "notvisible"
    };
    _.h.sg = function() {
        return null == this.B ? this.F ? "notstandby" : "unknown" : this.B ? "standby" : "notstandby"
    };
    _.h.te = function() {
        "notstarted" == this.A && (this.A = /[&?]google_cast_bg=true(&|$)/.test(window.location.search) ? "startinginbackground" : "starting");
        return this.A
    };
    _.h.Rc = function() {
        return this.N
    };
    _.h.pc = function() {
        return this.j
    };
    _.h.Nd = function(a) {
        this.$b() ? Ah(this, a) : this.config_.statusText != a && (this.config_.statusText = a, this.W = !0)
    };
    _.h.qh = function(a) {
        if (0 > a || 1 < a) throw Error("Invalid level value");
        this.l.send(cast.receiver.oa.Xa, {
            type: "setvolume",
            level: a
        })
    };
    _.h.rh = function(a) {
        this.l.send(cast.receiver.oa.Xa, {
            type: "setvolume",
            muted: a
        })
    };
    _.h.Uc = function() {
        return this.sa
    };
    _.h.ff = function(a) {
        this.l.send(cast.receiver.oa.Xa, {
            type: "startheartbeat",
            maxInactivity: a
        })
    };
    _.h.kh = function(a) {
        this.l.send(cast.receiver.oa.Xa, {
            type: "cast2smartdisplaymessage",
            message: a,
            requestId: Math.random()
        })
    };
    _.h.Md = function(a) {
        this.l.send(cast.receiver.oa.Xa, {
            type: "sendfeedbackmessage",
            message: a
        })
    };
    _.h.vq = function(a) {
        var b = a.data;
        switch (b.type) {
            case "opened":
                _.I(Fh, "Underlying message bus is open");
                zh(this, _.ob(this.h), this.config_.statusText, this.config_.dialData);
                this.config_.maxInactivity && this.ff(this.config_.maxInactivity);
                break;
            case "closed":
                this.Rg();
                break;
            case "error":
                Hh(this, new hi("error", null));
                break;
            case "ready":
                _.I(Fh, function() {
                    return "System ready event: " + JSON.stringify(b)
                });
                Ih(this, b);
                break;
            case "senderconnected":
                Lh(this, {
                    id: b.senderId,
                    userAgent: b.userAgent
                });
                break;
            case "senderdisconnected":
                Nh(this,
                    b.senderId, b.reason);
                break;
            case "volumechanged":
                Ph(this, {
                    level: b.level,
                    muted: b.muted
                });
                break;
            case "visibilitychanged":
                this.T || (a = b.visible, Rh(this, void 0 !== a ? a : null));
                break;
            case "standbychanged":
                this.T || (a = b.standby, Th(this, void 0 !== a ? a : null));
                break;
            case "maxvideoresolutionchanged":
                Xh(this, b.height);
                break;
            case "showmediacontrols":
                Vh(this, b.controls);
                break;
            case "playbackdevicestatus":
                _.I(Fh, "Dispatching playbackdevicestatus " + b.playbackType);
                this.H = new Va;
                this.H.playbackType = b.playbackType;
                this.H.deviceName =
                    b.deviceName;
                Hh(this, new ji(this.H));
                break;
            case "hdroutputtypechanged":
                this.X && this.X(b.hdrType);
                break;
            case "screenresolutionchanged":
                break;
            case "feedbackstarted":
                Zh(this);
                break;
            case "groupcapabilities":
                ai(this, b);
                break;
            case "allowgroupchange":
                ci(this, b);
                break;
            default:
                _.E(Fh, "Unexpected system message type: " + b.type)
        }
    };
    _.h.canDisplayType = function(a, b, c, d, e) {
        if (!cast.receiver.platform.oj()) return !0;
        if (!Qb(a, "video/") && !Qb(a, "audio/")) return !1;
        b && (a += "; codecs=" + b);
        c && d && (a += "; width=" + c + "; height=" + d);
        e && (a += "; framerate=" + e);
        if (c = b) a: for (c = !1, b = b.split(","), d = 0; d < b.length; d++) {
            if (b[d].match(vA)) {
                c = !1;
                break a
            }
            0 === b[d].indexOf("hev1.2") && (c = !0)
        }
        c && (a += "; eotf=smpte2084");
        return cast.receiver.platform.canDisplayType(a)
    };
    _.h.yj = function() {
        this.T && Rh(this, "visible" == document.visibilityState)
    };
    _.h.Rg = function() {
        _.I(Fh, "Dispatching shutdown event");
        this.te();
        this.A = "startinginbackground" == this.A ? "stoppinginbackground" : "stopping";
        for (var a in this.h) this.h[a].F = !1;
        Hh(this, new ii)
    };
    _.h.ea = function() {
        this.M.close();
        _.A.prototype.ea.call(this);
        window && Od(window, "unload", this.Rg, !1, this);
        document && Od(document, "visibilitychange", this.yj, !1, this);
        this.J.dispose();
        delete _.Tg.Yb;
        _.se(Fh, "Disposed CastReceiverManager")
    };
    _.h.addEventListener = function(a, b) {
        _.Ed(this.J, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        Od(this.J, a, b)
    };
    _.h.dispatchEvent = function(a) {
        return Hh(this, a)
    };
    Ga(_.Tg);
    _.Tg.getInstance = _.Tg.L;
    var wh = null,
        Fh = _.D("cast.receiver.CastReceiverManager");
    _.r(hi, _.C);
    _.r(Mh, hi);
    _.r(Jh, hi);
    _.r(Qh, hi);
    _.r(Sh, hi);
    _.r(Oh, hi);
    _.r(Gh, hi);
    _.r(ii, hi);
    _.r(Yh, hi);
    _.r(ji, hi);
    _.r(Uh, hi);
    _.r(Wh, hi);
    _.r($h, hi);
    _.r(bi, hi);
    var vh = {
            maxInactivity: 10
        },
        Ch = 1,
        Dh = 47;
    ki.prototype.l = function(a) {
        if (this.h.$b()) _.H(cB, "Ignoring broadcast request, system is ready.");
        else {
            a = a.data;
            var b = a.type;
            if ("APPLICATION_BROADCAST" != b) _.E(cB, "Ignoring message type: " + b);
            else if (b = a.h) {
                var c = this.h.h[b] || null;
                if (c) switch (b) {
                    case cast.receiver.media.eb:
                        var d = JSON.parse(a.message);
                        if ("PRECACHE" != d.type) {
                            _.E(cB, "Unsupported type for media namespace: " + d.type);
                            break
                        }
                        Dg(c, b, "__broadcast__", a.message);
                        break;
                    default:
                        _.E(cB, "Unsupported namespace: " + a.h)
                } else _.E(cB, "Invalid message bus for namespace: " +
                    b)
            } else _.E(cB, "Missing namespace: " + b)
        }
    };
    Ga(ki);
    var cB = _.D("cast.receiver.BroadcastManager");
    var ni = _.D("cast.receiver.ui.BrowseContentValidator");
    cast.receiver.C.Pb = function(a, b, c) {
        Of.L();
        this.element = si(this, a, b, c);
        this.A = Ud.L()
    };
    cast.receiver.C.Ak = function(a) {
        uc(a, _.qc(_.Fb(_.Gb('<div class="slot device-controller-slot"></div><div class=controls-buttons><div class="slot slot-primary-1"></div><div class="slot center"><play-placeholder></play-placeholder><stop-placeholder></stop-placeholder></div><div class="slot slot-primary-2"></div><div class="slot slot-secondary-1"></div><div class="slot slot-secondary-2"></div></div>')), null))
    };
    cast.receiver.C.Bk = function(a) {
        a.innerHTML = '<div class="slot device-controller-slot"></div><div class="slot slot-primary-1"></div><div class="slot center"><play-placeholder></play-placeholder><stop-placeholder></stop-placeholder></div><div class="slot slot-primary-2"></div><div class="slot slot-secondary-1"></div><div class="slot slot-secondary-2"></div>'
    };
    cast.receiver.C.Nk = function(a) {
        var b = document.createElement("img");
        b.classList.add("device-controller-icon");
        b.setAttribute("role", "presentation");
        var c = document.createElement("span");
        c.classList.add("device-controller-label");
        var d = document.createElement("div");
        d.classList.add("device-controller-btn");
        if (!Df()) {
            d.setAttribute("role", "button");
            var e = document.createElement("goog-ripple");
            d.appendChild(e)
        }
        d.appendChild(b);
        d.appendChild(c);
        d.title = cast.receiver.V.im;
        d.addEventListener("click", a);
        K(c, !1);
        this.j = d;
        this.h = c;
        this.l = b
    };
    _.r(wi, cast.receiver.C.Pb);
    cast.receiver.C.Om = wi;
    _.r(xi, cast.receiver.C.Pb);
    _.r(zi, $c);
    zi.prototype.Ji = function() {
        if (this.h && Rf(this.h.element)) return !0;
        for (var a in this.l)
            if (Rf(this.l[a].element)) return !0;
        return !1
    };
    zi.prototype.la = function(a, b) {
        if (!this.D.hasOwnProperty(a)) throw Error("Invalid controls slot name. - " + a);
        for (var c = this.D[a]; c.firstChild;) this.B && c.firstElementChild && Qf(c.firstElementChild, !1), c.removeChild(c.firstChild), delete this.l[a];
        b && (c.appendChild(b.element), this.l[a] = b, this.B && Qf(b.element, !0));
        a === cast.receiver.C.ga.SLOT_SECONDARY_2 && this.classList.toggle("secondary-2-empty", !b)
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-buttons-bar", zi);
    Di.prototype.I = function(a) {
        var b = a.data,
            c = b.type;
        a = a.senderId;
        switch (c) {
            case "SET_CREDENTIALS":
                Ki(this, b.forRequestId, b);
                var d = this.o;
                break;
            case "LOAD_BY_ENTITY":
                d = this.l;
                break;
            case "USER_ACTION":
                d = this.B;
                break;
            case "DISPLAY_STATUS":
                d = this.G;
                break;
            case "CUSTOM_COMMAND":
                d = this.D;
                break;
            case "SCREEN_NAVIGATION":
                d = this.H;
                break;
            case "FOCUS_STATE":
                (d = this.F) && this.A.pc().focus_state_supported && d(b);
                return;
            case "SUCCESS":
            case "ERROR":
                Ki(this, b.requestId, b);
                return;
            default:
                c = "Unsupported event " + c;
                Fi(c, b,
                    "INVALID_REQUEST");
                this.h.send(a, Fi(c, b, "INVALID_REQUEST"));
                return
        }
        d ? Gi(this, a, b, d) : (c = "Handler for " + c + " not implemented", Fi(c, b, "NOT_SUPPORTED"), this.h.send(a, Fi(c, b, "NOT_SUPPORTED")))
    };
    Di.prototype.Vg = function(a, b) {
        var c = this,
            d = this.A.pc();
        if (d && !0 === d.display_supported && !d.touch_input_supported) return Promise.resolve(new Ii("NOT_SUPPORTED"));
        d = Date.now();
        if (this.j.has(d)) return Promise.reject(Error("Duplicate request"));
        var e = new Ni(a, b);
        e.requestId = d;
        return new Promise(function(f) {
            c.j.set(e.requestId, f);
            c.h.send("system-0", e)
        })
    };
    Di.prototype.eh = function(a, b) {
        var c = this,
            d = new Mi;
        d.requestId = Date.now();
        d.credentials = a || void 0;
        d.customData = b || void 0;
        return new Promise(function(e) {
            c.j.set(d.requestId, e);
            c.h.send("system-0", d)
        })
    };
    Ga(Di);
    Di.getInstance = Di.L;
    var Ci = cast.receiver.Eb.Qb,
        Hi = _.D("cast.receiver.CommandAndControlManager");
    _.r(Mi, Li);
    _.r(Ni, Li);
    _.r(Si, Li);
    _.r(Ti, Li);
    _.r(Ui, Li);
    _.r(Vi, Li);
    _.r(Wi, Vi);
    _.r(Ii, Vi);
    var dj = /#(.)(.)(.)(.)/,
        Xi = /^#(?:[0-9a-f]{4}){1,2}$/i;
    _.r(lj, _.A);
    lj.prototype.sc = function() {
        return this.H
    };
    lj.prototype.pb = function(a) {
        hj(this);
        ij(this);
        jj(this, a)
    };
    lj.prototype.ea = function() {
        _.A.prototype.ea.call(this);
        for (var a = _.q(this.j), b = a.next(); !b.done; b = a.next()) this.h.removeChild(b.value);
        this.j.length = 0;
        hj(this, !0);
        qj(this);
        ne(rj, yk, "Disposed TextTracksManager")
    };
    var rj = _.D("cast.receiver.TextTracksManager");
    _.h = vj.prototype;
    _.h.preload = function(a, b, c, d) {
        xj(this);
        this.G = a;
        this.A = b;
        this.J = d || 0;
        this.o = c || null
    };
    _.h.sl = function(a) {
        xj(this);
        this.H(a)
    };
    _.h.Lh = function() {
        xj(this);
        this.F()
    };
    _.h.tl = function() {
        this.j && this.l && kj(this.j, this.l);
        this.I()
    };
    _.h.registerErrorCallback = function(a) {
        this.H = a
    };
    _.h.registerEndedCallback = function(a) {
        this.F = a
    };
    _.h.registerLoadCallback = function(a) {
        this.I = a
    };
    _.h.unregisterErrorCallback = function() {
        this.H = function() {}
    };
    _.h.unregisterEndedCallback = function() {
        this.F = function() {}
    };
    _.h.unregisterLoadCallback = function() {
        this.I = function() {}
    };
    _.h.Aj = function() {
        yj(this)
    };
    _.h.load = function(a, b, c, d, e, f) {
        this.j && (this.j.dispose(), this.j = null);
        this.B = !1;
        d && d.tracks && this.h && (this.j && this.j.dispose(), this.j = new lj(this.h, d.tracks, d.activeTrackIds || [], d.textTrackStyle || null), d.language && oj(this.j, d.language));
        null != this.o && _.Ed(this.h, "timeupdate", this.Aj, !1, this);
        e || (this.A = c && 0 < c ? c : 0, _.I(this.ca, "Load - contentId: " + a + " autoplay: " + b + " time: " + this.A), this.h.autoplay = !1, a && (this.h.src = a), this.h.autoplay = b, this.h.load(), void 0 !== f && (this.h.playbackRate = f))
    };
    _.h.reset = function() {
        this.B = !1;
        this.j && (this.j.dispose(), this.j = null);
        this.l = null;
        this.h.removeAttribute("src");
        this.A = 0;
        this.h.load();
        xj(this)
    };
    _.h.play = function() {
        this.B = !1;
        this.h.play()
    };
    _.h.seek = function(a, b) {
        this.h.currentTime != a && (this.h.currentTime = a);
        yj(this) || ("PLAYBACK_START" == b && this.h.paused ? this.h.play() : "PLAYBACK_PAUSE" != b || this.h.paused || this.h.pause())
    };
    _.h.setPlaybackRate = function(a) {
        return this.h.playbackRate = a
    };
    _.h.pause = function() {
        this.B = !0;
        this.h.pause()
    };
    _.h.getState = function() {
        null == this.G && (this.G = this.h.autoplay);
        return this.h.paused || isNaN(this.h.duration) ? this.h.duration && (this.h.currentTime || 0 == this.h.currentTime) && this.h.currentTime < wj(this) ? this.h.currentTime == this.A && this.G && !this.B ? "BUFFERING" : "PAUSED" : "IDLE" : "PLAYING"
    };
    _.h.getCurrentTimeSec = function() {
        var a = wj(this);
        return isNaN(a) ? this.h.currentTime : this.h.currentTime < a ? this.h.currentTime : a
    };
    _.h.getDurationSec = function() {
        return wj(this)
    };
    _.h.getMediaCategory = function() {
        return null
    };
    _.h.getVolume = function() {
        return {
            level: this.h.volume,
            muted: this.h.muted
        }
    };
    _.h.setVolume = function(a) {
        void 0 !== a.level && (this.h.volume = a.level);
        void 0 !== a.muted && (this.h.muted = a.muted)
    };
    _.h.editTracksInfo = function(a) {
        this.j && (a.textTrackStyle && this.j.pb(a.textTrackStyle), a.language ? oj(this.j, a.language) : a.activeTrackIds && kj(this.j, a.activeTrackIds));
        zj(this, a.activeTrackIds);
        return this.l
    };
    _.h = Bj.prototype;
    _.h.ph = function(a) {
        this.j = a
    };
    _.h.fetchItems = function(a, b, c, d) {
        var e = this,
            f = void 0,
            g = Uj(this, b);
        this.j ? 0 < c && 0 < d ? f = "Queue operations only support expanding the front or back." : 0 > g && (f = "Reference item id is not in current queue.") : f = "Fetch items is only supported with an external queue.";
        if (f) return _.H(Kj, f), Promise.reject(f);
        0 < c ? (f = this.h.length - 1, c -= f - g, b = this.h[f].itemId) : 0 < d && (d -= g, b = this.h[0].itemId);
        var k = new Hc;
        k.requestId = a;
        return 0 >= c && 0 >= d ? (k.changeType = "NO_CHANGE", k.sequenceNumber = Mj(this, !1), Promise.resolve(k)) : Promise.resolve(this.j.fetchItems(b,
            c, d)).then(function(l) {
            if (l && 0 !== l.length) {
                var m = 0 < c ? void 0 : b;
                Pj(e, l, m);
                k.changeType = "INSERT";
                k.itemIds = l.map(function(n) {
                    return n.itemId
                });
                k.insertBefore = m;
                k.sequenceNumber = Mj(e, !0)
            } else k.changeType = "NO_CHANGE", k.sequenceNumber = Mj(e, !1);
            return k
        })
    };
    _.h.clear = function() {
        this.h = void 0;
        this.o = "REPEAT_OFF";
        this.A = void 0;
        this.B = this.l = 0
    };
    _.h.qc = function(a, b) {
        a = void 0 === a ? !0 : a;
        b = void 0 === b ? !1 : b;
        var c = [],
            d = this.h && this.h.length || 0;
        d = b && this.l < d - 1 ? this.l + 1 : d - 1;
        for (b = b && 0 < this.l ? this.l - 1 : 0; b <= d; b++) {
            var e = c,
                f = e.push;
            if (a) var g = this.h[b];
            else {
                g = this.h[b];
                var k = a,
                    l = new Aj(g.itemId);
                l.autoplay = g.autoplay;
                l.startTime = g.startTime;
                l.playbackDuration = g.playbackDuration;
                l.preloadTime = g.preloadTime;
                l.activeTrackIds = g.activeTrackIds;
                l.customData = g.customData;
                if (void 0 === k || k) l.media = g.media;
                g = l
            }
            f.call(e, g)
        }
        return c
    };
    _.h.Ub = function() {
        return !this.h || 0 > this.l ? null : this.h[this.l]
    };
    _.h.Cd = function() {
        return this.l
    };
    _.h.wh = function(a) {
        for (var b = 0; b < a.length; b++)
            for (var c = 0; c < this.h.length; c++) a[b].itemId == this.h[c].itemId && (this.h[c] = a[b])
    };
    _.h.reset = function() {
        this.l = -1
    };
    _.h.Dg = function(a, b, c) {
        return Pj(this, a, b, c)
    };
    _.h.gh = function(a) {
        for (var b = !1, c = 0; c < a.length; c++)
            for (var d = 0; d < this.h.length; d++)
                if (a[c] == this.h[d].itemId) {
                    this.h.splice(d, 1);
                    this.l == d ? b = !0 : this.l > d && this.l--;
                    break
                }
        this.l >= this.h.length && (this.l = Vj(this) ? 0 : -1, Ej(this) && 0 == this.l && Zj(this));
        if (this.j && this.j.onItemsRemoved) this.j.onItemsRemoved(a);
        return b
    };
    _.h.shuffle = function() {
        var a = this;
        if (this.j && this.j.shuffle) return Promise.resolve(this.j.shuffle()).then(function(b) {
            b ? (Dj(a, !0), a.h = b) : Zj(a)
        });
        Zj(this);
        return Promise.resolve()
    };
    _.h.Rd = function() {
        var a = this;
        if (this.j && this.j.Rd) return Promise.resolve(this.j.Rd()).then(function(b) {
            b ? (Dj(a, !1), a.h = b) : bk(a)
        });
        bk(this);
        return Promise.resolve()
    };
    var Kj = _.D("cast.receiver.MediaQueue");
    cast.receiver.Wa = {};
    var Q = {},
        dB = (Q.LOAD = "Cast.Receiver.Message.LOAD", Q.GET_STATUS = "Cast.Receiver.Message.GET_STATUS", Q.LOAD = "Cast.Receiver.Message.LOAD", Q.PAUSE = "Cast.Receiver.Message.PAUSE", Q.STOP = "Cast.Receiver.Message.STOP", Q.SKIP_AD = "Cast.Receiver.Message.SKIP_AD", Q.PLAY = "Cast.Receiver.Message.PLAY", Q.PLAY_AGAIN = "Cast.Receiver.Message.PLAY_AGAIN", Q.SEEK = "Cast.Receiver.Message.SEEK", Q.SET_PLAYBACK_RATE = "Cast.Receiver.Message.SET_PLAYBACK_RATE", Q.SET_VOLUME = "Cast.Receiver.Message.SET_VOLUME", Q.EDIT_TRACKS_INFO = "Cast.Receiver.Message.EDIT_TRACKS_INFO",
            Q.EDIT_AUDIO_TRACKS = "Cast.Receiver.Message.EDIT_AUDIO_TRACKS", Q.PRELOAD = "Cast.Receiver.Message.PRELOAD", Q.CANCEL_PRELOAD = "Cast.Receiver.Message.CANCEL_PRELOAD", Q.PRECACHE = "Cast.Receiver.Message.PRECACHE", Q.QUEUE_LOAD = "Cast.Receiver.Message.QUEUE_LOAD", Q.QUEUE_INSERT = "Cast.Receiver.Message.QUEUE_INSERT", Q.QUEUE_UPDATE = "Cast.Receiver.Message.QUEUE_UPDATE", Q.QUEUE_REMOVE = "Cast.Receiver.Message.QUEUE_REMOVE", Q.QUEUE_REORDER = "Cast.Receiver.Message.QUEUE_REORDER", Q.QUEUE_NEXT = "Cast.Receiver.Message.QUEUE_NEXT",
            Q.QUEUE_PREV = "Cast.Receiver.Message.QUEUE_PREV", Q.QUEUE_GET_ITEM_RANGE = "Cast.Receiver.Message.QUEUE_GET_ITEM_RANGE", Q.QUEUE_GET_ITEMS = "Cast.Receiver.Message.QUEUE_GET_ITEMS", Q.QUEUE_GET_ITEM_IDS = "Cast.Receiver.Message.QUEUE_GET_ITEM_IDS", Q.QUEUE_SHUFFLE = "Cast.Receiver.Message.QUEUE_SHUFFLE", Q.USER_ACTION = "Cast.Receiver.Message.MEDIA_USER_ACTION", Q.SET_CREDENTIALS = "Cast.Receiver.Message.SET_CREDENTIALS", Q.LOAD_BY_ENTITY = "Cast.Receiver.Message.LOAD_BY_ENTITY", Q.USER_ACTION = "Cast.Receiver.Message.USER_ACTION",
            Q.DISPLAY_STATUS = "Cast.Receiver.Message.DISPLAY_STATUS", Q.CUSTOM_COMMAND = "Cast.Receiver.Message.CUSTOM_COMMAND", Q),
        eB = {},
        fB = (eB.UNKNOWN = 1, eB.SUCCESS = 2, eB.INJECT_ERROR = 3, eB.INVALID_COMMAND = 3, eB.INVALID_PARAMS = 4, eB.INVALID_MEDIA_SESSION_ID = 5, eB.SKIP_LIMIT_REACHED = 6, eB.NOT_SUPPORTED = 7, eB.LANGUAGE_NOT_SUPPORTED = 8, eB.END_OF_QUEUE = 9, eB.DUPLICATE_REQUEST_ID = 10, eB.APP_ERROR = 11, eB.AUTHENTICATION_EXPIRED = 12, eB.PREMIUM_ACCOUNT_REQUIRED = 13, eB.CONCURRENT_STREAM_LIMIT = 14, eB.PARENTAL_CONTROL_RESTRICTED = 15, eB.NOT_AVAILABLE_IN_REGION =
            16, eB.CONTENT_ALREADY_PLAYING = 17, eB.INVALID_REQUEST = 18, eB.GENERIC_LOAD_ERROR = 19, eB.VIDEO_DEVICE_REQUIRED = 20, eB.CONTENT_FILTERED = 21, eB),
        gB = {},
        hB = (gB.MEDIA_STATUS = "Cast.Receiver.OutMessage.MEDIA_STATUS", gB.CLOUD_STATUS = "Cast.Receiver.OutMessage.CLOUD_STATUS", gB.QUEUE_CHANGE = "Cast.Receiver.OutMessage.QUEUE_CHANGE", gB.QUEUE_ITEMS = "Cast.Receiver.OutMessage.QUEUE_ITEMS", gB.QUEUE_ITEM_IDS = "Cast.Receiver.OutMessage.QUEUE_ITEM_IDS", gB.INVALID_PLAYER_STATE = "Cast.Receiver.OutMessage.INVALID_PLAYER_STATE", gB.LOAD_FAILED =
            "Cast.Receiver.OutMessage.LOAD_FAILED", gB.LOAD_CANCELLED = "Cast.Receiver.OutMessage.LOAD_CANCELLED", gB.INVALID_REQUEST = "Cast.Receiver.OutMessage.INVALID_REQUEST", gB.ERROR = "Cast.Receiver.OutMessage.ERROR", gB),
        dk = "local";
    cast.receiver.Wa.Qq = function(a) {
        dk = a
    };
    cast.receiver.Wa.Kg = function(a, b) {
        z(dB[a] || "Cast.Receiver.Message.UNKNOWN", ek(b))
    };
    cast.receiver.Wa.xr = function() {
        var a = _.Tg.L(),
            b = a.h[cast.receiver.media.eb] || null;
        b && (b.addEventListener("message", function(c) {
            c.data && c.data.type && cast.receiver.Wa.Kg(c.data.type, c.senderId)
        }), b.addEventListener("send", function(c) {
            c.data && c.data.type && z(hB[c.data.type] || "Cast.Receiver.OutMessage.UNKNOWN", ek(c.senderId))
        }));
        (a = a.h[cast.receiver.Eb.Qb] || null) && a.addEventListener("message", function(c) {
            c.data && c.data.type && cast.receiver.Wa.Kg(c.data.type, c.senderId)
        })
    };
    cast.receiver.Wa.Jg = function(a) {
        z("Cast.Receiver.CACResponse", fB[a] || 1)
    };
    _.Tg.L().addEventListener("ready", cast.receiver.Wa.xr);
    cast.receiver.un = function(a) {
        var b = this;
        this.l = a;
        this.h = null;
        this.j = "sdr";
        this.o = function() {
            b.l()
        }
    };
    _.h = _.ik.prototype;
    _.h.isEmpty = function() {
        return 0 === this.h.length && 0 === this.j.length
    };
    _.h.clear = function() {
        this.h = [];
        this.j = []
    };
    _.h.contains = function(a) {
        return _.eb(this.h, a) || _.eb(this.j, a)
    };
    _.h.remove = function(a) {
        var b = this.h;
        var c = mA(b, a);
        0 <= c ? (_.fb(b, c), b = !0) : b = !1;
        return b || _.hb(this.j, a)
    };
    _.h.uc = ca(0);
    _.h = kk.prototype;
    _.h.cj = function() {
        return this.Sm++
    };
    _.h.lb = function() {
        return this.h ? this.h.media || null : null
    };
    _.h.cd = function(a, b, c) {
        b = void 0 === b || b;
        if (c && !b) throw Error("No broadcast call but status customData has been provided");
        this.h && (Hk(this, a, !1), this.h.media = a);
        b && this.broadcastStatus(!0, null, c)
    };
    _.h.Wb = function() {
        return this.lf
    };
    _.h.Od = function(a, b) {
        this.lf !== a && (this.lf = a, (void 0 === b || b) && this.h && this.broadcastStatus(!1))
    };
    _.h.Rf = function(a) {
        this.Od(a | this.Wb())
    };
    _.h.hh = function(a) {
        this.Od(~a & this.Wb())
    };
    _.h.yb = function(a) {
        qk(this, this.U, a)
    };
    _.h.Qg = function(a) {
        var b = a.data,
            c = b.type;
        if ("SHUTDOWN" == c) this.yh.stop();
        else if (this.P && "LOAD" != c) _.H(L, "Load is in progress, media command is being queued."), this.wf.j.push(a);
        else {
            a = a.senderId;
            var d = b.type;
            var e = b.requestId;
            if ("number" !== typeof e || e != Math.floor(e)) _.E(L, "Ignoring request, requestId is not an integer: " + e), d = !1;
            else {
                var f = !1;
                void 0 != b.mediaSessionId && b.mediaSessionId != this.G ? (_.E(L, "Invalid media session ID: " + b.mediaSessionId + "  does not match the expected ID: " + this.G), f = !0) :
                    "LOAD" != d && "PLAY_AGAIN" != d && "GET_STATUS" != d && "QUEUE_LOAD" != d && "PRECACHE" != d && "STORE_SESSION" != d && "RESUME_SESSION" != d && (void 0 === b.mediaSessionId ? (_.E(L, "Invalid media session ID, it is undefined"), f = !0) : "IDLE" == sk(this) && (_.E(L, "Unexpected command, player is in IDLE state so the media session ID is not valid yet"), f = !0));
                f ? (this.Ca(a, e, "INVALID_REQUEST", "INVALID_MEDIA_SESSION_ID"), d = !1) : (ne(L, yk, "MediaManager message received"), d = !0)
            }
            if (d) {
                d = b.requestId;
                e = null;
                switch (c) {
                    case "LOAD":
                        this.W = !1;
                        e = Jk(this,
                            a, b, !0);
                        break;
                    case "GET_STATUS":
                        _.I(L, "Dispatching MediaManager getStatus event");
                        b = new Bk("getstatus", b, a);
                        this.Zc && this.Zc(b);
                        Kk(this, b);
                        e = null;
                        break;
                    case "PLAY":
                        _.I(L, "Dispatching MediaManager play event");
                        b = new Bk("play", b, a);
                        this.Z && this.Z(b);
                        Kk(this, b);
                        e = null;
                        break;
                    case "PLAY_AGAIN":
                        _.I(L, "Dispatching MediaManager play again event");
                        b = new Bk("playagain", b, a);
                        this.Be && this.Be(b);
                        Kk(this, b);
                        e = null;
                        break;
                    case "SEEK":
                        void 0 === b.currentTime && void 0 === b.relativeTime ? (_.E(L, "currentTime or relativeTime is required"),
                            e = {
                                type: "INVALID_REQUEST",
                                reason: "INVALID_PARAMS"
                            }) : (_.I(L, "Dispatching MediaManager seek event"), b = new Bk("seek", b, a), this.$ && this.$(b), Kk(this, b), e = null);
                        break;
                    case "SET_PLAYBACK_RATE":
                        (e = b.playbackRate) || (e = b.relativePlaybackRate * this.B);
                        "number" !== typeof e || .5 > e || 2 < e ? (_.E(L, "Bad value for playback rate " + e), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        }) : (_.I(L, "Dispatching MediaManager playback rate event"), b = new Bk("setplaybackrate", b, a), this.sa && this.sa(b), Kk(this, b), e = null);
                        break;
                    case "STOP":
                        _.I(L,
                            "Dispatching MediaManager stop event");
                        b = new Bk("stop", b, a);
                        this.Ga && this.Ga(b);
                        Kk(this, b);
                        e = null;
                        break;
                    case "PAUSE":
                        _.I(L, "Dispatching MediaManager pause event");
                        b = new Bk("pause", b, a);
                        this.X && this.X(b);
                        Kk(this, b);
                        e = null;
                        break;
                    case "SKIP_AD":
                        _.I(L, "Dispatching MediaManager skip ad event");
                        e = new Bk("skipad", b, a);
                        this.wa ? this.wa(e) : this.Ca(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        Kk(this, e);
                        e = null;
                        break;
                    case "SET_VOLUME":
                        !b.volume || void 0 === b.volume.level && void 0 === b.volume.muted ? (_.E(L, "volume is invalid"),
                            e = {
                                type: "INVALID_REQUEST",
                                reason: "INVALID_PARAMS"
                            }) : void 0 != b.volume.level && 0 > b.volume.level || 1 < b.volume.level ? (_.E(L, "volume level is invalid"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        }) : (_.I(L, "Dispatching MediaManager setvolume event"), b = new Bk("setvolume", b, a), this.Ze && this.Ze(b), Kk(this, b), e = null);
                        break;
                    case "EDIT_TRACKS_INFO":
                        _.I(L, "Dispatching MediaManager editTracksInfo event");
                        pk(this.h.media.tracks, b.activeTrackIds) ? (e = new Bk("edittracksinfo", b, a), b.textTrackStyle && (this.h.media.textTrackStyle =
                            b.textTrackStyle), b.activeTrackIds && (this.h.activeTrackIds = b.activeTrackIds), this.Wc && this.Wc(e), Kk(this, e), e = null) : (_.E(L, "Invalid track info"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        });
                        break;
                    case "EDIT_AUDIO_TRACKS":
                        _.I(L, "Dispatching MediaManager editAudioTracks event");
                        b = new Bk("editaudiotracks", b, a);
                        this.$a && this.$a(b);
                        Kk(this, b);
                        e = null;
                        break;
                    case "QUEUE_LOAD":
                        this.W = !0;
                        _.I(L, "Dispatching MediaManager queueLoad event");
                        Jj(this.j, b) ? (b.items = Vk(b.items), b = new Bk("queueload", b, a), this.Pe &&
                            this.Pe(b), Kk(this, b), e = null) : e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        break;
                    case "QUEUE_INSERT":
                        this.W = !0;
                        _.I(L, "Dispatching MediaManager queueInsert event");
                        e = !1;
                        if (Rj(this.j))
                            if (b.items && 0 != b.items.length)
                                if (void 0 !== b.currentItemId && void 0 !== b.currentItemIndex) _.E(L, "Maximum one currentItem must be provided"), e = !0;
                                else if (void 0 !== b.currentItemIndex && ("number" !== typeof b.currentItemIndex || 0 > b.currentItemIndex || b.currentItemIndex >= b.items.length)) _.E(L, "Invalid currentItemIndex"), e = !0;
                        else if (void 0 !== b.currentItemId && ("number" !== typeof b.currentItemId || 0 > b.currentItemId)) _.E(L, "Invalid currentItemId"), e = !0;
                        else {
                            for (c = 0; c < b.items.length; c++)
                                if ("number" === typeof b.items[c].itemId) {
                                    _.E(L, "Item contains an itemId at index: " + c);
                                    e = !0;
                                    break
                                } else b.items[c].itemId = this.cj();
                            Zk(this, b) || (e = !0)
                        } else _.E(L, "No items to insert"), e = !0;
                        else _.E(L, "Queue does not exist"), e = !0;
                        e ? e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        } : (b.items = Vk(b.items), b = new Bk("queueinsert", b, a), this.Ge && this.Ge(b),
                            Kk(this, b), e = null);
                        break;
                    case "QUEUE_UPDATE":
                        e = $k(this, a, b);
                        break;
                    case "QUEUE_REMOVE":
                        _.I(L, "Dispatching MediaManager queueRemove event");
                        e = !1;
                        Rj(this.j) ? b.itemIds && 0 != b.itemIds.length ? Tk(b.itemIds) || (e = !0) : (_.E(L, "No itemIds to remove"), e = !0) : (_.E(L, "Queue does not exist"), e = !0);
                        e ? e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        } : (b.itemIds && (b.itemIds = Tj(this.j, b.itemIds)), b = new Bk("queueremove", b, a), this.Se && this.Se(b), Kk(this, b), e = null);
                        break;
                    case "QUEUE_REORDER":
                        _.I(L, "Dispatching MediaManager queueReorder event");
                        e = !1;
                        Rj(this.j) ? b.itemIds && 0 != b.itemIds.length ? Tk(b.itemIds) ? void 0 !== b.insertBefore && _.eb(b.itemIds, b.insertBefore) ? (_.E(L, "insertBefore can not be one of the reordered items"), e = !0) : Zk(this, b) || (e = !0) : e = !0 : (_.E(L, "No itemIds to reorder"), e = !0) : (_.E(L, "Queue does not exist"), e = !0);
                        e ? e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        } : (b.itemIds && (b.itemIds = Tj(this.j, b.itemIds)), b = new Bk("queuereorder", b, a), this.Ve && this.Ve(b), Kk(this, b), e = null);
                        break;
                    case "PRECACHE":
                        b = new Bk("precache", b, "__broadcast__");
                        this.Af && this.Af(b);
                        Kk(this, b);
                        break;
                    case "QUEUE_NEXT":
                        c = new dl;
                        c.jump = 1;
                        c.requestId = b.requestId;
                        $k(this, a, c);
                        break;
                    case "QUEUE_PREV":
                        c = new dl;
                        c.jump = -1;
                        c.requestId = b.requestId;
                        $k(this, a, c);
                        break;
                    case "QUEUE_GET_ITEM_RANGE":
                        b = new Bk("getitemsrange", b, a);
                        this.ai && this.ai(b);
                        Kk(this, b);
                        break;
                    case "QUEUE_GET_ITEMS":
                        b = new Bk("getitemsinfo", b, a);
                        this.ki && this.ki(b);
                        Kk(this, b);
                        break;
                    case "QUEUE_GET_ITEM_IDS":
                        b = new Bk("getqueueids", b, a);
                        this.mi && this.mi(b);
                        Kk(this, b);
                        break;
                    case "QUEUE_SHUFFLE":
                        b = new Bk("shuffle",
                            b, a);
                        this.ni && this.ni(b);
                        Kk(this, b);
                        break;
                    case "USER_ACTION":
                        c = new Bk("useraction", b, a);
                        this.Ah ? this.Ah(c) : this.Ca(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        Kk(this, c);
                        break;
                    case "STORE_SESSION":
                        c = new Bk("storesession", b, a);
                        this.xa ? this.xa(c) : this.Ca(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        Kk(this, c);
                        break;
                    case "RESUME_SESSION":
                        c = new Bk("resumesession", b, a);
                        this.ra ? this.ra(c) : this.Ca(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        Kk(this, c);
                        break;
                    default:
                        _.E(L, "Unexpected message type: " +
                            c), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_COMMAND"
                        }
                }
                rk(this, e, a, d)
            }
        }
    };
    _.h.broadcastStatus = function(a, b, c, d) {
        var e = this;
        if (this.l) {
            ne(L, yk, "Sending broadcast status message");
            var f = function(g) {
                null != g && (g.status && _.Ja(g.status[0]) && (e.vf = g.status[0].playerState), g.requestId = b || 0, e.A.send("*:*", g), wk(e), Dk(e, g))
            };
            a = uk(this, a, c, d);
            hk(a) ? a.then(f) : f(a)
        } else _.E(L, "Not sending broadcast status message, state is invalid")
    };
    _.h.oh = function(a) {
        ne(L, yk, "Setting IDLE reason: " + a);
        this.J = a
    };
    _.h.Ca = function(a, b, c, d, e, f, g) {
        _.I(L, "Sending error message to " + a);
        var k = {};
        k.requestId = b;
        k.type = c;
        d && (k.reason = d);
        e && (k.customData = e);
        f && (k.detailedErrorCode = f);
        void 0 !== g && (k.itemId = g);
        this.A.send(a, k)
    };
    _.h.cf = function(a, b, c, d, e) {
        var f = this;
        if (this.l) {
            ne(L, yk, "Sending status message to " + a);
            var g = function(k) {
                null != k && (k.requestId = b, f.A.send(a, k), wk(f))
            };
            c = uk(this, c, d, e);
            hk(c) ? c.then(g) : g(c)
        } else _.E(L, "State is invalid"), this.Ca(a, b, "INVALID_PLAYER_STATE", null, d)
    };
    _.h.Nn = function(a) {
        return a
    };
    _.h.load = function(a) {
        a.type = "LOAD";
        qk(this, this.U, a)
    };
    _.h.Yn = function(a) {
        a = a.data;
        if (a.media && (a.media.contentUrl || a.media.contentId)) {
            var b = void 0 !== a.autoplay ? a.autoplay : !0,
                c = a.media.contentUrl || a.media.contentId;
            a.media.tracks ? this.l.load(c, b, a.currentTime, {
                tracks: a.media.tracks,
                activeTrackIds: a.activeTrackIds,
                textTrackStyle: a.media.textTrackStyle
            }, void 0, a.playbackRate) : this.l.load(c, b, a.currentTime, void 0, void 0, a.playbackRate)
        }
    };
    _.h.zb = function(a) {
        if (a != this.l) {
            this.l && (this.l.unregisterErrorCallback(), this.l.unregisterEndedCallback(), this.l.unregisterLoadCallback());
            (this.Ta = a.getState ? !1 : !0) ? this.l = new vj(a): this.l = a;
            this.l.registerErrorCallback(this.wl.bind(this));
            this.l.registerEndedCallback(this.vl.bind(this));
            this.l.registerLoadCallback(this.xl.bind(this));
            var b = this.Ba;
            b.h && b.h.removeEventListener("resize", b.o);
            var c = null;
            a.tagName && "video" == a.tagName.toLowerCase() ? c = a : (a = document.getElementsByTagName("video"), 1 ==
                a.length && (c = a[0]));
            b.h = c;
            b.h && b.h.addEventListener("resize", b.o)
        }
    };
    _.h.ph = function(a) {
        this.j.ph(a)
    };
    _.h.xl = function() {
        if (this.o) {
            _.I(L, "Metadata loaded");
            if (this.h && this.h.media) {
                var a = this.l.getDurationSec(); - 1 != a && Infinity != a || this.h.media.streamType && "NONE" != this.h.media.streamType ? -1 == a || Infinity == a || this.h.media.streamType && "NONE" != this.h.media.streamType || (_.H(L, "Media streamType is initially set wrong, changed to buffered."), this.h.media.streamType = "BUFFERED") : (_.H(L, "Media streamType is initially set wrong, changed to live."), this.h.media.streamType = "LIVE");
                this.h.media.duration = a;
                this.j.Ub().media.duration =
                    a;
                Hk(this, this.h.media, !0)
            }
            this.F = !0;
            this.zf ? this.zf(this.o) : Ek(this)
        }
    };
    _.h.Zn = function(a) {
        this.Ta && a.message && void 0 != a.message.currentTime && a.message.currentTime != this.l.getCurrentTimeSec() && this.l.seek(a.message.currentTime);
        xk(this)
    };
    _.h.wl = function(a) {
        if (this.o) _.E(L, "Load metadata error: " + JSON.stringify(a, ["type", "reason", "customData", "detailedErrorCode"], 2)), this.yf ? this.yf(this.o, a) : Ek(this);
        else if (this.onError) this.onError(a)
    };
    _.h.Sn = function(a) {
        Pk(this, a)
    };
    _.h.Xn = function(a, b) {
        Pk(this, b)
    };
    _.h.vl = function() {
        this.xf && this.xf()
    };
    _.h.Rn = function(a, b) {
        if (Rj(this.j)) {
            var c = -1 != this.bf ? this.bf : void 0;
            this.bf = -1;
            Qk(this, "REPEAT_SINGLE" == this.j.o ? 0 : 1, !1, c, void 0, void 0, void 0, void 0 === a ? "FINISHED" : a, void 0 === b ? null : b)
        }
    };
    _.h.co = function(a, b) {
        Gk(this, a, !0, b)
    };
    _.h.Cp = function(a, b, c, d, e, f, g, k) {
        g = g || "INTERRUPTED";
        if (Rj(this.j) && "QUEUE_ENDED" != ak(this.j, a, !1)) {
            var l = ak(this.j, a, !0);
            _.I(L, "After " + a + " jump, transition is: " + l);
            (a = Xk(this, this.j.Ub(), void 0, f)) ? (this.h && (this.J = g, this.H = this.h, this.h = null, this.tf = !0, this.N = [], "QUEUE_SHUFFLED" == l && (e = !0)), b = this.broadcastStatus.bind(this, b, c, d, e), c = "", this.o && (a.requestId = this.o.message.requestId, c = this.o.senderId || c, this.o = null), Jk(this, c, a, !1, b, k)) : this.Ce && this.Ce(g, c)
        } else this.Ce && this.Ce(g, c)
    };
    _.h.Wn = function(a) {
        ne(L, yk, "onGetStatus");
        var b = a.data;
        ne(L, yk, "onGetStatus: " + JSON.stringify(b));
        var c = !0,
            d = !0;
        b.options && (b.options & 1 && (c = !1), b.options & 1 && (d = !1));
        this.cf(a.senderId, a.data.requestId, c, null, d)
    };
    _.h.bo = function(a) {
        ne(L, yk, "onPlay");
        this.l.play();
        this.broadcastStatus(!1, a.data.requestId)
    };
    _.h.ao = function(a) {
        var b = this;
        ne(L, yk, "onPlayAgain");
        this.h ? Promise.resolve(this.l.seek(0)).then(function() {
            return b.l.play()
        }).then(function() {
            return b.broadcastStatus(!1, a.data.requestId)
        }) : this.D && (this.D.type = "LOAD", this.D.autoplay = !0, qk(this, this.U, this.D))
    };
    _.h.jo = function(a) {
        a = a.data;
        ne(L, yk, "onSeek: " + JSON.stringify(a));
        var b = void 0 !== a.relativeTime ? this.l.getCurrentTimeSec() + a.relativeTime : a.currentTime;
        this.l.seek(b, a.resumeState);
        "PAUSED" != this.l.getState() && (this.F = !0);
        b = this.l.getDurationSec(); - 1 == b || Infinity == b || this.l.getCurrentTimeSec() < this.l.getDurationSec() ? this.broadcastStatus(!1, a.requestId) : this.bf = a.requestId
    };
    _.h.ko = function(a) {
        a = a.data;
        ne(L, yk, "onSetPlaybackRate: " + JSON.stringify(a));
        this.l.setPlaybackRate ? this.B = this.l.setPlaybackRate(Number(a.playbackRate ? a.playbackRate : this.B * a.relativePlaybackRate)) : _.H(L, "setPlaybackRate is not supported");
        this.broadcastStatus(!1, a.requestId)
    };
    _.h.getPlaybackRate = function() {
        return this.B
    };
    _.h.no = function(a) {
        Gk(this, "CANCELLED", !0, a.data.requestId)
    };
    _.h.$n = function(a) {
        this.l.pause();
        this.broadcastStatus(!1, a.data.requestId)
    };
    _.h.lo = function(a) {
        a = a.data;
        this.l.setVolume(a.volume);
        this.broadcastStatus(!1, a.requestId)
    };
    _.h.Qn = function(a) {
        var b = a.data,
            c;
        a: {
            var d = this.h.media.tracks;
            if (c = b.language) {
                if (d) {
                    d = _.q(d);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (e = e.value, "TEXT" == e.type && void 0 !== e.language && cast.receiver.ad(e.language, c)) {
                            c = !0;
                            break a
                        }
                }
                c = !1
            } else c = !0
        }
        if (c) {
            if (!b.activeTrackIds && !b.language && void 0 !== b.enableTextTracks)
                if (c = Sk(this, b)) b.activeTrackIds = c;
                else {
                    this.Ca(a.senderId, b.requestId, "INVALID_REQUEST", "INVALID_PARAMS");
                    return
                }
            a = {
                activeTrackIds: b.activeTrackIds,
                language: b.language,
                textTrackStyle: b.textTrackStyle
            };
            this.l.editTracksInfo && (this.h.activeTrackIds = this.l.editTracksInfo(a) || void 0);
            this.broadcastStatus(b.textTrackStyle ? !0 : !1, b.requestId)
        } else _.E(L, "Invalid track language"), this.Ca(a.senderId, b.requestId, "INVALID_REQUEST", "LANGUAGE_NOT_SUPPORTED")
    };
    _.h.Pn = function(a) {
        var b = a.data,
            c;
        a: {
            var d = this.h.media.tracks;
            if (c = b.language) {
                if (d) {
                    d = _.q(d);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (e = e.value, "AUDIO" == e.type && void 0 !== e.language && cast.receiver.ad(e.language, c)) {
                            c = !0;
                            break a
                        }
                }
                c = !1
            } else c = !0
        }
        c ? (this.l.Oc && (this.h.activeTrackIds = this.l.Oc(b)), this.broadcastStatus(!1, b.requestId)) : (_.E(L, "Invalid audio track language"), this.Ca(a.senderId, b.requestId, "INVALID_REQUEST", "LANGUAGE_NOT_SUPPORTED"))
    };
    _.h.fo = function(a) {
        var b = a.data,
            c = Xk(this, b.items ? b.items[b.startIndex || 0] : null, b.requestId, b.currentTime),
            d = new Cc;
        d.items = b.items;
        d.startIndex = b.startIndex || 0;
        d.startTime = b.currentTime;
        d.repeatMode = b.repeatMode || "REPEAT_OFF";
        c.queueData = d;
        c ? Jk(this, a.senderId, c, !0) : _.E(L, "Queue Load request is invalid")
    };
    _.h.eo = function(a) {
        a = a.data;
        _.I(L, "Queue insert data: " + JSON.stringify(a));
        var b = !1;
        void 0 !== a.currentItemId && (b = Xj(this.j, a.currentItemId));
        void 0 !== a.currentItemIndex && (b = !0);
        var c = this.j.Dg(a.items, a.insertBefore, a.currentItemIndex);
        al(this, "INSERT", c, a.insertBefore);
        b ? Qk(this, 0, !0, a.requestId, a.customData, !0, a.currentTime) : this.broadcastStatus(!0, a.requestId, a.customData, !0)
    };
    _.h.Tn = function(a) {
        var b = this,
            c = a.data;
        this.j.fetchItems(c.requestId, c.itemId, c.nextCount, c.prevCount).then(function(d) {
            Mk(b, d, a.senderId, c)
        }, function() {
            rk(b, {
                type: "INVALID_REQUEST",
                reason: "INVALID_COMMAND"
            }, a.senderId, c.requestId)
        })
    };
    _.h.Un = function(a) {
        var b = a.data,
            c = this.A,
            d = c.send;
        a = a.senderId;
        var e = this.j,
            f = b.itemIds,
            g = new Ic;
        g.requestId = b.requestId;
        g.items = [];
        if (e.h)
            for (b = _.q(f), f = b.next(); !f.done; f = b.next()) {
                f = f.value;
                for (var k = _.q(e.h), l = k.next(); !l.done; l = k.next())
                    if (l = l.value, l.itemId == f) {
                        g.items.push(l);
                        break
                    }
                _.H(Kj, "Unknown item id: " + f)
            }
        g.sequenceNumber = Mj(e, !1);
        d.call(c, a, g)
    };
    _.h.Vn = function(a) {
        this.A.send(a.senderId, Nj(this.j, a.data.requestId))
    };
    _.h.mo = function(a) {
        var b = this,
            c = a.data;
        this.j.shuffle().then(function() {
            b.broadcastStatus(!1, c.requestId, c.customData, !0)
        })
    };
    _.h.Ui = function(a) {
        var b = a.data;
        if (this.W)
            if (_.I(L, "Queue update data: " + JSON.stringify(b)), Zk(this, b)) {
                var c = a = !1;
                "number" === typeof b.currentItemId && (c = Xj(this.j, b.currentItemId));
                "number" === typeof b.jump && (c = !0, this.T && (a = !0));
                b.repeatMode && Sj(this.j, b.repeatMode);
                if (b.items && 0 < b.items.length) {
                    this.j.wh(b.items);
                    a = !0;
                    var d = "ITEMS_CHANGE";
                    var e = b.items.map(function(f) {
                        return f.itemId
                    })
                }
                void 0 !== b.shuffle && (b.shuffle ? this.j.shuffle() : this.j.Rd(), c = !0, d = "UPDATE", e = this.j.qc().map(function(f) {
                    return f.itemId
                }));
                d && e && al(this, d, e);
                c ? Qk(this, b.jump || 0, a, b.requestId, b.customData, a, b.currentTime) : this.broadcastStatus(a, b.requestId, b.customData, a)
            } else this.Ca(a.senderId, b.requestId, "INVALID_REQUEST", "INVALID_PARAMS");
        else d = a.senderId, b.repeatMode && !b.jump ? (Sj(this.j, b.repeatMode), _.I(L, "repeatMode set. The rest of QUEUE_UPDATE was ignored.")) : d == cast.receiver.vc.be && this.pa == this.Ui ? this.Ca(d, b.requestId, "INVALID_REQUEST", "INVALID_COMMAND") : (_.I(L, "QUEUE_UPDATE request ignored"), this.broadcastStatus(!1, b.requestId))
    };
    _.h.ho = function(a) {
        a = a.data;
        _.I(L, "Queue remove data: " + JSON.stringify(a));
        var b = !1;
        "number" === typeof a.currentItemId && (b = Xj(this.j, a.currentItemId));
        a.itemIds && 0 != a.itemIds.length ? (b = b || this.j.gh(a.itemIds), al(this, "REMOVE", a.itemIds), b ? Qk(this, 0, !1, a.requestId, a.customData, !0, a.currentTime) : this.broadcastStatus(!1, a.requestId, a.customData, !0)) : _.E(L, "No itemIds to remove")
    };
    _.h.io = function(a) {
        a = a.data;
        _.I(L, "Queue reorder data: " + JSON.stringify(a));
        var b = !1,
            c = !1;
        "number" === typeof a.currentItemId && (c = Xj(this.j, a.currentItemId));
        a.itemIds && 0 < a.itemIds.length && (Yj(this.j, a.itemIds, a.insertBefore), b = !0);
        var d = this.j.qc().map(function(e) {
            return e.itemId
        });
        al(this, "UPDATE", d, a.insertBefore, a.itemIds);
        c ? Qk(this, 0, !1, a.requestId, a.customData, b, a.currentTime) : this.broadcastStatus(!1, a.requestId, a.customData, b)
    };
    _.h.addEventListener = function(a, b) {
        _.Ed(this.zh, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        Od(this.zh, a, b)
    };
    _.h.dispatchEvent = function(a) {
        return Kk(this, a)
    };
    var L = _.D("cast.receiver.MediaManager");
    _.r(Bk, _.C);
    _.r(Wk, Yk);
    _.r(Ak, Wk);
    _.r(bl, Yk);
    _.r(cl, Yk);
    _.r(dl, Yk);
    _.r(el, Yk);
    var iB = _.D("cast.receiver.ui.ControlsImplementationHelper");
    var pl = _.D("cast.receiver.ui.ControlsMessageHelper");
    Ug(_.Tg.L(), cast.receiver.Eb.Qb, "JSON");
    nl.prototype.h = function(a) {
        if ("SHUTDOWN" === a.type) this.B.stop();
        else {
            if (!this.l) throw Error("Media channel is not set");
            if (!this.o && "LOAD" !== a.type) throw Error("Invalid Media Session Id");
            a.mediaSessionId = this.o;
            Dg(this.l, cast.receiver.media.eb, this.A, this.l.H(a))
        }
    };
    nl.prototype.H = function(a) {
        if (!this.j) throw Error("Command and control channel is not set");
        Dg(this.j, cast.receiver.Eb.Qb, this.A, this.j.H(a))
    };
    cast.receiver.C.Wk = function(a) {
        a.innerHTML = "<style>@import url(//fonts.googleapis.com/css?family=Google+Sans_old:400,500);html{--cast-controls-horizontal-padding:56px;--cast-controls-safe-area-height:calc(100vh - 192px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){html{--cast-controls-horizontal-padding:112px;--cast-controls-safe-area-height:calc(100vh - 240px)}}html[data-cast-extended-controls='true']{--cast-controls-safe-area-height:calc(100vh - 262px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){html[data-cast-extended-controls='true']{--cast-controls-safe-area-height:calc(100vh - 335px)}}body{overflow:hidden !important}</style>"
    };
    _.Sa(ql, _.A);
    _.h = ql.prototype;
    _.h.start = function() {
        this.stop();
        this.o = !1;
        var a = rl(this),
            b = sl(this);
        a && !b && this.j.mozRequestAnimationFrame ? (this.h = _.Ed(this.j, "MozBeforePaint", this.l), this.j.mozRequestAnimationFrame(null), this.o = !0) : this.h = a && b ? a.call(this.j, this.l) : this.j.setTimeout(ab(this.l), 20)
    };
    _.h.stop = function() {
        if (this.isActive()) {
            var a = rl(this),
                b = sl(this);
            a && !b && this.j.mozRequestAnimationFrame ? _.Pd(this.h) : a && b ? b.call(this.j, this.h) : this.j.clearTimeout(this.h)
        }
        this.h = null
    };
    _.h.isActive = function() {
        return null != this.h
    };
    _.h.yl = function() {
        this.o && this.h && _.Pd(this.h);
        this.h = null;
        this.B.call(this.A, _.Ra())
    };
    _.h.ea = function() {
        this.stop();
        ql.qb.ea.call(this)
    };
    _.Sa(tl, _.A);
    _.h = tl.prototype;
    _.h.nd = 0;
    _.h.ea = function() {
        tl.qb.ea.call(this);
        this.stop();
        delete this.h;
        delete this.j
    };
    _.h.start = function(a) {
        this.stop();
        this.nd = _.jf(this.l, void 0 !== a ? a : this.o)
    };
    _.h.stop = function() {
        this.isActive() && _.u.clearTimeout(this.nd);
        this.nd = 0
    };
    _.h.isActive = function() {
        return 0 != this.nd
    };
    _.h.zl = function() {
        this.nd = 0;
        this.h && this.h.call(this.j)
    };
    var ul = {},
        xl = null,
        vl = null;
    _.Sa(Bl, _.Sd);
    Bl.prototype.hb = function(a) {
        this.dispatchEvent(a)
    };
    _.Sa(Cl, Bl);
    _.h = Cl.prototype;
    _.h.play = function(a) {
        if (a || 0 == this.h) this.progress = 0, this.coords = this.j;
        else if (1 == this.h) return !1;
        wl(this);
        this.startTime = a = _.Ra(); - 1 == this.h && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.l = this.startTime;
        this.progress || this.hb("begin");
        this.hb("play"); - 1 == this.h && this.hb("resume");
        this.h = 1;
        var b = _.Ma(this);
        b in ul || (ul[b] = this);
        zl();
        Al(this, a);
        return !0
    };
    _.h.stop = function(a) {
        wl(this);
        this.h = 0;
        a && (this.progress = 1);
        Dl(this, this.progress);
        this.hb("stop");
        this.hb("end")
    };
    _.h.pause = function() {
        1 == this.h && (wl(this), this.h = -1, this.hb("pause"))
    };
    _.h.ea = function() {
        0 == this.h || this.stop(!1);
        this.hb("destroy");
        Cl.qb.ea.call(this)
    };
    _.h.hb = function(a) {
        this.dispatchEvent(new El(a, this))
    };
    _.Sa(El, _.C);
    Gl.prototype.clone = function() {
        return new Gl(this.h, this.D, this.l, this.A, this.o, this.B, this.j, this.G)
    };
    var Pl = am();
    _.r(Jl, _.Sd);
    _.r(Ml, _.C);
    _.r(Tl, _.C);
    _.r(Ql, _.C);
    _.r(Rl, _.C);
    var Lp = {
        SCROLL_LEFT: "SCROLL_LEFT",
        SCROLL_RIGHT: "SCROLL_RIGHT",
        Qs: "SCROLL_UP",
        Ps: "SCROLL_DOWN"
    };
    var jB = {},
        em = (jB.REPEAT_OFF = {
            state: "off",
            accessibilityText: cast.receiver.V.rm
        }, jB.REPEAT_ALL = {
            state: "all",
            accessibilityText: cast.receiver.V.qm
        }, jB.REPEAT_SINGLE = {
            state: "single",
            accessibilityText: cast.receiver.V.sm
        }, jB);
    _.r(dm, cast.receiver.C.Pb);
    _.r(fm, cast.receiver.C.Pb);
    cast.receiver.C.Tl = function(a) {
        a.innerHTML = '<style>.break-countdown{position:absolute;bottom:4.6875vw;left:5.72916667vw;z-index:-1;font-size:1.25vw;text-shadow:0 .10416667vw .20833333vw rgba(0,0,0,0.5);color:rgba(255,255,255,0.7)}.break-countdown .ad-label{border-radius:.15625vw;font-weight:bold;padding:.15625vw .3125vw;background-color:#fbbc04;text-shadow:none;color:#fff;margin-right:.41666667vw}.touch-layer.new-dpad-controls-overlay .break-countdown{bottom:3.54166667vw}.break-skip{color:#b8bdbe;background-color:#303134;outline:none;position:absolute;bottom:3.64583333vw;right:5.72916667vw;font-size:1.19791667vw;font-weight:500;padding:0 2.5vw;height:3.33333333vw;display:flex;align-items:center;justify-content:center;flex-direction:row;border-radius:1.66666667vw}.break-skip .break-skip-scrim,.break-skip .break-skip-highlight,.break-skip .skip-ad-icon{display:none}.break-skip.focused{color:#080808;background-color:#e8eaed}.break-skip.break-skip-btn-countdown{min-width:5.72916667vw;color:rgba(255,255,255,0.7);text-shadow:0 .10416667vw .20833333vw rgba(0,0,0,0.5);background-color:transparent}.touch-layer.new-dpad-controls-overlay .break-skip{bottom:2.5vw}.break-skip .skip-ad-text{-webkit-font-smoothing:antialiased}.loading-bar{--loading-bar-width:1000px;height:100%;overflow:hidden;position:relative;transform:translateZ(0);transition:opacity 250ms linear;width:1000px}.loading-bar .rect,.loading-bar .rect-inner{height:100%;position:absolute;width:1000px}.loading-bar .rect{transform-origin:top left}.loading-bar .rect-primary{transform:scaleX(0)}.loading-bar .rect-inner{background-color:#9aa0a6;display:inline-block}.loading-bar .rect-primary{animation:primary-indeterminate-translate 2s infinite linear}.loading-bar .rect-primary>.rect-inner{animation:primary-indeterminate-scale 2s infinite linear}.loading-bar .rect-auxiliary{animation:auxiliary-indeterminate-translate 2s infinite linear}.loading-bar .rect-auxiliary>.rect-inner{animation:auxiliary-indeterminate-scale 2s infinite linear}@keyframes primary-indeterminate-translate{0%{transform:translateX(-1451.66611px)}20%{animation-timing-function:cubic-bezier(.5, 0, .701732, .495819);transform:translateX(-1451.66611px)}59.15%{animation-timing-function:cubic-bezier(.302435, .381352, .55, .956352);transform:translateX(-614.95191px)}100%{transform:translateX(554.44446px)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.334731, .12482, .785844, 1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06, .11, .6, 1);transform:scaleX(.661479)}100%{transform:scaleX(.08)}}@keyframes auxiliary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15, 0, .515058, .409685);transform:translateX(-548.88891px)}25%{animation-timing-function:cubic-bezier(.31033, .284058, .8, .733712);transform:translateX(-172.36978px)}48.35%{animation-timing-function:cubic-bezier(.4, .627035, .6, .902026);transform:translateX(294.97274px)}100%{transform:translateX(1053.88891px)}}@keyframes auxiliary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.205028, .057051, .57661, .453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.152313, .196432, .648374, 1.004315);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(.257759, .003163, .211762, 1.38179);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}:host{bottom:0;color:#e8eaed;font-family:\'Google Sans\',\'Roboto\',Arial,sans-serif;left:0;position:fixed;right:0;top:0;z-index:1000000}.controls-layer{display:flex;position:relative;flex-direction:column;justify-content:flex-start;height:100%;will-change:transform}.controls-toggle{position:absolute;width:100%;height:100%;top:0;left:0}.accessibility-alert,.controls-toggle{opacity:0;position:absolute;left:-9999px}.controls{box-sizing:border-box;flex:none;display:flex;flex-direction:column;justify-content:flex-end;padding:0 5.625vw 3.38541667vw}.scrim{bottom:0;height:100vh;left:0;position:absolute;width:100vw;z-index:-1}.buffering-scrim{bottom:0;height:100vh;left:0;position:absolute;width:100vw;z-index:-1;visibility:hidden;background:linear-gradient(to bottom, transparent 0, rgba(14,14,15,0.3) 78.7%, #0e0e0f 100%)}goog-video-metadata{display:none}goog-audio-player-compatibility{display:none}.has-secondary-image-audio .title,.has-secondary-image-audio .subtitle{padding-right:320px;width:auto !important}.touch-layer{height:100%;touch-action:manipulation;user-select:none;width:100%}.touch-layer .playback-layer{width:100%;height:100%}.touch-layer .media-browse-scrim{display:none}.touch-layer goog-media-browse{display:none}.touch-layer .scrim{background:linear-gradient(to bottom, rgba(32,33,36,0.3) 0, rgba(14,14,15,0.6) 38.5%, #0e0e0f 60%)}.touch-layer.new-dpad-controls-overlay .scrim{background:linear-gradient(to bottom, rgba(14,14,15,0.3) 0, rgba(32,33,36,0.3) .01%, rgba(14,14,15,0.6) 50%, #0e0e0f 74%)}.touch-layer goog-video-metadata{align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;text-align:left;padding:6.35416667vw 5.72916667vw 1.45833333vw}.touch-layer.new-dpad-controls-overlay goog-video-metadata{padding-bottom:1.875vw}.touch-layer .logo{display:none}.touch-layer .top-right-video-overlay-image{display:none}.touch-layer .top-images-container{display:flex;flex-direction:row;width:100%}.touch-layer.video:not(.remote-controls) .top-right-video-overlay-image{max-width:280px;max-height:100px;display:block;margin-left:auto}.touch-layer .title{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;font-weight:500;overflow:hidden;word-break:break-word;width:auto;color:#f8f9fa;margin:0;font-size:3.75vw;line-height:4.375vw}.touch-layer.new-dpad-controls-overlay .title{color:#fff;font-size:2.1875vw;line-height:2.890625vw}.touch-layer.active .title{width:100%}.touch-layer .subtitle{font-weight:normal;margin-top:0;margin-bottom:.20833333vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:2.29166667vw;line-height:2.91666667vw}.touch-layer.new-dpad-controls-overlay .subtitle{color:#e8eaed;font-size:1.25vw;line-height:1.875vw;margin-bottom:.625vw}.touch-layer .subtitle-container{margin-top:auto;max-width:100%}.touch-layer.video:not(.remote-controls) goog-video-metadata,.touch-layer.photo:not(.remote-controls) goog-video-metadata,.touch-layer.audio:not(.default-player) goog-video-metadata,.touch-layer.video:not(.remote-controls) .controls,.touch-layer.photo:not(.remote-controls) .controls,.touch-layer.audio:not(.default-player) .controls{will-change:opacity,transform;opacity:0;transform:translateY(9.47916667vw);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).new-dpad-controls-overlay .controls,.touch-layer.photo:not(.remote-controls).new-dpad-controls-overlay .controls,.touch-layer.audio:not(.default-player).new-dpad-controls-overlay .controls{opacity:0;transform:translateY(6.25vw);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .time-numbers,.touch-layer.photo:not(.remote-controls) .time-numbers,.touch-layer.audio:not(.default-player) .time-numbers,.touch-layer.video:not(.remote-controls) .play-pause-indicator,.touch-layer.photo:not(.remote-controls) .play-pause-indicator,.touch-layer.audio:not(.default-player) .play-pause-indicator,.touch-layer.video:not(.remote-controls) goog-buttons-bar,.touch-layer.photo:not(.remote-controls) goog-buttons-bar,.touch-layer.audio:not(.default-player) goog-buttons-bar{visibility:hidden}.touch-layer.video:not(.remote-controls) .play-pause-indicator,.touch-layer.photo:not(.remote-controls) .play-pause-indicator,.touch-layer.audio:not(.default-player) .play-pause-indicator{display:none}.touch-layer.video:not(.remote-controls) .scrim,.touch-layer.photo:not(.remote-controls) .scrim,.touch-layer.audio:not(.default-player) .scrim{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active goog-video-metadata,.touch-layer.photo:not(.remote-controls).active goog-video-metadata,.touch-layer.audio:not(.default-player).active goog-video-metadata,.touch-layer.video:not(.remote-controls).active .controls,.touch-layer.photo:not(.remote-controls).active .controls,.touch-layer.audio:not(.default-player).active .controls{opacity:1;transform:translateY(0);transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .time-numbers,.touch-layer.photo:not(.remote-controls).active .time-numbers,.touch-layer.audio:not(.default-player).active .time-numbers,.touch-layer.video:not(.remote-controls).active .play-pause-indicator,.touch-layer.photo:not(.remote-controls).active .play-pause-indicator,.touch-layer.audio:not(.default-player).active .play-pause-indicator,.touch-layer.video:not(.remote-controls).active goog-buttons-bar,.touch-layer.photo:not(.remote-controls).active goog-buttons-bar,.touch-layer.audio:not(.default-player).active goog-buttons-bar{visibility:visible}.touch-layer.video:not(.remote-controls).active .play-pause-indicator:not(.hidden),.touch-layer.photo:not(.remote-controls).active .play-pause-indicator:not(.hidden),.touch-layer.audio:not(.default-player).active .play-pause-indicator:not(.hidden){display:inline-block}.touch-layer.video:not(.remote-controls).active .scrim,.touch-layer.photo:not(.remote-controls).active .scrim,.touch-layer.audio:not(.default-player).active .scrim{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).default-player.buffering .buffering-scrim{visibility:visible}.touch-layer.video:not(.remote-controls).default-player.buffering .buffering-scrim{visibility:visible}.touch-layer.video:not(.remote-controls).default-player.buffering .controls{opacity:1;visibility:visible}.touch-layer.audio.default-player .scrim,.touch-layer.remote-controls .scrim{display:none}.touch-layer.audio.default-player goog-video-metadata,.touch-layer.remote-controls goog-video-metadata,.touch-layer.audio.default-player goog-timeline,.touch-layer.remote-controls goog-timeline{will-change:transform;transform:translateY(36px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.default-player .time-numbers,.touch-layer.remote-controls .time-numbers,.touch-layer.audio.default-player .slot:not(.device-controller-slot),.touch-layer.remote-controls .slot:not(.device-controller-slot){opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio.default-player.active goog-video-metadata,.touch-layer.remote-controls.active goog-video-metadata,.touch-layer.audio.default-player.active goog-timeline,.touch-layer.remote-controls.active goog-timeline{transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.default-player.active .time-numbers,.touch-layer.remote-controls.active .time-numbers,.touch-layer.audio.default-player.active .slot:not(.device-controller-slot),.touch-layer.remote-controls.active .slot:not(.device-controller-slot){opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio .break-countdown,.touch-layer.remote-controls .break-countdown{display:none}.touch-layer.photo:not(.remote-controls) .playback-layer,.touch-layer.disabled .playback-layer{display:none !important}goog-buttons-bar{align-items:center;display:grid;grid-column-gap:3.90625vw;grid-template-columns:[dc] 5.208333333333334vw 5.208333333333334vw 1fr [pr1] 5.208333333333334vw [center] 5.208333333333334vw [pr2] 5.208333333333334vw 1fr [sec1] 5.208333333333334vw [sec2] 5.208333333333334vw;flex:none;justify-content:center;margin-top:.78125vw}.touch-layer.new-dpad-controls-overlay goog-buttons-bar{display:flex;justify-content:space-between}.btn{height:5.20833333vw;width:5.20833333vw;border-radius:2.60416667vw;display:flex;justify-content:center;align-items:center;outline:none}.btn.focused{background-color:#e8eaed}.touch-layer.new-dpad-controls-overlay goog-buttons-bar .btn{height:2.91666667vw;margin-left:.67708333vw;width:2.91666667vw;border-radius:50%}.btn-icon{height:3.125vw;width:3.125vw}.touch-layer.new-dpad-controls-overlay goog-buttons-bar .btn-icon{height:2.08333333vw;width:2.08333333vw}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.controls-buttons{align-items:center;display:flex;height:2.08333333vw}.controls-buttons .slot:empty{display:none}.controls-buttons.slot.center{display:none}.slot.center{grid-column:center}.slot.slot-primary-1{grid-column:pr1}.slot.slot-primary-2{grid-column:pr2}.slot.slot-secondary-1{grid-column:sec1}.slot.slot-secondary-2{grid-column:sec2}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-1{grid-column:sec2}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-2{display:none}.btn-play-pause[data-state=\'playing\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M14%2012h10v36H14zm22%200h10v36H36z%27/%3E%3C/svg%3E%0A")}.btn-play-pause[data-state=\'paused\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M20%2012.5v35L47.5%2030z%27/%3E%3C/svg%3E%0A")}.btn-play-pause.focused[data-state=\'playing\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M14%2012h10v36H14zm22%200h10v36H36z%27/%3E%3C/svg%3E%0A")}.btn-play-pause.focused[data-state=\'paused\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M20%2012.5v35L47.5%2030z%27/%3E%3C/svg%3E%0A")}.device-controller-slot{display:flex;grid-column:dc / span 3;align-items:center;width:auto}.device-controller-btn{display:flex;position:relative;justify-content:center;align-items:center;box-sizing:border-box;padding-right:16px;height:64px}.touch-layer.new-dpad-controls-overlay goog-buttons-bar .device-controller-btn{height:2.08333333vw}.device-controller-label{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden;font-size:19px;line-height:24px;margin:0 8px 0 7px;word-break:break-word}.touch-layer.new-dpad-controls-overlay goog-buttons-bar .device-controller-label{font-size:.83333333vw;line-height:auto}.device-controller-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A");width:26px;height:26px}.device-controller-icon[connected]{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M25.79%2C33H37a1%2C1%2C0%2C0%2C0%2C1-1V15a1%2C1%2C0%2C0%2C0-1-1H11a1%2C1%2C0%2C0%2C0-1%2C1v2.18a1%2C1%2C0%2C0%2C0%2C.8%2C1%2C19.55%2C19.55%2C0%2C0%2C1%2C14%2C14.07A1%2C1%2C0%2C0%2C0%2C25.79%2C33Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A")}.btn-next .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M15%2045l21.25-15L15%2015v30zm25-30v30h5V15h-5z%27/%3E%3C/svg%3E%0A")}.btn-next.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20d=%27M15%2045l21.25-15L15%2015v30zm25-30v30h5V15h-5z%27/%3E%3C/svg%3E%0A")}.btn-back .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M15%2015h5v30h-5zm8.75%2015L45%2045V15z%27/%3E%3C/svg%3E%0A")}.btn-back.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20d=%27M15%2015h5v30h-5zm8.75%2015L45%2045V15z%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-10.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-15.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-30.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23000%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23000%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-10.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-15.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-30.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23e8eaed%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'].focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'all\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%230b83e5%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'single\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%230b83e5%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4zm-4-2V9h-1l-2%201v1h1.5v4H13z%27/%3E%3C/svg%3E%0A")}.btn-shuffle .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23e8eaed%27%3E%3Cpath%20d=%27M10.59%209.17L5.41%204%204%205.41l5.17%205.17%201.42-1.41zM14.5%204l2.04%202.04L4%2018.59%205.41%2020%2017.96%207.46%2020%209.5V4h-5.5zm.33%209.41l-1.41%201.41%203.13%203.13L14.5%2020H20v-5.5l-2.04%202.04-3.13-3.13z%27/%3E%3C/svg%3E%0A")}.btn-shuffle.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%3E%3Cpath%20d=%27M10.59%209.17L5.41%204%204%205.41l5.17%205.17%201.42-1.41zM14.5%204l2.04%202.04L4%2018.59%205.41%2020%2017.96%207.46%2020%209.5V4h-5.5zm.33%209.41l-1.41%201.41%203.13%203.13L14.5%2020H20v-5.5l-2.04%202.04-3.13-3.13z%27/%3E%3C/svg%3E%0A")}.btn-shuffle[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%230b83e5%27%3E%3Cpath%20d=%27M10.59%209.17L5.41%204%204%205.41l5.17%205.17%201.42-1.41zM14.5%204l2.04%202.04L4%2018.59%205.41%2020%2017.96%207.46%2020%209.5V4h-5.5zm.33%209.41l-1.41%201.41%203.13%203.13L14.5%2020H20v-5.5l-2.04%202.04-3.13-3.13z%27/%3E%3C/svg%3E%0A")}.btn-captions .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M47.5%2010h-35c-2.775%200-5%202.25-5%205v30c0%202.75%202.225%205%205%205h35c2.75%200%205-2.25%205-5V15c0-2.75-2.25-5-5-5zm0%2035h-35V15h35v30zm-30-7.5H25c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25h3.75V25c0-1.375-1.125-2.5-2.5-2.5h-7.5A2.507%202.507%200%200015%2025v10c0%201.375%201.125%202.5%202.5%202.5zm17.5%200h7.5c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25H45V25c0-1.375-1.125-2.5-2.5-2.5H35a2.507%202.507%200%2000-2.5%202.5v10c0%201.375%201.125%202.5%202.5%202.5z%27/%3E%3C/svg%3E%0A")}.btn-captions.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M47.5%2010h-35c-2.775%200-5%202.25-5%205v30c0%202.75%202.225%205%205%205h35c2.75%200%205-2.25%205-5V15c0-2.75-2.25-5-5-5zm0%2035h-35V15h35v30zm-30-7.5H25c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25h3.75V25c0-1.375-1.125-2.5-2.5-2.5h-7.5A2.507%202.507%200%200015%2025v10c0%201.375%201.125%202.5%202.5%202.5zm17.5%200h7.5c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25H45V25c0-1.375-1.125-2.5-2.5-2.5H35a2.507%202.507%200%2000-2.5%202.5v10c0%201.375%201.125%202.5%202.5%202.5z%27/%3E%3C/svg%3E%0A")}.btn-captions[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%230b83e5%27%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27m%2047.5%2C10%20h%20-35%20c%20-2.775%2C0%20-5%2C2.25%20-5%2C5%20v%2030%20c%200%2C2.75%202.225%2C5%205%2C5%20h%2035%20c%202.75%2C0%205%2C-2.25%205%2C-5%20V%2015%20c%200%2C-2.75%20-2.25%2C-5%20-5%2C-5%20z%20m%20-20%2C17.5%20h%20-3.75%20v%20-1.25%20h%20-5%20v%207.5%20h%205%20V%2032.5%20H%2027.5%20V%2035%20c%200%2C1.375%20-1.125%2C2.5%20-2.5%2C2.5%20H%2017.5%20C%2016.125%2C37.5%2015%2C36.375%2015%2C35%20V%2025%20c%200%2C-1.375%201.125%2C-2.5%202.5%2C-2.5%20H%2025%20c%201.375%2C0%202.5%2C1.125%202.5%2C2.5%20z%20m%2013.75%2C0%20H%2045%20V%2025%20c%200%2C-1.375%20-1.125%2C-2.5%20-2.5%2C-2.5%20H%2035%20c%20-1.375%2C0%20-2.5%2C1.125%20-2.5%2C2.5%20v%2010%20c%200%2C1.375%201.125%2C2.5%202.5%2C2.5%20h%207.5%20c%201.375%2C0%202.5%2C-1.125%202.5%2C-2.5%20v%20-2.5%20h%20-3.75%20v%201.25%20h%20-5%20v%20-7.5%20h%205%20z%27/%3E%3C/svg%3E%0A")}.btn-like .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M8%2048h4.5c1.238%200%202.25-1.025%202.25-2.278v-20.5c0-1.253-1.012-2.278-2.25-2.278H8V48zm44.617-16.218A4.55%204.55%200%200053%2029.96V27.5c0-2.506-2.025-4.556-4.5-4.556H36.125l2.07-10.591a2.308%202.308%200%2000-.18-1.504%2010.932%2010.932%200%2000-1.98-2.778L35%207%2020.578%2021.6a4.598%204.598%200%2000-1.328%203.235v17.858c0%202.915%202.363%205.307%205.265%205.307h18.248a4.52%204.52%200%20003.87-2.21l5.984-14.008z%27/%3E%3C/svg%3E%0A")}.btn-like.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M8%2048h4.5c1.238%200%202.25-1.025%202.25-2.278v-20.5c0-1.253-1.012-2.278-2.25-2.278H8V48zm44.617-16.218A4.55%204.55%200%200053%2029.96V27.5c0-2.506-2.025-4.556-4.5-4.556H36.125l2.07-10.591a2.308%202.308%200%2000-.18-1.504%2010.932%2010.932%200%2000-1.98-2.778L35%207%2020.578%2021.6a4.598%204.598%200%2000-1.328%203.235v17.858c0%202.915%202.363%205.307%205.265%205.307h18.248a4.52%204.52%200%20003.87-2.21l5.984-14.008z%27/%3E%3C/svg%3E%0A")}.btn-like[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%230b83e5%27%20d=%27M8%2048h4.5c1.238%200%202.25-1.025%202.25-2.278v-20.5c0-1.253-1.012-2.278-2.25-2.278H8V48zm44.617-16.218A4.55%204.55%200%200053%2029.96V27.5c0-2.506-2.025-4.556-4.5-4.556H36.125l2.07-10.591a2.308%202.308%200%2000-.18-1.504%2010.932%2010.932%200%2000-1.98-2.778L35%207%2020.578%2021.6a4.598%204.598%200%2000-1.328%203.235v17.858c0%202.915%202.363%205.307%205.265%205.307h18.248a4.52%204.52%200%20003.87-2.21l5.984-14.008z%27/%3E%3C/svg%3E%0A")}.btn-dislike .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M53%2012h-4.5c-1.237%200-2.25%201.025-2.25%202.278v20.5c0%201.253%201.013%202.278%202.25%202.278H53V12zM8.383%2028.218A4.557%204.557%200%20008%2030.04v2.46c0%202.506%202.025%204.556%204.5%204.556h12.375l-2.07%2010.591a2.308%202.308%200%2000.18%201.504%2010.932%2010.932%200%20001.98%202.778L26%2053l14.422-14.6a4.598%204.598%200%20001.328-3.235V17.33c0-2.938-2.362-5.33-5.265-5.33H18.26c-1.598%200-3.06.843-3.87%202.21L8.382%2028.217z%27/%3E%3C/svg%3E%0A")}.btn-dislike.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M53%2012h-4.5c-1.237%200-2.25%201.025-2.25%202.278v20.5c0%201.253%201.013%202.278%202.25%202.278H53V12zM8.383%2028.218A4.557%204.557%200%20008%2030.04v2.46c0%202.506%202.025%204.556%204.5%204.556h12.375l-2.07%2010.591a2.308%202.308%200%2000.18%201.504%2010.932%2010.932%200%20001.98%202.778L26%2053l14.422-14.6a4.598%204.598%200%20001.328-3.235V17.33c0-2.938-2.362-5.33-5.265-5.33H18.26c-1.598%200-3.06.843-3.87%202.21L8.382%2028.217z%27/%3E%3C/svg%3E%0A")}.btn-dislike[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%230b83e5%27%20d=%27M53%2012h-4.5c-1.237%200-2.25%201.025-2.25%202.278v20.5c0%201.253%201.013%202.278%202.25%202.278H53V12zM8.383%2028.218A4.557%204.557%200%20008%2030.04v2.46c0%202.506%202.025%204.556%204.5%204.556h12.375l-2.07%2010.591a2.308%202.308%200%2000.18%201.504%2010.932%2010.932%200%20001.98%202.778L26%2053l14.422-14.6a4.598%204.598%200%20001.328-3.235V17.33c0-2.938-2.362-5.33-5.265-5.33H18.26c-1.598%200-3.06.843-3.87%202.21L8.382%2028.217z%27/%3E%3C/svg%3E%0A")}.btn-like-heart .btn-icon{content:url("data:image/svg+xml,%3Csvg%20height=%2760%27%20width=%2760%27%20fill=%27%23e8eaed%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M%2029.937%2C54.313%2025.374%2C50.125%20Q%2015.564%2C41.188%209.6885%2C34.687%203.813%2C28.186%203.813%2C20.623%203.813%2C14.251%208.1255%2C9.8755%2012.438%2C5.5%2018.813%2C5.5%20q%203.375%2C0%206.1875%2C1.281%202.8125%2C1.281%204.9365%2C3.282%20Q%2032.064%2C8.062%2034.9065%2C6.781%2037.749%2C5.5%2041.001%2C5.5%20q%206.498%2C0%2010.842%2C4.3755%204.344%2C4.3755%204.344%2C10.7475%200%2C7.563%20-5.937%2C14.064%20-5.937%2C6.501%20-15.813%2C15.438%20z%20M%2030%2C28.687%20q%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%20z%20m%20-0.063%2C16.374%20q%208.751%2C-7.998%2014.094%2C-13.593%205.343%2C-5.595%205.343%2C-10.845%200%2C-3.561%20-2.3745%2C-5.9055%20-2.3745%2C-2.3445%20-5.9985%2C-2.3445%20-2.688%2C0%20-5.0625%2C1.6575%20Q%2033.564%2C15.688%2032.814%2C18.061%20H%2027.186%20Q%2026.436%2C15.688%2024%2C14.0305%2021.564%2C12.373%2018.813%2C12.373%20q%20-3.501%2C0%20-5.844%2C2.3445%20-2.343%2C2.3445%20-2.343%2C5.9055%200%2C5.25%205.28%2C10.845%205.28%2C5.595%2014.031%2C13.593%20z%27/%3E%0A%3C/svg%3E%0A")}.btn-like-heart.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20height=%2760%27%20width=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M%2029.937%2C54.313%2025.374%2C50.125%20Q%2015.564%2C41.188%209.6885%2C34.687%203.813%2C28.186%203.813%2C20.623%203.813%2C14.251%208.1255%2C9.8755%2012.438%2C5.5%2018.813%2C5.5%20q%203.375%2C0%206.1875%2C1.281%202.8125%2C1.281%204.9365%2C3.282%20Q%2032.064%2C8.062%2034.9065%2C6.781%2037.749%2C5.5%2041.001%2C5.5%20q%206.498%2C0%2010.842%2C4.3755%204.344%2C4.3755%204.344%2C10.7475%200%2C7.563%20-5.937%2C14.064%20-5.937%2C6.501%20-15.813%2C15.438%20z%20M%2030%2C28.687%20q%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%20z%20m%20-0.063%2C16.374%20q%208.751%2C-7.998%2014.094%2C-13.593%205.343%2C-5.595%205.343%2C-10.845%200%2C-3.561%20-2.3745%2C-5.9055%20-2.3745%2C-2.3445%20-5.9985%2C-2.3445%20-2.688%2C0%20-5.0625%2C1.6575%20Q%2033.564%2C15.688%2032.814%2C18.061%20H%2027.186%20Q%2026.436%2C15.688%2024%2C14.0305%2021.564%2C12.373%2018.813%2C12.373%20q%20-3.501%2C0%20-5.844%2C2.3445%20-2.343%2C2.3445%20-2.343%2C5.9055%200%2C5.25%205.28%2C10.845%205.28%2C5.595%2014.031%2C13.593%20z%27/%3E%0A%3C/svg%3E%0A")}.btn-like-heart[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20height=%2760%27%20width=%2760%27%20fill=%27%230b83e5%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M%2029.937%2C54.313%2025.374%2C50.125%20Q%2015.564%2C41.188%209.6885%2C34.687%203.813%2C28.186%203.813%2C20.749%203.813%2C14.188%208.1255%2C9.844%2012.438%2C5.5%2018.687%2C5.5%20q%203.249%2C0%206.1245%2C1.1865%202.8755%2C1.1865%205.1255%2C3.3765%202.25%2C-2.19%205.157%2C-3.3765%20Q%2038.001%2C5.5%2041.124%2C5.5%20q%206.438%2C0%2010.7505%2C4.3755%204.3125%2C4.3755%204.3125%2C10.8735%200%2C7.437%20-5.937%2C13.938%20-5.937%2C6.501%20-15.813%2C15.438%20z%20m%200%2C-9.252%20q%20-8.751%2C-7.938%20-14.031%2C-13.563%20-5.28%2C-5.625%20-5.28%2C-10.935%200%2C-3.501%202.343%2C-5.8455%202.343%2C-2.3445%205.718%2C-2.3445%202.877%2C0%205.313%2C1.6575%202.436%2C1.6575%203.186%2C4.0305%20h%205.628%20q%200.75%2C-2.373%203.1245%2C-4.0305%202.3745%2C-1.6575%205.1855%2C-1.6575%203.501%2C0%205.8755%2C2.3445%202.3745%2C2.3445%202.3745%2C5.8455%200%2C5.31%20-5.343%2C10.935%20-5.343%2C5.625%20-14.094%2C13.563%20z%20m%200%2C0%20q%208.751%2C-7.998%2014.094%2C-13.593%205.343%2C-5.595%205.343%2C-10.905%200%2C-3.501%20-2.3745%2C-5.8455%20-2.3745%2C-2.3445%20-5.8755%2C-2.3445%20-2.811%2C0%20-5.1855%2C1.6575%20Q%2033.564%2C15.688%2032.814%2C18.061%20H%2027.186%20Q%2026.436%2C15.688%2024%2C14.0305%2021.564%2C12.373%2018.687%2C12.373%20q%20-3.375%2C0%20-5.718%2C2.3445%20-2.343%2C2.3445%20-2.343%2C5.8455%200%2C5.31%205.28%2C10.905%205.28%2C5.595%2014.031%2C13.593%20z%27/%3E%0A%3C/svg%3E%0A")}.btn-lyrics .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20fill=%27%23e8eaed%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M%2011.75%2C7.5%20C%209%2C7.5%206.774414%2C9.75%206.774414%2C12.5%20L%206.75%2C55%20l%2010%2C-7.5%20h%2017.5%20c%202.75%2C0%205%2C-2.25%205%2C-5%20v%20-5.65918%20c%20-1.975925%2C-0.706072%20-3.703937%2C-1.944623%20-5%2C-3.549805%20V%2042.5%20h%20-22.5%20v%20-30%20h%2022.5%20v%206.850586%20c%201.301208%2C-1.574254%203.027265%2C-2.799498%205%2C-3.515625%20V%2012.5%20c%200%2C-2.75%20-2.25%2C-5%20-5%2C-5%20z%27/%3E%0A%20%20%3Crect%20x=%2716.75%27%20y=%2717.5%27%20width=%2712.5%27%20height=%275%27/%3E%0A%20%20%3Crect%20x=%2716.75%27%20y=%2725%27%20width=%2710%27%20height=%275%27/%3E%0A%20%20%3Crect%20x=%2716.75%27%20y=%2732.5%27%20width=%2712.5%27%20height=%275%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27m%2044.25%2C5%20v%202.5%202.5%202.5%207.255859%20l%20-2.143555%2C0.307617%20C%2039.078893%2C20.496555%2036.75%2C23.074388%2036.75%2C26.25%20c%200%2C3.481403%202.768597%2C6.25%206.25%2C6.25%202.855475%2C0%205.225275%2C-1.88954%205.99121%2C-4.46289%20L%2049.25%2C27.16797%20V%2026.25%2010%20h%205%20V%205%20Z%27/%3E%0A%3C/svg%3E%0A")}.btn-lyrics.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M%2011.75%2C7.5%20C%209%2C7.5%206.774414%2C9.75%206.774414%2C12.5%20L%206.75%2C55%20l%2010%2C-7.5%20h%2017.5%20c%202.75%2C0%205%2C-2.25%205%2C-5%20v%20-5.65918%20c%20-1.975925%2C-0.706072%20-3.703937%2C-1.944623%20-5%2C-3.549805%20V%2042.5%20h%20-22.5%20v%20-30%20h%2022.5%20v%206.850586%20c%201.301208%2C-1.574254%203.027265%2C-2.799498%205%2C-3.515625%20V%2012.5%20c%200%2C-2.75%20-2.25%2C-5%20-5%2C-5%20z%27/%3E%0A%20%20%3Crect%20x=%2716.75%27%20y=%2717.5%27%20width=%2712.5%27%20height=%275%27/%3E%0A%20%20%3Crect%20x=%2716.75%27%20y=%2725%27%20width=%2710%27%20height=%275%27/%3E%0A%20%20%3Crect%20x=%2716.75%27%20y=%2732.5%27%20width=%2712.5%27%20height=%275%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27m%2044.25%2C5%20v%202.5%202.5%202.5%207.255859%20l%20-2.143555%2C0.307617%20C%2039.078893%2C20.496555%2036.75%2C23.074388%2036.75%2C26.25%20c%200%2C3.481403%202.768597%2C6.25%206.25%2C6.25%202.855475%2C0%205.225275%2C-1.88954%205.99121%2C-4.46289%20L%2049.25%2C27.16797%20V%2026.25%2010%20h%205%20V%205%20Z%27/%3E%0A%3C/svg%3E%0A")}.btn-lyrics[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20fill=%27%230b83e5%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M%2011.75%207.5%20C%209%207.5%206.7734375%209.75%206.7734375%2012.5%20L%206.75%2055%20L%2016.75%2047.5%20L%2034.25%2047.5%20C%2037%2047.5%2039.25%2045.25%2039.25%2042.5%20L%2039.25%2036.839844%20C%2034.895947%2035.283974%2031.75%2031.11873%2031.75%2026.25%20C%2031.75%2021.40429%2034.920577%2017.40757%2039.25%2015.835938%20L%2039.25%2012.5%20C%2039.25%209.75%2037%207.5%2034.25%207.5%20L%2011.75%207.5%20z%20M%2014.25%2017.5%20L%2029.25%2017.5%20L%2029.25%2022.5%20L%2014.25%2022.5%20L%2014.25%2017.5%20z%20M%2014.25%2025%20L%2024.25%2025%20L%2024.25%2030%20L%2014.25%2030%20L%2014.25%2025%20z%20M%2014.25%2032.5%20L%2026.75%2032.5%20L%2026.75%2037.5%20L%2014.25%2037.5%20L%2014.25%2032.5%20z%27/%3E%0A%20%20%3Cpath%20d=%27m%2044.25%2C5%20v%202.5%202.5%202.5%207.255859%20l%20-2.143555%2C0.307617%20C%2039.078893%2C20.496555%2036.75%2C23.074388%2036.75%2C26.25%20c%200%2C3.481403%202.768597%2C6.25%206.25%2C6.25%202.855475%2C0%205.225275%2C-1.88954%205.99121%2C-4.46289%20L%2049.25%2C27.16797%20V%2026.25%2010%20h%205%20V%205%20Z%27/%3E%0A%3C/svg%3E%0A")}goog-timeline{flex:none;outline:none}.touch-layer.new-dpad-controls-overlay goog-timeline{align-items:center;display:flex}.play-pause-indicator{align-self:flex-start;display:inline-block;padding-right:.546875vw;position:relative}.play-pause-indicator.hidden{display:none}.play-pause-indicator .btn-icon{height:1.875vw;width:1.875vw}.time-numbers{font-size:1.35416667vw;line-height:1.5625vw;height:2.34375vw}.time-numbers .left{float:left}.time-numbers .right{float:right}.time-numbers .right .time-indicator{margin-left:16px}.time-numbers:after{clear:both;content:\'\';display:table}.touch-layer.new-dpad-controls-overlay .time-numbers{font-size:1.25vw}.time-indicator,.live-label{display:inline-block;color:#e8eaed;font-weight:500;opacity:.6}.live-label.live-edge{opacity:1}.live-label.live-edge::before{display:inline-block;width:.41666667vw;height:.41666667vw;vertical-align:15%;margin-right:.52083333vw;background-color:#fa5847;content:\'\';border-radius:.41666667vw}.time-bar{width:100%}.scrubber-layer{height:1.66666667vw;position:relative;margin-bottom:.9375vw}.scrubber-layer.live .progress-fill,.scrubber-layer.live .scrubber::-webkit-slider-thumb{background-color:#fa5847}.progress-bar{background-color:rgba(255,255,255,0.1);border-radius:.20833333vw;height:.41666667vw;left:0;overflow:hidden;position:absolute;top:.625vw;width:100%}.progress-fill{background-color:rgba(255,255,255,0.6);height:100%;left:0;position:absolute;top:0;transform:scaleX(0);transform-origin:left center;width:100%;will-change:transform}.progress-fill.break{background-color:#fbbc04}.progress-seekable-range,.progress-seekable-played{height:100%;position:absolute;top:0}.progress-seekable-played{background-color:#fa5847}.progress-seekable-range{background-color:rgba(255,255,255,0.5)}.progress-breaks{height:100%;left:0;position:absolute;top:0;width:100%}.break-mark{position:absolute;height:100%;background-color:#fbbc04}.progress-loading{height:100%;right:0;position:absolute;top:0;transform-origin:right center;will-change:transform}input[type=range].scrubber{-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-focus-ring-color:rgba(255,255,255,0);-webkit-appearance:none;background-color:transparent;height:1.66666667vw;left:0;margin:0;outline:none;position:absolute;top:0;width:100%;will-change:transform}input[type=range].scrubber::-webkit-slider-thumb{visibility:hidden;-webkit-appearance:none;background:#d8d8d8;border-radius:.83333333vw;height:1.66666667vw;width:1.66666667vw;cursor:pointer}input[type=range].scrubber::-webkit-slider-runnable-track{background:transparent;cursor:pointer;height:1.66666667vw;width:100%}.touch-layer.new-dpad-controls-overlay input[type=range].scrubber::-webkit-slider-runnable-track{height:1.71875vw}input[type=range].scrubber[disabled]::-webkit-slider-thumb{display:none}goog-timeline.focused .progress-bar{border-radius:.3125vw;height:.625vw;top:.52083333vw}goog-timeline.focused input[type=range].scrubber::-webkit-slider-thumb{visibility:visible}</style><div class=playback-layer><audio-player-compatibility-placeholder></audio-player-compatibility-placeholder><div class=scrim></div><div class=buffering-scrim></div><div class=controls-layer id=controls-layer><div class=controls-toggle id=controls-toggle role=button></div><goog-video-metadata></goog-video-metadata><div class=controls id=controls><goog-timeline></goog-timeline><goog-buttons-bar></goog-buttons-bar></div></div><goog-break-ui></goog-break-ui><div aria-live=assertive class=accessibility-alert id=alert-show-controls style="display: none;"></div><div aria-live=assertive class=accessibility-alert id=alert-hide-controls style="display: none;"></div></div><div class=media-browse-scrim></div><goog-media-browse></goog-media-browse>'
    };
    cast.receiver.C.ln = function(a) {
        uc(a, _.qc(_.Fb(_.Gb('<play-pause-placeholder></play-pause-placeholder><div class=time-bar><div class=scrubber-layer id=scrubber-layer><div class=progress-bar><div class=progress-fill id=progress-fill></div><div class=progress-seekable-range id=progress-seekable-range></div><div class=progress-seekable-played id=progress-seekable-played></div><div class="progress-loading loading-bar" id=progress-loading><div class="rect rect-primary"><span class=rect-inner></span></div><div class="rect rect-auxiliary"><span class=rect-inner></span></div></div><div class=progress-breaks id=progress-breaks></div></div><input class=scrubber id=scrubber max=0 min=0 step=any type=range></div><div class=time-numbers><div aria-hidden=true class="time-indicator left" id=current-time></div><div class=right><div class=live-label id=live-label style="display: none"></div><div aria-hidden=true class=time-indicator id=total-time></div></div></div></div>')),
            null))
    };
    cast.receiver.C.mn = function(a) {
        a.innerHTML = '<play-pause-placeholder></play-pause-placeholder><div class=scrubber-layer id=scrubber-layer><div class=progress-bar><div class=progress-fill id=progress-fill></div><div class=progress-seekable-range id=progress-seekable-range></div><div class=progress-seekable-played id=progress-seekable-played></div><div class="progress-loading loading-bar" id=progress-loading><div class="rect rect-primary"><span class=rect-inner></span></div><div class="rect rect-auxiliary"><span class=rect-inner></span></div></div><div class=progress-breaks id=progress-breaks></div></div><input class=scrubber id=scrubber max=0 min=0 step=any type=range></div><div class=time-numbers><div aria-hidden=true class="time-indicator left" id=current-time></div><div class=right><div class=live-label id=live-label style="display: none"></div><div aria-hidden=true class=time-indicator id=total-time></div></div></div>'
    };
    _.r(hm, _.A);
    hm.prototype.o = function(a) {
        this.j = arguments;
        this.h || this.A ? this.l = !0 : im(this)
    };
    hm.prototype.stop = function() {
        this.h && (_.u.clearTimeout(this.h), this.h = null, this.l = !1, this.j = null)
    };
    hm.prototype.pause = function() {
        this.A++
    };
    hm.prototype.ea = function() {
        _.A.prototype.ea.call(this);
        this.stop()
    };
    _.r(om, $c);
    om.prototype.Sj = function(a) {
        K(this, a)
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-timeline", om);
    cast.receiver.C.Ws = om;
    var Bm = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Enter"],
        kB = _.D("cast.receiver.ui.KeyboardLayerController");
    _.h = zm.prototype;
    _.h.Mc = function() {
        var a = this;
        this.H || (setTimeout(function() {
            a.H = !1;
            if (a.F) a.h.focus(a.j), a.o.j = null;
            else {
                var b = a.A;
                b ? a.h.isFocused(a.o) || a.h.isFocused(a.B) || a.h.isFocused(a.D) ? a.M !== b && vm(a) : vm(a) : wm(a);
                a.M = b
            }
        }, 0), this.H = !0)
    };
    _.h.Cf = function(a) {
        this.F !== a && _.I(kB, "<touch-controls> element is " + (a ? "disabled" : "enabled"));
        if (this.F = a) this.G = !1;
        this.Mc();
        this.j.classList.toggle("disabled", a);
        Yd(this.l, a)
    };
    _.h.nh = function(a) {
        this.j.classList.toggle("buffering", a)
    };
    _.h.Qh = function() {
        var a = this.l;
        a.h = !0;
        Vd(a);
        this.G && (this.G = !1, $d(this.l))
    };
    _.h.Ph = function() {
        var a = this.l;
        a.h = !1;
        Vd(a);
        this.G || ym(this);
        this.G = !0;
        $d(this.l)
    };
    _.h.Rh = function(a) {
        var b = this.l;
        b.A = a;
        Vd(b);
        a && ym(this)
    };
    _.h.Oh = function() {};
    _.h.Df = function() {};
    _.h.Nh = function() {};
    _.h.Mh = function() {};
    /*

     Copyright 2019 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    _.Cm = {};
    _.r(_.Fm, _.Em);
    _.Fm.prototype.toString = function() {
        return this.h.toString()
    };
    _.r(Im, Hm);
    Im.prototype.toString = function() {
        return this.h
    };
    var lB = [Om("data"), Om("http"), Om("https"), Om("mailto"), Om("ftp"), new Nm(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    /*

     Copyright 2018 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    var mB = {
            CONSTANT: {
                xc: function(a) {
                    return a instanceof Eb
                },
                Dc: _.Fb
            },
            JAVASCRIPT: {
                xc: function(a) {
                    return a instanceof Ib || !1
                },
                Dc: function(a) {
                    a instanceof Ib && a.constructor === Ib ? a = a.h : (_.Ya("expected object of type SafeScript, got '" + a + "' of type " + Ha(a)), a = "type_error:SafeScript");
                    return a
                }
            },
            HTML: {
                xc: function(a) {
                    return a instanceof gc || !1
                },
                Dc: function(a) {
                    return _.hc(a)
                }
            },
            RESOURCE_URL: {
                xc: function(a) {
                    return a instanceof Kb || a instanceof _.Em
                },
                Dc: _.Jm
            },
            STRING: {
                xc: function(a) {
                    return a instanceof Object
                },
                Dc: Pm
            },
            STYLE: {
                xc: function(a) {
                    return a instanceof bc || !1
                },
                Dc: function(a) {
                    a instanceof bc && a.constructor === bc ? a = a.h : (_.Ya("expected object of type SafeStyle, got '" + a + "' of type " + Ha(a)), a = "type_error:SafeStyle");
                    return a
                }
            },
            URL: {
                xc: function(a) {
                    return a instanceof _.Zb || a instanceof Hm
                },
                Dc: Km
            }
        },
        nB = {
            CONSTANT: Qm,
            JAVASCRIPT: Qm,
            HTML: function(a) {
                return _.hc(_.rc(a))
            },
            RESOURCE_URL: Qm,
            STRING: String,
            STYLE: Qm,
            URL: function(a, b) {
                a: {
                    var c = void 0 === c ? lB : c;
                    for (var d = 0; d < c.length; ++d) {
                        var e = c[d];
                        if (e instanceof Nm &&
                            e.isValid(a)) {
                            a = new Im(a, _.Cm);
                            break a
                        }
                    }
                    a = void 0
                }
                return void 0 === a ? b : a.toString()
            }
        };
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    var oB = _.D("resin");
    var Sm = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-controls": 10,
            "aria-current": 1,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-labelledby": 10,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-owns": 10,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            autoplay: 1,
            bgcolor: 1,
            border: 1,
            cellpadding: 1,
            cellspacing: 1,
            checked: 1,
            cite: 3,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            controls: 1,
            datetime: 1,
            dir: 8,
            disabled: 1,
            download: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loading: 8,
            loop: 1,
            max: 1,
            maxlength: 1,
            media: 1,
            min: 1,
            minlength: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            nonce: 1,
            open: 1,
            placeholder: 1,
            poster: 3,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            slot: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            srcset: 11,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            type: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        Rm = {
            a: {
                href: [{
                    da: 3
                }]
            },
            area: {
                href: [{
                    da: 3
                }]
            },
            audio: {
                src: [{
                    da: 3
                }]
            },
            button: {
                formaction: [{
                    da: 3
                }],
                formmethod: [{
                    da: 1
                }]
            },
            form: {
                action: [{
                    da: 3
                }],
                method: [{
                    da: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    da: 2
                }]
            },
            img: {
                src: [{
                    da: 3
                }]
            },
            input: {
                accept: [{
                    da: 1
                }],
                formaction: [{
                    da: 3
                }],
                formmethod: [{
                    da: 1
                }],
                pattern: [{
                    da: 1
                }],
                readonly: [{
                    da: 1
                }],
                src: [{
                    da: 3
                }]
            },
            link: {
                href: [{
                    da: 3,
                    Fa: "rel",
                    Ha: "alternate"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "author"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "bookmark"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "canonical"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "cite"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "help"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "icon"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "license"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "next"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "prefetch"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "dns-prefetch"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "prerender"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "preconnect"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "preload"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "prev"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "search"
                }, {
                    da: 3,
                    Fa: "rel",
                    Ha: "subresource"
                }]
            },
            script: {
                defer: [{
                    da: 1
                }]
            },
            source: {
                src: [{
                    da: 3
                }]
            },
            textarea: {
                readonly: [{
                    da: 1
                }]
            },
            video: {
                src: [{
                    da: 3
                }]
            }
        },
        qn = {
            a: 1,
            abbr: 1,
            address: 1,
            applet: 4,
            area: 5,
            article: 1,
            aside: 1,
            audio: 1,
            b: 1,
            base: 4,
            bdi: 1,
            bdo: 1,
            blockquote: 1,
            body: 1,
            br: 5,
            button: 1,
            canvas: 1,
            caption: 1,
            center: 1,
            cite: 1,
            code: 1,
            col: 5,
            colgroup: 1,
            command: 1,
            data: 1,
            datalist: 1,
            dd: 1,
            del: 1,
            details: 1,
            dfn: 1,
            dialog: 1,
            div: 1,
            dl: 1,
            dt: 1,
            em: 1,
            embed: 4,
            fieldset: 1,
            figcaption: 1,
            figure: 1,
            font: 1,
            footer: 1,
            form: 1,
            frame: 1,
            frameset: 1,
            h1: 1,
            h2: 1,
            h3: 1,
            h4: 1,
            h5: 1,
            h6: 1,
            head: 1,
            header: 1,
            hr: 5,
            html: 1,
            i: 1,
            iframe: 1,
            img: 5,
            input: 5,
            ins: 1,
            kbd: 1,
            label: 1,
            legend: 1,
            lh: 1,
            li: 1,
            link: 5,
            main: 1,
            map: 1,
            mark: 1,
            math: 4,
            menu: 1,
            meta: 4,
            meter: 1,
            nav: 1,
            noscript: 1,
            object: 4,
            ol: 1,
            optgroup: 1,
            option: 1,
            output: 1,
            p: 1,
            param: 5,
            picture: 1,
            pre: 1,
            progress: 1,
            q: 1,
            rb: 1,
            rp: 1,
            rt: 1,
            rtc: 1,
            ruby: 1,
            s: 1,
            samp: 1,
            script: 3,
            section: 1,
            select: 1,
            slot: 1,
            small: 1,
            source: 5,
            span: 1,
            strong: 1,
            style: 2,
            sub: 1,
            summary: 1,
            sup: 1,
            svg: 4,
            table: 1,
            tbody: 1,
            td: 1,
            template: 4,
            textarea: 6,
            tfoot: 1,
            th: 1,
            thead: 1,
            time: 1,
            title: 6,
            tr: 1,
            track: 5,
            u: 1,
            ul: 1,
            "var": 1,
            video: 1,
            wbr: 5
        },
        Cn = [{
            auto: !0,
            ltr: !0,
            rtl: !0
        }, {
            async: !0
        }, {
            eager: !0,
            lazy: !0
        }, {
            _self: !0,
            _blank: !0
        }],
        Bn = {
            "*": {
                async: 1,
                dir: 0,
                loading: 2,
                target: 3
            }
        };
    var an = "aLink accessKey allowFullscreen bgColor cellPadding cellSpacing codeBase codeType contentEditable crossOrigin dateTime dirName formAction formEnctype formMethod formNoValidate formTarget frameBorder innerHTML innerText inputMode isMap longDesc marginHeight marginWidth maxLength mediaGroup minLength noHref noResize noShade noValidate noWrap nodeValue outerHTML outerText readOnly tabIndex textContent trueSpeed useMap vAlign vLink valueAsDate valueAsNumber valueType".split(" "),
        $m = {
            accept_charset: "acceptCharset",
            "char": "ch",
            charoff: "chOff",
            checked: "defaultChecked",
            "class": "className",
            "for": "htmlFor",
            http_equiv: "httpEquiv",
            muted: "defaultMuted",
            selected: "defaultSelected",
            value: "defaultValue"
        },
        Zm = null,
        Um = null;
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause

    */
    var bn = {},
        cn = RegExp("^(?!(?:annotation-xml|color-profile|font-face|font-face(?:-(?:src|uri|format|name))?|missing-glyph)$)[a-z][a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*-[\\-a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*$");
    /*

     Copyright 2020 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    var rn = {
            text: 1
        },
        nn = {
            audio: {
                currentTime: 1,
                srcObject: 1
            },
            video: {
                currentTime: 1,
                srcObject: 1
            }
        };
    var Dn = /(?!,)([^\t\n\f\r ]+)(?:[\t\n\f\r ]+([.0-9+\-]+[a-z]?))?/gi,
        sn = /[\t\n\f\r ]+/,
        un = /[\t\n\f\r ,]+/g,
        En = {},
        pB = function() {
            var a = function() {
                    var d = {
                        createHTML: function() {
                            return "zClosurez"
                        },
                        createScript: function() {
                            return " /*zClosurez*/ "
                        },
                        createScriptURL: function() {
                            return "about:invalid#zClosurez"
                        }
                    };
                    return "undefined" !== typeof trustedTypes ? trustedTypes.createPolicy("polymer_resin", d) : d
                }(),
                b = a.createHTML(""),
                c = a.createScript("");
            a = a.createScriptURL("");
            return {
                bl: b,
                al: c,
                cl: a
            }
        }(),
        zn = pB.bl,
        An = pB.al,
        yn =
        pB.cl;
    var qB = function(a) {
        function b(m) {
            var n = m.localName;
            if (!m.getAttribute("is") && 2 === gn(n, m.constructor)) return l;
            (m = k[n]) || (m = k[n] = document.createElement(n));
            return m
        }
        var c = a.reportHandler || void 0,
            d = a.safeTypesBridge || xn,
            e = /^$/;
        if (a = a.allowedIdentifierPrefixes) {
            a = _.q(a);
            for (var f = a.next(); !f.done; f = a.next()) e = new RegExp(e.source + "|^" + String(f.value).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"))
        }
        void 0 === c && "undefined" !== typeof console && (c = wn);
        c && c(!1, "initResin", null);
        var g =
            Fn(e, d, c),
            k = {},
            l = document.createElement("polyresinuncustomized");
        return function(m, n, t) {
            var v = m.nodeType;
            if (v !== Node.ELEMENT_NODE) {
                if (v === Node.TEXT_NODE) {
                    n = m.parentElement;
                    t = !n;
                    if (n && n.nodeType === Node.ELEMENT_NODE) {
                        v = n.localName;
                        var x = gn(v, n.constructor);
                        switch (x) {
                            case 0:
                            case 1:
                                n = pn(v, n);
                                t = 1 === n || 6 === n;
                                break;
                            case 3:
                            case 2:
                                t = !0;
                                break;
                            default:
                                Lm(x, "got an unknown element classification")
                        }
                    }
                    if (t) return function(F) {
                        return "" + d(F, "STRING", F)
                    }
                }
                return function(F) {
                    if (!F && F !== document.all) return F;
                    c && c(!0, "Failed to sanitize " +
                        (m.parentElement && m.parentElement.nodeName) + " #text node to value " + F, m.parentElement);
                    return zn
                }
            }
            var B = m.localName;
            v = b(m);
            var G = null;
            switch (t) {
                case "attribute":
                    if (Xm(n) in v) break;
                    return function(F) {
                        return F
                    };
                case "property":
                    if (n in v) {
                        G = on(v, n);
                        break
                    }
                    if ((x = Ym(n)) && x in v) break;
                    return function(F) {
                        return F
                    };
                default:
                    Lm(t, "got an unknown resin type, expected either 'property' or 'attribute'")
            }
            var W = "attribute" === t ? n.toLowerCase() : Wm(n);
            G || (G = Tm(B, W, function(F) {
                var ba = m.getAttribute(F);
                return !ba || /[\[\{]/.test(F) ?
                    null : ba
            }));
            return function(F) {
                var ba = En,
                    mc = null;
                if (!F && F !== document.all) return F;
                if (null != G) {
                    var wb = g[G],
                        Mb = wb.xb;
                    mc = wb.wb;
                    Mb && (ba = d(F, Mb, En));
                    ba === En && (wb.jb ? (ba = String(d(F, "STRING", F)), ba = wb.jb(B, W, ba)) : wb.ib && (ba = wb.ib(B, W, F, m)), ba === mc && (ba = En))
                }
                ba === En && (ba = mc || zn, c && (F = void 0 !== F.nb ? F.nb() : F, c(!0, "Failed to sanitize attribute of <" + B + ">: <" + B + " " + W + '="' + F + '">', m)));
                return ba
            }
        }
    }({
        allowedIdentifierPrefixes: [""],
        reportHandler: function(a, b) {
            a && _.H(oB, b)
        },
        safeTypesBridge: function(a, b, c) {
            var d = mB[b];
            return d.xc(a) && (d = d.Dc(a, c), d !== c) ? d : (0, nB[b])(String(Pm(a)), c)
        }
    });
    /*

     Copyright 2021 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    var rB, sB, Hn = new Set,
        Gn = new Map;
    null !== (rB = (sB = window).litHtmlPolyfillSupportDevMode) && void 0 !== rB ? rB : sB.litHtmlPolyfillSupportDevMode = In;
    var tB = "";
    if (window.Symbol) {
        var uB = Symbol();
        "symbol" !== typeof uB && (tB = Object.keys(uB)[0])
    }
    var vB = "" !== tB,
        Ln = vB ? function(a) {
            return null != a && void 0 !== a[tB]
        } : function() {
            return !1
        };
    if (vB && !window.Symbol.for) {
        var wB = new Map;
        window.Symbol.for = function(a) {
            wB.has(a) || wB.set(a, Symbol(a));
            return wB.get(a)
        }
    };
    var xB, yB, zB, AB, BB, CB, co;
    null !== (xB = (BB = window).litIssuedWarnings) && void 0 !== xB ? xB : BB.litIssuedWarnings = new Set;
    co = function(a, b) {
        b += a ? " See https://lit.dev/msg/" + a + " for more information." : "";
        window.litIssuedWarnings.has(b) || (console.warn(b), window.litIssuedWarnings.add(b))
    };
    co("dev-mode", "Lit is in dev mode. Not recommended for production!");
    var DB = (null === (yB = window.ShadyDOM) || void 0 === yB ? 0 : yB.inUse) && !0 === (null === (zB = window.ShadyDOM) || void 0 === zB ? void 0 : zB.noPatch) ? window.ShadyDOM.wrap : function(a) {
            return a
        },
        io = window.trustedTypes,
        $n = io ? io.createPolicy("lit-html", {
            createHTML: function(a) {
                return a
            }
        }) : void 0,
        Zn = "lit$" + String(Math.random()).slice(9) + "$",
        jo = "?" + Zn,
        Yn = "<" + jo + ">",
        Pn = document,
        EB = Array.isArray,
        Rn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        Sn = /--\x3e/g,
        Tn = />/g,
        Vn = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
            "g"),
        Xn = /'/g,
        Wn = /"/g,
        Un = /^(?:script|style|textarea)$/i,
        ko = Symbol.for("lit-noChange"),
        no = Symbol.for("lit-nothing"),
        FB = new WeakMap,
        bo = Pn.createTreeWalker(Pn, 129, null, !1);
    ao.createElement = function(a) {
        var b = Pn.createElement("template");
        b.innerHTML = a;
        return b
    };
    mo.prototype.l = function(a) {
        var b, c = this.Nf,
            d = c.Pc.content;
        c = c.parts;
        var e = (null !== (b = null === a || void 0 === a ? void 0 : a.gt) && void 0 !== b ? b : Pn).importNode(d, !0);
        bo.currentNode = e;
        d = bo.nextNode();
        for (var f = 0, g = 0, k = c[0]; void 0 !== k;) {
            if (f === k.index) {
                var l = void 0;
                2 === k.type ? l = new On(d, d.nextSibling, this, a) : 1 === k.type ? l = new k.Pi(d, k.name, k.strings, this, a) : 6 === k.type && (l = new oo(d, this, a));
                this.h.push(l);
                k = c[++g]
            }
            f !== (null === k || void 0 === k ? void 0 : k.index) && (d = bo.nextNode(), f++)
        }
        return e
    };
    mo.prototype.j = function(a) {
        for (var b = 0, c = _.q(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, void 0 !== d && (void 0 !== d.strings ? (d.Db(a, d, b), b += d.strings.length - 2) : d.Db(a[b])), b++
    };
    fa.Object.defineProperties(mo.prototype, {
        parentNode: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.La.parentNode
            }
        },
        fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.La.fb
            }
        }
    });
    _.h = On.prototype;
    _.h.Db = function(a, b) {
        if (null === this.parentNode) throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");
        a = lo(this, a, void 0 === b ? this : b);
        Mn(a) ? a === no || null == a || "" === a ? (this.ia !== no && this.wd(), this.ia = no) : a !== this.ia && a !== ko &&
            this.yi(a) : void 0 !== a._$litType$ ? this.Bn(a) : void 0 !== a.nodeType ? this.Of(a) : EB(a) || "function" === typeof(null === a || void 0 === a ? void 0 : a[Symbol.iterator]) ? this.An(a) : this.yi(a)
    };
    _.h.Qf = function(a, b) {
        b = void 0 === b ? this.Rb : b;
        return DB(DB(this.gb).parentNode).insertBefore(a, b)
    };
    _.h.Of = function(a) {
        var b;
        if (this.ia !== a) {
            this.wd();
            if (qB !== Kn) {
                var c = null === (b = this.gb.parentNode) || void 0 === b ? void 0 : b.nodeName;
                if ("STYLE" === c || "SCRIPT" === c) throw Error("STYLE" === c ? "Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets." : "Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.");
            }
            this.ia = this.Qf(a)
        }
    };
    _.h.yi = function(a) {
        if (this.ia !== no && Mn(this.ia)) {
            var b = DB(this.gb).nextSibling;
            void 0 === this.Lc && (this.Lc = qB(b, "data", "property"));
            a = this.Lc(a);
            b.data = a
        } else b = document.createTextNode(""), this.Of(b), void 0 === this.Lc && (this.Lc = qB(b, "data", "property")), a = this.Lc(a), b.data = a;
        this.ia = a
    };
    _.h.Bn = function(a) {
        var b, c = a.values,
            d = a._$litType$;
        a = "number" === typeof d ? this.vi(a) : (void 0 === d.Pc && (d.Pc = ao.createElement(d.ot, this.options)), d);
        (null === (b = this.ia) || void 0 === b ? void 0 : b.Nf) === a ? this.ia.j(c) : (a = new mo(a, this), d = a.l(this.options), a.j(c), this.Of(d), this.ia = a)
    };
    _.h.vi = function(a) {
        var b = FB.get(a.strings);
        void 0 === b && FB.set(a.strings, b = new ao(a));
        return b
    };
    _.h.An = function(a) {
        EB(this.ia) || (this.ia = [], this.wd());
        var b = this.ia,
            c = 0,
            d;
        a = _.q(a);
        for (var e = a.next(); !e.done; e = a.next()) e = e.value, c === b.length ? b.push(d = new On(this.Qf(Pn.createComment("")), this.Qf(Pn.createComment("")), this, this.options)) : d = b[c], d.Db(e), c++;
        c < b.length && (this.wd(d && DB(d.Rb).nextSibling, c), b.length = c)
    };
    _.h.wd = function(a, b) {
        a = void 0 === a ? DB(this.gb).nextSibling : a;
        var c;
        for (null === (c = this.Mf) || void 0 === c ? void 0 : c.call(this, !1, !0, b); a && a !== this.Rb;) b = DB(a).nextSibling, DB(a).remove(), a = b
    };
    fa.Object.defineProperties(On.prototype, {
        fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a, b;
                return null !== (b = null === (a = this.La) || void 0 === a ? void 0 : a.fb) && void 0 !== b ? b : this.xi
            }
        },
        parentNode: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = DB(this.gb).parentNode,
                    b = this.La;
                void 0 !== b && 11 === a.nodeType && (a = b.parentNode);
                return a
            }
        }
    });
    ho.prototype.Db = function(a, b, c, d) {
        b = void 0 === b ? this : b;
        var e = this.strings,
            f = !1;
        if (void 0 === e) {
            if (a = lo(this, a, b, 0), f = !Mn(a) || a !== this.ia && a !== ko) this.ia = a
        } else {
            var g = a;
            a = e[0];
            var k;
            for (k = 0; k < e.length - 1; k++) {
                var l = lo(this, g[c + k], b, k);
                l === ko && (l = this.ia[k]);
                f || (f = !Mn(l) || l !== this.ia[k]);
                l === no ? a = no : a !== no && (a += (null !== l && void 0 !== l ? l : "") + e[k + 1]);
                this.ia[k] = l
            }
        }
        f && !d && this.Pf(a)
    };
    ho.prototype.Pf = function(a) {
        a === no ? DB(this.element).removeAttribute(this.name) : (void 0 === this.Kc && (this.Kc = qB(this.element, this.name, "attribute")), a = this.Kc(null !== a && void 0 !== a ? a : ""), DB(this.element).setAttribute(this.name, null !== a && void 0 !== a ? a : ""))
    };
    fa.Object.defineProperties(ho.prototype, {
        tagName: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.element.tagName
            }
        },
        fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.La.fb
            }
        }
    });
    _.r(eo, ho);
    eo.prototype.Pf = function(a) {
        void 0 === this.Kc && (this.Kc = qB(this.element, this.name, "property"));
        a = this.Kc(a);
        this.element[this.name] = a === no ? void 0 : a
    };
    var GB = io ? io.emptyScript : "";
    _.r(fo, ho);
    fo.prototype.Pf = function(a) {
        a && a !== no ? DB(this.element).setAttribute(this.name, GB) : DB(this.element).removeAttribute(this.name)
    };
    _.r(go, ho);
    go.prototype.Db = function(a, b) {
        var c;
        a = null !== (c = lo(this, a, void 0 === b ? this : b, 0)) && void 0 !== c ? c : no;
        if (a !== ko) {
            b = this.ia;
            var d = a === no && b !== no || a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive,
                e = a !== no && (b === no || d);
            d && this.element.removeEventListener(this.name, this, b);
            e && this.element.addEventListener(this.name, this, a);
            this.ia = a
        }
    };
    go.prototype.handleEvent = function(a) {
        var b, c;
        "function" === typeof this.ia ? this.ia.call(null !== (c = null === (b = this.options) || void 0 === b ? void 0 : b.host) && void 0 !== c ? c : this.element, a) : this.ia.handleEvent(a)
    };
    oo.prototype.Db = function(a) {
        lo(this, a)
    };
    fa.Object.defineProperties(oo.prototype, {
        fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.La.fb
            }
        }
    });
    var HB = window.litHtmlPolyfillSupportDevMode;
    null === HB || void 0 === HB ? void 0 : HB(ao, On);
    (null !== (AB = (CB = window).litHtmlVersions) && void 0 !== AB ? AB : CB.litHtmlVersions = []).push("2.1.1");
    1 < window.litHtmlVersions.length && co("multiple-versions", "Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
    var IB = _.ja(["\n<style>\n:host{font-family:'Google Sans','Roboto',Arial,sans-serif;position:absolute;pointer-events:none;top:0;left:0;display:block;height:100%;width:100%}.media-browse-root{width:100%;height:100%}.media-browse-landing-background{display:none;bottom:0;height:100%;left:0;position:absolute;width:100%;background-image:radial-gradient(circle at top left, #fff 0, #f1f3f4 50%, #f1f3f4 100%)}goog-mini-player{margin-left:auto;pointer-events:initial}.media-browse-root.landing goog-mini-player{display:none}.media-browse-root.landing .media-browse-landing-background{display:block}.media-browse-root.landing .media-browse-content-layer{transform:initial}.media-browse-root.landing .browse-item-img{box-shadow:8px 8px 20px rgba(218,220,224,0.8)}.media-browse-root.landing .browse-item-title{color:#3c4043}.media-browse-root.landing .media-browse-title,.media-browse-root.landing .browse-item-subtitle{color:#80868b}.media-browse-root.landing .media-browse-top-bar{opacity:initial !important;visibility:initial !important}.media-browse-root.landing .media-browse-touch-shield{display:none}.media-browse-root.landing .media-browse-carousel{overflow-x:scroll !important}.media-browse-content-layer{display:flex;width:100%;height:100%;position:absolute;box-sizing:border-box;left:0;top:0;padding:104px 0 0}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-content-layer{padding:159px 0 0}}.media-browse-carousel{font-size:0;pointer-events:initial;overflow-x:scroll;overflow-y:hidden;width:100%;height:100%;white-space:nowrap;position:relative;box-sizing:border-box;padding:0 0 0 44px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-carousel{padding:0 0 0 56px}}.media-browse-touch-shield{pointer-events:initial;width:100%;height:100%;box-sizing:border-box;position:absolute;top:104px;left:0;z-index:1}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-touch-shield{top:159px}}.browse-item{margin-right:24px;vertical-align:top;display:inline-block;font-size:initial;white-space:initial;width:296px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item{margin-right:32px}}.browse-item .browse-item-img{width:296px;height:296px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item{width:360px}.browse-item .browse-item-img{width:360px;height:360px}}.browse-item.portrait-2-to-3{width:240px}.browse-item.portrait-2-to-3 .browse-item-img{width:240px;height:360px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item.portrait-2-to-3{width:260px}.browse-item.portrait-2-to-3 .browse-item-img{width:260px;height:390px}}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item.portrait-2-to-3 .browse-item-title{font-size:36px;line-height:44px}}.browse-item.portrait-2-to-3 .browse-item-subtitle{-webkit-line-clamp:1}.browse-item.landscape-16-to-9{width:448px}.browse-item.landscape-16-to-9 .browse-item-img{width:448px;height:252px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item.landscape-16-to-9{width:560px}.browse-item.landscape-16-to-9 .browse-item-img{width:560px;height:315px}}.browse-item-img{position:relative;background-position:center center;background-size:132px 132px;background-color:#dadce0;background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-image.svg');background-repeat:no-repeat}.browse-item-img.has-image{background-size:contain}.browse-item-img.music-track{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-song.svg')}.browse-item-img.music-album{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-album.svg')}.browse-item-img.artist{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_guest.svg')}.browse-item-img.playlist,.browse-item-img.music-mix,.browse-item-img.music-genre{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-playlist.svg')}.browse-item-img.episode,.browse-item-img.photo{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-image.svg')}.browse-item-img.movie{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-movie.svg')}.browse-item-img.podcast,.browse-item-img.radio-station{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-podcast.svg')}.browse-item-img.audio-book{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-audiobook.svg')}.browse-item-img.video{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_media.svg')}.browse-item-img.tv-show{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-tv.svg')}.browse-item-img.news{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-newspaper.svg')}.duration,.live{position:absolute;bottom:16px;color:#fff;font-size:24px;line-height:24px;font-weight:500;padding:6px;border-radius:8px}.duration{right:16px;background-color:rgba(0,0,0,0.5)}.live{left:16px;background-color:#ea4335}.browse-item-text{margin:16px 4px 0}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item-text{margin:29px 9px 0}}.browse-item-title{font-size:32px;line-height:40px;font-weight:400;margin:0 0 8px;color:#fff;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item-title{font-size:40px;line-height:52px}}.browse-item-subtitle{font-size:24px;line-height:32px;font-weight:400;color:#bdc1c6;margin:0;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item-subtitle{font-size:32px;line-height:40px}}.media-browse-logo{content:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;height:40px;margin-right:16px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-logo{height:56px;margin-right:20px}}.media-browse-top-bar{padding:0 44px;top:0;box-sizing:border-box;width:100%;left:0;align-items:center;position:absolute;display:flex;flex-direction:row;height:104px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-top-bar{padding:0 56px}}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-top-bar{height:159px}}.media-browse-title{font-weight:400;margin:0;font-size:32px;color:#bdc1c6}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-title{font-size:36px}}@media (prefers-color-scheme:dark){.media-browse-root.landing .media-browse-title,.media-browse-root.landing .browse-item-title{color:#e8eaed}.media-browse-root.landing .browse-item-img{box-shadow:8px 8px 20px rgba(0,0,0,0.8)}.media-browse-root.landing .browse-item-subtitle{color:#9aa0a6}.media-browse-landing-background{background-image:radial-gradient(circle at top left, #202124, #18191a)}}</style>\n"]),
        JB = Nn(IB);
    var KB = _.ja(['\n<style>\n.mini-player-root{height:72px;border-radius:12px;display:flex;overflow:hidden}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.mini-player-root{height:96px;border-radius:16px}}.btn{width:48px;height:48px;padding:12px;background-color:#3c4043}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn{width:56px;height:56px;padding:20px}}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.btn-icon{width:48px;height:48px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-icon{width:56px;height:56px}}.pause-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20stroke-width=%273%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20stroke-width=%273%27/%3E%0A%3C/svg%3E%0A")}.play-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpolygon%20points=%2738.5%2024%2015.5%2038.5%2015.5%209.5%2038.5%2024%27%20fill=%27none%27%0A%20%20%20%20%20%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%0A%20%20%20%20%20%20stroke-width=%273%27/%3E%0A%3C/svg%3E%0A")}.album-art{height:72px;max-width:300px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.album-art{height:96px}}</style>\n']),
        LB = Nn(KB);
    _.r(ro, $c);
    var MB, NB, uo = (null === (MB = window.ShadyDOM) || void 0 === MB ? 0 : MB.inUse) && !0 === (null === (NB = window.ShadyDOM) || void 0 === NB ? void 0 : NB.noPatch) ? window.ShadyDOM.wrap : function(a) {
            return a
        },
        OB = {};
    xo.prototype.xn = function(a, b, c) {
        this.A = a;
        this.La = b;
        this.o = c
    };
    xo.prototype.yn = function(a, b) {
        return this.update(a, b)
    };
    xo.prototype.update = function(a, b) {
        return this.h.apply(this, _.ka(b))
    };
    fa.Object.defineProperties(xo.prototype, {
        fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.La.fb
            }
        }
    });
    _.r(yo, xo);
    yo.prototype.h = function(a) {
        return [a]
    };
    yo.prototype.update = function(a, b) {
        b = _.q(b).next().value;
        if (to(this.j) && (!to(b) || this.j.strings !== b.strings)) {
            var c = a.ia.pop(),
                d = this.l.get(this.j.strings);
            if (void 0 === d) {
                var e = d = Qn(no, document.createDocumentFragment()),
                    f;
                if (void 0 === e.La) e.xi = !1, null === (f = e.Mf) || void 0 === f ? void 0 : f.call(e, !1);
                else throw Error("part.setConnected() may only be called on a RootPart returned from render().");
                this.l.set(this.j.strings, d)
            }
            f = [c];
            f = void 0 === f ? OB : f;
            d.ia = f;
            vo(d, c)
        }
        to(b) ? (to(this.j) && this.j.strings === b.strings ||
            (c = this.l.get(b.strings), void 0 !== c && (c = c.ia.pop(), a.wd(), vo(a, c), c = [c], c = void 0 === c ? OB : c, a.ia = c)), this.j = b) : this.j = void 0;
        return this.h(b)
    };
    var PB = wo(yo);
    _.r(zo, xo);
    zo.prototype.h = function(a) {
        return " " + Object.keys(a).filter(function(b) {
            return a[b]
        }).join(" ") + " "
    };
    zo.prototype.update = function(a, b) {
        var c = this,
            d, e, f = _.q(b).next().value;
        if (void 0 === this.j) {
            this.j = new Set;
            void 0 !== a.strings && (this.l = new Set(a.strings.join(" ").split(/\s/).filter(function(m) {
                return "" !== m
            })));
            for (var g in f) !f[g] || (null === (d = this.l) || void 0 === d ? 0 : d.has(g)) || this.j.add(g);
            return this.h(f)
        }
        var k = a.element.classList;
        this.j.forEach(function(m) {
            m in f || (k.remove(m), c.j.delete(m))
        });
        for (var l in f) a = !!f[l], a === this.j.has(l) || null !== (e = this.l) && void 0 !== e && e.has(l) || (a ? (k.add(l), this.j.add(l)) :
            (k.remove(l), this.j.delete(l)));
        return ko
    };
    var cp = wo(zo);
    var Ao = {};
    _.r(Bo, xo);
    Bo.prototype.h = function(a, b) {
        return b()
    };
    Bo.prototype.update = function(a, b) {
        var c = this,
            d = _.q(b);
        b = d.next().value;
        d = d.next().value;
        if (Array.isArray(b)) {
            if (Array.isArray(this.j) && this.j.length === b.length && b.every(function(e, f) {
                    return e === c.j[f]
                })) return ko
        } else if (this.j === b) return ko;
        this.j = Array.isArray(b) ? Array.from(b) : b;
        return this.h(b, d)
    };
    var QB = wo(Bo);
    _.r(Co, xo);
    Co.prototype.h = function(a) {
        return Object.keys(a).reduce(function(b, c) {
            var d = a[c];
            if (null == d) return b;
            c = c.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
            return b + (c + ":" + d + ";")
        }, "")
    };
    Co.prototype.update = function(a, b) {
        var c = this,
            d = _.q(b).next().value,
            e = a.element.style;
        void 0 === this.j && (this.j = new Set);
        this.j.forEach(function(g) {
            null == d[g] && (c.j.delete(g), g.includes("-") ? e.removeProperty(g) : e[g] = "")
        });
        for (var f in d) a = d[f], null != a && (this.j.add(f), f.includes("-") ? e.setProperty(f, a) : e[f] = a);
        return ko
    };
    var Ho = wo(Co);
    var RB = _.ja(["\n      ", '\n      <div class="mini-player-root">\n        ', "\n        ", "\n      </div>"]),
        Eo = _.ja(['\n      <div role="button" class="btn"\n           title="', '"\n           aria-disabled="', '"\n           @click="', '">\n        <img class="', ' btn-icon" src="" alt="" role="presentation">\n      </div>']),
        Go = _.ja(['\n      <div class="album-art" role="button"\n          aria-label="', '"\n          style="', '"\n          @click="', '">\n      </div>']);
    _.r(Do, ro);
    Do.prototype.D = function() {
        var a = Nn(RB, LB, PB(Fo(this)), Io(this));
        Qn(a, this.shadowRoot)
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-mini-player", Do);
    var SB = _.ja(["\n<style>\n.suggestions-bar-root{align-items:center;background:rgba(255,255,255,0.96);bottom:0;box-sizing:border-box;display:flex;font-size:0;height:112px;left:0;overflow-x:scroll;overflow-y:hidden;padding:0 44px;pointer-events:auto;position:fixed;white-space:nowrap;width:100%;z-index:1000;will-change:transform,opacity;transition:opacity .15s linear,transform .25s cubic-bezier(0, 0, 0, 1)}.suggestions-bar-root::after{content:'';padding-right:44px}.suggestions-bar-root.is-hidden{opacity:0;pointer-events:none;transform:translateY(100%);transition:opacity .15s linear .05s,transform .3s cubic-bezier(.2, 0, 0, 1)}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.suggestions-bar-root{height:96px;padding:0 36px}.suggestions-bar-root::after{padding-right:36px}}@media (prefers-color-scheme:dark){.suggestions-bar-root{background:rgba(60,64,67,0.96)}}.suggestion-chip{background-color:transparent;border:2px solid #dadce0;border-radius:40px;color:#202124;display:inline-flex;flex:0 0 auto;font-size:40px;margin:16px 12px;padding:0 40px;position:relative}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.suggestion-chip{border-radius:32px;font-size:32px;margin:16px 8px;padding:0 28px}}@media (prefers-color-scheme:dark){.suggestion-chip{border:2px solid #5f6368;color:#e8eaed}}</style>\n"]),
        TB = Nn(SB);
    var UB = _.ja(["\n        ", '\n        <div class="', '">\n          ', "\n        </div>"]),
        Lo = _.ja([""]),
        No = _.ja(['\n          <button class="', " ", '"\n              @click="', '">\n              <goog-ripple theme-responsive></goog-ripple>\n              ', "\n          </button>"]),
        Mo = _.ja(["\n        ", ""]);
    _.r(Ko, ro);
    Ko.prototype.Mb = function(a) {
        this.j = a;
        Po(a) && !this.l && (this.l = !0);
        this.scrollLeft = 0;
        qo(this)
    };
    Ko.prototype.D = function() {
        var a = this,
            b = {
                "suggestions-bar-root": !0
            };
        b["is-hidden"] = this.h || !Po(this.j);
        b = Nn(UB, TB, cp(b), QB([this.h, this.l, this.o], function() {
            return Oo(a, a.j)
        }));
        Qn(b, this.shadowRoot);
        this.h && (clearTimeout(this.H), this.H = setTimeout(this.J.bind(this), 4E3))
    };
    Ko.prototype.J = function() {
        var a = this.shadowRoot.querySelector(".suggestions-bar-root");
        a && a.classList.contains("is-hidden") && (id("Cast.Controls.MediaBrowseSuggestionsBarShown"), this.h = !1, qo(this))
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-suggestions-bar", Ko);
    var VB = _.ja('\n      ;\n      <div class=";">\n        <div class="media-browse-landing-background"></div>\n        <div class="media-browse-touch-shield"\n            role="button" aria-label=";"\n            aria-hidden=";"\n            style=";"></div>\n        <div class="media-browse-content-layer"\n             aria-hidden=";"\n             aria-labelledby="media-browse-title"\n             role="dialog" aria-modal="true">\n          <div class="media-browse-top-bar"\n              style=";">\n            ;\n            <h1 class="media-browse-title" id="media-browse-title">\n              ;\n            </h1>\n            ;\n          </div>\n          ;\n          ;\n        </div>\n      </div>'.split(";")),
        WB = _.ja(["", ""]),
        XB = _.ja(["", ""]),
        YB = _.ja([""]),
        Wo = _.ja(['\n      <div class="media-browse-carousel"\n           style="', '"></div>']),
        Xo = _.ja('\n          <div class="browse-item ;" role="link"\n              @click=";">\n            ;\n            <div class="browse-item-text">\n              <h2 class="browse-item-title">\n                  ;\n              </h2>\n              <h3 class="browse-item-subtitle">\n                  ;\n              </h3>\n            </div>\n          </div>\n        '.split(";")),
        Zo = _.ja(['\n        <div class="media-browse-carousel" @scroll=', ">\n            ", "\n        </div>"]),
        ZB = _.ja(['\n    <div class="media-browse-logo"\n         style="', '" role="presentation"></div>']),
        dp = _.ja(['<div class="duration">', "</div>"]),
        fp = _.ja(['<div class="live">', "</div>"]),
        ep = _.ja(['\n      <div class="', '"\n        style="', '">\n        ', "\n        ", "\n      </div>"]);
    _.r(Ro, ro);
    Ro.prototype.Mb = function(a) {
        var b = So(this, a);
        this.h = a;
        this.j && this.j.Mb(a);
        (a = this.shadowRoot.querySelector(".media-browse-carousel")) && b && (a.scrollLeft = 0);
        qo(this)
    };
    Ro.prototype.D = function() {
        var a = this,
            b = Nn(VB, JB, cp({
                "media-browse-root": !0,
                landing: this.B
            }), this.h ? cast.receiver.V.Fb(cast.receiver.V.fm, {
                MEDIA_BROWSE_TITLE: this.h.title
            }) : "", this.W, Ho({
                visibility: this.X
            }), this.J, Ho({
                opacity: this.T,
                visibility: this.U
            }), QB(this.l, function() {
                var c = a.l,
                    d = {};
                c && (d.content = cast.receiver.C.Y.Ua(c));
                return Nn(ZB, Ho(d))
            }), this.h ? this.h.title : "", Nn(WB, this.o), QB([this.h], function() {
                return $o(a, a.h)
            }), this.j ? Nn(XB, this.j) : Nn(YB));
        Qn(b, this.shadowRoot);
        ap(this);
        !this.M && this.P &&
            (this.M = !0, so(this, "BROWSE_ITEMS_AVAILABLE"))
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-media-browse", Ro);
    cast.receiver.C.on = function(a) {
        a.innerHTML = '<style>goog-video-metadata{align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;text-align:left;padding:44px 56px 0}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){goog-video-metadata{padding:112px 112px 0}}.logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:rgba(255,255,255,0.7);font-family:\'Roboto\',Arial,sans-serif;font-size:36px;font-weight:500;height:40px;line-height:40px;width:100%}.logo.app-icon{height:68px}.title{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;font-weight:normal;overflow:hidden;word-break:break-word;width:auto;margin-top:0;margin-bottom:0;font-size:56px;line-height:76px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.title{margin-bottom:4px;font-size:68px;line-height:80px}}.subtitle{font-weight:normal;margin:0;opacity:.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:1.6px;line-height:30px;font-size:28px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.subtitle{letter-spacing:1.4px;line-height:40px;font-size:32px}}.subtitle-container{margin-top:auto;margin-bottom:16px;max-width:100%}.top-right-video-overlay-image{max-width:200px;max-height:50px;display:block;margin-left:auto}.top-images-container{display:flex;flex-direction:row;width:100%}.break-countdown{position:absolute;bottom:65px;left:56px;z-index:-1;font-size:24px;text-shadow:0 2px 4px rgba(0,0,0,0.5);color:rgba(255,255,255,0.7)}.break-countdown .ad-label{color:#fff}.break-countdown .ad-label:after{content:\' \u00b7 \'}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.break-countdown{bottom:82px;left:112px}}.break-skip{position:absolute;bottom:46px;right:32px;font-size:20px;padding:0 32px;height:64px;display:flex;align-items:center;justify-content:center;flex-direction:row;border-radius:32px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.break-skip{bottom:62px;right:82px}}.break-skip .break-skip-scrim{border:2px solid rgba(255,255,255,0.2);position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);border-radius:32px}.break-skip .break-skip-highlight{position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background-color:transparent;border-radius:32px}.break-skip:active .break-skip-scrim{background-color:rgba(0,0,0,0.3)}.break-skip .skip-ad-text{-webkit-font-smoothing:antialiased}.break-skip .skip-ad-icon{margin-left:10px;margin-right:-8px;width:28px;height:28px}.break-skip-btn-countdown{min-width:110px}.loading-bar{--loading-bar-width:1000px;height:100%;overflow:hidden;position:relative;transform:translateZ(0);transition:opacity 250ms linear;width:1000px}.loading-bar .rect,.loading-bar .rect-inner{height:100%;position:absolute;width:1000px}.loading-bar .rect{transform-origin:top left}.loading-bar .rect-primary{transform:scaleX(0)}.loading-bar .rect-inner{background-color:#9aa0a6;display:inline-block}.loading-bar .rect-primary{animation:primary-indeterminate-translate 2s infinite linear}.loading-bar .rect-primary>.rect-inner{animation:primary-indeterminate-scale 2s infinite linear}.loading-bar .rect-auxiliary{animation:auxiliary-indeterminate-translate 2s infinite linear}.loading-bar .rect-auxiliary>.rect-inner{animation:auxiliary-indeterminate-scale 2s infinite linear}@keyframes primary-indeterminate-translate{0%{transform:translateX(-1451.66611px)}20%{animation-timing-function:cubic-bezier(.5, 0, .701732, .495819);transform:translateX(-1451.66611px)}59.15%{animation-timing-function:cubic-bezier(.302435, .381352, .55, .956352);transform:translateX(-614.95191px)}100%{transform:translateX(554.44446px)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.334731, .12482, .785844, 1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06, .11, .6, 1);transform:scaleX(.661479)}100%{transform:scaleX(.08)}}@keyframes auxiliary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15, 0, .515058, .409685);transform:translateX(-548.88891px)}25%{animation-timing-function:cubic-bezier(.31033, .284058, .8, .733712);transform:translateX(-172.36978px)}48.35%{animation-timing-function:cubic-bezier(.4, .627035, .6, .902026);transform:translateX(294.97274px)}100%{transform:translateX(1053.88891px)}}@keyframes auxiliary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.205028, .057051, .57661, .453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.152313, .196432, .648374, 1.004315);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(.257759, .003163, .211762, 1.38179);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}:host{bottom:0;color:#fff;font-family:\'Google Sans\',\'Roboto\',Arial,sans-serif;left:0;position:fixed;right:0;top:0;z-index:1000000;--media-browse-top-padding:104px;--media-browse-visible-part-height:70px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){:host{--media-browse-top-padding:159px;--media-browse-visible-part-height:85px}}.controls-layer{display:flex;position:relative;flex-direction:column;justify-content:flex-start;height:100%;will-change:transform}.controls-toggle{position:absolute;width:100%;height:100%;top:0;left:0}.accessibility-alert,.controls-toggle{opacity:0;position:absolute;left:-9999px}.controls{box-sizing:border-box;flex:none;display:flex;flex-direction:column;justify-content:flex-end;height:192px;padding:0 56px 14px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.controls{height:240px;padding:0 112px 30px}}goog-audio-player-compatibility{position:absolute;display:none}.scrim,.buffering-scrim{bottom:0;height:100vh;left:0;position:absolute;width:100vw;z-index:-1}.buffering-scrim{background-color:rgba(0,0,0,0.6);visibility:hidden}goog-video-metadata{display:none}.touch-layer{height:100%;touch-action:manipulation;user-select:none;width:100%}.touch-layer .playback-layer{width:100%;height:100%}.touch-layer.with-related-content{--media-browse-controls-offset:-70px;--media-browse-peek-offset:-70px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.with-related-content{--media-browse-controls-offset:-95px;--media-browse-peek-offset:-85px}}.touch-layer goog-media-browse{position:absolute;left:0;will-change:transform;pointer-events:none;top:calc(100% - 104px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer goog-media-browse{top:calc(100% - 159px)}}.touch-layer .media-browse-scrim{bottom:0;height:100%;left:0;position:absolute;width:100%;background-color:#202124;opacity:0;will-change:opacity}.touch-layer.video:not(.remote-controls) .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5) 42.5%, rgba(0,0,0,0.92))}.touch-layer.video:not(.remote-controls).compatibility-mode-scrim .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0.78), #000)}.touch-layer.video:not(.remote-controls) goog-video-metadata{flex-grow:1;display:flex}.touch-layer.video:not(.remote-controls).active .title,.touch-layer.video:not(.remote-controls).buffering .title{width:100%}.touch-layer.video:not(.remote-controls) .scrim{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .break-countdown,.touch-layer.video:not(.remote-controls) .break-skip .break-skip-scrim{opacity:1;transition:opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls) .top-right-video-overlay-image,.touch-layer.video:not(.remote-controls) .logo{will-change:opacity,transform;opacity:0;transform:translateY(32px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .subtitle-container,.touch-layer.video:not(.remote-controls) .title{will-change:opacity,transform;opacity:0;transform:translateY(44px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .controls,.touch-layer.video:not(.remote-controls) goog-media-browse{will-change:transform;transform:translateY(56px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls) .scrubber-layer,.touch-layer.video:not(.remote-controls) .time-numbers{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .slot{opacity:0;transition:visibility 0s 100ms,opacity 100ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active .break-skip[role="button"]:active .break-skip-highlight,.touch-layer.video:not(.remote-controls).buffering .break-skip[role="button"]:active .break-skip-highlight{background-color:rgba(255,255,255,0.1)}.touch-layer.video:not(.remote-controls).active .scrim{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .break-countdown,.touch-layer.video:not(.remote-controls).active .break-skip .break-skip-scrim{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active .top-right-video-overlay-image,.touch-layer.video:not(.remote-controls).active .logo{opacity:1;transform:translateY(0);transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .subtitle-container,.touch-layer.video:not(.remote-controls).active .title{opacity:1;transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .controls{transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls).active goog-media-browse{transform:translateY(var(--media-browse-peek-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls).active .scrubber-layer,.touch-layer.video:not(.remote-controls).active .time-numbers,.touch-layer.video:not(.remote-controls).active .slot{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .slot-primary-1,.touch-layer.video:not(.remote-controls).active .slot-primary-2{transition-delay:50ms}.touch-layer.video:not(.remote-controls).active .slot-secondary-1,.touch-layer.video:not(.remote-controls).active .slot-secondary-2,.touch-layer.video:not(.remote-controls).active .device-controller-slot{transition-delay:100ms}.touch-layer.video:not(.remote-controls).buffering .buffering-scrim{visibility:visible}.touch-layer.video:not(.remote-controls).buffering .scrim,.touch-layer.video:not(.remote-controls).buffering .top-right-video-overlay-image,.touch-layer.video:not(.remote-controls).buffering .logo,.touch-layer.video:not(.remote-controls).buffering .subtitle-container,.touch-layer.video:not(.remote-controls).buffering .title,.touch-layer.video:not(.remote-controls).buffering .controls,.touch-layer.video:not(.remote-controls).buffering .scrubber-layer,.touch-layer.video:not(.remote-controls).buffering .time-numbers,.touch-layer.video:not(.remote-controls).buffering .slot{opacity:1;visibility:visible;transition:none;transform:none}.touch-layer.video:not(.remote-controls).buffering .controls,.touch-layer.video:not(.remote-controls).buffering .subtitle-container,.touch-layer.video:not(.remote-controls).buffering .title{transform:translateY(var(--media-browse-controls-offset, 0))}.touch-layer.video:not(.remote-controls).buffering goog-media-browse{transform:translateY(var(--media-browse-peek-offset, 0))}.touch-layer.video:not(.remote-controls).buffering .break-countdown,.touch-layer.video:not(.remote-controls).buffering .break-skip .break-skip-scrim{opacity:0;transition:none;transform:none;visibility:hidden}.touch-layer.audio goog-audio-player-compatibility,.touch-layer.remote-controls goog-audio-player-compatibility{display:block}.touch-layer.audio .controls,.touch-layer.remote-controls .controls{margin-top:auto}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.audio .btn-play-pause .btn-icon,.touch-layer.remote-controls .btn-play-pause .btn-icon,.touch-layer.audio .btn-stop .btn-icon,.touch-layer.remote-controls .btn-stop .btn-icon{width:124px;height:124px}}.touch-layer.audio .scrim,.touch-layer.remote-controls .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.92));height:192px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.audio .scrim,.touch-layer.remote-controls .scrim{height:240px}}.touch-layer.audio.with-related-content .scrim,.touch-layer.remote-controls.with-related-content .scrim{height:262px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.audio.with-related-content .scrim,.touch-layer.remote-controls.with-related-content .scrim{height:335px}}.touch-layer.audio .break-countdown,.touch-layer.remote-controls .break-countdown{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio .break-skip,.touch-layer.remote-controls .break-skip{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio .break-skip-scrim,.touch-layer.remote-controls .break-skip-scrim{display:none}.touch-layer.audio .time-numbers,.touch-layer.remote-controls .time-numbers,.touch-layer.audio .slot,.touch-layer.remote-controls .slot{will-change:opacity;opacity:0;transition:visibility 0s 100ms,opacity 100ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls .scrubber::-webkit-slider-thumb{will-change:transform;transform:scaleY(.2);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 350ms;visibility:hidden}.touch-layer.audio .controls,.touch-layer.remote-controls .controls,.touch-layer.audio goog-media-browse,.touch-layer.remote-controls goog-media-browse{will-change:transform;transform:translateY(56px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.active .time-numbers,.touch-layer.remote-controls.active .time-numbers,.touch-layer.audio.active .slot,.touch-layer.remote-controls.active .slot{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.active .break-countdown,.touch-layer.remote-controls.active .break-countdown{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio.active .break-skip,.touch-layer.remote-controls.active .break-skip{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.active .break-skip-scrim,.touch-layer.remote-controls.active .break-skip-scrim{display:none}.touch-layer.audio.active .slot-primary-1,.touch-layer.remote-controls.active .slot-primary-1,.touch-layer.audio.active .slot-primary-2,.touch-layer.remote-controls.active .slot-primary-2{transition-delay:50ms}.touch-layer.audio.active .slot-secondary-1,.touch-layer.remote-controls.active .slot-secondary-1,.touch-layer.audio.active .slot-secondary-2,.touch-layer.remote-controls.active .slot-secondary-2,.touch-layer.audio.active .device-controller-slot,.touch-layer.remote-controls.active .device-controller-slot{transition-delay:100ms}.touch-layer.audio.active .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls.active .scrubber::-webkit-slider-thumb{transform:scaleY(1);transition:transform 400ms cubic-bezier(.2, 0, 0, 1);visibility:visible}.touch-layer.audio.active .controls,.touch-layer.remote-controls.active .controls{transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.active goog-media-browse,.touch-layer.remote-controls.active goog-media-browse{transform:translateY(var(--media-browse-peek-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.scrubbing .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls.scrubbing .scrubber::-webkit-slider-thumb{transform:scaleY(1);transition:transform 400ms cubic-bezier(.2, 0, 0, 1);visibility:visible}.touch-layer.audio.scrubbing .time-numbers,.touch-layer.remote-controls.scrubbing .time-numbers{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.scrubbing-ending .time-numbers,.touch-layer.remote-controls.scrubbing-ending .time-numbers{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.default-player:not(.with-related-content) .scrim,.touch-layer.remote-controls.default-player:not(.with-related-content) .scrim,.touch-layer.audio.compatibility-mode-scrim .scrim,.touch-layer.remote-controls.compatibility-mode-scrim .scrim{display:none}.touch-layer.photo:not(.remote-controls) .playback-layer,.touch-layer.disabled .playback-layer{display:none !important}goog-buttons-bar{align-items:center;display:grid;grid-template-columns:[dc] 96px 96px 1fr [pr1] 96px [center] auto [pr2] 96px 1fr [sec1] 96px [sec2] 96px;flex:none;margin-top:-8px;justify-content:center}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.slot{height:96px;margin:0;width:96px}.btn{height:96px;width:96px;display:flex;justify-content:center;align-items:center;position:relative}.btn-icon{height:48px;width:48px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-icon{height:56px;width:56px}}.slot.center{height:104px;width:auto;margin:12px 28px;grid-column:center;display:flex;justify-content:space-between}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.slot.center{height:128px;margin:0 28px}}goog-buttons-bar.bluetooth .slot.center{margin-left:12px;margin-right:12px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){goog-buttons-bar.bluetooth .slot.center{margin-left:24px;margin-right:24px}}.slot.slot-primary-1{grid-column:pr1}.slot.slot-primary-2{grid-column:pr2}.slot.slot-secondary-1{grid-column:sec1;grid-row:1}.slot.slot-secondary-2{justify-self:end;grid-column:sec2;margin-right:-20px}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-1{grid-column:sec2;margin-left:auto;margin-right:-20px}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-2{display:none}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.slot-secondary-1,.slot-secondary-2{height:64px;width:64px}.slot-secondary-1 .btn,.slot-secondary-2 .btn{height:64px;width:64px}.slot-secondary-1 .btn-icon,.slot-secondary-2 .btn-icon{height:32px;width:32px}.slot.slot-secondary-1{margin-left:52px}.slot.slot-secondary-2{margin-right:-16px}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-1{margin-right:-16px}}.device-controller-slot{display:flex;grid-column:dc / span 3;align-items:center;font-size:24px;font-weight:400;width:auto}.active  .device-controller-slot,.buffering  .device-controller-slot{width:100%}.device-controller-btn{display:flex;position:relative;justify-content:center;align-items:center;box-sizing:border-box;background-color:rgba(255,255,255,0.1);min-width:80px;max-width:270px;padding:0 16px;height:64px;border-radius:32px;margin-left:-10px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.device-controller-btn{max-width:330px;min-width:120px;height:80px;padding:0 20px;border-radius:40px}}.device-controller-label{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden;font-size:20px;line-height:24px;margin:0 8px 0 12px;word-break:break-word}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.device-controller-label{margin:0 12px 0 16px;font-size:24px;line-height:28px}}.device-controller-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A");width:24px;height:24px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.device-controller-icon{width:32px;height:32px}}.device-controller-icon[connected]{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M25.79%2C33H37a1%2C1%2C0%2C0%2C0%2C1-1V15a1%2C1%2C0%2C0%2C0-1-1H11a1%2C1%2C0%2C0%2C0-1%2C1v2.18a1%2C1%2C0%2C0%2C0%2C.8%2C1%2C19.55%2C19.55%2C0%2C0%2C1%2C14%2C14.07A1%2C1%2C0%2C0%2C0%2C25.79%2C33Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A")}.btn-play-pause,.btn-stop{height:104px;width:104px}.btn-play-pause .btn-icon,.btn-stop .btn-icon{height:88px;width:88px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-play-pause,.btn-stop{height:128px;width:128px}.btn-play-pause .btn-icon,.btn-stop .btn-icon{height:112px;width:112px}}.btn-play-pause[data-state=\'playing\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%3C/svg%3E%0A")}.btn-play-pause[data-state=\'paused\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpolygon%20points=%2738.5%2024%2015.5%2038.5%2015.5%209.5%2038.5%2024%27%20fill=%27none%27%0A%20%20%20%20%20%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%0A%20%20%20%20%20%20stroke-width=%274%27%20vector-effect=%27non-scaling-stroke%27/%3E%0A%3C/svg%3E%0A")}.btn-stop{display:flex;margin-left:10px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-stop{margin-left:12px}}.btn-stop .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Crect%20id=%27Rectangle%27%20stroke=%27%23FFFFFF%27%20fill=%27none%27%20stroke-width=%274%27%0A%20%20%20%20%20%20vector-effect=%27non-scaling-stroke%27%20fill-rule=%27nonzero%27%20x=%2711.5%27%20y=%2710.5%27%20width=%2726%27%0A%20%20%20%20%20%20height=%2726%27%20rx=%272%27%3E%3C/rect%3E%0A%3C/svg%3E%0A")}.btn-next .btn-icon,.skip-ad-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M37%2C9.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v29a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M11%2C12.22V35.78L29.69%2C24ZM33.3%2C25.27l-23%2C14.5A1.5%2C1.5%2C0%2C0%2C1%2C8%2C38.5V9.5a1.5%2C1.5%2C0%2C0%2C1%2C2.3-1.27l23%2C14.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C2.54Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-back .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M8%2C9.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v29a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M14.7%2C25.27a1.5%2C1.5%2C0%2C0%2C1%2C0-2.54l23-14.5A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v29a1.5%2C1.5%2C0%2C0%2C1-2.3%2C1.27ZM37%2C35.78V12.22L18.31%2C24Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM17.82%2030v-8.67l-2%20.82-.89-2.15%203.42-1.6h2V30zM27.65%2030.27A4.48%204.48%200%200%201%2024%2028.54a5.91%205.91%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.92%205.92%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.93%205.93%200%200%201%201%201.93%208.59%208.59%200%200%201%200%204.84%205.92%205.92%200%200%201-1%201.93%204.51%204.51%200%200%201-3.64%201.73h.01zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.76-.77%203.78%203.78%200%200%200%20.48-1.17%206.83%206.83%200%200%200%200-3%203.78%203.78%200%200%200-.48-1.17%202.44%202.44%200%200%200-.76-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.76.77%203.78%203.78%200%200%200-.48%201.17%206.87%206.87%200%200%200%200%203c.093.414.255.81.48%201.17.193.31.452.573.76.77a1.91%201.91%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM18.51%2030v-8.67l-2%20.82-.89-2.15L19%2018.37h2V30zM27.69%2030.27a5.17%205.17%200%200%201-1.38-.19%204%204%200%200%201-2.25-1.58%203.9%203.9%200%200%201-.61-1.39l2.33-.9c.083.474.31.91.65%201.25a1.75%201.75%200%200%200%201.26.45%201.57%201.57%200%200%200%201.16-.48%201.74%201.74%200%200%200%200-2.38%201.59%201.59%200%200%200-1.18-.48%201.81%201.81%200%200%200-.85.19%202.12%202.12%200%200%200-.61.48l-2.45-1.12.63-5.76h6.78v2.18h-4.65L26.08%2023l.17.05a3.94%203.94%200%200%201%20.81-.48%202.84%202.84%200%200%201%201.18-.22%203.44%203.44%200%200%201%201.37.28c.435.184.83.453%201.16.79.347.358.622.779.81%201.24a4.19%204.19%200%200%201%20.31%201.63%204.25%204.25%200%200%201-.31%201.64%203.6%203.6%200%200%201-.87%201.27%203.94%203.94%200%200%201-1.33.82%204.72%204.72%200%200%201-1.69.25z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM18.31%2030.27a4.67%204.67%200%200%201-2.76-.8A4.15%204.15%200%200%201%2014%2027.14l2.43-1c.1.96.936%201.673%201.9%201.62a1.7%201.7%200%200%200%201.07-.36%201.15%201.15%200%200%200%20.46-1c0-.92-.667-1.38-2-1.38h-1v-2.23h.94c.199%200%20.397-.024.59-.07.184-.04.36-.112.52-.21a1.07%201.07%200%200%200%20.37-.38%201.19%201.19%200%200%200%20.14-.59c0-.294-.12-.575-.33-.78a1.23%201.23%200%200%200-.93-.34%201.45%201.45%200%200%200-1%20.36%201.79%201.79%200%200%200-.52.85l-2.33-1a4.21%204.21%200%200%201%20.48-.92c.22-.315.49-.592.8-.82a4.17%204.17%200%200%201%201.14-.59%204.47%204.47%200%200%201%201.49-.23%204.9%204.9%200%200%201%201.57.24A3.74%203.74%200%200%201%2021%2019c.324.273.583.615.76%201%20.164.364.246.76.24%201.16a3.25%203.25%200%200%201-.46%201.7%202.54%202.54%200%200%201-.46.56%202.11%202.11%200%200%201-.51.35v.17a3%203%200%200%201%201.34%201%203%203%200%200%201%20.53%201.82%203.32%203.32%200%200%201-.29%201.39%203.21%203.21%200%200%201-.82%201.1A3.85%203.85%200%200%201%2020%2030a5.31%205.31%200%200%201-1.69.27zM29%2030.27a4.49%204.49%200%200%201-3.64-1.73%205.9%205.9%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.91%205.91%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.91%205.91%200%200%201%201%201.93%208.57%208.57%200%200%201%200%204.84%205.9%205.9%200%200%201-1%201.93A4.51%204.51%200%200%201%2029%2030.27zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.77-.77%203.8%203.8%200%200%200%20.47-1.17%206.83%206.83%200%200%200%200-3%203.81%203.81%200%200%200-.47-1.17%202.44%202.44%200%200%200-.77-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.77.77%203.81%203.81%200%200%200-.47%201.17%206.83%206.83%200%200%200%200%203c.09.413.25.809.47%201.17.195.311.459.575.77.77a1.9%201.9%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM17.82%2030v-8.67l-2%20.82-.89-2.15%203.42-1.6h2V30zm9.83.27A4.48%204.48%200%200%201%2024%2028.54a5.91%205.91%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.92%205.92%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.93%205.93%200%200%201%201%201.93%208.59%208.59%200%200%201%200%204.84%205.92%205.92%200%200%201-1%201.93%204.51%204.51%200%200%201-3.64%201.73h.01zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.76-.77%203.78%203.78%200%200%200%20.48-1.17%206.83%206.83%200%200%200%200-3%203.78%203.78%200%200%200-.48-1.17%202.44%202.44%200%200%200-.76-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.76.77%203.78%203.78%200%200%200-.48%201.17%206.87%206.87%200%200%200%200%203c.093.414.255.81.48%201.17.193.31.452.573.76.77a1.91%201.91%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM18.51%2030v-8.67l-2%20.82-.89-2.15L19%2018.37h2V30zM27.69%2030.27a5.17%205.17%200%200%201-1.38-.19%204%204%200%200%201-2.25-1.58%203.9%203.9%200%200%201-.61-1.39l2.33-.9c.083.474.31.91.65%201.25a1.75%201.75%200%200%200%201.26.45%201.57%201.57%200%200%200%201.16-.48%201.74%201.74%200%200%200%200-2.38%201.59%201.59%200%200%200-1.18-.48%201.81%201.81%200%200%200-.85.19%202.12%202.12%200%200%200-.61.48l-2.45-1.12.63-5.76h6.78v2.18h-4.65L26.08%2023l.17.05a3.94%203.94%200%200%201%20.81-.48%202.84%202.84%200%200%201%201.18-.22%203.44%203.44%200%200%201%201.37.28c.435.184.83.453%201.16.79.347.358.622.779.81%201.24a4.19%204.19%200%200%201%20.31%201.63%204.25%204.25%200%200%201-.31%201.64%203.6%203.6%200%200%201-.87%201.27%203.94%203.94%200%200%201-1.33.82%204.72%204.72%200%200%201-1.69.25z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM18.31%2030.27a4.67%204.67%200%200%201-2.76-.8A4.15%204.15%200%200%201%2014%2027.14l2.43-1c.1.96.936%201.673%201.9%201.62a1.7%201.7%200%200%200%201.07-.36%201.15%201.15%200%200%200%20.46-1c0-.92-.667-1.38-2-1.38h-1v-2.23h.94c.199%200%20.397-.024.59-.07.184-.04.36-.112.52-.21a1.07%201.07%200%200%200%20.37-.38%201.19%201.19%200%200%200%20.14-.59c0-.294-.12-.575-.33-.78a1.23%201.23%200%200%200-.93-.34%201.45%201.45%200%200%200-1%20.36%201.79%201.79%200%200%200-.52.85l-2.33-1a4.21%204.21%200%200%201%20.48-.92c.22-.315.49-.592.8-.82a4.17%204.17%200%200%201%201.14-.59%204.47%204.47%200%200%201%201.49-.23%204.9%204.9%200%200%201%201.57.24A3.74%203.74%200%200%201%2021%2019c.324.273.583.615.76%201%20.164.364.246.76.24%201.16a3.25%203.25%200%200%201-.46%201.7%202.54%202.54%200%200%201-.46.56%202.11%202.11%200%200%201-.51.35v.17a3%203%200%200%201%201.34%201%203%203%200%200%201%20.53%201.82%203.32%203.32%200%200%201-.29%201.39%203.21%203.21%200%200%201-.82%201.1A3.85%203.85%200%200%201%2020%2030a5.31%205.31%200%200%201-1.69.27zM29%2030.27a4.49%204.49%200%200%201-3.64-1.73%205.9%205.9%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.91%205.91%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.91%205.91%200%200%201%201%201.93%208.57%208.57%200%200%201%200%204.84%205.9%205.9%200%200%201-1%201.93A4.51%204.51%200%200%201%2029%2030.27zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.77-.77%203.8%203.8%200%200%200%20.47-1.17%206.83%206.83%200%200%200%200-3%203.81%203.81%200%200%200-.47-1.17%202.44%202.44%200%200%200-.77-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.77.77%203.81%203.81%200%200%200-.47%201.17%206.83%206.83%200%200%200%200%203c.09.413.25.809.47%201.17.195.311.459.575.77.77a1.9%201.9%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'all\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'single\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpolygon%20fill=%27%234285F4%27%20fill-rule=%27nonzero%27%0A%20%20%20%20%20%20points=%2723.8%2029.92%2023.8%2021.25%2021.8%2022.07%2020.87%2019.89%2024.28%2018.29%2026.28%2018.29%2026.28%2029.92%27%3E%3C/polygon%3E%0A%3C/svg%3E%0A")}.btn-shuffle .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-shuffle[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-captions .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20d=%27M7%208H41C42.65%208%2044%209.35%2044%2011V37C44%2038.65%2042.65%2040%2041%2040H7C5.35%2040%204%2038.65%204%2037V11C4%209.35%205.35%208%207%208ZM7%2037H41V11H7V37ZM16.21%2029.7801C15.43%2029.4501%2014.75%2029%2014.18%2028.43C13.61%2027.8601%2013.16%2027.18%2012.85%2026.4C12.52%2025.63%2012.36%2024.8%2012.36%2023.9C12.36%2023%2012.52%2022.17%2012.85%2021.4C13.18%2020.63%2013.63%2019.96%2014.2%2019.39C14.77%2018.82%2015.45%2018.3701%2016.23%2018.0401C17.01%2017.7101%2017.85%2017.55%2018.76%2017.55C19.75%2017.55%2020.62%2017.72%2021.35%2018.06C21.69%2018.22%2022.02%2018.41%2022.33%2018.64C22.91%2019.06%2022.97%2019.9%2022.46%2020.4L22.25%2020.6C21.85%2020.9901%2021.23%2021.03%2020.78%2020.71C20.759%2020.6965%2020.7377%2020.6828%2020.7163%2020.6689C20.5949%2020.5905%2020.4675%2020.508%2020.34%2020.4401C19.9%2020.1901%2019.37%2020.07%2018.76%2020.07C18.22%2020.07%2017.73%2020.16%2017.27%2020.34C16.81%2020.5201%2016.41%2020.7801%2016.07%2021.1201C15.73%2021.4601%2015.46%2021.87%2015.27%2022.34C15.08%2022.8101%2014.98%2023.33%2014.98%2023.91C14.98%2024.49%2015.08%2025.01%2015.27%2025.48C15.46%2025.95%2015.73%2026.3601%2016.07%2026.7001C16.41%2027.0401%2016.81%2027.3%2017.27%2027.48C17.73%2027.66%2018.23%2027.75%2018.76%2027.75C19.4%2027.75%2019.96%2027.6201%2020.44%2027.3601C20.65%2027.25%2020.86%2027.1101%2021.05%2026.9501C21.49%2026.59%2022.14%2026.6301%2022.55%2027.0201L22.76%2027.22C23.27%2027.69%2023.24%2028.5%2022.7%2028.9401C21.6%2029.83%2020.28%2030.2701%2018.74%2030.2701C17.84%2030.2701%2016.99%2030.1101%2016.21%2029.7801ZM28.86%2029.7801C28.08%2029.4501%2027.4%2029%2026.83%2028.43C26.26%2027.8601%2025.81%2027.18%2025.49%2026.4C25.16%2025.63%2025%2024.8%2025%2023.9C25%2023%2025.16%2022.17%2025.49%2021.4C25.82%2020.63%2026.27%2019.96%2026.84%2019.39C27.41%2018.82%2028.09%2018.3701%2028.87%2018.0401C29.65%2017.7101%2030.49%2017.55%2031.4%2017.55C32.39%2017.55%2033.26%2017.72%2033.99%2018.06C34.29%2018.2%2034.58%2018.37%2034.86%2018.56C35.51%2019%2035.57%2019.94%2035.01%2020.49L34.96%2020.5401C34.53%2020.9601%2033.86%2021%2033.36%2020.66C33.25%2020.58%2033.13%2020.51%2033%2020.4401C32.56%2020.1901%2032.03%2020.07%2031.42%2020.07C30.89%2020.07%2030.39%2020.16%2029.93%2020.34C29.47%2020.5201%2029.07%2020.7801%2028.73%2021.1201C28.39%2021.4601%2028.12%2021.87%2027.93%2022.34C27.74%2022.8101%2027.64%2023.33%2027.64%2023.91C27.64%2024.49%2027.74%2025.01%2027.93%2025.48C28.12%2025.95%2028.39%2026.3601%2028.73%2026.7001C29.07%2027.0401%2029.47%2027.3%2029.93%2027.48C30.39%2027.66%2030.89%2027.75%2031.42%2027.75C32.06%2027.75%2032.62%2027.6201%2033.1%2027.3601C33.28%2027.26%2033.46%2027.14%2033.63%2027.01C34.12%2026.6201%2034.82%2026.65%2035.28%2027.08L35.32%2027.1201C35.89%2027.6601%2035.83%2028.58%2035.21%2029.05C34.14%2029.86%2032.87%2030.2701%2031.39%2030.2701C30.49%2030.2701%2029.64%2030.1101%2028.86%2029.7801Z%27%0A%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27evenodd%27/%3E%0A%3C/svg%3E%0A")}.btn-captions[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20d=%27m%2028.86%2C29.7801%20c%200.78%2C0.33%201.63%2C0.49%202.53%2C0.49%201.48%2C0%202.75%2C-0.4101%203.82%2C-1.2201%200.62%2C-0.47%200.68%2C-1.3899%200.11%2C-1.9299%20L%2035.28%2C27.08%20c%20-0.46%2C-0.43%20-1.16%2C-0.4599%20-1.65%2C-0.07%20-0.17%2C0.13%20-0.35%2C0.25%20-0.53%2C0.3501%20-0.48%2C0.26%20-1.04%2C0.3899%20-1.68%2C0.3899%20-0.53%2C0%20-1.03%2C-0.09%20-1.49%2C-0.27%20-0.46%2C-0.18%20-0.86%2C-0.4399%20-1.2%2C-0.7799%20-0.34%2C-0.34%20-0.61%2C-0.7501%20-0.8%2C-1.2201%20-0.19%2C-0.47%20-0.29%2C-0.99%20-0.29%2C-1.57%200%2C-0.58%200.1%2C-1.0999%200.29%2C-1.57%200.19%2C-0.47%200.46%2C-0.8799%200.8%2C-1.2199%200.34%2C-0.34%200.74%2C-0.6%201.2%2C-0.7801%200.46%2C-0.18%200.96%2C-0.27%201.49%2C-0.27%200.61%2C0%201.14%2C0.1201%201.58%2C0.3701%200.13%2C0.0699%200.25%2C0.1399%200.36%2C0.2199%200.5%2C0.34%201.17%2C0.3001%201.6%2C-0.1199%20L%2035.01%2C20.49%20c%200.56%2C-0.55%200.5%2C-1.49%20-0.15%2C-1.93%20-0.28%2C-0.19%20-0.57%2C-0.36%20-0.87%2C-0.5%20-0.73%2C-0.34%20-1.6%2C-0.51%20-2.59%2C-0.51%20-0.91%2C0%20-1.75%2C0.1601%20-2.53%2C0.4901%20-0.78%2C0.33%20-1.46%2C0.7799%20-2.03%2C1.3499%20-0.57%2C0.57%20-1.02%2C1.24%20-1.35%2C2.01%20C%2025.16%2C22.17%2025%2C23%2025%2C23.9%20c%200%2C0.9%200.16%2C1.73%200.49%2C2.5%200.32%2C0.78%200.77%2C1.4601%201.34%2C2.03%200.57%2C0.57%201.25%2C1.0201%202.03%2C1.3501%20z%20m%20-12.65%2C0%20c%200.78%2C0.33%201.63%2C0.49%202.53%2C0.49%201.54%2C0%202.86%2C-0.4401%203.96%2C-1.33%20C%2023.24%2C28.5%2023.27%2C27.69%2022.76%2C27.22%20l%20-0.21%2C-0.1999%20c%20-0.41%2C-0.39%20-1.06%2C-0.4301%20-1.5%2C-0.07%20-0.19%2C0.16%20-0.4%2C0.2999%20-0.61%2C0.41%20-0.48%2C0.26%20-1.04%2C0.3899%20-1.68%2C0.3899%20-0.53%2C0%20-1.03%2C-0.09%20-1.49%2C-0.27%20-0.46%2C-0.18%20-0.86%2C-0.4399%20-1.2%2C-0.7799%20-0.34%2C-0.34%20-0.61%2C-0.7501%20-0.8%2C-1.2201%20-0.19%2C-0.47%20-0.29%2C-0.99%20-0.29%2C-1.57%200%2C-0.58%200.1%2C-1.0999%200.29%2C-1.57%200.19%2C-0.47%200.46%2C-0.8799%200.8%2C-1.2199%200.34%2C-0.34%200.74%2C-0.6%201.2%2C-0.7801%200.46%2C-0.18%200.95%2C-0.27%201.49%2C-0.27%200.61%2C0%201.14%2C0.1201%201.58%2C0.3701%200.1275%2C0.0679%200.2549%2C0.1504%200.3763%2C0.2288%200.0214%2C0.0139%200.0427%2C0.0276%200.0637%2C0.0411%200.45%2C0.32%201.07%2C0.2801%201.47%2C-0.11%20l%200.21%2C-0.2%20c%200.51%2C-0.5%200.45%2C-1.34%20-0.13%2C-1.76%20-0.31%2C-0.23%20-0.64%2C-0.42%20-0.98%2C-0.58%20-0.73%2C-0.34%20-1.6%2C-0.51%20-2.59%2C-0.51%20-0.91%2C0%20-1.75%2C0.1601%20-2.53%2C0.4901%20-0.78%2C0.33%20-1.46%2C0.7799%20-2.03%2C1.3499%20-0.57%2C0.57%20-1.02%2C1.24%20-1.35%2C2.01%20-0.33%2C0.77%20-0.49%2C1.6%20-0.49%2C2.5%200%2C0.9%200.16%2C1.73%200.49%2C2.5%200.31%2C0.78%200.76%2C1.4601%201.33%2C2.03%200.57%2C0.57%201.25%2C1.0201%202.03%2C1.3501%20z%20M%207%2C8%20C%205.35%2C8%204%2C9.35%204%2C11%20v%2026%20c%200%2C1.65%201.35%2C3%203%2C3%20h%2034%20c%201.65%2C0%203%2C-1.35%203%2C-3%20V%2011%20C%2044%2C9.35%2042.65%2C8%2041%2C8%20Z%27%0A%20%20%20%20%20fill=%27%234285F4%27%20fill-rule=%27evenodd%27/%3E%0A%3C/svg%3E%0A")}.btn-like .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2C41.5a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-21a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0Zm29.82.21A2.59%2C2.59%2C0%2C0%2C1%2C34.31%2C43H11.5A1.5%2C1.5%2C0%2C0%2C1%2C10%2C41.5v-22a1.5%2C1.5%2C0%2C0%2C1%2C.44-1.06l11-11A11%2C11%2C0%2C0%2C1%2C22.8%2C6.28a7.15%2C7.15%2C0%2C0%2C1%2C2.15-1.12%2C3.31%2C3.31%2C0%2C0%2C1%2C2.89.35%2C5%2C5%2C0%2C0%2C1%2C2%2C2.89%2C7.94%2C7.94%2C0%2C0%2C1%2C.2%2C3c0%2C.18%2C0%2C.33-.06.42a1.5%2C1.5%2C0%2C0%2C1-.07.25l-2.24%2C6H39c2.81%2C0%2C5%2C2.63%2C5%2C5.5v2.94a3.36%2C3.36%2C0%2C0%2C1-.42%2C1.43ZM33.5%2C40h.83L40.9%2C26.5l.05-.1s0-1%2C0-2.9A2.39%2C2.39%2C0%2C0%2C0%2C39%2C21H25.5a1.5%2C1.5%2C0%2C0%2C1-1.4-2L27%2C11.12a5.21%2C5.21%2C0%2C0%2C0-.1-1.93A2%2C2%2C0%2C0%2C0%2C26.16%2C8S26%2C8%2C25.8%2C8a4.37%2C4.37%2C0%2C0%2C0-1.23.67%2C8.89%2C8.89%2C0%2C0%2C0-.73.59l-.28.26L13%2C20.12V40Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-like[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2C41.5a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-21a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0Zm29.82.21A2.59%2C2.59%2C0%2C0%2C1%2C34.31%2C43H11.5A1.5%2C1.5%2C0%2C0%2C1%2C10%2C41.5v-22a1.5%2C1.5%2C0%2C0%2C1%2C.44-1.06l11-11A11%2C11%2C0%2C0%2C1%2C22.8%2C6.28a7.15%2C7.15%2C0%2C0%2C1%2C2.15-1.12%2C3.31%2C3.31%2C0%2C0%2C1%2C2.89.35%2C5%2C5%2C0%2C0%2C1%2C2%2C2.89%2C7.94%2C7.94%2C0%2C0%2C1%2C.2%2C3c0%2C.18%2C0%2C.33-.06.42a1.5%2C1.5%2C0%2C0%2C1-.07.25l-2.24%2C6H39c2.81%2C0%2C5%2C2.63%2C5%2C5.5v2.94a3.36%2C3.36%2C0%2C0%2C1-.42%2C1.43ZM33.5%2C40h.83L40.9%2C26.5l.05-.1s0-1%2C0-2.9A2.39%2C2.39%2C0%2C0%2C0%2C39%2C21H25.5a1.5%2C1.5%2C0%2C0%2C1-1.4-2L27%2C11.12a5.21%2C5.21%2C0%2C0%2C0-.1-1.93A2%2C2%2C0%2C0%2C0%2C26.16%2C8S26%2C8%2C25.8%2C8a4.37%2C4.37%2C0%2C0%2C0-1.23.67%2C8.89%2C8.89%2C0%2C0%2C0-.73.59l-.28.26L13%2C20.12V40Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-dislike .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C6.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v21a1.5%2C1.5%2C0%2C0%2C1-3%2C0ZM11.18%2C6.29A2.59%2C2.59%2C0%2C0%2C1%2C13.69%2C5H36.5A1.5%2C1.5%2C0%2C0%2C1%2C38%2C6.5v22a1.5%2C1.5%2C0%2C0%2C1-.44%2C1.06l-11%2C11a11%2C11%2C0%2C0%2C1-1.38%2C1.18%2C7.15%2C7.15%2C0%2C0%2C1-2.15%2C1.12%2C3.31%2C3.31%2C0%2C0%2C1-2.89-.35%2C5%2C5%2C0%2C0%2C1-2-2.89%2C7.94%2C7.94%2C0%2C0%2C1-.2-3c0-.18%2C0-.33.06-.42A1.5%2C1.5%2C0%2C0%2C1%2C18.1%2C36l2.24-6H9c-2.81%2C0-5-2.63-5-5.5V21.56a3.36%2C3.36%2C0%2C0%2C1%2C.42-1.43ZM35%2C8H13.67L7.1%2C21.5%2C7%2C21.6s0%2C1%2C0%2C2.9A2.39%2C2.39%2C0%2C0%2C0%2C9%2C27H22.5a1.5%2C1.5%2C0%2C0%2C1%2C1.4%2C2L21%2C36.88a5.21%2C5.21%2C0%2C0%2C0%2C.1%2C1.93%2C2%2C2%2C0%2C0%2C0%2C.78%2C1.2s.12%2C0%2C.36%2C0a4.37%2C4.37%2C0%2C0%2C0%2C1.23-.67%2C8.89%2C8.89%2C0%2C0%2C0%2C.73-.59l.28-.26L35%2C27.88Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-dislike[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C6.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v21a1.5%2C1.5%2C0%2C0%2C1-3%2C0ZM11.18%2C6.29A2.59%2C2.59%2C0%2C0%2C1%2C13.69%2C5H36.5A1.5%2C1.5%2C0%2C0%2C1%2C38%2C6.5v22a1.5%2C1.5%2C0%2C0%2C1-.44%2C1.06l-11%2C11a11%2C11%2C0%2C0%2C1-1.38%2C1.18%2C7.15%2C7.15%2C0%2C0%2C1-2.15%2C1.12%2C3.31%2C3.31%2C0%2C0%2C1-2.89-.35%2C5%2C5%2C0%2C0%2C1-2-2.89%2C7.94%2C7.94%2C0%2C0%2C1-.2-3c0-.18%2C0-.33.06-.42A1.5%2C1.5%2C0%2C0%2C1%2C18.1%2C36l2.24-6H9c-2.81%2C0-5-2.63-5-5.5V21.56a3.36%2C3.36%2C0%2C0%2C1%2C.42-1.43ZM35%2C8H13.67L7.1%2C21.5%2C7%2C21.6s0%2C1%2C0%2C2.9A2.39%2C2.39%2C0%2C0%2C0%2C9%2C27H22.5a1.5%2C1.5%2C0%2C0%2C1%2C1.4%2C2L21%2C36.88a5.21%2C5.21%2C0%2C0%2C0%2C.1%2C1.93%2C2%2C2%2C0%2C0%2C0%2C.78%2C1.2s.12%2C0%2C.36%2C0a4.37%2C4.37%2C0%2C0%2C0%2C1.23-.67%2C8.89%2C8.89%2C0%2C0%2C0%2C.73-.59l.28-.26L35%2C27.88Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-like-heart .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27m%2033.0002%2C9%20c%201.66%2C0%203.21%2C0.49%204.62%2C1.45%202%2C1.37%203.29%2C3.74%203.38%2C6.21%200.22%2C6.37%20-6.26%2C12.25%20-16.11%2C21.18%20l%20-0.89%2C0.81%20-0.87%2C-0.79%20-0.08%2C-0.07%20C%2013.2602%2C28.89%206.7902003%2C23.02%207.0202003%2C16.66%20c%200.09%2C-2.46%201.38%2C-4.84%203.3799997%2C-6.21%201.39%2C-0.96%202.94%2C-1.45%204.6%2C-1.45%202.540001%2C0%205.050001%2C1.17%206.720001%2C3.13%20l%202.279999%2C2.68%202.28%2C-2.68%20c%201.67%2C-1.96%204.18%2C-3.13%206.72%2C-3.13%20z%20m%20-18%2C-3%20c%20-2.13%2C0%20-4.31%2C0.61%20-6.3099997%2C1.98%20-2.81%2C1.92%20-4.559996%2C5.17%20-4.679997%2C8.58%20-0.279999%2C7.76%206.5899967%2C13.98%2017.0899977%2C23.52%20l%201.549999%2C1.4%20c%200.38%2C0.34%200.86%2C0.52%201.34%2C0.52%200.48%2C0%200.96%2C-0.17%201.35%2C-0.52%20l%201.56%2C-1.42%20c%2010.5%2C-9.52%2017.37%2C-15.74%2017.09%2C-23.51%20-0.12%2C-3.4%20-1.87%2C-6.65%20-4.68%2C-8.58%20-2%2C-1.36%20-4.18%2C-1.97%20-6.31%2C-1.97%20-3.48%2C0%20-6.82%2C1.62%20-9%2C4.18%20C%2021.820201%2C7.62%2018.480201%2C6%2015.0002%2C6%20Z%27%0A%20%20%20%20%20fill=%27%23fff%27%20/%3E%0A%3C/svg%3E%0A")}.btn-like-heart[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20d=%27m%2015.0002%2C6%20c%20-2.13%2C0%20-4.31%2C0.61%20-6.3099997%2C1.98%20-2.81%2C1.92%20-4.559996%2C5.17%20-4.679997%2C8.58%20-0.279999%2C7.76%206.5899967%2C13.98%2017.0899977%2C23.52%20l%201.549999%2C1.4%20c%200.38%2C0.34%200.86%2C0.52%201.34%2C0.52%200.48%2C0%200.96%2C-0.17%201.35%2C-0.52%20l%201.56%2C-1.42%20c%2010.5%2C-9.52%2017.37%2C-15.74%2017.09%2C-23.51%20-0.12%2C-3.4%20-1.87%2C-6.65%20-4.68%2C-8.58%20-2%2C-1.36%20-4.18%2C-1.97%20-6.31%2C-1.97%20-3.48%2C0%20-6.82%2C1.62%20-9%2C4.18%20C%2021.820201%2C7.62%2018.480201%2C6%2015.0002%2C6%20Z%27%0A%20%20%20%20%20fill=%27%234285F4%27%20/%3E%0A%3C/svg%3E%0A")}.btn-lyrics .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20fill=%27%23fff%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cline%20x1=%2715.5%27%20y1=%2722.5%27%20x2=%2722.5%27%20y2=%2722.5%27%20stroke=%27%23fff%27%20stroke-width=%273%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2715.5%27%20y1=%2727.5%27%20x2=%2720.5%27%20y2=%2727.5%27%20stroke=%27%23fff%27%20stroke-width=%273%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2715.5%27%20y1=%2732.5%27%20x2=%2723.5%27%20y2=%2732.5%27%20stroke=%27%23fff%27%20stroke-width=%273%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2715.5%27%20y1=%2717.5%27%20x2=%2723.5%27%20y2=%2717.5%27%20stroke=%27%23fff%27%20stroke-width=%273%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M%2012%2010%20C%209.809948%2010%208%2011.809948%208%2014%20L%208%2036%20C%208%2038.190052%209.809948%2040%2012%2040%20L%2027%2040%20C%2029.190052%2040%2031%2038.190052%2031%2036%20L%2031%2031.714844%20A%208%208%200%200%201%2028%2030.228516%20L%2028%2036%20C%2028%2036.579945%2027.579945%2037%2027%2037%20L%2012%2037%20C%2011.420055%2037%2011%2036.579945%2011%2036%20L%2011%2014%20C%2011%2013.420055%2011.420055%2013%2012%2013%20L%2027%2013%20C%2027.579945%2013%2028%2013.420055%2028%2014%20L%2028%2017.771484%20A%208%208%200%200%201%2031%2016.285156%20L%2031%2014%20C%2031%2011.809948%2029.190052%2010%2027%2010%20L%2012%2010%20z%20%27/%3E%0A%20%20%3Cpath%20d=%27M8%2044V36L14%2039.5556L8%2044Z%27/%3E%0A%20%20%3Ccircle%20cx=%2733%27%20cy=%2724%27%20r=%275%27/%3E%0A%20%20%3Cline%20x1=%2736%27%20y1=%277%27%20x2=%2736%27%20y2=%2724%27%20stroke=%27%23fff%27%20stroke-width=%274%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2736.5%27%20y1=%276.5%27%20x2=%2740.5%27%20y2=%276.5%27%20stroke=%27%23fff%27%20stroke-width=%275%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%3C/svg%3E%0A")}.btn-lyrics[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20fill=%27%234285f4%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M%2012%2010%20C%209.809948%2010%208%2011.809948%208%2014%20L%208%2036%20C%208%2038.190052%209.809948%2040%2012%2040%20L%2028%2040%20C%2030.190052%2040%2032%2038.190052%2032%2036%20L%2032%2031.744141%20C%2028.558945%2030.850609%2026%2027.710773%2026%2024%20C%2026%2020.289227%2028.558945%2017.149391%2032%2016.255859%20L%2032%2014%20C%2032%2011.809948%2030.190052%2010%2028%2010%20L%2012%2010%20z%20M%2015.5%2016%20L%2023.5%2016%20A%201.5%201.5%200%200%201%2025%2017.5%20A%201.5%201.5%200%200%201%2023.5%2019%20L%2015.5%2019%20A%201.5%201.5%200%200%201%2014%2017.5%20A%201.5%201.5%200%200%201%2015.5%2016%20z%20M%2015.5%2021%20L%2022.5%2021%20A%201.5%201.5%200%200%201%2024%2022.5%20A%201.5%201.5%200%200%201%2022.5%2024%20L%2015.5%2024%20A%201.5%201.5%200%200%201%2014%2022.5%20A%201.5%201.5%200%200%201%2015.5%2021%20z%20M%2015.5%2026%20L%2020.5%2026%20A%201.5%201.5%200%200%201%2022%2027.5%20A%201.5%201.5%200%200%201%2020.5%2029%20L%2015.5%2029%20A%201.5%201.5%200%200%201%2014%2027.5%20A%201.5%201.5%200%200%201%2015.5%2026%20z%20M%2015.5%2031%20L%2023.5%2031%20A%201.5%201.5%200%200%201%2025%2032.5%20A%201.5%201.5%200%200%201%2023.5%2034%20L%2015.5%2034%20A%201.5%201.5%200%200%201%2014%2032.5%20A%201.5%201.5%200%200%201%2015.5%2031%20z%20%27/%3E%0A%20%20%3Cpath%20d=%27M8%2044V36L14%2039.5556L8%2044Z%27/%3E%0A%20%20%3Ccircle%20cx=%2734%27%20cy=%2724%27%20r=%275%27/%3E%0A%20%20%3Cline%20x1=%2737%27%20y1=%277%27%20x2=%2737%27%20y2=%2724%27%20stroke=%27%234285f4%27%20stroke-width=%274%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%20%20%3Cline%20x1=%2737.5%27%20y1=%276.5%27%20x2=%2741.5%27%20y2=%276.5%27%20stroke=%27%234285f4%27%20stroke-width=%275%27%0A%20%20%20%20%20%20stroke-linecap=%27round%27/%3E%0A%3C/svg%3E%0A")}.btn-sleep-timer .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%3E%0A%20%20%20%20%3Cpath%20fill=%27%23fff%27%20d=%27M24%2C8%20C28.44%2C8%2032.48%2C9.62%2035.64%2C12.26%20L35.64%2C12.26%20L37.94%2C9.94%20C38.52%2C9.36%2039.48%2C9.36%2040.06%2C9.94%20C40.64%2C10.52%2040.64%2C11.48%2040.06%2C12.06%20L40.06%2C12.06%20L37.74%2C14.4%20C40.4%2C17.52%2042%2C21.58%2042%2C26%20C42%2C35.94%2033.94%2C44%2024%2C44%20C14.06%2C44%206%2C35.94%206%2C26%20C6%2C16.06%2014.06%2C8%2024%2C8%20Z%20M24%2C11%20C15.72%2C11%209%2C17.72%209%2C26%20C9%2C34.28%2015.72%2C41%2024%2C41%20C32.28%2C41%2039%2C34.28%2039%2C26%20C39%2C17.72%2032.28%2C11%2024%2C11%20Z%20M24%2C14%20C24.82%2C14%2025.5%2C14.68%2025.5%2C15.5%20L25.5%2C15.5%20L25.5%2C26.5%20C25.5%2C27.32%2024.82%2C28%2024%2C28%20C23.18%2C28%2022.5%2C27.32%2022.5%2C26.5%20L22.5%2C26.5%20L22.5%2C15.5%20C22.5%2C14.68%2023.18%2C14%2024%2C14%20Z%20M30.5%2C3%20C31.32%2C3%2032%2C3.68%2032%2C4.5%20C32%2C5.32%2031.32%2C6%2030.5%2C6%20L30.5%2C6%20L17.5%2C6%20C16.68%2C6%2016%2C5.32%2016%2C4.5%20C16%2C3.68%2016.68%2C3%2017.5%2C3%20L17.5%2C3%20Z%27%3E%3C/path%3E%0A%3C/svg%3E%0A")}goog-timeline{flex:none;display:block;margin-bottom:-13px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){goog-timeline{margin-bottom:1px}}.time-numbers .left{float:left}.time-numbers .right{float:right;height:24px}.time-numbers .right .time-indicator{margin-left:16px}.time-numbers:after{clear:both;content:"";display:table}.time-indicator,.live-label{display:inline-block;font-size:24px;line-height:24px;opacity:.5}.live-label.live-edge{opacity:1}.live-label.live-edge::before{display:inline-block;width:8px;height:8px;vertical-align:15%;margin-right:10px;background-color:#fa5847;content:\'\';border-radius:8px}.scrubber-layer{margin:-15px 0;height:60px;position:relative}.scrubber-layer.live .progress-fill,.scrubber-layer.live .scrubber::-webkit-slider-thumb{background-color:#fa5847}.progress-bar{background-color:rgba(255,255,255,0.4);border-radius:2px;height:4px;left:0;overflow:hidden;position:absolute;top:28px;width:100%}.progress-fill{background-color:#fff;height:100%;left:0;position:absolute;top:0;transform:scaleX(0);transform-origin:left center;width:100%;will-change:transform}.progress-fill.break{background-color:#fbbc04}.progress-seekable-range,.progress-seekable-played{height:100%;position:absolute;top:0}.progress-seekable-played{background-color:#fa5847}.progress-seekable-range{background-color:rgba(255,255,255,0.5)}.progress-breaks{height:100%;left:0;position:absolute;top:0;width:100%}.break-mark{position:absolute;height:100%;background-color:#fbbc04}.progress-loading{height:100%;right:0;position:absolute;top:0;transform-origin:right center;will-change:transform}input[type=range].scrubber{-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-focus-ring-color:rgba(255,255,255,0);-webkit-appearance:none;background-color:transparent;height:60px;left:0;margin:0;outline:none;position:absolute;top:0;width:100%;will-change:transform}input[type=range].scrubber::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;border-radius:2px;cursor:pointer;height:24px;margin-top:18px;width:4px}input[type=range].scrubber::-webkit-slider-runnable-track{background:transparent;cursor:pointer;height:60px;width:100%}input[type=range].scrubber[disabled]::-webkit-slider-thumb{display:none}</style><div class=playback-layer><audio-player-compatibility-placeholder></audio-player-compatibility-placeholder><div class=scrim></div><div class=buffering-scrim></div><div class=controls-layer id=controls-layer><div class=controls-toggle id=controls-toggle role=button></div><goog-video-metadata></goog-video-metadata><div class=controls id=controls><goog-timeline></goog-timeline><goog-buttons-bar></goog-buttons-bar></div></div><goog-break-ui></goog-break-ui><div aria-live=assertive class=accessibility-alert id=alert-show-controls style="display: none;"></div><div aria-live=assertive class=accessibility-alert id=alert-hide-controls style="display: none;"></div></div><div class=media-browse-scrim></div><goog-media-browse></goog-media-browse>'
    };
    _.r(Ap, _.Sd);
    _.r(vp, _.C);
    _.r(wp, _.C);
    _.r(xp, _.C);
    _.r(Bp, _.C);
    _.r(zp, _.C);
    var $B = _.D("cast.receiver.ui.TouchLayerController");
    _.h = Fp.prototype;
    _.h.Mh = function() {
        this.U = !0;
        this.j.classList.add("compatibility-mode-scrim")
    };
    _.h.Df = function(a) {
        this.N || (this.W = a, Cp(this))
    };
    _.h.Oh = function(a) {
        this.B = a;
        this.H = this.B === cast.receiver.C.Ka.AUDIO || this.G ? 8E3 : 4500;
        this.h.l = this.H;
        Cp(this)
    };
    _.h.Mc = function() {};
    _.h.Cf = function(a) {
        this.M !== a && _.I($B, "<touch-controls> element is " + (a ? "disabled" : "enabled"));
        this.M = a;
        this.j.classList.toggle("disabled", a);
        Yd(this.h, a)
    };
    _.h.nh = function(a) {
        this.j.classList.toggle("buffering", a)
    };
    _.h.Qh = function() {
        var a = this.h;
        a.h = !0;
        Vd(a);
        this.l && (this.l = !1, $d(this.h))
    };
    _.h.Ph = function() {
        var a = this.h;
        a.h = !1;
        Vd(a);
        this.l || Gp(this);
        this.l = !0
    };
    _.h.Nh = function(a) {
        this.G = a;
        Cp(this)
    };
    _.h.Rh = function(a) {
        this.N = a;
        var b = this.h;
        b.A = a;
        Vd(b);
        a && Gp(this)
    };
    cast.receiver.C.rn = function(a) {
        a.innerHTML = '<div class=top-images-container><div class=logo id=logo></div><div class=top-right-video-overlay-image id=top-right-video-overlay-image></div></div><div class=subtitle-container><h2 class=subtitle id=subtitle></h2></div><h1 class=title id=title></h1><h1 class=title id=break-title style="display: none"></h1>'
    };
    _.r(Hp, $c);
    Hp.prototype.setTitle = function(a) {
        this.l.textContent = a || ""
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-video-metadata", Hp);
    var Kp = _.D("cast.receiver.ui.TouchControlsElement");
    _.r(Mp, $c);
    Mp.prototype.connectedCallback = function() {
        var a = this;
        _.I(Kp, "<touch-controls> element is connected to the DOM.");
        _.u.addEventListener("resize", function() {
            return Np(a)
        });
        Np(this)
    };
    Mp.prototype.la = function(a, b) {
        this.o.la(a, b)
    };
    Mp.prototype.Mb = function(a) {
        this.J || (this.j.Mb(a), rp(this.D), this.A.classList.toggle("with-related-content", !!this.j.h))
    };
    Mp.prototype.setTitle = function(a) {
        this.F.setTitle(a);
        this.l && this.l.setTitle(a)
    };
    window.customElements && window.customElements.define && window.customElements.define("touch-controls", Mp);
    cast.receiver.C.pn = Mp;
    var Wp = _.D("cast.receiver.ui.ControlsImplementationBase");
    _.r(Zp, _.A);
    _.h = Zp.prototype;
    _.h.Mi = function() {
        return new nl("__touch_controls__")
    };
    _.h.la = function(a, b, c) {
        var d = a,
            e = {};
        a = (e[cast.receiver.C.ga.SLOT_1] = cast.receiver.C.ga.SLOT_SECONDARY_1, e[cast.receiver.C.ga.SLOT_2] = cast.receiver.C.ga.SLOT_PRIMARY_1, e[cast.receiver.C.ga.SLOT_3] = cast.receiver.C.ga.SLOT_PRIMARY_2, e[cast.receiver.C.ga.SLOT_4] = cast.receiver.C.ga.SLOT_SECONDARY_2, e)[a] || a;
        if (!Object.values(cast.receiver.C.R).includes(b)) throw Error("Invalid controls button name '" + b + "'");
        if (!Object.values(cast.receiver.C.ga).includes(a)) throw Error("Invalid controls slot name '" + a + "'");
        if (!(e = b !== cast.receiver.C.R.SLEEP_TIMER)) {
            e = _.Tg.L().pc();
            e = !(!e || !e.sleep_timer_overlay_supported);
            var f = cast.receiver.Bb.L();
            f = Cf(f, "enable_sleep_timer_button");
            e = e && f
        }
        e ? (c && this.A[a] !== b && z("Cast.Controls.ButtonAssignedTo_" + d, jd[b] || 0), b !== cast.receiver.C.R.NO_BUTTON ? this.A[a] !== b && (this.h.la(a, this.l[b]), this.A[a] = b) : (this.h.la(a, null), delete this.A[a])) : _.E(Wp, "Sleep timer overlay is not supported on this device")
    };
    _.h.Bd = function() {
        this.la(cast.receiver.C.ga.SLOT_SECONDARY_1, cast.receiver.C.R.NO_BUTTON);
        this.la(cast.receiver.C.ga.SLOT_PRIMARY_1, cast.receiver.C.R.NO_BUTTON);
        this.la(cast.receiver.C.ga.SLOT_PRIMARY_2, cast.receiver.C.R.NO_BUTTON);
        this.la(cast.receiver.C.ga.SLOT_SECONDARY_2, cast.receiver.C.R.NO_BUTTON);
        this.T = !1
    };
    _.h.displayMetadata = function(a) {
        var b = this.Z,
            c, d = "";
        var e = c = "";
        var f = [];
        if (a) switch (a.metadataType) {
            case 3:
                d = a.title;
                c = a.artist || a.albumArtist || a.composer;
                e = a.albumName;
                Df() && (c = [e, c].join(" \u2022 "));
                f = a.images;
                break;
            case 5:
                d = a.chapterTitle || a.title;
                c = a.bookTitle || a.subtitle;
                f = a.images;
                break;
            case 4:
                d = a.title;
                c = a.artist;
                break;
            case 2:
                d = a.title;
                if (a.season || a.episode) c = cast.receiver.V.ig(a.season, a.episode);
                f = a.images;
                break;
            case 1:
                d = a.title;
                c = a.subtitle;
                f = a.images;
                break;
            case 0:
                d = a.title;
                c = a.subtitle;
                f = a.images;
                break;
            default:
                _.E(iB, "Unexpected metadata type: " + a.metadataType)
        }
        a = d ? d : cast.receiver.V.Fb(cast.receiver.V.ii, {
            APP_NAME: b || ""
        });
        c = c || "";
        e = e || "";
        (f = f && f[0] && f[0].url || "") && "string" !== typeof f && (_.E(iB, "Unknown item image url type"), f = "");
        this.h.setTitle(a);
        a = this.h;
        a.F.j.textContent = c || "";
        a.l && (a.l.A.textContent = c);
        a = this.h;
        a.l && (a.l.o.textContent = e);
        a = this.h;
        a.l && (c = a.l, f ? (c.style.setProperty("--album-art-image", cast.receiver.C.Y.Ua(f)), c.j.src = f) : (c.style.removeProperty("--album-art-image"),
            c.j.src = ""));
        a = a.j.o;
        f = f || "";
        a.j !== f && (a.j = f, qo(a))
    };
    _.h.dispose = function() {
        _.A.prototype.dispose.call(this);
        this.fa.remove();
        this.h.remove()
    };
    var hq = _.D("cast.receiver.ui.KeyEventsHandlerBase");
    _.r(fq, _.A);
    fq.prototype.dispose = function() {
        _.A.prototype.dispose.call(this);
        this.l && this.l.removeEventListener("keydown", this.A)
    };
    var oq = _.D("cast.receiver.ui.ControlsBase");
    _.r(jq, _.A);
    jq.prototype.Bd = function() {
        var a = this;
        mq(this, function() {
            a.h.Bd()
        })
    };
    jq.prototype.dispose = function() {
        _.A.prototype.dispose.call(this);
        this.j && this.j.remove()
    };
    jq.prototype.rg = function() {
        var a = window.document.createElement("div");
        a.style.position = "absolute";
        a.style.visibility = "hidden";
        a.style.left = "-1000px";
        a.style.setProperty("height", "var(--cast-controls-safe-area-height)");
        window.document.body.appendChild(a);
        var b = parseInt(window.getComputedStyle(a, null).height, 10);
        a.remove();
        return b
    };
    jq.prototype.xg = function() {
        return this.l.promise
    };
    cast.receiver.C.Gk = jq;
    cast.receiver.crypto = {};
    cast.receiver.cryptokeys = {};
    cast.receiver.crypto.ld = window.crypto && window.crypto.subtle || {};
    cast.receiver.crypto.zr = !(!cast.__platform__ || !cast.__platform__.cryptokeys);
    cast.receiver.crypto.hd = !(!cast.__platform__ || !cast.__platform__.crypto);
    cast.receiver.cryptokeys.getKeyByName = cast.receiver.crypto.zr ? cast.__platform__.cryptokeys.getKeyByName : window.cryptokeys && window.cryptokeys.getKeyByName;
    cast.receiver.crypto.decrypt = cast.receiver.crypto.hd ? cast.__platform__.crypto.decrypt : cast.receiver.crypto.ld.decrypt;
    cast.receiver.crypto.encrypt = cast.receiver.crypto.hd ? cast.__platform__.crypto.encrypt : cast.receiver.crypto.ld.encrypt;
    cast.receiver.crypto.sign = cast.receiver.crypto.hd ? cast.__platform__.crypto.sign : cast.receiver.crypto.ld.sign;
    cast.receiver.crypto.unwrapKey = cast.receiver.crypto.hd ? cast.__platform__.crypto.unwrapKey : cast.receiver.crypto.ld.unwrapKey;
    cast.receiver.crypto.verify = cast.receiver.crypto.hd ? cast.__platform__.crypto.verify : cast.receiver.crypto.ld.verify;
    cast.receiver.crypto.wrapKey = cast.receiver.crypto.hd ? cast.__platform__.crypto.wrapKey : cast.receiver.crypto.ld.wrapKey;
    pq.prototype.I = function(a) {
        _.I(tq, "DebugOverlay: " + JSON.stringify(a.data));
        switch (a.data.type) {
            case "SHOW":
                qq(this);
                break;
            case "HIDE":
                rq(this)
        }
    };
    pq.prototype.G = function() {
        var a = this.h;
        if (a && sq(a)) {
            var b = a.videoWidth || 0,
                c = a.videoHeight || 0,
                d = 0;
            if (a.paused || a.seeking) _.se(tq, "not calculating fps because paused or seeking");
            else {
                d = a.webkitDecodedFrameCount;
                a = a.currentTime;
                var e = 0;
                if (0 < this.l.length && 0 < this.o.length) {
                    var f = this.l[0],
                        g = this.o[0];
                    a > f && d > g && (e = (d - g) / (a - f))
                }
                this.l.push(a);
                this.o.push(d);
                5 <= this.l.length && 5 <= this.o.length && (this.l.splice(0, this.l.length - 5), this.o.splice(0, this.o.length - 5));
                d = e
            }
            b = b + "x" + c + "(" + (0 < d ? Math.round(d).toString() :
                "?") + ")";
            _.se(tq, "video is " + b);
            this.A.textContent = b
        } else if (_.se(tq, "video is no longer active, restarting search procedure"), this.h || this.j) rq(this), qq(this)
    };
    pq.prototype.F = function() {
        _.I(tq, "onSeeking");
        this.l = [this.h.currentTime];
        this.o = [this.h.webkitDecodedFrameCount]
    };
    pq.prototype.H = function() {
        function a(c) {
            for (var d = _.q(c.document.getElementsByTagName("video")), e = d.next(); !e.done; e = d.next())
                if (e = e.value, sq(e)) return e;
            for (d = 0; d < c.frames.length; ++d) try {
                var f = a(c.frames[d]);
                if (f) return f
            } catch (g) {}
            return null
        }
        var b = a(window) || this.D;
        b && uq(this, b)
    };
    var tq = _.D("cast.receiver.DebugOverlay"),
        aC = new pq;
    cast.receiver.eme = {};
    cast.receiver.eme.Nr = new Uint8Array([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]);
    cast.receiver.eme.$r = 2;
    cast.receiver.bc = {};
    cast.receiver.Ki = _.D("cast");
    cast.receiver.bc.Pj = function(a) {
        if (cast.receiver.Ki) {
            var b = cast.receiver.Ki;
            a: {
                if (!UA) {
                    UA = {};
                    for (var c = 0, d; d = TA[c]; c++) UA[d.value] = d, UA[d.name] = d
                }
                if (a in UA) a = UA[a];
                else {
                    for (c = 0; c < TA.length; ++c)
                        if (d = TA[c], d.value <= a) {
                            a = d;
                            break a
                        }
                    a = null
                }
            }
            b && (je(le(), b.h()).level = a)
        }
    };
    var bC = cast.el ? 800 : 1E3,
        cC = parseInt(cast.receiver.platform.Ja("log-level-cast-receiver"), 10);
    cast.receiver.bc.Pj(cC || bC);
    var My = _.D("cast.receiver.ui.PlaybackTimeTracker");
    _.r(vq, _.A);
    vq.prototype.zb = function(a) {
        a !== this.h && (this.h && (this.h.removeEventListener("timeupdate", this.H), this.h = null), a && (this.h = a, this.h.addEventListener("timeupdate", this.H)))
    };
    vq.prototype.dispose = function() {
        _.A.prototype.dispose.call(this);
        clearInterval(this.A);
        this.zb(null)
    };
    cast.receiver.C.Vm = function(a) {
        a.innerHTML = "<style>:host{display:block;position:absolute;border-radius:inherit;pointer-events:none;width:100%;height:100%;overflow:hidden;top:0;left:0;right:0;bottom:0;--wave-fade-duration:500ms}.highlight,.wave{pointer-events:none;position:absolute;top:0;left:0;background-color:#fff;width:100%;height:100%}@media (prefers-color-scheme:light){:host([theme-responsive]) .highlight,:host([theme-responsive]) .wave{background-color:#000}}:host([recenters]){border-radius:50%}:host([recenters]) .highlight{border-radius:50%}.highlight{opacity:0;transition:opacity 200ms;will-change:opacity;border-radius:inherit}.highlight.active{opacity:.04;transition:none}.wave{border-radius:50%;opacity:0;will-change:transform,opacity;animation:wave-fade-in-out var(--wave-fade-duration) linear,wave-expand 300ms linear forwards}@keyframes wave-fade-in-out{0%{opacity:0}10%{opacity:.07}100%{opacity:0}}@keyframes wave-expand{100%{transform:translate(0, 0) scale(1, 1)}}</style>"
    };
    _.r(yq, $c);
    _.h = yq.prototype;
    _.h.createdCallback = function() {
        var a = this.attachShadow({
            mode: "open"
        });
        (0, cast.receiver.C.Vm)(a);
        this.j = document.createElement("div");
        this.j.classList.add("highlight");
        a.appendChild(this.j);
        this.D = parseInt(this.style.getPropertyValue("--wave-fade-duration"), 10) || 500;
        this.B = this.yq.bind(this);
        this.l = this.xq.bind(this)
    };
    _.h.connectedCallback = function() {
        11 === this.parentNode.nodeType ? this.h = this.shadowRoot : this.h = this.parentNode;
        this.hasAttribute("recenters") && (this.o = !0);
        this.h.addEventListener("touchstart", this.B);
        this.h.addEventListener("touchend", this.l);
        this.h.addEventListener("touchcancel", this.l)
    };
    _.h.disconnectedCallback = function() {
        this.h.removeEventListener("touchstart", this.B);
        this.h.removeEventListener("touchend", this.l);
        this.h.removeEventListener("touchcancel", this.l);
        this.h = null
    };
    _.h.xq = function() {
        var a = this,
            b = this.G + 200 - Date.now();
        0 >= b ? this.j.classList.remove("active") : this.A = setTimeout(function() {
            a.j.classList.remove("active")
        }, b)
    };
    _.h.yq = function(a) {
        var b = this.getBoundingClientRect(),
            c = a.targetTouches[0];
        a = c.clientX - b.left;
        c = c.clientY - b.top;
        var d = b.width;
        b = b.height;
        if (this.o) {
            b = Math.max(d, b);
            a -= b / 2;
            c -= b / 2;
            var e = Math.sqrt(a * a + c * c);
            d = (d - 50) / 2;
            e > d && (a *= d / e, c *= d / e)
        } else d = Math.max(a, d - a), b = Math.max(c, b - c), b = 2.2 * Math.sqrt(d * d + b * b), a -= b / 2, c -= b / 2;
        zq(this, b, a, c, 50 / b);
        clearTimeout(this.A);
        this.j.classList.add("active");
        this.G = Date.now()
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-ripple", yq);
    cast.receiver.C.Ms = yq;
    cast.receiver.C.Ic = {};
    cast.receiver.C.Ic.vj = function(a) {
        z("Cast.Receiver.SecondaryImage.setImage", a)
    };
    cast.receiver.C.Ic.ri = {
        TOP_RIGHT_VIDEO_OVERLAY: 1,
        nn: 2
    };
    _.Aq = Fa;
    _.dC = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    Cq.prototype.h = null;
    var eC;
    _.Sa(Fq, Cq);
    eC = new Fq;
    _.Rq = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    _.Sa(_.Hq, _.Sd);
    _.Hq.prototype.ca = _.D("goog.net.XhrIo");
    var Sq = /^https?$/i,
        fC = ["POST", "PUT"];
    _.h = _.Hq.prototype;
    _.h.Ef = ca(2);
    _.h.send = function(a, b, c, d) {
        if (this.h) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.M + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.M = a;
        this.F = "";
        this.o = 0;
        this.$ = b;
        this.U = !1;
        this.j = !0;
        this.h = this.T ? Gq(this.T) : Gq(eC);
        this.P = this.T ? Eq(this.T) : Eq(eC);
        this.h.onreadystatechange = (0, _.Pa)(this.Dj, this);
        try {
            _.se(this.ca, Qq(this, "Opening Xhr")), this.W = !0, this.h.open(b, String(a), !0), this.W = !1
        } catch (g) {
            _.se(this.ca, Qq(this, "Error opening Xhr: " + g.message));
            Mq(this, g);
            return
        }
        a = c ||
            "";
        c = new Map(this.headers);
        if (d)
            if (Object.getPrototypeOf(d) === Object.prototype)
                for (var e in d) c.set(e, d[e]);
            else if ("function" === typeof d.keys && "function" === typeof d.get) {
            e = _.q(d.keys());
            for (var f = e.next(); !f.done; f = e.next()) f = f.value, c.set(f, d.get(f))
        } else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find(function(g) {
            return "content-type" == g.toLowerCase()
        });
        e = _.u.FormData && a instanceof _.u.FormData;
        !_.eb(fC, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = _.q(c);
        for (d = b.next(); !d.done; d = b.next()) c = _.q(d.value), d = c.next().value, c = c.next().value, this.h.setRequestHeader(d, c);
        this.aa && (this.h.responseType = this.aa);
        "withCredentials" in this.h && this.h.withCredentials !== this.Z && (this.h.withCredentials = this.Z);
        if ("setTrustToken" in this.h && this.X) try {
            this.h.setTrustToken(this.X)
        } catch (g) {
            _.se(this.ca, Qq(this, "Error SetTrustToken: " + g.message))
        }
        try {
            Uq(this), 0 < this.A && (this.N = Jq(this.h), _.se(this.ca, Qq(this, "Will abort after " + this.A + "ms if incomplete, xhr2 " +
                this.N)), this.N ? (this.h.timeout = this.A, this.h.ontimeout = (0, _.Pa)(this.Sh, this)) : this.I = _.jf(this.Sh, this.A, this)), _.se(this.ca, Qq(this, "Sending request")), this.J = !0, this.h.send(a), this.J = !1
        } catch (g) {
            _.se(this.ca, Qq(this, "Send error: " + g.message)), Mq(this, g)
        }
    };
    _.h.Sh = function() {
        "undefined" != typeof Nq && this.h && (this.F = "Timed out after " + this.A + "ms, aborting", this.o = 8, _.se(this.ca, Qq(this, this.F)), this.dispatchEvent("timeout"), this.abort(8))
    };
    _.h.abort = function(a) {
        this.h && this.j && (_.se(this.ca, Qq(this, "Aborting")), this.j = !1, this.l = !0, this.h.abort(), this.l = !1, this.o = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Lq(this))
    };
    _.h.ea = function() {
        this.h && (this.j && (this.j = !1, this.l = !0, this.h.abort(), this.l = !1), Lq(this, !0));
        _.Hq.qb.ea.call(this)
    };
    _.h.Dj = function() {
        this.Pa() || (this.W || this.J || this.l ? Tq(this) : this.oq())
    };
    _.h.oq = function() {
        Tq(this)
    };
    _.h.isActive = function() {
        return !!this.h
    };
    _.h.isComplete = function() {
        return 4 == Oq(this)
    };
    cast.framework = {};
    cast.framework.Fk = function(a) {
        a.innerHTML = "<style>@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes loading{0%{margin-left:-100%}100%{margin-left:100%}}@-webkit-keyframes flashing{0%{background-color:#80868b}50%{background-color:#5f6368}100%{background-color:#80868b}}.background{background:var(--background, url('data:image/svg+xml,%3Csvg%20width=%271280%27%20height=%27720%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id=%27background%27%20x1=%270%25%27%20y1=%270%25%27%20x2=%270%25%27%20y2=%27100%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset=%2710%25%27%20stop-color=%27black%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset=%27100%25%27%20style=%27stop-color:rgb%2830%2C30%2C30%29%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20fill=%27url%28%23background%29%27%20x=%270%27%20y=%270%27%20width=%271280%27%20height=%27720%27/%3E%0A%3C/svg%3E%0A'));background-color:var(--background-color);background-image:var(--background-image);background-position:center;background-repeat:var(--background-repeat, no-repeat);background-size:var(--background-size, cover)}.breakIcon{border-radius:2px;color:#fff;display:block;font-weight:bold;padding:2px 4px}.breakIcon:after{content:var(--ad-title, attr(data-ad-label))}.breakMetadata{display:none;overflow:auto;padding-bottom:128px}.breakInfo{float:left}.breakPosition{margin-left:5px}.breakPosition,.breakTime{text-shadow:0 1px 4px #000}.skipBreakMessage,.breakSkippableTime{color:#fff;float:right;font-size:16px;font-weight:400;line-height:24px;text-shadow:0 1px 4px #000}.breakMarker{background-color:#fff;bottom:0;height:100%;opacity:.8;position:absolute;width:2px}.splash{background:var(--splash-background);background-color:var(--splash-color);background-image:var(--splash-image);background-repeat:var(--splash-repeat);background-size:var(--splash-size)}.logo{background:var(--logo-background);background-color:var(--logo-color);background-image:var(--logo-image);background-repeat:var(--logo-repeat);background-size:var(--logo-size)}.playback-logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:#fff;display:none;font-family:'Roboto',Arial,sans-serif;font-weight:500;order:-2;overflow:hidden}.nextMetadata{display:flex;justify-content:flex-end}.nextMetadataImage{object-fit:contain;max-width:286px;max-height:143px}.nextImagePlaceholder{position:relative;margin-right:40px;min-width:45px}.nextContentRating{margin:0 5px 5px 0;position:absolute;right:0;bottom:0;max-width:40px;max-height:40px}.nextMetadataPlaceHolder{font-weight:bold;margin-right:32px;display:flex;flex-direction:column;align-self:flex-end}.nextMetadataTitle{font-size:48px}.nextMetadataSubtitle,.nextMetadataSubtitle2,.nextMetadataSubtitle3,.nextMetadataCountdown{font-size:20px}.nextOverlay{display:inherit;opacity:0;position:absolute;bottom:0;left:0;right:0;padding:80px 40px}.watermark{background:var(--watermark-background);background-color:var(--watermark-color);background-image:var(--watermark-image);background-position:var(--watermark-position, bottom right);background-repeat:var(--watermark-repeat, no-repeat);background-size:var(--watermark-size);display:none;margin-bottom:128px}.player{background:#111;color:#f1f1f1;font-family:var(--font-family, ''),'Roboto',Arial,sans-serif;font-weight:300}.player,.background,.foreground,.audioPlaybackBackground,.audioPlaybackBackgroundScrim,.gradient,.slideshow,.logo,.splash{bottom:0;left:0;position:absolute;right:0;top:0}.breakOverlay,.overlay,.watermark{bottom:40px;left:80px;position:absolute;right:80px;top:40px}.logo,.splash{background-position:center;background-repeat:no-repeat;color:rgba(221,221,221,0.8);display:none;font-size:44px;padding-top:25%;position:absolute;text-align:center}video{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;display:none;height:100%;width:100%;object-fit:contain}.overlay{top:auto}[displayStatus=false] .gradient,[displayStatus=false] .metadata,[displayStatus=false] .watermark,[displayStatus=false] .controlsTimeline,[displayStatus=false] .audioPlaybackBackground,[displayStatus=false] .audioPlaybackBackgroundScrim,[displayStatus=false][state='playing'] .controlsPlayPause{opacity:0;visibility:hidden;-webkit-transition:opacity 1s linear,visibility 1s linear}.breakOverlay{display:none;top:auto}.gradient{background:linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0) 72%, rgba(0,0,0,0) 100%);display:block;opacity:.9}.metadataPlaceHolder{min-width:0;width:100%}.metadata{padding-bottom:128px}.liveIndicator{display:none}.touchImageLoader{display:none}.liveLabel{display:flex;flex-direction:row;align-items:center}.liveLabel:after{content:attr(data-live-label)}.liveLabel.live-edge:before{display:inline-block;background-color:var(--live-progress-color, #d0021b);content:'';border-radius:8px;height:8px;width:8px;margin-right:10px}.metadataTitle{color:rgba(255,255,255,0.8);font-size:48px;font-weight:400;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.metadataSubtitle,.metadataSubtitle2{color:rgba(203,203,203,0.8);font-size:20px;font-weight:400;line-height:30px;margin:0;max-height:60px;overflow:hidden}.metadataSubtitle span:not(:first-child):before,.metadataSubtitle2 span:not(:first-child):before{content:'\u00b7';font-weight:bold;padding-left:10px;padding-right:10px}.controls{bottom:0;height:88px;left:0;position:absolute;right:0}.controlsPlayPause{background-size:cover;float:left;height:46px;width:46px}.controlsProgress{background-color:rgba(255,255,255,0.2);height:4px;margin-top:28px;overflow:hidden;position:relative}.controlsProgressInner{height:100%;opacity:.8}.controlsSeekable{background-color:#fff;height:100%;position:absolute;top:0}.controlsSeekablePlayed{background-color:var(--live-progress-color, #d0021b);height:100%;position:absolute;top:0}.controlsTimelineLabels{color:rgba(255,255,255,0.7);font-size:14px;font-weight:400}.controlsCurTime{float:left}.controlsTotalTime{float:right;margin-left:16px}.videoLiveIndicator{float:right}.hidden{display:none}.top-right-video-overlay-image{display:none}.player[isLive='true'][mediaCategory='VIDEO'] .videoLiveIndicator{display:block}.player[isLive='true'][mediaCategory='AUDIO'] .audioLiveIndicator{display:block}.player[isLive='true'] .controlsProgressInner{background-color:var(--live-progress-color, #d0021b);position:absolute}.player[state='launching'] .logo{display:block}.player[state='launching'] .spinner{background-image:var(--spinner-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20x=%270px%27%20y=%270px%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20enable-background=%27new%200%200%2024%2024%27%20xml:space=%27preserve%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M12%2C22C6.49%2C22%2C2%2C17.51%2C2%2C12C2%2C6.49%2C6.49%2C2%2C12%2C2c0.55%2C0%2C1%2C0.45%2C1%2C1s-0.45%2C1-1%2C1c-4.41%2C0-8%2C3.59-8%2C8s3.59%2C8%2C8%2C8s8-3.59%2C8-8c0-0.55%2C0.45-1%2C1-1s1%2C0.45%2C1%2C1C22%2C17.51%2C17.51%2C22%2C12%2C22z%27/%3E%0A%20%20%20%20%3Crect%20fill=%27none%27%20width=%2724%27%20height=%2724%27/%3E%0A%3C/svg%3E%0A'));background-size:cover;bottom:40px;display:block;height:32px;left:50%;margin-left:-16px;position:absolute;-webkit-animation:spin 1s infinite linear;width:32px}.player[state='loading'] .controlsTimelineLabels,.player[state='loading'] .controlsSeekablePlayed,.player[state='loading'] .controlsSeekable,.player[state='loading'] .controlsPlayPause{display:none}.player[state='loading'] .controlsProgressInner{-webkit-animation:loading 2s infinite linear;width:90% !important}.player[state='buffering'] .controlsPlayPause{background-image:var(--buffering-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20x=%270px%27%20y=%270px%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20enable-background=%27new%200%200%2024%2024%27%20xml:space=%27preserve%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M12%2C22C6.49%2C22%2C2%2C17.51%2C2%2C12C2%2C6.49%2C6.49%2C2%2C12%2C2c0.55%2C0%2C1%2C0.45%2C1%2C1s-0.45%2C1-1%2C1c-4.41%2C0-8%2C3.59-8%2C8s3.59%2C8%2C8%2C8s8-3.59%2C8-8c0-0.55%2C0.45-1%2C1-1s1%2C0.45%2C1%2C1C22%2C17.51%2C17.51%2C22%2C12%2C22z%27/%3E%0A%20%20%20%20%3Crect%20fill=%27none%27%20width=%2724%27%20height=%2724%27/%3E%0A%3C/svg%3E%0A'));-webkit-animation:spin 1s infinite linear}.player[state='paused'] .controlsPlayPause{background-image:var(--pause-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M6%2019h4V5H6v14zm8-14v14h4V5h-4z%27/%3E%0A%20%20%20%20%3Cpath%20d=%27M0%200h24v24H0z%27%20fill=%27none%27/%3E%0A%3C/svg%3E%0A'))}.player[state='playing'] .controlsPlayPause{background-image:var(--play-image, none)}.player[state='idle'] .splash{display:block}.player[isPlayingBreak=true] .breakMetadata{display:block}.player[isPlayingBreak=true] .breakTime{display:inline}.player[isPlayingBreak=true] .breakIcon{display:inline-block}.player[mediaCategory='IMAGE'] video{display:block}.player[mediaCategory='IMAGE'] .background{background-color:#111;background-image:none}.player[mediaCategory='IMAGE'] .controls{display:none}.player[mediaCategory='AUDIO'] .audioPlaybackBackground,.player[isRemoteControl='true'][displayType='touch'] .audioPlaybackBackground,.player[isRemoteControl='true'][dpadUi='true'] .audioPlaybackBackground{background:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1024_600.jpg')) center / cover no-repeat}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[mediaCategory='AUDIO'] .audioPlaybackBackground,.player[isRemoteControl='true'][displayType='touch'] .audioPlaybackBackground,.player[isRemoteControl='true'][dpadUi='true'] .audioPlaybackBackground{background:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1280_800.jpg')) center / cover no-repeat}}.player[mediaCategory='AUDIO'] .top-right-audio-persistent-image,.player[isRemoteControl='true'][displayType='touch'] .top-right-audio-persistent-image,.player[isRemoteControl='true'][dpadUi='true'] .top-right-audio-persistent-image{display:none}.player[mediaCategory='AUDIO'] .metadata,.player[isRemoteControl='true'][displayType='touch'] .metadata,.player[isRemoteControl='true'][dpadUi='true'] .metadata{display:flex;flex-direction:row;justify-content:space-between;padding:0}.player[mediaCategory='AUDIO'] .image-holding-container,.player[isRemoteControl='true'][displayType='touch'] .image-holding-container,.player[isRemoteControl='true'][dpadUi='true'] .image-holding-container{display:flex;flex-direction:column;margin-top:0}.player[mediaCategory='AUDIO'] .top-right-audio-persistent-image,.player[isRemoteControl='true'][displayType='touch'] .top-right-audio-persistent-image,.player[isRemoteControl='true'][dpadUi='true'] .top-right-audio-persistent-image{display:none;width:280px;height:60px;object-fit:contain;object-position:right;align-self:flex-end;background-size:contain;background-repeat:no-repeat;background-position:right}.player[mediaCategory='AUDIO'][displayType='touch'] .top-right-audio-persistent-image,.player[isRemoteControl='true'][displayType='touch'][displayType='touch'] .top-right-audio-persistent-image,.player[isRemoteControl='true'][dpadUi='true'][displayType='touch'] .top-right-audio-persistent-image{max-width:200px;max-height:50px}.player[mediaCategory='AUDIO'] .metadataPlaceHolder,.player[isRemoteControl='true'][displayType='touch'] .metadataPlaceHolder,.player[isRemoteControl='true'][dpadUi='true'] .metadataPlaceHolder{order:-1;display:flex;flex-direction:column;justify-content:center;margin-top:0}.player[mediaCategory='AUDIO'] .playback-logo,.player[isRemoteControl='true'][displayType='touch'] .playback-logo,.player[isRemoteControl='true'][dpadUi='true'] .playback-logo{display:inline-block}.player[mediaCategory='AUDIO'] .metadataTitle,.player[isRemoteControl='true'][displayType='touch'] .metadataTitle,.player[isRemoteControl='true'][dpadUi='true'] .metadataTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:initial;word-break:break-word;color:#fff;font-weight:400}.player[mediaCategory='AUDIO'] .metadataSubtitle,.player[isRemoteControl='true'][displayType='touch'] .metadataSubtitle,.player[isRemoteControl='true'][dpadUi='true'] .metadataSubtitle{margin-bottom:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400}.player[mediaCategory='AUDIO'] .metadataSubtitle2,.player[isRemoteControl='true'][displayType='touch'] .metadataSubtitle2,.player[isRemoteControl='true'][dpadUi='true'] .metadataSubtitle2{font-weight:500;order:-1;margin-top:auto;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.player[mediaCategory='AUDIO']:not([displayType='touch']),.player[isRemoteControl='true']:not([displayType='touch']){--default-progress-color:#fff;overflow:hidden;user-select:none;font-weight:400}.player[mediaCategory='AUDIO']:not([displayType='touch']) .breakOverlay,.player[isRemoteControl='true']:not([displayType='touch']) .breakOverlay,.player[mediaCategory='AUDIO']:not([displayType='touch']) .nextOverlay,.player[isRemoteControl='true']:not([displayType='touch']) .nextOverlay{display:none !important}.player[mediaCategory='AUDIO']:not([displayType='touch']) .audioStatusIndicators,.player[isRemoteControl='true']:not([displayType='touch']) .audioStatusIndicators{flex-direction:row;display:flex;align-items:center;position:absolute;bottom:-3.59375vw;right:0}.player[mediaCategory='AUDIO']:not([displayType='touch']) .audioLiveIndicator,.player[isRemoteControl='true']:not([displayType='touch']) .audioLiveIndicator{font-weight:500;font-size:1.25vw;line-height:1.25vw;margin-left:20px;text-align:right}.player[mediaCategory='AUDIO']:not([displayType='touch']) .queueStatusIcon,.player[isRemoteControl='true']:not([displayType='touch']) .queueStatusIcon{width:24px;height:24px;margin-left:20px}.player[mediaCategory='AUDIO']:not([displayType='touch']) .shuffleStatus,.player[isRemoteControl='true']:not([displayType='touch']) .shuffleStatus{background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A\")}.player[mediaCategory='AUDIO']:not([displayType='touch']) .repeatStatus,.player[isRemoteControl='true']:not([displayType='touch']) .repeatStatus{display:none}.player[mediaCategory='AUDIO']:not([displayType='touch']) .repeatStatus[data-state='REPEAT_SINGLE'],.player[isRemoteControl='true']:not([displayType='touch']) .repeatStatus[data-state='REPEAT_SINGLE']{background-image:url(\"data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpolygon%20fill=%27%23fff%27%20fill-rule=%27nonzero%27%0A%20%20%20%20%20%20points=%2723.8%2029.92%2023.8%2021.25%2021.8%2022.07%2020.87%2019.89%2024.28%2018.29%2026.28%2018.29%2026.28%2029.92%27%3E%3C/polygon%3E%0A%3C/svg%3E%0A\");display:block}.player[mediaCategory='AUDIO']:not([displayType='touch']) .repeatStatus[data-state='REPEAT_ALL'],.player[isRemoteControl='true']:not([displayType='touch']) .repeatStatus[data-state='REPEAT_ALL']{background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A\");display:block}.player[mediaCategory='AUDIO']:not([displayType='touch']) .liveLabel.live-edge:before,.player[isRemoteControl='true']:not([displayType='touch']) .liveLabel.live-edge:before{display:inline-block;background-color:var(--live-progress-color, #d0021b);content:'';border-radius:.625vw;height:.625vw;width:.625vw;margin-right:.78125vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .audioPlaybackBackgroundScrim,.player[isRemoteControl='true']:not([displayType='touch']) .audioPlaybackBackgroundScrim{background:rgba(0,0,0,0.9)}.player[mediaCategory='AUDIO']:not([displayType='touch']) .overlay,.player[isRemoteControl='true']:not([displayType='touch']) .overlay{margin:auto;margin-left:7.8125vw;margin-right:7.8125vw;height:39.0625vw;top:0;left:0;bottom:0;right:0;position:absolute}.player[mediaCategory='AUDIO']:not([displayType='touch']) .metadataTitle,.player[isRemoteControl='true']:not([displayType='touch']) .metadataTitle{font-size:3.75vw;line-height:4.6875vw;margin-top:1.5625vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .metadataSubtitle,.player[isRemoteControl='true']:not([displayType='touch']) .metadataSubtitle{color:rgba(255,255,255,0.6);font-size:1.5625vw;line-height:1.875vw;margin-top:1.09375vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .metadataSubtitle2,.player[isRemoteControl='true']:not([displayType='touch']) .metadataSubtitle2{color:rgba(255,255,255,0.6);font-size:1.25vw;line-height:1.25vw;letter-spacing:.0625vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .metadataPlaceHolder,.player[isRemoteControl='true']:not([displayType='touch']) .metadataPlaceHolder{margin-right:6.25vw;width:auto;height:39.0625vw;box-sizing:border-box;padding-bottom:2.8125vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .metadataImage,.player[isRemoteControl='true']:not([displayType='touch']) .metadataImage{content:none !important;background:#000 var(--album-art-image) center / contain no-repeat;width:39.0625vw;height:39.0625vw;flex:none}.player[mediaCategory='AUDIO']:not([displayType='touch']) .metadataImage.has-image,.player[isRemoteControl='true']:not([displayType='touch']) .metadataImage.has-image{box-shadow:0 .9375vw .9375vw rgba(0,0,0,0.5)}.player[mediaCategory='AUDIO']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .metadataImage,.player[isRemoteControl='true']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .metadataImage,.player[mediaCategory='AUDIO']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .controls,.player[isRemoteControl='true']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .controls{width:29.6875vw;height:29.6875vw}.player[mediaCategory='AUDIO']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .metadataImage,.player[isRemoteControl='true']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .metadataImage{margin-top:56px}.player[mediaCategory='AUDIO']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .controls,.player[isRemoteControl='true']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .controls{top:calc(116px)}.player[mediaCategory='AUDIO']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .top-right-audio-persistent-image,.player[isRemoteControl='true']:not([displayType='touch'])[topRightAudioPersistentImageElement='true'] .top-right-audio-persistent-image{display:block}.player[mediaCategory='AUDIO']:not([displayType='touch']) .playback-logo,.player[isRemoteControl='true']:not([displayType='touch']) .playback-logo{font-size:2.5vw;height:2.8125vw;line-height:2.8125vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .playback-logo.app-icon,.player[isRemoteControl='true']:not([displayType='touch']) .playback-logo.app-icon{height:4.6875vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .controls,.player[isRemoteControl='true']:not([displayType='touch']) .controls{width:39.0625vw;height:39.0625vw;position:absolute;top:0;right:0;left:auto;display:flex;justify-content:center;align-items:center}.player[mediaCategory='AUDIO']:not([displayType='touch']) .controlsProgress,.player[isRemoteControl='true']:not([displayType='touch']) .controlsProgress{box-shadow:0 -0.078125vw 0 rgba(0,0,0,0.25);background-color:rgba(0,0,0,0.3);height:.3125vw;width:100%;margin:0;position:absolute;bottom:0;left:0}.player[mediaCategory='AUDIO']:not([displayType='touch']) .controlsPlayPause,.player[isRemoteControl='true']:not([displayType='touch']) .controlsPlayPause{height:9.6875vw;width:9.6875vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .controlsCurTime,.player[isRemoteControl='true']:not([displayType='touch']) .controlsCurTime,.player[mediaCategory='AUDIO']:not([displayType='touch']) .controlsTotalTime,.player[isRemoteControl='true']:not([displayType='touch']) .controlsTotalTime{position:absolute;bottom:1.40625vw;margin:0;font-size:1.09375vw;line-height:1.25vw;color:rgba(255,255,255,0.7);text-shadow:0 0 .3125vw rgba(0,0,0,0.5)}.player[mediaCategory='AUDIO']:not([displayType='touch']) .controlsCurTime,.player[isRemoteControl='true']:not([displayType='touch']) .controlsCurTime{left:1.09375vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .controlsTotalTime,.player[isRemoteControl='true']:not([displayType='touch']) .controlsTotalTime{right:1.09375vw}.player[mediaCategory='AUDIO']:not([displayType='touch']) .breakMarker,.player[isRemoteControl='true']:not([displayType='touch']) .breakMarker{background-color:#fbbc04;width:.78125vw}.player[mediaCategory='AUDIO']:not([displayType='touch'])[state='loading'] .controlsProgress,.player[isRemoteControl='true']:not([displayType='touch'])[state='loading'] .controlsProgress{display:none}.player[mediaCategory='AUDIO']:not([displayType='touch'])[state='buffering'] .controlsPlayPause,.player[isRemoteControl='true']:not([displayType='touch'])[state='buffering'] .controlsPlayPause,.player[mediaCategory='AUDIO']:not([displayType='touch'])[state='loading'] .controlsPlayPause,.player[isRemoteControl='true']:not([displayType='touch'])[state='loading'] .controlsPlayPause{-webkit-animation:spin 1s infinite linear;display:block;width:5.625vw;height:5.625vw;background-image:var(--buffering-image, url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%2072%2072%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M36%2C64%20C20.536027%2C64%208%2C51.463973%208%2C36%20C8%2C28.3421054%2011.0742312%2C21.402236%2016.0558797%2C16.3472055%20L18.9049104%2C19.1548779%20C14.5062491%2C23.6183335%2012.0001567%2C29.6058259%2012%2C35.9992989%20C12%2C49.2547411%2022.7450731%2C60%2036%2C60%20L36%2C64%20Z%20M64%2C36%20C64%2C51.463973%2051.463973%2C64%2036%2C64%20L36%2C60%20C49.254834%2C60%2060%2C49.254834%2060%2C36%20C60%2C28.2977044%2056.3514655%2C21.2105352%2050.2785664%2C16.7073115%20L52.6611093%2C13.4942928%20C59.5409482%2C18.5958848%2064%2C26.7772087%2064%2C36%20Z%27%20fill=%27%23FFFFFF%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%3C/svg%3E%0A'))}.player[mediaCategory='AUDIO']:not([displayType='touch'])[state='paused'] .controlsPlayPause,.player[isRemoteControl='true']:not([displayType='touch'])[state='paused'] .controlsPlayPause{filter:drop-shadow(0 0 .3125vw rgba(0,0,0,0.5));background-image:var(--pause-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%3C/svg%3E%0A'))}.player[mediaCategory='AUDIO']:not([displayType='touch'])[state='buffering'] .controls,.player[isRemoteControl='true']:not([displayType='touch'])[state='buffering'] .controls,.player[mediaCategory='AUDIO']:not([displayType='touch'])[state='paused'] .controls,.player[isRemoteControl='true']:not([displayType='touch'])[state='paused'] .controls{background-color:rgba(0,0,0,0.3);box-shadow:inset 0 -9.375vw 7.03125vw -7.03125vw rgba(0,0,0,0.5)}.player[mediaCategory='AUDIO']:not([displayType='touch'])[state='playing'] .controlsCurTime,.player[isRemoteControl='true']:not([displayType='touch'])[state='playing'] .controlsCurTime,.player[mediaCategory='AUDIO']:not([displayType='touch'])[state='playing'] .controlsTotalTime,.player[isRemoteControl='true']:not([displayType='touch'])[state='playing'] .controlsTotalTime{display:none}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .audioLiveIndicator,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .audioLiveIndicator{display:none}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .audioPlaybackBackgroundScrim,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .audioPlaybackBackgroundScrim{background:rgba(0,0,0,0.75)}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .overlay,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .overlay{margin-top:2.34375vw;margin-left:5.625vw;margin-right:5.625vw}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .playback-logo,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .playback-logo{font-size:2.5vw;height:3.75vw;line-height:3.75vw}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .playback-logo.app-icon,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .playback-logo.app-icon{height:5.625vw}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .metadataTitle,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .metadataTitle,.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .metadataSubtitle,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .metadataSubtitle,.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .metadataSubtitle2,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .metadataSubtitle2{display:none}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .metadataPlaceHolder,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .metadataPlaceHolder{width:100%;justify-content:flex-start}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .controls,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .controls,.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .metadataImage,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .metadataImage{width:25vw;height:25vw}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .controls,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .controls{background-color:initial;box-shadow:initial}.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .controlsPlayPause,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .controlsPlayPause,.player[mediaCategory='AUDIO']:not([displayType='touch'])[dpadUi='true'] .controlsTimeline,.player[isRemoteControl='true']:not([displayType='touch'])[dpadUi='true'] .controlsTimeline{display:none}.player[displayType='touch'][mediaCategory='AUDIO'],.player[displayType='touch'][isRemoteControl='true']{overflow:hidden;user-select:none;font-family:'Google Sans','Roboto',Arial,sans-serif;font-weight:400}.player[displayType='touch'][mediaCategory='AUDIO'] .slideshow,.player[displayType='touch'][isRemoteControl='true'] .slideshow,.player[displayType='touch'][mediaCategory='AUDIO'] .controls,.player[displayType='touch'][isRemoteControl='true'] .controls,.player[displayType='touch'][mediaCategory='AUDIO'] .gradient,.player[displayType='touch'][isRemoteControl='true'] .gradient,.player[displayType='touch'][mediaCategory='AUDIO'] .spinner,.player[displayType='touch'][isRemoteControl='true'] .spinner,.player[displayType='touch'][mediaCategory='AUDIO'] .watermark,.player[displayType='touch'][isRemoteControl='true'] .watermark,.player[displayType='touch'][mediaCategory='AUDIO'] .liveIndicator,.player[displayType='touch'][isRemoteControl='true'] .liveIndicator,.player[displayType='touch'][mediaCategory='AUDIO'] .breakOverlay,.player[displayType='touch'][isRemoteControl='true'] .breakOverlay,.player[displayType='touch'][mediaCategory='AUDIO'] .nextOverlay,.player[displayType='touch'][isRemoteControl='true'] .nextOverlay{display:none !important}.player[displayType='touch'][mediaCategory='AUDIO'] .audioPlaybackBackground,.player[displayType='touch'][isRemoteControl='true'] .audioPlaybackBackground{background-color:#000;transform:scale(1.25);transform-origin:center;filter:blur(37px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'] .audioPlaybackBackground,.player[displayType='touch'][isRemoteControl='true'] .audioPlaybackBackground{filter:blur(50px)}}.player[displayType='touch'][mediaCategory='AUDIO'] .audioPlaybackBackgroundScrim,.player[displayType='touch'][isRemoteControl='true'] .audioPlaybackBackgroundScrim{background:rgba(0,0,0,0.7)}.player[displayType='touch'][mediaCategory='AUDIO'] .overlay,.player[displayType='touch'][isRemoteControl='true'] .overlay{top:0;left:0;position:absolute;box-sizing:border-box;width:100%;padding:0 var(--cast-controls-horizontal-padding);height:var(--cast-controls-safe-area-height);padding-top:44px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'] .overlay,.player[displayType='touch'][isRemoteControl='true'] .overlay{height:var(--cast-controls-safe-area-height);padding-top:112px}}.player[displayType='touch'][mediaCategory='AUDIO'] .metadata,.player[displayType='touch'][isRemoteControl='true'] .metadata{height:352px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'] .metadata,.player[displayType='touch'][isRemoteControl='true'] .metadata{height:420px}}.player[displayType='touch'][mediaCategory='AUDIO'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'] .metadataTitle{margin-top:18px;font-size:56px;line-height:76px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'] .metadataTitle{margin-top:32px;font-size:68px;line-height:80px}}.player[displayType='touch'][mediaCategory='AUDIO'] .metadataSubtitle,.player[displayType='touch'][isRemoteControl='true'] .metadataSubtitle{color:#dfe1e5;font-size:28px;letter-spacing:1.4px;line-height:30px;margin-top:14px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'] .metadataSubtitle,.player[displayType='touch'][isRemoteControl='true'] .metadataSubtitle{font-size:32px;letter-spacing:1.6px;line-height:40px;margin-top:24px}}.player[displayType='touch'][mediaCategory='AUDIO'] .metadataSubtitle2,.player[displayType='touch'][isRemoteControl='true'] .metadataSubtitle2{color:#dfe1e5;font-size:24px;letter-spacing:1.2px;line-height:24px}.player[displayType='touch'][mediaCategory='AUDIO'] .metadataPlaceHolder,.player[displayType='touch'][isRemoteControl='true'] .metadataPlaceHolder{height:100%;margin-right:5%}.player[displayType='touch'][mediaCategory='AUDIO'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'] .touchImageLoader{display:block;align-self:flex-end;height:352px;width:352px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'] .touchImageLoader{height:420px;width:420px}}.player[displayType='touch'][mediaCategory='AUDIO'][topRightAudioPersistentImageElement='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][topRightAudioPersistentImageElement='true'] .touchImageLoader{height:246px;width:246px;margin-top:56px;margin-bottom:auto}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'][topRightAudioPersistentImageElement='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][topRightAudioPersistentImageElement='true'] .touchImageLoader{height:314px;width:314px}}.player[displayType='touch'][mediaCategory='AUDIO'][topRightAudioPersistentImageElement='true'] .top-right-audio-persistent-image,.player[displayType='touch'][isRemoteControl='true'][topRightAudioPersistentImageElement='true'] .top-right-audio-persistent-image{display:block}.player[displayType='touch'][mediaCategory='AUDIO'] .metadataImage,.player[displayType='touch'][isRemoteControl='true'] .metadataImage{display:none}.player[displayType='touch'][mediaCategory='AUDIO'] .playback-logo,.player[displayType='touch'][isRemoteControl='true'] .playback-logo{font-size:36px;height:40px;line-height:40px}.player[displayType='touch'][mediaCategory='AUDIO'] .playback-logo.app-icon,.player[displayType='touch'][isRemoteControl='true'] .playback-logo.app-icon{height:68px}.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'] .metadata,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadata{height:100%}.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'] .metadataPlaceHolder,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataPlaceHolder{justify-content:initial}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataTitle{line-height:64px}}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataTitle{margin-top:24px}}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'] .metadataSubtitle2,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataSubtitle2{margin-top:18px}}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'] .metadataSubtitle2,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataSubtitle2{margin-top:38px;font-size:20px;line-height:20px}}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'] .metadataSubtitle2,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataSubtitle2{margin-top:40px}}.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .touchImageLoader{height:269px;width:269px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .touchImageLoader{height:353px;width:353px}}.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'][topRightAudioPersistentImageElement='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'][topRightAudioPersistentImageElement='true'] .touchImageLoader{height:190px;width:190px;margin-top:56px;margin-bottom:auto}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'][topRightAudioPersistentImageElement='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'][topRightAudioPersistentImageElement='true'] .touchImageLoader{height:250px;width:250px}}.player[displayType='touch'][mediaCategory='AUDIO'][mediaBrowse='true'][topRightAudioPersistentImageElement='true'] .top-right-audio-persistent-image,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'][topRightAudioPersistentImageElement='true'] .top-right-audio-persistent-image{display:block}.player[displayType='touch'][mediaCategory='AUDIO'][isBluetooth='true'],.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true']{--album-art-image:unset !important}.player[displayType='touch'][mediaCategory='AUDIO'][isBluetooth='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .touchImageLoader{display:none}.player[displayType='touch'][mediaCategory='AUDIO'][isBluetooth='true'] .playback-logo,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .playback-logo{color:#dfe1e5;display:flex;align-items:center;font-weight:normal;height:50px;font-size:24px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'][isBluetooth='true'] .playback-logo,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .playback-logo{height:50px;font-size:32px}}.player[displayType='touch'][mediaCategory='AUDIO'][isBluetooth='true'] .playback-logo:before,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .playback-logo:before{display:block;content:'';background:url(\"data:image/svg+xml,%3Csvg%20viewBox=%270%200%2024%2024%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%20%20%3Cg%20stroke=%27none%27%20stroke-width=%271%27%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d=%27M17.71%2C7.71%20L12%2C2%20L11%2C2%20L11%2C9.59%20L6.41%2C5%20L5%2C6.41%20L10.59%2C12%20L5%2C17.59%20L6.41%2C19%20L11%2C14.41%20L11%2C22%20L12%2C22%20L17.71%2C16.29%20L13.41%2C12%20L17.71%2C7.71%20Z%20M13%2C5.83%20L14.88%2C7.71%20L13%2C9.59%20L13%2C5.83%20Z%20M14.88%2C16.29%20L13%2C18.17%20L13%2C14.41%20L14.88%2C16.29%20Z%27%20id=%27Shape%27%20fill=%27%23dfe1e5%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E%0A\") left center no-repeat;padding-right:20px;height:28px;width:28px;background-size:28px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'][isBluetooth='true'] .playback-logo:before,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .playback-logo:before{padding-right:20px;height:48px;width:48px;background-size:48px}}.player[displayType='touch'][mediaCategory='AUDIO'][isBluetooth='true'] .metadataImage,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .metadataImage{opacity:.2;display:block;flex:none;background:url(\"data:image/svg+xml,%3Csvg%20viewBox=%270%200%2024%2024%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%20%20%3Cg%20stroke=%27none%27%20stroke-width=%271%27%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d=%27M17.71%2C7.71%20L12%2C2%20L11%2C2%20L11%2C9.59%20L6.41%2C5%20L5%2C6.41%20L10.59%2C12%20L5%2C17.59%20L6.41%2C19%20L11%2C14.41%20L11%2C22%20L12%2C22%20L17.71%2C16.29%20L13.41%2C12%20L17.71%2C7.71%20Z%20M13%2C5.83%20L14.88%2C7.71%20L13%2C9.59%20L13%2C5.83%20Z%20M14.88%2C16.29%20L13%2C18.17%20L13%2C14.41%20L14.88%2C16.29%20Z%27%20id=%27Shape%27%20fill=%27%23000%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E%0A\") no-repeat center center !important;height:269px;width:269px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][mediaCategory='AUDIO'][isBluetooth='true'] .metadataImage,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .metadataImage{height:353px;width:353px}}.player[mediaCategory='VIDEO']:not([isRemoteControl='true']) .metadata{display:flex}.player[mediaCategory='VIDEO']:not([isRemoteControl='true']) .watermark{display:block}.player[mediaCategory='VIDEO']:not([isRemoteControl='true']) .image-holding-container{display:flex}.player[mediaCategory='VIDEO']:not([isRemoteControl='true']) .metadataImage{background-image:none !important;content:var(--album-art-image);align-self:flex-end;height:auto;margin-right:40px;width:88px}.player[mediaCategory='VIDEO']:not([isRemoteControl='true']) .top-right-video-overlay-image{max-width:280px;max-height:100px;position:fixed;top:40px;right:80px;display:block}.player[mediaCategory='VIDEO']:not([isRemoteControl='true']) .metadataPlaceHolder{align-self:flex-end;flex:1}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='idle'] .metadata,.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='idle'] .controlsTimeline,.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='idle'] .gradient,.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='idle'] .nextOverlay{display:none}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='loading'] video{display:block}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='buffering'] video{display:block}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='buffering'] .gradient{opacity:.1}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='paused'] video{display:block}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='paused'][displayStatus=false] .gradient{opacity:.1}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='playing'] video{display:block}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='playing'].showNextOverlay .gradient,.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[state='playing'].showNextOverlay .nextOverlay{opacity:1;visibility:var(--next-preview-visibility, visible);-webkit-transition:opacity 1s linear}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[isPlayingBreak=true] .breakOverlay{display:block;visibility:visible}.player[mediaCategory='VIDEO']:not([isRemoteControl='true'])[isPlayingBreak=true] .watermark{display:none}.player[mediaCategory='VIDEO']:not([isRemoteControl='true']) .controlsPlayPause{margin:20px}.player[mediaCategory='VIDEO']:not([isRemoteControl='true']) .controlsTimeline{margin-left:128px;margin-top:16px}.player[mediaCategory='VIDEO']:not([isRemoteControl='true']) .controlsTimelineLabels{margin-top:22px}.player[displayType='touch'][mediaCategory='VIDEO']:not([state='idle']):not([isRemoteControl='true']) .background,.player[dpadUi='true'][mediaCategory='VIDEO']:not([state='idle']):not([isRemoteControl='true']) .background,.player[displayType='touch'][mediaCategory='VIDEO']:not([state='idle']):not([isRemoteControl='true']) .foreground>*:not(video),.player[dpadUi='true'][mediaCategory='VIDEO']:not([state='idle']):not([isRemoteControl='true']) .foreground>*:not(video){display:none}.slideshow{--animation-duration:var(--slideshow-animation-duration, 2s);display:none;--interval-duration:var(--slideshow-interval-duration, 10s)}.slideshow.active{display:block}.slideshow .slide{background-color:#000;background-position:center center;background-repeat:no-repeat;background-size:contain;height:100%;opacity:0;position:absolute;width:100%}.slideshow .slide.visible{opacity:1;-webkit-transition-property:opacity;-webkit-transition-duration:var(--slideshow-animation-duration, 2s)}.slideshow .slide.top{z-index:100}.slideshow .slideshow-image-1{background-image:var(--slideshow-image-1)}.slideshow .slideshow-image-2{background-image:var(--slideshow-image-2)}.slideshow .slideshow-image-3{background-image:var(--slideshow-image-3)}.slideshow .slideshow-image-4{background-image:var(--slideshow-image-4)}.slideshow .slideshow-image-5{background-image:var(--slideshow-image-5)}.slideshow .slideshow-image-6{background-image:var(--slideshow-image-6)}.slideshow .slideshow-image-7{background-image:var(--slideshow-image-7)}.slideshow .slideshow-image-8{background-image:var(--slideshow-image-8)}.slideshow .slideshow-image-9{background-image:var(--slideshow-image-9)}.slideshow .slideshow-image-10{background-image:var(--slideshow-image-10)}.progressBar {  background-color: var(--progress-color, var(--default-progress-color, hsl(var(--theme-hue, 42), 95%, 60%)));}.breakIcon {  background-color: var(--break-color, hsl(var(--theme-hue, 42), 100%, 50%));}</style><div class=player id=castPlayer live=false state=launching><div class=background></div><div class=foreground><video aria-hidden=true class=mediaElement id=castMediaElement style=height:100%;width:100%></video><div class=logo></div><div class=spinner></div><div class=splash></div><div class=slideshow id=castSlideshowElement><div class=\"slide slideshow-image-1\"></div><div class=\"slide slideshow-image-2\"></div><div class=\"slide slideshow-image-3\"></div><div class=\"slide slideshow-image-4\"></div><div class=\"slide slideshow-image-5\"></div><div class=\"slide slideshow-image-6\"></div><div class=\"slide slideshow-image-7\"></div><div class=\"slide slideshow-image-8\"></div><div class=\"slide slideshow-image-9\"></div><div class=\"slide slideshow-image-10\"></div></div><div class=gradient></div><div class=watermark></div><div class=audioPlaybackBackground></div><div class=audioPlaybackBackgroundScrim></div><div class=breakOverlay><div class=breakMetadata id=castBreakMetadata><div class=breakInfo><span class=breakIcon></span><span class=breakPosition id=castBreakPosition></span>&nbsp;<span class=breakTime id=castBreakTime></span></div><div class=breakSkippableTime id=castBreakSkippableTime></div><div class=skipBreakMessage id=castSkipBreakMessage></div></div></div><div class=overlay><div class=metadata><div class=image-holding-container id=image-holding-container><div class=top-right-audio-persistent-image id=top-right-audio-persistent-image></div><image-loader class=touchImageLoader id=metadataImageLoader></image-loader><div class=metadataImage id=castMetadataImage></div></div><div class=top-right-video-overlay-image id=top-right-video-overlay-image></div><div class=metadataPlaceHolder><div class=playback-logo></div><h1 class=metadataTitle id=castMetadataTitle></h1><h2 class=metadataSubtitle id=castMetadataSubtitle></h2><h2 class=metadataSubtitle2 id=castMetadataSubtitle2></h2></div></div><div class=controls><div class=audioStatusIndicators><div class=\"repeatStatus queueStatusIcon\" id=repeatStatus></div><div class=\"shuffleStatus queueStatusIcon\" id=shuffleStatus></div><div class=\"audioLiveIndicator liveIndicator\"><span class=liveLabel></span></div></div><span class=controlsPlayPause></span><div class=controlsTimeline id=castControlsTimeline><div class=controlsProgress id=castControlsProgress><div class=\"controlsProgressInner progressBar\" id=castControlsProgressInner></div><div class=controlsSeekable id=castControlsSeekable></div><div class=controlsSeekablePlayed id=castControlsSeekablePlayed></div></div><div class=controlsTimelineLabels><span class=controlsCurTime id=castControlsCurTime></span><span class=controlsTotalTime id=castControlsTotalTime></span><div class=\"videoLiveIndicator liveIndicator\"><span class=liveLabel></span></div></div></div></div></div><div class=nextOverlay><div class=nextMetadata><div class=nextMetadataPlaceHolder><div class=nextMetadataCountdown id=nextMetadataCountdown></div><div class=nextMetadataTitle id=nextMetadataTitle></div><div class=nextMetadataSubtitle id=nextMetadataSubtitle></div></div><div class=nextImagePlaceholder><div class=nextMetadataImage id=nextMetadataImage></div><div class=nextContentRating id=nextContentRating></div></div></div></div></div></div>"
    };
    cast.framework.Xk = function(a) {
        a.innerHTML = "<style>@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes loading{0%{margin-left:-100%}100%{margin-left:100%}}@-webkit-keyframes flashing{0%{background-color:#80868b}50%{background-color:#5f6368}100%{background-color:#80868b}}:host{display:block;position:relative}.image{background-size:contain;background-position:top right;background-repeat:no-repeat;width:100%;height:100%;overflow:hidden}.loading-animation{position:absolute;top:0;left:0;will-change:opacity;height:100%;width:100%;animation:flashing 1.3s infinite linear;animation-play-state:paused;transition:opacity 350ms cubic-bezier(.33, 0, .67, 1);opacity:0}.loading-animation.start-animation{opacity:1;animation-play-state:running}</style><div class=image id=image></div><div class=loading-animation id=loading-animation></div>"
    };
    cast.framework.events = {};
    _.w("cast.framework.events.DetailedErrorCode", {
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
        MEDIA_ERROR_MESSAGE: 906,
        GENERIC: 999
    }, void 0);
    cast.framework.messages = {};
    var gC = {
        MEDIA_STATUS: "MEDIA_STATUS",
        CUSTOM_STATE: "CUSTOM_STATE",
        CLOUD_STATUS: "CLOUD_STATUS",
        QUEUE_CHANGE: "QUEUE_CHANGE",
        QUEUE_ITEMS: "QUEUE_ITEMS",
        QUEUE_ITEM_IDS: "QUEUE_ITEM_IDS",
        GET_STATUS: "GET_STATUS",
        LOAD: "LOAD",
        PAUSE: "PAUSE",
        STOP: "STOP",
        PLAY: "PLAY",
        SKIP_AD: "SKIP_AD",
        PLAY_AGAIN: "PLAY_AGAIN",
        SEEK: "SEEK",
        SET_PLAYBACK_RATE: "SET_PLAYBACK_RATE",
        SET_VOLUME: "SET_VOLUME",
        EDIT_TRACKS_INFO: "EDIT_TRACKS_INFO",
        EDIT_AUDIO_TRACKS: "EDIT_AUDIO_TRACKS",
        PRECACHE: "PRECACHE",
        PRELOAD: "PRELOAD",
        QUEUE_LOAD: "QUEUE_LOAD",
        QUEUE_INSERT: "QUEUE_INSERT",
        QUEUE_UPDATE: "QUEUE_UPDATE",
        QUEUE_REMOVE: "QUEUE_REMOVE",
        QUEUE_REORDER: "QUEUE_REORDER",
        QUEUE_NEXT: "QUEUE_NEXT",
        QUEUE_PREV: "QUEUE_PREV",
        QUEUE_GET_ITEM_RANGE: "QUEUE_GET_ITEM_RANGE",
        QUEUE_GET_ITEMS: "QUEUE_GET_ITEMS",
        QUEUE_GET_ITEM_IDS: "QUEUE_GET_ITEM_IDS",
        QUEUE_SHUFFLE: "QUEUE_SHUFFLE",
        SET_CREDENTIALS: "SET_CREDENTIALS",
        LOAD_BY_ENTITY: "LOAD_BY_ENTITY",
        USER_ACTION: "USER_ACTION",
        DISPLAY_STATUS: "DISPLAY_STATUS",
        FOCUS_STATE: "FOCUS_STATE",
        CUSTOM_COMMAND: "CUSTOM_COMMAND",
        STORE_SESSION: "STORE_SESSION",
        RESUME_SESSION: "RESUME_SESSION",
        SESSION_STATE: "SESSION_STATE",
        REFRESH_CREDENTIALS: "REFRESH_CREDENTIALS",
        PLAY_STRING: "PLAY_STRING",
        SHOW_REMOTE_CONTROL_OVERLAY: "SHOW_REMOTE_CONTROL_OVERLAY",
        EXECUTE_ACTION_SCRIPT: "EXECUTE_ACTION_SCRIPT",
        APPLICATION_CHANGED: "APPLICATION_CHANGED",
        Os: "SCREEN_NAVIGATION",
        Rs: "SET_APPLICATION_CONTEXT"
    };
    _.w("cast.framework.messages.MessageType", gC, void 0);
    var sx = {
        INVALID_COMMAND: "INVALID_COMMAND",
        INVALID_PARAMS: "INVALID_PARAMS",
        INVALID_MEDIA_SESSION_ID: "INVALID_MEDIA_SESSION_ID",
        SKIP_LIMIT_REACHED: "SKIP_LIMIT_REACHED",
        NOT_SUPPORTED: "NOT_SUPPORTED",
        LANGUAGE_NOT_SUPPORTED: "LANGUAGE_NOT_SUPPORTED",
        END_OF_QUEUE: "END_OF_QUEUE",
        DUPLICATE_REQUEST_ID: "DUPLICATE_REQUEST_ID",
        VIDEO_DEVICE_REQUIRED: "VIDEO_DEVICE_REQUIRED",
        PREMIUM_ACCOUNT_REQUIRED: "PREMIUM_ACCOUNT_REQUIRED",
        APP_ERROR: "APP_ERROR",
        AUTHENTICATION_EXPIRED: "AUTHENTICATION_EXPIRED",
        CONCURRENT_STREAM_LIMIT: "CONCURRENT_STREAM_LIMIT",
        PARENTAL_CONTROL_RESTRICTED: "PARENTAL_CONTROL_RESTRICTED",
        CONTENT_FILTERED: "CONTENT_FILTERED",
        NOT_AVAILABLE_IN_REGION: "NOT_AVAILABLE_IN_REGION",
        CONTENT_ALREADY_PLAYING: "CONTENT_ALREADY_PLAYING",
        INVALID_REQUEST: "INVALID_REQUEST",
        GENERIC_LOAD_ERROR: "GENERIC_LOAD_ERROR"
    };
    _.w("cast.framework.messages.ErrorReason", sx, void 0);
    _.w("cast.framework.messages.ErrorData", Vq, void 0);
    _.w("cast.framework.messages.Range", Wq, void 0);
    _.w("cast.framework.messages.CustomStateMessage", Xq, void 0);
    _.w("cast.framework.messages.RequestData", M, void 0);
    _.r(Zq, M);
    _.w("cast.framework.messages.LoadRequestData", Zq, void 0);
    _.r($q, Zq);
    _.w("cast.framework.messages.PreloadRequestData", $q, void 0);
    _.r(ar, Zq);
    _.w("cast.framework.messages.PrecacheRequestData", ar, void 0);
    _.r(cr, M);
    _.w("cast.framework.messages.VolumeRequestData", cr, void 0);
    _.r(dr, M);
    _.w("cast.framework.messages.EditTracksInfoRequestData", dr, void 0);
    _.r(er, M);
    _.w("cast.framework.messages.EditAudioTracksRequestData", er, void 0);
    _.r(fr, M);
    _.w("cast.framework.messages.SeekRequestData", fr, void 0);
    _.r(gr, M);
    _.w("cast.framework.messages.SetPlaybackRateRequestData", gr, void 0);
    _.r(hr, M);
    _.w("cast.framework.messages.GetStatusRequestData", hr, void 0);
    _.r(ir, M);
    _.w("cast.framework.messages.QueueLoadRequestData", ir, void 0);
    _.r(jr, M);
    _.w("cast.framework.messages.QueueInsertRequestData", jr, void 0);
    _.r(kr, M);
    _.w("cast.framework.messages.QueueUpdateRequestData", kr, void 0);
    _.r(lr, M);
    _.w("cast.framework.messages.QueueRemoveRequestData", lr, void 0);
    _.r(mr, M);
    _.w("cast.framework.messages.QueueReorderRequestData", mr, void 0);
    _.r(nr, M);
    _.w("cast.framework.messages.FetchItemsRequestData", nr, void 0);
    _.r(or, M);
    _.w("cast.framework.messages.GetItemsInfoRequestData", or, void 0);
    _.w("cast.framework.messages.SessionState", pr, void 0);
    _.r(qr, M);
    _.w("cast.framework.messages.StoreSessionRequestData", qr, void 0);
    _.r(rr, M);
    _.w("cast.framework.messages.ResumeSessionRequestData", rr, void 0);
    _.r(sr, M);
    _.w("cast.framework.messages.StoreSessionResponseData", sr, void 0);
    _.w("cast.framework.messages.HlsSegmentFormat", {
        AAC: "aac",
        AC3: "ac3",
        MP3: "mp3",
        TS: "ts",
        TS_AAC: "ts_aac",
        TS_HE_AAC: "ts_he_aac",
        E_AC3: "e_ac3",
        FMP4: "fmp4"
    }, void 0);
    _.w("cast.framework.messages.HlsVideoSegmentFormat", {
        MPEG2_TS: "mpeg2_ts",
        FMP4: "fmp4"
    }, void 0);
    _.w("cast.framework.messages.StreamType", {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        NONE: "NONE"
    }, void 0);
    _.w("cast.framework.messages.MediaCategory", {
        AUDIO: "AUDIO",
        VIDEO: "VIDEO",
        IMAGE: "IMAGE"
    }, void 0);
    _.w("cast.framework.messages.HdrType", {
        SDR: "sdr",
        HDR: "hdr",
        DV: "dv"
    }, void 0);
    var rx = {
        INVALID_PLAYER_STATE: "INVALID_PLAYER_STATE",
        LOAD_FAILED: "LOAD_FAILED",
        LOAD_CANCELLED: "LOAD_CANCELLED",
        INVALID_REQUEST: "INVALID_REQUEST",
        ERROR: "ERROR"
    };
    _.w("cast.framework.messages.ErrorType", rx, void 0);
    _.w("cast.framework.messages.IdleReason", {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    }, void 0);
    _.w("cast.framework.messages.SeekResumeState", {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    }, void 0);
    _.w("cast.framework.messages.PlayerState", {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    }, void 0);
    _.w("cast.framework.messages.ExtendedPlayerState", {
        LOADING: "LOADING"
    }, void 0);
    _.w("cast.framework.messages.MediaInformation", Yq, void 0);
    _.w("cast.framework.messages.SeekableRange", tr, void 0);
    _.r(ur, tr);
    _.w("cast.framework.messages.LiveSeekableRange", ur, void 0);
    _.w("cast.framework.messages.QueueData", vr, void 0);
    _.w("cast.framework.messages.QueueType", {
        ALBUM: "ALBUM",
        PLAYLIST: "PLAYLIST",
        AUDIOBOOK: "AUDIOBOOK",
        RADIO_STATION: "RADIO_STATION",
        PODCAST_SERIES: "PODCAST_SERIES",
        TV_SERIES: "TV_SERIES",
        VIDEO_PLAYLIST: "VIDEO_PLAYLIST",
        LIVE_TV: "LIVE_TV",
        MOVIE: "MOVIE"
    }, void 0);
    _.w("cast.framework.messages.ContainerType", {
        GENERIC_CONTAINER: 0,
        AUDIOBOOK_CONTAINER: 1
    }, void 0);
    _.w("cast.framework.messages.ContainerMetadata", wr, void 0);
    _.w("cast.framework.messages.StreamingProtocolType", {
        UNKNOWN: 0,
        MPEG_DASH: 1,
        HLS: 2,
        SMOOTH_STREAMING: 3
    }, void 0);
    _.w("cast.framework.messages.MetadataType", {
        GENERIC: 0,
        MOVIE: 1,
        TV_SHOW: 2,
        MUSIC_TRACK: 3,
        PHOTO: 4,
        AUDIOBOOK_CHAPTER: 5
    }, void 0);
    _.w("cast.framework.messages.MediaMetadata", xr, void 0);
    _.r(yr, xr);
    _.w("cast.framework.messages.GenericMediaMetadata", yr, void 0);
    _.r(zr, xr);
    _.w("cast.framework.messages.MovieMediaMetadata", zr, void 0);
    _.r(Ar, xr);
    _.w("cast.framework.messages.TvShowMediaMetadata", Ar, void 0);
    _.r(Br, xr);
    _.w("cast.framework.messages.MusicTrackMediaMetadata", Br, void 0);
    _.r(Cr, xr);
    _.w("cast.framework.messages.PhotoMediaMetadata", Cr, void 0);
    _.r(Dr, wr);
    _.w("cast.framework.messages.AudiobookContainerMetadata", Dr, void 0);
    _.r(Er, xr);
    _.w("cast.framework.messages.AudiobookChapterMediaMetadata", Er, void 0);
    _.w("cast.framework.messages.ContentRating", function() {
        this.ratingIcon = void 0
    }, void 0);
    _.w("cast.framework.messages.Image", function(a) {
        this.url = a;
        this.width = this.height = void 0
    }, void 0);
    _.w("cast.framework.messages.Volume", br, void 0);
    _.w("cast.framework.messages.VideoInformation", function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    }, void 0);
    _.w("cast.framework.messages.MediaStatus", Fr, void 0);
    _.w("cast.framework.messages.ExtendedMediaStatus", function(a, b, c) {
        this.playerState = a;
        this.media = b;
        this.mediaSessionId = c
    }, void 0);
    _.r(Gr, Fr);
    _.w("cast.framework.messages.CloudMediaStatus", Gr, void 0);
    _.w("cast.framework.messages.Command", {
        PAUSE: 1,
        SEEK: 2,
        STREAM_VOLUME: 4,
        STREAM_MUTE: 8,
        ALL_BASIC_MEDIA: 12303,
        QUEUE_NEXT: 64,
        QUEUE_PREV: 128,
        QUEUE_SHUFFLE: 256,
        QUEUE_REPEAT_ALL: 1024,
        QUEUE_REPEAT_ONE: 2048,
        QUEUE_REPEAT: 3072,
        SKIP_AD: 512,
        EDIT_TRACKS: 4096,
        PLAYBACK_RATE: 8192,
        LIKE: 16384,
        DISLIKE: 32768,
        FOLLOW: 65536,
        UNFOLLOW: 131072,
        STREAM_TRANSFER: 262144,
        LYRICS: 524288
    }, void 0);
    _.w("cast.framework.messages.TrackType", {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    }, void 0);
    var kv = {
        CEA608: "text/cea608",
        TTML: "application/ttml+xml",
        VTT: "text/vtt",
        TTML_MP4: "application/mp4"
    };
    _.w("cast.framework.messages.CaptionMimeType", kv, void 0);
    _.w("cast.framework.messages.TextTrackType", {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    }, void 0);
    _.w("cast.framework.messages.TextTrackEdgeType", {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    }, void 0);
    _.w("cast.framework.messages.TextTrackWindowType", {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    }, void 0);
    _.w("cast.framework.messages.TextTrackFontGenericFamily", {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    }, void 0);
    _.w("cast.framework.messages.TextTrackFontStyle", {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    }, void 0);
    _.w("cast.framework.messages.Track", Hr, void 0);
    _.w("cast.framework.messages.TextTrackStyle", function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = this.fontScale = void 0
    }, void 0);
    _.w("cast.framework.messages.TracksInfo", Ir, void 0);
    _.w("cast.framework.messages.RepeatMode", {
        REPEAT_OFF: "REPEAT_OFF",
        REPEAT_ALL: "REPEAT_ALL",
        REPEAT_SINGLE: "REPEAT_SINGLE",
        REPEAT_ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    }, void 0);
    _.w("cast.framework.messages.QueueChangeType", {
        INSERT: "INSERT",
        REMOVE: "REMOVE",
        ITEMS_CHANGE: "ITEMS_CHANGE",
        UPDATE: "UPDATE",
        NO_CHANGE: "NO_CHANGE"
    }, void 0);
    _.w("cast.framework.messages.QueueChange", function() {
        this.type = "QUEUE_CHANGE";
        this.sequenceNumber = this.reorderItemIds = this.insertBefore = this.itemIds = this.changeType = this.requestId = void 0
    }, void 0);
    _.w("cast.framework.messages.ItemsInfo", function() {
        this.type = "QUEUE_ITEMS";
        this.sequenceNumber = this.items = this.requestId = void 0
    }, void 0);
    _.w("cast.framework.messages.QueueIds", function() {
        this.type = "QUEUE_ITEM_IDS";
        this.sequenceNumber = this.itemIds = this.requestId = void 0
    }, void 0);
    _.w("cast.framework.messages.GetStatusOptions", {
        NO_METADATA: 1,
        NO_QUEUE_ITEMS: 2
    }, void 0);
    _.w("cast.framework.messages.Break", _.Jr, void 0);
    _.w("cast.framework.messages.BreakClip", _.Kr, void 0);
    _.w("cast.framework.messages.VastAdsRequest", _.Lr, void 0);
    _.w("cast.framework.messages.BreakStatus", Mr, void 0);
    _.w("cast.framework.messages.UserActionState", function(a) {
        this.userAction = a;
        this.customData = void 0
    }, void 0);
    _.w("cast.framework.messages.ContentFilteringMode", {
        FILTER_EXPLICIT: "FILTER_EXPLICIT"
    }, void 0);
    _.w("cast.framework.messages.LoadOptions", function() {
        this.contentFilteringMode = void 0
    }, void 0);
    _.w("cast.framework.messages.PlayStringId", {
        FREE_TRIAL_ABOUT_TO_EXPIRE: "FREE_TRIAL_ABOUT_TO_EXPIRE",
        SUBSCRIPTION_ABOUT_TO_EXPIRE: "SUBSCRIPTION_ABOUT_TO_EXPIRE",
        STREAM_HIJACKED: "STREAM_HIJACKED",
        PLAYING_ALTERNATE_MIX: "PLAYING_ALTERNATE_MIX"
    }, void 0);
    _.r(Nr, M);
    _.w("cast.framework.messages.SetCredentialsRequestData", Nr, void 0);
    _.r(Or, M);
    _.w("cast.framework.messages.LoadByEntityRequestData", Or, void 0);
    _.r(Pr, M);
    _.w("cast.framework.messages.CustomCommandRequestData", Pr, void 0);
    _.r(Qr, M);
    _.w("cast.framework.messages.RefreshCredentialsRequestData", Qr, void 0);
    _.r(Rr, M);
    _.w("cast.framework.messages.PlayStringRequestData", Rr, void 0);
    _.r(Sr, M);
    _.w("cast.framework.messages.ExecuteActionScriptRequestData", Sr, void 0);
    _.w("cast.framework.messages.DisplayItem", function(a, b) {
        this.title = a;
        this.entity = b
    }, void 0);
    _.w("cast.framework.messages.DisplayItemList", function(a, b) {
        this.listTitle = a || "";
        this.displayItems = b
    }, void 0);
    _.w("cast.framework.messages.DisplayContext", function(a) {
        this.displayItemLists = a
    }, void 0);
    _.w("cast.framework.messages.Context", function(a) {
        this.opaqueContext = "";
        this.displayContext = a
    }, void 0);
    _.r(Tr, M);
    _.w("cast.framework.messages.DisplayContextRequestData", Tr, void 0);
    _.r(Ur, M);
    _.w("cast.framework.messages.ScreenNavigationRequestData", Ur, void 0);
    _.w("cast.framework.messages.ScriptAction", function(a, b) {
        this.app_id = a;
        this.action = b;
        this.custom_data = void 0
    }, void 0);
    _.w("cast.framework.messages.UserAction", {
        LIKE: "LIKE",
        DISLIKE: "DISLIKE",
        FOLLOW: "FOLLOW",
        UNFOLLOW: "UNFOLLOW",
        FLAG: "FLAG",
        SKIP_AD: "SKIP_AD",
        LYRICS: "LYRICS"
    }, void 0);
    _.w("cast.framework.messages.UserActionContext", {
        UNKNOWN_CONTEXT: "UNKNOWN_CONTEXT",
        TRACK: "TRACK",
        ALBUM: "ALBUM",
        ARTIST: "ARTIST",
        PLAYLIST: "PLAYLIST",
        EPISODE: "EPISODE",
        SERIES: "SERIES",
        MOVIE: "MOVIE",
        CHANNEL: "CHANNEL",
        TEAM: "TEAM",
        PLAYER: "PLAYER",
        COACH: "COACH"
    }, void 0);
    _.w("cast.framework.messages.NavigationType", {
        SCROLL_LEFT: "SCROLL_LEFT",
        SCROLL_RIGHT: "SCROLL_RIGHT"
    }, void 0);
    _.r(Vr, M);
    _.w("cast.framework.messages.UserActionRequestData", Vr, void 0);
    _.r(Wr, M);
    _.w("cast.framework.messages.DisplayStatusRequestData", Wr, void 0);
    _.r(Xr, M);
    _.w("cast.framework.messages.ShowRemoteControlOverlayRequestData", Xr, void 0);
    _.r(Yr, M);
    _.w("cast.framework.messages.FocusStateRequestData", Yr, void 0);
    _.w("cast.framework.messages.FocusState", {
        IN_FOCUS: "IN_FOCUS",
        NOT_IN_FOCUS: "NOT_IN_FOCUS"
    }, void 0);
    _.w("cast.framework.messages.QueueItem", function(a) {
        this.itemId = a;
        this.customData = this.activeTrackIds = this.preloadTime = this.playbackDuration = this.startTime = this.autoplay = this.media = void 0
    }, void 0);
    cast.framework.oa = {};
    _.w("cast.framework.system.Event", Zr, void 0);
    _.w("cast.framework.system.MessageType", {
        STRING: "STRING",
        JSON: "JSON"
    }, void 0);
    _.w("cast.framework.system.LaunchedFrom", {
        UNKNOWN: "UNKNOWN",
        DIAL: "DIAL",
        CAST: "CAST",
        CLOUD: "CLOUD"
    }, void 0);
    _.w("cast.framework.system.ApplicationData", function() {
        this.iconUrl = this.name = this.id = "";
        this.sessionId = 0;
        this.namespaces = [];
        this.launchingSenderId = "";
        this.launchedFrom = "UNKNOWN"
    }, void 0);
    _.w("cast.framework.system.PlaybackType", {
        UNKNOWN: 0,
        SINGLE_DEVICE: 1,
        STATIC_GROUP: 2,
        DYNAMIC_GROUP: 3,
        REMOTE: 4,
        BLUETOOTH: 5
    }, void 0);
    _.w("cast.framework.system.PlaybackDeviceStatus", function() {
        this.playbackType = 0;
        this.deviceName = ""
    }, void 0);
    _.w("cast.framework.system.SystemVolumeData", $r, void 0);
    _.w("cast.framework.system.Sender", function() {
        this.userAgent = this.id = "";
        this.largeMessageSupported = void 0
    }, void 0);
    _.w("cast.framework.system.VisibilityState", {
        VISIBLE: "visible",
        NOT_VISIBLE: "notvisible",
        UNKNOWN: "unknown"
    }, void 0);
    _.w("cast.framework.system.StandbyState", {
        STANDBY: "standby",
        NOT_STANDBY: "notstandby",
        UNKNOWN: "unknown"
    }, void 0);
    _.w("cast.framework.system.MediaControlsState", {
        HIDE: 0,
        SHOW: 1
    }, void 0);
    _.w("cast.framework.system.SystemState", {
        NOT_STARTED: "notstarted",
        STARTING_IN_BACKGROUND: "startinginbackground",
        STARTING: "starting",
        READY: "ready",
        STOPPING_IN_BACKGROUND: "stoppinginbackground",
        STOPPING: "stopping"
    }, void 0);
    _.w("cast.framework.system.DeviceCapabilities", {
        AUDIO_ASSISTANT: "audio_assistant",
        BLUETOOTH_SUPPORTED: "bluetooth_supported",
        DISPLAY_SUPPORTED: "display_supported",
        HI_RES_AUDIO_SUPPORTED: "hi_res_audio_supported",
        IS_DV_SUPPORTED: "is_dv_supported",
        IS_HDR_SUPPORTED: "is_hdr_supported",
        TOUCH_INPUT_SUPPORTED: "touch_input_supported",
        IS_GROUP: "is_group",
        REMOTE_CONTROL_OVERLAY_SUPPORTED: "remote_control_overlay_supported",
        SLEEP_TIMER_OVERLAY_SUPPORTED: "sleep_timer_overlay_supported",
        APP_FOREGROUND: "app_foreground",
        IS_DEVICE_REGISTERED: "is_device_registered",
        IS_CBCS_SUPPORTED: "is_cbcs_supported",
        IS_DOLBY_ATMOS_SUPPORTED: "is_dolby_atmos_supported"
    }, void 0);
    _.w("cast.framework.system.EventType", {
            READY: "ready",
            SHUTDOWN: "shutdown",
            SENDER_CONNECTED: "senderconnected",
            SENDER_DISCONNECTED: "senderdisconnected",
            ERROR: "error",
            SYSTEM_VOLUME_CHANGED: "systemvolumechanged",
            VISIBILITY_CHANGED: "visibilitychanged",
            STANDBY_CHANGED: "standbychanged",
            MAX_VIDEO_RESOLUTION_CHANGED: "maxvideoresolutionchanged",
            SHOW_MEDIA_CONTROLS: "showmediacontrols",
            FEEDBACK_STARTED: "feedbackstarted",
            GROUP_CAPABILITIES: "groupcapabilities",
            ALLOW_GROUP_CHANGE: "allowgroupchange",
            PLAYBACK_DEVICE_STATUS: "playbackdevicestatus"
        },
        void 0);
    _.w("cast.framework.system.DisconnectReason", {
        REQUESTED_BY_SENDER: "requested_by_sender",
        ERROR: "error",
        UNKNOWN: "unknown"
    }, void 0);
    _.r(as, Zr);
    _.w("cast.framework.system.SenderDisconnectedEvent", as, void 0);
    _.r(bs, Zr);
    _.w("cast.framework.system.SenderConnectedEvent", bs, void 0);
    _.r(cs, Zr);
    _.w("cast.framework.system.VisibilityChangedEvent", cs, void 0);
    _.r(ds, Zr);
    _.w("cast.framework.system.StandbyChangedEvent", ds, void 0);
    _.r(es, Zr);
    _.w("cast.framework.system.SystemVolumeChangedEvent", es, void 0);
    _.r(fs, Zr);
    _.w("cast.framework.system.ReadyEvent", fs, void 0);
    _.r(gs, Zr);
    _.w("cast.framework.system.ShutdownEvent", gs, void 0);
    _.r(hs, Zr);
    _.w("cast.framework.system.FeedbackStartedEvent", hs, void 0);
    _.r(is, Zr);
    _.w("cast.framework.system.PlaybackDeviceStatusEvent", is, void 0);
    _.r(js, Zr);
    _.w("cast.framework.system.ShowMediaControlsEvent", js, void 0);
    _.r(ks, Zr);
    _.w("cast.framework.system.MaxVideoResolutionChangedEvent", ks, void 0);
    _.r(ls, Zr);
    _.w("cast.framework.system.GroupCapabilitiesChangeEvent", ls, void 0);
    _.r(ms, Zr);
    _.w("cast.framework.system.AllowGroupChangeEvent", ms, void 0);
    cast.yk = 1624539969;
    cast.framework.VERSION = "3.0.0103";
    _.w("cast.framework.VERSION", cast.framework.VERSION, void 0);
    console.log("CAST SDK CAF Version: " + cast.framework.VERSION);
    _.Hw = {
        HLS: "application/x-mpegurl",
        ns: "application/vnd.apple.mpegurl",
        qs: "audio/mpegurl",
        rs: "audio/x-mpegurl",
        Wr: "application/dash+xml",
        Ss: "application/vnd.ms-sstr+xml"
    };
    cast.framework.V = {
        Cm: "Skip from your device",
        hm: "Casting",
        dj: function(a) {
            return "Playing in " + a + " sec(s)"
        }
    };
    cast.framework.K = {};
    cast.framework.K.so = function(a) {
        return a
    };
    cast.framework.K.it = function(a) {
        return a
    };
    cast.framework.K.to = function(a) {
        return a
    };
    cast.framework.K.jt = function(a) {
        return a
    };
    cast.framework.K.uo = function(a) {
        return a
    };
    cast.framework.K.vo = function(a) {
        return a
    };
    cast.framework.K.wo = function(a) {
        return a
    };
    cast.framework.K.Xi = function(a) {
        return a
    };
    cast.framework.K.xo = function(a) {
        return a
    };
    cast.framework.K.yo = function(a) {
        return a
    };
    cast.framework.K.zo = function(a) {
        return a
    };
    cast.framework.K.Ao = function(a) {
        return a
    };
    cast.framework.K.Yi = function(a) {
        return a
    };
    cast.framework.K.Bo = function(a) {
        return a
    };
    cast.framework.K.Zi = function(a) {
        return a
    };
    cast.framework.K.Co = function(a) {
        return a
    };
    cast.framework.K.Do = function(a) {
        return a
    };
    cast.framework.K.Eo = function(a) {
        return a
    };
    cast.framework.K.Fo = function(a) {
        return a
    };
    cast.framework.K.$i = function(a) {
        return a
    };
    cast.framework.K.kt = function(a) {
        return a
    };
    cast.framework.K.lt = function(a) {
        return a
    };
    cast.framework.K.aj = function(a) {
        return a
    };
    cast.framework.K.Go = function(a) {
        return a
    };
    cast.framework.K.ar = function(a) {
        return a
    };
    cast.framework.K.cr = function(a) {
        return a
    };
    cast.framework.K.dr = function(a) {
        return a
    };
    cast.framework.K.er = function(a) {
        return a
    };
    cast.framework.K.fr = function(a) {
        return a
    };
    cast.framework.K.gr = function(a) {
        return a
    };
    cast.framework.K.ir = function(a) {
        return a
    };
    cast.framework.K.jr = function(a) {
        return a
    };
    cast.framework.K.kr = function(a) {
        return a
    };
    cast.framework.K.ak = function(a) {
        return a
    };
    cast.framework.K.lr = function(a) {
        return a
    };
    cast.framework.K.bk = function(a) {
        return a
    };
    cast.framework.K.fc = function(a) {
        return a
    };
    cast.framework.K.mr = function(a) {
        return a
    };
    cast.framework.K.Jt = function(a) {
        return a
    };
    cast.framework.K.nr = function(a) {
        return a
    };
    cast.framework.K.pr = function(a) {
        return a
    };
    cast.framework.K.Kt = function(a) {
        return a
    };
    cast.framework.K.qr = function(a) {
        return a
    };
    cast.framework.K.rr = function(a) {
        return a
    };
    cast.framework.K.ck = function(a) {
        return a
    };
    cast.framework.K.dk = function(a) {
        return a
    };
    cast.framework.K.Lt = function(a) {
        return a
    };
    cast.framework.K.ek = function(a) {
        return a
    };
    cast.framework.K.hc = function(a) {
        return a
    };
    cast.framework.media = {};
    cast.framework.media.Sa = {};
    cast.framework.media.Sa.jj = ns;
    cast.framework.media.Sa.getTrackById = function(a, b) {
        return b.find(function(c) {
            return c.trackId == a
        }) || null
    };
    cast.framework.media.Sa.pj = function(a, b) {
        return 0 !== ns(a, b).length
    };
    cast.framework.media.Sa.kk = function(a, b) {
        if (b.filter(function(c) {
                return a.includes(c.trackId)
            }).length !== a.length) throw Error("Invalid id.");
    };
    cast.framework.media.Sa.Dr = function(a) {
        if (a.find(function(b) {
                return "TEXT" != b.type
            })) throw Error("Type is not matching.");
    };
    _.h = qs.prototype;
    _.h.reset = function() {
        this.h = null
    };
    _.h.getTracks = function() {
        rs(this);
        return this.h.na().getTracks("AUDIO")
    };
    _.h.getTrackById = function(a) {
        rs(this);
        if (0 > a) throw Error("Invalid track id.");
        return cast.framework.media.Sa.getTrackById(a, this.getTracks())
    };
    _.h.ue = function(a) {
        if (!a) throw Error("Need language as input.");
        return cast.framework.media.Sa.jj(a, this.getTracks())
    };
    _.h.Lo = function() {
        rs(this);
        var a = this.h.na().l;
        return null === a ? null : this.getTrackById(a)
    };
    _.h.Jo = function() {
        rs(this);
        return this.h.na().l
    };
    _.h.Hq = function(a) {
        rs(this);
        if (null === a) _.H(ps, "No valid id, persist the current behavior.");
        else {
            cast.framework.media.Sa.kk([a], this.getTracks());
            var b = this.h.na().o.sort();
            b = b.concat(a);
            cu(this.h.na(), b);
            this.j && Ok(this.j, cast.framework.K.hc(this.h.na().getTracksInfo()), !1)
        }
    };
    _.h.df = function(a) {
        rs(this);
        if (!cast.framework.media.Sa.pj(a, this.getTracks())) throw Error("No matching track.");
        fu(this.h.na(), a);
        this.j && Ok(this.j, cast.framework.K.hc(this.h.na().getTracksInfo()), !1)
    };
    _.h.getTracksInfo = function() {
        rs(this);
        return this.h.na().getTracksInfo()
    };
    _.w("cast.framework.AudioTracksManager", qs, void 0);
    qs.prototype.setActiveByLanguage = qs.prototype.df;
    qs.prototype.setActiveById = qs.prototype.Hq;
    qs.prototype.getActiveId = qs.prototype.Jo;
    qs.prototype.getActiveTrack = qs.prototype.Lo;
    qs.prototype.getTracksByLanguage = qs.prototype.ue;
    qs.prototype.getTrackById = qs.prototype.getTrackById;
    qs.prototype.getTracks = qs.prototype.getTracks;
    var ps = _.D("cast.framework.AudioTracksManager");
    _.w("cast.framework.NetworkRequestInfo", function() {
        this.headers = this.url = null;
        this.withCredentials = !1;
        this.timeoutInterval = this.content = null
    }, void 0);
    _.w("cast.framework.TimedMetadata", function() {}, void 0);
    _.w("cast.framework.HlsTimedMetadata", function() {}, void 0);
    _.w("cast.framework.DashTimedMetadata", function() {}, void 0);
    cast.framework.C = {};
    _.w("cast.framework.ui.UiConfig", function() {}, void 0);
    _.w("cast.framework.CastReceiverOptions", ss, void 0);
    var hC = null;
    cast.framework.Ud = {
        set: function(a) {
            hC = a
        },
        get: function() {
            return hC
        }
    };
    _.h = vs.prototype;
    _.h.Uq = function(a) {
        this.l = a;
        this.h && (this.h.T = this.l)
    };
    _.h.jg = function() {
        var a = nk(this.h);
        return a && (a = a.A) ? cast.framework.K.to(a.containerMetadata || null) : null
    };
    _.h.Mq = function(a) {
        var b = nk(this.h);
        if (b) {
            var c = b.A;
            if (!c) {
                var d = c = new Cc;
                d.repeatMode = b.o;
                b.A = d
            }
            c.containerMetadata = cast.framework.K.gr(a) || void 0;
            zs(this);
            ys(this, !1)
        } else _.E(us, "Cannot set container metadata if no queue available.")
    };
    _.h.qc = function() {
        var a = [],
            b = nk(this.h);
        b && (a = b.qc(!0));
        return cast.framework.K.Ao(a)
    };
    _.h.Ub = function() {
        var a = null,
            b = nk(this.h);
        b && (a = b.Ub());
        return cast.framework.K.zo(a)
    };
    _.h.Cd = function() {
        var a = -1,
            b = nk(this.h);
        b && (a = b.Cd());
        return a
    };
    _.h.Dg = function(a, b) {
        a = new jr(a);
        a.insertBefore = b;
        this.j.yb(a)
    };
    _.h.gh = function(a) {
        this.j.yb(new lr(a))
    };
    _.h.wh = function(a) {
        var b = new kr;
        b.items = a;
        this.j.yb(b)
    };
    _.w("cast.framework.QueueManager", vs, void 0);
    vs.prototype.updateItems = vs.prototype.wh;
    vs.prototype.removeItems = vs.prototype.gh;
    vs.prototype.insertItems = vs.prototype.Dg;
    vs.prototype.getCurrentItemIndex = vs.prototype.Cd;
    vs.prototype.getCurrentItem = vs.prototype.Ub;
    vs.prototype.getItems = vs.prototype.qc;
    vs.prototype.setContainerMetadata = vs.prototype.Mq;
    vs.prototype.getContainerMetadata = vs.prototype.jg;
    vs.prototype.setQueueStatusLimit = vs.prototype.Uq;
    var us = _.D("cast.framework.PlayerManager");
    _.w("cast.framework.Stats", function() {}, void 0);
    _.h = Cs.prototype;
    _.h.reset = function() {
        this.h = null
    };
    _.h.getTracks = function() {
        Ds(this);
        return this.h.na().getTracks("TEXT")
    };
    _.h.getTrackById = function(a) {
        Ds(this);
        if (0 > a) throw Error("Invalid input.");
        return cast.framework.media.Sa.getTrackById(a, this.getTracks())
    };
    _.h.ue = function(a) {
        if (!a) throw Error("Need language as input.");
        return cast.framework.media.Sa.jj(a, this.getTracks())
    };
    _.h.fj = function() {
        var a = this.getTracks(),
            b = this.h.na().o.sort(),
            c = [];
        a = _.q(a);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, b.includes(d.trackId) && c.push(d);
        return c
    };
    _.h.Ko = function() {
        Ds(this);
        return this.h.na().o.sort()
    };
    _.h.Nc = function() {
        Ds(this);
        return this.h.na().Nc("TEXT")
    };
    _.h.Dn = function(a) {
        Ds(this);
        cast.framework.media.Sa.Dr(a);
        $t(this.h.na(), a);
        this.j && Ok(this.j, cast.framework.K.hc(this.h.na().getTracksInfo()))
    };
    _.h.Iq = function(a) {
        Ds(this);
        var b = this.h.na();
        if (null === a || 0 === a.length)
            if (0 < b.o.sort().length) cu(b, []);
            else return;
        else cast.framework.media.Sa.kk(a, this.getTracks()), cu(b, a);
        this.j && Ok(this.j, cast.framework.K.hc(b.getTracksInfo()), !1)
    };
    _.h.df = function(a) {
        Ds(this);
        if (!cast.framework.media.Sa.pj(a, this.getTracks())) throw Error("No matching track.");
        du(this.h.na(), a);
        this.j && Ok(this.j, cast.framework.K.hc(this.h.na().getTracksInfo()), !1)
    };
    _.h.pb = function(a) {
        Ds(this);
        this.h.na().pb(a);
        this.j && Ok(this.j, cast.framework.K.hc(this.h.na().getTracksInfo()))
    };
    _.h.sc = function() {
        Ds(this);
        return this.h.na().sc()
    };
    _.h.getTracksInfo = function() {
        Ds(this);
        return this.h.na().getTracksInfo()
    };
    _.h.yr = function() {
        Ds(this)
    };
    _.w("cast.framework.TextTracksManager", Cs, void 0);
    Cs.prototype.useForcedCaptions = Cs.prototype.yr;
    Cs.prototype.getTextTracksStyle = Cs.prototype.sc;
    Cs.prototype.setTextTrackStyle = Cs.prototype.pb;
    Cs.prototype.setActiveByLanguage = Cs.prototype.df;
    Cs.prototype.setActiveByIds = Cs.prototype.Iq;
    Cs.prototype.addTracks = Cs.prototype.Dn;
    Cs.prototype.createTrack = Cs.prototype.Nc;
    Cs.prototype.getActiveIds = Cs.prototype.Ko;
    Cs.prototype.getActiveTracks = Cs.prototype.fj;
    Cs.prototype.getTracksByLanguage = Cs.prototype.ue;
    Cs.prototype.getTrackById = Cs.prototype.getTrackById;
    Cs.prototype.getTracks = Cs.prototype.getTracks;
    var Bs = _.D("cast.framework.TextTracksManager");
    var Ju = {
        NONE: "none",
        CLEARKEY: "clearkey",
        PLAYREADY: "playready",
        WIDEVINE: "widevine",
        AES_128: "aes_128",
        AES_128_CKP: "aes_128_ckp"
    };
    _.w("cast.framework.ContentProtection", Ju, void 0);
    _.w("cast.framework.PlaybackConfig", Es, void 0);
    _.w("cast.framework.events.EndedReason", {
        END_OF_STREAM: "END_OF_STREAM",
        ERROR: "ERROR",
        STOPPED: "STOPPED",
        INTERRUPTED: "INTERRUPTED",
        SKIPPED: "SKIPPED",
        BREAK_SWITCH: "BREAK_SWITCH"
    }, void 0);
    var ix = {
        ALL: "*",
        ABORT: "ABORT",
        CAN_PLAY: "CAN_PLAY",
        CAN_PLAY_THROUGH: "CAN_PLAY_THROUGH",
        DURATION_CHANGE: "DURATION_CHANGE",
        EMPTIED: "EMPTIED",
        ENDED: "ENDED",
        LOADED_DATA: "LOADED_DATA",
        LOADED_METADATA: "LOADED_METADATA",
        LOAD_START: "LOAD_START",
        PAUSE: "PAUSE",
        PLAY: "PLAY",
        PLAYING: "PLAYING",
        PROGRESS: "PROGRESS",
        RATE_CHANGE: "RATE_CHANGE",
        SEEKED: "SEEKED",
        SEEKING: "SEEKING",
        STALLED: "STALLED",
        TIME_UPDATE: "TIME_UPDATE",
        SUSPEND: "SUSPEND",
        WAITING: "WAITING",
        BITRATE_CHANGED: "BITRATE_CHANGED",
        BREAK_STARTED: "BREAK_STARTED",
        BREAK_ENDED: "BREAK_ENDED",
        BREAK_CLIP_LOADING: "BREAK_CLIP_LOADING",
        BREAK_CLIP_STARTED: "BREAK_CLIP_STARTED",
        BREAK_CLIP_ENDED: "BREAK_CLIP_ENDED",
        BUFFERING: "BUFFERING",
        CACHE_LOADED: "CACHE_LOADED",
        CACHE_HIT: "CACHE_HIT",
        CACHE_INSERTED: "CACHE_INSERTED",
        CLIP_STARTED: "CLIP_STARTED",
        CLIP_ENDED: "CLIP_ENDED",
        EMSG: "EMSG",
        ERROR: "ERROR",
        ID3: "ID3",
        MEDIA_STATUS: "MEDIA_STATUS",
        CUSTOM_STATE: "CUSTOM_STATE",
        MEDIA_INFORMATION_CHANGED: "MEDIA_INFORMATION_CHANGED",
        MEDIA_FINISHED: "MEDIA_FINISHED",
        PLAYER_PRELOADING: "PLAYER_PRELOADING",
        PLAYER_PRELOADING_CANCELLED: "PLAYER_PRELOADING_CANCELLED",
        PLAYER_LOAD_COMPLETE: "PLAYER_LOAD_COMPLETE",
        PLAYER_LOADING: "PLAYER_LOADING",
        SEGMENT_DOWNLOADED: "SEGMENT_DOWNLOADED",
        REQUEST_SEEK: "REQUEST_SEEK",
        REQUEST_LOAD: "REQUEST_LOAD",
        REQUEST_STOP: "REQUEST_STOP",
        REQUEST_PAUSE: "REQUEST_PAUSE",
        REQUEST_PRECACHE: "REQUEST_PRECACHE",
        REQUEST_PLAY: "REQUEST_PLAY",
        REQUEST_SKIP_AD: "REQUEST_SKIP_AD",
        REQUEST_PLAY_AGAIN: "REQUEST_PLAY_AGAIN",
        REQUEST_PLAYBACK_RATE_CHANGE: "REQUEST_PLAYBACK_RATE_CHANGE",
        REQUEST_VOLUME_CHANGE: "REQUEST_VOLUME_CHANGE",
        REQUEST_EDIT_TRACKS_INFO: "REQUEST_EDIT_TRACKS_INFO",
        REQUEST_EDIT_AUDIO_TRACKS: "REQUEST_EDIT_AUDIO_TRACKS",
        REQUEST_SET_CREDENTIALS: "REQUEST_SET_CREDENTIALS",
        REQUEST_LOAD_BY_ENTITY: "REQUEST_LOAD_BY_ENTITY",
        REQUEST_USER_ACTION: "REQUEST_USER_ACTION",
        REQUEST_DISPLAY_STATUS: "REQUEST_DISPLAY_STATUS",
        REQUEST_CUSTOM_COMMAND: "REQUEST_CUSTOM_COMMAND",
        REQUEST_FOCUS_STATE: "REQUEST_FOCUS_STATE",
        REQUEST_QUEUE_LOAD: "REQUEST_QUEUE_LOAD",
        REQUEST_QUEUE_INSERT: "REQUEST_QUEUE_INSERT",
        REQUEST_QUEUE_UPDATE: "REQUEST_QUEUE_UPDATE",
        REQUEST_QUEUE_REMOVE: "REQUEST_QUEUE_REMOVE",
        REQUEST_QUEUE_REORDER: "REQUEST_QUEUE_REORDER",
        REQUEST_QUEUE_GET_ITEM_RANGE: "REQUEST_QUEUE_GET_ITEM_RANGE",
        REQUEST_QUEUE_GET_ITEMS: "REQUEST_QUEUE_GET_ITEMS",
        REQUEST_QUEUE_GET_ITEM_IDS: "REQUEST_QUEUE_GET_ITEM_IDS",
        INBAND_TRACK_ADDED: "INBAND_TRACK_ADDED",
        TRACKS_CHANGED: "TRACKS_CHANGED",
        LIVE_IS_MOVING_WINDOW_CHANGED: "LIVE_IS_MOVING_WINDOW_CHANGED",
        LIVE_ENDED: "LIVE_ENDED",
        REQUEST_STORE_SESSION: "REQUEST_STORE_SESSION",
        REQUEST_RESUME_SESSION: "REQUEST_RESUME_SESSION",
        TIMED_METADATA_CHANGED: "TIMED_METADATA_CHANGED",
        TIMED_METADATA_ENTER: "TIMED_METADATA_ENTER",
        TIMED_METADATA_EXIT: "TIMED_METADATA_EXIT"
    };
    _.w("cast.framework.events.EventType", ix, void 0);
    cast.framework.common = {};
    cast.framework.common.analytics = {};
    var R = {},
        iC = (R["*"] = 1, R.ABORT = 2, R.CAN_PLAY = 3, R.CAN_PLAY_THROUGH = 4, R.DURATION_CHANGE = 5, R.EMPTIED = 6, R.ENDED = 7, R.LOADED_DATA = 8, R.LOADED_METADATA = 9, R.LOAD_START = 10, R.PAUSE = 11, R.PLAY = 12, R.PLAYING = 13, R.PROGRESS = 14, R.RATE_CHANGE = 15, R.SEEKED = 16, R.SEEKING = 17, R.STALLED = 18, R.TIME_UPDATE = 19, R.SUSPEND = 20, R.WAITING = 21, R.BITRATE_CHANGED = 22, R.BREAK_STARTED = 23, R.BREAK_ENDED = 24, R.BREAK_CLIP_LOADING = 25, R.BREAK_CLIP_STARTED = 26, R.BREAK_CLIP_ENDED = 27, R.BUFFERING = 28, R.CACHE_LOADED = 29, R.CACHE_HIT = 30, R.CACHE_INSERTED = 31,
            R.CLIP_STARTED = 32, R.CLIP_ENDED = 33, R.EMSG = 34, R.ERROR = 35, R.ID3 = 36, R.MEDIA_STATUS = 37, R.MEDIA_FINISHED = 38, R.PLAYER_PRELOADING = 39, R.PLAYER_PRELOADING_CANCELLED = 40, R.PLAYER_LOAD_COMPLETE = 41, R.PLAYER_LOADING = 42, R.SEGMENT_DOWNLOADED = 43, R.REQUEST_SEEK = 44, R.REQUEST_LOAD = 45, R.REQUEST_STOP = 46, R.REQUEST_PAUSE = 47, R.REQUEST_PLAY = 48, R.REQUEST_SKIP_AD = 49, R.REQUEST_PLAY_AGAIN = 50, R.REQUEST_PLAYBACK_RATE_CHANGE = 51, R.REQUEST_VOLUME_CHANGE = 52, R.REQUEST_EDIT_TRACKS_INFO = 53, R.REQUEST_EDIT_AUDIO_TRACKS = 54, R.REQUEST_SET_CREDENTIALS =
            55, R.REQUEST_LOAD_BY_ENTITY = 56, R.REQUEST_USER_ACTION = 57, R.REQUEST_DISPLAY_STATUS = 58, R.REQUEST_CUSTOM_COMMAND = 59, R.REQUEST_FOCUS_STATE = 60, R.REQUEST_QUEUE_LOAD = 61, R.REQUEST_QUEUE_INSERT = 62, R.REQUEST_QUEUE_UPDATE = 63, R.REQUEST_QUEUE_REMOVE = 64, R.REQUEST_QUEUE_REORDER = 65, R.REQUEST_QUEUE_GET_ITEM_RANGE = 66, R.REQUEST_QUEUE_GET_ITEMS = 67, R.REQUEST_QUEUE_GET_ITEM_IDS = 68, R.INBAND_TRACK_ADDED = 69, R.REQUEST_PRECACHE = 70, R.LIVE_IS_MOVING_WINDOW_CHANGED = 71, R.LIVE_ENDED = 72, R.MEDIA_INFORMATION_CHANGED = 73, R.REQUEST_STORE_SESSION =
            74, R.REQUEST_RESUME_SESSION = 75, R.CUSTOM_STATE = 76, R.TIMED_METADATA_CHANGED = 77, R.TIMED_METADATA_ENTER = 78, R.TIMED_METADATA_EXIT = 79, R.TRACKS_CHANGED = 80, R),
        S = {},
        jC = (S.MEDIA_STATUS = 1, S.CLOUD_STATUS = 2, S.QUEUE_CHANGE = 3, S.QUEUE_ITEMS = 4, S.QUEUE_ITEM_IDS = 5, S.GET_STATUS = 6, S.LOAD = 7, S.PAUSE = 8, S.STOP = 9, S.PLAY = 10, S.SKIP_AD = 11, S.PLAY_AGAIN = 12, S.SEEK = 13, S.SET_PLAYBACK_RATE = 14, S.SET_VOLUME = 15, S.EDIT_TRACKS_INFO = 16, S.EDIT_AUDIO_TRACKS = 17, S.PRECACHE = 18, S.PRELOAD = 19, S.QUEUE_LOAD = 20, S.QUEUE_INSERT = 21, S.QUEUE_UPDATE = 22,
            S.QUEUE_REMOVE = 23, S.QUEUE_REORDER = 24, S.QUEUE_NEXT = 25, S.QUEUE_PREV = 26, S.QUEUE_GET_ITEM_RANGE = 27, S.QUEUE_GET_ITEMS = 28, S.QUEUE_GET_ITEM_IDS = 29, S.QUEUE_SHUFFLE = 30, S.SET_CREDENTIALS = 31, S.LOAD_BY_ENTITY = 32, S.USER_ACTION = 33, S.DISPLAY_STATUS = 34, S.FOCUS_STATE = 35, S.CUSTOM_COMMAND = 36, S.STORE_SESSION = 37, S.RESUME_SESSION = 38, S.SESSION_STATE = 39, S),
        kC = {},
        lC = (kC.INVALID_COMMAND = 0, kC.INVALID_PARAMS = 1, kC.INVALID_MEDIA_SESSION_ID = 2, kC.SKIP_LIMIT_REACHED = 3, kC.NOT_SUPPORTED = 4, kC.LANGUAGE_NOT_SUPPORTED = 5, kC.END_OF_QUEUE =
            6, kC.DUPLICATE_REQUEST_ID = 7, kC.APP_ERROR = 8, kC.AUTHENTICATION_EXPIRED = 9, kC.PREMIUM_ACCOUNT_REQUIRED = 10, kC.CONCURRENT_STREAM_LIMIT = 11, kC.PARENTAL_CONTROL_RESTRICTED = 12, kC.NOT_AVAILABLE_IN_REGION = 13, kC.CONTENT_ALREADY_PLAYING = 14, kC.INVALID_REQUEST = 15, kC.GENERIC_LOAD_ERROR = 16, kC.VIDEO_DEVICE_REQUIRED = 17, kC.CONTENT_FILTERED = 18, kC),
        mC = {},
        nC = (mC.END_OF_STREAM = 0, mC.ERROR = 1, mC.STOPPED = 2, mC.INTERRUPTED = 3, mC.SKIPPED = 4, mC.BREAK_SWITCH = 5, mC);
    cast.framework.common.analytics.ud = {
        Yk: 1,
        Wm: 2,
        $m: 3,
        gn: 4,
        qk: 5
    };
    cast.framework.common.analytics.hj = function(a) {
        return iC[a]
    };
    cast.framework.common.analytics.To = function(a) {
        return jC[a]
    };
    cast.framework.common.analytics.fp = function(a) {
        return lC[void 0 === a ? "GENERIC_LOAD_ERROR" : a]
    };
    cast.framework.common.analytics.Fp = function() {
        z("Cast.CAF.Version", Number(cast.framework.VERSION.split(".")[2]))
    };
    cast.framework.common.analytics.uj = function(a, b) {
        z("Cast.CAF.PlayerStarted", a);
        b && b.protectionSystem && oC[b.protectionSystem] && z("Cast.CAF.PlayerProtectionSystem", oC[b.protectionSystem])
    };
    var pC = {},
        oC = (pC.none = 1, pC.clearkey = 2, pC.playready = 3, pC.widevine = 4, pC.aes_128 = 5, pC.aes_128_ckp = 6, pC),
        qC = {},
        rC = (qC["port-for-web-server"] = 1, qC["log-level-cast-receiver"] = 2, qC["max-video-resolution-vpx"] = 3, qC["device-model"] = 4, qC["cast-receiver-version"] = 5, qC["system-version"] = 6, qC["volume-controllable"] = 7, qC["device-capabilities"] = 8, qC["is-remote-control-mode-enabled"] = 9, qC["dpad-controls-overlay-disabled"] = 10, qC["receiver-flags"] = 11, qC["enabled-for-dev"] = 12, qC["enable-hls-sample-aes"] = 13, qC);
    cast.framework.common.analytics.Hp = function(a) {
        z("Cast.CAF.PlatformValueKey", rC[a] || 0)
    };
    cast.framework.common.analytics.Gp = function(a) {
        z("Cast.CAF.EndedReason", nC[a])
    };
    Fs.prototype.Bc = function(a, b) {
        this.j[a] = b || _.$a
    };
    Fs.prototype.A = function(a) {
        var b = a.type;
        _.I(sC, "onEvent for " + b);
        var c = this.j[b],
            d = this.l[b],
            e = this.o[b];
        d && d(a);
        c && (a = c(a));
        return Promise.resolve(a).then(function(f) {
            return f && f.type == b && e ? e(f) : f
        })
    };
    var sC = _.D("cast.framework.common.EventHandler");
    cast.framework.common.Xg = {};
    var Js = _.D("cast.framework.common.playerManagerUtils"),
        tC = {},
        uC = (tC.pause = 1, tC.skipad = 512, tC.seek = 2, tC.setplaybackrate = 8192, tC.setvolume = 4, tC.edittracksinfo = 4096, tC.storesession = 262144, tC.resumesession = 262144, tC);
    cast.framework.common.Xg.jk = function(a, b) {
        var c = a.type;
        if ("queueupdate" === c) {
            if (a.data) {
                c = a.data;
                if (0 === (b & 64) && 0 < c.jump || 0 === (b & 128) && 0 > c.jump) return Ks("QUEUE_UPDATE with Jump = " + c.jump), !1;
                if (0 === (b & 256) && c.shuffle) return Ks("QUEUE_UPDATE with Shuffle"), !1;
                if (0 === (b & 1024) && "REPEAT_ALL" === c.repeatMode) return Ks("QUEUE_UPDATE with Repeat_All"), !1;
                if (0 === (b & 2048) && "REPEAT_SINGLE" === c.repeatMode) return Ks("QUEUE_UPDATE with Repeat_One"), !1;
                if (0 === (b & 3072) && (void 0 !== c.repeatMode || "REPEAT_OFF" === c.repeatMode)) return Ks("QUEUE_UPDATE with Repeat"), !1
            }
        } else if ((a = uC[c]) && !(b & a)) return Ks(c), !1;
        return !0
    };
    var Ns = _.D("cast.framework.events.EventTarget");
    _.r(Ms, _.A);
    _.h = Ms.prototype;
    _.h.addEventListener = function(a, b, c) {
        if (this.Pa()) _.E(Ns, "Trying to add an event listener for " + a + " to a disposed EventTarget");
        else {
            this.h[a] || (this.h[a] = []);
            for (var d = _.q(this.h[a]), e = d.next(); !e.done; e = d.next())
                if (e.value.handleEvent === b) return;
            this.h[a].push(new Ls(b, c))
        }
    };
    _.h.removeEventListener = function(a, b) {
        if (this.Pa()) _.E(Ns, "Trying to remove an event listener for " + a + " from a disposed EventTarget");
        else if (a = this.h[a]) {
            var c = a.findIndex(function(d) {
                return d.handleEvent === b
            });
            0 <= c && a.splice(c, 1)
        }
    };
    _.h.gf = function(a) {
        this.Pa() ? _.E(Ns, "Trying to set a parent EventTarget for a disposed EventTarget") : this.l = a
    };
    _.h.dispatchEvent = function(a) {
        var b = a.type;
        this.Pa() ? _.E(Ns, "Trying to dispatch an event (" + a.type + ") on a disposed EventTarget") : (Os(this, b, a), Os(this, "*", a), this.l && this.l.dispatchEvent(a))
    };
    _.h.ea = function() {
        this.h = {};
        this.j = this.l = null
    };
    cast.framework.events.gs = {};
    _.w("cast.framework.events.Event", Qs, void 0);
    _.r(Rs, Qs);
    _.w("cast.framework.events.BitrateChangedEvent", Rs, void 0);
    _.r(Ss, Qs);
    _.w("cast.framework.events.EmsgEvent", Ss, void 0);
    _.r(Ts, Qs);
    _.w("cast.framework.events.ErrorEvent", Ts, void 0);
    _.r(Us, Qs);
    _.w("cast.framework.events.Id3Event", Us, void 0);
    _.r(Vs, Qs);
    _.w("cast.framework.events.MediaElementEvent", Vs, void 0);
    _.r(Ws, Vs);
    _.w("cast.framework.events.MediaPauseEvent", Ws, void 0);
    _.r(Xs, Qs);
    _.w("cast.framework.events.MediaStatusEvent", Xs, void 0);
    _.r(Ys, Qs);
    _.w("cast.framework.events.CustomStateEvent", Ys, void 0);
    _.r(Zs, Qs);
    _.w("cast.framework.events.MediaFinishedEvent", Zs, void 0);
    _.r($s, Qs);
    _.w("cast.framework.events.RequestEvent", $s, void 0);
    _.r(at, Qs);
    _.w("cast.framework.events.LoadEvent", at, void 0);
    _.r(bt, at);
    _.w("cast.framework.events.MediaInformationChangedEvent", bt, void 0);
    _.r(ct, Qs);
    _.w("cast.framework.events.BreaksEvent", ct, void 0);
    _.r(dt, Qs);
    _.w("cast.framework.events.BufferingEvent", dt, void 0);
    _.r(et, Qs);
    _.w("cast.framework.events.ClipEndedEvent", et, void 0);
    _.r(ft, Qs);
    _.w("cast.framework.events.SegmentDownloadedEvent", ft, void 0);
    _.r(gt, Qs);
    _.w("cast.framework.events.CacheLoadedEvent", gt, void 0);
    _.r(ht, Qs);
    _.w("cast.framework.events.InbandTrackAddedEvent", ht, void 0);
    _.r(it, Qs);
    _.w("cast.framework.events.TracksChangedEvent", it, void 0);
    _.r(jt, Qs);
    _.w("cast.framework.events.CacheItemEvent", jt, void 0);
    _.r(kt, Qs);
    _.w("cast.framework.events.LiveStatusEvent", kt, void 0);
    _.r(lt, Qs);
    _.w("cast.framework.events.TimedMetadataEvent", lt, void 0);
    _.w("cast.framework.ContentConfig", nt, void 0);
    var mt = _.D("cast.framework.ContentConfig");
    _.h = N.prototype;
    _.h.setEventsListener = function() {};
    _.h.getPlayerVersion = function() {};
    _.h.getPlayerState = function() {};
    _.h.getDurationSec = function() {};
    _.h.getCurrentTimeSec = function() {};
    _.h.getMediaCategory = function() {};
    _.h.isLiveStream = function() {};
    _.h.getPlaybackRate = function() {};
    _.h.getLiveSeekableRange = function() {};
    _.h.getStartAbsoluteTime = function() {};
    _.h.getBufferedRanges = function() {};
    _.h.getTracksInfo = function() {};
    _.h.getCurrentBitRate = function() {};
    _.h.getBreakStatus = function() {};
    _.h.getBreaks = function() {};
    _.h.getBreakClips = function() {};
    _.h.skipAd = function() {};
    _.h.preload = function() {};
    _.h.load = function() {};
    _.h.unload = function() {};
    _.h.play = function() {};
    _.h.pause = function() {};
    _.h.seek = function() {};
    _.h.setPlaybackRate = function() {};
    _.h.setActiveAudioTrack = function() {};
    _.h.setActiveTextTracks = function() {};
    _.w("cast.framework.PlayerInterface", N, void 0);
    N.prototype.setActiveTextTracks = N.prototype.setActiveTextTracks;
    N.prototype.setActiveAudioTrack = N.prototype.setActiveAudioTrack;
    N.prototype.setPlaybackRate = N.prototype.setPlaybackRate;
    N.prototype.seek = N.prototype.seek;
    N.prototype.pause = N.prototype.pause;
    N.prototype.play = N.prototype.play;
    N.prototype.unload = N.prototype.unload;
    N.prototype.load = N.prototype.load;
    N.prototype.preload = N.prototype.preload;
    N.prototype.skipAd = N.prototype.skipAd;
    N.prototype.getBreakClips = N.prototype.getBreakClips;
    N.prototype.getBreaks = N.prototype.getBreaks;
    N.prototype.getBreakStatus = N.prototype.getBreakStatus;
    N.prototype.getCurrentBitRate = N.prototype.getCurrentBitRate;
    N.prototype.getTracksInfo = N.prototype.getTracksInfo;
    N.prototype.getBufferedRanges = N.prototype.getBufferedRanges;
    N.prototype.getStartAbsoluteTime = N.prototype.getStartAbsoluteTime;
    N.prototype.getLiveSeekableRange = N.prototype.getLiveSeekableRange;
    N.prototype.getPlaybackRate = N.prototype.getPlaybackRate;
    N.prototype.isLiveStream = N.prototype.isLiveStream;
    N.prototype.getMediaCategory = N.prototype.getMediaCategory;
    N.prototype.getCurrentTimeSec = N.prototype.getCurrentTimeSec;
    N.prototype.getDurationSec = N.prototype.getDurationSec;
    N.prototype.getPlayerState = N.prototype.getPlayerState;
    N.prototype.getPlayerVersion = N.prototype.getPlayerVersion;
    N.prototype.setEventsListener = N.prototype.setEventsListener;
    N.EventType = {
        STATE_CHANGED: "STATE_CHANGED",
        CLIP_ENDED: "CLIP_ENDED",
        ERROR: "ERROR",
        TIME_UPDATE: "TIME_UPDATE",
        DURATION_CHANGED: "DURATION_CHANGED",
        RATE_CHANGED: "RATE_CHANGED",
        TEXT_TRACKS_CHANGED: "TEXT_TRACKS_CHANGED",
        AUDIO_TRACKS_CHANGED: "AUDIO_TRACKS_CHANGED",
        BITRATE_CHANGED: "BITRATE_CHANGED",
        TIME_TO_TARGET_BITRATE: "TIME_TO_TARGET_BITRATE",
        BREAK_INFO_CHANGED: "BREAK_INFO_CHANGED",
        BREAK_STATE_CHANGED: "BREAK_STATE_CHANGED"
    };
    N.Event = ot;
    _.r(pt, ot);
    N.BitrateChangedEvent = pt;
    _.r(qt, ot);
    N.TargetBitrateEvent = qt;
    cast.framework.common.hash = {};
    var vC = _.D("cast.framework.common.hash");
    cast.framework.common.hash.up = function(a) {
        var b = 0,
            c;
        for (c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            b = (b << 5) - b + d;
            b |= 0
        }
        return b
    };
    cast.framework.common.hash.Pg = function(a) {
        if ("number" === typeof a && Number.isInteger(a)) return a;
        "string" !== typeof a && (a = JSON.stringify(a));
        if (/^\d+$/.test(a)) return parseInt(a, 10);
        var b = cast.framework.common.hash.up(a);
        _.I(vC, "Version " + a + " was hashed to " + b);
        return b
    };
    var rt = _.D("cast.framework.common.libraryloader"),
        ut = {
            Mm: "media_player.js",
            Lm: "media_player.js",
            Eh: "3.0.13"
        },
        vt = tt("2.5.6"),
        wt = tt("3.0.13"),
        xt = tt("4.0.0");
    ut.uf = document.currentScript.src;
    var wC = new po,
        xC = new po,
        yC = new po;
    ut.Gj = wC.promise;
    ut.sh = xC.promise;
    ut.Kp = yC.promise;
    ut.hk = !1;
    ut.load = function(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.useLegacyDashSupport ? !1 : b.useLegacyDashSupport;
        var c = void 0 === b.mplUrl ? void 0 : b.mplUrl,
            d = void 0 === b.shakaUrl ? void 0 : b.shakaUrl,
            e = void 0 === b.loadMux ? !1 : b.loadMux,
            f = void 0 === b.skipMplLoad ? !1 : b.skipMplLoad;
        b = (b = void 0 === b.shakaVersion ? void 0 : b.shakaVersion) ? yt(b) : Hf() || ut.Eh;
        f || st(c || (ut.uf.includes("/preview/cast_receiver_framework.js") ? ut.Lm : ut.Mm), wC);
        a || (st(d || "//ajax.googleapis.com/ajax/libs/shaka-player/" + b + "/shaka-player.compiled.js", xC),
            ut.hk = !0);
        e && (tt(b) >= tt("3.1.0") && _.E(rt, "Mux.js is not supported for Shaka 3.1.0 and above."), st("//ajax.googleapis.com/ajax/libs/shaka-player/" + b + "/mux.min.js", yC))
    };
    ut.Ep = function() {
        var a = ut.uf.replace(/cast_receiver_framework(_debug|_dogfood)?\.js/, "cast_receiver_framework$1_vast_module.js");
        if (a === ut.uf) throw Error("Fail to calculate VAST lib URL");
        var b = new po;
        st(a, b);
        return b.promise.then(function() {
            if (cast.yk !== cast.zk) return _.E(rt, "Wrong version of VAST module is loaded."), Promise.reject("Wrong version of VAST module is loaded.")
        })
    };
    ut.reset = function() {
        wC = new po;
        xC = new po;
        yC = new po;
        ut.Gj = wC.promise;
        ut.sh = xC.promise;
        ut.Qt = new po;
        ut.Kp = yC.promise
    };
    cast.framework.common.$c = ut;
    _.r(zt, _.A);
    _.h = zt.prototype;
    _.h.Nc = function(a) {
        return new Hr(this.J++, a)
    };
    _.h.getTracks = function(a) {
        return void 0 !== a ? this.tracks.filter(function(b) {
            return b.type == a
        }) : this.tracks
    };
    _.h.getTracksInfo = function() {
        var a = new Ir;
        a.tracks = this.tracks;
        a.activeTrackIds = this.F;
        this.h && (a.textTrackStyle = cast.framework.K.$i(this.h.sc()));
        return a
    };
    _.h.gd = function(a) {
        a && a.tracksInfo && bu(this, a.tracksInfo)
    };
    _.h.Qc = function() {};
    _.h.ed = function() {};
    _.h.lg = function() {
        return null
    };
    _.h.Fg = function(a) {
        return !a.trackContentId
    };
    _.h.Lj = function(a, b, c, d, e) {
        1 < c.length && (_.H(au, "Cannot enable more than one inband tracks. Will only enable track " + c[0] + "."), c = [c[0]]);
        eu(this, b, c.concat(null != d ? d : [], e));
        this.Qc(c);
        gu(this, d, this.ignoreTtmlPositionInfo);
        null != b && this.ed(a, b)
    };
    _.h.pb = function(a) {
        this.Pa() ? _.E(au, "Cannot change tracks style in disposed state") : this.h && this.h.pb(cast.framework.K.dk(a))
    };
    _.h.sc = function() {
        if (this.h) return cast.framework.K.$i(this.h.sc())
    };
    _.h.ea = function() {
        this.A && this.A.unload();
        _.A.prototype.ea.call(this)
    };
    var au = _.D("cast.framework.media.TracksManager");
    cast.framework.media.Ur = {};
    _.h = iu.prototype;
    _.h.Fi = function(a) {
        var b = this;
        a && (Object.keys(zC).forEach(function(c) {
            nu(b, a, c, function() {
                var d = new Vs(zC[c], b.getCurrentTimeSec());
                mu(b, d)
            })
        }), nu(this, a, "playing", this.Up.bind(this)), nu(this, a, "ended", function() {
            b.end("END_OF_STREAM")
        }), nu(this, a, "pause", function() {
            var c = new Ws(b.getCurrentTimeSec(), a.ended);
            mu(b, c)
        }), nu(this, a, "ratechange", function() {
            b.Hc(a.playbackRate)
        }))
    };
    _.h.rc = function() {
        return 0
    };
    _.h.onError = function(a, b, c) {
        6 !== this.o && (this.o = 5, mu(this, new Ts(a, b, c && c.reason)), this.end("ERROR", c))
    };
    _.h.Up = function() {
        4 > this.o && (this.o = 4, mu(this, new Qs("CLIP_STARTED")))
    };
    _.h.Bj = function() {};
    _.h.Ff = function() {
        return {}
    };
    _.h.pause = function() {
        this.H = !0;
        pu(this);
        this.ec(!1);
        return this.Ej()
    };
    _.h.Ej = function() {
        if (!this.mediaElement) return Qe("INVALID_REQUEST");
        this.mediaElement.pause();
        return _.J()
    };
    _.h.play = function() {
        this.H = !1;
        var a = this.Fj();
        ju(this);
        return a
    };
    _.h.Fj = function() {
        return _.J(this.mediaElement && this.mediaElement.play())
    };
    _.h.seek = function(a, b) {
        var c = this;
        b = void 0 === b ? null : b;
        if (this.isLiveStream()) {
            var d = this.getLiveSeekableRange();
            if (!d) return _.H(AC, "No seekable range available, could not seek."), Qe("INVALID_REQUEST");
            a < d.start ? (_.H(AC, "Seek time is not available any more, jump to seek start point."), a = d.start) : a > d.end && (_.H(AC, "Seek time is not available yet, jump to live edge."), a = d.end)
        }
        1 > Math.abs(this.getCurrentTimeSec() - a) ? (_.I(AC, "ignore seek which tries to jump to too close time"), a = _.J()) : (a = this.Yd(a), this.H ||
            a.then(function() {
                ju(c)
            }, function() {}));
        return b ? a.then(function() {
            if (c.Xd() && "PLAYBACK_START" == b) return c.play();
            if (!c.Xd() && "PLAYBACK_PAUSE" == b) return c.pause()
        }) : a
    };
    _.h.Yd = function(a) {
        if (!this.mediaElement) return _.H(AC, "could not seek while media was not loaded yet"), Qe("INVALID_REQUEST");
        this.mediaElement.currentTime = a;
        return _.J()
    };
    _.h.getMediaCategory = function() {
        return this.Zc
    };
    _.h.Wd = function() {
        return this.H && this.Xd() ? "PAUSED" : this.isBuffering() ? "BUFFERING" : "PLAYING"
    };
    _.h.Xd = function() {
        return !!this.mediaElement && this.mediaElement.paused
    };
    _.h.isLiveStream = function() {
        return !1
    };
    _.h.Gc = function() {};
    _.h.isLiveDone = function() {};
    _.h.Za = function() {
        return null
    };
    _.h.getLiveSeekableRange = function() {
        return null
    };
    _.h.getStartAbsoluteTime = function() {
        var a = this.getLiveSeekableRange();
        return a ? Date.now() / 1E3 - a.end : null
    };
    _.h.getCurrentTimeSec = function() {
        return this.$ ? this.$ : this.mediaElement ? this.mediaElement.currentTime : 0
    };
    _.h.getDurationSec = function() {
        return this.mediaElement ? this.mediaElement.duration : 0
    };
    _.h.getPlaybackRate = function() {
        return this.mediaElement ? this.mediaElement.playbackRate : 1
    };
    _.h.Hc = function(a) {
        this.wa = a;
        ju(this)
    };
    _.h.getBufferedRanges = function() {
        if (!this.mediaElement) return [];
        for (var a = [], b = this.mediaElement.buffered, c = 0; c < b.length; c++) a.push(new Wq(b.start(c), b.end(c)));
        return a
    };
    _.h.Oc = function(a) {
        if (!this.l) return null;
        fu(this.l, a.language);
        return this.l.getTracksInfo().activeTrackIds
    };
    _.h.pd = function(a, b) {
        this.mediaElement = a;
        this.Ta = b;
        this.H = !b;
        this.D = We();
        cast.framework.common.analytics.uj(this.rc(), this.j.playbackConfig);
        this.Fi(a);
        this.Hd(a, b);
        return this.D.promise
    };
    _.h.Hd = function() {
        _.E(AC, "Load not implemented");
        this.onError(104)
    };
    _.h.preloadContent = function() {
        this.$g()
    };
    _.h.$g = function() {};
    _.h.end = function(a, b) {
        var c = this;
        b = void 0 === b ? null : b;
        pu(this);
        this.ec(!1);
        if (6 == this.o) return this.B.promise;
        this.o = 6;
        this.Bj();
        var d = this.getCurrentTimeSec();
        this.$ = d;
        this.od(a);
        this.mediaElement && ou(this, this.mediaElement);
        this.mediaElement = null;
        this.ja = this.l && this.l.getTracksInfo();
        this.l && this.l.dispose();
        this.l = null;
        this.D && ("ERROR" == a ? this.D.reject(b) : this.D.resolve());
        return this.B.promise.then(function() {
            mu(c, new et(d, a));
            c.va.dispose()
        })
    };
    _.h.isBuffering = function() {
        return this.M
    };
    _.h.tc = function() {
        return []
    };
    _.h.od = function() {
        var a = this.mediaElement;
        a && (a.removeAttribute("src"), a.load());
        setTimeout(this.B.resolve, 0)
    };
    _.h.ec = function(a) {
        a !== this.M && (this.M = a, mu(this, new dt(this.M)));
        a ? !this.F && 4 <= this.o && (this.F = _.Ra()) : this.F && (z("Cast.CAF.Buffering", _.Ra() - this.F), this.F = null)
    };
    _.h.Al = function() {
        this.ec(1E3 * (this.getCurrentTimeSec() - this.sa) < 100 * this.wa);
        var a = this.getLiveSeekableRange();
        !this.P && this.isLiveDone() && a && (mu(this, new kt("LIVE_ENDED", a)), this.P = !0);
        !this.T && this.Gc() && a && (mu(this, new kt("LIVE_IS_MOVING_WINDOW_CHANGED", a)), this.T = !0);
        ju(this)
    };
    _.h.setPlaybackRate = function(a) {
        var b = this;
        return this.Rj((void 0 === a ? 1 : a) || 1).then(function() {
            b.Hc(b.getPlaybackRate())
        })
    };
    _.h.Rj = function(a) {
        if (!this.mediaElement) return Qe("INVALID_REQUEST");
        this.mediaElement.playbackRate = a;
        return _.J()
    };
    var AC = _.D("cast.framework.media.BasePlayer"),
        zC = {
            abort: "ABORT",
            canplay: "CAN_PLAY",
            canplaythrough: "CAN_PLAY_THROUGH",
            durationchange: "DURATION_CHANGE",
            ended: "ENDED",
            emptied: "EMPTIED",
            loadeddata: "LOADED_DATA",
            loadedmetadata: "LOADED_METADATA",
            loadstart: "LOAD_START",
            play: "PLAY",
            playing: "PLAYING",
            progress: "PROGRESS",
            ratechange: "RATE_CHANGE",
            seeked: "SEEKED",
            seeking: "SEEKING",
            stalled: "STALLED",
            suspend: "SUSPEND",
            timeupdate: "TIME_UPDATE",
            waiting: "WAITING"
        };
    var ru = _.D("cast.framework.media.CustomPlayer");
    _.r(qu, iu);
    _.h = qu.prototype;
    _.h.rc = function() {
        return cast.framework.common.analytics.ud.qk
    };
    _.h.Fi = function() {};
    _.h.Hd = function(a, b) {
        var c = this;
        su(this, "load", function() {
            return c.h.load(a, b)
        }).then(function() {
            var d = c.getLiveSeekableRange();
            return c.isLiveStream() && void 0 === c.j.startTime && d && d.end && !d.isLiveDone ? c.seek(d.end) : _.J()
        }).then(function() {
            ku(c)
        }, function(d) {
            c.onError(d && d.detailedErrorCode || 900, d && d.error, d)
        })
    };
    _.h.$g = function() {
        if (this.h.preload) {
            try {
                this.h.preload()
            } catch (a) {
                _.E(ru, "preload failed ", a)
            }
            this.o = 2
        }
    };
    _.h.od = function(a) {
        var b = this;
        this.B.resolve(new Me(function(c) {
            return c(b.h.unload(a))
        }))
    };
    _.h.Fj = function() {
        var a = this;
        return su(this, "play", function() {
            return a.h.play()
        })
    };
    _.h.Ej = function() {
        var a = this;
        return su(this, "pause", function() {
            return Promise.resolve(a.h.pause()).then(function() {
                return tu(a, 500)
            })
        })
    };
    _.h.Yd = function(a) {
        var b = this;
        if (this.h.seek) return su(this, "seek", function() {
            return b.h.seek(a)
        });
        _.H(ru, "Seek is not supported");
        return Qe("NOT_SUPPORTED")
    };
    _.h.Rj = function(a) {
        var b = this;
        if (this.h.setPlaybackRate) return su(this, "setPlaybackRate", function() {
            return b.h.setPlaybackRate(a)
        });
        _.H(ru, "Set playback rate is not supported");
        return Qe("NOT_SUPPORTED")
    };
    _.h.getDurationSec = function() {
        return this.h.getDurationSec()
    };
    _.h.getCurrentTimeSec = function() {
        return this.h.getCurrentTimeSec()
    };
    _.h.getPlaybackRate = function() {
        return this.h.getPlaybackRate ? this.h.getPlaybackRate() : 1
    };
    _.h.getBufferedRanges = function() {
        return this.h.getBufferedRanges ? this.h.getBufferedRanges() || [] : []
    };
    _.h.isLiveStream = function() {
        return !!this.h.isLiveStream && this.h.isLiveStream()
    };
    _.h.getLiveSeekableRange = function() {
        return this.h.getLiveSeekableRange ? this.h.getLiveSeekableRange() : null
    };
    _.h.Za = function() {
        var a = this.getLiveSeekableRange();
        return a ? new Wq(a.start || 0, a.end || 0) : null
    };
    _.h.getStartAbsoluteTime = function() {
        if (!this.isLiveStream()) return null;
        var a = null;
        this.h.getStartAbsoluteTime && (a = this.h.getStartAbsoluteTime());
        return a || iu.prototype.getStartAbsoluteTime.call(this)
    };
    _.h.Xd = function() {
        return "PAUSED" == this.h.getPlayerState()
    };
    _.h.Wd = function() {
        return this.isBuffering() ? "BUFFERING" : this.h.getPlayerState()
    };
    _.h.getBreaks = function() {
        return this.h && this.h.getBreaks ? this.h.getBreaks() : null
    };
    _.h.getBreakClips = function() {
        return this.h && this.h.getBreakClips ? this.h.getBreakClips() : null
    };
    _.h.getBreakStatus = function() {
        return this.h && this.h.getBreakStatus ? this.h.getBreakStatus() : null
    };
    _.h.skipAd = function() {
        var a = this;
        if (this.h && this.h.skipAd) return su(this, "skipAd", function() {
            return a.h.skipAd()
        });
        _.H(ru, "skipAd is not supported");
        return Qe("NOT_SUPPORTED")
    };
    _.r(uu, zt);
    uu.prototype.gd = function(a) {
        var b = this.j.getTracksInfo ? this.j.getTracksInfo() : null;
        b = b || a.tracksInfo;
        bu(this, b)
    };
    uu.prototype.Fg = function(a) {
        return a && !!a.isInband
    };
    uu.prototype.Qc = function(a) {
        this.j.setActiveTextTracks(a)
    };
    uu.prototype.ed = function(a, b) {
        this.j.setActiveAudioTrack(b)
    };
    cast.framework.media.Hk = uu;
    cast.framework.media.Ag = {};
    var BC = _.D("cast.framework.media.ImagePlayer");
    _.r(wu, iu);
    _.h = wu.prototype;
    _.h.pd = function(a) {
        var b = this;
        _.I(BC, "loadContent");
        this.mediaElement = a;
        cast.framework.common.analytics.uj(this.rc(), this.j.playbackConfig);
        var c = this.j.url;
        return vu(c).then(function() {
            a.style.backgroundImage = cast.receiver.C.Y.Ua(c);
            b.h = a;
            _.I(BC, "image is set");
            b.l = b.Ga(b, a)
        }, function() {
            b.onError(903);
            return Qe()
        })
    };
    _.h.getDurationSec = function() {
        return 0
    };
    _.h.rc = function() {
        return cast.framework.common.analytics.ud.Yk
    };
    _.h.Wd = function() {
        return "PAUSED"
    };
    _.h.preloadContent = function() {
        _.I(BC, "ImagePlayer does not handle preload")
    };
    _.h.play = function() {
        _.I(BC, "ImagePlayer does not support PLAY");
        return Qe("NOT_SUPPORTED")
    };
    _.h.pause = function() {
        _.I(BC, "ImagePlayer does not support PAUSE");
        return Qe("NOT_SUPPORTED")
    };
    _.h.seek = function() {
        _.I(BC, "ImagePlayer does not support SEEK");
        return Qe("NOT_SUPPORTED")
    };
    _.h.od = function() {
        this.h && (this.h.style.backgroundImage = "none");
        this.B.resolve()
    };
    _.h.ec = function() {};
    cast.framework.media.Ag.xs = wu;
    cast.framework.media.Ag.create = function(a) {
        return _.J(new wu(a))
    };
    cast.framework.media.Uj = {};
    cast.framework.media.Uj.mg = function(a) {
        if (a.code) switch (a.code) {
            case shaka.util.Error.Code.LOAD_INTERRUPTED:
                return 904;
            case shaka.util.Error.Code.LICENSE_REQUEST_FAILED:
                return 201;
            case shaka.util.Error.Code.NO_RECOGNIZED_KEY_SYSTEMS:
            case shaka.util.Error.Code.REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:
                return 202;
            case shaka.util.Error.Code.DASH_EMPTY_PERIOD:
                return 421
        }
        switch (a.category) {
            case shaka.util.Error.Category.NETWORK:
                return 321;
            case shaka.util.Error.Category.TEXT:
                return 600;
            case shaka.util.Error.Category.MEDIA:
                return 100;
            case shaka.util.Error.Category.MANIFEST:
                return 420;
            case shaka.util.Error.Category.DRM:
                return 200
        }
        return 999
    };
    cast.framework.media.Vj = {};
    cast.framework.media.Vj.xp = function() {
        shaka.util.BufferUtils || (shaka.util.BufferUtils = {});
        shaka.util.BufferUtils.toUint8 || (shaka.util.BufferUtils.toUint8 = xu);
        shaka.util.Dom || (shaka.util.Dom = {});
        shaka.util.Dom.createHTMLElement || (shaka.util.Dom.createHTMLElement = yu)
    };
    _.r(zu, iu);
    _.h = zu.prototype;
    _.h.rc = function() {
        return cast.framework.common.analytics.ud.Wm
    };
    _.h.tc = function() {
        return this.ra
    };
    _.h.Yd = function(a) {
        return iu.prototype.Yd.call(this, a + this.A)
    };
    _.h.isLiveStream = function() {
        this.fa || (this.fa = !!this.h && (this.h.isLive() || this.h.isInProgress()));
        return this.fa
    };
    _.h.Gc = function() {
        return !!this.h && !this.h.isInProgress()
    };
    _.h.isLiveDone = function() {
        return !!this.h && !this.h.isLive() && !this.h.isInProgress()
    };
    _.h.Za = function() {
        var a = this.h.seekRange();
        return a ? new Wq(a.start, a.end) : null
    };
    _.h.Ff = function() {
        var a = this.h.getStats();
        return {
            height: a.height,
            estimatedBandwidth: a.estimatedBandwidth,
            streamBandwidth: a.streamBandwidth,
            width: a.width
        }
    };
    _.h.getLiveSeekableRange = function() {
        if (!this.isLiveStream()) return null;
        var a = this.Za();
        if (!a || "number" !== typeof a.start || "number" !== typeof a.end) return null;
        null === this.A && (this.A = a.start);
        var b = this.Gc(),
            c = this.isLiveDone();
        return new ur(a.start - this.A, a.end - this.A, b, c)
    };
    _.h.getStartAbsoluteTime = function() {
        if (!this.isLiveStream()) return null;
        var a = iu.prototype.getStartAbsoluteTime.call(this),
            b = iu.prototype.getCurrentTimeSec.call(this) - this.getCurrentTimeSec();
        return a && b && 1800 > Math.abs(a - b) ? b : a
    };
    _.h.getCurrentTimeSec = function() {
        var a = iu.prototype.getCurrentTimeSec.call(this);
        if (6 != this.o && this.isLiveStream() && a) {
            if (null === this.A) return 0;
            a -= this.A
        }
        return a
    };
    _.h.Hd = function(a, b) {
        var c = this;
        _.I(Gu, "load: " + this.j.startTime);
        if (a.autoplay = b) this.X = _.Ra();
        this.h = new this.I.Player(a);
        shaka.Player.version ? z("Cast.Shaka.ShakaVersion", cast.framework.common.hash.Pg(shaka.Player.version)) : _.E(Gu, "Shaka version is not available.");
        this.h.addEventListener("error", function(d) {
            Lu(c, d.detail)
        });
        this.h.addEventListener("variantchanged", function() {
            Qu(c)
        });
        this.h.addEventListener("adaptation", function() {
            Qu(c);
            c.Vi()
        });
        this.h.addEventListener("emsg", function(d) {
            mu(c, new Ss(d.detail))
        });
        this.h.addEventListener("timelineregionadded", function(d) {
            Au(c, "TIMED_METADATA_CHANGED", d.detail)
        });
        this.h.addEventListener("timelineregionenter", function(d) {
            Au(c, "TIMED_METADATA_ENTER", d.detail)
        });
        this.h.addEventListener("timelineregionexit", function(d) {
            Au(c, "TIMED_METADATA_EXIT", d.detail)
        });
        this.h.addEventListener("buffering", function() {
            c.ec(c.h.isBuffering())
        });
        this.h.addEventListener("trackschanged", function() {
            c.N || (c.l.gd(), mu(c, new it))
        });
        Iu(this);
        this.U = We();
        this.N = !0;
        this.h.load(this.Ba.url,
            this.j.startTime).then(function() {
            return c.U.promise
        }).then(function() {
            c.N = !1;
            Ru(c)
        }).catch(function(d) {
            c.N = !1;
            Lu(c, d)
        });
        Mu(this, a)
    };
    _.h.Hc = function(a) {
        a && iu.prototype.Hc.call(this, a)
    };
    _.h.Vi = function() {
        var a = this.aa;
        this.aa = this.h.getVariantTracks().reduce(function(b, c) {
            return c.active ? b + c.bandwidth : b
        }, 0);
        a !== this.aa && mu(this, new Rs(this.aa))
    };
    _.h.ec = function(a) {
        iu.prototype.ec.call(this, a);
        this.isBuffering() && this.G ? (this.Th(), this.xa || (this.W = _.Ra(), z("Cast.Shaka.PlayTimeBeforeAutoPause", _.Ra() - this.G)), this.G = null) : this.isBuffering() || this.G || (this.xa = !1, this.G = _.Ra(), this.W && (z("Cast.Shaka.AutoPauseTime", this.G - this.W), this.W = null), this.X && (z("Cast.Shaka.AutoplayStartupLatency", this.G - this.X), this.X = null), this.Z && (z("Cast.Shaka.PlayLatency", this.G - this.Z), this.Z = null))
    };
    _.h.Bl = function() {
        this.U && this.U.resolve()
    };
    _.h.getDurationSec = function() {
        return this.isLiveStream() ? -1 : iu.prototype.getDurationSec.call(this)
    };
    _.h.Th = function() {
        id("Cast.Shaka.Pause")
    };
    _.h.Cl = function() {
        this.Z = _.Ra();
        null === this.A && (this.A = this.h.seekRange().start);
        if (this.pa) {
            var a = this.j.startTime + this.A,
                b = this.h.seekRange();
            a < b.start ? (_.H(Gu, "Start time is out of seek range, jump to the seek start point."), a = b.start) : a > b.end && (_.H(Gu, "Start time is out of seek range, jump to live."), a = b.end);
            this.mediaElement.currentTime = a;
            this.pa = !1
        }
    };
    _.h.mq = function() {
        id("Cast.Shaka.Playing")
    };
    _.h.Bj = function() {
        id("Cast.Shaka.Ended")
    };
    _.h.od = function() {
        var a = this;
        this.h ? (this.h.destroy().then(function() {
            a.B.resolve()
        }), this.ha.clear(), this.ra = []) : this.B.resolve()
    };
    var Gu = _.D("cast.framework.media.ShakaPlayer"),
        Eu = {
            maxAttempts: 4,
            baseDelay: 400,
            backoffFactor: 2,
            timeout: 3E4
        },
        CC = {},
        Ku = (CC.clearkey = "org.w3.clearkey", CC.playready = "com.chromecast.playready", CC.widevine = "com.widevine.alpha", CC);
    _.r(Uu, zt);
    _.h = Uu.prototype;
    _.h.gd = function(a) {
        bu(this, a.tracksInfo);
        a = Wu(this.j.getVariantTracks());
        var b = this.j.getTextTracks(),
            c = [];
        c = c.concat(a);
        c = c.concat(b);
        a = _.q(c);
        for (b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var d = "variant" === b.type ? "AUDIO" : b.type.toUpperCase();
            c = "variant" === b.type ? b.audioCodec ? b.audioCodec : void 0 : b.mimeType ? b.mimeType : void 0;
            var e = b.kind ? b.kind.toUpperCase() : void 0,
                f = "variant" === b.type ? b.audioRoles : b.roles;
            null === f && (f = void 0);
            var g = Zt(this, {
                type: d,
                language: b.language,
                trackContentType: c,
                subtype: e,
                roles: f
            });
            g ? d = g : (d = this.Nc(d), d.language = b.language, d.trackContentType = c, d.subtype = e, d.roles = f, $t(this, [d]));
            "AUDIO" == d.type ? this.B.set(d.trackId, b.audioId) : this.B.set(d.trackId, b.id)
        }
    };
    _.h.Qc = function(a) {
        var b = this;
        if (a && 0 !== a.length) {
            a = a.map(function(e) {
                return b.B.get(e)
            });
            for (var c = _.q(this.j.getTextTracks()), d = c.next(); !d.done; d = c.next()) d = d.value, a.includes(d.id) && this.j.selectTextTrack(d);
            this.j.setTextTrackVisibility(!0)
        } else this.j.setTextTrackVisibility(!1)
    };
    _.h.ed = function(a, b) {
        if (null !== b) {
            var c = null;
            null !== a && (c = this.B.get(a));
            var d = this.B.get(b);
            if (c !== d) {
                var e = this.j.getVariantTracks(),
                    f = e.find(function(k) {
                        return k.active
                    }).videoId,
                    g = e.find(function(k) {
                        return k.audioId === d && k.videoId === f
                    });
                g ? (g.language ? ("und" === g.language && _.H(DC, "switching to matching track with language 'und'"), (a = g.audioRoles && g.audioRoles.find(function(k) {
                    return e.every(function(l) {
                        return l.language === g.language && l.audioId !== g.audioId && l.videoId === g.videoId && l.audioRoles && l.audioRoles.includes(k) ?
                            !1 : !0
                    })
                })) ? this.j.selectAudioLanguage(g.language, a) : this.j.selectAudioLanguage(g.language)) : (_.H(DC, "matching track is missing language, selecting variant track and disabling ABR"), this.j.configure({
                    abr: {
                        enabled: !1
                    }
                }), this.j.selectVariantTrack(g, !0)), this.H && this.H()) : _.E(DC, "cannot find matching shaka variant track")
            }
        }
    };
    _.h.lg = function() {
        for (var a = -1, b = _.q(Wu(this.j.getVariantTracks())), c = b.next(); !c.done; c = b.next())
            if (c = c.value, c.primary) {
                a = c.audioId;
                break
            }
        b = null;
        c = _.q(this.B);
        for (var d = c.next(); !d.done; d = c.next()) {
            d = _.q(d.value);
            var e = d.next().value;
            if (d.next().value === a) {
                b = e;
                break
            }
        }
        0 > b && _.E(DC, "cannot find default shaka audio track");
        return b
    };
    _.h.ea = function() {
        this.H = null;
        zt.prototype.ea.call(this)
    };
    var DC = _.D("cast.framework.media.ShakaTracksManager");
    _.r(Xu, iu);
    Xu.prototype.Hd = function(a, b) {
        _.I(EC, "loadContent: autoplay = " + b + ", initial_time = " + this.j.startTime);
        if (a) Yu(this, a), a.src = this.j.url, a.autoplay = b;
        else this.onError(905)
    };
    Xu.prototype.h = function(a) {
        var b = this.j.startTime || 0;
        0 > b && (b += a.duration);
        0 <= b && b != a.currentTime && (a.currentTime = b);
        ku(this)
    };
    Xu.prototype.rc = function() {
        return cast.framework.common.analytics.ud.$m
    };
    var EC = _.D("cast.framework.media.SimplePlayer");
    _.r(Zu, zt);
    Zu.prototype.gd = function(a) {
        bu(this, a.tracksInfo);
        a = "AUDIO" == this.player.getMediaCategory() ? "AUDIO" : "VIDEO";
        Zt(this, {
            type: a
        }) || (a = this.Nc(a), $t(this, [a]))
    };
    cast.framework.media.hn = Zu;
    cast.framework.media.Lb = {};
    cast.framework.media.Lb.Jn = function(a) {
        var b = a.getStreamCount(),
            c = 0,
            d = {};
        return d[Symbol.iterator] = function() {
            return {
                next: function() {
                    return c < b ? {
                        done: !1,
                        value: a.getStreamInfo(c++)
                    } : {
                        done: !0
                    }
                }
            }
        }, d
    };
    cast.framework.media.Lb.mg = function(a) {
        switch (a) {
            case cast.player.api.ErrorCode.PLAYBACK:
                return 100;
            case cast.player.api.ErrorCode.MEDIAKEYS:
                return 200;
            case cast.player.api.ErrorCode.NETWORK:
                return 300;
            case cast.player.api.ErrorCode.MANIFEST:
                return 400;
            default:
                return _.Ya("Cannot reach"), 999
        }
    };
    cast.framework.media.Lb.Po = function(a) {
        switch (a) {
            case "aac":
                return cast.player.api.HlsSegmentFormat.MPEG_AUDIO_ES;
            case "ac3":
                return cast.player.api.HlsSegmentFormat.PACKED_AUDIO_AC3;
            case "mp3":
                return cast.player.api.HlsSegmentFormat.MPEG_LAYER_3;
            case "ts":
                return cast.player.api.HlsSegmentFormat.MPEG2_TS;
            case "ts_aac":
                return cast.player.api.HlsSegmentFormat.TS_AAC;
            case "ts_he_aac":
                return cast.player.api.HlsSegmentFormat.TS_HE_AAC;
            case "e_ac3":
                return cast.player.api.HlsSegmentFormat.PACKED_AUDIO_E_AC3;
            case "fmp4":
                return cast.player.api.HlsSegmentFormat.FMP4
        }
    };
    cast.framework.media.Lb.Qo = function(a) {
        switch (a) {
            case "mpeg2_ts":
                return cast.player.api.HlsVideoSegmentFormat.MPEG2_TS;
            case "fmp4":
                return cast.player.api.HlsVideoSegmentFormat.FMP4
        }
    };
    cast.framework.media.Lb.nt = function(a) {
        switch (a) {
            case "application/x-mpegurl":
            case "application/vnd.apple.mpegurl":
                return cast.player.api.StreamingProtocolType.HLS;
            case "application/vnd.ms-sstr+xml":
                return cast.player.api.StreamingProtocolType.SMOOTH_STREAMING;
            case "application/dash+xml":
                return cast.player.api.StreamingProtocolType.MPEG_DASH;
            default:
                _.Ya("Not supported mimeType " + a)
        }
        return cast.player.api.StreamingProtocolType.UNKNOWN
    };
    _.r(dv, iu);
    _.h = dv.prototype;
    _.h.rc = function() {
        return cast.framework.common.analytics.ud.gn
    };
    _.h.Hd = function(a, b) {
        _.I(fv, "load: " + this.j.startTime);
        gv(this);
        this.A.mediaElement = a;
        a.autoplay = b;
        2 == this.o ? this.G.load() : this.G.load(this.h, this.j.startTime);
        nu(this, a, "loadedmetadata", this.Dl.bind(this, a))
    };
    _.h.$g = function() {
        gv(this);
        this.G.preload(this.h, this.j.startTime);
        this.o = 2
    };
    _.h.Wp = function(a, b, c) {
        a = c || cast.framework.media.Lb.mg(a);
        this.onError(a, {
            requestStatus: b
        })
    };
    _.h.tc = function() {
        return this.W
    };
    _.h.El = function(a, b, c) {
        mu(this, new ft(b, c))
    };
    _.h.Ff = function() {
        return {
            streamBandwidth: this.I
        }
    };
    _.h.ap = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = b,
            f = this.j.playbackConfig.mplConfig || {};
        f.getQualityLevel && (e = f.getQualityLevel(a, b, void 0 === c ? b : c, d));
        b = this.I;
        for (d = c = 0; d < this.h.getStreamCount(); d++)
            if (this.h.isStreamEnabled(d) && !zc(this.h.getStreamInfo(d).mimeType)) {
                f = d === a ? e : this.h.getQualityLevel(d);
                if (0 > f) return e;
                c += this.h.getStreamInfo(d).bitrates[f]
            }
        this.I = c;
        b !== this.I && mu(this, new Rs(this.I));
        return e
    };
    _.h.getDurationSec = function() {
        return this.h ? this.h.getDuration() : 0
    };
    _.h.isLiveStream = function() {
        return !!(this.h && this.h.isLiveStream && this.h.isLiveStream())
    };
    _.h.Gc = function() {
        return this.h.isLiveSeekableRangeMovingWindow && this.h.isLiveSeekableRangeMovingWindow()
    };
    _.h.isLiveDone = function() {
        return this.h.isLiveDone && this.h.isLiveDone()
    };
    _.h.Za = function() {
        var a = this.G.getState(cast.player.api.Player.State.SEEKABLE);
        return a && a.seekable ? new Wq(a.seekable.start, a.seekable.end) : null
    };
    _.h.getLiveSeekableRange = function() {
        if (!this.isLiveStream()) return null;
        var a = this.Za(),
            b = this.Gc(),
            c = this.isLiveDone();
        return a ? new ur(a.start, a.end, b, c) : null
    };
    _.h.Dl = function() {
        var a = this,
            b = _.J();
        if (this.isLiveStream() && void 0 === this.j.startTime) {
            var c = this.Za();
            c && c.end && (b = this.seek(c.end))
        }
        if (0 > this.j.startTime) {
            c = this.j.startTime;
            if (this.isLiveStream()) {
                var d = this.Za();
                d && d.end && (c += d.end)
            } else c += this.getDurationSec();
            0 < c && 1 < Math.abs(c - this.getCurrentTimeSec()) && (b = this.seek(c))
        }
        b.then(function() {
            return ku(a)
        })
    };
    _.h.od = function() {
        this.G.unload();
        this.B.resolve();
        this.N.clear();
        this.W = []
    };
    var fv = _.D("cast.framework.media.StreamingPlayer");
    _.r(iv, zt);
    _.h = iv.prototype;
    _.h.gd = function(a) {
        bu(this, a.tracksInfo);
        var b = cast.framework.media.Lb.Jn(this.H);
        a = 0;
        b = _.q(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = c.mimeType;
            if (d) {
                var e;
                var f = d;
                var g = c.codecs;
                f = f.toLowerCase();
                zc(f) || "application/mp4" == f && "stpp" == g ? f = "TEXT" : (!(e = Qb(f, "audio/")) && (e = g) && (g = g.toLowerCase(), e = !g.includes(",") && !!g.match(/^(mp4a|[ae]c-3)/)), f = e ? "AUDIO" : Qb(f, "video/") ? "VIDEO" : null);
                f && ("TEXT" == f && (d = mv(d, c.codecs)), (g = Zt(this, {
                        type: f,
                        name: c.name,
                        language: c.language,
                        trackContentType: d
                    })) ?
                    f = g : (f = this.Nc(f), f.name = c.name, f.language = c.language, f.trackContentType = d, c.hlsMediaInfo && (f.forced = c.hlsMediaInfo.forced, f.assocLanguage = c.hlsMediaInfo.assocLanguage), $t(this, [f])), this.B.set(f.trackId, a), a++)
            }
        }
    };
    _.h.ed = function(a, b) {
        var c = -1,
            d = -1,
            e = this.H;
        null == a ? c = e.getDefaultAudioStreamIndex() : -1 < a && (c = this.B.get(a));
        null == b ? d = e.getDefaultAudioStreamIndex() : -1 < b && (d = this.B.get(b));
        c != d && (e.enableStream(c, !1), e.enableStream(d, !0), this.j.onAudioChanged())
    };
    _.h.lg = function() {
        for (var a = this.H.getDefaultAudioStreamIndex(), b = null, c = _.q(this.B), d = c.next(); !d.done; d = c.next()) {
            d = _.q(d.value);
            var e = d.next().value;
            if (d.next().value === a) {
                b = e;
                break
            }
        }
        return b
    };
    _.h.Lj = function(a, b, c, d, e) {
        1 < c.length + (null == d ? 0 : 1) && (_.H(lv, "Can only enable one track. Will enable track " + c[0]), c = [c[0]], d = null);
        eu(this, b, c.concat(null != d ? d : [], e));
        null == d ? (gu(this, d, this.ignoreTtmlPositionInfo), this.Qc(c)) : (this.Qc(c), gu(this, d, this.ignoreTtmlPositionInfo));
        null != b && this.ed(a, b)
    };
    _.h.Qc = function(a) {
        var b = 0 == a.length ? null : a[0];
        a = null != b ? this.B.get(b) : void 0;
        for (var c = !1, d = this.H, e = d.getStreamCount(), f = void 0 === a, g = 0; g < e; g++) {
            var k = d.getStreamInfo(g).mimeType;
            k && zc(k) && (g == a ? "text/mp2t" == k ? this.j.enableCaptions(!0, cast.player.api.CaptionsType.CEA608) : (f = !0, d.isStreamEnabled(g) || (d.enableStream(g, !0), c = !0)) : g !== a && d.isStreamEnabled(g) && (d.enableStream(g, !1), c = !0))
        }
        null != b && void 0 == a && this.tracks.find(function(l) {
            return l.trackId == b && "text/cea608" == l.trackContentType
        }) ? this.j.enableCaptions(!0,
            cast.player.api.CaptionsType.CEA608) : f && this.j.enableCaptions(!1, cast.player.api.CaptionsType.CEA608);
        c && this.j.enableCaptions(!0)
    };
    _.h.pb = function(a) {
        zt.prototype.pb.call(this, a);
        var b = [];
        void 0 !== a.foregroundColor && b.push("color");
        void 0 !== a.backgroundColor && b.push("background-color");
        void 0 !== a.fontScale && b.push("font-size");
        void 0 === a.fontGenericFamily && void 0 === a.fontFamily || b.push("font-family");
        void 0 !== a.fontStyle && b.push("font-weight");
        void 0 !== a.edgeType && b.push("text-shadow");
        a: {
            var c = FC,
                d;
            for (d in a)
                if (!(d in c) || a[d] !== c[d]) {
                    a = !1;
                    break a
                }
            for (var e in c)
                if (!(e in a)) {
                    a = !1;
                    break a
                }
            a = !0
        }
        a && (b = []);
        this.j.setSenderTrackStyles &&
            this.j.setSenderTrackStyles(b)
    };
    var FC = {
            foregroundColor: "#FFFFFFFF",
            backgroundColor: "#00000000",
            fontFamily: "Helvetica",
            fontScale: 1,
            windowColor: "#00000080",
            windowRoundedCornerRadius: 8,
            windowType: "ROUNDED_CORNERS",
            fontStyle: "NORMAL",
            fontGenericFamily: "SANS_SERIF",
            customData: void 0,
            edgeColor: void 0,
            edgeType: void 0
        },
        lv = _.D("cast.framework.media.StreamingTracksManager");
    var rv = _.D("cast.framework.media.BasePlayerFactory");
    Ga(nv);
    cast.framework.breaks = {};
    _.w("cast.framework.breaks.BreakSeekData", sv, void 0);
    _.w("cast.framework.breaks.BreakClipLoadInterceptorContext", tv, void 0);
    _.h = xv.prototype;
    _.h.getBreaks = function() {
        return Array.from(this.o.values())
    };
    _.h.Sc = function(a) {
        return this.o.get(a) || null
    };
    _.h.getBreakClips = function() {
        return Array.from(this.A.values())
    };
    _.h.kb = function(a) {
        return this.A.get(a) || null
    };
    _.h.yd = function(a, b, c) {
        var d = this;
        c = void 0 === c ? !0 : c;
        if (!zv(this, a, b)) return !1;
        b.forEach(function(e) {
            d.A.set(e.id, e)
        });
        this.o.set(a.id, a);
        z("Cast.CAF.DynamicBreakAdded", a.duration || 0);
        c && vv(this, !0);
        return !0
    };
    _.h.fh = function(a) {
        var b = this,
            c = this.o.get(a);
        if (!c) return _.E(yv, "Unknown break id " + a), !1;
        this.o.delete(c.id);
        c.breakClipIds.forEach(function(d) {
            return b.A.delete(d)
        });
        id("Cast.CAF.DynamicBreakRemoved");
        vv(this, !0);
        return !0
    };
    _.h.Gb = function() {
        if (this.h) return this.h.duration || null;
        var a = this.j.h;
        return a ? a.Gb() : null
    };
    _.h.Oa = function() {
        if (this.h) return this.j.getCurrentTimeSec() - this.D;
        var a = this.j.h;
        return a ? a.Oa() : null
    };
    var yv = _.D("cast.framework.media.DynamicBreaksManager");
    cast.framework.breaks.Ok = xv;
    _.h = Bv.prototype;
    _.h.zb = function(a) {
        this.B = a;
        this.j && this.j.Mj(a)
    };
    _.h.reset = function() {
        this.l = null;
        this.j && this.j.reset()
    };
    _.h.getBreaks = function() {
        var a = [];
        this.h && (a = this.h.getBreaks());
        this.l && (a = a.concat(this.l.h));
        return a
    };
    _.h.Sc = function(a) {
        var b = null;
        this.h && (b = this.h.Sc(a));
        !b && this.l && (b = this.l.Sc(a));
        return b
    };
    _.h.getBreakClips = function() {
        var a = [];
        this.h && (a = this.h.getBreakClips());
        this.l && (a = a.concat(this.l.getBreakClips()));
        return a
    };
    _.h.kb = function(a) {
        var b = null;
        this.h && (b = this.h.kb(a));
        !b && this.l && (b = this.l.kb(a));
        return b
    };
    _.h.yd = function(a, b, c) {
        return this.h.yd(a, b, void 0 === c ? !0 : c)
    };
    _.h.fh = function(a) {
        return this.h.fh(a)
    };
    _.h.Gb = function() {
        return this.h.Gb()
    };
    _.h.Oa = function() {
        return this.h.Oa()
    };
    _.h.Lq = function(a) {
        a && Gv(a);
        this.H = a || this.Ti.bind(this)
    };
    _.h.Ti = function(a) {
        var b = this,
            c = a.seekFrom > a.seekTo,
            d = a.breaks.reverse().find(function(e) {
                return !e.isWatched || b.o
            });
        a.breaks = c || !d ? [] : [d];
        return a
    };
    _.h.Kq = function(a) {
        a && Gv(a);
        this.F = a || this.Si.bind(this)
    };
    _.h.Si = function(a) {
        return a
    };
    _.h.hf = function(a) {
        this.o = a
    };
    _.h.Vo = function() {
        return this.o
    };
    _.h.jf = function(a) {
        null !== a && "function" !== typeof a ? _.E(Fv, "setVastTrackingInterceptor failed since handler is not a function") : (this.G = a, this.j && this.j.jf(a))
    };
    _.h.Lp = function(a) {
        a = this.kb(a.breakClipId);
        this.j.Bp(a) && this.j.Sl(a)
    };
    _.w("cast.framework.breaks.BreakManager", Bv, void 0);
    Bv.prototype.setVastTrackingInterceptor = Bv.prototype.jf;
    Bv.prototype.getPlayWatchedBreak = Bv.prototype.Vo;
    Bv.prototype.setPlayWatchedBreak = Bv.prototype.hf;
    Bv.prototype.setBreakClipLoadInterceptor = Bv.prototype.Kq;
    Bv.prototype.setBreakSeekInterceptor = Bv.prototype.Lq;
    Bv.prototype.getBreakClipCurrentTimeSec = Bv.prototype.Oa;
    Bv.prototype.getBreakClipDurationSec = Bv.prototype.Gb;
    Bv.prototype.removeBreakById = Bv.prototype.fh;
    Bv.prototype.addBreak = Bv.prototype.yd;
    Bv.prototype.getBreakClipById = Bv.prototype.kb;
    Bv.prototype.getBreakClips = Bv.prototype.getBreakClips;
    Bv.prototype.getBreakById = Bv.prototype.Sc;
    Bv.prototype.getBreaks = Bv.prototype.getBreaks;
    var Fv = _.D("cast.framework.breaks.BreakManager");
    cast.framework.timeline = {};
    Nv.prototype.getPosition = function() {
        return this.j.position
    };
    var Uv = _.D("cast.framework.timeline.Timeline");
    _.h = Sv.prototype;
    _.h.reset = function() {
        this.h.length = 0;
        this.l.clear();
        this.B.clear()
    };
    _.h.yd = function(a) {
        if (Vv(this, a))
            if (0 > a.position) 0 == this.h.length || 0 <= this.h[this.h.length - 1].position ? this.h.push(a) : this.h[this.h.length - 1].breakClipIds.push.apply(this.h[this.h.length - 1].breakClipIds, _.ka(a.breakClipIds));
            else {
                for (var b = 0; b < this.h.length; b++) {
                    var c = this.h[b];
                    if (c.position == a.position) {
                        c.breakClipIds.push.apply(c.breakClipIds, _.ka(a.breakClipIds));
                        return
                    }
                    if (c.position > a.position || 0 > c.position) {
                        this.h.splice(b, 0, a);
                        return
                    }
                }
                this.h.push(a)
            }
    };
    _.h.kb = function(a) {
        return this.l.get(a)
    };
    _.h.getBreakClips = function() {
        return Array.from(this.l.values())
    };
    _.h.Sc = function(a) {
        return this.h.find(function(b) {
            return a == b.id
        }) || null
    };
    _.h.ke = function() {
        _.Ya("Should be implemented")
    };
    _.h.Dd = function() {
        _.Ya("Should be implemented")
    };
    _.h.oe = function() {
        _.Ya("Should be implemented")
    };
    _.h = $v.prototype;
    _.h.ur = function() {
        null != this.ja && z("Cast.CAF.VideoToAdLatency", _.Ra() - this.ja)
    };
    _.h.sr = function() {
        this.X = _.Ra()
    };
    _.h.wr = function() {
        null != this.X && (z("Cast.CAF.AdToVideoLatency", _.Ra() - this.X), this.X = null)
    };
    _.h.vr = function() {
        this.ja = _.Ra()
    };
    _.h.load = function() {};
    _.h.reset = function(a) {
        _.I(bw, "reset()");
        this.end(a && GC[a] || "STOPPED")
    };
    _.h.getVolume = function() {
        var a = new Ec;
        this.mediaElement ? (a.level = this.mediaElement.volume, a.muted = this.mediaElement.muted) : (a.level = 1, a.muted = !1);
        return a
    };
    _.h.setVolume = function(a) {
        this.mediaElement ? (void 0 !== a.level && (this.mediaElement.volume = a.level), void 0 !== a.muted && (this.mediaElement.muted = a.muted)) : _.H(bw, "Cannot set media volume")
    };
    _.h.getDurationSec = function() {
        return this.W
    };
    _.h.getCurrentTimeSec = function() {
        return this.pe()
    };
    _.h.editTracksInfo = function(a) {
        return this.h ? lu(this.h, cast.framework.K.aj(a)) : (_.E(bw, "Can not edit tracks info, player is not available"), [])
    };
    _.h.registerErrorCallback = function(a) {
        this.J = a
    };
    _.h.registerEndedCallback = function(a) {
        this.$ = a
    };
    _.h.registerLoadCallback = function(a) {
        this.aa = a
    };
    _.h.unregisterErrorCallback = function() {
        this.J = function() {}
    };
    _.h.unregisterEndedCallback = function() {
        this.$ = function() {}
    };
    _.h.unregisterLoadCallback = function() {
        this.aa = function() {}
    };
    _.h.pause = function() {
        if (!this.h) return _.E(bw, "Can not pause, player is not available"), _.J();
        _.se(bw, "pause");
        return this.h.pause()
    };
    _.h.play = function() {
        if (!this.h) return _.E(bw, "Can not play, player is not available"), _.J();
        _.se(bw, "play");
        return this.h.play()
    };
    _.h.skipAd = function() {
        if (!this.j) return _.I(bw, "skipAd - not playing ad"), Qe("INVALID_COMMAND");
        if (!aw(this)) return _.I(bw, "skipAd - ad cannot be skipped"), Qe("INVALID_COMMAND");
        _.I(bw, "skipAd");
        return this.uh()
    };
    _.h.uh = function() {
        return Qe("NOT_SUPPORTED")
    };
    _.h.Zd = function() {
        _.H(bw, "Seek Not implemented");
        return Qe("NOT_SUPPORTED")
    };
    _.h.seek = function(a, b) {
        var c = this;
        if (this.isPlayingBreak) return _.H(bw, "seek request during break was ignored."), Qe("INVALID_REQUEST");
        0 > a && (_.I(bw, "Invalid seek value - " + a), a = 0);
        return this.T ? (_.H(bw, "seek request before previous seek was finished was ignored."), Qe("INVALID_REQUEST")) : this.T = Ye(this.Zd(a, b), function() {
            c.T = null
        })
    };
    _.h.getState = function() {
        switch (this.A) {
            case 1:
            case 2:
                return "BUFFERING";
            case 3:
            case 4:
                return this.h ? cast.framework.K.nr(this.h.Wd()) : "PLAYING";
            case 5:
            case 6:
                return "IDLE";
            default:
                return _.Ya(), "IDLE"
        }
    };
    _.h.isLiveStream = function() {
        return this.h ? this.h.isLiveStream() : !1
    };
    _.h.getLiveSeekableRange = function() {
        return this.h ? this.h.getLiveSeekableRange() : null
    };
    _.h.Za = function() {
        return this.h ? this.h.Za() : null
    };
    _.h.getMediaCategory = function() {
        return this.h ? cast.framework.K.bk(this.h.getMediaCategory()) : null
    };
    _.h.preloadContent = function() {
        this.We()
    };
    _.h.Gb = function() {
        return this.j ? this.j.h.duration || null : null
    };
    _.h.Oa = function() {
        return this.j ? this.timeline.oe(this.Ya()) : null
    };
    _.h.Ya = function() {
        return this.h ? this.h.getCurrentTimeSec() : 0
    };
    _.h.getPlaybackRate = function() {
        return this.h ? this.h.getPlaybackRate() : 1
    };
    _.h.pe = function() {
        var a = this.Ya();
        return this.timeline.Dd(a)
    };
    _.h.qg = function() {
        return this.h ? this.h.getDurationSec() : 0
    };
    _.h.tc = function() {
        return !this.h || 3 > this.A ? [] : this.h.tc()
    };
    _.h.getStartAbsoluteTime = function() {
        return this.F
    };
    _.h.Ae = function() {
        if (!this.h) return !1;
        var a = this.h.getBufferedRanges();
        if (1 > a.length) return !1;
        var b = a.length - 1,
            c = a[b].end;
        return a[b].start <= this.Ya() && c >= this.qg()
    };
    _.h.Gf = function(a) {
        if (a.media) {
            var b = a.media;
            b.breakClips = cast.framework.K.dr(this.timeline.getBreakClips() || void 0);
            b.breaks = cast.framework.K.cr(this.timeline.h || void 0)
        }
        a.currentTime = this.pe();
        a.liveSeekableRange = cast.framework.K.ak(this.getLiveSeekableRange()) || void 0;
        this.j ? ((b = this.j.j) && !b.expanded && (a.playbackRate = 0), a.supportedMediaCommands = dw(this, a.supportedMediaCommands), b = this.timeline.ke(this.j, this.Ya()), a.breakStatus = b) : 0 < this.sa.getBreaks().length && (a.breakStatus = new Lc(void 0, void 0))
    };
    _.h.end = function(a) {
        var b = this;
        if (6 == this.A) return this.H.promise;
        void 0 === this.I && (this.I = this.getCurrentTimeSec());
        var c = this.A;
        this.A = 6;
        this.J = function() {};
        this.Uh(a);
        this.isPlayingBreak && iw(this, "BREAK_ENDED", null, a);
        return this.H.promise.then(function() {
            "END_OF_STREAM" !== a && "SKIPPED" !== a || b.$();
            5 > c && b.va.dispatchEvent(new Zs(b.I, a));
            b.va.dispose()
        })
    };
    _.h.Uh = function(a) {
        var b = this;
        _.I(bw, "endInternal(): " + a);
        cast.framework.common.analytics.Gp(a);
        this.h ? (this.h.end(a).then(function() {
            b.H.resolve()
        }), this.h = null) : this.H.resolve()
    };
    _.h.Ee = function() {
        _.Ya("This should be implemented");
        return Qe("INVALID_COMMAND")
    };
    _.h.We = function() {};
    _.h.Pd = function() {
        this.h.va.gf(this.va);
        kw(this, "ERROR", this.Ue);
        kw(this, "TIME_UPDATE", this.zc);
        kw(this, "DURATION_CHANGE", this.zj)
    };
    _.h.Ue = function(a) {
        _.I(bw, "player event: error");
        this.Z || (this.Z = !0, this.J(a))
    };
    _.h.zc = function() {
        var a = aw(this);
        a != this.U && (this.U = a, gw(this, !1));
        this.ra && (a = this.h.getStartAbsoluteTime(), a != this.F && (this.F = a, _.I(bw, "Updating startAbsoluteTime " + this.F)), this.ra = !1)
    };
    _.h.zj = function() {
        if (!(3 > this.A)) {
            this.W = this.timeline.Dd(this.qg());
            var a = this.timeline,
                b = this.W;
            if (!a.isEmbedded) {
                for (var c = null, d = a.h.length, e = 0; e < a.h.length; e++) {
                    var f = a.h[e];
                    if (f.position >= b || 0 > f.position) c ? c.breakClipIds.push.apply(c.breakClipIds, _.ka(f.breakClipIds)) : (c = f, d = e, c.position = -1)
                }
                d < a.h.length - 1 && a.h.splice(d + 1)
            }
            this.h && (this.F = this.h.getStartAbsoluteTime(), _.I(bw, "Setting startAbsoluteTime " + this.F));
            this.ra = !0
        }
    };
    _.h.Oc = function(a) {
        if (this.h) return this.h.Oc(a) || void 0;
        _.E(bw, "Can not edit audio track, player is not available")
    };
    _.h.setPlaybackRate = function(a) {
        return this.h ? a !== this.h.getPlaybackRate() ? this.h.setPlaybackRate(a) : _.J() : (_.E(bw, "Can not set playback rate, player is not available"), _.J())
    };
    _.h.na = function() {
        return this.h && this.h.l
    };
    var bw = _.D("cast.framework.media.Player"),
        HC = {},
        GC = (HC.CANCELLED = "STOPPED", HC.INTERRUPTED = "INTERRUPTED", HC.FINISHED = "END_OF_STREAM", HC.ERROR = "ERROR", HC);
    cast.framework.media.Player = $v;
    var IC = _.D("cast.framework.timeline.EmbeddedTimeline");
    ow.prototype.cache = function(a, b, c) {
        this.l = a;
        this.j = b;
        this.h = c
    };
    ow.prototype.getBreakStatus = function() {
        return this.l
    };
    _.r(rw, Sv);
    rw.prototype.Dd = function(a) {
        if (this.j) return this.j.seekTo;
        var b = this.o.slice(0).reverse().find(function(c) {
            return c.h <= a
        });
        return b ? b.l + Math.max(0, a - b.j) : a
    };
    rw.prototype.ke = function(a, b) {
        var c = tw(this, b),
            d = 0,
            e = 0;
        c ? (d = b - c.B, e = b - c.h) : _.I(IC, "No matching break for break status, aassuming beginning of break.");
        b = new Lc(d, e);
        Pv(a, b);
        return b
    };
    rw.prototype.oe = function(a) {
        var b = tw(this, a);
        return b ? a - b.h : null
    };
    qw.prototype.include = function(a) {
        return this.h - .001 <= a && (0 > this.j || a <= this.j + .001)
    };
    _.r(yw, cast.framework.media.Player);
    _.h = yw.prototype;
    _.h.Ee = function(a) {
        var b = this;
        return (this.G || zw(this)).then(function(c) {
            b.h = c;
            b.Pd();
            kw(b, "CLIP_STARTED", b.Gl);
            kw(b, "CLIP_ENDED", b.Fl);
            return c.pd(b.mediaElement, a)
        })
    };
    _.h.We = function() {
        this.G = zw(this).then(function(a) {
            a.preloadContent();
            return a
        })
    };
    _.h.Zd = function(a, b) {
        function c() {
            return d.h.seek(sw(e, a), b)
        }
        var d = this;
        if (this.l) return _.H(JC, "Seek is in progress, new seek is ignored."), _.J();
        _.I(JC, "seek: " + a);
        var e = this.timeline;
        return mw(this, a).then(function(f) {
            if (f && (a = f.seekTo, f.breaks && 0 < f.breaks.length)) {
                var g = Xv(e, f);
                if (0 < g.breakClipIds.length) {
                    for (var k = [], l = 0, m = _.q(f.breaks), n = m.next(); !n.done; n = m.next()) {
                        n = n.value;
                        for (var t = _.q(n.breakClipIds), v = t.next(); !v.done; v = t.next()) {
                            v = v.value;
                            var x = e.H.get(n.id + "___" + v);
                            x ? (k.push(new qw(g,
                                x.breakClip, x.l, x.B, x.h, x.j, l)), l++) : _.E(IC, "Invalid break id and break clip id combination in BreakSeekData. break id = " + (n.id + "; break clip id = ") + v)
                        }
                    }
                    e.j = new nw(g, k, f.seekTo);
                    d.l = We();
                    d.D = d.l.promise.then(c);
                    return Aw(d)
                }
            }
            _.I(JC, "No seek break.");
            return c()
        })
    };
    _.h.uh = function() {
        var a = this.Ya(),
            b = this.timeline;
        this.o = !0;
        var c = this.h,
            d = c.seek;
        b = tw(b, a);
        return d.call(c, b ? b.j : a, "PLAYBACK_START")
    };
    _.h.zc = function(a) {
        Aw(this);
        cast.framework.media.Player.prototype.zc.call(this, a)
    };
    _.h.Gl = function() {
        _.I(JC, "started");
        hw(this)
    };
    _.h.Fl = function(a) {
        _.I(JC, "ended");
        5 > this.A && (iw(this, "BREAK_ENDED", null, a.endedReason), jw(this, a))
    };
    var JC = _.D("cast.framework.media.EmbeddedPlayer");
    var KC = _.D("cast.framework.timeline.EmbeddedTimeline");
    _.r(Bw, Sv);
    Bw.prototype.getBreakStatus = function() {
        if (!this.j || !this.j.breakId || !this.j.breakClipId) return null;
        var a = this.Sc(this.j.breakId),
            b = this.kb(this.j.breakClipId);
        return a && b ? new Nv(a, a.breakClipIds.indexOf(this.j.breakClipId) || 0, b) : (_.E(KC, "Error in break status, unknown break or break clip."), null)
    };
    Bw.prototype.Dd = function(a) {
        return a
    };
    Bw.prototype.oe = function() {
        return this.j ? this.j.currentBreakClipTime || 0 : null
    };
    Bw.prototype.ke = function(a) {
        var b = cast.framework.K.er(this.j);
        Pv(a, b);
        return b
    };
    cast.framework.timeline.Qm = Bw;
    _.r(Dw, cast.framework.media.Player);
    _.h = Dw.prototype;
    _.h.We = function() {
        this.D = pv(nv.L(), this.B).then(function(a) {
            a.preloadContent();
            return a
        })
    };
    _.h.Ee = function(a) {
        var b = this;
        return (this.D || pv(nv.L(), this.B)).then(function(c) {
            b.h = c;
            c instanceof qu && (b.l = c);
            b.Pd();
            return c.pd(b.mediaElement, a)
        }).then(function(c) {
            Ew(b);
            return c
        })
    };
    _.h.Pd = function() {
        var a = this;
        cast.framework.media.Player.prototype.Pd.call(this);
        kw(this, "CLIP_STARTED", function() {
            _.I(LC, "started");
            hw(a)
        });
        kw(this, "CLIP_ENDED", function(b) {
            _.I(LC, "ended");
            5 > a.A && (iw(a, "BREAK_ENDED", null, b.endedReason), jw(a, b))
        });
        this.l && (this.l.G = function() {
            a.l ? (id("Cast.CAF.3PPBreakInfoChanged"), Ew(a), gw(a, !0)) : _.E(LC, "Error getting breaks info changed for non custom player")
        }, this.l.I = function() {
            if (a.l) {
                id("Cast.CAF.3PPBreakStateChanged");
                var b = a.l.getBreakStatus();
                a.o.j = b;
                b =
                    a.o.getBreakStatus();
                a.j && b && Ov(b, a.j) || (a.j && !b ? iw(a, "BREAK_ENDED", null) : iw(a, "BREAK_CLIP_STARTED", b))
            } else _.E(LC, "Error getting break state changed for non custom player")
        })
    };
    _.h.zc = function(a) {
        if (this.isPlayingBreak) {
            var b = this.l.getBreakStatus();
            this.o.j = b
        }
        cast.framework.media.Player.prototype.zc.call(this, a)
    };
    _.h.Zd = function(a, b) {
        return this.h.seek(a, b)
    };
    _.h.skipAd = function() {
        return this.l ? this.l.skipAd() : Qe("NOT_SUPPORTED")
    };
    var LC = _.D("cast.framework.media.ProxyPlayer");
    cast.framework.media.Pm = Dw;
    Fw.prototype.isPlayingBreak = function() {
        return null != this.breakStatus
    };
    cast.framework.media.util = {};
    var MC = _.D("cast.framework.media.util"),
        Gw = {
            m3u8: "application/x-mpegurl",
            manifest: "application/vnd.ms-sstr+xml",
            mpd: "application/dash+xml",
            ism: "application/vnd.ms-sstr+xml",
            m4v: "video/mp4",
            mp4: "video/mp4",
            ogv: "video/ogg",
            aac: "audio/aac",
            m4a: "audio/mp4",
            mp3: "audio/mp3",
            oga: "audio/ogg",
            wav: "audio/wav",
            jpg: "image/jpg",
            gif: "image/gif",
            png: "image/png"
        };
    cast.framework.media.util.qe = function(a) {
        a = a.split("?")[0] || "";
        a = a.split("/").pop() || "";
        return a.split(".").pop() || ""
    };
    cast.framework.media.util.we = function(a, b) {
        b = void 0 === b ? "video/mp4" : b;
        if (a = Gw[a]) return a;
        _.H(MC, "cannot guess mime type from given contenId/Type. Assume that this is " + b);
        return b
    };
    cast.framework.media.util.hp = function(a, b, c, d, e) {
        c = Iw(d || a.contentUrl || a.contentId, a.contentType, c, a.hlsSegmentFormat, a.hlsVideoSegmentFormat);
        c.media = a;
        c.startTime = b;
        e && (c.tracksInfo = e);
        return c
    };
    cast.framework.media.util.gp = function(a, b) {
        b = Iw(String(a.contentUrl || a.contentId), a.contentType, b, a.hlsSegmentFormat);
        b.breakClip = a;
        return b
    };
    var Lw = _.D("cast.framework.timeline.StitchingTimeline");
    _.r(Jw, Sv);
    Jw.prototype.ke = function(a, b) {
        for (var c = a.j, d = a.l, e = 0, f = 0; f < d; f++) {
            var g = this.kb(c.breakClipIds[f]);
            g && g.duration && (e += g.duration)
        }
        b = new Lc(e + b, b);
        Pv(a, b);
        return b
    };
    Jw.prototype.oe = function(a) {
        return a
    };
    Jw.prototype.Dd = function(a) {
        return a
    };
    _.r(Qw, cast.framework.media.Player);
    _.h = Qw.prototype;
    _.h.setPlaybackRate = function(a) {
        this.Ba = a || 1;
        return this.o.breakStatus ? _.J() : cast.framework.media.Player.prototype.setPlaybackRate.call(this, a)
    };
    _.h.Uh = function(a) {
        var b = this;
        _.I(Sw, "endInternal()");
        var c = [];
        this.h && (iw(this, "BREAK_ENDED", null, a), lw(this, this.Hf), c.push(this.h.end(a)), this.h = null);
        this.l && (this.l.cancel("Main video ends"), this.l = null);
        this.D && (c.push(this.D.then(function(d) {
            if (d) return d.end(a)
        })), this.D = null);
        Ue(c).then(function() {
            b.H.resolve()
        })
    };
    _.h.Zd = function(a, b) {
        var c = this;
        _.I(Sw, "seek: " + a);
        return $e(mw(this, a).then(function(d) {
            if (d && (a = d.seekTo, d.breaks && 0 < d.breaks.length && (d = Xv(c.timeline, d), 0 < d.breakClipIds.length))) return Vw(c, d, a, b);
            _.I(Sw, "No seek break.");
            return !1
        }), function() {
            _.I(Sw, "Fail to create seek clip");
            return !1
        }).then(function(d) {
            if (!d) {
                d = a;
                if (d >= c.o.endTime || d < c.o.startTime) Rw(c), c.o.endTime = Mw(c.P, d), Xw(c, c.o);
                c.o.startTime = d;
                c.h.seek(d, b)
            }
        })
    };
    _.h.uh = function() {
        return this.h.end("SKIPPED")
    };
    _.h.We = function() {
        this.fa = pv(nv.L(), this.B).then(function(a) {
            a.preloadContent();
            return a
        })
    };
    _.h.Ee = function(a) {
        var b = this,
            c = this.B.startTime || 0;
        return Nw(this.P, c, this.B).then(function(d) {
            if (d.breakStatus) {
                var e = $w(b),
                    f, g = Tw(b, d).then(function(k) {
                        f = k;
                        k.preloadContent()
                    });
                b.G = c;
                Te([e, g]).then(function() {
                    return Uw(b, f, d, a)
                });
                return e
            }
            return (b.fa || Tw(b, d)).then(function(k) {
                return Uw(b, k, d, a).then(function() {
                    Zw(b, k)
                })
            })
        })
    };
    _.h.na = function() {
        return this.pa
    };
    _.h.editTracksInfo = function(a) {
        return this.j || !this.h ? null : lu(this.h, cast.framework.K.aj(a))
    };
    _.h.Oc = function(a) {
        if (!this.j && this.h) return this.h.Oc(a) || void 0
    };
    _.h.qg = function() {
        return this.wa
    };
    _.h.getMediaCategory = function() {
        return cast.framework.K.bk(this.xa)
    };
    _.h.pe = function() {
        return null !== this.G ? this.G : this.Ya()
    };
    _.h.Ae = function() {
        return this.l ? !1 : cast.framework.media.Player.prototype.Ae.call(this)
    };
    _.h.Hl = function() {
        _.I(Sw, "clip started");
        4 > this.A && hw(this);
        var a = this.o.breakStatus;
        if (a) {
            var b = this.h.getDurationSec();
            a.h.duration = b;
            this.ma = !0;
            iw(this, "BREAK_CLIP_STARTED", a)
        } else this.G = null
    };
    _.h.Hf = function(a) {
        var b = this;
        _.I(Sw, "clip ended");
        this.N = a.endedReason;
        this.M = this.Oa() || void 0;
        var c = null;
        this.o.breakStatus ? c = $e(_.J(this.l), function() {
            return null
        }).then(function(d) {
            d && d.breakStatus || (_.I(Sw, "onClipEnded_: " + (d ? "Next clip is not a break clip" : "No next clip")), iw(b, "BREAK_ENDED", null, b.N, b.M), b.N = void 0, b.M = void 0)
        }) : (this.G = this.h.getCurrentTimeSec(), this.h.ja && (this.Ga = this.h.ja || null));
        _.J(c).then(function() {
            return 5 > b.A ? Yw(b) : !1
        }).then(function(d) {
            d && (_.I(Sw, "breakList player ends since there is no more player to switch to"),
                jw(b, a))
        })
    };
    _.h.Ue = function(a) {
        this.o.breakStatus ? _.I(Sw, "player event: break clip error") : cast.framework.media.Player.prototype.Ue.call(this, a)
    };
    _.h.zc = function(a) {
        var b = this.h.getDurationSec();
        cast.framework.media.Player.prototype.zc.call(this, a);
        a = this.Ya();
        var c = this.h.getBufferedRanges();
        if (1 <= c.length) {
            var d = c.length - 1,
                e = c[d].end;
            b = Math.min(this.o.endTime, b);
            c[d].start <= a && e >= b && this.ha.resolve()
        }
        a >= this.o.endTime && this.h.end("BREAK_SWITCH")
    };
    _.h.Gf = function(a) {
        cast.framework.media.Player.prototype.Gf.call(this, a);
        this.j && (a.currentTime = this.j.getPosition())
    };
    var Sw = _.D("StitchingPlayer");
    cast.framework.media.kn = Qw;
    _.h = O.prototype;
    _.h.Mp = function(a) {
        hx(this);
        this.$ = a.isBuffering;
        this.broadcastStatus(!1)
    };
    _.h.getStats = function() {
        hx(this);
        var a = {};
        a.bufferingTime = this.fa;
        a.playTime = this.sa;
        if (!this.B) return a;
        var b = Object,
            c = b.assign,
            d = this.B.getVideoPlaybackQuality && this.B.getVideoPlaybackQuality();
        c.call(b, a, d ? {
            droppedFrames: d.droppedVideoFrames,
            decodedFrames: d.totalVideoFrames,
            height: this.B.videoHeight,
            width: this.B.videoWidth
        } : this.B.webkitDecodedFrameCount ? {
            droppedFrames: this.B.webkitDroppedFrameCount,
            decodedFrames: this.B.webkitDecodedFrameCount,
            height: this.B.videoHeight,
            width: this.B.videoWidth
        } : {});
        if (!this.h) return a;
        b = Object;
        c = b.assign;
        d = this.h;
        d = d.h ? d.h.Ff() : {};
        c.call(b, a, d);
        return a
    };
    _.h.qq = function() {
        id("Cast.CAF.RequestPrecache")
    };
    _.h.Qj = function(a) {
        this.aa = a
    };
    _.h.Wo = function() {
        return this.aa
    };
    _.h.Yo = function() {
        return this.F
    };
    _.h.Zo = function() {
        return this.N
    };
    _.h.$o = function() {
        return this.X
    };
    _.h.Mo = function() {
        return this.T
    };
    _.h.ep = function() {
        return this.G
    };
    _.h.bp = function() {
        return this.Z
    };
    _.h.No = function() {
        return this.H
    };
    _.h.Vp = function() {
        hx(this);
        this.$ = !1;
        this.h = null;
        this.P = !1;
        this.T.reset();
        this.G.reset();
        this.H.reset()
    };
    _.h.nq = function() {
        var a = this.h.getPlaybackRate();
        null === this.Oa() && this.F !== a && (this.F = a, a = this.h.getPlaybackRate(), this.l.B = a, this.broadcastStatus(!1))
    };
    _.h.Rp = function() {
        if (this.h && this.P) {
            var a = this.lb(),
                b = this.getDurationSec();
            a.duration !== b && (a.duration = b, this.cd(a, !0))
        }
    };
    _.h.zq = function() {
        if (this.h && this.P) {
            var a = this.G.getTracksInfo();
            a && Ok(this.l, cast.framework.K.hc(a))
        }
    };
    _.h.tq = function(a) {
        this.U = a.credentials;
        return new Wi
    };
    _.h.Sp = function(a) {
        var b = new Zq;
        b.media = new Yq;
        b.autoplay = !0;
        b.media.entity = a.entity;
        this.U && (b.credentials = this.U, b.credentialsType = "cloud");
        if (void 0 !== a.shuffle) {
            fd("Cast.CAF.Shuffle", a.shuffle);
            var c = new vr;
            a.shuffle ? (c.repeatMode = "REPEAT_ALL_AND_SHUFFLE", c.shuffle = !0) : (c.repeatMode = "REPEAT_OFF", c.shuffle = !1);
            b.queueData = c
        }
        b.loadOptions = cast.framework.K.uo(a.loadOptions);
        return this.load(b).then(function() {
            return new Wi
        }, function(d) {
            var e = "APP_ERROR";
            d && d.reason && _.rb(xA, d.type) && (e = d.reason);
            return new Ii(e)
        })
    };
    _.h.Il = function(a) {
        z("Cast.CAF.Error", a.detailedErrorCode || 0)
    };
    _.h.addEventListener = function(a, b) {
        var c = this;
        if ("function" !== typeof b) throw _.E(dx, "addEventListener failed since handler is not a function"), Error("addEventListener failed since handler is not a function");
        Array.isArray(a) ? a.forEach(function(d) {
            jx(c, d, b)
        }) : jx(this, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        var c = this;
        Array.isArray(a) ? a.forEach(function(d) {
            kx(c, d, b)
        }) : kx(this, a, b)
    };
    _.h.Bc = function(a, b) {
        var c = this,
            d = null;
        _.rb(gC, a) ? null != b && "function" !== typeof b && (d = "setMessageInterceptor(" + a + ") failed since handler is not a function") : d = "setMessageInterceptor(" + a + ") failed due to invalid request type";
        if (d) throw _.E(dx, d), Error(d);
        z("Cast.CAF.MessageInterceptorSet", cast.framework.common.analytics.To(a));
        var e = b && nx(b);
        switch (a) {
            case "MEDIA_STATUS":
                this.pa = e;
                break;
            case "CLOUD_STATUS":
                this.M.promise.then(function() {
                    return c.l.Bh = e
                });
                break;
            case "GET_STATUS":
            case "LOAD":
            case "PAUSE":
            case "STOP":
            case "PLAY":
            case "PLAY_AGAIN":
            case "SEEK":
            case "SET_PLAYBACK_RATE":
            case "SET_VOLUME":
            case "SKIP_AD":
            case "EDIT_TRACKS_INFO":
            case "EDIT_AUDIO_TRACKS":
            case "PRECACHE":
            case "PRELOAD":
            case "QUEUE_LOAD":
            case "QUEUE_INSERT":
            case "QUEUE_UPDATE":
            case "QUEUE_REMOVE":
            case "QUEUE_REORDER":
            case "QUEUE_GET_ITEM_RANGE":
            case "QUEUE_GET_ITEMS":
            case "QUEUE_GET_ITEM_IDS":
            case "STORE_SESSION":
            case "RESUME_SESSION":
                b =
                    e && this.Gr.bind(this, a, e);
                if ("LOAD" == a) {
                    d = Hs(this.j, NC.LOAD);
                    var f = Hs(this.j, NC.PRELOAD),
                        g = Hs(this.j, NC.PRECACHE);
                    f && f !== d || this.j.Bc(NC.PRELOAD, b);
                    g && g !== d || this.j.Bc(NC.PRECACHE, b)
                }
                this.j.Bc(NC[a], b);
                break;
            case "SET_CREDENTIALS":
            case "LOAD_BY_ENTITY":
            case "DISPLAY_STATUS":
            case "FOCUS_STATE":
            case "CUSTOM_COMMAND":
                this.D.Bc(a, e && this.nk.bind(this, a, e));
                break;
            case "SESSION_STATE":
                this.wa = e;
                break;
            case "USER_ACTION":
                this.D.Bc(a, e && this.nk.bind(this, a, e));
                var k = e && this.Br.bind(this, e);
                this.M.promise.then(function() {
                    return c.l.Ah =
                        k
                });
                break;
            default:
                throw d = "Unknown message type - " + a, _.E(dx, d), Error(d);
        }
    };
    _.h.Br = function(a, b) {
        var c = this;
        this.vg(b);
        var d = null;
        try {
            d = a(cast.framework.K.Yi(b.data))
        } catch (e) {
            throw _.E(dx, "UserAction Interceptor Exception " + e), lx(this, b), e;
        }
        Promise.resolve(d).then(function(e) {
            if (e && _.rb(rx, e.type)) return Promise.reject(e);
            c.broadcastStatus(!0, b.data.requestId)
        }).then(function() {}, function(e) {
            _.E(dx, "UserAction failed " + e);
            lx(c, b);
            if (e instanceof Error) throw e;
        })
    };
    _.h.Gr = function(a, b, c) {
        function d(k) {
            "LOAD" == a ? (e.l.yf(null, k), e.o.dispatchEvent(new Ts(905, k)), qx(e, c.data.requestId, k)) : lx(e, c, k.type, k.reason, k.customData)
        }
        var e = this;
        if (this.ha) {
            var f = this.kg();
            if (!cast.framework.common.Xg.jk(c, f)) return Cx(this, c), Promise.resolve(null)
        }
        f = null;
        var g = c.data && c.data.requestId;
        try {
            f = b(cast.framework.K.Yi(c.data))
        } catch (k) {
            throw d(k), k;
        }
        return Promise.resolve(f).then(function(k) {
            if (!k) return px(e, c.data.requestId), null;
            if (k && _.rb(rx, k.type)) return d(k), null;
            g && g !==
                k.requestId && (_.H(dx, c.type + " Interceptor changed requestId, using original requestId"), k.requestId = g);
            c.data = k;
            return c
        }).catch(function(k) {
            k && _.rb(rx, k.type) || _.E(dx, a + " Interceptor Error " + k);
            d(k);
            if (k instanceof Error) throw k;
            return null
        })
    };
    _.h.nk = function(a, b, c) {
        function d(f) {
            "LOAD_BY_ENTITY" === a && e.o.dispatchEvent(new Ts(905, f))
        }
        var e = this;
        b = b(c);
        return Promise.resolve(b).then(function(f) {
            return f ? _.rb(xA, f.type) ? (d(f), new Ii(f.reason || "APP_ERROR")) : f : new Wi
        }, function(f) {
            var g = "APP_ERROR";
            f && f.reason && _.rb(xA, f.type) && (g = f.reason, d(f));
            var k = cast.receiver.Bb.L();
            return Cf(k, "add_custom_data_to_cac_error") ? new Ii(g, void 0, f.customData || void 0) : new Ii(g)
        })
    };
    _.h.Rq = function(a) {
        null != a && "function" !== typeof a ? _.E(dx, "setMediaPlaybackInfoHandler() cannot set handler since it's not a function") : this.ma = a
    };
    _.h.Sq = function(a) {
        null != a && "function" !== typeof a ? _.E(dx, "setMediaUrlHandler() cannot set handler since it's not a function") : this.ra = a
    };
    _.h.Vg = function(a, b) {
        return this.A.Vg(a, b).then(function(c) {
            var d = null;
            "ERROR" == c.type && (d = new Vq("ERROR"), d.reason = c.code);
            return d
        })
    };
    _.h.eh = function() {
        return this.A.eh().then(function(a) {
            if ("ERROR" == a.type) {
                var b = new Vq("ERROR");
                b.reason = a.code;
                return Promise.reject(b)
            }
        })
    };
    _.h.zb = function(a) {
        var b = this;
        !this.h && this.l && (this.ja = _.J(a), this.ja.then(function(c) {
            b.B = c;
            b.l.zb(c);
            b.H.zb(c);
            try {
                aC.D = c
            } catch (d) {
                _.E(dx, "debug overlay update failed", d)
            }
        }))
    };
    _.h.lb = function() {
        return this.l ? cast.framework.K.wo(this.l.lb()) : null
    };
    _.h.cd = function(a, b) {
        this.l && (this.h && ew(this.h, cast.framework.K.fc(a)), this.l.cd(cast.framework.K.fc(a), b), this.o.dispatchEvent(new bt(a)))
    };
    _.h.Wb = function() {
        return this.l ? this.l.Wb() : (_.E(dx, "getSupportedMediaCommands should not be called before CastReceiverContext#start"), 0)
    };
    _.h.kg = function() {
        if (!this.l) return _.E(dx, "getCurrentSupportedMediaCommands should not be called before CastReceiverContext#start"), 0;
        var a = this.l.Wb();
        this.h && (a = dw(this.h, a));
        return a
    };
    _.h.Od = function(a, b) {
        var c = this;
        b = void 0 === b ? !0 : b;
        this.M.promise.then(function() {
            return c.l.Od(a, b)
        })
    };
    _.h.Rf = function(a, b) {
        var c = this;
        b = void 0 === b ? !0 : b;
        this.M.promise.then(function() {
            return c.l.Rf(a, b)
        })
    };
    _.h.hh = function(a, b) {
        var c = this;
        b = void 0 === b ? !0 : b;
        this.M.promise.then(function() {
            return c.l.hh(a, b)
        })
    };
    _.h.broadcastStatus = function(a, b, c, d) {
        this.l && this.l.broadcastStatus(void 0 === a ? !1 : a, b, c, d)
    };
    _.h.cf = function(a, b, c, d, e) {
        this.l && this.l.cf(a, b, void 0 === c ? !1 : c, d, e)
    };
    _.h.Gq = function(a) {
        this.l && (this.l.A.send("*:*", new Xq(a)), this.o.dispatchEvent(new Ys(a)))
    };
    _.h.oh = function(a) {
        this.l && this.l.oh(cast.framework.K.kr(a))
    };
    _.h.Ca = function(a, b, c, d, e) {
        this.l && this.l.Ca(a, b, cast.framework.K.jr(c), cast.framework.K.ir(void 0 === d ? null : d), void 0 === e ? null : e)
    };
    _.h.getCurrentTimeSec = function() {
        return this.h ? this.h.pe() : 0
    };
    _.h.Ya = function() {
        return this.h ? this.h.Ya() : 0
    };
    _.h.getStartAbsoluteTime = function() {
        return this.h ? this.h.getStartAbsoluteTime() : null
    };
    _.h.Io = function(a) {
        var b = this.getStartAbsoluteTime();
        return null === b ? null : a + b
    };
    _.h.So = function(a) {
        var b = this.getStartAbsoluteTime();
        return null === b ? null : a - b
    };
    _.h.getPlayerState = function() {
        return this.h ? cast.framework.K.xo(this.h.getState()) : "IDLE"
    };
    _.h.getDurationSec = function() {
        return this.h ? this.h.W : NaN
    };
    _.h.Oa = function() {
        return this.H.Oa()
    };
    _.h.getPlaybackRate = function() {
        return this.l ? this.l.getPlaybackRate() : 1
    };
    _.h.Gb = function() {
        return this.H.Gb()
    };
    _.h.getBreaks = function() {
        return this.h ? this.h.timeline.h : []
    };
    _.h.getLiveSeekableRange = function() {
        return this.h ? this.h.getLiveSeekableRange() : null
    };
    _.h.Za = function() {
        return this.h ? this.h.Za() : null
    };
    _.h.tc = function() {
        return this.h ? this.h.tc() : []
    };
    _.h.load = function(a) {
        var b = this,
            c = ox(this, a);
        this.M.promise.then(function() {
            return b.l.load(cast.framework.K.lr(a))
        });
        return c
    };
    _.h.pause = function() {
        this.yb(new M("PAUSE"))
    };
    _.h.play = function() {
        this.yb(new M("PLAY"))
    };
    _.h.seek = function(a) {
        var b = new fr;
        b.currentTime = a;
        this.yb(b)
    };
    _.h.stop = function() {
        this.yb(new M("STOP"))
    };
    _.h.yb = function(a) {
        var b = this;
        this.M.promise.then(function() {
            return b.l.yb(cast.framework.K.qr(a))
        })
    };
    _.h.Tq = function(a) {
        var b = nv.L();
        id("Cast.CAF.PlayerProvided");
        b.h = a
    };
    _.h.Yp = function(a) {
        var b = this;
        _.I(dx, "MediaManagerLoad");
        var c = cast.framework.K.vo(a.data),
            d = c.media;
        (a = pb(c, "queueData", "items")) && z("Cast.CAF.QueueItems", a.length);
        a = this.Ga;
        var e = We();
        this.Ga = e.promise;
        var f, g = null,
            k = !1;
        a = a.then(function() {
            if (b.h) {
                hx(b);
                var m = b.h;
                b.h = null;
                b.T.reset();
                b.G.reset();
                b.$ = !1;
                b.P = !1;
                return m.end("INTERRUPTED")
            }
        });
        var l = this.l;
        d != l.lb() && this.cd(d, !0);
        $e(a.then(function() {
            b.J && qx(b, b.J, void 0);
            b.J = c.requestId;
            d && (d.contentUrl || d.contentId) ? b.I && b.I.Ta == (d.contentUrl ||
                d.contentId) ? (f = _.J(b.I), b.I = null) : f = yx(b, c) : (_.E(dx, "LoadRequest data was corrupted"), f = Qe());
            return f
        }).then(function(m) {
            e.resolve();
            g = m;
            l.zb(m);
            m.va.gf(b.o);
            hx(b);
            b.h = m;
            return b.ja
        }).then(function(m) {
            var n = void 0 !== c.autoplay ? c.autoplay : !0;
            b.F = c.playbackRate || b.F;
            b.o.dispatchEvent(new at("PLAYER_LOADING", d));
            k = !0;
            return cw(b.h, m, n, b.F)
        }).then(function() {
            if (b.J === c.requestId && b.h === g) {
                b.T.h = b.h;
                b.G.h = b.h;
                var m = b.h.na();
                m && Nk(l, cast.framework.K.hc(m.getTracksInfo()));
                Rk(l, b.h.getPlaybackRate());
                px(b, b.J);
                Ax(b, !0);
                ew(b.h, cast.framework.K.fc(d));
                b.P = !0;
                b.o.dispatchEvent(new at("PLAYER_LOAD_COMPLETE", d));
                ux(b);
                xx(b);
                hx(b);
                zs(b.Z);
                ys(b.Z, !1);
                xk(l);
                b.h.va.addEventListener("ERROR", function(n) {
                    Ck(b.l, n)
                })
            }
        }), function(m) {
            m && m.message && _.E(dx, "Load failed: " + m.message);
            e.resolve();
            k || (Fk(l, "LOAD_FAILED", m && m.customData, m && m.reason), b.o.dispatchEvent(new Zs(void 0, "ERROR")));
            z("Cast.CAF.LoadError", cast.framework.common.analytics.fp(m && m.reason) || 0);
            b.o.dispatchEvent(new Ts(905, m))
        })
    };
    _.h.bq = function(a) {
        var b = this,
            c = cast.framework.K.yo(a.data),
            d = c.media;
        if (!d || !d.contentUrl && !d.contentId) return _.E(dx, "PreloadRequest data was corrupted"), !1;
        this.I ? (a = this.I.end("STOPPED"), this.I = null) : a = _.J();
        a.then(function() {
            return yx(b, c)
        }).then(function(e) {
            b.o.dispatchEvent(new at("PLAYER_PRELOADING", d));
            b.I = e;
            e.preloadContent(c.activeTrackIds || void 0)
        }, function() {
            _.E(dx, "Cannot create player on preload")
        });
        return !0
    };
    _.h.Xp = function() {
        this.o.dispatchEvent(new at("PLAYER_PRELOADING_CANCELLED"));
        return !0
    };
    _.h.cq = function(a) {
        var b = this;
        if (this.h) {
            var c = a.data,
                d = void 0 !== c.relativeTime ? this.getCurrentTimeSec() + c.relativeTime : Number(c.currentTime);
            Promise.resolve(this.h.seek(d, c.resumeState)).then(function() {
                b.broadcastStatus(!1, c.requestId)
            }, function(e) {
                tx(b, a, e)
            })
        } else lx(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.Qp = function(a) {
        var b = this;
        this.h && this.h.Gf(a);
        Dv(this.H, cast.framework.K.Xi(a));
        a && !a.breakStatus && ["PLAYING", "PAUSED"].includes(a.playerState) && Ax(this, !1);
        var c = a;
        this.pa && (c = this.pa(a));
        return Promise.resolve(c).then(function(d) {
            d = xb(d);
            zx(d);
            b.o.dispatchEvent(new Xs(cast.framework.K.Xi(d)));
            return d
        })
    };
    _.h.fq = function(a) {
        var b = this;
        this.h ? this.h.skipAd().then(function() {
            b.broadcastStatus(!1, a.data.requestId)
        }, function(c) {
            tx(b, a, c)
        }) : lx(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.Zp = function(a) {
        qx(this, this.J, a)
    };
    _.h.aq = function(a) {
        var b = this;
        if (this.h) {
            if (this.h.isLiveStream()) {
                var c = this.h.getLiveSeekableRange(),
                    d = this.Wb(),
                    e = this.getCurrentTimeSec(),
                    f = e;
                c ? d & 2 ? e < c.start && (_.I(dx, "seek to seekable range start " + c.start), f = c.start) : (_.I(dx, "SEEK command is not supported. Jump to live head"), f = Infinity) : (_.I(dx, "No seekable range. Jump to live head"), f = Infinity);
                if (f !== e) {
                    this.h.seek(f, "PLAYBACK_START").then(function() {
                        b.broadcastStatus(!1, a.data.requestId)
                    }, function(g) {
                        tx(b, a, g)
                    });
                    return
                }
            }
            this.h.play().then(function() {
                b.broadcastStatus(!1,
                    a.data.requestId)
            }, function(g) {
                tx(b, a, g)
            })
        } else lx(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.$p = function(a) {
        var b = this;
        this.h ? this.h.pause().then(function() {
            b.broadcastStatus(!1, a.data.requestId)
        }, function(c) {
            tx(b, a, c)
        }) : lx(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.eq = function(a) {
        var b = this;
        if (this.h) {
            var c = a.data;
            c = c.playbackRate ? c.playbackRate : this.h.getPlaybackRate() * c.relativePlaybackRate;
            this.h.setPlaybackRate(Number(c)).then(function() {
                b.F = b.h.getPlaybackRate();
                b.l.B = b.F;
                b.broadcastStatus(!1, a.data.requestId)
            }, function(d) {
                tx(b, a, d)
            })
        } else lx(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.uq = function(a) {
        var b = this,
            c = this.lb();
        if (c) {
            var d = new Zq;
            d.autoplay = "PAUSED" !== this.getPlayerState();
            d.media = c;
            if (d.media && this.h) {
                c = this.h.timeline.I;
                var e = _.vb(d.media);
                e.breaks = c.breaks;
                e.breakClips = c.breakClips;
                d.media = e
            }
            d.playbackRate = this.getPlaybackRate();
            d.currentTime = this.getCurrentTimeSec();
            if (c = this.getLiveSeekableRange()) d.currentTime -= c.end;
            d.activeTrackIds = mk(this.l) || void 0;
            if (c = nk(this.l))
                if (e = c.A) d.queueData = _.vb(e), c = c.Cd(), 0 <= c && (d.queueData.startIndex = c, d.queueData.startTime =
                    d.currentTime);
            d.customData = lk(this.l);
            c = new pr;
            c.loadRequestData = d;
            d = c;
            this.wa && (d = this.wa(c));
            Promise.resolve(d).then(function(f) {
                    if (f) {
                        var g = b.l,
                            k = a.senderId,
                            l = a.data.requestId;
                        (f = cast.framework.K.rr(f)) ? (ne(L, re, "Sending SessionState in StoreSessionResponse.\n         SessionState=" + JSON.stringify(f)), ne(L, yk, "Sending store session response message to " + k), f = new el(f), f.requestId = l, g.A.send(k, f)) : _.E(L, "Cannot send store session response. Miss SessionState object.")
                    } else lx(b, a, "ERROR", "NOT_SUPPORTED")
                },
                function() {
                    lx(b, a, "ERROR", "APP_ERROR")
                })
        } else _.E(dx, "No media is being played on StoreSession"), lx(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.rq = function(a) {
        var b = cast.framework.K.Bo(a.data);
        b.sessionState.loadRequestData ? (a = b.sessionState.loadRequestData, a.requestId = b.requestId, this.U && (a.credentials = this.U, a.credentialsType = "cloud"), this.load(a)) : lx(this, a, "INVALID_REQUEST")
    };
    _.h.vg = function(a) {
        var b = a.type;
        b = fx[a.type] || gx[b];
        switch (b) {
            case "REQUEST_LOAD":
            case "REQUEST_LOAD_BY_ENTITY":
            case "REQUEST_SKIP_AD":
            case "REQUEST_SEEK":
            case "REQUEST_PLAY":
            case "REQUEST_PAUSE":
            case "REQUEST_STOP":
            case "REQUEST_PLAYBACK_RATE_CHANGE":
            case "REQUEST_PLAY_AGAIN":
            case "REQUEST_VOLUME_CHANGE":
            case "REQUEST_QUEUE_LOAD":
            case "REQUEST_QUEUE_INSERT":
            case "REQUEST_QUEUE_UPDATE":
            case "REQUEST_QUEUE_REMOVE":
            case "REQUEST_QUEUE_REORDER":
            case "REQUEST_USER_ACTION":
                this.Ba = Date.now()
        }
        this.o.dispatchEvent(new $s(b,
            _.vb(a.data), a.senderId))
    };
    _.h.hf = function(a) {
        this.H.hf(a)
    };
    _.h.Ob = function(a, b) {
        if (this.ha) {
            var c = this.kg();
            if (!cast.framework.common.Xg.jk(b, c)) {
                Cx(this, b);
                return
            }
        }
        a(b)
    };
    _.w("cast.framework.PlayerManager", O, void 0);
    O.prototype.setPlayerFactory = O.prototype.Tq;
    O.prototype.sendLocalMediaRequest = O.prototype.yb;
    O.prototype.stop = O.prototype.stop;
    O.prototype.seek = O.prototype.seek;
    O.prototype.play = O.prototype.play;
    O.prototype.pause = O.prototype.pause;
    O.prototype.load = O.prototype.load;
    O.prototype.getTimedMetadata = O.prototype.tc;
    O.prototype.getRawSeekableRange = O.prototype.Za;
    O.prototype.getLiveSeekableRange = O.prototype.getLiveSeekableRange;
    O.prototype.getBreaks = O.prototype.getBreaks;
    O.prototype.getBreakClipDurationSec = O.prototype.Gb;
    O.prototype.getPlaybackRate = O.prototype.getPlaybackRate;
    O.prototype.getBreakClipCurrentTimeSec = O.prototype.Oa;
    O.prototype.getDurationSec = O.prototype.getDurationSec;
    O.prototype.getPlayerState = O.prototype.getPlayerState;
    O.prototype.getMediaTimeForAbsoluteTime = O.prototype.So;
    O.prototype.getAbsoluteTimeForMediaTime = O.prototype.Io;
    O.prototype.getStartAbsoluteTime = O.prototype.getStartAbsoluteTime;
    O.prototype.getRawCurrentTimeSec = O.prototype.Ya;
    O.prototype.getCurrentTimeSec = O.prototype.getCurrentTimeSec;
    O.prototype.sendError = O.prototype.Ca;
    O.prototype.setIdleReason = O.prototype.oh;
    O.prototype.sendCustomState = O.prototype.Gq;
    O.prototype.sendStatus = O.prototype.cf;
    O.prototype.broadcastStatus = O.prototype.broadcastStatus;
    O.prototype.removeSupportedMediaCommands = O.prototype.hh;
    O.prototype.addSupportedMediaCommands = O.prototype.Rf;
    O.prototype.setSupportedMediaCommands = O.prototype.Od;
    O.prototype.getCurrentSupportedMediaCommands = O.prototype.kg;
    O.prototype.getSupportedMediaCommands = O.prototype.Wb;
    O.prototype.setMediaInformation = O.prototype.cd;
    O.prototype.getMediaInformation = O.prototype.lb;
    O.prototype.setMediaElement = O.prototype.zb;
    O.prototype.refreshCredentials = O.prototype.eh;
    O.prototype.playString = O.prototype.Vg;
    O.prototype.setMediaUrlResolver = O.prototype.Sq;
    O.prototype.setMediaPlaybackInfoHandler = O.prototype.Rq;
    O.prototype.setMessageInterceptor = O.prototype.Bc;
    O.prototype.removeEventListener = O.prototype.removeEventListener;
    O.prototype.addEventListener = O.prototype.addEventListener;
    O.prototype.getBreakManager = O.prototype.No;
    O.prototype.getQueueManager = O.prototype.bp;
    O.prototype.getTextTracksManager = O.prototype.ep;
    O.prototype.getAudioTracksManager = O.prototype.Mo;
    O.prototype.getPreferredTextStyle = O.prototype.$o;
    O.prototype.getPreferredTextLanguage = O.prototype.Zo;
    O.prototype.getPreferredPlaybackRate = O.prototype.Yo;
    O.prototype.getPlaybackConfig = O.prototype.Wo;
    O.prototype.setPlaybackConfig = O.prototype.Qj;
    O.prototype.getStats = O.prototype.getStats;
    var dx = _.D("cast.framework.PlayerManager"),
        OC = {},
        NC = (OC.GET_STATUS = "getstatus", OC.LOAD = "load", OC.PAUSE = "pause", OC.STOP = "stop", OC.PLAY = "play", OC.SKIP_AD = "skipad", OC.PLAY_AGAIN = "playagain", OC.SEEK = "seek", OC.SET_PLAYBACK_RATE = "setplaybackrate", OC.SET_VOLUME = "setvolume", OC.EDIT_TRACKS_INFO = "edittracksinfo", OC.EDIT_AUDIO_TRACKS = "editaudiotracks", OC.PRECACHE = "precache", OC.PRELOAD = "preload", OC.QUEUE_LOAD = "queueload", OC.QUEUE_INSERT = "queueinsert", OC.QUEUE_UPDATE = "queueupdate", OC.QUEUE_REMOVE = "queueremove",
            OC.QUEUE_REORDER = "queuereorder", OC.QUEUE_GET_ITEM_RANGE = "getitemsrange", OC.QUEUE_GET_ITEMS = "getitemsinfo", OC.QUEUE_GET_ITEM_IDS = "getqueueids", OC.USER_ACTION = "useraction", OC.STORE_SESSION = "storesession", OC.RESUME_SESSION = "resumesession", OC),
        PC = {},
        fx = (PC.load = "REQUEST_LOAD", PC.stop = "REQUEST_STOP", PC.pause = "REQUEST_PAUSE", PC.precache = "REQUEST_PRECACHE", PC.play = "REQUEST_PLAY", PC.skipad = "REQUEST_SKIP_AD", PC.playagain = "REQUEST_PLAY_AGAIN", PC.seek = "REQUEST_SEEK", PC.setplaybackrate = "REQUEST_PLAYBACK_RATE_CHANGE",
            PC.setvolume = "REQUEST_VOLUME_CHANGE", PC.edittracksinfo = "REQUEST_EDIT_TRACKS_INFO", PC.editaudiotracks = "REQUEST_EDIT_AUDIO_TRACKS", PC.queueload = "REQUEST_QUEUE_LOAD", PC.queueinsert = "REQUEST_QUEUE_INSERT", PC.queueupdate = "REQUEST_QUEUE_UPDATE", PC.queueremove = "REQUEST_QUEUE_REMOVE", PC.queuereorder = "REQUEST_QUEUE_REORDER", PC.getitemsrange = "REQUEST_QUEUE_GET_ITEM_RANGE", PC.getitemsinfo = "REQUEST_QUEUE_GET_ITEMS", PC.getqueueids = "REQUEST_QUEUE_GET_ITEM_IDS", PC.useraction = "REQUEST_USER_ACTION", PC.storesession =
            "REQUEST_STORE_SESSION", PC.resumesession = "REQUEST_RESUME_SESSION", PC),
        QC = {},
        gx = (QC.SET_CREDENTIALS = "REQUEST_SET_CREDENTIALS", QC.LOAD_BY_ENTITY = "REQUEST_LOAD_BY_ENTITY", QC.USER_ACTION = "REQUEST_USER_ACTION", QC.DISPLAY_STATUS = "REQUEST_DISPLAY_STATUS", QC.CUSTOM_COMMAND = "REQUEST_CUSTOM_COMMAND", QC.FOCUS_STATE = "REQUEST_FOCUS_STATE", QC),
        RC = {},
        vx = (RC.BUFFERED = 1, RC.LIVE = 2, RC.NONE = 3, RC),
        SC = {},
        wx = (SC.VIDEO = 1, SC.AUDIO = 2, SC.IMAGE = 3, SC);
    var TC = null;
    cast.framework.common.Vd = {
        Fe: function(a) {
            TC || (TC = a, z("Cast.CAF.CloseReason", a))
        }
    };
    var UC = {},
        Gx = (UC.no_media = 5, UC.loading = 5, UC.paused = 20, UC),
        VC = {},
        Hx = (VC.no_media = 2, VC.loading = 4, VC.paused = 3, VC),
        Fx = _.D("IdleTimeoutManager");
    _.h = Dx.prototype;
    _.h.start = function() {
        var a = this.l;
        a.addEventListener("ERROR", this.Cj.bind(this));
        a.addEventListener("MEDIA_FINISHED", this.Cj.bind(this));
        a.addEventListener("PAUSE", this.kq.bind(this));
        a.addEventListener("PLAYER_LOADING", this.jq.bind(this));
        a.addEventListener("PLAYER_LOAD_COMPLETE", this.iq.bind(this));
        a.addEventListener("TIME_UPDATE", this.lq.bind(this));
        Ix(this, "no_media")
    };
    _.h.Cj = function() {
        _.se(Fx, "onPlayerIdle");
        Ix(this, "no_media")
    };
    _.h.kq = function() {
        _.se(Fx, "onPlayerPaused");
        Ix(this, "paused")
    };
    _.h.jq = function() {
        _.se(Fx, "onPlayerLoading");
        Ix(this, "loading")
    };
    _.h.iq = function() {
        _.se(Fx, "onPlayerLoadComplete");
        "PAUSED" === this.l.getPlayerState() && Ix(this, "paused")
    };
    _.h.lq = function() {
        this.h = null;
        Ex(this)
    };
    cast.framework.common.fl = Dx;
    cast.framework.C.ca = _.D("cast.framework.ui");
    cast.framework.C.vp = function() {
        if (document.getElementsByTagName("cast-media-player")[0]) {
            var a = document.getElementsByClassName("castSplashScreen")[0];
            cast.framework.C.wp(document.getElementsByClassName("castWelcomeScreen")[0] || a)
        }
    };
    cast.framework.C.wp = function(a) {
        a = void 0 === a ? null : a;
        var b = cast.framework.C.ca;
        a && (_.I(b, "remove welcome screen"), a.remove())
    };
    _.h = P.prototype;
    _.h.reset = function() {
        this.h = null;
        this.A = !1
    };
    _.h.Dp = function(a) {
        this.Hg(void 0 === a ? !1 : a)
    };
    _.h.Hg = function(a, b, c, d, e, f) {
        this.A || (cast.framework.common.$c.load({
            useLegacyDashSupport: void 0 === a ? !1 : a,
            mplUrl: b,
            shakaUrl: c,
            loadMux: void 0 === d ? !1 : d,
            skipMplLoad: void 0 === e ? !1 : e,
            shakaVersion: f
        }), this.A = !0)
    };
    _.h.initialize = function() {
        this.h.Dq && (this.j = this.h.Dq);
        this.h.Wg && (this.l = this.h.Wg);
        this.h.playbackConfig && this.l.Qj(this.h.playbackConfig);
        this.h.preferredPlaybackRate && (this.l.F = this.h.preferredPlaybackRate);
        this.h.preferredTextLanguage && (this.l.N = this.h.preferredTextLanguage);
        this.h.Cq && (this.l.X = this.h.Cq);
        if (this.h.customNamespaces)
            for (var a in this.h.customNamespaces) this.h.customNamespaces.hasOwnProperty(a) && Ug(this.j, a, cast.framework.K.ck(this.h.customNamespaces[a]));
        this.h.mediaMessageTimeouts &&
            (Vg.L().j = this.h.mediaMessageTimeouts);
        this.l.hf(!!this.h.playWatchedBreak);
        a = this.j;
        a.$ = this.sq.bind(this);
        a.aa = this.Aq.bind(this);
        a.Z = this.Jl.bind(this);
        this.isRemoteControl() || this.h.skipPlayersLoad || (this.Hg(this.h.useLegacyDashSupport || this.h.skipShakaLoad, this.h.mplUrl, this.h.shakaUrl, this.h.loadMux, this.h.skipMplLoad, this.h.shakaVersion), Tu(this.h.useShakaPolyfills || void 0 === this.h.useShakaPolyfills));
        this.l.ha = !!this.h.enforceSupportedCommands
    };
    _.h.Xo = function() {
        return this.l
    };
    _.h.getSenders = function() {
        var a = this;
        return this.j.getSenders().map(function(b) {
            return cast.framework.K.Zi(a.j.se(b))
        })
    };
    _.h.se = function(a) {
        return cast.framework.K.Zi(this.j.se(a))
    };
    _.h.start = function(a) {
        _.I(Kx, "start");
        a || (a = new ss);
        Mx(this, a);
        var b = {
            addEventListener: function() {},
            load: function() {},
            removeAttribute: function() {}
        };
        a = a.zt || new kk(this.h.mediaElement || b, this.h.supportedCommands || void 0, this.h.localSenderId || void 0);
        void 0 !== this.h.queue && (id("Cast.CAF.Queue"), a.ph(cast.framework.K.ar(this.h.queue)));
        Bx(this.l, a);
        (a = this.h.mediaElement || Ox()) && this.l.zb(a);
        a = this.h.uiConfig;
        b = Nx();
        ei(this.j, !!(a && a.touchScreenOptimizedApp || this.h.touchScreenOptimizedApp || b));
        a && a.disableRemoteControlOptimizedUi &&
            Bh(this.j);
        this.j.start(cast.framework.K.fr(this.h));
        return this
    };
    _.h.stop = function() {
        cast.framework.common.Vd.Fe(6);
        this.j.stop()
    };
    _.h.isRemoteControl = function() {
        return this.j.isRemoteControl()
    };
    _.h.$b = function() {
        return this.j.$b()
    };
    _.h.ug = function() {
        return cast.framework.K.Go(this.j.ug())
    };
    _.h.sg = function() {
        return cast.framework.K.Do(this.j.sg())
    };
    _.h.te = function() {
        return cast.framework.K.Eo(this.j.te())
    };
    _.h.Rc = function() {
        return cast.framework.K.so(this.j.Rc())
    };
    _.h.Nd = function(a) {
        this.j.Nd(a)
    };
    _.h.qh = function(a) {
        this.j.qh(a)
    };
    _.h.rh = function(a) {
        this.j.rh(a)
    };
    _.h.Uc = function() {
        return cast.framework.K.Fo(this.j.Uc())
    };
    _.h.ff = function(a) {
        this.j.ff(a)
    };
    _.h.Pq = function(a) {
        id("Cast.CAF.SetLastSenderDisconnectedHandler");
        this.o = a
    };
    _.h.Oq = function(a) {
        var b = this;
        a ? this.j.P = function() {
            (new Promise(function(c) {
                c(a())
            })).then(function(c) {
                b.j.Md(c)
            }, function(c) {
                _.E(Kx, "Feedback handler failed " + JSON.stringify(c))
            })
        } : this.j.P = null
    };
    _.h.Md = function(a) {
        this.j.Md(a)
    };
    _.h.kh = function(a) {
        this.j.kh(a)
    };
    _.h.Ei = function(a, b) {
        a = Px(this, a);
        if ("function" !== typeof b) throw Error("listener on custom channel should be a function");
        a.l = b
    };
    _.h.Eq = function(a) {
        Px(this, a).l = null
    };
    _.h.Kj = function(a, b, c) {
        void 0 === b && (b = "*:*");
        Px(this, a).send(b, c)
    };
    _.h.sq = function(a) {
        _.I(Kx, "onSenderDisconnected");
        if (void 0 === a.senderId || void 0 === a.reason) _.I(Kx, "SenderDisconnectedEvent is corrupted");
        else {
            var b = a.userAgent.split(","),
                c = 0 == this.j.getSenders().length,
                d = "requested_by_sender" == a.reason,
                e = b[1];
            b = "iOS CastSDK" == b[0] && 0 >= _.Xb(e, "2.2.0") && "0.0.0" != e;
            c && d && !b && (cast.framework.common.Vd.Fe(5), this.o ? this.o(cast.framework.K.Co(a)) : this.stop())
        }
    };
    _.h.Aq = function(a) {
        _.I(Kx, "onVisibilityChanged");
        void 0 === a.isVisible ? _.I(Kx, "VisibilityChangedEvent is corrupted") : a.isVisible || "IDLE" === this.l.getPlayerState() || this.l.pause()
    };
    _.h.Jl = function() {
        var a = this;
        _.I(Kx, "onReady");
        this.isRemoteControl() || (this.h.disableIdleTimeout || (new cast.framework.common.fl(this.l, function() {
            return a.stop()
        })).start(), Qx(this));
        cast.framework.C.vp()
    };
    _.h.addEventListener = function(a, b) {
        "feedbackstarted" === a ? _.H(Kx, "FEEDBACK_STARTED event is not fired, use setFeedbackHandler instead") : this.j.addEventListener(a, b)
    };
    _.h.removeEventListener = function(a, b) {
        this.j.removeEventListener(a, b)
    };
    _.h.Fq = function() {
        this.j.Nd("")
    };
    _.h.Jq = function(a) {
        (a = a.media.metadata) && a.title && this.j.Nd(cast.framework.V.hm + ": " + a.title)
    };
    _.h.pc = function() {
        return this.j.pc()
    };
    _.h.canDisplayType = function(a, b, c, d, e) {
        return this.j.canDisplayType(a, b, c, d, e)
    };
    _.h.setLoggerLevel = function(a) {
        cast.receiver.bc.Pj(a)
    };
    _.h.Uo = function(a) {
        cast.framework.common.analytics.Hp(a);
        return cast.receiver.platform.Ja(a)
    };
    _.w("cast.framework.CastReceiverContext", P, void 0);
    P.getInstance = Sx;
    P.prototype.getPlatformValue = P.prototype.Uo;
    P.prototype.setLoggerLevel = P.prototype.setLoggerLevel;
    P.prototype.canDisplayType = P.prototype.canDisplayType;
    P.prototype.getDeviceCapabilities = P.prototype.pc;
    P.prototype.removeEventListener = P.prototype.removeEventListener;
    P.prototype.addEventListener = P.prototype.addEventListener;
    P.prototype.sendCustomMessage = P.prototype.Kj;
    P.prototype.removeCustomMessageListener = P.prototype.Eq;
    P.prototype.addCustomMessageListener = P.prototype.Ei;
    P.prototype.sendSmartDisplayMessage = P.prototype.kh;
    P.prototype.sendFeedbackMessage = P.prototype.Md;
    P.prototype.setFeedbackHandler = P.prototype.Oq;
    P.prototype.setLastSenderDisconnectedHandler = P.prototype.Pq;
    P.prototype.setInactivityTimeout = P.prototype.ff;
    P.prototype.getSystemVolume = P.prototype.Uc;
    P.prototype.setSystemVolumeMuted = P.prototype.rh;
    P.prototype.setSystemVolumeLevel = P.prototype.qh;
    P.prototype.setApplicationState = P.prototype.Nd;
    P.prototype.getApplicationData = P.prototype.Rc;
    P.prototype.getSystemState = P.prototype.te;
    P.prototype.getStandbyState = P.prototype.sg;
    P.prototype.getVisibilityState = P.prototype.ug;
    P.prototype.isSystemReady = P.prototype.$b;
    P.prototype.isRemoteControl = P.prototype.isRemoteControl;
    P.prototype.stop = P.prototype.stop;
    P.prototype.start = P.prototype.start;
    P.prototype.getSender = P.prototype.se;
    P.prototype.getSenders = P.prototype.getSenders;
    P.prototype.getPlayerManager = P.prototype.Xo;
    P.prototype.loadPlayerLibrariesWithOptions = P.prototype.Hg;
    P.prototype.loadPlayerLibraries = P.prototype.Dp;
    var Rx = null,
        Kx = _.D("cast.framework.Application"),
        Lx = {
            useLegacyDashSupport: 1,
            loadMux: 2,
            localSenderId: 3,
            mediaElement: 4,
            statusText: 5,
            maxInactivity: 6,
            disableIdleTimeout: 7,
            mplUrl: 8,
            shakaUrl: 9,
            supportedCommands: 10,
            playbackConfig: 11,
            queue: 12,
            customNamespaces: 13,
            versionCode: 14,
            preferredPlaybackRate: 15,
            preferredTextLanguage: 16,
            preferredTextStyle: 17,
            playWatchedBreak: 18,
            uiConfig: 19,
            touchScreenOptimizedApp: 20,
            skipPlayersLoad: 21,
            skipShakaLoad: 22,
            skipMplLoad: 23,
            receiverManager: 24,
            mediaManager: 25,
            playerManager: 26,
            usePlayerBreaks: 27,
            shakaVersion: 28,
            mediaMessageTimeouts: 29,
            enforceSupportedCommands: 30,
            useShakaPolyfills: 31
        };
    var Tx = _.D("cast.framework.RemoteMedia");
    Wx.prototype.A = function(a) {
        a.data && a.data.type ? this.j.dispatchEvent(a.data) : _.E(Tx, "Bad message on remote control channel" + JSON.stringify(a))
    };
    Wx.prototype.addEventListener = function(a, b) {
        this.j.addEventListener(a, b)
    };
    Wx.prototype.removeEventListener = function(a, b) {
        this.j.removeEventListener(a, b)
    };
    var WC = new Wx;
    cast.framework.vd = Wx;
    cast.framework.vd.L = function() {
        return WC
    };
    cast.framework.Ft = {};
    $x.prototype.Oo = function() {
        var a = this,
            b, c, d, e;
        return ya(function(f) {
            if (1 == f.h) return ra(f, ay(a), 2);
            if (3 != f.h) {
                b = new Map;
                var g = a.h.Rc();
                b.set("castAppId", g ? g.id : "");
                g = a.h.Rc();
                b.set("sessionId", String(g ? g.sessionId : 0));
                c = a.h.Uc() || new $r;
                b.set("systemAudioVolumeLevel", String(c.level));
                b.set("systemAudioMuteStatus", String(c.muted));
                d = (g = a.h.l.h) ? g.getVolume() : new Ec;
                b.set("mediaAudioVolumeLevel", String(d.level));
                b.set("mediaAudioMuteStatus", String(d.muted));
                return ra(f, a.h.l.Ba, 3)
            }
            e = f.A;
            b.set("lastUserEngagementTimestamp",
                String(e));
            id("Cast.CAF.GetCafSignals");
            return f.return(b)
        })
    };
    _.w("cast.framework.pal.SignalCollector", $x, void 0);
    $x.getInstance = function() {
        XC || (XC = new $x(new Yx));
        return XC
    };
    $x.prototype.getCafSignals = $x.prototype.Oo;
    var XC = null,
        Zx = _.D("cast.framework.SignalCollector");
    by.prototype.then = function(a) {
        this.j.then(a)
    };
    by.prototype.resolve = function() {
        this.h.resolve()
    };
    cast.framework.common.Mk = by;
    cast.framework.events.category = {};
    cast.framework.events.category.Tm = "REQUEST_SEEK REQUEST_LOAD REQUEST_STOP REQUEST_PAUSE REQUEST_PLAY REQUEST_PLAY_AGAIN REQUEST_PLAYBACK_RATE_CHANGE REQUEST_VOLUME_CHANGE REQUEST_EDIT_TRACKS_INFO REQUEST_EDIT_AUDIO_TRACKS REQUEST_SET_CREDENTIALS REQUEST_SKIP_AD REQUEST_LOAD_BY_ENTITY REQUEST_USER_ACTION REQUEST_DISPLAY_STATUS REQUEST_CUSTOM_COMMAND REQUEST_STORE_SESSION REQUEST_RESUME_SESSION REQUEST_FOCUS_STATE REQUEST_PRECACHE REQUEST_QUEUE_LOAD REQUEST_QUEUE_INSERT REQUEST_QUEUE_UPDATE REQUEST_QUEUE_REMOVE REQUEST_QUEUE_REORDER REQUEST_QUEUE_GET_ITEM_RANGE REQUEST_QUEUE_GET_ITEMS REQUEST_QUEUE_GET_ITEM_IDS".split(" ");
    _.w("cast.framework.events.category.REQUEST", cast.framework.events.category.Tm, void 0);
    cast.framework.events.category.Ck = "REQUEST_SEEK REQUEST_LOAD REQUEST_STOP REQUEST_PAUSE REQUEST_PLAY REQUEST_PLAY_AGAIN REQUEST_PLAYBACK_RATE_CHANGE REQUEST_PRECACHE REQUEST_SKIP_AD REQUEST_VOLUME_CHANGE REQUEST_EDIT_TRACKS_INFO REQUEST_EDIT_AUDIO_TRACKS REQUEST_SET_CREDENTIALS REQUEST_LOAD_BY_ENTITY REQUEST_USER_ACTION REQUEST_DISPLAY_STATUS REQUEST_CUSTOM_COMMAND REQUEST_STORE_SESSION REQUEST_RESUME_SESSION REQUEST_FOCUS_STATE REQUEST_QUEUE_LOAD REQUEST_QUEUE_INSERT REQUEST_QUEUE_UPDATE REQUEST_QUEUE_REMOVE REQUEST_QUEUE_REORDER REQUEST_QUEUE_GET_ITEM_RANGE REQUEST_QUEUE_GET_ITEMS REQUEST_QUEUE_GET_ITEM_IDS BREAK_ENDED BREAK_STARTED BREAK_CLIP_ENDED BREAK_CLIP_LOADING BREAK_CLIP_STARTED BUFFERING ERROR LIVE_ENDED LIVE_IS_MOVING_WINDOW_CHANGED MEDIA_FINISHED MEDIA_STATUS CUSTOM_STATE MEDIA_INFORMATION_CHANGED PAUSE PLAYER_LOADING PLAYER_LOAD_COMPLETE PLAYER_PRELOADING PLAYER_PRELOADING_CANCELLED PLAYING RATE_CHANGE TRACKS_CHANGED SEEKED SEEKING".split(" ");
    _.w("cast.framework.events.category.CORE", cast.framework.events.category.Ck, void 0);
    cast.framework.events.category.DEBUG = "ABORT BITRATE_CHANGED CAN_PLAY CAN_PLAY_THROUGH CLIP_STARTED CLIP_ENDED CACHE_LOADED CACHE_HIT CACHE_INSERTED DURATION_CHANGE EMPTIED EMSG ENDED ID3 LOADED_DATA LOADED_METADATA LOAD_START PLAY STALLED INBAND_TRACK_ADDED WAITING TIMED_METADATA_CHANGED TIMED_METADATA_ENTER TIMED_METADATA_EXIT".split(" ");
    _.w("cast.framework.events.category.DEBUG", cast.framework.events.category.DEBUG, void 0);
    cast.framework.events.category.Uk = ["SEGMENT_DOWNLOADED", "PROGRESS", "SUSPEND", "TIME_UPDATE"];
    _.w("cast.framework.events.category.FINE", cast.framework.events.category.Uk, void 0);
    _.w("cast.framework.ui.BrowseContent", function(a, b) {
        this.title = b;
        this.items = a;
        this.targetAspectRatio = void 0
    }, void 0);
    _.w("cast.framework.ui.BrowseItem", function(a, b, c, d) {
        this.entity = a;
        this.title = b;
        this.subtitle = c;
        this.image = d;
        this.mediaBadge = this.imageType = this.duration = void 0
    }, void 0);
    _.w("cast.framework.ui.BrowseImageType", {
        MUSIC_TRACK: "MUSIC_TRACK",
        MUSIC_ALBUM: "MUSIC_ALBUM",
        ARTIST: "ARTIST",
        PLAYLIST: "PLAYLIST",
        EPISODE: "EPISODE",
        MOVIE: "MOVIE",
        PHOTO: "PHOTO",
        PODCAST: "PODCAST",
        MUSIC_GENRE: "MUSIC_GENRE",
        AUDIO_BOOK: "AUDIO_BOOK",
        RADIO_STATION: "RADIO_STATION",
        MUSIC_MIX: "MUSIC_MIX",
        VIDEO: "VIDEO",
        TV_SHOW: "TV_SHOW",
        NEWS: "NEWS"
    }, void 0);
    _.w("cast.framework.ui.BrowseImageAspectRatio", {
        SQUARE_1_TO_1: "SQUARE_1_TO_1",
        PORTRAIT_2_TO_3: "PORTRAIT_2_TO_3",
        LANDSCAPE_16_TO_9: "LANDSCAPE_16_TO_9"
    }, void 0);
    _.w("cast.framework.ui.BrowseMediaBadge", {
        LIVE: "LIVE"
    }, void 0);
    _.r(cy, nl);
    cy.prototype.h = function(a) {
        this.G ? (this.o && (a.mediaSessionId = this.o), Vx(this.F, a)) : nl.prototype.h.call(this, a)
    };
    cy.prototype.H = function(a) {
        this.G ? Vx(this.F, a) : nl.prototype.H.call(this, a)
    };
    _.r(dy, $c);
    dy.prototype.createdCallback = function() {
        (0, cast.framework.Xk)(this.attachShadow ? this.attachShadow({
            mode: "open"
        }) : this.createShadowRoot());
        this.h = null;
        this.l = this.shadowRoot.getElementById("loading-animation");
        this.j = this.shadowRoot.getElementById("image")
    };
    window.customElements && window.customElements.define ? window.customElements.define("image-loader", dy) : document.registerElement("image-loader", {
        prototype: dy.prototype
    });
    cast.framework.C.ws = dy;
    _.w("cast.framework.ui.State", {
        LAUNCHING: "launching",
        IDLE: "idle",
        LOADING: "loading",
        BUFFERING: "buffering",
        PAUSED: "paused",
        PLAYING: "playing"
    }, void 0);
    _.w("cast.framework.ui.ContentType", {
        VIDEO: "video",
        AUDIO: "audio",
        IMAGE: "image"
    }, void 0);
    _.w("cast.framework.ui.DisplayType", {
        TV: "tv",
        TOUCH: "touch"
    }, void 0);
    _.w("cast.framework.ui.ApplicationData", gy, void 0);
    _.w("cast.framework.ui.PlayerData", hy, void 0);
    cast.framework.C.ba = "Changed";
    var Vz = "applicationData" + cast.framework.C.ba,
        Nz = "state" + cast.framework.C.ba,
        YC = "isSeeking" + cast.framework.C.ba,
        dz = "duration" + cast.framework.C.ba,
        cz = "currentTime" + cast.framework.C.ba,
        Mz = "metadata" + cast.framework.C.ba,
        Jz = "media" + cast.framework.C.ba,
        Kz = "queueData" + cast.framework.C.ba,
        ZC = "thumbnailUrl" + cast.framework.C.ba,
        Pz = "secondaryImageUrl" + cast.framework.C.ba,
        $C = "nextMetadata" + cast.framework.C.ba,
        ez = "supportedMediaCommands" + cast.framework.C.ba,
        Yy = "isLive" + cast.framework.C.ba,
        Tz = "isAtLiveEdge" + cast.framework.C.ba,
        Sz = "breakPercentagePositions" + cast.framework.C.ba,
        Qz = "isPlayingBreak" + cast.framework.C.ba,
        Uz = "whenSkippable" + cast.framework.C.ba,
        Xz = "numberBreakClips" + cast.framework.C.ba,
        Wz = "currentBreakClipNumber" + cast.framework.C.ba,
        Rz = "breakTitle" + cast.framework.C.ba,
        aD = "displayType" + cast.framework.C.ba,
        Qy = "liveSeekableRange" + cast.framework.C.ba,
        $y = "mediaStartAbsoluteTime" + cast.framework.C.ba,
        az = "sectionStartTimeInMedia" + cast.framework.C.ba,
        bz = "sectionDuration" + cast.framework.C.ba,
        Lz = "activeTrackIds" + cast.framework.C.ba;
    _.w("cast.framework.ui.PlayerDataEventType", {
        ANY_CHANGE: "*",
        APPLICATION_DATA_CHANGED: Vz,
        STATE_CHANGED: Nz,
        IS_SEEKING_CHANGED: YC,
        DURATION_CHANGED: dz,
        CURRENT_TIME_CHANGED: cz,
        PLAYBACK_RATE_CHANGED: "playbackRate" + cast.framework.C.ba,
        METADATA_CHANGED: Mz,
        MEDIA_SESSION_ID_CHANGED: "mediaSessionId" + cast.framework.C.ba,
        MEDIA_CHANGED: Jz,
        QUEUE_DATA_CHANGED: Kz,
        TITLE_CHANGED: "title" + cast.framework.C.ba,
        SUBTITLE_CHANGED: "subtitle" + cast.framework.C.ba,
        THUMBNAIL_URL_CHANGED: ZC,
        SECONDARY_IMAGE_URL_CHANGED: Pz,
        NEXT_TITLE_CHANGED: "nextTitle" +
            cast.framework.C.ba,
        NEXT_SUBTITLE_CHANGED: "nextSubtitle" + cast.framework.C.ba,
        NEXT_THUMBNAIL_URL_CHANGED: "nextThumbnailUrl" + cast.framework.C.ba,
        NEXT_METADATA_CHANGED: $C,
        PRELOADING_NEXT_CHANGED: "preloadingNext" + cast.framework.C.ba,
        CONTENT_TYPE_CHANGED: "contentType" + cast.framework.C.ba,
        MEDIA_CATEGORY_CHANGED: "mediaCategory" + cast.framework.C.ba,
        SUPPORTED_MEDIA_COMMANDS_CHANGED: ez,
        IS_LIVE_CHANGED: Yy,
        IS_AT_LIVE_EDGE_CHANGED: Tz,
        BREAK_PERCENTAGE_POSITIONS_CHANGED: Sz,
        IS_PLAYING_BREAK_CHANGED: Qz,
        IS_BREAK_SKIPPABLE_CHANGED: "isBreakSkippable" +
            cast.framework.C.ba,
        WHEN_SKIPPABLE_CHANGED: Uz,
        NUMBER_BREAK_CLIPS_CHANGED: Xz,
        CURRENT_BREAK_CLIP_NUMBER_CHANGED: Wz,
        BREAK_TITLE_CHANGED: Rz,
        DISPLAY_STATUS_CHANGED: "displayStatus" + cast.framework.C.ba,
        DISPLAY_TYPE_CHANGED: aD,
        LIVE_SEEKABLE_RANGE_CHANGED: Qy,
        MEDIA_START_ABSOLUTE_TIME_CHANGED: $y,
        SECTION_START_TIME_IN_MEDIA_CHANGED: az,
        SECTION_DURATION_CHANGED: bz,
        PRESENTATION_CHANGED: "presentation" + cast.framework.C.ba,
        CUSTOM_STATE_CHANGED: "customState" + cast.framework.C.ba,
        ACTIVE_TRACK_IDS_CHANGED: Lz
    }, void 0);
    _.w("cast.framework.ui.PlayerDataChangedEvent", iy, void 0);
    my.prototype.addEventListener = function(a, b) {
        this.G.addEventListener(a, b)
    };
    my.prototype.removeEventListener = function(a, b) {
        this.G.removeEventListener(a, b)
    };
    _.w("cast.framework.ui.PlayerDataBinder", my, void 0);
    my.prototype.removeEventListener = my.prototype.removeEventListener;
    my.prototype.addEventListener = my.prototype.addEventListener;
    var Ry = new hy;
    new my(Ry);
    var xy = _.D("cast.framework.ui.PlayerDataBinder");
    Sy.prototype.start = function() {
        var a = this;
        this.h = Uy(this);
        2 > this.h.length || (this.A = Wy(this, "--animation-duration"), this.B = Math.max(Wy(this, "--interval-duration"), this.A), 0 < this.B && (this.D = setInterval(function() {
            return a.next()
        }, this.B)))
    };
    Sy.prototype.stop = function() {
        clearInterval(this.D);
        this.D = void 0;
        clearInterval(this.G);
        this.G = void 0;
        for (var a = _.q(this.h), b = a.next(); !b.done; b = a.next()) b.value.classList.remove("visible", "top");
        this.l = void 0
    };
    Sy.prototype.next = function() {
        this.o = this.l;
        this.l = void 0 === this.l ? 0 : (this.l + 1) % this.h.length;
        this.h[this.l].classList.add("top", "visible");
        void 0 !== this.o && this.h[this.o].classList.remove("top");
        Ty(this)
    };
    var Vy = _.D("cast.framework.ui.SlideshowManager");
    cast.framework.C.jn = Sy;
    fz.prototype.addEventListener = function(a, b) {
        this.j.addEventListener(a, b)
    };
    fz.prototype.removeEventListener = function(a, b) {
        this.j.removeEventListener(a, b)
    };
    _.r(vz, $c);
    _.h = vz.prototype;
    _.h.createdCallback = function() {
        var a = this;
        (0, cast.framework.Fk)(this.attachShadow ? this.attachShadow({
            mode: "open"
        }) : this.createShadowRoot());
        this.j = Hz(this, "castPlayer");
        this.W = Hz(this, "castMediaElement");
        this.Ga = Hz(this, "castMetadataTitle");
        this.l = Hz(this, "castMetadataSubtitle");
        this.A = Hz(this, "castMetadataSubtitle2");
        this.fa = Hz(this, "metadataImageLoader");
        this.D = Hz(this, "castMetadataImage");
        this.M = Hz(this, "castControlsProgress");
        this.N = Hz(this, "castControlsProgressInner");
        this.P = Hz(this, "castControlsSeekable");
        this.T = Hz(this, "castControlsSeekablePlayed");
        this.Z = Hz(this, "castControlsTotalTime");
        this.Ta = Hz(this, "castControlsCurTime");
        this.$ = Hz(this, "castBreakPosition");
        this.aa = Hz(this, "castBreakTime");
        this.U = Hz(this, "repeatStatus");
        this.wa = Hz(this, "shuffleStatus");
        this.ja = Hz(this, "nextMetadataCountdown");
        this.ra = Hz(this, "nextMetadataTitle");
        this.ma = Hz(this, "nextMetadataSubtitle");
        this.pa = Hz(this, "nextMetadataImage");
        this.ha = Hz(this, "nextContentRating");
        this.G = Hz(this, "castBreakSkippableTime");
        this.F = Hz(this,
            "castSkipBreakMessage");
        this.$a = this.shadowRoot.querySelectorAll(".liveLabel");
        this.X = Hz(this, "top-right-video-overlay-image");
        this.xa = Hz(this, "top-right-audio-persistent-image");
        this.sa = this.H = this.o = null;
        this.B = "";
        this.h = new hy;
        this.I = new my(this.h);
        this.Ba = cast.framework.vd.L();
        Fz(this);
        this.I.addEventListener("*", this.hq.bind(this));
        this.J = new fz(this.I);
        this.J.addEventListener("changed", function() {
            var d = a.J;
            a.Ta.textContent = jz(d);
            var e = kz(d);
            a.Z.classList.toggle("hidden", !e);
            e && (a.Z.textContent =
                mz(d));
            e = nz(d);
            a.N.classList.toggle("hidden", !e);
            e && (e = oz(d), a.N.style.left = (e ? e / lz(d) * 100 : 0) + "%", e = oz(d), a.N.style.width = ("number" !== typeof e ? 0 : (iz(d) - e) / lz(d) * 100) + "%");
            e = pz(d);
            a.T.classList.toggle("hidden", !e);
            a.P.classList.toggle("hidden", !e);
            e && (a.T.style.left = rz(d) + "%", a.T.style.width = sz(d) + "%", a.P.style.left = rz(d) + "%", a.P.style.width = tz(d) + "%");
            a.h.isLive && Dz(a)
        });
        this.Ba.addEventListener("APPLICATION_CHANGED", function(d) {
            a.j.setAttribute("isBluetooth", 5 === d.playbackType)
        });
        var b = this.h,
            c;
        for (c in b) this.j.setAttribute(c, b[c]);
        Ez(this, Vz, function() {
            wz(a, a.h.applicationData);
            yz(a)
        });
        Ez(this, YC, function() {
            Gz(a, !!a.h.isSeeking)
        });
        Ez(this, ZC, function() {
            var d = String(a.h.thumbnailUrl);
            d ? ("touch" === a.h.displayType && fy(a.fa, d), d = cast.receiver.C.Y.Ua(d), a.D.style.backgroundImage = d, a.D.classList.add("has-image"), a.j.style.setProperty("--album-art-image", d)) : (a.j.style.removeProperty("--album-art-image"), a.D.style.removeProperty("background-image"), a.D.classList.remove("has-image"), fy(a.fa, null))
        });
        Ez(this, Pz, function() {
            var d = String(a.h.secondaryImageUrl);
            d ? (cast.receiver.C.Ic.vj(cast.receiver.C.Ic.ri.nn), a.xa.style.backgroundImage = cast.receiver.C.Y.Ua(d)) : a.xa.style.backgroundImage = "";
            a.j.setAttribute("topRightAudioPersistentImageElement", d ? "true" : "false")
        });
        Ez(this, aD, function() {
            yz(a)
        });
        Ez(this, Mz, function() {
            var d = a.h.metadata;
            zz(a.l);
            zz(a.A);
            a.B = "";
            a.W.setAttribute("poster", d && d.posterUrl || "");
            if (d) switch (a.B = d.title, d.metadataType) {
                case 1:
                    Az(a.l, d.subtitle);
                    Az(a.A, d.studio);
                    (d = d.releaseDate) &&
                    Az(a.A, d.substr(0, 4));
                    break;
                case 2:
                    (d.season || d.episode) && Az(a.l, cast.receiver.V.ig(d.season, d.episode));
                    var e = d.originalAirdate;
                    e && Az(a.l, e.substr(0, 4));
                    Az(a.A, d.seriesTitle);
                    break;
                case 3:
                    Az(a.l, d.artist || d.albumArtist || d.composer);
                    Az(a.A, d.albumName);
                    break;
                case 5:
                    d.chapterTitle && (a.B = d.chapterTitle);
                    Az(a.l, d.bookTitle || d.subtitle);
                    break;
                default:
                    d.subtitle && (a.l.textContent = d.subtitle)
            }
            yz(a)
        });
        Ez(this, cz, function() {
            a.h.isPlayingBreak && Cz(a);
            if (a.h.preloadingNext) {
                var d = cast.receiver.V.dj((a.h.duration -
                    a.h.currentTime).toFixed(0));
                a.ja.textContent !== d && (a.ja.textContent = d)
            }
            a.j.classList.toggle("showNextOverlay", !a.h.isPlayingBreak && !a.h.isSeeking && a.h.preloadingNext && 20 > a.h.duration - a.h.currentTime)
        });
        Ez(this, Xz, function() {
            Bz(a, a.h.currentBreakClipNumber, a.h.numberBreakClips)
        });
        Ez(this, Wz, function() {
            Bz(a, a.h.currentBreakClipNumber, a.h.numberBreakClips)
        });
        Ez(this, Sz, function() {
            a.h.isLive || Dz(a)
        });
        Ez(this, Uz, function() {
            Cz(a)
        });
        Ez(this, Qz, function() {
            Cz(a)
        });
        Ez(this, $C, function() {
            var d = a.h.nextMetadata;
            if (d) {
                var e = d.title || "",
                    f = d.subtitle || "",
                    g = d.images && d.images[0] && d.images[0].url || "";
                2 === d.metadataType ? f = cast.receiver.V.ig(d.season, d.episode) || "" : 3 === d.metadataType ? f = d.artist || d.albumArtist || d.composer || "" : 5 === d.metadataType && (e = d.chapterTitle || "", f = d.bookTitle || d.subtitle || "");
                a.ra.textContent = e;
                a.ma.textContent = f;
                xz(a.pa, g);
                d = d.contentRating;
                xz(a.ha, d && d.ratingIcon && d.ratingIcon.url || null)
            } else a.ra.textContent = "", a.ma.textContent = "", xz(a.pa, ""), xz(a.ha, "")
        });
        Ez(this, Kz, function() {
            var d = a.h.queueData;
            if (d) {
                if (d.repeatMode) {
                    var e = d.repeatMode;
                    "REPEAT_ALL_AND_SHUFFLE" === e && (e = "REPEAT_ALL");
                    a.U.dataset.state = e
                } else a.U.dataset.state = "REPEAT_OFF";
                K(a.wa, d.shuffle)
            } else a.U.dataset.state = "REPEAT_OFF", K(a.wa, !1)
        });
        Ez(this, Nz, function() {
            if (a.H) {
                var d = a.H,
                    e = a.h.state;
                d.stop();
                "idle" === e ? (d.j.classList.add("active"), d.start()) : d.j.classList.remove("active")
            }
        });
        Ez(this, Tz, function() {
            a.$a.forEach(function(d) {
                d.classList.toggle("live-edge", a.h.isAtLiveEdge)
            })
        })
    };
    _.h.attachedCallback = function() {
        this.hasAttribute("crossorigin") && "" !== this.getAttribute("crossorigin") && this.getMediaElement().setAttribute("crossorigin", this.getAttribute("crossorigin"));
        var a = Hz(this, "castSlideshowElement");
        this.H = new cast.framework.C.jn(a);
        "idle" == this.h.state && this.H.start()
    };
    _.h.connectedCallback = function() {
        this.attachedCallback()
    };
    _.h.getMediaElement = function() {
        return this.W
    };
    _.h.hq = function(a) {
        if (a.type !== YC) {
            if (a.type === Nz) {
                if ("loading" === this.sa && "buffering" === this.h.state) return;
                this.sa = this.h.state
            }
            this.j.setAttribute(a.field, a.value)
        }
    };
    vz.prototype.getMediaElement = vz.prototype.getMediaElement;
    window.customElements && window.customElements.define ? window.customElements.define("cast-media-player", vz) : document.registerElement("cast-media-player", {
        prototype: vz.prototype
    });
    cast.framework.C.Vr = vz;
    var bD = {},
        Oz = (bD.launching = "IDLE", bD.idle = "IDLE", bD.loading = "LOADING", bD.buffering = "BUFFERING", bD.paused = "PAUSED", bD.playing = "PLAYING", bD);
    _.r(Yz, Zp);
    Yz.prototype.Mi = function() {
        return new cy("__touch_controls__")
    };
    Yz.prototype.Mb = function(a) {
        fd("Cast.Controls.MediaBrowseContentSet", !!a);
        a = qi(a ? a : null);
        document.documentElement.dataset.castExtendedControls = a ? "true" : "";
        a && z("Cast.Controls.MediaBrowseAspectRatio", EA[a.targetAspectRatio] || 0);
        this.P && this.P.j.setAttribute("mediaBrowse", a ? "true" : "false");
        this.h.Mb(a)
    };
    _.r(Zz, fq);
    cast.framework.C.Ul = Zz;
    _.h = $z.prototype;
    _.h.la = function(a, b) {
        nq(this.h, a, b)
    };
    _.h.Mb = function(a) {
        var b = this;
        mq(this.h, function() {
            b.h.h.Mb(a)
        })
    };
    _.h.Bd = function() {
        this.h.Bd()
    };
    _.h.Sj = function() {
        id("Cast.Receiver.setScrubberVisibility")
    };
    _.h.Nq = function(a) {
        var b = this;
        fd("Cast.Receiver.setDcVisibility", a);
        mq(this.h, function() {
            var c = b.h.h.h.o;
            c.T = a;
            Bi(c)
        })
    };
    _.h.rg = function() {
        id("Cast.Controls.getSafeAreaHeight");
        return this.h.rg()
    };
    _.h.xg = function() {
        return this.h.xg()
    };
    _.h.dispose = function() {
        this.h.dispose()
    };
    _.w("cast.framework.ui.Controls", $z, void 0);
    $z.prototype.hasMediaControlsOverlay = $z.prototype.xg;
    $z.prototype.getSafeAreaHeight = $z.prototype.rg;
    $z.prototype.setDcVisibility = $z.prototype.Nq;
    $z.prototype.setScrubberVisibility = $z.prototype.Sj;
    $z.prototype.clearDefaultSlotAssignments = $z.prototype.Bd;
    $z.prototype.setBrowseContent = $z.prototype.Mb;
    $z.prototype.assignButton = $z.prototype.la;
    Ga($z);
    $z.getInstance = $z.L;
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", function() {
        $z.L()
    }) : $z.L();
    _.w("cast.framework.ui.ControlsButton", {
        QUEUE_NEXT: "queue-next",
        QUEUE_PREV: "queue-prev",
        SEEK_FORWARD_10: "seek-forward-10",
        SEEK_FORWARD_15: "seek-forward-15",
        SEEK_FORWARD_30: "seek-forward-30",
        SEEK_BACKWARD_10: "seek-backward-10",
        SEEK_BACKWARD_15: "seek-backward-15",
        SEEK_BACKWARD_30: "seek-backward-30",
        CAPTIONS: "captions",
        NO_BUTTON: "no-button",
        REPEAT: "repeat",
        SHUFFLE: "shuffle",
        LIKE: "like",
        LIKE_HEART: "like-heart",
        DISLIKE: "dislike",
        LYRICS: "lyrics",
        SLEEP_TIMER: "sleep-timer"
    }, void 0);
    _.w("cast.framework.ui.ControlsSlot", {
        SLOT_1: "slot-1",
        SLOT_2: "slot-2",
        SLOT_3: "slot-3",
        SLOT_4: "slot-4",
        SLOT_PRIMARY_1: "slot-primary-1",
        SLOT_PRIMARY_2: "slot-primary-2",
        SLOT_SECONDARY_1: "slot-secondary-1",
        SLOT_SECONDARY_2: "slot-secondary-2"
    }, void 0);
    aA.prototype.Vq = function(a, b) {
        this.j ? Jp(this.j.F, null) : this.h && xz(this.h.X, null);
        switch (a) {
            case "TOP_RIGHT_VIDEO_OVERLAY":
                this.j ? Jp(this.j.F, b) : this.h && xz(this.h.X, b);
                var c = cast.receiver.C.Ic.ri.TOP_RIGHT_VIDEO_OVERLAY
        }
        c && cast.receiver.C.Ic.vj(c)
    };
    _.w("cast.framework.ui.UiManager", aA, void 0);
    aA.prototype.setSecondaryImage = aA.prototype.Vq;
    _.w("cast.framework.ui.SecondaryImagePosition", {
        TOP_RIGHT_VIDEO_OVERLAY: "TOP_RIGHT_VIDEO_OVERLAY"
    }, void 0);
    Ga(aA);
    aA.getInstance = aA.L;
    _.w("cast.framework.LoggerLevel", {
        DEBUG: 0,
        VERBOSE: 500,
        INFO: 800,
        WARNING: 900,
        ERROR: 1E3,
        NONE: 1500
    }, void 0);
    _.h = bA.prototype;
    _.h.initialize = function() {
        return null
    };
    _.h.onCurrentItemIdChanged = function() {};
    _.h.nextItems = function() {
        return []
    };
    _.h.prevItems = function() {
        return []
    };
    _.h.fetchItems = function() {
        return []
    };
    _.h.onItemsInserted = function() {};
    _.h.onItemsRemoved = function() {};
    _.h.onItemsReordered = function() {};
    _.h.shuffle = function() {
        return null
    };
    _.h.Rd = function() {
        return null
    };
    _.w("cast.framework.QueueBase", bA, void 0);
    bA.prototype.unshuffle = bA.prototype.Rd;
    bA.prototype.shuffle = bA.prototype.shuffle;
    bA.prototype.onItemsReordered = bA.prototype.onItemsReordered;
    bA.prototype.onItemsRemoved = bA.prototype.onItemsRemoved;
    bA.prototype.onItemsInserted = bA.prototype.onItemsInserted;
    bA.prototype.fetchItems = bA.prototype.fetchItems;
    bA.prototype.prevItems = bA.prototype.prevItems;
    bA.prototype.nextItems = bA.prototype.nextItems;
    bA.prototype.onCurrentItemIdChanged = bA.prototype.onCurrentItemIdChanged;
    bA.prototype.initialize = bA.prototype.initialize;
})();