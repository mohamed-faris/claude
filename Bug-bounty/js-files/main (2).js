(function(t) {
    function e(e) {
        for (var s, o, r = e[0], l = e[1], c = e[2], u = 0, d = []; u < r.length; u++) o = r[u], Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]), a[o] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        _ && _(e);
        while (d.length) d.shift()();
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
    var _ = l;
    n.push([0, "chunk-vendors"]), i()
})({
    0: function(t, e, i) {
        t.exports = i("56d7")
    },
    "052f": function(t, e, i) {},
    "0791": function(t, e, i) {},
    1: function(t, e) {},
    10: function(t, e) {},
    "1a95": function(t, e, i) {
        "use strict";
        i("b31e")
    },
    2: function(t, e) {},
    2004: function(t, e, i) {
        "use strict";
        i("2ee9")
    },
    2255: function(t, e, i) {},
    "2e4b": function(t, e, i) {},
    "2ee9": function(t, e, i) {},
    3: function(t, e) {},
    "3e8c": function(t, e, i) {
        "use strict";
        i("0791")
    },
    4: function(t, e) {},
    5: function(t, e) {},
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        i("cadf"), i("551c"), i("f751"), i("097d");
        var s = i("2b0e"),
            a = i("2b27"),
            n = i.n(a),
            o = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: {
                        "smtpauth-splash-on": t.isSplashVisible
                    },
                    attrs: {
                        id: "app smtp-auth"
                    }
                }, [e("main-page"), e("div", {
                    staticClass: "info-splash",
                    class: {
                        "is-visible": t.isSplashVisible
                    }
                }, [t._m(0), e("h2", [t._v("SMTP usernames allow you to connect to us with any software that can use SMTP.")]), e("p", {
                    staticClass: "lead-in"
                }, [t._v("We'll recommend an SMTP username for you to add - feel free to change this as required.")]), e("p", [e("button", {
                    staticClass: "btn green",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.hideSplash.apply(null, arguments)
                        }
                    }
                }, [t._v("Continue")])])])], 1)
            },
            r = [function() {
                var t = this,
                    e = t._self._c;
                return e("figure", [e("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/splash-userid.png",
                        width: "268",
                        alt: "SMTP2GO IP Authentication"
                    }
                })])
            }],
            l = (i("8e6e"), i("ac6a"), i("456d"), i("bd86")),
            c = i("2f62");

        function _(t, e) {
            var i = "".concat(e, "/");
            return Object.keys(t).reduce((function(e, s) {
                return e[s] = Object.keys(t[s]).reduce((function(e, a) {
                    return e[a] = "".concat(i).concat(t[s][a]), e
                }), {}), e
            }), {})
        }
        var u, d, p = {
                getters: {
                    IS_AJAX_RUNNING: "IS_AJAX_RUNNING",
                    BACKEND_URL: "BACKEND_URL",
                    GET_SHOW_SPLASH: "GET_SHOW_SPLASH",
                    GET_MAIL_SERVER_URL: "GET_MAIL_SERVER_URL"
                },
                mutations: {
                    SET_CSRF_KEY: "SET_CSRF_KEY",
                    SET_SHOW_SPLASH: "SET_SHOW_SPLASH",
                    SET_END_POINTS: "END_POINTS",
                    SET_REGION: "SET_REGION",
                    INC_RUNNING_AJAX_REQUESTS: "INC_RUNNING_AJAX_REQUESTS",
                    DEC_RUNNING_AJAX_REQUESTS: "DEC_RUNNING_AJAX_REQUESTS"
                },
                actions: {}
            },
            m = _(p, "root"),
            f = {
                running_ajax_requests: 0,
                csrf_key: "",
                end_points: {},
                show_splash: !1,
                mail_server_url: "mail.smtp2go.com"
            },
            E = Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({}, p.getters.IS_AJAX_RUNNING, (function(t) {
                return t.running_ajax_requests > 0
            })), p.getters.BACKEND_URL, (function(t) {
                return function(e, i) {
                    return "" !== i ? t.end_points[e] + "?action=" + i + "&CSRF_key=" + t.csrf_key : t.end_points[e] + "?CSRF_key=" + t.csrf_key
                }
            })), p.getters.GET_SHOW_SPLASH, (function(t) {
                return t.show_splash
            })), p.getters.GET_MAIL_SERVER_URL, (function(t) {
                return t.mail_server_url
            })),
            v = Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({}, p.mutations.SET_CSRF_KEY, (function(t, e) {
                t.csrf_key = e
            })), p.mutations.SET_SHOW_SPLASH, (function(t, e) {
                t.show_splash = e
            })), p.mutations.SET_END_POINTS, (function(t, e) {
                t.end_points = e
            })), p.mutations.SET_REGION, (function(t, e) {
                console.log("SET REGION:", e), "au" === e ? t.mail_server_url = "mail-au.smtp2go.com" : "eu" === e && (t.mail_server_url = "mail-eu.smtp2go.com"), console.log("MAIL_SERVER:", t.mail_server_url)
            })), p.mutations.INC_RUNNING_AJAX_REQUESTS, (function(t) {
                t.running_ajax_requests++
            })), p.mutations.DEC_RUNNING_AJAX_REQUESTS, (function(t) {
                t.running_ajax_requests--
            })),
            h = {},
            b = {
                namespaced: !0,
                state: f,
                getters: E,
                mutations: v,
                actions: h
            },
            g = i("75fc"),
            T = (i("55dd"), i("a481"), i("bc3a")),
            O = i.n(T),
            D = O.a.create(),
            A = function(t) {
                D.interceptors.request.use((function(e) {
                    return t.commit("root/INC_RUNNING_AJAX_REQUESTS"), e
                })), D.interceptors.response.use((function(e) {
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
            };

        function S(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function I(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : S(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var C = {
                getters: {
                    GET_IS_COLUMN_SHOWN: "GET_IS_COLUMN_SHOWN",
                    GET_IS_AUTOMATIC_COLS: "GET_IS_AUTOMATIC_COLS",
                    GET_ACTIVE_USERS: "GET_ACTIVE_USERS",
                    IS_FETCHING_ACTIVE_USERS: "IS_FETCHING_ACTIVE_USERS",
                    IS_FETCHING_MORE_ACTIVE_USERS: "IS_FETCHING_MORE_ACTIVE_USERS",
                    IS_EDITING_USER: "IS_EDITING_USER",
                    GET_DEFAULT_RL_LIMIT: "GET_DEFAULT_RL_LIMIT",
                    GET_DEFAULT_RL_PERIOD: "GET_DEFAULT_RL_PERIOD",
                    GET_IP_POOL_LABEL: "GET_IP_POOL_LABEL",
                    GET_IP_POOLS: "GET_IP_POOLS",
                    HAS_IP_POOLS: "HAS_IP_POOLS",
                    GET_IS_ALLOWED_ARCHIVING: "GET_IS_ALLOWED_ARCHIVING",
                    GET_PREFILLED_USERNAME: "GET_PREFILLED_USERNAME",
                    GET_SHOW_PASSWORDLESS_COLUMN: "GET_SHOW_PASSWORDLESS_COLUMN",
                    GET_SHOW_STATUS_COLUMN: "GET_SHOW_STATUS_COLUMN",
                    CURRENT_PAGE: "CURRENT_PAGE",
                    CAN_LOAD_MORE: "CAN_LOAD_MORE",
                    GET_SEARCH_TEXT: "GET_SEARCH_TEXT",
                    GET_NO_USER_MESSAGE: "GET_NO_USER_MESSAGE",
                    GET_SHOW_PASSWORD_ON_MODAL: "GET_SHOW_PASSWORD_ON_MODAL",
                    GET_DISABLE_ADD: "GET_DISABLE_ADD",
                    EDIT_MODAL_IS_PASSWORDLESS: "EDIT_MODAL_IS_PASSWORDLESS",
                    EDIT_MODAL_IS_EDITING: "EDIT_MODAL_IS_EDITING",
                    EDIT_MODAL_USERNAME: "EDIT_MODAL_USERNAME",
                    EDIT_MODAL_OLD_USERNAME: "EDIT_MODAL_OLD_USERNAME",
                    EDIT_MODAL_PASSWORD: "EDIT_MODAL_PASSWORD",
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
                    TOGGLE_IS_COLUMN_SHOWN: "TOGGLE_IS_COLUMN_SHOWN",
                    SET_IS_AUTOMATIC_COLS: "SET_IS_AUTOMATIC_COLS",
                    SET_APP_SETTINGS: "SET_APP_SETTINGS",
                    SET_SHOW_PASSWORD_ON_MODAL: "SET_SHOW_PASSWORD_ON_MODAL",
                    SET_NO_USER_MESSAGE: "SET_NO_USER_MESSAGE",
                    SET_ACTIVE_USERS: "SET_ACTIVE_USERS",
                    ADD_ACTIVE_USERS: "ADD_ACTIVE_USERS",
                    SET_IS_FETCHING_ACTIVE_USERS: "SET_IS_FETCHING_ACTIVE_USERS",
                    SET_IS_FETCHING_MORE_ACTIVE_USERS: "SET_IS_FETCHING_MORE_ACTIVE_USERS",
                    SET_ACTIVE_USER_PROPERTY: "SET_ACTIVE_USER_PROPERTY",
                    REMOVE_ACTIVE_USER: "REMOVE_ACTIVE_USER",
                    UPDATE_ACTIVE_USER: "UPDATE_ACTIVE_USER",
                    TOGGLE_EDIT_MODAL: "TOGGLE_EDIT_MODAL",
                    UPDATE_DEFAULT_RATELIMIT: "UPDATE_DEFAULT_RATELIMIT",
                    SET_DEFAULT_RL_LIMIT: "SET_DEFAULT_RL_LIMIT",
                    SET_DEFAULT_RL_PERIOD: "SET_DEFAULT_RL_PERIOD",
                    SET_IP_POOLS: "SET_IP_POOLS",
                    SET_IS_ALLOWED_ARCHIVING: "SET_IS_ALLOWED_ARCHIVING",
                    SET_PREFILLED_USERNAME: "SET_PREFILLED_USERNAME",
                    SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
                    CAN_LOAD_MORE: "CAN_LOAD_MORE",
                    SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
                    SET_SEARCH_TEXT_CHANGED: "SET_SEARCH_TEXT_CHANGED",
                    SET_DISABLE_ADD: "SET_DISABLE_ADD",
                    EDIT_MODAL_USERNAME: "EDIT_MODAL_USERNAME",
                    EDIT_MODAL_PASSWORD: "EDIT_MODAL_PASSWORD",
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
                    SAVE_COLUMNS: "SAVE_COLUMNS",
                    LOAD_ACTIVE_USERS: "LOAD_ACTIVE_USERS",
                    REMOVE_ACTIVE_USER: "REMOVE_ACTIVE_USER",
                    UPDATE_ACTIVE_USER: "UPDATE_ACTIVE_USER",
                    UPDATE_DEFAULT_RATELIMIT: "UPDATE_DEFAULT_RATELIMIT",
                    SEARCH_USERS: "SEARCH_USERS"
                }
            },
            L = _(C, "smtpauth"),
            M = {
                columns_need_saving: !1,
                app_settings: {},
                automatic_cols: {},
                active_users: [],
                isFetchingActiveUsers: !1,
                isFetchingMoreActiveUsers: !1,
                ip_pools: [],
                default_ippool: -1,
                default_ippool_label: "",
                isEditModalShowing: !1,
                editModalData: {},
                defaultFBText: "To unsubscribe click: %%UNSUBSCRIBE%%",
                defaultFBHTML: '<br />\n<p><a href="%%UNSUBSCRIBE%%">unsubscribe</a></p>',
                defaultRLLimit: null,
                defaultRLPeriod: null,
                isAllowedArchiving: !1,
                prefilled_username: null,
                show_passwordless_column: !1,
                show_status_column: !1,
                searchText: "",
                searchTextChanged: !1,
                noUserMessage: "You currently don't have any SMTP Users.",
                showPasswordOnModal: !1,
                disableAdd: !1,
                current_page: 0,
                canLoadMore: !1
            };

        function R(t, e) {
            var i = t.username.toLowerCase().replace(/[^0-9a-z]/gi, ""),
                s = e.username.toLowerCase().replace(/[^0-9a-z]/gi, ""),
                a = i.localeCompare(s);
            return 0 === a ? 0 : a > 0 ? 1 : -1
        }
        var P = (u = {}, Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(u, C.getters.GET_IS_COLUMN_SHOWN, (function(t) {
                return function(e) {
                    if (t.app_settings["smtpauth_automatic_cols"]) return t.automatic_cols[e];
                    var i = "show_smtpauth_" + e + "_col";
                    return void 0 !== t.app_settings[i] && null !== t.app_settings[i] && t.app_settings[i]
                }
            })), C.getters.GET_IS_AUTOMATIC_COLS, (function(t) {
                return t.app_settings["smtpauth_automatic_cols"]
            })), C.getters.GET_NO_USER_MESSAGE, (function(t) {
                return t.noUserMessage
            })), C.getters.CURRENT_PAGE, (function(t) {
                return t.current_page
            })), C.getters.CAN_LOAD_MORE, (function(t) {
                return t.canLoadMore
            })), C.getters.GET_ACTIVE_USERS, (function(t) {
                return t.active_users
            })), C.getters.IS_FETCHING_ACTIVE_USERS, (function(t) {
                return t.isFetchingActiveUsers
            })), C.getters.IS_FETCHING_MORE_ACTIVE_USERS, (function(t) {
                return t.isFetchingMoreActiveUsers
            })), C.getters.IS_EDITING_USER, (function(t) {
                return t.isEditModalShowing
            })), C.getters.GET_DEFAULT_RL_LIMIT, (function(t) {
                return t.defaultRLLimit
            })), Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(u, C.getters.GET_DEFAULT_RL_PERIOD, (function(t) {
                return t.defaultRLPeriod
            })), C.getters.HAS_IP_POOLS, (function(t) {
                return t.ip_pools.length > 0
            })), C.getters.GET_IP_POOLS, (function(t) {
                return t.ip_pools
            })), C.getters.GET_IP_POOL_LABEL, (function(t) {
                return function(e) {
                    var i = null;
                    return "default" === e ? "Use default (" + t.default_ippool_label + ")" : (void 0 !== e && null !== e && t.ip_pools.forEach((function(t) {
                        t.id === e && (i = t.label)
                    })), i)
                }
            })), C.getters.GET_SEARCH_TEXT, (function(t) {
                return t.searchText
            })), C.getters.GET_SHOW_PASSWORD_ON_MODAL, (function(t) {
                return t.showPasswordOnModal
            })), C.getters.GET_PREFILLED_USERNAME, (function(t) {
                return t.prefilled_username
            })), C.getters.GET_SHOW_PASSWORDLESS_COLUMN, (function(t) {
                return t.show_passwordless_column
            })), C.getters.GET_SHOW_STATUS_COLUMN, (function(t) {
                return t.show_status_column
            })), C.getters.GET_DISABLE_ADD, (function(t) {
                return t.disableAdd
            })), Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(u, C.getters.EDIT_MODAL_IS_PASSWORDLESS, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.passwordless && null !== t.editModalData.passwordless && t.editModalData.passwordless
            })), C.getters.EDIT_MODAL_IS_EDITING, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.is_editing && null !== t.editModalData.is_editing ? t.editModalData.is_editing : ""
            })), C.getters.EDIT_MODAL_USERNAME, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.username && null !== t.editModalData.username ? t.editModalData.username : ""
            })), C.getters.EDIT_MODAL_OLD_USERNAME, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.old_username && null !== t.editModalData.old_username ? t.editModalData.old_username : ""
            })), C.getters.EDIT_MODAL_PASSWORD, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.password && null !== t.editModalData.password ? t.editModalData.password : ""
            })), C.getters.EDIT_MODAL_DESCRIPTION, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.description && null !== t.editModalData.description ? t.editModalData.description : ""
            })), C.getters.EDIT_MODAL_IPPOOL, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.ippool && null !== t.editModalData.ippool ? t.editModalData.ippool : ""
            })), C.getters.EDIT_MODAL_RL_LIMIT, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.ratelimit_limit && null !== t.editModalData.ratelimit_limit ? t.editModalData.ratelimit_limit : ""
            })), C.getters.EDIT_MODAL_RL_PERIOD, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.ratelimit_period && null !== t.editModalData.ratelimit_period ? t.editModalData.ratelimit_period : "unlimited"
            })), C.getters.EDIT_MODAL_RL_CUSTOM, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.ratelimit_custom && null !== t.editModalData.ratelimit_custom && t.editModalData.ratelimit_custom
            })), Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(u, C.getters.EDIT_MODAL_FB_ENABLED, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.feedback_enabled && null !== t.editModalData.feedback_enabled && t.editModalData.feedback_enabled
            })), C.getters.EDIT_MODAL_FB_TEXT, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.feedback_text && null !== t.editModalData.feedback_text ? t.editModalData.feedback_text : t.defaultFBText
            })), C.getters.EDIT_MODAL_FB_HTML, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.feedback_html && null !== t.editModalData.feedback_html ? t.editModalData.feedback_html : t.defaultFBHTML
            })), C.getters.EDIT_MODAL_OPEN_TRACKING, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.open_tracking && null !== t.editModalData.open_tracking && t.editModalData.open_tracking
            })), C.getters.EDIT_MODAL_CLICK_TRACKING, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.click_tracking && null !== t.editModalData.click_tracking && t.editModalData.click_tracking
            })), C.getters.EDIT_MODAL_BLOCKED, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.blocked && null !== t.editModalData.blocked && t.editModalData.blocked
            })), C.getters.EDIT_MODAL_SANDBOX_MODE, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.sandbox_mode && null !== t.editModalData.sandbox_mode && t.editModalData.sandbox_mode
            })), C.getters.EDIT_MODAL_ARCHIVING, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.archiving && null !== t.editModalData.archiving && t.editModalData.archiving
            })), C.getters.EDIT_MODAL_ARCHIVING_INITIAL, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.archiving_initial && null !== t.editModalData.archiving_initial && t.editModalData.archiving_initial
            })), C.getters.EDIT_MODAL_AUDIT_EMAIL, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.audit_email && null !== t.editModalData.audit_email ? t.editModalData.audit_email : ""
            })), Object(l["a"])(Object(l["a"])(Object(l["a"])(u, C.getters.EDIT_MODAL_BOUNCE_NOTIFICATIONS, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.bounce_notifications && null !== t.editModalData.bounce_notifications && t.editModalData.bounce_notifications
            })), C.getters.EDIT_MODAL_BOUNCE_TARGET, (function(t) {
                return null !== t.editModalData && void 0 !== t.editModalData.bounce_target && null !== t.editModalData.bounce_target ? t.editModalData.bounce_target : ""
            })), C.getters.GET_IS_ALLOWED_ARCHIVING, (function(t) {
                return t.isAllowedArchiving
            }))),
            w = function(t) {
                var e = {
                        description: !1,
                        ippool: !1,
                        unsubscribes: !1,
                        ratelimit: !1,
                        archiving: !1,
                        open_tracking: !1,
                        click_tracking: !1
                    },
                    i = function(t) {
                        return "string" == typeof t && t.length > 0
                    };
                t.active_users.forEach((function(s) {
                    s.blocked && (t.show_status_column = !0), s.sandbox_mode && (t.show_status_column = !0), s.passwordless && (t.show_passwordless_column = !0), null !== s.ippool && void 0 !== s.ippool || (s.ippool = t.default_ippool), !e.description && i(s.description) && (e.description = !0), e.ippool || s.ippool === t.default_ippool || "default" == s.ippool || (e.ippool = !0), !e.unsubscribes && s.feedback_enabled && (e.unsubscribes = !0), !e.ratelimit && s.ratelimit_custom && (e.ratelimit = !0), !e.archiving && s.archiving && (e.archiving = !0), !e.open_tracking && s.open_tracking && (e.open_tracking = !0), !e.click_tracking && s.click_tracking && (e.click_tracking = !0)
                })), t.automatic_cols = e
            },
            k = (d = {}, Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(d, C.mutations.SET_SHOW_PASSWORD_ON_MODAL, (function(t, e) {
                t.showPasswordOnModal = e
            })), C.mutations.SET_APP_SETTINGS, (function(t, e) {
                t.app_settings = e
            })), C.mutations.TOGGLE_IS_COLUMN_SHOWN, (function(t, e) {
                var i = "show_smtpauth_" + e + "_col";
                s["a"].set(t.app_settings, i, !t.app_settings[i]), t.columns_need_saving = !0
            })), C.mutations.SET_IS_AUTOMATIC_COLS, (function(t, e) {
                s["a"].set(t.app_settings, "smtpauth_automatic_cols", e), !1 === e && (null === t.app_settings["show_smtpauth_description_col"] && (t.app_settings["show_smtpauth_description_col"] = t.automatic_cols["description"]), null === t.app_settings["show_smtpauth_ippool_col"] && (t.app_settings["show_smtpauth_ippool_col"] = t.automatic_cols["ippool"]), null === t.app_settings["show_smtpauth_unsubscribes_col"] && (t.app_settings["show_smtpauth_unsubscribes_col"] = t.automatic_cols["unsubscribes"]), null === t.app_settings["show_smtpauth_ratelimit_col"] && (t.app_settings["show_smtpauth_ratelimit_col"] = t.automatic_cols["ratelimit"]), null === t.app_settings["show_smtpauth_archiving_col"] && (t.app_settings["show_smtpauth_archiving_col"] = t.automatic_cols["archiving"]), null === t.app_settings["show_smtpauth_open_tracking_col"] && (t.app_settings["show_smtpauth_open_tracking_col"] = t.automatic_cols["open_tracking"]), null === t.app_settings["show_smtpauth_click_tracking_col"] && (t.app_settings["show_smtpauth_click_tracking_col"] = t.automatic_cols["click_tracking"])), t.columns_need_saving = !0
            })), C.mutations.SET_NO_USER_MESSAGE, (function(t, e) {
                t.noUserMessage = e
            })), C.mutations.SET_ACTIVE_USERS, (function(t, e) {
                t.active_users = e.sort((function(t, e) {
                    return R(t, e)
                })), w(t)
            })), C.mutations.ADD_ACTIVE_USERS, (function(t, e) {
                var i = t.active_users;
                i.push.apply(i, Object(g["a"])(e)), t.active_users = i.sort((function(t, e) {
                    return R(t, e)
                })), w(t)
            })), C.mutations.CAN_LOAD_MORE, (function(t, e) {
                t.canLoadMore = e
            })), C.mutations.SET_SEARCH_TEXT, (function(t, e) {
                t.searchText = e, t.searchTextChanged = !0
            })), C.mutations.SET_SEARCH_TEXT_CHANGED, (function(t, e) {
                t.searchTextChanged = e
            })), Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(d, C.mutations.SET_IS_FETCHING_ACTIVE_USERS, (function(t, e) {
                t.isFetchingActiveUsers = e
            })), C.mutations.SET_IS_FETCHING_MORE_ACTIVE_USERS, (function(t, e) {
                t.isFetchingMoreActiveUsers = e
            })), C.mutations.SET_ACTIVE_USER_PROPERTY, (function(t, e) {
                var i = e.active_user,
                    a = e.key,
                    n = e.value;
                s["a"].set(i, a, n)
            })), C.mutations.SET_DISABLE_ADD, (function(t, e) {
                t.disableAdd = e
            })), C.mutations.REMOVE_ACTIVE_USER, (function(t, e) {
                var i = e.username;
                t.active_users.forEach((function(e, s) {
                    e.username === i && t.active_users.splice(s, 1)
                }))
            })), C.mutations.UPDATE_ACTIVE_USER, (function(t, e) {
                var i = e.old_username,
                    a = e.results,
                    n = !1;
                t.active_users.forEach((function(e, o) {
                    if (e.username === i) return s["a"].set(t.active_users, o, a), void(n = !0)
                })), n || s["a"].set(t.active_users, t.active_users.length, a), t.show_passwordless_column = !1, t.show_status_column = !1, t.active_users = t.active_users.sort((function(t, e) {
                    return R(t, e)
                })), w(t)
            })), C.mutations.TOGGLE_EDIT_MODAL, (function(t, e) {
                var s = e.visible,
                    a = e.data;
                if (t.isEditModalShowing = s, s && null !== a && void 0 !== a) a.old_username = a.username, a.is_editing = !0, a.archiving_initial = a.archiving, t.editModalData = I({}, a), t.showPasswordOnModal = !1;
                else {
                    var n = i("25b7"),
                        o = n.generate({
                            length: 16,
                            numbers: !0
                        }),
                        r = {
                            is_editing: !1,
                            username: "",
                            description: "",
                            ippool: "default",
                            use_default_ippool: !0,
                            feedback_enabled: !1,
                            feedback_text: t.defaultFBText,
                            feedback_html: t.defaultFBHTML,
                            open_tracking: !1,
                            click_tracking: !1,
                            blocked: !1,
                            sandbox_mode: !1,
                            archiving: !1,
                            archiving_initial: !1,
                            audit_email: "",
                            bounce_notifications: !1,
                            bounce_target: "",
                            password: o,
                            passwordless: !1
                        };
                    r.ratelimit_limit = t.defaultRLLimit, r.ratelimit_period = t.defaultRLPeriod, r.ratelimit_custom = !1, t.editModalData = I({}, r), t.showPasswordOnModal = !0
                }
            })), C.mutations.SET_DEFAULT_RL_LIMIT, (function(t, e) {
                t.defaultRLLimit = e
            })), C.mutations.SET_DEFAULT_RL_PERIOD, (function(t, e) {
                t.defaultRLPeriod = e
            })), C.mutations.SET_IP_POOLS, (function(t, e) {
                t.ip_pools = e, t.ip_pools.forEach((function(e) {
                    e.is_default && (t.default_ippool = e.id, t.default_ippool_label = e.label)
                }))
            })), Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(d, C.mutations.SET_PREFILLED_USERNAME, (function(t, e) {
                t.prefilled_username = e
            })), C.mutations.EDIT_MODAL_USERNAME, (function(t, e) {
                t.editModalData.username = e, t.prefilled_username = null
            })), C.mutations.EDIT_MODAL_PASSWORD, (function(t, e) {
                t.editModalData.password = e
            })), C.mutations.EDIT_MODAL_DESCRIPTION, (function(t, e) {
                t.editModalData.description = e
            })), C.mutations.EDIT_MODAL_IPPOOL, (function(t, e) {
                t.editModalData.ippool = e
            })), C.mutations.EDIT_MODAL_RL_LIMIT, (function(t, e) {
                t.editModalData.ratelimit_limit = e
            })), C.mutations.EDIT_MODAL_RL_PERIOD, (function(t, e) {
                t.editModalData.ratelimit_period = e
            })), C.mutations.EDIT_MODAL_RL_CUSTOM, (function(t, e) {
                t.editModalData.ratelimit_custom = e, e || (t.editModalData.ratelimit_limit = t.defaultRLLimit, t.editModalData.ratelimit_period = t.defaultRLPeriod)
            })), C.mutations.EDIT_MODAL_FB_ENABLED, (function(t, e) {
                t.editModalData.feedback_enabled = e
            })), C.mutations.EDIT_MODAL_FB_TEXT, (function(t, e) {
                t.editModalData.feedback_text = e
            })), Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(d, C.mutations.EDIT_MODAL_FB_HTML, (function(t, e) {
                t.editModalData.feedback_html = e
            })), C.mutations.EDIT_MODAL_OPEN_TRACKING, (function(t, e) {
                t.editModalData.open_tracking = e
            })), C.mutations.EDIT_MODAL_CLICK_TRACKING, (function(t, e) {
                t.editModalData.click_tracking = e
            })), C.mutations.EDIT_MODAL_BLOCKED, (function(t, e) {
                s["a"].set(t.editModalData, "blocked", e)
            })), C.mutations.EDIT_MODAL_SANDBOX_MODE, (function(t, e) {
                s["a"].set(t.editModalData, "sandbox_mode", e)
            })), C.mutations.EDIT_MODAL_ARCHIVING, (function(t, e) {
                t.editModalData.archiving = e
            })), C.mutations.EDIT_MODAL_ARCHIVING_INITIAL, (function(t, e) {
                t.editModalData.archiving_initial = e
            })), C.mutations.EDIT_MODAL_AUDIT_EMAIL, (function(t, e) {
                t.editModalData.audit_email = e
            })), C.mutations.EDIT_MODAL_BOUNCE_NOTIFICATIONS, (function(t, e) {
                t.editModalData.bounce_notifications = e
            })), C.mutations.EDIT_MODAL_BOUNCE_TARGET, (function(t, e) {
                t.editModalData.bounce_target = e
            })), Object(l["a"])(Object(l["a"])(d, C.mutations.SET_IS_ALLOWED_ARCHIVING, (function(t, e) {
                t.isAllowedArchiving = e
            })), C.mutations.SET_CURRENT_PAGE, (function(t, e) {
                t.current_page = e
            }))),
            N = Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({}, C.actions.SAVE_COLUMNS, (function(t) {
                if (t.state.columns_need_saving) return new Promise((function(e, i) {
                    D.put(t.rootGetters[m.getters.BACKEND_URL]("SMTP Users", "save-columns"), {
                        shown_columns: t.state.app_settings
                    }).then((function(i) {
                        t.columns_need_saving = !1, e(i)
                    })).catch((function(t) {
                        i(t)
                    }))
                }))
            })), C.actions.LOAD_ACTIVE_USERS, (function(t, e) {
                var i = e.isSearch;
                void 0 !== i && i && t.commit(C.mutations.SET_NO_USER_MESSAGE, "No SMTP users matched the search criteria"), M.searchTextChanged && t.commit(C.mutations.SET_CURRENT_PAGE, 0);
                var s = !1;
                return 0 === M.current_page ? t.commit(C.mutations.SET_IS_FETCHING_ACTIVE_USERS, !0) : (s = !0, t.commit(C.mutations.SET_IS_FETCHING_MORE_ACTIVE_USERS, !0)), new Promise((function(e, i) {
                    D.post(t.rootGetters[m.getters.BACKEND_URL]("SMTP Users", "load-active-users"), {
                        page_offset: M.current_page,
                        search_text: M.searchText
                    }).then((function(i) {
                        t.commit(C.mutations.SET_SEARCH_TEXT_CHANGED, !1), s ? t.commit(C.mutations.ADD_ACTIVE_USERS, i.results.users) : (t.commit(C.mutations.SET_ACTIVE_USERS, i.results.users), t.commit(C.mutations.SET_PREFILLED_USERNAME, i.results.prefilled_username)), t.commit(C.mutations.CAN_LOAD_MORE, i.results.total_users > M.active_users.length), t.commit(C.mutations.SET_CURRENT_PAGE, M.current_page + 1), t.commit(C.mutations.SET_DISABLE_ADD, i.results.disable_add), e(i)
                    })).catch((function(t) {
                        i(t)
                    }))
                })).then((function() {
                    s ? t.commit(C.mutations.SET_IS_FETCHING_MORE_ACTIVE_USERS, !1) : t.commit(C.mutations.SET_IS_FETCHING_ACTIVE_USERS, !1)
                }))
            })), C.actions.REMOVE_ACTIVE_USER, (function(t, e) {
                var i = e.username;
                return new Promise((function(e, s) {
                    D.post(t.rootGetters[m.getters.BACKEND_URL]("SMTP Users", "remove-active-user"), {
                        username: i
                    }).then((function(s) {
                        t.commit(C.mutations.REMOVE_ACTIVE_USER, {
                            username: i
                        }), e(s)
                    })).catch((function(t) {
                        s(t)
                    }))
                }))
            })), C.actions.UPDATE_ACTIVE_USER, (function(t, e) {
                var i = e.old_username,
                    s = e.username,
                    a = e.password,
                    n = e.description,
                    o = e.ippool,
                    r = e.ratelimit_limit,
                    l = e.ratelimit_period,
                    c = e.ratelimit_custom,
                    _ = e.feedback_enabled,
                    u = e.feedback_text,
                    d = e.feedback_html,
                    p = e.open_tracking,
                    f = e.click_tracking,
                    E = e.blocked,
                    v = e.sandbox_mode,
                    h = e.archiving,
                    b = e.audit_email,
                    g = e.bounce_notifications,
                    T = e.is_editing;
                return new Promise((function(e, O) {
                    var A = !1;
                    M.ip_pools.forEach((function(t) {
                        t.id === o && (A = t.is_default)
                    })), D.post(t.rootGetters[m.getters.BACKEND_URL]("SMTP Users", "update-active-user"), {
                        old_username: i,
                        username: s,
                        password: a,
                        description: n,
                        ippool: o,
                        ratelimit_limit: r,
                        ratelimit_period: l,
                        ratelimit_custom: c,
                        feedback_enabled: _,
                        feedback_text: u,
                        feedback_html: d,
                        open_tracking: p,
                        click_tracking: f,
                        blocked: E,
                        sandbox_mode: v,
                        archiving: h,
                        audit_email: b,
                        bounce_notifications: g,
                        use_default_ippool: A,
                        is_editing: T
                    }).then((function(s) {
                        t.commit(C.mutations.UPDATE_ACTIVE_USER, {
                            old_username: i,
                            results: s.results
                        }), e(s)
                    })).catch((function(t) {
                        O(t)
                    }))
                }))
            })), C.actions.UPDATE_DEFAULT_RATELIMIT, (function(t, e) {
                var i = e.ratelimit_limit,
                    s = e.ratelimit_period;
                return new Promise((function(e, a) {
                    D.post(t.rootGetters[m.getters.BACKEND_URL]("SMTP Users", "update-default-ratelimit"), {
                        ratelimit_limit: i,
                        ratelimit_period: s
                    }).then((function(i) {
                        t.commit(C.mutations.SET_DEFAULT_RL_LIMIT, i.results.ratelimit_limit), t.commit(C.mutations.SET_DEFAULT_RL_PERIOD, i.results.ratelimit_period), e(i)
                    })).catch((function(t) {
                        a(t)
                    }))
                }))
            })),
            y = {
                namespaced: !0,
                state: M,
                getters: P,
                mutations: k,
                actions: N
            },
            U = (i("386d"), function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "template-page"
                }, [e("div", {
                    staticClass: "content-main",
                    class: {
                        "is-active": !t.isEditModalActive
                    }
                }, [e("page", {
                    attrs: {
                        title: "SMTP Users"
                    },
                    scopedSlots: t._u([{
                        key: "description",
                        fn: function() {
                            return [e("p", [t._v("\n          SMTP users are permitted to send emails over SMTP with a username and password.\n        ")])]
                        },
                        proxy: !0
                    }])
                }, [e("div", {
                    staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
                }, [e("div", {
                    staticClass: "card padded dataTables_wrapper card-manage"
                }, [e("div", {
                    staticClass: "card--tab has-full-functions"
                }, [e("h2", {
                    staticClass: "card--title"
                }, [t._v("\n              Manage SMTP Users\n            ")]), e("div", {
                    staticClass: "card-functions"
                }, [e("button", {
                    staticClass: "btn button-dropdown",
                    attrs: {
                        type: "button",
                        role: "button",
                        disabled: t.disabledAdd
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.add()
                        }
                    }
                }, [t._v("\n                Add "), e("span", {
                    staticClass: "mobile-hide"
                }, [t._v("SMTP user")]), e("span", {
                    staticClass: "desktop-hide"
                }, [t._v("new")])])])]), e("div", {
                    staticClass: "top search-grouped bar-full"
                }, [e("div", {
                    staticClass: "search",
                    attrs: {
                        "data-v-07c74042": ""
                    }
                }, [e("div", {
                    staticClass: "dataTables_filter has-search-options"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.searchText,
                        expression: "searchText"
                    }],
                    staticClass: "form-control input-small input-inline mixinTriggerable_layer",
                    attrs: {
                        type: "search",
                        "aria-controls": "emails_bounces",
                        id: "main-search",
                        placeholder: "Search for a user..."
                    },
                    domProps: {
                        value: t.searchText
                    },
                    on: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.search.apply(null, arguments))
                        },
                        input: function(e) {
                            e.target.composing || (t.searchText = e.target.value)
                        }
                    }
                }), e("button", {
                    staticClass: "btn blue btn-search",
                    attrs: {
                        type: "button",
                        role: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.search.apply(null, arguments)
                        }
                    }
                }, [e("span", {
                    staticClass: "icon-search"
                }), e("span", {
                    staticClass: "button-text"
                }, [t._v(" Search")])])])])]), t.isFetchingActiveUsers ? e("div", {
                    staticClass: "manage-ips-loader"
                }, [e("base-loader", {
                    attrs: {
                        isFullScreen: ""
                    }
                })], 1) : t._e(), t.has_active_users ? e("manage-user-table") : t._e(), t.isFetchingActiveUsers || t.has_active_users ? t._e() : e("empty-table-note", {
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function() {
                            return [t._v("\n              " + t._s(t.noUserMessage) + "\n            ")]
                        },
                        proxy: !0
                    }], null, !1, 135827392)
                }), e("user-settings")], 1)])])], 1), e("user-edit", {
                    attrs: {
                        "is-active": t.isEditModalActive
                    }
                })], 1)
            }),
            G = [],
            j = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("header", {
                    staticClass: "sg-feature--header"
                }, [e("h3", {
                    staticClass: "page-title"
                }, [t.hasBackButton ? e("back-button", {
                    staticClass: "back-button",
                    on: {
                        click: t.goBack
                    }
                }) : e("span", {
                    staticClass: "title-icon"
                }, [e("svg", {
                    attrs: {
                        fill: "none",
                        height: "35",
                        viewBox: "0 0 35 35",
                        width: "35",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [e("linearGradient", {
                    attrs: {
                        id: "a"
                    }
                }, [e("stop", {
                    attrs: {
                        offset: "0",
                        "stop-color": "#52b3ee"
                    }
                }), e("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "#3ca4e3"
                    }
                })], 1), e("linearGradient", {
                    attrs: {
                        id: "b",
                        gradientUnits: "userSpaceOnUse",
                        x1: "17.7236",
                        x2: "17.7236",
                        "xlink:href": "#a",
                        y1: ".807617",
                        y2: "34.8076"
                    }
                }), e("linearGradient", {
                    attrs: {
                        id: "c",
                        gradientUnits: "userSpaceOnUse",
                        x1: "10",
                        x2: "10",
                        "xlink:href": "#a",
                        y1: "0",
                        y2: "20"
                    }
                }), e("clipPath", {
                    attrs: {
                        id: "d"
                    }
                }, [e("path", {
                    attrs: {
                        d: "m7.94434 8.77124h20v20h-20z"
                    }
                })]), e("rect", {
                    attrs: {
                        fill: "url(#b)",
                        height: "34",
                        rx: "5",
                        width: "34",
                        x: ".723633",
                        y: ".807617"
                    }
                }), e("g", {
                    attrs: {
                        "clip-path": "url(#d)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "m0 0h20v20h-20z",
                        fill: "url(#c)",
                        transform: "translate(7.94434 8.77124)"
                    }
                }), e("g", {
                    attrs: {
                        stroke: "#fff",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "1.5"
                    }
                }, [e("path", {
                    attrs: {
                        d: "m17.6556 21.7543c1.8054 0 3.269-1.4636 3.269-3.2689 0-1.8054-1.4636-3.269-3.269-3.269-1.8053 0-3.2689 1.4636-3.2689 3.269 0 1.8053 1.4636 3.2689 3.2689 3.2689z"
                    }
                }), e("path", {
                    attrs: {
                        d: "m20.9242 18.4852v1.6345c0 .7225.287 1.4153.7979 1.9262.5108.5109 1.2037.7979 1.9262.7979.7224-.0004 1.415-.2875 1.9258-.7983s.7979-1.2035.7983-1.9258v-1.2306c.0373-2.3227-.8262-4.5696-2.4093-6.2695-1.5832-1.7-3.7632-2.72085-6.0826-2.84861-2.1584-.06755-4.2651.66841-5.9118 2.06541-1.6468 1.397-2.71642 3.3554-3.00167 5.496-.28525 2.1405.23418 4.3108 1.45767 6.0902 1.2234 1.7795 3.0638 3.0415 5.1646 3.5415 1.4191.3352 2.8989.3168 4.3092-.0538"
                    }
                })])])], 1)]), t._v("\n      " + t._s(t.title) + "\n    ")], 1), e("div", {
                    staticClass: "lead-toggle"
                }, [t._t("description")], 2)]), t._t("default")], 2)
            },
            x = [],
            B = function() {
                var t = this,
                    e = t._self._c;
                return e("button", {
                    staticClass: "back-button",
                    on: {
                        click: function(e) {
                            return t.$emit("click")
                        }
                    }
                })
            },
            H = [],
            F = (i("89cb"), i("0c7c")),
            V = {},
            W = Object(F["a"])(V, B, H, !1, null, "7a5ad422", null),
            K = W.exports,
            X = {
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
                }
            },
            q = X,
            z = (i("ef5e"), i("897b"), Object(F["a"])(q, j, x, !1, null, "1fc5cfdf", null)),
            J = z.exports,
            Y = function() {
                var t = this,
                    e = t._self._c;
                return e("table", {
                    staticClass: "dataTable table table-striped table-hover display",
                    attrs: {
                        id: "usersTable"
                    }
                }, [e("thead", [e("tr", [t._l(t.displayColumns, (function(i) {
                    return e("th", {
                        key: i.id,
                        attrs: {
                            id: "table-" + i.id
                        }
                    }, [t._v("\n        " + t._s(i.label) + "\n      ")])
                })), t._m(0)], 2)]), e("tbody", [e("tr", {
                    staticClass: "ip-auth-result-wrapper"
                }, [e("td", {
                    staticClass: "no-content",
                    attrs: {
                        colspan: "100%"
                    }
                }, [e("div", {
                    staticClass: "table-blank"
                }, [e("div", {
                    staticClass: "table-blank-content"
                }, [e("p", [t._t("default")], 2)])])])])])])
            },
            Q = [function() {
                var t = this,
                    e = t._self._c;
                return e("th", {
                    attrs: {
                        id: "table-options"
                    }
                }, [e("div", {
                    staticClass: "dropdown-container is-disabled"
                }, [e("span", {
                    staticClass: "dropdown-icon-container",
                    attrs: {
                        "data-toggle-trigger": "columns",
                        "data-trigger-on-close": "true"
                    }
                }, [e("span", {
                    staticClass: "dropdown-icon"
                })])])])
            }],
            Z = {
                data: function() {
                    return {
                        displayColumns: [{
                            id: "username",
                            label: "Username"
                        }, {
                            id: "description",
                            label: "Description"
                        }, {
                            id: "ippool",
                            label: "IP Pool"
                        }, {
                            id: "ratelimit",
                            label: "Rate Limit"
                        }, {
                            id: "unsubscribes",
                            label: "Unsubscribes"
                        }, {
                            id: "archiving",
                            label: "Archiving"
                        }, {
                            id: "open_tracking",
                            label: "Open Tracking"
                        }, {
                            id: "click_tracking",
                            label: "Click Tracking"
                        }]
                    }
                }
            },
            tt = Z,
            et = (i("a82f"), Object(F["a"])(tt, Y, Q, !1, null, "5d1941dc", null)),
            it = et.exports,
            st = (i("6762"), i("2fdb"), function() {
                var t = this,
                    e = t._self._c;
                return e("table", {
                    staticClass: "dataTable table table-striped table-hover display",
                    attrs: {
                        id: "usersTable"
                    }
                }, [e("thead", [e("tr", [t._l(t.activeColumns, (function(i) {
                    return e("th", {
                        key: i.id,
                        class: t.getSortHeaderClass(i),
                        attrs: {
                            id: "table-" + i.id
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.sortColumn(i)
                            }
                        }
                    }, [e("span", [t._v(t._s(i.label))])])
                })), e("th", {
                    attrs: {
                        id: "table-options"
                    }
                }, [e("div", {
                    staticClass: "dropdown-container"
                }, [e("span", {
                    staticClass: "dropdown-icon-container",
                    on: {
                        click: t.triggerable_toggleOpened
                    }
                }, [e("span", {
                    staticClass: "dropdown-icon"
                })]), e("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.triggerable_isOpen,
                        expression: "triggerable_isOpen"
                    }],
                    staticClass: "dropdown-menu dropdown-options column-filter is-active mixin-triggerable-layer",
                    class: {
                        "automatic-active": t.isAutomatic
                    },
                    attrs: {
                        id: "columns"
                    }
                }, [e("li", {
                    staticClass: "events-toggler"
                }, [t._m(0), e("a", {
                    staticClass: "btn blue events-latest",
                    class: {
                        "is-active": t.isAutomatic
                    },
                    attrs: {
                        id: "display_automatic"
                    },
                    on: {
                        click: function(e) {
                            t.isAutomatic = !t.isAutomatic
                        }
                    }
                }, [e("span", [t._v("Automatic")])]), e("a", {
                    staticClass: "btn blue events-all",
                    class: {
                        "is-active": !t.isAutomatic
                    },
                    attrs: {
                        id: "display_custom"
                    },
                    on: {
                        click: function(e) {
                            t.isAutomatic = !t.isAutomatic
                        }
                    }
                }, [e("span", [t._v("Custom")])])]), t._l(t.columnFilters, (function(i) {
                    return e("li", {
                        key: i.id,
                        staticClass: "columns-filter",
                        attrs: {
                            id: "columns-filter-" + i.id
                        },
                        on: {
                            click: function(e) {
                                return t.handleColumnToggle(e, i)
                            }
                        }
                    }, [e("div", {
                        staticClass: "checker"
                    }, [e("span", {
                        staticClass: "checker-box",
                        class: {
                            checked: t.isColumnShown(i.id)
                        }
                    }, [e("input", {
                        attrs: {
                            type: "checkbox",
                            name: "columns[]"
                        },
                        domProps: {
                            value: i.id
                        }
                    })])]), e("span", {
                        staticClass: "column-indicator-copy"
                    }, [t._v(t._s(i.label))])])
                }))], 2)])])], 2)]), e("tbody", [t._l(t.sortedTableResults, (function(i, s) {
                    return e("tr", {
                        key: i.username || s,
                        staticClass: "ip-auth-result-wrapper",
                        on: {
                            click: function(e) {
                                return t.checkMobileAction(i)
                            }
                        }
                    }, [t._l(t.activeColumns, (function(s) {
                        return e("td", {
                            key: s.id,
                            class: "cell-" + s.id
                        }, ["username" !== s.id || t.isMobile ? "description" === s.id ? [i[s.id] ? e("span", {
                            attrs: {
                                title: i[s.id]
                            }
                        }, [t._v(t._s(i[s.id]))]) : t._e()] : "passwordless" === s.id && !t.isMobile && t.showPasswordlessColumn ? [i["passwordless"] ? e("span", {
                            staticClass: "label disabled"
                        }, [t._v("Not Required")]) : e("span", {
                            staticClass: "label secondary"
                        }, [t._v("Required")])] : "unsubscribes" === s.id ? [i["feedback_enabled"] ? e("span", {
                            staticClass: "label secondary"
                        }, [t._v("Enabled")]) : e("span", {
                            staticClass: "label disabled"
                        }, [t._v("Disabled")])] : "ippool" === s.id ? [e("span", [t._v(t._s(t.prettyPrintIPPool(i)))])] : "status" === s.id && t.showStatusColumn ? [i["sandbox_mode"] ? e("span", {
                            staticClass: "label yellow"
                        }, [t._v("Sandboxed")]) : i["blocked"] ? e("span", {
                            staticClass: "label error"
                        }, [t._v("Blocked")]) : e("span", {
                            staticClass: "label primary"
                        }, [t._v("Allowed")])] : ["archiving", "open_tracking", "click_tracking"].includes(s.id) ? [i[s.id] ? e("span", {
                            staticClass: "label secondary"
                        }, [t._v("Enabled")]) : e("span", {
                            staticClass: "label disabled"
                        }, [t._v("Disabled")])] : "ratelimit" === s.id ? [e("span", {
                            staticClass: "label ratelimit"
                        }, [t._v(t._s(t.prettyPrintRL(i)))])] : e("span", [t._v(t._s(i[s.id]))]) : [e("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.edit(i)
                                }
                            }
                        }, [t._v(t._s(i[s.id]))])]], 2)
                    })), e("td", {
                        staticClass: "table-action"
                    }, [e("div", {
                        staticClass: "drop-content is-active row-delete-popup",
                        class: {
                            "options-on": i.displayDeletePopup
                        }
                    }, [e("a", {
                        staticClass: "table-remove-toggler row-remove-toggler",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.deletePopupClick(i)
                            }
                        }
                    }, [t._v("Ã—")]), i.displayDeletePopup ? e("ul", {
                        staticClass: "dropdown-menu dropdown-options"
                    }, [e("li", [e("span", {
                        staticClass: "tooltip-confirm-title"
                    }, [t._v("Confirm remove?")]), e("a", {
                        staticClass: "table-remove confirm",
                        attrs: {
                            href: "javascript:void(0);",
                            disabled: t.deleteRequests[i.username]
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.performDeleteClick(i)
                            }
                        }
                    }, [e("span", [t._v("Remove")])]), e("a", {
                        staticClass: "table-remove-cancel",
                        attrs: {
                            disabled: t.deleteRequests[i.username],
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.closeDeletePopUpClick(i)
                            }
                        }
                    }, [t._v("Cancel")])])]) : t._e(), i.displayDeletePopup ? e("div", {
                        staticClass: "remove-overlay",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.deletePopupClick(i)
                            }
                        }
                    }) : t._e(), t.deleteRequests[i.username] ? e("base-loader", {
                        staticClass: "cover-parent"
                    }) : t._e()], 1)])], 2)
                })), e("LoadMore")], 2)])
            }),
            at = [function() {
                var t = this,
                    e = t._self._c;
                return e("p", [e("strong", [t._v("Column display")]), e("br"), t._v("\n              Choose Automatic to show columns relevant to your account, or customize which columns to display.")])
            }],
            nt = (i("3b2b"), i("c5f6"), i("7514"), i("7f7f"), i("0d6d"), Object.freeze({
                TRIGGERABLE_OPENED: "mixin-triggerable-opened",
                TRIGGERABLE_CLOSED: "mixin-triggerable-closed"
            })),
            ot = {
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
            rt = i("768b"),
            lt = (i("ffc1"), {
                methods: {
                    mixinEventListener_register: function(t) {
                        this.mixinEventListener_eventMap = t
                    },
                    mixinEventListener_on: function() {
                        var t = this;
                        this.mixinEventListener_isOn || (Object.entries(this.mixinEventListener_eventMap).forEach((function(e) {
                            var i = Object(rt["a"])(e, 2),
                                s = i[0],
                                a = i[1];
                            t.$eventBus.$on(s, a)
                        })), this.mixinEventListener_isOn = !0)
                    },
                    mixinEventListener_off: function() {
                        var t = this;
                        Object.entries(this.mixinEventListener_eventMap).forEach((function(e) {
                            var i = Object(rt["a"])(e, 2),
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
            ct = lt,
            _t = {
                methods: {
                    mixinAlerts_clear: ut,
                    mixinAlerts_info: dt,
                    mixinAlerts_success: pt,
                    mixinAlerts_warn: mt,
                    mixinAlerts_error: ft
                }
            };

        function ut() {
            var t = $("#user-alert");
            t.removeClass(), t.empty()
        }

        function dt(t) {
            ut(), t && HTML.alertUser("info", t)
        }

        function pt(t) {
            ut(), t && HTML.alertUser("success", t)
        }

        function mt(t) {
            ut(), t && HTML.alertUser("warning", t)
        }

        function ft(t) {
            ut(), t && HTML.alertUser("error", t)
        }
        var Et = _t,
            vt = (i("28a5"), i("4917"), {
                methods: {
                    mixinHelpers_prettyPrintRatelimit: ht
                }
            });

        function ht(t, e) {
            e = null === e || void 0 === e || "" === e ? "unlimited" : e;
            var i = {
                    unlimited: "Unlimited",
                    "01:00:00": "per hour",
                    "1 day": "per day",
                    "7 days": "per week",
                    "1 mon": "per month",
                    "30 days": "per month",
                    "04:00:00": "per 4 hours",
                    "00:15:00": "per 15 minutes"
                },
                s = void 0 !== i[e],
                a = s ? i[e] : "Custom(" + e + ")";
            if (!s && 2 == (e.match(/:/g) || []).length) {
                var n = e.split(":");
                a = "per " + n[0] + "h " + n[1] + "m "
            }
            return "unlimited" === e ? "Unlimited" : parseInt(t).toLocaleString() + " " + a
        }
        var bt = vt,
            gt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "loader-wrapper",
                    class: {
                        "is-block": t.isBlock,
                        "is-padded": t.isPadded,
                        "is-light": t.isLight,
                        "is-fullscreen": t.isFullScreen
                    }
                }, [e("div", {
                    staticClass: "blockUI blockOverlay"
                }), t._m(0)])
            },
            Tt = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "loader-box"
                }, [e("div", {
                    staticClass: "loader"
                }, [e("span", {
                    staticClass: "icon-circles"
                }, [e("span", {
                    staticClass: "dot-circle pending"
                }), e("span", {
                    staticClass: "dot-circle soft-bounced"
                }), e("span", {
                    staticClass: "dot-circle hard-bounced"
                }), e("span", {
                    staticClass: "dot-circle rejected"
                }), e("span", {
                    staticClass: "dot-circle spam"
                }), e("span", {
                    staticClass: "dot-circle delivered"
                }), e("span", {
                    staticClass: "dot-circle unsubscribed"
                }), e("span", {
                    staticClass: "dot-circle unblocked"
                }), e("span", {
                    staticClass: "dot-circle opened"
                }), e("span", {
                    staticClass: "dot-circle clicked"
                })])])])
            }],
            Ot = {
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
                    },
                    isFullScreen: {
                        type: Boolean,
                        default: !0
                    }
                }
            },
            Dt = Ot,
            At = (i("3e8c"), Object(F["a"])(Dt, gt, Tt, !1, null, "7938e0d5", null)),
            St = At.exports,
            It = function() {
                var t = this,
                    e = t._self._c;
                return e("tr", {
                    class: {
                        loading: t.isFetchingMoreActiveUsers
                    }
                }, [e("td", {
                    staticClass: "load-more load-centered",
                    attrs: {
                        colspan: "100%"
                    }
                }, [!t.isFetchingMoreActiveUsers && t.canLoadMore ? e("button", {
                    staticClass: "btn btn-outlined btn-sm",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return t.loadMore()
                        }
                    }
                }, [t._v("Load More Results")]) : t._e(), t.isFetchingMoreActiveUsers ? e("div", {
                    staticClass: "loading-spinner"
                }, [t._m(0)]) : t._e()])])
            },
            Ct = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "loader"
                }, [e("span", {
                    staticClass: "icon-circles"
                }, [e("span", {
                    staticClass: "dot-circle pending"
                }), e("span", {
                    staticClass: "dot-circle soft-bounced"
                }), e("span", {
                    staticClass: "dot-circle hard-bounced"
                }), e("span", {
                    staticClass: "dot-circle rejected"
                }), e("span", {
                    staticClass: "dot-circle spam"
                }), e("span", {
                    staticClass: "dot-circle delivered"
                }), e("span", {
                    staticClass: "dot-circle unsubscribed"
                }), e("span", {
                    staticClass: "dot-circle unblocked"
                }), e("span", {
                    staticClass: "dot-circle opened"
                }), e("span", {
                    staticClass: "dot-circle clicked"
                })])])
            }];

        function Lt(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function Mt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Lt(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Lt(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var Rt = {
                name: "load-more",
                computed: Mt({}, Object(c["b"])({
                    isFetchingMoreActiveUsers: L.getters.IS_FETCHING_MORE_ACTIVE_USERS,
                    canLoadMore: L.getters.CAN_LOAD_MORE
                })),
                methods: {
                    loadMore: function() {
                        this.$store.dispatch(L.actions.LOAD_ACTIVE_USERS, {
                            isSearch: !1
                        })
                    }
                }
            },
            Pt = Rt,
            wt = (i("803e"), i("8375"), Object(F["a"])(Pt, It, Ct, !1, null, "30ad606f", null)),
            kt = wt.exports;

        function Nt(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function yt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Nt(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Nt(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var Ut = {
                mixins: [ct, ot, Et, bt],
                name: "manage-user-table",
                components: {
                    BaseLoader: St,
                    LoadMore: kt
                },
                data: function() {
                    return {
                        columnIsSaving: !1,
                        displayColumns: [{
                            id: "username",
                            label: "Username",
                            always_active: !0,
                            isBoolean: !1
                        }, {
                            id: "description",
                            label: "Description",
                            filterable: !0,
                            isBoolean: !1
                        }, {
                            id: "passwordless",
                            label: "Password",
                            always_active: !0,
                            filterable: !1,
                            isBoolean: !0
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
                            label: "Open Tracking",
                            filterable: !0,
                            isBoolean: !0
                        }, {
                            id: "click_tracking",
                            label: "Click Tracking",
                            filterable: !0,
                            isBoolean: !0
                        }],
                        deleteRequests: {},
                        sortBy: "username",
                        sortDir: "asc"
                    }
                },
                computed: yt(yt({}, Object(c["b"])({
                    isColumnShown: L.getters.GET_IS_COLUMN_SHOWN,
                    showPasswordlessColumn: L.getters.GET_SHOW_PASSWORDLESS_COLUMN,
                    showStatusColumn: L.getters.GET_SHOW_STATUS_COLUMN,
                    tableResults: L.getters.GET_ACTIVE_USERS,
                    has_ip_pools: L.getters.HAS_IP_POOLS,
                    is_allowed_archiving: L.getters.GET_IS_ALLOWED_ARCHIVING,
                    canLoadMore: L.getters.CAN_LOAD_MORE
                })), {}, {
                    isAutomatic: {
                        get: function() {
                            return this.$store.getters[L.getters.GET_IS_AUTOMATIC_COLS]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.SET_IS_AUTOMATIC_COLS, t), this.activeColumnCountToClass()
                        }
                    },
                    activeColumns: function() {
                        var t = this;
                        return this.displayColumns.filter((function(e) {
                            return !("archiving" === e.id && !t.is_allowed_archiving) && (!("ippool" === e.id && !t.has_ip_pools) && (!("passwordless" === e.id && !t.showPasswordlessColumn) && (!("status" === e.id && !t.showStatusColumn) && (!!e.always_active || t.isColumnShown(e.id)))))
                        }))
                    },
                    columnFilters: function() {
                        var t = this;
                        return this.displayColumns.filter((function(e) {
                            return !("archiving" === e.id && !t.is_allowed_archiving) && (!("ippool" === e.id && !t.has_ip_pools) && e.filterable)
                        }))
                    },
                    sortedTableResults: function() {
                        var t = this,
                            e = this.displayColumns.find((function(e) {
                                return e.id === t.sortBy
                            }));
                        return e ? Object(g["a"])(this.tableResults).sort((function(e, i) {
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
                                _ = l.localeCompare(c);
                            return 0 === _ ? 0 : "asc" === t.sortDir ? _ > 0 ? 1 : -1 : _ > 0 ? -1 : 1
                        })) : this.tableResults
                    }
                }),
                mounted: function() {
                    $(".page-content-wrapper .page-content").on("click.Bst", this.windowClicked), this.activeColumnCountToClass()
                },
                created: function() {
                    this.mixinEventListener_register(Object(l["a"])({}, nt.TRIGGERABLE_CLOSED, this.onTriggerableClosed)), this.mixinEventListener_on()
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
                        return t.use_default_ippool ? "Default" : this.$store.getters[L.getters.GET_IP_POOL_LABEL](e)
                    },
                    prettyPrintRL: function(t) {
                        return t.ratelimit_custom ? this.mixinHelpers_prettyPrintRatelimit(t.ratelimit_limit, t.ratelimit_period) : "Default"
                    },
                    removeClassByPrefix: function(t, e) {
                        var i = new RegExp("\\b" + e + "[^ ]*[ ]?\\b", "g");
                        return t.className = t.className.replace(i, ""), t
                    },
                    activeColumnCountToClass: function() {
                        var t = document.getElementById("usersTable"),
                            e = document.querySelectorAll("#columns .checker-box.checked").length;
                        this.removeClassByPrefix(t, "active-"), t.classList.add("active-" + e)
                    },
                    handleColumnToggle: function(t, e) {
                        void 0 !== t && t.stopImmediatePropagation(), this.$store.commit(L.mutations.TOGGLE_IS_COLUMN_SHOWN, e.id), this.activeColumnCountToClass()
                    },
                    hideAllDeletePopup: function() {
                        var t = this;
                        this.tableResults.forEach((function(e) {
                            t.$store.commit(L.mutations.SET_ACTIVE_USER_PROPERTY, {
                                active_user: e,
                                key: "displayDeletePopup",
                                value: !1
                            })
                        }))
                    },
                    deletePopupClick: function(t) {
                        var e = t.displayDeletePopup;
                        this.hideAllDeletePopup(), this.$store.commit(L.mutations.SET_ACTIVE_USER_PROPERTY, {
                            active_user: t,
                            key: "displayDeletePopup",
                            value: !e
                        })
                    },
                    performDeleteClick: function(t) {
                        var e = this;
                        this.mixinAlerts_clear(), this.$set(this.deleteRequests, t.username, !0), this.$store.dispatch(L.actions.REMOVE_ACTIVE_USER, {
                            username: t.username
                        }).then((function() {
                            e.deleteRequests[t.username] = void 0, e.$store.commit(L.mutations.SET_ACTIVE_USER_PROPERTY, {
                                active_user: t,
                                key: "displayDeletePopup",
                                value: !1
                            }), e.mixinAlerts_success("Successfully deleted SMTP user")
                        })).catch((function(t) {
                            e.mixinAlerts_error(t)
                        }))
                    },
                    closeDeletePopUpClick: function(t) {
                        this.$store.commit(L.mutations.SET_ACTIVE_USER_PROPERTY, {
                            active_user: t,
                            key: "displayDeletePopup",
                            value: !1
                        })
                    },
                    windowClicked: function(t) {
                        var e = ".row-delete-popup";
                        $(t.target).parents(e).length || this.hideAllDeletePopup()
                    },
                    onTriggerableClosed: function() {
                        this.$store.dispatch(L.actions.SAVE_COLUMNS)
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
                        this.$store.commit(L.mutations.TOGGLE_EDIT_MODAL, {
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
            Gt = Ut,
            jt = (i("8e28"), i("cabc"), Object(F["a"])(Gt, st, at, !1, null, "62ac985d", null)),
            xt = jt.exports,
            Bt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "edit-user",
                    class: {
                        "is-active": t.isActive
                    },
                    attrs: {
                        id: "useredit"
                    }
                }, [e("header", {
                    staticClass: "sg-feature--header has-functions"
                }, [e("h3", {
                    staticClass: "page-title"
                }, [e("button", {
                    staticClass: "icon-back",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.close.apply(null, arguments)
                        }
                    }
                }), e("span", {
                    staticClass: "page-title-text"
                }, [t._v(t._s(this.is_editing ? "Edit SMTP" : "Add SMTP") + " User")])]), e("div", {
                    staticClass: "lead-toggle"
                }, [e("p", [t._v(t._s(this.is_editing ? "Edit" : "Add") + " the SMTP user details below. Optionally set a rate limit, unsubscribe footer, or choose advanced options.")])])]), e("div", {
                    staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12 block-user-edit"
                }, [e("div", {
                    staticClass: "edit-user-form card has-tabs",
                    class: ["".concat(t.activeTab, "-open"), t.feedback_enabled ? "unsubscribe-footer-enabled" : "unsubscribe-footer-disabled", t.bounce_notifications ? "advanced-bounces-on" : "advanced-bounces-off"]
                }, [e("div", {
                    staticClass: "card--tab-list"
                }, [t._m(0), e("a", {
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
                }, [t._m(1)]), e("a", {
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
                }, [t._m(2)]), e("a", {
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
                }, [t._m(3)]), e("a", {
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
                }, [e("span", [t._v("Advanced")])])]), e("div", {
                    staticClass: "content-body"
                }, [e("form", [this.error_msg_visible ? e("div", {
                    class: ["card-error", "error", {
                        visible: this.error_msg_visible
                    }]
                }, [t._v(t._s(this.error_msg) + " "), e("span", {
                    staticClass: "error-close",
                    on: {
                        click: function(e) {
                            t.error_msg_visible = !t.error_msg_visible
                        }
                    }
                }, [t._v("Ã—")])]) : t._e(), e("div", {
                    ref: "tabWrapper",
                    staticClass: "tab-content",
                    class: {
                        "tab-content-open": t.dropdownIsActive
                    }
                }, [e("div", {
                    ref: "details",
                    staticClass: "tab-pane user-tab-details",
                    class: {
                        "tab-pane-hidden": t.dropdownIsActive,
                        active: "details" === t.activeTab
                    },
                    attrs: {
                        role: "tabpanel"
                    }
                }, [e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("Username")]), e("div", {
                    staticClass: "form-group-item item-split"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.username,
                        expression: "username"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        "data-lpignore": "true"
                    },
                    domProps: {
                        value: t.username
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.username = e.target.value)
                        }
                    }
                }), t.has_prefilled ? e("p", {
                    staticClass: "info-message"
                }, [t._v("(We've provided a suggested username)")]) : t._e()])]), this.isPasswordless ? t._e() : e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("Password")]), e("div", {
                    staticClass: "form-group-item item-split"
                }, ["checkbox" === t.inputType ? e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.password,
                        expression: "password"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        autocomplete: "new-password",
                        "data-lpignore": "true",
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.password) ? t._i(t.password, null) > -1 : t.password
                    },
                    on: {
                        change: function(e) {
                            var i = t.password,
                                s = e.target,
                                a = !!s.checked;
                            if (Array.isArray(i)) {
                                var n = null,
                                    o = t._i(i, n);
                                s.checked ? o < 0 && (t.password = i.concat([n])) : o > -1 && (t.password = i.slice(0, o).concat(i.slice(o + 1)))
                            } else t.password = a
                        }
                    }
                }) : "radio" === t.inputType ? e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.password,
                        expression: "password"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        autocomplete: "new-password",
                        "data-lpignore": "true",
                        type: "radio"
                    },
                    domProps: {
                        checked: t._q(t.password, null)
                    },
                    on: {
                        change: function(e) {
                            t.password = null
                        }
                    }
                }) : e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.password,
                        expression: "password"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        autocomplete: "new-password",
                        "data-lpignore": "true",
                        type: t.inputType
                    },
                    domProps: {
                        value: t.password
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.password = e.target.value)
                        }
                    }
                }), e("a", {
                    staticClass: "password-show-hide",
                    class: [t.showPassword ? "is-shown" : "is-password"],
                    attrs: {
                        tabindex: "0",
                        "aria-label": "toggle password"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.togglePassword()
                        }
                    }
                }, [e("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 13 10",
                        "enable-background": "new 0 0 13 10"
                    }
                }, [e("path", {
                    attrs: {
                        fill: "#828da0",
                        d: "M12.9 4.9c-1.2 1.2-2.3 2.5-3.5 3.5-1.8 1.6-4.5 1.4-6.2-.3L.1 5l.3-.3 2.8-2.8c2-2 4.8-2 6.8 0 .9 1 1.9 2 2.9 3zm-11.2 0c1 1 1.8 1.9 2.7 2.8 1.3 1.1 3.2 1 4.5-.2l1.6-1.6c.3-.3.6-.6.9-.8-.9-.9-1.7-1.9-2.6-2.7-1.1-1-2.8-1.1-4.1-.3-.4.2-.6.5-.9.7L1.7 4.9zM6.5 2.6c1.3 0 2.4 1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4C5.1 7.4 4 6.3 4 5c.1-1.4 1.2-2.4 2.5-2.4zm0 1.5c0 .5.3.9.8.9s.9-.3.9-.8-.3-.9-.8-.9-.9.3-.9.8z"
                    }
                })])])])]), e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("Description")]), e("div", {
                    staticClass: "form-group-item item-split"
                }, [e("input", {
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
                        placeholder: "Optional",
                        maxlength: "512"
                    },
                    domProps: {
                        value: t.description
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.description = e.target.value)
                        }
                    }
                })])]), t.has_ip_pools && t.ip_pools.length > 1 ? e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("IP Pool")]), e("div", {
                    staticClass: "form-group-item item-split"
                }, [e("div", {
                    staticClass: "form-select-wrapper"
                }, [e("select", {
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
                }, [e("option", {
                    attrs: {
                        value: "default"
                    }
                }, [t._v(t._s(t.prettyPrintIPPool("default")))]), t._l(t.ip_pools, (function(i) {
                    return e("option", {
                        key: i.id,
                        domProps: {
                            value: i.id
                        }
                    }, [t._v(t._s(t.prettyPrintIPPool(i.id)))])
                }))], 2)])])]) : t._e(), e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("Rate Limit")]), e("div", {
                    staticClass: "form-group-item form-group-ratelimit"
                }, [e("input", {
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
                }), e("div", {
                    staticClass: "form-select-wrapper"
                }, [e("select", {
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
                }, ["unlimited" != t.origRateLimit && "01:00:00" != t.origRateLimit && "1 day" != t.origRateLimit && "7 days" != t.origRateLimit && "1 mon" != t.origRateLimit ? e("option", [t._v("\n                        " + t._s(t.origRateLimit) + "\n                      ")]) : t._e(), e("option", {
                    attrs: {
                        value: "unlimited"
                    }
                }, [t._v("Unlimited")]), e("option", {
                    attrs: {
                        value: "01:00:00"
                    }
                }, [t._v("per hour")]), e("option", {
                    attrs: {
                        value: "1 day"
                    }
                }, [t._v("per day")]), e("option", {
                    attrs: {
                        value: "7 days"
                    }
                }, [t._v("per week")]), e("option", {
                    attrs: {
                        value: "1 mon"
                    }
                }, [t._v("per month")])])]), e("div", {
                    staticClass: "ratelimit-default-checkbox"
                }, [e("div", {
                    staticClass: "checker",
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.ratelimit_custom = !t.ratelimit_custom
                        }
                    }
                }, [e("span", {
                    staticClass: "checker-box",
                    class: {
                        checked: !t.ratelimit_custom
                    }
                })]), e("span", {
                    staticClass: "inline-checkbox-desc",
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.ratelimit_custom = !t.ratelimit_custom
                        }
                    }
                }, [t._v(" Use default")])])])])]), e("div", {
                    ref: "unsubscribe",
                    staticClass: "tab-pane user-tab-unsubscribe",
                    class: {
                        "tab-pane-hidden": t.dropdownIsActive,
                        active: "unsubscribe" === t.activeTab
                    },
                    attrs: {
                        role: "tabpanel"
                    }
                }, [e("div", {
                    staticClass: "unsubscribes",
                    class: [t.feedback_enabled ? "is-open" : "is-closed"]
                }, [e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("AddÂ Footer")]), e("div", {
                    staticClass: "form-group-item"
                }, [e("div", {
                    staticClass: "group-item-label"
                }, [e("label", {
                    staticClass: "inline-checkbox",
                    class: [t.feedback_enabled ? "is-open" : "is-closed"]
                }, [e("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: function(e) {
                            t.feedback_enabled = !t.feedback_enabled
                        }
                    }
                })]), t._m(4)])])]), e("div", {
                    staticClass: "toggle"
                }, [e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("\n                      HTML\n                      "), e("br"), e("small", [e("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.useDefaultHTML.apply(null, arguments)
                        }
                    }
                }, [t._v("use default")])])]), e("div", {
                    staticClass: "form-group-item"
                }, [e("textarea", {
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
                })])])]), e("div", {
                    staticClass: "toggle"
                }, [e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("\n                      Plain Text\n                      "), e("br"), e("small", [e("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.useDefaultText.apply(null, arguments)
                        }
                    }
                }, [t._v("use default")])])]), e("div", {
                    staticClass: "form-group-item"
                }, [e("textarea", {
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
                })])])])])]), e("div", {
                    ref: "tracking",
                    staticClass: "tab-pane user-tab-tracking",
                    class: {
                        active: "tracking" === t.activeTab
                    },
                    attrs: {
                        role: "tabpanel"
                    }
                }, [e("div", {
                    staticClass: "tracking"
                }, [e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("OpenÂ Tracking")]), e("div", {
                    staticClass: "form-group-item"
                }, [e("div", {
                    staticClass: "group-item-label"
                }, [e("label", {
                    staticClass: "inline-checkbox",
                    class: [t.open_tracking ? "is-open" : "is-closed"]
                }, [e("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: function(e) {
                            t.open_tracking = !t.open_tracking
                        }
                    }
                })]), t._m(5)]), e("span", {
                    staticClass: "field-info"
                }, [t._v("Enable open tracking to find out when a recipient has opened an email.")])])]), e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("ClickÂ Tracking")]), e("div", {
                    staticClass: "form-group-item"
                }, [e("div", {
                    staticClass: "group-item-label"
                }, [e("label", {
                    staticClass: "inline-checkbox",
                    class: [t.click_tracking ? "is-open" : "is-closed"]
                }, [e("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: function(e) {
                            t.click_tracking = !t.click_tracking
                        }
                    }
                })]), t._m(6)]), e("span", {
                    staticClass: "field-info"
                }, [t._v("Enable click tracking to find out when a recipient has clicked a link in an email.")])])]), e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("UserÂ Status")]), e("div", {
                    staticClass: "form-group-item"
                }, [e("div", {
                    ref: "dropdownWrapper",
                    staticClass: "app-dropdown-wrapper"
                }, [e("div", {
                    staticClass: "user-mode-dropdown mode-dropdown-select",
                    class: {
                        "is-active": t.dropdownIsActive
                    },
                    on: {
                        click: t.toggleDropdown
                    }
                }, [e("span", {
                    staticClass: "selected"
                }, [t._v(t._s(t.getSelectedItem.name))])]), e("dl", {
                    staticClass: "mode-dropdown-option",
                    class: {
                        "is-active": t.dropdownIsActive
                    }
                }, t._l(t.dropdownItems, (function(i) {
                    return e("div", {
                        key: i.name,
                        staticClass: "dropdown-item",
                        class: [i.colorClass, {
                            "is-active": i.name === t.selectedDropdownItemName
                        }],
                        on: {
                            click: function(e) {
                                return t.selectItem(i)
                            }
                        }
                    }, [e("dt", [t._v(t._s(i.name))]), e("dd", {
                        domProps: {
                            innerHTML: t._s(i.description)
                        }
                    })])
                })), 0), e("div", {
                    staticClass: "mode-dropdown-info",
                    domProps: {
                        innerHTML: t._s(t.getSelectedItem.details)
                    }
                })])])])])]), e("div", {
                    ref: "archiving",
                    staticClass: "tab-pane user-tab-archiving",
                    class: {
                        "tab-pane-hidden": t.dropdownIsActive,
                        active: "archiving" === t.activeTab
                    },
                    attrs: {
                        role: "tabpanel"
                    }
                }, [e("div", {
                    staticClass: "archiving"
                }, [t.isAllowedArchiving ? e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("EmailÂ Archiving")]), e("div", {
                    staticClass: "form-group-item"
                }, [e("div", {
                    staticClass: "group-item-label"
                }, [e("label", {
                    staticClass: "inline-checkbox",
                    class: [t.archiving ? "is-open" : "is-closed"]
                }, [e("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: t.handleArchivingToggle
                    }
                })]), t._m(7)]), t._m(8)])]) : t._e(), e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("Email Auditing")]), e("div", {
                    staticClass: "form-group-item item-split"
                }, [e("input", {
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
                }), t._m(9)])]), e("div", {
                    staticClass: "form-group",
                    class: {
                        "is-expanded": t.bounce_notifications
                    }
                }, [e("label", {
                    staticClass: "form-group-label"
                }, [t._v("Bounce Notifications")]), e("div", {
                    staticClass: "form-group-item"
                }, [e("label", {
                    staticClass: "inline-checkbox",
                    class: [t.bounce_notifications ? "is-open" : "is-closed"]
                }, [e("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        change: function(e) {
                            t.bounce_notifications = !t.bounce_notifications
                        }
                    }
                })]), e("span", {
                    staticClass: "field-info"
                }, [t._v("\n                      Enable this to receive a notification email whenever an email bounces.\n                    ")]), e("div", {
                    ref: "bounceOptions",
                    staticClass: "bounces-options"
                }, [e("label", {
                    class: {
                        "is-active": t.bounce_target_original
                    }
                }, [e("input", {
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
                }), t._v("\n                          Send bounce notification emails to the original sender\n                      ")]), e("br"), e("label", {
                    staticClass: "input-activate",
                    class: {
                        "is-active": t.bounce_target_email
                    }
                }, [e("input", {
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
                }), t._v("\n                        Send bounce notification emails to:\n                      ")]), e("input", {
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
                        placeholder: "example@domain.com"
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
                })])])])])])]), e("div", {
                    staticClass: "card-footer"
                }, [e("base-button", {
                    staticClass: "smtp-modal-save",
                    attrs: {
                        variant: "blue",
                        "is-loading": t.isSaving
                    },
                    on: {
                        click: t.save
                    }
                }, [t._v(t._s(this.is_editing ? "Save Changes" : "Add SMTP User"))]), e("base-button", {
                    attrs: {
                        variant: "button-dropdown"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.close.apply(null, arguments)
                        }
                    }
                }, [t._v("Back")])], 1)])])]), e("div", {
                    staticClass: "side-panel"
                }, [e("h5", [t._v("Connecting via SMTP")]), e("p", [e("span", [t._v("SMTP Server:Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v(" " + t._s(t.mailServerURL))])]), t._m(10), t._m(11), t._m(12)])]), e("div", {
                    staticClass: "modal-dialog modal-confirm-archives",
                    class: {
                        "is-active": t.showArchivesModal
                    }
                }, [e("div", {
                    staticClass: "modal-body"
                }, [e("button", {
                    staticClass: "bootbox-close-button close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            t.showArchivesModal = !1
                        }
                    }
                }, [t._v("Ã—")]), t._m(13), e("div", {
                    staticClass: "modal-body-footer"
                }, [e("button", {
                    staticClass: "btn blue",
                    on: {
                        click: t.confirmDisableArchiving
                    }
                }, [t._v("Confirm")]), e("button", {
                    staticClass: "btn button-outlined bootbox-close-button",
                    on: {
                        click: function(e) {
                            t.showArchivesModal = !1
                        }
                    }
                }, [t._v("Cancel")])])])]), e("div", {
                    staticClass: "modal-backdrop",
                    class: {
                        "is-active": t.showArchivesModal
                    },
                    on: {
                        click: function(e) {
                            t.showArchivesModal = !1
                        }
                    }
                })])
            },
            Ht = [function() {
                var t = this,
                    e = t._self._c;
                return e("h1", {
                    staticClass: "card--tab-title"
                }, [e("span", [t._v("Configure user")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("span", [e("span", {
                    staticClass: "mobile-hide"
                }, [t._v("SMTP ")]), t._v("Details")])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("span", [e("span", {
                    staticClass: "mobile-hide"
                }, [t._v("Unsubscribe ")]), t._v("Footer")])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("span", [e("span", {
                    staticClass: "mobile-hide"
                }, [t._v("Tracking & ")]), t._v("Status")])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("small", [e("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/223087607",
                        target: "_blank"
                    }
                }, [t._v("(What's this?)")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("small", [e("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/360003124714-Open-Tracking",
                        target: "_blank"
                    }
                }, [t._v("(What's this?)")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("small", [e("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/900002237106",
                        target: "_blank"
                    }
                }, [t._v("(What's this?)")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("small", [e("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/115003599568",
                        target: "_blank"
                    }
                }, [t._v("(What's this?)")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("span", {
                    staticClass: "field-info"
                }, [t._v("\n                      Enable email archiving to store the content and delivery record of your emails.\n                      "), e("br"), e("small", [t._v("Archived emails involve an extra charge.")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("span", {
                    staticClass: "field-info"
                }, [t._v("\n                      Send a BCC copy of every email to this address. Separate addresses with commas.\n                      "), e("br"), e("small", [t._v("BCC copies count towards monthly quota. Leave blank to disable this feature.")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("p", [e("span", [t._v("SMTP Port:Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("2525 ")]), e("span", {
                    staticClass: "automatic hide",
                    attrs: {
                        "data-requires": "has_salesforce"
                    }
                }, [e("span", [t._v("(")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("11025")]), e("span", [t._v(" for Salesforce")]), e("span", [t._v(")")])])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("p", [e("span", [t._v("Alternative/TLS Ports:Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("8025,Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("587,Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("80")]), e("span", [t._v(" or ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("25")]), t._v("."), e("span", [t._v(" TLS is available on\n          the same ports.")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("p", [e("span", [t._v("SSL is available on ")]), t._v("ports"), e("span", [t._v(":Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("Â 465,Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("8465")]), e("span", [t._v(" and ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("443")]), t._v(".\n      ")])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "option-banner"
                }, [e("figure", [e("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/alert-sign.png",
                        width: "109",
                        alt: "SMTP2GO"
                    }
                })]), e("h4", [t._v("Disable Archiving")]), e("p", [t._v("Once email archiving is disabled, all future emails sent from this sender will no longer be archived.")]), e("p", [t._v("Please note that disabling archiving does not delete existing archives. If you'd like to also delete existing archived emails from this sender, delete them from the "), e("a", {
                    attrs: {
                        href: "/reports/archive/"
                    }
                }, [t._v("Archives page")]), t._v(".")])])
            }],
            $t = function() {
                var t = this,
                    e = t._self._c;
                return e("button", {
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
                }, [t._t("default"), t.isLoading ? e("span", {
                    staticClass: "loader-spinner"
                }) : t._e()], 2)
            },
            Ft = [],
            Vt = {
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
            Wt = Vt,
            Kt = (i("2004"), Object(F["a"])(Wt, $t, Ft, !1, null, "14213eaf", null)),
            Xt = Kt.exports;

        function qt(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function zt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? qt(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : qt(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var Jt = {
                mixins: [Et],
                props: {
                    isActive: {
                        type: Boolean,
                        default: !1
                    }
                },
                components: {
                    BaseButton: Xt
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
                        windowWidth: window.innerWidth,
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
                        origRateLimit: "",
                        showArchivesModal: !1
                    }
                },
                computed: zt(zt({}, Object(c["b"])({
                    isPasswordless: L.getters.EDIT_MODAL_IS_PASSWORDLESS
                })), {}, {
                    mailServerURL: function() {
                        return console.log("STATE:", this.$store.state), this.$store.state.root.mail_server_url
                    },
                    inputType: function() {
                        return this.showPassword ? "input" : "password"
                    },
                    showPassword: {
                        get: function() {
                            return this.$store.getters[L.getters.GET_SHOW_PASSWORD_ON_MODAL]
                        }
                    },
                    is_editing: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_IS_EDITING]
                        }
                    },
                    ip_pools: {
                        get: function() {
                            return this.$store.getters[L.getters.GET_IP_POOLS]
                        }
                    },
                    has_ip_pools: {
                        get: function() {
                            return this.$store.getters[L.getters.HAS_IP_POOLS]
                        }
                    },
                    old_username: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_OLD_USERNAME]
                        }
                    },
                    has_prefilled: {
                        get: function() {
                            var t = this.$store.getters[L.getters.GET_PREFILLED_USERNAME];
                            return null !== t && void 0 != t && t.length > 0
                        }
                    },
                    username: {
                        get: function() {
                            return this.has_prefilled ? this.$store.getters[L.getters.GET_PREFILLED_USERNAME] : this.$store.getters[L.getters.EDIT_MODAL_USERNAME]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_USERNAME, t)
                        }
                    },
                    password: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_PASSWORD]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_PASSWORD, t)
                        }
                    },
                    description: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_DESCRIPTION]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_DESCRIPTION, t)
                        }
                    },
                    ippool: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_IPPOOL]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_IPPOOL, t)
                        }
                    },
                    ratelimit_limit: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_RL_LIMIT]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_RL_LIMIT, t)
                        }
                    },
                    ratelimit_period: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_RL_PERIOD]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_RL_PERIOD, t)
                        }
                    },
                    ratelimit_custom: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_RL_CUSTOM]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_RL_CUSTOM, t)
                        }
                    },
                    feedback_enabled: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_FB_ENABLED]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_FB_ENABLED, t)
                        }
                    },
                    feedback_text: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_FB_TEXT]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_FB_TEXT, t)
                        }
                    },
                    feedback_html: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_FB_HTML]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_FB_HTML, t)
                        }
                    },
                    open_tracking: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_OPEN_TRACKING]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_OPEN_TRACKING, t)
                        }
                    },
                    click_tracking: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_CLICK_TRACKING]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_CLICK_TRACKING, t)
                        }
                    },
                    blocked: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_BLOCKED]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_BLOCKED, t)
                        }
                    },
                    sandbox_mode: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_SANDBOX_MODE]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_SANDBOX_MODE, t)
                        }
                    },
                    archiving: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_ARCHIVING]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_ARCHIVING, t)
                        }
                    },
                    archiving_initial: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_ARCHIVING_INITIAL]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_ARCHIVING_INITIAL, t)
                        }
                    },
                    audit_email: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_AUDIT_EMAIL]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_AUDIT_EMAIL, t)
                        }
                    },
                    bounce_notifications: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_BOUNCE_NOTIFICATIONS]
                        },
                        set: function(t) {
                            var e = this;
                            this.$store.commit(L.mutations.EDIT_MODAL_BOUNCE_NOTIFICATIONS, t), this.$nextTick((function() {
                                var i = 55;
                                t || (i = -i), e.$refs.tabWrapper.style.height = "".concat(parseFloat(e.$refs.tabWrapper.style.height) + i, "px")
                            }))
                        }
                    },
                    bounce_target: {
                        get: function() {
                            return this.$store.getters[L.getters.EDIT_MODAL_BOUNCE_TARGET]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.EDIT_MODAL_BOUNCE_TARGET, t), this.bnOriginal = !t, this.bnEmail = t
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
                            return this.$store.getters[L.getters.GET_IS_ALLOWED_ARCHIVING]
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
                }),
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
                        return this.$store.getters[L.getters.GET_IP_POOL_LABEL](t)
                    },
                    useDefaultText: function() {
                        this.feedback_text = this.$store.state.smtpauth.defaultFBText
                    },
                    useDefaultHTML: function() {
                        this.feedback_html = this.$store.state.smtpauth.defaultFBHTML
                    },
                    close: function() {
                        this.error_msg_visible = !1, this.$store.commit(L.mutations.TOGGLE_EDIT_MODAL, {
                            visible: !1,
                            data: null
                        }), this.activeTab = "details"
                    },
                    updateHeight: function() {
                        this.$refs.tabWrapper.style.height = "".concat(this.$refs[this.activeTab].clientHeight + 2, "px"), this.bnEmail = "" !== this.bounce_target, this.bnOriginal = !this.bnEmail
                    },
                    buildSavePayload: function() {
                        var t = "";
                        t = this.bounce_notifications ? this.bounce_target_original ? "from" : this.bounce_target : "drop";
                        var e = this.old_username;
                        return "" === e && (e = this.username), {
                            old_username: e,
                            username: this.username,
                            password: this.password,
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
                            bounce_notifications: t,
                            is_editing: this.is_editing
                        }
                    },
                    save: function() {
                        var t = this;
                        this.isSaving = !0, this.error_msg_visible = !1, this.$store.dispatch(L.actions.UPDATE_ACTIVE_USER, this.buildSavePayload()).then((function() {
                            t.isSaving = !1, t.is_editing ? t.mixinAlerts_success("Successfully updated SMTP user") : t.mixinAlerts_success("Successfully added SMTP user"), t.close()
                        })).catch((function(e) {
                            t.isSaving = !1, t.error_msg = e, t.error_msg_visible = !0
                        }))
                    },
                    togglePassword: function() {
                        this.$store.commit(L.mutations.SET_SHOW_PASSWORD_ON_MODAL, !this.showPassword)
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
                        t && (this.$nextTick((function() {
                            return e.updateHeight()
                        })), this.origRateLimit = this.ratelimit_period)
                    },
                    activeTab: function() {
                        this.updateHeight()
                    }
                }
            },
            Yt = Jt,
            Qt = (i("d4e8"), i("87f4"), Object(F["a"])(Yt, Bt, Ht, !1, null, "310e1aab", null)),
            Zt = Qt.exports,
            te = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "card--fyi"
                }, [e("div", {
                    staticClass: "card--fyi--small"
                }, [e("h5", [t._v("Connecting via SMTP")]), e("p", [t._m(0), e("span", {
                    staticClass: "txt-val"
                }, [t._v(" " + t._s(t.mailServerURL))])]), t._m(1), t._m(2), t._m(3)]), e("div", {
                    staticClass: "card--fyi--large"
                }, [e("h5", [t._v("Default Rate Limit Per SMTP User")]), e("p", [t._v("If a user has no rate limit set, they'll use this default limit.")]), e("p", {
                    staticClass: "current_limit--outer"
                }, [t._v("It's currently set to "), e("strong", [e("span", {
                    staticClass: "current_limit"
                }, [t._v(t._s(t.prettyPrintRL))])]), t._v(".")]), e("div", {
                    staticClass: "rate-limit rate-limit-defaults",
                    class: [t.isControlsVisible ? "is-open" : "is-closed", "unlimited" === t.ratelimit_period ? "is-unlimited" : ""],
                    attrs: {
                        "data-what": "ipaddr"
                    }
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ratelimit_limit,
                        expression: "ratelimit_limit"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "number",
                        name: "per_smtpauth_relay_limit",
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
                }), e("div", {
                    staticClass: "rate-limit-select"
                }, [e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ratelimit_period,
                        expression: "ratelimit_period"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        name: "per_smtpauth_relay_limit_period"
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
                }, [e("option", {
                    attrs: {
                        value: "unlimited"
                    }
                }, [t._v("Unlimited")]), e("option", {
                    attrs: {
                        value: "01:00:00"
                    }
                }, [t._v("per hour")]), e("option", {
                    attrs: {
                        value: "1 day"
                    }
                }, [t._v("per day")]), e("option", {
                    attrs: {
                        value: "7 days"
                    }
                }, [t._v("per week")]), e("option", {
                    attrs: {
                        value: "1 mon"
                    }
                }, [t._v("per month")])])]), e("base-button", {
                    staticClass: "change-save",
                    class: {
                        disabled: t.saveDisabled
                    },
                    attrs: {
                        variant: "blue",
                        "is-loading": t.isSaving
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.save.apply(null, arguments)
                        }
                    }
                }, [t._v("Save")]), e("a", {
                    staticClass: "change-cancel btn grey",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.hideControls.apply(null, arguments)
                        }
                    }
                }, [t._v("Cancel")]), e("a", {
                    staticClass: "change btn grey",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.showControls.apply(null, arguments)
                        }
                    }
                }, [t._v("Change Rate Limit Default")]), e("span", {
                    staticClass: "message-saved",
                    class: {
                        "is-visible": t.isSavedMessageShowing
                    }
                }, [t._v("Saved changes")])], 1)])])
            },
            ee = [function() {
                var t = this,
                    e = t._self._c;
                return e("strong", [e("span", {
                    staticClass: "mobile-hide"
                }, [t._v("SMTP ")]), t._v("Server:Â ")])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("p", [e("strong", [e("span", {
                    staticClass: "mobile-hide"
                }, [t._v("SMTP ")]), t._v("Port:Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("2525 ")]), e("span", {
                    staticClass: "automatic hide",
                    attrs: {
                        "data-requires": "has_salesforce"
                    }
                }, [e("span", {
                    staticClass: "mobile-hide"
                }, [t._v("(")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("11025")]), t._v(" for Salesforce"), e("span", {
                    staticClass: "mobile-hide"
                }, [t._v(")")])])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("p", [e("span", {
                    staticClass: "mobile-hide"
                }, [e("strong", [t._v("Alternative ports:Â ")])]), e("span", {
                    staticClass: "desktop-hide"
                }, [t._v("Alternative/TLS\n            Ports:Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("8025,Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("587,Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("80")]), t._v(" or "), e("span", {
                    staticClass: "block-val"
                }, [t._v("25")]), t._v("."), e("span", {
                    staticClass: "mobile-hide"
                }, [t._v(" TLS is available on the same ports.")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("p", [t._v("SSL "), e("span", {
                    staticClass: "mobile-hide"
                }, [t._v("is available on ")]), t._v("ports"), e("span", {
                    staticClass: "desktop-hide"
                }, [t._v(":Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("Â 465,Â ")]), e("span", {
                    staticClass: "block-val"
                }, [t._v("8465")]), t._v(" and "), e("span", {
                    staticClass: "block-val"
                }, [t._v("443")]), t._v(".")])
            }],
            ie = {
                mixins: [Et, bt],
                components: {
                    BaseButton: Xt
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
                    this.ratelimit_limit = this.$store.state.smtpauth.defaultRLLimit, this.ratelimit_period = this.$store.state.smtpauth.defaultRLPeriod
                },
                computed: {
                    mailServerURL: function() {
                        return this.$store.state.root.mail_server_url
                    },
                    prettyPrintRL: function() {
                        return this.mixinHelpers_prettyPrintRatelimit(this.$store.state.smtpauth.defaultRLLimit, this.$store.state.smtpauth.defaultRLPeriod)
                    },
                    saveDisabled: function() {
                        return "unlimited" !== this.ratelimit_period && "" === this.ratelimit_limit
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
                            (isNaN(e) || e <= 0) && "unlimited" !== this.ratelimit_period ? this.mixinAlerts_error("Limit must be a number") : (this.isSaving = !0, this.$store.dispatch(L.actions.UPDATE_DEFAULT_RATELIMIT, {
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
            se = ie,
            ae = (i("b02c"), Object(F["a"])(se, te, ee, !1, null, "73066c38", null)),
            ne = ae.exports;

        function oe(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function re(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? oe(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : oe(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var le = {
                components: {
                    Page: J,
                    EmptyTableNote: it,
                    ManageUserTable: xt,
                    UserEdit: Zt,
                    UserSettings: ne,
                    BaseLoader: St
                },
                computed: re(re({}, Object(c["b"])({
                    active_users: L.getters.GET_ACTIVE_USERS,
                    isFetchingActiveUsers: L.getters.IS_FETCHING_ACTIVE_USERS,
                    isEditModalActive: L.getters.IS_EDITING_USER,
                    noUserMessage: L.getters.GET_NO_USER_MESSAGE,
                    disabledAdd: L.getters.GET_DISABLE_ADD
                })), {}, {
                    searchText: {
                        get: function() {
                            return this.$store.getters[L.getters.GET_SEARCH_TEXT]
                        },
                        set: function(t) {
                            this.$store.commit(L.mutations.SET_SEARCH_TEXT, t)
                        }
                    },
                    has_active_users: function() {
                        return void 0 !== this.active_users && null !== this.active_users && this.active_users.length > 0
                    }
                }),
                methods: {
                    add: function() {
                        this.$store.commit(L.mutations.TOGGLE_EDIT_MODAL, {
                            visible: !0,
                            data: null
                        })
                    },
                    search: function() {
                        this.$store.commit(L.mutations.SET_CURRENT_PAGE, 0), this.$store.dispatch(L.actions.LOAD_ACTIVE_USERS, {
                            isSearch: !0
                        })
                    }
                }
            },
            ce = le,
            _e = (i("1a95"), Object(F["a"])(ce, U, G, !1, null, "09db4a52", null)),
            ue = _e.exports;

        function de(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function pe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? de(Object(i), !0).forEach((function(e) {
                    Object(l["a"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : de(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }
        var me = {
                name: "app",
                mixins: [Et],
                components: {
                    MainPage: ue
                },
                computed: pe(pe({}, Object(c["b"])({
                    isSplashVisible: m.getters.GET_SHOW_SPLASH
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
                    this.$store.dispatch(L.actions.LOAD_ACTIVE_USERS, {
                        isSearch: !1
                    }).catch((function(e) {
                        t.mixinAlerts_error(e)
                    })), this.$eventBus.$on("showPopup", this.showPopup), this.$eventBus.$on("showPopupImmediately", this.showPopupImmediately)
                },
                methods: {
                    hideSplash: function() {
                        this.$store.commit(m.mutations.SET_SHOW_SPLASH, !1)
                    },
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
            fe = me,
            Ee = (i("85f4"), i("b295"), Object(F["a"])(fe, o, r, !1, null, "52a0d7ef", null)),
            ve = Ee.exports;
        s["a"].use(c["a"]);
        var he = new c["a"].Store({
                strict: !1,
                getters: {},
                mutations: {},
                actions: {},
                modules: {
                    root: b,
                    smtpauth: y
                }
            }),
            be = he;
        s["a"].use(n.a), s["a"].config.productionTip = !1, s["a"].prototype.$eventBus = new s["a"], be.commit(m.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey), be.commit(m.mutations.SET_SHOW_SPLASH, PAGE_DATA.showSplash), be.commit(m.mutations.SET_END_POINTS, END_POINTS.urls()), be.commit(m.mutations.SET_REGION, PAGE_DATA.region), be.commit(L.mutations.SET_APP_SETTINGS, PAGE_DATA.appSettings), be.commit(L.mutations.SET_IP_POOLS, PAGE_DATA.ip_pools), be.commit(L.mutations.SET_DEFAULT_RL_LIMIT, PAGE_DATA.ratelimits.default_limit), be.commit(L.mutations.SET_DEFAULT_RL_PERIOD, PAGE_DATA.ratelimits.default_period), be.commit(L.mutations.SET_IS_ALLOWED_ARCHIVING, PAGE_DATA.isAllowedArchiving), A(be), new s["a"]({
            store: be,
            render: function(t) {
                return t(ve)
            }
        }).$mount("#app")
    },
    "5f2f": function(t, e, i) {},
    6: function(t, e) {},
    "6c6d": function(t, e, i) {},
    7: function(t, e) {},
    7174: function(t, e, i) {},
    "75b6": function(t, e, i) {},
    7813: function(t, e, i) {},
    "7ed3": function(t, e, i) {},
    8: function(t, e) {},
    "803e": function(t, e, i) {
        "use strict";
        i("7174")
    },
    8375: function(t, e, i) {
        "use strict";
        i("5f2f")
    },
    "85f4": function(t, e, i) {
        "use strict";
        i("75b6")
    },
    "87f4": function(t, e, i) {
        "use strict";
        i("7ed3")
    },
    "897b": function(t, e, i) {
        "use strict";
        i("b07f")
    },
    "89cb": function(t, e, i) {
        "use strict";
        i("2e4b")
    },
    "8e28": function(t, e, i) {
        "use strict";
        i("bb1c")
    },
    9: function(t, e) {},
    a82f: function(t, e, i) {
        "use strict";
        i("052f")
    },
    ac8a: function(t, e, i) {},
    b02c: function(t, e, i) {
        "use strict";
        i("6c6d")
    },
    b07f: function(t, e, i) {},
    b295: function(t, e, i) {
        "use strict";
        i("2255")
    },
    b31e: function(t, e, i) {},
    bb1c: function(t, e, i) {},
    bc7b: function(t, e, i) {},
    cabc: function(t, e, i) {
        "use strict";
        i("ac8a")
    },
    d4e8: function(t, e, i) {
        "use strict";
        i("7813")
    },
    ef5e: function(t, e, i) {
        "use strict";
        i("bc7b")
    }
});
//# sourceMappingURL=app.9f1ad2f1.js.map