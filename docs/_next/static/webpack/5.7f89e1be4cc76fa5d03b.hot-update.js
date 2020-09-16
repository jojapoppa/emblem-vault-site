webpackHotUpdate_N_E(5,{

/***/ "./components/AddrModal.tsx":
/*!**********************************!*\
  !*** ./components/AddrModal.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AddrModal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! copy-to-clipboard */ \"./node_modules/copy-to-clipboard/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/index.js\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/dcode/dev/emblem/emblem-vault-uni/components/AddrModal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction AddrModal(_ref) {\n  _s();\n\n  var isOpen = _ref.isOpen,\n      onClose = _ref.onClose,\n      addrCoin = _ref.addrCoin,\n      addrAddr = _ref.addrAddr;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__[\"useWeb3React\"])(),\n      chainId = _useWeb3React.chainId;\n\n  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode,\n      toggleColorMode = _useColorMode.toggleColorMode;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(),\n      pathname = _useRouter.pathname;\n\n  var address = addrAddr;\n  var coin = addrCoin;\n  var permalink = null;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      copied = _useState[0],\n      setCopied = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (copied) {\n      var timeout = setTimeout(function () {\n        setCopied(false);\n      }, 750);\n      return function () {\n        clearTimeout(timeout);\n      };\n    }\n  }, [copied]);\n\n  function copyWithFlag(content) {\n    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default()(content);\n    setCopied(true);\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    isOpen: isOpen,\n    onClose: onClose,\n    isCentered: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ModalOverlay\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ModalContent\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ModalHeader\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: \"white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"Send Stuff Here\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ModalCloseButton\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ModalBody\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    direction: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    direction: \"row\",\n    align: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    value: address,\n    size: \"250\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    direction: \"row\",\n    justify: \"space-between\",\n    mt: \"4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: \"white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, coin, \" address (click to copy)\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    direction: \"row\",\n    justify: \"space-between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: \"white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, address)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ModalFooter\"], {\n    justifyContent: \"space-between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, typeof permalink === 'string' && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    variant: \"link\",\n    isDisabled: copied,\n    color: \"blue.500\",\n    width: \"min-content\",\n    onClick: function onClick() {\n      try {\n        // eslint-disable-next-line\n        ;\n        window.navigator.share({\n          title: 'Emblem Vault',\n          url: permalink\n        })[\"catch\"](function () {});\n      } catch (_unused) {\n        copyWithFlag(permalink);\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, copied ? 'Copied' : 'Share Permalink'))));\n}\n\n_s(AddrModal, \"B4aEtSWbm1SqGnCUxYDvg3DqVyc=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_2__[\"useWeb3React\"], _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"], next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = AddrModal;\n\nvar _c;\n\n$RefreshReg$(_c, \"AddrModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRyTW9kYWwudHN4PzVmZjIiXSwibmFtZXMiOlsiQWRkck1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImFkZHJDb2luIiwiYWRkckFkZHIiLCJ1c2VXZWIzUmVhY3QiLCJjaGFpbklkIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJhZGRyZXNzIiwiY29pbiIsInBlcm1hbGluayIsInVzZVN0YXRlIiwiY29waWVkIiwic2V0Q29waWVkIiwidXNlRWZmZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjb3B5V2l0aEZsYWciLCJjb250ZW50IiwiY29weSIsIndpbmRvdyIsIm5hdmlnYXRvciIsInNoYXJlIiwidGl0bGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BS0M7QUFBQTs7QUFBQSxNQUxxQkMsTUFLckIsUUFMcUJBLE1BS3JCO0FBQUEsTUFMNkJDLE9BSzdCLFFBTDZCQSxPQUs3QjtBQUFBLE1BTHNDQyxRQUt0QyxRQUxzQ0EsUUFLdEM7QUFBQSxNQUxnREMsUUFLaEQsUUFMZ0RBLFFBS2hEOztBQUFBLHNCQUNNQyxxRUFBWSxFQURsQjtBQUFBLE1BQ05DLE9BRE0saUJBQ05BLE9BRE07O0FBQUEsc0JBRXlCQyxvRUFBWSxFQUZyQztBQUFBLE1BRU5DLFNBRk0saUJBRU5BLFNBRk07QUFBQSxNQUVLQyxlQUZMLGlCQUVLQSxlQUZMOztBQUFBLG1CQUdPQyw2REFBUyxFQUhoQjtBQUFBLE1BR05DLFFBSE0sY0FHTkEsUUFITTs7QUFLZCxNQUFNQyxPQUFPLEdBQUdSLFFBQWhCO0FBQ0EsTUFBTVMsSUFBSSxHQUFHVixRQUFiO0FBQ0EsTUFBSVcsU0FBd0IsR0FBRyxJQUEvQjs7QUFQ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QUFBRVMsY0FBTSxDQUFDQyxTQUFSLENBQTBCQyxLQUExQixDQUFnQztBQUFFQyxlQUFLLEVBQUUsY0FBVDtBQUF5QkMsYUFBRyxFQUFFZjtBQUE5QixTQUFoQyxXQUFpRixZQUFNLENBQUUsQ0FBekY7QUFDRixPQUhELENBR0UsZ0JBQU07QUFDTlEsb0JBQVksQ0FBQ1IsU0FBRCxDQUFaO0FBQ0Q7QUFDRixLQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FjR0UsTUFBTSxHQUFHLFFBQUgsR0FBYyxpQkFkdkIsQ0FISixDQXBCRixDQUZGLENBREY7QUErQ0Q7O0dBOUV1QmhCLFM7VUFNRkssNkQsRUFDbUJFLDRELEVBQ2xCRyxxRDs7O0tBUkNWLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZHJNb2RhbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHtcbiAgTW9kYWwsXG4gIE1vZGFsT3ZlcmxheSxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgTW9kYWxCb2R5LFxuICBNb2RhbEZvb3RlcixcbiAgVGV4dCxcbiAgU3RhY2ssXG4gIHVzZUNvbG9yTW9kZSxcbiAgQnV0dG9uLFxuICBJbWFnZVxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCdcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRyTW9kYWwoIHsgaXNPcGVuLCBvbkNsb3NlLCBhZGRyQ29pbiwgYWRkckFkZHIgfTogeyBcbiAgaXNPcGVuOiBib29sZWFuOyBcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgYWRkckNvaW46IHN0cmluZztcbiAgYWRkckFkZHI6IHN0cmluZzsgXG59KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgYWRkcmVzcyA9IGFkZHJBZGRyXG4gIGNvbnN0IGNvaW4gPSBhZGRyQ29pblxuICBsZXQgcGVybWFsaW5rOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29waWVkKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldENvcGllZChmYWxzZSlcbiAgICAgIH0sIDc1MClcbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2NvcGllZF0pXG5cbiAgZnVuY3Rpb24gY29weVdpdGhGbGFnKGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvcHkoY29udGVudClcbiAgICBzZXRDb3BpZWQodHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfSBpc0NlbnRlcmVkPlxuICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgPE1vZGFsSGVhZGVyPlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIj5TZW5kIFN0dWZmIEhlcmU8L1RleHQ+XG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXthZGRyZXNzfSBzaXplPVwiMjUwXCIgLz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIG10PVwiNFwiPlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCI+e2NvaW59IGFkZHJlc3MgKGNsaWNrIHRvIGNvcHkpPC9UZXh0PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCI+e2FkZHJlc3N9PC9UZXh0PlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICA8TW9kYWxGb290ZXIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG5cbiAgICAgICAge3R5cGVvZiBwZXJtYWxpbmsgPT09ICdzdHJpbmcnICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjb3BpZWR9XG4gICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZS41MDBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIm1pbi1jb250ZW50XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICAgIDsod2luZG93Lm5hdmlnYXRvciBhcyBhbnkpLnNoYXJlKHsgdGl0bGU6ICdFbWJsZW0gVmF1bHQnLCB1cmw6IHBlcm1hbGluayB9KS5jYXRjaCgoKSA9PiB7fSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgIGNvcHlXaXRoRmxhZyhwZXJtYWxpbmsgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvcGllZCA/ICdDb3BpZWQnIDogJ1NoYXJlIFBlcm1hbGluayd9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddrModal.tsx\n");

/***/ })

})