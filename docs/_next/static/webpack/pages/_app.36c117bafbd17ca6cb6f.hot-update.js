webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/TokenBalance.tsx":
/*!*************************************!*\
  !*** ./components/TokenBalance.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TokenBalance; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _public_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/web3 */ \"./public/web3.js\");\n/* harmony import */ var _public_web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_web3__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ \"./data.ts\");\n/* harmony import */ var _TokenLogo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TokenLogo */ \"./components/TokenLogo.tsx\");\n/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorBoundary */ \"./components/ErrorBoundary.tsx\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context */ \"./context.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks */ \"./hooks.ts\");\n\n\n\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/emblem-vault-site/components/TokenBalance.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nfunction Balance(_ref) {\n  _s();\n\n  var token = _ref.token;\n\n  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__[\"useWeb3React\"])(),\n      account = _useWeb3React.account;\n\n  var _useTokenBalance = Object(_data__WEBPACK_IMPORTED_MODULE_7__[\"useTokenBalance\"])(token, account, true),\n      data = _useTokenBalance.data;\n\n  var _useShowUSD = Object(_context__WEBPACK_IMPORTED_MODULE_10__[\"useShowUSD\"])(),\n      _useShowUSD2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useShowUSD, 1),\n      showUSD = _useShowUSD2[0];\n\n  var USDTokenPrice = Object(_hooks__WEBPACK_IMPORTED_MODULE_11__[\"useUSDTokenPrice\"])(token);\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    as: \"a\",\n    rightIcon: \"external-link\",\n    variant: \"outline\",\n    backgroundColor: _constants__WEBPACK_IMPORTED_MODULE_6__[\"BG\"][colorMode],\n    onClick: function onClick() {\n      var tokenInfo = JSON.parse(JSON.stringify(token));\n      tokenInfo.image = \"https://circuitsofvalue.com/public/coval-logo.png\";\n      Object(_public_web3__WEBPACK_IMPORTED_MODULE_5__[\"addTokenToWallet\"])(token);\n    }\n  }, {\n    //href: formatEtherscanLink(ExplorerTXType.TokenBalance, [token, account as string]),\n    target: '_blank',\n    rel: 'noopener noreferrer'\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }), __jsx(_TokenLogo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    token: token,\n    size: \"1.5rem\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    ml: \"0.5rem\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, showUSD && USDTokenPrice ? \"$\".concat(data.multiply(USDTokenPrice).toFixed(2, {\n    groupSeparator: ','\n  })) : data.toSignificant(6, {\n    groupSeparator: ','\n  })));\n}\n\n_s(Balance, \"sxyl4DE9KwbPwn3VTeqKmVGfskQ=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"], _web3_react_core__WEBPACK_IMPORTED_MODULE_4__[\"useWeb3React\"], _data__WEBPACK_IMPORTED_MODULE_7__[\"useTokenBalance\"], _context__WEBPACK_IMPORTED_MODULE_10__[\"useShowUSD\"], _hooks__WEBPACK_IMPORTED_MODULE_11__[\"useUSDTokenPrice\"]];\n});\n\n_c = Balance;\nfunction TokenBalance(_ref2) {\n  _s2();\n\n  var token = _ref2.token;\n\n  var _useColorMode2 = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"])(),\n      colorMode = _useColorMode2.colorMode;\n\n  return __jsx(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    fallback: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n      variant: \"outline\",\n      backgroundColor: _constants__WEBPACK_IMPORTED_MODULE_6__[\"BG\"][colorMode],\n      icon: \"warning\",\n      \"aria-label\": \"Failed\",\n      isDisabled: true,\n      cursor: \"default !important\",\n      _hover: {},\n      _active: {},\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Suspense\"], {\n    fallback: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      variant: \"outline\",\n      backgroundColor: _constants__WEBPACK_IMPORTED_MODULE_6__[\"BG\"][colorMode],\n      isLoading: true,\n      cursor: \"default !important\",\n      _hover: {},\n      _active: {},\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 11\n      }\n    }, null),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(Balance, {\n    token: token,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s2(TokenBalance, \"2Uu86IH3do63pkN3s1ysdRMmJuc=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"]];\n});\n\n_c2 = TokenBalance;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Balance\");\n$RefreshReg$(_c2, \"TokenBalance\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2tlbkJhbGFuY2UudHN4PzNkODAiXSwibmFtZXMiOlsiQmFsYW5jZSIsInRva2VuIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidXNlV2ViM1JlYWN0IiwiYWNjb3VudCIsInVzZVRva2VuQmFsYW5jZSIsImRhdGEiLCJ1c2VTaG93VVNEIiwic2hvd1VTRCIsIlVTRFRva2VuUHJpY2UiLCJ1c2VVU0RUb2tlblByaWNlIiwiQkciLCJ0b2tlbkluZm8iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJpbWFnZSIsImFkZFRva2VuVG9XYWxsZXQiLCJ0YXJnZXQiLCJyZWwiLCJtdWx0aXBseSIsInRvRml4ZWQiLCJncm91cFNlcGFyYXRvciIsInRvU2lnbmlmaWNhbnQiLCJUb2tlbkJhbGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBeENDLEtBQXdDLFFBQXhDQSxLQUF3Qzs7QUFBQSxzQkFDbkNDLG9FQUFZLEVBRHVCO0FBQUEsTUFDakRDLFNBRGlELGlCQUNqREEsU0FEaUQ7O0FBQUEsc0JBRXRDQyxxRUFBWSxFQUYwQjtBQUFBLE1BRWpEQyxPQUZpRCxpQkFFakRBLE9BRmlEOztBQUFBLHlCQUd4Q0MsNkRBQWUsQ0FBQ0wsS0FBRCxFQUFRSSxPQUFSLEVBQWlCLElBQWpCLENBSHlCO0FBQUEsTUFHakRFLElBSGlELG9CQUdqREEsSUFIaUQ7O0FBQUEsb0JBSXZDQyw0REFBVSxFQUo2QjtBQUFBO0FBQUEsTUFJbERDLE9BSmtEOztBQUt6RCxNQUFNQyxhQUFhLEdBQUdDLGdFQUFnQixDQUFDVixLQUFELENBQXRDO0FBRUEsU0FDRSxNQUFDLHNEQUFEO0FBQ0UsTUFBRSxFQUFDLEdBREw7QUFFRSxhQUFTLEVBQUMsZUFGWjtBQUdFLFdBQU8sRUFBQyxTQUhWO0FBSUUsbUJBQWUsRUFBRVcsNkNBQUUsQ0FBQ1QsU0FBRCxDQUpyQjtBQUtFLFdBQU8sRUFBRSxtQkFBTTtBQUNiLFVBQUlVLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlZixLQUFmLENBQVgsQ0FBaEI7QUFDQVksZUFBUyxDQUFDSSxLQUFWLEdBQWtCLG1EQUFsQjtBQUNBQywyRUFBZ0IsQ0FBQ2pCLEtBQUQsQ0FBaEI7QUFDRDtBQVRILEtBVU07QUFDRjtBQUNBa0IsVUFBTSxFQUFFLFFBRk47QUFHRkMsT0FBRyxFQUFFO0FBSEgsR0FWTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZ0JFLE1BQUMsa0RBQUQ7QUFBVyxTQUFLLEVBQUVuQixLQUFsQjtBQUF5QixRQUFJLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRSxNQUFDLG9EQUFEO0FBQU0sTUFBRSxFQUFDLFFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUSxPQUFPLElBQUlDLGFBQVgsY0FDUUgsSUFBRCxDQUFzQmMsUUFBdEIsQ0FBK0JYLGFBQS9CLEVBQThDWSxPQUE5QyxDQUFzRCxDQUF0RCxFQUF5RDtBQUFFQyxrQkFBYyxFQUFFO0FBQWxCLEdBQXpELENBRFAsSUFFSWhCLElBQUQsQ0FBc0JpQixhQUF0QixDQUFvQyxDQUFwQyxFQUF1QztBQUFFRCxrQkFBYyxFQUFFO0FBQWxCLEdBQXZDLENBSE4sQ0FqQkYsQ0FERjtBQXlCRDs7R0FoQ1F2QixPO1VBQ2VFLDRELEVBQ0hFLDZELEVBQ0ZFLHFELEVBQ0NFLG9ELEVBQ0lHLHdEOzs7S0FMZlgsTztBQW9DTSxTQUFTeUIsWUFBVCxRQUFnRTtBQUFBOztBQUFBLE1BQXhDeEIsS0FBd0MsU0FBeENBLEtBQXdDOztBQUFBLHVCQUN2REMsb0VBQVksRUFEMkM7QUFBQSxNQUNyRUMsU0FEcUUsa0JBQ3JFQSxTQURxRTs7QUFFN0UsU0FDRSxNQUFDLHNEQUFEO0FBQ0UsWUFBUSxFQUNOLE1BQUMsMERBQUQ7QUFDRSxhQUFPLEVBQUMsU0FEVjtBQUVFLHFCQUFlLEVBQUVTLDZDQUFFLENBQUNULFNBQUQsQ0FGckI7QUFHRSxVQUFJLEVBQUMsU0FIUDtBQUlFLG9CQUFXLFFBSmI7QUFLRSxnQkFBVSxNQUxaO0FBTUUsWUFBTSxFQUFDLG9CQU5UO0FBT0UsWUFBTSxFQUFFLEVBUFY7QUFRRSxhQUFPLEVBQUUsRUFSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWNFLE1BQUMsOENBQUQ7QUFDRSxZQUFRLEVBQ04sTUFBQyxzREFBRDtBQUNFLGFBQU8sRUFBQyxTQURWO0FBRUUscUJBQWUsRUFBRVMsNkNBQUUsQ0FBQ1QsU0FBRCxDQUZyQjtBQUdFLGVBQVMsTUFIWDtBQUlFLFlBQU0sRUFBQyxvQkFKVDtBQUtFLFlBQU0sRUFBRSxFQUxWO0FBTUUsYUFBTyxFQUFFLEVBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFHLElBUkgsQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBY0UsTUFBQyxPQUFEO0FBQVMsU0FBSyxFQUFFRixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FkRixDQURGO0FBaUNEOztJQW5DdUJ3QixZO1VBQ0F2Qiw0RDs7O01BREF1QixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ub2tlbkJhbGFuY2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dCwgSWNvbkJ1dHRvbiwgdXNlQ29sb3JNb2RlIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0fSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHsgYWRkVG9rZW5Ub1dhbGxldCB9IGZyb20gJy4uL3B1YmxpYy93ZWIzJ1xuaW1wb3J0IHsgVG9rZW4sIFRva2VuQW1vdW50IH0gZnJvbSAnQHVuaXN3YXAvc2RrJ1xuaW1wb3J0IHsgZm9ybWF0RXRoZXJzY2FuTGluaywgRXhwbG9yZXJUWFR5cGUgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IEJHIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdXNlVG9rZW5CYWxhbmNlIH0gZnJvbSAnLi4vZGF0YSdcbmltcG9ydCBUb2tlbkxvZ28gZnJvbSAnLi9Ub2tlbkxvZ28nXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuL0Vycm9yQm91bmRhcnknXG5pbXBvcnQgeyB1c2VTaG93VVNEIH0gZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCB7IHVzZVVTRFRva2VuUHJpY2UgfSBmcm9tICcuLi9ob29rcydcblxuZnVuY3Rpb24gQmFsYW5jZSh7IHRva2VuIH06IHsgdG9rZW46IFRva2VuIH0pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuICBjb25zdCB7IGFjY291bnR9ID0gdXNlV2ViM1JlYWN0KClcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VUb2tlbkJhbGFuY2UodG9rZW4sIGFjY291bnQsIHRydWUpXG4gIGNvbnN0IFtzaG93VVNEXSA9IHVzZVNob3dVU0QoKVxuICBjb25zdCBVU0RUb2tlblByaWNlID0gdXNlVVNEVG9rZW5QcmljZSh0b2tlbilcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIGFzPVwiYVwiXG4gICAgICByaWdodEljb249XCJleHRlcm5hbC1saW5rXCJcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgIGJhY2tncm91bmRDb2xvcj17QkdbY29sb3JNb2RlXX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgbGV0IHRva2VuSW5mbyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9rZW4pKVxuICAgICAgICB0b2tlbkluZm8uaW1hZ2UgPSBcImh0dHBzOi8vY2lyY3VpdHNvZnZhbHVlLmNvbS9wdWJsaWMvY292YWwtbG9nby5wbmdcIlxuICAgICAgICBhZGRUb2tlblRvV2FsbGV0KHRva2VuKVxuICAgICAgfX1cbiAgICAgIHsuLi57XG4gICAgICAgIC8vaHJlZjogZm9ybWF0RXRoZXJzY2FuTGluayhFeHBsb3JlclRYVHlwZS5Ub2tlbkJhbGFuY2UsIFt0b2tlbiwgYWNjb3VudCBhcyBzdHJpbmddKSxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgcmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUb2tlbkxvZ28gdG9rZW49e3Rva2VufSBzaXplPVwiMS41cmVtXCIgLz5cbiAgICAgIDxUZXh0IG1sPVwiMC41cmVtXCI+XG4gICAgICAgIHtzaG93VVNEICYmIFVTRFRva2VuUHJpY2VcbiAgICAgICAgICA/IGAkJHsoZGF0YSBhcyBUb2tlbkFtb3VudCkubXVsdGlwbHkoVVNEVG9rZW5QcmljZSkudG9GaXhlZCgyLCB7IGdyb3VwU2VwYXJhdG9yOiAnLCcgfSl9YFxuICAgICAgICAgIDogKGRhdGEgYXMgVG9rZW5BbW91bnQpLnRvU2lnbmlmaWNhbnQoNiwgeyBncm91cFNlcGFyYXRvcjogJywnIH0pfVxuICAgICAgPC9UZXh0PlxuICAgIDwvQnV0dG9uPlxuICApICBcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRva2VuQmFsYW5jZSh7IHRva2VuIH06IHsgdG9rZW46IFRva2VuIH0pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuICByZXR1cm4gKFxuICAgIDxFcnJvckJvdW5kYXJ5XG4gICAgICBmYWxsYmFjaz17XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17QkdbY29sb3JNb2RlXX1cbiAgICAgICAgICBpY29uPVwid2FybmluZ1wiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkZhaWxlZFwiXG4gICAgICAgICAgaXNEaXNhYmxlZFxuICAgICAgICAgIGN1cnNvcj1cImRlZmF1bHQgIWltcG9ydGFudFwiXG4gICAgICAgICAgX2hvdmVyPXt7fX1cbiAgICAgICAgICBfYWN0aXZlPXt7fX1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8U3VzcGVuc2VcbiAgICAgICAgZmFsbGJhY2s9e1xuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17QkdbY29sb3JNb2RlXX1cbiAgICAgICAgICAgIGlzTG9hZGluZ1xuICAgICAgICAgICAgY3Vyc29yPVwiZGVmYXVsdCAhaW1wb3J0YW50XCJcbiAgICAgICAgICAgIF9ob3Zlcj17e319XG4gICAgICAgICAgICBfYWN0aXZlPXt7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bnVsbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8QmFsYW5jZSB0b2tlbj17dG9rZW59IC8+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TokenBalance.tsx\n");

/***/ })

})