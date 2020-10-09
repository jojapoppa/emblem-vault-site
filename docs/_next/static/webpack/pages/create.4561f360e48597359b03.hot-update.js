webpackHotUpdate_N_E("pages/create",{

/***/ "./tokens.ts":
/*!*******************!*\
  !*** ./tokens.ts ***!
  \*******************/
/*! exports provided: DAI, USDC, Coval, CovalTest, CovalTestMatic, CovalMatic, DEFAULT_TOKENS, useAllTokens, useTokenByAddressAndAutomaticallyAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAI\", function() { return DAI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USDC\", function() { return USDC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Coval\", function() { return Coval; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CovalTest\", function() { return CovalTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CovalTestMatic\", function() { return CovalTestMatic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CovalMatic\", function() { return CovalMatic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_TOKENS\", function() { return DEFAULT_TOKENS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAllTokens\", function() { return useAllTokens; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useTokenByAddressAndAutomaticallyAdd\", function() { return useTokenByAddressAndAutomaticallyAdd; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uniswap/sdk */ \"./node_modules/@uniswap/sdk/dist/sdk.esm.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ \"./context.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ \"./data.ts\");\n\n\n\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\nvar DAI = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');\nvar USDC = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin');\nvar Coval = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0x3D658390460295FB963f54dC0899cfb1c30776Df', 8, 'Coval', 'Circuits of Value');\nvar CovalTest = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].RINKEBY, '0x44c1a9d7d1f932b4c2811a70edffdd6ae2eb60e6', 8, 'Coval', 'Circuits of Value');\nvar CovalTestMatic = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].RINKEBY, '0x5cCa9D75DF2dFC117855adD4DD45727dee5287EC', 8, 'Coval', 'Circuits of Value');\nvar CovalMatic = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].RINKEBY, '0x5cCa9D75DF2dFC117855adD4DD45727dee5287EC', 8, 'Coval', 'Circuits of Value');\nvar DEFAULT_TOKENS = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object.values(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"WETH\"])), [// stablecoins\nDAI, USDC, Coval, CovalTest, CovalTestMatic, CovalMatic, // new Token(ChainId.RINKEBY, '0x44c1a9d7d1f932b4c2811a70edffdd6ae2eb60e6', 8, 'Coval', 'Circuits of Value'),\nnew _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD'), // stablecoin derivatives\nnew _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'), new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0x06AF07097C9Eeb7fD685c692751D5C66dB49c215', 18, 'CHAI', 'Chai'), new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin'), // compound\nnew _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound'), // maker\nnew _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker'), // uma\nnew _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828', 18, 'UMA', 'UMA Voting Token v1'), // wbtc\nnew _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC'), // donut\nnew _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].MAINNET, '0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9', 18, 'DONUT', 'Donut'), // kovan\nnew _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].KOVAN, '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa', 18, 'DAI', 'Dai Stablecoin'), new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_4__[\"ChainId\"].KOVAN, '0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD', 18, 'MKR', 'Maker')]);\nfunction useAllTokens() {\n  _s();\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__[\"useWeb3React\"])(),\n      chainId = _useWeb3React.chainId;\n\n  var _useLocalStorageToken = Object(_context__WEBPACK_IMPORTED_MODULE_5__[\"useLocalStorageTokens\"])(),\n      _useLocalStorageToken2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalStorageToken, 2),\n      tokens = _useLocalStorageToken2[0],\n      _useLocalStorageToken3 = _useLocalStorageToken2[1],\n      addToken = _useLocalStorageToken3.addToken,\n      removeToken = _useLocalStorageToken3.removeToken;\n\n  return [Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    var seen = {};\n    return DEFAULT_TOKENS.concat(tokens).filter(function (token) {\n      if (token.chainId === chainId && !seen[token.address]) {\n        seen[token.address] = true;\n        return true;\n      } else {\n        return false;\n      }\n    });\n  }, [tokens, chainId]), {\n    addToken: addToken,\n    removeToken: removeToken\n  }];\n}\n\n_s(useAllTokens, \"Dj0JGuHdrNZQmx1FoyJ+pSOxtrc=\", false, function () {\n  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__[\"useWeb3React\"], _context__WEBPACK_IMPORTED_MODULE_5__[\"useLocalStorageTokens\"]];\n});\n\nfunction useTokenByAddressAndAutomaticallyAdd(tokenAddress) {\n  _s2();\n\n  var _useAllTokens = useAllTokens(),\n      _useAllTokens2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useAllTokens, 2),\n      allTokens = _useAllTokens2[0],\n      addToken = _useAllTokens2[1].addToken;\n\n  var token = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return allTokens.filter(function (token) {\n      return token.address === tokenAddress;\n    })[0];\n  }, [allTokens, tokenAddress]); // fetches onchain data for tokens if they're not in our list already, then adds them to the list\n\n  var _useOnchainToken = Object(_data__WEBPACK_IMPORTED_MODULE_6__[\"useOnchainToken\"])(token ? undefined : tokenAddress),\n      data = _useOnchainToken.data;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (data) {\n      addToken(data);\n    }\n  }, [data, addToken]);\n  return token;\n}\n\n_s2(useTokenByAddressAndAutomaticallyAdd, \"ayIvkDeYw0xdVd1ii2AnYYvjrew=\", false, function () {\n  return [useAllTokens, _data__WEBPACK_IMPORTED_MODULE_6__[\"useOnchainToken\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdG9rZW5zLnRzP2Q2NTgiXSwibmFtZXMiOlsiREFJIiwiVG9rZW4iLCJDaGFpbklkIiwiTUFJTk5FVCIsIlVTREMiLCJDb3ZhbCIsIkNvdmFsVGVzdCIsIlJJTktFQlkiLCJDb3ZhbFRlc3RNYXRpYyIsIkNvdmFsTWF0aWMiLCJERUZBVUxUX1RPS0VOUyIsIk9iamVjdCIsInZhbHVlcyIsIldFVEgiLCJLT1ZBTiIsInVzZUFsbFRva2VucyIsInVzZVdlYjNSZWFjdCIsImNoYWluSWQiLCJ1c2VMb2NhbFN0b3JhZ2VUb2tlbnMiLCJ0b2tlbnMiLCJhZGRUb2tlbiIsInJlbW92ZVRva2VuIiwidXNlTWVtbyIsInNlZW4iLCJjb25jYXQiLCJmaWx0ZXIiLCJ0b2tlbiIsImFkZHJlc3MiLCJ1c2VUb2tlbkJ5QWRkcmVzc0FuZEF1dG9tYXRpY2FsbHlBZGQiLCJ0b2tlbkFkZHJlc3MiLCJhbGxUb2tlbnMiLCJ1c2VPbmNoYWluVG9rZW4iLCJ1bmRlZmluZWQiLCJkYXRhIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sSUFBTUEsR0FBRyxHQUFHLElBQUlDLGtEQUFKLENBQVVDLG9EQUFPLENBQUNDLE9BQWxCLEVBQTJCLDRDQUEzQixFQUF5RSxFQUF6RSxFQUE2RSxLQUE3RSxFQUFvRixnQkFBcEYsQ0FBWjtBQUNBLElBQU1DLElBQUksR0FBRyxJQUFJSCxrREFBSixDQUFVQyxvREFBTyxDQUFDQyxPQUFsQixFQUEyQiw0Q0FBM0IsRUFBeUUsQ0FBekUsRUFBNEUsTUFBNUUsRUFBb0YsVUFBcEYsQ0FBYjtBQUNBLElBQU1FLEtBQUssR0FBRyxJQUFJSixrREFBSixDQUNuQkMsb0RBQU8sQ0FBQ0MsT0FEVyxFQUVuQiw0Q0FGbUIsRUFHbkIsQ0FIbUIsRUFJbkIsT0FKbUIsRUFLbkIsbUJBTG1CLENBQWQ7QUFPQSxJQUFNRyxTQUFTLEdB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TXJGQSxJQU5xRjs7QUFPN0ZDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlELElBQUosRUFBVTtBQUNSYixjQUFRLENBQUNhLElBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLElBQUQsRUFBT2IsUUFBUCxDQUpNLENBQVQ7QUFNQSxTQUFPTSxLQUFQO0FBQ0Q7O0lBZGVFLG9DO1VBQ29CYixZLEVBS2pCZ0IscUQiLCJmaWxlIjoiLi90b2tlbnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXG5pbXBvcnQgeyBDaGFpbklkLCBXRVRILCBUb2tlbiB9IGZyb20gJ0B1bmlzd2FwL3NkaydcblxuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlVG9rZW5zIH0gZnJvbSAnLi9jb250ZXh0J1xuaW1wb3J0IHsgdXNlT25jaGFpblRva2VuIH0gZnJvbSAnLi9kYXRhJ1xuXG5leHBvcnQgY29uc3QgREFJID0gbmV3IFRva2VuKENoYWluSWQuTUFJTk5FVCwgJzB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRicsIDE4LCAnREFJJywgJ0RhaSBTdGFibGVjb2luJylcbmV4cG9ydCBjb25zdCBVU0RDID0gbmV3IFRva2VuKENoYWluSWQuTUFJTk5FVCwgJzB4QTBiODY5OTFjNjIxOGIzNmMxZDE5RDRhMmU5RWIwY0UzNjA2ZUI0OCcsIDYsICdVU0RDJywgJ1VTRCBDb2luJylcbmV4cG9ydCBjb25zdCBDb3ZhbCA9IG5ldyBUb2tlbihcbiAgQ2hhaW5JZC5NQUlOTkVULFxuICAnMHgzRDY1ODM5MDQ2MDI5NUZCOTYzZjU0ZEMwODk5Y2ZiMWMzMDc3NkRmJyxcbiAgOCxcbiAgJ0NvdmFsJyxcbiAgJ0NpcmN1aXRzIG9mIFZhbHVlJ1xuKVxuZXhwb3J0IGNvbnN0IENvdmFsVGVzdCA9IG5ldyBUb2tlbihcbiAgQ2hhaW5JZC5SSU5LRUJZLFxuICAnMHg0NGMxYTlkN2QxZjkzMmI0YzI4MTFhNzBlZGZmZGQ2YWUyZWI2MGU2JyxcbiAgOCxcbiAgJ0NvdmFsJyxcbiAgJ0NpcmN1aXRzIG9mIFZhbHVlJ1xuKVxuXG5leHBvcnQgY29uc3QgQ292YWxUZXN0TWF0aWMgPSBuZXcgVG9rZW4oXG4gIENoYWluSWQuUklOS0VCWSxcbiAgJzB4NWNDYTlENzVERjJkRkMxMTc4NTVhZEQ0REQ0NTcyN2RlZTUyODdFQycsXG4gIDgsXG4gICdDb3ZhbCcsXG4gICdDaXJjdWl0cyBvZiBWYWx1ZSdcbilcblxuZXhwb3J0IGNvbnN0IENvdmFsTWF0aWMgPSBuZXcgVG9rZW4oXG4gIENoYWluSWQuUklOS0VCWSxcbiAgJzB4NWNDYTlENzVERjJkRkMxMTc4NTVhZEQ0REQ0NTcyN2RlZTUyODdFQycsXG4gIDgsXG4gICdDb3ZhbCcsXG4gICdDaXJjdWl0cyBvZiBWYWx1ZSdcbilcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9LRU5TID0gW1xuICAuLi5PYmplY3QudmFsdWVzKFdFVEgpLFxuXG4gIC8vIHN0YWJsZWNvaW5zXG4gIERBSSxcbiAgVVNEQyxcbiAgQ292YWwsXG4gIENvdmFsVGVzdCxcbiAgQ292YWxUZXN0TWF0aWMsXG4gIENvdmFsTWF0aWMsXG4gIC8vIG5ldyBUb2tlbihDaGFpbklkLlJJTktFQlksICcweDQ0YzFhOWQ3ZDFmOTMyYjRjMjgxMWE3MGVkZmZkZDZhZTJlYjYwZTYnLCA4LCAnQ292YWwnLCAnQ2lyY3VpdHMgb2YgVmFsdWUnKSxcbiAgbmV3IFRva2VuKENoYWluSWQuTUFJTk5FVCwgJzB4ZEFDMTdGOTU4RDJlZTUyM2EyMjA2MjA2OTk0NTk3QzEzRDgzMWVjNycsIDYsICdVU0RUJywgJ1RldGhlciBVU0QnKSxcbiAgLy8gc3RhYmxlY29pbiBkZXJpdmF0aXZlc1xuICBuZXcgVG9rZW4oQ2hhaW5JZC5NQUlOTkVULCAnMHg1ZDNhNTM2RTRENkRiRDYxMTRjYzFFYWQzNTc3N2JBQjk0OEUzNjQzJywgOCwgJ2NEQUknLCAnQ29tcG91bmQgRGFpJyksXG4gIG5ldyBUb2tlbihDaGFpbklkLk1BSU5ORVQsICcweDA2QUYwNzA5N0M5RWViN2ZENjg1YzY5Mjc1MUQ1QzY2ZEI0OWMyMTUnLCAxOCwgJ0NIQUknLCAnQ2hhaScpLFxuICBuZXcgVG9rZW4oQ2hhaW5JZC5NQUlOTkVULCAnMHgzOUFBMzljMDIxZGZiYUU4ZmFDNTQ1OTM2NjkzYUM5MTdkNUU3NTYzJywgOCwgJ2NVU0RDJywgJ0NvbXBvdW5kIFVTRCBDb2luJyksXG4gIC8vIGNvbXBvdW5kXG4gIG5ldyBUb2tlbihDaGFpbklkLk1BSU5ORVQsICcweGMwMGU5NENiNjYyQzM1MjAyODJFNmY1NzE3MjE0MDA0QTdmMjY4ODgnLCAxOCwgJ0NPTVAnLCAnQ29tcG91bmQnKSxcbiAgLy8gbWFrZXJcbiAgbmV3IFRva2VuKENoYWluSWQuTUFJTk5FVCwgJzB4OWY4RjcyYUE5MzA0YzhCNTkzZDU1NUYxMmVGNjU4OWNDM0E1NzlBMicsIDE4LCAnTUtSJywgJ01ha2VyJyksXG4gIC8vIHVtYVxuICBuZXcgVG9rZW4oQ2hhaW5JZC5NQUlOTkVULCAnMHgwNEZhMGQyMzVDNGFiZjRCY0Y0Nzg3YUY0Q0Y0NDdERTU3MmVGODI4JywgMTgsICdVTUEnLCAnVU1BIFZvdGluZyBUb2tlbiB2MScpLFxuICAvLyB3YnRjXG4gIG5ldyBUb2tlbihDaGFpbklkLk1BSU5ORVQsICcweDIyNjBGQUM1RTU1NDJhNzczQWE0NGZCQ2ZlRGY3QzE5M2JjMkM1OTknLCA4LCAnV0JUQycsICdXcmFwcGVkIEJUQycpLFxuICAvLyBkb251dFxuICBuZXcgVG9rZW4oQ2hhaW5JZC5NQUlOTkVULCAnMHhDMEY5YkQ1RmE1Njk4QjY1MDVGNjQzOTAwRkZBNTE1RWE1ZEY1NEE5JywgMTgsICdET05VVCcsICdEb251dCcpLFxuXG4gIC8vIGtvdmFuXG4gIG5ldyBUb2tlbihDaGFpbklkLktPVkFOLCAnMHg0Rjk2RmUzYjdBNkNmOTcyNWY1OWQzNTNGNzIzYzFiRGI2NENBNkFhJywgMTgsICdEQUknLCAnRGFpIFN0YWJsZWNvaW4nKSxcbiAgbmV3IFRva2VuKENoYWluSWQuS09WQU4sICcweEFhRjY0QkZDQzMyZDBGMTU4NzNhMDIxNjNlN0U1MDA2NzFhNGZmY0QnLCAxOCwgJ01LUicsICdNYWtlcicpLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxsVG9rZW5zKCk6IFtUb2tlbltdLCBSZXR1cm5UeXBlPHR5cGVvZiB1c2VMb2NhbFN0b3JhZ2VUb2tlbnM+WzFdXSB7XG4gIGNvbnN0IHsgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcbiAgY29uc3QgW3Rva2VucywgeyBhZGRUb2tlbiwgcmVtb3ZlVG9rZW4gfV0gPSB1c2VMb2NhbFN0b3JhZ2VUb2tlbnMoKVxuXG4gIHJldHVybiBbXG4gICAgdXNlTWVtbygoKSA9PiB7XG4gICAgICBjb25zdCBzZWVuOiB7IFthZGRyZXNzOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuICAgICAgcmV0dXJuIERFRkFVTFRfVE9LRU5TLmNvbmNhdCh0b2tlbnMpLmZpbHRlcigodG9rZW4pID0+IHtcbiAgICAgICAgaWYgKHRva2VuLmNoYWluSWQgPT09IGNoYWluSWQgJiYgIXNlZW5bdG9rZW4uYWRkcmVzc10pIHtcbiAgICAgICAgICBzZWVuW3Rva2VuLmFkZHJlc3NdID0gdHJ1ZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSwgW3Rva2VucywgY2hhaW5JZF0pLFxuICAgIHsgYWRkVG9rZW4sIHJlbW92ZVRva2VuIH0sXG4gIF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRva2VuQnlBZGRyZXNzQW5kQXV0b21hdGljYWxseUFkZCh0b2tlbkFkZHJlc3M/OiBzdHJpbmcpOiBUb2tlbiB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IFthbGxUb2tlbnMsIHsgYWRkVG9rZW4gfV0gPSB1c2VBbGxUb2tlbnMoKVxuXG4gIGNvbnN0IHRva2VuID0gdXNlTWVtbygoKSA9PiBhbGxUb2tlbnMuZmlsdGVyKCh0b2tlbikgPT4gdG9rZW4uYWRkcmVzcyA9PT0gdG9rZW5BZGRyZXNzKVswXSwgW2FsbFRva2VucywgdG9rZW5BZGRyZXNzXSlcblxuICAvLyBmZXRjaGVzIG9uY2hhaW4gZGF0YSBmb3IgdG9rZW5zIGlmIHRoZXkncmUgbm90IGluIG91ciBsaXN0IGFscmVhZHksIHRoZW4gYWRkcyB0aGVtIHRvIHRoZSBsaXN0XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlT25jaGFpblRva2VuKHRva2VuID8gdW5kZWZpbmVkIDogdG9rZW5BZGRyZXNzKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBhZGRUb2tlbihkYXRhKVxuICAgIH1cbiAgfSwgW2RhdGEsIGFkZFRva2VuXSlcblxuICByZXR1cm4gdG9rZW5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./tokens.ts\n");

/***/ })

})