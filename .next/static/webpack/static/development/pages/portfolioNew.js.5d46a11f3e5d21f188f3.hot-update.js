webpackHotUpdate("static/development/pages/portfolioNew.js",{

/***/ "./components/portfolios/PortfolioCreateForm.js":
/*!******************************************************!*\
  !*** ./components/portfolios/PortfolioCreateForm.js ***!
  \******************************************************/
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var PortfolioCreateForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PortfolioCreateForm, _React$Component);

  function PortfolioCreateForm(props) {
    var _this;

    _classCallCheck(this, PortfolioCreateForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PortfolioCreateForm).call(this, props));
    _this.state = {
      value: '',
      description: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChangeDescription = _this.handleChangeDescription.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(PortfolioCreateForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleChangeDescription",
    value: function handleChangeDescription(event) {
      this.setState({
        description: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        type: "text",
        value: this.state.description,
        onChange: this.handleChangeDescription
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Pick your favorite flavor:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.state.value,
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "grapefruit"
      }, "Grapefruit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "lime"
      }, "Lime"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "coconut"
      }, "Coconut"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "mango"
      }, "Mango"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Submit"
      }));
    }
  }]);

  return PortfolioCreateForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PortfolioCreateForm);

/***/ })

})
//# sourceMappingURL=portfolioNew.js.5d46a11f3e5d21f188f3.hot-update.js.map