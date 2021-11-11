(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    k3GJ: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return F;
      });
      var a = n('wx14'),
        c = n('rePB'),
        r = n('ODXe'),
        o = n('U8pU'),
        i = n('Ff2n'),
        l = n('VTBJ'),
        u = n('q1tI'),
        f = n('TSYQ'),
        d = n.n(f),
        s = n('Zm9Q'),
        b = n('5Z9U'),
        v = n('6cGi'),
        h = n('KQm4'),
        m = n('wgJM'),
        j = n('t23M');
      function p(e) {
        var t = Object(u['useRef'])(),
          n = Object(u['useRef'])(!1);
        function a() {
          for (var a = arguments.length, c = new Array(a), r = 0; r < a; r++)
            c[r] = arguments[r];
          n.current ||
            (m['a'].cancel(t.current),
            (t.current = Object(m['a'])(function() {
              e.apply(void 0, c);
            })));
        }
        return (
          Object(u['useEffect'])(function() {
            return function() {
              (n.current = !0), m['a'].cancel(t.current);
            };
          }, []),
          a
        );
      }
      function O(e) {
        var t = Object(u['useRef'])([]),
          n = Object(u['useState'])({}),
          a = Object(r['default'])(n, 2),
          c = a[1],
          o = Object(u['useRef'])('function' === typeof e ? e() : e),
          i = p(function() {
            var e = o.current;
            t.current.forEach(function(t) {
              e = t(e);
            }),
              (t.current = []),
              (o.current = e),
              c({});
          });
        function l(e) {
          t.current.push(e), i();
        }
        return [o.current, l];
      }
      var y = n('4IlW');
      function g(e, t) {
        var n,
          a = e.prefixCls,
          r = e.id,
          o = e.active,
          i = e.tab,
          l = i.key,
          f = i.tab,
          s = i.disabled,
          b = i.closeIcon,
          v = e.closable,
          h = e.renderWrapper,
          m = e.removeAriaLabel,
          j = e.editable,
          p = e.onClick,
          O = e.onRemove,
          g = e.onFocus,
          E = e.style,
          w = ''.concat(a, '-tab');
        u['useEffect'](function() {
          return O;
        }, []);
        var k = j && !1 !== v && !s;
        function x(e) {
          s || p(e);
        }
        function C(e) {
          e.preventDefault(),
            e.stopPropagation(),
            j.onEdit('remove', { key: l, event: e });
        }
        var T = u['createElement'](
          'div',
          {
            key: l,
            ref: t,
            className: d()(
              w,
              ((n = {}),
              Object(c['a'])(n, ''.concat(w, '-with-remove'), k),
              Object(c['a'])(n, ''.concat(w, '-active'), o),
              Object(c['a'])(n, ''.concat(w, '-disabled'), s),
              n),
            ),
            style: E,
            onClick: x,
          },
          u['createElement'](
            'div',
            {
              role: 'tab',
              'aria-selected': o,
              id: r && ''.concat(r, '-tab-').concat(l),
              className: ''.concat(w, '-btn'),
              'aria-controls': r && ''.concat(r, '-panel-').concat(l),
              'aria-disabled': s,
              tabIndex: s ? null : 0,
              onClick: function(e) {
                e.stopPropagation(), x(e);
              },
              onKeyDown: function(e) {
                [y['a'].SPACE, y['a'].ENTER].includes(e.which) &&
                  (e.preventDefault(), x(e));
              },
              onFocus: g,
            },
            f,
          ),
          k &&
            u['createElement'](
              'button',
              {
                type: 'button',
                'aria-label': m || 'remove',
                tabIndex: 0,
                className: ''.concat(w, '-remove'),
                onClick: function(e) {
                  e.stopPropagation(), C(e);
                },
              },
              b || j.removeIcon || '\xd7',
            ),
        );
        return h ? h(T) : T;
      }
      var E = u['forwardRef'](g),
        w = { width: 0, height: 0, left: 0, top: 0 };
      function k(e, t, n) {
        return Object(u['useMemo'])(
          function() {
            for (
              var n,
                a = new Map(),
                c =
                  t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) ||
                  w,
                r = c.left + c.width,
                o = 0;
              o < e.length;
              o += 1
            ) {
              var i,
                u = e[o].key,
                f = t.get(u);
              if (!f)
                f =
                  t.get(
                    null === (i = e[o - 1]) || void 0 === i ? void 0 : i.key,
                  ) || w;
              var d = a.get(u) || Object(l['a'])({}, f);
              (d.right = r - d.left - d.width), a.set(u, d);
            }
            return a;
          },
          [
            e
              .map(function(e) {
                return e.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      var x = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function C(e, t, n, a, c) {
        var r,
          o,
          i,
          l = c.tabs,
          f = c.tabPosition,
          d = c.rtl;
        ['top', 'bottom'].includes(f)
          ? ((r = 'width'), (o = d ? 'right' : 'left'), (i = Math.abs(t.left)))
          : ((r = 'height'), (o = 'top'), (i = -t.top));
        var s = t[r],
          b = n[r],
          v = a[r],
          h = s;
        return (
          b + v > s && (h = s - v),
          Object(u['useMemo'])(
            function() {
              if (!l.length) return [0, 0];
              for (var t = l.length, n = t, a = 0; a < t; a += 1) {
                var c = e.get(l[a].key) || x;
                if (c[o] + c[r] > i + h) {
                  n = a - 1;
                  break;
                }
              }
              for (var u = 0, f = t - 1; f >= 0; f -= 1) {
                var d = e.get(l[f].key) || x;
                if (d[o] < i) {
                  u = f + 1;
                  break;
                }
              }
              return [u, n];
            },
            [
              e,
              i,
              h,
              f,
              l
                .map(function(e) {
                  return e.key;
                })
                .join('_'),
              d,
            ],
          )
        );
      }
      var T = n('1j5w'),
        S = n('eDIo');
      function N(e, t) {
        var n = e.prefixCls,
          a = e.editable,
          c = e.locale,
          r = e.style;
        return a && !1 !== a.showAdd
          ? u['createElement'](
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: r,
                'aria-label':
                  (null === c || void 0 === c ? void 0 : c.addAriaLabel) ||
                  'Add tab',
                onClick: function(e) {
                  a.onEdit('add', { event: e });
                },
              },
              a.addIcon || '+',
            )
          : null;
      }
      var R = u['forwardRef'](N);
      function I(e, t) {
        var n = e.prefixCls,
          a = e.id,
          o = e.tabs,
          i = e.locale,
          l = e.mobile,
          f = e.moreIcon,
          s = void 0 === f ? 'More' : f,
          b = e.moreTransitionName,
          v = e.style,
          h = e.className,
          m = e.editable,
          j = e.tabBarGutter,
          p = e.rtl,
          O = e.onTabClick,
          g = Object(u['useState'])(!1),
          E = Object(r['default'])(g, 2),
          w = E[0],
          k = E[1],
          x = Object(u['useState'])(null),
          C = Object(r['default'])(x, 2),
          N = C[0],
          I = C[1],
          P = ''.concat(a, '-more-popup'),
          M = ''.concat(n, '-dropdown'),
          B = null !== N ? ''.concat(P, '-').concat(N) : null,
          D = null === i || void 0 === i ? void 0 : i.dropdownAriaLabel,
          L = u['createElement'](
            T['f'],
            {
              onClick: function(e) {
                var t = e.key,
                  n = e.domEvent;
                O(t, n), k(!1);
              },
              id: P,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': B,
              selectedKeys: [N],
              'aria-label': void 0 !== D ? D : 'expanded dropdown',
            },
            o.map(function(e) {
              return u['createElement'](
                T['d'],
                {
                  key: e.key,
                  id: ''.concat(P, '-').concat(e.key),
                  role: 'option',
                  'aria-controls': a && ''.concat(a, '-panel-').concat(e.key),
                  disabled: e.disabled,
                },
                e.tab,
              );
            }),
          );
        function K(e) {
          for (
            var t = o.filter(function(e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function(e) {
                  return e.key === N;
                }) || 0,
              a = t.length,
              c = 0;
            c < a;
            c += 1
          ) {
            n = (n + e + a) % a;
            var r = t[n];
            if (!r.disabled) return void I(r.key);
          }
        }
        function A(e) {
          var t = e.which;
          if (w)
            switch (t) {
              case y['a'].UP:
                K(-1), e.preventDefault();
                break;
              case y['a'].DOWN:
                K(1), e.preventDefault();
                break;
              case y['a'].ESC:
                k(!1);
                break;
              case y['a'].SPACE:
              case y['a'].ENTER:
                null !== N && O(N, e);
                break;
            }
          else
            [y['a'].DOWN, y['a'].SPACE, y['a'].ENTER].includes(t) &&
              (k(!0), e.preventDefault());
        }
        Object(u['useEffect'])(
          function() {
            var e = document.getElementById(B);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [N],
        ),
          Object(u['useEffect'])(
            function() {
              w || I(null);
            },
            [w],
          );
        var W = Object(c['a'])({}, p ? 'marginRight' : 'marginLeft', j);
        o.length || ((W.visibility = 'hidden'), (W.order = 1));
        var G = d()(Object(c['a'])({}, ''.concat(M, '-rtl'), p)),
          V = l
            ? null
            : u['createElement'](
                S['a'],
                {
                  prefixCls: M,
                  overlay: L,
                  trigger: ['hover'],
                  visible: w,
                  transitionName: b,
                  onVisibleChange: k,
                  overlayClassName: G,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                u['createElement'](
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: W,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': P,
                    id: ''.concat(a, '-more'),
                    'aria-expanded': w,
                    onKeyDown: A,
                  },
                  s,
                ),
              );
        return u['createElement'](
          'div',
          {
            className: d()(''.concat(n, '-nav-operations'), h),
            style: v,
            ref: t,
          },
          V,
          u['createElement'](R, { prefixCls: n, locale: i, editable: m }),
        );
      }
      var P = u['forwardRef'](I),
        M = Object(u['createContext'])(null),
        B = 0.1,
        D = 0.01,
        L = 20,
        K = Math.pow(0.995, L);
      function A(e, t) {
        var n = Object(u['useState'])(),
          a = Object(r['default'])(n, 2),
          c = a[0],
          o = a[1],
          i = Object(u['useState'])(0),
          l = Object(r['default'])(i, 2),
          f = l[0],
          d = l[1],
          s = Object(u['useState'])(0),
          b = Object(r['default'])(s, 2),
          v = b[0],
          h = b[1],
          m = Object(u['useState'])(),
          j = Object(r['default'])(m, 2),
          p = j[0],
          O = j[1],
          y = Object(u['useRef'])();
        function g(e) {
          var t = e.touches[0],
            n = t.screenX,
            a = t.screenY;
          o({ x: n, y: a }), window.clearInterval(y.current);
        }
        function E(e) {
          if (c) {
            e.preventDefault();
            var n = e.touches[0],
              a = n.screenX,
              r = n.screenY;
            o({ x: a, y: r });
            var i = a - c.x,
              l = r - c.y;
            t(i, l);
            var u = Date.now();
            d(u), h(u - f), O({ x: i, y: l });
          }
        }
        function w() {
          if (c && (o(null), O(null), p)) {
            var e = p.x / v,
              n = p.y / v,
              a = Math.abs(e),
              r = Math.abs(n);
            if (Math.max(a, r) < B) return;
            var i = e,
              l = n;
            y.current = window.setInterval(function() {
              Math.abs(i) < D && Math.abs(l) < D
                ? window.clearInterval(y.current)
                : ((i *= K), (l *= K), t(i * L, l * L));
            }, L);
          }
        }
        var k = Object(u['useRef'])();
        function x(e) {
          var n = e.deltaX,
            a = e.deltaY,
            c = 0,
            r = Math.abs(n),
            o = Math.abs(a);
          r === o
            ? (c = 'x' === k.current ? n : a)
            : r > o
            ? ((c = n), (k.current = 'x'))
            : ((c = a), (k.current = 'y')),
            t(-c, -c) && e.preventDefault();
        }
        var C = Object(u['useRef'])(null);
        (C.current = {
          onTouchStart: g,
          onTouchMove: E,
          onTouchEnd: w,
          onWheel: x,
        }),
          u['useEffect'](function() {
            function t(e) {
              C.current.onTouchStart(e);
            }
            function n(e) {
              C.current.onTouchMove(e);
            }
            function a(e) {
              C.current.onTouchEnd(e);
            }
            function c(e) {
              C.current.onWheel(e);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', a, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', c),
              function() {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', a);
              }
            );
          }, []);
      }
      function W() {
        var e = Object(u['useRef'])(new Map());
        function t(t) {
          return (
            e.current.has(t) || e.current.set(t, u['createRef']()),
            e.current.get(t)
          );
        }
        function n(t) {
          e.current['delete'](t);
        }
        return [t, n];
      }
      function G(e, t) {
        var n = u['useRef'](e),
          a = u['useState']({}),
          c = Object(r['default'])(a, 2),
          o = c[1];
        function i(e) {
          var a = 'function' === typeof e ? e(n.current) : e;
          a !== n.current && t(a, n.current), (n.current = a), o({});
        }
        return [n.current, i];
      }
      var V = function(e) {
        var t,
          n = e.position,
          a = e.prefixCls,
          c = e.extra;
        if (!c) return null;
        var r = {};
        return (
          c && 'object' === Object(o['a'])(c) && !u['isValidElement'](c)
            ? (r = c)
            : (r.right = c),
          'right' === n && (t = r.right),
          'left' === n && (t = r.left),
          t
            ? u['createElement'](
                'div',
                { className: ''.concat(a, '-extra-content') },
                t,
              )
            : null
        );
      };
      function H(e, t) {
        var n,
          o = u['useContext'](M),
          i = o.prefixCls,
          f = o.tabs,
          s = e.className,
          b = e.style,
          v = e.id,
          y = e.animated,
          g = e.activeKey,
          w = e.rtl,
          x = e.extra,
          T = e.editable,
          S = e.locale,
          N = e.tabPosition,
          I = e.tabBarGutter,
          B = e.children,
          D = e.onTabClick,
          L = e.onTabScroll,
          K = Object(u['useRef'])(),
          H = Object(u['useRef'])(),
          J = Object(u['useRef'])(),
          Y = Object(u['useRef'])(),
          F = W(),
          U = Object(r['default'])(F, 2),
          X = U[0],
          _ = U[1],
          Q = 'top' === N || 'bottom' === N,
          z = G(0, function(e, t) {
            Q && L && L({ direction: e > t ? 'left' : 'right' });
          }),
          Z = Object(r['default'])(z, 2),
          q = Z[0],
          $ = Z[1],
          ee = G(0, function(e, t) {
            !Q && L && L({ direction: e > t ? 'top' : 'bottom' });
          }),
          te = Object(r['default'])(ee, 2),
          ne = te[0],
          ae = te[1],
          ce = Object(u['useState'])(0),
          re = Object(r['default'])(ce, 2),
          oe = re[0],
          ie = re[1],
          le = Object(u['useState'])(0),
          ue = Object(r['default'])(le, 2),
          fe = ue[0],
          de = ue[1],
          se = Object(u['useState'])(0),
          be = Object(r['default'])(se, 2),
          ve = be[0],
          he = be[1],
          me = Object(u['useState'])(0),
          je = Object(r['default'])(me, 2),
          pe = je[0],
          Oe = je[1],
          ye = Object(u['useState'])(null),
          ge = Object(r['default'])(ye, 2),
          Ee = ge[0],
          we = ge[1],
          ke = Object(u['useState'])(null),
          xe = Object(r['default'])(ke, 2),
          Ce = xe[0],
          Te = xe[1],
          Se = Object(u['useState'])(0),
          Ne = Object(r['default'])(Se, 2),
          Re = Ne[0],
          Ie = Ne[1],
          Pe = Object(u['useState'])(0),
          Me = Object(r['default'])(Pe, 2),
          Be = Me[0],
          De = Me[1],
          Le = O(new Map()),
          Ke = Object(r['default'])(Le, 2),
          Ae = Ke[0],
          We = Ke[1],
          Ge = k(f, Ae, oe),
          Ve = ''.concat(i, '-nav-operations-hidden'),
          He = 0,
          Je = 0;
        function Ye(e) {
          return e < He ? He : e > Je ? Je : e;
        }
        Q
          ? w
            ? ((He = 0), (Je = Math.max(0, oe - Ee)))
            : ((He = Math.min(0, Ee - oe)), (Je = 0))
          : ((He = Math.min(0, Ce - fe)), (Je = 0));
        var Fe = Object(u['useRef'])(),
          Ue = Object(u['useState'])(),
          Xe = Object(r['default'])(Ue, 2),
          _e = Xe[0],
          Qe = Xe[1];
        function ze() {
          Qe(Date.now());
        }
        function Ze() {
          window.clearTimeout(Fe.current);
        }
        function qe() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : g,
            t = Ge.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (Q) {
            var n = q;
            w
              ? t.right < q
                ? (n = t.right)
                : t.right + t.width > q + Ee && (n = t.right + t.width - Ee)
              : t.left < -q
              ? (n = -t.left)
              : t.left + t.width > -q + Ee && (n = -(t.left + t.width - Ee)),
              ae(0),
              $(Ye(n));
          } else {
            var a = ne;
            t.top < -ne
              ? (a = -t.top)
              : t.top + t.height > -ne + Ce && (a = -(t.top + t.height - Ce)),
              $(0),
              ae(Ye(a));
          }
        }
        A(K, function(e, t) {
          function n(e, t) {
            e(function(e) {
              var n = Ye(e + t);
              return n;
            });
          }
          if (Q) {
            if (Ee >= oe) return !1;
            n($, e);
          } else {
            if (Ce >= fe) return !1;
            n(ae, t);
          }
          return Ze(), ze(), !0;
        }),
          Object(u['useEffect'])(
            function() {
              return (
                Ze(),
                _e &&
                  (Fe.current = window.setTimeout(function() {
                    Qe(0);
                  }, 100)),
                Ze
              );
            },
            [_e],
          );
        var $e = C(
            Ge,
            { width: Ee, height: Ce, left: q, top: ne },
            { width: ve, height: pe },
            { width: Re, height: Be },
            Object(l['a'])(Object(l['a'])({}, e), {}, { tabs: f }),
          ),
          et = Object(r['default'])($e, 2),
          tt = et[0],
          nt = et[1],
          at = {};
        'top' === N || 'bottom' === N
          ? (at[w ? 'marginRight' : 'marginLeft'] = I)
          : (at.marginTop = I);
        var ct = f.map(function(e, t) {
            var n = e.key;
            return u['createElement'](E, {
              id: v,
              prefixCls: i,
              key: n,
              tab: e,
              style: 0 === t ? void 0 : at,
              closable: e.closable,
              editable: T,
              active: n === g,
              renderWrapper: B,
              removeAriaLabel:
                null === S || void 0 === S ? void 0 : S.removeAriaLabel,
              ref: X(n),
              onClick: function(e) {
                D(n, e);
              },
              onRemove: function() {
                _(n);
              },
              onFocus: function() {
                qe(n),
                  ze(),
                  K.current &&
                    (w || (K.current.scrollLeft = 0),
                    (K.current.scrollTop = 0));
              },
            });
          }),
          rt = p(function() {
            var e,
              t,
              n,
              a,
              c,
              r,
              o,
              i,
              l,
              u =
                (null === (e = K.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth) || 0,
              d =
                (null === (t = K.current) || void 0 === t
                  ? void 0
                  : t.offsetHeight) || 0,
              s =
                (null === (n = Y.current) || void 0 === n
                  ? void 0
                  : n.offsetWidth) || 0,
              b =
                (null === (a = Y.current) || void 0 === a
                  ? void 0
                  : a.offsetHeight) || 0,
              v =
                (null === (c = J.current) || void 0 === c
                  ? void 0
                  : c.offsetWidth) || 0,
              h =
                (null === (r = J.current) || void 0 === r
                  ? void 0
                  : r.offsetHeight) || 0;
            we(u), Te(d), Ie(s), De(b);
            var m =
                ((null === (o = H.current) || void 0 === o
                  ? void 0
                  : o.offsetWidth) || 0) - s,
              j =
                ((null === (i = H.current) || void 0 === i
                  ? void 0
                  : i.offsetHeight) || 0) - b;
            ie(m), de(j);
            var p =
              null === (l = J.current) || void 0 === l
                ? void 0
                : l.className.includes(Ve);
            he(m - (p ? 0 : v)),
              Oe(j - (p ? 0 : h)),
              We(function() {
                var e = new Map();
                return (
                  f.forEach(function(t) {
                    var n = t.key,
                      a = X(n).current;
                    a &&
                      e.set(n, {
                        width: a.offsetWidth,
                        height: a.offsetHeight,
                        left: a.offsetLeft,
                        top: a.offsetTop,
                      });
                  }),
                  e
                );
              });
          }),
          ot = f.slice(0, tt),
          it = f.slice(nt + 1),
          lt = [].concat(Object(h['a'])(ot), Object(h['a'])(it)),
          ut = Object(u['useState'])(),
          ft = Object(r['default'])(ut, 2),
          dt = ft[0],
          st = ft[1],
          bt = Ge.get(g),
          vt = Object(u['useRef'])();
        function ht() {
          m['a'].cancel(vt.current);
        }
        Object(u['useEffect'])(
          function() {
            var e = {};
            return (
              bt &&
                (Q
                  ? (w ? (e.right = bt.right) : (e.left = bt.left),
                    (e.width = bt.width))
                  : ((e.top = bt.top), (e.height = bt.height))),
              ht(),
              (vt.current = Object(m['a'])(function() {
                st(e);
              })),
              ht
            );
          },
          [bt, Q, w],
        ),
          Object(u['useEffect'])(
            function() {
              qe();
            },
            [g, bt, Ge, Q],
          ),
          Object(u['useEffect'])(
            function() {
              rt();
            },
            [
              w,
              I,
              g,
              f
                .map(function(e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
        var mt,
          jt,
          pt,
          Ot,
          yt = !!lt.length,
          gt = ''.concat(i, '-nav-wrap');
        return (
          Q
            ? w
              ? ((jt = q > 0), (mt = q + Ee < oe))
              : ((mt = q < 0), (jt = -q + Ee < oe))
            : ((pt = ne < 0), (Ot = -ne + Ce < fe)),
          u['createElement'](
            'div',
            {
              ref: t,
              role: 'tablist',
              className: d()(''.concat(i, '-nav'), s),
              style: b,
              onKeyDown: function() {
                ze();
              },
            },
            u['createElement'](V, { position: 'left', extra: x, prefixCls: i }),
            u['createElement'](
              j['a'],
              { onResize: rt },
              u['createElement'](
                'div',
                {
                  className: d()(
                    gt,
                    ((n = {}),
                    Object(c['a'])(n, ''.concat(gt, '-ping-left'), mt),
                    Object(c['a'])(n, ''.concat(gt, '-ping-right'), jt),
                    Object(c['a'])(n, ''.concat(gt, '-ping-top'), pt),
                    Object(c['a'])(n, ''.concat(gt, '-ping-bottom'), Ot),
                    n),
                  ),
                  ref: K,
                },
                u['createElement'](
                  j['a'],
                  { onResize: rt },
                  u['createElement'](
                    'div',
                    {
                      ref: H,
                      className: ''.concat(i, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(q, 'px, ')
                          .concat(ne, 'px)'),
                        transition: _e ? 'none' : void 0,
                      },
                    },
                    ct,
                    u['createElement'](R, {
                      ref: Y,
                      prefixCls: i,
                      locale: S,
                      editable: T,
                      style: Object(l['a'])(
                        Object(l['a'])({}, 0 === ct.length ? void 0 : at),
                        {},
                        { visibility: yt ? 'hidden' : null },
                      ),
                    }),
                    u['createElement']('div', {
                      className: d()(
                        ''.concat(i, '-ink-bar'),
                        Object(c['a'])(
                          {},
                          ''.concat(i, '-ink-bar-animated'),
                          y.inkBar,
                        ),
                      ),
                      style: dt,
                    }),
                  ),
                ),
              ),
            ),
            u['createElement'](
              P,
              Object(a['default'])({}, e, {
                ref: J,
                prefixCls: i,
                tabs: lt,
                className: !yt && Ve,
              }),
            ),
            u['createElement'](V, {
              position: 'right',
              extra: x,
              prefixCls: i,
            }),
          )
        );
      }
      var J = u['forwardRef'](H);
      function Y(e) {
        var t = e.id,
          n = e.activeKey,
          a = e.animated,
          r = e.tabPosition,
          o = e.rtl,
          i = e.destroyInactiveTabPane,
          l = u['useContext'](M),
          f = l.prefixCls,
          s = l.tabs,
          b = a.tabPane,
          v = s.findIndex(function(e) {
            return e.key === n;
          });
        return u['createElement'](
          'div',
          { className: d()(''.concat(f, '-content-holder')) },
          u['createElement'](
            'div',
            {
              className: d()(
                ''.concat(f, '-content'),
                ''.concat(f, '-content-').concat(r),
                Object(c['a'])({}, ''.concat(f, '-content-animated'), b),
              ),
              style:
                v && b
                  ? Object(c['a'])(
                      {},
                      o ? 'marginRight' : 'marginLeft',
                      '-'.concat(v, '00%'),
                    )
                  : null,
            },
            s.map(function(e) {
              return u['cloneElement'](e.node, {
                key: e.key,
                prefixCls: f,
                tabKey: e.key,
                id: t,
                animated: b,
                active: e.key === n,
                destroyInactiveTabPane: i,
              });
            }),
          ),
        );
      }
      function F(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          a = e.className,
          c = e.style,
          o = e.id,
          i = e.active,
          f = e.animated,
          s = e.destroyInactiveTabPane,
          b = e.tabKey,
          v = e.children,
          h = u['useState'](n),
          m = Object(r['default'])(h, 2),
          j = m[0],
          p = m[1];
        u['useEffect'](
          function() {
            i ? p(!0) : s && p(!1);
          },
          [i, s],
        );
        var O = {};
        return (
          i ||
            (f
              ? ((O.visibility = 'hidden'),
                (O.height = 0),
                (O.overflowY = 'hidden'))
              : (O.display = 'none')),
          u['createElement'](
            'div',
            {
              id: o && ''.concat(o, '-panel-').concat(b),
              role: 'tabpanel',
              tabIndex: i ? 0 : -1,
              'aria-labelledby': o && ''.concat(o, '-tab-').concat(b),
              'aria-hidden': !i,
              style: Object(l['a'])(Object(l['a'])({}, O), c),
              className: d()(
                ''.concat(t, '-tabpane'),
                i && ''.concat(t, '-tabpane-active'),
                a,
              ),
            },
            (i || j || n) && v,
          )
        );
      }
      var U = [
          'id',
          'prefixCls',
          'className',
          'children',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
        ],
        X = 0;
      function _(e) {
        return Object(s['a'])(e)
          .map(function(e) {
            if (u['isValidElement'](e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0;
              return Object(l['a'])(
                Object(l['a'])({ key: t }, e.props),
                {},
                { node: e },
              );
            }
            return null;
          })
          .filter(function(e) {
            return e;
          });
      }
      function Q(e, t) {
        var n,
          f,
          s = e.id,
          h = e.prefixCls,
          m = void 0 === h ? 'rc-tabs' : h,
          j = e.className,
          p = e.children,
          O = e.direction,
          y = e.activeKey,
          g = e.defaultActiveKey,
          E = e.editable,
          w = e.animated,
          k = void 0 === w ? { inkBar: !0, tabPane: !1 } : w,
          x = e.tabPosition,
          C = void 0 === x ? 'top' : x,
          T = e.tabBarGutter,
          S = e.tabBarStyle,
          N = e.tabBarExtraContent,
          R = e.locale,
          I = e.moreIcon,
          P = e.moreTransitionName,
          B = e.destroyInactiveTabPane,
          D = e.renderTabBar,
          L = e.onChange,
          K = e.onTabClick,
          A = e.onTabScroll,
          W = Object(i['a'])(e, U),
          G = _(p),
          V = 'rtl' === O;
        f =
          !1 === k
            ? { inkBar: !1, tabPane: !1 }
            : !0 === k
            ? { inkBar: !0, tabPane: !0 }
            : Object(l['a'])(
                { inkBar: !0, tabPane: !1 },
                'object' === Object(o['a'])(k) ? k : {},
              );
        var H = Object(u['useState'])(!1),
          F = Object(r['default'])(H, 2),
          Q = F[0],
          z = F[1];
        Object(u['useEffect'])(function() {
          z(Object(b['a'])());
        }, []);
        var Z = Object(v['a'])(
            function() {
              var e;
              return null === (e = G[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: y, defaultValue: g },
          ),
          q = Object(r['default'])(Z, 2),
          $ = q[0],
          ee = q[1],
          te = Object(u['useState'])(function() {
            return G.findIndex(function(e) {
              return e.key === $;
            });
          }),
          ne = Object(r['default'])(te, 2),
          ae = ne[0],
          ce = ne[1];
        Object(u['useEffect'])(
          function() {
            var e,
              t = G.findIndex(function(e) {
                return e.key === $;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(ae, G.length - 1))),
              ee(null === (e = G[t]) || void 0 === e ? void 0 : e.key));
            ce(t);
          },
          [
            G.map(function(e) {
              return e.key;
            }).join('_'),
            $,
            ae,
          ],
        );
        var re = Object(v['a'])(null, { value: s }),
          oe = Object(r['default'])(re, 2),
          ie = oe[0],
          le = oe[1],
          ue = C;
        function fe(e, t) {
          null === K || void 0 === K || K(e, t),
            ee(e),
            null === L || void 0 === L || L(e);
        }
        Q && !['left', 'right'].includes(C) && (ue = 'top'),
          Object(u['useEffect'])(function() {
            s || (le('rc-tabs-'.concat(X)), (X += 1));
          }, []);
        var de,
          se = {
            id: ie,
            activeKey: $,
            animated: f,
            tabPosition: ue,
            rtl: V,
            mobile: Q,
          },
          be = Object(l['a'])(
            Object(l['a'])({}, se),
            {},
            {
              editable: E,
              locale: R,
              moreIcon: I,
              moreTransitionName: P,
              tabBarGutter: T,
              onTabClick: fe,
              onTabScroll: A,
              extra: N,
              style: S,
              panes: p,
            },
          );
        return (
          (de = D ? D(be, J) : u['createElement'](J, be)),
          u['createElement'](
            M.Provider,
            { value: { tabs: G, prefixCls: m } },
            u['createElement'](
              'div',
              Object(a['default'])(
                {
                  ref: t,
                  id: s,
                  className: d()(
                    m,
                    ''.concat(m, '-').concat(ue),
                    ((n = {}),
                    Object(c['a'])(n, ''.concat(m, '-mobile'), Q),
                    Object(c['a'])(n, ''.concat(m, '-editable'), E),
                    Object(c['a'])(n, ''.concat(m, '-rtl'), V),
                    n),
                    j,
                  ),
                },
                W,
              ),
              de,
              u['createElement'](
                Y,
                Object(a['default'])({ destroyInactiveTabPane: B }, se, {
                  animated: f,
                }),
              ),
            ),
          )
        );
      }
      var z = u['forwardRef'](Q);
      z.TabPane = F;
      var Z = z;
      t['b'] = Z;
    },
  },
]);
