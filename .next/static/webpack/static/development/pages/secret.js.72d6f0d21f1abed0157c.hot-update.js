webpackHotUpdate("static/development/pages/secret.js",{

/***/ "./components/hoc/withAuth.js":
/*!************************************!*\
  !*** ./components/hoc/withAuth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* harmony default export */ __webpack_exports__["default"] = (function (Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(withAuth, _React$Component);

      function withAuth() {
        _classCallCheck(this, withAuth);

        return _possibleConstructorReturn(this, _getPrototypeOf(withAuth).apply(this, arguments));
      }

      _createClass(withAuth, [{
        key: "renderSecretPage",
        value: function renderSecretPage() {
          var isAuthenticated = this.props.auth.isAuthenticated;

          if (isAuthenticated) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseLayout, this.props.auth, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasePage, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " I am Secret Page "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Secret Content Here ")));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseLayout, this.props.auth, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasePage, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, ' ', "You are not authenticated please login to view this page", ' ')));
          }
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, this.props);
        }
      }]);

      return withAuth;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
});

/***/ })

})
//# sourceMappingURL=secret.js.72d6f0d21f1abed0157c.hot-update.js.map