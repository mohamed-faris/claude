(function(e) {
    function t(t) {
        for (var i, r, o = t[0], c = t[1], u = t[2], d = 0, m = []; d < o.length; d++) r = o[d], Object.prototype.hasOwnProperty.call(n, r) && n[r] && m.push(n[r][0]), n[r] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        l && l(t);
        while (m.length) m.shift()();
        return a.push.apply(a, u || []), s()
    }

    function s() {
        for (var e, t = 0; t < a.length; t++) {
            for (var s = a[t], i = !0, o = 1; o < s.length; o++) {
                var c = s[o];
                0 !== n[c] && (i = !1)
            }
            i && (a.splice(t--, 1), e = r(r.s = s[0]))
        }
        return e
    }
    var i = {},
        n = {
            app: 0
        },
        a = [];

    function r(t) {
        if (i[t]) return i[t].exports;
        var s = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(s.exports, s, s.exports, r), s.l = !0, s.exports
    }
    r.m = e, r.c = i, r.d = function(e, t, s) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }, r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (r.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(s, i, function(t) {
                return e[t]
            }.bind(null, i));
        return s
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var u = 0; u < o.length; u++) t(o[u]);
    var l = c;
    a.push([0, "chunk-vendors"]), s()
})({
    0: function(e, t, s) {
        e.exports = s("56d7")
    },
    "2b76": function(e, t, s) {},
    4455: function(e, t, s) {},
    "44f4": function(e, t, s) {},
    4678: function(e, t, s) {
        var i = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-ps": "4c98",
            "./ar-ps.js": "4c98",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku-kmr": "7558",
            "./ku-kmr.js": "7558",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function n(e) {
            var t = a(e);
            return s(t)
        }

        function a(e) {
            if (!s.o(i, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return i[e]
        }
        n.keys = function() {
            return Object.keys(i)
        }, n.resolve = a, e.exports = n, n.id = "4678"
    },
    "4d27": function(e, t, s) {},
    "56d7": function(e, t, s) {
        "use strict";
        s.r(t);
        s("cadf"), s("551c"), s("f751"), s("097d");
        var i = s("2b0e"),
            n = function() {
                var e = this,
                    t = e._self._c;
                return t("section", {
                    staticClass: "page-content-section",
                    class: [{
                        splashOn: e.showSplash
                    }, {
                        "verify-on": e.showBarNoticeUnverified && !e.showVerificationForm
                    }],
                    attrs: {
                        id: "sms"
                    }
                }, [!e.showInfoSplash || e.showUpgradeSplash || e.showSubaccountSplash ? e._e() : t("InfoSplash", {
                    ref: "sms_splash",
                    attrs: {
                        userData: e.userData,
                        defaultProvider: e.defaultProvider
                    }
                }), e.showUpgradeSplash && !e.showSubaccountSplash ? t("UpgradeSplash", {
                    ref: "sms_upgrade_splash",
                    attrs: {
                        hidePaymentSplash: e.hidePaymentSplash
                    }
                }) : e._e(), e.showSubaccountSplash ? t("SubaccountSplash", {
                    ref: "sms_sub_splash"
                }) : e._e(), e.showSplash ? e._e() : [t("SMSHeader", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.showVerificationForm && !e.showSenderIdForm,
                        expression: "!showVerificationForm && !showSenderIdForm"
                    }],
                    ref: "sms_header",
                    attrs: {
                        context: e.context,
                        smsAccount: e.smsAccount,
                        title: e.pageTitle
                    }
                }), e.showBarNoticeQuota ? t("BarNoticeQuota") : e._e(), e.showVerificationForm ? e._e() : t("BarNoticeGrouped", {
                    attrs: {
                        clientPermissions: !0,
                        context: e.context
                    }
                }), e.showBarNoticeUsa && !e.showVerificationForm ? t("BarNoticeUsa", {
                    attrs: {
                        clientPermissions: !0
                    }
                }) : e._e(), t("page-alert", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showAlert && !e.showVerificationForm,
                        expression: "showAlert && !showVerificationForm"
                    }]
                }), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.showVerificationForm && !e.showSenderIdForm,
                        expression: "!showVerificationForm && !showSenderIdForm"
                    }],
                    staticClass: "sms-table-container"
                }, [t("SMSTabTable", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showTabTable,
                        expression: "showTabTable"
                    }],
                    ref: "sms_tab_table",
                    attrs: {
                        context: e.context
                    }
                }), t("AjaxLoadingSpinner", {
                    attrs: {
                        context: e.context
                    }
                })], 1), t("SMSSettingsPage", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showSettingsPage && !e.showVerificationForm,
                        expression: "showSettingsPage && !showVerificationForm"
                    }],
                    ref: "sms_settings_page",
                    attrs: {
                        userData: e.userData,
                        context: e.context
                    }
                }), t("NumberVerification", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showVerificationForm,
                        expression: "showVerificationForm"
                    }],
                    ref: "sms_verification"
                }), t("SenderIdVerification", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showSenderIdForm,
                        expression: "showSenderIdForm"
                    }],
                    ref: "sms_senderid_verification"
                })]], 2)
            },
            a = [],
            r = (s("8e6e"), s("ac6a"), s("456d"), s("f559"), s("bd86")),
            o = (s("386d"), s("a481"), s("c1df")),
            c = s.n(o),
            u = (s("7f45"), s("3a23"), Object.freeze({
                CREATE_ACCOUNT: "create-account",
                SWITCH_CONTEXT: "switch-context",
                CLEAR_POLLING: "clear-polling",
                GO_BACK: "go-back",
                LOAD_AVAILABLE_NUMBERS: "load-available-numbers",
                AVAILABLE_LOADING_DONE: "available-loading-done",
                SET_SHOW_BAR_NOTICE: "set-show-bar-notice",
                CLOSE_ALL_FILTER: "close-all-filter",
                SMSTBOX_RESEND_CLICKED: "sms-toolbox-resend",
                SMSTBOX_FORWARD_CLICKED: "sms-toolbox-forward",
                SHOW_VERIFICATION_FORM: "show-verification-form",
                SHOW_SENDER_ID_FORM: "show-sender-id-form",
                VERIFICATION_SUBMITTED: "verification-submitted",
                HIDE_USA_BANNER: "hide-usa-banner",
                SENDER_ID_SUBMITTED: "sender-id-submitted",
                RESET_SENDERID_FORM: "reset-senderid-form"
            })),
            l = u,
            d = s("2f62"),
            m = s("5f36"),
            _ = s.n(m),
            h = (s("d3a5"), {
                methods: {
                    s2g_objectIsFunction: function(e) {
                        return "[object Function]" == Object.prototype.toString.call(e)
                    },
                    s2g_isEmptyString: function(e) {
                        return !e
                    }
                }
            }),
            p = h,
            g = {
                mixins: [p],
                created: function() {
                    this.makeRequest = function(e, t, s, i, n, a, r) {
                        void 0 !== r && null !== r || (r = !1);
                        var o = this;
                        _.a.ajax(END_POINTS.urls()[t] + "?action=" + encodeURIComponent(s) + "&CSRF_key=" + encodeURIComponent(HTML.csrfkey), {
                            method: e,
                            data: i,
                            complete: function(e, t) {
                                if ("success" != t) {
                                    r || o.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                                    try {
                                        o.s2g_objectIsFunction(a) && a(e)
                                    } catch (s) {
                                        console.error("encountered error in AJAXBackendMixin, err:", s)
                                    }
                                } else {
                                    r || o.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                                    try {
                                        "error" in e.responseJSON && o.s2g_objectIsFunction(a) ? a(e) : o.s2g_objectIsFunction(n) && n(e)
                                    } catch (s) {
                                        console.error("encountered error in AJAXBackendMixin, err:", s)
                                    }
                                }
                            }
                        }), r || o.$store.commit("root/INC_RUNNING_AJAX_REQUESTS")
                    }
                },
                methods: {
                    mixinAjax_get: function(e, t, s, i, n, a) {
                        return this.makeRequest("GET", e, t, s, i, n, a)
                    },
                    mixinAjax_post: function(e, t, s, i, n, a) {
                        return this.makeRequest("POST", e, t, s, i, n, a)
                    },
                    mixinAjax_patch: function(e, t, s, i, n, a) {
                        return this.makeRequest("PATCH", e, t, s, i, n, a)
                    },
                    mixinAjax_put: function(e, t, s, i, n, a) {
                        return this.makeRequest("PUT", e, t, s, i, n, a)
                    },
                    mixinAjax_delete: function(e, t, s, i, n, a) {
                        return this.makeRequest("DELETE", e, t, s, i, n, a)
                    }
                }
            },
            S = g,
            f = s("768b"),
            b = (s("d56b"), s("3eaa"), {
                methods: {
                    mixinEventListener_register: function(e) {
                        this.mixinEventListener_eventMap = e
                    },
                    mixinEventListener_on: function() {
                        var e = this;
                        this.mixinEventListener_isOn || (Object.entries(this.mixinEventListener_eventMap).forEach((function(t) {
                            var s = Object(f["a"])(t, 2),
                                i = s[0],
                                n = s[1];
                            e.$eventBus.$on(i, n)
                        })), this.mixinEventListener_isOn = !0)
                    },
                    mixinEventListener_off: function() {
                        var e = this;
                        Object.entries(this.mixinEventListener_eventMap).forEach((function(t) {
                            var s = Object(f["a"])(t, 2),
                                i = s[0],
                                n = s[1];
                            e.$eventBus.$off(i, n)
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
            E = b,
            v = {
                data: function() {
                    return {
                        searchHasChanged: !1,
                        columnHasChanged: !1,
                        initRequest: !0,
                        loadMore: !1
                    }
                },
                created: function() {
                    this.$eventBus.$on("mixin-search-has-changed", this.$_flagSearchHasChanged), this.$eventBus.$on("mixin-column-has-changed", this.$_flagColumnHasChanged), this.$eventBus.$on("mixin-load-more", this.$_flagLoadMore), this.$eventBus.$on("mixin-search-trigger", this.$_triggerSearch), this.$eventBus.$on("mixin-download-file-triggered", this.$_downloadFile)
                },
                destroyed: function() {
                    this.$eventBus.$off("mixin-search-has-changed", this.$_flagSearchHasChanged), this.$eventBus.$off("mixin-column-has-changed", this.$_flagColumnHasChanged), this.$eventBus.$off("mixin-load-more", this.$_flagLoadMore), this.$eventBus.$off("mixin-search-trigger", this.$_triggerSearch), this.$eventBus.$off("mixin-download-file-triggered", this.$_downloadFile)
                },
                methods: {
                    $_flagSearchHasChanged: function() {
                        this.searchHasChanged = !0
                    },
                    $_flagColumnHasChanged: function() {
                        this.columnHasChanged = !0
                    },
                    $_flagLoadMore: function() {
                        this.loadMore = !0
                    },
                    $_triggerSearch: function() {
                        if (!this.searchHasChanged && !this.loadMore && !this.initRequest) return !1;
                        this.searchHasChanged = !1, this.performSearch(this.initRequest, this.loadMore), this.initRequest = !1, this.loadMore = !1
                    },
                    $_downloadFile: function(e) {
                        this.performDownloadFile(e)
                    }
                }
            },
            T = v,
            A = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "splash-process-container",
                    class: [{
                        "is-two-active": e.stepTwoActive
                    }, {
                        "is-three-active": e.stepThreeActive
                    }, {
                        "is-four-active": e.stepFourActive
                    }, {
                        "is-five-active": e.stepFiveActive
                    }]
                }, [t("transition", {
                    attrs: {
                        name: "sms-splash-main"
                    }
                }, [e.stepOneActive ? t("div", {
                    staticClass: "info-splash is-visible sms-splash-step-1"
                }, [t("figure", [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/splash-sms.png",
                        width: "268",
                        alt: "SMTP2GO SMS"
                    }
                })]), t("h2", [e._v("Send SMS messages.")]), "report" == e.userData.acting_role ? [t("p", {
                    staticClass: "lead-in"
                }, [e._v("Contact an Owner or Admin of your account to set up SMS sending. "), t("br"), e._v("Each SMS costs a particular amount depending on the country of the recipient. See "), t("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/6352101968409",
                        target: "_blank"
                    }
                }, [e._v("more information")]), e._v(" about SMS sending.")]), t("p")] : e.notChargebee ? [t("p", {
                    staticClass: "lead-in"
                }, [e._v("\n          Click below to set up your account for SMS sending."), t("br", {
                    staticClass: "mobile-hide"
                }), e._v("\n          Each SMS costs a particular amount depending on the country of the recipient.\n          See "), t("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/6352101968409",
                        target: "_blank"
                    }
                }, [e._v("more information")]), e._v(" about SMS sending.\n        ")]), t("div", {
                    staticClass: "notice-splash"
                }, [t("div", {
                    staticClass: "notice-splash-icon"
                }), t("p", {
                    staticClass: "notice-splash-content"
                }, [t("strong", [e._v("Important note")]), t("br"), e._v("\n            This paid feature requires that you firstly move to our new payment processor. You can do this by clicking the â€˜Start processâ€™ button below, and then "), t("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://support.smtp2go.com/hc/en-gb/articles/28407225527449-Switch-Payment-Processors"
                    }
                }, [e._v("following these instructions")]), e._v(".  \n          ")])]), t("a", {
                    staticClass: "green btn start-process",
                    attrs: {
                        href: "/account/changeplan/"
                    }
                }, [e._v("Start process"), t("span", {
                    staticClass: "button-icon"
                }, [e._v("+")])])] : [t("p", {
                    staticClass: "lead-in"
                }, [e._v("Click below to set up your account for SMS sending. "), t("br"), e._v("Each SMS costs a particular amount depending on the country of the recipient. See "), t("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/6352101968409",
                        target: "_blank"
                    }
                }, [e._v("more information")]), e._v(" about SMS sending.")]), e.isMasterAccount ? t("div", {
                    staticClass: "notice-splash"
                }, [t("div", {
                    staticClass: "notice-splash-icon"
                }), t("p", {
                    staticClass: "notice-splash-content"
                }, [t("strong", [e._v("Important note")]), t("br"), e._v("\n            If you are setting up SMS sending for a subaccount, this must be done directly within the subaccount's App (not here).\n          ")])]) : e._e(), t("p", [t("button", {
                    staticClass: "btn green hide-splash",
                    on: {
                        click: e.createSMSAccountClick
                    }
                }, [e._v("Continue")]), t("RatesDropdown", {
                    attrs: {
                        smsAccount: e.defaultProvider,
                        displayText: "SMS pricing",
                        fullStop: ""
                    }
                })], 1), t("div", {
                    staticClass: "modal-backdrop"
                }), t("p")]], 2) : e._e()]), e.stepTwoActive ? t("div", {
                    staticClass: "sms-splash-step splash-step-2"
                }, [t("header", {
                    class: {
                        "is-active": e.stepTwoAnimate
                    }
                }, [t("h3", [e._v("Would you like to send SMS Messages from a dedicated number?")]), t("p", {
                    staticClass: "lead-in"
                }, [e._v("Sending messages from the same phone number every time helps your customers know the SMS message is from you.")])]), t("div", {
                    staticClass: "splash-table-panel"
                }, [t("div", {
                    staticClass: "card card-region"
                }, [e._m(0), t("div", {
                    staticClass: "region",
                    class: {
                        "is-selected": "US" === e.selectedCountry
                    },
                    on: {
                        click: function(t) {
                            return e.toggleCountrySelection("US")
                        }
                    }
                }, [e._m(1), t("span", {
                    staticClass: "region-price"
                }, [e._v(e._s(e.getNumberCost("US")))])]), t("div", {
                    staticClass: "region",
                    class: {
                        "is-selected": "GB" === e.selectedCountry
                    },
                    on: {
                        click: function(t) {
                            return e.toggleCountrySelection("GB")
                        }
                    }
                }, [e._m(2), t("span", {
                    staticClass: "region-price"
                }, [e._v(e._s(e.getNumberCost("GB")))])]), t("div", {
                    staticClass: "region",
                    class: {
                        "is-selected": "AU" === e.selectedCountry
                    },
                    on: {
                        click: function(t) {
                            return e.toggleCountrySelection("AU")
                        }
                    }
                }, [e._m(3), t("span", {
                    staticClass: "region-price"
                }, [e._v(e._s(e.getNumberCost("AU")))])]), t("div", {
                    staticClass: "region",
                    class: {
                        "is-selected": "shared" === e.selectedCountry
                    },
                    on: {
                        click: function(t) {
                            return e.toggleCountrySelection("shared")
                        }
                    }
                }, [e._m(4), t("span", {
                    staticClass: "region-price"
                }, [e._v(e._s(e.getNumberCost("shared")))])])]), t("div", {
                    staticClass: "table-footer"
                }, [t("button", {
                    staticClass: "btn green hide-splash",
                    attrs: {
                        disabled: "" === this.selectedCountry
                    },
                    on: {
                        click: function(t) {
                            return e.selectCountry()
                        }
                    }
                }, [e._v("Continue")]), t("span", {
                    staticClass: "footer-info-text right"
                }, [e._v("Prices in USD")])])])]) : e._e(), e.stepThreeActive ? t("div", {
                    staticClass: "sms-splash-step splash-step-3"
                }, [t("header", {
                    class: {
                        "is-active": e.stepThreeAnimate
                    }
                }, [t("h3", [e._v("Great choice! Pick your SMS number below")]), t("p", {
                    staticClass: "lead-in"
                }, [e._v("Choose a number you'd like to activate in your account.")])]), t("div", {
                    staticClass: "splash-table-panel",
                    class: {
                        "is-active": e.stepThreeAnimate
                    }
                }, [t("div", {
                    staticClass: "table-container-topBar top search-grouped bar-full"
                }, [t("SearchBox", {
                    ref: "numberSearchBox",
                    attrs: {
                        id: "splash-number-search"
                    }
                })], 1), t("div", {
                    staticClass: "table-container-content",
                    class: {
                        "is-spinner": e.gettingNumbers
                    }
                }, [t("div", {
                    staticClass: "table-wrapper",
                    class: {
                        "no-numbers": e.noNumbersFound
                    }
                }, [t("table", {
                    staticClass: "data-table"
                }, [e._m(5), t("tbody", [e._l(e.numbers, (function(s) {
                    return t("tr", {
                        key: s.id
                    }, [t("td", [t("label", {
                        attrs: {
                            for: s.id
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.selectNumber(s)
                            }
                        }
                    }, [t("div", {
                        staticClass: "radio"
                    }, [t("span", {
                        class: {
                            checked: e.isNumberChecked(s.id)
                        }
                    }, [t("input", {
                        attrs: {
                            type: "radio",
                            name: "number",
                            id: s.id
                        },
                        domProps: {
                            value: s.id
                        }
                    })])]), e._v(e._s(e.getDisplayPhone(s.phone_number)) + "\n                    ")])]), t("td", [e._l(s.capabilities, (function(s) {
                        return ["mms" == s.toLowerCase() || "sms" == s.toLowerCase() ? t("span", {
                            key: s,
                            staticClass: "long-event-indicator",
                            class: s.toLowerCase()
                        }) : e._e()]
                    }))], 2), t("td", [e._v(e._s(e.getNumberCost(s.country)))])])
                })), e.noNumbersFound ? t("tr", [t("td", {
                    staticClass: "no-results",
                    attrs: {
                        colspan: "3"
                    }
                }, [e._v("No numbers found. Please try a different search or contact support.")])]) : e._e()], 2)])]), t("div", {
                    staticClass: "table-footer"
                }, [t("button", {
                    staticClass: "btn green hide-splash",
                    attrs: {
                        disabled: 0 === e.numbers.length
                    },
                    on: {
                        click: e.gotoSplashFour
                    }
                }, [e._v("\n            Continue with this number\n            ")]), t("button", {
                    staticClass: "btn button-outlined",
                    on: {
                        click: e.gotoSplashTwo
                    }
                }, [e._v("\n              Go back\n            ")]), t("span", {
                    staticClass: "footer-info-text right"
                }, [e._v("Prices in USD")])]), e.gettingNumbers ? t("div", {
                    staticClass: "table-loading-overlay"
                }, [e._m(6)]) : e._e()])])]) : e._e(), e.stepFourActive ? t("div", {
                    staticClass: "sms-splash-step splash-step-4"
                }, [t("header", {
                    class: {
                        "is-active": e.stepFourAnimate
                    }
                }, [t("h3", [e._v("What shall we call this number?")]), t("p", {
                    staticClass: "lead-in"
                }, [e._v("Enter a descriptive name for your dedicated number.")]), t("p", [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.label,
                        expression: "label"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "My Unnamed SMS Number"
                    },
                    domProps: {
                        value: e.label
                    },
                    on: {
                        keyup: e.isEnterTyped,
                        input: function(t) {
                            t.target.composing || (e.label = t.target.value)
                        }
                    }
                }), t("br"), t("button", {
                    staticClass: "btn green hide-splash",
                    on: {
                        click: e.gotoSplashFive
                    }
                }, [e._v("Continue with this name")]), t("button", {
                    staticClass: "btn button-outlined",
                    on: {
                        click: function(t) {
                            return e.gotoSplashThree(e.selectedCountry)
                        }
                    }
                }, [e._v("\n            Go back\n          ")])])]), e._m(7)]) : e._e(), e.stepFiveActive ? t("div", {
                    staticClass: "sms-splash-step splash-step-success"
                }, [t("header", {
                    class: {
                        "is-active": e.stepFiveAnimate
                    }
                }, [e._m(8), t("h3", [e._v("Super! Setting up your account")]), e._m(9)])]) : e._e()], 1)
            },
            C = [function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "region-title"
                }, [t("h4", [e._v("Select dedicated number type")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "region-name"
                }, [t("span", {
                    staticClass: "region-flag flag-us"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-us.png",
                        alt: "US",
                        width: "24"
                    }
                })]), e._v("\n              United States\n              "), t("span", {
                    staticClass: "region-info"
                }, [e._v("(Required for sending to US & Canada)")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "region-name"
                }, [t("span", {
                    staticClass: "region-flag flag-us"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-uk.png",
                        alt: "GB",
                        width: "24"
                    }
                })]), e._v("\n              United Kingdom\n            ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "region-name"
                }, [t("span", {
                    staticClass: "region-flag flag-us"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-au.png",
                        alt: "AU",
                        width: "24"
                    }
                })]), e._v("\n              Australia\n            ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "region-name"
                }, [t("span", {
                    staticClass: "region-flag flag-shared"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-shared.png",
                        alt: "Shared",
                        width: "24"
                    }
                })]), e._v("\n              Or use a shared number\n            ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("thead", [t("tr", [t("th", [t("span", [e._v("Number")])]), t("th", [t("span", [e._v("Sending Capabilities")])]), t("th", [t("span", [e._v("Price")])])])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "loading is-animatable is-visible"
                }, [t("div", {
                    staticClass: "load-more load-centered"
                }, [t("div", {
                    staticClass: "loading-spinner"
                }, [t("div", {
                    staticClass: "loader"
                }, [t("span", {
                    staticClass: "icon-circles"
                }, [t("span", {
                    staticClass: "dot-circle pending"
                }), t("span", {
                    staticClass: "dot-circle soft-bounced"
                }), t("span", {
                    staticClass: "dot-circle hard-bounced"
                }), t("span", {
                    staticClass: "dot-circle rejected"
                }), t("span", {
                    staticClass: "dot-circle spam"
                }), t("span", {
                    staticClass: "dot-circle delivered"
                }), t("span", {
                    staticClass: "dot-circle unsubscribed"
                }), t("span", {
                    staticClass: "dot-circle unblocked"
                }), t("span", {
                    staticClass: "dot-circle opened"
                }), t("span", {
                    staticClass: "dot-circle clicked"
                })])])])])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "table-footer"
                }, [t("h4", {
                    staticClass: "footer-info-title"
                }, [e._v("Continue to complete your purchase")]), t("p", {
                    staticClass: "footer-info-text"
                }, [e._v("Your billing details on file will be charged the appropriate amount for your new dedicated number. "), t("br"), e._v("If you pay manually, an invoice will be created.")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "loading is-animatable is-visible"
                }, [t("div", {
                    staticClass: "load-more load-centered"
                }, [t("div", {
                    staticClass: "loading-spinner"
                }, [t("div", {
                    staticClass: "loader"
                }, [t("span", {
                    staticClass: "icon-circles"
                }, [t("span", {
                    staticClass: "dot-circle pending"
                }), t("span", {
                    staticClass: "dot-circle soft-bounced"
                }), t("span", {
                    staticClass: "dot-circle hard-bounced"
                }), t("span", {
                    staticClass: "dot-circle rejected"
                }), t("span", {
                    staticClass: "dot-circle spam"
                }), t("span", {
                    staticClass: "dot-circle delivered"
                }), t("span", {
                    staticClass: "dot-circle unsubscribed"
                }), t("span", {
                    staticClass: "dot-circle unblocked"
                }), t("span", {
                    staticClass: "dot-circle opened"
                }), t("span", {
                    staticClass: "dot-circle clicked"
                })])])])])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", {
                    staticClass: "lead-in"
                }, [e._v("\n           Your text messaging number will be ready "), t("br"), e._v("for you in a sec.\n        ")])
            }],
            N = (s("0ae7"), s("d30a"), s("9984"), function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "search"
                }, [t("div", {
                    staticClass: "dataTables_filter has-search-options",
                    attrs: {
                        id: "emails_bounces_filter"
                    }
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.primarySearchKeyword,
                        expression: "primarySearchKeyword"
                    }],
                    staticClass: "form-control input-small input-inline",
                    attrs: {
                        type: "search",
                        "aria-controls": "emails_bounces",
                        id: "main-search",
                        placeholder: e.placeholder
                    },
                    domProps: {
                        value: e.primarySearchKeyword
                    },
                    on: {
                        input: [function(t) {
                            t.target.composing || (e.primarySearchKeyword = t.target.value)
                        }, e.mainSearchChanged],
                        keyup: e.isEnterTyped
                    }
                }), e.searchOptions.length > 0 ? t("a", {
                    staticClass: "toggle-search-options",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: e.mixinTriggerable_toggleOpened
                    }
                }, [t("i", {
                    staticClass: "fa fa-angle-down"
                })]) : e._e(), t("button", {
                    staticClass: "btn blue btn-search",
                    attrs: {
                        type: "button",
                        role: "button",
                        disabled: e.requestActive
                    },
                    on: {
                        click: e.forcePerformSearch
                    }
                }, [t("span", {
                    staticClass: "icon-search"
                }), t("span", {
                    staticClass: "button-text"
                }, [e._v(" Search")])])]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.mixinTriggerable_isOpen,
                        expression: "mixinTriggerable_isOpen"
                    }],
                    staticClass: "search-options open"
                }, [t("ul", {
                    staticClass: "dropdown-menu"
                }, [e._l(e.searchOptions, (function(s, i) {
                    return t("li", {
                        key: i
                    }, [t("label", {
                        staticClass: "control-label"
                    }, [e._v(e._s(s.label) + ":")]), "hasAttachment" !== i ? t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: s.value,
                            expression: "searchOption.value",
                            modifiers: {
                                trim: !0
                            }
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: s.value
                        },
                        on: {
                            input: [function(t) {
                                t.target.composing || e.$set(s, "value", t.target.value.trim())
                            }, e.subSearchChanged],
                            keyup: e.isEnterTyped,
                            blur: function(t) {
                                return e.$forceUpdate()
                            }
                        }
                    }) : e._e(), "hasAttachment" === i ? t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: s.value,
                            expression: "searchOption.value",
                            modifiers: {
                                trim: !0
                            }
                        }],
                        staticClass: "form-control search-attachment-checkbox",
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(s.value) ? e._i(s.value, null) > -1 : s.value
                        },
                        on: {
                            click: e.searchChanged,
                            change: function(t) {
                                var i = s.value,
                                    n = t.target,
                                    a = !!n.checked;
                                if (Array.isArray(i)) {
                                    var r = null,
                                        o = e._i(i, r);
                                    n.checked ? o < 0 && e.$set(s, "value", i.concat([r])) : o > -1 && e.$set(s, "value", i.slice(0, o).concat(i.slice(o + 1)))
                                } else e.$set(s, "value", a)
                            }
                        }
                    }) : e._e()])
                })), t("li", [t("button", {
                    staticClass: "btn blue btn-search",
                    attrs: {
                        role: "button",
                        type: "button",
                        disabled: e.requestActive
                    },
                    on: {
                        click: e.forcePerformSearch
                    }
                }, [t("span", {
                    staticClass: "icon-search"
                }), e._v("\n          Search\n        ")])])], 2)])])
            }),
            I = [],
            y = (s("9b01"), s("094b"), s("eca9"), Object.freeze({
                TRIGGERABLE_OPENED: "mixin-triggerable-opened",
                TRIGGERABLE_CLOSED: "mixin-triggerable-closed"
            })),
            O = {
                created: function() {
                    _()(window).on("click.Bst", this.$_mixinTriggerableWindowClicked), this.$eventBus.$on(y.TRIGGERABLE_OPENED, this.$_mixinTriggerableOpened)
                },
                mounted: function() {
                    this.mixinTriggerable_layers = _()(this.$el).find(".mixinTriggerable_layer"), _()(this.$el).hasClass("mixinTriggerable_layer") && this.mixinTriggerable_layers.push(this.$el)
                },
                destroyed: function() {
                    _()(window).off("click.Bst", this.$_mixinTriggerableWindowClicked), this.$eventBus.$off(y.TRIGGERABLE_OPENED, this.$_mixinTriggerableOpened)
                },
                methods: {
                    $_mixinTriggerableUpdateParent: function(e) {
                        for (var t = 0, s = this.$parent;;) {
                            if (!(void 0 !== s && null !== s && void 0 !== s.mixinTriggerable_getID && t < 10)) break;
                            s.mixinTriggerable_isModal = e, t++, s = s.$parent
                        }
                    },
                    $_mixinTriggerableWindowClicked: function(e) {
                        if (this.mixinTriggerable_ignoreNextWindowClick) this.mixinTriggerable_ignoreNextWindowClick = !1;
                        else if (!this.mixinTriggerable_isModal) {
                            var t = function(e) {
                                    var t = _()(e).parents().filter((function(e, t) {
                                        return _()(t).hasClass("mixinTriggerable_layer")
                                    }));
                                    return t.length > 0
                                },
                                s = function(e) {
                                    var t = _()(e).parents().filter((function(e, t) {
                                        return _()(t).hasClass("table-condensed") || _()(t).hasClass("daterangepicker")
                                    }));
                                    return t.length > 0
                                },
                                i = !1;
                            if (this.mixinTriggerable_isOpen)
                                for (var n = 0; n < this.mixinTriggerable_layers.length; ++n) {
                                    var a = _()(this.mixinTriggerable_layers[n]);
                                    if (0 !== a.has(e.target).length || a.is(e.target) || !this.mixinTriggerable_closeOnParentClick && t(e.target, a) || s(e.target, a)) {
                                        i = !0;
                                        break
                                    }
                                }
                            this.mixinTriggerable_isOpen && !i && (this.mixinTriggerable_isOpen = !1, this.$_mixinTriggerableUpdateParent(this.mixinTriggerable_isOpen), this.$eventBus.$emit(y.TRIGGERABLE_CLOSED, this.mixinTriggerable_getID()), "EventFilter" !== this.mixinTriggerable_getID() && "PeriodFilter" !== this.mixinTriggerable_getID() || this.$parent.mixinTriggerable_forceClose())
                        }
                    },
                    $_mixinTriggerableOpened: function(e) {
                        this.mixinTriggerable_isSelf(e) || this.mixinTriggerable_isModal || (this.mixinTriggerable_isOpen = !1)
                    },
                    mixinTriggerable_getID: function() {
                        return this.$vnode.key ? this.$options.name + "_" + this.$vnode.key : this.$options.name
                    },
                    mixinTriggerable_isSelf: function(e) {
                        return e === this.mixinTriggerable_getID()
                    },
                    mixinTriggerable_setModal: function(e) {
                        this.mixinTriggerable_isModal = e
                    },
                    mixinTriggerable_centerSelf: function() {
                        var e = _()(this.$el).offset().left,
                            t = Math.ceil(e),
                            s = _()(this.$el).offset().top,
                            i = Math.ceil(s);
                        this.$el.style.left = t + "px", this.$el.style.top = i + "px", this.$el.style.transform = "translate(0) scale(1)"
                    },
                    mixinTriggerable_toggleOpened: function(e) {
                        void 0 !== e && e.stopImmediatePropagation(), this.mixinTriggerable_isModal && "AllFilter" !== this.mixinTriggerable_getID() || (this.mixinTriggerable_isOpen = !this.mixinTriggerable_isOpen, this.$_mixinTriggerableUpdateParent(this.mixinTriggerable_isOpen), this.mixinTriggerable_isOpen ? this.$eventBus.$emit(y.TRIGGERABLE_OPENED, this.mixinTriggerable_getID()) : this.$eventBus.$emit(y.TRIGGERABLE_CLOSED, this.mixinTriggerable_getID()))
                    },
                    mixinTriggerable_forceOpen: function(e) {
                        void 0 !== e && e.stopImmediatePropagation(), this.mixinTriggerable_isModal = !1;
                        var t = this.mixinTriggerable_isOpen;
                        this.mixinTriggerable_isOpen = !0, t || (this.$_mixinTriggerableUpdateParent(this.mixinTriggerable_isOpen), this.mixinTriggerable_ignoreNextWindowClick = !0, this.$eventBus.$emit(y.TRIGGERABLE_OPENED, this.mixinTriggerable_getID()))
                    },
                    mixinTriggerable_forceClose: function(e) {
                        void 0 !== e && e.stopImmediatePropagation(), this.mixinTriggerable_isModal = !1;
                        var t = this.mixinTriggerable_isOpen;
                        this.mixinTriggerable_isOpen = !1, t && (this.$_mixinTriggerableUpdateParent(this.mixinTriggerable_isOpen), this.mixinTriggerable_ignoreNextWindowClick = !0, this.$eventBus.$emit(y.TRIGGERABLE_CLOSED, this.mixinTriggerable_getID()))
                    }
                },
                props: {
                    mixinTriggerable_closeOnParentClick: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        mixinTriggerable_ignoreNextWindowClick: !1,
                        mixinTriggerable_layers: [],
                        mixinTriggerable_isOpen: !1,
                        mixinTriggerable_isModal: !1
                    }
                }
            },
            w = {
                name: "SearchBox",
                mixins: [O],
                data: function() {
                    return {
                        initialised: !1,
                        searchOptions: this.$config.searchOptions,
                        mainSearch: "",
                        primarySearchKeyword: "",
                        placeholder: "Search for content, to or from..."
                    }
                },
                initialised: !1,
                methods: {
                    initSearchBox: function(e) {
                        this.placeholder = e, this.initialised = !0
                    },
                    searchChanged: function() {
                        this.$eventBus.$emit("mixin-search-has-changed")
                    },
                    isEnterTyped: function(e) {
                        if (this.isEnter(e)) return !1
                    },
                    mainSearchChanged: function() {
                        this.$eventBus.$emit("mixin-search-has-changed");
                        var e, t = /([^\W]+)\s{0,}[:|=]\s{0,}(["'])(.*?)\2/g,
                            s = this.primarySearchKeyword;
                        for (var i in this.searchOptions) this.searchOptions[i].value = "";
                        while (null !== (e = t.exec(this.primarySearchKeyword)))
                            for (var n in this.searchOptions) e[1] == n && (s = s.replace(e[0], ""), this.searchOptions[n].value = e[3]);
                        this.mainSearch = s.trim()
                    },
                    subSearchChanged: function() {
                        this.$eventBus.$emit("mixin-search-has-changed");
                        var e = [];
                        for (var t in this.searchOptions) "" !== this.searchOptions[t].value && null !== this.searchOptions[t].value && void 0 !== this.searchOptions[t].value && "hasAttachment" !== t && e.push(t + ":'" + this.searchOptions[t].value + "'");
                        e.push(this.mainSearch), this.primarySearchKeyword = e.join(" ")
                    },
                    isEnter: function(e) {
                        return 13 == e.keyCode && (!this.requestActive && (this.forcePerformSearch(e), !0))
                    },
                    forcePerformSearch: function() {
                        this.$eventBus.$emit("mixin-search-has-changed"), this.$eventBus.$emit("mixin-search-trigger"), this.mixinTriggerable_forceClose()
                    },
                    getMainSearch: function() {
                        return this.mainSearch
                    },
                    resetSearch: function() {
                        this.primarySearchKeyword = "", this.mainSearch = ""
                    }
                },
                computed: {
                    requestActive: function() {
                        return 1 === this.$store.state.runningAjaxRequests
                    }
                }
            },
            R = w,
            M = s("2877"),
            G = Object(M["a"])(R, N, I, !1, null, null, null),
            U = G.exports,
            j = s("641c"),
            x = s.n(j),
            D = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "rates-dropdown-container sms-popup",
                    class: {
                        "popup-active": e.mixinTriggerable_isOpen
                    }
                }, [t("button", {
                    staticClass: "button-link",
                    on: {
                        click: e.mixinTriggerable_toggleOpened
                    }
                }, [e._v("\n    " + e._s(e.displayText))]), e._v(e._s(e.fullStop) + "\n  "), e.isTelnyx ? e._e() : t("ul", {
                    staticClass: "dropdown-rates mixinTriggerable_layer",
                    class: {
                        "is-open": e.mixinTriggerable_isOpen
                    }
                }, [t("li", {
                    staticClass: "dropdown-title"
                }, [t("strong", [e._v("SMS Messaging Rates")]), t("br"), e._v("\n      Pricing is per message unit: \n      "), t("span", {
                    staticClass: "modal-close",
                    on: {
                        click: e.mixinTriggerable_toggleOpened
                    }
                }, [e._v("Ã—")])]), e._m(0), e._m(1), e._m(2), e._m(3), e._m(4), e._m(5), e._m(6), e._m(7)]), e.isTelnyx ? t("ul", {
                    staticClass: "dropdown-rates mixinTriggerable_layer telnyx",
                    class: {
                        "is-open": e.mixinTriggerable_isOpen
                    }
                }, [e._m(8), e._m(9), e._m(10), e._m(11), e._m(12), e._m(13), e._m(14), e._m(15), e._m(16)]) : e._e()])
            },
            L = [function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-us"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-us.png",
                        alt: "US",
                        width: "24"
                    }
                })]), t("span", [e._v("United States"), t("span", {
                    staticClass: "rates-note"
                }, [e._v("(excluding US territories)")])]), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.012")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-ca"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-ca.png",
                        alt: "CA",
                        width: "24"
                    }
                })]), t("span", [e._v("Canada")]), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.016")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-uk"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-uk.png",
                        alt: "UK",
                        width: "24"
                    }
                })]), e._v("United Kingdom"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.06")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-ie"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-ie.png",
                        alt: "IE",
                        width: "24"
                    }
                })]), e._v("Ireland"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.08")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-au"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-au.png",
                        alt: "AU",
                        width: "24"
                    }
                })]), e._v("Australia / NZ"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.07")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-il"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-il.png",
                        alt: "IL",
                        width: "24"
                    }
                })]), e._v("Israel"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.34")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-else"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-else.png",
                        alt: "Everywhere else",
                        width: "24"
                    }
                })]), e._v("Everywhere else"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.12")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-mms"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-mms.png",
                        alt: "MMS",
                        width: "24"
                    }
                })]), e._v("MMS"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.05")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", {
                    staticClass: "dropdown-title"
                }, [t("strong", [e._v("SMS Messaging Rates")]), t("br"), e._v("\n      Pricing is per message unit, excluding carrier fees in USA/Canada: \n    ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-us"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-us.png",
                        alt: "US",
                        width: "24"
                    }
                })]), t("span", [e._v("United States"), t("span", {
                    staticClass: "rates-note"
                }, [e._v("(excluding US territories)")])]), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.0088")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-ca"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-ca.png",
                        alt: "CA",
                        width: "24"
                    }
                })]), t("span", [e._v("Canada")]), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.0088")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-uk"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-uk.png",
                        alt: "UK",
                        width: "24"
                    }
                })]), e._v("United Kingdom"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.06")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-ie"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-ie.png",
                        alt: "IE",
                        width: "24"
                    }
                })]), e._v("Ireland"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.088")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-au"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-au.png",
                        alt: "AU",
                        width: "24"
                    }
                })]), e._v("Australia"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.05")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-nz"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-nz.png",
                        alt: "NZ",
                        width: "24"
                    }
                })]), e._v("New Zealand"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.085")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", [t("span", {
                    staticClass: "rates-flag flag-mms"
                }, [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/flag-mms.png",
                        alt: "MMS",
                        width: "24"
                    }
                })]), e._v("MMS"), t("span", {
                    staticClass: "rates-rate"
                }, [e._v("$0.028")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("li", {
                    staticClass: "pricing-external-link"
                }, [t("a", {
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/57207595564825-SMS-Pricing",
                        target: "_blank"
                    }
                }, [e._v("View carrier fees and other country pricing")])])
            }],
            P = {
                name: "RatesDropdown",
                mixins: [O],
                props: {
                    displayText: String,
                    fullStop: String,
                    smsAccount: {
                        type: String,
                        default: ""
                    }
                },
                components: {},
                data: function() {
                    return {}
                },
                methods: {},
                computed: {
                    isTelnyx: function() {
                        return this.smsAccount.startsWith("tnyx")
                    }
                }
            },
            k = P,
            B = Object(M["a"])(k, D, L, !1, null, null, null),
            H = B.exports,
            F = {
                name: "InfoSplash",
                mixins: [S, O, E],
                components: {
                    SearchBox: U,
                    RatesDropdown: H
                },
                props: {
                    userData: Object,
                    defaultProvider: String
                },
                created: function() {
                    this.mixinEventListener_register(Object(r["a"])({}, y.TRIGGERABLE_CLOSED, this.checkClosed)), this.mixinEventListener_on()
                },
                destroyed: function() {
                    this.mixinEventListener_off(), this._splashObserver && this._splashObservers.forEach((function(e) {
                        return e.disconnect()
                    }))
                },
                mounted: function() {
                    switch (this.defaultProvider) {
                        case "msgm":
                            this.getNumbersForSplash("US", !0), this.getNumbersForSplash("GB", !0), this.getNumbersForSplash("AU", !0);
                            break;
                        default:
                            break
                    }
                    this.updatePageContentClass();
                    var e = document.querySelector(".notice-special"),
                        t = document.querySelector(".page-content");
                    e && !e.classList.contains("hide") && t && t.classList.add("has-special-notice"), this.observeSplashVisibility()
                },
                data: function() {
                    return {
                        requestPoint: this.$config.requestPoint,
                        selectableCountries: this.$config.selectableCountries,
                        dedicatedNumberCosts: this.$config.dedicatedNumberCosts,
                        stepOneActive: !0,
                        stepTwoActive: !1,
                        stepTwoAnimate: !1,
                        stepThreeActive: !1,
                        stepThreeAnimate: !1,
                        waitingForNumbers: !1,
                        stepFourActive: !1,
                        stepFourAnimate: !1,
                        stepFiveActive: !1,
                        stepFiveAnimate: !1,
                        numbers: [],
                        countryNumbers: {
                            US: [],
                            GB: [],
                            AU: []
                        },
                        gettingCountryNumbers: {
                            US: !1,
                            GB: !1,
                            AU: !1
                        },
                        country: {},
                        selectedCountry: "",
                        pagesize: "5",
                        selectedNumber: {},
                        label: "",
                        noNumbersFound: !1,
                        gettingNumbers: !1,
                        searchActive: !1,
                        isMasterAccount: PAGE_DATA.is_master,
                        notChargebee: PAGE_DATA.show_switch_processor_splash
                    }
                },
                methods: {
                    createSMSAccountClick: function() {
                        switch (this.defaultProvider) {
                            case "tnyx":
                                this.selectedCountry = "shared", this.selectedNumber = {}, this.gotoSplashFive();
                                break;
                            case "msgm":
                                this.stepOneActive = !1, this.stepTwoActive = !0, this.noNumbersFound = !1, this.$set(this, "stepTwoAnimate", !0);
                                break;
                            default:
                                this.selectedCountry = "shared", this.selectedNumber = {}, this.gotoSplashFive();
                                break
                        }
                    },
                    toggleCountrySelection: function(e) {
                        this.selectedCountry === e ? this.selectedCountry = "" : this.selectedCountry = e
                    },
                    selectCountry: function() {
                        "shared" === this.selectedCountry ? (this.selectedNumber = {}, this.gotoSplashFive()) : this.gotoSplashThree(this.selectedCountry)
                    },
                    gotoSplashTwo: function() {
                        var e = this;
                        this.stepThreeActive = !1, this.stepThreeAnimate = !1, setTimeout((function() {
                            e.$set(e, "stepTwoAnimate", !0), e.stepTwoActive = !0, e.updatePageContentClass()
                        }), 10)
                    },
                    gotoSplashThree: function(e) {
                        var t = this;
                        e && (this.stepTwoAnimate = !1, setTimeout((function() {
                            t.gettingNumbers = !0, t.stepTwoActive = !1, t.stepFourActive = !1, t.stepThreeActive = !0, t.waitingForNumbers = !0, t.selectableCountries.forEach((function(s) {
                                s.code === e ? (s.checked = "checked", t.country = s) : s.checked = ""
                            })), 0 === t.countryNumbers[e].length ? setTimeout(t.performSplashNumberSearch(), 50) : (t.numbers = t.countryNumbers[e], t.selectedNumber = t.numbers[0], setTimeout((function() {
                                t.gettingNumbers = !1, t.$refs.numberSearchBox.initSearchBox("Search for numbers containing..."), t.$set(t, "stepThreeAnimate", !0), t.waitingForNumbers = !1
                            }), 100))
                        }), 300))
                    },
                    gotoSplashFour: function() {
                        var e = this;
                        this.stepThreeActive = !1, this.stepThreeAnimate = !1, this.stepFourActive = !0, setTimeout((function() {
                            e.$set(e, "stepFourAnimate", !0)
                        }), 100)
                    },
                    gotoSplashFive: function() {
                        var e = this;
                        this.stepOneActive = !1, this.stepTwoActive = !1, this.stepThreeActive = !1, this.stepFourActive = !1, this.stepFourAnimate = !1, this.stepFiveActive = !0, this.$eventBus.$emit(l.CREATE_ACCOUNT, this.selectedNumber, this.label), setTimeout((function() {
                            e.$set(e, "stepFiveAnimate", !0)
                        }), 100)
                    },
                    isSplashVisible: function() {
                        var e = document.querySelector(".splash-process-container");
                        return e && "none" !== e.style.display
                    },
                    performSplashNumberSearch: function() {
                        this.searchActive = !0, this.getNumbersForSplash(this.country.code)
                    },
                    getNumbersForSplash: function(e) {
                        var t = this,
                            s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = !0;
                        this.gettingNumbers = !s, this.noNumbersFound = !1, this.gettingCountryNumbers[e] = !0;
                        var n = "";
                        if (!s) {
                            var a = "",
                                r = this.$refs.numberSearchBox;
                            r && "function" === typeof r.getMainSearch && (a = r.getMainSearch()), a.startsWith("+") && this.selectableCountries.forEach((function(e) {
                                a.startsWith(e.dialCode) && (t.country = e)
                            })), n = a
                        }
                        var o = {
                            matching: n,
                            country: e,
                            pagesize: this.pagesize
                        };
                        this.mixinAjax_get(this.requestPoint, "available-numbers", o, (function(s) {
                            t.countryNumbers[e] = s.responseJSON.results.numbers, t.gettingCountryNumbers[e] = !1, t.searchActive = !1, t.country.code === e && (t.numbers = t.countryNumbers[e], 0 == t.numbers.length ? (t.selectedNumber = {}, t.numbers = [], t.noNumbersFound = !0) : t.selectedNumber = t.numbers[0], t.gettingNumbers = !1, t.$refs.numberSearchBox.initSearchBox("Search for numbers containing..."))
                        }), (function(s) {
                            t.selectedNumber = {}, t.numbers = [], HTML.handleError(s.responseJSON), t.gettingNumbers = !1, t.gettingCountryNumbers[e] = !1, t.searchActive = !1
                        }), i)
                    },
                    getDisplayPhone: function(e) {
                        var t = x.a.PhoneNumberUtil.getInstance(),
                            s = x.a.PhoneNumberFormat,
                            i = t.parse(e);
                        return t.format(i, s.INTERNATIONAL)
                    },
                    selectNumber: function(e) {
                        this.selectedNumber = e
                    },
                    isNumberChecked: function(e) {
                        return this.selectedNumber.id && e == this.selectedNumber.id
                    },
                    isCountryChecked: function(e) {
                        return e == this.country.code
                    },
                    checkClosed: function(e) {
                        "InfoSplash" == e && this.$eventBus.$emit("mixin-search-trigger")
                    },
                    isEnterTyped: function(e) {
                        return 13 == e.keyCode && this.stepFourActive && this.gotoSplashFive(), !1
                    },
                    getNumberCost: function(e) {
                        if ("shared" === e) return "Free";
                        var t = this.dedicatedNumberCosts[e] * this.userData.plan_duration,
                            s = "month";
                        return 3 === this.userData.plan_duration ? s = "quarter" : 12 === this.userData.plan_duration && (s = "year"), "$" + t + "/" + s
                    },
                    updatePageContentClass: function() {
                        var e = document.querySelector(".page-content");
                        e && (this.isMasterAccount && !this.stepTwoActive ? e.classList.add("has-master-notice") : e.classList.remove("has-master-notice"), this.notChargebee ? e.classList.add("has-payment-notice") : e.classList.remove("has-payment-notice"))
                    },
                    observeSplashVisibility: function() {
                        var e = this,
                            t = document.querySelectorAll(".splash-process-container"),
                            s = document.querySelector(".page-content");
                        if (s && 0 !== t.length) {
                            var i = function() {
                                var e = Array.from(t).some((function(e) {
                                    return "none" !== getComputedStyle(e).display
                                }));
                                e ? s.classList.add("splash-active") : s.classList.remove("splash-active")
                            };
                            i(), this._splashObservers = [], t.forEach((function(t) {
                                var s = new MutationObserver(i);
                                s.observe(t, {
                                    attributes: !0,
                                    attributeFilter: ["style"]
                                }), e._splashObservers.push(s)
                            }))
                        }
                    }
                },
                watch: {
                    isMasterAccount: "updatePageContentClass",
                    notChargebee: "updatePageContentClass",
                    gettingNumbers: function(e) {
                        !e && this.waitingForNumbers && (this.$set(this, "stepThreeAnimate", !0), this.waitingForNumbers = !1)
                    }
                }
            },
            $ = F,
            q = (s("88a1"), Object(M["a"])($, A, C, !1, null, null, null)),
            z = q.exports,
            V = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "splash-process-container"
                }, [t("transition", {
                    attrs: {
                        name: "sms-splash-main"
                    }
                }, [t("div", {
                    staticClass: "info-splash is-visible sms-splash-step-1"
                }, [t("figure", [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/splash-sms.png",
                        width: "268",
                        alt: "SMTP2GO SMS"
                    }
                })]), t("h2", [e._v("Send SMS messages.")]), e.hidePaymentSplash ? e._e() : t("p", {
                    staticClass: "lead-in"
                }, [e._v("This feature is available to "), t("a", {
                    attrs: {
                        href: "/account/changeplan/"
                    }
                }, [e._v("paid accounts.")])]), e.hidePaymentSplash ? e._e() : t("p", {
                    staticClass: "lead-in"
                }, [t("a", {
                    staticClass: "btn green",
                    attrs: {
                        href: "/account/changeplan/"
                    }
                }, [e._v("Click here to upgrade your plan")])]), e.hidePaymentSplash ? t("p", {
                    staticClass: "lead-in"
                }, [e._v("Attention: There appears to be unusual activity or an unusually high number of bounces or spam complaints generated\n        from the emails being sent through your account. As a precautionary measure we have had to suspend the account and notify you\n        so that you can make sure you are following the "), t("a", {
                    attrs: {
                        href: "http://www.smtp2go.com/terms",
                        target: "_BLANK"
                    }
                }, [e._v("terms of service")]), e._v(",\n        especially the provision that prohibits the sending of any unsolicited emails.\n        "), t("br"), t("br"), e._v("\n        If you feel that this message is in error, please "), t("a", {
                    attrs: {
                        href: "http://www.smtp2go.com/contact",
                        target: "_BLANK"
                    }
                }, [e._v("contact us")]), e._v(" as soon as possible.\n      ")]) : e._e()])])], 1)
            },
            Q = [],
            W = {
                name: "UpgradeSplash",
                props: {
                    hidePaymentSplash: Boolean
                }
            },
            J = W,
            Y = Object(M["a"])(J, V, Q, !1, null, null, null),
            K = Y.exports,
            X = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "splash-process-container"
                }, [t("transition", {
                    attrs: {
                        name: "sms-splash-main"
                    }
                }, [t("div", {
                    staticClass: "info-splash is-visible sms-splash-step-1"
                }, [t("figure", [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/splash-sms.png",
                        width: "268",
                        alt: "SMTP2GO SMS"
                    }
                })]), t("h2", [e._v("Send SMS messages.")]), t("p", {
                    staticClass: "lead-in"
                }, [e._v("SMS Messaging is not currently enabled for your account.")]), t("p", {
                    staticClass: "lead-in"
                }, [e._v("Contact your account's administrator to request this to be enabled (this involves additional charges).")])])])], 1)
            },
            Z = [],
            ee = {
                name: "SubaccountSplash"
            },
            te = ee,
            se = Object(M["a"])(te, X, Z, !1, null, null, null),
            ie = se.exports,
            ne = function() {
                var e = this,
                    t = e._self._c;
                return t("SMSSettingsPageTab", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showSettings,
                        expression: "showSettings"
                    }],
                    ref: "sms_settings_section",
                    attrs: {
                        context: e.context,
                        userData: e.apMetadata.user_data,
                        apMetadata: e.apMetadata,
                        clientTimezone: e.clientTimezone
                    }
                })
            },
            ae = [],
            re = (s("0d6d"), Object.freeze({
                CREATE_ACCOUNT: "create-account",
                SWITCH_CONTEXT: "switch-context",
                CLEAR_POLLING: "clear-polling",
                GO_BACK: "go-back",
                LOAD_AVAILABLE_NUMBERS: "load-available-numbers",
                AVAILABLE_LOADING_DONE: "available-loading-done",
                SET_SHOW_BAR_NOTICE: "set-show-bar-notice",
                CLOSE_ALL_FILTER: "close-all-filter",
                SMSTBOX_RESEND_CLICKED: "sms-toolbox-resend",
                SMSTBOX_FORWARD_CLICKED: "sms-toolbox-forward",
                SHOW_VERIFICATION_FORM: "show-verification-form",
                SHOW_SENDER_ID_FORM: "show-sender-id-form",
                VERIFICATION_SUBMITTED: "verification-submitted",
                HIDE_USA_BANNER: "hide-usa-banner",
                SENDER_ID_SUBMITTED: "sender-id-submitted",
                RESET_SENDERID_FORM: "reset-senderid-form"
            })),
            oe = re,
            ce = (s("6762"), s("2fdb"), s("7f7f"), function() {
                var e = this,
                    t = e._self._c;
                return t("section", {
                    staticClass: "section-datatable sms-datatable-tabs tabs-settings"
                }, [t("div", {
                    staticClass: "table-panel panel-no-header",
                    class: {
                        "is-hidden": !e.allSettingsInitialised
                    }
                }, [t("div", {
                    staticClass: "card--tab-list"
                }, [t("div", {
                    staticClass: "sms-tabs tablist-container"
                }, [t("button", {
                    staticClass: "tab",
                    class: {
                        "is-active": "general" === e.activeTab
                    },
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_SETTINGS)
                        }
                    }
                }, [e._v("General Settings")]), t("button", {
                    staticClass: "tab",
                    class: {
                        "is-active": "dedicated" === e.activeTab
                    },
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_NUMBERS)
                        }
                    }
                }, [e._v("Dedicated Numbers")]), e.isTelnyxAccount ? t("button", {
                    staticClass: "tab",
                    class: {
                        "is-active": "senderids" === e.activeTab
                    },
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_SENDERIDS)
                        }
                    }
                }, [e._v("Sender IDs")]) : e._e(), e.prepayActive || e.prepayTransitionStage > 0 ? t("button", {
                    staticClass: "tab",
                    class: [{
                        "is-active": "recharge" === e.activeTab
                    }, {
                        "has-alert-icon": e.showAlertIcon
                    }],
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_RECHARGE)
                        }
                    }
                }, [e._v("\n          Auto-Recharge\n        ")]) : e._e(), e.prepayActive || e.manualTransitionTopup ? t("button", {
                    staticClass: "tab",
                    class: {
                        "is-active": "topup" === e.activeTab
                    },
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_TOPUP)
                        }
                    }
                }, [e._v("Top Up")]) : e._e(), t("button", {
                    staticClass: "tab",
                    class: {
                        "is-active": "email2sms" === e.activeTab
                    },
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_EMAIL2SMS)
                        }
                    }
                }, [e._v("Email to SMS")])]), e.prepayActive ? t("p", {
                    class: ["prepaid-active top-grouped-message", {
                        "is-highlighted": e.prepayBalance < 10
                    }, {
                        "is-inactive": "topup" === e.activeTab
                    }],
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_TOPUP)
                        }
                    }
                }, [t("svg", {
                    staticClass: "regular",
                    attrs: {
                        width: "15",
                        height: "16",
                        viewBox: "0 0 15 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [t("path", {
                    attrs: {
                        d: "M13.3906 11.625V13.4375C13.3906 13.6779 13.2951 13.9084 13.1252 14.0783C12.9552 14.2483 12.7247 14.3438 12.4844 14.3438H2.0625C1.70197 14.3438 1.35621 14.2005 1.10128 13.9456C0.846344 13.6907 0.703125 13.3449 0.703125 12.9844V3.01563C0.703125 2.6551 0.846344 2.30933 1.10128 2.0544C1.35621 1.79947 1.70197 1.65625 2.0625 1.65625H11.5781C11.8185 1.65625 12.049 1.75173 12.2189 1.92168C12.3889 2.09164 12.4844 2.32215 12.4844 2.5625V3.92188",
                        stroke: "#818DA0",
                        "stroke-width": "1.25",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), t("path", {
                    attrs: {
                        d: "M13.3906 11.625C13.631 11.625 13.8615 11.5295 14.0314 11.3596C14.2014 11.1896 14.2969 10.9591 14.2969 10.7188V8C14.2969 7.75965 14.2014 7.52914 14.0314 7.35918C13.8615 7.18923 13.631 7.09375 13.3906 7.09375H11.125C10.5241 7.09375 9.94785 7.33245 9.52296 7.75734C9.09807 8.18222 8.85938 8.75849 8.85938 9.35938C8.85938 9.96026 9.09807 10.5365 9.52296 10.9614C9.94785 11.3863 10.5241 11.625 11.125 11.625H13.3906Z",
                        stroke: "#818DA0",
                        "stroke-width": "1.25",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), t("path", {
                    attrs: {
                        d: "M11.125 8.64062C11.2672 8.64062 11.4061 8.68278 11.5243 8.76176C11.6425 8.84073 11.7346 8.95299 11.789 9.08432C11.8434 9.21566 11.8577 9.36017 11.8299 9.4996C11.8022 9.63902 11.7338 9.76709 11.6332 9.86761C11.5327 9.96813 11.4046 10.0366 11.2652 10.0643C11.1258 10.092 10.9813 10.0778 10.8499 10.0234C10.7186 9.96901 10.6064 9.87689 10.5274 9.75869C10.4484 9.64049 10.4062 9.50153 10.4062 9.35938C10.4062 9.16875 10.482 8.98593 10.6168 8.85114C10.7516 8.71635 10.9344 8.64062 11.125 8.64062Z",
                        fill: "#818DA0"
                    }
                }), t("path", {
                    attrs: {
                        d: "M13.3902 7.09375V4.82813C13.3902 4.58778 13.2947 4.35727 13.1247 4.18731C12.9548 4.01736 12.7243 3.92188 12.4839 3.92188H3.64798C3.45127 3.93113 3.25587 3.88545 3.08365 3.78995C2.91143 3.69445 2.76919 3.5529 2.67285 3.38115",
                        stroke: "#818DA0",
                        "stroke-width": "1.25",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })]), t("svg", {
                    staticClass: "highlighted",
                    attrs: {
                        width: "15",
                        height: "16",
                        viewBox: "0 0 15 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [t("path", {
                    attrs: {
                        d: "M13.3906 11.625V13.4375C13.3906 13.6779 13.2951 13.9084 13.1252 14.0783C12.9552 14.2483 12.7247 14.3438 12.4844 14.3438H2.0625C1.70197 14.3438 1.35621 14.2005 1.10128 13.9456C0.846344 13.6907 0.703125 13.3449 0.703125 12.9844V3.01563C0.703125 2.6551 0.846344 2.30933 1.10128 2.0544C1.35621 1.79947 1.70197 1.65625 2.0625 1.65625H11.5781C11.8185 1.65625 12.049 1.75173 12.2189 1.92168C12.3889 2.09164 12.4844 2.32215 12.4844 2.5625V3.92188",
                        stroke: "#B87163",
                        "stroke-width": "1.25",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), t("path", {
                    attrs: {
                        d: "M13.3906 11.625C13.631 11.625 13.8615 11.5295 14.0314 11.3596C14.2014 11.1896 14.2969 10.9591 14.2969 10.7188V8C14.2969 7.75965 14.2014 7.52914 14.0314 7.35918C13.8615 7.18923 13.631 7.09375 13.3906 7.09375H11.125C10.5241 7.09375 9.94785 7.33245 9.52296 7.75734C9.09807 8.18222 8.85938 8.75849 8.85938 9.35938C8.85938 9.96026 9.09807 10.5365 9.52296 10.9614C9.94785 11.3863 10.5241 11.625 11.125 11.625H13.3906Z",
                        stroke: "#B87163",
                        "stroke-width": "1.25",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), t("path", {
                    attrs: {
                        d: "M11.125 8.64062C11.2672 8.64062 11.4061 8.68278 11.5243 8.76176C11.6425 8.84073 11.7346 8.95299 11.789 9.08432C11.8434 9.21566 11.8577 9.36017 11.8299 9.4996C11.8022 9.63902 11.7338 9.76709 11.6332 9.86761C11.5327 9.96813 11.4046 10.0366 11.2652 10.0643C11.1258 10.092 10.9813 10.0778 10.8499 10.0234C10.7186 9.96901 10.6064 9.87689 10.5274 9.75869C10.4484 9.64049 10.4062 9.50153 10.4062 9.35938C10.4062 9.16875 10.482 8.98593 10.6168 8.85114C10.7516 8.71635 10.9344 8.64062 11.125 8.64062Z",
                        fill: "#B87163"
                    }
                }), t("path", {
                    attrs: {
                        d: "M13.3902 7.09375V4.82813C13.3902 4.58778 13.2947 4.35727 13.1247 4.18731C12.9548 4.01736 12.7243 3.92188 12.4839 3.92188H3.64798C3.45127 3.93113 3.25587 3.88545 3.08365 3.78995C2.91143 3.69445 2.76919 3.5529 2.67285 3.38115",
                        stroke: "#B87163",
                        "stroke-width": "1.25",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })]), e._v("\n        Balance: $" + e._s(e.prepayBalanceDisplay) + "\n      ")]) : e._e()]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "general" === e.activeTab,
                        expression: "activeTab === 'general'"
                    }],
                    staticClass: "tab-content"
                }, [t("div", {
                    staticClass: "content-row content-row-push"
                }, [t("h4", {
                    staticClass: "row-title push-adjust"
                }, [e._v("Message size limit")]), t("div", {
                    staticClass: "text-content"
                }, [t("div", {
                    staticClass: "form-select-wrapper"
                }, [t("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.slider,
                        expression: "slider"
                    }],
                    staticClass: "form-control input-md",
                    on: {
                        change: function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            }));
                            e.slider = t.target.multiple ? s : s[0]
                        }
                    }
                }, e._l(e.sliderValues, (function(s) {
                    return t("option", {
                        key: s.value,
                        domProps: {
                            value: s.value
                        }
                    }, [e._v("\n                " + e._s(s.value) + " " + e._s(s.label) + "\n              ")])
                })), 0)]), t("p", {
                    staticClass: "field-info"
                }, [e._v("Select a size limit for each of your messages.")])])]), t("div", {
                    staticClass: "content-row content-row-push"
                }, [t("h4", {
                    staticClass: "row-title push-adjust"
                }, [e._v("Message truncation")]), t("div", {
                    staticClass: "text-content"
                }, [t("label", {
                    staticClass: "inline-checkbox",
                    class: [e.oversizeMessageTruncation ? "is-open" : "is-closed"],
                    on: {
                        click: e.toggleoversizeMessageTruncation
                    }
                }), e._m(0)])]), t("div", {
                    staticClass: "content-row content-row-push",
                    attrs: {
                        id: "forward-replies"
                    }
                }, [t("h4", {
                    staticClass: "row-title push-adjust"
                }, [e._v("Forward replies")]), t("div", {
                    staticClass: "text-content"
                }, [t("div", {
                    staticClass: "input-wrapper"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.forwardingAddress,
                        expression: "forwardingAddress"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        placeholder: "email@company.com",
                        type: "text",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.forwardingAddress
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.forwardingAddress = t.target.value)
                        }
                    }
                })]), e._m(1)])]), t("div", {
                    staticClass: "content-row content-row-push"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Default sender number")]), t("div", {
                    staticClass: "text-content"
                }, [t("div", {
                    staticClass: "form-select-wrapper"
                }, [t("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.defaultNumber,
                        expression: "defaultNumber"
                    }],
                    staticClass: "form-control input-md",
                    on: {
                        change: function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            }));
                            e.defaultNumber = t.target.multiple ? s : s[0]
                        }
                    }
                }, [e.numbersInitialised ? t("option", {
                    attrs: {
                        value: "shared"
                    }
                }, [e._v("\n                Use Shared Numbers Pool\n              ")]) : e._e(), e._l(e.numbers, (function(s) {
                    return t("option", {
                        key: s.number.id,
                        domProps: {
                            value: s.number.phone_number
                        }
                    }, [e._v("\n                " + e._s(s.display.country) + " " + e._s(s.display.full) + "\n              ")])
                })), e._l(e.alphaSenders, (function(s) {
                    return t("option", {
                        key: s.id + "-" + s.country,
                        domProps: {
                            value: s.id + " (Alphanumeric sender for " + s.country + ")"
                        }
                    }, [e._v("\n                " + e._s(s.id + " (Alphanumeric sender for " + s.country + ")") + "\n              ")])
                })), e.gettingNumbers || e.gettingAlpha ? t("option", {
                    attrs: {
                        disabled: ""
                    }
                }, [e._v("\n                Loading Numbers ...\n              ")]) : e._e()], 2)]), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n            This number is displayed as the sender on your recipient's\n            handset.\n          ")]), t("p", {
                    staticClass: "no-margin"
                }, [e._v("\n            If the recipient's country is different to your dedicated number's\n            country, a shared number in the recipient's country will be used\n            for sending.\n          ")])])]), t("div", {
                    staticClass: "content-row content-row-push"
                }, [t("h4", {
                    staticClass: "row-title push-adjust"
                }, [e._v("Socially aware sending")]), t("div", {
                    staticClass: "text-content"
                }, [t("label", {
                    staticClass: "inline-checkbox",
                    class: [e.socialSending ? "is-open" : "is-closed"],
                    on: {
                        click: e.toggleSocialSending
                    }
                }), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n            Select your sending hours. Messages sent outside these hours will\n            be held until social hours.\n          ")]), t("div", {
                    staticClass: "content-block-time",
                    class: [{
                        "is-active": e.socialSending
                    }]
                }, [t("label", {
                    attrs: {
                        for: "start"
                    }
                }, [e._v("Start time")]), t("label", {
                    attrs: {
                        for: "end"
                    }
                }, [e._v("End time")]), t("label", {
                    attrs: {
                        for: "zone"
                    }
                }, [e._v("Time zone")]), t("div", {
                    staticClass: "form-select-wrapper"
                }, [t("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.startTime,
                        expression: "startTime"
                    }],
                    staticClass: "input-time",
                    attrs: {
                        id: "start",
                        name: "start"
                    },
                    on: {
                        change: [function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            }));
                            e.startTime = t.target.multiple ? s : s[0]
                        }, function(t) {
                            return e.startChanged()
                        }]
                    }
                }, [t("option", {
                    attrs: {
                        value: "00:00"
                    }
                }, [e._v("12:00 am")]), t("option", {
                    attrs: {
                        value: "01:00"
                    }
                }, [e._v("1:00 am")]), t("option", {
                    attrs: {
                        value: "02:00"
                    }
                }, [e._v("2:00 am")]), t("option", {
                    attrs: {
                        value: "03:00"
                    }
                }, [e._v("3:00 am")]), t("option", {
                    attrs: {
                        value: "04:00"
                    }
                }, [e._v("4:00 am")]), t("option", {
                    attrs: {
                        value: "05:00"
                    }
                }, [e._v("5:00 am")]), t("option", {
                    attrs: {
                        value: "06:00"
                    }
                }, [e._v("6:00 am")]), t("option", {
                    attrs: {
                        value: "07:00"
                    }
                }, [e._v("7:00 am")]), t("option", {
                    attrs: {
                        value: "08:00"
                    }
                }, [e._v("8:00 am")]), t("option", {
                    attrs: {
                        value: "09:00"
                    }
                }, [e._v("9:00 am")]), t("option", {
                    attrs: {
                        value: "10:00"
                    }
                }, [e._v("10:00 am")]), t("option", {
                    attrs: {
                        value: "11:00"
                    }
                }, [e._v("11:00 am")]), t("option", {
                    attrs: {
                        value: "12:00"
                    }
                }, [e._v("12:00 pm")]), t("option", {
                    attrs: {
                        value: "13:00"
                    }
                }, [e._v("1:00 pm")]), t("option", {
                    attrs: {
                        value: "14:00"
                    }
                }, [e._v("2:00 pm")]), t("option", {
                    attrs: {
                        value: "15:00"
                    }
                }, [e._v("3:00 pm")]), t("option", {
                    attrs: {
                        value: "16:00"
                    }
                }, [e._v("4:00 pm")]), t("option", {
                    attrs: {
                        value: "17:00"
                    }
                }, [e._v("5:00 pm")]), t("option", {
                    attrs: {
                        value: "18:00"
                    }
                }, [e._v("6:00 pm")]), t("option", {
                    attrs: {
                        value: "19:00"
                    }
                }, [e._v("7:00 pm")]), t("option", {
                    attrs: {
                        value: "20:00"
                    }
                }, [e._v("8:00 pm")]), t("option", {
                    attrs: {
                        value: "21:00"
                    }
                }, [e._v("9:00 pm")]), t("option", {
                    attrs: {
                        value: "22:00"
                    }
                }, [e._v("10:00 pm")]), t("option", {
                    attrs: {
                        value: "23:00"
                    }
                }, [e._v("11:00 pm")])])]), t("div", {
                    staticClass: "form-select-wrapper"
                }, [t("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.endTime,
                        expression: "endTime"
                    }],
                    staticClass: "input-time",
                    attrs: {
                        id: "end",
                        name: "end"
                    },
                    on: {
                        change: [function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            }));
                            e.endTime = t.target.multiple ? s : s[0]
                        }, function(t) {
                            return e.endChanged()
                        }]
                    }
                }, [t("option", {
                    attrs: {
                        value: "00:00"
                    }
                }, [e._v("12:00 am")]), t("option", {
                    attrs: {
                        value: "01:00"
                    }
                }, [e._v("1:00 am")]), t("option", {
                    attrs: {
                        value: "02:00"
                    }
                }, [e._v("2:00 am")]), t("option", {
                    attrs: {
                        value: "03:00"
                    }
                }, [e._v("3:00 am")]), t("option", {
                    attrs: {
                        value: "04:00"
                    }
                }, [e._v("4:00 am")]), t("option", {
                    attrs: {
                        value: "05:00"
                    }
                }, [e._v("5:00 am")]), t("option", {
                    attrs: {
                        value: "06:00"
                    }
                }, [e._v("6:00 am")]), t("option", {
                    attrs: {
                        value: "07:00"
                    }
                }, [e._v("7:00 am")]), t("option", {
                    attrs: {
                        value: "08:00"
                    }
                }, [e._v("8:00 am")]), t("option", {
                    attrs: {
                        value: "09:00"
                    }
                }, [e._v("9:00 am")]), t("option", {
                    attrs: {
                        value: "10:00"
                    }
                }, [e._v("10:00 am")]), t("option", {
                    attrs: {
                        value: "11:00"
                    }
                }, [e._v("11:00 am")]), t("option", {
                    attrs: {
                        value: "12:00"
                    }
                }, [e._v("12:00 pm")]), t("option", {
                    attrs: {
                        value: "13:00"
                    }
                }, [e._v("1:00 pm")]), t("option", {
                    attrs: {
                        value: "14:00"
                    }
                }, [e._v("2:00 pm")]), t("option", {
                    attrs: {
                        value: "15:00"
                    }
                }, [e._v("3:00 pm")]), t("option", {
                    attrs: {
                        value: "16:00"
                    }
                }, [e._v("4:00 pm")]), t("option", {
                    attrs: {
                        value: "17:00"
                    }
                }, [e._v("5:00 pm")]), t("option", {
                    attrs: {
                        value: "18:00"
                    }
                }, [e._v("6:00 pm")]), t("option", {
                    attrs: {
                        value: "19:00"
                    }
                }, [e._v("7:00 pm")]), t("option", {
                    attrs: {
                        value: "20:00"
                    }
                }, [e._v("8:00 pm")]), t("option", {
                    attrs: {
                        value: "21:00"
                    }
                }, [e._v("9:00 pm")]), t("option", {
                    attrs: {
                        value: "22:00"
                    }
                }, [e._v("10:00 pm")]), t("option", {
                    attrs: {
                        value: "23:00"
                    }
                }, [e._v("11:00 pm")])])]), t("div", {
                    staticClass: "form-select-wrapper"
                }, [t("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.timeZone,
                        expression: "timeZone"
                    }],
                    staticClass: "input-time",
                    attrs: {
                        id: "zone"
                    },
                    on: {
                        change: function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            }));
                            e.timeZone = t.target.multiple ? s : s[0]
                        }
                    }
                }, [t("option", {
                    attrs: {
                        selected: "default",
                        disabled: "disabled"
                    }
                }, [e._v("\n                  Pick the time zone\n                ")]), e._l(e.zones[0], (function(s) {
                    return t("option", {
                        key: s.id,
                        domProps: {
                            value: {
                                id: s.id,
                                text: s.name
                            }
                        }
                    }, [e._v("\n                  " + e._s(s.name) + "\n                ")])
                })), e._l(e.zones[1], (function(s) {
                    return t("option", {
                        key: s.id,
                        domProps: {
                            value: {
                                id: s.id,
                                text: s.name
                            }
                        }
                    }, [e._v("\n                  " + e._s(s.name) + "\n                ")])
                })), e._l(e.zones[2], (function(s) {
                    return t("option", {
                        key: s.id,
                        domProps: {
                            value: {
                                id: s.id,
                                text: s.name
                            }
                        }
                    }, [e._v("\n                  " + e._s(s.name) + "\n                ")])
                })), e._l(e.zones[3], (function(s) {
                    return t("option", {
                        key: s.id,
                        domProps: {
                            value: {
                                id: s.id,
                                text: s.name
                            }
                        }
                    }, [e._v("\n                  " + e._s(s.name) + "\n                ")])
                })), e._l(e.zones[4], (function(s) {
                    return t("option", {
                        key: s.id,
                        domProps: {
                            value: {
                                id: s.id,
                                text: s.name
                            }
                        }
                    }, [e._v("\n                  " + e._s(s.name) + "\n                ")])
                }))], 2)])])])]), t("div", {
                    staticClass: "content-row content-row-push"
                }, [t("h4", {
                    staticClass: "row-title push-adjust"
                }, [e._v("Smart encoding")]), t("div", {
                    staticClass: "text-content"
                }, [t("label", {
                    staticClass: "inline-checkbox",
                    class: [e.smartEncoding ? "is-open" : "is-closed"],
                    on: {
                        click: e.toggleSmartEncoding
                    }
                }), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n            Replace any Unicode characters with their GSM equivalent. This\n            reduces the number of units that need to be used per message,\n            saving you money.\n          ")])])])]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "dedicated" === e.activeTab,
                        expression: "activeTab === 'dedicated'"
                    }],
                    staticClass: "tab-content content-full"
                }, [t("div", {
                    staticClass: "table-info"
                }, [t("p", [e._v("\n          A dedicated number allows you to send from, and receive into, the\n          same number. A recipient can save the number in their phone and know\n          future messages are from you.\n          "), t("br"), e._v("You currently have\n          "), t("strong", [e._v(e._s(e.numbersText) + " dedicated number"), 1 != e.numbers.length ? t("span", [e._v("s")]) : e._e(), e._v(".")])])]), t("SMSNumbers", {
                    attrs: {
                        userData: e.userData,
                        apMetadata: e.apMetadata,
                        clientTimezone: e.clientTimezone
                    }
                })], 1), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "senderids" === e.activeTab,
                        expression: "activeTab === 'senderids'"
                    }],
                    staticClass: "tab-content content-full splash-senderids"
                }, [e.hasID ? t("div", {
                    staticClass: "table-container-content"
                }, [t("div", [t("table", {
                    staticClass: "data-table"
                }, [e._m(2), t("tbody", e._l(e.senderIDTableRows, (function(s) {
                    return t("tr", {
                        key: s.country
                    }, [t("td", [t("span", {
                        class: e.flagClass(s.country)
                    }), e._v(e._s(" " + s.country))]), t("td", [e._v(e._s(s.requested_sender_id))]), t("td", [t("span", {
                        staticClass: "long-event-indicator",
                        class: {
                            "indicator-pending": "Pending" === s.status,
                            "indicator-active": "Active" === s.status
                        }
                    }, [e._v(e._s(s.status))])]), t("td", {
                        staticClass: "table-action"
                    }, [t("div", {
                        staticClass: "drop-content is-active row-delete-popup"
                    }, [t("a", {
                        staticClass: "table-remove-toggler row-remove-toggler",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.deletePopupClick.apply(null, arguments)
                            }
                        }
                    }, [e._v("Ã—")]), t("ul", {
                        staticClass: "dropdown-menu dropdown-options"
                    }, [t("li", [t("span", {
                        staticClass: "tooltip-confirm-title"
                    }, [e._v("Confirm remove?")]), t("a", {
                        staticClass: "table-remove confirm",
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(t) {
                                return e.removeAlphaSender(s.country)
                            }
                        }
                    }, [t("span", [e._v("Remove")])]), t("a", {
                        staticClass: "table-remove-cancel",
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.closeDeletePopUpClick.apply(null, arguments)
                            }
                        }
                    }, [e._v("Cancel")])])])])])])
                })), 0)])]), t("div", {
                    staticClass: "table-footer"
                }, [t("button", {
                    staticClass: "btn blue",
                    on: {
                        click: function(t) {
                            return e.openTypeform()
                        }
                    }
                }, [e._v("\n            Apply for a Sender ID\n            "), t("span", {
                    staticClass: "loader-spinner",
                    attrs: {
                        "data-v-67932745": ""
                    }
                })])])]) : t("div", {
                    staticClass: "splash-inline"
                }, [e._m(3), t("h2", [e._v("\n          Register an Alphanumeric Sender ID\n        ")]), t("p", {
                    staticClass: "block-info"
                }, [e._v("Sending to countries outside the USA/Canada typically requires registering an Alphanumeric Sender ID in each country. This acts as your branded sender name, replacing the usual phone number on outgoing messages.")]), t("button", {
                    staticClass: "btn blue",
                    on: {
                        click: function(t) {
                            return e.openTypeform()
                        }
                    }
                }, [e._v("\n          Apply for a Sender ID\n          "), t("span", {
                    staticClass: "loader-spinner"
                })]), e._m(4)])]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "recharge" === e.activeTab,
                        expression: "activeTab === 'recharge'"
                    }],
                    staticClass: "tab-content content-form splash-topup"
                }, [e.showPrepaidTransitionSplash && e.notChargebee ? t("div", {
                    staticClass: "splash-inline"
                }, [t("figure", [t("TopupSplashImage")], 1), t("h2", [e._v("Switch to prepaid SMS messaging")]), e._m(5), e._m(6), e._m(7)]) : e.showPrepaidTransitionSplash ? t("div", {
                    staticClass: "splash-inline"
                }, [t("figure", [t("TopupSplashImage")], 1), t("h2", [e._v("Switch to prepaid SMS messaging")]), t("p", {
                    staticClass: "block-info"
                }, [t("span", {
                    staticClass: "block-inline"
                }, [e._v("We are transitioning your account to be prepaid for SMS messaging. This will mean that for your SMS sending, your account will pay in advance.\n          ")]), t("span", {
                    staticClass: "block-inline"
                }, [e._v("\n          To set this up, please click the button below, then enter your desired auto-recharge settings. Once these have been entered and saved, we will switch your account to the new prepaid system.\n          ")]), t("br"), t("button", {
                    staticClass: "btn blue",
                    on: {
                        click: function(t) {
                            e.autoRecharge = !0, e.showPrepaidTransitionSplash = !1
                        }
                    }
                }, [e._v("Sounds good, continue")])])]) : 1 == e.prepayTransitionStage && e.validPaymentMethod ? t("div", {
                    staticClass: "auto-recharge-block"
                }, [t("figure", [t("TopupSplashImage")], 1), t("h2", [e._v("Configure your auto-recharge settings")]), t("p", {
                    staticClass: "block-info"
                }, [e._v("When your balance reaches a certain level, you will be auto-recharged by an amount you specify, up to a daily maximum. Specify the amounts youâ€™d like to use in your account:")]), t("div", {
                    staticClass: "content-block"
                }, [t("div", {
                    staticClass: "content-row row-toggle tied-in is-open"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("When balance reaches")]), t("div", {
                    staticClass: "form-group-item item-split"
                }, [t("span", {
                    staticClass: "input-usd"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: e.rechargeThreshold,
                        expression: "rechargeThreshold",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "form-control input-small input-regular",
                    class: {
                        "is-disabled": !e.autoRecharge
                    },
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        disabled: !e.autoRecharge
                    },
                    domProps: {
                        value: e.rechargeThreshold
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.rechargeThreshold = e._n(t.target.value))
                        },
                        blur: function(t) {
                            return e.$forceUpdate()
                        }
                    }
                })]), t("span", {
                    staticClass: "field-info"
                }, [e._v("Enter an amount between $10 and $2,000.")])])]), t("div", {
                    staticClass: "content-row row-toggle is-open"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Add this to my balance")]), t("div", {
                    staticClass: "form-group-item item-split"
                }, [t("span", {
                    staticClass: "input-usd"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: e.rechargeAmount,
                        expression: "rechargeAmount",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "form-control input-small input-regular",
                    class: {
                        "is-disabled": !e.autoRecharge
                    },
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        disabled: !e.autoRecharge
                    },
                    domProps: {
                        value: e.rechargeAmount
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.rechargeAmount = e._n(t.target.value))
                        },
                        blur: function(t) {
                            return e.$forceUpdate()
                        }
                    }
                })]), t("span", {
                    staticClass: "field-info"
                }, [e._v("Enter an amount between $30 and $2,000.")])])]), t("div", {
                    staticClass: "content-row row-toggle is-open"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Daily auto-recharge limit")]), t("div", {
                    staticClass: "form-group-item item-split"
                }, [t("span", {
                    staticClass: "input-usd"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: e.rechargeLimit,
                        expression: "rechargeLimit",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "form-control input-small input-regular",
                    class: {
                        "is-disabled": !e.autoRecharge
                    },
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        disabled: !e.autoRecharge
                    },
                    domProps: {
                        value: e.rechargeLimit
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.rechargeLimit = e._n(t.target.value))
                        },
                        blur: function(t) {
                            return e.$forceUpdate()
                        }
                    }
                })]), t("span", {
                    staticClass: "field-info"
                }, [e._v("Enter an amount between $30 and $2,000.")])])]), t("div", {
                    staticClass: "content-block-footer"
                }, [t("button", {
                    staticClass: "btn blue",
                    class: e.updating ? "is-loading" : "",
                    attrs: {
                        role: "button",
                        type: "button",
                        disabled: e.updating
                    },
                    on: {
                        click: function(t) {
                            return e.updateSettings(e.activeTab)
                        }
                    }
                }, [e._v("\n              Continue\n              "), t("span", {
                    staticClass: "loader-spinner"
                })]), e._m(8)])]), t("span", {
                    staticClass: "content-note"
                }, [e._v("Alternatively, add a one-off "), t("button", {
                    staticClass: "button-link grey",
                    on: {
                        click: e.goToTopupTab
                    }
                }, [e._v("top up")]), e._v(" instead.")])]) : e.validPaymentMethod ? t("div", [t("div", {
                    staticClass: "content-row",
                    class: [e.autoRecharge ? "toggle-on" : "toggle-off"]
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Enable auto-recharge")]), t("div", {
                    staticClass: "form-group-item"
                }, [t("div", {
                    staticClass: "group-item-label"
                }, [t("label", {
                    staticClass: "inline-checkbox",
                    class: [e.autoRecharge ? "is-open" : "is-closed"],
                    on: {
                        click: e.toggleAutoRecharge
                    }
                })]), e._m(9)])]), t("div", [t("div", {
                    staticClass: "content-row row-toggle tied-in",
                    class: [e.autoRecharge ? "is-open" : "is-closed"]
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("When balance reaches")]), t("div", {
                    staticClass: "form-group-item item-split"
                }, [t("span", {
                    staticClass: "input-usd"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: e.rechargeThreshold,
                        expression: "rechargeThreshold",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "form-control input-small input-regular",
                    class: {
                        "is-disabled": !e.autoRecharge
                    },
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        disabled: !e.autoRecharge
                    },
                    domProps: {
                        value: e.rechargeThreshold
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.rechargeThreshold = e._n(t.target.value))
                        },
                        blur: function(t) {
                            return e.$forceUpdate()
                        }
                    }
                })]), t("span", {
                    staticClass: "field-info"
                }, [e._v("Enter an amount between $10 and $2,000.")])])]), t("div", {
                    staticClass: "content-row row-toggle",
                    class: [e.autoRecharge ? "is-open" : "is-closed"]
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Add this to my balance")]), t("div", {
                    staticClass: "form-group-item item-split"
                }, [t("span", {
                    staticClass: "input-usd"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: e.rechargeAmount,
                        expression: "rechargeAmount",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "form-control input-small input-regular",
                    class: {
                        "is-disabled": !e.autoRecharge
                    },
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        disabled: !e.autoRecharge
                    },
                    domProps: {
                        value: e.rechargeAmount
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.rechargeAmount = e._n(t.target.value))
                        },
                        blur: function(t) {
                            return e.$forceUpdate()
                        }
                    }
                })]), t("span", {
                    staticClass: "field-info"
                }, [e._v("Enter an amount between $30 and $2,000.")])])]), t("div", {
                    staticClass: "content-row row-toggle",
                    class: [e.autoRecharge ? "is-open" : "is-closed"]
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Daily auto-recharge limit")]), t("div", {
                    staticClass: "form-group-item item-split"
                }, [t("span", {
                    staticClass: "input-usd"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: e.rechargeLimit,
                        expression: "rechargeLimit",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "form-control input-small input-regular",
                    class: {
                        "is-disabled": !e.autoRecharge
                    },
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        disabled: !e.autoRecharge
                    },
                    domProps: {
                        value: e.rechargeLimit
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.rechargeLimit = e._n(t.target.value))
                        },
                        blur: function(t) {
                            return e.$forceUpdate()
                        }
                    }
                })]), t("span", {
                    staticClass: "field-info"
                }, [e._v("Enter an amount between $30 and $2,000.")])])])])]) : t("div", {
                    staticClass: "splash-inline splash-auto-topup"
                }, [e._m(10), t("h2", [e._v("Top up your account automatically")]), t("p", {
                    staticClass: "block-info"
                }, [e._v("\n          For uninterrupted SMS delivery, you can top up your account\n          automatically in addition to using the\n          "), t("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_TOPUP)
                        }
                    }
                }, [e._v("top up")]), e._v("\n          feature. Please update your payment method to a credit card, PayPal\n          or direct debit to use the auto-recharge feature.\n          "), t("br"), t("a", {
                    staticClass: "btn blue",
                    attrs: {
                        href: "/account/updatebilling"
                    }
                }, [e._v("Update payment method to unlock this feature")])])])]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "topup" === e.activeTab,
                        expression: "activeTab === 'topup'"
                    }],
                    staticClass: "tab-content content-full splash-topup"
                }, [1 == e.prepayTransitionStage && e.validPaymentMethod ? t("div", {
                    staticClass: "table-info"
                }, [e._m(11)]) : e._e(), e.validPaymentMethod ? t("div", {
                    staticClass: "container-topup"
                }, [t("h2", [e._v("\n          Your balance is\n          "), t("span", {
                    staticClass: "highlight"
                }, [e._v("$"), t("span", [e._v(e._s(e.prepayBalanceDisplay))])])]), t("p", {
                    staticClass: "block-info"
                }, [e._v("\n          You can top up your account below with a one-off payment."), t("br"), e._v(" For uninterrupted SMS delivery, you can also keep your balance topped up using the "), t("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_RECHARGE)
                        }
                    }
                }, [e._v("auto-recharge")]), e._v(" feature.\n        ")]), t("div", {
                    staticClass: "block-topup"
                }, [t("div", {
                    staticClass: "topup-customer-details"
                }, [
                    ["card", "paypal_express_checkout", "direct_debit"].includes(e.paymentMethod) ? t("span", {
                        staticClass: "details-label"
                    }, [e._v("Pay with")]) : e._e(), "card" == e.paymentMethod ? t("span", {
                        staticClass: "details-data"
                    }, [t("span", {
                        staticClass: "cc-list payment-card",
                        class: e.cardDetails.card_type
                    }), t("span", {
                        staticClass: "details-payment"
                    }, [t("span", {
                        staticClass: "details-data"
                    }, [e._v(e._s(e.getCardTypeDisplay(e.cardDetails.card_type)))]), t("span", {
                        staticClass: "card-number"
                    }, [e._v("â€¢â€¢â€¢â€¢" + e._s(e.cardDetails.last4))])])]) : "paypal_express_checkout" == e.paymentMethod ? t("span", {
                        staticClass: "details-data"
                    }, [t("span", {
                        staticClass: "cc-list payment-paypal card-type"
                    }), t("span", {
                        staticClass: "details-payment"
                    }, [t("span", {
                        staticClass: "details-data"
                    }, [e._v("PayPal:Â ")]), t("span", {
                        staticClass: "card-number"
                    }, [e._v(e._s(e.paypalEmail))])])]) : "direct_debit" == e.paymentMethod ? t("span", {
                        staticClass: "details-data"
                    }, [t("span", {
                        staticClass: "cc-list payment-direct-debit card-type"
                    }), e._m(12)]) : t("span", {
                        staticClass: "details-data"
                    }, [e._m(13)])
                ]), t("div", {
                    staticClass: "input-usd"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: e.topupAmount,
                        expression: "topupAmount",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "form-control input-small",
                    attrs: {
                        type: "number",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.topupAmount
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.topupAmount = e._n(t.target.value))
                        },
                        blur: function(t) {
                            return e.$forceUpdate()
                        }
                    }
                }), t("button", {
                    staticClass: "btn blue",
                    class: {
                        "is-loading": e.toppingUp
                    },
                    attrs: {
                        disabled: e.toppingUp
                    },
                    on: {
                        click: e.topupNow
                    }
                }, [e._v("\n              Top up now\n              "), t("span", {
                    staticClass: "loader-spinner"
                })])]), t("p", {
                    staticClass: "field-info"
                }, [e._v("Enter an amount between $5 and $2,000.")])])]) : t("div", {
                    staticClass: "splash-inline"
                }, [t("figure", [t("TopupSplashImage")], 1), t("h2", [e._v("Top up your account manually")]), t("p", {
                    staticClass: "block-info"
                }, [e._v("\n          For uninterrupted SMS delivery, you can top up your account manually\n          in addition to using the\n          "), t("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(t) {
                            return e.switchContext(e.contexts.TAB_RECHARGE)
                        }
                    }
                }, [e._v("auto-recharge")]), e._v("\n          feature. Please update your payment method to a credit card, PayPal\n          or direct debit to use the top up feature.\n          "), t("br"), t("a", {
                    staticClass: "btn blue",
                    attrs: {
                        href: "/account/updatebilling"
                    }
                }, [e._v("Update payment method to unlock this feature")])])])]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "email2sms" === e.activeTab,
                        expression: "activeTab === 'email2sms'"
                    }],
                    staticClass: "tab-content content-full"
                }, [t("div", {
                    staticClass: "settings-grid"
                }, [t("div", {
                    staticClass: "table-panel settings-table-panel"
                }, [t("div", {
                    staticClass: "tab-content"
                }, [t("div", {
                    staticClass: "content-row row-split-mobile"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Enable Email to SMS")]), t("div", {
                    staticClass: "text-content"
                }, [t("label", {
                    staticClass: "inline-checkbox",
                    class: [e.smsEnabled ? "is-open" : "is-closed"]
                }, [t("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        click: function(t) {
                            e.smsEnabled = !e.smsEnabled
                        }
                    }
                })]), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n                  Email to SMS allows you to send and receive SMS messages direct\n                  from/to your email.\n                ")])])]), t("div", {
                    staticClass: "content-row"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Email subject line")]), t("div", {
                    staticClass: "text-content"
                }, [t("div", {
                    staticClass: "form-select-wrapper"
                }, [t("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.includeSubject,
                        expression: "includeSubject"
                    }],
                    staticClass: "form-control input-md",
                    on: {
                        change: function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            }));
                            e.includeSubject = t.target.multiple ? s : s[0]
                        }
                    }
                }, [t("option", {
                    attrs: {
                        name: "include",
                        id: "include"
                    },
                    domProps: {
                        value: !0
                    }
                }, [e._v("\n                      Include subject line in SMS content\n                    ")]), t("option", {
                    attrs: {
                        name: "exclude",
                        id: "exclude"
                    },
                    domProps: {
                        value: !1
                    }
                }, [e._v("\n                      Exclude subject line from SMS content\n                    ")])])]), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n                  If included, the subject will appear at the start of the message,\n                  divided from the body with a space.\n                ")])])]), t("div", {
                    staticClass: "content-row"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("SMS end tag")]), t("div", {
                    staticClass: "text-content"
                }, [t("div", {
                    staticClass: "input-wrapper"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.endTag,
                        expression: "endTag"
                    }],
                    staticClass: "form-control input-tag",
                    attrs: {
                        placeholder: "{end}",
                        type: "text",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.endTag
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.endTag = t.target.value)
                        }
                    }
                })]), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n                  This tag marks the end of the SMS content. All content after this tag will be excluded from the SMS.\n                ")])])]), t("div", {
                    staticClass: "content-row"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("SMS bounce notifications")]), t("div", {
                    staticClass: "text-content"
                }, [t("label", {
                    staticClass: "inline-checkbox",
                    class: [e.smsBounceNotifications ? "is-open" : "is-closed"]
                }, [t("input", {
                    staticClass: "toggle",
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        click: function(t) {
                            e.smsBounceNotifications = !e.smsBounceNotifications
                        }
                    }
                })]), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n                  Enable this to receive a notification email whenever an Email-to-SMS message bounces.\n                ")]), t("transition", {
                    attrs: {
                        name: "fade-slide"
                    }
                }, [t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.smsBounceNotifications,
                        expression: "smsBounceNotifications"
                    }],
                    staticClass: "content-row"
                }, [t("div", {
                    ref: "bounceOptions",
                    staticClass: "bounce-options"
                }, [t("div", {
                    class: {
                        "is-active": e.returnToSender
                    }
                }, [t("label", {
                    class: {
                        "is-active": e.returnToSender
                    }
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.returnToSender,
                        expression: "returnToSender"
                    }],
                    staticClass: "toggle",
                    attrs: {
                        type: "radio",
                        name: "bounce-type"
                    },
                    domProps: {
                        value: !0,
                        checked: e._q(e.returnToSender, !0)
                    },
                    on: {
                        change: function(t) {
                            e.returnToSender = !0
                        }
                    }
                }), e._v("\n                          Send bounce notification emails to the original sender\n                        ")])]), t("div", {
                    class: {
                        "is-active": !e.returnToSender
                    }
                }, [t("label", {
                    class: {
                        "is-active": !e.returnToSender
                    }
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.returnToSender,
                        expression: "returnToSender"
                    }],
                    staticClass: "toggle",
                    attrs: {
                        type: "radio",
                        name: "bounce-type"
                    },
                    domProps: {
                        value: !1,
                        checked: e._q(e.returnToSender, !1)
                    },
                    on: {
                        change: function(t) {
                            e.returnToSender = !1
                        }
                    }
                }), e._v("\n                          Send bounce notification emails to a specific email address:\n                        ")]), t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.bounceTarget,
                        expression: "bounceTarget"
                    }],
                    ref: "customBounceTarget",
                    staticClass: "form-control inline",
                    staticStyle: {
                        "margin-left": "6px",
                        width: "166px !important"
                    },
                    attrs: {
                        type: "text",
                        name: "bounceTarget",
                        placeholder: "example@domain.com"
                    },
                    domProps: {
                        value: e.bounceTarget
                    },
                    on: {
                        click: e.selectSendToRadio,
                        input: function(t) {
                            t.target.composing || (e.bounceTarget = t.target.value)
                        }
                    }
                }), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n                          Note: this must either be a verified single sender OR use a verified sender domain.\n                        ")])])])])])], 1)])])]), e._m(14)])]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "general" === e.activeTab || "email2sms" === e.activeTab || "recharge" === e.activeTab && e.prepayActive && !e.showPrepaidTransitionSplash,
                        expression: "\n        activeTab === 'general' ||\n        activeTab === 'email2sms' ||\n        (activeTab === 'recharge' && prepayActive && !showPrepaidTransitionSplash)\n      "
                    }],
                    staticClass: "card-footer",
                    class: {
                        "is-active": e.currentTabSettingsChanged
                    }
                }, [t("button", {
                    staticClass: "btn blue",
                    class: e.updating ? "is-loading" : "",
                    attrs: {
                        role: "button",
                        type: "button",
                        disabled: !e.currentTabSettingsChanged || e.updating
                    },
                    on: {
                        click: function(t) {
                            return e.updateSettings(e.activeTab)
                        }
                    }
                }, [e._v("\n        Save changes\n        "), t("span", {
                    staticClass: "loader-spinner"
                })]), t("button", {
                    staticClass: "button-outlined",
                    attrs: {
                        role: "button",
                        type: "button",
                        disabled: !e.currentTabSettingsChanged || e.updating
                    },
                    on: {
                        click: e.resetTabSettings
                    }
                }, [e._v("\n        Cancel\n      ")])])])])
            }),
            ue = [function() {
                var e = this,
                    t = e._self._c;
                return t("p", {
                    staticClass: "field-info"
                }, [e._v("\n            Messages that exceed the above size limit are rejected by default.\n            "), t("br"), e._v("Toggle this setting on if you prefer oversized messages to be\n            truncated and sent.\n          ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", {
                    staticClass: "field-info"
                }, [e._v("\n            SMS replies will be forwarded to this email address by default.\n            Leave it blank for no forwarding. \n            "), t("br"), e._v("Note: this must either be a\n            verified single sender OR use a verified sender domain.\n          ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("thead", [t("tr", [t("th", {
                    attrs: {
                        id: "table-senderid-country"
                    }
                }, [t("span", [e._v("Country")])]), t("th", {
                    attrs: {
                        id: "table-senderid-id"
                    }
                }, [t("span", [e._v("Sender ID")])]), t("th", {
                    attrs: {
                        id: "table-senderid-status"
                    }
                }, [t("span", [e._v("Status")])]), t("th")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("figure", [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/splash-smsmessaging-senderids.png",
                        alt: "SMTP2GO"
                    }
                })])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("footer", [t("p", [e._v("Your brand name appears as the sender instead of a number")]), t("p", [e._v("Reach customers in supported countries worldwide")]), t("p", [e._v("Your messages are more recognizable and trusted")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", {
                    staticClass: "block-info has-splash"
                }, [t("span", {
                    staticClass: "block-inline"
                }, [e._v("We are transitioning your account to be prepaid for SMS messaging. This will mean that for your SMS sending, your account will pay in advance.\n          ")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "notice-splash"
                }, [t("div", {
                    staticClass: "notice-splash-icon"
                }), t("p", {
                    staticClass: "notice-splash-content"
                }, [t("strong", [e._v("Important note")]), t("br"), e._v("\n            This requires that you firstly move to our new payment processor. You can do this by opening "), t("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://support.smtp2go.com/hc/en-gb/articles/28407225527449-Switch-Payment-Processors"
                    }
                }, [e._v("these instructions ")]), t("i", [e._v("(do this first)")]), e._v(" and then clicking the â€˜Start processâ€™ button below to continue.  \n          ")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("a", {
                    staticClass: "green btn start-process padding-splash",
                    attrs: {
                        href: "/account/changeplan/"
                    }
                }, [e._v("Start process"), t("span", {
                    staticClass: "button-icon"
                }, [e._v("+")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", [e._v("Your account will have a one-off charge for any messages already sent this "), t("br"), e._v("billing period, and will then immediately be switched to prepaid.")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "field-info"
                }, [e._v("\n              Set your SMS account balance to be automatically recharged when\n              it runs low. "), t("br"), e._v("Your accountâ€™s primary payment method will be used.\n            ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("figure", [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/splash-smsmessaging-auto-topup.png",
                        alt: "SMTP2GO"
                    }
                })])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", [e._v("\n          To complete the switch to Prepaid SMS, top up manually below. "), t("br"), e._v("\n          Your account will immediately be charged and SMS will switch to be prepaid.\n        ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "details-payment"
                }, [t("span", {
                    staticClass: "details-data"
                }, [e._v("Direct Debit")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "details-payment"
                }, [t("span", {
                    staticClass: "details-data no-payment"
                }, [e._v("\n                  No payment method found \n                  "), t("a", {
                    attrs: {
                        href: "/account/updatebilling"
                    }
                }, [e._v("Update payment method")])])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "settings-side-panel info-panel"
                }, [t("h5", [e._v("How to use Email to SMS")]), t("ol", [t("li", [e._v("Compose a new email.")]), t("li", [e._v("\n              Enter the SMS number as the recipient (including the country code), followed by\n              "), t("strong", [e._v("@sms.smtp2go.com")]), e._v(" e.g. "), t("strong", [e._v("15126436337@sms.smtp2go.com")]), t("br"), e._v("\n              e.g. when sending to the USA, include the country code 1 at the start.\n            ")]), t("li", [e._v("Add the content of your message to the subject and/or body of the email.")]), t("li", [e._v("\n              Send the email "), t("u", [e._v("using your SMTP2GO account.")]), e._v(" This is so we can be sure the email is coming from you.\n            ")]), t("li", [e._v("Get SMS replies in your email inbox!")])])])
            }],
            le = (s("c5f6"), s("7cdf"), s("4917"), s("7514"), s("28a5"), s("55dd"), s("1157")),
            de = s.n(le),
            me = (s("6b54"), {
                methods: {
                    s2g_objectIsFunction: function(e) {
                        return "[object Function]" == Object.prototype.toString.call(e)
                    },
                    s2g_isEmptyString: function(e) {
                        return !e
                    }
                }
            }),
            _e = me,
            he = {
                mixins: [_e],
                created: function() {
                    this.makeRequest = function(e, t, s, i, n, a, r) {
                        void 0 !== r && null !== r || (r = !1);
                        var o = this;
                        de.a.ajax(END_POINTS.urls()[t] + "?action=" + encodeURIComponent(s) + "&CSRF_key=" + encodeURIComponent(HTML.csrfkey), {
                            method: e,
                            data: i,
                            complete: function(e, t) {
                                if ("success" != t) {
                                    r || o.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                                    try {
                                        o.s2g_objectIsFunction(a) && a(e)
                                    } catch (s) {
                                        console.error("encountered error in AJAXBackendMixin, err:", s)
                                    }
                                } else {
                                    r || o.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                                    try {
                                        "error" in e.responseJSON && o.s2g_objectIsFunction(a) ? a(e) : o.s2g_objectIsFunction(n) && n(e)
                                    } catch (s) {
                                        console.error("encountered error in AJAXBackendMixin, err:", s)
                                    }
                                }
                            }
                        }), r || o.$store.commit("root/INC_RUNNING_AJAX_REQUESTS")
                    }
                },
                methods: {
                    mixinAjax_get: function(e, t, s, i, n, a) {
                        return this.makeRequest("GET", e, t, s, i, n, a)
                    },
                    mixinAjax_post: function(e, t, s, i, n, a) {
                        return this.makeRequest("POST", e, t, s, i, n, a)
                    },
                    mixinAjax_patch: function(e, t, s, i, n, a) {
                        return this.makeRequest("PATCH", e, t, s, i, n, a)
                    },
                    mixinAjax_put: function(e, t, s, i, n, a) {
                        return this.makeRequest("PUT", e, t, s, i, n, a)
                    },
                    mixinAjax_delete: function(e, t, s, i, n, a) {
                        return this.makeRequest("DELETE", e, t, s, i, n, a)
                    }
                }
            },
            pe = he,
            ge = s("c46f");

        function Se(e, t) {
            return Object(ge["a"])(t, (function(t, s, i) {
                return t[i] = Object(ge["a"])(s, (function(t, s, i) {
                    return t[i] = s.replace(e, ""), t
                }), {}), t
            }), {})
        }

        function fe(e, t, s) {
            var i = e.indexOf("?") > -1 ? "&" : "?";
            return null !== s && void 0 !== s && s.length > 0 ? e + i + t + "=" + encodeURIComponent(s) : e
        }
        var be, Ee, ve, Te = "root/",
            Ae = {
                getters: {
                    GET_IS_AJAX_RUNNING: Te + "GET_IS_AJAX_RUNNING",
                    GET_BACKEND_URL: Te + "GET_BACKEND_URL",
                    GET_END_POINTS: Te + "GET_END_POINTS",
                    GET_IMAGE_URLS: Te + "GET_IMAGE_URLS",
                    GET_SUCCESS_MESSAGE: Te + "GET_SUCCESS_MESSAGE",
                    GET_ERROR_MESSAGE: Te + "GET_ERROR_MESSAGE",
                    GET_IS_QUIET_REQUEST: Te + "GET_IS_QUIET_REQUEST"
                },
                mutations: {
                    SET_CSRF_KEY: Te + "SET_CSRF_KEY",
                    SET_END_POINTS: Te + "END_POINTS",
                    SET_IMAGE_URLS: Te + "SET_IMAGE_URLS",
                    INC_RUNNING_AJAX_REQUESTS: Te + "INC_RUNNING_AJAX_REQUESTS",
                    DEC_RUNNING_AJAX_REQUESTS: Te + "DEC_RUNNING_AJAX_REQUESTS",
                    SET_SUCCESS_MESSAGE: Te + "SET_SUCCESS_MESSAGE",
                    SET_ERROR_MESSAGE: Te + "SET_ERROR_MESSAGE",
                    CLEAR_SUCCESS_MESSAGE: Te + "CLEAR_SUCCESS_MESSAGE",
                    CLEAR_ERROR_MESSAGE: Te + "CLEAR_ERROR_MESSAGE",
                    SET_IS_QUIET_REQUEST: Te + "SET_IS_QUIET_REQUEST"
                },
                actions: {
                    UPDATE_SUCCESS_MESSAGE: Te + "UPDATE_SUCCESS_MESSAGE"
                }
            },
            Ce = Se(Te, Ae),
            Ne = {
                running_ajax_requests: 0,
                csrf_key: "",
                end_points: {},
                image_urls: {},
                success_message: null,
                error_message: null,
                is_quiet_request: !1
            },
            Ie = Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, Ce.getters.GET_IS_AJAX_RUNNING, (function(e) {
                return e.running_ajax_requests > 0
            })), Ce.getters.GET_END_POINTS, (function(e) {
                return e.end_points
            })), Ce.getters.GET_BACKEND_URL, (function(e) {
                return function(t, s) {
                    var i = fe(e.end_points[t], "action", s);
                    return fe(i, "CSRF_key", e.csrf_key)
                }
            })), Ce.getters.GET_IMAGE_URLS, (function(e) {
                return e.image_urls
            })), Ce.getters.GET_SUCCESS_MESSAGE, (function(e) {
                return e.success_message
            })), Ce.getters.GET_ERROR_MESSAGE, (function(e) {
                return e.error_message
            })), Ce.getters.GET_IS_QUIET_REQUEST, (function(e) {
                return e.is_quiet_request
            })),
            ye = Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, Ce.mutations.SET_CSRF_KEY, (function(e, t) {
                e.csrf_key = t
            })), Ce.mutations.SET_END_POINTS, (function(e, t) {
                e.end_points = t
            })), Ce.mutations.SET_IMAGE_URLS, (function(e, t) {
                e.image_urls = t
            })), Ce.mutations.INC_RUNNING_AJAX_REQUESTS, (function(e) {
                e.running_ajax_requests++
            })), Ce.mutations.DEC_RUNNING_AJAX_REQUESTS, (function(e) {
                e.running_ajax_requests--
            })), Ce.mutations.SET_SUCCESS_MESSAGE, (function(e, t) {
                e.success_message = t
            })), Ce.mutations.SET_ERROR_MESSAGE, (function(e, t) {
                e.error_message = t
            })), Ce.mutations.CLEAR_SUCCESS_MESSAGE, (function(e) {
                e.success_message = null
            })), Ce.mutations.CLEAR_ERROR_MESSAGE, (function(e) {
                e.error_message = null
            })), Ce.mutations.SET_IS_QUIET_REQUEST, (function(e, t) {
                e.is_quiet_request = t
            })),
            Oe = Object(r["a"])({}, Ce.actions.UPDATE_SUCCESS_MESSAGE, (function(e, t) {
                var s = t.success_message;
                e.commit(Ce.mutations.SET_SUCCESS_MESSAGE, s), setTimeout((function() {
                    e.commit(Ce.mutations.CLEAR_SUCCESS_MESSAGE)
                }), 5e3)
            })),
            we = {
                namespaced: !0,
                state: Ne,
                getters: Ie,
                mutations: ye,
                actions: Oe
            },
            Re = s("bc3a"),
            Me = s.n(Re),
            Ge = Me.a.create(),
            Ue = function(e) {
                Ge.interceptors.request.use((function(t) {
                    return e.commit("root/INC_RUNNING_AJAX_REQUESTS"), e.commit("root/CLEAR_SUCCESS_MESSAGE"), e.commit("root/CLEAR_ERROR_MESSAGE"), t
                })), Ge.interceptors.response.use((function(t) {
                    if (e.commit("root/DEC_RUNNING_AJAX_REQUESTS"), t = t.data, "error" in t) return Promise.reject(t.error);
                    var s = t.message,
                        i = t.results,
                        n = t.verification;
                    return Promise.resolve({
                        results: i,
                        message: s,
                        verification: n
                    })
                }), (function(t) {
                    return e.commit("root/DEC_RUNNING_AJAX_REQUESTS"), Promise.reject(t)
                }))
            },
            je = "settings/",
            xe = {
                getters: {
                    GET_IS_SMS_EMAIL_SETTINGS_INITIALISED: je + "GET_IS_SMS_EMAIL_SETTINGS_INITIALISED",
                    GET_USER_SMS_EMAIL_SETTINGS: je + "GET_USER_SMS_EMAIL_SETTINGS",
                    GET_IS_SMS_QUOTA_INITIALISED: je + "GET_IS_SMS_QUOTA_INITIALISED",
                    GET_USER_SMS_QUOTA: je + "GET_USER_SMS_QUOTA",
                    GET_IS_SMS_GEN_SETTINGS_INITIALISED: je + "GET_IS_SMS_GEN_SETTINGS_INITIALISED",
                    GET_USER_SMS_GEN_SETTINGS: je + "GET_USER_SMS_GEN_SETTINGS",
                    GET_IS_RECHARGE_SETTINGS_INITIALISED: je + "GET_IS_RECHARGE_SETTINGS_INITIALISED",
                    GET_USER_RECHARGE_SETTINGS: je + "GET_USER_RECHARGE_SETTINGS",
                    GET_USER_CARD_DETAILS: je + "GET_USER_CARD_DETAILS",
                    GET_USER_PAYMENT_METHOD: je + "GET_USER_PAYMENT_METHOD",
                    GET_USER_PAYPAL_EMAIL: je + "GET_USER_PAYPAL_EMAIL"
                },
                mutations: {
                    SET_USER_SMS_EMAIL_SETTINGS: je + "SET_USER_SMS_EMAIL_SETTINGS",
                    SET_IS_FETCHING_SMS_EMAIL_SETTINGS: je + "SET_IS_FETCHING_SMS_EMAIL_SETTINGS",
                    SET_USER_SMS_QUOTA: je + "SET_USER_SMS_QUOTA",
                    SET_IS_FETCHING_SMS_QUOTA: je + "SET_IS_FETCHING_SMS_QUOTA",
                    SET_USER_SMS_GEN_SETTINGS: je + "SET_USER_SMS_GEN_SETTINGS",
                    SET_IS_FETCHING_SMS_GEN_SETTINGS: je + "SET_IS_FETCHING_SMS_GEN_SETTINGS",
                    SET_USER_RECHARGE_SETTINGS: je + "SET_USER_RECHARGE_SETTINGS",
                    SET_IS_FETCHING_RECHARGE_SETTINGS: je + "SET_IS_FETCHING_RECHARGE_SETTINGS",
                    SET_USER_CARD_DETAILS: je + "SET_USER_CARD_DETAILS",
                    SET_USER_PAYMENT_METHOD: je + "SET_USER_PAYMENT_METHOD",
                    SET_USER_PAYPAL_EMAIL: je + "SET_USER_PAYPAL_EMAIL"
                },
                actions: {
                    FETCH_USER_SMS_EMAIL_SETTINGS: je + "FETCH_USER_SMS_EMAIL_SETTINGS",
                    FETCH_USER_SMS_QUOTA: je + "FETCH_USER_SMS_QUOTA",
                    FETCH_USER_SMS_GEN_SETTINGS: je + "FETCH_USER_SMS_GEN_SETTINGS",
                    FETCH_USER_RECHARGE_SETTINGS: je + "FETCH_USER_RECHARGE_SETTINGS"
                }
            },
            De = Se(je, xe),
            Le = {
                is_sms_email_settings_initialised: !1,
                is_fetching_email_settings: !1,
                user_sms_email_settings: [],
                is_sms_quota_initialised: !1,
                is_fetching_quota: !1,
                user_sms_quota: [],
                is_sms_gen_settings_initialised: !1,
                is_fetching_gen_settings: !1,
                user_sms_gen_settings: [],
                is_recharge_settings_initialised: !1,
                is_fetching_recharge_settings: !1,
                user_recharge_settings: [],
                user_card_details: {},
                user_payment_method: "",
                user_paypal_email: ""
            },
            Pe = (be = {}, Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(be, De.getters.GET_IS_SMS_EMAIL_SETTINGS_INITIALISED, (function(e) {
                return e.is_sms_email_settings_initialised
            })), De.getters.GET_USER_SMS_EMAIL_SETTINGS, (function(e) {
                return e.user_sms_email_settings
            })), De.getters.GET_IS_SMS_QUOTA_INITIALISED, (function(e) {
                return e.is_sms_quota_initialised
            })), De.getters.GET_USER_SMS_QUOTA, (function(e) {
                return e.user_sms_quota
            })), De.getters.GET_IS_SMS_GEN_SETTINGS_INITIALISED, (function(e) {
                return e.is_sms_gen_settings_initialised
            })), De.getters.GET_USER_SMS_GEN_SETTINGS, (function(e) {
                return e.user_sms_gen_settings
            })), De.getters.GET_IS_RECHARGE_SETTINGS_INITIALISED, (function(e) {
                return e.is_recharge_settings_initialised
            })), De.getters.GET_USER_RECHARGE_SETTINGS, (function(e) {
                return e.user_recharge_settings
            })), De.getters.GET_USER_CARD_DETAILS, (function(e) {
                return e.user_card_details
            })), De.getters.GET_USER_PAYMENT_METHOD, (function(e) {
                return e.user_payment_method
            })), Object(r["a"])(be, De.getters.GET_USER_PAYPAL_EMAIL, (function(e) {
                return e.user_paypal_email
            }))),
            ke = (Ee = {}, Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Ee, De.mutations.SET_USER_SMS_EMAIL_SETTINGS, (function(e, t) {
                e.user_sms_email_settings = t, e.is_sms_email_settings_initialised = !0
            })), De.mutations.SET_USER_SMS_QUOTA, (function(e, t) {
                e.user_sms_quota = t, e.is_sms_quota_initialised = !0
            })), De.mutations.SET_USER_SMS_GEN_SETTINGS, (function(e, t) {
                e.user_sms_gen_settings = t, e.is_sms_gen_settings_initialised = !0
            })), De.mutations.SET_USER_RECHARGE_SETTINGS, (function(e, t) {
                e.user_recharge_settings = t, e.is_recharge_settings_initialised = !0
            })), De.mutations.SET_IS_FETCHING_SMS_EMAIL_SETTINGS, (function(e, t) {
                e.is_fetching_email_settings = t
            })), De.mutations.SET_IS_FETCHING_SMS_QUOTA, (function(e, t) {
                e.is_fetching_quota = t
            })), De.mutations.SET_IS_FETCHING_SMS_GEN_SETTINGS, (function(e, t) {
                e.is_fetching_gen_settings = t
            })), De.mutations.SET_IS_FETCHING_RECHARGE_SETTINGS, (function(e, t) {
                e.is_fetching_recharge_settings = t
            })), De.mutations.SET_USER_CARD_DETAILS, (function(e, t) {
                e.user_card_details = t
            })), De.mutations.SET_USER_PAYMENT_METHOD, (function(e, t) {
                e.user_payment_method = t
            })), Object(r["a"])(Ee, De.mutations.SET_USER_PAYPAL_EMAIL, (function(e, t) {
                e.user_paypal_email = t
            }))),
            Be = Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, De.actions.FETCH_USER_SMS_QUOTA, (function(e, t) {
                if (!Le.is_fetching_quota) return new Promise((function(s, i) {
                    e.commit(De.mutations.SET_IS_FETCHING_SMS_QUOTA, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                        root: !0
                    }), Ge.get(e.rootGetters[Ae.getters.GET_BACKEND_URL]("SMS Messaging", "check-remaining-quota")).then((function(t) {
                        e.commit(De.mutations.SET_USER_SMS_QUOTA, t.results), s(t)
                    })).catch((function(t) {
                        e.commit("root/SET_ERROR_MESSAGE", "Oops, something went wrong. Please try again.", {
                            root: !0
                        }), i(t)
                    })).finally((function() {
                        t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                            root: !0
                        }), e.commit(De.mutations.SET_IS_FETCHING_SMS_QUOTA, !1)
                    }))
                }))
            })), De.actions.FETCH_USER_SMS_EMAIL_SETTINGS, (function(e, t) {
                if (!Le.is_fetching_email_settings) return new Promise((function(s, i) {
                    e.commit(De.mutations.SET_IS_FETCHING_SMS_EMAIL_SETTINGS, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                        root: !0
                    }), Ge.get(e.rootGetters[Ae.getters.GET_BACKEND_URL]("SMS Messaging", "email-settings")).then((function(t) {
                        e.commit(De.mutations.SET_USER_SMS_EMAIL_SETTINGS, t.results), s(t)
                    })).catch((function(t) {
                        e.commit("root/SET_ERROR_MESSAGE", "Oops, something went wrong. Please try again.", {
                            root: !0
                        }), i(t)
                    })).finally((function() {
                        t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                            root: !0
                        }), e.commit(De.mutations.SET_IS_FETCHING_SMS_EMAIL_SETTINGS, !1)
                    }))
                }))
            })), De.actions.FETCH_USER_SMS_GEN_SETTINGS, (function(e, t) {
                if (!Le.is_fetching_gen_settings) return new Promise((function(s, i) {
                    e.commit(De.mutations.SET_IS_FETCHING_SMS_GEN_SETTINGS, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                        root: !0
                    }), Ge.get(e.rootGetters[Ae.getters.GET_BACKEND_URL]("SMS Messaging", "send-settings")).then((function(t) {
                        e.commit(De.mutations.SET_USER_SMS_GEN_SETTINGS, t.results.send_settings), s(t)
                    })).catch((function(t) {
                        e.commit("root/SET_ERROR_MESSAGE", "Oops, something went wrong. Please try again.", {
                            root: !0
                        }), i(t)
                    })).finally((function() {
                        t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                            root: !0
                        }), e.commit(De.mutations.SET_IS_FETCHING_SMS_GEN_SETTINGS, !1)
                    }))
                }))
            })), De.actions.FETCH_USER_RECHARGE_SETTINGS, (function(e, t) {
                if (!Le.is_fetching_recharge_settings) return new Promise((function(s, i) {
                    e.commit(De.mutations.SET_IS_FETCHING_RECHARGE_SETTINGS, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                        root: !0
                    }), Ge.get(e.rootGetters[Ae.getters.GET_BACKEND_URL]("SMS Messaging", "recharge-settings")).then((function(t) {
                        e.commit(De.mutations.SET_USER_RECHARGE_SETTINGS, t.results.recharge_settings), e.commit(De.mutations.SET_USER_CARD_DETAILS, t.results.card_details || {}), e.commit(De.mutations.SET_USER_PAYMENT_METHOD, t.results.payment_method || ""), e.commit(De.mutations.SET_USER_PAYPAL_EMAIL, t.results.paypal_email || ""), s(t)
                    })).catch((function(t) {
                        e.commit("root/SET_ERROR_MESSAGE", "Oops, something went wrong. Please try again.", {
                            root: !0
                        }), i(t)
                    })).finally((function() {
                        t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                            root: !0
                        }), e.commit(De.mutations.SET_IS_FETCHING_RECHARGE_SETTINGS, !1)
                    }))
                }))
            })),
            He = {
                namespaced: !0,
                state: Le,
                getters: Pe,
                mutations: ke,
                actions: Be
            },
            Fe = s("6abe"),
            $e = s.n(Fe),
            qe = s("2e18"),
            ze = s.n(qe),
            Ve = "numbers/",
            Qe = {
                getters: {
                    GET_IS_INITIALISED: Ve + "GET_IS_INITIALISED",
                    GET_IS_FETCHING: Ve + "GET_IS_FETCHING",
                    GET_IS_SAVING: Ve + "GET_IS_SAVING",
                    GET_USER_NUMBERS: Ve + "GET_USER_NUMBERS",
                    GET_NUMBER_EDITING: Ve + "GET_NUMBER_EDITING",
                    GET_HAS_US_NUMBER: Ve + "GET_HAS_US_NUMBER",
                    GET_HAS_UNVERIFIED_US_NUMBER: Ve + "GET_HAS_UNVERIFIED_US_NUMBER",
                    GET_HAS_PENDING_US_NUMBER: Ve + "GET_HAS_PENDING_US_NUMBER",
                    GET_ALPHA_SENDERS: Ve + "GET_ALPHA_SENDERS",
                    GET_IS_ALPHA_INITIALISED: Ve + "GET_IS_ALPHA_INITIALISED",
                    GET_IS_ALPHA_FETCHING: Ve + "GET_IS_ALPHA_FETCHING"
                },
                mutations: {
                    SET_USER_NUMBERS: Ve + "SET_USER_NUMBERS",
                    SET_NUMBER_EDITING: Ve + "SET_NUMBER_EDITING",
                    SET_IS_FETCHING: Ve + "SET_IS_FETCHING",
                    SET_IS_SAVING: Ve + "SET_IS_SAVING",
                    SET_ALPHA_SENDERS: Ve + "SET_ALPHA_SENDERS",
                    SET_IS_ALPHA_FETCHING: Ve + "SET_IS_ALPHA_FETCHING",
                    SET_IS_ALPHA_INITIALISED: Ve + "SET_IS_ALPHA_INITIALISED"
                },
                actions: {
                    FETCH_USER_NUMBERS: Ve + "FETCH_USER_NUMBERS",
                    FETCH_ALPHA_SENDERS: Ve + "FETCH_ALPHA_SENDERS"
                }
            },
            We = Se(Ve, Qe),
            Je = {
                is_initialised: !1,
                fetching: !1,
                saving: !1,
                user_numbers: [],
                alpha_senders: [],
                alpha_initialised: !1,
                alpha_fetching: !1,
                number_editing: null,
                has_us_number: !1,
                has_unverified_us_number: !1,
                has_pending_us_number: !1
            },
            Ye = (ve = {}, Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(ve, We.getters.GET_IS_INITIALISED, (function(e) {
                return e.is_initialised
            })), We.getters.GET_IS_FETCHING, (function(e) {
                return e.fetching
            })), We.getters.GET_IS_SAVING, (function(e) {
                return e.saving
            })), We.getters.GET_USER_NUMBERS, (function(e) {
                return e.user_numbers
            })), We.getters.GET_NUMBER_EDITING, (function(e) {
                return e.number_editing
            })), We.getters.GET_HAS_US_NUMBER, (function(e) {
                return e.has_us_number
            })), We.getters.GET_HAS_UNVERIFIED_US_NUMBER, (function(e) {
                return e.has_unverified_us_number
            })), We.getters.GET_HAS_PENDING_US_NUMBER, (function(e) {
                return e.has_pending_us_number
            })), We.getters.GET_ALPHA_SENDERS, (function(e) {
                return e.alpha_senders
            })), We.getters.GET_IS_ALPHA_INITIALISED, (function(e) {
                return e.alpha_initialised
            })), Object(r["a"])(ve, We.getters.GET_IS_ALPHA_FETCHING, (function(e) {
                return e.alpha_fetching
            }))),
            Ke = Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, We.mutations.SET_USER_NUMBERS, (function(e, t) {
                var s = t,
                    i = $e.a.PhoneNumberUtil.getInstance(),
                    n = $e.a.PhoneNumberFormat;
                e.has_us_number = !1, e.has_unverified_us_number = !1, e.has_pending_us_number = !1, s.forEach((function(t) {
                    "Active" === t.number.status ? t.verification_status = "VERIFIED" : t.verification_status = t.number.status;
                    var s = i.parse(t.number.phone_number),
                        a = ze.a.alpha2ToAlpha3(t.number.country);
                    t.display = {
                        country: a,
                        country_code: s.getCountryCode(),
                        national: i.format(s, n.NATIONAL),
                        full: i.format(s, n.INTERNATIONAL),
                        label: t.assignment.label
                    }, "US" === t.number.country && (e.has_us_number = !0, "NQ" === t.number.status || "REJECTED" === t.number.status ? e.has_unverified_us_number = !0 : "PENDING" !== t.number.status && "SENT" !== t.number.status || (e.has_pending_us_number = !0))
                })), e.user_numbers = s, e.is_initialised = !0
            })), We.mutations.SET_NUMBER_EDITING, (function(e, t) {
                e.number_editing = t
            })), We.mutations.SET_IS_FETCHING, (function(e, t) {
                e.fetching = t
            })), We.mutations.SET_IS_SAVING, (function(e, t) {
                e.saving = t
            })), We.mutations.SET_ALPHA_SENDERS, (function(e, t) {
                e.alpha_senders = t || [], e.alpha_initialised = !0
            })), We.mutations.SET_IS_ALPHA_FETCHING, (function(e, t) {
                e.alpha_fetching = t
            })), We.mutations.SET_IS_ALPHA_INITIALISED, (function(e, t) {
                e.alpha_initialised = !!t
            })),
            Xe = Object(r["a"])(Object(r["a"])({}, We.actions.FETCH_USER_NUMBERS, (function(e, t) {
                return new Promise((function(s, i) {
                    e.commit(We.mutations.SET_IS_FETCHING, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                        root: !0
                    }), Ge.get(e.rootGetters[Ae.getters.GET_BACKEND_URL]("SMS Messaging", "dedicated-numbers")).then((function(t) {
                        e.commit(We.mutations.SET_USER_NUMBERS, t.results.numbers), s(t)
                    })).catch((function(t) {
                        e.commit("root/SET_ERROR_MESSAGE", "Oops, something went wrong. Please try again.", {
                            root: !0
                        }), i(t)
                    })).finally((function() {
                        t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                            root: !0
                        }), e.commit(We.mutations.SET_IS_FETCHING, !1)
                    }))
                }))
            })), We.actions.FETCH_ALPHA_SENDERS, (function(e, t) {
                return new Promise((function(s, i) {
                    e.commit(We.mutations.SET_IS_ALPHA_FETCHING, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                        root: !0
                    }), Ge.get(e.rootGetters[Ae.getters.GET_BACKEND_URL]("SMS Messaging", "alpha-senders")).then((function(t) {
                        e.commit(We.mutations.SET_ALPHA_SENDERS, t.results.alpha_senders), s(t)
                    })).catch((function(t) {
                        e.commit("root/SET_ERROR_MESSAGE", "Oops, could not load alphanumeric senders.", {
                            root: !0
                        }), i(t)
                    })).finally((function() {
                        t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                            root: !0
                        }), e.commit(We.mutations.SET_IS_ALPHA_FETCHING, !1)
                    }))
                }))
            })),
            Ze = {
                namespaced: !0,
                state: Je,
                getters: Ye,
                mutations: Ke,
                actions: Xe
            },
            et = (s("3d66"), s("3fce"), s("2494"), function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "sms-table-container"
                }, [e.isSaving ? t("AjaxLoadingSpinner", {
                    attrs: {
                        context: "FORCED"
                    }
                }) : e._e(), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.showSmsPurchase,
                        expression: "!showSmsPurchase"
                    }]
                }, [t("div", {
                    staticClass: "table-container-content"
                }, [t("div", [t("table", {
                    staticClass: "data-table"
                }, [t("thead", [t("tr", e._l(e.activeColumns, (function(s) {
                    return t("th", {
                        key: s.id,
                        attrs: {
                            id: "table-dedicatednumbers-" + s.id
                        }
                    }, [t("span", [e._v(e._s(s.label))])])
                })), 0)]), t("tbody", [e._l(e.numbers, (function(s) {
                    return t("tr", {
                        key: s.number.id
                    }, [t("td", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isColumnActive("country"),
                            expression: "isColumnActive('country')"
                        }],
                        staticClass: "settings-country"
                    }, [t("span", {
                        staticClass: "long-event-indicator country"
                    }, [e._v(e._s(s.display.country))])]), t("td", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isColumnActive("number"),
                            expression: "isColumnActive('number')"
                        }],
                        staticClass: "settings-number"
                    }, [t("a", {
                        on: {
                            click: function(t) {
                                return e.goToEdit(s)
                            }
                        }
                    }, [e._v(" " + e._s(s.display.full) + " ")]), e._v("Â \n                "), "undefined" != typeof e.userData && "undefined" != typeof e.userData["sms_banned"] && e.userData["sms_banned"] ? e._e() : ["NQ" == s.verification_status && "AU" === s.number.country ? t("button", {
                        staticClass: "button-cell",
                        on: {
                            click: function(t) {
                                return e.openAUVerification(s)
                            }
                        }
                    }, [e._v("\n                    Verify\n                  ")]) : e._e(), "process_underway" == s.verification_status && "AU" === s.number.country ? t("button", {
                        staticClass: "button-cell",
                        on: {
                            click: function(t) {
                                return e.reopenAUVerification(s)
                            }
                        }
                    }, [e._v("\n                    Re-open Onfido\n                  ")]) : "NQ" == s.verification_status && "AU" !== s.number.country ? t("button", {
                        staticClass: "button-cell",
                        on: {
                            click: function(t) {
                                return e.openTypeform(s)
                            }
                        }
                    }, [e._v("\n                    Verify\n                  ")]) : e._e(), "REJECTED" == s.verification_status ? t("button", {
                        staticClass: "button-cell",
                        on: {
                            click: function(t) {
                                return e.openTypeform(s)
                            }
                        }
                    }, [e._v("\n                    Resubmit\n                  ")]) : e._e()]], 2), t("td", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isColumnActive("name"),
                            expression: "isColumnActive('name')"
                        }],
                        staticClass: "settings-label"
                    }, [e._v("\n                " + e._s(s.display.label) + "\n              ")]), t("td", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isColumnActive("cost"),
                            expression: "isColumnActive('cost')"
                        }],
                        staticClass: "settings-cost"
                    }, [e._v("\n                $" + e._s(e.dedicatedNumberCosts[s.number.country]) + "/month\n              ")]), t("td", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isColumnActive("capabilities"),
                            expression: "isColumnActive('capabilities')"
                        }],
                        staticClass: "settings-capabilities"
                    }, [s.number.capabilities.map((function(e) {
                        return e.toLowerCase()
                    })).includes("sms") ? t("span", {
                        staticClass: "long-event-indicator sms"
                    }) : e._e(), s.number.capabilities.map((function(e) {
                        return e.toLowerCase()
                    })).includes("mms") ? t("span", {
                        staticClass: "long-event-indicator mms"
                    }) : e._e()]), t("td", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isColumnActive("status"),
                            expression: "isColumnActive('status')"
                        }],
                        staticClass: "settings-status"
                    }, [t("span", {
                        staticClass: "long-event-indicator",
                        class: e.getStatusClass(s)
                    }), "indicator-unverified" == e.getStatusClass(s) ? t("span", {
                        staticClass: "column-sms-tooltip"
                    }, [t("span", {
                        staticClass: "sms-tooltip"
                    }, [e._v("Your dedicated number needs to be verified to prevent\n                    messages being blocked.")])]) : e._e(), "indicator-rejected" == e.getStatusClass(s) ? t("span", {
                        staticClass: "column-sms-tooltip"
                    }, [t("span", {
                        staticClass: "sms-tooltip"
                    }, [e._v("Your questionnaire needs to be resubmitted.\n                  "), void 0 !== s.verification.details && "" !== s.verification.details ? t("span", [t("br"), e._v(e._s(s.verification.details) + " \n                    "), void 0 !== s.verification.sub_details && "" !== s.verification.sub_details ? t("span", [t("p", [t("br"), e._v(e._s(s.verification.sub_details))])]) : e._e()]) : e._e()])]) : e._e(), "indicator-onfido" == e.getStatusClass(s) ? t("span", {
                        staticClass: "column-sms-tooltip"
                    }, [t("span", {
                        staticClass: "sms-tooltip"
                    }, [e._v("Your identity verification is in progress. Please complete the Onfido verification to activate your number.")])]) : e._e(), "indicator-submitted" == e.getStatusClass(s) ? t("span", {
                        staticClass: "column-sms-tooltip"
                    }, ["PENDING" === s.verification_status ? t("span", {
                        staticClass: "sms-tooltip"
                    }, [e._v("Your questionnaire for " + e._s(s.display.full) + " was\n                    submitted to our team for review on\n                    " + e._s(e.getDateFormat(s.verification.created)) + ".")]) : e._e(), "SENT" === s.verification_status ? t("span", {
                        staticClass: "sms-tooltip"
                    }, [e._v("Your questionnaire for " + e._s(s.display.full) + " has been\n                    forwarded to mobile carriers on\n                    " + e._s(e.getDateFormat(s.verification.sent)) + " for\n                    review.")]) : e._e()]) : e._e()]), t("td", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isColumnActive("forward_replies"),
                            expression: "isColumnActive('forward_replies')"
                        }],
                        staticClass: "settings-forward_replies"
                    }, [t("span", [e._v(e._s(e.getForwardRepliesText(s)))])])])
                })), 0 == e.numbers.length && e.gettingNumbers ? t("tr", [t("td", {
                    attrs: {
                        colspan: "5"
                    }
                }, [e._v("Getting numbers...")])]) : e._e()], 2)])]), t("div", {
                    staticClass: "table-footer"
                }, [t("button", {
                    staticClass: "btn blue hide-splash",
                    class: {
                        "is-loading": e.loadingAvailable
                    },
                    attrs: {
                        disabled: e.loadingAvailable
                    },
                    on: {
                        click: e.loadAvailable
                    }
                }, [e._v("\n          View numbers to purchase"), t("span", {
                    staticClass: "loader-spinner"
                })])])])]), e.showSuccess ? t("div", [t("div", {
                    staticClass: "modal-dialog modal-medium modal-confirm is-active"
                }, [t("div", {
                    staticClass: "modal-body"
                }, [t("button", {
                    staticClass: "bootbox-close-button close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            e.showSuccess = !e.showSuccess
                        }
                    }
                }, [e._v("\n          Ã—\n        ")]), e._m(0), t("div", {
                    staticClass: "modal-body-footer"
                }, [t("button", {
                    staticClass: "btn blue bootbox-close-button",
                    on: {
                        click: function(t) {
                            e.showSuccess = !e.showSuccess
                        }
                    }
                }, [e._v("\n            Done\n          ")])])])]), t("div", {
                    staticClass: "modal-backdrop fade in",
                    on: {
                        click: function(t) {
                            e.showSuccess = !e.showSuccess
                        }
                    }
                })]) : e._e()], 1)
            }),
            tt = [function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "option-banner"
                }, [t("figure", [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/lightbox-popper.png",
                        width: "109",
                        alt: "SMTP2GO"
                    }
                })]), t("h4", [e._v("Submission successful!")]), t("p", [e._v("Thanks! We have received your submission.")])])
            }],
            st = (s("e174"), s("fb60"), s("2b7f")),
            it = s("5e79"),
            nt = s.n(it),
            at = (s("fba1"), function() {
                var e = this,
                    t = e._self._c;
                return e.showLoading ? t("div", {
                    staticClass: "loading"
                }, [e._m(0), t("div", {
                    staticClass: "loading-backdrop"
                })]) : e._e()
            }),
            rt = [function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "load-more load-centered"
                }, [t("div", {
                    staticClass: "loading-spinner"
                }, [t("div", {
                    staticClass: "loader"
                }, [t("span", {
                    staticClass: "icon-circles"
                }, [t("span", {
                    staticClass: "dot-circle pending"
                }), t("span", {
                    staticClass: "dot-circle soft-bounced"
                }), t("span", {
                    staticClass: "dot-circle hard-bounced"
                }), t("span", {
                    staticClass: "dot-circle rejected"
                }), t("span", {
                    staticClass: "dot-circle spam"
                }), t("span", {
                    staticClass: "dot-circle delivered"
                }), t("span", {
                    staticClass: "dot-circle unsubscribed"
                }), t("span", {
                    staticClass: "dot-circle unblocked"
                }), t("span", {
                    staticClass: "dot-circle opened"
                }), t("span", {
                    staticClass: "dot-circle clicked"
                })])])])])
            }],
            ot = s("eb78");

        function ct(e, t) {
            return Object(ot["a"])(t, (function(t, s, i) {
                return t[i] = Object(ot["a"])(s, (function(t, s, i) {
                    return t[i] = s.replace(e, ""), t
                }), {}), t
            }), {})
        }

        function ut(e, t, s) {
            var i = e.indexOf("?") > -1 ? "&" : "?";
            return null !== s && void 0 !== s && s.length > 0 ? e + i + t + "=" + encodeURIComponent(s) : e
        }
        var lt = "root/",
            dt = {
                getters: {
                    GET_IS_AJAX_RUNNING: lt + "GET_IS_AJAX_RUNNING",
                    GET_BACKEND_URL: lt + "GET_BACKEND_URL",
                    GET_END_POINTS: lt + "GET_END_POINTS",
                    GET_IMAGE_URLS: lt + "GET_IMAGE_URLS",
                    GET_SUCCESS_MESSAGE: lt + "GET_SUCCESS_MESSAGE",
                    GET_ERROR_MESSAGE: lt + "GET_ERROR_MESSAGE",
                    GET_IS_QUIET_REQUEST: lt + "GET_IS_QUIET_REQUEST"
                },
                mutations: {
                    SET_CSRF_KEY: lt + "SET_CSRF_KEY",
                    SET_END_POINTS: lt + "END_POINTS",
                    SET_IMAGE_URLS: lt + "SET_IMAGE_URLS",
                    INC_RUNNING_AJAX_REQUESTS: lt + "INC_RUNNING_AJAX_REQUESTS",
                    DEC_RUNNING_AJAX_REQUESTS: lt + "DEC_RUNNING_AJAX_REQUESTS",
                    SET_SUCCESS_MESSAGE: lt + "SET_SUCCESS_MESSAGE",
                    SET_ERROR_MESSAGE: lt + "SET_ERROR_MESSAGE",
                    CLEAR_SUCCESS_MESSAGE: lt + "CLEAR_SUCCESS_MESSAGE",
                    CLEAR_ERROR_MESSAGE: lt + "CLEAR_ERROR_MESSAGE",
                    SET_IS_QUIET_REQUEST: lt + "SET_IS_QUIET_REQUEST"
                },
                actions: {
                    UPDATE_SUCCESS_MESSAGE: lt + "UPDATE_SUCCESS_MESSAGE"
                }
            },
            mt = ct(lt, dt),
            _t = (Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, mt.getters.GET_IS_AJAX_RUNNING, (function(e) {
                return e.running_ajax_requests > 0
            })), mt.getters.GET_END_POINTS, (function(e) {
                return e.end_points
            })), mt.getters.GET_BACKEND_URL, (function(e) {
                return function(t, s) {
                    var i = ut(e.end_points[t], "action", s);
                    return ut(i, "CSRF_key", e.csrf_key)
                }
            })), mt.getters.GET_IMAGE_URLS, (function(e) {
                return e.image_urls
            })), mt.getters.GET_SUCCESS_MESSAGE, (function(e) {
                return e.success_message
            })), mt.getters.GET_ERROR_MESSAGE, (function(e) {
                return e.error_message
            })), mt.getters.GET_IS_QUIET_REQUEST, (function(e) {
                return e.is_quiet_request
            })), Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, mt.mutations.SET_CSRF_KEY, (function(e, t) {
                e.csrf_key = t
            })), mt.mutations.SET_END_POINTS, (function(e, t) {
                e.end_points = t
            })), mt.mutations.SET_IMAGE_URLS, (function(e, t) {
                e.image_urls = t
            })), mt.mutations.INC_RUNNING_AJAX_REQUESTS, (function(e) {
                e.running_ajax_requests++
            })), mt.mutations.DEC_RUNNING_AJAX_REQUESTS, (function(e) {
                e.running_ajax_requests--
            })), mt.mutations.SET_SUCCESS_MESSAGE, (function(e, t) {
                e.success_message = t
            })), mt.mutations.SET_ERROR_MESSAGE, (function(e, t) {
                e.error_message = t
            })), mt.mutations.CLEAR_SUCCESS_MESSAGE, (function(e) {
                e.success_message = null
            })), mt.mutations.CLEAR_ERROR_MESSAGE, (function(e) {
                e.error_message = null
            })), mt.mutations.SET_IS_QUIET_REQUEST, (function(e, t) {
                e.is_quiet_request = t
            })), Object(r["a"])({}, mt.actions.UPDATE_SUCCESS_MESSAGE, (function(e, t) {
                var s = t.success_message;
                e.commit(mt.mutations.SET_SUCCESS_MESSAGE, s), setTimeout((function() {
                    e.commit(mt.mutations.CLEAR_SUCCESS_MESSAGE)
                }), 5e3)
            })), "loading/"),
            ht = {
                getters: {
                    GET_SHOW_SENT_LOADING: _t + "GET_SHOW_SENT_LOADING",
                    GET_SHOW_RECEIVED_LOADING: _t + "GET_SHOW_RECEIVED_LOADING",
                    GET_SHOW_SUMMARY_LOADING: _t + "GET_SHOW_SUMMARY_LOADING",
                    GET_SHOW_SETTINGS_LOADING: _t + "GET_SHOW_SETTINGS_LOADING"
                },
                mutations: {
                    SET_SHOW_SENT_LOADING: _t + "SET_SHOW_SENT_LOADING",
                    SET_SHOW_RECEIVED_LOADING: _t + "SET_SHOW_RECEIVED_LOADING",
                    SET_SHOW_SUMMARY_LOADING: _t + "SET_SHOW_SUMMARY_LOADING",
                    SET_SHOW_SETTINGS_LOADING: _t + "SET_SHOW_SETTINGS_LOADING"
                }
            },
            pt = ct(_t, ht);
        Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, pt.getters.GET_SHOW_SENT_LOADING, (function(e) {
            return e.show_sent_loading
        })), pt.getters.GET_SHOW_RECEIVED_LOADING, (function(e) {
            return e.show_received_loading
        })), pt.getters.GET_SHOW_SUMMARY_LOADING, (function(e) {
            return e.show_summary_loading
        })), pt.getters.GET_SHOW_SETTINGS_LOADING, (function(e) {
            return e.show_settings_loading
        })), Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, pt.mutations.SET_SHOW_SENT_LOADING, (function(e, t) {
            e.show_sent_loading = t
        })), pt.mutations.SET_SHOW_RECEIVED_LOADING, (function(e, t) {
            e.show_received_loading = t
        })), pt.mutations.SET_SHOW_SUMMARY_LOADING, (function(e, t) {
            e.show_summary_loading = t
        })), pt.mutations.SET_SHOW_SETTINGS_LOADING, (function(e, t) {
            e.show_settings_loading = t
        }));

        function gt(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), s.push.apply(s, i)
            }
            return s
        }

        function St(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? gt(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : gt(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }))
            }
            return e
        }
        var ft, bt = {
                name: "AjaxLoadingSpinner",
                props: {
                    context: String
                },
                data: function() {
                    return {
                        contexts: this.$config.contexts
                    }
                },
                computed: St(St({}, Object(st["a"])({
                    isAjaxRunning: dt.getters.GET_IS_AJAX_RUNNING,
                    isQuietRequest: dt.getters.GET_IS_QUIET_REQUEST,
                    showSentLoading: ht.getters.GET_SHOW_SENT_LOADING,
                    showReceivedLoading: ht.getters.GET_SHOW_RECEIVED_LOADING,
                    showSummaryLoading: ht.getters.GET_SHOW_SUMMARY_LOADING
                })), {}, {
                    showLoading: function() {
                        switch (this.context) {
                            case "FORCED":
                                return !0;
                            case this.contexts.TAB_SENT:
                                return this.showSentLoading;
                            case this.contexts.TAB_RECEIVED:
                                return this.showReceivedLoading;
                            case this.contexts.TAB_SUMMARY:
                                return this.showSummaryLoading;
                            case this.contexts.TAB_NUMBERS:
                                return !1;
                            case this.contexts.SETTINGS_PURCHASE:
                                return !1;
                            default:
                                return this.isAjaxRunning && !this.isQuietRequest
                        }
                    }
                })
            },
            Et = bt,
            vt = Object(M["a"])(Et, at, rt, !1, null, null, null),
            Tt = vt.exports,
            At = s("7fd0"),
            Ct = s.n(At),
            Nt = Ct.a.create(),
            It = s("9816"),
            yt = s.n(It),
            Ot = "numbers/",
            wt = {
                getters: {
                    GET_IS_INITIALISED: Ot + "GET_IS_INITIALISED",
                    GET_IS_FETCHING: Ot + "GET_IS_FETCHING",
                    GET_IS_SAVING: Ot + "GET_IS_SAVING",
                    GET_USER_NUMBERS: Ot + "GET_USER_NUMBERS",
                    GET_NUMBER_EDITING: Ot + "GET_NUMBER_EDITING",
                    GET_HAS_US_NUMBER: Ot + "GET_HAS_US_NUMBER",
                    GET_HAS_UNVERIFIED_US_NUMBER: Ot + "GET_HAS_UNVERIFIED_US_NUMBER",
                    GET_HAS_PENDING_US_NUMBER: Ot + "GET_HAS_PENDING_US_NUMBER",
                    GET_HAS_UNVERIFIED_AU_NUMBER: Ot + "GET_HAS_UNVERIFIED_AU_NUMBER",
                    GET_ALPHA_SENDERS: Ot + "GET_ALPHA_SENDERS",
                    GET_IS_ALPHA_INITIALISED: Ot + "GET_IS_ALPHA_INITIALISED",
                    GET_IS_ALPHA_FETCHING: Ot + "GET_IS_ALPHA_FETCHING"
                },
                mutations: {
                    SET_USER_NUMBERS: Ot + "SET_USER_NUMBERS",
                    SET_NUMBER_EDITING: Ot + "SET_NUMBER_EDITING",
                    SET_IS_FETCHING: Ot + "SET_IS_FETCHING",
                    SET_IS_SAVING: Ot + "SET_IS_SAVING",
                    SET_ALPHA_SENDERS: Ot + "SET_ALPHA_SENDERS",
                    SET_IS_ALPHA_FETCHING: Ot + "SET_IS_ALPHA_FETCHING",
                    SET_IS_ALPHA_INITIALISED: Ot + "SET_IS_ALPHA_INITIALISED"
                },
                actions: {
                    FETCH_USER_NUMBERS: Ot + "FETCH_USER_NUMBERS",
                    FETCH_ALPHA_SENDERS: Ot + "FETCH_ALPHA_SENDERS"
                }
            },
            Rt = ct(Ot, wt),
            Mt = (ft = {}, Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(ft, Rt.getters.GET_IS_INITIALISED, (function(e) {
                return e.is_initialised
            })), Rt.getters.GET_IS_FETCHING, (function(e) {
                return e.fetching
            })), Rt.getters.GET_IS_SAVING, (function(e) {
                return e.saving
            })), Rt.getters.GET_USER_NUMBERS, (function(e) {
                return e.user_numbers
            })), Rt.getters.GET_NUMBER_EDITING, (function(e) {
                return e.number_editing
            })), Rt.getters.GET_HAS_US_NUMBER, (function(e) {
                return e.has_us_number
            })), Rt.getters.GET_HAS_UNVERIFIED_US_NUMBER, (function(e) {
                return e.has_unverified_us_number
            })), Rt.getters.GET_HAS_PENDING_US_NUMBER, (function(e) {
                return e.has_pending_us_number
            })), Rt.getters.GET_HAS_UNVERIFIED_AU_NUMBER, (function(e) {
                return e.has_unverified_au_number
            })), Rt.getters.GET_ALPHA_SENDERS, (function(e) {
                return e.alpha_senders
            })), Object(r["a"])(Object(r["a"])(ft, Rt.getters.GET_IS_ALPHA_INITIALISED, (function(e) {
                return e.alpha_initialised
            })), Rt.getters.GET_IS_ALPHA_FETCHING, (function(e) {
                return e.alpha_fetching
            })), Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, Rt.mutations.SET_USER_NUMBERS, (function(e, t) {
                var s = t,
                    i = x.a.PhoneNumberUtil.getInstance(),
                    n = x.a.PhoneNumberFormat;
                e.has_us_number = !1, e.has_unverified_us_number = !1, e.has_pending_us_number = !1, e.has_unverified_au_number = !1, s.forEach((function(t) {
                    "Active" === t.number.status ? t.verification_status = "VERIFIED" : t.verification_status = t.number.status;
                    var s = i.parse(t.number.phone_number),
                        a = yt.a.alpha2ToAlpha3(t.number.country);
                    t.display = {
                        country: a,
                        country_code: s.getCountryCode(),
                        national: i.format(s, n.NATIONAL),
                        full: i.format(s, n.INTERNATIONAL),
                        label: t.assignment.label
                    }, "US" === t.number.country && (e.has_us_number = !0, "NQ" === t.number.status || "REJECTED" === t.number.status ? e.has_unverified_us_number = !0 : "PENDING" !== t.number.status && "SENT" !== t.number.status || (e.has_pending_us_number = !0)), "AU" === t.number.country && ("NQ" !== t.number.status && "REJECTED" !== t.number.status || (e.has_unverified_au_number = !0))
                })), e.user_numbers = s, e.is_initialised = !0
            })), Rt.mutations.SET_NUMBER_EDITING, (function(e, t) {
                e.number_editing = t
            })), Rt.mutations.SET_IS_FETCHING, (function(e, t) {
                e.fetching = t
            })), Rt.mutations.SET_IS_SAVING, (function(e, t) {
                e.saving = t
            })), Rt.mutations.SET_ALPHA_SENDERS, (function(e, t) {
                e.alpha_senders = t || [], e.alpha_initialised = !0
            })), Rt.mutations.SET_IS_ALPHA_FETCHING, (function(e, t) {
                e.alpha_fetching = t
            })), Rt.mutations.SET_IS_ALPHA_INITIALISED, (function(e, t) {
                e.alpha_initialised = !!t
            })), Object(r["a"])(Object(r["a"])({}, Rt.actions.FETCH_USER_NUMBERS, (function(e, t) {
                return new Promise((function(s, i) {
                    e.commit(Rt.mutations.SET_IS_FETCHING, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                        root: !0
                    }), Nt.get(e.rootGetters[dt.getters.GET_BACKEND_URL]("SMS Messaging", "dedicated-numbers")).then((function(t) {
                        e.commit(Rt.mutations.SET_USER_NUMBERS, t.results.numbers), s(t)
                    })).catch((function(t) {
                        e.commit("root/SET_ERROR_MESSAGE", "Oops, something went wrong. Please try again.", {
                            root: !0
                        }), i(t)
                    })).finally((function() {
                        t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                            root: !0
                        }), e.commit(Rt.mutations.SET_IS_FETCHING, !1)
                    }))
                }))
            })), Rt.actions.FETCH_ALPHA_SENDERS, (function(e, t) {
                return new Promise((function(s, i) {
                    e.commit(Rt.mutations.SET_IS_ALPHA_FETCHING, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                        root: !0
                    }), Nt.get(e.rootGetters[dt.getters.GET_BACKEND_URL]("SMS Messaging", "alpha-senders")).then((function(t) {
                        e.commit(Rt.mutations.SET_ALPHA_SENDERS, t.results.alpha_senders), s(t)
                    })).catch((function(t) {
                        e.commit("root/SET_ERROR_MESSAGE", "Oops, could not load alphanumeric senders.", {
                            root: !0
                        }), i(t)
                    })).finally((function() {
                        t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                            root: !0
                        }), e.commit(Rt.mutations.SET_IS_ALPHA_FETCHING, !1)
                    }))
                }))
            })), "settings/"),
            Gt = {
                getters: {
                    GET_IS_SMS_EMAIL_SETTINGS_INITIALISED: Mt + "GET_IS_SMS_EMAIL_SETTINGS_INITIALISED",
                    GET_USER_SMS_EMAIL_SETTINGS: Mt + "GET_USER_SMS_EMAIL_SETTINGS",
                    GET_IS_SMS_GEN_SETTINGS_INITIALISED: Mt + "GET_IS_SMS_GEN_SETTINGS_INITIALISED",
                    GET_USER_SMS_GEN_SETTINGS: Mt + "GET_USER_SMS_GEN_SETTINGS"
                },
                mutations: {
                    SET_USER_SMS_EMAIL_SETTINGS: Mt + "SET_USER_SMS_EMAIL_SETTINGS",
                    SET_IS_FETCHING_SMS_EMAIL_SETTINGS: Mt + "SET_IS_FETCHING_SMS_EMAIL_SETTINGS",
                    SET_USER_SMS_GEN_SETTINGS: Mt + "SET_USER_SMS_GEN_SETTINGS",
                    SET_IS_FETCHING_SMS_GEN_SETTINGS: Mt + "SET_IS_FETCHING_SMS_GEN_SETTINGS"
                },
                actions: {
                    FETCH_USER_SMS_EMAIL_SETTINGS: Mt + "FETCH_USER_SMS_EMAIL_SETTINGS",
                    FETCH_USER_SMS_GEN_SETTINGS: Mt + "FETCH_USER_SMS_GEN_SETTINGS"
                }
            },
            Ut = ct(Mt, Gt),
            jt = {
                is_sms_email_settings_initialised: !1,
                is_fetching_email_settings: !1,
                user_sms_email_settings: [],
                is_sms_gen_settings_initialised: !1,
                is_fetching_gen_settings: !1,
                user_sms_gen_settings: []
            };
        Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, Ut.getters.GET_IS_SMS_EMAIL_SETTINGS_INITIALISED, (function(e) {
            return e.is_sms_email_settings_initialised
        })), Ut.getters.GET_USER_SMS_EMAIL_SETTINGS, (function(e) {
            return e.user_sms_email_settings
        })), Ut.getters.GET_IS_SMS_GEN_SETTINGS_INITIALISED, (function(e) {
            return e.is_sms_gen_settings_initialised
        })), Ut.getters.GET_USER_SMS_GEN_SETTINGS, (function(e) {
            return e.user_sms_gen_settings
        })), Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, Ut.mutations.SET_USER_SMS_EMAIL_SETTINGS, (function(e, t) {
            e.user_sms_email_settings = t, e.is_sms_email_settings_initialised = !0
        })), Ut.mutations.SET_USER_SMS_GEN_SETTINGS, (function(e, t) {
            e.user_sms_gen_settings = t, e.is_sms_gen_settings_initialised = !0
        })), Ut.mutations.SET_IS_FETCHING_SMS_EMAIL_SETTINGS, (function(e, t) {
            e.is_fetching_email_settings = t
        })), Ut.mutations.SET_IS_FETCHING_SMS_GEN_SETTINGS, (function(e, t) {
            e.is_fetching_gen_settings = t
        })), Object(r["a"])(Object(r["a"])({}, Ut.actions.FETCH_USER_SMS_EMAIL_SETTINGS, (function(e, t) {
            if (!jt.is_fetching_email_settings) return new Promise((function(s, i) {
                e.commit(Ut.mutations.SET_IS_FETCHING_SMS_EMAIL_SETTINGS, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                    root: !0
                }), Nt.get(e.rootGetters[dt.getters.GET_BACKEND_URL]("SMS Messaging", "email-settings")).then((function(t) {
                    e.commit(Ut.mutations.SET_USER_SMS_EMAIL_SETTINGS, t.results), s(t)
                })).catch((function(t) {
                    e.commit("root/SET_ERROR_MESSAGE", "Oops, something went wrong. Please try again.", {
                        root: !0
                    }), i(t)
                })).finally((function() {
                    t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                        root: !0
                    }), e.commit(Ut.mutations.SET_IS_FETCHING_SMS_EMAIL_SETTINGS, !1)
                }))
            }))
        })), Ut.actions.FETCH_USER_SMS_GEN_SETTINGS, (function(e, t) {
            if (!jt.is_fetching_gen_settings) return new Promise((function(s, i) {
                e.commit(Ut.mutations.SET_IS_FETCHING_SMS_GEN_SETTINGS, !0), t && e.commit("root/SET_IS_QUIET_REQUEST", !0, {
                    root: !0
                }), Nt.get(e.rootGetters[dt.getters.GET_BACKEND_URL]("SMS Messaging", "send-settings")).then((function(t) {
                    e.commit(Ut.mutations.SET_USER_SMS_GEN_SETTINGS, t.results.send_settings), s(t)
                })).catch((function(t) {
                    e.commit("root/SET_ERROR_MESSAGE", "Oops, something went wrong. Please try again.", {
                        root: !0
                    }), i(t)
                })).finally((function() {
                    t && e.commit("root/SET_IS_QUIET_REQUEST", !1, {
                        root: !0
                    }), e.commit(Ut.mutations.SET_IS_FETCHING_SMS_GEN_SETTINGS, !1)
                }))
            }))
        }));

        function xt(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), s.push.apply(s, i)
            }
            return s
        }

        function Dt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? xt(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : xt(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }))
            }
            return e
        }
        var Lt = {
                name: "smsNumbers",
                mixins: [S, E, O],
                components: {
                    AjaxLoadingSpinner: Tt
                },
                props: {
                    userData: Object
                },
                data: function() {
                    return {
                        requestPoint: this.$config.requestPoint,
                        dedicatedNumberCosts: this.$config.dedicatedNumberCosts,
                        displayDedicatedNumbersColumns: this.$config.displayDedicatedNumbersColumns,
                        contexts: this.$config.contexts,
                        columnIsSaving: !1,
                        shownColumns: {},
                        clientTimezone: null,
                        datestamp_format: Object,
                        billingSummary: Object,
                        firstLoad: !0,
                        showSmsPurchase: !1,
                        loadingAvailable: !1,
                        showSuccess: !1,
                        apMetadata: {}
                    }
                },
                created: function() {
                    this.mixinEventListener_register(Object(r["a"])(Object(r["a"])({}, l.AVAILABLE_LOADING_DONE, this.showPurchase), l.VERIFICATION_SUBMITTED, this.showVerificationSuccess)), this.mixinEventListener_on()
                },
                mounted: function() {
                    document.addEventListener("click", this.handleClickOutsideColumnToggler, !0), this.$eventBus.$on("toggle-dropdown", this.handleDropdownEvent)
                },
                beforeDestroy: function() {
                    document.removeEventListener("click", this.handleClickOutsideColumnToggler, !0), this.$eventBus.$off("toggle-dropdown", this.handleDropdownEvent)
                },
                destroyed: function() {
                    this.mixinEventListener_off()
                },
                methods: Dt(Dt({}, Object(st["b"])({
                    setNumbers: wt.mutations.SET_USER_NUMBERS,
                    setNumberEditing: wt.mutations.SET_NUMBER_EDITING
                })), {}, {
                    init: function(e, t, s) {
                        var i = this;
                        this.clientTimezone = e, void 0 !== e && null !== e && "" !== e || (this.clientTimezone = nt.a.tz.guess()), this.apMetadata = s, this.numbersInitialised || this.gettingNumbers || this.$store.dispatch(wt.actions.FETCH_USER_NUMBERS, !this.firstLoad), this.firstLoad = !1, this.displayDedicatedNumbersColumns.forEach((function(e) {
                            var t = "show_sms_numbers_" + e["id"];
                            void 0 != s && "app_settings" in s && t in s.app_settings && i.$set(e, "active", s.app_settings[t]), i.$set(i.shownColumns, e["id"], e["active"])
                        }))
                    },
                    loadAvailable: function() {
                        this.loadingAvailable = !0, this.$eventBus.$emit(l.LOAD_AVAILABLE_NUMBERS)
                    },
                    showPurchase: function() {
                        this.loadingAvailable = !1, this.switchContext(this.contexts.SETTINGS_PURCHASE)
                    },
                    doSearch: function() {
                        this.$store.dispatch(wt.actions.FETCH_USER_NUMBERS, !0)
                    },
                    getPeriodDisplay: function(e) {
                        return nt.a.unix(e).format("MMM Do YYYY")
                    },
                    getStatusClass: function(e) {
                        switch (e.verification_status) {
                            case "NA":
                                return "indicator-active";
                            case "NQ":
                                return "indicator-unverified";
                            case "PENDING":
                                return "indicator-submitted";
                            case "REJECTED":
                                return "undefined" != typeof this.userData && "undefined" != typeof this.userData["sms_banned"] && this.userData["sms_banned"] ? "indicator-blocked" : "indicator-rejected";
                            case "SENT":
                                return "indicator-submitted";
                            case "process_underway":
                                return "indicator-onfido";
                            case "VERIFIED":
                                return "indicator-active";
                            default:
                                return ""
                        }
                    },
                    getForwardRepliesText: function(e) {
                        var t = this.emailSettings && this.emailSettings.forwarding_address && "" !== this.emailSettings.forwarding_address ? " (" + this.emailSettings.forwarding_address + ")" : " (Off)",
                            s = "Default" + t;
                        return e.meta && e.meta.forward_replies && (s = 1 === e.meta.forward_replies.length && "off" === e.meta.forward_replies[0] ? "Off" : e.meta.forward_replies.join(",")), s
                    },
                    showVerificationSuccess: function() {
                        this.showSuccess = !0
                    },
                    handleDropdownEvent: function(e) {
                        "columnDropdown" !== e.dropdown && "opening" === e.action && this.mixinTriggerable_isOpen && (this.mixinTriggerable_toggleOpened(), this.$refs.columnToggler.classList.remove("is-active"))
                    },
                    toggleColumn: function(e) {
                        var t = this.shownColumns[e.id];
                        this.$set(this.shownColumns, e.id, !t), this.$set(e, "active", !t), this.saveColumn()
                    },
                    columnTogglerClick: function(e) {
                        e.stopPropagation();
                        var t = this.mixinTriggerable_isOpen,
                            s = t ? "closing" : "opening";
                        this.mixinTriggerable_toggleOpened(), this.$refs.columnToggler.classList.toggle("is-active", this.mixinTriggerable_isOpen), this.$eventBus.$emit("toggle-dropdown", {
                            action: s,
                            dropdown: "columnDropdown"
                        })
                    },
                    isColumnActive: function(e) {
                        var t = !1;
                        return this.activeColumns.forEach((function(s) {
                            s.id == e && (t = !0)
                        })), t
                    },
                    saveColumn: function() {
                        var e = this;
                        this.columnIsSaving = !0;
                        var t = !0,
                            s = {
                                shown_columns: JSON.stringify(this.shownColumns),
                                table: "numbers"
                            };
                        this.mixinAjax_put(this.requestPoint, "save-columns", s, (function() {
                            e.columnIsSaving = !1
                        }), (function() {
                            e.columnIsSaving = !1
                        }), t)
                    },
                    openTypeform: function(e) {
                        this.$eventBus.$emit(l.SHOW_VERIFICATION_FORM, !0, e)
                    },
                    openAUVerification: function(e) {
                        var t = e.verification && e.verification.verification_url;
                        t && (this.mixinAjax_post(this.requestPoint, "mark-au-verification-opened", {
                            number: e.number.phone_number
                        }, (function() {}), (function() {}), !0), e.verification_status = "process_underway", window.open(t, "_blank"))
                    },
                    reopenAUVerification: function(e) {
                        var t = e.verification && e.verification.verification_url;
                        t && window.open(t, "_blank")
                    },
                    handleClickOutsideColumnToggler: function(e) {
                        this.$refs.columnDropdown && !this.$refs.columnDropdown.contains(e.target) && this.removeIsActiveClassToggler()
                    },
                    removeIsActiveClassToggler: function() {
                        var e = this.$refs.columnToggler;
                        e && e.classList.contains("is-active") && e.classList.remove("is-active")
                    },
                    switchContext: function(e) {
                        this.$eventBus.$emit(l.SWITCH_CONTEXT, e)
                    },
                    goToEdit: function(e) {
                        this.setNumberEditing(e), this.switchContext(this.contexts.SETTINGS_NUMBER_EDIT)
                    },
                    getDateFormat: function(e) {
                        return nt.a.unix(e).format("MMMM Do, YYYY")
                    }
                }),
                computed: Dt(Dt({}, Object(st["a"])({
                    numbers: wt.getters.GET_USER_NUMBERS,
                    numbersInitialised: wt.getters.GET_IS_INITIALISED,
                    gettingNumbers: wt.getters.GET_IS_FETCHING,
                    isSaving: wt.getters.GET_IS_SAVING,
                    hasUnverified: wt.getters.GET_HAS_UNVERIFIED_US_NUMBER,
                    emailSettings: Gt.getters.GET_USER_SMS_EMAIL_SETTINGS
                })), {}, {
                    activeColumns: function() {
                        return this.displayDedicatedNumbersColumns.filter((function(e) {
                            return e.active
                        }))
                    },
                    columnFilters: function() {
                        return this.displayDedicatedNumbersColumns.filter((function(e) {
                            return e.filterable
                        }))
                    }
                }),
                watch: {
                    showSmsPurchase: function(e) {
                        this.hasUnverified && this.$eventBus.$emit(l.SET_SHOW_BAR_NOTICE, !e)
                    },
                    hasUnverified: function(e) {
                        this.showSmsPurchase || this.$eventBus.$emit(l.SET_SHOW_BAR_NOTICE, e)
                    }
                }
            },
            Pt = Lt,
            kt = Object(M["a"])(Pt, et, tt, !1, null, null, null),
            Bt = kt.exports,
            Ht = function() {
                var e = this,
                    t = e._self._c;
                return t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/splash-smsmessaging-topup.png",
                        alt: "SMTP2GO"
                    }
                })
            },
            Ft = [],
            $t = {},
            qt = Object(M["a"])($t, Ht, Ft, !1, null, null, null),
            zt = qt.exports,
            Vt = s("d13c");

        function Qt(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), s.push.apply(s, i)
            }
            return s
        }

        function Wt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Qt(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Qt(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }))
            }
            return e
        }
        var Jt = new Image;
        Jt.src = "/static/smtp2go_assets/splash-smsmessaging-topup.png", Jt.decode(), ze.a.registerLocale(Vt);
        var Yt = ["AL", "AS", "AD", "AO", "AI", "AG", "AW", "AT", "BH", "BB", "BM", "BO", "BA", "BW", "BN", "BF", "KH", "CV", "KY", "CF", "CK", "HR", "CY", "DK", "DJ", "DM", "DO", "GQ", "ER", "EE", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "GM", "GE", "DE", "GI", "GL", "GD", "GP", "GT", "GY", "HN", "IS", "IL", "IT", "JM", "JP", "KI", "XK", "LA", "LV", "LS", "LI", "LT", "LU", "MO", "MK", "MV", "ML", "MT", "MQ", "MR", "MU", "MD", "MC", "MN", "ME", "MS", "MZ", "NA", "NL", "AN", "NC", "NF", "PW", "PA", "PG", "PL", "PT", "RE", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SN", "SC", "SL", "SK", "SI", "SB", "SO", "ES", "SR", "SE", "CH", "TL", "TG", "TO", "TT", "TC", "TV", "UA", "GB", "VU", "VG", "ZW", "ALBANIA", "AMERICAN SAMOA", "ANDORRA", "ANGOLA", "ANGUILA", "ANGUILLA", "ANTIGUA AND BARBUDA", "ARUBA", "AUSTRIA", "BAHRAIN", "BARBADOS", "BERMUDA", "BOLIVIA", "BOSNIA AND HERZEGOVINA", "BOTSWANA", "BRUNEI DARUSSALAM", "BURKINA FASO", "CAMBODIA", "CAPE VERDE", "CAYMAN ISLANDS", "CENTRAL AFRICAN REPUBLIC", "COOK ISLANDS", "CROATIA", "CYPRUS", "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICAN REPUBLIC", "EQUATORIAL GUINEA", "ERITREA", "ESTONIA", "FALKLAND ISLANDS (MALVINAS)", "FALKLAND ISLANDS", "FAROE ISLANDS", "FIJI", "FINLAND", "FRANCE", "FRENCH GUYANA", "FRENCH POLYNESIA", "GAMBIA", "GEORGIA", "GERMANY", "GIBRALTAR", "GREENLAND", "GRENADA", "GUADELOUPE", "GUATEMALA", "GUYANA", "HONDURAS", "ICELAND", "ISRAEL", "ITALY", "JAMAICA", "JAPAN", "KIRIBATI", "KOSOVO", "LAOS PDR", "LAOS", "LATVIA", "LESOTHO", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MACAO", "MACEDONIA", "NORTH MACEDONIA", "MALDIVES", "MALI", "MALTA", "MARTINIQUE", "MAURITANIA", "MAURITIUS", "MOLDOVA", "MONACO", "MONGOLIA", "MONTENEGRO", "MONTSERRAT", "MOZAMBIQUE", "NAMIBIA", "NETHERLANDS", "NETHERLANDS ANTILLES", "NEW CALEDONIA", "NORFOLK ISLAND", "PALAU", "PANAMA", "PAPUA NEW GUINEA", "POLAND", "PORTUGAL", "REUNION", "SAINT KITTS & NEVIS", "SAINT LUCIA", "SAINT PIERRE AND MIQUELON", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SAN MARINO", "SAO TOME AND PRINCIPE", "SENEGAL", "SEYCHELLES", "SIERRA LEONE", "SLOVAKIA", "SLOVENIA", "SOLOMON ISLANDS", "SOMALIA", "SPAIN", "SURINAME", "SWEDEN", "SWITZERLAND", "TIMOR-LESTE", "TOGO", "TONGA", "TRINIDAD & TOBAGO", "TURKS AND CAICOS ISLANDS", "TUVALU", "UKRAINE", "UNITED KINGDOM", "VANUATU", "VIRGIN ISLANDS, BRITISH", "ZIMBABWE"],
            Kt = {
                name: "SMSSettingsPageTab",
                mixins: [pe],
                data: function() {
                    return {
                        smsAccount: PAGE_DATA.sms_account,
                        notChargebee: PAGE_DATA.show_switch_processor_splash,
                        forwardingAddress: "",
                        originalForwardingAddress: "",
                        requestPoint: this.$config.requestPoint,
                        contexts: this.$config.contexts,
                        email2sms: !1,
                        socialSendingOrig: !1,
                        socialSending: !1,
                        smartEncodingOrig: !1,
                        smartEncoding: !1,
                        prepayActive: !1,
                        prepayTransitionStage: 0,
                        manualTransitionTopup: !1,
                        autoRechargeOrig: !1,
                        autoRecharge: !1,
                        rechargeThreshold: "",
                        rechargeThresholdOrig: "",
                        rechargeAmount: 50,
                        rechargeAmountOrig: "",
                        rechargeLimit: "",
                        rechargeLimitOrig: "",
                        dailyLimit: 200,
                        dailyLimitOrig: "",
                        prepayBalance: 0,
                        prepayBalanceDisplay: "--",
                        topupAmount: 30,
                        toppingUp: !1,
                        oversizeMessageTruncationOrig: !1,
                        oversizeMessageTruncation: !1,
                        dialogActive: !1,
                        pendingUrl: null,
                        activeSaveButton: null,
                        startTimeOrig: "08:00",
                        startTime: "08:00",
                        timeZoneOrig: {
                            id: "default",
                            text: "Pick the time zone"
                        },
                        timeZone: {
                            id: "default",
                            text: "Pick the time zone"
                        },
                        endTimeOrig: "18:00",
                        endTime: "18:00",
                        defaultNumberOrig: "shared",
                        defaultNumber: "shared",
                        sendSettings: {},
                        requested: !1,
                        updating: !1,
                        updatingDedicated: !1,
                        hadTimeError: !1,
                        offsetsAdded: !1,
                        numOffsetsAdded: 0,
                        totalQuota: "-",
                        sentThisMonth: "0",
                        slider: "5 units",
                        sliderOrig: "5 units",
                        sliderIsLoading: !1,
                        showPrepaidTransitionSplash: !1,
                        activePopup: null,
                        verifiedSenders: [],
                        verifiedDomains: [],
                        userData: PAGE_DATA.user_data,
                        sliderValues: [{
                            label: "(160 standard characters)",
                            value: "1 unit"
                        }, {
                            label: "(306 standard characters)",
                            value: "2 units"
                        }, {
                            label: "(459 standard characters)",
                            value: "3 units"
                        }, {
                            label: "(612 standard characters)",
                            value: "4 units"
                        }, {
                            label: "(765 standard characters)",
                            value: "5 units"
                        }, {
                            label: "(918 standard characters)",
                            value: "6 units"
                        }, {
                            label: "(1071 standard characters)",
                            value: "7 units"
                        }, {
                            label: "(1224 standard characters)",
                            value: "8 units"
                        }, {
                            label: "(1377 standard characters)",
                            value: "9 units"
                        }, {
                            label: "(1530 standard characters)",
                            value: "10 units"
                        }],
                        zones: [
                            [{
                                id: "Pacific/Pago_Pago",
                                name: "Midway Island, Samoa"
                            }, {
                                id: "Pacific/Honolulu",
                                name: "Hawaii"
                            }, {
                                id: "Pacific/Marquesas",
                                name: "Marquesas Islands"
                            }, {
                                id: "America/Adak",
                                name: "Hawaii-Aleutian"
                            }, {
                                id: "America/Anchorage",
                                name: "Alaska"
                            }, {
                                id: "Pacific/Gambier",
                                name: "Gambier Islands"
                            }, {
                                id: "America/Tijuana",
                                name: "Tijuana, Baja California"
                            }, {
                                id: "America/Los_Angeles",
                                name: "Pacific Time (US and Canada)"
                            }, {
                                id: "US/Arizona",
                                name: "Arizona"
                            }, {
                                id: "America/Denver",
                                name: "Mountain Time (US and Canada)"
                            }, {
                                id: "America/Chihuahua",
                                name: "Chihuahua, La Paz, Mazatlan"
                            }, {
                                id: "Canada/Saskatchewan",
                                name: "Saskatchewan, Central America"
                            }, {
                                id: "America/Mexico_City",
                                name: "Guadalajara, Mexico City"
                            }, {
                                id: "America/Chicago",
                                name: "Central Time (US and Canada)"
                            }, {
                                id: "America/Bogota",
                                name: "Bogota, Lima, Quito, Rio Branco"
                            }, {
                                id: "America/Detroit",
                                name: "Eastern Time (US and Canada)"
                            }, {
                                id: "America/Havana",
                                name: "Cuba"
                            }],
                            [{
                                id: "America/Caracas",
                                name: "Caracas"
                            }, {
                                id: "America/Santiago",
                                name: "Santiago"
                            }, {
                                id: "America/La_Paz",
                                name: "La Paz"
                            }, {
                                id: "Brazil/West",
                                name: "Brazil"
                            }, {
                                id: "America/Goose_Bay",
                                name: "Atlantic Time (Goose Bay)"
                            }, {
                                id: "Canada/Atlantic",
                                name: "Atlantic Time (Canada)"
                            }, {
                                id: "America/Montevideo",
                                name: "Montevideo"
                            }, {
                                id: "America/Buenos_Aires",
                                name: "Buenos Aires"
                            }, {
                                id: "Brazil/East",
                                name: "Brasilia"
                            }, {
                                id: "Canada/Newfoundland",
                                name: "Newfoundland"
                            }, {
                                id: "America/Miquelon",
                                name: "Miquelon, St. Pierre"
                            }, {
                                id: "Atlantic/South_Georgia",
                                name: "Mid-Atlantic"
                            }, {
                                id: "Atlantic/Cape_Verde",
                                name: "Cape Verde Is."
                            }, {
                                id: "Atlantic/Azores",
                                name: "Azores"
                            }, {
                                id: "Atlantic/Reykjavik",
                                name: "Monrovia, Reykjavik"
                            }, {
                                id: "Europe/Dublin",
                                name: "Greenwich Mean Time: Dublin"
                            }],
                            [{
                                id: "Europe/Lisbon",
                                name: "Greenwich Mean Time: Lisbon"
                            }, {
                                id: "Europe/London",
                                name: "Greenwich Mean Time: London"
                            }, {
                                id: "Africa/Lagos",
                                name: "West Central Africa"
                            }, {
                                id: "Europe/Berlin",
                                name: "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
                            }, {
                                id: "Europe/Belgrade",
                                name: "Belgrade, Bratislava, Budapest, Prague"
                            }, {
                                id: "Europe/Brussels",
                                name: "Brussels, Copenhagen, Madrid, Paris"
                            }, {
                                id: "Africa/Windhoek",
                                name: "Windhoek"
                            }, {
                                id: "Africa/Cairo",
                                name: "Cairo"
                            }, {
                                id: "Africa/Harare",
                                name: "Harare, Pretoria"
                            }, {
                                id: "Asia/Beirut",
                                name: "Beirut"
                            }, {
                                id: "Asia/Gaza",
                                name: "Gaza"
                            }, {
                                id: "Asia/Jerusalem",
                                name: "Jerusalem"
                            }, {
                                id: "Europe/Minsk",
                                name: "Minsk"
                            }, {
                                id: "Asia/Damascus",
                                name: "Syria"
                            }, {
                                id: "Europe/Moscow",
                                name: "Moscow, St Petersburg, Volgograd"
                            }, {
                                id: "Africa/Nairobi",
                                name: "Nairobi"
                            }, {
                                id: "Asia/Muscat",
                                name: "Abu Dhabi, Muscat"
                            }],
                            [{
                                id: "Asia/Tehran",
                                name: "Tehran"
                            }, {
                                id: "Asia/Kabul",
                                name: "Kabul"
                            }, {
                                id: "Asia/Yekaterinburg",
                                name: "Yekaterinburg"
                            }, {
                                id: "Asia/Tashkent",
                                name: "Tashkent"
                            }, {
                                id: "Asia/Kolkata",
                                name: "Chennai, Kolkata, Mumbai"
                            }, {
                                id: "Asia/Kathmandu",
                                name: "Kathmandu"
                            }, {
                                id: "Asia/Dhaka",
                                name: "Astana, Dhaka"
                            }, {
                                id: "Asia/Rangoon",
                                name: "Yangon (Rangoon)"
                            }, {
                                id: "Asia/Novosibirsk",
                                name: "Novosibirsk"
                            }, {
                                id: "Asia/Jakarta",
                                name: "Bangkok, Hanoi, Jakarta"
                            }, {
                                id: "Asia/Krasnoyarsk",
                                name: "Krasnoyarsk"
                            }, {
                                id: "Asia/Shanghai",
                                name: "Beijing, Chongqing, Hong Kong"
                            }, {
                                id: "Asia/Ulaanbaatar",
                                name: "Irkutsk, Ulaan Baatar"
                            }, {
                                id: "Australia/Perth",
                                name: "Perth"
                            }, {
                                id: "Australia/Eucla",
                                name: "Eucla"
                            }, {
                                id: "Asia/Tokyo",
                                name: "Osaka, Sapporo, Tokyo"
                            }, {
                                id: "Asia/Seoul",
                                name: "Seoul"
                            }],
                            [{
                                id: "Asia/Yakutsk",
                                name: "Yakutsk"
                            }, {
                                id: "Australia/Adelaide",
                                name: "Adelaide"
                            }, {
                                id: "Australia/Darwin",
                                name: "Darwin"
                            }, {
                                id: "Australia/Melbourne",
                                name: "Melbourne"
                            }, {
                                id: "Australia/Brisbane",
                                name: "Brisbane"
                            }, {
                                id: "Australia/Canberra",
                                name: "Canberra"
                            }, {
                                id: "Australia/Hobart",
                                name: "Hobart"
                            }, {
                                id: "Australia/Sydney",
                                name: "Sydney"
                            }, {
                                id: "Asia/Vladivostok",
                                name: "Vladivostok"
                            }, {
                                id: "Australia/Lord_Howe",
                                name: "Lord Howe Island"
                            }, {
                                id: "Pacific/Norfolk",
                                name: "Norfolk Island"
                            }, {
                                id: "Asia/Kamchatka",
                                name: "Anadyr, Kamchatka"
                            }, {
                                id: "Pacific/Auckland",
                                name: "Auckland, Wellington"
                            }, {
                                id: "Pacific/Fiji",
                                name: "Fiji, Kamchatka, Marshall Is."
                            }, {
                                id: "Pacific/Chatham",
                                name: "Chatham Islands"
                            }, {
                                id: "Pacific/Kiritimati",
                                name: "Kiritimati"
                            }, {
                                id: "Pacific/Tongatapu",
                                name: "Nuku'alofa"
                            }]
                        ],
                        endTag: "{end}",
                        originalEndTag: "{end}",
                        includeSubject: !1,
                        originalIncludeSubject: !1,
                        smsEnabled: !0,
                        originalSMSEnabled: !0,
                        smsBounceNotifications: !0,
                        originalSmsBounceNotifications: !0,
                        returnToSender: !0,
                        originalReturnToSender: !0,
                        bounceTarget: "",
                        originalBounceTarget: ""
                    }
                },
                components: {
                    SMSNumbers: Bt,
                    TopupSplashImage: zt
                },
                props: {
                    context: String,
                    apMetadata: Object,
                    clientTimezone: String
                },
                computed: Wt(Wt({}, Object(d["b"])({
                    emailSettings: xe.getters.GET_USER_SMS_EMAIL_SETTINGS,
                    emailSettingsInitialised: xe.getters.GET_IS_SMS_EMAIL_SETTINGS_INITIALISED,
                    genSettings: xe.getters.GET_USER_SMS_GEN_SETTINGS,
                    genSettingsInitialised: xe.getters.GET_IS_SMS_GEN_SETTINGS_INITIALISED,
                    numbers: Qe.getters.GET_USER_NUMBERS,
                    numbersInitialised: Qe.getters.GET_IS_INITIALISED,
                    rechargeSettings: xe.getters.GET_USER_RECHARGE_SETTINGS,
                    rechargeSettingsInitialised: xe.getters.GET_IS_RECHARGE_SETTINGS_INITIALISED,
                    cardDetails: xe.getters.GET_USER_CARD_DETAILS,
                    paymentMethod: xe.getters.GET_USER_PAYMENT_METHOD,
                    paypalEmail: xe.getters.GET_USER_PAYPAL_EMAIL,
                    gettingNumbers: Qe.getters.GET_IS_FETCHING,
                    alphaSenders: Qe.getters.GET_ALPHA_SENDERS,
                    alphaInitialised: Qe.getters.GET_IS_ALPHA_INITIALISED,
                    gettingAlpha: Qe.getters.GET_IS_ALPHA_FETCHING
                })), {}, {
                    isTelnyxAccount: function() {
                        return this.smsAccount && this.smsAccount.startsWith("tnyx")
                    },
                    allSettingsInitialised: function() {
                        return this.emailSettingsInitialised && this.genSettingsInitialised && this.numbersInitialised && this.rechargeSettingsInitialised
                    },
                    validPaymentMethod: function() {
                        return ["card", "paypal_express_checkout", "direct_debit"].includes(this.paymentMethod)
                    },
                    enabledText: function() {
                        return this.emailSettingsInitialised ? this.emailSettings["sms_enabled"] ? "enabled." : "disabled." : "--"
                    },
                    numbersText: function() {
                        return this.numbersInitialised ? this.numbers.length : "--"
                    },
                    socialChanged: function() {
                        return this.socialSending != this.socialSendingOrig || this.startTime != this.startTimeOrig || this.timeZone != this.timeZoneOrig || this.endTime != this.endTimeOrig
                    },
                    defaultNumberChanged: function() {
                        return this.defaultNumber != this.defaultNumberOrig
                    },
                    smartEncodingChanged: function() {
                        return this.smartEncoding != this.smartEncodingOrig
                    },
                    oversizeMessageTruncationChanged: function() {
                        return this.oversizeMessageTruncation != this.oversizeMessageTruncationOrig
                    },
                    sliderChanged: function() {
                        return this.sliderOrig != this.slider
                    },
                    validTime: function() {
                        var e = parseInt(this.startTime.replace(":", "")),
                            t = parseInt(this.endTime.replace(":", ""));
                        return e < t
                    },
                    settingsChanged: function() {
                        return this.generalSettingsChanged || this.email2smsSettingsChanged || this.rechargeSettingsChanged
                    },
                    currentTabSettingsChanged: function() {
                        switch (this.activeTab) {
                            case "general":
                                return this.generalSettingsChanged;
                            case "dedicated":
                                return !1;
                            case "recharge":
                                return this.rechargeSettingsChanged;
                            case "topup":
                                return !1;
                            case "email2sms":
                                return this.email2smsSettingsChanged;
                            default:
                                return !1
                        }
                    },
                    generalSettingsChanged: function() {
                        return this.dailyLimit != this.dailyLimitOrig || this.sliderChanged || this.oversizeMessageTruncationChanged || this.forwardingAddress != this.originalForwardingAddress || this.defaultNumberChanged || this.socialChanged || this.smartEncodingChanged
                    },
                    rechargeSettingsChanged: function() {
                        return this.autoRecharge != this.autoRechargeOrig || this.rechargeThreshold != this.rechargeThresholdOrig || this.rechargeAmount != this.rechargeAmountOrig || this.rechargeLimit != this.rechargeLimitOrig
                    },
                    email2smsSettingsChanged: function() {
                        return this.endTag != this.originalEndTag || this.includeSubject != this.originalIncludeSubject || this.smsEnabled != this.originalSMSEnabled || this.smsBounceNotifications != this.originalSmsBounceNotifications || this.returnToSender != this.originalReturnToSender || this.bounceTarget != this.originalBounceTarget
                    },
                    activeTab: function() {
                        switch (this.context) {
                            case this.contexts.TAB_SETTINGS:
                                return "general";
                            case this.contexts.TAB_NUMBERS:
                                return "dedicated";
                            case this.contexts.TAB_SENDERIDS:
                                return "senderids";
                            case this.contexts.TAB_RECHARGE:
                                return "recharge";
                            case this.contexts.TAB_TOPUP:
                                return "topup";
                            case this.contexts.TAB_EMAIL2SMS:
                                return "email2sms";
                            default:
                                return "general"
                        }
                    },
                    showAlertIcon: function() {
                        return 1 == this.prepayTransitionStage
                    },
                    hasID: function() {
                        return this.userData.alphanumeric_sender_requests.length > 0
                    },
                    senderIDTableRows: function() {
                        var e = this.userData.alphanumeric_sender_requests;
                        return Array.isArray(e) ? e.map((function(e) {
                            return Wt(Wt({}, e), {}, {
                                status: e.approved ? "Active" : "Pending"
                            })
                        })).sort((function(e, t) {
                            var s = (e.country || "").toLowerCase(),
                                i = (t.country || "").toLowerCase();
                            return s.localeCompare(i)
                        })) : []
                    }
                }),
                mounted: function() {
                    window.addEventListener("beforeunload", this.beforeUnloadHandler, {
                        capture: !0
                    }), document.body.addEventListener("click", this.interceptExternalLinkClicks, !0), document.addEventListener("click", this.handleOutsideClick), this.$eventBus.$on(l.SENDER_ID_SUBMITTED, this.addSenderIDLocal)
                },
                beforeDestroy: function() {
                    window.removeEventListener("beforeunload", this.beforeUnloadHandler, {
                        capture: !0
                    }), document.body.removeEventListener("click", this.interceptExternalLinkClicks, !0), document.removeEventListener("click", this.handleOutsideClick), this.$eventBus.$off(l.SENDER_ID_SUBMITTED, this.addSenderIDLocal)
                },
                methods: Wt(Wt({}, Object(d["c"])({
                    setSettings: xe.mutations.SET_USER_SMS_EMAIL_SETTINGS
                })), {}, {
                    init: function() {
                        this.prepayActive = this.apMetadata && this.apMetadata.hasOwnProperty("app_settings") && this.apMetadata["app_settings"].hasOwnProperty("prepay_is_active") && this.apMetadata["app_settings"].prepay_is_active, this.apMetadata && this.apMetadata.hasOwnProperty("app_settings") && this.apMetadata["app_settings"].hasOwnProperty("prepay_transition_stage") && (this.prepayTransitionStage = this.apMetadata["app_settings"].prepay_transition_stage, 1 == this.prepayTransitionStage && (this.showPrepaidTransitionSplash = !0)), this.emailSettingsInitialised || this.$store.dispatch(xe.actions.FETCH_USER_SMS_EMAIL_SETTINGS, !0), this.genSettingsInitialised || this.$store.dispatch(xe.actions.FETCH_USER_SMS_GEN_SETTINGS, !0), this.numbersInitialised || this.gettingNumbers || this.$store.dispatch(Qe.actions.FETCH_USER_NUMBERS, !0), this.alphaInitialised || this.$store.dispatch(Qe.actions.FETCH_ALPHA_SENDERS, !0), this.rechargeSettingsInitialised || this.$store.dispatch(xe.actions.FETCH_USER_RECHARGE_SETTINGS, !0), this.hadTimeError = !1
                    },
                    iso2: function(e) {
                        if (!e) return "";
                        var t = ze.a.getAlpha2Code(e, "en");
                        return t ? t.toLowerCase() : ""
                    },
                    flagClass: function(e) {
                        var t = this.iso2(e);
                        return t ? "icon-flag is-".concat(t) : "icon-flag is-generic"
                    },
                    removeAlphaSender: function(e) {
                        var t = this,
                            s = {
                                country: e
                            };
                        this.mixinAjax_post(this.requestPoint, "remove-alphanumeric-sender", s, (function() {
                            t.userData.alphanumeric_sender_requests = t.userData.alphanumeric_sender_requests.filter((function(t) {
                                return t.country !== e
                            }))
                        }), (function(e) {
                            HTML.handleError(e.responseJSON)
                        }), !0)
                    },
                    addSenderIDLocal: function(e) {
                        if (e) {
                            Array.isArray(this.userData.alphanumeric_sender_requests) || this.$set(this.userData, "alphanumeric_sender_requests", []);
                            var t = e.country || "",
                                s = t.split("-"),
                                i = "";
                            i = s.length > 1 ? s[1].trim() : s[0].trim();
                            var n = Yt.includes(i.toUpperCase()),
                                a = {
                                    submission_id: e.submission_id || null,
                                    country: e.country || "",
                                    requested_sender_id: e.requested_sender_id || "",
                                    approved: n || Boolean(e.approved)
                                };
                            this.userData.alphanumeric_sender_requests = this.userData.alphanumeric_sender_requests.filter((function(e) {
                                return e.country !== a.country
                            })), this.userData.alphanumeric_sender_requests.push(a), this.userData.alphanumeric_sender_requests.sort((function(e, t) {
                                return (e.country || "").toLowerCase().localeCompare((t.country || "").toLowerCase())
                            }))
                        }
                    },
                    topupNow: function() {
                        var e = this;
                        if (this.topupAmount < 5 || this.topupAmount > 2e3) HTML.handleError({
                            error: "Please enter a topup amount between $5 and $2,000."
                        });
                        else {
                            this.toppingUp = !0;
                            var t = {
                                topup_amount: this.topupAmount
                            };
                            this.mixinAjax_post(this.requestPoint, "prepaid-sms-messages", t, (function(t) {
                                HTML.alertUser("success", "Topup successful"), t && t.responseJSON && t.responseJSON.results && null != t.responseJSON.results.prepay_balance ? (e.prepayBalance = parseFloat(t.responseJSON.results.prepay_balance), e.prepayBalanceDisplay = e.prepayBalance.toFixed(2), 1 == e.prepayTransitionStage && (e.prepayTransitionStage = 2, e.prepayActive = !0, e.showPrepaidTransitionSplash = !1, e.apMetadata && e.apMetadata.app_settings && (e.apMetadata.app_settings.prepay_is_active = !0, e.apMetadata.app_settings.prepay_transition_stage = 2))) : e.prepayBalanceDisplay = "--", e.toppingUp = !1
                            }), (function(t) {
                                HTML.handleError(t.responseJSON), e.toppingUp = !1
                            }), !0)
                        }
                    },
                    getQuotaSummary: function() {
                        var e = this;
                        this.mixinAjax_get(this.requestPoint, "check-remaining-quota", null, (function(t) {
                            e.totalQuota = t.responseJSON.results.quotaSummary.total_quota[0], e.sentThisMonth = t.responseJSON.results.quotaSummary.total_quota[0] - t.responseJSON.results.quotaSummary.remaining_quota[0], e.emitQuotaChanges()
                        }), (function(e) {
                            HTML.handleError(e.responseJSON)
                        }), !0)
                    },
                    emitQuotaChanges: function() {
                        this.$eventBus.$emit("update-quota-sentThisMonth", this.totalQuota, this.sentThisMonth)
                    },
                    switchContext: function(e) {
                        this.$eventBus.$emit(l.SWITCH_CONTEXT, e)
                    },
                    scrollToTop: function() {
                        window.scrollTo(0, 0)
                    },
                    setValues: function() {
                        var e = this;
                        if (this.verifiedSenders = this.emailSettings["verified_senders"], this.verifiedDomains = this.emailSettings["verified_domains"], this.originalForwardingAddress = this.emailSettings.forwarding_address, this.forwardingAddress = this.originalForwardingAddress, this.genSettings["default_sender_"] && (this.defaultNumber = this.genSettings["default_sender"]), this.genSettings["timezone"] && "default" != this.genSettings["timezone"]) {
                            for (var t = 0; t < this.zones.length; t++) {
                                var s = this.zones[t].find((function(t) {
                                    return t.id === e.genSettings["timezone"]
                                }));
                                if (void 0 != s) break
                            }
                            this.timeZone = {
                                id: s.id,
                                text: s.name
                            }
                        }
                        this.genSettings["social_sending"] && (this.socialSending = this.genSettings["social_sending"]), this.genSettings["smart_encoding"] && (this.smartEncoding = this.genSettings["smart_encoding"]);
                        var i = 5;
                        this.genSettings["sms_message_limit"] && (i = this.genSettings["sms_message_limit"]), this.sliderOrig = this.getSliderMessage(i), this.slider = this.sliderOrig, this.sliderIsLoading = !1, this.genSettings["oversize_message_truncation"] && (this.oversizeMessageTruncation = this.genSettings["oversize_message_truncation"]), this.genSettings["default_sender_req"] && (this.defaultNumber = this.genSettings["default_sender_req"], this.genSettings["default_sender_req"] != this.genSettings["default_sender"] && (this.requested = !0)), this.genSettings["social_start"] && (this.startTime = this.genSettings["social_start"]), this.startChanged(), this.genSettings["social_end"] && (this.endTime = this.genSettings["social_end"]), this.endChanged(), this.timeZoneOrig = this.timeZone, this.defaultNumberOrig = this.defaultNumber, this.socialSendingOrig = this.socialSending, this.smartEncodingOrig = this.smartEncoding, this.oversizeMessageTruncationOrig = this.oversizeMessageTruncation, this.startTimeOrig = this.startTime, this.endTimeOrig = this.endTime, this.getTimezoneOffsets(), this.getQuotaSummary(), this.originalEndTag = this.emailSettings["end_tag"], this.endTag = this.originalEndTag, this.originalIncludeSubject = this.emailSettings["include_subject"], this.includeSubject = this.originalIncludeSubject, this.smsEnabled = this.emailSettings["sms_enabled"], this.originalSMSEnabled = this.smsEnabled, this.smsBounceNotifications = this.emailSettings["sms_bounce_enabled"], this.originalSmsBounceNotifications = this.smsBounceNotifications, this.returnToSender = this.emailSettings["original_bounce_recipient"], this.originalReturnToSender = this.returnToSender, this.bounceTarget = this.emailSettings["sms_bounce_recipient"], this.originalBounceTarget = this.bounceTarget
                    },
                    setRechargeValues: function() {
                        this.rechargeSettings["prepay_auto_topup"] && (this.autoRecharge = this.rechargeSettings["prepay_auto_topup"]), this.rechargeSettings["prepay_threshold"] && (this.rechargeThreshold = Math.round(this.rechargeSettings["prepay_threshold"]), 0 !== this.rechargeThreshold && "" !== this.rechargeThreshold && null !== this.rechargeThreshold || (this.rechargeThreshold = 20)), this.rechargeSettings["prepay_amount"] && (this.rechargeAmount = Math.round(this.rechargeSettings["prepay_amount"]), 0 !== this.rechargeAmount && "" !== this.rechargeAmount && null !== this.rechargeAmount || (this.rechargeAmount = 50)), this.rechargeSettings["prepay_daily_topup_max"] && (this.rechargeLimit = Math.round(this.rechargeSettings["prepay_daily_topup_max"])), this.rechargeSettings["prepay_balance"] && (this.prepayBalance = parseFloat(this.rechargeSettings["prepay_balance"]), this.prepayBalanceDisplay = this.prepayBalance.toFixed(2)), this.rechargeSettings["prepay_daily_limit"] && (this.dailyLimit = Math.round(this.rechargeSettings["prepay_daily_limit"])), 1 == this.prepayTransitionStage && (this.previousAverage = 30, this.rechargeSettings["avg_last_3"] && (this.previousAverage = this.rechargeSettings["avg_last_3"]), this.previousAverage < 50 ? (this.rechargeAmount = 50, this.rechargeLimit = 50) : (this.rechargeAmount = 100 * Math.ceil(this.previousAverage / 100), this.rechargeLimit = 100 * Math.ceil(this.previousAverage / 100), this.rechargeThreshold = 50)), this.dailyLimitOrig = this.dailyLimit, this.autoRechargeOrig = this.autoRecharge, this.rechargeThresholdOrig = this.rechargeThreshold, this.rechargeAmountOrig = this.rechargeAmount, this.rechargeLimitOrig = this.rechargeLimit
                    },
                    autodetectTimezone: function() {
                        if ("default" == this.timeZone.id) {
                            for (var e = Intl.DateTimeFormat().resolvedOptions().timeZone, t = 0; t < this.zones.length; t++)
                                for (var s = 0; s < this.zones[t].length; s++)
                                    if (e == this.zones[t][s].id) {
                                        this.timeZone = {
                                            id: this.zones[t][s].id,
                                            text: this.zones[t][s].name
                                        }, this.timeZoneOrig = this.timeZone;
                                        break
                                    }
                            "default" == this.timeZone.id && (this.timeZone = {
                                id: "Europe/London",
                                text: "Greenwich Mean Time: London"
                            }, this.timeZoneOrig = this.timeZone)
                        }
                    },
                    updateCurrentTimezone: function() {
                        for (var e = 0; e < this.zones.length; e++)
                            for (var t = 0; t < this.zones[e].length; t++)
                                if (this.timeZone.id == this.zones[e][t].id) {
                                    this.timeZone = {
                                        id: this.zones[e][t].id,
                                        text: this.zones[e][t].name
                                    }, this.timeZoneOrig = this.timeZone;
                                    break
                                }
                    },
                    startChanged: function() {
                        for (var e = document.getElementById("end"), t = 0; t < e.length; t++) document.querySelector('select[name=end] option[value="' + e[t].value + '"]').disabled = !1, parseInt(this.startTime.replace(":", "")) >= parseInt(e[t].value.replace(":", "")) && (document.querySelector('select[name=end] option[value="' + e[t].value + '"]').disabled = !0)
                    },
                    endChanged: function() {
                        for (var e = document.getElementById("start"), t = 0; t < e.length; t++) document.querySelector('select[name=start] option[value="' + e[t].value + '"]').disabled = !1, parseInt(this.endTime.replace(":", "")) <= parseInt(e[t].value.replace(":", "")) && (document.querySelector('select[name=start] option[value="' + e[t].value + '"]').disabled = !0)
                    },
                    toggleSocialSending: function() {
                        this.socialSending = !this.socialSending
                    },
                    toggleSmartEncoding: function() {
                        this.smartEncoding = !this.smartEncoding
                    },
                    toggleAutoRecharge: function() {
                        this.autoRecharge = !this.autoRecharge
                    },
                    toggleoversizeMessageTruncation: function() {
                        this.oversizeMessageTruncation = !this.oversizeMessageTruncation
                    },
                    getTimezoneOffsets: function() {
                        var e = this;
                        if ("(" != this.zones[0][0].name.slice(0, 1))
                            for (var t = 0; t < this.zones.length; t++) {
                                for (var s = [], i = 0; i < this.zones[t].length; i++) s.push(this.zones[t][i].id);
                                var n = {
                                    sms_timezones: JSON.stringify(s),
                                    batch_number: t
                                };
                                this.mixinAjax_get(this.requestPoint, "get-timezone-offsets", n, (function(t) {
                                    for (var s = t.responseJSON.results.offsets, i = parseInt(t.responseJSON.results.batch_number), n = 0; n < e.zones[0].length && "undefined" != typeof e.zones[i][n]; n++) "(" != e.zones[i][n].name.slice(0, 1) && (e.zones[i][n].name = s[n] + e.zones[i][n].name);
                                    e.offsetsAdded = !0, e.numOffsetsAdded += 1, e.numOffsetsAdded == e.zones.length && (e.autodetectTimezone(), e.updateCurrentTimezone(), e.numOffsetsAdded = 0)
                                }), (function(e) {
                                    HTML.handleError(e.responseJSON)
                                }), !0)
                            }
                    },
                    resetTabSettings: function() {
                        switch (this.activeTab) {
                            case "general":
                                this.dailyLimit = this.dailyLimitOrig, this.slider = this.sliderOrig, this.oversizeMessageTruncation = this.oversizeMessageTruncationOrig, this.forwardingAddress = this.originalForwardingAddress, this.defaultNumber = this.defaultNumberOrig, this.socialSending = this.socialSendingOrig, this.startTime = this.startTimeOrig, this.endTime = this.endTimeOrig, this.timeZone = this.timeZoneOrig, this.smartEncoding = this.smartEncodingOrig;
                                break;
                            case "dedicated":
                                break;
                            case "recharge":
                                this.autoRecharge = this.autoRechargeOrig, this.rechargeThreshold = this.rechargeThresholdOrig, this.rechargeAmount = this.rechargeAmountOrig, this.rechargeLimit = this.rechargeLimitOrig;
                                break;
                            case "topup":
                                break;
                            case "email2sms":
                                this.smsEnabled = this.originalSMSEnabled, this.includeSubject = this.originalIncludeSubject, this.endTag = this.originalEndTag, this.smsBounceNotifications = this.originalSmsBounceNotifications, this.returnToSender = this.originalReturnToSender, this.bounceTarget = this.originalBounceTarget;
                                break;
                            default:
                        }
                    },
                    getSliderMessage: function(e) {
                        return e + " unit" + (e > 1 ? "s" : "")
                    },
                    updateSettings: function(e, t) {
                        var s = this;
                        if ("email2sms" !== e) {
                            var i = {
                                prepay_daily_limit: this.dailyLimitOrig,
                                sms_message_limit: this.sliderOrig.match(/^\d+/)[0],
                                oversize_message_truncation: this.oversizeMessageTruncationOrig,
                                default_number: this.defaultNumberOrig,
                                social_sending: this.socialSendingOrig,
                                start_time: this.startTimeOrig,
                                end_time: this.endTimeOrig,
                                time_zone: this.timeZoneOrig.id,
                                smart_encoding: this.smartEncodingOrig,
                                prepay_auto_topup: this.autoRechargeOrig,
                                prepay_threshold: this.rechargeThresholdOrig,
                                prepay_amount: this.rechargeAmountOrig,
                                prepay_daily_topup_max: this.rechargeLimitOrig
                            };
                            if ("general" === e || "all" === e) {
                                if (i.prepay_daily_limit = this.dailyLimit, i.sms_message_limit = this.slider.match(/^\d+/)[0], i.oversize_message_truncation = this.oversizeMessageTruncation, i.default_number = this.defaultNumber, i.social_sending = this.socialSending, i.start_time = this.startTime, i.end_time = this.endTime, i.time_zone = this.timeZone.id, i.smart_encoding = this.smartEncoding, !this.validTime) return void(this.hadTimeError = !0);
                                var n = Object.assign({}, this.emailSettings);
                                n.forwarding_address = this.forwardingAddress;
                                var a = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                if (!this.verifiedSenders.includes(n.forwarding_address) && n.forwarding_address && "" != n.forwarding_address) {
                                    if (!a.test(String(n.forwarding_address).toLowerCase())) {
                                        var r = {
                                            error: "Forward replies recipient is invalid.",
                                            status: "ERROR"
                                        };
                                        return HTML.handleError(r), void(this.updating = !1)
                                    }
                                    if (!this.verifiedDomains.includes(n.forwarding_address.split("@")[1])) {
                                        var o = {
                                            error: "Forward replies recipient is unverified.",
                                            status: "ERROR"
                                        };
                                        return HTML.handleError(o), void(this.updating = !1)
                                    }
                                }
                            }
                            if ("recharge" === e || "all" === e) {
                                if (i.prepay_auto_topup = this.autoRecharge, i.prepay_threshold = this.rechargeThreshold, i.prepay_amount = this.rechargeAmount, i.prepay_daily_topup_max = this.rechargeLimit, i.prepay_threshold < 10 || i.prepay_threshold > 2e3 || !Number.isInteger(i.prepay_threshold)) {
                                    var c = {
                                        error: "Recharge trigger must be a whole number between $10 and $2,000.",
                                        status: "ERROR"
                                    };
                                    return void HTML.handleError(c)
                                }
                                if (this.rechargeAmount < 30 || this.rechargeAmount > 2e3 || !Number.isInteger(this.rechargeAmount)) {
                                    var u = {
                                        error: "Recharge amount must be a whole number between $30 and $2,000.",
                                        status: "ERROR"
                                    };
                                    return void HTML.handleError(u)
                                }
                                if (this.rechargeLimit < 30 || this.rechargeLimit > 2e3 || !Number.isInteger(this.rechargeLimit)) {
                                    var l = {
                                        error: "Recharge limit must be a whole number between $30 and $2,000.",
                                        status: "ERROR"
                                    };
                                    return void HTML.handleError(l)
                                }
                                if (this.rechargeLimit < this.rechargeAmount) {
                                    var d = {
                                        error: "Recharge limit must be greater than recharge amount.",
                                        status: "ERROR"
                                    };
                                    return void HTML.handleError(d)
                                }
                                if (this.dailyLimit > 500 && this.dailyLimit !== this.dailyLimitOrig || this.dailyLimit < 0 || !Number.isInteger(this.dailyLimit)) {
                                    var m = {
                                        error: "Daily limit must be a whole number and cannot be set above $500. Please contact support if you require a higher limit.",
                                        status: "ERROR"
                                    };
                                    return void HTML.handleError(m)
                                }
                            }
                            this.updating = !0, this.mixinAjax_post(this.requestPoint, "update-sms-settings", i, (function(i) {
                                "general" !== e && "all" !== e || (s.dailyLimitOrig = s.dailyLimit, s.sliderOrig = s.slider, s.oversizeMessageTruncationOrig = s.oversizeMessageTruncation, s.defaultNumberOrig = s.defaultNumber, s.socialSendingOrig = s.socialSending, s.startTimeOrig = s.startTime, s.endTimeOrig = s.endTime, s.timeZoneOrig = s.timeZone, s.smartEncodingOrig = s.smartEncoding), "recharge" !== e && "all" !== e || (s.autoRechargeOrig = s.autoRecharge, s.rechargeThresholdOrig = s.rechargeThreshold, s.rechargeAmountOrig = s.rechargeAmount, s.rechargeLimitOrig = s.rechargeLimit, s.autoRecharge && 1 == s.prepayTransitionStage && (s.prepayTransitionStage = 2, s.prepayActive = !0, s.showPrepaidTransitionSplash = !1, s.apMetadata && s.apMetadata.app_settings && (s.apMetadata.app_settings.prepay_is_active = !0, s.apMetadata.app_settings.prepay_transition_stage = 2)), i && i.responseJSON && i.responseJSON.results && null != i.responseJSON.results.prepay_balance && (s.prepayBalance = parseFloat(i.responseJSON.results.prepay_balance), s.prepayBalanceDisplay = s.prepayBalance.toFixed(2))), void 0 !== n && void 0 !== n.forwarding_address && n.forwarding_address != s.originalForwardingAddress ? s.mixinAjax_patch(s.requestPoint, "email-settings", n, (function() {
                                    s.originalForwardingAddress = s.forwardingAddress, HTML.alertUser("success", "Successfully updated settings"), s.updating = !1, "function" === typeof t && t()
                                }), (function(e) {
                                    HTML.handleError(e.responseJSON), s.updating = !1, "function" === typeof t && t()
                                }), !0) : (s.updating = !1, "function" === typeof t && t(), HTML.alertUser("success", "Successfully updated settings"))
                            }), (function(e) {
                                HTML.handleError(e.responseJSON), s.updating = !1, "function" === typeof t && t()
                            }), !0)
                        } else this.saveEmailSettings()
                    },
                    beforeUnloadHandler: function(e) {
                        this.settingsChanged && !this.dialogActive && (e.preventDefault(), e.returnValue = "")
                    },
                    interceptExternalLinkClicks: function(e) {
                        if (this.settingsChanged && !this.dialogActive) {
                            var t = e.target.closest("a[href]");
                            t && !t.classList.contains("template-close") && (e.preventDefault(), this.pendingUrl = t.href, this.dialogActive = !0, this.showExitConfirmDialog())
                        }
                    },
                    showExitConfirmDialog: function() {
                        document.querySelector(".modal-backdrop").classList.add("in"), document.querySelector(".confirm-exit").classList.add("is-active")
                    },
                    hideExitConfirmDialog: function() {
                        document.querySelector(".modal-backdrop").classList.remove("in"), document.querySelector(".confirm-exit").classList.remove("is-active"), this.dialogActive = !1
                    },
                    saveAndExit: function() {
                        var e = this;
                        this.updateSettings("all", (function() {
                            e.hideExitConfirmDialog(), e.activeSaveButton = null
                        }))
                    },
                    exitWithoutSaving: function() {
                        window.location.href = this.pendingUrl
                    },
                    handleSaveClick: function(e) {
                        this.activeSaveButton = e, this.saveAndExit()
                    },
                    getCardTypeDisplay: function(e) {
                        var t = e;
                        switch (e) {
                            case "jcb":
                                t = "JCB";
                                break;
                            case "cmr_falabella":
                                t = "CMR Falabella";
                                break;
                            case "mastercard":
                                t = "MasterCard";
                                break;
                            default:
                                t = e.toLowerCase().split("_").map((function(e) {
                                    return e[0].toUpperCase() + e.slice(1)
                                })).join(" ")
                        }
                        return t
                    },
                    saveEmailSettings: function() {
                        var e = this;
                        "" != this.endTag && "{}" != this.endTag || (this.endTag = "{end}"), "{" !== this.endTag.charAt(0) && (this.endTag = "{" + this.endTag), "}" !== this.endTag.charAt(this.endTag.length - 1) && (this.endTag = this.endTag + "}");
                        var t = {
                            sms_enabled: this.smsEnabled,
                            include_subject: this.includeSubject,
                            end_tag: this.endTag,
                            sms_bounce_enabled: this.smsBounceNotifications,
                            original_bounce_recipient: this.returnToSender,
                            sms_bounce_recipient: this.bounceTarget,
                            forwarding_address: this.originalForwardingAddress
                        };
                        if ("" === t.sms_bounce_recipient && !t.original_bounce_recipient) {
                            var s = {
                                error: "Bounce notification recipient cannot be empty.",
                                status: "ERROR"
                            };
                            return HTML.handleError(s), void(this.updating = !1)
                        }
                        this.updating = !0;
                        var i = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (!this.verifiedSenders.includes(t.sms_bounce_recipient) && "" !== t.sms_bounce_recipient) {
                            if (!i.test(String(t.sms_bounce_recipient).toLowerCase())) {
                                var n = {
                                    error: "Bounce notification recipient is invalid.",
                                    status: "ERROR"
                                };
                                return HTML.handleError(n), void(this.updating = !1)
                            }
                            if (!this.verifiedDomains.includes(t.sms_bounce_recipient.split("@")[1])) {
                                var a = {
                                    error: "Bounce notification recipient is unverified.",
                                    status: "ERROR"
                                };
                                return HTML.handleError(a), void(this.updating = !1)
                            }
                        }
                        this.mixinAjax_patch(this.requestPoint, "email-settings", t, (function() {
                            e.originalSMSEnabled = e.smsEnabled, e.originalIncludeSubject = e.includeSubject, e.originalEndTag = e.endTag, e.originalSmsBounceNotifications = e.smsBounceNotifications, e.originalReturnToSender = e.returnToSender, e.originalBounceTarget = e.bounceTarget, HTML.alertUser("success", "Successfully updated settings"), e.updating = !1
                        }), (function(t) {
                            HTML.handleError(t.responseJSON), e.updating = !1
                        }), !0)
                    },
                    selectSendToRadio: function() {
                        this.returnToSender = !1
                    },
                    goToTopupTab: function() {
                        this.manualTransitionTopup = !0, this.switchContext(this.contexts.TAB_TOPUP)
                    },
                    openTypeform: function() {
                        this.$eventBus.$emit(l.SHOW_SENDER_ID_FORM, !0), this.$eventBus.$emit("reset-senderid-form")
                    },
                    deletePopupClick: function(e) {
                        var t = e.currentTarget.closest(".row-delete-popup");
                        document.querySelectorAll(".row-delete-popup.options-on").forEach((function(e) {
                            e !== t && e.classList.remove("options-on")
                        })), t.classList.toggle("options-on")
                    },
                    closeDeletePopUpClick: function(e) {
                        var t = e.currentTarget.closest(".row-delete-popup");
                        t && t.classList.remove("options-on")
                    },
                    handleOutsideClick: function(e) {
                        e.target.closest(".row-delete-popup") || document.querySelectorAll(".row-delete-popup.options-on").forEach((function(e) {
                            return e.classList.remove("options-on")
                        }))
                    }
                }),
                watch: {
                    genSettings: function() {
                        this.setValues()
                    },
                    emailSettings: function() {
                        this.setValues()
                    },
                    rechargeSettings: function() {
                        this.setRechargeValues()
                    },
                    validTime: function() {
                        this.validTime && this.hadTimeError && (this.hadTimeError = !1)
                    }
                }
            },
            Xt = Kt,
            Zt = (s("7cde"), Object(M["a"])(Xt, ce, ue, !1, null, "5c374dda", null)),
            es = Zt.exports,
            ts = {
                name: "SMSTabTable",
                props: {
                    context: String
                },
                mixins: [],
                components: {
                    SMSSettingsPageTab: es
                },
                data: function() {
                    return {
                        contexts: this.$config.contexts,
                        requestPoint: this.$config.requestPoint,
                        apMetadata: PAGE_DATA.apMetadata,
                        clientTimezone: PAGE_DATA.clientTimezone
                    }
                },
                methods: {
                    init: function(e, t) {
                        this.clientTimezone = e, this.apMetadata = t, this.$refs.sms_settings_section.init()
                    },
                    switchTo: function() {
                        switch (this.context) {
                            case this.contexts.TAB_SETTINGS:
                            case this.contexts.TAB_NUMBERS:
                            case this.contexts.TAB_SENDERIDS:
                            case this.contexts.TAB_RECHARGE:
                            case this.contexts.TAB_TOPUP:
                            case this.contexts.TAB_EMAIL2SMS:
                                this.$refs.sms_settings_section.init();
                                break;
                            default:
                                break
                        }
                    },
                    switchContext: function(e) {
                        this.$eventBus.$emit(oe.SWITCH_CONTEXT, e)
                    }
                },
                computed: {
                    showSettings: function() {
                        return this.context == this.contexts.TAB_SETTINGS || this.context == this.contexts.TAB_NUMBERS || this.context == this.contexts.TAB_SENDERIDS || this.context == this.contexts.TAB_RECHARGE || this.context == this.contexts.TAB_TOPUP || this.contexts.TAB_EMAIL2SMS
                    }
                }
            },
            ss = ts,
            is = Object(M["a"])(ss, ne, ae, !1, null, null, null),
            ns = is.exports,
            as = function() {
                var e = this,
                    t = e._self._c;
                return t("div", [t("NumberEdit", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showNumberEdit,
                        expression: "showNumberEdit"
                    }],
                    ref: "number_edit",
                    attrs: {
                        userData: e.userData
                    }
                }), t("sms-purchase", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showSmsPurchase,
                        expression: "showSmsPurchase"
                    }],
                    ref: "sms_purchase",
                    attrs: {
                        userData: e.userData,
                        context: e.context,
                        isTelnyx: e.isTelnyx
                    }
                })], 1)
            },
            rs = [],
            os = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "number-edit-grid"
                }, [e.numberEditing ? t("div", {
                    staticClass: "table-panel settings-table-panel"
                }, [e._m(0), t("div", {
                    staticClass: "tab-content"
                }, [t("div", {
                    staticClass: "content-row"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Number")]), t("div", {
                    staticClass: "text-content"
                }, [t("div", {
                    staticClass: "number-display",
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.smsEnabled = !e.smsEnabled
                        }
                    }
                }, [t("span", {
                    staticClass: "country-container"
                }, [t("span", {
                    class: e.getCountryFlagClass(e.numberEditing.number.country)
                }), t("span", {
                    staticClass: "number-country-code"
                }, [e._v("+" + e._s(e.numberEditing.display.country_code))])]), t("input", {
                    staticClass: "form-control number-input",
                    attrs: {
                        type: "text",
                        disabled: ""
                    },
                    domProps: {
                        value: "".concat(e.numberEditing.display.national)
                    }
                })]), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n            The dedicated number cannot be changed. You can remove existing\n            numbers or add\n            "), t("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.goToNumberListPage()
                        }
                    }
                }, [e._v("new dedicated numbers.")])])])]), t("div", {
                    staticClass: "content-row"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Number name")]), t("div", {
                    staticClass: "text-content"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.numberName,
                        expression: "numberName"
                    }],
                    staticClass: "form-control input-md number-name",
                    attrs: {
                        placeholder: "e.g. 'Marketing number'",
                        type: "text",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.numberName
                    },
                    on: {
                        input: [function(t) {
                            t.target.composing || (e.numberName = t.target.value)
                        }, e.sanitizeNumberName]
                    }
                }), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n            This is an administrative name for your number. It is not visible\n            to recipients.\n          ")])])]), t("div", {
                    staticClass: "content-row"
                }, [t("h4", {
                    staticClass: "row-title"
                }, [e._v("Forward replies")]), t("div", {
                    staticClass: "text-content forward-replies-block"
                }, [t("div", {
                    staticClass: "form-select-wrapper"
                }, [t("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.forwardingAddressOptionValue,
                        expression: "forwardingAddressOptionValue"
                    }],
                    staticClass: "form-control input-md",
                    on: {
                        change: function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            }));
                            e.forwardingAddressOptionValue = t.target.multiple ? s : s[0]
                        }
                    }
                }, e._l(e.forwardingAddressOptions, (function(s) {
                    return t("option", {
                        key: s.value,
                        domProps: {
                            value: s.value
                        }
                    }, [e._v("\n                " + e._s(s.label) + "\n              ")])
                })), 0)]), t("p", {
                    staticClass: "field-info"
                }, [e._v("\n            Optionally specify a custom email address to receive replies for this dedicated number. The default email from "), t("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.goToSmsSettingsPage()
                        }
                    }
                }, [e._v("SMS Settings")]), e._v(" is used otherwise.\n          ")]), t("div", {
                    class: ["content-row", {
                        "is-custom": "custom" === e.forwardingAddressOptionValue
                    }]
                }, [t("div", {
                    staticClass: "input-wrapper"
                }, [t("h5", [e._v("Custom forward replies address")]), t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.forwardingAddress,
                        expression: "forwardingAddress"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        placeholder: "email@company.com",
                        type: "text",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.forwardingAddress
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.forwardingAddress = t.target.value)
                        }
                    }
                }), e._m(1)])])])]), t("div", {
                    staticClass: "table-footer"
                }, [t("button", {
                    staticClass: "btn blue hide-splash",
                    class: {
                        "is-loading": e.isSaving
                    },
                    attrs: {
                        disabled: e.saveButtonDisabled
                    },
                    on: {
                        click: function(t) {
                            return e.save()
                        }
                    }
                }, [e._v("\n          Save changes "), t("span", {
                    staticClass: "loader-spinner"
                })]), t("button", {
                    staticClass: "button-outlined",
                    attrs: {
                        role: "button",
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return e.cancel()
                        }
                    }
                }, [e._v("\n          Back\n        ")]), t("div", {
                    staticClass: "remove-button-container",
                    class: {
                        "show-confirm": e.showConfirmRemove
                    }
                }, [t("button", {
                    staticClass: "button-outlined danger",
                    class: {
                        "show-confirm": e.showConfirmRemove,
                        "is-loading": e.isDeleting
                    },
                    attrs: {
                        role: "button",
                        type: "button",
                        id: "button-delete"
                    },
                    on: {
                        click: function(t) {
                            return e.removeBtnClicked()
                        }
                    }
                }, [e._v("\n          " + e._s(e.showConfirmRemove ? e.isDeleting ? "Deleting" : "Confirm" : "Remove") + "\n           "), t("span", {
                    staticClass: "delete-loader-spinner"
                })]), t("button", {
                    staticClass: "button-outlined",
                    class: {
                        "is-hidden ": !e.showConfirmRemove
                    },
                    attrs: {
                        role: "button",
                        type: "button",
                        id: "btn-cancel-delete"
                    },
                    on: {
                        click: function(t) {
                            e.showConfirmRemove = !1
                        }
                    }
                }, [e._v("\n            Cancel\n          ")])])])])]) : e._e()])
            },
            cs = [function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "table-container-header"
                }, [t("div", {
                    staticClass: "table-container-heading"
                }, [t("h5", [e._v("Dedicated number settings")])])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", {
                    staticClass: "field-info"
                }, [e._v("\n                This address must be a verified single sender or use a "), t("a", {
                    attrs: {
                        href: "/sending/verified_senders/"
                    }
                }, [e._v("verified sender")]), e._v(" domain.\n              ")])
            }];
        s("16a7");

        function us(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), s.push.apply(s, i)
            }
            return s
        }

        function ls(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? us(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : us(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }))
            }
            return e
        }
        var ds = {
                name: "NumberEdit",
                mixins: [S],
                components: {},
                data: function() {
                    return {
                        contexts: this.$config.contexts,
                        requestPoint: this.$config.requestPoint,
                        originalForwardingAddress: "",
                        forwardingAddress: "",
                        originalForwardingAddressOptionValue: "",
                        forwardingAddressOptionValue: "",
                        forwardingAddressOptions: [],
                        numberName: "",
                        isTagEdit: !1,
                        isSaving: !1,
                        isDeleting: !1,
                        verifiedSenders: [],
                        verifiedDomains: [],
                        showConfirmRemove: !1,
                        mockDelete: !1
                    }
                },
                methods: ls(ls({}, Object(st["b"])({
                    setSettings: Gt.mutations.SET_USER_SMS_EMAIL_SETTINGS,
                    setNumbers: wt.mutations.SET_USER_NUMBERS
                })), {}, {
                    init: function() {
                        this.verifiedSenders = this.settings["verified_senders"], this.verifiedDomains = this.settings["verified_domains"], this.isSaving = !1, this.isDeleting = !1, this.showConfirmRemove = !1, this.settingsInitialised ? this.setValues() : this.$store.dispatch(Gt.actions.FETCH_USER_SMS_EMAIL_SETTINGS, !0)
                    },
                    setValues: function() {
                        document.getElementById("user-error-alert").classList.remove("visible"), this.numberEditing && (this.numberEditing.meta && this.numberEditing.meta.forward_replies && this.numberEditing.meta.forward_replies.length > 0 ? (this.originalForwardingAddress = this.numberEditing.meta.forward_replies[0], this.forwardingAddress = this.originalForwardingAddress) : (this.originalForwardingAddress = "", this.forwardingAddress = "")), "" === this.forwardingAddress ? this.originalForwardingAddressOptionValue = "default" : "off" === this.forwardingAddress ? this.originalForwardingAddressOptionValue = "off" : this.originalForwardingAddressOptionValue = "custom", this.forwardingAddressOptionValue = this.originalForwardingAddressOptionValue;
                        var e = this.settings && this.settings["forwarding_address"] && "" !== this.settings["forwarding_address"] ? " (" + this.settings["forwarding_address"] + ")" : " (Off)",
                            t = "Default" + e;
                        this.forwardingAddressOptions = [{
                            label: t,
                            value: "default"
                        }, {
                            label: "Custom",
                            value: "custom"
                        }, {
                            label: "Off",
                            value: "off"
                        }], this.numberName = this.numberEditing ? this.numberEditing.display.label : ""
                    },
                    sanitizeNumberName: function(e) {
                        var t = e.target.value.replace(/[^a-zA-Z0-9 _-]/g, "");
                        this.numberName = t, e.target.value = t
                    },
                    goToNumberListPage: function() {
                        this.$eventBus.$emit(l.SWITCH_CONTEXT, this.contexts.TAB_NUMBERS)
                    },
                    goToSmsSettingsPage: function() {
                        this.$eventBus.$emit(l.SWITCH_CONTEXT, this.contexts.SETTINGS)
                    },
                    save: function() {
                        var e = this;
                        document.getElementById("user-error-alert").classList.remove("visible");
                        var t = {
                                number_id: this.numberEditing.assignment.number_id,
                                label: this.numberName
                            },
                            s = !1;
                        if ("default" === this.forwardingAddressOptionValue) t.meta = Object.assign({}, this.numberEditing.meta), t.meta.forward_replies = [], this.isSaving = !0;
                        else if ("off" === this.forwardingAddressOptionValue) t.meta = Object.assign({}, this.numberEditing.meta), t.meta.forward_replies = ["off"], this.isSaving = !0;
                        else {
                            var i = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (!i.test(String(this.forwardingAddress).toLowerCase())) {
                                var n = {
                                    error: "Forward replies recipient is invalid.",
                                    status: "ERROR"
                                };
                                return HTML.handleError(n), void(this.isSaving = !1)
                            }
                            if (!this.verifiedSenders.includes(this.forwardingAddress) && !this.verifiedDomains.includes(this.forwardingAddress.split("@")[1])) {
                                var a = {
                                    error: "Forward replies recipient is unverified.",
                                    status: "ERROR"
                                };
                                return HTML.handleError(a), void(this.isSaving = !1)
                            }
                            this.isSaving = !0;
                            var r = Object.assign({}, this.numberEditing.meta);
                            r.forward_replies = [this.forwardingAddress], t.meta = r
                        }
                        this.mixinAjax_put(this.requestPoint, "patch-number", t, (function(t) {
                            e.isSaving = !1, e.$store.dispatch(wt.actions.FETCH_USER_NUMBERS, !1).then((function() {
                                HTML.set_time(t.responseJSON), e.$eventBus.$emit(l.SWITCH_CONTEXT, e.contexts.TAB_NUMBERS)
                            }))
                        }), (function(t) {
                            HTML.handleError(t.responseJSON), e.isSaving = !1
                        }), s)
                    },
                    cancel: function() {
                        this.$eventBus.$emit(l.SWITCH_CONTEXT, this.contexts.TAB_NUMBERS)
                    },
                    getCountryFlagClass: function(e) {
                        return "icon-flag is-".concat(e.toLowerCase())
                    },
                    removeBtnClicked: function() {
                        this.showConfirmRemove ? this.mockDelete ? this.doRemoveNumberMock() : this.doRemoveNumber() : this.showConfirmRemove = !0
                    },
                    doRemoveNumberMock: function() {
                        var e = this;
                        this.isDeleting = !0, setTimeout((function() {
                            e.isDeleting = !1, e.goToNumberListPage(), HTML.set_time("Deleted the number successfully.")
                        }), 4e3)
                    },
                    doRemoveNumber: function() {
                        var e = this,
                            t = !1;
                        this.isDeleting = !0;
                        var s = {
                            number_id: this.numberEditing.assignment.number_id
                        };
                        this.mixinAjax_delete(this.requestPoint, "delete-number", s, (function(t) {
                            e.$store.dispatch(wt.actions.FETCH_USER_NUMBERS, !1).then((function() {
                                e.isDeleting = !1, HTML.set_time(t.responseJSON), e.goToNumberListPage()
                            }))
                        }), (function(t) {
                            e.isDeleting = !1, HTML.handleError(t.responseJSON)
                        }), t)
                    }
                }),
                computed: ls({
                    saveButtonDisabled: function() {
                        return "custom" === this.forwardingAddressOptionValue && "" === this.forwardingAddress || this.nothingChanged
                    },
                    nothingChanged: function() {
                        return this.forwardingAddress === this.originalForwardingAddress && this.numberName === this.numberEditing.display.label && this.originalForwardingAddressOptionValue === this.forwardingAddressOptionValue
                    }
                }, Object(st["a"])({
                    settings: Gt.getters.GET_USER_SMS_EMAIL_SETTINGS,
                    settingsInitialised: Gt.getters.GET_IS_SMS_EMAIL_SETTINGS_INITIALISED,
                    numberEditing: wt.getters.GET_NUMBER_EDITING
                })),
                watch: {
                    settings: function() {
                        this.setValues()
                    },
                    numberEditing: function() {
                        this.setValues()
                    },
                    forwardingAddressOptionValue: function(e) {
                        "custom" === e && "off" === this.forwardingAddress && (this.originalForwardingAddress = "", this.forwardingAddress = "")
                    }
                }
            },
            ms = ds,
            _s = (s("5938"), Object(M["a"])(ms, os, cs, !1, null, "4d620560", null)),
            hs = _s.exports,
            ps = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "table-panel purchase-table-panel"
                }, [e.fetchingNumbers && this.context == e.contexts.SETTINGS_PURCHASE ? t("AjaxLoadingSpinner", {
                    attrs: {
                        context: "FORCED"
                    }
                }) : e._e(), e._m(0), t("div", {
                    staticClass: "table-container-topBar top search-grouped bar-full"
                }, [e.isTelnyx ? e._e() : t("div", {
                    staticClass: "country-dropdown",
                    staticStyle: {
                        "margin-right": "8px",
                        "flex-shrink": "0"
                    }
                }, [t("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectedCountry,
                        expression: "selectedCountry"
                    }],
                    staticClass: "form-control input-small",
                    on: {
                        change: [function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            }));
                            e.selectedCountry = t.target.multiple ? s : s[0]
                        }, e.onCountryChange]
                    }
                }, [t("option", {
                    attrs: {
                        value: "US"
                    }
                }, [e._v("United States")]), t("option", {
                    attrs: {
                        value: "GB"
                    }
                }, [e._v("United Kingdom")]), t("option", {
                    attrs: {
                        value: "AU"
                    }
                }, [e._v("Australia")])])]), t("div", {
                    staticStyle: {
                        flex: "1",
                        "min-width": "0"
                    }
                }, [t("SearchBox", {
                    ref: "numberSearchBox",
                    attrs: {
                        id: "number-search"
                    }
                })], 1)]), t("div", {
                    staticClass: "table-container-content"
                }, [t("div", {
                    staticClass: "table-wrapper"
                }, [t("table", {
                    staticClass: "data-table"
                }, [e._m(1), t("tbody", [e._l(e.numbers, (function(s) {
                    return t("tr", {
                        key: s.id
                    }, [t("td", [t("label", {
                        attrs: {
                            for: s.id
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.selectNumber(s)
                            }
                        }
                    }, [t("div", {
                        staticClass: "radio"
                    }, [t("span", {
                        class: {
                            checked: e.isNumberChecked(s.id)
                        }
                    }, [t("input", {
                        attrs: {
                            type: "radio",
                            name: "number",
                            id: s.id
                        },
                        domProps: {
                            value: s.id
                        }
                    })])]), e._v(e._s(e.getDisplayPhone(s.phone_number)) + "\n              ")])]), t("td", [s.capabilities.map((function(e) {
                        return e.toLowerCase()
                    })).includes("sms") ? t("span", {
                        staticClass: "long-event-indicator sms"
                    }) : e._e(), s.capabilities.map((function(e) {
                        return e.toLowerCase()
                    })).includes("mms") ? t("span", {
                        staticClass: "long-event-indicator mms"
                    }) : e._e()]), t("td", [e._v(e._s(e.getNumberCost(s.country)))])])
                })), e.noNumbersFound ? t("tr", [t("td", {
                    staticClass: "no-results",
                    attrs: {
                        colspan: "3"
                    }
                }, [e._v("No numbers found. Please try a different search or contact support.")])]) : e._e(), e.fetchingNumbers ? t("tr", [t("td", {
                    staticClass: "no-results",
                    attrs: {
                        colspan: "3"
                    }
                }, [e._v("Fetching numbers...")])]) : e._e()], 2)])]), 0 != e.numbers.length ? t("div", {
                    staticClass: "table-footer"
                }, [t("div", {
                    staticClass: "purchase-details"
                }, [t("h4", [e._v("Dedicated number name")]), t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.label,
                        expression: "label"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "Enter an administrative name for your dedicated number"
                    },
                    domProps: {
                        value: e.label
                    },
                    on: {
                        keyup: e.checkForEnter,
                        input: [function(t) {
                            t.target.composing || (e.label = t.target.value)
                        }, e.sanitizeLabel]
                    }
                })]), e._m(2), t("button", {
                    staticClass: "btn blue hide-splash",
                    class: {
                        "is-loading": e.activatingNumber
                    },
                    attrs: {
                        disabled: e.activatingNumber
                    },
                    on: {
                        click: function(t) {
                            return e.assignNumber()
                        }
                    }
                }, [e._v("\n        Activate number"), t("span", {
                    staticClass: "loader-spinner"
                })]), t("button", {
                    staticClass: "btn button-dropdown",
                    on: {
                        click: function(t) {
                            return e.goBack()
                        }
                    }
                }, [e._v("Back")]), t("span", {
                    staticClass: "footer-info-text right"
                }, [e._v("Prices in USD")])]) : e._e()])], 1)
            },
            gs = [function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "table-container-header"
                }, [t("div", {
                    staticClass: "table-container-heading"
                }, [t("h5", [e._v("Available numbers")])])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("thead", [t("tr", [t("th", [t("span", [e._v("Number")])]), t("th", [t("span", [e._v("Sending Capabilities")])]), t("th", [t("span", [e._v("Price")])])])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "bar-notice is-active is-info"
                }, [t("p", [t("span", {
                    staticClass: "notice-icon"
                }), t("span", {
                    staticClass: "bar-notice-message"
                }, [e._v("Dedicated numbers are usable immediately, but we recommend waiting until they are verified before sending. Verification requires completing a 15 minute questionnaire. Your answers will be reviewed by mobile carriers, which normally take fewer than 7 days to complete the process (but can take up to 4 weeks).\n              "), t("br"), e._v("Sending is blocked until your dedicated number is verified.\n            ")])])])
            }];

        function Ss(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), s.push.apply(s, i)
            }
            return s
        }

        function fs(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ss(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Ss(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }))
            }
            return e
        }
        var bs = {
                name: "smsPurchase",
                mixins: [S, E],
                data: function() {
                    return {
                        contexts: this.$config.contexts,
                        requestPoint: this.$config.requestPoint,
                        dedicatedNumberCosts: this.$config.dedicatedNumberCosts,
                        showDetails: !1,
                        numbers: [],
                        selectedCountry: "US",
                        pagesize: "10",
                        showBlankTable: !1,
                        selectedNumber: {},
                        label: "",
                        noNumbersFound: !1,
                        activatingNumber: !1,
                        fetchingNumbers: !1
                    }
                },
                components: {
                    SearchBox: U,
                    AjaxLoadingSpinner: Tt
                },
                props: {
                    userData: Object,
                    context: String,
                    isTelnyx: {
                        type: Boolean,
                        default: !1
                    }
                },
                created: function() {
                    this.mixinEventListener_register({}), this.mixinEventListener_on()
                },
                destroyed: function() {
                    this.mixinEventListener_off()
                },
                methods: fs(fs({}, Object(st["b"])({
                    setNumbers: wt.mutations.SET_USER_NUMBERS
                })), {}, {
                    init: function() {
                        this.$refs.numberSearchBox.initSearchBox("Search for numbers containing..."), this.showDetails = !1, this.numbers = [], this.selectedNumber = {}, this.label = "", this.noNumbersFound = !1, setTimeout(this.holdInit, 100)
                    },
                    holdInit: function() {
                        this.$eventBus.$emit("mixin-search-has-changed"), this.$eventBus.$emit("mixin-search-trigger")
                    },
                    onCountryChange: function() {
                        this.numbers = [], this.selectedNumber = {}, this.noNumbersFound = !1, this.performNumberSearch(!0)
                    },
                    performNumberSearch: function(e) {
                        var t = this;
                        this.noNumbersFound = !1, this.fetchingNumbers = !0;
                        var s = {
                            matching: this.$refs.numberSearchBox.getMainSearch(),
                            country: this.selectedCountry,
                            pagesize: this.pagesize
                        };
                        this.mixinAjax_get(this.requestPoint, "available-numbers", s, (function(e) {
                            t.numbers = e.responseJSON.results.numbers, 0 == t.numbers.length ? t.noNumbersFound = !0 : t.selectedNumber = t.numbers[0], t.$eventBus.$emit(l.AVAILABLE_LOADING_DONE), t.fetchingNumbers = !1
                        }), (function(e) {
                            HTML.handleError(e.responseJSON), t.fetchingNumbers = !1
                        }), e)
                    },
                    checkForEnter: function(e) {
                        13 == e.keyCode && this.assignNumber()
                    },
                    sanitizeLabel: function(e) {
                        var t = e.target.value.replace(/[^a-zA-Z0-9 _-]/g, "");
                        this.label = t, e.target.value = t
                    },
                    assignNumber: function() {
                        var e = this,
                            t = !0;
                        this.activatingNumber = !0;
                        var s = {
                            number: this.selectedNumber.phone_number,
                            country: this.selectedNumber.country,
                            number_id: this.selectedNumber.id,
                            label: this.label
                        };
                        this.mixinAjax_post(this.requestPoint, "assign-number", s, (function(t) {
                            e.$store.dispatch(wt.actions.FETCH_USER_NUMBERS, !1).then((function() {
                                HTML.set_time(t.responseJSON), e.activatingNumber = !1, e.goBack()
                            }))
                        }), (function(t) {
                            HTML.handleError(t.responseJSON), e.activatingNumber = !1
                        }), t)
                    },
                    getDisplayPhone: function(e) {
                        var t = x.a.PhoneNumberUtil.getInstance(),
                            s = x.a.PhoneNumberFormat,
                            i = t.parse(e);
                        return t.format(i, s.INTERNATIONAL)
                    },
                    selectNumber: function(e) {
                        this.selectedNumber = e
                    },
                    isNumberChecked: function(e) {
                        return this.selectedNumber.id && e == this.selectedNumber.id
                    },
                    goBack: function() {
                        this.$eventBus.$emit(l.GO_BACK)
                    },
                    getNumberCost: function(e) {
                        if ("shared" === e) return "Free";
                        var t = this.dedicatedNumberCosts[e] * this.userData.plan_duration,
                            s = "month";
                        return 3 === this.userData.plan_duration ? s = "quarter" : 12 === this.userData.plan_duration && (s = "year"), "$" + t + "/" + s
                    }
                })
            },
            Es = bs,
            vs = Object(M["a"])(Es, ps, gs, !1, null, null, null),
            Ts = vs.exports,
            As = {
                name: "SMSSettingsPage",
                mixins: [E],
                props: {
                    context: String,
                    userData: Object,
                    isTelnyx: {
                        type: Boolean,
                        default: !1
                    }
                },
                components: {
                    smsPurchase: Ts,
                    NumberEdit: hs
                },
                data: function() {
                    return {
                        contexts: this.$config.contexts,
                        apMetadata: {}
                    }
                },
                created: function() {
                    this.mixinEventListener_register(Object(r["a"])({}, l.LOAD_AVAILABLE_NUMBERS, this.loadAvailable)), this.mixinEventListener_on()
                },
                methods: {
                    init: function(e, t) {
                        this.apMetadata = t, this.showEmails && this.$refs.sms_email.init(), this.showNumberEdit && this.$refs.number_edit.init()
                    },
                    doSearch: function() {
                        this.$refs.sms_purchase.performNumberSearch(!this.context == this.contexts.SETTINGS_PURCHASE)
                    },
                    loadAvailable: function() {
                        this.$refs.sms_purchase.init()
                    }
                },
                computed: {
                    showNumberEdit: function() {
                        return this.context == this.contexts.SETTINGS_NUMBER_EDIT
                    },
                    showEmails: function() {
                        return this.context == this.contexts.SETTINGS_EMAIL2SMS
                    },
                    showSmsPurchase: function() {
                        return this.context == this.contexts.SETTINGS_PURCHASE
                    }
                }
            },
            Cs = As,
            Ns = Object(M["a"])(Cs, as, rs, !1, null, null, null),
            Is = Ns.exports,
            ys = function() {
                var e = this,
                    t = e._self._c;
                return t("header", {
                    staticClass: "page-content-header"
                }, [t("h3", {
                    staticClass: "page-title"
                }, [e.page.showBack ? e._e() : t("span", {
                    staticClass: "title-icon"
                }, [t("svg", {
                    attrs: {
                        fill: "none",
                        height: "35",
                        viewBox: "0 0 35 35",
                        width: "35",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [t("linearGradient", {
                    attrs: {
                        id: "a"
                    }
                }, [t("stop", {
                    attrs: {
                        offset: "0",
                        "stop-color": "#52b3ee"
                    }
                }), t("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "#3ca4e3"
                    }
                })], 1), t("linearGradient", {
                    attrs: {
                        id: "b",
                        gradientUnits: "userSpaceOnUse",
                        x1: "17.7822",
                        x2: "17.7822",
                        "xlink:href": "#a",
                        y1: ".946777",
                        y2: "34.9468"
                    }
                }), t("linearGradient", {
                    attrs: {
                        id: "c",
                        gradientUnits: "userSpaceOnUse",
                        x1: "10",
                        x2: "10",
                        "xlink:href": "#a",
                        y1: "0",
                        y2: "20"
                    }
                }), t("rect", {
                    attrs: {
                        fill: "url(#b)",
                        height: "34",
                        rx: "5",
                        width: "34",
                        x: ".782227",
                        y: ".946777"
                    }
                }), t("path", {
                    attrs: {
                        d: "m0 0h20v20h-20z",
                        fill: "url(#c)",
                        transform: "translate(8.25 7.98047)"
                    }
                }), t("g", {
                    attrs: {
                        stroke: "#fff",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "1.5"
                    }
                }, [t("path", {
                    attrs: {
                        d: "m17.0366 10.0131c.153.1695.34.305.5487.3977.2087.0928.4345.1407.6629.1407s.4543-.0479.663-.1407c.2087-.0927.3956-.2282.5487-.3977l.7833-.86837c.2261-.2494.5238-.42281.8522-.4965.3285-.07368.6717-.04403.9826.08489s.5744.35082.7544.63529c.1799.28447.2676.61762.2508.95379l-.06 1.1667c-.0118.2282.0244.4564.1063.6698.082.2133.2078.4071.3694.5687.1617.1616.3554.2874.5687.3694.2134.0819.4416.1181.6698.1063l1.1667-.06c.3371-.018.6714.069.957.249.2856.1799.5084.444.6377.7558s.1588.656.0844.9853c-.0745.3292-.2491.6273-.5.8532l-.8683.7833c-.1695.1531-.305.34-.3978.5487-.0927.2087-.1407.4346-.1407.663s.048.4542.1407.663c.0928.2087.2283.3956.3978.5487l.8683.7833c.2504.2259.4247.5237.499.8526.0742.329.0448.6728-.0842.9843-.1291.3116-.3514.5755-.6365.7555-.2851.1801-.619.2674-.9558.2501l-1.1666-.06c-.2282-.0116-.4563.0248-.6695.1068-.2132.0821-.4069.2079-.5684.3695-.1616.1615-.2874.3552-.3695.5684-.082.2132-.1184.4413-.1068.6695l.06 1.1666c.0174.3368-.07.6706-.25.9557-.1801.2852-.444.5075-.7556.6366-.3115.129-.6553.1584-.9842.0842-.329-.0743-.6268-.2486-.8527-.499l-.7833-.8683c-.1531-.1695-.34-.305-.5487-.3978-.2087-.0927-.4346-.1407-.663-.1407s-.4542.048-.663.1407c-.2087.0928-.3956.2283-.5487.3978l-.7858.8692c-.2259.2503-.5237.4246-.8526.4989-.329.0743-.6728.0448-.9843-.0842-.3116-.1291-.5755-.3514-.7555-.6365-.1801-.2851-.2674-.619-.2501-.9557l.06-1.1667c.0115-.2281-.025-.4562-.1071-.6693-.0821-.2132-.2079-.4068-.3695-.5683-.1615-.1615-.3551-.2874-.5682-.3695-.2132-.0821-.4412-.1185-.6694-.1071l-1.1666.06c-.3358.016-.66836-.0721-.9522-.2522-.28385-.1802-.50517-.4435-.63372-.7542-.12855-.3106-.15808-.6533-.08453-.9814.07354-.328.24656-.6253.49543-.8513l.86832-.7834c.1695-.153.305-.34.3978-.5487.0927-.2087.1407-.4345.1407-.6629s-.048-.4543-.1407-.663c-.0928-.2087-.2283-.3956-.3978-.5487l-.86832-.7833c-.25071-.2258-.4253-.5238-.49975-.8528-.07446-.3291-.04512-.6732.08397-.9849.1291-.3117.3516-.5758.63692-.7559.28531-.1801.61938-.2673.95638-.2498l1.1666.06c.2286.0118.457-.0246.6706-.1068s.4075-.2083.5692-.3702c.1617-.162.2875-.3561.3694-.5698s.1179-.4422.1058-.6707l-.06-1.1666c-.0161-.33591.0719-.66857.2519-.95255.1801-.28399.4434-.50545.7541-.63411s.6535-.15825.9816-.08473c.3281.07353.6256.24658.8516.49552z"
                    }
                }), t("path", {
                    attrs: {
                        d: "m18.2485 22.9812c2.7615 0 5-2.2386 5-5s-2.2385-5-5-5c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5z"
                    }
                })])], 1)]), e.page.showBack ? t("button", {
                    staticClass: "icon-back",
                    on: {
                        click: e.goBack
                    }
                }) : e._e(), e._v("\n    " + e._s(e.title) + "\n  ")]), "" != e.page.description ? t("p", [t("span", {
                    domProps: {
                        innerHTML: e._s(e.page.description)
                    }
                })]) : e._e(), e.isTabTable ? t("div", {
                    staticClass: "info-messaging"
                }, [e._m(0), t("RatesDropdown", {
                    attrs: {
                        smsAccount: e.smsAccount,
                        displayText: "SMS messaging rates",
                        fullStop: "."
                    }
                }), t("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.clientPermissions,
                        expression: "clientPermissions"
                    }]
                }, [e._v("Configure how SMS messages are sent on the "), t("a", {
                    attrs: {
                        href: "/sending/sms_settings"
                    }
                }, [e._v("SMS Settings")]), e._v(" page.")])], 1) : e._e()])
            },
            Os = [function() {
                var e = this,
                    t = e._self._c;
                return t("p", [e._v("SMS messaging gives you the ability to send and receive SMS messages via email. "), t("br", {
                    staticClass: "desktop-hide"
                }), t("a", {
                    staticClass: "external-icon",
                    attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/6352101968409",
                        target: "_blank"
                    }
                }, [e._v("Learn more")]), e._v(" or see ")])
            }],
            ws = {
                name: "SMSHeader",
                mixins: [S, O],
                props: {
                    context: String,
                    title: String,
                    clientPermissions: Boolean,
                    smsAccount: String
                },
                components: {
                    RatesDropdown: H
                },
                data: function() {
                    return {
                        contexts: this.$config.contexts,
                        headers: this.$config.headers,
                        showBack: !1,
                        page: {
                            title: "",
                            description: "",
                            showBack: !1
                        },
                        requestPoint: this.$config.requestPoint,
                        datestamp_format: Object,
                        firstLoad: !0,
                        showRates: !1
                    }
                },
                methods: {
                    init: function() {
                        switch (this.firstLoad = !1, this.context) {
                            case this.contexts.TAB_SENT:
                            case this.contexts.TAB_RECEIVED:
                            case this.contexts.TAB_SUMMARY:
                            case this.contexts.TAB_SETTINGS:
                            case this.contexts.TAB_NUMBERS:
                            case this.contexts.TAB_RECHARGE:
                            case this.contexts.TAB_TOPUP:
                            case this.contexts.TAB_EMAIL2SMS:
                                this.page = this.headers["tabs"];
                                break;
                            case this.contexts.SETTINGS_NUMBERS:
                            case this.contexts.SETTINGS_PURCHASE:
                                this.page = this.headers["numbers"];
                                break;
                            case this.contexts.SETTINGS_EMAIL2SMS:
                                this.page = this.headers["email2sms"];
                                break;
                            default:
                                break
                        }
                    },
                    goBack: function() {
                        this.$eventBus.$emit(l.GO_BACK)
                    }
                },
                computed: {
                    isTabTable: function() {
                        return this.context.startsWith(this.contexts.TAB)
                    }
                }
            },
            Rs = ws,
            Ms = Object(M["a"])(Rs, ys, Os, !1, null, null, null),
            Gs = Ms.exports,
            Us = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "page-alert",
                    class: {
                        success: e.isSuccess,
                        error: !e.isSuccess
                    }
                }, [t("span", {
                    staticClass: "page-alert-icon"
                }, [e.isSuccess ? t("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16"
                    }
                }, [t("rect", {
                    attrs: {
                        fill: "none",
                        width: "16",
                        height: "16"
                    }
                }), t("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#009364",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "1.5px",
                        d: "M12.948,3.99,8.41,8.535c-.39-.4-1.773-1.929-1.773-1.929",
                        transform: "translate(-1.792 1.738)"
                    }
                })]) : e._e(), e.isSuccess ? e._e() : t("svg", {
                    attrs: {
                        height: "1792",
                        viewBox: "0 0 1792 1792",
                        width: "1792",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [t("path", {
                    attrs: {
                        fill: "#b35e4f",
                        d: "M896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zm128 1247v-190q0-14-9-23.5t-22-9.5h-192q-13 0-23 10t-10 23v190q0 13 10 23t23 10h192q13 0 22-9.5t9-23.5zm-2-344l18-621q0-12-10-18-10-8-24-8h-220q-14 0-24 8-10 6-10 18l17 621q0 10 10 17.5t24 7.5h185q14 0 23.5-7.5t10.5-17.5z"
                    }
                })])]), t("p", {
                    staticClass: "page-alert-message"
                }, [e._v("\n    Your SMS Messaging number has been successfully added to your account.\n  ")])])
            },
            js = [],
            xs = {
                name: "pageAlert",
                data: function() {
                    return {
                        isSuccess: !0
                    }
                }
            },
            Ds = xs,
            Ls = (s("cf1b"), Object(M["a"])(Ds, Us, js, !1, null, null, null)),
            Ps = Ls.exports,
            ks = function() {
                var e = this,
                    t = e._self._c;
                return e.showNotice ? t("div", {
                    staticClass: "bar-notice notice-top is-info is-grouped"
                }, [e._l(e.numbers, (function(s) {
                    return t("p", {
                        key: s.number.id,
                        class: "PENDING" === s.verification_status || "SENT" === s.verification_status || void 0 !== s.verification.details && "" !== s.verification.details ? "" : "has-icon"
                    }, [
                        ["NQ", "PENDING", "REJECTED", "SENT"].includes(s.verification_status) ? t("span", {
                            class: ["PENDING" === s.verification_status || "SENT" === s.verification_status ? "info-icon" : "notice-icon", "REJECTED" === s.verification_status ? "hide" : ""]
                        }) : e._e(), "NQ" === s.verification_status ? t("span", {
                            staticClass: "bar-notice-message"
                        }, ["GB" === s.number.country ? t("span", [t("strong", [e._v("Action required:")]), e._v(" You must submit verification info for your UK number " + e._s(s.display.full) + " within two days of ordering the number or local regulators may automatically cancel your number."), t("br"), e.clientPermissions ? e._e() : t("div", [e._v("To submit verification info for your UK number, you can make this request through one of your team members with permission to do so.")])]) : "AU" === s.number.country ? t("span", [t("strong", [e._v("Action required:")]), e._v(" Your Australian number " + e._s(s.display.full) + " requires identity verification before it can be used for sending.\n        "), e.clientPermissions && s.verification && s.verification.verification_url ? t("div", [t("br"), t("button", {
                            staticClass: "button-outlined",
                            on: {
                                click: function(t) {
                                    return e.openAUVerification(s.verification.verification_url)
                                }
                            }
                        }, [e._v("Complete identity verification")])]) : e._e(), e.clientPermissions ? e._e() : t("div", [e._v("To complete identity verification for your Australian number, you can make this request through one of your team members with permission to do so.")])]) : t("span", [e.context !== e.contexts.TAB_NUMBERS ? t("div", [t("strong", [e._v("Action required:")]), e._v(" You need to request approval for your dedicated number to prevent messages being blocked."), t("br"), t("br")]) : t("div", [t("strong", [e._v("Action required:")]), e._v(" To request approval for your dedicated number, click the 'Verify' button next to your number. "), t("br"), e._v("You'll need to complete a short questionnaire, which should take around 15 minutes."), t("br")]), e.clientPermissions ? e._e() : t("div", [e._v("To request approval for your dedicated number, you can make this request through one of your team members with permission to do so.")])])]) : "PENDING" === s.verification_status ? t("span", {
                            staticClass: "bar-notice-message"
                        }, [t("strong", [e._v("Your questionnaire for " + e._s(s.display.full) + " was submitted to our team for review on " + e._s(e.getDateFormat(s.verification.created)) + ".")]), e._m(0, !0)]) : "REJECTED" === s.verification_status ? t("span", {
                            staticClass: "bar-notice-message notice-column"
                        }, [t("span", {
                            staticClass: "outer-notice-wrapper"
                        }, ["REJECTED" === s.verification_status ? t("span", {
                            staticClass: "notice-icon"
                        }) : e._e(), t("span", {
                            staticClass: "bar-notice-message"
                        }, [t("strong", [e._v("Action required:")]), e._v(" Your questionnaire for " + e._s(s.display.full) + " needs to be resubmitted \n          "), void 0 !== s.verification.details && "" !== s.verification.details ? t("span", [e._v(" \n            with the following further information:\n          ")]) : e._e()])]), t("span", {
                            staticClass: "inner-notice-wrapper",
                            staticStyle: {
                                "white-space": "pre-line"
                            }
                        }, [void 0 !== s.verification.details && "" !== s.verification.details ? t("span", {
                            staticClass: "bar-notice-inner"
                        }, [e._v(e._s(s.verification.details) + "\n          "), void 0 !== s.verification.sub_details && "" !== s.verification.sub_details ? t("span", [t("p", [t("br"), e._v("\n              " + e._s(s.verification.sub_details) + "\n            ")])]) : e._e()]) : e._e()]), e.clientPermissions ? e._e() : t("div", [e._v("To resubmit your questionnaire, you can make this request through one of your team members with permission to do so.")])]) : "SENT" === s.verification_status ? t("span", {
                            staticClass: "bar-notice-message"
                        }, [t("strong", [e._v("Your questionnaire for " + e._s(s.display.full) + " has been forwarded to mobile carriers on " + e._s(e.getDateFormat(s.verification.sent)) + " for review.")]), t("br"), e._v("This process usually takes fewer than 7 days, but can take up to 4 weeks.\n      "), e._m(1, !0)]) : e._e()
                    ])
                })), e.showNoticeButton ? t("div", {
                    staticClass: "notice-footer"
                }, [e.showNoticeButton ? t("button", {
                    staticClass: "button-outlined",
                    on: {
                        click: e.manageNumbers
                    }
                }, [e._v("Manage dedicated numbers")]) : e._e()]) : e._e()], 2) : e._e()
            },
            Bs = [function() {
                var e = this,
                    t = e._self._c;
                return t("ul", [t("li", [e._v("Sending is blocked until your dedicated number is verified.")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("ul", [t("li", [e._v("We recommend waiting until your dedicated number is verified before sending (to ensure a high delivery rate).")]), t("li", [e._v("Sending is blocked until your dedicated number is verified.")])])
            }];

        function Hs(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), s.push.apply(s, i)
            }
            return s
        }

        function Fs(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Hs(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Hs(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }))
            }
            return e
        }
        var $s = {
                name: "BarNoticeGrouped",
                props: {
                    context: String,
                    clientPermissions: Boolean
                },
                data: function() {
                    return {
                        contexts: this.$config.contexts
                    }
                },
                created: function() {
                    this.numbersInitialised || this.gettingNumbers || this.$store.dispatch(wt.actions.FETCH_USER_NUMBERS, !0)
                },
                methods: {
                    openAUVerification: function(e) {
                        window.open(e, "_blank")
                    },
                    manageNumbers: function() {
                        switch (this.context) {
                            case this.contexts.TAB_SETTINGS:
                            case this.contexts.TAB_NUMBERS:
                            case this.contexts.TAB_EMAIL2SMS:
                            case this.contexts.TAB_RECHARGE:
                            case this.contexts.TAB_TOPUP:
                                this.$eventBus.$emit(l.SWITCH_CONTEXT, this.contexts.TAB_NUMBERS);
                                break;
                            default:
                                window.location.href = "/sending/sms_settings/#dedicated";
                                break
                        }
                    },
                    getDateFormat: function(e) {
                        return nt.a.unix(e).format("MMMM Do, YYYY")
                    }
                },
                computed: Fs(Fs({}, Object(st["a"])({
                    gettingNumbers: wt.getters.GET_IS_FETCHING,
                    numbersInitialised: wt.getters.GET_IS_INITIALISED,
                    numbers: wt.getters.GET_USER_NUMBERS,
                    hasUSNumber: wt.getters.GET_HAS_US_NUMBER,
                    hasUnverifiedUSNumber: wt.getters.GET_HAS_UNVERIFIED_US_NUMBER,
                    hasPendingUSNumber: wt.getters.GET_HAS_PENDING_US_NUMBER,
                    hasUnverifiedAUNumber: wt.getters.GET_HAS_UNVERIFIED_AU_NUMBER
                })), {}, {
                    showNotice: function() {
                        return this.numbersInitialised && (this.hasUnverifiedUSNumber || this.hasPendingUSNumber || this.hasUnverifiedAUNumber)
                    },
                    showNoticeButton: function() {
                        return "tab-numbers" !== this.context && this.hasUnverifiedUSNumber
                    }
                })
            },
            qs = $s,
            zs = Object(M["a"])(qs, ks, Bs, !1, null, null, null),
            Vs = zs.exports,
            Qs = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "bar-notice notice-top is-info"
                }, [t("p", [t("span", {
                    staticClass: "notice-icon"
                }), t("span", {
                    staticClass: "bar-notice-message notice-country-specific"
                }, [t("strong", [e._v("Sending SMS messages to North America?")]), t("div", [e._v("Mobile carriers require all senders to register a dedicated number before sending.")]), e.clientPermissions ? t("button", {
                    staticClass: "button-outlined",
                    on: {
                        click: e.registerNumber
                    }
                }, [e._v("Register a dedicated number")]) : e._e(), e.clientPermissions ? t("button", {
                    staticClass: "button-outlined",
                    attrs: {
                        role: "button",
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            e.showDialog = !e.showDialog
                        }
                    }
                }, [e._v("Dismiss")]) : e._e(), e.clientPermissions ? e._e() : t("div", [e._v("To add a dedicated number, you can make this request through one of your team members with permission to do so.")])])]), t("Transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [e.showDialog ? t("div", {
                    staticClass: "transition-container"
                }, [t("div", {
                    staticClass: "modal-backdrop fade in",
                    on: {
                        click: function(t) {
                            e.showDialog = !e.showDialog
                        }
                    }
                }), t("div", {
                    staticClass: "modal-dialog modal-medium confirm-exit is-active"
                }, [t("header", {
                    staticClass: "modal-header"
                }, [t("h4", [e._v("Are you sure?")]), t("button", {
                    staticClass: "bootbox-close-button close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            e.showDialog = !e.showDialog
                        }
                    }
                }, [e._v("Ã—")])]), t("p", [e._v("If you don't register a dedicated number, new carrier requirements will prevent you from sending messages")]), t("div", {
                    staticClass: "modal-footer"
                }, [t("button", {
                    staticClass: "btn blue",
                    on: {
                        click: e.confirmDismiss
                    }
                }, [e._v("I understand")]), t("button", {
                    staticClass: "btn btn-outlined template-close",
                    on: {
                        click: function(t) {
                            e.showDialog = !e.showDialog
                        }
                    }
                }, [e._v("Back")])])])]) : e._e()])], 1)
            },
            Ws = [],
            Js = {
                name: "BarNoticeUsa",
                mixins: [S],
                props: {
                    context: String,
                    clientPermissions: Boolean
                },
                data: function() {
                    return {
                        requestPoint: this.$config.requestPoint,
                        contexts: this.$config.contexts,
                        showDialog: !1
                    }
                },
                methods: {
                    registerNumber: function() {
                        window.location.href = "/sending/sms_settings/#dedicated"
                    },
                    confirmDismiss: function() {
                        this.mixinAjax_post(this.requestPoint, "hide-usa-banner", null, (function() {}), (function() {}), !0), this.showDialog = !this.showDialog, this.$eventBus.$emit(l.HIDE_USA_BANNER)
                    }
                }
            },
            Ys = Js,
            Ks = (s("9803"), Object(M["a"])(Ys, Qs, Ws, !1, null, "74b85c50", null)),
            Xs = Ks.exports,
            Zs = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            ei = [function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "bar-notice notice-top is-info"
                }, [t("p", [t("span", {
                    staticClass: "notice-icon"
                }), t("span", {
                    staticClass: "bar-notice-message"
                }, [t("strong", [e._v("You have reached your temporary SMS sending limit.")]), t("div", [e._v("No action is required. This limit is in place to mitigate excessive sending by rogue scripts and spam outbreaks. Our team will review your traffic and increase your sending limit shortly. Your messages will be held in the meantime. If you have any questions or concerns please submit a support ticket.")])])])])
            }],
            ti = {
                name: "BarNoticeQuota",
                mixins: [S],
                props: {
                    context: String
                },
                data: function() {
                    return {
                        requestPoint: this.$config.requestPoint,
                        contexts: this.$config.contexts,
                        showDialog: !1
                    }
                },
                methods: {}
            },
            si = ti,
            ii = (s("c7ff"), Object(M["a"])(si, Zs, ei, !1, null, "686613bc", null)),
            ni = ii.exports,
            ai = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "sms-verification"
                }, [e.isLoading ? t("AjaxLoadingSpinner", {
                    attrs: {
                        context: "FORCED"
                    }
                }) : e._e(), t("header", {
                    staticClass: "page-content-header"
                }, [t("h3", {
                    staticClass: "page-title"
                }, [t("button", {
                    staticClass: "icon-back",
                    on: {
                        click: e.closeForm
                    }
                }), e.isSubmitted ? t("span", [e._v("Submission successful!")]) : t("span", [e._v("Verify your number")])]), t("p", [e.isSubmitted ? t("span", [e._v("Thanks! We have received your submission.")]) : t("span", [e._v("\n      Please complete the questionnaire below to fully activate your dedicated number.\n      "), t("br"), e._v("Your answers will be reviewed by mobile carriers, which normally take fewer than 7 days to complete the process (but can take up to 4 weeks).\n      ")])])]), t("div", {
                    class: {
                        hide: e.isSubmitted || e.hideMsgmForm
                    },
                    attrs: {
                        id: "form",
                        "data-paperform-id": "sms-verify"
                    }
                }), t("div", {
                    class: {
                        hide: e.isSubmitted || e.hideTnyxForm
                    },
                    attrs: {
                        id: "form",
                        "data-paperform-id": "sms-tfn"
                    }
                }), t("div", {
                    class: {
                        hide: e.isSubmitted || e.hideUKMobileForm
                    },
                    attrs: {
                        id: "form",
                        "data-paperform-id": "qi10dlf1"
                    }
                })], 1)
            },
            ri = [],
            oi = s("7618"),
            ci = s("75fc");

        function ui(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), s.push.apply(s, i)
            }
            return s
        }

        function li(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ui(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : ui(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }))
            }
            return e
        }
        var di = {
                name: "NumberVerification",
                mixins: [S],
                components: {
                    AjaxLoadingSpinner: Tt
                },
                data: function() {
                    return {
                        requestPoint: this.$config.requestPoint,
                        isLoading: !0,
                        hasLoaded: !1,
                        isSubmitted: !1,
                        number: Object,
                        hideMsgmForm: !0,
                        hideTnyxForm: !0,
                        hideUKMobileForm: !0,
                        userData: Object,
                        smsAccount: String
                    }
                },
                methods: {
                    embedTypeform: function(e, t, s) {
                        var i = this;
                        this.hideMsgmForm = !1, this.number = e, this.userData = t, this.smsAccount = s, this.hasLoaded || (this.isLoading = !0);
                        var n = {
                                "547od": this.number.number.phone_number,
                                "2iln2": t.accountID,
                                "3d1cq": t.email,
                                "589ba": s
                            },
                            a = t.username.split(" ");
                        if (n["b86qa"] = a[0], a.length > 1) {
                            var r = a.slice(1).join(" ");
                            n["4ad69"] = r
                        }
                        var o = t.tfn_subs[this.number.number.phone_number],
                            c = [];
                        if (null !== o && void 0 !== o)
                            for (var u in o)
                                if ("address" === u) {
                                    var l = o[u],
                                        d = [l.subpremise, "".concat(l.streetNumber || "", " ").concat(l.street || "").trim(), l.suburb, l.state, l.postcode].filter(Boolean).join(", ");
                                    n["485mo"] = d
                                } else if ("6osqp" === u) {
                            var m = o[u].split(",").map((function(e) {
                                return e.trim()
                            }));
                            c = m.map((function(e) {
                                return {
                                    "6osqp": e
                                }
                            }))
                        } else n[u] = o[u];
                        var _ = [].concat(Object(ci["a"])(Object.entries(n).map((function(e) {
                                var t = Object(f["a"])(e, 2),
                                    s = t[0],
                                    i = t[1];
                                return {
                                    key: s,
                                    value: i
                                }
                            }))), Object(ci["a"])(c.map((function(e) {
                                var t = Object.entries(e),
                                    s = Object(f["a"])(t, 1),
                                    i = Object(f["a"])(s[0], 2),
                                    n = i[0],
                                    a = i[1];
                                return {
                                    key: n,
                                    value: a
                                }
                            })))),
                            h = _.map((function(e) {
                                var t = e.key,
                                    s = e.value;
                                return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(s))
                            })).join("&"),
                            p = document.querySelector("[data-paperform-id='sms-verify']");
                        p.setAttribute("prefill", h);
                        var g = document.createElement("script");
                        g.setAttribute("src", "https://paperform.co/__embed.min.js"), document.body.appendChild(g);
                        var S = this;
                        window.addEventListener("PaperformSubmission", (function(e) {
                            S.formSubmitted(e.detail)
                        })), this.typeformModal = !0, this.hasLoaded || setTimeout((function() {
                            i.isLoading = !1, i.hasLoaded = !0
                        }), 2500)
                    },
                    formSubmitted: function(e) {
                        var t = this;
                        this.$eventBus.$emit(l.SHOW_VERIFICATION_FORM, !1), this.$eventBus.$emit(l.VERIFICATION_SUBMITTED), this.isSubmitted = !0;
                        var s = {
                                "547od": this.number.number.phone_number,
                                "2iln2": this.userData.accountID,
                                "3d1cq": this.userData.email,
                                "589ba": this.smsAccount
                            },
                            i = e.data.map((function(e) {
                                return s.hasOwnProperty(e.key) ? li(li({}, e), {}, {
                                    value: s[e.key],
                                    raw: s[e.key]
                                }) : e
                            })),
                            n = {
                                submission_id: e.submission_id,
                                form_id: e.form_id,
                                submission: JSON.stringify(i)
                            };
                        this.mixinAjax_post(this.requestPoint, "store-tfn-request", n, (function() {}), (function() {
                            t.isSubmitted = !1
                        }), !0), void 0 == this.number.assignment.metadata && (this.number.assignment.metadata = {}), this.number.assignment.metadata.verification_status = "submitted";
                        var a = {
                            number_id: this.number.assignment.number_id,
                            label: this.number.assignment.label,
                            metadata: JSON.stringify(this.number.assignment.metadata)
                        };
                        this.mixinAjax_put(this.requestPoint, "patch-number", a, (function() {
                            t.$store.dispatch(wt.actions.FETCH_USER_NUMBERS, !0)
                        }), (function() {}), !0)
                    },
                    closeForm: function() {
                        this.$eventBus.$emit(l.SHOW_VERIFICATION_FORM, !1)
                    },
                    embedUKMobileTypeform: function(e, t) {
                        var s = this;
                        this.hideUKMobileForm = !1, this.number = e, this.userData = t, this.hasLoaded || (this.isLoading = !0);
                        var i = document.createElement("script");
                        i.setAttribute("src", "https://paperform.co/__embed.min.js"), document.body.appendChild(i);
                        var n = this;
                        window.addEventListener("PaperformSubmission", (function(e) {
                            n.ukMobileFormSubmitted(e.detail)
                        })), this.hasLoaded || setTimeout((function() {
                            s.isLoading = !1, s.hasLoaded = !0
                        }), 2500)
                    },
                    ukMobileFormSubmitted: function(e) {
                        var t = this;
                        this.$eventBus.$emit(l.SHOW_VERIFICATION_FORM, !1), this.$eventBus.$emit(l.VERIFICATION_SUBMITTED), this.isSubmitted = !0;
                        var s = {};
                        (e.data || []).forEach((function(e) {
                            s[e.key] = e.value
                        }));
                        var i = function(e) {
                                return e ? Array.isArray(e) ? e.map((function(e) {
                                    return e && e.url ? e.url : String(e || "")
                                })).filter(Boolean) : "object" === Object(oi["a"])(e) ? e.url ? [e.url] : [] : e ? [String(e)] : [] : []
                            },
                            n = {
                                submission_id: e.submission_id,
                                form_id: e.form_id,
                                number: this.number.number.phone_number,
                                photoIdOrRegistration: i(s.photoIdOrRegistration),
                                proofOfAddress: i(s.proofOfAddress),
                                address: "string" === typeof s.address ? s.address : s.address || "",
                                fullName: s.fullName || "",
                                businessName: s.businessName || "",
                                companyWebsite: s.companyWebsite || "",
                                contactPhone: s.contactPhone || "",
                                businessUseCase: s.businessUseCase || ""
                            };
                        this.mixinAjax_post(this.requestPoint, "store-uk-mobile-request", n, (function() {
                            t.$store.dispatch(wt.actions.FETCH_USER_NUMBERS, !0)
                        }), (function() {
                            console.error("[UK Mobile] store-uk-mobile-request FAILED"), t.isSubmitted = !1
                        }), !0)
                    },
                    embedTelnyxTypeform: function(e, t, s) {
                        var i = this;
                        this.hideTnyxForm = !1, this.number = e, this.hasLoaded || (this.isLoading = !0);
                        var n = {
                                "469n6": this.number.number.phone_number,
                                ag0i2: t.email,
                                "5tsu1": t.accountID,
                                tb08: s
                            },
                            a = t.username.split(" ");
                        if (n["9pf12"] = a[0], a.length > 1) {
                            var r = a.slice(1).join(" ");
                            n["a166r"] = r
                        }
                        var o = t.tfn_subs[this.number.number.phone_number],
                            c = [];
                        if (null !== o && void 0 !== o) {
                            for (var u in o)
                                if ("submission_id" !== u && "form_id" !== u)
                                    if ("address" === u) {
                                        var l = o[u],
                                            d = [l.country, l.postcode, l.state, l.suburb, "".concat(l.streetNumber, " ").concat(l.street).trim()].join(",");
                                        n["2sod8"] = d
                                    } else n[u] = o[u];
                            this.mixinAjax_post(this.requestPoint, "log-tfn-resubmit-attempt", {
                                number: this.number.number.phone_number,
                                prefill_keys: Object.keys(n)
                            }, (function() {}), (function() {}), !0)
                        }
                        var m = [].concat(Object(ci["a"])(Object.entries(n).map((function(e) {
                                var t = Object(f["a"])(e, 2),
                                    s = t[0],
                                    i = t[1];
                                return {
                                    key: s,
                                    value: i
                                }
                            }))), Object(ci["a"])(c.map((function(e) {
                                var t = Object.entries(e),
                                    s = Object(f["a"])(t, 1),
                                    i = Object(f["a"])(s[0], 2),
                                    n = i[0],
                                    a = i[1];
                                return {
                                    key: n,
                                    value: a
                                }
                            })))),
                            _ = m.map((function(e) {
                                var t = e.key,
                                    s = e.value;
                                return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(s))
                            })).join("&"),
                            h = document.querySelector("[data-paperform-id='sms-tfn']");
                        h.setAttribute("prefill", _);
                        var p = document.createElement("script");
                        p.setAttribute("src", "https://paperform.co/__embed.min.js"), document.body.appendChild(p);
                        var g = this;
                        window.addEventListener("PaperformSubmission", (function(e) {
                            g.telnyxFormSubmitted(e.detail)
                        })), this.typeformModal = !0, this.hasLoaded || setTimeout((function() {
                            i.isLoading = !1, i.hasLoaded = !0
                        }), 2500)
                    },
                    telnyxFormSubmitted: function(e) {
                        var t = this;
                        this.$eventBus.$emit(l.SHOW_VERIFICATION_FORM, !1), this.$eventBus.$emit(l.VERIFICATION_SUBMITTED), this.isSubmitted = !0;
                        var s = {
                            submission_id: e.submission_id,
                            form_id: e.form_id,
                            submission: JSON.stringify(e.data)
                        };
                        this.mixinAjax_post(this.requestPoint, "store-telnyx-tfn-request", s, (function() {
                            t.$store.dispatch(wt.actions.FETCH_USER_NUMBERS, !0)
                        }), (function() {
                            t.isSubmitted = !1
                        }), !0)
                    }
                }
            },
            mi = di,
            _i = (s("ea9c"), Object(M["a"])(mi, ai, ri, !1, null, null, null)),
            hi = _i.exports,
            pi = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "sms-verification"
                }, [e.isSubmittingForm ? t("div", {
                    staticClass: "sms-verification-splash"
                }, [e._m(0), t("h2", [e._v("Submitting your answers")]), e._m(1), e._m(2)]) : e._e(), t("header", {
                    staticClass: "page-content-header"
                }, [t("h3", {
                    staticClass: "page-title"
                }, [t("button", {
                    staticClass: "icon-back",
                    on: {
                        click: e.closeForm
                    }
                }), e.isSubmitted ? t("span", [e._v("Submission successful!")]) : t("span", [e._v("Apply for a Sender ID")])]), t("p", [e.isSubmitted ? t("span", [e._v("Thanks! We have received your submission.")]) : t("span", [e._v("\n        Please complete the questionnaire below to apply for an Alphanumeric Sender ID.\n      ")])])]), t("div", {
                    key: e.formKey,
                    class: {
                        hide: e.isSubmitted
                    },
                    attrs: {
                        id: "form",
                        "data-paperform-id": "sms-amc"
                    }
                })])
            },
            gi = [function() {
                var e = this,
                    t = e._self._c;
                return t("figure", [t("img", {
                    attrs: {
                        src: "/static/smtp2go_assets/graphic-contactus-success.png",
                        alt: "SMTP2GO"
                    }
                })])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", {
                    staticClass: "block-info"
                }, [e._v("\n      Saving and submitting your Sender ID information. "), t("br"), e._v("You'll be redirected in a moment once the submission is complete.\n    ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "loading-spinner"
                }, [t("div", {
                    staticClass: "loader"
                }, [t("span", {
                    staticClass: "icon-circles"
                }, [t("span", {
                    staticClass: "dot-circle pending"
                }), t("span", {
                    staticClass: "dot-circle soft-bounced"
                }), t("span", {
                    staticClass: "dot-circle hard-bounced"
                }), t("span", {
                    staticClass: "dot-circle rejected"
                }), t("span", {
                    staticClass: "dot-circle spam"
                }), t("span", {
                    staticClass: "dot-circle delivered"
                }), t("span", {
                    staticClass: "dot-circle unsubscribed"
                }), t("span", {
                    staticClass: "dot-circle unblocked"
                }), t("span", {
                    staticClass: "dot-circle opened"
                }), t("span", {
                    staticClass: "dot-circle clicked"
                })])])])
            }],
            Si = {
                name: "SenderIDVerification",
                mixins: [S],
                components: {},
                data: function() {
                    return {
                        requestPoint: this.$config.requestPoint,
                        isLoading: !1,
                        hasLoaded: !1,
                        isSubmitted: !1,
                        isSubmittingForm: !1,
                        requestedSenderID: Object,
                        formKey: 0
                    }
                },
                created: function() {
                    this.$eventBus.$on("reset-senderid-form", this.resetForm)
                },
                beforeDestroy: function() {
                    this.$eventBus.$off("reset-senderid-form", this.resetForm)
                },
                methods: {
                    embedTypeform: function(e, t, s) {
                        var i = this;
                        this.requestedSenderID = s, this.hasLoaded || (this.isLoading = !0), this.isSubmitted = !1, this.isSubmittingForm = !1, this.formKey += 1, this.$nextTick((function() {
                            var s = {
                                "3ojer": e.accountID,
                                "5u7pr": t
                            };
                            e.username && (s["8cibp"] = e.username);
                            var n = [],
                                a = [].concat(Object(ci["a"])(Object.entries(s).map((function(e) {
                                    var t = Object(f["a"])(e, 2),
                                        s = t[0],
                                        i = t[1];
                                    return {
                                        key: s,
                                        value: i
                                    }
                                }))), Object(ci["a"])(n.map((function(e) {
                                    var t = Object.entries(e),
                                        s = Object(f["a"])(t, 1),
                                        i = Object(f["a"])(s[0], 2),
                                        n = i[0],
                                        a = i[1];
                                    return {
                                        key: n,
                                        value: a
                                    }
                                })))),
                                r = a.map((function(e) {
                                    var t = e.key,
                                        s = e.value;
                                    return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(s))
                                })).join("&"),
                                o = document.querySelector("[data-paperform-id='sms-amc']");
                            o && o.setAttribute("prefill", r);
                            var c = document.querySelector("script[src='https://paperform.co/__embed.min.js']");
                            c && c.remove();
                            var u = document.createElement("script");
                            u.setAttribute("src", "https://paperform.co/__embed.min.js"), document.body.appendChild(u);
                            var l = i;
                            window.removeEventListener("PaperformSubmission", i.handlePaperformSubmission), window.addEventListener("PaperformSubmission", (function(e) {
                                l.formSubmitted(e.detail)
                            })), i.typeformModal = !0, i.hasLoaded || setTimeout((function() {
                                i.isLoading = !1, i.hasLoaded = !0
                            }), 2500)
                        }))
                    },
                    closeForm: function() {
                        this.isSubmitted = !1, this.hasLoaded = !1, this.$eventBus.$emit(l.SHOW_SENDER_ID_FORM, !1)
                    },
                    resetForm: function() {
                        this.isSubmitted = !1, this.hasLoaded = !1, this.isSubmittingForm = !1
                    },
                    formSubmitted: function(e) {
                        var t = this;
                        this.isLoading = !0, this.isSubmittingForm = !0;
                        var s = {
                                submission_id: e.submission_id,
                                form_id: e.form_id,
                                submission: JSON.stringify(e.data)
                            },
                            i = e.data,
                            n = "",
                            a = "",
                            r = i.find((function(e) {
                                return "Your Requested Sender ID" === e.label
                            }));
                        r && r.value && (n = r.value);
                        var o = i.find((function(e) {
                            return "Country" === e.label
                        }));
                        o && o.value && (a = o.value), this.mixinAjax_post(this.requestPoint, "submit-alphanumeric-sender-registration", s, (function(s) {
                            t.isLoading = !1, HTML.set_time(s.responseJSON), t.$eventBus.$emit(l.SENDER_ID_SUBMITTED, {
                                submission_id: e.submission_id,
                                country: a,
                                requested_sender_id: n,
                                approved: !1
                            }), t.closeForm()
                        }), (function() {
                            t.isLoading = !1, t.isSubmitted = !1, t.isSubmittingForm = !1
                        }), !1)
                    }
                }
            },
            fi = Si,
            bi = (s("c462"), Object(M["a"])(fi, pi, gi, !1, null, null, null)),
            Ei = bi.exports;

        function vi(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), s.push.apply(s, i)
            }
            return s
        }

        function Ti(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? vi(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : vi(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }))
            }
            return e
        }
        var Ai = {
                name: "SMS",
                mixins: [S, E, T],
                components: {
                    InfoSplash: z,
                    UpgradeSplash: K,
                    SubaccountSplash: ie,
                    SMSTabTable: ns,
                    SMSSettingsPage: Is,
                    SMSHeader: Gs,
                    pageAlert: Ps,
                    AjaxLoadingSpinner: Tt,
                    BarNoticeGrouped: Vs,
                    BarNoticeUsa: Xs,
                    BarNoticeQuota: ni,
                    NumberVerification: hi,
                    SenderIdVerification: Ei
                },
                data: function() {
                    return {
                        contexts: this.$config.contexts,
                        requestPoint: this.$config.requestPoint,
                        apMetadata: PAGE_DATA.apMetadata,
                        geoip_country: PAGE_DATA.geoip_country,
                        clientTimezone: PAGE_DATA.clientTimezone,
                        showInfoSplash: PAGE_DATA.show_info_splash,
                        showUpgradeSplash: PAGE_DATA.show_upgrade_splash,
                        hidePaymentSplash: PAGE_DATA.hide_payment_splash,
                        showSubaccountSplash: PAGE_DATA.show_subaccount_splash,
                        smsAccount: PAGE_DATA.sms_account,
                        userData: PAGE_DATA.user_data,
                        showAlert: !1,
                        context: "",
                        showNoticeUsa: !0,
                        showVerificationForm: !1,
                        questionnaireDates: {},
                        smsQuota: "-",
                        smsSentThisMonth: "-",
                        showBarNoticeQuota: !1,
                        pageTitle: "SMS Settings",
                        showSenderIdForm: !1
                    }
                },
                mounted: function() {
                    if (this.showSplash) this.context = this.contexts.SPLASH;
                    else {
                        this.init();
                        var e = window.location.hash.replace("#", "");
                        switch (history.replaceState(null, "", window.location.pathname + window.location.search), e) {
                            case "general":
                                this.context = this.contexts.TAB_SETTINGS;
                                break;
                            case "dedicated":
                                this.context = this.contexts.TAB_NUMBERS;
                                break;
                            case "senderids":
                                this.context = this.contexts.TAB_SENDERIDS;
                                break;
                            case "recharge":
                                this.context = this.contexts.TAB_RECHARGE;
                                break;
                            case "topup":
                                this.context = this.contexts.TAB_TOPUP;
                                break;
                            case "email2sms":
                                this.context = this.contexts.TAB_EMAIL2SMS;
                                break;
                            default:
                                this.context = this.contexts.TAB_SETTINGS
                        }
                    }
                    this.switchContext(this.context), this.$eventBus.$on("update-quota-sentThisMonth", this.handleQuotaChanges)
                },
                created: function() {
                    this.mixinEventListener_register(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, l.CREATE_ACCOUNT, this.createSMSAccount), l.SWITCH_CONTEXT, this.switchContext), l.SHOW_VERIFICATION_FORM, this.switchVerificationForm), l.SHOW_SENDER_ID_FORM, this.switchSenderIdForm), l.HIDE_USA_BANNER, this.hideUSABanner), l.GO_BACK, this.goBack)), this.mixinEventListener_on()
                },
                destroyed: function() {
                    this.mixinEventListener_off()
                },
                methods: {
                    init: function() {
                        void 0 !== this.clientTimezone && null !== this.clientTimezone && "" !== this.clientTimezone || (this.clientTimezone = c.a.tz.guess()), this.showSplash || (this.showNoticeUsa = this.apMetadata["app_settings"]["show_sms_usa_banner"], this.initChildren())
                    },
                    handleQuotaChanges: function(e, t) {
                        this.smsQuota = e, this.smsSentThisMonth = t, this.showBarNoticeQuota = this.smsSentThisMonth >= this.smsQuota
                    },
                    initChildren: function() {
                        this.$refs.sms_tab_table.init(this.clientTimezone, this.apMetadata), this.$refs.sms_settings_page.init(this.clientTimezone, this.apMetadata)
                    },
                    createSMSAccount: function(e, t) {
                        var s = this,
                            i = {
                                client_timezone: c.a.tz.guess()
                            },
                            n = !0;
                        this.mixinAjax_post(this.requestPoint, "create", i, (function(i) {
                            s.showInfoSplash = !1, s.apMetadata = i.responseJSON.results.metadata, s.smsAccount = s.apMetadata["sms_account"], s.$nextTick((function() {
                                s.initChildren()
                            })), s.switchContext(s.contexts.TAB_SETTINGS), "id" in e && s.assignNumber(e, t), s.$eventBus.$emit(l.SWITCH_CONTEXT, s.contexts.TAB_TOPUP)
                        }), (function(e) {
                            HTML.handleError(e.responseJSON), s.showInfoSplash = !1, s.showSmsTable = !0
                        }), n)
                    },
                    assignNumber: function(e, t) {
                        var s = !1,
                            i = {
                                number: e.phone_number,
                                country: e.country,
                                number_id: e.id,
                                label: t
                            };
                        this.mixinAjax_post(this.requestPoint, "assign-number", i, (function(e) {
                            HTML.set_time(e.responseJSON)
                        }), (function(e) {
                            HTML.handleError(e.responseJSON)
                        }), s)
                    },
                    switchContext: function(e) {
                        var t = this;
                        this.context = e, this.$eventBus.$emit(l.CLEAR_POLLING), history.replaceState(null, "", window.location.pathname + window.location.search), e != this.contexts.TAB_RECHARGE && e != this.contexts.TAB_TOPUP || this.apMetadata["app_settings"]["prepay_is_active"] || 0 != this.apMetadata["app_settings"]["prepay_transition_stage"] || (this.context = this.contexts.TAB_SETTINGS), this.$nextTick((function() {
                            switch (t.showSplash || t.$refs.sms_header.init(), t.context) {
                                case t.contexts.SPLASH:
                                    break;
                                case t.contexts.TAB_SENT:
                                case t.contexts.TAB_RECEIVED:
                                case t.contexts.TAB_SUMMARY:
                                case t.contexts.TAB_SETTINGS:
                                case t.contexts.TAB_NUMBERS:
                                case t.contexts.TAB_SENDERIDS:
                                case t.contexts.TAB_RECHARGE:
                                case t.contexts.TAB_TOPUP:
                                case t.contexts.TAB_EMAIL2SMS:
                                    t.$refs.sms_tab_table.switchTo(t.clientTimezone, t.apMetadata);
                                    break;
                                case t.contexts.SETTINGS_PURCHASE:
                                case t.contexts.SETTINGS_EMAIL2SMS:
                                case t.contexts.SETTINGS_NUMBER_EDIT:
                                    t.$refs.sms_settings_page.init(t.clientTimezone, t.apMetadata);
                                    break;
                                default:
                                    t.$eventBus.$emit(l.SWITCH_CONTEXT, t.contexts.TAB_SETTINGS);
                                    break
                            }
                        }))
                    },
                    goBack: function() {
                        if (this.context != this.contexts.SETTINGS_PURCHASE) {
                            if (this.showSettingsPage) {
                                if ((this.context == this.contexts.SETTINGS_NUMBERS || this.context == this.contexts.SETTINGS_PURCHASE) && this.$refs.sms_settings_page.$refs.sms_numbers.showSmsPurchase) return;
                                if (this.context == this.contexts.SETTINGS_NUMBER_EDIT) return void this.switchContext(this.contexts.TAB_NUMBERS);
                                this.switchContext(this.contexts.TAB_SETTINGS)
                            }
                        } else this.switchContext(this.contexts.TAB_NUMBERS)
                    },
                    performSearch: function() {
                        this.showInfoSplash ? this.$refs.sms_splash.performSplashNumberSearch() : this.$refs.sms_settings_page.doSearch()
                    },
                    switchVerificationForm: function(e, t) {
                        e ? (this.smsAccount && this.smsAccount.startsWith("msgm") ? this.$refs.sms_verification.embedTypeform(t, this.userData, this.smsAccount) : this.smsAccount && this.smsAccount.startsWith("tnyx") && (t && t.number && "GB" === t.number.country ? this.$refs.sms_verification.embedUKMobileTypeform(t, this.userData) : this.$refs.sms_verification.embedTelnyxTypeform(t, this.userData, this.smsAccount)), this.showVerificationForm = !0) : this.showVerificationForm = !1
                    },
                    switchSenderIdForm: function(e) {
                        e ? (this.$refs.sms_senderid_verification.embedTypeform(this.userData, this.smsAccount), this.showSenderIdForm = !0) : this.showSenderIdForm = !1
                    },
                    hideUSABanner: function() {
                        this.showNoticeUsa = !1
                    }
                },
                computed: Ti(Ti({}, Object(d["b"])({
                    numbersInitialised: wt.getters.GET_IS_INITIALISED,
                    hasUSNumber: wt.getters.GET_HAS_US_NUMBER,
                    numbers: wt.getters.GET_USER_NUMBERS,
                    hasUnverifiedUSNumber: wt.getters.GET_HAS_UNVERIFIED_US_NUMBER,
                    hasPendingUSNumber: wt.getters.GET_HAS_PENDING_US_NUMBER
                })), {}, {
                    accountBanned: function() {
                        return this.userData["sms_banned"]
                    },
                    defaultProvider: function() {
                        var e = "tnyx";
                        return "NZ" === this.geoip_country && (e = "tnyx"), 488116 == this.userData.accountID && (e = "tnyx"), e
                    },
                    showBarNoticeGrouped: function() {
                        return !this.accountBanned && this.numbersInitialised && this.hasUnverifiedUSNumber
                    },
                    showBarNotice: function() {
                        return !this.accountBanned && this.numbersInitialised && this.hasUnverifiedUSNumber && this.context == this.contexts.TAB_NUMBERS
                    },
                    showBarNoticeUsa: function() {
                        return !this.accountBanned && this.showNoticeUsa && this.numbersInitialised && !this.hasUSNumber
                    },
                    showBarNoticeSubmitted: function() {
                        return !this.accountBanned && this.numbersInitialised && (this.hasPendingUSNumber || this.hasUnverifiedUSNumber)
                    },
                    showBarNoticeUnverified: function() {
                        return !this.accountBanned && this.numbersInitialised && this.hasUnverifiedUSNumber && this.context != this.contexts.TAB_NUMBERS
                    },
                    showSplash: function() {
                        return this.showInfoSplash || this.showUpgradeSplash
                    },
                    showTabTable: function() {
                        return this.context.startsWith(this.contexts.TAB)
                    },
                    showSettingsPage: function() {
                        return this.context.startsWith(this.contexts.SETTINGS)
                    }
                })
            },
            Ci = Ai,
            Ni = (s("dc4c"), Object(M["a"])(Ci, n, a, !1, null, "9765f7c8", null)),
            Ii = Ni.exports,
            yi = "loading/",
            Oi = {
                getters: {
                    GET_SHOW_SENT_LOADING: yi + "GET_SHOW_SENT_LOADING",
                    GET_SHOW_RECEIVED_LOADING: yi + "GET_SHOW_RECEIVED_LOADING",
                    GET_SHOW_SUMMARY_LOADING: yi + "GET_SHOW_SUMMARY_LOADING",
                    GET_SHOW_SETTINGS_LOADING: yi + "GET_SHOW_SETTINGS_LOADING"
                },
                mutations: {
                    SET_SHOW_SENT_LOADING: yi + "SET_SHOW_SENT_LOADING",
                    SET_SHOW_RECEIVED_LOADING: yi + "SET_SHOW_RECEIVED_LOADING",
                    SET_SHOW_SUMMARY_LOADING: yi + "SET_SHOW_SUMMARY_LOADING",
                    SET_SHOW_SETTINGS_LOADING: yi + "SET_SHOW_SETTINGS_LOADING"
                }
            },
            wi = Se(yi, Oi),
            Ri = {
                show_sent_loading: !1,
                show_received_loading: !1,
                show_summary_loading: !1,
                show_settings_loading: !1
            },
            Mi = Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, wi.getters.GET_SHOW_SENT_LOADING, (function(e) {
                return e.show_sent_loading
            })), wi.getters.GET_SHOW_RECEIVED_LOADING, (function(e) {
                return e.show_received_loading
            })), wi.getters.GET_SHOW_SUMMARY_LOADING, (function(e) {
                return e.show_summary_loading
            })), wi.getters.GET_SHOW_SETTINGS_LOADING, (function(e) {
                return e.show_settings_loading
            })),
            Gi = Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, wi.mutations.SET_SHOW_SENT_LOADING, (function(e, t) {
                e.show_sent_loading = t
            })), wi.mutations.SET_SHOW_RECEIVED_LOADING, (function(e, t) {
                e.show_received_loading = t
            })), wi.mutations.SET_SHOW_SUMMARY_LOADING, (function(e, t) {
                e.show_summary_loading = t
            })), wi.mutations.SET_SHOW_SETTINGS_LOADING, (function(e, t) {
                e.show_settings_loading = t
            })),
            Ui = {
                namespaced: !0,
                state: Ri,
                getters: Mi,
                mutations: Gi
            };
        i["a"].use(d["a"]);
        var ji = new d["a"].Store({
                strict: !1,
                getters: {},
                mutations: {},
                actions: {},
                modules: {
                    root: we,
                    numbers: Ze,
                    settings: He,
                    loading: Ui
                }
            }),
            xi = ji,
            Di = s("8b07"),
            Li = s("e37d");
        i["a"].directive("tooltip", Li["c"]), i["a"].directive("close-popover", Li["a"]), i["a"].component("v-popover", Li["b"]), i["a"].config.productionTip = !1, i["a"].prototype.$eventBus = new i["a"], i["a"].prototype.$config = Di, "undefined" !== typeof PAGE_DATA && xi.commit(Ae.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey), "undefined" !== typeof IMAGE_URLS && xi.commit(Ae.mutations.SET_IMAGE_URLS, IMAGE_URLS), "undefined" !== typeof END_POINTS && xi.commit(Ae.mutations.SET_END_POINTS, END_POINTS.urls()), Ue(xi), new i["a"]({
            store: xi,
            render: function(e) {
                return e(Ii)
            }
        }).$mount("#sms-settings")
    },
    5938: function(e, t, s) {
        "use strict";
        s("661d")
    },
    "661d": function(e, t, s) {},
    "7cde": function(e, t, s) {
        "use strict";
        s("44f4")
    },
    "88a1": function(e, t, s) {
        "use strict";
        s("2b76")
    },
    "8b07": function(e) {
        e.exports = JSON.parse('{"requestPoint":"SMS Messaging","searchOptions":{},"headers":{"tabs":{"title":"SMS Messaging","description":"","showBack":false},"numbers":{"title":"Dedicated Numbers","description":"View your dedicated numbers or get a new dedicated number.","showBack":true},"email2sms":{"title":"Email to SMS","description":"Adjust your Email to SMS settings.","showBack":true}},"displayColumns":[{"id":"date","label":"Date","active":true,"received":true},{"id":"status","label":"Status","active":true,"received":true},{"id":"to","label":"To","filterable":true,"active":true,"received":true},{"id":"from","label":"From","filterable":true,"active":true,"received":true},{"id":"content","label":"Content","filterable":true,"active":true,"received":true},{"id":"units","label":"Units","filterable":true,"active":true,"received":false},{"id":"account_name","label":"Subaccount","filterable":true,"active":false,"received":false},{"id":"username","label":"Username","filterable":true,"active":true,"received":false}],"displaySummaryColumns":[{"id":"previousBillingPeriods","label":"Billing period","active":true},{"id":"msg_tot","label":"Total messages","filterable":true,"active":true},{"id":"sent_tot","label":"Total units","filterable":true,"active":true},{"id":"paid_tot","label":"Total cost","filterable":true,"active":true}],"displayDedicatedNumbersColumns":[{"id":"country","label":"Country","active":true},{"id":"number","label":"Number","active":true},{"id":"name","label":"Name","active":true},{"id":"cost","label":"Total Cost","filterable":true,"active":true},{"id":"capabilities","label":"Capabilities","filterable":true,"active":true},{"id":"status","label":"Status","filterable":true,"active":true},{"id":"forward_replies","label":"Forward Replies","filterable":true,"active":true}],"datesToDisplay":[{"label":"7 Days","id":"days7","days":7,"prefix":"Last "},{"label":"14 Days","id":"days14","days":14,"prefix":"Last "},{"label":"30 Days","id":"days30","days":30,"prefix":"Last ","checked":"checked"},{"label":"Between...","id":"between","days":0}],"betweenConf":{"show":true,"start":30,"end":0},"selectableCountries":[{"label":"United States","code":"US","dialCode":"+1","checked":"checked"},{"label":"United Kingdom","code":"GB","dialCode":"+44","checked":""},{"label":"Australia","code":"AU","dialCode":"+61","checked":""}],"dedicatedNumberCosts":{"US":5,"GB":10,"AU":10},"eventsToDisplay":[{"id":"sending","label":"Sending","color":"#C1C4CB","active":true,"apiCodes":["PROCESSING","ENROUTE","QUEUED","GATEWAY-RETRY"],"statusCodes":["101","102","151"]},{"id":"submitted","label":"Submitted","color":"#57BBC9","active":true,"apiCodes":["SUBMITTED"],"statusCodes":["200","210","211","212","213"]},{"id":"delivered","label":"Delivered","color":"#3bb67f","active":true,"apiCodes":["PROCESSED","DELIVERED"],"statusCodes":["220","221"]},{"id":"scheduled","label":"Scheduled","color":"#b379d3","active":true,"apiCodes":["SCHEDULED"],"statusCodes":[]},{"id":"quota-limited","label":"Held","color":"#e2b466","active":true,"apiCodes":["QUOTA-LIMITED"],"statusCodes":[]},{"id":"failed","label":"Failed","color":"#ad894a","active":true,"apiCodes":["HELD","EXPIRED","CANCELLED","FAILED","SENDING-FAILURE"],"statusCodes":["320","330","331","332","333","400","401","403","405","410","411","413","414"]},{"id":"rejected","label":"Rejected","color":"#b35e4f","active":true,"apiCodes":["REJECTED"],"statusCodes":["301","302","303","304","305","402","412"]}],"contexts":{"SPLASH":"splash","TAB":"tab","TAB_SENT":"tab-sent","TAB_RECEIVED":"tab-received","TAB_SUMMARY":"tab-summary","TAB_SETTINGS":"tab-settings","TAB_SENDERIDS":"tab-senderids","TAB_NUMBERS":"tab-numbers","TAB_RECHARGE":"tab-recharge","TAB_TOPUP":"tab-topup","TAB_EMAIL2SMS":"tab-email2sms","SETTINGS":"settings","SETTINGS_NUMBERS":"settings-numbers","SETTINGS_PURCHASE":"settings-purchase","SETTINGS_EMAIL2SMS":"settings-email2sms","SETTINGS_NUMBER_EDIT":"settings-number-edit"},"downloadOptions":[{"id":"csv","label":"Download list as CSV","endPoint":""},{"id":"xml","label":"Download list as XML"},{"id":"json","label":"Download list as NDJSON"}],"statusCodes":{"101":"Message being processed by the gateway.","102":"Message is being rerouted to a different provider after failing via the first provider.","151":"Message held for screening.","200":"Message submitted to downstream provider for delivery.","210":"Message accepted by downstream provider.","211":"Message is enroute for delivery by provider.","212":"Message submitted. Delivery pending.","213":"Message scheduled for delivery by downstream provider.","220":"Message delivered.","221":"Message delivered to the handset.","301":"Usage threshold reached. Message discarded.","302":"Destination address blocked. Message discarded.","303":"Source address blocked. Message discarded.","304":"Message dropped. Contact support.","305":"Message discarded due to duplicate detection.","320":"Message validity period has expired (prior to submission).","330":"Gateway failure.","331":"Message discarded.","332":"No available route to destination.","333":"Source address unsupported for this destination.","400":"Message failed; undeliverable.","401":"Message validity period has expired (before delivery).","402":"Message rejected by downstream provider.","403":"Message skipped by downstream provider.","405":"Message cancelled or deleted by provider.","410":"Invalid source address.","411":"Invalid destination address.","412":"Destination address blocked.","413":"SMS service unavailable on destination.","414":"Destination unreachable."}}')
    },
    9803: function(e, t, s) {
        "use strict";
        s("eca4")
    },
    aa94: function(e, t, s) {},
    c462: function(e, t, s) {
        "use strict";
        s("4455")
    },
    c7ff: function(e, t, s) {
        "use strict";
        s("f129")
    },
    cf1b: function(e, t, s) {
        "use strict";
        s("4d27")
    },
    dc4c: function(e, t, s) {
        "use strict";
        s("f2d5")
    },
    ea9c: function(e, t, s) {
        "use strict";
        s("aa94")
    },
    eca4: function(e, t, s) {},
    f129: function(e, t, s) {},
    f2d5: function(e, t, s) {},
    f33b: function(e, t, s) {
        var i = {
            "./af": "8205",
            "./af.js": "8205",
            "./ar": "fcfd",
            "./ar-dz": "bb8b",
            "./ar-dz.js": "bb8b",
            "./ar-kw": "ef62",
            "./ar-kw.js": "ef62",
            "./ar-ly": "03e1",
            "./ar-ly.js": "03e1",
            "./ar-ma": "6bb1",
            "./ar-ma.js": "6bb1",
            "./ar-ps": "f0f8",
            "./ar-ps.js": "f0f8",
            "./ar-sa": "cf70",
            "./ar-sa.js": "cf70",
            "./ar-tn": "1cd9",
            "./ar-tn.js": "1cd9",
            "./ar.js": "fcfd",
            "./az": "3b38",
            "./az.js": "3b38",
            "./be": "c262",
            "./be.js": "c262",
            "./bg": "6572",
            "./bg.js": "6572",
            "./bm": "eb2c",
            "./bm.js": "eb2c",
            "./bn": "7143",
            "./bn-bd": "bab6",
            "./bn-bd.js": "bab6",
            "./bn.js": "7143",
            "./bo": "9260",
            "./bo.js": "9260",
            "./br": "39ba",
            "./br.js": "39ba",
            "./bs": "2d91",
            "./bs.js": "2d91",
            "./ca": "e945",
            "./ca.js": "e945",
            "./cs": "2a62",
            "./cs.js": "2a62",
            "./cv": "0f5b",
            "./cv.js": "0f5b",
            "./cy": "223f",
            "./cy.js": "223f",
            "./da": "8a0c",
            "./da.js": "8a0c",
            "./de": "901b",
            "./de-at": "02bd",
            "./de-at.js": "02bd",
            "./de-ch": "e2d7",
            "./de-ch.js": "e2d7",
            "./de.js": "901b",
            "./dv": "8fc3",
            "./dv.js": "8fc3",
            "./el": "1a2b",
            "./el.js": "1a2b",
            "./en-au": "894e",
            "./en-au.js": "894e",
            "./en-ca": "8004",
            "./en-ca.js": "8004",
            "./en-gb": "2a92",
            "./en-gb.js": "2a92",
            "./en-ie": "5104",
            "./en-ie.js": "5104",
            "./en-il": "0d6e",
            "./en-il.js": "0d6e",
            "./en-in": "63c1",
            "./en-in.js": "63c1",
            "./en-nz": "fb5e",
            "./en-nz.js": "fb5e",
            "./en-sg": "90f5",
            "./en-sg.js": "90f5",
            "./eo": "e305",
            "./eo.js": "e305",
            "./es": "4a46",
            "./es-do": "b34e",
            "./es-do.js": "b34e",
            "./es-mx": "8b3f",
            "./es-mx.js": "8b3f",
            "./es-us": "1844",
            "./es-us.js": "1844",
            "./es.js": "4a46",
            "./et": "66c9",
            "./et.js": "66c9",
            "./eu": "ca91",
            "./eu.js": "ca91",
            "./fa": "653c",
            "./fa.js": "653c",
            "./fi": "0e3d",
            "./fi.js": "0e3d",
            "./fil": "fbbc",
            "./fil.js": "fbbc",
            "./fo": "9302",
            "./fo.js": "9302",
            "./fr": "778b",
            "./fr-ca": "4b42",
            "./fr-ca.js": "4b42",
            "./fr-ch": "b18c",
            "./fr-ch.js": "b18c",
            "./fr.js": "778b",
            "./fy": "8794",
            "./fy.js": "8794",
            "./ga": "7902",
            "./ga.js": "7902",
            "./gd": "2d14",
            "./gd.js": "2d14",
            "./gl": "6a10",
            "./gl.js": "6a10",
            "./gom-deva": "64f1",
            "./gom-deva.js": "64f1",
            "./gom-latn": "cd0a",
            "./gom-latn.js": "cd0a",
            "./gu": "8148",
            "./gu.js": "8148",
            "./he": "4624",
            "./he.js": "4624",
            "./hi": "5ae5",
            "./hi.js": "5ae5",
            "./hr": "82fa",
            "./hr.js": "82fa",
            "./hu": "a09d",
            "./hu.js": "a09d",
            "./hy-am": "5907",
            "./hy-am.js": "5907",
            "./id": "ef0a",
            "./id.js": "ef0a",
            "./is": "3004",
            "./is.js": "3004",
            "./it": "59f4",
            "./it-ch": "514d",
            "./it-ch.js": "514d",
            "./it.js": "59f4",
            "./ja": "4945",
            "./ja.js": "4945",
            "./jv": "561f",
            "./jv.js": "561f",
            "./ka": "08b1",
            "./ka.js": "08b1",
            "./kk": "d72d",
            "./kk.js": "d72d",
            "./km": "ff25",
            "./km.js": "ff25",
            "./kn": "87bf",
            "./kn.js": "87bf",
            "./ko": "464c",
            "./ko.js": "464c",
            "./ku": "2d8f",
            "./ku-kmr": "244a",
            "./ku-kmr.js": "244a",
            "./ku.js": "2d8f",
            "./ky": "bf3f",
            "./ky.js": "bf3f",
            "./lb": "15bf",
            "./lb.js": "15bf",
            "./lo": "62e2",
            "./lo.js": "62e2",
            "./lt": "c3d0",
            "./lt.js": "c3d0",
            "./lv": "bf81",
            "./lv.js": "bf81",
            "./me": "1935",
            "./me.js": "1935",
            "./mi": "165d",
            "./mi.js": "165d",
            "./mk": "3b18",
            "./mk.js": "3b18",
            "./ml": "4013",
            "./ml.js": "4013",
            "./mn": "df50",
            "./mn.js": "df50",
            "./mr": "6465",
            "./mr.js": "6465",
            "./ms": "d305",
            "./ms-my": "92a1",
            "./ms-my.js": "92a1",
            "./ms.js": "d305",
            "./mt": "549a",
            "./mt.js": "549a",
            "./my": "2717",
            "./my.js": "2717",
            "./nb": "9a2d",
            "./nb.js": "9a2d",
            "./ne": "5555",
            "./ne.js": "5555",
            "./nl": "50fd",
            "./nl-be": "7e10",
            "./nl-be.js": "7e10",
            "./nl.js": "50fd",
            "./nn": "416d",
            "./nn.js": "416d",
            "./oc-lnc": "dc9d",
            "./oc-lnc.js": "dc9d",
            "./pa-in": "5aa8",
            "./pa-in.js": "5aa8",
            "./pl": "a5d1",
            "./pl.js": "a5d1",
            "./pt": "ed64",
            "./pt-br": "c732",
            "./pt-br.js": "c732",
            "./pt.js": "ed64",
            "./ro": "596b",
            "./ro.js": "596b",
            "./ru": "b875",
            "./ru.js": "b875",
            "./sd": "6e03",
            "./sd.js": "6e03",
            "./se": "2854",
            "./se.js": "2854",
            "./si": "c2cc",
            "./si.js": "c2cc",
            "./sk": "a71f",
            "./sk.js": "a71f",
            "./sl": "c21d",
            "./sl.js": "c21d",
            "./sq": "a903",
            "./sq.js": "a903",
            "./sr": "60be",
            "./sr-cyrl": "ceab",
            "./sr-cyrl.js": "ceab",
            "./sr.js": "60be",
            "./ss": "c35c",
            "./ss.js": "c35c",
            "./sv": "c284",
            "./sv.js": "c284",
            "./sw": "0a98",
            "./sw.js": "0a98",
            "./ta": "67c0",
            "./ta.js": "67c0",
            "./te": "3d29",
            "./te.js": "3d29",
            "./tet": "e19e",
            "./tet.js": "e19e",
            "./tg": "7e05",
            "./tg.js": "7e05",
            "./th": "9e4a",
            "./th.js": "9e4a",
            "./tk": "97db",
            "./tk.js": "97db",
            "./tl-ph": "987b",
            "./tl-ph.js": "987b",
            "./tlh": "ccb5",
            "./tlh.js": "ccb5",
            "./tr": "c4c8",
            "./tr.js": "c4c8",
            "./tzl": "f235",
            "./tzl.js": "f235",
            "./tzm": "7b44",
            "./tzm-latn": "e564",
            "./tzm-latn.js": "e564",
            "./tzm.js": "7b44",
            "./ug-cn": "41cb",
            "./ug-cn.js": "41cb",
            "./uk": "5f5b",
            "./uk.js": "5f5b",
            "./ur": "f933",
            "./ur.js": "f933",
            "./uz": "6b57",
            "./uz-latn": "603e",
            "./uz-latn.js": "603e",
            "./uz.js": "6b57",
            "./vi": "db79",
            "./vi.js": "db79",
            "./x-pseudo": "a3ed",
            "./x-pseudo.js": "a3ed",
            "./yo": "4efd",
            "./yo.js": "4efd",
            "./zh-cn": "edbd",
            "./zh-cn.js": "edbd",
            "./zh-hk": "1eca",
            "./zh-hk.js": "1eca",
            "./zh-mo": "b14f",
            "./zh-mo.js": "b14f",
            "./zh-tw": "132f",
            "./zh-tw.js": "132f"
        };

        function n(e) {
            var t = a(e);
            return s(t)
        }

        function a(e) {
            if (!s.o(i, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return i[e]
        }
        n.keys = function() {
            return Object.keys(i)
        }, n.resolve = a, e.exports = n, n.id = "f33b"
    }
});
//# sourceMappingURL=app.0e31764b.js.map