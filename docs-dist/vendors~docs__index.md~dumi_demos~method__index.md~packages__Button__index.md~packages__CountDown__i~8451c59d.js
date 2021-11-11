(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    '55Ip': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return m;
      }),
        n.d(e, 'b', function() {
          return O;
        });
      var r = n('Ty5D'),
        o = n('dI71'),
        i = n('q1tI'),
        u = n.n(i),
        a = n('YS25'),
        c = (n('17x9'), n('wx14')),
        l = n('zLVn'),
        f = n('9R94');
      u.a.Component;
      u.a.Component;
      var s = function(t, e) {
          return 'function' === typeof t ? t(e) : t;
        },
        d = function(t, e) {
          return 'string' === typeof t ? Object(a['c'])(t, null, null, e) : t;
        },
        p = function(t) {
          return t;
        },
        y = u.a.forwardRef;
      function v(t) {
        return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
      }
      'undefined' === typeof y && (y = p);
      var h = y(function(t, e) {
        var n = t.innerRef,
          r = t.navigate,
          o = t.onClick,
          i = Object(l['a'])(t, ['innerRef', 'navigate', 'onClick']),
          a = i.target,
          f = Object(c['default'])({}, i, {
            onClick: function(t) {
              try {
                o && o(t);
              } catch (e) {
                throw (t.preventDefault(), e);
              }
              t.defaultPrevented ||
                0 !== t.button ||
                (a && '_self' !== a) ||
                v(t) ||
                (t.preventDefault(), r());
            },
          });
        return (f.ref = (p !== y && e) || n), u.a.createElement('a', f);
      });
      var m = y(function(t, e) {
          var n = t.component,
            o = void 0 === n ? h : n,
            i = t.replace,
            a = t.to,
            v = t.innerRef,
            m = Object(l['a'])(t, ['component', 'replace', 'to', 'innerRef']);
          return u.a.createElement(r['h'].Consumer, null, function(t) {
            t || Object(f['a'])(!1);
            var n = t.history,
              r = d(s(a, t.location), t.location),
              l = r ? n.createHref(r) : '',
              h = Object(c['default'])({}, m, {
                href: l,
                navigate: function() {
                  var e = s(a, t.location),
                    r = i ? n.replace : n.push;
                  r(e);
                },
              });
            return (
              p !== y ? (h.ref = e || v) : (h.innerRef = v),
              u.a.createElement(o, h)
            );
          });
        }),
        b = function(t) {
          return t;
        },
        g = u.a.forwardRef;
      function w() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return e
          .filter(function(t) {
            return t;
          })
          .join(' ');
      }
      'undefined' === typeof g && (g = b);
      var O = g(function(t, e) {
        var n = t['aria-current'],
          o = void 0 === n ? 'page' : n,
          i = t.activeClassName,
          a = void 0 === i ? 'active' : i,
          p = t.activeStyle,
          y = t.className,
          v = t.exact,
          h = t.isActive,
          O = t.location,
          j = t.sensitive,
          A = t.strict,
          k = t.style,
          S = t.to,
          _ = t.innerRef,
          x = Object(l['a'])(t, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return u.a.createElement(r['h'].Consumer, null, function(t) {
          t || Object(f['a'])(!1);
          var n = O || t.location,
            i = d(s(S, n), n),
            l = i.pathname,
            E = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            P = E
              ? Object(r['i'])(n.pathname, {
                  path: E,
                  exact: v,
                  sensitive: j,
                  strict: A,
                })
              : null,
            C = !!(h ? h(P, n) : P),
            I = C ? w(y, a) : y,
            M = C ? Object(c['default'])({}, k, {}, p) : k,
            T = Object(c['default'])(
              {
                'aria-current': (C && o) || null,
                className: I,
                style: M,
                to: i,
              },
              x,
            );
          return (
            b !== g ? (T.ref = e || _) : (T.innerRef = _),
            u.a.createElement(m, T)
          );
        });
      });
    },
    '59ht': function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = e.LinkWrapper = void 0);
      var r = u(n('q1tI')),
        o = n('LtsZ'),
        i = ['to'];
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a() {
        return (
          (a =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          a.apply(this, arguments)
        );
      }
      function c(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = l(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function l(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      var f = function(t) {
        return function(e) {
          var n = e.to,
            o = c(e, i),
            u = /^(\w+:)?\/\//.test(n) || !n,
            l = r['default'].isValidElement(o.children);
          return r['default'].createElement(
            t,
            a(
              {
                to: n || '',
                component: u
                  ? function() {
                      return r['default'].createElement(
                        'a',
                        {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          href: n,
                        },
                        o.children,
                        n &&
                          !l &&
                          r['default'].createElement(
                            'svg',
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              'aria-hidden': 'true',
                              x: '0px',
                              y: '0px',
                              viewBox: '0 0 100 100',
                              width: '15',
                              height: '15',
                              className: '__dumi-default-external-link-icon',
                            },
                            r['default'].createElement('path', {
                              fill: 'currentColor',
                              d:
                                'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                            }),
                            r['default'].createElement('polygon', {
                              fill: 'currentColor',
                              points:
                                '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                            }),
                          ),
                      );
                    }
                  : void 0,
              },
              o,
              u
                ? {}
                : {
                    onClick: function() {
                      var t;
                      window.scrollTo({ top: 0 });
                      for (
                        var e = arguments.length, n = new Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      null === (t = o.onClick) ||
                        void 0 === t ||
                        t.apply(this, n);
                    },
                  },
            ),
          );
        };
      };
      e.LinkWrapper = f;
      var s = f(o.Link);
      e['default'] = s;
    },
    '6xEa': function(t, e, n) {
      var r,
        o = (function() {
          var t = String.fromCharCode,
            e =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            n =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            r = {};
          function o(t, e) {
            if (!r[t]) {
              r[t] = {};
              for (var n = 0; n < t.length; n++) r[t][t.charAt(n)] = n;
            }
            return r[t][e];
          }
          var i = {
            compressToBase64: function(t) {
              if (null == t) return '';
              var n = i._compress(t, 6, function(t) {
                return e.charAt(t);
              });
              switch (n.length % 4) {
                default:
                case 0:
                  return n;
                case 1:
                  return n + '===';
                case 2:
                  return n + '==';
                case 3:
                  return n + '=';
              }
            },
            decompressFromBase64: function(t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : i._decompress(t.length, 32, function(n) {
                    return o(e, t.charAt(n));
                  });
            },
            compressToUTF16: function(e) {
              return null == e
                ? ''
                : i._compress(e, 15, function(e) {
                    return t(e + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function(t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : i._decompress(t.length, 16384, function(e) {
                    return t.charCodeAt(e) - 32;
                  });
            },
            compressToUint8Array: function(t) {
              for (
                var e = i.compress(t),
                  n = new Uint8Array(2 * e.length),
                  r = 0,
                  o = e.length;
                r < o;
                r++
              ) {
                var u = e.charCodeAt(r);
                (n[2 * r] = u >>> 8), (n[2 * r + 1] = u % 256);
              }
              return n;
            },
            decompressFromUint8Array: function(e) {
              if (null === e || void 0 === e) return i.decompress(e);
              for (
                var n = new Array(e.length / 2), r = 0, o = n.length;
                r < o;
                r++
              )
                n[r] = 256 * e[2 * r] + e[2 * r + 1];
              var u = [];
              return (
                n.forEach(function(e) {
                  u.push(t(e));
                }),
                i.decompress(u.join(''))
              );
            },
            compressToEncodedURIComponent: function(t) {
              return null == t
                ? ''
                : i._compress(t, 6, function(t) {
                    return n.charAt(t);
                  });
            },
            decompressFromEncodedURIComponent: function(t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : ((t = t.replace(/ /g, '+')),
                  i._decompress(t.length, 32, function(e) {
                    return o(n, t.charAt(e));
                  }));
            },
            compress: function(e) {
              return i._compress(e, 16, function(e) {
                return t(e);
              });
            },
            _compress: function(t, e, n) {
              if (null == t) return '';
              var r,
                o,
                i,
                u = {},
                a = {},
                c = '',
                l = '',
                f = '',
                s = 2,
                d = 3,
                p = 2,
                y = [],
                v = 0,
                h = 0;
              for (i = 0; i < t.length; i += 1)
                if (
                  ((c = t.charAt(i)),
                  Object.prototype.hasOwnProperty.call(u, c) ||
                    ((u[c] = d++), (a[c] = !0)),
                  (l = f + c),
                  Object.prototype.hasOwnProperty.call(u, l))
                )
                  f = l;
                else {
                  if (Object.prototype.hasOwnProperty.call(a, f)) {
                    if (f.charCodeAt(0) < 256) {
                      for (r = 0; r < p; r++)
                        (v <<= 1),
                          h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++;
                      for (o = f.charCodeAt(0), r = 0; r < 8; r++)
                        (v = (v << 1) | (1 & o)),
                          h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++,
                          (o >>= 1);
                    } else {
                      for (o = 1, r = 0; r < p; r++)
                        (v = (v << 1) | o),
                          h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++,
                          (o = 0);
                      for (o = f.charCodeAt(0), r = 0; r < 16; r++)
                        (v = (v << 1) | (1 & o)),
                          h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++,
                          (o >>= 1);
                    }
                    s--, 0 == s && ((s = Math.pow(2, p)), p++), delete a[f];
                  } else
                    for (o = u[f], r = 0; r < p; r++)
                      (v = (v << 1) | (1 & o)),
                        h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++,
                        (o >>= 1);
                  s--,
                    0 == s && ((s = Math.pow(2, p)), p++),
                    (u[l] = d++),
                    (f = String(c));
                }
              if ('' !== f) {
                if (Object.prototype.hasOwnProperty.call(a, f)) {
                  if (f.charCodeAt(0) < 256) {
                    for (r = 0; r < p; r++)
                      (v <<= 1),
                        h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++;
                    for (o = f.charCodeAt(0), r = 0; r < 8; r++)
                      (v = (v << 1) | (1 & o)),
                        h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++,
                        (o >>= 1);
                  } else {
                    for (o = 1, r = 0; r < p; r++)
                      (v = (v << 1) | o),
                        h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++,
                        (o = 0);
                    for (o = f.charCodeAt(0), r = 0; r < 16; r++)
                      (v = (v << 1) | (1 & o)),
                        h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++,
                        (o >>= 1);
                  }
                  s--, 0 == s && ((s = Math.pow(2, p)), p++), delete a[f];
                } else
                  for (o = u[f], r = 0; r < p; r++)
                    (v = (v << 1) | (1 & o)),
                      h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++,
                      (o >>= 1);
                s--, 0 == s && ((s = Math.pow(2, p)), p++);
              }
              for (o = 2, r = 0; r < p; r++)
                (v = (v << 1) | (1 & o)),
                  h == e - 1 ? ((h = 0), y.push(n(v)), (v = 0)) : h++,
                  (o >>= 1);
              while (1) {
                if (((v <<= 1), h == e - 1)) {
                  y.push(n(v));
                  break;
                }
                h++;
              }
              return y.join('');
            },
            decompress: function(t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : i._decompress(t.length, 32768, function(e) {
                    return t.charCodeAt(e);
                  });
            },
            _decompress: function(e, n, r) {
              var o,
                i,
                u,
                a,
                c,
                l,
                f,
                s = [],
                d = 4,
                p = 4,
                y = 3,
                v = '',
                h = [],
                m = { val: r(0), position: n, index: 1 };
              for (o = 0; o < 3; o += 1) s[o] = o;
              (u = 0), (c = Math.pow(2, 2)), (l = 1);
              while (l != c)
                (a = m.val & m.position),
                  (m.position >>= 1),
                  0 == m.position && ((m.position = n), (m.val = r(m.index++))),
                  (u |= (a > 0 ? 1 : 0) * l),
                  (l <<= 1);
              switch (u) {
                case 0:
                  (u = 0), (c = Math.pow(2, 8)), (l = 1);
                  while (l != c)
                    (a = m.val & m.position),
                      (m.position >>= 1),
                      0 == m.position &&
                        ((m.position = n), (m.val = r(m.index++))),
                      (u |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  f = t(u);
                  break;
                case 1:
                  (u = 0), (c = Math.pow(2, 16)), (l = 1);
                  while (l != c)
                    (a = m.val & m.position),
                      (m.position >>= 1),
                      0 == m.position &&
                        ((m.position = n), (m.val = r(m.index++))),
                      (u |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  f = t(u);
                  break;
                case 2:
                  return '';
              }
              (s[3] = f), (i = f), h.push(f);
              while (1) {
                if (m.index > e) return '';
                (u = 0), (c = Math.pow(2, y)), (l = 1);
                while (l != c)
                  (a = m.val & m.position),
                    (m.position >>= 1),
                    0 == m.position &&
                      ((m.position = n), (m.val = r(m.index++))),
                    (u |= (a > 0 ? 1 : 0) * l),
                    (l <<= 1);
                switch ((f = u)) {
                  case 0:
                    (u = 0), (c = Math.pow(2, 8)), (l = 1);
                    while (l != c)
                      (a = m.val & m.position),
                        (m.position >>= 1),
                        0 == m.position &&
                          ((m.position = n), (m.val = r(m.index++))),
                        (u |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (s[p++] = t(u)), (f = p - 1), d--;
                    break;
                  case 1:
                    (u = 0), (c = Math.pow(2, 16)), (l = 1);
                    while (l != c)
                      (a = m.val & m.position),
                        (m.position >>= 1),
                        0 == m.position &&
                          ((m.position = n), (m.val = r(m.index++))),
                        (u |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (s[p++] = t(u)), (f = p - 1), d--;
                    break;
                  case 2:
                    return h.join('');
                }
                if ((0 == d && ((d = Math.pow(2, y)), y++), s[f])) v = s[f];
                else {
                  if (f !== p) return null;
                  v = i + i.charAt(0);
                }
                h.push(v),
                  (s[p++] = i + v.charAt(0)),
                  d--,
                  (i = v),
                  0 == d && ((d = Math.pow(2, y)), y++);
              }
            },
          };
          return i;
        })();
      (r = function() {
        return o;
      }.call(e, n, e, t)),
        void 0 === r || (t.exports = r);
    },
    '77hZ': function(t, e, n) {
      'use strict';
      function r() {
        var t = n('q1tI');
        return (
          (r = function() {
            return t;
          }),
          t
        );
      }
      function o(t, e) {
        return l(t) || c(t, e) || u(t, e) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(t, e) {
        if (t) {
          if ('string' === typeof t) return a(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? a(t, e)
              : void 0
          );
        }
      }
      function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function c(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function l(t) {
        if (Array.isArray(t)) return t;
      }
      function f(t, e, n) {
        var r,
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (i < e.length) {
          var u = e[i],
            a = function() {
              return f(t, e, n, i + 1);
            },
            c = u.match(/^([^:]+):?(.*)$/) || [],
            l = o(c, 3),
            s = l[1],
            d = l[2];
          switch (s) {
            case 'autoplay':
              a();
              break;
            case 'click':
              var p = d.match(/^(global\()?(.+?)\)?$/) || [],
                y = o(p, 3),
                v = y[1],
                h = y[2],
                m = v ? document : t;
              null === (r = m.querySelector(h)) || void 0 === r || r.click(),
                a();
              break;
            case 'timeout':
              setTimeout(a, Number(d));
              break;
            case 'capture':
              window.postMessage(
                { type: 'dumi:capture-element', value: d },
                '*',
              ),
                a();
              break;
            default:
              console.warn(
                "[dumi: motion] unknown motion '".concat(u, "', skip."),
              ),
                a();
          }
        } else n();
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var s = function(t, e) {
        var n = (0, r().useState)(!1),
          i = o(n, 2),
          u = i[0],
          a = i[1],
          c = (0, r().useCallback)(
            function() {
              u ||
                (f(e, t, function() {
                  a(!1);
                }),
                a(!0));
            },
            [t, e, u],
          );
        return (
          (0, r().useEffect)(
            function() {
              'autoplay' === t[0] && e && c();
            },
            [t, e],
          ),
          [c, u]
        );
      };
      e['default'] = s;
    },
    DW3L: function(t, e, n) {
      'use strict';
      var r = n('lwsE'),
        o = n('W8MJ');
      function i() {
        var t = n('q1tI');
        return (
          (i = function() {
            return t;
          }),
          t
        );
      }
      function u(t, e) {
        return s(t) || f(t, e) || c(t, e) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(t, e) {
        if (t) {
          if ('string' === typeof t) return l(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(t, e)
              : void 0
          );
        }
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function f(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(t) {
        if (Array.isArray(t)) return t;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var d,
        p = 'data-prefers-color',
        y = 'dumi:prefers-color',
        v = (function() {
          function t() {
            var e = this;
            r(this, t),
              (this.color = void 0),
              (this.callbacks = []),
              (this.color =
                localStorage.getItem(y) ||
                document.documentElement.getAttribute(p)),
              ['light', 'dark'].forEach(function(t) {
                var n = e.getColorMedia(t),
                  r = function(n) {
                    n.matches &&
                      'auto' === e.color &&
                      (document.documentElement.setAttribute(p, t),
                      e.applyCallbacks());
                  };
                n.addEventListener
                  ? n.addEventListener('change', r)
                  : n.addListener && n.addListener(r);
              });
          }
          return (
            o(t, [
              {
                key: 'getColorMedia',
                value: function(t) {
                  return window.matchMedia(
                    '(prefers-color-scheme: '.concat(t, ')'),
                  );
                },
              },
              {
                key: 'isColorMode',
                value: function(t) {
                  return this.getColorMedia(t).matches;
                },
              },
              {
                key: 'applyCallbacks',
                value: function() {
                  var t = this;
                  this.callbacks.forEach(function(e) {
                    return e(t.color);
                  });
                },
              },
              {
                key: 'listen',
                value: function(t) {
                  this.callbacks.push(t);
                },
              },
              {
                key: 'unlisten',
                value: function(t) {
                  this.callbacks.splice(this.callbacks.indexOf(t), 1);
                },
              },
              {
                key: 'set',
                value: function(t) {
                  return (
                    (this.color = t),
                    localStorage.setItem(y, t),
                    this.applyCallbacks(),
                    'auto' === t
                      ? document.documentElement.setAttribute(
                          p,
                          this.isColorMode('dark') ? 'dark' : 'light',
                        )
                      : document.documentElement.setAttribute(p, t),
                    t
                  );
                },
              },
            ]),
            t
          );
        })(),
        h = function() {
          var t = (0, i().useState)(),
            e = u(t, 2),
            n = e[0],
            r = e[1],
            o = (0, i().useCallback)(function(t) {
              d.set(t);
            }, []);
          return (
            (0, i().useEffect)(function() {
              return (
                (d = d || new v()),
                d.listen(r),
                r(d.color),
                function() {
                  return d.unlisten(r);
                }
              );
            }, []),
            [n, o]
          );
        };
      e['default'] = h;
    },
    Fckb: function(t, e, n) {
      'use strict';
      var r = n('J4zp');
      function o() {
        var t = n('q1tI');
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      function i(t, e) {
        return f(t) || l(t, e) || a(t, e) || u();
      }
      function u() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function a(t, e) {
        if (t) {
          if ('string' === typeof t) return c(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? c(t, e)
              : void 0
          );
        }
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function l(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function f(t) {
        if (Array.isArray(t)) return t;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var s,
        d = 'https://riddle.alibaba-inc.com/riddles/define',
        p = function() {
          var t = (0, o().useState)(Boolean(s)),
            e = i(t, 2),
            n = e[0],
            r = e[1];
          return (
            (0, o().useEffect)(function() {
              if (void 0 === s) {
                var t = document.createElement('img');
                setTimeout(function() {
                  (t.src = ''), t.remove();
                }, 200),
                  (t.onload = function() {
                    (s = !0), r(!0), t.remove();
                  }),
                  (t.src =
                    'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png');
              }
            }, []),
            n
          );
        };
      function y(t) {
        var e,
          n = t.dependencies,
          r = t.sources._.tsx || t.sources._.jsx;
        return (
          (r = r
            .replace(
              /^/,
              "import ReactDOM from 'react-dom@".concat(
                (null === (e = n.react) || void 0 === e ? void 0 : e.version) ||
                  'latest',
                "';\n",
              ),
            )
            .replace('export default', 'const DumiDemo =')
            .concat('\nReactDOM.render(<DumiDemo />, mountNode);')),
          (r = r.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g, function(t, e, r) {
            var o = ''.concat(e).concat(r);
            return n[r] && (o += '@'.concat(n[r].version)), o;
          })),
          r
        );
      }
      var v = function(t) {
        var e = (0, o().useState)(),
          n = i(e, 2),
          u = n[0],
          a = n[1],
          c = p();
        return (
          (0, o().useEffect)(
            function() {
              if (t && c && 1 === Object.keys(t.sources).length) {
                var e = document.createElement('form'),
                  n = document.createElement('input');
                return (
                  (e.method = 'POST'),
                  (e.target = '_blank'),
                  (e.style.display = 'none'),
                  (e.action = d),
                  e.appendChild(n),
                  e.setAttribute('data-demo', t.title || ''),
                  (n.name = 'data'),
                  (n.value = JSON.stringify({
                    title: t.titlle,
                    js: y(t),
                    css: Object.entries(t.dependencies)
                      .filter(function(t) {
                        var e = r(t, 2),
                          n = e[1];
                        return n.css;
                      })
                      .map(function(t) {
                        var e = r(t, 2),
                          n = e[0],
                          o = e[1],
                          i = o.version,
                          u = o.css;
                        return "@import '~".concat(
                          u.replace(
                            new RegExp('^('.concat(n, ')')),
                            '$1@'.concat(i),
                          ),
                          "';",
                        );
                      })
                      .join('\n'),
                  })),
                  document.body.appendChild(e),
                  a(function() {
                    return function() {
                      return e.submit();
                    };
                  }),
                  function() {
                    return e.remove();
                  }
                );
              }
            },
            [t, c],
          ),
          u
        );
      };
      e['default'] = v;
    },
    K3bv: function(t, e, n) {
      'use strict';
      function r() {
        var t = n('q1tI');
        return (
          (r = function() {
            return t;
          }),
          t
        );
      }
      function o() {
        var t = i(n('WWur'));
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function u(t, e) {
        return s(t) || f(t, e) || c(t, e) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(t, e) {
        if (t) {
          if ('string' === typeof t) return l(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(t, e)
              : void 0
          );
        }
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function f(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(t) {
        if (Array.isArray(t)) return t;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var d = function() {
        var t = (0, r().useState)(),
          e = u(t, 2),
          n = e[0],
          i = e[1],
          a = (0, r().useState)('ready'),
          c = u(a, 2),
          l = c[0],
          f = c[1],
          s = (0, r().useCallback)(function(t) {
            (0, o()['default'])(t),
              f('copied'),
              clearTimeout(n),
              i(
                setTimeout(function() {
                  f('ready');
                }, 2e3),
              );
          }, []);
        return [s, l];
      };
      e['default'] = d;
    },
    KIPS: function(t, e, n) {
      'use strict';
      function r() {
        var t = n('q1tI');
        return (
          (r = function() {
            return t;
          }),
          t
        );
      }
      function o(t, e) {
        return l(t) || c(t, e) || u(t, e) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(t, e) {
        if (t) {
          if ('string' === typeof t) return a(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? a(t, e)
              : void 0
          );
        }
      }
      function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function c(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function l(t) {
        if (Array.isArray(t)) return t;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var f = function(t, e) {
        var n = function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            var r = {};
            return (
              Object.keys(e[1]).forEach(function(t) {
                var n = (t.match(/^(.+)\.([^_]+)$/) || []).slice(1),
                  i = o(n, 2),
                  u = i[0],
                  a = i[1];
                (a && a !== e[0]) || (r[u || t] = e[1][t]);
              }),
              r
            );
          },
          i = (0, r().useState)(n(t, e)),
          u = o(i, 2),
          a = u[0],
          c = u[1];
        return (
          (0, r().useEffect)(
            function() {
              c(n(t, e));
            },
            [t, e],
          ),
          a
        );
      };
      e['default'] = f;
    },
    LtsZ: function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'ApplyPluginsType', function() {
          return x;
        }),
        n.d(e, 'Plugin', function() {
          return I;
        }),
        n.d(e, 'dynamic', function() {
          return K;
        }),
        n.d(e, 'isBrowser', function() {
          return E;
        });
      var r = n('o0o1'),
        o = n.n(r),
        i = n('55Ip');
      n.d(e, 'Link', function() {
        return i['a'];
      });
      var u = n('Ty5D');
      n.d(e, 'MemoryRouter', function() {
        return u['a'];
      }),
        n.d(e, 'NavLink', function() {
          return i['b'];
        }),
        n.d(e, 'Prompt', function() {
          return u['b'];
        }),
        n.d(e, 'Redirect', function() {
          return u['c'];
        }),
        n.d(e, 'Route', function() {
          return u['d'];
        }),
        n.d(e, 'Router', function() {
          return u['e'];
        }),
        n.d(e, 'StaticRouter', function() {
          return u['f'];
        }),
        n.d(e, 'Switch', function() {
          return u['g'];
        }),
        n.d(e, 'matchPath', function() {
          return u['i'];
        }),
        n.d(e, 'useHistory', function() {
          return u['j'];
        }),
        n.d(e, 'useLocation', function() {
          return u['k'];
        }),
        n.d(e, 'useParams', function() {
          return u['l'];
        }),
        n.d(e, 'useRouteMatch', function() {
          return u['m'];
        }),
        n.d(e, 'withRouter', function() {
          return u['n'];
        }),
        n.d(e, '__RouterContext', function() {
          return u['h'];
        });
      var a = n('YS25');
      n.d(e, 'createBrowserHistory', function() {
        return a['a'];
      }),
        n.d(e, 'createHashHistory', function() {
          return a['b'];
        }),
        n.d(e, 'createMemoryHistory', function() {
          return a['d'];
        });
      var c = n('q1tI'),
        l = n('8L3h');
      function f(t) {
        return (
          (f =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          f(t)
        );
      }
      function s(t, e, n, r, o, i, u) {
        try {
          var a = t[i](u),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function d(t) {
        return function() {
          var e = this,
            n = arguments;
          return new Promise(function(r, o) {
            var i = t.apply(e, n);
            function u(t) {
              s(i, r, o, u, a, 'next', t);
            }
            function a(t) {
              s(i, r, o, u, a, 'throw', t);
            }
            u(void 0);
          });
        };
      }
      function p(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function y(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function v(t, e, n) {
        return e && y(t.prototype, e), n && y(t, n), t;
      }
      function h(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(n), !0).forEach(function(e) {
                h(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function g(t) {
        return w(t) || O(t) || j(t) || k();
      }
      function w(t) {
        if (Array.isArray(t)) return t;
      }
      function O(t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      }
      function j(t, e) {
        if (t) {
          if ('string' === typeof t) return A(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? A(t, e)
              : void 0
          );
        }
      }
      function A(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function k() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function S(t, e) {
        var n;
        if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = j(t)) ||
            (e && t && 'number' === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function(t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          u = !0,
          a = !1;
        return {
          s: function() {
            n = t[Symbol.iterator]();
          },
          n: function() {
            var t = n.next();
            return (u = t.done), t;
          },
          e: function(t) {
            (a = !0), (i = t);
          },
          f: function() {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function _(t, e) {
        if (!t) throw new Error(e);
      }
      var x,
        E = function() {
          return (
            'undefined' !== typeof window &&
            'undefined' !== typeof window.document &&
            'undefined' !== typeof window.document.createElement
          );
        };
      function P(t) {
        var e = t.fns,
          n = t.args;
        if (1 === e.length) return e[0];
        var r = e.pop();
        return e.reduce(function(t, e) {
          return function() {
            return e(t, n);
          };
        }, r);
      }
      function C(t) {
        return !!t && 'object' === f(t) && 'function' === typeof t.then;
      }
      (function(t) {
        (t['compose'] = 'compose'),
          (t['modify'] = 'modify'),
          (t['event'] = 'event');
      })(x || (x = {}));
      var I = (function() {
          function t(e) {
            p(this, t),
              (this.hooks = {}),
              (this.validKeys =
                (null === e || void 0 === e ? void 0 : e.validKeys) || []);
          }
          return (
            v(t, [
              {
                key: 'register',
                value: function(t) {
                  var e = this;
                  _(!!t.apply, 'register failed, plugin.apply must supplied'),
                    _(!!t.path, 'register failed, plugin.path must supplied'),
                    Object.keys(t.apply).forEach(function(n) {
                      _(
                        e.validKeys.indexOf(n) > -1,
                        'register failed, invalid key '
                          .concat(n, ' from plugin ')
                          .concat(t.path, '.'),
                      ),
                        e.hooks[n] || (e.hooks[n] = []),
                        (e.hooks[n] = e.hooks[n].concat(t.apply[n]));
                    });
                },
              },
              {
                key: 'getHooks',
                value: function(t) {
                  var e = t.split('.'),
                    n = g(e),
                    r = n[0],
                    o = n.slice(1),
                    i = this.hooks[r] || [];
                  return (
                    o.length &&
                      (i = i
                        .map(function(t) {
                          try {
                            var e,
                              n = t,
                              r = S(o);
                            try {
                              for (r.s(); !(e = r.n()).done; ) {
                                var i = e.value;
                                n = n[i];
                              }
                            } catch (u) {
                              r.e(u);
                            } finally {
                              r.f();
                            }
                            return n;
                          } catch (a) {
                            return null;
                          }
                        })
                        .filter(Boolean)),
                    i
                  );
                },
              },
              {
                key: 'applyPlugins',
                value: function(t) {
                  var e = t.key,
                    n = t.type,
                    r = t.initialValue,
                    i = t.args,
                    u = t.async,
                    a = this.getHooks(e) || [];
                  switch (
                    (i &&
                      _(
                        'object' === f(i),
                        'applyPlugins failed, args must be plain object.',
                      ),
                    n)
                  ) {
                    case x.modify:
                      return u
                        ? a.reduce(
                            (function() {
                              var t = d(
                                o.a.mark(function t(n, r) {
                                  var u;
                                  return o.a.wrap(function(t) {
                                    while (1)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (
                                            (_(
                                              'function' === typeof r ||
                                                'object' === f(r) ||
                                                C(r),
                                              'applyPlugins failed, all hooks for key '.concat(
                                                e,
                                                ' must be function, plain object or Promise.',
                                              ),
                                            ),
                                            !C(n))
                                          ) {
                                            t.next = 5;
                                            break;
                                          }
                                          return (t.next = 4), n;
                                        case 4:
                                          n = t.sent;
                                        case 5:
                                          if ('function' !== typeof r) {
                                            t.next = 16;
                                            break;
                                          }
                                          if (((u = r(n, i)), !C(u))) {
                                            t.next = 13;
                                            break;
                                          }
                                          return (t.next = 10), u;
                                        case 10:
                                          return t.abrupt('return', t.sent);
                                        case 13:
                                          return t.abrupt('return', u);
                                        case 14:
                                          t.next = 21;
                                          break;
                                        case 16:
                                          if (!C(r)) {
                                            t.next = 20;
                                            break;
                                          }
                                          return (t.next = 19), r;
                                        case 19:
                                          r = t.sent;
                                        case 20:
                                          return t.abrupt(
                                            'return',
                                            b(b({}, n), r),
                                          );
                                        case 21:
                                        case 'end':
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function(e, n) {
                                return t.apply(this, arguments);
                              };
                            })(),
                            C(r) ? r : Promise.resolve(r),
                          )
                        : a.reduce(function(t, n) {
                            return (
                              _(
                                'function' === typeof n || 'object' === f(n),
                                'applyPlugins failed, all hooks for key '.concat(
                                  e,
                                  ' must be function or plain object.',
                                ),
                              ),
                              'function' === typeof n ? n(t, i) : b(b({}, t), n)
                            );
                          }, r);
                    case x.event:
                      return a.forEach(function(t) {
                        _(
                          'function' === typeof t,
                          'applyPlugins failed, all hooks for key '.concat(
                            e,
                            ' must be function.',
                          ),
                        ),
                          t(i);
                      });
                    case x.compose:
                      return function() {
                        return P({ fns: a.concat(r), args: i })();
                      };
                  }
                },
              },
            ]),
            t
          );
        })(),
        M = Object(c['createContext'])(null),
        T = [],
        R = [],
        D = !1;
      function L(t) {
        var e = t(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = e
            .then(function(t) {
              return (n.loading = !1), (n.loaded = t), t;
            })
            ['catch'](function(t) {
              throw ((n.loading = !1), (n.error = t), t);
            })),
          n
        );
      }
      function U(t) {
        var e = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(t).forEach(function(r) {
            var o = L(t[r]);
            o.loading
              ? (e.loading = !0)
              : ((e.loaded[r] = o.loaded), (e.error = o.error)),
              n.push(o.promise),
              o.promise
                .then(function(t) {
                  e.loaded[r] = t;
                })
                ['catch'](function(t) {
                  e.error = t;
                });
          });
        } catch (r) {
          e.error = r;
        }
        return (
          (e.promise = Promise.all(n)
            .then(function(t) {
              return (e.loading = !1), t;
            })
            ['catch'](function(t) {
              throw ((e.loading = !1), t);
            })),
          e
        );
      }
      function N(t) {
        return t && t.__esModule ? t['default'] : t;
      }
      function $(t, e) {
        return Object(c['createElement'])(N(t), e);
      }
      function q(t, e) {
        var n = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: $,
              webpack: null,
              modules: null,
            },
            e,
          ),
          r = null;
        function o() {
          if (!r) {
            var e = new W(t, n);
            r = {
              getCurrentValue: e.getCurrentValue.bind(e),
              subscribe: e.subscribe.bind(e),
              retry: e.retry.bind(e),
              promise: e.promise.bind(e),
            };
          }
          return r.promise();
        }
        if (
          ('undefined' === typeof window && T.push(o),
          !D &&
            'undefined' !== typeof window &&
            'function' === typeof n.webpack)
        ) {
          var i = n.webpack();
          R.push(function(t) {
            var e,
              n = S(i);
            try {
              for (n.s(); !(e = n.n()).done; ) {
                var r = e.value;
                if (-1 !== t.indexOf(r)) return o();
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
          });
        }
        var u = function(t, e) {
            o();
            var i = Object(c['useContext'])(M),
              u = Object(l['useSubscription'])(r);
            return (
              Object(c['useImperativeHandle'])(e, function() {
                return { retry: r.retry };
              }),
              i &&
                Array.isArray(n.modules) &&
                n.modules.forEach(function(t) {
                  i(t);
                }),
              u.loading || u.error
                ? Object(c['createElement'])(n.loading, {
                    isLoading: u.loading,
                    pastDelay: u.pastDelay,
                    timedOut: u.timedOut,
                    error: u.error,
                    retry: r.retry,
                  })
                : u.loaded
                ? n.render(u.loaded, t)
                : null
            );
          },
          a = Object(c['forwardRef'])(u);
        return (
          (a.preload = function() {
            return o();
          }),
          (a.displayName = 'LoadableComponent'),
          a
        );
      }
      var W = (function() {
        function t(e, n) {
          p(this, t),
            (this._loadFn = e),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          v(t, [
            {
              key: 'promise',
              value: function() {
                return this._res.promise;
              },
            },
            {
              key: 'retry',
              value: function() {
                var t = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var e = this._res,
                  n = this._opts;
                e.loading &&
                  ('number' === typeof n.delay &&
                    (0 === n.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function() {
                          t._update({ pastDelay: !0 });
                        }, n.delay))),
                  'number' === typeof n.timeout &&
                    (this._timeout = setTimeout(function() {
                      t._update({ timedOut: !0 });
                    }, n.timeout))),
                  this._res.promise
                    .then(function() {
                      t._update(), t._clearTimeouts();
                    })
                    ['catch'](function(e) {
                      t._update(), t._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: '_update',
              value: function(t) {
                (this._state = b(b({}, this._state), t)),
                  this._callbacks.forEach(function(t) {
                    return t();
                  });
              },
            },
            {
              key: '_clearTimeouts',
              value: function() {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: 'getCurrentValue',
              value: function() {
                return b(
                  b({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                );
              },
            },
            {
              key: 'subscribe',
              value: function(t) {
                var e = this;
                return (
                  this._callbacks.add(t),
                  function() {
                    e._callbacks['delete'](t);
                  }
                );
              },
            },
          ]),
          t
        );
      })();
      function B(t) {
        return q(L, t);
      }
      function H(t) {
        if ('function' !== typeof t.render)
          throw new Error(
            'LoadableMap requires a `render(loaded, props)` function',
          );
        return q(U, t);
      }
      function z(t, e) {
        var n = [];
        while (t.length) {
          var r = t.pop();
          n.push(r(e));
        }
        return Promise.all(n).then(function() {
          if (t.length) return z(t, e);
        });
      }
      function K(t) {
        var e = B,
          n = {
            loading: function(t) {
              t.error, t.isLoading;
              return Object(c['createElement'])('p', null, 'loading...');
            },
          };
        if ('function' === typeof t) n.loader = t;
        else {
          if ('object' !== f(t))
            throw new Error('Unexpect arguments '.concat(t));
          n = b(b({}, n), t);
        }
        return e(n);
      }
      (B.Map = H),
        (B.preloadAll = function() {
          return new Promise(function(t, e) {
            z(T).then(t, e);
          });
        }),
        (B.preloadReady = function() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function(e) {
            var n = function() {
              return (D = !0), e();
            };
            z(R, t).then(n, n);
          });
        }),
        'undefined' !== typeof window &&
          (window.__NEXT_PRELOADREADY = B.preloadReady);
    },
    R8hS: function(t, e, n) {
      'use strict';
      function r(t) {
        return (
          (r =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          r(t)
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var o = l(n('q1tI')),
        i = n('LtsZ'),
        u = a(n('hKI/'));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c(t) {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap(),
          n = new WeakMap();
        return (c = function(t) {
          return t ? n : e;
        })(t);
      }
      function l(t, e) {
        if (!e && t && t.__esModule) return t;
        if (null === t || ('object' !== r(t) && 'function' !== typeof t))
          return { default: t };
        var n = c(e);
        if (n && n.has(t)) return n.get(t);
        var o = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in t)
          if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
            var a = i ? Object.getOwnPropertyDescriptor(t, u) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(o, u, a)
              : (o[u] = t[u]);
          }
        return (o['default'] = t), n && n.set(t, o), o;
      }
      function f() {
        return (
          (f =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          f.apply(this, arguments)
        );
      }
      function s(t, e) {
        return h(t) || v(t, e) || p(t, e) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function p(t, e) {
        if (t) {
          if ('string' === typeof t) return y(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? y(t, e)
              : void 0
          );
        }
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function v(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function h(t) {
        if (Array.isArray(t)) return t;
      }
      function m(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function b(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function g(t, e, n) {
        return e && b(t.prototype, e), n && b(t, n), t;
      }
      var w = new ((function() {
        function t() {
          m(this, t),
            (this.anchors = []),
            (this.listeners = []),
            (this.listener = void 0),
            (this.listener = (0, u['default'])(
              this._matchActiveAnchor.bind(this),
              200,
            ));
        }
        return (
          g(t, [
            {
              key: '_matchActiveAnchor',
              value: function() {
                var t = this,
                  e = this.anchors.findIndex(function(e, n) {
                    return (
                      e.getBoundingClientRect().top > 128 ||
                      n === t.anchors.length - 1
                    );
                  }),
                  n = this.anchors[Math.max(0, e - 1)],
                  r = n.parentElement.id;
                this.listeners.forEach(function(t) {
                  return t(r);
                });
              },
            },
            {
              key: 'watch',
              value: function(t) {
                0 === this.anchors.length &&
                  'undefined' !== typeof window &&
                  window.addEventListener('scroll', this.listener),
                  this.anchors.push(t),
                  this.listener();
              },
            },
            {
              key: 'unwatch',
              value: function(t) {
                this.anchors.splice(
                  this.anchors.findIndex(function(e) {
                    return e === t;
                  }),
                  1,
                ),
                  0 === this.anchors.length &&
                    'undefined' !== typeof window &&
                    window.removeEventListener('scroll', this.listener);
              },
            },
            {
              key: 'listen',
              value: function(t) {
                this.listeners.push(t);
              },
            },
            {
              key: 'unlisten',
              value: function(t) {
                this.listeners.splice(
                  this.listeners.findIndex(function(e) {
                    return e === t;
                  }),
                  1,
                );
              },
            },
          ]),
          t
        );
      })())();
      function O(t) {
        return t.offsetTop + (t.offsetParent ? O(t.offsetParent) : 0);
      }
      var j = function t(e) {
        var n,
          r =
            (null === (n = e.to.match(/(#[^&?]*)/)) || void 0 === n
              ? void 0
              : n[1]) || '',
          u = (0, o.useRef)(null),
          a = (0, o.useState)(!1),
          c = s(a, 2),
          l = c[0],
          d = c[1];
        return (
          (0, o.useEffect)(function() {
            var t, e;
            if (
              ['H1', 'H2', 'H3'].includes(
                null === (t = u.current) ||
                  void 0 === t ||
                  null === (e = t.parentElement) ||
                  void 0 === e
                  ? void 0
                  : e.tagName,
              ) &&
              u.current.parentElement.id
            ) {
              var n = u.current;
              return (
                w.watch(n),
                function() {
                  w.unwatch(n);
                }
              );
            }
            var o = function(t) {
              d(r === '#'.concat(t));
            };
            return (
              w.listen(o),
              function() {
                return w.unlisten(o);
              }
            );
          }, []),
          o['default'].createElement(
            i.NavLink,
            f({}, e, {
              ref: u,
              onClick: function() {
                return t.scrollToAnchor(r.substring(1));
              },
              isActive: function() {
                return l;
              },
            }),
          )
        );
      };
      j.scrollToAnchor = function(t) {
        window.requestAnimationFrame(function() {
          var e = document.getElementById(decodeURIComponent(t));
          e && window.scrollTo(0, O(e) - 100);
        });
      };
      var A = j;
      e['default'] = A;
    },
    S8BH: function(t, e, n) {
      'use strict';
      var r = n('RIqP');
      function o() {
        var t = n('q1tI');
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var i = n('asP9');
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function(e) {
                c(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function c(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function l(t, e) {
        return y(t) || p(t, e) || s(t, e) || f();
      }
      function f() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function s(t, e) {
        if (t) {
          if ('string' === typeof t) return d(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? d(t, e)
              : void 0
          );
        }
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function p(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function y(t) {
        if (Array.isArray(t)) return t;
      }
      var v = function(t) {
          var e = (0, o().useContext)(i.context),
            n = e.locale,
            u = e.routes,
            a = e.config.locales,
            c = (0, o().useState)([]),
            f = l(c, 2),
            s = f[0],
            d = f[1],
            p = (0, o().useState)([]),
            y = l(p, 2),
            v = y[0],
            h = y[1];
          return (
            (0, o().useEffect)(
              function() {
                d(
                  u
                    .filter(function(t) {
                      var e = t.title,
                        r = t.meta,
                        o =
                          (null === r || void 0 === r ? void 0 : r.locale) ===
                          n,
                        i =
                          (null === r || void 0 === r ? void 0 : r.locale) ===
                            a[0].name ||
                          (!(null === r || void 0 === r ? void 0 : r.locale) &&
                            (!a.length || n === a[0].name));
                      return e && (i || o);
                    })
                    .reduce(function(t, e) {
                      var n,
                        o,
                        i = { title: e.title, path: e.path };
                      return (
                        (null === (n = e.meta) || void 0 === n
                          ? void 0
                          : n.group) && (i.parent = e.meta.group),
                        t.push(i),
                        t.push.apply(
                          t,
                          r(
                            (
                              (null === (o = e.meta) || void 0 === o
                                ? void 0
                                : o.slugs) || []
                            )
                              .filter(function(t) {
                                var n = t.value;
                                return n !== e.title;
                              })
                              .map(function(t) {
                                return {
                                  title: t.value,
                                  path: ''
                                    .concat(e.path, '#')
                                    .concat(t.heading),
                                  parent: i,
                                };
                              }),
                          ),
                        ),
                        t
                      );
                    }, []),
                );
              },
              [u.length, n],
            ),
            (0, o().useEffect)(
              function() {
                var e =
                  null === t || void 0 === t ? void 0 : t.trim().toUpperCase();
                if (e) {
                  for (var n = [], r = 0; r < s.length; r += 1)
                    s[r].title.toUpperCase().indexOf(e) > -1 && n.push(s[r]);
                  h(n);
                } else h([]);
              },
              [t, s.length],
            ),
            v
          );
        },
        h = function() {
          var t = (0, o().useContext)(i.context),
            e = t.config.algolia,
            n = (0, o().useCallback)(
              function(t) {
                window.docsearch(a({ inputSelector: t }, e));
              },
              [e],
            );
          return n;
        },
        m = function(t) {
          var e = (0, o().useContext)(i.context),
            n = e.config,
            r = v(t),
            u = h();
          return n.algolia ? u : r;
        };
      e['default'] = m;
    },
    W8MJ: function(t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function r(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t;
      }
      t.exports = r;
    },
    WWur: function(t, e, n) {
      'use strict';
      var r = function(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.target,
          r = void 0 === n ? document.body : n,
          o = document.createElement('textarea'),
          i = document.activeElement;
        (o.value = t),
          o.setAttribute('readonly', ''),
          (o.style.contain = 'strict'),
          (o.style.position = 'absolute'),
          (o.style.left = '-9999px'),
          (o.style.fontSize = '12pt');
        var u = document.getSelection(),
          a = !1;
        u.rangeCount > 0 && (a = u.getRangeAt(0)),
          r.append(o),
          o.select(),
          (o.selectionStart = 0),
          (o.selectionEnd = t.length);
        var c = !1;
        try {
          c = document.execCommand('copy');
        } catch (l) {}
        return (
          o.remove(),
          a && (u.removeAllRanges(), u.addRange(a)),
          i && i.focus(),
          c
        );
      };
      (t.exports = r), (t.exports['default'] = r);
    },
    asP9: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'context', {
          enumerable: !0,
          get: function() {
            return r['default'];
          },
        }),
        Object.defineProperty(e, 'Link', {
          enumerable: !0,
          get: function() {
            return o['default'];
          },
        }),
        Object.defineProperty(e, 'NavLink', {
          enumerable: !0,
          get: function() {
            return i['default'];
          },
        }),
        Object.defineProperty(e, 'AnchorLink', {
          enumerable: !0,
          get: function() {
            return u['default'];
          },
        }),
        Object.defineProperty(e, 'useSearch', {
          enumerable: !0,
          get: function() {
            return a['default'];
          },
        }),
        Object.defineProperty(e, 'useCopy', {
          enumerable: !0,
          get: function() {
            return c['default'];
          },
        }),
        Object.defineProperty(e, 'useRiddle', {
          enumerable: !0,
          get: function() {
            return l['default'];
          },
        }),
        Object.defineProperty(e, 'useMotions', {
          enumerable: !0,
          get: function() {
            return f['default'];
          },
        }),
        Object.defineProperty(e, 'useCodeSandbox', {
          enumerable: !0,
          get: function() {
            return s['default'];
          },
        }),
        Object.defineProperty(e, 'useLocaleProps', {
          enumerable: !0,
          get: function() {
            return d['default'];
          },
        }),
        Object.defineProperty(e, 'useDemoUrl', {
          enumerable: !0,
          get: function() {
            return p['default'];
          },
        }),
        Object.defineProperty(e, 'useApiData', {
          enumerable: !0,
          get: function() {
            return y['default'];
          },
        }),
        Object.defineProperty(e, 'useTSPlaygroundUrl', {
          enumerable: !0,
          get: function() {
            return v['default'];
          },
        }),
        Object.defineProperty(e, 'usePrefersColor', {
          enumerable: !0,
          get: function() {
            return h['default'];
          },
        });
      var r = m(n('yyAI')),
        o = m(n('59ht')),
        i = m(n('pVEz')),
        u = m(n('R8hS')),
        a = m(n('S8BH')),
        c = m(n('K3bv')),
        l = m(n('Fckb')),
        f = m(n('77hZ')),
        s = m(n('ucmU')),
        d = m(n('KIPS')),
        p = m(n('t9z8')),
        y = m(n('vnk7')),
        v = m(n('kAZx')),
        h = m(n('DW3L'));
      function m(t) {
        return t && t.__esModule ? t : { default: t };
      }
    },
    'hKI/': function(t, e, n) {
      (function(e) {
        var n = 'Expected a function',
          r = NaN,
          o = '[object Symbol]',
          i = /^\s+|\s+$/g,
          u = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          l = parseInt,
          f = 'object' == typeof e && e && e.Object === Object && e,
          s = 'object' == typeof self && self && self.Object === Object && self,
          d = f || s || Function('return this')(),
          p = Object.prototype,
          y = p.toString,
          v = Math.max,
          h = Math.min,
          m = function() {
            return d.Date.now();
          };
        function b(t, e, r) {
          var o,
            i,
            u,
            a,
            c,
            l,
            f = 0,
            s = !1,
            d = !1,
            p = !0;
          if ('function' != typeof t) throw new TypeError(n);
          function y(e) {
            var n = o,
              r = i;
            return (o = i = void 0), (f = e), (a = t.apply(r, n)), a;
          }
          function b(t) {
            return (f = t), (c = setTimeout(j, e)), s ? y(t) : a;
          }
          function g(t) {
            var n = t - l,
              r = t - f,
              o = e - n;
            return d ? h(o, u - r) : o;
          }
          function O(t) {
            var n = t - l,
              r = t - f;
            return void 0 === l || n >= e || n < 0 || (d && r >= u);
          }
          function j() {
            var t = m();
            if (O(t)) return k(t);
            c = setTimeout(j, g(t));
          }
          function k(t) {
            return (c = void 0), p && o ? y(t) : ((o = i = void 0), a);
          }
          function S() {
            void 0 !== c && clearTimeout(c), (f = 0), (o = l = i = c = void 0);
          }
          function _() {
            return void 0 === c ? a : k(m());
          }
          function x() {
            var t = m(),
              n = O(t);
            if (((o = arguments), (i = this), (l = t), n)) {
              if (void 0 === c) return b(l);
              if (d) return (c = setTimeout(j, e)), y(l);
            }
            return void 0 === c && (c = setTimeout(j, e)), a;
          }
          return (
            (e = A(e) || 0),
            w(r) &&
              ((s = !!r.leading),
              (d = 'maxWait' in r),
              (u = d ? v(A(r.maxWait) || 0, e) : u),
              (p = 'trailing' in r ? !!r.trailing : p)),
            (x.cancel = S),
            (x.flush = _),
            x
          );
        }
        function g(t, e, r) {
          var o = !0,
            i = !0;
          if ('function' != typeof t) throw new TypeError(n);
          return (
            w(r) &&
              ((o = 'leading' in r ? !!r.leading : o),
              (i = 'trailing' in r ? !!r.trailing : i)),
            b(t, e, { leading: o, maxWait: e, trailing: i })
          );
        }
        function w(t) {
          var e = typeof t;
          return !!t && ('object' == e || 'function' == e);
        }
        function O(t) {
          return !!t && 'object' == typeof t;
        }
        function j(t) {
          return 'symbol' == typeof t || (O(t) && y.call(t) == o);
        }
        function A(t) {
          if ('number' == typeof t) return t;
          if (j(t)) return r;
          if (w(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
            t = w(e) ? e + '' : e;
          }
          if ('string' != typeof t) return 0 === t ? t : +t;
          t = t.replace(i, '');
          var n = a.test(t);
          return n || c.test(t) ? l(t.slice(2), n ? 2 : 8) : u.test(t) ? r : +t;
        }
        t.exports = g;
      }.call(this, n('IyRk')));
    },
    kAZx: function(t, e, n) {
      'use strict';
      function r() {
        var t = n('q1tI');
        return (
          (r = function() {
            return t;
          }),
          t
        );
      }
      function o() {
        var t = i(n('6xEa'));
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function u(t, e) {
        return s(t) || f(t, e) || c(t, e) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(t, e) {
        if (t) {
          if ('string' === typeof t) return l(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(t, e)
              : void 0
          );
        }
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function f(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(t) {
        if (Array.isArray(t)) return t;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var d = {
          'zh-CN': 'https://www.typescriptlang.org/zh/play',
          'en-US': 'https://www.typescriptlang.org/play',
        },
        p = function(t, e) {
          var n = function() {
              var t = /^zh|cn$/.test(
                arguments.length <= 0 ? void 0 : arguments[0],
              )
                ? d['zh-CN']
                : d['en-US'];
              return ''
                .concat(t, '?skipLibCheck=true&jsx=1#code/')
                .concat(
                  o()['default'].compressToEncodedURIComponent(
                    arguments.length <= 1 ? void 0 : arguments[1],
                  ),
                );
            },
            i = (0, r().useState)(n(t, e)),
            a = u(i, 2),
            c = a[0],
            l = a[1];
          return (
            (0, r().useEffect)(
              function() {
                l(n(t, e));
              },
              [t, e],
            ),
            c
          );
        };
      e['default'] = p;
    },
    lwsE: function(t, e) {
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      t.exports = n;
    },
    pVEz: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var r = n('LtsZ'),
        o = n('59ht'),
        i = (0, o.LinkWrapper)(r.NavLink);
      e['default'] = i;
    },
    t9z8: function(t, e, n) {
      'use strict';
      function r() {
        var t = n('q1tI');
        return (
          (r = function() {
            return t;
          }),
          t
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = e.getDemoUrl = e.getDemoRouteName = void 0);
      var o = i(n('yyAI'));
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function u(t, e) {
        return s(t) || f(t, e) || c(t, e) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(t, e) {
        if (t) {
          if ('string' === typeof t) return l(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(t, e)
              : void 0
          );
        }
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function f(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(t) {
        if (Array.isArray(t)) return t;
      }
      function d() {
        return 'BASEMENT' === Object({ NODE_ENV: 'production' }).PLATFORM_TYPE;
      }
      var p = function() {
        return d() ? '_demos' : '~demos';
      };
      e.getDemoRouteName = p;
      var y = function(t, e) {
        var n,
          r = window,
          o = r.location,
          i = o.href,
          a = o.origin,
          c = i.split(/#\//),
          l = u(c, 2),
          f = l[0],
          s = l[1],
          y = 'string' === typeof s;
        return [
          y ? ''.concat(f, '#') : a,
          ''
            .concat(
              (null === (n = window) || void 0 === n ? void 0 : n.routerBase) ||
                '',
              '/',
            )
            .replace(/\/\/$/, '/'),
          p(),
          '/',
          t,
          d() ? '/index.html' : ''.concat(e ? '.html' : ''),
        ].join('');
      };
      e.getDemoUrl = y;
      var v = function(t) {
        var e = (0, r().useContext)(o['default']),
          n = e.config,
          i = (0, r().useState)(''),
          a = u(i, 2),
          c = a[0],
          l = a[1];
        return (
          (0, r().useEffect)(
            function() {
              l(y(t, n.exportStatic && n.exportStatic.htmlSuffix));
            },
            [t, n],
          ),
          c
        );
      };
      e['default'] = v;
    },
    ucmU: function(t, e, n) {
      'use strict';
      var r = n('J4zp');
      function o() {
        var t = n('q1tI');
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      function i() {
        var t = u(n('6xEa'));
        return (
          (i = function() {
            return t;
          }),
          t
        );
      }
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t, e) {
        return d(t) || s(t, e) || l(t, e) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function l(t, e) {
        if (t) {
          if ('string' === typeof t) return f(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? f(t, e)
              : void 0
          );
        }
      }
      function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function s(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function d(t) {
        if (Array.isArray(t)) return t;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var p = 'https://codesandbox.io/api/v1/sandboxes/define';
      function y(t) {
        return i()
          ['default'].compressToBase64(JSON.stringify(t))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
      }
      function v(t) {
        var e = document.createElement('span');
        e.innerHTML = t;
        var n = e.textContent;
        return e.remove(), n;
      }
      function h(t) {
        var e = Boolean(t.sources._.tsx),
          n = e ? '.tsx' : '.jsx',
          o = {},
          i = {},
          u = Object.values(t.dependencies).filter(function(t) {
            return t.css;
          }),
          a = 'App'.concat(n),
          c = 'index'.concat(n);
        return (
          Object.entries(t.dependencies).forEach(function(t) {
            var e = r(t, 2),
              n = e[0],
              o = e[1].version;
            i[n] = o;
          }),
          i['react-dom'] || (i['react-dom'] = i.react || 'latest'),
          (o['sandbox.config.json'] = {
            content: JSON.stringify(
              {
                template: e
                  ? 'create-react-app-typescript'
                  : 'create-react-app',
              },
              null,
              2,
            ),
          }),
          (o['package.json'] = {
            content: JSON.stringify(
              {
                name: t.title,
                description:
                  v(t.description) || 'An auto-generated demo by dumi',
                main: c,
                dependencies: i,
                devDependencies: e ? { typescript: '^3' } : {},
              },
              null,
              2,
            ),
          }),
          (o['index.html'] = {
            content: '<div style="margin: 16px;" id="root"></div>',
          }),
          (o[c] = {
            content: "/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(
              u
                .map(function(t) {
                  var e = t.css;
                  return "import '".concat(e, "';");
                })
                .join('\n'),
              "\nimport App from './App';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);",
            ),
          }),
          Object.entries(t.sources).forEach(function(t) {
            var e = r(t, 2),
              n = e[0],
              i = e[1],
              u = i.tsx,
              c = i.jsx,
              l = i.content;
            o['_' === n ? a : n] = { content: u || c || l };
          }),
          y({ files: o })
        );
      }
      var m = function(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
          n = (0, o().useState)(),
          r = a(n, 2),
          i = r[0],
          u = r[1];
        return (
          (0, o().useEffect)(
            function() {
              if (t) {
                var n = document.createElement('form'),
                  r = document.createElement('input'),
                  o = h(t);
                return (
                  (n.method = 'POST'),
                  (n.target = '_blank'),
                  (n.style.display = 'none'),
                  (n.action = e),
                  n.appendChild(r),
                  n.setAttribute('data-demo', t.title || ''),
                  (r.name = 'parameters'),
                  (r.value = o),
                  document.body.appendChild(n),
                  u(function() {
                    return function() {
                      return n.submit();
                    };
                  }),
                  function() {
                    return n.remove();
                  }
                );
              }
            },
            [t],
          ),
          i
        );
      };
      e['default'] = m;
    },
    vnk7: function(t, e, n) {
      'use strict';
      var r = n('J4zp');
      function o() {
        var t = n('q1tI');
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      function i() {
        var t = a(n('x2v5'));
        return (
          (i = function() {
            return t;
          }),
          t
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var u = a(n('yyAI'));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c(t, e) {
        return p(t) || d(t, e) || f(t, e) || l();
      }
      function l() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function f(t, e) {
        if (t) {
          if ('string' === typeof t) return s(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(t, e)
              : void 0
          );
        }
      }
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function d(t, e) {
        var n =
          null == t
            ? null
            : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(t); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function p(t) {
        if (Array.isArray(t)) return t;
      }
      function y(t, e, n) {
        return Object.entries(i()['default'][t]).reduce(function(t, o) {
          var i = r(o, 2),
            u = i[0],
            a = i[1];
          return (
            (t[u] = a.map(function(t) {
              var r = Object.assign({}, t);
              return (
                Object.keys(t).forEach(function(t) {
                  if (/^description(\.|$)/.test(t)) {
                    var o = t.match(/^description\.?(.*)$/),
                      i = c(o, 2),
                      u = i[1];
                    (u && u !== e) || (!u && !n)
                      ? delete r[t]
                      : (r.description = r[t]);
                  }
                }),
                r
              );
            })),
            t
          );
        }, {});
      }
      var v = function(t) {
        var e = (0, o().useContext)(u['default']),
          n = e.locale,
          r = e.config.locales,
          i = !r.length || r[0].name === n,
          a = (0, o().useState)(y(t, n, i)),
          l = c(a, 2),
          f = l[0],
          s = l[1];
        return (
          (0, o().useEffect)(
            function() {
              s(y(t, n, i));
            },
            [t, n, i],
          ),
          f
        );
      };
      e['default'] = v;
    },
    yyAI: function(t, e, n) {
      'use strict';
      function r() {
        var t = o(n('q1tI'));
        return (
          (r = function() {
            return t;
          }),
          t
        );
      }
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0);
      var i = r()['default'].createContext({
        config: {
          mode: 'doc',
          title: '',
          navs: {},
          menus: {},
          locales: [],
          repository: { branch: 'master' },
          theme: {},
        },
        meta: { title: '' },
        menu: [],
        nav: [],
        base: '',
        routes: [],
      });
      e['default'] = i;
    },
  },
]);
