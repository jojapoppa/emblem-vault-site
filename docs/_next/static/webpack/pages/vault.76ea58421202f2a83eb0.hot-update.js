webpackHotUpdate_N_E("pages/vault",{

/***/ "./components/Vault.tsx":
/*!******************************!*\
  !*** ./components/Vault.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vault; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ \"./utils.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/dcode/dev/emblem/emblem-vault-uni/components/Vault.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\n\n\n\n\n\n\nfunction Vault() {\n  _s();\n\n  var _this = this;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__[\"useWeb3React\"])(),\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      query = _useRouter.query,\n      pathname = _useRouter.pathname,\n      replace = _useRouter.replace;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(query.id),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      tokenId = _React$useState2[0],\n      setTokenId = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(''),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState3, 2),\n      vaultName = _React$useState4[0],\n      setVaultName = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(''),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState5, 2),\n      vaultDesc = _React$useState6[0],\n      setVaultDesc = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(''),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, 2),\n      vaultImage = _React$useState8[0],\n      setVaultImage = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState([]),\n      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState9, 2),\n      vaultValues = _React$useState10[0],\n      setVaultValues = _React$useState10[1];\n\n  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState([]),\n      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState11, 2),\n      vaultAddresses = _React$useState12[0],\n      setVaultAddresses = _React$useState12[1];\n\n  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState({\n    loaded: false\n  }),\n      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState13, 2),\n      state = _React$useState14[0],\n      setState = _React$useState14[1];\n\n  var getVault = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var responce, jsonData;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(_constants__WEBPACK_IMPORTED_MODULE_9__[\"EMBLEM_API\"] + '/meta/' + tokenId, {\n                method: 'GET',\n                headers: {\n                  'Content-Type': 'application/json',\n                  service: 'evmetadata',\n                  chainId: chainId.toString()\n                }\n              });\n\n            case 2:\n              responce = _context.sent;\n              _context.next = 5;\n              return responce.json();\n\n            case 5:\n              jsonData = _context.sent;\n              setVaultName(jsonData.name);\n              setVaultImage(jsonData.image);\n              setVaultDesc(jsonData.description);\n              setVaultValues(jsonData.values);\n              setVaultDesc(jsonData.description);\n              setVaultAddresses(jsonData.addresses);\n              setState({\n                loaded: true\n              });\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getVault() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    getVault();\n  }, []);\n\n  function splitDescription(words) {\n    var desc = words.split('Emblem Vault Basic');\n    return desc[0].trim();\n  }\n\n  return __jsx(react_loader__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    loaded: state.loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    width: \"full\",\n    align: \"center\",\n    justifyContent: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    maxW: \"sm\",\n    borderWidth: \"1px\",\n    rounded: \"lg\",\n    overflow: \"hidden\",\n    alignItems: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mt: \"1\",\n    fontWeight: \"semibold\",\n    as: \"h3\",\n    lineHeight: \"tight\",\n    p: 2,\n    textAlign: \"center\",\n    textTransform: \"uppercase\",\n    alignItems: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, vaultName), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    src: Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"validImage\"])(vaultImage) ? vaultImage : 'https://circuitsofvalue.com/public/coval-logo.png',\n    size: \"250px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mt: \"1\",\n    fontWeight: \"semibold\",\n    as: \"h4\",\n    lineHeight: \"tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, splitDescription(vaultDesc))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    p: \"6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    d: \"flex\",\n    alignItems: \"baseline\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    color: \"gray.500\",\n    fontWeight: \"semibold\",\n    letterSpacing: \"wide\",\n    fontSize: \"xs\",\n    ml: \"2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 15\n    }\n  }, vaultValues.length ? vaultValues.map(function (coin) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n      key: coin.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 23\n      }\n    }, coin.balance, \" \", coin.name);\n  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 19\n    }\n  }, \"Nothing in here! Fill 'er up!\")))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mt: \"1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, vaultAddresses.toString()))));\n}\n\n_s(Vault, \"mS1c2IWsVGLIBnBv3gKP9YeUkRc=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_4__[\"useWeb3React\"], next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Vault;\n\nvar _c;\n\n$RefreshReg$(_c, \"Vault\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYXVsdC50c3g/MjljMSJdLCJuYW1lcyI6WyJWYXVsdCIsInVzZVdlYjNSZWFjdCIsImFjY291bnQiLCJjaGFpbklkIiwidXNlUm91dGVyIiwicXVlcnkiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiaWQiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsInZhdWx0TmFtZSIsInNldFZhdWx0TmFtZSIsInZhdWx0RGVzYyIsInNldFZhdWx0RGVzYyIsInZhdWx0SW1hZ2UiLCJzZXRWYXVsdEltYWdlIiwidmF1bHRWYWx1ZXMiLCJzZXRWYXVsdFZhbHVlcyIsInZhdWx0QWRkcmVzc2VzIiwic2V0VmF1bHRBZGRyZXNzZXMiLCJsb2FkZWQiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0VmF1bHQiLCJmZXRjaCIsIkVNQkxFTV9BUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwic2VydmljZSIsInRvU3RyaW5nIiwicmVzcG9uY2UiLCJqc29uIiwianNvbkRhdGEiLCJuYW1lIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInZhbHVlcyIsImFkZHJlc3NlcyIsInVzZUVmZmVjdCIsInNwbGl0RGVzY3JpcHRpb24iLCJ3b3JkcyIsImRlc2MiLCJzcGxpdCIsInRyaW0iLCJ2YWxpZEltYWdlIiwibGVuZ3RoIiwibWFwIiwiY29pbiIsImJhbGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLHNCQUNEQyxxRUFBWSxFQURYO0FBQUEsTUFDdEJDLE9BRHNCLGlCQUN0QkEsT0FEc0I7QUFBQSxNQUNiQyxPQURhLGlCQUNiQSxPQURhOztBQUFBLG1CQUVPQyw2REFBUyxFQUZoQjtBQUFBLE1BRXRCQyxLQUZzQixjQUV0QkEsS0FGc0I7QUFBQSxNQUVm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QUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssS0FBQyxFQUFDLE1BQVA7QUFBYyxjQUFVLEVBQUMsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxTQUFLLEVBQUMsVUFBWDtBQUFzQixjQUFVLEVBQUMsVUFBakM7QUFBNEMsaUJBQWEsRUFBQyxNQUExRDtBQUFpRSxZQUFRLEVBQUMsSUFBMUU7QUFBK0UsTUFBRSxFQUFDLEdBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksV0FBVyxDQUFDNkIsTUFBWixHQUNDN0IsV0FBVyxDQUFDOEIsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDeEIsV0FDRSxNQUFDLG9EQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNkLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2MsSUFBSSxDQUFDQyxPQURSLE9BQ2tCRCxJQUFJLENBQUNkLElBRHZCLENBREY7QUFLRCxHQU5ELENBREQsR0FTQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBVkosQ0FERixDQURGLENBeEJGLEVBeUNJLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dmLGNBQWMsQ0FBQ1csUUFBZixFQURILENBekNKLENBREYsQ0FERixDQURGO0FBbUREOztHQTFGdUJoQyxLO1VBQ09DLDZELEVBQ1FHLHFEOzs7S0FGZkosSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmF1bHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSwgVGV4dCwgU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5cbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlcidcblxuaW1wb3J0IHsgdmFsaWRJbWFnZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgRU1CTEVNX0FQSSB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmF1bHQoKSB7XG4gIGNvbnN0IHsgYWNjb3VudCwgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcbiAgY29uc3QgeyBxdWVyeSwgcGF0aG5hbWUsIHJlcGxhY2UgfSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt0b2tlbklkLCBzZXRUb2tlbklkXSA9IFJlYWN0LnVzZVN0YXRlKHF1ZXJ5LmlkKVxuICBjb25zdCBbdmF1bHROYW1lLCBzZXRWYXVsdE5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFt2YXVsdERlc2MsIHNldFZhdWx0RGVzY10gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW3ZhdWx0SW1hZ2UsIHNldFZhdWx0SW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFt2YXVsdFZhbHVlcywgc2V0VmF1bHRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoW10pXG4gIGNvbnN0IFt2YXVsdEFkZHJlc3Nlcywgc2V0VmF1bHRBZGRyZXNzZXNdID0gUmVhY3QudXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pXG5cbiAgY29uc3QgZ2V0VmF1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaChFTUJMRU1fQVBJICsgJy9tZXRhLycgKyB0b2tlbklkLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBzZXJ2aWNlOiAnZXZtZXRhZGF0YScsXG4gICAgICAgIGNoYWluSWQ6IGNoYWluSWQudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbmNlLmpzb24oKVxuICAgIHNldFZhdWx0TmFtZShqc29uRGF0YS5uYW1lKVxuICAgIHNldFZhdWx0SW1hZ2UoanNvbkRhdGEuaW1hZ2UpXG4gICAgc2V0VmF1bHREZXNjKGpzb25EYXRhLmRlc2NyaXB0aW9uKVxuICAgIHNldFZhdWx0VmFsdWVzKGpzb25EYXRhLnZhbHVlcylcbiAgICBzZXRWYXVsdERlc2MoanNvbkRhdGEuZGVzY3JpcHRpb24pXG4gICAgc2V0VmF1bHRBZGRyZXNzZXMoanNvbkRhdGEuYWRkcmVzc2VzKVxuICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFZhdWx0KClcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gc3BsaXREZXNjcmlwdGlvbih3b3Jkcykge1xuICAgIHZhciBkZXNjID0gd29yZHMuc3BsaXQoJ0VtYmxlbSBWYXVsdCBCYXNpYycpXG4gICAgcmV0dXJuIGRlc2NbMF0udHJpbSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2FkZXIgbG9hZGVkPXtzdGF0ZS5sb2FkZWR9PlxuICAgICAgPEZsZXggd2lkdGg9XCJmdWxsXCIgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICA8Qm94IG1heFc9XCJzbVwiIGJvcmRlcldpZHRoPVwiMXB4XCIgcm91bmRlZD1cImxnXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgbXQ9XCIxXCJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiXG4gICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCJ0aWdodFwiXG4gICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ZhdWx0TmFtZX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8U3RhY2sgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3ZhbGlkSW1hZ2UodmF1bHRJbWFnZSkgPyB2YXVsdEltYWdlIDogJ2h0dHBzOi8vY2lyY3VpdHNvZnZhbHVlLmNvbS9wdWJsaWMvY292YWwtbG9nby5wbmcnfVxuICAgICAgICAgICAgICBzaXplPVwiMjUwcHhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxTdGFjayBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEJveCBtdD1cIjFcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBhcz1cImg0XCIgbGluZUhlaWdodD1cInRpZ2h0XCI+XG4gICAgICAgICAgICAgIHtzcGxpdERlc2NyaXB0aW9uKHZhdWx0RGVzYyl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxCb3ggcD1cIjZcIj5cbiAgICAgICAgICAgIDxCb3ggZD1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiYmFzZWxpbmVcIj5cbiAgICAgICAgICAgICAgPEJveCBjb2xvcj1cImdyYXkuNTAwXCIgZm9udFdlaWdodD1cInNlbWlib2xkXCIgbGV0dGVyU3BhY2luZz1cIndpZGVcIiBmb250U2l6ZT1cInhzXCIgbWw9XCIyXCI+XG4gICAgICAgICAgICAgICAge3ZhdWx0VmFsdWVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgIHZhdWx0VmFsdWVzLm1hcCgoY29pbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGtleT17Y29pbi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLmJhbGFuY2V9IHtjb2luLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dD5Ob3RoaW5nIGluIGhlcmUhIEZpbGwgJ2VyIHVwITwvVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBtdD1cIjFcIiA+XG4gICAgICAgICAgICAgIHt2YXVsdEFkZHJlc3Nlcy50b1N0cmluZygpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9GbGV4PlxuICAgIDwvTG9hZGVyPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Vault.tsx\n");

/***/ })

})