webpackHotUpdate_N_E("pages/swap",{

/***/ "./components/SwapChain.tsx":
/*!**********************************!*\
  !*** ./components/SwapChain.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SwapChain; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Refreshing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Refreshing */ \"./components/Refreshing.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ \"./hooks.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n/* harmony import */ var _TransactionToast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TransactionToast */ \"./components/TransactionToast.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/emblem-vault-site/components/SwapChain.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction SwapChain() {\n  _s();\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"])(),\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId; // const [vaults, setVaults] = useState([])\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    loaded: false\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loadingApi = _useState2[0],\n      setLoadingApi = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      approving = _useState3[0],\n      setApproving = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      balance = _useState4[0],\n      setBalance = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(query.address),\n      address = _useState5[0],\n      setAddress = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(query.experimental),\n      experimental = _useState6[0],\n      setExperimental = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      decimals = _useState7[0],\n      setDecimals = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      allowance = _useState8[0],\n      setAllowance = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      covalApprovedFor = _useState9[0],\n      setIsCovalApproved = _useState9[1];\n\n  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      hash = _useState10[0],\n      setHash = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(100000000000000),\n      aprovalAmount = _useState11[0],\n      setAprovalAmount = _useState11[1];\n\n  var handlerContract = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__[\"useContract\"])(_constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].vaultHandler[chainId], _constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].vaultHandlerAbi, true);\n  var covalContract = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__[\"useContract\"])(_constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].coval[chainId], _constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].covalAbi, true);\n\n  var getContractStates = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.t0 = setDecimals;\n              _context.next = 3;\n              return covalContract.decimals();\n\n            case 3:\n              _context.t1 = _context.sent;\n              (0, _context.t0)(_context.t1);\n              _context.t2 = setAllowance;\n              _context.next = 8;\n              return covalContract.allowance(account, _constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].vaultHandler[chainId]).then(function (balance) {\n                return balance.toString();\n              });\n\n            case 8:\n              _context.t3 = _context.sent;\n              (0, _context.t2)(_context.t3);\n              _context.t4 = setBalance;\n              _context.next = 13;\n              return covalContract.balanceOf(account).then(function (balance) {\n                return balance.toString();\n              });\n\n            case 13:\n              _context.t5 = _context.sent;\n              (0, _context.t4)(_context.t5);\n\n              if (Number(allowance) >= Number(0)) {\n                setIsCovalApproved(allowance);\n              }\n\n              setState({\n                loaded: true\n              });\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getContractStates() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var approveCovalFlow = function approveCovalFlow() {\n    setApproving(true);\n    covalContract.approve(_constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].vaultHandler[chainId], aprovalAmount.toString()).then(function (_ref2) {\n      var hash = _ref2.hash;\n      setHash(hash);\n    })[\"catch\"](function (error) {\n      if ((error === null || error === void 0 ? void 0 : error.code) == 4001) {\n        setApproving(false);\n      }\n    });\n  }; // const getVaults = async () => {\n  //   loadCache()\n  //   try {\n  //     const response = await fetch(EMBLEM_API + '/vaults/' + (address ? address : account) + (experimental? '?experimental=true' : ''), {\n  //       method: 'GET',\n  //       headers: {\n  //         'Content-Type': 'application/json',\n  //         service: 'evmetadata',\n  //         chainId: chainId.toString(),\n  //       },\n  //     })\n  //     const jsonData = await response.json()\n  //     setState({ loaded: true })\n  //     setVaults(jsonData)\n  //     saveCache(jsonData)\n  //     setLoadingApi(false)\n  //     // console.log(jsonData)\n  //   } catch (error) {}\n  // }\n  // const loadCache = () => {\n  //   let vaults = JSON.parse(localStorage.getItem((address ? address : account) + '_' + chainId + '_vaults')) // Load vaults from storage before updating from server!\n  //   if (vaults) {\n  //     setState({ loaded: true })\n  //     setVaults(vaults)\n  //     setLoadingApi(true)\n  //   }\n  // }\n  // const saveCache = (vaults) => {\n  //   localStorage.setItem((address ? address : account) + '_' + chainId + '_vaults', JSON.stringify(vaults)) // Save new state for later\n  // }\n\n\n  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      acct = _useState12[0],\n      setAcct = _useState12[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (account && acct != account) {\n      setAcct(account);\n      setState({\n        loaded: false\n      });\n      getContractStates();\n    }\n  }, [account, acct]);\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(chainId),\n      chain = _useState13[0],\n      setChain = _useState13[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (chainId && chain != chainId) {\n      setChain(chainId);\n      setState({\n        loaded: false\n      }); // getVaults()\n    }\n  }, [chainId, chain]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    account && chainId ? setState({\n      loaded: true\n    }) : null;\n  }, []);\n  return __jsx(react_loader__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    loaded: state.loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, loadingApi ? __jsx(_Refreshing__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 21\n    }\n  }) : '', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    w: \"100%\",\n    justify: \"center\",\n    mt: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, balance > 0 && allowance > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mt: \"2\",\n    ml: \"4\",\n    lineHeight: \"tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    mt: 2,\n    as: \"h4\",\n    ml: \"4\",\n    mr: \"4\",\n    fontSize: \"s\",\n    fontStyle: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 17\n    }\n  }, \"Transfer up to \", allowance > balance ? balance * Math.pow(10, -decimals) : allowance * Math.pow(10, -decimals), \" Coval from \", chainId == 137 ? \"Matic\" : \"Ethereum\", \" Network to \", chainId == 137 ? \"Etherum\" : \"Matic\", \" Network\")), balance > allowance ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mt: \"2\",\n    ml: \"4\",\n    lineHeight: \"tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: approveCovalFlow,\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 19\n    }\n  }, \"Increase transfer allowance by \", aprovalAmount * Math.pow(10, -decimals), \" Coval\")) : null) : allowance == 0 && !approving ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mt: \"2\",\n    ml: \"4\",\n    lineHeight: \"tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    mt: 2,\n    as: \"h4\",\n    ml: \"4\",\n    mr: \"4\",\n    fontSize: \"s\",\n    fontStyle: \"italic\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: approveCovalFlow,\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 17\n    }\n  }, \"Approve Transfer of up \", balance * Math.pow(10, -decimals), \" Coval\"))) : balance === 0 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mt: \"2\",\n    ml: \"4\",\n    lineHeight: \"tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    mt: 2,\n    as: \"h4\",\n    ml: \"4\",\n    mr: \"4\",\n    fontSize: \"s\",\n    fontStyle: \"italic\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 15\n    }\n  }, \"You have no Coval to transfer\")) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mt: \"2\",\n    ml: \"4\",\n    lineHeight: \"tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    mt: 2,\n    as: \"h4\",\n    ml: \"4\",\n    mr: \"4\",\n    fontSize: \"s\",\n    fontStyle: \"italic\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 15\n    }\n  })))), hash ? __jsx(_TransactionToast__WEBPACK_IMPORTED_MODULE_10__[\"TransactionToast\"], {\n    hash: hash,\n    onComplete: function onComplete() {\n      setHash(null);\n\n      if (!approving) {} else {\n        setApproving(false);\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 9\n    }\n  }) : null);\n}\n\n_s(SwapChain, \"f3cNDxktd1wYc0A2+skUzJO3pSs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"], _web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"], _hooks__WEBPACK_IMPORTED_MODULE_8__[\"useContract\"], _hooks__WEBPACK_IMPORTED_MODULE_8__[\"useContract\"]];\n});\n\n_c = SwapChain;\n\nvar _c;\n\n$RefreshReg$(_c, \"SwapChain\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2FwQ2hhaW4udHN4PzExNGQiXSwibmFtZXMiOlsiU3dhcENoYWluIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VXZWIzUmVhY3QiLCJhY2NvdW50IiwiY2hhaW5JZCIsInVzZVN0YXRlIiwibG9hZGVkIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRpbmdBcGkiLCJzZXRMb2FkaW5nQXBpIiwiYXBwcm92aW5nIiwic2V0QXBwcm92aW5nIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImV4cGVyaW1lbnRhbCIsInNldEV4cGVyaW1lbnRhbCIsImRlY2ltYWxzIiwic2V0RGVjaW1hbHMiLCJhbGxvd2FuY2UiLCJzZXRBbGxvd2FuY2UiLCJjb3ZhbEFwcHJvdmVkRm9yIiwic2V0SXNDb3ZhbEFwcHJvdmVkIiwiaGFzaCIsInNldEhhc2giLCJhcHJvdmFsQW1vdW50Iiwic2V0QXByb3ZhbEFtb3VudCIsImhhbmRsZXJDb250cmFjdCIsInVzZUNvbnRyYWN0IiwiY29udHJhY3RBZGRyZXNzZXMiLCJ2YXVsdEhhbmRsZXIiLCJ2YXVsdEhhbmRsZXJBYmkiLCJjb3ZhbENvbnRyYWN0IiwiY292YWwiLCJjb3ZhbEFiaSIsImdldENvbnRyYWN0U3RhdGVzIiwidGhlbiIsInRvU3RyaW5nIiwiYmFsYW5jZU9mIiwiTnVtYmVyIiwiYXBwcm92ZUNvdmFsRmxvdyIsImFwcHJvdmUiLCJlcnJvciIsImNvZGUiLCJhY2N0Iiwic2V0QWNjdCIsInVzZUVmZmVjdCIsImNoYWluIiwic2V0Q2hhaW4iLCJNYXRoIiwicG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLG1CQUNoQkMsNkRBQVMsRUFETztBQUFBLE1BQzFCQyxL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ZjtBQUFtQixjQUFVLEVBQUMsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxNQUFFLEVBQUUsQ0FBVjtBQUFhLE1BQUUsRUFBQyxJQUFoQjtBQUFxQixNQUFFLEVBQUMsR0FBeEI7QUFBNEIsTUFBRSxFQUFDLEdBQS9CO0FBQW1DLFlBQVEsRUFBQyxHQUE1QztBQUFnRCxhQUFTLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBL0JKLENBREYsQ0FIRixFQTJDR1ksSUFBSSxHQUNILE1BQUMsbUVBQUQ7QUFDRSxRQUFJLEVBQUVBLElBRFI7QUFFRSxjQUFVLEVBQUUsc0JBQU07QUFDaEJDLGFBQU8sQ0FBQyxJQUFELENBQVA7O0FBQ0UsVUFBSSxDQUFDZixTQUFMLEVBQWdCLENBRWYsQ0FGRCxNQUVPO0FBQ0xDLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7QUFDSixLQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERyxHQVlELElBdkROLENBREY7QUEyREQ7O0dBdEt1QmIsUztVQUNKQyxxRCxFQUNXRSw2RCxFQWNMNEIsa0QsRUFDRkEsa0Q7OztLQWpCQS9CLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBDaGFpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQsIExpbmssIEltYWdlLCBTdGFjaywgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXInXG5pbXBvcnQgUmVmcmVzaGluZyBmcm9tICcuL1JlZnJlc2hpbmcnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB2YWxpZEltYWdlIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyB1c2VDb250cmFjdCB9IGZyb20gJy4uL2hvb2tzJ1xuaW1wb3J0IHsgQ29udHJhY3QgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9jb250cmFjdHMnXG5pbXBvcnQgeyBFTUJMRU1fQVBJLCBjb250cmFjdEFkZHJlc3NlcyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IFRyYW5zYWN0aW9uVG9hc3QgfSBmcm9tICcuL1RyYW5zYWN0aW9uVG9hc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN3YXBDaGFpbigpIHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBhY2NvdW50LCBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxuICAvLyBjb25zdCBbdmF1bHRzLCBzZXRWYXVsdHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pXG4gIGNvbnN0IFtsb2FkaW5nQXBpLCBzZXRMb2FkaW5nQXBpXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbYXBwcm92aW5nLCBzZXRBcHByb3ZpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKHF1ZXJ5LmFkZHJlc3MpXG4gIGNvbnN0IFtleHBlcmltZW50YWwsIHNldEV4cGVyaW1lbnRhbF0gPSB1c2VTdGF0ZShxdWVyeS5leHBlcmltZW50YWwpXG4gIGNvbnN0IFtkZWNpbWFscywgc2V0RGVjaW1hbHNdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2FsbG93YW5jZSwgc2V0QWxsb3dhbmNlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtjb3ZhbEFwcHJvdmVkRm9yLCBzZXRJc0NvdmFsQXBwcm92ZWRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2hhc2gsIHNldEhhc2hdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2Fwcm92YWxBbW91bnQsIHNldEFwcm92YWxBbW91bnRdID0gdXNlU3RhdGUoMTAwMDAwMDAwMDAwMDAwKVxuXG4gIGNvbnN0IGhhbmRsZXJDb250cmFjdCA9IHVzZUNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzc2VzLnZhdWx0SGFuZGxlcltjaGFpbklkXSwgY29udHJhY3RBZGRyZXNzZXMudmF1bHRIYW5kbGVyQWJpLCB0cnVlKVxuICBjb25zdCBjb3ZhbENvbnRyYWN0ID0gdXNlQ29udHJhY3QoY29udHJhY3RBZGRyZXNzZXMuY292YWxbY2hhaW5JZF0sIGNvbnRyYWN0QWRkcmVzc2VzLmNvdmFsQWJpLCB0cnVlKVxuXG5cbiAgaW50ZXJmYWNlIEVycm9yV2l0aENvZGUgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29kZT86IG51bWJlclxuICB9XG5cbiAgY29uc3QgZ2V0Q29udHJhY3RTdGF0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0RGVjaW1hbHMoYXdhaXQgY292YWxDb250cmFjdC5kZWNpbWFscygpKVxuICAgIHNldEFsbG93YW5jZShcbiAgICAgIGF3YWl0IGNvdmFsQ29udHJhY3RcbiAgICAgICAgLmFsbG93YW5jZShhY2NvdW50LCBjb250cmFjdEFkZHJlc3Nlcy52YXVsdEhhbmRsZXJbY2hhaW5JZF0pXG4gICAgICAgIC50aGVuKChiYWxhbmNlOiB7IHRvU3RyaW5nOiAoKSA9PiBzdHJpbmcgfSkgPT4gYmFsYW5jZS50b1N0cmluZygpKVxuICAgIClcbiAgICBzZXRCYWxhbmNlKGF3YWl0IGNvdmFsQ29udHJhY3QuYmFsYW5jZU9mKGFjY291bnQpLnRoZW4oKGJhbGFuY2U6IHsgdG9TdHJpbmc6ICgpID0+IHN0cmluZyB9KSA9PiBiYWxhbmNlLnRvU3RyaW5nKCkpKVxuICAgIGlmIChOdW1iZXIoYWxsb3dhbmNlKSA+PSBOdW1iZXIoMCkpIHtcbiAgICAgIHNldElzQ292YWxBcHByb3ZlZChhbGxvd2FuY2UpXG4gICAgfVxuICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gIH1cblxuICBjb25zdCBhcHByb3ZlQ292YWxGbG93ID0gKCkgPT4ge1xuICAgIHNldEFwcHJvdmluZyh0cnVlKVxuICAgIDsoY292YWxDb250cmFjdCBhcyBDb250cmFjdClcbiAgICAgIC5hcHByb3ZlKGNvbnRyYWN0QWRkcmVzc2VzLnZhdWx0SGFuZGxlcltjaGFpbklkXSwgYXByb3ZhbEFtb3VudC50b1N0cmluZygpKVxuICAgICAgLnRoZW4oKHsgaGFzaCB9OiB7IGhhc2g6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgIHNldEhhc2goaGFzaClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcldpdGhDb2RlKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcj8uY29kZSA9PSA0MDAxKSB7XG4gICAgICAgICAgc2V0QXBwcm92aW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgLy8gY29uc3QgZ2V0VmF1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGxvYWRDYWNoZSgpXG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goRU1CTEVNX0FQSSArICcvdmF1bHRzLycgKyAoYWRkcmVzcyA/IGFkZHJlc3MgOiBhY2NvdW50KSArIChleHBlcmltZW50YWw/ICc/ZXhwZXJpbWVudGFsPXRydWUnIDogJycpLCB7XG4gIC8vICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gIC8vICAgICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAvLyAgICAgICAgIHNlcnZpY2U6ICdldm1ldGFkYXRhJyxcbiAgLy8gICAgICAgICBjaGFpbklkOiBjaGFpbklkLnRvU3RyaW5nKCksXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICB9KVxuICAvLyAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgLy8gICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gIC8vICAgICBzZXRWYXVsdHMoanNvbkRhdGEpXG4gIC8vICAgICBzYXZlQ2FjaGUoanNvbkRhdGEpXG4gIC8vICAgICBzZXRMb2FkaW5nQXBpKGZhbHNlKVxuICAvLyAgICAgLy8gY29uc29sZS5sb2coanNvbkRhdGEpXG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIC8vIH1cblxuICAvLyBjb25zdCBsb2FkQ2FjaGUgPSAoKSA9PiB7XG4gIC8vICAgbGV0IHZhdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oKGFkZHJlc3MgPyBhZGRyZXNzIDogYWNjb3VudCkgKyAnXycgKyBjaGFpbklkICsgJ192YXVsdHMnKSkgLy8gTG9hZCB2YXVsdHMgZnJvbSBzdG9yYWdlIGJlZm9yZSB1cGRhdGluZyBmcm9tIHNlcnZlciFcbiAgLy8gICBpZiAodmF1bHRzKSB7XG4gIC8vICAgICBzZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KVxuICAvLyAgICAgc2V0VmF1bHRzKHZhdWx0cylcbiAgLy8gICAgIHNldExvYWRpbmdBcGkodHJ1ZSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyBjb25zdCBzYXZlQ2FjaGUgPSAodmF1bHRzKSA9PiB7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oKGFkZHJlc3MgPyBhZGRyZXNzIDogYWNjb3VudCkgKyAnXycgKyBjaGFpbklkICsgJ192YXVsdHMnLCBKU09OLnN0cmluZ2lmeSh2YXVsdHMpKSAvLyBTYXZlIG5ldyBzdGF0ZSBmb3IgbGF0ZXJcbiAgLy8gfVxuXG4gIGNvbnN0IFthY2N0LCBzZXRBY2N0XSA9IHVzZVN0YXRlKCcnKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY2NvdW50ICYmIGFjY3QgIT0gYWNjb3VudCkge1xuICAgICAgc2V0QWNjdChhY2NvdW50KVxuICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pXG4gICAgICBnZXRDb250cmFjdFN0YXRlcygpXG4gICAgfVxuICB9LCBbYWNjb3VudCwgYWNjdF0pXG5cbiAgY29uc3QgW2NoYWluLCBzZXRDaGFpbl0gPSB1c2VTdGF0ZShjaGFpbklkKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjaGFpbklkICYmIGNoYWluICE9IGNoYWluSWQpIHtcbiAgICAgIHNldENoYWluKGNoYWluSWQpXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRlZDogZmFsc2UgfSlcbiAgICAgIC8vIGdldFZhdWx0cygpXG4gICAgfVxuICB9LCBbY2hhaW5JZCwgY2hhaW5dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWNjb3VudCAmJiBjaGFpbklkID8gc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSkgOiBudWxsXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExvYWRlciBsb2FkZWQ9e3N0YXRlLmxvYWRlZH0+XG4gICAgICB7bG9hZGluZ0FwaSA/IDxSZWZyZXNoaW5nIC8+IDogJyd9XG5cbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIganVzdGlmeT1cImNlbnRlclwiIG10PXsxMH0+XG4gICAgICAgIDxTdGFjayBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIHtiYWxhbmNlID4gMCAmJiBhbGxvd2FuY2UgPiAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEJveCBtdD1cIjJcIiBtbD1cIjRcIiBsaW5lSGVpZ2h0PVwidGlnaHRcIj5cbiAgICAgICAgICAgICAgICA8VGV4dCBtdD17Mn0gYXM9XCJoNFwiIG1sPVwiNFwiIG1yPVwiNFwiIGZvbnRTaXplPVwic1wiIGZvbnRTdHlsZT1cIlwiID5cbiAgICAgICAgICAgICAgICAgIFRyYW5zZmVyIHVwIHRvIHthbGxvd2FuY2UgPiBiYWxhbmNlID8gYmFsYW5jZSAqIE1hdGgucG93KDEwLCAtZGVjaW1hbHMpIDogYWxsb3dhbmNlICogTWF0aC5wb3coMTAsIC1kZWNpbWFscykgfSBDb3ZhbCBmcm9tIHtjaGFpbklkID09IDEzNyA/IFwiTWF0aWNcIiA6IFwiRXRoZXJldW1cIn0gTmV0d29yayB0byB7Y2hhaW5JZCA9PSAxMzcgPyBcIkV0aGVydW1cIiA6IFwiTWF0aWNcIn0gTmV0d29ya1xuICAgICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAge2JhbGFuY2UgPiBhbGxvd2FuY2UgPyAoICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Qm94IG10PVwiMlwiIG1sPVwiNFwiIGxpbmVIZWlnaHQ9XCJ0aWdodFwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthcHByb3ZlQ292YWxGbG93fSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIEluY3JlYXNlIHRyYW5zZmVyIGFsbG93YW5jZSBieSB7IGFwcm92YWxBbW91bnQgKiBNYXRoLnBvdygxMCwgLWRlY2ltYWxzKSB9IENvdmFsXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKSA6IG51bGwgfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IGFsbG93YW5jZSA9PSAwICYmICFhcHByb3ZpbmcgPyAoXG4gICAgICAgICAgICA8Qm94IG10PVwiMlwiIG1sPVwiNFwiIGxpbmVIZWlnaHQ9XCJ0aWdodFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtdD17Mn0gYXM9XCJoNFwiIG1sPVwiNFwiIG1yPVwiNFwiIGZvbnRTaXplPVwic1wiIGZvbnRTdHlsZT1cIml0YWxpY1wiID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FwcHJvdmVDb3ZhbEZsb3d9IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIEFwcHJvdmUgVHJhbnNmZXIgb2YgdXAge2JhbGFuY2UgKiBNYXRoLnBvdygxMCwgLWRlY2ltYWxzKX0gQ292YWxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSA6IGJhbGFuY2UgPT09IDAgPyAoXG4gICAgICAgICAgICA8Qm94IG10PVwiMlwiIG1sPVwiNFwiIGxpbmVIZWlnaHQ9XCJ0aWdodFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtdD17Mn0gYXM9XCJoNFwiIG1sPVwiNFwiIG1yPVwiNFwiIGZvbnRTaXplPVwic1wiIGZvbnRTdHlsZT1cIml0YWxpY1wiID5cbiAgICAgICAgICAgICAgICBZb3UgaGF2ZSBubyBDb3ZhbCB0byB0cmFuc2ZlclxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJveCBtdD1cIjJcIiBtbD1cIjRcIiBsaW5lSGVpZ2h0PVwidGlnaHRcIj5cbiAgICAgICAgICAgICAgPFRleHQgbXQ9ezJ9IGFzPVwiaDRcIiBtbD1cIjRcIiBtcj1cIjRcIiBmb250U2l6ZT1cInNcIiBmb250U3R5bGU9XCJpdGFsaWNcIiA+XG4gICAgICAgICAgICAgICAgey8qIFVua25vd24gc3RhdGUgKi99XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0ZsZXg+XG4gICAgICB7aGFzaCA/IChcbiAgICAgICAgPFRyYW5zYWN0aW9uVG9hc3RcbiAgICAgICAgICBoYXNoPXtoYXNofVxuICAgICAgICAgIG9uQ29tcGxldGU9eygpID0+IHtcbiAgICAgICAgICAgIHNldEhhc2gobnVsbCkgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKCFhcHByb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRBcHByb3ZpbmcoZmFsc2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9Mb2FkZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SwapChain.tsx\n");

/***/ })

})