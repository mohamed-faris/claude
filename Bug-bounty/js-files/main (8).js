(function(e) {
    function t(t) {
        for (var s, r, o = t[0], c = t[1], l = t[2], u = 0, _ = []; u < o.length; u++) r = o[u], Object.prototype.hasOwnProperty.call(n, r) && n[r] && _.push(n[r][0]), n[r] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
        m && m(t);
        while (_.length) _.shift()();
        return a.push.apply(a, l || []), i()
    }

    function i() {
        for (var e, t = 0; t < a.length; t++) {
            for (var i = a[t], s = !0, o = 1; o < i.length; o++) {
                var c = i[o];
                0 !== n[c] && (s = !1)
            }
            s && (a.splice(t--, 1), e = r(r.s = i[0]))
        }
        return e
    }
    var s = {},
        n = {
            app: 0
        },
        a = [];

    function r(t) {
        if (s[t]) return s[t].exports;
        var i = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = s, r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
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
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) r.d(i, s, function(t) {
                return e[t]
            }.bind(null, s));
        return i
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
    for (var l = 0; l < o.length; l++) t(o[l]);
    var m = c;
    a.push([0, "chunk-vendors"]), i()
})({
    0: function(e, t, i) {
        e.exports = i("56d7")
    },
    1069: function(e, t, i) {
        "use strict";
        i("f560")
    },
    "35e3": function(e, t, i) {
        "use strict";
        i("fe0f")
    },
    "3e67": function(e, t, i) {
        "use strict";
        i("ed57")
    },
    5093: function(e, t, i) {},
    "56d7": function(e, t, i) {
        "use strict";
        i.r(t);
        i("cadf"), i("551c"), i("f751"), i("097d");
        var s = i("2b0e"),
            n = i("2b27"),
            a = i.n(n),
            r = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("simple-confirm-modal", {
                    ref: "simple_confirm_modal"
                }), t("section", {
                    staticClass: "sg-feature is-overview",
                    attrs: {
                        id: "team-members"
                    }
                }, [t("header", {
                    staticClass: "sg-feature--header",
                    class: {
                        "is-invite": e.addNewMember
                    }
                }, [t("h3", {
                    staticClass: "page-title"
                }, [e.addNewMember ? t("span", [t("button", {
                    staticClass: "icon-back",
                    on: {
                        click: e.cancelInviteMember
                    }
                }), e._v("Add Team Member")]) : e.editMember ? t("span", [t("button", {
                    staticClass: "icon-back",
                    on: {
                        click: e.cancelEditMember
                    }
                }), e._v("Edit Team Member")]) : t("span", {
                    staticClass: "team-members-icon"
                }, [t("span", {
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
                        id: "a",
                        gradientUnits: "userSpaceOnUse",
                        x1: "17.0576",
                        x2: "17.0576",
                        y1: ".251953",
                        y2: "34.252"
                    }
                }, [t("stop", {
                    attrs: {
                        offset: "0",
                        "stop-color": "#82d868"
                    }
                }), t("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "#62b560"
                    }
                })], 1), t("rect", {
                    attrs: {
                        fill: "url(#a)",
                        height: "34",
                        rx: "5",
                        width: "34",
                        x: ".057617",
                        y: ".251953"
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
                        d: "m24.5576 27.127h-13.125c-.4973 0-.9742-.1976-1.3258-.5492-.35164-.3517-.54918-.8286-.54918-1.3258"
                    }
                }), t("path", {
                    attrs: {
                        d: "m12.0576 8.37695c-.663 0-1.2989.2634-1.7677.73224-.46889.46884-.73228 1.10471-.73228 1.76781v14.375c0-.4973.19754-.9742.54918-1.3259.3516-.3516.8285-.5491 1.3258-.5491h11.875c.3315 0 .6495-.1317.8839-.3662.2344-.2344.3661-.5523.3661-.8838v-12.50005c0-.33152-.1317-.64946-.3661-.88388s-.5524-.36612-.8839-.36612z"
                    }
                }), t("path", {
                    attrs: {
                        d: "m23.3076 27.127v-3.75"
                    }
                }), t("path", {
                    attrs: {
                        d: "m17.0576 16.502c1.2081 0 2.1875-.9794 2.1875-2.1875 0-1.2082-.9794-2.1875-2.1875-2.1875s-2.1875.9793-2.1875 2.1875c0 1.2081.9794 2.1875 2.1875 2.1875z"
                    }
                }), t("path", {
                    attrs: {
                        d: "m13.3076 20.877c0-.9946.3951-1.9484 1.0984-2.6517.7032-.7033 1.6571-1.0983 2.6516-1.0983.9946 0 1.9484.395 2.6517 1.0983.7032.7033 1.0983 1.6571 1.0983 2.6517"
                    }
                })])], 1)]), e._v(" Team Members\n          ")])]), t("p", ["report" === e.actingRole || e.addNewMember || e.editMember ? e._e() : t("span", [e._v("Add a team member to enable someone to have login access to the SMTP2GO app.")]), "report" !== e.actingRole || e.addNewMember || e.editMember ? e._e() : t("span", [t("br"), t("em", [e._v("Due to your level of access, this page only shows your username.")])]), "admin" !== e.actingRole || e.addNewMember || e.editMember ? e._e() : t("span", [t("br"), t("em", [e._v("This page only shows team members up to and including your own level of access.")])]), e.addNewMember ? t("span", [e._v("Enter a new team memberâ€™s details below. An email invitation will be sent to allow them to complete the process.")]) : e._e(), e.editMember ? t("span", [e._v("Edit the team memberâ€™s details below.")]) : e._e()])]), e.anyMemberHasBounce && !e.editMember ? t("div", {
                    staticClass: "bar-notice notice-top is-error is-info-error"
                }, [e._m(0)]) : e._e(), e.addNewMember ? t("AddTeamMember") : e._e(), t("edit-team-member", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.editMember,
                        expression: "editMember"
                    }],
                    ref: "edit_team_member",
                    on: {
                        closeEditMember: e.cancelEditMember
                    }
                }), t("article", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.addNewMember && !e.editMember,
                        expression: "!addNewMember && !editMember"
                    }],
                    staticClass: "team-overview"
                }, [t("div", {
                    staticClass: "card padded",
                    attrs: {
                        id: "team-overview"
                    }
                }, [t("div", {
                    staticClass: "card--tab has-functions"
                }, [t("h2", {
                    staticClass: "card--title"
                }, [e._v("Manage Team Members")]), t("div", {
                    staticClass: "card-functions"
                }, ["report" !== e.actingRole ? t("button", {
                    staticClass: "btn button-dropdown",
                    attrs: {
                        type: "button",
                        role: "button",
                        disabled: e.disableAdd || e.needsUpgrade
                    },
                    on: {
                        click: e.inviteMember
                    }
                }, [e._v("Add "), t("span", {
                    staticClass: "mobile-hide"
                }, [e._v("team member")]), t("span", {
                    staticClass: "desktop-hide"
                }, [e._v("new")])]) : e._e()])]), t("div", {
                    staticClass: "top search-grouped bar-full placeholder"
                }), e.needsUpgrade || e.showRemaining ? t("UpgradeNotice") : e._e(), t("member-list"), "report" !== e.actingRole ? t("update-organisation") : e._e(), e.showLoadingSpinner ? t("AjaxLoadingSpinner") : e._e()], 1)])], 1)], 1)
            },
            o = [function() {
                var e = this,
                    t = e._self._c;
                return t("p", [t("span", {
                    staticClass: "notice-icon"
                }), t("strong", [e._v(" Delivery failed for one or more team members.")]), e._v(" Please review the email addresses to ensure they are still correct.\n      ")])
            }],
            c = (i("8e6e"), i("ac6a"), i("456d"), i("a481"), i("bd86")),
            l = i("2f62"),
            m = (i("28a5"), i("c46f"));

        function u(e, t) {
            return Object(m["a"])(t, (function(t, i, s) {
                return t[s] = Object(m["a"])(i, (function(t, i, s) {
                    return t[s] = i.replace(e, ""), t
                }), {}), t
            }), {})
        }
        var _, d = "root/",
            p = {
                getters: {
                    GET_IS_AJAX_RUNNING: d + "GET_IS_AJAX_RUNNING",
                    GET_BACKEND_URL: d + "GET_BACKEND_URL"
                },
                mutations: {
                    SET_CSRF_KEY: d + "SET_CSRF_KEY",
                    SET_END_POINTS: d + "END_POINTS",
                    INC_RUNNING_AJAX_REQUESTS: d + "INC_RUNNING_AJAX_REQUESTS",
                    DEC_RUNNING_AJAX_REQUESTS: d + "DEC_RUNNING_AJAX_REQUESTS"
                }
            },
            E = u(d, p),
            f = {
                running_ajax_requests: 0,
                csrf_key: "",
                end_points: {}
            },
            h = Object(c["a"])(Object(c["a"])({}, E.getters.GET_IS_AJAX_RUNNING, (function(e) {
                return e.running_ajax_requests > 0
            })), E.getters.GET_BACKEND_URL, (function(e) {
                return function(t, i) {
                    return "" !== i ? e.end_points[t] + "?action=" + i + "&CSRF_key=" + e.csrf_key : e.end_points[t] + "?CSRF_key=" + e.csrf_key
                }
            })),
            b = Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({}, E.mutations.SET_CSRF_KEY, (function(e, t) {
                e.csrf_key = t
            })), E.mutations.SET_END_POINTS, (function(e, t) {
                e.end_points = t
            })), E.mutations.INC_RUNNING_AJAX_REQUESTS, (function(e) {
                e.running_ajax_requests++
            })), E.mutations.DEC_RUNNING_AJAX_REQUESTS, (function(e) {
                e.running_ajax_requests--
            })),
            v = {},
            g = {
                namespaced: !0,
                state: f,
                getters: h,
                mutations: b,
                actions: v
            },
            T = i("bc3a"),
            w = i.n(T),
            A = w.a.create(),
            C = function(e) {
                A.interceptors.request.use((function(t) {
                    return e.commit("root/INC_RUNNING_AJAX_REQUESTS"), t
                })), A.interceptors.response.use((function(t) {
                    if (e.commit("root/DEC_RUNNING_AJAX_REQUESTS"), t = t.data, "error" in t) return "bad_edit_token" === t.error && (e.commit("team/SET_EDIT_TOKEN", null), t.error = "An unexpected error occurred, please try again."), Promise.reject(t.error);
                    var i = t.message,
                        s = t.results;
                    return Promise.resolve({
                        results: s,
                        message: i
                    })
                }), (function(t) {
                    return e.commit("root/DEC_RUNNING_AJAX_REQUESTS"), Promise.reject(t)
                }))
            },
            M = "team/",
            O = {
                getters: {
                    GET_TEAM_MEMBERS: M + "GET_TEAM_MEMBERS",
                    GET_EDIT_TOKEN: M + "GET_EDIT_TOKEN",
                    GET_ACTING_ROLE: M + "GET_ACTING_ROLE",
                    GET_OWNER_COUNT: M + "GET_OWNER_COUNT",
                    GET_IS_2FA_ENFORCED: M + "GET_IS_2FA_ENFORCED",
                    GET_IS_SUBACCOUNT: M + "GET_IS_SUBACCOUNT",
                    GET_NEEDS_UPGRADE: M + "GET_NEEDS_UPGRADE",
                    GET_SHOW_REMAINING: M + "GET_SHOW_REMAINING",
                    GET_DISABLE_ADD: M + "GET_DISABLE_ADD"
                },
                mutations: {
                    SET_ORGANISATION_NAME: M + "SET_ORGANISATION_NAME",
                    SET_ACTING_ROLE: M + "SET_ACTING_ROLE",
                    SET_TEAM_MEMBERS: M + "SET_TEAM_MEMBERS",
                    ADD_TEAM_MEMBER: M + "ADD_TEAM_MEMBER",
                    UPDATE_TEAM_MEMBER: M + "UPDATE_TEAM_MEMBER",
                    REMOVE_TEAM_MEMBER: M + "REMOVE_TEAM_MEMBER",
                    ENABLE_2FA: M + "ENABLE_2FA",
                    DISABLE_2FA: M + "DISABLE_2FA",
                    SET_IS_NEW_OWNER: M + "SET_IS_NEW_OWNER",
                    SET_TOTP_KEY: M + "SET_TOTP_KEY",
                    SET_TOTP_SECRET_KEY: M + "SET_TOTP_SECRET_KEY",
                    SET_EDIT_TOKEN: M + "SET_EDIT_TOKEN",
                    SET_IS_EDIT_TOKEN_VALID: M + "IS_EDIT_TOKEN_VALID",
                    SET_IS_2FA_ENFORCED: M + "SET_IS_2FA_ENFORCED",
                    SET_IS_SUBACCOUNT: M + "SET_IS_SUBACCOUNT",
                    SET_NEEDS_UPGRADE: M + "SET_NEEDS_UPGRADE",
                    SET_SHOW_REMAINING: M + "SET_SHOW_REMAINING",
                    SET_DISABLE_ADD: M + "SET_DISABLE_ADD"
                },
                actions: {
                    FETCH_EDIT_TOKEN: M + "FETCH_EDIT_TOKEN",
                    FETCH_TEAM_MEMBERS: M + "FETCH_TEAM_MEMBERS",
                    INVITE_TEAM_MEMBER: M + "INVITE_TEAM_MEMBER",
                    UPDATE_ORGANISATION_NAME: M + "UPDATE_ORGANISATION_NAME",
                    REMOVE_TEAM_MEMBER: M + "REMOVE_TEAM_MEMBER",
                    REINVITE_TEAM_MEMBER: M + "REINVITE_TEAM_MEMBER",
                    ENABLE_2FA: M + "ENABLE_2FA",
                    DISABLE_2FA: M + "DISABLE_2FA",
                    UPDATE_TEAM_MEMBER: M + "UPDATE_TEAM_MEMBER"
                }
            },
            S = u(M, O),
            D = {
                edit_token: null,
                is_edit_token_valid: !1,
                team_members: [],
                totp_key: null,
                totp_secret_key: null,
                organisation_name: null,
                is_2fa_enforced: !1,
                is_subaccount: !1,
                acting_role: null,
                needs_upgrade: !1,
                show_remaining: !1,
                disable_add: !1
            },
            y = Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({}, S.getters.GET_TEAM_MEMBERS, (function(e) {
                return e.team_members
            })), S.getters.GET_NEEDS_UPGRADE, (function(e) {
                return e.needs_upgrade
            })), S.getters.GET_SHOW_REMAINING, (function(e) {
                return e.show_remaining
            })), S.getters.GET_EDIT_TOKEN, (function(e) {
                return e.edit_token
            })), S.getters.GET_ACTING_ROLE, (function(e) {
                return e.acting_role
            })), S.getters.GET_OWNER_COUNT, (function(e) {
                return e.team_members.filter((function(e) {
                    return "owner" === e.role.svalue
                })).length
            })), S.getters.GET_IS_2FA_ENFORCED, (function(e) {
                return e.is_2fa_enforced
            })), S.getters.GET_IS_SUBACCOUNT, (function(e) {
                return e.is_subaccount
            })), S.getters.GET_DISABLE_ADD, (function(e) {
                return e.disable_add
            })),
            R = (_ = {}, Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(_, S.mutations.SET_ORGANISATION_NAME, (function(e, t) {
                e.organisation_name = t
            })), S.mutations.SET_ACTING_ROLE, (function(e, t) {
                e.acting_role = t
            })), S.mutations.SET_TEAM_MEMBERS, (function(e, t) {
                e.team_members = t
            })), S.mutations.SET_NEEDS_UPGRADE, (function(e, t) {
                e.needs_upgrade = t
            })), S.mutations.SET_SHOW_REMAINING, (function(e, t) {
                e.show_remaining = t
            })), S.mutations.ADD_TEAM_MEMBER, (function(e, t) {
                e.team_members.push(t)
            })), S.mutations.UPDATE_TEAM_MEMBER, (function(e, t) {
                var i = t.old_hash_id,
                    n = t.team_member;
                e.team_members.forEach((function(t, a) {
                    t.hash_id !== i || s["a"].set(e.team_members, a, n)
                }))
            })), S.mutations.REMOVE_TEAM_MEMBER, (function(e, t) {
                e.team_members.forEach((function(i, s) {
                    i.hash_id !== t || e.team_members.splice(s, 1)
                }))
            })), S.mutations.SET_IS_NEW_OWNER, (function(e, t) {
                var i = t.hash_id,
                    n = t.is_new_owner;
                e.team_members.forEach((function(e) {
                    e.hash_id !== i || s["a"].set(e, "is_new_owner", n)
                }))
            })), S.mutations.ENABLE_2FA, (function(e, t) {
                var i = t.hash_id,
                    n = t.totp_secret_key;
                e.team_members.forEach((function(e) {
                    e.hash_id !== i || s["a"].set(e, "totp_secret_key", n)
                }))
            })), Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(_, S.mutations.DISABLE_2FA, (function(e, t) {
                e.team_members.forEach((function(e) {
                    if (e.hash_id === t) return s["a"].set(e, "totp_secret_key", null), void s["a"].set(e, "sms_auth_number", null)
                }))
            })), S.mutations.SET_TOTP_KEY, (function(e, t) {
                e.totp_key = t
            })), S.mutations.SET_TOTP_SECRET_KEY, (function(e, t) {
                e.totp_secret_key = t
            })), S.mutations.SET_EDIT_TOKEN, (function(e, t) {
                e.edit_token = t
            })), S.mutations.SET_IS_EDIT_TOKEN_VALID, (function(e, t) {
                e.is_edit_token_valid = t
            })), S.mutations.SET_IS_2FA_ENFORCED, (function(e, t) {
                e.is_2fa_enforced = t
            })), S.mutations.SET_IS_SUBACCOUNT, (function(e, t) {
                e.is_subaccount = t
            })), S.mutations.SET_DISABLE_ADD, (function(e, t) {
                e.disable_add = t
            }))),
            N = Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({}, S.actions.FETCH_EDIT_TOKEN, (function(e, t) {
                if (e.getters[S.getters.GET_EDIT_TOKEN]) try {
                    var i = e.getters[S.getters.GET_EDIT_TOKEN].split(".");
                    if (3 === i.length) {
                        var s = atob(i[1]);
                        if (s = JSON.parse(s), s.exp < Date.now()) return e.commit(S.mutations.SET_IS_EDIT_TOKEN_VALID, !0), e.getters[S.getters.IS_EDIT_TOKEN_VALID], Promise.resolve()
                    }
                } catch (n) {}
                return new Promise((function(i, s) {
                    A.post(e.rootGetters[p.getters.GET_BACKEND_URL]("Edit Team", "get_edit_token"), {
                        password: t,
                        edit_token: e.getters[S.getters.GET_EDIT_TOKEN]
                    }).then((function(t) {
                        t.results.token ? (e.commit(S.mutations.SET_EDIT_TOKEN, t.results.token), e.commit(S.mutations.SET_IS_EDIT_TOKEN_VALID, !0), e.getters[S.getters.IS_EDIT_TOKEN_VALID], i(t)) : s()
                    })).catch((function(t) {
                        e.commit(S.mutations.SET_IS_EDIT_TOKEN_VALID, !1), e.getters[S.getters.IS_EDIT_TOKEN_VALID], s(t)
                    }))
                }))
            })), S.actions.FETCH_TEAM_MEMBERS, (function(e) {
                return new Promise((function(t, i) {
                    A.get(e.rootGetters[p.getters.GET_BACKEND_URL]("Edit Team", "")).then((function(i) {
                        e.commit(S.mutations.SET_TEAM_MEMBERS, i.results.team_members), e.commit(S.mutations.SET_TOTP_KEY, i.results.totp_key), e.commit(S.mutations.SET_TOTP_SECRET_KEY, i.results.totp_secret_key), e.commit(S.mutations.SET_NEEDS_UPGRADE, i.results.needs_upgrade), e.commit(S.mutations.SET_SHOW_REMAINING, i.results.show_remaining), e.commit(S.mutations.SET_DISABLE_ADD, i.results.disable_add), t(i)
                    })).catch((function(e) {
                        return i(e)
                    }))
                }))
            })), S.actions.INVITE_TEAM_MEMBER, (function(e, t) {
                var i = t.username,
                    s = t.role,
                    n = t.account_management_notification,
                    a = t.weekly_summary_notification;
                return new Promise((function(t, r) {
                    A.post(e.rootGetters[p.getters.GET_BACKEND_URL]("Edit Team", "invite"), {
                        username: i,
                        role: s,
                        account_management_notification: n,
                        weekly_summary_notification: a
                    }).then((function(i) {
                        e.commit(S.mutations.ADD_TEAM_MEMBER, i.results.team_member), e.state.team_members.length >= 2 && e.state.show_remaining && e.commit(S.mutations.SET_NEEDS_UPGRADE, !0), t(i)
                    })).catch((function(e) {
                        return r(e)
                    }))
                }))
            })), S.actions.UPDATE_ORGANISATION_NAME, (function(e, t) {
                return new Promise((function(i, s) {
                    A.post(e.rootGetters[p.getters.GET_BACKEND_URL]("Edit Team", "change-orgname"), {
                        organisation_name: t
                    }).then((function(t) {
                        e.commit(S.mutations.SET_ORGANISATION_NAME, t.results.organisation_name), i(t)
                    })).catch((function(e) {
                        return s(e)
                    }))
                }))
            })), S.actions.REMOVE_TEAM_MEMBER, (function(e, t) {
                return new Promise((function(i, s) {
                    A.post(e.rootGetters[p.getters.GET_BACKEND_URL]("Edit Team", "delete-member"), {
                        username: t.username,
                        edit_token: e.getters.GET_EDIT_TOKEN
                    }).then((function(t) {
                        e.commit(S.mutations.REMOVE_TEAM_MEMBER, t.results.team_member.hash_id), e.state.team_members.length < 2 && e.state.show_remaining && e.commit(S.mutations.SET_NEEDS_UPGRADE, !1), i(t)
                    })).catch((function(e) {
                        return s(e)
                    }))
                }))
            })), S.actions.REINVITE_TEAM_MEMBER, (function(e, t) {
                return A.post(e.rootGetters[p.getters.GET_BACKEND_URL]("Edit Team", "reinvite"), {
                    username: t,
                    edit_token: e.getters.GET_EDIT_TOKEN
                })
            })), S.actions.ENABLE_2FA, (function(e, t) {
                var i = t.team_member,
                    s = t.authcode;
                return new Promise((function(t, n) {
                    A.post(e.rootGetters[p.getters.GET_BACKEND_URL]("Edit Team", "enable_2fa"), {
                        edit_token: e.getters.GET_EDIT_TOKEN,
                        totp_secret_key: e.state.totp_secret_key,
                        two_factor_auth_code: s
                    }).then((function(s) {
                        e.commit(S.mutations.ENABLE_2FA, {
                            hash_id: i.hash_id,
                            totp_secret_key: e.state.totp_secret_key
                        }), t(s)
                    })).catch((function(e) {
                        return n(e)
                    }))
                }))
            })), S.actions.DISABLE_2FA, (function(e, t) {
                var i = t.team_member;
                return new Promise((function(t, s) {
                    A.post(e.rootGetters[p.getters.GET_BACKEND_URL]("Edit Team", "force_disable_2fa"), {
                        edit_token: e.getters.GET_EDIT_TOKEN,
                        totp_secret_key: e.state.totp_secret_key,
                        team_member: i
                    }).then((function(s) {
                        e.commit(S.mutations.DISABLE_2FA, i.hash_id), t(s)
                    })).catch((function(e) {
                        return s(e)
                    }))
                }))
            })), S.actions.UPDATE_TEAM_MEMBER, (function(e, t) {
                var i = t.team_member,
                    s = t.old_username,
                    n = t.new_username,
                    a = t.fullname,
                    r = t.role,
                    o = t.notification_level,
                    c = t.new_password,
                    l = t.con_password,
                    m = t.account_management_notification,
                    u = t.weekly_summary_notification;
                return new Promise((function(t, _) {
                    A.post(e.rootGetters[p.getters.GET_BACKEND_URL]("Edit Team", "update_member"), {
                        edit_token: e.getters.GET_EDIT_TOKEN,
                        old_username: s,
                        new_username: n,
                        fullname: a,
                        role: r,
                        notification_level: o,
                        new_password: c,
                        con_password: l,
                        account_management_notification: m,
                        weekly_summary_notification: u
                    }).then((function(s) {
                        e.commit(S.mutations.UPDATE_TEAM_MEMBER, {
                            old_hash_id: i.hash_id,
                            team_member: s.results.team_member
                        }), t(s)
                    })).catch((function(e) {
                        return _(e)
                    }))
                }))
            })),
            I = {
                namespaced: !0,
                state: D,
                getters: y,
                mutations: R,
                actions: N
            },
            x = (i("0d6d"), Object.freeze({
                MTBOX_EDIT_CLICKED: "mtbox-edit-clicked",
                MTBOX_REINVITE_CLICKED: "mtbox-reinvite-clicked",
                MTBOX_TRANSFER_CLICKED: "mtbox-transfer-clicked",
                MTBOX_REMOVE_CLICKED: "mtbox-remove-clicked",
                INVITE_TEAM_MEMBER_REQUEST: "invite-team-member-request",
                INVITE_TEAM_MEMBER_SUCCEEDED: "invite-team-member-succeeded",
                INVITE_TEAM_MEMBER_FAILED: "invite-team-member-failed",
                REINVITE_TEAM_MEMBER_REQUEST: "reinvite-team-member-request",
                REINVITE_TEAM_MEMBER_SUCCEEDED: "reinvite-team-member-succeeded",
                REINVITE_TEAM_MEMBER_FAILED: "reinvite-team-member-failed",
                UPDATE_ORGANISATION_REQUEST: "update-organisation-request",
                UPDATE_ORGANISATION_SUCCEEDED: "update-organisation-succeeded",
                UPDATE_ORGANISATION_FAILED: "update-organisation-failed",
                EDIT_TEAM_MEMBER_REQUEST: "edit-team-member-request",
                EDIT_TEAM_MEMBER_SUCCEEDED: "edit-team-member-succeeded",
                EDIT_TEAM_MEMBER_FAILED: "edit-team-member-failed",
                UPDATE_TEAM_MEMBER_REQUEST: "update-team-member-request",
                UPDATE_TEAM_MEMBER_SUCCEEDED: "update-team-member-succeeded",
                UPDATE_TEAM_MEMBER_FAILED: "update-team-member-failed",
                DISABLE_2FA_REQUEST: "disable-2fa-request",
                DISABLE_2FA_SUCCEEDED: "disable-2fa-succeeded",
                DISABLE_2FA_FAILED: "disable-2fa-failed",
                ENTER_PASSWORD_REQUEST: "enter-password-request",
                ENTER_PASSWORD_SUCCEEDED: "enter-password-succeeded",
                ENTER_PASSWORD_FAILED: "enter-password-failed",
                REMOVE_TEAM_MEMBER_SUCCEEDED: "remove-member-succeeded",
                REMOVE_TEAM_MEMBER_FAILED: "remove-member-failed",
                ROLE_CHANGED: "role-changed",
                WORKING_STATE_CHANGED: "working-state-changed"
            })),
            k = x,
            B = i("1157"),
            L = i.n(B),
            P = {
                methods: {
                    mixinAlerts_clear: function() {
                        j()
                    },
                    mixinAlerts_info: function(e) {
                        U(e)
                    },
                    mixinAlerts_success: function(e) {
                        F(e)
                    },
                    mixinAlerts_warn: function(e) {
                        G(e)
                    },
                    mixinAlerts_error: function(e) {
                        $(e)
                    }
                }
            };

        function j() {
            var e = L()("#user-alert");
            e.removeClass(), e.empty()
        }

        function U(e) {
            j(), e && HTML.alertUser("info", e)
        }

        function F(e) {
            j(), e && HTML.alertUser("success", e)
        }

        function G(e) {
            j(), e && HTML.alertUser("warning", e)
        }

        function $(e) {
            j(), e && HTML.alertUser("error", e)
        }
        var K = P,
            W = i("768b"),
            H = (i("ffc1"), {
                methods: {
                    mixinEventListener_register: function(e) {
                        this.mixinEventListener_eventMap = e
                    },
                    mixinEventListener_on: function() {
                        var e = this;
                        this.mixinEventListener_isOn || (Object.entries(this.mixinEventListener_eventMap).forEach((function(t) {
                            var i = Object(W["a"])(t, 2),
                                s = i[0],
                                n = i[1];
                            e.$eventBus.$on(s, n)
                        })), this.mixinEventListener_isOn = !0)
                    },
                    mixinEventListener_off: function() {
                        var e = this;
                        Object.entries(this.mixinEventListener_eventMap).forEach((function(t) {
                            var i = Object(W["a"])(t, 2),
                                s = i[0],
                                n = i[1];
                            e.$eventBus.$off(s, n)
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
            V = H,
            z = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "edit-user-form card has-tabs details-open unsubscribe-footer-disabled advanced-bounces-off"
                }, [e._m(0), t("div", {
                    staticClass: "content-body"
                }, [t("form", {
                    attrs: {
                        role: "form",
                        id: "invite-form",
                        novalidate: "true",
                        autocomplete: "off"
                    },
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.inviteTeamMember.apply(null, arguments)
                        }
                    }
                }, [t("div", {
                    staticClass: "card"
                }, [t("div", {
                    staticClass: "card-content",
                    attrs: {
                        role: "tabpanel"
                    }
                }, [t("div", {
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("Email address")]), t("div", {
                    staticClass: "form-group-item"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.username,
                        expression: "username"
                    }],
                    staticClass: "form-control input-md",
                    staticStyle: {
                        "line-height": "2.5"
                    },
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        placeholder: "email@company.com",
                        readonly: e.isSaving
                    },
                    domProps: {
                        value: e.username
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.username = t.target.value)
                        }
                    }
                }), t("span", {
                    staticClass: "field-info"
                }, [e._v("Your team member's email address they will use to log in. Their invitation will also be sent to this address.")])])]), t("div", {
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("Permission level")]), t("div", {
                    staticClass: "form-group-item item-split"
                }, [t("role-dropdown", {
                    ref: "role_dropdown",
                    attrs: {
                        disabled: e.isSaving
                    }
                }), t("span", {
                    staticClass: "field-info"
                }, [e._v("The level of access this team member will have in your account.")]), e.is_subaccount ? t("br") : e._e(), e.is_subaccount ? t("span", {
                    staticClass: "field-info"
                }, [e._v("As your account doesn't handle billing directly, Owners and Admins have the same permissions.")]) : e._e()], 1)]), t("div", {
                    staticClass: "form-group group-notifications"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("Notifications")]), t("div", {
                    attrs: {
                        id: "user-notifications"
                    }
                }, [t("dl", [t("dt", {
                    class: {
                        "is-disabled": e.isReportRoleSelected()
                    },
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.account_management_notification = !e.account_management_notification
                        }
                    }
                }, [t("div", {
                    staticClass: "checker",
                    class: {
                        "is-focus": e.accountManagementFocused
                    }
                }, [t("span", {
                    staticClass: "checker-box",
                    class: [e.account_management_notification ? "checked" : ""]
                }, [t("input", {
                    attrs: {
                        type: "checkbox",
                        disabled: e.isReportRoleSelected()
                    },
                    on: {
                        focus: function(t) {
                            e.accountManagementFocused = !0
                        },
                        blur: function(t) {
                            e.accountManagementFocused = !1
                        }
                    }
                })])]), t("span", [e._v("Account management")])]), t("dd", {
                    class: {
                        "is-disabled": e.isReportRoleSelected()
                    }
                }, [e._v("Receive emails about account management and usage alerts.")]), t("dt", {
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.weekly_summary_notification = !e.weekly_summary_notification
                        }
                    }
                }, [t("div", {
                    staticClass: "checker",
                    class: {
                        "is-focus": e.weeklySummaryFocused
                    }
                }, [t("span", {
                    staticClass: "checker-box",
                    class: [e.weekly_summary_notification ? "checked" : ""]
                }, [t("input", {
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        focus: function(t) {
                            e.weeklySummaryFocused = !0
                        },
                        blur: function(t) {
                            e.weeklySummaryFocused = !1
                        }
                    }
                })])]), t("span", [e._v("Weekly summary")])]), t("dd", [e._v("Receive weekly summary emails regarding this account.")])])])])])]), t("div", {
                    staticClass: "card-footer"
                }, [t("button", {
                    staticClass: "btn blue",
                    class: [!e.canSubmitForm || e.isSaving ? "disabled" : "", e.isSaving ? "spinner-button" : ""],
                    attrs: {
                        type: "submit"
                    },
                    domProps: {
                        innerHTML: e._s(e.inviteButtonText)
                    }
                }), t("button", {
                    staticClass: "btn button-dropdown",
                    attrs: {
                        role: "button",
                        type: "button"
                    },
                    on: {
                        click: e.cancelAddMember
                    }
                }, [e._v("Cancel")])])])])])
            },
            q = [function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "card--tab has-functions"
                }, [t("h2", {
                    staticClass: "card--title"
                }, [t("span", [e._v("Configure new team member")])])])
            }],
            X = (i("4917"), function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "users-app-dropdown-wrapper"
                }, [t("a", {
                    staticClass: "users-app-dropdown input-inline input-team",
                    class: {
                        "is-active": e.mixinTriggerable_isOpen
                    },
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.toggleDropDown.apply(null, arguments)
                        },
                        focus: e.addKeyboardListeners,
                        blur: e.removeKeyboardListeners
                    }
                }, [t("span", {
                    staticClass: "selected-default"
                }, [e._v(e._s(e.role.label))]), t("span", {
                    staticClass: "selected-mobile-top"
                }, [e._v(e._s(e.role.label))]), t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.role,
                        expression: "role"
                    }],
                    attrs: {
                        type: "hidden"
                    },
                    domProps: {
                        value: e.role
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.role = t.target.value)
                        }
                    }
                })]), t("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.mixinTriggerable_isOpen,
                        expression: "mixinTriggerable_isOpen"
                    }],
                    staticClass: "users-app-dropdown--options mixinTriggerable_layer"
                }, [e._m(0), e._l(e.shownRoles, (function(i, s) {
                    return t("li", {
                        key: i.id,
                        class: [i.id, {
                            "is-selected": e.isSelectedRole(i)
                        }]
                    }, [t("a", {
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.selectRole(t, s)
                            }
                        }
                    }, [t("div", {
                        staticClass: "mobile-checkbox",
                        class: "role-id-" + s
                    }, [t("input", {
                        attrs: {
                            type: "radio",
                            name: "selected-role"
                        },
                        domProps: {
                            checked: e.isRoleChecked(s)
                        }
                    })]), t("h6", [e._v(e._s(i.label))]), t("p", [e._v(e._s(i.text))])])])
                }))], 2), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.mixinTriggerable_isOpen,
                        expression: "mixinTriggerable_isOpen"
                    }],
                    staticClass: "mobile-only-dropdown-backdrop"
                })])
            }),
            Q = [function() {
                var e = this,
                    t = e._self._c;
                return t("li", {
                    staticClass: "only-mobile"
                }, [t("div", {
                    staticClass: "mobile-role-dropdown-title"
                }, [e._v("Team member role")]), t("p", {
                    staticClass: "mobile-role-dropdown-content"
                }, [e._v("What access should they have?")])])
            }],
            J = (i("7f7f"), i("7514"), Object.freeze({
                TRIGGERABLE_OPENED: "mixin-triggerable-opened",
                TRIGGERABLE_CLOSED: "mixin-triggerable-closed"
            })),
            Y = {
                created: function() {
                    L()(window).on("click.Bst", this.$_mixinTriggerableWindowClicked), this.$eventBus.$on(J.TRIGGERABLE_OPENED, this.$_mixinTriggerableOpened)
                },
                mounted: function() {
                    this.mixinTriggerable_layers = L()(this.$el).find(".mixinTriggerable_layer"), L()(this.$el).hasClass("mixinTriggerable_layer") && this.mixinTriggerable_layers.push(this.$el)
                },
                destroyed: function() {
                    L()(window).off("click.Bst", this.$_mixinTriggerableWindowClicked), this.$eventBus.$off(J.TRIGGERABLE_OPENED, this.$_mixinTriggerableOpened)
                },
                methods: {
                    $_mixinTriggerableUpdateParent: function(e) {
                        for (var t = 0, i = this.$parent;;) {
                            if (!(void 0 !== i && null !== i && void 0 !== i.mixinTriggerable_getID && t < 10)) break;
                            i.mixinTriggerable_isModal = e, t++, i = i.$parent
                        }
                    },
                    $_mixinTriggerableWindowClicked: function(e) {
                        if (this.mixinTriggerable_ignoreNextWindowClick) this.mixinTriggerable_ignoreNextWindowClick = !1;
                        else if (!this.mixinTriggerable_isModal) {
                            var t = function(e) {
                                    var t = L()(e).parents().filter((function(e, t) {
                                        return L()(t).hasClass("mixinTriggerable_layer")
                                    }));
                                    return t.length > 0
                                },
                                i = !1;
                            if (this.mixinTriggerable_isOpen)
                                for (var s = 0; s < this.mixinTriggerable_layers.length; ++s) {
                                    var n = L()(this.mixinTriggerable_layers[s]);
                                    if (0 !== n.has(e.target).length || n.is(e.target) || !this.mixinTriggerable_closeOnParentClick && t(e.target, n)) {
                                        i = !0;
                                        break
                                    }
                                }
                            this.mixinTriggerable_isOpen && !i && (this.mixinTriggerable_isOpen = !1, this.$_mixinTriggerableUpdateParent(this.mixinTriggerable_isOpen), this.$eventBus.$emit(J.TRIGGERABLE_CLOSED, this.mixinTriggerable_getID()))
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
                        var e = L()(this.$el).offset().left,
                            t = Math.ceil(e),
                            i = L()(this.$el).offset().top,
                            s = Math.ceil(i);
                        this.$el.style.left = t + "px", this.$el.style.top = s + "px", this.$el.style.transform = "translate(0) scale(1)"
                    },
                    mixinTriggerable_toggleOpened: function(e) {
                        void 0 !== e && e.stopImmediatePropagation(), this.mixinTriggerable_isModal || (this.mixinTriggerable_isOpen = !this.mixinTriggerable_isOpen, this.$_mixinTriggerableUpdateParent(this.mixinTriggerable_isOpen), this.mixinTriggerable_isOpen ? this.$eventBus.$emit(J.TRIGGERABLE_OPENED, this.mixinTriggerable_getID()) : this.$eventBus.$emit(J.TRIGGERABLE_CLOSED, this.mixinTriggerable_getID()))
                    },
                    mixinTriggerable_forceOpen: function(e) {
                        void 0 !== e && e.stopImmediatePropagation(), this.mixinTriggerable_isModal = !1;
                        var t = this.mixinTriggerable_isOpen;
                        this.mixinTriggerable_isOpen = !0, t || (this.$_mixinTriggerableUpdateParent(this.mixinTriggerable_isOpen), this.mixinTriggerable_ignoreNextWindowClick = !0, this.$eventBus.$emit(J.TRIGGERABLE_OPENED, this.mixinTriggerable_getID()))
                    },
                    mixinTriggerable_forceClose: function(e) {
                        void 0 !== e && e.stopImmediatePropagation(), this.mixinTriggerable_isModal = !1;
                        var t = this.mixinTriggerable_isOpen;
                        this.mixinTriggerable_isOpen = !1, t && (this.$_mixinTriggerableUpdateParent(this.mixinTriggerable_isOpen), this.mixinTriggerable_ignoreNextWindowClick = !0, this.$eventBus.$emit(J.TRIGGERABLE_CLOSED, this.mixinTriggerable_getID()))
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
            Z = {
                name: "role-dropdown",
                mixins: [Y],
                props: {
                    disabled: {
                        type: Boolean,
                        required: !1
                    }
                },
                methods: {
                    toggleDropDown: function(e) {
                        this.mixinTriggerable_toggleOpened(e)
                    },
                    addKeyboardListeners: function() {
                        window.addEventListener("keydown", this.handleKeydown)
                    },
                    removeKeyboardListeners: function() {
                        window.removeEventListener("keydown", this.handleKeydown)
                    },
                    handleKeydown: function(e) {
                        " " === e.key || 32 === e.keyCode || "Space" === e.code || "Enter" === e.key ? (e.preventDefault(), this.mixinTriggerable_isOpen ? (this.selectRole(null, this.roleIdx), this.mixinTriggerable_isOpen = !1) : this.toggleDropDown()) : this.mixinTriggerable_isOpen && ("ArrowDown" === e.key ? this.roleIdx = (this.roleIdx + 1) % this.shownRoles.length : "ArrowUp" === e.key ? this.roleIdx = (this.roleIdx - 1 + this.shownRoles.length) % this.shownRoles.length : "Tab" === e.key && (e.preventDefault(), this.roleIdx = (this.roleIdx + 1) % this.shownRoles.length))
                    },
                    selectRole: function(e, t) {
                        this.roleIdx = t, L()("#invite-form .users-app-dropdown--options .mobile-checkbox .radio span").removeClass("checked"), L()("#invite-form .users-app-dropdown--options .mobile-checkbox.role-id-" + t + " .radio span").addClass("checked"), this.$eventBus.$emit(k.ROLE_CHANGED, this.shownRoles[this.roleIdx]), screen.width > 767 && this.mixinTriggerable_forceClose()
                    },
                    setRole: function(e) {
                        for (var t = 0; t < this.shownRoles.length; ++t)
                            if (this.shownRoles[t].id == e) {
                                this.roleIdx = t;
                                break
                            }
                    },
                    isRoleChecked: function(e) {
                        return e === this.roleIdx ? "checked" : ""
                    },
                    isReportRoleSelected: function() {
                        return 2 === this.roleIdx
                    },
                    isSelectedRole: function(e) {
                        return this.role && this.role.label === e.label
                    }
                },
                computed: {
                    role: function() {
                        return this.shownRoles[this.roleIdx]
                    },
                    shownRoles: function() {
                        var e = "owner" === this.$store.state.team.acting_role;
                        return this.roles.filter((function(t) {
                            return "owner" !== t.id || e
                        }))
                    }
                },
                data: function() {
                    return {
                        roles: [{
                            id: "owner",
                            label: "Owner",
                            text: "Full Access"
                        }, {
                            id: "admin",
                            label: "Admin",
                            text: "Full Access (No Billing)"
                        }, {
                            id: "report",
                            label: "Reports",
                            text: "Reports Only"
                        }],
                        roleIdx: 0
                    }
                }
            },
            ee = Z,
            te = i("2877"),
            ie = Object(te["a"])(ee, X, Q, !1, null, null, null),
            se = ie.exports;

        function ne(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function ae(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ne(Object(i), !0).forEach((function(t) {
                    Object(c["a"])(e, t, i[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ne(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }))
            }
            return e
        }
        var re = {
                name: "add-team-member",
                mixins: [K, V],
                components: {
                    RoleDropdown: se
                },
                data: function() {
                    return {
                        isSaving: !1,
                        username: "",
                        account_management_notification: !0,
                        weekly_summary_notification: !0,
                        accountManagementFocused: !1,
                        weeklySummaryFocused: !1
                    }
                },
                created: function() {
                    this.mixinEventListener_register(Object(c["a"])(Object(c["a"])(Object(c["a"])({}, k.INVITE_TEAM_MEMBER_SUCCEEDED, this.onTeamMemberInviteSucceeded), k.INVITE_TEAM_MEMBER_FAILED, this.onTeamMemberInviteFailed), k.ROLE_CHANGED, this.onRoleChanged)), this.mixinEventListener_on()
                },
                destroyed: function() {
                    this.mixinEventListener_off()
                },
                computed: ae(ae({}, Object(l["c"])("team", ["is_subaccount"])), {}, {
                    canSubmitForm: function() {
                        return "" !== this.username && "" !== this.$refs.role_dropdown.role.id && (!!this.username.match(/^.{1,}@.{1,}\..{1,}$/) && !this.$store.getters[p.getters.GET_IS_AJAX_RUNNING])
                    },
                    inviteButtonText: function() {
                        return this.isSaving ? "Inviting" : 'Invite<span class="hide-mobile"> team member</span>'
                    }
                }),
                methods: {
                    onRoleChanged: function(e) {
                        this.account_management_notification = "owner" === e.id || "admin" === e.id
                    },
                    inviteTeamMember: function() {
                        this.$refs.role_dropdown.mixinTriggerable_forceClose(), this.canSubmitForm && ("" !== this.username ? (this.isSaving = !0, this.$eventBus.$emit(k.INVITE_TEAM_MEMBER_REQUEST, this.username, this.$refs.role_dropdown.role.id, this.account_management_notification, this.weekly_summary_notification)) : this.mixinAlerts_error("Username must not be empty"))
                    },
                    onTeamMemberInviteSucceeded: function() {
                        this.isSaving = !1, this.username = "", this.cancelAddMember()
                    },
                    onTeamMemberInviteFailed: function() {
                        this.isSaving = !1
                    },
                    isReportRoleSelected: function() {
                        return void 0 !== this.$refs.role_dropdown && "report" === this.$refs.role_dropdown.role.id
                    },
                    toggleChecked: function(e) {
                        var t = e.currentTarget,
                            i = t.querySelector("input");
                        t.classList.toggle("checked"), i.checked = !i.checked
                    },
                    cancelAddMember: function() {
                        this.$eventBus.$emit("closeAddNewMember")
                    }
                }
            },
            oe = re,
            ce = (i("b57d"), Object(te["a"])(oe, z, q, !1, null, null, null)),
            le = ce.exports,
            me = function() {
                var e = this,
                    t = e._self._c;
                return t("table", {
                    attrs: {
                        id: "team-list"
                    }
                }, [t("thead", [t("th", [e._v("Username")]), e.showFullnameCol ? t("th", [e._v("Full name")]) : e._e(), t("th", [e._v("Type")]), t("th", [e._v("Notifications")]), t("th", [e._v("2 Factor Auth")]), t("th")]), t("tbody", e._l(e.teamMembers, (function(i, s) {
                    return t("tr", {
                        key: i.record_id,
                        class: {
                            "has-bounced": i.latest_bounce_email
                        }
                    }, [i.is_acting_user ? t("td", {
                        staticClass: "member-email"
                    }, [e.disableAdd ? e._e() : t("a", {
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.editTeamMember(i)
                            }
                        }
                    }, [e._v(e._s(i.username)), t("span", {
                        domProps: {
                            innerHTML: e._s(e.getUserStatus(i))
                        }
                    })]), e.disableAdd ? t("span", [e._v(e._s(i.username)), t("span", {
                        domProps: {
                            innerHTML: e._s(e.getUserStatus(i))
                        }
                    })]) : e._e(), i.latest_bounce_email ? t("div", {
                        staticClass: "bounce-info"
                    }, [e._m(0, !0), t("p", [e._v("An email bounced when sending to this team member. Please review this team member to ensure they are still able to receive emails.")]), t("pre", [e._v("SMTP output: " + e._s(i.latest_bounce_email.smtpresponse))])]) : e._e()]) : e._e(), !i.is_acting_user && i.has_password && "owner" === i.acting_role.svalue ? t("td", {
                        staticClass: "non-acting-member"
                    }, [e.disableAdd ? e._e() : t("a", {
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.editTeamMember(i)
                            }
                        }
                    }, [e._v(e._s(i.username)), t("span", {
                        domProps: {
                            innerHTML: e._s(e.getUserStatus(i))
                        }
                    })]), e.disableAdd ? t("span", [e._v(e._s(i.username)), t("span", {
                        domProps: {
                            innerHTML: e._s(e.getUserStatus(i))
                        }
                    })]) : e._e(), i.latest_bounce_email ? t("div", {
                        staticClass: "bounce-info"
                    }, [e._m(1, !0), t("p", [e._v("An email bounced when sending to this team member. Please review this team member to ensure they are still able to receive emails.")]), t("pre", [e._v("SMTP output: " + e._s(i.latest_bounce_email.smtpresponse))])]) : e._e()]) : e._e(), i.is_acting_user || i.has_password && "owner" === i.acting_role.svalue ? e._e() : t("td", {
                        staticClass: "invited-name"
                    }, [t("span", {
                        staticClass: "username-label"
                    }, [e._v(e._s(i.username)), t("span", {
                        domProps: {
                            innerHTML: e._s(e.getUserStatus(i))
                        }
                    })]), i.latest_bounce_email ? t("div", {
                        staticClass: "bounce-info"
                    }, [e._m(2, !0), t("p", [e._v("An email bounced when sending to this team member. Please review this team member to ensure they are still able to receive emails.")]), t("pre", [e._v("SMTP output: " + e._s(i.latest_bounce_email.smtpresponse))])]) : e._e()]), e.showFullnameCol ? t("td", {
                        staticClass: "member-name"
                    }, [e._v(e._s(i.fullname))]) : e._e(), t("td", {
                        staticClass: "member-type",
                        domProps: {
                            innerHTML: e._s(e.getMemberType(i))
                        }
                    }), i.account_management_notification || i.weekly_summary_notification ? t("td", {
                        staticClass: "status-icon"
                    }, [t("span", {
                        staticClass: "label green"
                    }, [t("span", {
                        staticClass: "mobile-label"
                    }, [e._v("Notifications")]), e._v("Enabled "), i.account_management_notification && i.weekly_summary_notification ? t("span", [e._v("(2)")]) : e._e()])]) : e._e(), i.account_management_notification || i.weekly_summary_notification ? e._e() : t("td", {
                        staticClass: "status-icon"
                    }, [e._m(3, !0)]), i.totp_secret_key || i.sms_auth_number ? t("td", {
                        staticClass: "status-icon secret-key"
                    }, [e._m(4, !0)]) : e._e(), i.totp_secret_key || i.sms_auth_number ? e._e() : t("td", {
                        staticClass: "status-icon secret-key"
                    }, [e._m(5, !0)]), e.disableAdd ? e._e() : t("member-list-toolbox", {
                        key: s,
                        attrs: {
                            "team-member": i
                        }
                    })], 1)
                })), 0)])
            },
            ue = [function() {
                var e = this,
                    t = e._self._c;
                return t("p", [t("strong", [e._v("Failed to deliver to this team member")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", [t("strong", [e._v("Failed to deliver to this team member")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", [t("strong", [e._v("Failed to deliver to this team member")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "label disabled"
                }, [t("span", {
                    staticClass: "mobile-label"
                }, [e._v("Notifications")]), e._v("Disabled\n        ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "label green"
                }, [t("span", {
                    staticClass: "mobile-label"
                }, [e._v("2FA")]), e._v("Enabled\n        ")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "label disabled"
                }, [t("span", {
                    staticClass: "mobile-label"
                }, [e._v("2FA")]), e._v("Disabled\n        ")])
            }],
            _e = function() {
                var e = this,
                    t = e._self._c;
                return t("td", {
                    staticClass: "row-option"
                }, [t("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showToolbox,
                        expression: "showToolbox"
                    }],
                    staticClass: "row-options-toggle",
                    class: {
                        "is-open": e.mixinTriggerable_isOpen
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.mixinTriggerable_toggleOpened.apply(null, arguments)
                        }
                    }
                }), t("ul", {
                    staticClass: "row-options mixinTriggerable_layer member-option-popup",
                    class: {
                        "is-open": e.mixinTriggerable_isOpen
                    }
                }, [t("li", {
                    staticClass: "mobile-only-option-title"
                }, [e._v("\n      " + e._s(e.teamMember.username) + "\n    ")]), e.canEdit ? t("li", {
                    staticClass: "edit"
                }, [t("a", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onEditClicked.apply(null, arguments)
                        }
                    }
                }, [t("svg", {
                    staticStyle: {
                        position: "absolute",
                        margin: "9px 0 0 7px",
                        width: "10px"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 7.94 7.94"
                    }
                }, [t("g", {
                    attrs: {
                        id: "Layer_2-2"
                    }
                }, [t("path", {
                    staticClass: "cls-1",
                    attrs: {
                        d: "M5.525 1.07l1.35 1.35L1.87 7.425.52 6.075zM6.592-.003l1.35 1.35-.742.743L5.85.74zM1.52 7.78L.17 6.42 0 7.94l1.52-.16z"
                    }
                })])]), t("span", {
                    staticClass: "rhs-edit"
                }, [e._v("Edit team member")])])]) : e._e(), e.canDisable2FA ? t("li", {
                    staticClass: "2fa e2fa"
                }, [t("a", {
                    attrs: {
                        href: "/account/2fa"
                    }
                }, [t("svg", {
                    staticStyle: {
                        position: "absolute",
                        margin: "9px 0 0 7px",
                        width: "12px"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [t("path", {
                    staticClass: "heroicon-ui",
                    attrs: {
                        d: "M9 10h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h2V7a5 5 0 1110 0 1 1 0 01-2 0 3 3 0 00-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z"
                    }
                })]), t("span", {
                    staticClass: "rhs-disable2fac"
                }, [e._v("Edit 2 factor auth")])])]) : e._e(), e.canEnable2FA ? t("li", {
                    staticClass: "2fa e2fa"
                }, [t("a", {
                    attrs: {
                        href: "/account/2fa"
                    }
                }, [t("svg", {
                    staticStyle: {
                        position: "absolute",
                        margin: "9px 0 0 7px",
                        width: "12px"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [t("path", {
                    staticClass: "heroicon-ui",
                    attrs: {
                        d: "M7 10V7a5 5 0 1110 0v3h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h2zm2 0h6V7a3 3 0 00-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z"
                    }
                })]), t("span", {
                    staticClass: "rhs-enable2fac"
                }, [e._v("Enable 2 factor auth")])])]) : e._e(), e.canReinvite ? t("li", {
                    staticClass: "reinvite"
                }, [t("a", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onReinviteClicked.apply(null, arguments)
                        }
                    }
                }, [t("svg", {
                    staticStyle: {
                        position: "absolute",
                        margin: "9px 0 0 7px",
                        width: "9px"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 7.56 8.65"
                    }
                }, [t("path", {
                    staticClass: "cls-1",
                    attrs: {
                        d: "M6.31 4.88A2.53 2.53 0 1 1 3.7 2.35v1l1.87-1.63L3.7 0v1.1a3.78 3.78 0 1 0 3.86 3.78z",
                        id: "Layer_2-2"
                    }
                })]), t("span", {
                    staticClass: "rhs-reinvite"
                }, [e._v("Resend invite")])])]) : e._e(), e.canRemove ? t("li", {
                    staticClass: "remove"
                }, [t("a", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onRemoveClicked.apply(null, arguments)
                        }
                    }
                }, [t("span", {
                    staticClass: "icon-remove"
                }, [e._v("Ã—")]), t("span", [e._v("Remove")])])]) : e._e()]), e.mixinTriggerable_isOpen ? t("div", {
                    staticClass: "mobile-only-backdrop"
                }) : e._e()])
            },
            de = [],
            pe = {
                name: "member-list-toolbox",
                mixins: [Y],
                props: {
                    teamMember: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    showToolbox: function() {
                        return this.canEdit || this.canDisable2FA || this.canEnable2FA || this.canReinvite || this.canRemove
                    },
                    canEdit: function() {
                        return !("owner" !== this.teamMember.acting_role.svalue || !this.teamMember.has_password) || this.teamMember.is_acting_user
                    },
                    canDisable2FA: function() {
                        return this.teamMember.is_acting_user && (this.teamMember.totp_secret_key || this.teamMember.sms_auth_number)
                    },
                    canEnable2FA: function() {
                        return this.teamMember.is_acting_user && !this.teamMember.totp_secret_key && !this.teamMember.sms_auth_number
                    },
                    canReinvite: function() {
                        return this.teamMember.role.ivalue <= this.teamMember.acting_role.ivalue && !this.teamMember.is_acting_user && !this.teamMember.has_password
                    },
                    canRemove: function() {
                        return "owner" === this.teamMember.acting_role.svalue ? !this.teamMember.is_acting_user || 1 !== this.$store.getters[O.getters.GET_OWNER_COUNT] : this.teamMember.is_acting_user
                    }
                },
                methods: {
                    onEditClicked: function() {
                        this.$eventBus.$emit(k.MTBOX_EDIT_CLICKED, this.teamMember), this.mixinTriggerable_forceClose()
                    },
                    onReinviteClicked: function() {
                        this.$eventBus.$emit(k.MTBOX_REINVITE_CLICKED, this.teamMember), this.mixinTriggerable_forceClose()
                    },
                    onRemoveClicked: function() {
                        this.$eventBus.$emit(k.MTBOX_REMOVE_CLICKED, this.teamMember), this.mixinTriggerable_forceClose()
                    }
                }
            },
            Ee = pe,
            fe = Object(te["a"])(Ee, _e, de, !1, null, null, null),
            he = fe.exports;

        function be(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function ve(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? be(Object(i), !0).forEach((function(t) {
                    Object(c["a"])(e, t, i[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : be(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }))
            }
            return e
        }
        var ge = {
                name: "member-list",
                components: {
                    MemberListToolbox: he
                },
                data: function() {
                    return {}
                },
                computed: ve(ve({}, Object(l["b"])({
                    teamMembers: O.getters.GET_TEAM_MEMBERS,
                    disableAdd: O.getters.GET_DISABLE_ADD
                })), {}, {
                    showFullnameCol: function() {
                        var e = !1;
                        return this.teamMembers.forEach((function(t) {
                            t.fullname && (e = !0)
                        })), e
                    }
                }),
                methods: {
                    getUserStatus: function(e) {
                        return e.is_acting_user ? " <em>(logged in)</em>" : e.has_password ? void 0 : " <em>(invited)</em>"
                    },
                    getMemberType: function(e) {
                        var t = "";
                        return "report" === e.role.svalue ? t = "Reports" : "admin" === e.role.svalue ? t = "Admin" : "owner" === e.role.svalue && (t = "Owner"), e.is_new_owner && (t += " <em>(Owner pending)</em>"), t
                    },
                    editTeamMember: function(e) {
                        screen.width >= 768 && this.$eventBus.$emit(k.MTBOX_EDIT_CLICKED, e)
                    }
                }
            },
            Te = ge,
            we = Object(te["a"])(Te, me, ue, !1, null, null, null),
            Ae = we.exports,
            Ce = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    class: {
                        "is-upgrade": e.needsUpgrade
                    }
                }, [!e.needsUpgrade && e.showRemaining ? t("div", {
                    staticClass: "table-info"
                }, [t("p", [t("span", {
                    staticClass: "mobile-hide"
                }, [e._v("You have ")]), t("strong", [e._v(e._s(e.remaining) + " "), t("span", {
                    staticClass: "mobile-hide"
                }, [e._v("team member")]), e._v(" invite"), e.remaining > 1 ? t("span", [e._v("s")]) : e._e()]), e._v(" remaining on the free plan. "), e._m(0), e._m(1)])]) : e._e(), e.needsUpgrade ? t("div", {
                    staticClass: "bar-notice is-info"
                }, [e._m(2), t("a", {
                    staticClass: "button-outlined",
                    attrs: {
                        href: "/account/changeplan/"
                    }
                }, [e._v("Upgrade options")])]) : e._e()])
            },
            Me = [function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "mobile-hide"
                }, [e._v("Try out an "), t("a", {
                    attrs: {
                        href: "/account/changeplan/"
                    }
                }, [e._v("upgraded plan")]), e._v(" for unlimited team members.")])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("span", {
                    staticClass: "desktop-hide"
                }, [t("a", {
                    attrs: {
                        href: "/account/changeplan/"
                    }
                }, [e._v("Upgrade?")])])
            }, function() {
                var e = this,
                    t = e._self._c;
                return t("p", [t("span", {
                    staticClass: "notice-icon"
                }), t("span", {
                    staticClass: "bar-notice-message"
                }, [t("span", {
                    staticClass: "bar-notice-title"
                }, [e._v("Need more team members? ")]), t("span", {
                    staticClass: "bar-notice-text"
                }, [e._v("Try out an "), t("a", {
                    attrs: {
                        href: "/account/changeplan/"
                    }
                }, [e._v("upgraded plan")]), e._v(" for unlimited team members.")])])])
            }];

        function Oe(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function Se(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Oe(Object(i), !0).forEach((function(t) {
                    Object(c["a"])(e, t, i[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Oe(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }))
            }
            return e
        }
        var De = {
                name: "UpgradeNotice",
                computed: Se(Se({}, Object(l["b"])({
                    teamMembers: O.getters.GET_TEAM_MEMBERS,
                    needsUpgrade: O.getters.GET_NEEDS_UPGRADE,
                    showRemaining: O.getters.GET_SHOW_REMAINING
                })), {}, {
                    remaining: function() {
                        return this.showRemaining ? this.teamMembers.length >= 2 ? 0 : 2 - this.teamMembers.length : 0
                    }
                })
            },
            ye = De,
            Re = (i("3e67"), Object(te["a"])(ye, Ce, Me, !1, null, "7b021f66", null)),
            Ne = Re.exports,
            Ie = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "card--fyi",
                    attrs: {
                        id: "orgname-section"
                    }
                }, [e.showTitle ? t("h5", [e._v("Organization name: " + e._s(e.organisation_name))]) : e._e(), e.showTitle ? t("p", [e._v("Your company, business or organization name.")]) : e._e(), t("form", {
                    staticClass: "card--add",
                    attrs: {
                        id: "orgname-form"
                    },
                    on: {
                        submit: function(e) {
                            e.preventDefault()
                        }
                    }
                }, [t("div", {
                    staticClass: "rate-limit rate-limit-defaults",
                    class: {
                        "is-closed": !e.isEditing
                    }
                }, [e.isEditing ? t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.new_orgname,
                        expression: "new_orgname"
                    }],
                    staticClass: "input-orgname",
                    attrs: {
                        type: "text",
                        "data-lpignore": "true",
                        autocomplete: "off",
                        readonly: e.isSaving
                    },
                    domProps: {
                        value: e.new_orgname
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.save.apply(null, arguments))
                        },
                        input: function(t) {
                            t.target.composing || (e.new_orgname = t.target.value)
                        }
                    }
                }) : e._e(), e.isEditing || e.isSaving ? t("button", {
                    staticClass: "btn blue",
                    class: [e.isSaving || !e.canSave ? "disabled" : "", e.isSaving ? "spinner-button" : ""],
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.save.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.isSaving ? "Saving" : "Save"))]) : e._e(), e.isEditing && !e.isSaving ? t("button", {
                    staticClass: "btn grey",
                    class: {
                        disabled: e.isSaving
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.cancelEditing.apply(null, arguments)
                        }
                    }
                }, [e._v("Cancel")]) : e._e(), e.isEditing || e.isSaving ? e._e() : t("button", {
                    staticClass: "btn grey",
                    attrs: {
                        disabled: e.disableAdd
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.startEditing.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.showTitle ? "Change Organization Name" : "Add Organization Name"))])])])])
            },
            xe = [];

        function ke(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function Be(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ke(Object(i), !0).forEach((function(t) {
                    Object(c["a"])(e, t, i[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ke(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }))
            }
            return e
        }
        var Le = {
                name: "update-organisation",
                mixins: [V],
                data: function() {
                    return {
                        new_orgname: "",
                        isEditing: !1,
                        isSaving: !1
                    }
                },
                computed: Be(Be({}, Object(l["c"])({
                    organisation_name: function(e) {
                        return e.team.organisation_name
                    },
                    disableAdd: function(e) {
                        return e.team.disable_add
                    }
                })), {}, {
                    canSave: function() {
                        return !this.isSaving && !this.$store.getters[p.getters.GET_IS_AJAX_RUNNING]
                    },
                    showTitle: function() {
                        return !!this.organisation_name
                    }
                }),
                created: function() {
                    this.mixinEventListener_register(Object(c["a"])(Object(c["a"])({}, k.UPDATE_ORGANISATION_SUCCEEDED, this.onUpdateOrganisationSucceeded), k.UPDATE_ORGANISATION_FAILED, this.onUpdateOrganisationFailed)), this.mixinEventListener_on()
                },
                destroyed: function() {
                    this.mixinEventListener_off()
                },
                methods: {
                    startEditing: function() {
                        this.new_orgname = this.organisation_name, this.isEditing = !0
                    },
                    cancelEditing: function() {
                        this.new_orgname = this.organisation_name, this.isEditing = !1
                    },
                    save: function() {
                        if (!this.isSaving) {
                            if (this.organisation_name == this.new_orgname) return this.isSaving = !1, void(this.isEditing = !1);
                            this.isSaving = !0, this.$eventBus.$emit(k.UPDATE_ORGANISATION_REQUEST, this.new_orgname)
                        }
                    },
                    onUpdateOrganisationSucceeded: function() {
                        this.isSaving = !1, this.isEditing = !1
                    },
                    onUpdateOrganisationFailed: function() {
                        this.isSaving = !1, this.isEditing = !1
                    }
                }
            },
            Pe = Le,
            je = (i("b3ce"), Object(te["a"])(Pe, Ie, xe, !1, null, "7309301a", null)),
            Ue = je.exports,
            Fe = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "card edit-user-form",
                    class: {
                        "is-force-disable": e.showForceDisable,
                        "is-tab-2fa": e.is2FATab
                    }
                }, [e.is_edit_token_valid ? t("div", {
                    staticClass: "card--tab-list"
                }, [t("a", {
                    staticClass: "tab",
                    class: {
                        active: "overview" === e.selectedTab
                    },
                    attrs: {
                        role: "tab"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.changeTab("overview")
                        }
                    }
                }, [e._v("Overview")]), t("a", {
                    staticClass: "tab",
                    class: {
                        active: "password" === e.selectedTab
                    },
                    attrs: {
                        role: "tab"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.changeTab("password")
                        }
                    }
                }, [e._v("Password")]), t("a", {
                    staticClass: "tab",
                    class: {
                        active: "twofactorauth" === e.selectedTab
                    },
                    attrs: {
                        role: "tab"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.changeTab("twofactorauth")
                        }
                    }
                }, [t("span", {
                    staticClass: "show-large"
                }, [e._v("2 Factor Auth")]), t("span", {
                    staticClass: "show-small"
                }, [e._v("2FA")])])]) : e._e(), t("enter-password-overlay", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.is_edit_token_valid,
                        expression: "!is_edit_token_valid"
                    }]
                }), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.is_edit_token_valid,
                        expression: "is_edit_token_valid"
                    }],
                    staticClass: "edit-member-content"
                }, [t("div", {
                    staticClass: "content-body",
                    class: [e.getOpenClass, {
                        "is-overflow": e.tabOverflow
                    }]
                }, [t("form", {
                    staticClass: "form-horizontal",
                    attrs: {
                        id: "team-member",
                        name: "team-member"
                    },
                    on: {
                        submit: function(e) {
                            e.preventDefault()
                        }
                    }
                }, [t("div", {
                    staticClass: "tab-content"
                }, [t("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "overview" === e.selectedTab,
                        expression: "selectedTab === 'overview'"
                    }],
                    staticClass: "tab-pane user-tab-overview active",
                    class: {
                        "is-active": "overview" === e.selectedTab
                    },
                    attrs: {
                        id: "overview",
                        role: "tabpanel"
                    }
                }, [t("div", {
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("Email Address")]), e.showIfActive ? t("div", {
                    staticClass: "form-group-item"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.username,
                        expression: "username"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        autocomplete: "off",
                        type: "text"
                    },
                    domProps: {
                        value: e.username
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.username = t.target.value)
                        }
                    }
                }), t("span", {
                    staticClass: "error-text"
                }, [e._v("Error text here")])]) : t("div", {
                    staticClass: "form-group-item"
                }, [t("span", {
                    staticClass: "inline-checkbox-desc",
                    staticStyle: {
                        top: "7px",
                        "font-weight": "600"
                    }
                }, [e._v(e._s(e.username))])])]), t("div", {
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("Full Name")]), t("div", {
                    staticClass: "form-group-item"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.fullname,
                        expression: "fullname"
                    }],
                    staticClass: "form-control input-md",
                    attrs: {
                        autocomplete: "off",
                        type: "text"
                    },
                    domProps: {
                        value: e.fullname
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.fullname = t.target.value)
                        }
                    }
                }), t("span", {
                    staticClass: "error-text"
                }, [e._v("Error text here")])])]), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showRole,
                        expression: "showRole"
                    }],
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("Role")]), t("div", {
                    staticClass: "form-group-item"
                }, [t("role-dropdown", {
                    ref: "role_dropdown"
                })], 1)]), t("div", {
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label pull-up"
                }, [e._v("Notifications")]), t("div", {
                    attrs: {
                        id: "user-notifications"
                    }
                }, [t("dl", [t("dt", {
                    class: {
                        "is-disabled": "report" == e.currentRole
                    },
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.account_management_notification = !e.account_management_notification
                        }
                    }
                }, [t("div", {
                    staticClass: "checker",
                    class: {
                        "is-focus": e.accountManagementFocused
                    }
                }, [t("span", {
                    staticClass: "checker-box",
                    class: [e.account_management_notification ? "checked" : ""]
                }, [t("input", {
                    attrs: {
                        type: "checkbox",
                        disabled: "report" == e.currentRole
                    },
                    on: {
                        focus: function(t) {
                            e.accountManagementFocused = !0
                        },
                        blur: function(t) {
                            e.accountManagementFocused = !1
                        }
                    }
                })])]), t("span", [e._v("Account management")])]), t("dd", {
                    class: {
                        "is-disabled": "report" == e.currentRole
                    }
                }, [e._v("\n                      Receive emails about account management and usage\n                      alerts.\n                    ")]), t("dt", {
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.weekly_summary_notification = !e.weekly_summary_notification
                        }
                    }
                }, [t("div", {
                    staticClass: "checker",
                    class: {
                        "is-focus": e.weeklySummaryFocused
                    }
                }, [t("span", {
                    staticClass: "checker-box",
                    class: [e.weekly_summary_notification ? "checked" : ""]
                }, [t("input", {
                    attrs: {
                        type: "checkbox"
                    },
                    on: {
                        focus: function(t) {
                            e.weeklySummaryFocused = !0
                        },
                        blur: function(t) {
                            e.weeklySummaryFocused = !1
                        }
                    }
                })])]), t("span", [e._v("Weekly summary")])]), t("dd", [e._v("\n                      Receive weekly summary emails regarding this account.\n                    ")])])])])])]), t("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "password" === e.selectedTab,
                        expression: "selectedTab === 'password'"
                    }],
                    staticClass: "tab-pane user-tab-password",
                    class: {
                        "is-active": "password" === e.selectedTab
                    },
                    attrs: {
                        id: "password",
                        role: "tabpanel"
                    }
                }, [t("div", {
                    staticClass: "bar-control full-width"
                }, [t("p", [t("span", {
                    staticClass: "control-icon"
                }), e._v("Use the fields below to\n                  change the password. The current password won't be displayed\n                  on the page for security reasons.\n                ")])]), t("div", {
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("New Password")]), t("div", {
                    staticClass: "form-group-item"
                }, ["checkbox" === [e.showNewPassword ? "text" : "password"] ? t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.new_password,
                        expression: "new_password"
                    }],
                    staticClass: "form-control input-md input-password",
                    attrs: {
                        autocomplete: "off",
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(e.new_password) ? e._i(e.new_password, null) > -1 : e.new_password
                    },
                    on: {
                        change: function(t) {
                            var i = e.new_password,
                                s = t.target,
                                n = !!s.checked;
                            if (Array.isArray(i)) {
                                var a = null,
                                    r = e._i(i, a);
                                s.checked ? r < 0 && (e.new_password = i.concat([a])) : r > -1 && (e.new_password = i.slice(0, r).concat(i.slice(r + 1)))
                            } else e.new_password = n
                        }
                    }
                }) : "radio" === [e.showNewPassword ? "text" : "password"] ? t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.new_password,
                        expression: "new_password"
                    }],
                    staticClass: "form-control input-md input-password",
                    attrs: {
                        autocomplete: "off",
                        type: "radio"
                    },
                    domProps: {
                        checked: e._q(e.new_password, null)
                    },
                    on: {
                        change: function(t) {
                            e.new_password = null
                        }
                    }
                }) : t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.new_password,
                        expression: "new_password"
                    }],
                    staticClass: "form-control input-md input-password",
                    attrs: {
                        autocomplete: "off",
                        type: [e.showNewPassword ? "text" : "password"]
                    },
                    domProps: {
                        value: e.new_password
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.new_password = t.target.value)
                        }
                    }
                }), t("a", {
                    staticClass: "password-show-hide",
                    class: [e.showNewPassword ? "is-shown" : "is-hidden"],
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.showNewPassword = !e.showNewPassword
                        }
                    }
                }, [t("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 13 10",
                        "enable-background": "new 0 0 13 10"
                    }
                }, [t("path", {
                    attrs: {
                        fill: "#828da0",
                        d: "M12.9 4.9c-1.2 1.2-2.3 2.5-3.5 3.5-1.8 1.6-4.5 1.4-6.2-.3L.1 5l.3-.3 2.8-2.8c2-2 4.8-2 6.8 0 .9 1 1.9 2 2.9 3zm-11.2 0c1 1 1.8 1.9 2.7 2.8 1.3 1.1 3.2 1 4.5-.2l1.6-1.6c.3-.3.6-.6.9-.8-.9-.9-1.7-1.9-2.6-2.7-1.1-1-2.8-1.1-4.1-.3-.4.2-.6.5-.9.7L1.7 4.9zM6.5 2.6c1.3 0 2.4 1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4C5.1 7.4 4 6.3 4 5c.1-1.4 1.2-2.4 2.5-2.4zm0 1.5c0 .5.3.9.8.9s.9-.3.9-.8-.3-.9-.8-.9-.9.3-.9.8z"
                    }
                })])])])]), t("div", {
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("Confirm New")]), t("div", {
                    staticClass: "form-group-item"
                }, ["checkbox" === [e.showConPassword ? "text" : "password"] ? t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.con_password,
                        expression: "con_password"
                    }],
                    staticClass: "form-control input-md input-password",
                    attrs: {
                        autocomplete: "off",
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(e.con_password) ? e._i(e.con_password, null) > -1 : e.con_password
                    },
                    on: {
                        change: function(t) {
                            var i = e.con_password,
                                s = t.target,
                                n = !!s.checked;
                            if (Array.isArray(i)) {
                                var a = null,
                                    r = e._i(i, a);
                                s.checked ? r < 0 && (e.con_password = i.concat([a])) : r > -1 && (e.con_password = i.slice(0, r).concat(i.slice(r + 1)))
                            } else e.con_password = n
                        }
                    }
                }) : "radio" === [e.showConPassword ? "text" : "password"] ? t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.con_password,
                        expression: "con_password"
                    }],
                    staticClass: "form-control input-md input-password",
                    attrs: {
                        autocomplete: "off",
                        type: "radio"
                    },
                    domProps: {
                        checked: e._q(e.con_password, null)
                    },
                    on: {
                        change: function(t) {
                            e.con_password = null
                        }
                    }
                }) : t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.con_password,
                        expression: "con_password"
                    }],
                    staticClass: "form-control input-md input-password",
                    attrs: {
                        autocomplete: "off",
                        type: [e.showConPassword ? "text" : "password"]
                    },
                    domProps: {
                        value: e.con_password
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.con_password = t.target.value)
                        }
                    }
                }), t("a", {
                    staticClass: "password-show-hide",
                    class: [e.showConPassword ? "is-shown" : "is-hidden"],
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.showConPassword = !e.showConPassword
                        }
                    }
                }, [t("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 13 10",
                        "enable-background": "new 0 0 13 10"
                    }
                }, [t("path", {
                    attrs: {
                        fill: "#828da0",
                        d: "M12.9 4.9c-1.2 1.2-2.3 2.5-3.5 3.5-1.8 1.6-4.5 1.4-6.2-.3L.1 5l.3-.3 2.8-2.8c2-2 4.8-2 6.8 0 .9 1 1.9 2 2.9 3zm-11.2 0c1 1 1.8 1.9 2.7 2.8 1.3 1.1 3.2 1 4.5-.2l1.6-1.6c.3-.3.6-.6.9-.8-.9-.9-1.7-1.9-2.6-2.7-1.1-1-2.8-1.1-4.1-.3-.4.2-.6.5-.9.7L1.7 4.9zM6.5 2.6c1.3 0 2.4 1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4C5.1 7.4 4 6.3 4 5c.1-1.4 1.2-2.4 2.5-2.4zm0 1.5c0 .5.3.9.8.9s.9-.3.9-.8-.3-.9-.8-.9-.9.3-.9.8z"
                    }
                })])])])])])]), t("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "twofactorauth" === e.selectedTab,
                        expression: "selectedTab === 'twofactorauth'"
                    }],
                    staticClass: "tab-pane user-tab-2fa active",
                    class: {
                        "is-active": "twofactorauth" === e.selectedTab
                    },
                    attrs: {
                        id: "twofactorauth",
                        role: "tabpanel"
                    }
                }, [t("div", {
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("Status")]), t("div", {
                    staticClass: "form-group-item"
                }, [t("div", {
                    staticClass: "bar-control",
                    class: {
                        "is-enforced": e.is2FAEnabled
                    }
                }, [e.is2FAEnabled ? t("p", [t("span", {
                    staticClass: "control-icon"
                }), e._v("2FA is\n                      currentlyÂ "), t("strong", [e._v("enabled")]), t("span", [e._v("Â usingÂ "), e.app2FA ? t("span", [e._v("App Authentication")]) : t("span", [e._v("SMS Authentication")]), e._v(".")])]) : t("p", [t("span", {
                    staticClass: "control-icon"
                }), e._v("Two-factor\n                      authentication is\n                      currentlyÂ "), t("strong", [e._v("disabled")]), e._v(".\n                    ")])]), e.is2FAEnabled || e.showIfActive ? e._e() : t("p", {
                    staticClass: "info-text"
                }, [e._v("\n                    It can be enabled directly by the team member.\n                  ")]), !e.is2FAEnabled && e.showIfActive ? t("p", {
                    staticClass: "info-text"
                }, [e._v("\n                    Two-factor authentication adds an extra layer of security\n                    to your account in case your password is compromised. You\n                    can choose App Authentication, SMS Authentication, or\n                    both.\n                  ")]) : e._e(), !e.is2FAEnabled && e.showIfActive ? t("p", {
                    staticClass: "info-text"
                }, [t("a", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.goto2FAPage.apply(null, arguments)
                        }
                    }
                }, [e._v("Change your two-factor authentication settings")])]) : e._e()])]), e.showForceDisable ? t("hr") : e._e(), e.showForceDisable ? t("div", {
                    staticClass: "form-group"
                }, [t("label", {
                    staticClass: "form-group-label"
                }, [e._v("Disable 2FA")]), t("div", {
                    staticClass: "form-group-item"
                }, [t("button", {
                    staticClass: "button-outlined",
                    class: {
                        "is-working": e.isDisabling2FA
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.forceDisable2FA.apply(null, arguments)
                        }
                    }
                }, [e._v("\n                    Disable 2FA for this team member\n                    "), t("span", {
                    staticClass: "icon-working"
                }, [t("svg", {
                    staticClass: "Loader_icon_1k4ls",
                    attrs: {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [t("path", {
                    attrs: {
                        d: "M8 3.25C8.69036 3.25 9.25 2.69036 9.25 2C9.25 1.30964 8.69036 0.75 8 0.75C7.30964 0.75 6.75 1.30964 6.75 2C6.75 2.69036 7.30964 3.25 8 3.25Z",
                        fill: "#12BECB"
                    }
                }), t("path", {
                    attrs: {
                        d: "M2 9.25C2.69036 9.25 3.25 8.69036 3.25 8C3.25 7.30964 2.69036 6.75 2 6.75C1.30964 6.75 0.75 7.30964 0.75 8C0.75 8.69036 1.30964 9.25 2 9.25Z",
                        fill: "#E2B466"
                    }
                }), t("path", {
                    attrs: {
                        d: "M4 5.25C4.69036 5.25 5.25 4.69036 5.25 4C5.25 3.30964 4.69036 2.75 4 2.75C3.30964 2.75 2.75 3.30964 2.75 4C2.75 4.69036 3.30964 5.25 4 5.25Z",
                        fill: "#DAE0E3"
                    }
                }), t("path", {
                    attrs: {
                        d: "M4 13.25C4.69036 13.25 5.25 12.6904 5.25 12C5.25 11.3096 4.69036 10.75 4 10.75C3.30964 10.75 2.75 11.3096 2.75 12C2.75 12.6904 3.30964 13.25 4 13.25Z",
                        fill: "#425157"
                    }
                }), t("path", {
                    attrs: {
                        d: "M12 5.25C12.6904 5.25 13.25 4.69036 13.25 4C13.25 3.30964 12.6904 2.75 12 2.75C11.3096 2.75 10.75 3.30964 10.75 4C10.75 4.69036 11.3096 5.25 12 5.25Z",
                        fill: "#00BA7A"
                    }
                }), t("path", {
                    attrs: {
                        d: "M12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25Z",
                        fill: "#B35E4E"
                    }
                }), t("path", {
                    attrs: {
                        d: "M14 9.25C14.6904 9.25 15.25 8.69036 15.25 8C15.25 7.30964 14.6904 6.75 14 6.75C13.3096 6.75 12.75 7.30964 12.75 8C12.75 8.69036 13.3096 9.25 14 9.25Z",
                        fill: "#EE8A77"
                    }
                }), t("path", {
                    attrs: {
                        d: "M8 15.25C8.69036 15.25 9.25 14.6904 9.25 14C9.25 13.3096 8.69036 12.75 8 12.75C7.30964 12.75 6.75 13.3096 6.75 14C6.75 14.6904 7.30964 15.25 8 15.25Z",
                        fill: "#818DA0"
                    }
                })])])]), t("p", {
                    staticClass: "info-text"
                }, [e._v("\n                    This is useful if a team member has locked themselves out\n                    of their account, perhaps losing their authentication\n                    device or changing their SMS number.\n                  ")])])]) : e._e()])])], 1), t("div", {
                    staticClass: "card-footer"
                }, [t("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "twofactorauth" !== e.selectedTab,
                        expression: "selectedTab !== 'twofactorauth'"
                    }],
                    staticClass: "btn blue",
                    class: [e.mixinTriggerable_isModal ? "disabled" : "", e.isWorking ? "spinner-button" : ""],
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onConfirmClicked.apply(null, arguments)
                        }
                    }
                }, [e._v("\n            " + e._s(e.isWorking ? "Saving" : "Save") + "\n          ")]), t("button", {
                    staticClass: "btn button-dropdown",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onCancelClicked.apply(null, arguments)
                        }
                    }
                }, [e._v("\n            Back\n          ")])])])])])], 1)
            },
            Ge = [],
            $e = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "modal-password-overlay"
                }, [t("form", {
                    on: {
                        submit: function(e) {
                            e.preventDefault()
                        }
                    }
                }, [t("div", {
                    staticClass: "password-overlay-content"
                }, [t("h4", [e._v("Enter your password to continue")]), t("div", {
                    staticClass: "password-input-wrapper"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.password,
                        expression: "password"
                    }],
                    ref: "password",
                    staticClass: "password-field",
                    attrs: {
                        type: "password",
                        autocomplete: "off",
                        "data-1password": "off",
                        "data-1p-ignore": "true",
                        "data-lpignore": "true"
                    },
                    domProps: {
                        value: e.password
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.verify.apply(null, arguments))
                        },
                        input: function(t) {
                            t.target.composing || (e.password = t.target.value)
                        }
                    }
                }), t("span", {
                    staticClass: "error-text"
                }, [e._v("Entered password was incorrect")]), t("button", {
                    staticClass: "btn blue",
                    class: [e.isWorking ? "disabled spinner-button" : ""],
                    on: {
                        click: e.verify
                    }
                })])])])])
            },
            Ke = [],
            We = {
                name: "enter-password-overlay",
                mixins: [V],
                data: function() {
                    return {
                        isWorking: !1,
                        password: ""
                    }
                },
                computed: {},
                created: function() {
                    this.mixinEventListener_register(Object(c["a"])(Object(c["a"])(Object(c["a"])({}, k.ENTER_PASSWORD_SUCCEEDED, this.onEnterPasswordSucceeded), k.ENTER_PASSWORD_FAILED, this.onEnterPasswordFailed), J.TRIGGERABLE_CLOSED, this.onTriggerableClosed)), this.mixinEventListener_on()
                },
                mounted: function() {
                    this.isWorking = !1, this.password = "", this.$refs.password.focus()
                },
                destroyed: function() {
                    this.mixinEventListener_off()
                },
                methods: {
                    verify: function() {
                        var e = this;
                        L()(this.$el).removeClass("has_errors"), this.isWorking = !0, this.$eventBus.$emit(k.WORKING_STATE_CHANGED, this.$options.name, !0), this.$store.dispatch(O.actions.FETCH_EDIT_TOKEN, this.password).then((function() {
                            e.$eventBus.$emit(k.ENTER_PASSWORD_SUCCEEDED)
                        })).catch((function() {
                            e.$eventBus.$emit(k.ENTER_PASSWORD_FAILED)
                        }))
                    },
                    onTriggerableClosed: function(e) {
                        "edit-team-member" === e && (this.password = "", L()(this.$el).removeClass("has_errors"))
                    },
                    onEnterPasswordSucceeded: function() {
                        this.password = "", this.isWorking = !1, this.$eventBus.$emit(k.WORKING_STATE_CHANGED, this.$options.name, !1)
                    },
                    onEnterPasswordFailed: function() {
                        this.password = "", this.isWorking = !1, L()(this.$el).addClass("has_errors"), this.$eventBus.$emit(k.WORKING_STATE_CHANGED, this.$options.name, !1)
                    }
                }
            },
            He = We,
            Ve = (i("8dca"), i("59c3"), Object(te["a"])(He, $e, Ke, !1, null, "1c2ea145", null)),
            ze = Ve.exports;

        function qe(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function Xe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? qe(Object(i), !0).forEach((function(t) {
                    Object(c["a"])(e, t, i[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : qe(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }))
            }
            return e
        }
        var Qe = {
                name: "edit-team-member",
                mixins: [Y, V],
                components: {
                    RoleDropdown: se,
                    EnterPasswordOverlay: ze
                },
                data: function() {
                    return {
                        teamMember: null,
                        isWorking: !1,
                        selectedTab: "overview",
                        record_id: "",
                        username: "",
                        fullname: "",
                        notification_level: 0,
                        new_password: "",
                        con_password: "",
                        nLevel1: !1,
                        nLevel2: !1,
                        nLevel4: !1,
                        nLevel8: !1,
                        showNewPassword: !1,
                        showConPassword: !1,
                        showRole: !0,
                        currentRole: null,
                        app2FA: !1,
                        sms2FA: !1,
                        is2FAEnabled: !1,
                        isDisabling2FA: !1,
                        is2FATab: !1,
                        tabOverflow: !0,
                        isOnlyNotifiedOwner: !0,
                        is2FAEnforced: !1,
                        account_management_notification: !1,
                        weekly_summary_notification: !1,
                        accountManagementFocused: !1,
                        weeklySummaryFocused: !1
                    }
                },
                computed: Xe(Xe({}, Object(l["c"])("team", ["is_edit_token_valid"])), {}, {
                    showForceDisable: function() {
                        return console.log(this.teamMember), null !== this.teamMember && !this.teamMember.is_acting_user && "owner" === this.teamMember.acting_role.svalue && ("enabled" === this.teamMember.totp_secret_key || "enabled" === this.teamMember.sms_auth_number)
                    },
                    showIfActive: function() {
                        return null !== this.teamMember && this.teamMember.is_acting_user
                    },
                    editingRole: function() {
                        return null !== this.teamMember ? this.teamMember.role.svalue : ""
                    },
                    getOpenClass: function() {
                        return "overview" === this.selectedTab ? "overview-open" : "password" === this.selectedTab ? "password-open" : "twofactorauth" === this.selectedTab ? this.showForceDisable ? "twofactorauth-open-with-disable" : "twofactorauth-open" : ""
                    }
                }),
                watch: {
                    is_edit_token_valid: function(e) {
                        var t = this;
                        e && this.$nextTick((function() {
                            t.adjustTabContentHeight()
                        }))
                    }
                },
                created: function() {
                    this.mixinEventListener_register(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({}, k.UPDATE_TEAM_MEMBER_SUCCEEDED, this.onUpdateTeamMemberSucceeded), k.UPDATE_TEAM_MEMBER_FAILED, this.onUpdateTeamMemberFailed), k.ROLE_CHANGED, this.onRoleChanged), k.DISABLE_2FA_SUCCEEDED, this.onDisable2FASucceeded), k.DISABLE_2FA_FAILED, this.onDisable2FAFailed)), this.mixinEventListener_on()
                },
                mounted: function() {
                    this.mixinTriggerable_centerSelf(), this.adjustTabContentHeight()
                },
                destroyed: function() {
                    this.mixinEventListener_off()
                },
                methods: {
                    onDisable2FASucceeded: function() {
                        this.isWorking = !1, this.sms2FA = !1, this.app2FA = !1, this.is2FAEnabled = !1, this.isDisabling2FA = !1, this.onCancelClicked()
                    },
                    onDisable2FAFailed: function() {
                        this.isDisabling2FA = !1
                    },
                    forceDisable2FA: function() {
                        this.isDisabling2FA = !0, this.$eventBus.$emit(k.DISABLE_2FA_REQUEST, this.teamMember)
                    },
                    onRoleChanged: function(e) {
                        this.currentRole = e.id, this.account_management_notification = "owner" === e.id || "admin" === e.id
                    },
                    onCancelClicked: function() {
                        this.$eventBus.$emit("closeEditMember")
                    },
                    adjustTabContentHeight: function() {
                        this.$nextTick((function() {
                            var e = L()(".tab-pane.is-active").outerHeight(!0);
                            L()(".tab-content").height(e)
                        }))
                    },
                    changeTab: function(e) {
                        var t = this;
                        this.selectedTab = e, "overview" === e && this.showRole ? (this.$nextTick((function() {
                            t.$refs.role_dropdown.setRole(t.currentRole)
                        })), setTimeout((function() {
                            return t.tabOverflow = !1
                        }), 500)) : this.tabOverflow = !0, this.is2FATab = "twofactorauth" === e, this.adjustTabContentHeight()
                    },
                    setTeamMember: function(e) {
                        var t = this;
                        this.app2FA = !1, this.sms2FA = !1, this.is2FAEnabled = !1, this.isDisabling2FA = !1, this.selectedTab = "overview", this.new_password = "", this.con_password = "", setTimeout((function() {
                            return t.tabOverflow = !1
                        }), 500), this.teamMember = e, this.hash_id = e.hash_id, this.username = e.username, this.fullname = e.fullname, this.account_management_notification = e.account_management_notification, this.weekly_summary_notification = e.weekly_summary_notification, void 0 !== e.sms_auth_number && null !== e.sms_auth_number ? this.sms2FA = !0 : void 0 !== e.totp_secret_key && null !== e.totp_secret_key && (this.app2FA = !0), this.is2FAEnabled = this.sms2FA || this.app2FA, this.showRole = "report" !== this.$store.state.team.acting_role, this.showRole = ("owner" !== e.role.svalue || 1 !== this.$store.getters[O.getters.GET_OWNER_COUNT]) && this.showRole, this.is2FAEnforced = this.$store.getters[O.getters.GET_IS_2FA_ENFORCED], this.currentRole = e.role.svalue, this.showRole && this.$nextTick((function() {
                            t.$refs.role_dropdown.setRole(t.currentRole)
                        })), this.notification_level = e.notification_level, this.nLevel1 = 0 !== (1 & this.notification_level), this.nLevel2 = 0 !== (2 & this.notification_level), this.nLevel4 = 0 !== (4 & this.notification_level), this.nLevel8 = 0 !== (8 & this.notification_level), this.adjustTabContentHeight()
                    },
                    toggleChecked: function(e) {
                        var t = e.currentTarget,
                            i = t.querySelector("input");
                        t.classList.toggle("checked"), i.checked = !i.checked
                    },
                    enableNotificationLevel: function(e) {
                        1 === e ? this.nLevel1 = !this.nLevel1 : 2 === e ? this.nLevel2 = !this.nLevel2 : 4 === e ? this.nLevel4 = !this.nLevel4 : 8 === e && (this.nLevel8 = !this.nLevel8), this.notification_level = 0, this.nLevel1 && (this.notification_level |= 1), this.nLevel2 && (this.notification_level |= 2), this.nLevel4 && (this.notification_level |= 4), this.nLevel8 && (this.notification_level |= 8), 0 !== (1 & this.notification_level) ? this.notification_level = 15 : this.notification_level = 0
                    },
                    onConfirmClicked: function() {
                        "overview" === this.selectedTab && (this.isWorking = !0, this.$eventBus.$emit(k.UPDATE_TEAM_MEMBER_REQUEST, this.teamMember, this.username, this.fullname, this.currentRole, this.notification_level, "", "", this.account_management_notification, this.weekly_summary_notification)), "password" === this.selectedTab && (this.isWorking = !0, this.$eventBus.$emit(k.UPDATE_TEAM_MEMBER_REQUEST, this.teamMember, this.teamMember.username, this.teamMember.fullname, this.teamMember.role.svalue, this.teamMember.notification_level, this.new_password, this.con_password, this.teamMember.account_management_notification, this.teamMember.weekly_summary_notification))
                    },
                    onUpdateTeamMemberSucceeded: function() {
                        this.isWorking = !1
                    },
                    onUpdateTeamMemberFailed: function() {
                        this.isWorking = !1
                    },
                    goto2FAPage: function() {
                        window.location = "/account/2fa"
                    }
                }
            },
            Je = Qe,
            Ye = (i("6527"), Object(te["a"])(Je, Fe, Ge, !1, null, "0a9904bb", null)),
            Ze = Ye.exports,
            et = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "modal-small mixinTriggerable_layer",
                    class: {
                        "is-visible": e.mixinTriggerable_isOpen
                    }
                }, [t("h4", {
                    domProps: {
                        innerHTML: e._s(e.title)
                    }
                }), t("p", {
                    domProps: {
                        innerHTML: e._s(e.message)
                    }
                }), t("div", {
                    staticClass: "modal-body-footer",
                    class: [null !== e.confirmCallback && null !== e.cancelCallback ? "two" : "one"]
                }, [t("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: null !== e.confirmCallback,
                        expression: "confirmCallback !== null"
                    }],
                    staticClass: "btn blue",
                    class: [e.isWorking ? "disabled spinner-button" : ""],
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onConfirmClicked.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.confirmLabel))]), t("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: null !== e.cancelCallback,
                        expression: "cancelCallback !== null"
                    }],
                    staticClass: "btn grey",
                    class: [e.isWorking ? "disabled" : ""],
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onCancelClicked.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.cancelLabel))])])])
            },
            tt = [],
            it = {
                name: "simple-confirm-modal",
                mixins: [Y, V],
                data: function() {
                    return {
                        isWorking: !1,
                        title: "",
                        message: "",
                        confirmCallback: null,
                        cancelCallback: null,
                        confirmLabel: "Confirm",
                        cancelLabel: "Cancel"
                    }
                },
                created: function() {
                    this.mixinEventListener_register(Object(c["a"])(Object(c["a"])({}, J.TRIGGERABLE_OPENED, this.onTriggerableOpened), J.TRIGGERABLE_CLOSED, this.onTriggerableClosed)), this.mixinEventListener_on()
                },
                mounted: function() {
                    this.mixinTriggerable_centerSelf()
                },
                destroyed: function() {
                    this.mixinEventListener_off()
                },
                methods: {
                    close: function() {
                        this.mixinTriggerable_forceClose()
                    },
                    show: function(e, t, i, s, n, a) {
                        this.isWorking = !1, this.title = e, this.message = t, void 0 === i && (i = null), void 0 === s && (s = null), void 0 !== n && (this.confirmLabel = n), void 0 !== a && (this.cancelLabel = a), this.confirmCallback = i, this.cancelCallback = s, this.mixinTriggerable_forceOpen()
                    },
                    onConfirmClicked: function() {
                        this.mixinTriggerable_setModal(!0), this.isWorking = !0, null !== this.confirmCallback && this.confirmCallback()
                    },
                    onCancelClicked: function() {
                        this.isWorking || null !== this.cancelCallback && this.cancelCallback()
                    },
                    onTriggerableOpened: function(e) {
                        this.mixinTriggerable_isSelf(e) && (L()(".modal-backdrop").remove(), L()('<div class="modal-backdrop fade in" />').appendTo(document.body))
                    },
                    onTriggerableClosed: function(e) {
                        this.mixinTriggerable_isSelf(e) && (this.isWorking = !1, L()(".modal-backdrop").remove())
                    }
                }
            },
            st = it,
            nt = (i("9475"), Object(te["a"])(st, et, tt, !1, null, "85edfbd2", null)),
            at = nt.exports,
            rt = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            ot = [function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "loading"
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
                })])])])]), t("div", {
                    staticClass: "loading-backdrop"
                })])
            }],
            ct = {
                name: "AjaxLoadingSpinner"
            },
            lt = ct,
            mt = (i("35e3"), Object(te["a"])(lt, rt, ot, !1, null, "4e19a2b4", null)),
            ut = mt.exports;

        function _t(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function dt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _t(Object(i), !0).forEach((function(t) {
                    Object(c["a"])(e, t, i[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : _t(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }))
            }
            return e
        }
        var pt = {
                name: "app",
                mixins: [K, V],
                components: {
                    AddTeamMember: le,
                    MemberList: Ae,
                    UpgradeNotice: Ne,
                    UpdateOrganisation: Ue,
                    EditTeamMember: Ze,
                    SimpleConfirmModal: at,
                    AjaxLoadingSpinner: ut
                },
                computed: dt(dt({}, Object(l["c"])({
                    teamMembers: function(e) {
                        return e.team.team_members
                    },
                    actingRole: function(e) {
                        return e.team.acting_role
                    },
                    needsUpgrade: function(e) {
                        return e.team.needs_upgrade
                    },
                    showRemaining: function(e) {
                        return e.team.show_remaining
                    },
                    disableAdd: function(e) {
                        return e.team.disable_add
                    }
                })), {}, {
                    anyMemberHasBounce: function() {
                        return this.teamMembers.some((function(e) {
                            return e.latest_bounce_email
                        }))
                    },
                    hideInviteButton: function() {
                        return "report" === this.actingRole || (!!this.needsUpgrade || !!(this.showRemaining && this.teamMembers.length > 2))
                    }
                }),
                data: function() {
                    return {
                        edit_token_callback: null,
                        showLoadingSpinner: !1,
                        addNewMember: !1,
                        editMember: !1
                    }
                },
                created: function() {
                    this.mixinEventListener_register(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({}, k.MTBOX_EDIT_CLICKED, this.onEditTeamMemberClicked), k.MTBOX_ENABLE_2FA_CLICKED, this.onEnable2FAClicked), k.MTBOX_REMOVE_CLICKED, this.onRemoveTeamMemberClicked), k.MTBOX_REINVITE_CLICKED, this.onReinviteTeamMemberClicked), k.INVITE_TEAM_MEMBER_REQUEST, this.onInviteTeamMemberRequest), k.UPDATE_ORGANISATION_REQUEST, this.onUpdateOrganisationRequest), k.DISABLE_2FA_REQUEST, this.onDisable2FARequest), k.UPDATE_TEAM_MEMBER_REQUEST, this.onUpdateTeamMemberRequest)), this.mixinEventListener_on(), this.$eventBus.$on("closeEditMember", this.cancelEditMember)
                },
                beforeDestroy: function() {
                    this.$eventBus.$off("closeEditMember", this.cancelEditMember), this.$eventBus.$off("closeAddNewMember", this.cancelInviteMember)
                },
                destroyed: function() {
                    this.mixinEventListener_off()
                },
                mounted: function() {
                    var e = this;
                    this.showLoadingSpinner = !0, this.$store.dispatch(O.actions.FETCH_TEAM_MEMBERS).catch((function() {
                        e.showLoadingSpinner = !1
                    })).then((function() {
                        e.showLoadingSpinner = !1
                    })), this.$eventBus.$on("closeAddNewMember", this.cancelInviteMember)
                },
                methods: {
                    onInviteTeamMemberRequest: function(e, t, i, s) {
                        var n = this;
                        this.$store.dispatch(O.actions.INVITE_TEAM_MEMBER, {
                            username: e,
                            role: t,
                            account_management_notification: i,
                            weekly_summary_notification: s
                        }).then((function(e) {
                            n.mixinAlerts_success(n.escapeHtml(e.message)), n.$eventBus.$emit(k.INVITE_TEAM_MEMBER_SUCCEEDED, e.results.team_member)
                        })).catch((function(e) {
                            n.mixinAlerts_error(e), n.$eventBus.$emit(k.INVITE_TEAM_MEMBER_FAILED)
                        }))
                    },
                    onReinviteTeamMemberClicked: function(e) {
                        var t = this;
                        this.$refs.simple_confirm_modal.show("Confirm send reinvite email?", "Are you sure you want to resend the invite email to <strong>" + this.escapeHtml(e.username) + "</strong>?<br />", (function() {
                            t.$store.dispatch(O.actions.REINVITE_TEAM_MEMBER, e.username).then((function(e) {
                                t.mixinAlerts_success(t.escapeHtml(e.message)), t.$refs.simple_confirm_modal.close(), t.$eventBus.$emit(k.REINVITE_TEAM_MEMBER_SUCCEEDED)
                            })).catch((function(e) {
                                t.$refs.simple_confirm_modal.close(), t.mixinAlerts_error(e), t.$eventBus.$emit(k.REINVITE_TEAM_MEMBER_FAILED)
                            }))
                        }), (function() {
                            t.$refs.simple_confirm_modal.close()
                        }))
                    },
                    onUpdateOrganisationRequest: function(e) {
                        var t = this;
                        this.$store.dispatch(O.actions.UPDATE_ORGANISATION_NAME, e).then((function(e) {
                            t.mixinAlerts_success(t.escapeHtml(e.message)), t.$eventBus.$emit(k.UPDATE_ORGANISATION_SUCCEEDED, e.results.organisation_name)
                        })).catch((function(e) {
                            t.mixinAlerts_error(e), t.$eventBus.$emit(k.UPDATE_ORGANISATION_FAILED)
                        }))
                    },
                    onEditTeamMemberClicked: function(e) {
                        console.log(this.$refs.edit_team_member), this.$refs.edit_team_member ? (this.$refs.edit_team_member.setTeamMember(e), this.editMember = !0) : console.error("edit_team_member ref not available")
                    },
                    cancelEditMember: function() {
                        this.editMember = !1
                    },
                    onDisable2FARequest: function(e) {
                        var t = this;
                        this.$store.dispatch(O.actions.DISABLE_2FA, {
                            team_member: e
                        }).then((function(e) {
                            t.mixinAlerts_success(e.message), t.$eventBus.$emit(k.DISABLE_2FA_SUCCEEDED)
                        })).catch((function(e) {
                            t.mixinAlerts_error(e), t.$eventBus.$emit(k.DISABLE_2FA_FAILED)
                        }))
                    },
                    onUpdateTeamMemberRequest: function(e, t, i, s, n, a, r, o, c) {
                        var l = this;
                        this.$store.dispatch(O.actions.UPDATE_TEAM_MEMBER, {
                            old_username: e.username,
                            new_username: t,
                            team_member: e,
                            fullname: i,
                            role: s,
                            notification_level: n,
                            new_password: a,
                            con_password: r,
                            account_management_notification: o,
                            weekly_summary_notification: c
                        }).then((function(e) {
                            l.mixinAlerts_success(l.escapeHtml(e.message)), l.$eventBus.$emit(k.UPDATE_TEAM_MEMBER_SUCCEEDED), e.results.changed_email && l.$refs.simple_confirm_modal.show("Information", "A verification email was sent to <br /><br /><strong>" + l.escapeHtml(t) + "</strong> <br /><br />Please confirm your new email address by clicking the link in this email.", (function() {
                                l.$refs.simple_confirm_modal.close()
                            }), null, "OK")
                        })).catch((function(e) {
                            l.mixinAlerts_error(e), l.$eventBus.$emit(k.UPDATE_TEAM_MEMBER_FAILED)
                        }))
                    },
                    onRemoveTeamMemberClicked: function(e) {
                        var t = this;
                        this.$refs.simple_confirm_modal.show("Are you sure?", "Do you really want to remove<br /><strong>" + this.escapeHtml(e.username) + "</strong><br /> from your account?", (function() {
                            t.$store.dispatch(O.actions.REMOVE_TEAM_MEMBER, e).then((function(e) {
                                t.mixinAlerts_success(t.escapeHtml(e.message)), t.$refs.simple_confirm_modal.close(), t.$eventBus.$emit(k.REMOVE_TEAM_MEMBER_SUCCEEDED), null !== e.results.redirect && (t.$cookies.remove("session"), t.$cookies.remove("login_id"), window.location = e.results.redirect)
                            })).catch((function(e) {
                                t.mixinAlerts_error(e), t.$refs.simple_confirm_modal.close(), t.$eventBus.$emit(k.REMOVE_TEAM_MEMBER_FAILED)
                            }))
                        }), (function() {
                            t.$refs.simple_confirm_modal.close()
                        }))
                    },
                    escapeHtml: function(e) {
                        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
                    },
                    inviteMember: function() {
                        this.addNewMember = !0
                    },
                    cancelInviteMember: function() {
                        this.addNewMember = !1
                    }
                }
            },
            Et = pt,
            ft = (i("1069"), i("d438"), Object(te["a"])(Et, r, o, !1, null, "4ce54421", null)),
            ht = ft.exports;
        s["a"].use(l["a"]);
        var bt = new l["a"].Store({
                strict: !1,
                getters: {},
                mutations: {},
                actions: {},
                modules: {
                    root: g,
                    team: I
                }
            }),
            vt = bt;
        s["a"].use(a.a), s["a"].config.productionTip = !1, s["a"].prototype.$eventBus = new s["a"], vt.commit(p.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey), vt.commit(p.mutations.SET_END_POINTS, END_POINTS.urls()), vt.commit(O.mutations.SET_ORGANISATION_NAME, PAGE_DATA.organisation), vt.commit(O.mutations.SET_IS_2FA_ENFORCED, PAGE_DATA.is_2fa_enforced), vt.commit(O.mutations.SET_ACTING_ROLE, PAGE_DATA.acting_role), vt.commit(O.mutations.SET_IS_SUBACCOUNT, PAGE_DATA.is_subaccount), C(vt), new s["a"]({
            store: vt,
            render: function(e) {
                return e(ht)
            }
        }).$mount("#app")
    },
    "59c3": function(e, t, i) {
        "use strict";
        i("fecf")
    },
    "5b1b": function(e, t, i) {},
    6527: function(e, t, i) {
        "use strict";
        i("aaf2")
    },
    "8dca": function(e, t, i) {
        "use strict";
        i("5093")
    },
    9475: function(e, t, i) {
        "use strict";
        i("5b1b")
    },
    a7c5: function(e, t, i) {},
    aaf2: function(e, t, i) {},
    b3ce: function(e, t, i) {
        "use strict";
        i("bdee")
    },
    b57d: function(e, t, i) {
        "use strict";
        i("a7c5")
    },
    bdee: function(e, t, i) {},
    c559: function(e, t, i) {},
    d438: function(e, t, i) {
        "use strict";
        i("c559")
    },
    ed57: function(e, t, i) {},
    f560: function(e, t, i) {},
    fe0f: function(e, t, i) {},
    fecf: function(e, t, i) {}
});
//# sourceMappingURL=app.38791b3e.js.map