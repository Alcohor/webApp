/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./src/javascripts/app.js":
/*!********************************!*\
  !*** ./src/javascripts/app.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/javascripts/router/index.js\");\n/* harmony import */ var _controllers_home_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/home_controller */ \"./src/javascripts/controllers/home_controller.js\");\n\n\nconsole.log('app.js is ok'); // 渲染视图\n\n_controllers_home_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(); // 启动路由\n\nvar router = new _router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  initial: '#/job'\n});\nwindow.router = router;\nrouter.init();\n\n//# sourceURL=webpack:///./src/javascripts/app.js?");

/***/ }),

/***/ "./src/javascripts/controllers/home_controller.js":
/*!********************************************************!*\
  !*** ./src/javascripts/controllers/home_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/home.html */ \"./src/javascripts/view/home.html\");\n/* harmony import */ var _view_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_view_home_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar render = function render() {\n  document.querySelector('#root').innerHTML = _view_home_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n  console.log('home_controller is ok');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render\n});\n\n//# sourceURL=webpack:///./src/javascripts/controllers/home_controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/job_controller.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/job_controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_job_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/job_page.html */ \"./src/javascripts/view/job_page.html\");\n/* harmony import */ var _view_job_page_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_view_job_page_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar render = function render() {\n  var _template = Handlebars.compile(_view_job_page_html__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n  var _html = _template();\n\n  $('.main').html(_html);\n  swiperInit();\n};\n\nvar swiperInit = function swiperInit() {\n  var mySwiper = new Swiper('.swiper-container', {\n    autoplay: true //可选选项，自动滑动\n\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render\n});\n\n//# sourceURL=webpack:///./src/javascripts/controllers/job_controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/mine_controller.js":
/*!********************************************************!*\
  !*** ./src/javascripts/controllers/mine_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_mine_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/mine.html */ \"./src/javascripts/view/mine.html\");\n/* harmony import */ var _view_mine_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_view_mine_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar render = function render() {\n  document.querySelector('.main').innerHTML = _view_mine_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n  console.log('mine_controller is ok');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render\n});\n\n//# sourceURL=webpack:///./src/javascripts/controllers/mine_controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/search_controller.js":
/*!**********************************************************!*\
  !*** ./src/javascripts/controllers/search_controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_search_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/search.html */ \"./src/javascripts/view/search.html\");\n/* harmony import */ var _view_search_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_view_search_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar render = function render() {\n  document.querySelector('.main').innerHTML = _view_search_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n  console.log('search_controller is ok');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render\n});\n\n//# sourceURL=webpack:///./src/javascripts/controllers/search_controller.js?");

/***/ }),

/***/ "./src/javascripts/router/index.js":
/*!*****************************************!*\
  !*** ./src/javascripts/router/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route */ \"./src/javascripts/router/route.js\");\n\n\n// 实现路由工具\n\n\nvar Router =\n/*#__PURE__*/\nfunction () {\n  function Router(_ref) {\n    var initial = _ref.initial;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Router);\n\n    this.routes = _route__WEBPACK_IMPORTED_MODULE_2__[\"routes\"]; // 路由表\n\n    this.initial = initial || '#/job'; // 默认路由\n    // this.currentUrl = ''; // 记录当前的路径（hash值）\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Router, [{\n    key: \"init\",\n    value: function init() {\n      this.initialHash();\n      this.listenHashChange();\n    }\n  }, {\n    key: \"initialHash\",\n    value: function initialHash() {\n      // 初始化hash值\n      // location.hash\n      if (!location.hash) {\n        location.hash = this.initial;\n      }\n\n      ; // this.currentUrl = location.hash;\n    }\n  }, {\n    key: \"switch\",\n    value: function _switch(path) {\n      // 切换路由的方法，方便在js事件等场景调用，需要切换模式的话在这里切换就ok\n      location.hash = path;\n    }\n  }, {\n    key: \"refresh\",\n    value: function refresh() {\n      // 根据当前的路径 来 切换路由\n      var hash = location.hash;\n\n      if (!this.routes[hash]) {\n        // 路由表里没有配置这个路由\n        // 回到默认路由\n        location.hash = this.initial;\n        return false;\n      }\n\n      console.log(this.routes);\n      this.routes[hash].render();\n      this.switchTab();\n    }\n  }, {\n    key: \"switchTab\",\n    value: function switchTab() {\n      // 要求需要根据路由切换而切换active类名的元素，必须加上nav-link类名，并且加上path属性\n      $('.nav-link').each(function (item) {\n        if ($(this).attr('path') === location.hash) {\n          $(this).addClass('active');\n        } else {\n          $(this).removeClass('active');\n        }\n      });\n    }\n  }, {\n    key: \"listenHashChange\",\n    value: function listenHashChange() {\n      // 监听hash值变化的\n      window.addEventListener('load', this.refresh.bind(this)); // 当hash值变化的时候此事件会执行\n\n      window.addEventListener('hashchange', this.refresh.bind(this));\n    }\n  }]);\n\n  return Router;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./src/javascripts/router/index.js?");

/***/ }),

/***/ "./src/javascripts/router/route.js":
/*!*****************************************!*\
  !*** ./src/javascripts/router/route.js ***!
  \*****************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _controllers_job_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/job_controller */ \"./src/javascripts/controllers/job_controller.js\");\n/* harmony import */ var _controllers_search_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/search_controller */ \"./src/javascripts/controllers/search_controller.js\");\n/* harmony import */ var _controllers_mine_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/mine_controller */ \"./src/javascripts/controllers/mine_controller.js\");\n\n\n //页面跳转\n\nvar routes = {\n  '#/job': _controllers_job_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  '#/search': _controllers_search_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  '#/mine': _controllers_mine_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n\n\n//# sourceURL=webpack:///./src/javascripts/router/route.js?");

/***/ }),

/***/ "./src/javascripts/view/home.html":
/*!****************************************!*\
  !*** ./src/javascripts/view/home.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!-- home --><div class=\\\"home-container\\\">    <div class=\\\"header\\\">        <div class=\\\"list-header\\\">            <a href=\\\"javascript:;\\\" class=\\\"logo\\\">                <img src=\\\"https://rimg.quanzhi.cn/images/logo.png\\\"  alt=\\\"\\\">            </a>            <a href=\\\"javascript:;\\\" class=\\\"city\\\">                <span>北京</span>                <i class=\\\"iconfont icon-down\\\"></i>            </a>            <a href=\\\"javascript:;\\\" class=\\\"searchbox\\\">                <input type=\\\"text\\\" placeholder=\\\"职位/公司名称/关键词\\\">                <i class=\\\"iconfont icon-sousuo\\\"></i>            </a>        </div>    </div>    <div class=\\\"main\\\"></div>    <div class=\\\"footer\\\">        <a href=\\\"#/job\\\" class=\\\"footer__item nav-link active\\\"><i class=\\\"iconfont icon-gongzuo\\\"></i>工作</a>        <a href=\\\"#/search\\\" class=\\\"footer__item nav-link\\\"><i class=\\\"iconfont icon-record\\\"></i>简历</a>        <a href=\\\"#/mine\\\" class=\\\"footer__item nav-link\\\"><i class=\\\"iconfont icon-mine\\\"></i>我的</a>    </div></div>\"\n\n//# sourceURL=webpack:///./src/javascripts/view/home.html?");

/***/ }),

/***/ "./src/javascripts/view/job_page.html":
/*!********************************************!*\
  !*** ./src/javascripts/view/job_page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!-- job列表页视图 --><div class=\\\"banner-main-contain\\\">    <div class=\\\"swiper-container\\\">        <div class=\\\"swiper-wrapper\\\">            <div class=\\\"swiper-slide\\\">slider1</div>            <div class=\\\"swiper-slide\\\">slider2</div>            <div class=\\\"swiper-slide\\\">slider3</div>        </div>    </div></div><div class=\\\"job-list-container\\\">    <div class=\\\"rank-options-nav\\\">        <div class=\\\"nav-container\\\">            <span class=\\\"title\\\">位置<i class=\\\"iconfont icon-down\\\"></i></span>            <span class=\\\"title\\\">薪资<i class=\\\"iconfont icon-down\\\"></i></span>            <span class=\\\"title\\\">排序<i class=\\\"iconfont icon-down\\\"></i></span>            <span class=\\\"title\\\">更多<i class=\\\"iconfont icon-down\\\"></i></span>        </div>    </div></div>\"\n\n//# sourceURL=webpack:///./src/javascripts/view/job_page.html?");

/***/ }),

/***/ "./src/javascripts/view/mine.html":
/*!****************************************!*\
  !*** ./src/javascripts/view/mine.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html><html lang=\\\"en\\\"><head>    <meta charset=\\\"UTF-8\\\">    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">    <title>Document</title></head><body>    mine</body></html>\"\n\n//# sourceURL=webpack:///./src/javascripts/view/mine.html?");

/***/ }),

/***/ "./src/javascripts/view/search.html":
/*!******************************************!*\
  !*** ./src/javascripts/view/search.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html><html lang=\\\"en\\\"><head>    <meta charset=\\\"UTF-8\\\">    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">    <title>Document</title></head><body>    </body></html>\"\n\n//# sourceURL=webpack:///./src/javascripts/view/search.html?");

/***/ })

/******/ });