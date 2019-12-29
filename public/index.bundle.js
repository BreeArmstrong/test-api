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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const $ = __webpack_require__(/*! ./utils/jquery-like */ \"./src/utils/jquery-like.js\");\n\n// Webpack bundles json and js files by default. Check example below\n// const wineReviewsStaticJSON = require('../db/wine-reviews');\n// console.log(wineReviewsStaticJSON);\n\nconsole.log('Hello World! This is a bundled file now!!!');\nconsole.log('First dependency: jquery-like: ', $('div'));\n\nconsole.log('whee!!! Reload! Some more changes ... ');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/jquery-like.js":
/*!**********************************!*\
  !*** ./src/utils/jquery-like.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MyElement {\n  constructor(tag) {\n    this.elem = document.createElement(tag);\n  }\n\n  get dom() {\n    return this.elem;\n  }\n\n  attr(key, value) {\n    this.elem.setAttribute(key, value);\n    // You need the return this to chain methods ...\n    return this;\n  }\n\n  addClass(className) {\n    this.elem.classList.add(className.trim());\n    return this;\n  }\n\n  text(innerHTML) {\n    this.elem.innerHTML = innerHTML;\n    return this;\n  }\n\n  append(parent) {\n    (parent instanceof MyElement ? parent.dom : parent).appendChild(this.elem);\n    return this;\n  }\n\n  appendChildren(input) {\n    const children = Array.isArray(input) ? input : [input];\n    children.forEach(child => this.elem.appendChild(\n      (child instanceof MyElement ? child.dom : child)\n    ));\n    return this;\n  }\n}\n\nfunction $(tag) {\n  return new MyElement(tag);\n}\n\nmodule.exports = $;\n\n\n//# sourceURL=webpack:///./src/utils/jquery-like.js?");

/***/ })

/******/ });