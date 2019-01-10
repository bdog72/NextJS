webpackHotUpdate("static/development/pages/blogs.js",{

/***/ "./components/BasePage.js":
/*!********************************!*\
  !*** ./components/BasePage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");

 // import PropTypes from 'prop-types';

var BasePage = function BasePage(props) {
  var className = props.className,
      title = props.title; // const className = props.className || '';

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "base-page ".concat(className)
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, props.children));
};

BasePage.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (BasePage);

/***/ })

})
//# sourceMappingURL=blogs.js.b092e2f0dedb64cef46a.hot-update.js.map