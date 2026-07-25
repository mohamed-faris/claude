(function(t) {
    function e(e) {
        for (var s, o, r = e[0], l = e[1], c = e[2], d = 0, _ = []; d < r.length; d++) o = r[d], Object.prototype.hasOwnProperty.call(a, o) && a[o] && _.push(a[o][0]), a[o] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        u && u(e);
        while (_.length) _.shift()();
        return n.push.apply(n, c || []), i()
    }

    function i() {
        for (var t, e = 0; e < n.length; e++) {
            for (var i = n[e], s = !0, r = 1; r < i.length; r++) {
                var l = i[r];
                0 !== a[l] && (s = !1)
            }
            s && (n.splice(e--, 1), t = o(o.s = i[0]))
        }
        return t
    }
    var s = {},
        a = {
            app: 0
        },
        n = [];

    function o(e) {
        if (s[e]) return s[e].exports;
        var i = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.m = t, o.c = s, o.d = function(t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) o.d(i, s, function(e) {
                return t[e]
            }.bind(null, s));
        return i
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var u = l;
    n.push([0, "chunk-vendors"]), i()
})({
    0: function(t, e, i) {
        t.exports = i("56d7")
    },
    "0127": function(t, e, i) {
        "use strict";
        i("55fa")
    },
    "180a": function(t, e, i) {
        "use strict";
        i("8e02")
    },
    "1c37": function(t, e, i) {
        "use strict";
        i("8833")
    },
    "23be": function(t, e, i) {
        "use strict";
        i("ccb0")
    },
    3695: function(t, e, i) {
        "use strict";
        i("555a")
    },
    3754: function(t, e, i) {},
    "4a84": function(t, e, i) {
        "use strict";
        i("b5f9")
    },
    5151: function(t, e, i) {
        "use strict";
        i("673f")
    },
    "555a": function(t, e, i) {},
    "55fa": function(t, e, i) {},
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        i("cadf"), i("551c"), i("f751"), i("097d");
        var s = i("2b0e"),
            a = i("2b27"),
            n = i.n(a),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    class: {
                        "ipauth-splash-on": t.isSplashVisible
                    },
                    attrs: {
                        id: "app ip-auth"
                    }
                }, [i("transition", {
                    attrs: {
                        name: "page-fade",
                        mode: "out-in"
                    }
                }, ["main" === t.activePage ? i("main-page", {
                    on: {
                        setPage: t.setPage
                    }
                }) : "add-ip-address" === t.activePage ? i("add-ip-address-page", {
                    on: {
                        goBack: function(e) {
                            return t.setPage("main")
                        }
                    }
                }) : t._e()], 1), i("div", {
                    staticClass: "modal-backdrop",
                    class: {
                        fade: t.shouldPopupAnimate,
                        in: null != t.activePopup
                    },
                    on: {
                        click: function(e) {
                            return e.target !== e.currentTarget ? null : t.hidePopup.apply(null, arguments)
                        }
                    }
                }), i("div", {
                    staticClass: "modal-dialog modal-confirm",
                    class: {
                        "is-active": "confirm-request" === t.activePopup
                    }
                }, [i("div", {
                    staticClass: "modal-body"
                }, [i("button", {
                    staticClass: "bootbox-close-button close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: t.hidePopup
                    }
                }, [t._v("Ã—")]), t._m(0), i("h4", [t._v("Instructions sent!")]), i("p", [t._v("Check the mailbox for " + t._s(t.popupItem.trusted_email) + " to complete the registration of IP " + t._s(t.displayPopupIP) + ".")])]), i("div", {
                    staticClass: "modal-footer"
                }, [i("button", {
                    staticClass: "btn blue",
                    on: {
                        click: t.hidePopup
                    }
                }, [t._v("Done")])])]), t.isSplashVisible ? i("splash") : t._e()], 1)
            },
            r = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "option-banner"
                }, [i("figure", [i("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/paper-plane.png",
                        width: "200",
                        alt: "SMTP2GO"
                    }
                })])])
            }],
            l = (i("8e6e"), i("ac6a"), i("456d"), i("bd86")),
            c = i("2f62");

        function u(t, e) {
            var i = "".concat(e, "/");
            return Object.keys(t).reduce((function(e, s) {
                return e[s] = Object.keys(t[s]).reduce((function(e, a) {
                    return e[a] = "".concat(i).concat(t[s][a]), e
                }), {}), e
            }), {})
        }
        var d, _, p, m, f, h = i("bc3a"),
            v = i.n(h),
            b = v.a.create(),
            g = function(t) {
                b.interceptors.request.use((function(e) {
                    return t.commit("root/INC_RUNNING_AJAX_REQUESTS"), e
                })), b.interceptors.response.use((function(e) {
                    if (t.commit("root/DEC_RUNNING_AJAX_REQUESTS"), e = e.data, "error" in e) return Promise.reject(e.error);
                    var i = e.message,
                        s = e.results;
                    return Promise.resolve({
                        results: s,
                        message: i
                    })
                }), (function(e) {
                    return t.commit("root/DEC_RUNNING_AJAX_REQUESTS"), Promise.reject(e)
                }))
            },
            I = {
                getters: {
                    IS_AJAX_RUNNING: "IS_AJAX_RUNNING",
                    BACKEND_URL: "BACKEND_URL",
                    GET_SHOW_SPLASH: "GET_SHOW_SPLASH",
                    GET_IS_COLUMN_SHOWN: "GET_IS_COLUMN_SHOWN",
                    GET_DISABLE_ADD: "GET_DISABLE_ADD",
                    GET_MAIL_SERVER_URL: "GET_MAIL_SERVER_URL"
                },
                mutations: {
                    SET_CSRF_KEY: "SET_CSRF_KEY",
                    SET_SHOW_SPLASH: "SET_SHOW_SPLASH",
                    SET_APP_SETTINGS: "SET_APP_SETTINGS",
                    SET_END_POINTS: "END_POINTS",
                    SET_REGION: "SET_REGION",
                    INC_RUNNING_AJAX_REQUESTS: "INC_RUNNING_AJAX_REQUESTS",
                    DEC_RUNNING_AJAX_REQUESTS: "DEC_RUNNING_AJAX_REQUESTS",
                    TOGGLE_IS_COLUMN_SHOWN: "TOGGLE_IS_COLUMN_SHOWN",
                    SET_DISABLE_ADD: "SET_DISABLE_ADD"
                },
                actions: {
                    SAVE_COLUMNS: "SAVE_COLUMNS"
                }
            },
            E = u(I, "root"),
            D = {
                running_ajax_requests: 0,
                csrf_key: "",
                end_points: {},
                show_splash: !1,
                columns_need_saving: !1,
                app_settings: {},
                disable_add: !1,
                mail_server_url: "mail.smtp2go.com"
            },
            O = (d = {}, Object(l["a"])(d, I.getters.IS_AJAX_RUNNING, (function(t) {
                return t.running_ajax_requests > 0
            })), Object(l["a"])(d, I.getters.BACKEND_URL, (function(t) {
                return function(e, i) {
                    return "" !== i ? t.end_points[e] + "?action=" + i + "&CSRF_key=" + t.csrf_key : t.end_points[e] + "?CSRF_key=" + t.csrf_key
                }
            })), Object(l["a"])(d, I.getters.GET_SHOW_SPLASH, (function(t) {
                return t.show_splash
            })), Object(l["a"])(d, I.getters.GET_DISABLE_ADD, (function(t) {
                return t.disable_add
            })), Object(l["a"])(d, I.getters.GET_IS_COLUMN_SHOWN, (function(t) {
                return function(e) {
                    var i = "show_ipauth_" + e + "_col";
                    return void 0 !== t.app_settings[i] && null !== t.app_settings[i] && t.app_settings[i]
                }
            })), Object(l["a"])(d, I.getters.GET_MAIL_SERVER_URL, (function(t) {
                return t.mail_server_url
            })), d),
            A = (_ = {}, Object(l["a"])(_, I.mutations.SET_CSRF_KEY, (function(t, e) {
                t.csrf_key = e
            })), Object(l["a"])(_, I.mutations.SET_SHOW_SPLASH, (function(t, e) {
                t.show_splash = e
            })), Object(l["a"])(_, I.mutations.SET_END_POINTS, (function(t, e) {
                t.end_points = e
            })), Object(l["a"])(_, I.mutations.SET_APP_SETTINGS, (function(t, e) {
                t.app_settings = e
            })), Object(l["a"])(_, I.mutations.INC_RUNNING_AJAX_REQUESTS, (function(t) {
                t.running_ajax_requests++
            })), Object(l["a"])(_, I.mutations.DEC_RUNNING_AJAX_REQUESTS, (function(t) {
                t.running_ajax_requests--
            })), Object(l["a"])(_, I.mutations.TOGGLE_IS_COLUMN_SHOWN, (function(t, e) {
                var i = "show_ipauth_" + e + "_col";
                s["a"].set(t.app_settings, i, !t.app_settings[i]), t.columns_need_saving = !0
            })), Object(l["a"])(_, I.mutations.SET_REGION, (function(t, e) {
                "au" === e ? t.mail_server_url = "mail-au.smtp2go.com" : "eu" === e && (t.mail_server_url = "mail-eu.smtp2go.com")
            })), Object(l["a"])(_, I.mutations.SET_DISABLE_ADD, (function(t, e) {
                t.disable_add = e
            })), _),
            T = Object(l["a"])({}, I.actions.SAVE_COLUMNS, (function(t) {
                if (t.state.columns_need_saving) return new Promise((function(e, i) {
                    b.put(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "save-columns"), {
                        shown_columns: t.state.app_settings
                    }).then((function(i) {
                        t.columns_need_saving = !1, e(i)
                    })).catch((function(t) {
                        i(t)
                    }))
                }))
            })),
            P = {
                namespaced: !0,
                state: D,
                getters: O,
                mutations: A,
                actions: T
            };

        function C(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function L(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? C(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var S = {
                getters: {
                    GET_PENDING_IPS: "GET_PENDING_IPS",
                    IS_FETCHING_PENDING_IPS: "IS_FETCHING_PENDING_IPS",
                    GET_ACTIVE_IPS: "GET_ACTIVE_IPS",
                    IS_FETCHING_ACTIVE_IPS: "IS_FETCHING_ACTIVE_IPS",
                    IS_EDITING_IP: "IS_EDITING_IP",
                    GET_DEFAULT_RL_LIMIT: "GET_DEFAULT_RL_LIMIT",
                    GET_DEFAULT_RL_PERIOD: "GET_DEFAULT_RL_PERIOD",
                    GET_IP_POOL_LABEL: "GET_IP_POOL_LABEL",
                    GET_IP_POOLS: "GET_IP_POOLS",
                    HAS_IP_POOLS: "HAS_IP_POOLS",
                    GET_IS_ALLOWED_ARCHIVING: "GET_IS_ALLOWED_ARCHIVING",
                    GET_SHOW_STATUS_COLUMN: "GET_SHOW_STATUS_COLUMN",
                    EDIT_MODAL_IP_ADDRESS: "EDIT_MODAL_IP_ADDRESS",
                    EDIT_MODAL_OLD_IP_ADDRESS: "EDIT_MODAL_OLD_IP_ADDRESS",
                    EDIT_MODAL_DESCRIPTION: "EDIT_MODAL_DESCRIPTION",
                    EDIT_MODAL_IPPOOL: "EDIT_MODAL_IPPOOL",
                    EDIT_MODAL_RL_LIMIT: "EDIT_MODAL_RL_LIMIT",
                    EDIT_MODAL_RL_PERIOD: "EDIT_MODAL_RL_PERIOD",
                    EDIT_MODAL_RL_CUSTOM: "EDIT_MODAL_RL_CUSTOM",
                    EDIT_MODAL_FB_ENABLED: "EDIT_MODAL_FB_ENABLED",
                    EDIT_MODAL_FB_TEXT: "EDIT_MODAL_FB_TEXT",
                    EDIT_MODAL_FB_HTML: "EDIT_MODAL_FB_HTML",
                    EDIT_MODAL_OPEN_TRACKING: "EDIT_MODAL_OPEN_TRACKING",
                    EDIT_MODAL_CLICK_TRACKING: "EDIT_MODAL_CLICK_TRACKING",
                    EDIT_MODAL_BLOCKED: "EDIT_MODAL_BLOCKED",
                    EDIT_MODAL_SANDBOX_MODE: "EDIT_MODAL_SANDBOX_MODE",
                    EDIT_MODAL_ARCHIVING: "EDIT_MODAL_ARCHIVING",
                    EDIT_MODAL_ARCHIVING_INITIAL: "EDIT_MODAL_ARCHIVING_INITIAL",
                    EDIT_MODAL_AUDIT_EMAIL: "EDIT_MODAL_AUDIT_EMAIL",
                    EDIT_MODAL_BOUNCE_NOTIFICATIONS: "EDIT_MODAL_BOUNCE_NOTIFICATIONS",
                    EDIT_MODAL_BOUNCE_TARGET: "EDIT_MODAL_BOUNCE_TARGET"
                },
                mutations: {
                    SET_PENDING_IPS: "SET_PENDING_IPS",
                    SET_IS_FETCHING_PENDING_IPS: "SET_IS_FETCHING_PENDING_IPS",
                    SET_ACTIVE_IPS: "SET_ACTIVE_IPS",
                    SET_IS_FETCHING_ACTIVE_IPS: "SET_IS_FETCHING_ACTIVE_IPS",
                    ADD_PENDING_IP: "ADD_PENDING_IP",
                    ADD_ACTIVE_IP: "ADD_ACTIVE_IP",
                    SET_PENDING_IP_PROPERTY: "SET_PENDING_IP_PROPERTY",
                    SET_ACTIVE_IP_PROPERTY: "SET_ACTIVE_IP_PROPERTY",
                    UPDATE_PENDING_IP_TIMESTAMP: "UPDATE_PENDING_IP_TIMESTAMP",
                    REMOVE_PENDING_IP: "REMOVE_PENDING_IP",
                    REMOVE_ACTIVE_IP: "REMOVE_ACTIVE_IP",
                    UPDATE_ACTIVE_IP: "UPDATE_ACTIVE_IP",
                    TOGGLE_EDIT_MODAL: "TOGGLE_EDIT_MODAL",
                    UPDATE_DEFAULT_RATELIMIT: "UPDATE_DEFAULT_RATELIMIT",
                    SET_DEFAULT_RL_LIMIT: "SET_DEFAULT_RL_LIMIT",
                    SET_DEFAULT_RL_PERIOD: "SET_DEFAULT_RL_PERIOD",
                    SET_IP_POOLS: "SET_IP_POOLS",
                    SET_IS_ALLOWED_ARCHIVING: "SET_IS_ALLOWED_ARCHIVING",
                    EDIT_MODAL_IP_ADDRESS: "EDIT_MODAL_IP_ADDRESS",
                    EDIT_MODAL_DESCRIPTION: "EDIT_MODAL_DESCRIPTION",
                    EDIT_MODAL_IPPOOL: "EDIT_MODAL_IPPOOL",
                    EDIT_MODAL_RL_LIMIT: "EDIT_MODAL_RL_LIMIT",
                    EDIT_MODAL_RL_PERIOD: "EDIT_MODAL_RL_PERIOD",
                    EDIT_MODAL_RL_CUSTOM: "EDIT_MODAL_RL_CUSTOM",
                    EDIT_MODAL_FB_ENABLED: "EDIT_MODAL_FB_ENABLED",
                    EDIT_MODAL_FB_TEXT: "EDIT_MODAL_FB_TEXT",
                    EDIT_MODAL_FB_HTML: "EDIT_MODAL_FB_HTML",
                    EDIT_MODAL_OPEN_TRACKING: "EDIT_MODAL_OPEN_TRACKING",
                    EDIT_MODAL_CLICK_TRACKING: "EDIT_MODAL_CLICK_TRACKING",
                    EDIT_MODAL_BLOCKED: "EDIT_MODAL_BLOCKED",
                    EDIT_MODAL_SANDBOX_MODE: "EDIT_MODAL_SANDBOX_MODE",
                    EDIT_MODAL_ARCHIVING: "EDIT_MODAL_ARCHIVING",
                    EDIT_MODAL_ARCHIVING_INITIAL: "EDIT_MODAL_ARCHIVING_INITIAL",
                    EDIT_MODAL_AUDIT_EMAIL: "EDIT_MODAL_AUDIT_EMAIL",
                    EDIT_MODAL_BOUNCE_NOTIFICATIONS: "EDIT_MODAL_BOUNCE_NOTIFICATIONS",
                    EDIT_MODAL_BOUNCE_TARGET: "EDIT_MODAL_BOUNCE_TARGET"
                },
                actions: {
                    LOAD_PENDING_IPS: "LOAD_PENDING_IPS",
                    LOAD_ACTIVE_IPS: "LOAD_ACTIVE_IPS",
                    LOOKUP_IP_EMAILS: "LOOKUP_IP_EMAILS",
                    ADD_PENDING_IP: "ADD_PENDING_IP",
                    RESEND_VERIFY_EMAIL: "RESEND_VERIFY_EMAIL",
                    REMOVE_PENDING_IP: "REMOVE_PENDING_IP",
                    REMOVE_ACTIVE_IP: "REMOVE_ACTIVE_IP",
                    UPDATE_ACTIVE_IP: "UPDATE_ACTIVE_IP",
                    UPDATE_DEFAULT_RATELIMIT: "UPDATE_DEFAULT_RATELIMIT"
                }
            },
            M = u(S, "ipauth"),
            k = {
                pending_ips: [],
                isFetchingPendingIps: !1,
                active_ips: [],
                ip_pools: [],
                default_ippool: -1,
                default_ippool_label: "",
                isFetchingActiveIps: !1,
                isEditModalShowing: !1,
                editModalData: {},
                defaultFBText: "To unsubscribe click: %%UNSUBSCRIBE%%",
                defaultFBHTML: '<br />\n<p><a href="%%UNSUBSCRIBE%%">unsubscribe</a></p>',
                defaultRLLimit: null,
                defaultRLPeriod: null,
                isAllowedArchiving: !1,
                show_status_column: !1
            },
            y = (p = {}, Object(l["a"])(p, S.getters.GET_PENDING_IPS, (function(t) {
                return t.pending_ips
            })), Object(l["a"])(p, S.getters.GET_ACTIVE_IPS, (function(t) {
                return t.active_ips
            })), Object(l["a"])(p, S.getters.IS_FETCHING_ACTIVE_IPS, (function(t) {
                return t.isFetchingActiveIps
            })), Object(l["a"])(p, S.getters.IS_FETCHING_PENDING_IPS, (function(t) {
                return t.isFetchingPendingIps
            })), Object(l["a"])(p, S.getters.IS_EDITING_IP, (function(t) {
                return t.isEditModalShowing
            })), Object(l["a"])(p, S.getters.GET_DEFAULT_RL_LIMIT, (function(t) {
                return t.defaultRLLimit
            })), Object(l["a"])(p, S.getters.GET_DEFAULT_RL_PERIOD, (function(t) {
                return t.defaultRLPeriod
            })), Object(l["a"])(p, S.getters.HAS_IP_POOLS, (function(t) {
                return t.ip_pools.length > 0
            })), Object(l["a"])(p, S.getters.GET_IP_POOLS, (function(t) {
                return t.ip_pools
            })), Object(l["a"])(p, S.getters.GET_IP_POOL_LABEL, (function(t) {
                return function(e) {
                    var i = null;
                    return "default" === e ? "Use default (" + t.default_ippool_label + ")" : (void 0 !== e && null !== e && t.ip_pools.forEach((function(t) {
                        t.id === e && (i = t.label)
                    })), i)
                }
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_IP_ADDRESS, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.ip && null !== t.editModalData.ip ? t.editModalData.ip : ""
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_OLD_IP_ADDRESS, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.old_ip && null !== t.editModalData.old_ip ? t.editModalData.old_ip : ""
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_DESCRIPTION, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.description && null !== t.editModalData.description ? t.editModalData.description : ""
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_IPPOOL, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.ippool && null !== t.editModalData.ippool ? t.editModalData.ippool : ""
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_RL_LIMIT, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.ratelimit_limit && null !== t.editModalData.ratelimit_limit ? t.editModalData.ratelimit_limit : ""
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_RL_PERIOD, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.ratelimit_period && null !== t.editModalData.ratelimit_period ? t.editModalData.ratelimit_period : "unlimited"
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_RL_CUSTOM, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.ratelimit_custom && null !== t.editModalData.ratelimit_custom && t.editModalData.ratelimit_custom
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_FB_ENABLED, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.feedback_enabled && null !== t.editModalData.feedback_enabled && t.editModalData.feedback_enabled
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_FB_TEXT, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.feedback_text && null !== t.editModalData.feedback_text ? t.editModalData.feedback_text : t.defaultFBText
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_FB_HTML, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.feedback_html && null !== t.editModalData.feedback_html ? t.editModalData.feedback_html : t.defaultFBHTML
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_OPEN_TRACKING, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.open_tracking && null !== t.editModalData.open_tracking && t.editModalData.open_tracking
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_CLICK_TRACKING, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.click_tracking && null !== t.editModalData.click_tracking && t.editModalData.click_tracking
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_BLOCKED, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.blocked && null !== t.editModalData.blocked && t.editModalData.blocked
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_SANDBOX_MODE, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.sandbox_mode && null !== t.editModalData.sandbox_mode && t.editModalData.sandbox_mode
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_ARCHIVING, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.archiving && null !== t.editModalData.archiving && t.editModalData.archiving
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_ARCHIVING_INITIAL, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.archiving_initial && null !== t.editModalData.archiving_initial && t.editModalData.archiving_initial
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_AUDIT_EMAIL, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.audit_email && null !== t.editModalData.audit_email ? t.editModalData.audit_email : ""
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_BOUNCE_NOTIFICATIONS, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.bounce_notifications && null !== t.editModalData.bounce_notifications && t.editModalData.bounce_notifications
            })), Object(l["a"])(p, S.getters.EDIT_MODAL_BOUNCE_TARGET, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.bounce_target && null !== t.editModalData.bounce_target ? t.editModalData.bounce_target : ""
            })), Object(l["a"])(p, S.getters.GET_IS_ALLOWED_ARCHIVING, (function(t) {
                return t.isAllowedArchiving
            })), Object(l["a"])(p, S.getters.GET_SHOW_STATUS_COLUMN, (function(t) {
                return t.show_status_column
            })), p),
            N = (m = {}, Object(l["a"])(m, S.mutations.SET_PENDING_IPS, (function(t, e) {
                t.pending_ips = e
            })), Object(l["a"])(m, S.mutations.SET_ACTIVE_IPS, (function(t, e) {
                t.active_ips = e, t.show_status_column = !1, t.active_ips.forEach((function(e) {
                    (e.blocked || e.sandbox_mode) && (t.show_status_column = !0)
                }))
            })), Object(l["a"])(m, S.mutations.SET_IS_FETCHING_ACTIVE_IPS, (function(t, e) {
                t.isFetchingActiveIps = e
            })), Object(l["a"])(m, S.mutations.SET_IS_FETCHING_PENDING_IPS, (function(t, e) {
                t.isFetchingPendingIps = e
            })), Object(l["a"])(m, S.mutations.ADD_PENDING_IP, (function(t, e) {
                s["a"].set(t.pending_ips, t.pending_ips.length, e)
            })), Object(l["a"])(m, S.mutations.ADD_ACTIVE_IP, (function(t, e) {
                s["a"].set(t.active_ips, t.active_ips.length, e), t.show_status_column = !1, t.active_ips.forEach((function(e) {
                    (e.blocked || e.sandbox_mode) && (t.show_status_column = !0)
                }))
            })), Object(l["a"])(m, S.mutations.SET_PENDING_IP_PROPERTY, (function(t, e) {
                var i = e.pending_ip,
                    a = e.key,
                    n = e.value;
                s["a"].set(i, a, n)
            })), Object(l["a"])(m, S.mutations.SET_ACTIVE_IP_PROPERTY, (function(t, e) {
                var i = e.active_ip,
                    a = e.key,
                    n = e.value;
                s["a"].set(i, a, n)
            })), Object(l["a"])(m, S.mutations.UPDATE_PENDING_IP_TIMESTAMP, (function(t, e) {
                var i = e.ip_address,
                    a = e.timestamp,
                    n = null;
                t.pending_ips.forEach((function(t) {
                    t.ip === i && (n = t)
                })), null !== n && s["a"].set(n, "timestamp", a)
            })), Object(l["a"])(m, S.mutations.REMOVE_PENDING_IP, (function(t, e) {
                var i = e.ip_address;
                t.pending_ips.forEach((function(e, s) {
                    e.ip === i && t.pending_ips.splice(s, 1)
                }))
            })), Object(l["a"])(m, S.mutations.REMOVE_ACTIVE_IP, (function(t, e) {
                var i = e.ip_address;
                t.active_ips.forEach((function(e, s) {
                    e.ip === i && t.active_ips.splice(s, 1)
                })), t.show_status_column = !1, t.active_ips.forEach((function(e) {
                    (e.blocked || e.sandbox_mode) && (t.show_status_column = !0)
                }))
            })), Object(l["a"])(m, S.mutations.UPDATE_ACTIVE_IP, (function(t, e) {
                var i = e.old_ip_address,
                    a = e.results;
                t.active_ips.forEach((function(e, n) {
                    e.ip === i && s["a"].set(t.active_ips, n, a)
                })), t.show_status_column = !1, t.active_ips.forEach((function(e) {
                    (e.blocked || e.sandbox_mode) && (t.show_status_column = !0)
                }))
            })), Object(l["a"])(m, S.mutations.TOGGLE_EDIT_MODAL, (function(t, e) {
                var i = e.visible,
                    s = e.data;
                t.isEditModalShowing = i, i && (s.old_ip = s.ip, s.archiving_initial = s.archiving, t.editModalData = L({}, s))
            })), Object(l["a"])(m, S.mutations.SET_DEFAULT_RL_LIMIT, (function(t, e) {
                t.defaultRLLimit = e
            })), Object(l["a"])(m, S.mutations.SET_DEFAULT_RL_PERIOD, (function(t, e) {
                t.defaultRLPeriod = e
            })), Object(l["a"])(m, S.mutations.SET_IP_POOLS, (function(t, e) {
                t.ip_pools = e, t.ip_pools.forEach((function(e) {
                    e.is_default && (t.default_ippool = e.id, t.default_ippool_label = e.label)
                }))
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_IP_ADDRESS, (function(t, e) {
                t.editModalData.ip = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_DESCRIPTION, (function(t, e) {
                t.editModalData.description = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_IPPOOL, (function(t, e) {
                t.editModalData.ippool = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_RL_LIMIT, (function(t, e) {
                t.editModalData.ratelimit_limit = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_RL_PERIOD, (function(t, e) {
                t.editModalData.ratelimit_period = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_RL_CUSTOM, (function(t, e) {
                t.editModalData.ratelimit_custom = e, e || (t.editModalData.ratelimit_limit = t.defaultRLLimit, t.editModalData.ratelimit_period = t.defaultRLPeriod)
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_FB_ENABLED, (function(t, e) {
                t.editModalData.feedback_enabled = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_FB_TEXT, (function(t, e) {
                t.editModalData.feedback_text = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_FB_HTML, (function(t, e) {
                t.editModalData.feedback_html = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_OPEN_TRACKING, (function(t, e) {
                t.editModalData.open_tracking = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_CLICK_TRACKING, (function(t, e) {
                t.editModalData.click_tracking = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_BLOCKED, (function(t, e) {
                t.editModalData.blocked = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_SANDBOX_MODE, (function(t, e) {
                t.editModalData.sandbox_mode = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_ARCHIVING, (function(t, e) {
                t.editModalData.archiving = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_ARCHIVING_INITIAL, (function(t, e) {
                t.editModalData.archiving_initial = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_AUDIT_EMAIL, (function(t, e) {
                t.editModalData.audit_email = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_BOUNCE_NOTIFICATIONS, (function(t, e) {
                t.editModalData.bounce_notifications = e
            })), Object(l["a"])(m, S.mutations.EDIT_MODAL_BOUNCE_TARGET, (function(t, e) {
                t.editModalData.bounce_target = e
            })), Object(l["a"])(m, S.mutations.SET_IS_ALLOWED_ARCHIVING, (function(t, e) {
                t.isAllowedArchiving = e
            })), m),
            R = (f = {}, Object(l["a"])(f, S.actions.LOAD_PENDING_IPS, (function(t) {
                return t.commit(S.mutations.SET_IS_FETCHING_PENDING_IPS, !0), new Promise((function(e, i) {
                    b.get(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "load-pending-ips")).then((function(i) {
                        t.commit(S.mutations.SET_PENDING_IPS, i.results), e(i)
                    })).catch((function(t) {
                        i(t)
                    }))
                })).then((function() {
                    t.commit(S.mutations.SET_IS_FETCHING_PENDING_IPS, !1)
                }))
            })), Object(l["a"])(f, S.actions.LOAD_ACTIVE_IPS, (function(t) {
                return t.commit(S.mutations.SET_IS_FETCHING_ACTIVE_IPS, !0), new Promise((function(e, i) {
                    b.get(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "load-active-ips")).then((function(i) {
                        t.commit(S.mutations.SET_ACTIVE_IPS, i.results), e(i)
                    })).catch((function(t) {
                        i(t)
                    }))
                })).then((function() {
                    t.commit(S.mutations.SET_IS_FETCHING_ACTIVE_IPS, !1)
                }))
            })), Object(l["a"])(f, S.actions.LOOKUP_IP_EMAILS, (function(t, e) {
                var i = e.ip_address,
                    s = e.description;
                return new Promise((function(e, a) {
                    b.post(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "lookup-ip-emails"), {
                        ip_address: i,
                        description: s
                    }).then((function(t) {
                        e(t)
                    })).catch((function(t) {
                        a(t)
                    }))
                }))
            })), Object(l["a"])(f, S.actions.ADD_PENDING_IP, (function(t, e) {
                var i = e.ip_address,
                    s = e.description,
                    a = e.email,
                    n = e.message;
                return new Promise((function(e, o) {
                    b.put(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "add-pending-ip"), {
                        ip_address: i,
                        description: s,
                        email: a,
                        message: n
                    }).then((function(i) {
                        t.commit(S.mutations.ADD_PENDING_IP, i.results), e(i)
                    })).catch((function(t) {
                        o(t)
                    }))
                }))
            })), Object(l["a"])(f, S.actions.RESEND_VERIFY_EMAIL, (function(t, e) {
                var i = e.ip_address,
                    s = e.timestamp;
                return new Promise((function(e, a) {
                    b.post(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "resend-verify-email"), {
                        ip_address: i,
                        timestamp: s
                    }).then((function(i) {
                        t.commit(S.mutations.UPDATE_PENDING_IP_TIMESTAMP, {
                            ip_address: i.results.ip,
                            timestamp: i.results.timestamp
                        }), e(i)
                    })).catch((function(t) {
                        a(t)
                    }))
                }))
            })), Object(l["a"])(f, S.actions.REMOVE_PENDING_IP, (function(t, e) {
                var i = e.ip_address;
                return new Promise((function(e, s) {
                    b.post(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "remove-pending-ip"), {
                        ip_address: i
                    }).then((function(s) {
                        t.commit(S.mutations.REMOVE_PENDING_IP, {
                            ip_address: i
                        }), e(s)
                    })).catch((function(t) {
                        s(t)
                    }))
                }))
            })), Object(l["a"])(f, S.actions.REMOVE_ACTIVE_IP, (function(t, e) {
                var i = e.ip_address;
                return new Promise((function(e, s) {
                    b.post(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "remove-active-ip"), {
                        ip_address: i
                    }).then((function(s) {
                        t.commit(S.mutations.REMOVE_ACTIVE_IP, {
                            ip_address: i
                        }), e(s)
                    })).catch((function(t) {
                        s(t)
                    }))
                }))
            })), Object(l["a"])(f, S.actions.UPDATE_ACTIVE_IP, (function(t, e) {
                var i = e.old_ip_address,
                    s = e.ip_address,
                    a = e.description,
                    n = e.ippool,
                    o = e.ratelimit_limit,
                    r = e.ratelimit_period,
                    l = e.ratelimit_custom,
                    c = e.feedback_enabled,
                    u = e.feedback_text,
                    d = e.feedback_html,
                    _ = e.open_tracking,
                    p = e.click_tracking,
                    m = e.blocked,
                    f = e.sandbox_mode,
                    h = e.archiving,
                    v = e.audit_email,
                    g = e.bounce_notifications;
                return new Promise((function(e, I) {
                    var D = !1;
                    k.ip_pools.forEach((function(t) {
                        t.id === n && (D = t.is_default)
                    })), b.post(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "update-active-ip"), {
                        old_ip_address: i,
                        ip_address: s,
                        description: a,
                        ippool: n,
                        ratelimit_limit: o,
                        ratelimit_period: r,
                        ratelimit_custom: l,
                        feedback_enabled: c,
                        feedback_text: u,
                        feedback_html: d,
                        open_tracking: _,
                        click_tracking: p,
                        blocked: m,
                        sandbox_mode: f,
                        archiving: h,
                        audit_email: v,
                        bounce_notifications: g,
                        use_default_ippool: D
                    }).then((function(s) {
                        t.commit(S.mutations.UPDATE_ACTIVE_IP, {
                            old_ip_address: i,
                            results: s.results
                        }), e(s)
                    })).catch((function(t) {
                        I(t)
                    }))
                }))
            })), Object(l["a"])(f, S.actions.UPDATE_DEFAULT_RATELIMIT, (function(t, e) {
                var i = e.ratelimit_limit,
                    s = e.ratelimit_period;
                return new Promise((function(e, a) {
                    b.post(t.rootGetters[E.getters.BACKEND_URL]("IP Authentication", "update-default-ratelimit"), {
                        ratelimit_limit: i,
                        ratelimit_period: s
                    }).then((function(i) {
                        t.commit(S.mutations.SET_DEFAULT_RL_LIMIT, i.results.ratelimit_limit), t.commit(S.mutations.SET_DEFAULT_RL_PERIOD, i.results.ratelimit_period), e(i)
                    })).catch((function(t) {
                        a(t)
                    }))
                }))
            })), f),
            w = {
                namespaced: !0,
                state: k,
                getters: y,
                mutations: N,
                actions: R
            },
            G = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("page", {
                    attrs: {
                        title: "IP Authentication"
                    },
                    scopedSlots: t._u([t.isEditActive ? null : {
                        key: "description",
                        fn: function() {
                            return [i("p", [t._v("\n      IP addresses added to SMTP2GO are permitted to send emails without using an SMTP username/password. You can enter either individual IP addresses, or IP address ranges using CIDR notation.\n    ")])]
                        },
                        proxy: !0
                    }], null, !0)
                }, [i("div", {
                    staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12 section-ipauth",
                    class: {
                        "is-active": !t.isEditActive
                    }
                }, [t.has_pending_ips ? i("div", {
                    staticClass: "card padded dataTables_wrapper"
                }, [i("div", {
                    staticClass: "card--tab has-full-functions"
                }, [i("h2", {
                    staticClass: "card--title"
                }, [t._v("\n          Pending Requests\n        ")]), i("div", {
                    staticClass: "card-functions"
                })]), i("div", {
                    staticClass: "top search-grouped bar-full placeholder"
                }), t.isFetchingPendingIps ? i("div", {
                    staticClass: "pending-ips-loader"
                }, [i("base-loader")], 1) : t._e(), t.isFetchingPendingIps ? t._e() : i("pending-requests-table"), t.has_pending_ips ? i("div", {
                    staticClass: "note-wrapper"
                }, [i("info-note", [i("p", [t._v("\n            If you need to send the request to a different email, cancel the request and re-add the IP Address.\n          ")])])], 1) : t._e()], 1) : t._e(), i("div", {
                    staticClass: "card padded dataTables_wrapper card-manage"
                }, [i("div", {
                    staticClass: "card--tab has-full-functions"
                }, [i("h2", {
                    staticClass: "card--title"
                }, [t._v("\n          Manage IP Addresses\n        ")]), i("div", {
                    staticClass: "card-functions"
                }, [i("button", {
                    staticClass: "btn button-dropdown",
                    attrs: {
                        type: "button",
                        role: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.setPage("add-ip-address")
                        }
                    }
                }, [t._v("\n            Add "), i("span", {
                    staticClass: "mobile-hide"
                }, [t._v("IP Address")]), i("span", {
                    staticClass: "desktop-hide"
                }, [t._v("new")])])])]), i("div", {
                    staticClass: "top search-grouped bar-full placeholder"
                }), t.isFetchingActiveIps ? i("div", {
                    staticClass: "manage-ips-loader"
                }, [i("base-loader", {
                    attrs: {
                        "is-block": ""
                    }
                })], 1) : t._e(), t.isFetchingActiveIps ? t._e() : i("manage-ip-addresses-table"), t.isFetchingActiveIps || t.has_active_ips ? t._e() : i("div", {
                    staticClass: "note-wrapper"
                }, [i("info-note", [i("p", [t._v("\n            You don't have any active IP addresses.\n          ")])])], 1), i("ip-addresses-settings")], 1)]), i("ip-edit", {
                    attrs: {
                        "is-active": t.isEditActive
                    }
                })], 1)
            },
            j = [],
            x = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [t.isEditActive ? t._e() : i("header", {
                    staticClass: "sg-feature--header"
                }, [i("h3", {
                    staticClass: "page-title"
                }, [t.hasBackButton ? i("back-button", {
                    staticClass: "back-button",
                    on: {
                        click: t.goBack
                    }
                }) : i("span", {
                    staticClass: "title-icon"
                }, [i("svg", {
                    attrs: {
                        fill: "none",
                        height: "35",
                        viewBox: "0 0 35 35",
                        width: "35",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [i("linearGradient", {
                    attrs: {
                        id: "a",
                        gradientUnits: "userSpaceOnUse",
                        x1: "17.7236",
                        x2: "17.7236",
                        y1: ".949707",
                        y2: "34.9497"
                    }
                }, [i("stop", {
                    attrs: {
                        offset: "0",
                        "stop-color": "#52b3ee"
                    }
                }), i("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "#3ca4e3"
                    }
                })], 1), i("rect", {
                    attrs: {
                        fill: "url(#a)",
                        height: "34",
                        rx: "5",
                        width: "34",
                        x: ".723633",
                        y: ".949707"
                    }
                }), i("g", {
                    attrs: {
                        fill: "#fff"
                    }
                }, [i("path", {
                    attrs: {
                        "clip-rule": "evenodd",
                        d: "m10.4968 16.5318c.0497.5044.151.9937.2986 1.4624.0004.0014.0009.0027.0013.0041.143.4532.3292.8873.5539 1.2973.5054 1.0664 1.1542 2.1251 1.9436 3.2347 1.0674 1.5004 2.3919 3.0938 3.9665 4.9253.1687.1962.3402.3952.5146.597.1417-.1461.3255-.3371.5436-.5716.8898-.9567 2.35-2.638 3.8449-4.9583.4876-.7569.979-1.5818 1.4554-2.4717.3931-.5457.7124-1.1482.9431-1.7928.0836-.2337.1556-.4729.2152-.7169.0186-.0706.0344-.1399.0476-.2081.1047-.4908.1598-1 .1598-1.5221 0-.2974-.0179-.5906-.0526-.8787-.4338-3.5961-3.496-6.38298-7.2091-6.38298-4.0105 0-7.2617 3.25118-7.2617 7.26168 0 .2432.012.4836.0353.7207zm15.0937.977c.1176-.5473.1794-1.1153.1794-1.6977 0-4.4441-3.6026-8.04673-8.0467-8.04673s-8.04672 3.60263-8.04672 8.04673c0 1.3939.35442 2.705.97802 3.8481 1.3227 2.7762 3.5496 5.4612 6.5268 8.9067.144.1667.3514.2652.5716.2715s.4329-.0802.5862-.2384c.9253-.9547 3.6076-3.7764 5.9477-8.1318.5819-.8188 1.0144-1.7511 1.2578-2.7572.0172-.0674.0325-.1345.0459-.2012z",
                        "fill-rule": "evenodd"
                    }
                }), i("path", {
                    attrs: {
                        "clip-rule": "evenodd",
                        d: "m24.8251 17.3332c.1047-.4908.1598-1 .1598-1.5221 0-.2974-.0179-.5906-.0526-.8787-.4338-3.5961-3.496-6.38298-7.2091-6.38298-4.0105 0-7.2617 3.25118-7.2617 7.26168 0 .2432.012.4836.0353.7207.0497.5044.151.9937.2986 1.4624l.0013.0041c.143.4532.3292.8873.5539 1.2973.5054 1.0664 1.1542 2.1251 1.9436 3.2347 1.0674 1.5004 2.3919 3.0938 3.9665 4.9253.0722.084.145.1685.2182.2536.0979.1135.1967.228.2964.3434.0889-.0916.1943-.2009.3143-.3274.0714-.0753.148-.1567.2293-.2442.8898-.9567 2.35-2.638 3.8449-4.9583.4876-.7569.979-1.5818 1.4554-2.4717.3931-.5457.7124-1.1482.9431-1.7928.0836-.2337.1556-.4729.2152-.7169.0186-.0706.0344-.1399.0476-.2081zm-7.0322 10.0481c.0615-.065.1266-.1343.1952-.208.8775-.9436 2.3194-2.6037 3.7958-4.8954.4816-.7474.9667-1.5618 1.4369-2.4402.0095-.0176.0201-.0346.0318-.0508.3687-.5119.668-1.0768.8842-1.681.0784-.219.1458-.4432.2018-.6719l.0018-.0077c.0162-.0613.0298-.121.0411-.179l.0016-.0084c.0981-.46.1499-.9376.1499-1.4278 0-.2793-.0168-.5544-.0493-.8245-.4067-3.372-3.2788-5.98531-6.7605-5.98531-3.7609 0-6.8098 3.04881-6.8098 6.80981 0 .2284.0112.454.0331.6764.0466.4731.1416.9317.2799 1.371l.0012.0039c.1341.4247.3086.8316.5193 1.216.0042.0078.0082.0157.012.0237.491 1.036 1.1247 2.0715 1.9035 3.1663 1.0544 1.4821 2.3671 3.062 3.9409 4.8926.0628.0731.126.1465.1896.2203zm7.7976-9.8725c-.0134.0667-.0287.1338-.0459.2012-.2434 1.0061-.6759 1.9384-1.2578 2.7572-2.3401 4.3554-5.0224 7.1771-5.9477 8.1318-.1533.1582-.366.2447-.5862.2384s-.4276-.1048-.5716-.2715c-2.9772-3.4455-5.2041-6.1305-6.5268-8.9067-.6236-1.1431-.97802-2.4542-.97802-3.8481 0-4.4441 3.60262-8.04673 8.04672-8.04673s8.0467 3.60263 8.0467 8.04673c0 .5824-.0618 1.1504-.1794 1.6977zm-15.3386 2.3559c-.65525-1.2053-1.02729-2.5867-1.02729-4.0536 0-4.6936 3.80499-8.4986 8.49859-8.4986 4.6937 0 8.4986 3.805 8.4986 8.4986 0 .6135-.0651 1.2123-.1889 1.7897-.0146.0726-.0313.1454-.0498.2181-.255 1.0527-.7058 2.0285-1.3115 2.8868-2.3657 4.395-5.0726 7.2426-6.0081 8.2078-.2415.2492-.5766.3855-.9235.3755-.3469-.0099-.6737-.1651-.9006-.4277-2.9658-3.4323-5.2335-6.16-6.5875-8.9966z",
                        "fill-rule": "evenodd"
                    }
                }), i("path", {
                    attrs: {
                        d: "m15.6636 19.5h-1.54v-6.91h1.54zm2.8516 0h-1.54v-6.91h2.71c.55 0 1.23.1 1.53.22.94.35 1.25 1.26 1.25 2.12 0 1.24-.59 1.97-1.54 2.26-.3.09-.93.15-1.33.15h-1.08zm0-3.52h1c.27 0 .62-.03.82-.11.29-.12.5-.39.5-.87 0-.49-.22-.8-.58-.93-.18-.06-.47-.09-.7-.09h-1.04z"
                    }
                })])], 1)]), t._v("\n      " + t._s(t.title) + "\n    ")], 1), i("div", {
                    staticClass: "lead-toggle"
                }, [t._t("description")], 2)]), t._t("default")], 2)
            },
            B = [],
            U = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "back-button",
                    on: {
                        click: function(e) {
                            return t.$emit("click")
                        }
                    }
                })
            },
            F = [],
            V = (i("ef5e"), i("2877")),
            H = {},
            q = Object(V["a"])(H, U, F, !1, null, "7a5ad422", null),
            K = q.exports;

        function W(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function Y(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? W(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : W(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var X = {
                components: {
                    BackButton: K
                },
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    hasBackButton: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    goBack: function() {
                        this.$emit("goBack")
                    }
                },
                computed: Y({}, Object(c["b"])({
                    isEditActive: M.getters.IS_EDITING_IP
                }))
            },
            z = X,
            J = (i("e7d6"), Object(V["a"])(z, x, B, !1, null, "0ea32664", null)),
            Q = J.exports,
            Z = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [i("table", {
                    staticClass: "dataTable table table-striped table-hover display"
                }, [i("thead", [i("tr", [t._l(t.displayColumns, (function(e) {
                    return i("th", {
                        key: e.id,
                        attrs: {
                            id: "table-" + e.id
                        }
                    }, [t._v("\n          " + t._s(e.label) + "\n        ")])
                })), i("th", {
                    attrs: {
                        id: "table-options"
                    }
                })], 2)]), i("tbody", t._l(t.pending_ips, (function(e, s) {
                    return i("tr", {
                        key: s,
                        staticClass: "ip-auth-result-wrapper",
                        on: {
                            click: function(i) {
                                return i.preventDefault(), t.requestMobileActions(e)
                            }
                        }
                    }, [t._l(t.displayColumns, (function(s) {
                        return i("td", {
                            key: s.id,
                            class: "cell-" + s.id
                        }, ["request_resend" === s.id ? i("span", {
                            staticClass: "resend-wrapper"
                        }, [i("a", {
                            class: {
                                invisible: t.resendRequests[e.ip]
                            },
                            attrs: {
                                disabled: t.resendRequests[e.ip],
                                href: "#"
                            },
                            on: {
                                click: function(i) {
                                    return i.preventDefault(), t.showConfirmPopup(e)
                                }
                            }
                        }, [t._v("Resend request")]), t.resendRequests[e.ip] ? i("base-loader", {
                            staticClass: "cover-parent loader-smaller",
                            attrs: {
                                "is-block": ""
                            }
                        }) : t._e()], 1) : "request_date" === s.id ? i("span", [i("span", {
                            staticClass: "desktop-hide"
                        }, [t._v(t._s(t.formatMobileTimestamp(e.timestamp)))]), i("span", {
                            staticClass: "mobile-hide"
                        }, [t._v(t._s(t.formatDesktopTimestamp(e.timestamp)))])]) : i("span", {
                            class: {
                                "is-empty": t.isEmptyValue(e[s.id])
                            }
                        }, [t._v(t._s(e[s.id]))])])
                    })), i("td", {
                        staticClass: "table-action"
                    }, [i("div", {
                        staticClass: "drop-content is-active row-delete-popup",
                        class: {
                            "options-on": e.displayDeletePopup
                        }
                    }, [i("a", {
                        staticClass: "table-remove-toggler row-remove-toggler",
                        on: {
                            click: function(i) {
                                return t.deletePopupClick(e)
                            }
                        }
                    }, [t._v("Ã—")]), e.displayDeletePopup ? i("ul", {
                        staticClass: "dropdown-menu dropdown-options "
                    }, [i("li", [i("span", {
                        staticClass: "tooltip-confirm-title"
                    }, [t._v("Confirm remove?")]), i("a", {
                        staticClass: "table-remove confirm",
                        attrs: {
                            href: "javascript:void(0);",
                            disabled: t.deleteRequests[e.ip]
                        },
                        on: {
                            click: function(i) {
                                return t.performDeleteClick(e)
                            }
                        }
                    }, [t.deleteRequests[e.ip] ? i("base-loader", {
                        staticClass: "cover-parent loader-smaller",
                        attrs: {
                            "is-block": "",
                            "is-light": ""
                        }
                    }) : t._e(), i("span", {
                        class: {
                            invisible: t.deleteRequests[e.ip]
                        }
                    }, [t._v("Remove")])], 1), i("a", {
                        staticClass: "table-remove-cancel",
                        attrs: {
                            disabled: t.deleteRequests[e.ip],
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(i) {
                                return t.closeDeletePopUpClick(e)
                            }
                        }
                    }, [t._v("Cancel")])])]) : t._e()])])], 2)
                })), 0)]), i("div", {
                    staticClass: "actions-popup-overlay",
                    class: {
                        "has-animation": t.isMobileOverlayAnimating,
                        "is-visible": t.isMobileActionsActive
                    },
                    on: {
                        click: function(e) {
                            return e.target !== e.currentTarget ? null : t.hideMobileActions.apply(null, arguments)
                        }
                    }
                }), i("transition", {
                    attrs: {
                        name: "modal-fade"
                    }
                }, [t.isMobileActionsActive && "list" === t.mobileActionsPopup ? i("div", {
                    staticClass: "actions-popup"
                }, [i("div", {
                    staticClass: "popup-title"
                }, [t._v(t._s(t.formatMobileIP))]), i("button", {
                    staticClass: "action-resend",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.resendRequestMobile.apply(null, arguments)
                        }
                    }
                }, [t.resendRequests[t.mobileActionsItem.ip] ? i("base-loader") : [t._v("\n          Resend request\n        ")]], 2), i("button", {
                    staticClass: "action-delete",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.showMobileDeleteConfirm.apply(null, arguments)
                        }
                    }
                }, [t._v("Delete request")])]) : t.isMobileActionsActive && "deleteConfirm" === t.mobileActionsPopup ? i("ul", {
                    staticClass: "dropdown-menu dropdown-options remove-confirm-popup"
                }, [i("li", [i("span", {
                    staticClass: "row-confirm-title"
                }, [t._v("Confirm remove?")]), i("a", {
                    staticClass: "row-remove confirm",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.resendDeleteMobile.apply(null, arguments)
                        }
                    }
                }, [t._v("Remove")]), i("a", {
                    staticClass: "row-remove-cancel",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.hideMobileActions.apply(null, arguments)
                        }
                    }
                }, [t._v("Cancel")])])]) : t._e()])], 1)
            },
            tt = [],
            et = (i("7f7f"), i("7514"), i("0d6d"), Object.freeze({
                TRIGGERABLE_OPENED: "mixin-triggerable-opened",
                TRIGGERABLE_CLOSED: "mixin-triggerable-closed"
            })),
            it = {
                data: function() {
                    return {
                        layers: [],
                        isOpen: !1,
                        isMobile: !1
                    }
                },
                created: function() {
                    $(".page-content-wrapper .page-content").on("click.Bst", this.$_windowClicked), this.$eventBus.$on("mixin-triggerable-opened", this.$_opened)
                },
                mounted: function() {
                    var t = this;
                    this.layers = $(this.$el).find(".mixin-triggerable-layer"), this.updateDevice(), window.addEventListener("resize", (function() {
                        t.updateDevice()
                    }))
                },
                destroyed: function() {
                    $(window).off(".page-content-wrapper .page-content", this.$_windowClicked), this.$eventBus.$off("mixin-triggerable-opened", this.$_opened)
                },
                methods: {
                    $_windowClicked: function(t) {
                        for (var e = !1, i = 0; i < this.layers.length; ++i) {
                            var s = $(this.layers[i]);
                            this.isOpen && (0 !== s.has(t.target).length || s.is(t.target)) && (e = !0)
                        }
                        this.isOpen != e && this.$_emitEvent(e), this.isOpen = e
                    },
                    $_opened: function(t) {
                        t === this.$options.name || "AllFilter" === this.$options.name && ("PeriodFilter" === t || "EventFilter" === t) ? (this.$eventBus.$emit("mixin-global-triggerable-opened"), this.isOpen = !0) : this.isOpen = !1
                    },
                    $_emitEvent: function(t) {
                        if (t) this.$eventBus.$emit("mixin-triggerable-opened", this.$options.name);
                        else {
                            if (this.$eventBus.$emit("mixin-triggerable-closed", this.$options.name), this.isMobile && ("PeriodFilter" === this.$options.name || "EventFilter" === this.$options.name)) return !1;
                            this.$eventBus.$emit("mixin-global-triggerable-closed"), this.$eventBus.$emit("mixin-search-trigger")
                        }
                    },
                    triggerable_toggleOpened: function(t) {
                        t.stopImmediatePropagation(), this.isOpen = !this.isOpen, this.$_emitEvent(this.isOpen)
                    },
                    triggerable_toggleClose: function(t) {
                        t.stopImmediatePropagation(), this.isOpen = !1, this.$_emitEvent(this.isOpen)
                    },
                    updateDevice: function() {
                        window.innerWidth < 768 ? this.isMobile = !0 : this.isMobile = !1
                    }
                },
                computed: {
                    triggerable_isOpen: function() {
                        return this.isOpen
                    }
                }
            },
            st = it,
            at = {
                methods: {
                    mixinAlerts_clear: nt,
                    mixinAlerts_info: ot,
                    mixinAlerts_success: rt,
                    mixinAlerts_warn: lt,
                    mixinAlerts_error: ct
                }
            };

        function nt() {
            var t = $("#user-alert");
            t.removeClass(), t.empty()
        }

        function ot(t) {
            nt(), t && HTML.alertUser("info", t)
        }

        function rt(t) {
            nt(), t && HTML.alertUser("success", t)
        }

        function lt(t) {
            nt(), t && HTML.alertUser("warning", t)
        }

        function ct(t) {
            nt(), t && HTML.alertUser("error", t)
        }
        var ut = at,
            dt = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            _t = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "loading"
                }, [i("div", {
                    staticClass: "load-more load-centered"
                }, [i("div", {
                    staticClass: "loading-spinner"
                }, [i("div", {
                    staticClass: "loader"
                }, [i("span", {
                    staticClass: "icon-circles"
                }, [i("span", {
                    staticClass: "dot-circle pending"
                }), i("span", {
                    staticClass: "dot-circle soft-bounced"
                }), i("span", {
                    staticClass: "dot-circle hard-bounced"
                }), i("span", {
                    staticClass: "dot-circle rejected"
                }), i("span", {
                    staticClass: "dot-circle spam"
                }), i("span", {
                    staticClass: "dot-circle delivered"
                }), i("span", {
                    staticClass: "dot-circle unsubscribed"
                }), i("span", {
                    staticClass: "dot-circle unblocked"
                }), i("span", {
                    staticClass: "dot-circle opened"
                }), i("span", {
                    staticClass: "dot-circle clicked"
                })])])])]), i("div", {
                    staticClass: "loading-backdrop"
                })])
            }],
            pt = {
                props: {
                    isBlock: {
                        type: Boolean,
                        default: !1
                    },
                    isPadded: {
                        type: Boolean,
                        default: !1
                    },
                    isLight: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            mt = pt,
            ft = (i("23be"), Object(V["a"])(mt, dt, _t, !1, null, "4366a906", null)),
            ht = ft.exports;

        function vt(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function bt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? vt(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : vt(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var gt = {
                mixins: [st, ut],
                components: {
                    BaseLoader: ht
                },
                name: "pending-requests-table",
                data: function() {
                    return {
                        displayColumns: [{
                            id: "ip",
                            label: "IP Address"
                        }, {
                            id: "first_ip",
                            label: "First IP"
                        }, {
                            id: "last_ip",
                            label: "Last IP"
                        }, {
                            id: "trusted_email",
                            label: "Trusted Email"
                        }, {
                            id: "request_date",
                            label: "Request Date"
                        }, {
                            id: "request_resend",
                            label: ""
                        }],
                        resendRequests: {},
                        deleteRequests: {},
                        mobileActionsItem: null,
                        mobileActionsPopup: "list",
                        isMobileOverlayAnimating: !0
                    }
                },
                computed: bt(bt({}, Object(c["b"])({
                    pending_ips: M.getters.GET_PENDING_IPS
                })), {}, {
                    formatMobileIP: function() {
                        return void 0 !== this.mobileActionsItem.last_ip ? this.mobileActionsItem.first_ip + " - " + this.mobileActionsItem.last_ip : this.mobileActionsItem.ip
                    },
                    has_pending_ips: function() {
                        return void 0 !== this.pending_ips && null !== this.pending_ips && this.pending_ips.length > 0
                    },
                    activeColumns: function() {
                        return this.displayColumns.filter((function(t) {
                            return t.active
                        }))
                    },
                    columnFilters: function() {
                        return this.displayColumns.filter((function(t) {
                            return t.filterable
                        }))
                    },
                    isMobileActionsActive: function() {
                        return this.isMobile && null != this.mobileActionsItem
                    }
                }),
                mounted: function() {
                    $(".page-content-wrapper .page-content").on("click.Bst", this.windowClicked)
                },
                destroyed: function() {
                    $(window).off(".page-content-wrapper .page-content", this.windowClicked)
                },
                watch: {
                    isMobile: function(t) {
                        t || this.hideMobileActions()
                    }
                },
                methods: {
                    formatMobileTimestamp: function(t) {
                        return moment.unix(t).format("DD/MM/YYYY")
                    },
                    formatDesktopTimestamp: function(t) {
                        return moment.unix(t).format("D/M/YYYY h:mm:ss A")
                    },
                    isEmptyValue: function(t) {
                        return "" === t || null == t
                    },
                    hideAllDeletePopup: function() {
                        var t = this;
                        this.pending_ips.forEach((function(e) {
                            t.$store.commit(M.mutations.SET_PENDING_IP_PROPERTY, {
                                pending_ip: e,
                                key: "displayDeletePopup",
                                value: !1
                            })
                        }))
                    },
                    deletePopupClick: function(t) {
                        var e = t.displayDeletePopup;
                        this.hideAllDeletePopup(), this.$store.commit(M.mutations.SET_PENDING_IP_PROPERTY, {
                            pending_ip: t,
                            key: "displayDeletePopup",
                            value: !e
                        })
                    },
                    performDeleteClick: function(t) {
                        var e = this;
                        this.$set(this.deleteRequests, t.ip, !0), this.$store.dispatch(M.actions.REMOVE_PENDING_IP, {
                            ip_address: t.ip
                        }).then((function() {
                            e.deleteRequests[t.ip] = void 0, e.$store.commit(M.mutations.SET_ACTIVE_IP_PROPERTY, {
                                active_ip: t,
                                key: "displayDeletePopup",
                                value: !1
                            })
                        })).catch((function(i) {
                            e.deleteRequests[t.ip] = void 0, e.mixinAlerts_error(i)
                        }))
                    },
                    closeDeletePopUpClick: function(t) {
                        this.$store.commit(M.mutations.SET_PENDING_IP_PROPERTY, {
                            pending_ip: t,
                            key: "displayDeletePopup",
                            value: !1
                        })
                    },
                    windowClicked: function(t) {
                        var e = ".row-delete-popup";
                        $(t.target).parents(e).length || this.hideAllDeletePopup()
                    },
                    showConfirmPopup: function(t) {
                        var e = this;
                        this.mixinAlerts_clear(), this.$set(this.resendRequests, t.ip, !0), this.$store.dispatch(M.actions.RESEND_VERIFY_EMAIL, {
                            ip_address: t.ip,
                            timestamp: t.timestamp
                        }).then((function() {
                            e.resendRequests[t.ip] = void 0, e.$eventBus.$emit("showPopup", "confirm-request", t)
                        })).catch((function(i) {
                            e.resendRequests[t.ip] = void 0, e.mixinAlerts_error(i)
                        }))
                    },
                    requestMobileActions: function(t) {
                        this.isMobile && (this.mobileActionsItem = t)
                    },
                    hideMobileActions: function() {
                        this.mobileActionsItem = null, this.mobileActionsPopup = "list"
                    },
                    resendRequestMobile: function() {
                        var t = this;
                        this.$set(this.resendRequests, this.mobileActionsItem.ip, !0), this.$store.dispatch(M.actions.RESEND_VERIFY_EMAIL, {
                            ip_address: this.mobileActionsItem.ip,
                            timestamp: this.mobileActionsItem.timestamp
                        }).then((function() {
                            t.resendRequests[t.mobileActionsItem.ip] = void 0, t.$eventBus.$emit("showPopup", "confirm-request", t.mobileActionsItem), t.isMobileOverlayAnimating = !1, t.hideMobileActions(), setTimeout((function() {
                                t.isMobileOverlayAnimating = !0
                            }), 0)
                        })).catch((function(e) {
                            t.mixinAlerts_error(e)
                        }))
                    },
                    resendDeleteMobile: function() {
                        var t = this;
                        this.$set(this.deleteRequests, this.mobileActionsItem.ip, !0), this.$store.dispatch(M.actions.REMOVE_PENDING_IP, {
                            ip_address: this.mobileActionsItem.ip
                        }).then((function() {
                            t.deleteRequests[t.mobileActionsItem.ip] = void 0, t.isMobileOverlayAnimating = !1, t.hideMobileActions(), setTimeout((function() {
                                t.isMobileOverlayAnimating = !0
                            }), 0)
                        })).catch((function(e) {
                            t.mixinAlerts_error(e)
                        }))
                    },
                    showMobileDeleteConfirm: function() {
                        this.mobileActionsPopup = "deleteConfirm"
                    }
                }
            },
            It = gt,
            Et = (i("9fec"), Object(V["a"])(It, Z, tt, !1, null, "2084f17c", null)),
            Dt = Et.exports,
            Ot = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "info-note"
                }, [i("div", {
                    staticClass: "note-icon"
                }), i("div", {
                    staticClass: "content"
                }, [t.$slots.heading ? i("strong", [t._t("heading")], 2) : t._e(), t._t("default")], 2)])
            },
            At = [],
            Tt = (i("1c37"), {}),
            Pt = Object(V["a"])(Tt, Ot, At, !1, null, "bdc0f98e", null),
            Ct = Pt.exports,
            Lt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [i("table", {
                    staticClass: "dataTable table table-striped table-hover display",
                    class: {
                        "no-ip-results": !t.hasTableResults || 0 === t.hasTableResults.length
                    },
                    attrs: {
                        id: "ipauth-table"
                    }
                }, [i("thead", [i("tr", [t._l(t.activeColumns, (function(e) {
                    return i("th", {
                        key: e.id,
                        class: t.getSortHeaderClass(e),
                        attrs: {
                            id: "table-" + e.id
                        },
                        on: {
                            click: function(i) {
                                return i.stopPropagation(), t.sortColumn(e)
                            }
                        }
                    }, [i("span", [t._v(t._s(e.label))])])
                })), i("th", {
                    attrs: {
                        id: "table-options"
                    }
                }, [i("div", {
                    staticClass: "dropdown-container"
                }, [i("span", {
                    staticClass: "dropdown-icon-container",
                    on: {
                        click: t.triggerable_toggleOpened
                    }
                }, [i("span", {
                    staticClass: "dropdown-icon"
                })]), i("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.triggerable_isOpen,
                        expression: "triggerable_isOpen"
                    }],
                    staticClass: "dropdown-menu dropdown-options column-filter is-active mixin-triggerable-layer",
                    attrs: {
                        id: "columns"
                    }
                }, [i("li", [i("p", [i("strong", [t._v("Display optional columns")]), i("br"), t._v("\n                  Choose to show optional columns (works best on large screens)\n                ")])]), t._l(t.columnFilters, (function(e) {
                    return i("li", {
                        key: e.id,
                        staticClass: "columns-filter",
                        attrs: {
                            id: "columns-filter-" + e.id
                        },
                        on: {
                            click: function(i) {
                                return t.handleColumnToggle(i, e)
                            }
                        }
                    }, [i("div", {
                        staticClass: "checker"
                    }, [i("span", {
                        staticClass: "checker-box",
                        class: {
                            checked: t.isColumnShown(e.id)
                        }
                    }, [i("input", {
                        attrs: {
                            type: "checkbox",
                            name: "columns[]"
                        },
                        domProps: {
                            value: e.id
                        }
                    })])]), i("span", {
                        staticClass: "column-indicator-copy"
                    }, [t._v(t._s(e.label))])])
                }))], 2)])])], 2)]), i("tbody", t._l(t.sortedTableResults, (function(e, s) {
                    return i("tr", {
                        key: e.id || e.ip || s,
                        staticClass: "ip-auth-result-wrapper",
                        on: {
                            click: function(i) {
                                return t.checkMobileAction(e)
                            }
                        }
                    }, [t._l(t.activeColumns, (function(s) {
                        return i("td", {
                            key: s.id,
                            class: ["cell-" + s.id, {
                                "cell-hidden": "description" === s.id && !e[s.id]
                            }]
                        }, ["ip" !== s.id || t.isMobile ? "unsubscribes" === s.id ? [e["feedback_enabled"] ? i("span", {
                            staticClass: "label secondary"
                        }, [t._v("Enabled")]) : i("span", {
                            staticClass: "label disabled"
                        }, [t._v("Disabled")])] : "ippool" === s.id ? [i("span", [t._v(t._s(t.prettyPrintIPPool(e)))])] : "status" === s.id && t.showStatusColumn ? [e["sandbox_mode"] ? i("span", {
                            staticClass: "label yellow"
                        }, [t._v("Sandboxed")]) : e["blocked"] ? i("span", {
                            staticClass: "label error"
                        }, [t._v("Blocked")]) : i("span", {
                            staticClass: "label primary"
                        }, [t._v("Allowed")])] : ["archiving", "open_tracking", "click_tracking"].includes(s.id) ? [e[s.id] ? i("span", {
                            staticClass: "label secondary"
                        }, [t._v("Enabled")]) : i("span", {
                            staticClass: "label disabled"
                        }, [t._v("Disabled")])] : "ratelimit" === s.id ? [i("span", {
                            staticClass: "label ratelimit"
                        }, [t._v(t._s(t.prettyPrintRL(e)))])] : i("span", [t._v(t._s(e[s.id]))]) : [i("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(i) {
                                    return i.preventDefault(), t.edit(e)
                                }
                            }
                        }, [t._v(t._s(e[s.id]))])]], 2)
                    })), i("td", {
                        staticClass: "table-action"
                    }, [i("div", {
                        staticClass: "drop-content is-active row-delete-popup",
                        class: {
                            "options-on": e.displayDeletePopup
                        }
                    }, [i("a", {
                        staticClass: "table-remove-toggler row-remove-toggler",
                        on: {
                            click: function(i) {
                                return i.stopPropagation(), t.deletePopupClick(e)
                            }
                        }
                    }, [t._v("Ã—")]), e.displayDeletePopup ? i("ul", {
                        staticClass: "dropdown-menu dropdown-options "
                    }, [i("li", [i("span", {
                        staticClass: "tooltip-confirm-title"
                    }, [t._v("Confirm remove?")]), i("a", {
                        staticClass: "table-remove confirm",
                        attrs: {
                            href: "javascript:void(0);",
                            disabled: t.deleteRequests[e.id]
                        },
                        on: {
                            click: function(i) {
                                return i.stopPropagation(), t.performDeleteClick(e)
                            }
                        }
                    }, [t.deleteRequests[e.id] ? i("base-loader", {
                        staticClass: "loader-smaller cover-parent",
                        attrs: {
                            "is-block": "",
                            "is-light": ""
                        }
                    }) : t._e(), i("span", {
                        class: {
                            invisible: t.deleteRequests[e.id]
                        }
                    }, [t._v("Remove")])], 1), i("a", {
                        staticClass: "table-remove-cancel",
                        attrs: {
                            disabled: t.deleteRequests[e.id],
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(i) {
                                return i.stopPropagation(), t.closeDeletePopUpClick(e)
                            }
                        }
                    }, [t._v("Cancel")])])]) : t._e()])])], 2)
                })), 0)])])
            },
            St = [],
            Mt = (i("c5f6"), i("75fc")),
            kt = (i("55dd"), i("768b")),
            yt = (i("ffc1"), {
                methods: {
                    mixinEventListener_register: function(t) {
                        this.mixinEventListener_eventMap = t
                    },
                    mixinEventListener_on: function() {
                        var t = this;
                        this.mixinEventListener_isOn || (Object.entries(this.mixinEventListener_eventMap).forEach((function(e) {
                            var i = Object(kt["a"])(e, 2),
                                s = i[0],
                                a = i[1];
                            t.$eventBus.$on(s, a)
                        })), this.mixinEventListener_isOn = !0)
                    },
                    mixinEventListener_off: function() {
                        var t = this;
                        Object.entries(this.mixinEventListener_eventMap).forEach((function(e) {
                            var i = Object(kt["a"])(e, 2),
                                s = i[0],
                                a = i[1];
                            t.$eventBus.$off(s, a)
                        })), this.mixinEventListener_isOn = !1
                    }
                },
                data: function() {
                    return {
                        mixinEventListener_isOn: !1,
                        mixinEventListener_eventMap: {}
                    }
                }
            }),
            Nt = yt,
            Rt = (i("28a5"), i("4917"), {
                methods: {
                    mixinHelpers_prettyPrintRatelimit: wt
                }
            });

        function wt(t, e) {
            e = null === e || void 0 === e || "" === e ? "unlimited" : e;
            var i = {
                    unlimited: "Unlimited",
                    "01:00:00": "per hour",
                    "1 day": "per day",
                    "7 days": "per week",
                    "1 mon": "per month",
                    "30 days": "per month",
                    "04:00:00": "every 4 hours",
                    "00:15:00": "every 15 minutes"
                },
                s = void 0 === i[e] ? "Custom(" + e + ")" : i[e];
            if (2 == (e.match(/:/g) || []).length) {
                var a = e.split(":");
                s = "every " + a[0] + "h " + a[1] + "m "
            }
            return "unlimited" === e ? "Unlimited" : parseInt(t).toLocaleString() + " " + s
        }
        var Gt = Rt;

        function jt(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function xt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? jt(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : jt(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var Bt = {
                mixins: [Nt, it, ut, Gt],
                name: "manage-ip-addresses-table",
                components: {
                    BaseLoader: ht
                },
                data: function() {
                    return {
                        columnIsSaving: !1,
                        displayColumns: [{
                            id: "ip",
                            label: "IP Address",
                            always_active: !0,
                            isBoolean: !1
                        }, {
                            id: "description",
                            label: "Description",
                            filterable: !0,
                            isBoolean: !1
                        }, {
                            id: "ippool",
                            label: "IP Pool",
                            filterable: !0,
                            isBoolean: !1
                        }, {
                            id: "ratelimit",
                            label: "Rate Limit",
                            filterable: !0,
                            isBoolean: !1
                        }, {
                            id: "unsubscribes",
                            label: "Unsubscribes",
                            filterable: !0,
                            isBoolean: !0
                        }, {
                            id: "status",
                            label: "Status",
                            always_active: !0,
                            filterable: !1,
                            isBoolean: !0
                        }, {
                            id: "archiving",
                            label: "Archiving",
                            filterable: !0,
                            isBoolean: !0
                        }, {
                            id: "open_tracking",
                            label: "Open tracking",
                            filterable: !0,
                            isBoolean: !0
                        }, {
                            id: "click_tracking",
                            label: "Click tracking",
                            filterable: !0,
                            isBoolean: !0
                        }],
                        deleteRequests: {},
                        sortBy: "ip",
                        sortDir: "asc"
                    }
                },
                computed: xt(xt({}, Object(c["b"])({
                    isColumnShown: E.getters.GET_IS_COLUMN_SHOWN,
                    tableResults: M.getters.GET_ACTIVE_IPS,
                    showStatusColumn: M.getters.GET_SHOW_STATUS_COLUMN
                })), {}, {
                    hasTableResults: function() {
                        return this.$store.getters["IPAuthStore/GET_ACTIVE_IPS"]
                    },
                    activeColumns: function() {
                        var t = this;
                        return this.displayColumns.filter((function(e) {
                            return !("status" === e.id && !t.showStatusColumn) && (!!e.always_active || t.isColumnShown(e.id))
                        }))
                    },
                    columnFilters: function() {
                        return this.displayColumns.filter((function(t) {
                            return t.filterable
                        }))
                    },
                    sortedTableResults: function() {
                        var t = this,
                            e = this.displayColumns.find((function(e) {
                                return e.id === t.sortBy
                            }));
                        return e ? Object(Mt["a"])(this.tableResults).sort((function(e, i) {
                            if ("ratelimit" === t.sortBy) {
                                var s = t.getRatelimitPeriodRank(e),
                                    a = t.getRatelimitPeriodRank(i),
                                    n = Number(e.ratelimit_limit) || 0,
                                    o = Number(i.ratelimit_limit) || 0,
                                    r = 0;
                                return s !== a ? r = s - a : n !== o && (r = n - o), 0 === r ? 0 : "asc" === t.sortDir ? r : -r
                            }
                            var l = t.normalizeSortValue(t.getSortValue(e, t.sortBy)),
                                c = t.normalizeSortValue(t.getSortValue(i, t.sortBy)),
                                u = l.localeCompare(c);
                            return 0 === u ? 0 : "asc" === t.sortDir ? u > 0 ? 1 : -1 : u > 0 ? -1 : 1
                        })) : this.tableResults
                    }
                }),
                mounted: function() {
                    $(".page-content-wrapper .page-content").on("click.Bst", this.windowClicked)
                },
                created: function() {
                    this.mixinEventListener_register(Object(l["a"])({}, et.TRIGGERABLE_CLOSED, this.onTriggerableClosed)), this.mixinEventListener_on()
                },
                destroyed: function() {
                    $(window).off(".page-content-wrapper .page-content", this.windowClicked), this.mixinEventListener_off()
                },
                methods: {
                    getRatelimitPeriodRank: function(t) {
                        var e = t.ratelimit_custom ? t.ratelimit_period : "unlimited",
                            i = null === e || void 0 === e || "" === e ? "unlimited" : e,
                            s = {
                                unlimited: 0,
                                "01:00:00": 1,
                                "1 day": 2,
                                "7 days": 3,
                                "1 mon": 4,
                                "30 days": 4
                            };
                        return void 0 === s[i] ? 5 : s[i]
                    },
                    getSortValue: function(t, e) {
                        return "ratelimit" === e ? this.prettyPrintRL(t) : "unsubscribes" === e ? t.feedback_enabled ? "Enabled" : "Disabled" : "status" === e ? t.sandbox_mode ? "Sandboxed" : t.blocked ? "Blocked" : "Allowed" : t[e]
                    },
                    normalizeSortValue: function(t) {
                        return null === t || void 0 === t ? "" : String(t).toLowerCase()
                    },
                    sortColumn: function(t) {
                        this.sortBy === t.id ? this.sortDir = "asc" === this.sortDir ? "desc" : "asc" : (this.sortBy = t.id, this.sortDir = "asc")
                    },
                    getSortHeaderClass: function(t) {
                        return this.sortBy !== t.id ? "sorting_desc no_sort" : "asc" === this.sortDir ? "sorting_asc" : "sorting_desc"
                    },
                    prettyPrintIPPool: function(t) {
                        var e = t.ippool;
                        return t.use_default_ippool ? "Default" : this.$store.getters[M.getters.GET_IP_POOL_LABEL](e)
                    },
                    prettyPrintRL: function(t) {
                        return t.ratelimit_custom ? this.mixinHelpers_prettyPrintRatelimit(t.ratelimit_limit, t.ratelimit_period) : "Default"
                    },
                    handleColumnToggle: function(t, e) {
                        void 0 !== t && t.stopImmediatePropagation(), this.$store.commit(E.mutations.TOGGLE_IS_COLUMN_SHOWN, e.id)
                    },
                    hideAllDeletePopup: function() {
                        var t = this;
                        this.tableResults.forEach((function(e) {
                            t.$store.commit(M.mutations.SET_ACTIVE_IP_PROPERTY, {
                                active_ip: e,
                                key: "displayDeletePopup",
                                value: !1
                            })
                        }))
                    },
                    deletePopupClick: function(t) {
                        var e = t.displayDeletePopup;
                        this.hideAllDeletePopup(), this.$store.commit(M.mutations.SET_ACTIVE_IP_PROPERTY, {
                            active_ip: t,
                            key: "displayDeletePopup",
                            value: !e
                        })
                    },
                    performDeleteClick: function(t) {
                        var e = this;
                        this.mixinAlerts_clear(), this.$set(this.deleteRequests, t.id, !0), this.$store.dispatch(M.actions.REMOVE_ACTIVE_IP, {
                            ip_address: t.ip
                        }).then((function() {
                            e.deleteRequests[t.id] = void 0, e.$store.commit(M.mutations.SET_ACTIVE_IP_PROPERTY, {
                                active_ip: t,
                                key: "displayDeletePopup",
                                value: !1
                            }), e.mixinAlerts_success("Successfully removed IP Address")
                        })).catch((function(t) {
                            e.mixinAlerts_error(t)
                        }))
                    },
                    closeDeletePopUpClick: function(t) {
                        this.$store.commit(M.mutations.SET_ACTIVE_IP_PROPERTY, {
                            active_ip: t,
                            key: "displayDeletePopup",
                            value: !1
                        })
                    },
                    windowClicked: function(t) {
                        var e = ".row-delete-popup";
                        $(t.target).parents(e).length || this.hideAllDeletePopup()
                    },
                    onTriggerableClosed: function() {
                        this.$store.dispatch(E.actions.SAVE_COLUMNS)
                    },
                    saveColumn: function() {
                        var t = this;
                        if (this.columnIsSaving) return !1;
                        this.columnIsSaving = !0;
                        var e = !0,
                            i = {};
                        this.mixinAjax_put(this.requestPoint, "save-columns", i, (function() {
                            t.columnIsSaving = !1
                        }), (function() {
                            t.columnIsSaving = !1
                        }), e)
                    },
                    edit: function(t) {
                        this.$store.commit(M.mutations.TOGGLE_EDIT_MODAL, {
                            visible: !0,
                            data: t
                        }), this.$nextTick((function() {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "instant"
                            })
                        }))
                    },
                    checkMobileAction: function(t) {
                        this.isMobile && this.edit(t)
                    }
                }
            },
            $t = Bt,
            Ut = (i("7b17"), Object(V["a"])($t, Lt, St, !1, null, "16727aee", null)),
            Ft = Ut.exports,
            Vt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [i("div", {
                    staticClass: "edit-ip",
                    class: [{
                        "is-active": t.isActive
                    }, {
                        "tab-content-open": t.dropdownIsActive
                    }],
                    attrs: {
                        id: "ipedit"
                    }
                }, [i("header", {
                    staticClass: "sg-feature--header has-functions"
                }, [i("h3", {
                    staticClass: "page-title"
                }, [i("button", {
                    staticClass: "icon-back",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.close.apply(null, arguments)
                        }
                    }
                }), i("span", {
                    staticClass: "page-title-text"
                }, [t._v("Edit IP Address")])]), i("div", {
                    staticClass: "lead-toggle"
                }, [i("p", [t._v("Edit the IP address details below. Optionally set a rate limit, unsubscribe footer, or choose advanced options.")])])]), i("div", {
                    staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
                }, [i("div", {
                    staticClass: "card has-tabs view-edit-ipauth",
                    class: [t.activeTab + "-open"],
                    attrs: {
                        tabindex: "-1",
                        role: "dialog",
                        "aria-hidden": "false"
                    }
                }, [i("div", {
                    staticClass: "card--tab-list"
                }, [i("h1", {
                    staticClass: "card--tab-title"
                }, [i("span", [t._v("Configure IP Address")])]), i("a", {
                    staticClass: "tab",
                    class: {
                        active: "details" === t.activeTab
                    },
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.activeTab = "details"
                        }
                    }
                }, [i("span", [i("span", {
                    staticClass: "mobile-hide"
                }, [t._v("IP Address ")]), t._v("Details")])]), i("a", {
                    staticClass: "tab",
                    class: {
                        active: "unsubscribe" === t.activeTab
                    },
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.activeTab = "unsubscribe"
                        }
                    }
                }, [i("span", [i("span", {
                    staticClass: "mobile-hide"
                }, [t._v("Unsubscribe ")]), t._v("Footer")])]), i("a", {
                    staticClass: "tab",
                    class: {
                        active: "tracking" === t.activeTab
                    },
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.activeTab = "tracking"
                        }
                    }
                }, [i("span", [i("span", {
                    staticClass: "mobile-hide"
                }, [t._v("Tracking & ")]), t._v("Status")])]), i("a", {
                    staticClass: "tab",
                    class: {
                        active: "archiving" === t.activeTab
                    },
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.activeTab = "archiving"
                        }
                    }
                }, [i("span", [t._v("Advanced")])])]), i("div", {
                    staticClass: "modal-dialog"
                }, [i("div", {
                    staticClass: "modal-body"
                }, [i("div", {
                    staticClass: "bootbox-body",
                    class: [t.activeTab + "-open"]
                }, [i("form", [i("div", {
                    class: ["modal-error", "modal-error-sticky", "notice", "error", {
                        visible: this.error_msg_visible
                    }]
                }, [t._v(t._s(this.error_msg))]), i("div", {
                    ref: "tabWrapper",
                    staticClass: "tab-content",
                    class: {
                        "tab-content-open": t.dropdownIsActive
                    }
                }, [i("div", {
                    ref: "details",
                    staticClass: "tab-pane user-tab-details",
                    class: {
                        "tab-pane-hidden": t.dropdownIsActive,
                        active: "details" === t.activeTab
                    },
                    attrs: {
                        role: "tabpanel"
                    }
                }, [i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("IP Address")]), i("div", {
                    staticClass: "form-group-item"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ip_address,
                        expression: "ip_address"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        type: "text",
                        readonly: "",
                        autocomplete: "off",
                        name: "ipaddress"
                    },
                    domProps: {
                        value: t.ip_address
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.ip_address = e.target.value)
                        }
                    }
                })])]), i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("Description")]), i("div", {
                    staticClass: "form-group-item"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.description,
                        expression: "description"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        name: "comment",
                        placeholder: "Optional"
                    },
                    domProps: {
                        value: t.description
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.description = e.target.value)
                        }
                    }
                })])]), t.has_ip_pools && t.ip_pools.length > 1 ? i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("IP Pool")]), i("div", {
                    staticClass: "form-group-item item-split"
                }, [i("div", {
                    staticClass: "form-select-wrapper"
                }, [i("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ippool,
                        expression: "ippool"
                    }],
                    staticClass: "form-control input-md",
                    on: {
                        change: function(e) {
                            var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.ippool = e.target.multiple ? i : i[0]
                        }
                    }
                }, [i("option", {
                    attrs: {
                        value: "default"
                    }
                }, [t._v(t._s(t.prettyPrintIPPool("default")))]), t._l(t.ip_pools, (function(e) {
                    return i("option", {
                        key: e.id,
                        domProps: {
                            value: e.id
                        }
                    }, [t._v(t._s(t.prettyPrintIPPool(e.id)))])
                }))], 2)])])]) : t._e(), i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("Rate Limit")]), i("div", {
                    staticClass: "form-group-item form-group-ratelimit"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ratelimit_limit,
                        expression: "ratelimit_limit"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        type: "number",
                        name: "ratelimit_limit",
                        disabled: !t.ratelimit_custom
                    },
                    domProps: {
                        value: t.ratelimit_limit
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.ratelimit_limit = e.target.value)
                        }
                    }
                }), i("div", {
                    staticClass: "form-select-wrapper"
                }, [i("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ratelimit_period,
                        expression: "ratelimit_period"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        disabled: !t.ratelimit_custom
                    },
                    on: {
                        change: function(e) {
                            var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.ratelimit_period = e.target.multiple ? i : i[0]
                        }
                    }
                }, [i("option", {
                    attrs: {
                        value: "unlimited"
                    }
                }, [t._v("Unlimited")]), i("option", {
                    attrs: {
                        value: "01:00:00"
                    }
                }, [t._v("per hour")]), i("option", {
                    attrs: {
                        value: "1 day"
                    }
                }, [t._v("per day")]), i("option", {
                    attrs: {
                        value: "7 days"
                    }
                }, [t._v("per week")]), i("option", {
                    attrs: {
                        value: "1 mon"
                    }
                }, [t._v("per month")])])]), i("div", {
                    staticClass: "ratelimit-default-checkbox"
                }, [i("div", {
                    staticClass: "checker",
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.ratelimit_custom = !t.ratelimit_custom
                        }
                    }
                }, [i("span", {
                    staticClass: "checker-box",
                    class: {
                        checked: !t.ratelimit_custom
                    }
                })]), i("span", {
                    staticClass: "inline-checkbox-desc",
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.ratelimit_custom = !t.ratelimit_custom
                        }
                    }
                }, [t._v(" Use default")])])])])]), i("div", {
                    ref: "unsubscribe",
                    staticClass: "tab-pane user-tab-unsubscribe",
                    class: {
                        "tab-pane-hidden": t.dropdownIsActive,
                        active: "unsubscribe" === t.activeTab
                    },
                    attrs: {
                        role: "tabpanel"
                    }
                }, [i("div", {
                    staticClass: "unsubscribes",
                    class: [t.feedback_enabled ? "is-open" : "is-closed"]
                }, [i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("AddÂ Footer")]), i("div", {
                    staticClass: "form-group-item"
                }, [i("label", {
                    staticClass: "inline-checkbox"
                }, [i("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: function(e) {
                            t.feedback_enabled = !t.feedback_enabled
                        }
                    }
                })]), i("small", [i("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/223087607",
                        target: "_blank"
                    }
                }, [t._v("(What's this?)")])])])]), i("div", {
                    staticClass: "toggle"
                }, [i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("\n                            HTML\n                            "), i("br"), i("small", [i("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.useDefaultHTML.apply(null, arguments)
                        }
                    }
                }, [t._v("use default")])])]), i("div", {
                    staticClass: "form-group-item"
                }, [i("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.feedback_html,
                        expression: "feedback_html"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        name: "unsubscribe_html"
                    },
                    domProps: {
                        value: t.feedback_html
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.feedback_html = e.target.value)
                        }
                    }
                })])])]), i("div", {
                    staticClass: "toggle"
                }, [i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("\n                            Plain Text\n                            "), i("br"), i("small", [i("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.useDefaultText.apply(null, arguments)
                        }
                    }
                }, [t._v("use default")])])]), i("div", {
                    staticClass: "form-group-item"
                }, [i("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.feedback_text,
                        expression: "feedback_text"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        name: "unsubscribe_text"
                    },
                    domProps: {
                        value: t.feedback_text
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.feedback_text = e.target.value)
                        }
                    }
                })])])])])]), i("div", {
                    ref: "tracking",
                    staticClass: "tab-pane user-tab-tracking",
                    class: {
                        active: "tracking" === t.activeTab
                    },
                    attrs: {
                        role: "tabpanel"
                    }
                }, [i("div", {
                    staticClass: "tracking"
                }, [i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("OpenÂ Tracking")]), i("div", {
                    staticClass: "form-group-item"
                }, [i("label", {
                    staticClass: "inline-checkbox",
                    class: [t.open_tracking ? "is-open" : "is-closed"]
                }, [i("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: function(e) {
                            t.open_tracking = !t.open_tracking
                        }
                    }
                })]), i("small", [i("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/360003124714-Open-Tracking",
                        target: "_blank"
                    }
                }, [t._v("(What's this?)")])]), i("span", {
                    staticClass: "field-info"
                }, [t._v("Enable open tracking to find out when a recipient has opened an email.")])])]), i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("ClickÂ Tracking")]), i("div", {
                    staticClass: "form-group-item"
                }, [i("label", {
                    staticClass: "inline-checkbox",
                    class: [t.click_tracking ? "is-open" : "is-closed"]
                }, [i("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: function(e) {
                            t.click_tracking = !t.click_tracking
                        }
                    }
                })]), i("small", [i("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/900002237106",
                        target: "_blank"
                    }
                }, [t._v("(What's this?)")])]), i("span", {
                    staticClass: "field-info"
                }, [t._v("Enable click tracking to find out when a recipient has clicked a link in an email.")])])]), i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("UserÂ Status")]), i("div", {
                    staticClass: "form-group-item"
                }, [i("div", {
                    ref: "dropdownWrapper",
                    staticClass: "app-dropdown-wrapper"
                }, [i("div", {
                    staticClass: "user-mode-dropdown mode-dropdown-select",
                    class: {
                        "is-active": t.dropdownIsActive
                    },
                    on: {
                        click: t.toggleDropdown
                    }
                }, [i("span", {
                    staticClass: "selected"
                }, [t._v(t._s(t.getSelectedItem.name))])]), i("dl", {
                    staticClass: "mode-dropdown-option",
                    class: {
                        "is-active": t.dropdownIsActive
                    }
                }, t._l(t.dropdownItems, (function(e) {
                    return i("div", {
                        key: e.name,
                        staticClass: "dropdown-item",
                        class: [e.colorClass, {
                            "is-active": e.name === t.selectedDropdownItemName
                        }],
                        on: {
                            click: function(i) {
                                return t.selectItem(e)
                            }
                        }
                    }, [i("dt", [t._v(t._s(e.name))]), i("dd", {
                        domProps: {
                            innerHTML: t._s(e.description)
                        }
                    })])
                })), 0), i("div", {
                    staticClass: "mode-dropdown-info",
                    domProps: {
                        innerHTML: t._s(t.getSelectedItem.details)
                    }
                })])])])])]), i("div", {
                    ref: "archiving",
                    staticClass: "tab-pane user-tab-archiving",
                    class: {
                        "tab-pane-hidden": t.dropdownIsActive,
                        active: "archiving" === t.activeTab
                    },
                    attrs: {
                        role: "tabpanel"
                    }
                }, [i("div", {
                    staticClass: "archiving"
                }, [t.isAllowedArchiving ? i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("EmailÂ Archiving")]), i("div", {
                    staticClass: "form-group-item"
                }, [i("label", {
                    staticClass: "inline-checkbox",
                    class: [t.archiving ? "is-open" : "is-closed"]
                }, [i("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: t.handleArchivingToggle
                    }
                })]), i("small", [i("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/115003599568",
                        target: "_blank"
                    }
                }, [t._v("(What's this?)")])]), i("span", {
                    staticClass: "field-info"
                }, [t._v("\n                            Enable email archiving to store the content and delivery record of your emails.\n                            "), i("br"), i("small", [t._v("Archived emails involve an extra charge.")])])])]) : t._e(), i("div", {
                    staticClass: "form-group"
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("Email Auditing")]), i("div", {
                    staticClass: "form-group-item"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.audit_email,
                        expression: "audit_email"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        type: "text",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: t.audit_email
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.audit_email = e.target.value)
                        }
                    }
                }), i("span", {
                    staticClass: "field-info"
                }, [t._v("\n                            Send a BCC copy of every email to this address. Separate addresses with commas.\n                            "), i("br"), i("small", [t._v("BCC copies count towards monthly quota. Leave blank to disable this feature.")])])])]), i("div", {
                    staticClass: "form-group",
                    class: {
                        "is-expanded": t.bounce_notifications
                    }
                }, [i("label", {
                    staticClass: "form-group-label"
                }, [t._v("Bounce Notifications")]), i("div", {
                    staticClass: "form-group-item"
                }, [i("label", {
                    staticClass: "inline-checkbox",
                    class: [t.bounce_notifications ? "is-open" : "is-closed"]
                }, [i("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: function(e) {
                            t.bounce_notifications = !t.bounce_notifications
                        }
                    }
                })]), i("span", {
                    staticClass: "field-info"
                }, [t._v("\n                            Enable this to receive a notification email whenever an email bounces.\n                          ")]), i("div", {
                    ref: "bounceOptions",
                    staticClass: "bounces-options"
                }, [i("label", {
                    class: {
                        "is-active": t.bounce_target_original
                    }
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.bounce_target_original,
                        expression: "bounce_target_original"
                    }],
                    staticClass: "toggle",
                    attrs: {
                        type: "radio",
                        name: "bounce-type"
                    },
                    domProps: {
                        value: !0,
                        checked: t._q(t.bounce_target_original, !0)
                    },
                    on: {
                        change: function(e) {
                            t.bounce_target_original = !0
                        }
                    }
                }), t._v("\n                                Send bounce notification emails to the original sender\n                            ")]), i("br"), i("label", {
                    staticClass: "input-activate",
                    class: {
                        "is-active": t.bounce_target_email
                    }
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.bounce_target_email,
                        expression: "bounce_target_email"
                    }],
                    staticClass: "toggle",
                    attrs: {
                        type: "radio",
                        name: "bounce-type"
                    },
                    domProps: {
                        value: !0,
                        checked: t._q(t.bounce_target_email, !0)
                    },
                    on: {
                        change: function(e) {
                            t.bounce_target_email = !0
                        }
                    }
                }), t._v("\n                              Send bounce notification emails to:\n                            ")]), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.bounce_target,
                        expression: "bounce_target"
                    }],
                    ref: "customBounceNotificationsReceiver",
                    attrs: {
                        type: "text",
                        name: "fwdbounces_to",
                        placeholder: "example@domain.com",
                        value: ""
                    },
                    domProps: {
                        value: t.bounce_target
                    },
                    on: {
                        focus: t.onFwdBouncesFocus,
                        input: function(e) {
                            e.target.composing || (t.bounce_target = e.target.value)
                        }
                    }
                })])])])])])]), i("div", {
                    staticClass: "card-footer"
                }, [i("base-button", {
                    staticClass: "smtp-modal-save",
                    attrs: {
                        variant: "blue",
                        "is-loading": t.isSaving
                    },
                    on: {
                        click: t.save
                    }
                }, [t._v("Save Changes")]), i("button", {
                    staticClass: "btn button-dropdown",
                    attrs: {
                        type: "button",
                        "data-dismiss": "modal",
                        "aria-hidden": "true"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.close.apply(null, arguments)
                        }
                    }
                }, [t._v("Back")])], 1)])])])])])]), i("div", {
                    staticClass: "modal-dialog modal-confirm-archives",
                    class: {
                        "is-active": t.showArchivesModal
                    }
                }, [i("div", {
                    staticClass: "modal-body"
                }, [i("button", {
                    staticClass: "bootbox-close-button close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            t.showArchivesModal = !1
                        }
                    }
                }, [t._v("Ã—")]), i("div", {
                    staticClass: "option-banner"
                }, [i("figure", [i("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/alert-sign.png",
                        width: "109",
                        alt: "SMTP2GO"
                    }
                })]), i("h4", [t._v("Disable Archiving")]), i("p", [t._v("Once email archiving is disabled, all future emails sent from this sender will no longer be archived.")]), i("p", [t._v("Please note that disabling archiving does not delete existing archives. If you'd like to also delete existing archived emails from this sender, delete them from the "), i("a", {
                    attrs: {
                        href: "/reports/archive/"
                    }
                }, [t._v("Archives page")]), t._v(".")])]), i("div", {
                    staticClass: "modal-body-footer"
                }, [i("button", {
                    staticClass: "btn blue",
                    on: {
                        click: t.confirmDisableArchiving
                    }
                }, [t._v("Confirm")]), i("button", {
                    staticClass: "btn button-outlined bootbox-close-button",
                    on: {
                        click: function(e) {
                            t.showArchivesModal = !1
                        }
                    }
                }, [t._v("Cancel")])])])]), i("div", {
                    staticClass: "modal-backdrop",
                    class: {
                        "is-active": t.showArchivesModal
                    },
                    on: {
                        click: function(e) {
                            t.showArchivesModal = !1
                        }
                    }
                })])])
            },
            Ht = [],
            qt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "btn",
                    class: [t.variant, {
                        "is-loading": t.isLoading
                    }],
                    attrs: {
                        role: "button",
                        type: t.type,
                        disabled: t.isLoading
                    },
                    on: {
                        click: t.handleClick
                    }
                }, [t._t("default"), t.isLoading ? i("span", {
                    staticClass: "loader-spinner"
                }) : t._e()], 2)
            },
            Kt = [],
            Wt = {
                name: "base-button",
                props: {
                    variant: {
                        type: String,
                        default: ""
                    },
                    type: {
                        type: String,
                        default: "button"
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    handleClick: function(t) {
                        this.$emit("click", t)
                    }
                }
            },
            Yt = Wt,
            Xt = (i("b9bc"), Object(V["a"])(Yt, qt, Kt, !1, null, "14213eaf", null)),
            zt = Xt.exports,
            Jt = {
                mixins: [ut],
                props: {
                    isActive: {
                        type: Boolean,
                        default: !1
                    }
                },
                components: {
                    BaseButton: zt
                },
                data: function() {
                    return {
                        isFirstRenderHappened: !1,
                        activeTab: "details",
                        isCustomBounceNotificationsReceiver: !1,
                        isSaving: !1,
                        bnOriginal: !1,
                        bnEmail: !1,
                        error_msg: "",
                        error_msg_visible: !1,
                        dropdownIsActive: !1,
                        dropdownItems: [{
                            name: "Allowed",
                            description: 'Sending is <span class="emphasis green">allowed</span>.',
                            details: 'Sending is <span class="emphasis green">allowed</span>.',
                            colorClass: "blue"
                        }, {
                            name: "Blocked",
                            description: 'Sending is <span class="emphasis red">denied</span>.',
                            details: 'Sending is <span class="emphasis red">denied</span>.',
                            colorClass: "red"
                        }, {
                            name: "Sandboxed",
                            description: 'Sending is <span class="emphasis green">allowed</span>, but <span class="emphasis orange">emails won\'t be delivered</span>, and will show as Rejected. Email Auditing still functions.',
                            details: 'Sending is <span class="emphasis green">allowed</span>, but <span class="emphasis orange">emails won\'t be delivered</span> to the recipient.<ul class="dropdown-info-list"><li>Emails will show on your Activity page with a <span class="extra-strong">Rejected</span> status.</li><li>Emails will still be delivered to any email addresses using the <span class="extra-strong">Email Auditing</span> feature.</li></ul>',
                            colorClass: "orange"
                        }],
                        showArchivesModal: !1
                    }
                },
                computed: {
                    ip_pools: {
                        get: function() {
                            return this.$store.getters[M.getters.GET_IP_POOLS]
                        }
                    },
                    has_ip_pools: {
                        get: function() {
                            return this.$store.getters[M.getters.HAS_IP_POOLS]
                        }
                    },
                    old_ip_address: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_OLD_IP_ADDRESS]
                        }
                    },
                    ip_address: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_IP_ADDRESS]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_IP_ADDRESS, t)
                        }
                    },
                    description: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_DESCRIPTION]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_DESCRIPTION, t)
                        }
                    },
                    ippool: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_IPPOOL]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_IPPOOL, t)
                        }
                    },
                    ratelimit_limit: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_RL_LIMIT]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_RL_LIMIT, t)
                        }
                    },
                    ratelimit_period: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_RL_PERIOD]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_RL_PERIOD, t)
                        }
                    },
                    ratelimit_custom: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_RL_CUSTOM]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_RL_CUSTOM, t)
                        }
                    },
                    feedback_enabled: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_FB_ENABLED]
                        },
                        set: function(t) {
                            var e = this;
                            this.$store.commit(M.mutations.EDIT_MODAL_FB_ENABLED, t), this.$nextTick((function() {
                                e.updateHeight()
                            }))
                        }
                    },
                    feedback_text: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_FB_TEXT]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_FB_TEXT, t)
                        }
                    },
                    feedback_html: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_FB_HTML]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_FB_HTML, t)
                        }
                    },
                    open_tracking: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_OPEN_TRACKING]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_OPEN_TRACKING, t)
                        }
                    },
                    click_tracking: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_CLICK_TRACKING]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_CLICK_TRACKING, t)
                        }
                    },
                    blocked: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_BLOCKED]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_BLOCKED, t)
                        }
                    },
                    sandbox_mode: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_SANDBOX_MODE]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_SANDBOX_MODE, t)
                        }
                    },
                    archiving: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_ARCHIVING]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_ARCHIVING, t)
                        }
                    },
                    archiving_initial: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_ARCHIVING_INITIAL]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_ARCHIVING_INITIAL, t)
                        }
                    },
                    audit_email: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_AUDIT_EMAIL]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_AUDIT_EMAIL, t)
                        }
                    },
                    bounce_notifications: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_BOUNCE_NOTIFICATIONS]
                        },
                        set: function(t) {
                            var e = this;
                            this.$store.commit(M.mutations.EDIT_MODAL_BOUNCE_NOTIFICATIONS, t), this.$nextTick((function() {
                                var i = 55;
                                t || (i = -i), e.$refs.tabWrapper.style.height = "".concat(parseFloat(e.$refs.tabWrapper.style.height) + i, "px")
                            }))
                        }
                    },
                    bounce_target: {
                        get: function() {
                            return this.$store.getters[M.getters.EDIT_MODAL_BOUNCE_TARGET]
                        },
                        set: function(t) {
                            this.$store.commit(M.mutations.EDIT_MODAL_BOUNCE_TARGET, t), this.bnOriginal = !t, this.bnEmail = t
                        }
                    },
                    bounce_target_original: {
                        get: function() {
                            return this.bnOriginal
                        },
                        set: function(t) {
                            this.bnOriginal = t, this.bnEmail = !t
                        }
                    },
                    bounce_target_email: {
                        get: function() {
                            return this.bnEmail
                        },
                        set: function(t) {
                            this.bnOriginal = !t, this.bnEmail = t
                        }
                    },
                    isAllowedArchiving: {
                        get: function() {
                            return this.$store.getters[M.getters.GET_IS_ALLOWED_ARCHIVING]
                        }
                    },
                    selectedDropdownItemName: function() {
                        return this.blocked ? "Blocked" : this.sandbox_mode ? "Sandboxed" : "Allowed"
                    },
                    getSelectedItem: function() {
                        var t = this;
                        return this.dropdownItems.find((function(e) {
                            return e.name === t.selectedDropdownItemName
                        }))
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.isFirstRenderHappened = !0, t.updateHeight()
                    })), document.addEventListener("click", this.handleOutsideClick)
                },
                beforeDestroy: function() {
                    document.removeEventListener("click", this.handleOutsideClick)
                },
                methods: {
                    onFwdBouncesFocus: function() {
                        this.bnEmail = !0, this.bnOriginal = !1
                    },
                    prettyPrintIPPool: function(t) {
                        return this.$store.getters[M.getters.GET_IP_POOL_LABEL](t)
                    },
                    useDefaultText: function() {
                        this.feedback_text = this.$store.state.ipauth.defaultFBText
                    },
                    useDefaultHTML: function() {
                        this.feedback_html = this.$store.state.ipauth.defaultFBHTML
                    },
                    close: function() {
                        this.error_msg_visible = !1, this.$store.commit(M.mutations.TOGGLE_EDIT_MODAL, {
                            visible: !1,
                            data: null
                        }), this.activeTab = "details"
                    },
                    updateHeight: function() {
                        this.$refs.tabWrapper.style.height = "".concat(this.$refs[this.activeTab].clientHeight + 2, "px"), this.bnEmail = "" !== this.bounce_target, this.bnOriginal = !this.bnEmail, "archiving" == this.activeTab && (this.$refs.tabWrapper.style.height = "".concat(this.$refs[this.activeTab].clientHeight - 2, "px"))
                    },
                    buildSavePayload: function() {
                        var t = "";
                        return t = this.bounce_notifications ? this.bounce_target_original ? "from" : this.bounce_target : "drop", {
                            old_ip_address: this.old_ip_address,
                            ip_address: this.ip_address,
                            description: this.description,
                            ippool: this.ippool,
                            ratelimit_limit: this.ratelimit_limit,
                            ratelimit_period: this.ratelimit_period,
                            ratelimit_custom: this.ratelimit_custom,
                            feedback_enabled: this.feedback_enabled,
                            feedback_text: this.feedback_text,
                            feedback_html: this.feedback_html,
                            open_tracking: this.open_tracking,
                            click_tracking: this.click_tracking,
                            blocked: this.blocked,
                            sandbox_mode: this.sandbox_mode,
                            archiving: this.archiving,
                            audit_email: this.audit_email,
                            bounce_notifications: t
                        }
                    },
                    save: function() {
                        var t = this;
                        this.isSaving = !0, this.error_msg_visible = !1, this.$store.dispatch(M.actions.UPDATE_ACTIVE_IP, this.buildSavePayload()).then((function() {
                            t.isSaving = !1, t.mixinAlerts_success("Successfully updated IP Address details"), t.close()
                        })).catch((function(e) {
                            t.isSaving = !1, t.error_msg = e, t.error_msg_visible = !0
                        }))
                    },
                    toggleDropdown: function() {
                        this.dropdownIsActive = !this.dropdownIsActive
                    },
                    handleOutsideClick: function(t) {
                        var e = this.$refs.dropdownWrapper;
                        e && !e.contains(t.target) && (this.dropdownIsActive = !1)
                    },
                    selectItem: function(t) {
                        "Blocked" == t.name ? (this.blocked = !0, this.sandbox_mode = !1) : "Sandboxed" == t.name ? (this.blocked = !1, this.sandbox_mode = !0) : (this.blocked = !1, this.sandbox_mode = !1), this.dropdownIsActive = !1;
                        var e = document.querySelector(".tab-pane .tracking"),
                            i = document.querySelector(".tab-content");
                        e && i && setTimeout((function() {
                            var t = e.clientHeight,
                                s = t + 38;
                            i.style.height = "".concat(s, "px")
                        }), 20)
                    },
                    handleArchivingToggle: function() {
                        this.archiving ? this.archiving_initial ? this.showArchivesModal = !0 : this.archiving = !1 : this.archiving = !0
                    },
                    confirmDisableArchiving: function() {
                        this.archiving = !1, this.archiving_initial = !1, this.showArchivesModal = !1
                    }
                },
                watch: {
                    isActive: function(t) {
                        var e = this;
                        t && this.$nextTick((function() {
                            return e.updateHeight()
                        }))
                    },
                    activeTab: function() {
                        this.updateHeight()
                    }
                }
            },
            Qt = Jt,
            Zt = (i("4a84"), Object(V["a"])(Qt, Vt, Ht, !1, null, "c469a2a0", null)),
            te = Zt.exports,
            ee = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "card--fyi"
                }, [i("div", {
                    staticClass: "card--fyi--small"
                }, [i("h5", [t._v("Connecting via SMTP")]), i("p", [t._m(0), i("span", {
                    staticClass: "txt-val"
                }, [t._v(" " + t._s(t.mailServerURL))])]), t._m(1), t._m(2), t._m(3)]), i("div", {
                    staticClass: "card--fyi--large"
                }, [i("h5", [t._v("Default Rate Limit Per IP Address")]), i("p", [t._v("If an IP address has no rate limit set, they'll use this default limit.")]), i("p", {
                    staticClass: "current_limit--outer"
                }, [t._v("It's currently set to "), i("strong", [i("span", {
                    staticClass: "current_limit"
                }, [t._v(t._s(t.prettyPrintRL))])]), t._v(".")]), i("div", {
                    staticClass: "rate-limit rate-limit-defaults",
                    class: [t.isControlsVisible ? "is-open" : "is-closed", "unlimited" === t.ratelimit_period ? "is-unlimited" : ""],
                    attrs: {
                        "data-what": "ipaddr"
                    }
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ratelimit_limit,
                        expression: "ratelimit_limit"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "number",
                        name: "per_ipauth_relay_limit",
                        disabled: "unlimited" === t.ratelimit_period
                    },
                    domProps: {
                        value: t.ratelimit_limit
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.ratelimit_limit = e.target.value)
                        }
                    }
                }), i("div", {
                    staticClass: "rate-limit-select"
                }, [i("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ratelimit_period,
                        expression: "ratelimit_period"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        name: "per_ipauth_relay_limit_period"
                    },
                    on: {
                        change: function(e) {
                            var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.ratelimit_period = e.target.multiple ? i : i[0]
                        }
                    }
                }, [i("option", {
                    attrs: {
                        value: "unlimited"
                    }
                }, [t._v("Unlimited")]), i("option", {
                    attrs: {
                        value: "01:00:00"
                    }
                }, [t._v("per hour")]), i("option", {
                    attrs: {
                        value: "1 day"
                    }
                }, [t._v("per day")]), i("option", {
                    attrs: {
                        value: "7 days"
                    }
                }, [t._v("per week")]), i("option", {
                    attrs: {
                        value: "1 mon"
                    }
                }, [t._v("per month")])])]), i("base-button", {
                    staticClass: "change-save",
                    attrs: {
                        variant: "blue",
                        "is-loading": t.isSaving
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.save.apply(null, arguments)
                        }
                    }
                }, [t._v("Save")]), i("a", {
                    staticClass: "change-cancel btn grey",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.hideControls.apply(null, arguments)
                        }
                    }
                }, [t._v("Cancel")]), i("a", {
                    staticClass: "change btn grey",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.showControls.apply(null, arguments)
                        }
                    }
                }, [t._v("Change Rate Limit Default")]), i("span", {
                    staticClass: "message-saved",
                    class: {
                        "is-visible": t.isSavedMessageShowing
                    }
                }, [t._v("Saved changes")])], 1)])])
            },
            ie = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("strong", [i("span", {
                    staticClass: "mobile-hide"
                }, [t._v("SMTP ")]), t._v("Server:Â ")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("p", [i("strong", [i("span", {
                    staticClass: "mobile-hide"
                }, [t._v("SMTP ")]), t._v("Port:Â ")]), i("span", {
                    staticClass: "block-val"
                }, [t._v("2525 ")]), i("span", {
                    staticClass: "automatic hide",
                    attrs: {
                        "data-requires": "has_salesforce"
                    }
                }, [i("span", {
                    staticClass: "mobile-hide"
                }, [t._v("(")]), i("span", {
                    staticClass: "block-val"
                }, [t._v("11025")]), t._v(" for Salesforce"), i("span", {
                    staticClass: "mobile-hide"
                }, [t._v(")")])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("p", [i("span", {
                    staticClass: "mobile-hide"
                }, [i("strong", [t._v("Alternative ports:Â ")])]), i("span", {
                    staticClass: "desktop-hide"
                }, [t._v("Alternative/TLS\n            Ports:Â ")]), i("span", {
                    staticClass: "block-val"
                }, [t._v("8025,Â ")]), i("span", {
                    staticClass: "block-val"
                }, [t._v("587,Â ")]), i("span", {
                    staticClass: "block-val"
                }, [t._v("80")]), t._v(" or "), i("span", {
                    staticClass: "block-val"
                }, [t._v("25")]), t._v("."), i("span", {
                    staticClass: "mobile-hide"
                }, [t._v(" TLS is available on the same ports.")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("p", [t._v("SSL "), i("span", {
                    staticClass: "mobile-hide"
                }, [t._v("is available on ")]), t._v("ports"), i("span", {
                    staticClass: "desktop-hide"
                }, [t._v(":Â ")]), i("span", {
                    staticClass: "block-val"
                }, [t._v("Â 465,Â ")]), i("span", {
                    staticClass: "block-val"
                }, [t._v("8465")]), t._v(" and "), i("span", {
                    staticClass: "block-val"
                }, [t._v("443")]), t._v(".")])
            }],
            se = {
                mixins: [ut, Gt],
                components: {
                    BaseButton: zt
                },
                data: function() {
                    return {
                        isControlsVisible: !1,
                        ratelimit_period: "",
                        ratelimit_limit: "",
                        isSavedMessageShowing: !1,
                        isSaving: !1
                    }
                },
                mounted: function() {
                    this.ratelimit_limit = this.$store.state.ipauth.defaultRLLimit, this.ratelimit_period = this.$store.state.ipauth.defaultRLPeriod
                },
                computed: {
                    mailServerURL: function() {
                        return this.$store.state.root.mail_server_url
                    },
                    prettyPrintRL: function() {
                        return this.mixinHelpers_prettyPrintRatelimit(this.$store.state.ipauth.defaultRLLimit, this.$store.state.ipauth.defaultRLPeriod)
                    }
                },
                methods: {
                    showControls: function() {
                        this.isControlsVisible = !0
                    },
                    hideControls: function() {
                        this.isControlsVisible = !1
                    },
                    save: function() {
                        var t = this;
                        if (this.mixinAlerts_clear(), "" !== this.ratelimit_limit || "unlimited" === this.ratelimit_period) {
                            var e = parseInt(this.ratelimit_limit);
                            (isNaN(e) || e <= 0) && "unlimited" !== this.ratelimit_period ? this.mixinAlerts_error("Limit must be a number") : (this.isSaving = !0, this.$store.dispatch(M.actions.UPDATE_DEFAULT_RATELIMIT, {
                                ratelimit_limit: this.ratelimit_limit,
                                ratelimit_period: this.ratelimit_period
                            }).then((function() {
                                t.isSaving = !1, t.hideControls()
                            })).catch((function(e) {
                                t.mixinAlerts_error(e), t.isSaving = !1, t.hideControls()
                            })))
                        } else this.mixinAlerts_error("Please provide a limit or select unlimited")
                    }
                }
            },
            ae = se,
            ne = (i("0127"), Object(V["a"])(ae, ee, ie, !1, null, "2911b61e", null)),
            oe = ne.exports;

        function re(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function le(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? re(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : re(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var ce = {
                components: {
                    Page: Q,
                    PendingRequestsTable: Dt,
                    InfoNote: Ct,
                    ManageIpAddressesTable: Ft,
                    IpEdit: te,
                    IpAddressesSettings: oe,
                    BaseLoader: ht
                },
                computed: le(le({}, Object(c["b"])({
                    pending_ips: M.getters.GET_PENDING_IPS,
                    active_ips: M.getters.GET_ACTIVE_IPS,
                    isFetchingActiveIps: M.getters.IS_FETCHING_ACTIVE_IPS,
                    isFetchingPendingIps: M.getters.IS_FETCHING_PENDING_IPS,
                    isEditActive: M.getters.IS_EDITING_IP
                })), {}, {
                    has_pending_ips: function() {
                        return void 0 !== this.pending_ips && null !== this.pending_ips && this.pending_ips.length > 0
                    },
                    has_active_ips: function() {
                        return void 0 !== this.active_ips && null !== this.active_ips && this.active_ips.length > 0
                    }
                }),
                methods: {
                    setPage: function(t) {
                        this.$emit("setPage", t)
                    }
                }
            },
            ue = ce,
            de = (i("ee12"), i("fc44"), Object(V["a"])(ue, G, j, !1, null, "8ef501a0", null)),
            _e = de.exports,
            pe = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("page", {
                    attrs: {
                        hasBackButton: "",
                        title: "Add IP Address"
                    },
                    on: {
                        goBack: t.goBackTop
                    },
                    scopedSlots: t._u([{
                        key: "description",
                        fn: function() {
                            return [i("p", [t._v("\n      Enter the details for your new IP address or IP address range below."), i("br"), t._v("\n      This step may take up to 30 seconds while we retrieve WHOIS records for the IP address(es).\n    ")])]
                        },
                        proxy: !0
                    }])
                }, [i("div", {
                    staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
                }, [i("card", {
                    scopedSlots: t._u([{
                        key: "footer",
                        fn: function() {
                            return [i("buttons-row", [i("button", {
                                staticClass: "btn button-dropdown",
                                class: {
                                    hidden: t.stepOneActive
                                },
                                attrs: {
                                    type: "button",
                                    role: "button"
                                },
                                on: {
                                    click: t.goBackOne
                                }
                            }, [t._v("\n            Back to step 1\n          ")]), i("base-button", {
                                class: {
                                    disabled: t.continueDisabled
                                },
                                attrs: {
                                    type: "button",
                                    variant: "blue",
                                    isLoading: t.working
                                },
                                on: {
                                    click: t.doContinue
                                }
                            }, [t._v("\n            Continue\n          ")]), i("button", {
                                staticClass: "btn button-dropdown",
                                class: {
                                    disabled: t.cancelDisabled
                                },
                                attrs: {
                                    type: "button",
                                    role: "button",
                                    tabindex: "4"
                                },
                                on: {
                                    click: t.goBack
                                }
                            }, [t._v("\n            Cancel\n          ")])], 1)]
                        },
                        proxy: !0
                    }])
                }, [i("transition", {
                    attrs: {
                        name: "page-fade",
                        mode: "out-in"
                    }
                }, [1 === t.currentStep ? i("card-step", {
                    key: "1",
                    scopedSlots: t._u([{
                        key: "heading",
                        fn: function() {
                            return [t._v("\n            Enter the IP Address or IP Range youâ€™d like to add\n          ")]
                        },
                        proxy: !0
                    }], null, !1, 3295084063)
                }, [i("div", {
                    staticClass: "form-group"
                }, [i("div", {
                    staticClass: "form-group-item"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ip_address,
                        expression: "ip_address"
                    }],
                    ref: "ipfield",
                    staticClass: "form-control input-md",
                    attrs: {
                        type: "text",
                        tabindex: "1"
                    },
                    domProps: {
                        value: t.ip_address
                    },
                    on: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.doContinue.apply(null, arguments)
                        },
                        input: function(e) {
                            e.target.composing || (t.ip_address = e.target.value)
                        }
                    }
                }), i("info-note", {
                    scopedSlots: t._u([{
                        key: "heading",
                        fn: function() {
                            return [t._v("Examples")]
                        },
                        proxy: !0
                    }], null, !1, 2380415086)
                }, [i("p", [t._v("\n                  Single IP Address: 1.2.3.4\n                ")]), i("p", [t._v("\n                  IP Range (CIDR): 1.2.3.0/24\n                ")])])], 1)]), i("label", {
                    staticClass: "custom-label",
                    attrs: {
                        for: "ip-description"
                    }
                }, [t._v("Description:")]), i("div", {
                    staticClass: "form-group"
                }, [i("div", {
                    staticClass: "form-group-item"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.description,
                        expression: "description"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        id: "ip-description",
                        type: "text",
                        tabindex: "2"
                    },
                    domProps: {
                        value: t.description
                    },
                    on: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.doContinue.apply(null, arguments)
                        },
                        input: function(e) {
                            e.target.composing || (t.description = e.target.value)
                        }
                    }
                })])])]) : 2 === t.currentStep ? i("card-step", {
                    key: "2",
                    attrs: {
                        step: 2
                    },
                    scopedSlots: t._u([{
                        key: "heading",
                        fn: function() {
                            return [t._v("\n            Choose an email to verify the IP Address(es): " + t._s(t.ip_address) + "\n          ")]
                        },
                        proxy: !0
                    }])
                }, [i("div", {
                    staticClass: "form-group"
                }, [i("div", {
                    staticClass: "form-group-item"
                }, [i("div", {
                    staticClass: "form-select-wrapper"
                }, [i("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.email,
                        expression: "email"
                    }],
                    staticClass: "form-control input-md",
                    on: {
                        change: function(e) {
                            var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.email = e.target.multiple ? i : i[0]
                        }
                    }
                }, t._l(t.emails, (function(e) {
                    return i("option", {
                        key: e,
                        domProps: {
                            value: e
                        }
                    }, [t._v(t._s(e))])
                })), 0)]), i("div", {
                    staticClass: "field-info"
                }, [t._v("We've determined the above email addresses are associated with the specified IP address(es)."), i("br"), t._v(" \n              Select one where you can receive mail and weâ€™ll send instructions for completing the registration.")])])]), i("hr"), i("label", {
                    staticClass: "custom-label",
                    attrs: {
                        for: "instructionsMessage"
                    }
                }, [t._v("Optional message to include at the top of the instructions:")]), i("div", {
                    staticClass: "form-group"
                }, [i("div", {
                    staticClass: "form-group-item"
                }, [i("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.message,
                        expression: "message"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        id: "instructionsMessage",
                        rows: "7"
                    },
                    domProps: {
                        value: t.message
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.message = e.target.value)
                        }
                    }
                }), i("div", {
                    staticClass: "field-info is-muted"
                }, [t._v("Including a message lets you give them some context as to why theyâ€™re receiving this message, so itâ€™s more likely to be acted upon.")])])])]) : t._e()], 1)], 1)], 1)])
            },
            me = [],
            fe = (i("a481"), i("aef6"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "card-vue"
                }, [t.title ? i("div", {
                    staticClass: "header"
                }, [t.icon ? i("span", {
                    staticClass: "icon",
                    domProps: {
                        innerHTML: t._s(t.icon)
                    }
                }) : t._e(), i("h3", {
                    staticClass: "heading",
                    domProps: {
                        textContent: t._s(t.title)
                    }
                })]) : t._e(), i("div", {
                    staticClass: "body"
                }, [t._t("default")], 2), i("div", {
                    staticClass: "footer"
                }, [i("div", {
                    staticClass: "footer-main"
                }, [t._t("footer")], 2), i("div", {
                    staticClass: "footer-extra"
                }, [t._t("footer-extra")], 2)])])
            }),
            he = [],
            ve = {
                props: {
                    id: {
                        type: String,
                        default: null
                    },
                    title: {
                        type: String,
                        default: null
                    },
                    icon: {
                        type: String,
                        default: void 0
                    }
                }
            },
            be = ve,
            ge = (i("5f8f"), Object(V["a"])(be, fe, he, !1, null, "f8d28d08", null)),
            Ie = ge.exports,
            Ee = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "card-step",
                    attrs: {
                        "data-step": t.step
                    }
                }, [i("div", {
                    staticClass: "header"
                }, [i("h4", {
                    staticClass: "heading"
                }, [t._t("heading")], 2)]), i("div", {
                    staticClass: "body"
                }, [t._t("default")], 2)])
            },
            De = [],
            Oe = {
                props: {
                    step: {
                        type: Number,
                        default: void 0
                    }
                }
            },
            Ae = Oe,
            Te = (i("3695"), Object(V["a"])(Ae, Ee, De, !1, null, "33b9c5b2", null)),
            Pe = Te.exports,
            Ce = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "buttons-row"
                }, [t._t("default")], 2)
            },
            Le = [],
            Se = (i("180a"), {}),
            Me = Object(V["a"])(Se, Ce, Le, !1, null, "b2a479ae", null),
            ke = Me.exports,
            ye = {
                mixins: [ut],
                components: {
                    Page: Q,
                    Card: Ie,
                    CardStep: Pe,
                    ButtonsRow: ke,
                    InfoNote: Ct,
                    BaseButton: zt
                },
                data: function() {
                    return {
                        currentStep: 1,
                        working: !1,
                        ip_address: "",
                        description: "",
                        email: "",
                        message: "",
                        emails: []
                    }
                },
                computed: {
                    continueDisabled: function() {
                        return !(!this.working && 0 !== this.ip_address.length)
                    },
                    cancelDisabled: function() {
                        return this.working
                    },
                    stepOneActive: function() {
                        return 1 === this.currentStep
                    }
                },
                created: function() {
                    document.addEventListener("keyup", this.handleEscape), this.mixinAlerts_clear()
                },
                mounted: function() {
                    this.$refs.ipfield.focus()
                },
                destroyed: function() {
                    document.removeEventListener("keyup", this.handleEscape), this.mixinAlerts_clear()
                },
                methods: {
                    handleEscape: function(t) {
                        "Escape" === t.key && this.goBack()
                    },
                    doContinue: function() {
                        var t = this;
                        if (!this.continueDisabled)
                            if (1 === this.currentStep) {
                                this.working = !0, this.mixinAlerts_clear();
                                var e = "";
                                this.ip_address.endsWith("+support") && (this.ip_address = this.ip_address.replace("+support", ""), e = "+support"), this.$store.dispatch(M.actions.LOOKUP_IP_EMAILS, {
                                    ip_address: this.ip_address + e,
                                    description: this.description
                                }).then((function(e) {
                                    if (t.working = !1, !e.results.verification_required) return t.currentStep = 0, t.$store.commit(M.mutations.ADD_ACTIVE_IP, e.results.active_ip), t.goBack(), void setTimeout((function() {
                                        HTML.alertUser("success", "Successfully added IP Address")
                                    }), 300);
                                    t.currentStep = t.currentStep % 2 + 1, t.emails = e.results.emails, t.email = e.results.emails[0]
                                })).catch((function(e) {
                                    t.working = !1, t.mixinAlerts_error(e)
                                }))
                            } else 2 === this.currentStep && (this.working = !0, this.mixinAlerts_clear(), this.$store.dispatch(M.actions.ADD_PENDING_IP, {
                                ip_address: this.ip_address,
                                description: this.description,
                                email: this.email,
                                message: this.message
                            }).then((function(e) {
                                t.working = !1, t.goBack(), t.$eventBus.$emit("showPopup", "confirm-request", e.results)
                            })).catch((function(e) {
                                t.working = !1, t.mixinAlerts_error(e)
                            })))
                    },
                    goBackTop: function() {
                        console.log(this.currentStep), 2 !== this.currentStep ? this.goBack() : this.goBackOne()
                    },
                    goBackOne: function() {
                        this.working || (this.message = null, this.working = !1, this.currentStep = 1, this.emails = null, this.email = null)
                    },
                    goBack: function() {
                        this.working || this.$emit("goBack")
                    }
                }
            },
            Ne = ye,
            Re = (i("a7fc"), Object(V["a"])(Ne, pe, me, !1, null, "3da56062", null)),
            we = Re.exports,
            Ge = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [i("div", {
                    staticClass: "info-splash is-visible"
                }, [i("div", {
                    staticClass: "table-splash-grid"
                }, [i("figure", [i("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/splash-ipauth-table.png",
                        width: "268",
                        alt: "SMTP2GO IP Authentication"
                    }
                })]), i("div", {
                    staticClass: "table-splash-content"
                }, [i("h2", [t._v("IP Authentication")]), i("p", {
                    staticClass: "lead-in"
                }, [t._v("Send emails without needing an SMTP username or password, from a fixed IP address or IP range.")]), t.disableAdd ? t._e() : i("div", [i("p", {
                    staticClass: "splash-block-button"
                }, [i("a", {
                    staticClass: "btn btn-outlined",
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/21149933711513-IP-Authentication",
                        target: "_blank"
                    }
                }, [t._v("See our guide")]), t._v("Â \n            "), i("a", {
                    staticClass: "green btn",
                    attrs: {
                        href: "/account/changeplan/"
                    }
                }, [t._v("See Upgrade Options"), i("span", {
                    staticClass: "button-icon"
                }, [t._v("+")])])]), i("p", {
                    staticClass: "lead-in splash-block-500 lead-small"
                }, [t._v("This feature is available to paid accounts.")])])])])])])
            },
            je = [];

        function xe(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function Be(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? xe(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : xe(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var $e = {
                name: "splash",
                computed: Be({}, Object(c["b"])({
                    disableAdd: E.getters.GET_DISABLE_ADD
                }))
            },
            Ue = $e,
            Fe = (i("a0c7"), Object(V["a"])(Ue, Ge, je, !1, null, "6df3daf0", null)),
            Ve = Fe.exports;

        function He(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function qe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? He(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : He(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var Ke = {
                name: "app",
                mixins: [ut],
                components: {
                    MainPage: _e,
                    AddIpAddressPage: we,
                    splash: Ve
                },
                computed: qe(qe({}, Object(c["b"])({
                    isSplashVisible: E.getters.GET_SHOW_SPLASH
                })), {}, {
                    displayPopupIP: function() {
                        return void 0 !== this.popupItem.last_ip && null !== this.popupItem.last_ip && this.popupItem.last_ip.length > 0 ? this.popupItem.first_ip + " - " + this.popupItem.last_ip : this.popupItem.first_ip
                    }
                }),
                data: function() {
                    return {
                        activePage: "main",
                        activePopup: null,
                        shouldPopupAnimate: !0,
                        popupItem: {
                            trusted_email: "",
                            first_ip: "",
                            last_ip: ""
                        }
                    }
                },
                mounted: function() {
                    var t = this;
                    this.isSplashVisible || (this.$store.dispatch(M.actions.LOAD_ACTIVE_IPS).catch((function(e) {
                        t.mixinAlerts_error(e)
                    })), this.$store.dispatch(M.actions.LOAD_PENDING_IPS).catch((function(e) {
                        t.mixinAlerts_error(e)
                    }))), this.$eventBus.$on("showPopup", this.showPopup), this.$eventBus.$on("showPopupImmediately", this.showPopupImmediately)
                },
                methods: {
                    showPopup: function(t, e) {
                        this.activePopup = t, this.popupItem = e
                    },
                    showPopupImmediately: function(t, e) {
                        var i = this;
                        this.shouldPopupAnimate = !1, this.showPopup(t, e), setTimeout((function() {
                            i.shouldPopupAnimate = !0
                        }), 0)
                    },
                    hidePopup: function() {
                        this.activePopup = null
                    },
                    setPage: function(t) {
                        this.activePage = t
                    }
                }
            },
            We = Ke,
            Ye = (i("fffb"), i("5151"), Object(V["a"])(We, o, r, !1, null, "25a52e2e", null)),
            Xe = Ye.exports;
        s["a"].use(c["a"]);
        var ze = new c["a"].Store({
                strict: !1,
                getters: {},
                mutations: {},
                actions: {},
                modules: {
                    root: P,
                    ipauth: w
                }
            }),
            Je = ze;
        s["a"].use(n.a), s["a"].config.productionTip = !1, s["a"].prototype.$eventBus = new s["a"], Je.commit(E.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey), Je.commit(E.mutations.SET_SHOW_SPLASH, PAGE_DATA.showSplash), Je.commit(E.mutations.SET_APP_SETTINGS, PAGE_DATA.appSettings), Je.commit(E.mutations.SET_END_POINTS, END_POINTS.urls()), Je.commit(E.mutations.SET_REGION, PAGE_DATA.region), Je.commit(E.mutations.SET_SHOW_SPLASH, !PAGE_DATA.isAllowedIPAuth), Je.commit(M.mutations.SET_IP_POOLS, PAGE_DATA.ip_pools), Je.commit(M.mutations.SET_DEFAULT_RL_LIMIT, PAGE_DATA.ratelimits.default_limit), Je.commit(M.mutations.SET_DEFAULT_RL_PERIOD, PAGE_DATA.ratelimits.default_period), Je.commit(M.mutations.SET_IS_ALLOWED_ARCHIVING, PAGE_DATA.isAllowedArchiving), Je.commit(E.mutations.SET_DISABLE_ADD, PAGE_DATA.disableAdd), g(Je), new s["a"]({
            store: Je,
            render: function(t) {
                return t(Xe)
            }
        }).$mount("#app")
    },
    "5d587": function(t, e, i) {},
    "5f8f": function(t, e, i) {
        "use strict";
        i("b160")
    },
    "650b": function(t, e, i) {},
    "673f": function(t, e, i) {},
    "76df": function(t, e, i) {},
    "79ae": function(t, e, i) {},
    "7b17": function(t, e, i) {
        "use strict";
        i("b8ed")
    },
    "7f11": function(t, e, i) {},
    8833: function(t, e, i) {},
    "8e02": function(t, e, i) {},
    "9fec": function(t, e, i) {
        "use strict";
        i("3754")
    },
    a0c7: function(t, e, i) {
        "use strict";
        i("d365")
    },
    a210: function(t, e, i) {},
    a7fc: function(t, e, i) {
        "use strict";
        i("650b")
    },
    b160: function(t, e, i) {},
    b5f9: function(t, e, i) {},
    b7fd: function(t, e, i) {},
    b8ed: function(t, e, i) {},
    b9bc: function(t, e, i) {
        "use strict";
        i("79ae")
    },
    ccb0: function(t, e, i) {},
    d365: function(t, e, i) {},
    e7d6: function(t, e, i) {
        "use strict";
        i("b7fd")
    },
    ee12: function(t, e, i) {
        "use strict";
        i("7f11")
    },
    ef5e: function(t, e, i) {
        "use strict";
        i("5d587")
    },
    fc44: function(t, e, i) {
        "use strict";
        i("76df")
    },
    fffb: function(t, e, i) {
        "use strict";
        i("a210")
    }
});
//# sourceMappingURL=app.f7d39799.js.map