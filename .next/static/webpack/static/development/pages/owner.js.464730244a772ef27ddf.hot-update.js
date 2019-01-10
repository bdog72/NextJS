webpackHotUpdate("static/development/pages/owner.js",{

/***/ "./components/hoc/withAuth.js":
/*!************************************!*\
  !*** ./components/hoc/withAuth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BasePage */ "./components/BasePage.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var namespace = 'http://localhost:3000/';
/* harmony default export */ __webpack_exports__["default"] = (function (Component, role) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(withAuth, _React$Component);

      function withAuth() {
        _classCallCheck(this, withAuth);

        return _possibleConstructorReturn(this, _getPrototypeOf(withAuth).apply(this, arguments));
      }

      _createClass(withAuth, [{
        key: "renderProtectedPage",
        value: function renderProtectedPage() {
          var _this$props$auth = this.props.auth,
              isAuthenticated = _this$props$auth.isAuthenticated,
              user = _this$props$auth.user;
          var userRole = user && user["".concat(namespace, "role")];
          var isAuthorized = false;

          if (role) {
            if (userRole && userRole === role) {
              isAuthorized = true;
            }
          } else {
            isAuthorized = true;
          }

          if (!isAuthenticated) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "You are not authenticated please login to view this page ")));
          } else if (!isAuthorized) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "You are not authorized. You dont have permission to visit this page", ' ')));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, this.props);
          }
        }
      }, {
        key: "render",
        value: function render() {
          return this.renderProtectedPage();
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(args) {
            var pageProps;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Component.getInitialProps;

                  case 2:
                    _context.t0 = _context.sent;

                    if (!_context.t0) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return Component.getInitialProps(args);

                  case 6:
                    _context.t0 = _context.sent;

                  case 7:
                    pageProps = _context.t0;
                    return _context.abrupt("return", _objectSpread({}, pageProps));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return withAuth;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
  );
});

/***/ })

})
//# sourceMappingURL=owner.js.464730244a772ef27ddf.hot-update.js.map