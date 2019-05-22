window.webOS = (function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = (n[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
        (t.m = e),
        (t.c = n),
        (t.i = function(e) {
            return e;
        }),
        (t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
        }),
        (t.n = function(e) {
            var n =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return t.d(n, 'a', n), n;
        }),
        (t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ''),
        t((t.s = 7))
    );
})([
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      },
            o = {};
        if ('object' === ('undefined' == typeof window ? 'undefined' : r(window)) && window.PalmSystem)
            if (window.navigator.userAgent.indexOf('SmartWatch') > -1) o.watch = !0;
            else if (
                window.navigator.userAgent.indexOf('SmartTV') > -1 ||
                window.navigator.userAgent.indexOf('Large Screen') > -1
            )
                o.tv = !0;
            else {
                try {
                    var i = JSON.parse(window.PalmSystem.deviceInfo || '{}');
                    if (i.platformVersionMajor && i.platformVersionMinor) {
                        var s = Number(i.platformVersionMajor),
                            a = Number(i.platformVersionMinor);
                        s < 3 || (3 === s && a <= 0) ? (o.legacy = !0) : (o.open = !0);
                    }
                } catch (e) {
                    o.open = !0;
                }
                (window.Mojo = window.Mojo || { relaunch: function() {} }),
                    window.PalmSystem.stageReady && window.PalmSystem.stageReady();
            }
        else o.unknown = !0;
        t.default = o;
    },
    function(e, t, n) {
        'use strict';
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            i = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            })(),
            s = {},
            a = function(e) {
                var t = e;
                return '/' !== t.slice(-1) && (t += '/'), t;
            },
            c = (t.LS2Request = (function() {
                function e() {
                    r(this, e), (this.bridge = null), (this.cancelled = !1), (this.subscribe = !1);
                }
                return (
                    i(e, [
                        {
                            key: 'send',
                            value: function(e) {
                                var t = e.service,
                                    n = void 0 === t ? '' : t,
                                    r = e.method,
                                    i = void 0 === r ? '' : r,
                                    c = e.parameters,
                                    u = void 0 === c ? {} : c,
                                    l = e.onSuccess,
                                    f = void 0 === l ? function() {} : l,
                                    d = e.onFailure,
                                    m = void 0 === d ? function() {} : d,
                                    p = e.onComplete,
                                    v = void 0 === p ? function() {} : p,
                                    h = e.subscribe,
                                    w = void 0 !== h && h;
                                if (!window.PalmServiceBridge) {
                                    var y = { errorCode: -1, errorText: 'PalmServiceBridge is not found.', returnValue: !1 };
                                    return m(y), v(y), console.error('PalmServiceBridge is not found.'), this;
                                }
                                this.ts && s[this.ts] && delete s[this.ts];
                                var b = o({}, u);
                                return (
                                    (this.subscribe = w),
                                    this.subscribe && (b.subscribe = this.subscribe),
                                    b.subscribe && (this.subscribe = b.subscribe),
                                    (this.ts = Date.now()),
                                    (s[this.ts] = this),
                                    (this.bridge = new PalmServiceBridge()),
                                    (this.bridge.onservicecallback = this.callback.bind(this, f, m, v)),
                                    this.bridge.call(a(n) + i, JSON.stringify(b)),
                                    this
                                );
                            },
                        },
                        {
                            key: 'callback',
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '';
                                if (!this.cancelled) {
                                    var o = {};
                                    try {
                                        o = JSON.parse(r);
                                    } catch (e) {
                                        o = { errorCode: -1, errorText: r, returnValue: !1 };
                                    }
                                    var i = o,
                                        s = i.errorCode,
                                        a = i.returnValue;
                                    void 0 !== s || !1 === a ? ((o.returnValue = !1), t(o)) : ((o.returnValue = !0), e(o)),
                                        n(o),
                                        this.subscribe || this.cancel();
                                }
                            },
                        },
                        {
                            key: 'cancel',
                            value: function() {
                                (this.cancelled = !0),
                                    null !== this.bridge && (this.bridge.cancel(), (this.bridge = null)),
                                    this.ts && s[this.ts] && delete s[this.ts];
                            },
                        },
                    ]),
                    e
                );
            })()),
            u = {
                request: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = o({ service: e }, t);
                    return new c().send(n);
                },
            };
        t.default = u;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = (t.fetchAppId = function() {
                return window.PalmSystem && window.PalmSystem.identifier ? window.PalmSystem.identifier.split(' ')[0] : '';
            }),
            o = {};
        (t.fetchAppInfo = function(e, t) {
            if (0 === Object.keys(o).length) {
                var n = function(t, n) {
                        if (!t && n)
                            try {
                                (o = JSON.parse(n)), e && e(o);
                            } catch (t) {
                                console.error('Unable to parse appinfo.json file for', r()), e && e();
                            }
                        else e && e();
                    },
                    i = new window.XMLHttpRequest();
                i.onreadystatechange = function() {
                    4 === i.readyState &&
                        ((i.status >= 200 && i.status < 300) || 0 === i.status ? n(null, i.responseText) : n({ status: 404 }));
                };
                try {
                    i.open('GET', t || 'appinfo.json', !0), i.send(null);
                } catch (e) {
                    n({ status: 404 });
                }
            } else e && e(o);
        }),
            (t.fetchAppRootPath = function() {
                var e = window.location.href;
                if ('baseURI' in window.document) e = window.document.baseURI;
                else {
                    var t = window.document.getElementsByTagName('base');
                    t.length > 0 && (e = t[0].href);
                }
                var n = e.match(new RegExp('.*://[^#]*/'));
                return n ? n[0] : '';
            }),
            (t.platformBack = function() {
                if (window.PalmSystem && window.PalmSystem.platformBack) return window.PalmSystem.platformBack();
            });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(1),
            o = n(0),
            i = (function(e) {
                return e && e.__esModule ? e : { default: e };
            })(o),
            s = {},
            a = function(e) {
                if (0 === Object.keys(s).length) {
                    try {
                        var t = JSON.parse(window.PalmSystem.deviceInfo);
                        (s.modelName = t.modelName),
                            (s.version = t.platformVersion),
                            (s.versionMajor = t.platformVersionMajor),
                            (s.versionMinor = t.platformVersionMinor),
                            (s.versionDot = t.platformVersionDot),
                            (s.sdkVersion = t.platformVersion),
                            (s.screenWidth = t.screenWidth),
                            (s.screenHeight = t.screenHeight);
                    } catch (e) {
                        s.modelName = 'webOS Device';
                    }
                    (s.screenHeight = s.screenHeight || window.screen.height),
                        (s.screenWidth = s.screenWidth || window.screen.width),
                        i.default.tv &&
                            new r.LS2Request().send({
                                service: 'luna://com.webos.service.tv.systemproperty',
                                method: 'getSystemInfo',
                                parameters: { keys: ['firmwareVersion', 'modelName', 'sdkVersion', 'UHD'] },
                                onSuccess: function(t) {
                                    if (
                                        ((s.modelName = t.modelName || s.modelName),
                                        (s.sdkVersion = t.sdkVersion || s.sdkVersion),
                                        (s.uhd = 'true' === t.UHD),
                                        (t.firmwareVersion && '0.0.0' !== t.firmwareVersion) ||
                                            (t.firmwareVersion = t.sdkVersion),
                                        t.firmwareVersion)
                                    ) {
                                        s.version = t.firmwareVersion;
                                        for (
                                            var n = s.version.split('.'),
                                                r = ['versionMajor', 'versionMinor', 'versionDot'],
                                                o = 0;
                                            o < r.length;
                                            o += 1
                                        )
                                            try {
                                                s[r[o]] = parseInt(n[o], 10);
                                            } catch (e) {
                                                s[r[o]] = n[o];
                                            }
                                    }
                                    e(s);
                                },
                                onFailure: function() {
                                    e(s);
                                },
                            });
                } else e(s);
            };
        t.default = a;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = {
            isShowing: function() {
                return !!PalmSystem && (PalmSystem.isKeyboardVisible || !1);
            },
        };
        t.default = r;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = function() {
            var e = {};
            if (window.PalmSystem) {
                if (window.PalmSystem.country) {
                    var t = JSON.parse(window.PalmSystem.country);
                    (e.country = t.country), (e.smartServiceCountry = t.smartServiceCountry);
                }
                window.PalmSystem.timeZone && (e.timezone = window.PalmSystem.timeZone);
            }
            return e;
        };
        t.default = r;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        t.default = '1.0.0';
    },
    function(e, t, n) {
        'use strict';
        function r(e) {
            return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.systemInfo = t.service = t.platform = t.platformBack = t.libVersion = t.keyboard = t.fetchAppRootPath = t.fetchAppInfo = t.fetchAppId = t.deviceInfo = void 0);
        var o = n(2),
            i = n(1),
            s = r(i),
            a = n(3),
            c = r(a),
            u = n(4),
            l = r(u),
            f = n(0),
            d = r(f),
            m = n(5),
            p = r(m),
            v = n(6),
            h = r(v);
        (t.deviceInfo = c.default),
            (t.fetchAppId = o.fetchAppId),
            (t.fetchAppInfo = o.fetchAppInfo),
            (t.fetchAppRootPath = o.fetchAppRootPath),
            (t.keyboard = l.default),
            (t.libVersion = h.default),
            (t.platformBack = o.platformBack),
            (t.platform = d.default),
            (t.service = s.default),
            (t.systemInfo = p.default);
    },
]);
