"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/lmStreamer";
exports.ids = ["pages/api/lmStreamer"];
exports.modules = {

/***/ "socialagi":
/*!****************************!*\
  !*** external "socialagi" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socialagi");

/***/ }),

/***/ "(api)/./src/pages/api/lmStreamer.js":
/*!*************************************!*\
  !*** ./src/pages/api/lmStreamer.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _socialagi = __webpack_require__(/*! socialagi */ \"socialagi\");\nmodule.exports = (0, _socialagi.createOpenAIStreamHandler)(_socialagi.Model.GPT_3_5_turbo_16k);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xtU3RyZWFtZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozt1Q0FBaUQsNEJBQVc7QUFFNURBLE9BQU9DLE9BQU8sR0FBR0MsSUFBQUEsb0NBQXlCLEVBQUNDLGdCQUFLLENBQUNDLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbGFnaS1leGFtcGxlLy4vc3JjL3BhZ2VzL2FwaS9sbVN0cmVhbWVyLmpzP2IwMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlT3BlbkFJU3RyZWFtSGFuZGxlciwgTW9kZWwgfSBmcm9tIFwic29jaWFsYWdpXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU9wZW5BSVN0cmVhbUhhbmRsZXIoTW9kZWwuR1BUXzNfNV90dXJib18xNmspO1xyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZU9wZW5BSVN0cmVhbUhhbmRsZXIiLCJNb2RlbCIsIkdQVF8zXzVfdHVyYm9fMTZrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/lmStreamer.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/lmStreamer.js"));
module.exports = __webpack_exports__;

})();