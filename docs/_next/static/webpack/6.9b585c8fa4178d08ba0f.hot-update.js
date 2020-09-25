webpackHotUpdate_N_E(6,{

/***/ "./components/KeysModal.tsx":
/*!**********************************!*\
  !*** ./components/KeysModal.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeysModal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ \"./node_modules/copy-to-clipboard/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/emblem-vault-site/components/KeysModal.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction KeysModal(_ref) {\n  _s();\n\n  var isOpen = _ref.isOpen,\n      onClose = _ref.onClose,\n      mnemonic = _ref.mnemonic,\n      privKeyBTC = _ref.privKeyBTC,\n      privKeyETH = _ref.privKeyETH;\n  var phrase = mnemonic;\n  var btcKey = privKeyBTC;\n  var ethKey = privKeyETH;\n\n  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      phraseCopied = _useState[0],\n      setPhraseCopied = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (phraseCopied) {\n      var timeout = setTimeout(function () {\n        setPhraseCopied(false);\n      }, 750);\n      return function () {\n        clearTimeout(timeout);\n      };\n    }\n  }, [phraseCopied]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      BTCKeyCopied = _useState2[0],\n      setBTCKeyCopied = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (BTCKeyCopied) {\n      var timeout = setTimeout(function () {\n        setBTCKeyCopied(false);\n      }, 750);\n      return function () {\n        clearTimeout(timeout);\n      };\n    }\n  }, [BTCKeyCopied]);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      ETHKeyCopied = _useState3[0],\n      setETHKeyCopied = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (ETHKeyCopied) {\n      var timeout = setTimeout(function () {\n        setETHKeyCopied(false);\n      }, 750);\n      return function () {\n        clearTimeout(timeout);\n      };\n    }\n  }, [ETHKeyCopied]);\n\n  function copyWithFlag(content, whichOne) {\n    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(content);\n    whichOne == 'phrase' ? setPhraseCopied(true) : whichOne == 'BTCKey' ? setBTCKeyCopied(true) : whichOne == 'ETHKey' ? setETHKeyCopied(true) : null;\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    isOpen: isOpen,\n    onClose: onClose,\n    isCentered: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalOverlay\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalContent\"], {\n    color: _constants__WEBPACK_IMPORTED_MODULE_3__[\"COLOR\"][colorMode],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, \"Your Vault Keys\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalCloseButton\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"column\",\n    mb: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 15\n    }\n  }, \"Your mnemonic phrase (click to copy):\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    width: \"100%\",\n    whiteSpace: \"unset\",\n    height: \"unset\",\n    p: 1,\n    onClick: function onClick() {\n      return copyWithFlag(phrase, 'phrase');\n    },\n    isActive: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  }, phraseCopied ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 33\n    }\n  }, \"Copied!\") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 56\n    }\n  }, phrase))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"row\",\n    mt: 4,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 14\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }, \"Your BTC private key (click to copy):\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"row\",\n    justify: \"space-between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    whiteSpace: \"unset\",\n    height: \"unset\",\n    onClick: function onClick() {\n      return copyWithFlag(btcKey, 'BTCKey');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 15\n    }\n  }, BTCKeyCopied ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 33\n    }\n  }, \"Copied!\") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 56\n    }\n  }, btcKey))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"row\",\n    mt: 4,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 15\n    }\n  }, \"Your ETH private key (click to copy):\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"row\",\n    justify: \"space-between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    whiteSpace: \"unset\",\n    height: \"unset\",\n    onClick: function onClick() {\n      return copyWithFlag(ethKey, 'ETHKey');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 15\n    }\n  }, ETHKeyCopied ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 33\n    }\n  }, \"Copied!\") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    isTruncated: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 56\n    }\n  }, ethKey)))))));\n}\n\n_s(KeysModal, \"7dWaVKOw+wphY12bSmvp2j63hVA=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"]];\n});\n\n_c = KeysModal;\n\nvar _c;\n\n$RefreshReg$(_c, \"KeysModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9LZXlzTW9kYWwudHN4P2QxYjAiXSwibmFtZXMiOlsiS2V5c01vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsIm1uZW1vbmljIiwicHJpdktleUJUQyIsInByaXZLZXlFVEgiLCJwaHJhc2UiLCJidGNLZXkiLCJldGhLZXkiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ1c2VTdGF0ZSIsInBocmFzZUNvcGllZCIsInNldFBocmFzZUNvcGllZCIsInVzZUVmZmVjdCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiQlRDS2V5Q29waWVkIiwic2V0QlRDS2V5Q29waWVkIiwiRVRIS2V5Q29waWVkIiwic2V0RVRIS2V5Q29waWVkIiwiY29weVdpdGhGbGFnIiwiY29udGVudCIsIndoaWNoT25lIiwiY29weSIsIkNPTE9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BWUM7QUFBQTs7QUFBQSxNQVhkQyxNQVdjLFFBWGRBLE1BV2M7QUFBQSxNQVZkQyxPQVVjLFFBVmRBLE9BVWM7QUFBQSxNQVRkQyxRQVNjLFFBVGRBLFFBU2M7QUFBQSxNQVJkQyxVQVFjLFFBUmRBLFVBUWM7QUFBQSxNQVBkQyxVQU9jLFFBUGRBLFVBT2M7QUFDZCxNQUFNQyxNQUFNLEdBQUdILFFBQWY7QUFDQSxNQUFNSSxNQUFNLEdBQUdILFVBQWY7QUFDQSxNQUFNSSxNQUFNLEdBQUdILFVBQWY7O0FBSGMsc0JBS1FJLG9FQUFZLEVBTHBCO0FBQUEsTUFLTkMsU0FMTSxpQkFLTkEsU0FMTTs7QUFBQSxrQkFPMEJDLHNEQUFRLENBQUMsS0FBRCxDQVBsQztBQUFBLE1BT1BDLFlBUE87QUFBQSxNQU9PQyxlQVBQOztBQVFkQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixZQUFKLEVBQWtCO0FBQ2hCLFVBQU1HLE9BQU8sR0FBR0MsVUFBVSxD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QTtBQUFBLEtBQU9YLE1BQVAsQ0FEekMsQ0FERixDQXJCRixFQTJCRSxNQUFDLHFEQUFEO0FBQU8sYUFBUyxFQUFDLEtBQWpCO0FBQXVCLE1BQUUsRUFBRSxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURGLENBM0JGLEVBK0JFLE1BQUMscURBQUQ7QUFBTyxhQUFTLEVBQUMsS0FBakI7QUFBdUIsV0FBTyxFQUFDLGVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFDLE9BQW5CO0FBQTJCLFVBQU0sRUFBQyxPQUFsQztBQUEwQyxXQUFPLEVBQUU7QUFBQSxhQUFNZSxZQUFZLENBQUNkLE1BQUQsRUFBUyxRQUFULENBQWxCO0FBQUEsS0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWSxZQUFZLEdBQUcsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBMEIsTUFBQyxvREFBRDtBQUFNLGVBQVcsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQlosTUFBbkIsQ0FEekMsQ0FERixDQS9CRixDQURGLENBTEYsQ0FGRixDQURGO0FBa0REOztHQXBIdUJSLFM7VUFpQkFTLDREOzs7S0FqQkFULFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0tleXNNb2RhbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBNb2RhbCxcbiAgTW9kYWxPdmVybGF5LFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsSGVhZGVyLFxuICBNb2RhbENsb3NlQnV0dG9uLFxuICBNb2RhbEJvZHksXG4gIFRleHQsXG4gIFN0YWNrLFxuICBCdXR0b24sXG4gIHVzZUNvbG9yTW9kZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnXG5pbXBvcnQgeyBDT0xPUiB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5c01vZGFsKHtcbiAgaXNPcGVuLFxuICBvbkNsb3NlLFxuICBtbmVtb25pYyxcbiAgcHJpdktleUJUQyxcbiAgcHJpdktleUVUSCxcbn06IHtcbiAgaXNPcGVuOiBib29sZWFuXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbiAgbW5lbW9uaWM6IHN0cmluZ1xuICBwcml2S2V5QlRDOiBzdHJpbmdcbiAgcHJpdktleUVUSDogc3RyaW5nXG59KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBwaHJhc2UgPSBtbmVtb25pY1xuICBjb25zdCBidGNLZXkgPSBwcml2S2V5QlRDXG4gIGNvbnN0IGV0aEtleSA9IHByaXZLZXlFVEhcblxuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcblxuICBjb25zdCBbcGhyYXNlQ29waWVkLCBzZXRQaHJhc2VDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBocmFzZUNvcGllZCkge1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRQaHJhc2VDb3BpZWQoZmFsc2UpXG4gICAgICB9LCA3NTApXG4gICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwaHJhc2VDb3BpZWRdKVxuXG4gIGNvbnN0IFtCVENLZXlDb3BpZWQsIHNldEJUQ0tleUNvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoQlRDS2V5Q29waWVkKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEJUQ0tleUNvcGllZChmYWxzZSlcbiAgICAgIH0sIDc1MClcbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW0JUQ0tleUNvcGllZF0pXG5cbiAgY29uc3QgW0VUSEtleUNvcGllZCwgc2V0RVRIS2V5Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChFVEhLZXlDb3BpZWQpIHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0RVRIS2V5Q29waWVkKGZhbHNlKVxuICAgICAgfSwgNzUwKVxuICAgICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbRVRIS2V5Q29waWVkXSlcblxuICBmdW5jdGlvbiBjb3B5V2l0aEZsYWcoY29udGVudDogc3RyaW5nLCB3aGljaE9uZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29weShjb250ZW50KVxuICAgIHdoaWNoT25lID09ICdwaHJhc2UnXG4gICAgICA/IHNldFBocmFzZUNvcGllZCh0cnVlKVxuICAgICAgOiB3aGljaE9uZSA9PSAnQlRDS2V5J1xuICAgICAgPyBzZXRCVENLZXlDb3BpZWQodHJ1ZSlcbiAgICAgIDogd2hpY2hPbmUgPT0gJ0VUSEtleSdcbiAgICAgID8gc2V0RVRIS2V5Q29waWVkKHRydWUpXG4gICAgICA6IG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfSBpc0NlbnRlcmVkPlxuICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgPE1vZGFsQ29udGVudCBjb2xvcj17Q09MT1JbY29sb3JNb2RlXX0+XG4gICAgICAgIDxNb2RhbEhlYWRlcj5cbiAgICAgICAgICA8VGV4dD5Zb3VyIFZhdWx0IEtleXM8L1RleHQ+XG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIG1iPXsxMH0+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgIDxUZXh0PllvdXIgbW5lbW9uaWMgcGhyYXNlIChjbGljayB0byBjb3B5KTo8L1RleHQ+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlPVwidW5zZXRcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cInVuc2V0XCJcbiAgICAgICAgICAgICAgICBwPXsxfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvcHlXaXRoRmxhZyhwaHJhc2UsICdwaHJhc2UnKX1cbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwaHJhc2VDb3BpZWQgPyA8VGV4dD5Db3BpZWQhPC9UZXh0PiA6IDxUZXh0PntwaHJhc2V9PC9UZXh0Pn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIG10PXs0fT5cbiAgICAgICAgICAgICAgPFRleHQ+WW91ciBCVEMgcHJpdmF0ZSBrZXkgKGNsaWNrIHRvIGNvcHkpOjwvVGV4dD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHdoaXRlU3BhY2U9XCJ1bnNldFwiIGhlaWdodD1cInVuc2V0XCIgb25DbGljaz17KCkgPT4gY29weVdpdGhGbGFnKGJ0Y0tleSwgJ0JUQ0tleScpfT5cbiAgICAgICAgICAgICAgICB7QlRDS2V5Q29waWVkID8gPFRleHQ+Q29waWVkITwvVGV4dD4gOiA8VGV4dD57YnRjS2V5fTwvVGV4dD59XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIG10PXs0fT5cbiAgICAgICAgICAgICAgPFRleHQ+WW91ciBFVEggcHJpdmF0ZSBrZXkgKGNsaWNrIHRvIGNvcHkpOjwvVGV4dD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHdoaXRlU3BhY2U9XCJ1bnNldFwiIGhlaWdodD1cInVuc2V0XCIgb25DbGljaz17KCkgPT4gY29weVdpdGhGbGFnKGV0aEtleSwgJ0VUSEtleScpfT5cbiAgICAgICAgICAgICAgICB7RVRIS2V5Q29waWVkID8gPFRleHQ+Q29waWVkITwvVGV4dD4gOiA8VGV4dCBpc1RydW5jYXRlZD57ZXRoS2V5fTwvVGV4dD59XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/KeysModal.tsx\n");

/***/ })

})