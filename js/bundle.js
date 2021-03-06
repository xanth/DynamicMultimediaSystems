/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _filterableFiguresEs6Js = __webpack_require__(1);

	var _filterableFiguresEs6Js2 = _interopRequireDefault(_filterableFiguresEs6Js);

	var figs;

	$("#searchInput").keypress(function (e) {
	  if (e.which == 13) {
	    e.preventDefault();
	    figs = figs || new _filterableFiguresEs6Js2["default"]($(".main figure"));
	    var filtered = figs.Filter($(e.target).val());
	    if (filtered.length > 0) {
	      $('.main').html(filtered);
	      $(".noresults").hide();
	    } else {
	      $('.main').html("");
	      $(".noresults").show();
	    }
	  }
	});

	document.getElementById('login').addEventListener("click", function () {
	  alert("You cant do that bro");
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FilterableFigures = (function () {
	  function FilterableFigures(dom) {
	    _classCallCheck(this, FilterableFigures);

	    this.elements = dom;
	  }

	  _createClass(FilterableFigures, [{
	    key: "Filter",
	    value: function Filter(filter) {
	      return filter.trim() === "" ? this.elements : _(this.elements).filter(function (element) {
	        return element.textContent.toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1;
	      }).value();
	    }
	  }]);

	  return FilterableFigures;
	})();

	exports["default"] = FilterableFigures;
	module.exports = exports["default"];

/***/ }
/******/ ]);