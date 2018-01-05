webpackJsonp([0x83323ebd9d39], {
  349: function(e, t) {},
  248: function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var i = n(1),
      c = o(i);
    n(349);
    var f = (function(e) {
      function t() {
        return r(this, t), u(this, e.apply(this, arguments));
      }
      return (
        a(t, e),
        (t.prototype.render = function() {
          return c.default.createElement(
            "div",
            { className: "about" },
            c.default.createElement(
              "h1",
              null,
              "Edit About component or pages/about.jsx to include your information."
            )
          );
        }),
        t
      );
    })(i.Component);
    (t.default = f), (e.exports = t.default);
  },
  262: function(e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var i = n(1),
      c = o(i),
      f = n(24),
      l = o(f),
      s = n(248),
      p = o(s),
      d = n(18),
      b = o(d),
      y = (function(e) {
        function t() {
          return r(this, t), u(this, e.apply(this, arguments));
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return c.default.createElement(
              "div",
              { className: "about-container" },
              c.default.createElement(l.default, {
                title: "About | " + b.default.siteTitle
              }),
              c.default.createElement(p.default, null)
            );
          }),
          t
        );
      })(i.Component);
    (t.default = y), (e.exports = t.default);
  }
});
//# sourceMappingURL=component---src-pages-about-jsx-16dca089dee574aef9ce.js.map
