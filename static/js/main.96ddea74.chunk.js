(this["webpackJsonpbedrocklauncher.github.io"] =
  this["webpackJsonpbedrocklauncher.github.io"] || []).push([
  [0],
  Array(24).concat([
    function (e, t, n) {},
    function (e, t, n) {},
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        c,
        a = n(1),
        i = n.n(a),
        l = n(26),
        s = n.n(l),
        o = (n(32), n.p + "static/media/CarJem_standalone.19a73997.gif"),
        d = n.p + "static/media/CoolAbhi1290.382eb5b0.png",
        u = n(0),
        h = function (e) {
          var t = e.label,
            n = e.link,
            r = e.icon,
            c = e.title,
            a = e.description;
          return Object(u.jsxs)("div", {
            className: "footer-card-item",
            children: [
              Object(u.jsx)("div", {
                className: "footer-card-icon",
                children: Object(u.jsx)("a", {
                  "aria-label": t,
                  href: n,
                  rel: "noreferrer",
                  target: "_blank",
                  children: Object(u.jsx)("img", { src: r, alt: "" }),
                }),
              }),
              Object(u.jsx)("p", { children: c }),
              Object(u.jsx)("span", { children: a }),
            ],
          });
        },
        b = n(2),
        j = function (e) {
          var t = e.label,
            n = e.goTo,
            r = e.children;
          return Object(u.jsx)("li", {
            className: "footer-link",
            children: n.startsWith("http")
              ? Object(u.jsx)("a", {
                  "aria-label": t,
                  href: n,
                  rel: "noreferrer",
                  target: "_blank",
                  children: r,
                })
              : Object(u.jsx)(b.b, {
                  "aria-label": t,
                  to: n,
                  onClick: function () {
                    return window.scroll(0, 0);
                  },
                  children: Object(u.jsx)(u.Fragment, { children: r }),
                }),
          });
        },
        p = function () {
          var e = new Date().getFullYear();
          return Object(u.jsx)("div", {
            className: "footer",
            children: Object(u.jsxs)("div", {
              className: "container",
              children: [
                Object(u.jsx)("nav", {
                  children: Object(u.jsxs)("ul", {
                    children: [
                      Object(u.jsx)(j, {
                        label: "credits",
                        goTo: "/credits",
                        children: "Credits",
                      }),
                      Object(u.jsx)(j, {
                        label: "repo link",
                        goTo: "https://github.com/BedrockLauncher/BedrockLauncher",
                        children: "Source",
                      }),
                      Object(u.jsx)(j, {
                        label: "license link",
                        goTo: "https://github.com/BedrockLauncher/BedrockLauncher/tree/master/docs/LICENSE.md",
                        children: "License",
                      }),
                      Object(u.jsx)(j, {
                        label: "releases link",
                        goTo: "https://github.com/BedrockLauncher/BedrockLauncher/releases",
                        children: "Releases",
                      }),
                    ],
                  }),
                }),
                Object(u.jsxs)("div", {
                  className: "footer-cards",
                  children: [
                    Object(u.jsx)(h, {
                      label: "Carjem",
                      link: "https://carjem.carrd.co/",
                      icon: o,
                      title: "Carjem",
                      description: "Creator of Bedrock Launcher",
                    }),
                    Object(u.jsx)(h, {
                      label: "Tr\xe9sAbhi",
                      link: "https://tresabhi.github.io/",
                      icon: d,
                      title: "Tr\xe9sAbhi",
                      description: "Creator of Bedrock Launcher's Website",
                    }),
                    Object(u.jsx)(h, {
                      label: "KalmeMarq",
                      link: "https://github.com/KalmeMarq",
                      icon: "https://github.com/KalmeMarq.png?size=80",
                      title: "KalmeMarq",
                      description: "Developer of Bedrock Launcher's Website",
                    }),
                  ],
                }),
                Object(u.jsxs)(b.b, {
                  to: "/credits",
                  onClick: function () {
                    return window.scroll(0, 0);
                  },
                  className: "copyright",
                  children: [
                    "Carjem ",
                    "".concat(e > 2021 ? "2021-" : "").concat(e),
                    " \xa9 Not associated or approved by Mojang",
                  ],
                }),
              ],
            }),
          });
        },
        g = n(4),
        f = ["title", "titleId"];
      function m() {
        return (
          (m = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          m.apply(this, arguments)
        );
      }
      function O(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function L(e, t) {
        var n = e.title,
          i = e.titleId,
          l = O(e, f);
        return a.createElement(
          "svg",
          m(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              style: { isolation: "isolate" },
              viewBox: "0 0 16 16",
              width: "16pt",
              height: "16pt",
              ref: t,
              "aria-labelledby": i,
            },
            l
          ),
          n ? a.createElement("title", { id: i }, n) : null,
          r ||
            (r = a.createElement(
              "defs",
              null,
              a.createElement(
                "clipPath",
                { id: "_clipPath_mQVMvFIZoKmgp5BBGbPd3PpCIfugN0Hp" },
                a.createElement("rect", { width: 16, height: 16 })
              )
            )),
          a.createElement(
            "g",
            { clipPath: "url(#_clipPath_mQVMvFIZoKmgp5BBGbPd3PpCIfugN0Hp)" },
            a.createElement("rect", {
              width: 16,
              height: 16,
              style: { fill: "rgb(0,0,0)" },
              fillOpacity: 0,
            }),
            c ||
              (c = a.createElement("path", {
                d: " M 1 14 L 1 13 L 2 13 L 2 12 L 3 12 L 3 11 L 4 11 L 4 10 L 5 10 L 5 9 L 6 9 L 6 7 L 5 7 L 5 6 L 4 6 L 4 5 L 3 5 L 3 4 L 2 4 L 2 3 L 1 3 L 1 2 L 0 2 L 0 0 L 2 0 L 2 1 L 3 1 L 3 2 L 4 2 L 4 3 L 5 3 L 5 4 L 6 4 L 6 5 L 7 5 L 7 6 L 9 6 L 9 5 L 10 5 L 10 4 L 11 4 L 11 4 L 11 3 L 12 3 L 12 2 L 13 2 L 13 2 L 13 1 L 14 1 L 14 0 L 14 0 L 16 0 L 16 2 L 15 2 L 15 2 L 15 3 L 14 3 L 14 4 L 13 4 L 13 4 L 13 5 L 12 5 L 12 6 L 11 6 L 11 6 L 11 7 L 10 7 L 10 9 L 11 9 L 11 10 L 12 10 L 12 11 L 13 11 L 13 12 L 14 12 L 14 13 L 15 13 L 15 14 L 16 14 L 16 16 L 14 16 L 14 15 L 14 15 L 14 15 L 14 15 L 14 15 L 14 15 L 14 15 L 13 15 L 13 14 L 12 14 L 12 13 L 11 13 L 11 12 L 10 12 L 10 11 L 9 11 L 9 10 L 7 10 L 7 11 L 6 11 L 6 12 L 5 12 L 5 13 L 4 13 L 4 14 L 3 14 L 3 15 L 2 15 L 2 16 L 0 16 L 0 14 L 1 14 Z ",
                fill: "rgb(255,255,255)",
              }))
          )
        );
      }
      var x,
        w,
        v = a.forwardRef(L),
        y = (n.p, ["title", "titleId"]);
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          C.apply(this, arguments)
        );
      }
      function A(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function E(e, t) {
        var n = e.title,
          r = e.titleId,
          c = A(e, y);
        return a.createElement(
          "svg",
          C(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              style: { isolation: "isolate" },
              viewBox: "0 0 16 16",
              width: "16pt",
              height: "16pt",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          x ||
            (x = a.createElement(
              "defs",
              null,
              a.createElement(
                "clipPath",
                { id: "_clipPath_F010iMyuMpKQIqOnodEWM47ZJ5QrGyoF" },
                a.createElement("rect", { width: 16, height: 16 })
              )
            )),
          a.createElement(
            "g",
            { clipPath: "url(#_clipPath_F010iMyuMpKQIqOnodEWM47ZJ5QrGyoF)" },
            a.createElement("rect", {
              width: 16,
              height: 16,
              style: { fill: "rgb(0,0,0)" },
              fillOpacity: 0,
            }),
            w ||
              (w = a.createElement("path", {
                d: " M 15 4 L 15 3 L 0 3 L 0 3 L 0 4 L 1 4 L 1 5 L 16 5 L 16 4 L 15 4 Z  M 15 8 L 15 7 L 0 7 L 0 7 L 0 8 L 1 8 L 1 9 L 16 9 L 16 8 L 15 8 L 15 8 L 15 8 Z  M 15 12 L 15 11 L 0 11 L 0 12 L 1 12 L 1 13 L 16 13 L 16 12 L 15 12 L 15 12 L 15 12 L 15 12 Z ",
                fillRule: "evenodd",
                fill: "rgb(255,255,255)",
              }))
          )
        );
      }
      var k,
        I,
        P = a.forwardRef(E),
        B = (n.p, ["title", "titleId"]);
      function Q() {
        return (
          (Q = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Q.apply(this, arguments)
        );
      }
      function H(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function S(e, t) {
        var n = e.title,
          r = e.titleId,
          c = H(e, B);
        return a.createElement(
          "svg",
          Q(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              style: { isolation: "isolate" },
              viewBox: "0 0 16 16",
              width: "16pt",
              height: "16pt",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          k ||
            (k = a.createElement(
              "defs",
              null,
              a.createElement(
                "clipPath",
                { id: "_clipPath_q76hJrtrLHSbJ3Ws6nKV5ttHjIR1D1q4" },
                a.createElement("rect", { width: 16, height: 16 })
              )
            )),
          I ||
            (I = a.createElement(
              "g",
              { clipPath: "url(#_clipPath_q76hJrtrLHSbJ3Ws6nKV5ttHjIR1D1q4)" },
              a.createElement("path", {
                d: " M 12 13 L 11 13 L 11 12 L 10 12 L 10 11 L 10 11 L 9 11 L 9 10 L 8 10 L 8 10 L 3 10 L 3 9 L 3 9 L 2 9 L 2 3 L 3 3 L 3 2 L 3 2 L 9 2 L 9 3 L 9 3 L 10 3 L 10 8 L 10 9 L 10 9 L 11 9 L 11 10 L 12 10 L 12 11 L 12 11 L 13 11 L 13 12 L 14 12 L 14 14 L 12 14 L 12 13 Z  M 8 4 L 4 4 L 4 8 L 8 8 L 8 4 L 8 4 L 8 4 L 8 4 L 8 4 L 8 4 Z ",
                fillRule: "evenodd",
                fill: "rgb(255,255,255)",
              })
            ))
        );
      }
      var M,
        N,
        _ = a.forwardRef(S),
        T =
          (n.p,
          n(39),
          function (e) {
            var t = e.isOpen,
              n = e.closeNav,
              r = Object(a.useRef)(null);
            return (
              Object(a.useEffect)(
                function () {
                  var e = function (e) {
                    t &&
                      null !== r.current &&
                      !r.current.contains(e.target) &&
                      n();
                  };
                  return (
                    document.addEventListener("mousedown", e),
                    function () {
                      return document.removeEventListener("mousedown", e);
                    }
                  );
                },
                [t, n]
              ),
              Object(u.jsx)("div", {
                className: "searchsidebar" + (t ? " open" : ""),
                ref: r,
                children: Object(u.jsxs)("div", {
                  className: "container",
                  children: [
                    Object(u.jsx)("input", {
                      type: "text",
                      placeholder: "search",
                    }),
                    Object(u.jsx)("div", { className: "search-results" }),
                  ],
                }),
              })
            );
          }),
        F =
          (n(40),
          function (e) {
            window.confirm(
              "Note: You are about to download Bedrock Launcher. Please be aware this launcher does not pirate Minecraft. You must either purchase the game, or have Gamepass in order to play."
            ) || e.preventDefault();
          }),
        R = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            r = e.closeNav,
            c = Object(a.useRef)(null);
          return (
            Object(a.useEffect)(
              function () {
                var e = function (e) {
                  t &&
                    null !== c.current &&
                    !c.current.contains(e.target) &&
                    r();
                };
                return (
                  document.addEventListener("mousedown", e),
                  function () {
                    return document.removeEventListener("mousedown", e);
                  }
                );
              },
              [t, r]
            ),
            Object(u.jsx)("div", {
              className: "sidebar" + (t ? " open" : ""),
              ref: c,
              children: Object(u.jsx)("div", {
                className: "container",
                children: Object(u.jsxs)("nav", {
                  children: [
                    Object(u.jsx)("h3", { children: "Categories" }),
                    Object(u.jsx)("h4", { children: "FAQ" }),
                    Object(u.jsxs)("ul", {
                      children: [
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/faq",
                            onClick: n,
                            children: "FAQ",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/faq/data",
                            onClick: n,
                            children: "Data FAQ",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/faq/accounts",
                            onClick: n,
                            children: "Accounts FAQ",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/faq/versions",
                            onClick: n,
                            children: "Versions FAQ",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/faq/misc",
                            onClick: n,
                            children: "Miscellaneous FAQ",
                          }),
                        }),
                      ],
                    }),
                    Object(u.jsx)("h4", { children: "Releases" }),
                    Object(u.jsxs)("ul", {
                      children: [
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/releases",
                            onClick: n,
                            children: "Releases",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/releases/public",
                            onClick: n,
                            children: "Public Releases",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/releases/beta",
                            onClick: n,
                            children: "Beta Releases",
                          }),
                        }),
                      ],
                    }),
                    Object(u.jsx)("h3", { children: "Docs" }),
                    Object(u.jsx)("h4", { children: "Dev Info" }),
                    Object(u.jsxs)("ul", {
                      children: [
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://github.com/BedrockLauncher/BedrockLauncher/",
                            onClick: n,
                            children: "Launcher Source",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://github.com/BedrockLauncher/BedrockLauncher.github.io",
                            onClick: n,
                            children: "Website Source",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://crowdin.com/projects/bedrocklauncher",
                            onClick: n,
                            children: "Localization",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/docs/dev/compiling",
                            onClick: n,
                            children: "Compiling",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/docs/dev/contributing",
                            onClick: n,
                            children: "Contributing",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/docs/dev/dev-software-prerequisites",
                            onClick: n,
                            children: "Dev Software Prerequisites",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/docs/dev/software-prerequisites",
                            onClick: n,
                            children: "Software Prerequisites",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/docs/dev/hardware-prerequisites",
                            onClick: n,
                            children: "Hardware Prerequisites",
                          }),
                        }),
                      ],
                    }),
                    Object(u.jsx)("h4", { children: "Legal" }),
                    Object(u.jsxs)("ul", {
                      children: [
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/docs/legal/code-of-conduct",
                            onClick: n,
                            children: "Code of Conduct",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/docs/legal/disclaimers",
                            onClick: n,
                            children: "Disclaimers",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)(b.b, {
                            to: "/docs/legal/license",
                            onClick: n,
                            children: "License",
                          }),
                        }),
                      ],
                    }),
                    Object(u.jsx)("h3", { children: "Others" }),
                    Object(u.jsxs)("ul", {
                      children: [
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)("a", {
                            rel: "noreferrer",
                            href: "/downloads",
                            onClick: F,
                            children: "Download Launcher",
                          }),
                        }),
                        Object(u.jsx)("li", {
                          children: Object(u.jsx)("a", {
                            rel: "noreferrer",
                            href: "/search",
                            children: "Search",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        U =
          (n(41),
          function () {
            var e = Object(a.useState)(!1),
              t = Object(g.a)(e, 2),
              n = t[0],
              r = t[1],
              c = Object(a.useState)(!1),
              i = Object(g.a)(c, 2),
              l = i[0],
              s = i[1],
              o = function () {
                l && !n && s(!1), r(!n);
              };
            return Object(u.jsx)("header", {
              className: "navbar",
              children: Object(u.jsxs)("div", {
                className: "container",
                children: [
                  Object(u.jsxs)(b.b, {
                    to: "/",
                    className: "nav-logo",
                    onClick: function () {
                      return window.scroll(0, 0);
                    },
                    children: [
                      Object(u.jsx)("img", {
                        src: "data:image/png;base64,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",
                        alt: "",
                      }),
                      "Bedrock Launcher Lite",
                    ],
                  }),
                  Object(u.jsx)("nav", {
                    className: "header-nav",
                    children: Object(u.jsxs)("ul", {
                      children: [
                        Object(u.jsx)(b.b, {
                          to: "/search",
                          className: "search-btn",
                          children: l
                            ? Object(u.jsx)(v, { className: "cancel-icon" })
                            : Object(u.jsx)(_, {}),
                        }),
                        Object(u.jsx)("button", {
                          className: "hamburger-btn",
                          onClick: o,
                          children: n
                            ? Object(u.jsx)(v, { className: "cancel-icon" })
                            : Object(u.jsx)(P, {}),
                        }),
                        Object(u.jsx)(T, {
                          isOpen: l,
                          closeNav: function () {
                            return s(!1);
                          },
                        }),
                        Object(u.jsx)(R, {
                          isOpen: n,
                          closeNav: function () {
                            return r(!1);
                          },
                          onClose: o,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }),
        V = n(21),
        q =
          (n(42),
          function (e) {
            var t = e.content,
              n = e.width,
              r = e.type,
              c = e.label,
              a = e.to,
              i = e.children,
              l = e.target,
              s = e.rel,
              o = e.onClick,
              d = e.className,
              h = e.disabled;
            return Object(u.jsx)(u.Fragment, {
              children:
                "button" === r
                  ? Object(u.jsx)("button", {
                      disabled: h,
                      "aria-disabled": h ? "true" : "false",
                      className:
                        "button-text" +
                        (h ? " disabled" : "") +
                        ("icon" === (null !== t && void 0 !== t ? t : "text")
                          ? " button-icon"
                          : "") +
                        " " +
                        (null !== d && void 0 !== d ? d : ""),
                      "aria-label": c,
                      onClick: o,
                      style: {
                        width: null !== n && void 0 !== n ? n : "max-content",
                      },
                      children: i,
                    })
                  : "route-link" === r
                  ? Object(u.jsx)(b.b, {
                      to: null !== a && void 0 !== a ? a : "/",
                      className:
                        "button-text" +
                        ("icon" === (null !== t && void 0 !== t ? t : "text")
                          ? " button-icon"
                          : "") +
                        " " +
                        (null !== d && void 0 !== d ? d : ""),
                      rel: s,
                      target: l,
                      "aria-label": c,
                      onClick: o,
                      style: {
                        width: null !== n && void 0 !== n ? n : "max-content",
                      },
                      children: Object(u.jsx)(u.Fragment, { children: i }),
                    })
                  : Object(u.jsx)("a", {
                      href: a,
                      className:
                        "button-text" +
                        ("icon" === (null !== t && void 0 !== t ? t : "text")
                          ? " button-icon"
                          : "") +
                        " " +
                        (null !== d && void 0 !== d ? d : ""),
                      rel: s,
                      target: l,
                      "aria-label": c,
                      onClick: o,
                      style: {
                        width: null !== n && void 0 !== n ? n : "max-content",
                      },
                      children: i,
                    }),
            });
          }),
        D = [
          { id: "ss-8ee2353d", img: "%PUBLIC_PATH%/images/home_tab.png" },
          {
            id: "ss-89a37837",
            title: "Versions",
            description:
              "Get access to almost all versions and switch between them in an instant.",
            img: "%PUBLIC_PATH%/images/version_chooser_full.png",
          },
          {
            id: "ss-412b6f3d",
            title: "Version Management",
            description: "Add as many versions as you wish with ease!",
            img: "%PUBLIC_PATH%/images/version_manager.png",
          },
          {
            id: "ss-f36353e8",
            title: "Settings",
            description: "Tweak every nook and cranny to your heart's content",
            img: "%PUBLIC_PATH%/images/general_settings_tab.png",
          },
          {
            id: "ss-d59132d7",
            title: "Themes",
            description: "Your launcher, your theme!",
            img: "%PUBLIC_PATH%/images/themes.png",
          },
        ],
        W = ["title", "titleId"];
      function J() {
        return (
          (J = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          J.apply(this, arguments)
        );
      }
      function Y(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function X(e, t) {
        var n = e.title,
          r = e.titleId,
          c = Y(e, W);
        return a.createElement(
          "svg",
          J(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              style: { isolation: "isolate" },
              viewBox: "0 0 16 16",
              width: "16pt",
              height: "16pt",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          M ||
            (M = a.createElement(
              "defs",
              null,
              a.createElement(
                "clipPath",
                { id: "_clipPath_HfXw3Q4bGMm3eEPXaVMzS4LKsql5efcC" },
                a.createElement("rect", { width: 16, height: 16 })
              )
            )),
          N ||
            (N = a.createElement(
              "g",
              { clipPath: "url(#_clipPath_HfXw3Q4bGMm3eEPXaVMzS4LKsql5efcC)" },
              a.createElement("path", {
                d: " M 12 6 L 11 6 L 11 7 L 10 7 L 10 8 L 9 8 L 9 9 L 7 9 L 7 8 L 6 8 L 6 7 L 5 7 L 5 6 L 4 6 L 4 5 L 1 5 L 1 6 L 2 6 L 2 7 L 3 7 L 3 8 L 4 8 L 4 9 L 5 9 L 5 10 L 6 10 L 6 11 L 10 11 L 10 10 L 11 10 L 11 9 L 12 9 L 12 8 L 13 8 L 13 7 L 14 7 L 14 6 L 15 6 L 15 5 L 12 5 L 12 6 Z ",
                fill: "rgb(255,255, 255)",
              })
            ))
        );
      }
      var G,
        K,
        z = a.forwardRef(X),
        Z = (n.p, ["title", "titleId"]);
      function $() {
        return (
          ($ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          $.apply(this, arguments)
        );
      }
      function ee(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function te(e, t) {
        var n = e.title,
          r = e.titleId,
          c = ee(e, Z);
        return a.createElement(
          "svg",
          $(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              style: { isolation: "isolate" },
              viewBox: "0 0 16 16",
              width: "16pt",
              height: "16pt",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          G ||
            (G = a.createElement(
              "defs",
              null,
              a.createElement(
                "clipPath",
                { id: "_clipPath_YBAlETs69yfvjrXX3CGsnMMneviXQNJf" },
                a.createElement("rect", { width: 16, height: 16 })
              )
            )),
          a.createElement(
            "g",
            { clipPath: "url(#_clipPath_YBAlETs69yfvjrXX3CGsnMMneviXQNJf)" },
            a.createElement("rect", {
              width: 16,
              height: 16,
              style: { fill: "rgb(0,0,0)" },
              fillOpacity: 0,
            }),
            K ||
              (K = a.createElement("path", {
                d: " M 14.857 12.571 L 14.857 13.714 L 11.429 13.714 L 11.429 12.571 L 12.571 12.571 L 12.571 11.429 L 11.429 11.429 L 11.429 12.571 L 4.571 12.571 L 4.571 11.429 L 3.429 11.429 L 3.429 12.571 L 4.571 12.571 L 4.571 13.714 L 1.143 13.714 L 1.143 12.571 L 0 12.571 L 0 11.429 L 0 10.286 L 0 8 L 0 6.857 L 1.143 6.857 L 1.143 5.714 L 1.143 4.571 L 2.286 4.571 L 2.286 3.429 L 3.429 3.429 L 3.429 4.571 L 4.571 4.571 L 4.571 3.429 L 11.429 3.429 L 11.429 4.571 L 12.571 4.571 L 12.571 3.429 L 13.714 3.429 L 13.714 4.571 L 14.857 4.571 L 14.857 5.714 L 14.857 6.857 L 16 6.857 L 16 8 L 16 10.286 L 16 11.429 L 16 12.571 L 14.857 12.571 Z  M 6.857 8 L 4.571 8 L 4.571 10.286 L 6.857 10.286 L 6.857 8 Z  M 11.429 8 L 9.143 8 L 9.143 10.286 L 11.429 10.286 L 11.429 8 Z  M 3.429 2.286 L 4.571 2.286 L 4.571 3.429 L 3.429 3.429 L 3.429 2.286 Z  M 11.429 2.286 L 12.571 2.286 L 12.571 3.429 L 11.429 3.429 L 11.429 2.286 Z ",
                fill: "rgb(255,255,255)",
              }))
          )
        );
      }
      var ne,
        re,
        ce,
        ae,
        ie = a.forwardRef(te),
        le = (n.p, ["title", "titleId"]);
      function se() {
        return (
          (se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          se.apply(this, arguments)
        );
      }
      function oe(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function de(e, t) {
        var n = e.title,
          r = e.titleId,
          c = oe(e, le);
        return a.createElement(
          "svg",
          se(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              fill: "white",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          ne ||
            (ne = a.createElement("polygon", {
              points: "11 2 11 1 10 1 9 1 9 2 10 2 11 2",
            })),
          re ||
            (re = a.createElement("path", {
              d: "M13,7V5H12V4H11V3H9V2H8V4H7V5H6V6H5V5H3V4H2V3H1V8H2V9H3v1H4v1H5v1H2v1H3v1H5v1H9V14h1V13h1V12h1V11h1V9h2V8H14V7ZM11,6V7H9V5h2Z",
            })),
          ce ||
            (ce = a.createElement("rect", {
              x: 14,
              y: 6,
              width: 1,
              height: 1,
            })),
          ae ||
            (ae = a.createElement("rect", { x: 1, y: 11, width: 1, height: 1 }))
        );
      }
      var ue,
        he = a.forwardRef(de),
        be = (n.p, ["title", "titleId"]);
      function je() {
        return (
          (je = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          je.apply(this, arguments)
        );
      }
      function pe(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function ge(e, t) {
        var n = e.title,
          r = e.titleId,
          c = pe(e, be);
        return a.createElement(
          "svg",
          je(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              fill: "white",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          ue ||
            (ue = a.createElement("path", {
              d: "M14,4V3H2v1H1v8h1v1h12v-1h1V4H14z M10,8H9v1H8v1H7V5h1v1h1v1h1V8z",
            }))
        );
      }
      var fe,
        me,
        Oe,
        Le,
        xe,
        we,
        ve,
        ye,
        Ce,
        Ae,
        Ee,
        ke,
        Ie,
        Pe,
        Be,
        Qe,
        He = a.forwardRef(ge),
        Se = (n.p, n.p + "static/media/logo.b56456b0.png"),
        Me = [
          "%PUBLIC_PATH%/images/banners/1.0_pocket_edition.jpg",
          "%PUBLIC_PATH%/images/banners/1.08_cats_and_pandas.jpg",
          "%PUBLIC_PATH%/images/banners/1.09_combat_update_java.jpg",
          "%PUBLIC_PATH%/images/banners/1.11_exploration_update_java.jpg",
          "%PUBLIC_PATH%/images/banners/1.12_world_of_color_update_java.jpg",
          "%PUBLIC_PATH%/images/banners/1.13_technically_updated_java.jpg",
          "%PUBLIC_PATH%/images/banners/1.13_update_aquatic.jpg",
          "%PUBLIC_PATH%/images/banners/1.14_village_pillage_update.jpg",
          "%PUBLIC_PATH%/images/banners/1.15_buzzy_bees_update.jpg",
          "%PUBLIC_PATH%/images/banners/1.16_nether_update.jpg",
          "%PUBLIC_PATH%/images/banners/bedrock_master.jpg",
          "%PUBLIC_PATH%/images/banners/bedrock_standard.jpg",
          "%PUBLIC_PATH%/images/banners/original_image.jpg",
          "%PUBLIC_PATH%/images/banners/other_dungeons.jpg",
        ],
        Ne = function () {
          var e = Object(a.useState)(
              Me.map(function (e) {
                return e.replace("%PUBLIC_PATH%", "");
              })
            ),
            t = Object(g.a)(e, 1)[0],
            n = Object(a.useState)(Math.round(Math.random() * (Me.length - 1))),
            r = Object(g.a)(n, 2),
            c = r[0],
            i = r[1];
          Me.forEach(function (e) {
            new Image().src = e.replaceAll("%PUBLIC_PATH%", "");
          }),
            Object(a.useEffect)(function () {
              var e = setInterval(function () {
                i((c + 1) % (t.length - 1));
              }, 6900);
              return function () {
                return clearInterval(e);
              };
            });
          return Object(u.jsxs)("div", {
            className: "main-section",
            style: { backgroundImage: "url(" + t[c] + ")" },
            children: [
              Object(u.jsx)("img", { src: Se, alt: "", className: "logo" }),
              Object(u.jsx)("h3", {
                children:
                  "An unofficial Minecraft Bedrock for Windows Launcher",
              }),
              Object(u.jsx)("h3", {
                style: { color: "gray", fontSize: "0.75rem" },
                children:
                  "\u26a0\ufe0f Bedrock Launcher does not pirate Minecraft; you need to own a legal copy \u26a0\ufe0f",
              }),
              Object(u.jsxs)("div", {
                className: "buttons-group0",
                children: [
                  Object(u.jsx)(q, {
                    type: "link",
                    to: "https://github.com/bedrockLauncher/BedrockLauncher/releases/latest/",
                    rel: "noreferrer",
                    target: "_blank",
                    width: 160,
                    onClick: F,
                    children: "Download",
                  }),
                  Object(u.jsx)(q, {
                    type: "link",
                    to: "https://github.com/BedrockLauncher/BedrockLauncher",
                    rel: "noreferrer",
                    target: "_blank",
                    width: 160,
                    children: "Source",
                  }),
                  Object(u.jsx)(q, {
                    type: "link",
                    to: "https://www.paypal.com/donate/?cmd=_donations&business=RNZMRCMNX3SJY&currency_code=USD&source=url",
                    rel: "noreferrer",
                    target: "_blank",
                    width: 160,
                    children: "Donate",
                  }),
                ],
              }),
              Object(u.jsxs)("div", {
                className: "buttons-group1",
                children: [
                  Object(u.jsx)(q, {
                    type: "link",
                    content: "icon",
                    to: "https://twitter.com/carter5467_99",
                    rel: "noreferrer",
                    target: "_blank",
                    width: 40,
                    children: Object(u.jsx)(he, {
                      "aria-label": "twitter-icon",
                    }),
                  }),
                  Object(u.jsx)(q, {
                    type: "link",
                    content: "icon",
                    to: "https://www.youtube.com/channel/UC4-VHCZD7eLdxRr5aUXAQ5w",
                    rel: "noreferrer",
                    target: "_blank",
                    width: 40,
                    children: Object(u.jsx)(He, {
                      "aria-label": "youtube-icon",
                    }),
                  }),
                  Object(u.jsx)(q, {
                    type: "link",
                    content: "icon",
                    target: "_blank",
                    to: "https://discord.gg/Ar5SRBZcqn",
                    width: 40,
                    children: Object(u.jsx)(ie, {
                      "aria-label": "discord-icon",
                    }),
                  }),
                ],
              }),
              Object(u.jsx)("div", {
                className: "arrow-scroll",
                children: Object(u.jsx)(z, {
                  className: "arrow-down",
                  onClick: function () {
                    var e = window.innerHeight;
                    window.scroll(0, e - 100);
                  },
                }),
              }),
            ],
          });
        },
        _e =
          (n(43),
          function (e) {
            var t = e.info,
              n = e.invertOrder;
            return Object(u.jsx)("section", {
              className: "home-show-section" + (n ? " inverted" : ""),
              children:
                t.title && t.description
                  ? Object(u.jsxs)(u.Fragment, {
                      children: [
                        Object(u.jsxs)("div", {
                          className: "cont",
                          children: [
                            Object(u.jsx)("h3", { children: t.title }),
                            Object(u.jsx)("p", { children: t.description }),
                          ],
                        }),
                        Object(u.jsx)("div", {
                          className: "img",
                          children: Object(u.jsx)("img", {
                            src: t.img,
                            alt: t.title,
                          }),
                        }),
                      ],
                    })
                  : Object(u.jsx)("img", { src: t.img, alt: "" }),
            });
          }),
        Te =
          (n(44),
          function () {
            return (
              (document.title = "Home - Bedrock Launcher"),
              Object(u.jsxs)(u.Fragment, {
                children: [
                  Object(u.jsx)(Ne, {}),
                  Object(u.jsx)("main", {
                    className: "home-show-sections",
                    children: Object(u.jsxs)("div", {
                      className: "container",
                      children: [
                        D.map(function (e) {
                          return Object(V.a)(
                            Object(V.a)({}, e),
                            {},
                            { img: e.img.replaceAll("%PUBLIC_PATH%", "") }
                          );
                        }).map(function (e, t) {
                          return Object(u.jsx)(
                            _e,
                            { info: e, invertOrder: t % 2 !== 0 },
                            e.id
                          );
                        }),
                        Object(u.jsx)(q, {
                          to: "https://github.com/BedrockLauncher/BedrockLauncher",
                          target: "_blank",
                          rel: "noreferrer",
                          label: "repo link",
                          className: "being-built",
                          children: "What's being built?",
                        }),
                      ],
                    }),
                  }),
                ],
              })
            );
          }),
        Fe = n(14),
        Re = (n(24), n(17)),
        Ue = ["title", "titleId"];
      function Ve() {
        return (
          (Ve = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ve.apply(this, arguments)
        );
      }
      function qe(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function De(e, t) {
        var n = e.title,
          r = e.titleId,
          c = qe(e, Ue);
        return a.createElement(
          "svg",
          Ve(
            {
              id: "Capa_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 213.333 213.333",
              style: { enableBackground: "new 0 0 213.333 213.333" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          fe ||
            (fe = a.createElement(
              "g",
              null,
              a.createElement(
                "g",
                null,
                a.createElement("polygon", {
                  points: "0,53.333 106.667,160 213.333,53.333  ",
                })
              )
            )),
          me || (me = a.createElement("g", null)),
          Oe || (Oe = a.createElement("g", null)),
          Le || (Le = a.createElement("g", null)),
          xe || (xe = a.createElement("g", null)),
          we || (we = a.createElement("g", null)),
          ve || (ve = a.createElement("g", null)),
          ye || (ye = a.createElement("g", null)),
          Ce || (Ce = a.createElement("g", null)),
          Ae || (Ae = a.createElement("g", null)),
          Ee || (Ee = a.createElement("g", null)),
          ke || (ke = a.createElement("g", null)),
          Ie || (Ie = a.createElement("g", null)),
          Pe || (Pe = a.createElement("g", null)),
          Be || (Be = a.createElement("g", null)),
          Qe || (Qe = a.createElement("g", null))
        );
      }
      var We = a.forwardRef(De);
      n.p, n(45);
      function Je(e, t) {
        if (!t) return e;
        return e.replace(/(((https?:\/\/)|(www\.))[^\s]+)/g, function (e) {
          var t = e;
          return (
            t.match("^https?://") || (t = "http://" + t),
            '<a href="' +
              (t = t.replace("</li>", "")) +
              '" target="_blank" rel="noopener noreferrer">' +
              e +
              "</a>"
          );
        });
      }
      var Ye,
        Xe,
        Ge,
        Ke,
        ze,
        Ze,
        $e,
        et,
        tt,
        nt,
        rt,
        ct,
        at,
        it,
        lt,
        st,
        ot = function (e) {
          var t = e.title,
            n = e.desc,
            r = e.githubURL,
            c = e.usesMD,
            i = e.replaceURLs,
            l = e.style,
            s = Object(a.useState)(!1),
            o = Object(g.a)(s, 2),
            d = o[0],
            h = o[1],
            b = Object(a.useState)(!1),
            j = Object(g.a)(b, 2),
            p = j[0],
            f = j[1],
            m = Object(a.useState)(n.replaceAll("%PUBLIC_PATH%", "")),
            O = Object(g.a)(m, 1)[0],
            L = new Re.Converter(),
            x = function (e) {
              f(!p), h(!d);
            };
          return Object(u.jsxs)("div", {
            className:
              "faqdetails" + (p ? " open-semi" : "") + (d ? " open" : ""),
            style: l,
            children: [
              Object(u.jsxs)("div", {
                className: "faqdetails-header",
                tabIndex: 0,
                onClick: x,
                onKeyDown: function (e) {
                  ("Space" !== e.code && "Enter" !== e.code) ||
                    (e.preventDefault(), x(e.target));
                },
                children: [
                  Object(u.jsx)("span", { children: Object(u.jsx)(We, {}) }),
                  t,
                ],
              }),
              Object(u.jsxs)("div", {
                className: "faqdetails-content" + (c ? " md" : ""),
                children: [
                  Object(u.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: Je(c ? L.makeHtml(O) : O, i),
                    },
                  }),
                  r &&
                    Object(u.jsx)("a", {
                      className: "github-link",
                      href: r,
                      target: "_blank",
                      rel: "noreferrer",
                      children: "View on Github",
                    }),
                ],
              }),
            ],
          });
        },
        dt = n.p + "static/media/1.13_technically_updated_java.2a0c18eb.jpg",
        ut = n.p + "static/media/1.15_buzzy_bees_update.f5d07c6f.jpg",
        ht =
          (n(46),
          Object.assign({
            Parent: function (e) {
              var t = e.children;
              return Object(u.jsx)("div", {
                className: "cat-selection",
                children: t,
              });
            },
            Item: function (e) {
              var t = e.bg,
                n = e.title,
                r = e.description,
                c = e.to;
              return Object(u.jsxs)(b.b, {
                to: c,
                className: "cat-link",
                onClick: function () {
                  window.scroll(0, 0);
                },
                children: [
                  Object(u.jsx)("img", { src: t, alt: "" }),
                  Object(u.jsx)("h4", { children: n }),
                  Object(u.jsx)("p", { children: r }),
                ],
              });
            },
          })),
        bt = ["title", "titleId"];
      function jt() {
        return (
          (jt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          jt.apply(this, arguments)
        );
      }
      function pt(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function gt(e, t) {
        var n = e.title,
          r = e.titleId,
          c = pt(e, bt);
        return a.createElement(
          "svg",
          jt(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 512 512",
              style: { enableBackground: "new 0 0 512 512" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          Ye ||
            (Ye = a.createElement(
              "g",
              null,
              a.createElement(
                "g",
                null,
                a.createElement("path", {
                  d: "M508.875,493.792L353.089,338.005c32.358-35.927,52.245-83.296,52.245-135.339C405.333,90.917,314.417,0,202.667,0 S0,90.917,0,202.667s90.917,202.667,202.667,202.667c52.043,0,99.411-19.887,135.339-52.245l155.786,155.786 c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125C513.042,504.708,513.042,497.958,508.875,493.792z  M202.667,384c-99.979,0-181.333-81.344-181.333-181.333S102.688,21.333,202.667,21.333S384,102.677,384,202.667 S302.646,384,202.667,384z",
                })
              )
            )),
          Xe || (Xe = a.createElement("g", null)),
          Ge || (Ge = a.createElement("g", null)),
          Ke || (Ke = a.createElement("g", null)),
          ze || (ze = a.createElement("g", null)),
          Ze || (Ze = a.createElement("g", null)),
          $e || ($e = a.createElement("g", null)),
          et || (et = a.createElement("g", null)),
          tt || (tt = a.createElement("g", null)),
          nt || (nt = a.createElement("g", null)),
          rt || (rt = a.createElement("g", null)),
          ct || (ct = a.createElement("g", null)),
          at || (at = a.createElement("g", null)),
          it || (it = a.createElement("g", null)),
          lt || (lt = a.createElement("g", null)),
          st || (st = a.createElement("g", null))
        );
      }
      var ft,
        mt,
        Ot,
        Lt,
        xt,
        wt,
        vt,
        yt,
        Ct,
        At,
        Et,
        kt,
        It,
        Pt,
        Bt,
        Qt,
        Ht = a.forwardRef(gt),
        St = (n.p, ["title", "titleId"]);
      function Mt() {
        return (
          (Mt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Mt.apply(this, arguments)
        );
      }
      function Nt(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function _t(e, t) {
        var n = e.title,
          r = e.titleId,
          c = Nt(e, St);
        return a.createElement(
          "svg",
          Mt(
            {
              id: "Capa_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 512.001 512.001",
              style: { enableBackground: "new 0 0 512.001 512.001" },
              xmlSpace: "preserve",
              fill: "white",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          ft ||
            (ft = a.createElement(
              "g",
              null,
              a.createElement(
                "g",
                null,
                a.createElement("path", {
                  stroke: "white",
                  d: "M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z",
                })
              )
            )),
          mt || (mt = a.createElement("g", null)),
          Ot || (Ot = a.createElement("g", null)),
          Lt || (Lt = a.createElement("g", null)),
          xt || (xt = a.createElement("g", null)),
          wt || (wt = a.createElement("g", null)),
          vt || (vt = a.createElement("g", null)),
          yt || (yt = a.createElement("g", null)),
          Ct || (Ct = a.createElement("g", null)),
          At || (At = a.createElement("g", null)),
          Et || (Et = a.createElement("g", null)),
          kt || (kt = a.createElement("g", null)),
          It || (It = a.createElement("g", null)),
          Pt || (Pt = a.createElement("g", null)),
          Bt || (Bt = a.createElement("g", null)),
          Qt || (Qt = a.createElement("g", null))
        );
      }
      var Tt,
        Ft,
        Rt = a.forwardRef(_t),
        Ut =
          (n.p,
          n(47),
          function (e) {
            var t = e.value,
              n = e.results,
              r = e.handleEnter,
              c = e.handleFilter;
            return Object(u.jsxs)("div", {
              className: "searchbox",
              children: [
                Object(u.jsx)(Ht, { className: "search-icon" }),
                Object(u.jsx)("input", {
                  title: "Search",
                  type: "text",
                  value: t,
                  onChange: function (e) {
                    return c && c(e.target.value);
                  },
                  onKeyDown: function (e) {
                    "Enter" === e.code && e.preventDefault(), r && r(e);
                  },
                }),
                "" !== t &&
                  Object(u.jsx)("button", {
                    className: "reset-btn",
                    onClick: function () {
                      return c && c("");
                    },
                    children: Object(u.jsx)(Rt, {}),
                  }),
                n &&
                  "" !== t &&
                  Object(u.jsxs)("p", {
                    className: "results",
                    children: [n, " Results"],
                  }),
              ],
            });
          }),
        Vt = n(9),
        qt = n(12),
        Dt = Object(a.createContext)({ public: [], beta: [] }),
        Wt = function (e) {
          var t = e.children,
            n = Object(a.useState)([]),
            r = Object(g.a)(n, 2),
            c = r[0],
            i = r[1],
            l = Object(a.useState)([]),
            s = Object(g.a)(l, 2),
            o = s[0],
            d = s[1],
            h = (function () {
              var e = Object(qt.a)(
                Object(Vt.a)().mark(function e(t) {
                  var n, r;
                  return Object(Vt.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (e.next = 4),
                            fetch(
                              "https://api.github.com/repos/BedrockLauncher/BedrockLauncher/releases"
                            )
                          );
                        case 4:
                          if (((n = e.sent), t)) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt("return");
                        case 7:
                          return (e.t0 = i), (e.next = 10), n.json();
                        case 10:
                          if (
                            ((e.t1 = e.sent.filter(function (e) {
                              return "0.0.0.0" !== e.name;
                            })),
                            (0, e.t0)(e.t1),
                            t)
                          ) {
                            e.next = 14;
                            break;
                          }
                          return e.abrupt("return");
                        case 14:
                          return (
                            (e.next = 16),
                            fetch(
                              "https://api.github.com/repos/BedrockLauncher/BedrockLauncher-Beta/releases"
                            )
                          );
                        case 16:
                          if (((r = e.sent), t)) {
                            e.next = 19;
                            break;
                          }
                          return e.abrupt("return");
                        case 19:
                          return (e.t2 = d), (e.next = 22), r.json();
                        case 22:
                          (e.t3 = e.sent), (0, e.t2)(e.t3);
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(a.useEffect)(function () {
              var e = !0;
              return (
                h(e),
                function () {
                  e = !1;
                }
              );
            }, []),
            Object(u.jsx)(Dt.Provider, {
              value: { public: c, beta: o },
              children: t,
            })
          );
        },
        Jt = function () {
          document.title = "Releases - Bedrock Launcher";
          var e = Object(a.useContext)(Dt),
            t = Object(a.useState)(0),
            n = Object(g.a)(t, 2),
            r = n[0],
            c = n[1],
            i = Object(a.useState)(""),
            l = Object(g.a)(i, 2),
            s = l[0],
            o = l[1];
          return Object(u.jsxs)("div", {
            className: "releases",
            children: [
              Object(u.jsxs)("section", {
                className: "releases-section",
                children: [
                  Object(u.jsx)("h2", { children: "Releases" }),
                  Object(u.jsx)("p", {
                    children: "Version information for the Bedrock Launcher",
                  }),
                ],
              }),
              Object(u.jsx)("main", {
                children: Object(u.jsxs)("div", {
                  className: "container",
                  children: [
                    Object(u.jsxs)(ht.Parent, {
                      children: [
                        Object(u.jsx)(ht.Item, {
                          to: "/releases/public",
                          bg: dt,
                          title: "Public Releases",
                          description:
                            "Releases that are safe for public usage",
                        }),
                        Object(u.jsx)(ht.Item, {
                          to: "/releases/beta",
                          bg: ut,
                          title: "Beta Releases",
                          description: "Releases that are work in progress",
                        }),
                      ],
                    }),
                    Object(u.jsx)("hr", {}),
                    Object(u.jsxs)("form", {
                      children: [
                        Object(u.jsx)("h3", { children: "Search" }),
                        Object(u.jsx)(Ut, {
                          results: r,
                          value: s,
                          handleFilter: function (t) {
                            o(t),
                              "" === t && c(0),
                              "" !== t &&
                                c(
                                  []
                                    .concat(
                                      Object(Fe.a)(e.public),
                                      Object(Fe.a)(e.beta)
                                    )
                                    .filter(function (e) {
                                      return e.name
                                        .toLowerCase()
                                        .includes(t.toLowerCase());
                                    }).length
                                );
                          },
                        }),
                      ],
                    }),
                    Object(u.jsx)(Dt.Consumer, {
                      children: function (e) {
                        return []
                          .concat(Object(Fe.a)(e.public), Object(Fe.a)(e.beta))
                          .map(function (e) {
                            return Object(u.jsx)(
                              ot,
                              {
                                usesMD: !0,
                                replaceURLs: !0,
                                githubURL: e.html_url,
                                title: e.name,
                                desc: e.body,
                                style: {
                                  display:
                                    "" === s ||
                                    e.name
                                      .toLowerCase()
                                      .includes(s.toLowerCase())
                                      ? "block"
                                      : "none",
                                },
                              },
                              e.id
                            );
                          });
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Yt = n(3),
        Xt = n.p + "static/media/1.08_cats_and_pandas.7022213f.jpg",
        Gt = n.p + "static/media/1.09_combat_update_java.18c9c41e.jpg",
        Kt = n.p + "static/media/other_early_console_era.618fe9af.jpg",
        zt = [
          {
            name: "versions",
            title: "Versions FAQ",
            description:
              "Can't find what you're looking for, try looking here.",
            img: "%PUBLIC_PATH%/images/banners/other_early_console_era.jpg",
          },
          {
            name: "data",
            title: "Data FAQ",
            description: "Issues with your Minecraft worlds, settings, etc?",
            img: "%PUBLIC_PATH%/images/banners/1.13_technically_updated_java.jpg",
          },
          {
            name: "accounts",
            title: "Accounts FAQ",
            description: "Questions about managing Minecraft accounts?",
            img: "%PUBLIC_PATH%/images/banners/1.09_combat_update_java.jpg",
          },
          {
            name: "misc",
            title: "Miscellaneous FAQ",
            description: "Issues with your Minecraft worlds, settings, etc?",
            img: "%PUBLIC_PATH%/images/banners/1.08_cats_and_pandas.jpg",
          },
        ],
        Zt = [
          {
            id: "faq-b751e93b",
            tag: "versions",
            title: "What versions can I access?",
            body: "<p>You can access most of the versions available for download by the Microsoft Store. This includes betas and Previews. We are aware that some versions are missing, and we are working on it.</p>",
          },
          {
            id: "faq-ab59111b",
            tag: "versions",
            title: "Where is the latest release/beta?",
            body: '<p>They can be found in the quick launch prompt:</p><img src="%PUBLIC_PATH%/images/version_chooser.png">',
          },
          {
            id: "faq-560145e1",
            tag: "misc",
            title: "Why isn't my language supported?",
            body: '<p>You can help translate the Launcher <a rel="noneferrer" href="https://crowdin.com/project/bedrocklauncher" target=\'_blank\'>here</a> in your language. Concact <a rel="noneferrer" href="https://crowdin.com/profile/metalmaniac" target=\'_blank\'>here</a> if you have any questions regarding the localization.</p>',
          },
          {
            id: "faq-7a94776d",
            tag: "misc",
            title: "How can I help out in this project?",
            body: '<p>Visit our repositories under the <a rel="noreferrer" href="https://github.com/BedrockLauncher/BedrockLauncher" target=\'_blank\'>Bedrock Launcher</a> GitHub organization. Create a fork, make changes, and pull requests!</p>',
          },
          {
            id: "faq-36d48bd3",
            tag: "misc",
            title: "Why is windows protector blocking the installer?",
            body: "<p>This application is very new, and Windows Defender isn't sure about us yet. As more people use our launcher, Windows will stop prompting people as it will recognize us as not a threat.</p>",
          },
          {
            id: "faq-65c7b97c",
            tag: "misc",
            title: "What platforms does this work on?",
            body: "<p>Only Windows 10/11 for now.</p>",
          },
          {
            id: "faq-683525c9",
            tag: "accounts",
            title: "How do I log in with my accounts?",
            body: '<h5 class="subtle">Creating an account on first launch</h5><p>When launching the launcher for the first time, you\'ll be greeted with this screen:</p><img src="%PUBLIC_PATH%/images/first_launch_welcome.png"><p>Click next.</p><img src="%PUBLIC_PATH%/images/first_launch_one_thing.png"><p>Click next once more and then choose an account you desire to use to launcher Minecraft (this account should own Minecraft For Windows 10). Then click next.</p><img src="%PUBLIC_PATH%/images/first_launch_insider_account.png"><img src="%PUBLIC_PATH%/images/first_launch_almost_there.png"><p>And just like that, you have created an account in your first launch!</p><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_in_launcher.png"><br><br><br><h5 class="subtle">Creating an account after first launch</h5><p>Click on the profiles button.</p><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_in_launcher_click.png"><p>Then click add profile.</p><img src="%PUBLIC_PATH%/images/add_profile_button.png"><p>You\'ll be then greeted by this screen:</p><img src="%PUBLIC_PATH%/images/add_profile_prompt.png"><p>Type in your desired name and click "CREATE"; In this example, I created a profile called <code>Abhi\'s New Profile</code>. Now click on the profiles button again, and voila, your new profile is ready!</p><img src="%PUBLIC_PATH%/images/new_profile_added.png">',
          },
          {
            id: "faq-8aa21b40",
            tag: "accounts",
            title: "Can I play Minecraft without owning it?",
            body: '<p>No, you can\'t! You\'ll have to own a copy of <a rel="noreferrer" href="https://www.microsoft.com/p/p/9nblggh2jhxj" target=\'_blank\'>Minecraft For Windows 10</a> from the <a rel="noreferrer" href="https://www.microsoft.com/" target=\'_blank\'>Microsoft Store</a>.</p>',
          },
          {
            id: "faq-8c9c0b49",
            tag: "accounts",
            title: "How do I play Minecraft Betas/Previews?",
            body: '<p>To play a beta or a Preview, you can either create a custom installation for a specific beta version or play the Latest Beta version provided by default in the launcher.</p><img src="%PUBLIC_PATH%/images/latest_beta.png">',
          },
          {
            id: "faq-bdef087b",
            tag: "accounts",
            title: "Can I use this launcher with my Minecraft Java account?",
            body: "<p>If your Java account has been migrated to a Microsoft account in which Minecraft for Windows 10 edition is owned, then yes, you can play using that account.</p>",
          },
          {
            id: "faq-218e243e",
            tag: "accounts",
            title:
              "Why isn't my Windows Accounts Showing up as Insider Accounts?",
            body: "<p>Check your Web Accounts and make sure that your accounts are registered to your machine.</p>",
          },
          {
            id: "faq-16bd7856",
            tag: "data",
            title: "Why did my worlds disappear?",
            body: '<p>If you had Minecraft worlds already created on your PC before installing the launcher, those worlds should have been moved to a separate folder for security reasons. You can find those folders here:</p><p><code>%userprofile%\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang</code></p><p>In here, you\'ll find two folders:</p><img src="%PUBLIC_PATH%/images/two_folders_after_installation.png"><p>Minecraft accesses <code>com.mojang</code> (for settings, worlds, skins, etc..) by default which gets renamed to <code>com.mojang.default</code> during the installation of Bedrock Launcher.</p><p>To continue using the default installation of Minecraft (from the Microsoft Store), delete the <code>com.mojang</code> folder link and rename <code>com.mojang.default</code> to <code>com.mojang</code>.</p><p>To use the launcher with the Minecraft worlds from before, create a profile in the launcher, download a version, and play. This will create a folder with your profile name in it, and can be found here:</p><p><code>%userprofile%\\AppData\\Roaming\\.minecraft_bedrock\\installations</code></p><p>For example, mine is called <code>CoolAbhi1290</code></p><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_folder.png"><br><br><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_in_launcher.png"><p>And inside of this folder will be the folders of your installations. For example, mine are these:</p><img src="%PUBLIC_PATH%/images/version_folders.png"><p>These folders house data of your installations (inside of <code>packageData</code>). Simply move the contents of <code>com.mojang.default</code> to any of these folder\'s <code>packageData</code> folder to continue playing Minecraft with your worlds.</p>',
          },
          {
            id: "faq-fcbf3cda",
            tag: "data",
            title: "Why do my worlds not show up sometimes?",
            body: '<p>When you create a profile in the launcher, download a version, and play it, a folder is created with your profile name in it, and can be found here:</p><p><code>%userprofile%\\AppData\\Roaming\\.minecraft_bedrock\\installations</code></p><p>For example, mine is called <code>CoolAbhi1290</code></p><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_folder.png"><br><br><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_in_launcher.png"><p>And inside of this folder will be the folders of your installations. For example, mine are these:</p><img src="%PUBLIC_PATH%/images/version_folders.png"><p>These folders house data of your installations (inside of <code>packageData</code>). Simply move the contents of <code>com.mojang.default</code> to any of these folder\'s <code>packageData</code> folder to continue playing Minecraft with your worlds.</p><p>So, installations can only access data from their assigned folders. However, there is a way of accessing the same worlds from the same folder, and can be done so by reading the "How can I access my same worlds in different installations?"</p>',
          },
          {
            id: "faq-e812fef1",
            tag: "data",
            title: "How do I transfer my worlds between versions?",
            body: '<p>Read the "Why do my worlds not show up sometimes?" FAQ to understand how certain insallations access certain folders.</p><p>It\'s pretty straight-forward, just move the world folders, which can be found in <code>/packageData/minecraftWorlds/</code> to a different installation folder.</p>',
          },
          {
            id: "faq-edd0bda2",
            tag: "data",
            title:
              "How can I access my same worlds in different installations?",
            body: '<p>Read the "Why do my worlds not show up sometimes?" FAQ to understand how certain insallations access certain folders.</p><p>Pick an installation folder that you desire all versions to access. For example, I created a folder called <code>Abhi\'s Worlds</code> and transfered all my worlds to it.</p><img src="%PUBLIC_PATH%/images/custom_installation_folder.png"><p>Now, go to the installations tab</p><img src="%PUBLIC_PATH%/images/installations_tab.png"><p>Click the three dots (to open installation configurations)</p><img src="%PUBLIC_PATH%/images/installations_settings.png"><p>In the <code>DIRECTORY</code> input, type in your folder\'s name. In my case, it is <code>Abhi\'s Folders</code>.</p><img src="%PUBLIC_PATH%/images/installation_directory.png"><p>Finally, click save!</p><img src="%PUBLIC_PATH%/images/installation_save.png"><p>Repeat this proccess for each version that you want to be able to access those worlds. In my case, I did it for all versions to mimic Minecraft Java\'s behaviour.</p>',
          },
          {
            id: "faq-dfc054d7",
            tag: "data",
            title: "Why do my settings keep resetting?",
            body: '<p>The main reason behind this could be the same as what happens with the Minecraft Java Launcher: different versions parse settings diffrently, and reset some as they see fit. There is nothing you can do about this.</p><p>One other contributing reason could be that different installations are accessing different insallation folders with diffrent settings. Read "Why do my worlds not show up sometimes?" for more information.</p>',
          },
          {
            id: "faq-205b87e6",
            tag: "misc",
            title: "How do I install Bedrock Launcher?",
            body: "<p>Bedrock Launcher does not have a launcher; hence, you will have to manually place it into <code>C:/Program Files/</code> or wherever else you desire.",
          },
          {
            id: "faq-ce0751aa",
            tag: "misc",
            title: "How do I uninstall Bedrock Launcher?",
            body: "<p>Bedrock Launcher does not have a launcher; hence, the app will not be registered and Windows will not provide a way to uninstall it. You will have to manually remove the build files from wherever they were placed originally.",
          },
        ],
        $t =
          (n(25),
          function () {
            document.title = "FAQ - Bedrock Launcher";
            var e = Object(a.useState)(0),
              t = Object(g.a)(e, 2),
              n = t[0],
              r = t[1],
              c = Object(a.useState)(""),
              i = Object(g.a)(c, 2),
              l = i[0],
              s = i[1];
            return Object(u.jsxs)("div", {
              className: "faq",
              children: [
                Object(u.jsxs)("section", {
                  className: "faq-section",
                  children: [
                    Object(u.jsx)("h2", { children: "FAQ" }),
                    Object(u.jsx)("p", {
                      children: "You have questions, we have answers",
                    }),
                  ],
                }),
                Object(u.jsx)("main", {
                  children: Object(u.jsxs)("div", {
                    className: "container",
                    children: [
                      Object(u.jsxs)(ht.Parent, {
                        children: [
                          Object(u.jsx)(ht.Item, {
                            to: "/faq/data",
                            bg: dt,
                            title: "Your Data",
                            description:
                              "Issues with your Minecraft worlds, settings, etc?",
                          }),
                          Object(u.jsx)(ht.Item, {
                            to: "/faq/accounts",
                            bg: Gt,
                            title: "Minecraft Account",
                            description:
                              "Questions about managing Minecraft accounts?",
                          }),
                          Object(u.jsx)(ht.Item, {
                            to: "/faq/versions",
                            bg: Kt,
                            title: "Versions",
                            description: "Need help with Minecraft versions?",
                          }),
                          Object(u.jsx)(ht.Item, {
                            to: "/faq/misc",
                            bg: Xt,
                            title: "Miscellaneous",
                            description:
                              "Can't find what you're looking for, try looking here.",
                          }),
                        ],
                      }),
                      Object(u.jsx)("hr", {}),
                      Object(u.jsxs)("form", {
                        children: [
                          Object(u.jsx)("h3", { children: "Search" }),
                          Object(u.jsx)(Ut, {
                            results: n,
                            value: l,
                            handleFilter: function (e) {
                              s(e),
                                "" === e && r(0),
                                "" !== e &&
                                  r(
                                    Zt.filter(function (t) {
                                      return t.title
                                        .toLowerCase()
                                        .includes(e.toLowerCase());
                                    }).length
                                  );
                            },
                          }),
                        ],
                      }),
                      Zt.map(function (e) {
                        return Object(u.jsx)(
                          ot,
                          {
                            title: e.title,
                            desc: e.body,
                            style: {
                              display:
                                "" === l ||
                                e.title.toLowerCase().includes(l.toLowerCase())
                                  ? "block"
                                  : "none",
                            },
                          },
                          e.id
                        );
                      }),
                    ],
                  }),
                }),
              ],
            });
          }),
        en = ["title", "titleId"];
      function tn() {
        return (
          (tn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          tn.apply(this, arguments)
        );
      }
      function nn(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              c = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
            return c;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (c[n] = e[n]));
        }
        return c;
      }
      function rn(e, t) {
        var n = e.title,
          r = e.titleId,
          c = nn(e, en);
        return a.createElement(
          "svg",
          tn(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              style: { isolation: "isolate" },
              viewBox: "0 0 16 16",
              width: "16pt",
              height: "16pt",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? a.createElement("title", { id: r }, n) : null,
          Tt ||
            (Tt = a.createElement(
              "defs",
              null,
              a.createElement(
                "clipPath",
                { id: "_clipPath_RUQAMchPMjTYlaqoPz7UFjjxXFCmVBdG" },
                a.createElement("rect", { width: 16, height: 16 })
              )
            )),
          a.createElement(
            "g",
            { clipPath: "url(#_clipPath_RUQAMchPMjTYlaqoPz7UFjjxXFCmVBdG)" },
            a.createElement("rect", {
              width: 16,
              height: 16,
              style: { fill: "rgb(0,0,0)" },
              fillOpacity: 0,
            }),
            Ft ||
              (Ft = a.createElement("path", {
                d: " M 3 7 L 3 5 L 5 5 L 5 3 L 7 3 L 7 1 L 9 1 L 9 7 L 15 7 L 15 9 L 9 9 L 9 15 L 7 15 L 7 13 L 5 13 L 5 11 L 5 11 L 3 11 L 3 9 L 1 9 L 1 7 L 1 7 L 1 7 L 1 7 L 3 7 Z ",
                fill: "rgb(255,255,255)",
              }))
          )
        );
      }
      var cn = a.forwardRef(rn),
        an =
          (n.p,
          n(48),
          function () {
            return Object(u.jsxs)(b.b, {
              to: "./",
              className: "go-back",
              onClick: function () {
                return window.scroll(0, 0);
              },
              children: [Object(u.jsx)(cn, {}), "Go Back"],
            });
          }),
        ln = function () {
          var e,
            t = Object(Yt.f)(),
            n = Object(Yt.g)().category,
            r = zt.find(function (e) {
              return e.name === n;
            });
          return (
            r || t.push("/faq"),
            (document.title =
              (null !== (e = null === r || void 0 === r ? void 0 : r.title) &&
              void 0 !== e
                ? e
                : "") + " - Bedrock Launcher"),
            Object(u.jsxs)("div", {
              className: "faq",
              children: [
                Object(u.jsxs)("section", {
                  className: "faq-section",
                  style: {
                    backgroundImage:
                      "url(" +
                      (null === r || void 0 === r
                        ? void 0
                        : r.img.replaceAll("%PUBLIC_PATH%", "")) +
                      ")",
                  },
                  children: [
                    Object(u.jsx)("h2", {
                      children: null === r || void 0 === r ? void 0 : r.title,
                    }),
                    Object(u.jsx)("p", {
                      children:
                        null === r || void 0 === r ? void 0 : r.description,
                    }),
                  ],
                }),
                Object(u.jsx)("main", {
                  children: Object(u.jsxs)("div", {
                    className: "container",
                    children: [
                      Object(u.jsx)(an, {}),
                      Zt.filter(function (e) {
                        return e.tag === n;
                      }).map(function (e) {
                        return Object(u.jsx)(
                          ot,
                          { title: e.title, desc: e.body },
                          e.id
                        );
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        sn = [
          {
            name: "public",
            title: "Public Releases",
            description: "Releases that are safe for public usage",
            img: "%PUBLIC_PATH%/images/banners/1.13_technically_updated_java.jpg",
          },
          {
            name: "beta",
            title: "Beta Releases",
            description: "Releases that are work in progress",
            img: "%PUBLIC_PATH%/images/banners/1.15_buzzy_bees_update.jpg",
          },
        ],
        on = function () {
          var e,
            t,
            n,
            r = Object(Yt.f)(),
            c = Object(Yt.g)().category,
            i = sn.find(function (e) {
              return e.name === c;
            });
          i
            ? (document.title =
                (null !== (n = i.title) && void 0 !== n ? n : "") +
                " - Bedrock Launcher")
            : r.push("/releases");
          var l = Object(a.useContext)(Dt),
            s = Object(a.useState)(
              Math.ceil(
                l[
                  null !== (e = null === i || void 0 === i ? void 0 : i.name) &&
                  void 0 !== e
                    ? e
                    : "public"
                ].length / 10
              )
            ),
            o = Object(g.a)(s, 2),
            d = o[0],
            h = o[1],
            b = Object(a.useState)(0),
            j = Object(g.a)(b, 2),
            p = j[0],
            f = j[1];
          Object(a.useEffect)(
            function () {
              var e;
              h(
                Math.ceil(
                  l[
                    null !==
                      (e = null === i || void 0 === i ? void 0 : i.name) &&
                    void 0 !== e
                      ? e
                      : "public"
                  ].length / 10
                )
              );
            },
            [l, i]
          );
          var m = function (e) {
            f((p + e) % d);
          };
          return Object(u.jsxs)("div", {
            className: "releases",
            children: [
              Object(u.jsxs)("section", {
                className: "releases-section",
                style: {
                  backgroundImage:
                    "url(" +
                    (null === i || void 0 === i
                      ? void 0
                      : i.img.replaceAll("%PUBLIC_PATH%", "")) +
                    ")",
                },
                children: [
                  Object(u.jsx)("h2", {
                    children: null === i || void 0 === i ? void 0 : i.title,
                  }),
                  Object(u.jsx)("p", {
                    children:
                      null === i || void 0 === i ? void 0 : i.description,
                  }),
                ],
              }),
              Object(u.jsx)("div", {
                className: "container",
                children: Object(u.jsx)("main", {
                  children: Object(u.jsxs)("div", {
                    className: "container",
                    children: [
                      Object(u.jsx)(an, {}),
                      Object(u.jsxs)("div", {
                        className: "pagination",
                        children: [
                          Object(u.jsx)(q, {
                            type: "button",
                            disabled: 0 === p,
                            onClick: function () {
                              return m(-1);
                            },
                            children: "<",
                          }),
                          Object(u.jsx)("div", {
                            className: "pages-numbers",
                            children: Array(d)
                              .fill(0)
                              .map(function (e, t) {
                                return Object(u.jsx)(
                                  q,
                                  {
                                    onClick: function () {
                                      f(t);
                                    },
                                    disabled: t === p,
                                    type: "button",
                                    children: t + 1,
                                  },
                                  "pb-" + t
                                );
                              }),
                          }),
                          Object(u.jsx)(q, {
                            type: "button",
                            disabled: p === d - 1,
                            onClick: function () {
                              return m(1);
                            },
                            children: ">",
                          }),
                        ],
                      }),
                      l[
                        null !==
                          (t = null === i || void 0 === i ? void 0 : i.name) &&
                        void 0 !== t
                          ? t
                          : "public"
                      ]
                        .slice(0 + 10 * p, 10 * (p + 1))
                        .map(function (e) {
                          return Object(u.jsx)(
                            ot,
                            {
                              replaceURLs: !0,
                              usesMD: !0,
                              githubURL: e.html_url,
                              title: e.name,
                              desc: e.body,
                            },
                            e.id
                          );
                        }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        dn =
          (n(49),
          function () {
            return (
              (document.title = "Docs - Bedrock Launcher"),
              Object(u.jsx)("div", {
                className: "docs",
                children: Object(u.jsx)("main", {
                  children: Object(u.jsxs)("div", {
                    className: "container",
                    children: [
                      Object(u.jsx)("h2", { children: "Dev Info" }),
                      Object(u.jsxs)("ul", {
                        children: [
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)("a", {
                              target: "_blank",
                              rel: "noreferrer",
                              href: "https://github.com/BedrockLauncher/BedrockLauncher/",
                              children: "Launcher Source",
                            }),
                          }),
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)("a", {
                              target: "_blank",
                              rel: "noreferrer",
                              href: "https://github.com/KalmeMarq/bedrock-launcher-website",
                              children: "Website Source",
                            }),
                          }),
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)(b.b, {
                              to: "/docs/dev/compiling",
                              children: "Compiling",
                            }),
                          }),
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)(b.b, {
                              to: "/docs/dev/contributing",
                              children: "Contributing",
                            }),
                          }),
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)(b.b, {
                              to: "/docs/dev/dev-software-prerequisites",
                              children: "Dev software prerequisites",
                            }),
                          }),
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)(b.b, {
                              to: "/docs/dev/software-prerequisites",
                              children: "Software prerequisites",
                            }),
                          }),
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)(b.b, {
                              to: "/docs/dev/hardware-prerequisites",
                              children: "Hardware prerequisites",
                            }),
                          }),
                        ],
                      }),
                      Object(u.jsx)("h2", { children: "Legal" }),
                      Object(u.jsxs)("ul", {
                        children: [
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)(b.b, {
                              to: "/docs/legal/code-of-conduct",
                              children: "Code of conduct",
                            }),
                          }),
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)(b.b, {
                              to: "/docs/legal/disclaimers",
                              children: "Disclaimers",
                            }),
                          }),
                          Object(u.jsx)("li", {
                            children: Object(u.jsx)(b.b, {
                              to: "/docs/legal/license",
                              children: "License",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            );
          }),
        un = [
          {
            name: "code-of-conduct",
            title: "Code of Conduct",
            url: "https://raw.githubusercontent.com/CoolAbhi1290/BedrockLauncher/master/docs/CODE_OF_CONDUCT.md",
          },
          {
            name: "disclaimers",
            title: "Disclaimers",
            url: "https://raw.githubusercontent.com/CoolAbhi1290/BedrockLauncher/master/docs/DISCLAIMERS.md",
          },
          {
            name: "license",
            title: "License",
            url: "https://raw.githubusercontent.com/CoolAbhi1290/BedrockLauncher/master/docs/LICENSE.md",
          },
          {
            name: "compiling",
            title: "Compiling",
            url: "https://raw.githubusercontent.com/CoolAbhi1290/BedrockLauncher/master/docs/COMPILING.md",
          },
          {
            name: "contributing",
            title: "Contributing",
            url: "https://raw.githubusercontent.com/CoolAbhi1290/BedrockLauncher/master/docs/CONTRIBUTING.md",
          },
          {
            name: "dev-software-prerequisites",
            title: "Dev Software Prerequisites",
            url: "https://raw.githubusercontent.com/CoolAbhi1290/BedrockLauncher/master/docs/DEV_SOFTWARE_PREREQUISITES.md",
          },
          {
            name: "software-prerequisites",
            title: "Software Prerequisites",
            url: "https://raw.githubusercontent.com/CoolAbhi1290/BedrockLauncher/master/docs/SOFTWARE_PREREQUISITES.md",
          },
          {
            name: "hardware-prerequisites",
            title: "Hardware Prerequisites",
            url: "https://raw.githubusercontent.com/CoolAbhi1290/BedrockLauncher/master/docs/HARDWARE_PREREQUISITES.md",
          },
        ],
        hn =
          (n(50),
          function () {
            var e = Object(Yt.f)(),
              t = Object(Yt.g)().category,
              n = un.find(function (e) {
                return e.name === t;
              }),
              r = Object(a.useState)(""),
              c = Object(g.a)(r, 2),
              i = c[0],
              l = c[1];
            n
              ? (document.title = n.title + " - Bedrock Launcher")
              : e.push("/docs");
            var s = new Re.Converter();
            return (
              Object(a.useEffect)(function () {
                n &&
                  "" === i &&
                  fetch(n.url)
                    .then(function (e) {
                      return e.text();
                    })
                    .then(function (e) {
                      l(s.makeHtml(e));
                    });
              }),
              Object(u.jsx)("div", {
                className: "docs",
                children: Object(u.jsxs)("main", {
                  children: [
                    Object(u.jsx)("div", {
                      className: "container md-go-back",
                      children: Object(u.jsx)(an, {}),
                    }),
                    Object(u.jsx)("div", {
                      className: "container md",
                      dangerouslySetInnerHTML: { __html: i },
                    }),
                  ],
                }),
              })
            );
          }),
        bn =
          (n(51),
          function (e) {
            var t = e.icon,
              n = e.name,
              r = e.url,
              c = e.label;
            return Object(u.jsxs)("li", {
              className: "credits-card",
              children: [
                Object(u.jsx)("div", {
                  className: "credits-card-icon",
                  children: Object(u.jsx)("a", {
                    href: r,
                    "aria-label": c,
                    rel: "noreferrer",
                    target: "_blank",
                    children: Object(u.jsx)("img", { src: t, alt: "" }),
                  }),
                }),
                Object(u.jsx)("p", { children: n }),
              ],
            });
          }),
        jn =
          (n(52),
          function () {
            var e = Object(a.useState)([]),
              t = Object(g.a)(e, 2),
              n = t[0],
              r = t[1],
              c = [18092668, 47992209, 5191659, 14214667, 49699333, 43380238];
            document.title = "Credits - Bedrock Launcher";
            var i = (function () {
              var e = Object(qt.a)(
                Object(Vt.a)().mark(function e() {
                  var t, n, a, i, l;
                  return Object(Vt.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "https://api.github.com/repos/BedrockLauncher/BedrockLauncher/contributors?per_page=2147483647"
                            )
                          );
                        case 2:
                          return (t = e.sent), (e.next = 5), t.json();
                        case 5:
                          (n = e.sent), (a = []), (i = 0);
                        case 8:
                          if (!(i < n.length)) {
                            e.next = 16;
                            break;
                          }
                          if (((l = n[i]), !c.includes(l.id))) {
                            e.next = 12;
                            break;
                          }
                          return e.abrupt("continue", 13);
                        case 12:
                          a.push({
                            name: l.login,
                            url: l.html_url,
                            icon: "".concat(l.avatar_url, "&size=80"),
                            id: "".concat(l.id),
                          });
                        case 13:
                          i++, (e.next = 8);
                          break;
                        case 16:
                          r(a);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            return (
              Object(a.useEffect)(function () {
                0 === n.length && i();
              }),
              Object(u.jsxs)("div", {
                className: "credits",
                children: [
                  Object(u.jsxs)("section", {
                    className: "credits-section",
                    children: [
                      Object(u.jsx)("h2", { children: "Credits" }),
                      Object(u.jsx)("p", {
                        children:
                          "People who have contributed to Bedrock Launcher",
                      }),
                    ],
                  }),
                  Object(u.jsx)("main", {
                    children: Object(u.jsxs)("div", {
                      className: "container",
                      children: [
                        Object(u.jsx)("h2", { children: "Main Developer" }),
                        Object(u.jsx)("ul", {
                          children: Object(u.jsx)(bn, {
                            url: "https://carjem.carrd.co/",
                            name: "Carjem",
                            icon: "".concat(
                              "",
                              "/images/CarJem_standalone.gif"
                            ),
                          }),
                        }),
                        Object(u.jsx)("h2", { children: "Forked From" }),
                        Object(u.jsxs)("ul", {
                          children: [
                            Object(u.jsx)(bn, {
                              url: "https://twitter.com/mcmrarm",
                              name: "MCMrARM",
                              icon: "https://github.com/MCMrARM.png?size=80",
                            }),
                            Object(u.jsx)(bn, {
                              url: "https://github.com/XlynxX",
                              name: "XlynxX",
                              icon: "https://github.com/XlynxX.png?size=80",
                            }),
                            Object(u.jsx)(bn, {
                              url: "https://github.com/bs-community/",
                              name: "Blessing Skin",
                              icon: "https://github.com/bs-community.png?size=80",
                            }),
                            Object(u.jsx)(bn, {
                              url: "https://twitter.com/dktapps",
                              name: "dktapps",
                              icon: "https://github.com/dktapps.png?size=80",
                            }),
                          ],
                        }),
                        Object(u.jsx)("h2", { children: "Website Developers" }),
                        Object(u.jsxs)("ul", {
                          children: [
                            Object(u.jsx)(bn, {
                              url: "https://tresabhi.github.io/",
                              name: "TresAbhi",
                              icon: "https://github.com/TresAbhi.png?size=80",
                            }),
                            Object(u.jsx)(bn, {
                              url: "https://twitter.com/KalmeMarq",
                              name: "KalmeMarq",
                              icon: "https://github.com/KalmeMarq.png?size=80",
                            }),
                          ],
                        }),
                        Object(u.jsx)("h2", {
                          children: "GitHub Contributors",
                        }),
                        Object(u.jsx)("ul", {
                          children: n.map(function (e) {
                            return Object(u.jsx)(
                              bn,
                              { url: e.url, name: e.name, icon: e.icon },
                              e.id
                            );
                          }),
                        }),
                        Object(u.jsx)("h2", { children: "Other Helpers" }),
                        Object(u.jsx)("ul", {
                          children: Object(u.jsx)(bn, {
                            url: "https://www.youtube.com/c/LizterZapZap",
                            name: "LizterZapZap",
                            icon: "https://i.imgur.com/QqC9Vqs.png",
                          }),
                        }),
                        Object(u.jsx)("h2", { children: "Localization" }),
                        Object(u.jsx)("ul", {
                          children: Object(u.jsx)(bn, {
                            url: "https://crowdin.com/project/bedrocklauncher/members",
                            name: "BedrockLauncher Crowdin Localization team",
                            icon: "https://crowdin.com/images/crowdin-logo-icon.svg",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            );
          }),
        pn =
          (n(53),
          function () {
            return (
              (document.title = "Downloads - Bedrock Launcher"),
              Object(u.jsx)("div", {
                className: "downloads",
                children: Object(u.jsx)("main", {
                  children: Object(u.jsxs)("div", {
                    className: "container",
                    children: [
                      Object(u.jsx)("h2", {
                        children: "Download Bedrock Launcher",
                      }),
                      Object(u.jsx)("div", {
                        className: "button-group",
                        children: Object(u.jsx)(q, {
                          type: "link",
                          to: "https://github.com/bedrockLauncher/BedrockLauncher/releases/latest/",
                          children: "Lastest Version",
                        }),
                      }),
                    ],
                  }),
                }),
              })
            );
          }),
        gn =
          (n(54),
          function () {
            return Object(u.jsxs)("div", {
              className: "notfound",
              children: [
                Object(u.jsx)("h2", { children: "404 Not Found" }),
                Object(u.jsx)(q, {
                  type: "route-link",
                  to: "/",
                  children: "Go Back to Home",
                }),
              ],
            });
          }),
        fn = (n(55), n(20)),
        mn = function (e) {
          var t = e.item;
          return Object(u.jsxs)("div", {
            className: "search-item",
            children: [
              Object(u.jsx)("a", {
                href: t.displayLink,
                dangerouslySetInnerHTML: {
                  __html: Object(fn.sanitize)(t.htmlTitle),
                },
              }),
              Object(u.jsx)("div", {
                className: "formatted-url",
                dangerouslySetInnerHTML: {
                  __html: (function (e) {
                    var t = e.substring(0, e.indexOf("://") + 3),
                      n = e.substring(e.lastIndexOf("/"), e.length);
                    return e
                      .substring(e.indexOf(t) + t.length, e.lastIndexOf(n))
                      .replaceAll("/", "<i>><i>");
                  })(t.link),
                },
              }),
              Object(u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: Object(fn.sanitize)(t.htmlSnippet),
                },
              }),
            ],
          });
        },
        On = function () {
          var e = Object(a.useState)([]),
            t = Object(g.a)(e, 2),
            n = t[0],
            r = t[1],
            c = Object(a.useState)(0),
            i = Object(g.a)(c, 2),
            l = i[0],
            s = i[1],
            o = Object(a.useState)(""),
            d = Object(g.a)(o, 2),
            h = d[0],
            b = d[1],
            j = "https://www.googleapis.com/customsearch/v1?key="
              .concat("AIzaSyDao5Lwp0lQM9VF8OVf3zzSR92M5U_XLPA", "&cx=")
              .concat("5f283ba92be0b61e1", "&q="),
            p = (function () {
              var e = Object(qt.a)(
                Object(Vt.a)().mark(function e(t) {
                  var n, c, a;
                  return Object(Vt.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("Enter" === t.code && "" !== h) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (e.prev = 2), (e.next = 5), fetch(j + h);
                          case 5:
                            return (c = e.sent), (e.next = 8), c.json();
                          case 8:
                            (a = e.sent),
                              r(
                                null !== (n = a.items) && void 0 !== n ? n : []
                              ),
                              "" !== h && a.items ? s(a.items.length) : s(0),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(2)),
                              console.log(e.t0);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 13]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(u.jsx)("div", {
            className: "search-route",
            children: Object(u.jsxs)("div", {
              className: "container",
              children: [
                Object(u.jsx)("h3", { children: "Search" }),
                Object(u.jsx)(Ut, {
                  results: l,
                  value: h,
                  handleEnter: p,
                  handleFilter: function (e) {
                    b(e), "" === e && s(0);
                  },
                }),
                Object(u.jsx)("div", { className: "line-h" }),
                Object(u.jsx)("div", {
                  className: "search-results",
                  children: n.map(function (e) {
                    return Object(u.jsx)(mn, { item: e }, e.cacheId);
                  }),
                }),
              ],
            }),
          });
        },
        Ln = function () {
          return Object(u.jsx)(Wt, {
            children: Object(u.jsxs)(b.a, {
              children: [
                Object(u.jsx)(U, {}),
                Object(u.jsxs)(Yt.c, {
                  children: [
                    Object(u.jsx)(Yt.a, {
                      exact: !0,
                      path: "/",
                      children: Object(u.jsx)(Te, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      path: "/docs/:type/:category",
                      children: Object(u.jsx)(hn, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      path: "/docs",
                      children: Object(u.jsx)(dn, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      exact: !0,
                      path: "/releases",
                      children: Object(u.jsx)(Jt, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      path: "/releases/:category",
                      children: Object(u.jsx)(on, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      exact: !0,
                      path: "/faq",
                      children: Object(u.jsx)($t, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      path: "/faq/:category",
                      children: Object(u.jsx)(ln, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      path: "/downloads",
                      children: Object(u.jsx)(pn, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      path: "/credits",
                      children: Object(u.jsx)(jn, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      path: "/search",
                      children: Object(u.jsx)(On, {}),
                    }),
                    Object(u.jsx)(Yt.a, {
                      path: "*",
                      children: Object(u.jsx)(gn, {}),
                    }),
                  ],
                }),
                Object(u.jsx)(p, {}),
              ],
            }),
          });
        };
      n(56), n(57), n.p;
      s.a.render(
        Object(u.jsx)(i.a.StrictMode, { children: Object(u.jsx)(Ln, {}) }),
        document.getElementById("root")
      );
    },
  ]),
  [[58, 1, 2]],
]);
//# sourceMappingURL=main.96ddea74.chunk.js.map
