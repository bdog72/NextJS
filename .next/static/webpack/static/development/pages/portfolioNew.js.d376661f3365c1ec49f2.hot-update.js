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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");



var PortfolioCreateForm = function PortfolioCreateForm() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Anywhere in your app!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      email: '',
      password: ''
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      setTimeout(function () {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      name: "email",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.email
    }), errors.email && touched.email && errors.email, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      name: "password",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.password
    }), errors.password && touched.password && errors.password, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      disabled: isSubmitting
    }, "Submit"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioCreateForm); // import React from 'react';
// class PortfolioCreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: '', description: '', language: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     const field = event.target.name;
//     this.setState({ [field]: event.target.value });
//   }
//   handleSubmit(event) {
//     alert(
//       'A name was submitted: ' +
//         this.state.title +
//         ' ' +
//         this.state.description +
//         ' ' +
//         this.state.language
//     );
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             name="title"
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             type="text"
//             value={this.state.description}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Pick your favorite programming language:
//           <select
//             name="language"
//             value={this.state.language}
//             onChange={this.handleChange}
//           >
//             <option value="Javascript">Javascript</option>
//             <option value="Java">Java</option>
//             <option value="C++">C++</option>
//             <option value="C#">C#</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
// export default PortfolioCreateForm;

/***/ })

})
//# sourceMappingURL=portfolioNew.js.d376661f3365c1ec49f2.hot-update.js.map