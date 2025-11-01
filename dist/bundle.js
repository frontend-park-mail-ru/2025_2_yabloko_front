/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Batch/Batch.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Batch/Batch.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.batch {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	justify-items: center;
	width: 100%;
	min-height: 0;
}

.stores-grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 10px;
	box-sizing: border-box;
}

.batch-header {
	width: 100%;
	text-align: center;
	margin-bottom: 20px;
}

.batch-stats {
	font-size: 14px;
	color: var(--color-gray);
}

.batch-loading {
	text-align: center;
	padding: 40px;
	color: var(--color-gray);
}

.batch-load-more {
	display: block;
	margin: 20px auto;
	padding: 12px 24px;
	background: var(--color-accent);
	color: white;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	font-size: 16px;
}

.batch-load-more:hover {
	background: var(--color-accent-dark);
}

.batch-end {
	text-align: center;
	padding: 20px;
	color: var(--color-gray);
	font-style: italic;
}

.batch-error {
	background: var(--color-error-light);
	color: var(--color-error);
	padding: 16px;
	border-radius: 8px;
	margin-bottom: 20px;
	border: 1px solid var(--color-error);
}

.batch-retry-btn {
	background: var(--color-error);
	color: white;
	border: none;
	padding: 8px 16px;
	border-radius: 4px;
	cursor: pointer;
	margin-top: 8px;
}

.batch-empty {
	text-align: center;
	padding: 40px;
	color: var(--color-gray);
}
`, "",{"version":3,"sources":["webpack://./src/components/Batch/Batch.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,eAAe;CACf,6BAA6B;CAC7B,qBAAqB;CACrB,WAAW;CACX,aAAa;AACd;;AAEA;CACC,aAAa;CACb,eAAe;CACf,uBAAuB;CACvB,SAAS;CACT,WAAW;CACX,iBAAiB;CACjB,cAAc;CACd,eAAe;CACf,sBAAsB;AACvB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,wBAAwB;AACzB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,cAAc;CACd,iBAAiB;CACjB,kBAAkB;CAClB,+BAA+B;CAC/B,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,wBAAwB;CACxB,kBAAkB;AACnB;;AAEA;CACC,oCAAoC;CACpC,yBAAyB;CACzB,aAAa;CACb,kBAAkB;CAClB,mBAAmB;CACnB,oCAAoC;AACrC;;AAEA;CACC,8BAA8B;CAC9B,YAAY;CACZ,YAAY;CACZ,iBAAiB;CACjB,kBAAkB;CAClB,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,wBAAwB;AACzB","sourcesContent":[".batch {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-evenly;\r\n\tjustify-items: center;\r\n\twidth: 100%;\r\n\tmin-height: 0;\r\n}\r\n\r\n.stores-grid {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\twidth: 100%;\r\n\tmax-width: 1200px;\r\n\tmargin: 0 auto;\r\n\tpadding: 0 10px;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.batch-header {\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.batch-stats {\r\n\tfont-size: 14px;\r\n\tcolor: var(--color-gray);\r\n}\r\n\r\n.batch-loading {\r\n\ttext-align: center;\r\n\tpadding: 40px;\r\n\tcolor: var(--color-gray);\r\n}\r\n\r\n.batch-load-more {\r\n\tdisplay: block;\r\n\tmargin: 20px auto;\r\n\tpadding: 12px 24px;\r\n\tbackground: var(--color-accent);\r\n\tcolor: white;\r\n\tborder: none;\r\n\tborder-radius: 6px;\r\n\tcursor: pointer;\r\n\tfont-size: 16px;\r\n}\r\n\r\n.batch-load-more:hover {\r\n\tbackground: var(--color-accent-dark);\r\n}\r\n\r\n.batch-end {\r\n\ttext-align: center;\r\n\tpadding: 20px;\r\n\tcolor: var(--color-gray);\r\n\tfont-style: italic;\r\n}\r\n\r\n.batch-error {\r\n\tbackground: var(--color-error-light);\r\n\tcolor: var(--color-error);\r\n\tpadding: 16px;\r\n\tborder-radius: 8px;\r\n\tmargin-bottom: 20px;\r\n\tborder: 1px solid var(--color-error);\r\n}\r\n\r\n.batch-retry-btn {\r\n\tbackground: var(--color-error);\r\n\tcolor: white;\r\n\tborder: none;\r\n\tpadding: 8px 16px;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n\tmargin-top: 8px;\r\n}\r\n\r\n.batch-empty {\r\n\ttext-align: center;\r\n\tpadding: 40px;\r\n\tcolor: var(--color-gray);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Button/Button.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Button/Button.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button {
	display: inline-flex;
	color: var(--color-light);
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: var(--border-radius-large);
	cursor: pointer;
	position: relative;
	min-width: 7rem;
	height: 2.5rem;
	font-size: var(--button-font-size);
	font-weight: var(--button-font-weight);
}

.button--accent {
	background: var(--color-accent);
}

.button--accent:hover {
	background: var(--color-accent-hover);
}

.button--success {
	background: var(--color-success);
}

.button--success:hover {
	background: var(--color-success-hover);
}

.button--error {
	background: var(--color-err);
}

.button--error:hover {
	background: var(--color-err-hover);
}

.button--primary {
	background: var(--color-primary);
}

.button--primary:hover {
	background: var(--color-hover);
}

.button__content {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}
`, "",{"version":3,"sources":["webpack://./src/components/Button/Button.css"],"names":[],"mappings":"AAAA;CACC,oBAAoB;CACpB,yBAAyB;CACzB,mBAAmB;CACnB,uBAAuB;CACvB,YAAY;CACZ,yCAAyC;CACzC,eAAe;CACf,kBAAkB;CAClB,eAAe;CACf,cAAc;CACd,kCAAkC;CAClC,sCAAsC;AACvC;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,8BAA8B;AAC/B;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,WAAW;CACX,YAAY;AACb","sourcesContent":[".button {\r\n\tdisplay: inline-flex;\r\n\tcolor: var(--color-light);\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tborder: none;\r\n\tborder-radius: var(--border-radius-large);\r\n\tcursor: pointer;\r\n\tposition: relative;\r\n\tmin-width: 7rem;\r\n\theight: 2.5rem;\r\n\tfont-size: var(--button-font-size);\r\n\tfont-weight: var(--button-font-weight);\r\n}\r\n\r\n.button--accent {\r\n\tbackground: var(--color-accent);\r\n}\r\n\r\n.button--accent:hover {\r\n\tbackground: var(--color-accent-hover);\r\n}\r\n\r\n.button--success {\r\n\tbackground: var(--color-success);\r\n}\r\n\r\n.button--success:hover {\r\n\tbackground: var(--color-success-hover);\r\n}\r\n\r\n.button--error {\r\n\tbackground: var(--color-err);\r\n}\r\n\r\n.button--error:hover {\r\n\tbackground: var(--color-err-hover);\r\n}\r\n\r\n.button--primary {\r\n\tbackground: var(--color-primary);\r\n}\r\n\r\n.button--primary:hover {\r\n\tbackground: var(--color-hover);\r\n}\r\n\r\n.button__content {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Card/Card.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Card/Card.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.store-card {
	display: inline-block;
	flex: 0 0 auto;
	width: 20%;
	min-width: 260px;
	margin-bottom: 30px;
	padding: 0 10px;
}

.store-card__container {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	width: 100%;
	height: 180px;
	border-radius: var(--border-radius-large);
	background-color: var(--color-light);
	box-shadow: var(--shadow);
}

.store-card__container:hover {
	box-shadow: var(--shadow-hover);
}

.store-card__image-wrapper {
	position: relative;
	width: 100%;
	height: 65%;
	border-radius: var(--border-radius-large);
	overflow: hidden;
}

.store-card__image {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.store-card__fav {
	position: absolute;
	display: flex;
	padding: 4px;
	top: 10px;
	right: 10px;
	border-radius: 50%;
	background: var(--color-dark-transparent);
}

.store-card__fav:hover {
	background: var(--color-dark-transparent-hover);
}

.store-card__fav-image {
	width: 32px;
	height: 32px;
	border-radius: 50%;
}

.store-card__content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 10px;
	height: 35%;
}

.store-card__info {
	display: flex;
	width: 100%;
	justify-content: space-between;
}

.store-card__name {
	font-size: 16px;
	font-weight: 600;
	color: var(--color-dark);
	margin: 0;
}

.store-card__rating {
	display: flex;
	gap: 5px;
	align-items: center;
}

.store-card__rating-icon {
	width: 15px;
	height: 15px;
	border-radius: 50%;
}

.store-card__rating-value {
	font-size: 14px;
	color: var(--color-gray);
}

.store-card__time {
	display: flex;
	gap: 5px;
	align-items: center;
}

.store-card__time-icon {
	width: 15px;
	height: 15px;
	border-radius: 50%;
}

.store-card__time-value {
	font-size: 14px;
	color: var(--color-gray);
}
`, "",{"version":3,"sources":["webpack://./src/components/Card/Card.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,cAAc;CACd,UAAU;CACV,gBAAgB;CAChB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,eAAe;CACf,WAAW;CACX,aAAa;CACb,yCAAyC;CACzC,oCAAoC;CACpC,yBAAyB;AAC1B;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,WAAW;CACX,yCAAyC;CACzC,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,YAAY;CACZ,SAAS;CACT,WAAW;CACX,kBAAkB;CAClB,yCAAyC;AAC1C;;AAEA;CACC,+CAA+C;AAChD;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,aAAa;CACb,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,WAAW;CACX,8BAA8B;AAC/B;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,wBAAwB;CACxB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,QAAQ;CACR,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,QAAQ;CACR,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,wBAAwB;AACzB","sourcesContent":[".store-card {\r\n\tdisplay: inline-block;\r\n\tflex: 0 0 auto;\r\n\twidth: 20%;\r\n\tmin-width: 260px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 0 10px;\r\n}\r\n\r\n.store-card__container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tcursor: pointer;\r\n\twidth: 100%;\r\n\theight: 180px;\r\n\tborder-radius: var(--border-radius-large);\r\n\tbackground-color: var(--color-light);\r\n\tbox-shadow: var(--shadow);\r\n}\r\n\r\n.store-card__container:hover {\r\n\tbox-shadow: var(--shadow-hover);\r\n}\r\n\r\n.store-card__image-wrapper {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 65%;\r\n\tborder-radius: var(--border-radius-large);\r\n\toverflow: hidden;\r\n}\r\n\r\n.store-card__image {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tobject-fit: cover;\r\n}\r\n\r\n.store-card__fav {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\tpadding: 4px;\r\n\ttop: 10px;\r\n\tright: 10px;\r\n\tborder-radius: 50%;\r\n\tbackground: var(--color-dark-transparent);\r\n}\r\n\r\n.store-card__fav:hover {\r\n\tbackground: var(--color-dark-transparent-hover);\r\n}\r\n\r\n.store-card__fav-image {\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.store-card__content {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tpadding: 10px;\r\n\theight: 35%;\r\n}\r\n\r\n.store-card__info {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.store-card__name {\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n\tcolor: var(--color-dark);\r\n\tmargin: 0;\r\n}\r\n\r\n.store-card__rating {\r\n\tdisplay: flex;\r\n\tgap: 5px;\r\n\talign-items: center;\r\n}\r\n\r\n.store-card__rating-icon {\r\n\twidth: 15px;\r\n\theight: 15px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.store-card__rating-value {\r\n\tfont-size: 14px;\r\n\tcolor: var(--color-gray);\r\n}\r\n\r\n.store-card__time {\r\n\tdisplay: flex;\r\n\tgap: 5px;\r\n\talign-items: center;\r\n}\r\n\r\n.store-card__time-icon {\r\n\twidth: 15px;\r\n\theight: 15px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.store-card__time-value {\r\n\tfont-size: 14px;\r\n\tcolor: var(--color-gray);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CardsHeader/CardsHeader.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CardsHeader/CardsHeader.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cards-header {
	width: 90%;
	margin: 20px 0 40px 0;
	justify-self: center;
	justify-content: center;
	align-items: center;
}

.cards-header__title {
	justify-self: center;
	margin-bottom: 15px;
	font-size: 22px;
	font-weight: bold;
}

.filters {
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 10px 20px;
	background-color: var(--color-background-accent);
	border-radius: var(--border-radius-large);
	flex-wrap: wrap;
	box-shadow: var(--shadow);
}

.filters__button {
	border: 1px solid transparent;
	background: transparent;
	padding: 8px 15px;
	cursor: pointer;
	font-size: 16px;
	border-radius: var(--border-radius-large);
	transition: all 0.2s ease;
	box-sizing: border-box;
}

.filters__button--active,
.filters__button:hover {
	background: var(--color-light);
	border-color: var(--color-primary);
}

.filters__more {
	position: relative;
	display: inline-block;
}

.filters__sort {
	margin-left: auto;
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
}

.more__button {
	outline: none;
	padding-right: 25px;
	border-radius: var(--border-radius-large);
}

.more::after {
	outline: none;
	content: '';
	position: absolute;
	right: 10px;
	top: 40%;
	width: 8px;
	height: 8px;
	border-right: 2px solid var(--color-accent);
	border-bottom: 2px solid var(--color-accent);
	transform: translateY(-50%) rotate(45deg);
}

.sort {
	position: relative;
	padding-left: 20px;
	cursor: pointer;
}

.sort::before {
	content: '↑↓';
	position: absolute;
	left: 1px;
	top: 40%;
	transform: translateY(-50%);
	color: var(--color-accent);
	font-size: 16px;
	font-weight: 900;
}
`, "",{"version":3,"sources":["webpack://./src/components/CardsHeader/CardsHeader.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,qBAAqB;CACrB,oBAAoB;CACpB,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,oBAAoB;CACpB,mBAAmB;CACnB,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,kBAAkB;CAClB,gDAAgD;CAChD,yCAAyC;CACzC,eAAe;CACf,yBAAyB;AAC1B;;AAEA;CACC,6BAA6B;CAC7B,uBAAuB;CACvB,iBAAiB;CACjB,eAAe;CACf,eAAe;CACf,yCAAyC;CACzC,yBAAyB;CACzB,sBAAsB;AACvB;;AAEA;;CAEC,8BAA8B;CAC9B,kCAAkC;AACnC;;AAEA;CACC,kBAAkB;CAClB,qBAAqB;AACtB;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,QAAQ;CACR,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,yCAAyC;AAC1C;;AAEA;CACC,aAAa;CACb,WAAW;CACX,kBAAkB;CAClB,WAAW;CACX,QAAQ;CACR,UAAU;CACV,WAAW;CACX,2CAA2C;CAC3C,4CAA4C;CAC5C,yCAAyC;AAC1C;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,SAAS;CACT,QAAQ;CACR,2BAA2B;CAC3B,0BAA0B;CAC1B,eAAe;CACf,gBAAgB;AACjB","sourcesContent":[".cards-header {\r\n\twidth: 90%;\r\n\tmargin: 20px 0 40px 0;\r\n\tjustify-self: center;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.cards-header__title {\r\n\tjustify-self: center;\r\n\tmargin-bottom: 15px;\r\n\tfont-size: 22px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.filters {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 15px;\r\n\tpadding: 10px 20px;\r\n\tbackground-color: var(--color-background-accent);\r\n\tborder-radius: var(--border-radius-large);\r\n\tflex-wrap: wrap;\r\n\tbox-shadow: var(--shadow);\r\n}\r\n\r\n.filters__button {\r\n\tborder: 1px solid transparent;\r\n\tbackground: transparent;\r\n\tpadding: 8px 15px;\r\n\tcursor: pointer;\r\n\tfont-size: 16px;\r\n\tborder-radius: var(--border-radius-large);\r\n\ttransition: all 0.2s ease;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.filters__button--active,\r\n.filters__button:hover {\r\n\tbackground: var(--color-light);\r\n\tborder-color: var(--color-primary);\r\n}\r\n\r\n.filters__more {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.filters__sort {\r\n\tmargin-left: auto;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 8px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.more__button {\r\n\toutline: none;\r\n\tpadding-right: 25px;\r\n\tborder-radius: var(--border-radius-large);\r\n}\r\n\r\n.more::after {\r\n\toutline: none;\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 40%;\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tborder-right: 2px solid var(--color-accent);\r\n\tborder-bottom: 2px solid var(--color-accent);\r\n\ttransform: translateY(-50%) rotate(45deg);\r\n}\r\n\r\n.sort {\r\n\tposition: relative;\r\n\tpadding-left: 20px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.sort::before {\r\n\tcontent: '↑↓';\r\n\tposition: absolute;\r\n\tleft: 1px;\r\n\ttop: 40%;\r\n\ttransform: translateY(-50%);\r\n\tcolor: var(--color-accent);\r\n\tfont-size: 16px;\r\n\tfont-weight: 900;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Cart/Cart.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Cart/Cart.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cart-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: flex-end;
	z-index: 1000;
}

.cart-panel {
	width: 400px;
	height: auto;
	max-height: 80vh;
	background: white;
	display: flex;
	flex-direction: column;
	border-radius: var(--border-radius-large);
	margin: 80px 20px 20px 20px;
}

.cart-header {
	padding: 20px;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.cart-title {
	margin: 0;
	font-size: 1.2rem;
}

.cart-total {
	font-weight: bold;
	font-size: 1.1rem;
}

.cart-close {
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	padding: 5px;
}

.cart-body {
	flex: 1;
	padding: 20px;
	overflow-y: auto;
	max-height: 400px;
}

.cart-empty {
	text-align: center;
	color: #666;
	margin: 50px 0;
}

.cart-footer {
	padding: 20px;
	border-top: 1px solid #eee;
}

.cart-checkout {
	width: 100%;
	padding: 15px;
	background: var(--color-accent);
	color: white;
	border: none;
	border-radius: var(--border-radius-large);
	font-size: 1rem;
	cursor: pointer;
}

.cart-checkout:hover {
	opacity: 0.9;
}
`, "",{"version":3,"sources":["webpack://./src/components/Cart/Cart.css"],"names":[],"mappings":"AAAA;CACC,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,SAAS;CACT,8BAA8B;CAC9B,aAAa;CACb,yBAAyB;CACzB,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,yCAAyC;CACzC,2BAA2B;AAC5B;;AAEA;CACC,aAAa;CACb,6BAA6B;CAC7B,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,SAAS;CACT,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,YAAY;CACZ,iBAAiB;CACjB,eAAe;CACf,YAAY;AACb;;AAEA;CACC,OAAO;CACP,aAAa;CACb,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,cAAc;AACf;;AAEA;CACC,aAAa;CACb,0BAA0B;AAC3B;;AAEA;CACC,WAAW;CACX,aAAa;CACb,+BAA+B;CAC/B,YAAY;CACZ,YAAY;CACZ,yCAAyC;CACzC,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,YAAY;AACb","sourcesContent":[".cart-overlay {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\tz-index: 1000;\r\n}\r\n\r\n.cart-panel {\r\n\twidth: 400px;\r\n\theight: auto;\r\n\tmax-height: 80vh;\r\n\tbackground: white;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tborder-radius: var(--border-radius-large);\r\n\tmargin: 80px 20px 20px 20px;\r\n}\r\n\r\n.cart-header {\r\n\tpadding: 20px;\r\n\tborder-bottom: 1px solid #eee;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n.cart-title {\r\n\tmargin: 0;\r\n\tfont-size: 1.2rem;\r\n}\r\n\r\n.cart-total {\r\n\tfont-weight: bold;\r\n\tfont-size: 1.1rem;\r\n}\r\n\r\n.cart-close {\r\n\tbackground: none;\r\n\tborder: none;\r\n\tfont-size: 1.5rem;\r\n\tcursor: pointer;\r\n\tpadding: 5px;\r\n}\r\n\r\n.cart-body {\r\n\tflex: 1;\r\n\tpadding: 20px;\r\n\toverflow-y: auto;\r\n\tmax-height: 400px;\r\n}\r\n\r\n.cart-empty {\r\n\ttext-align: center;\r\n\tcolor: #666;\r\n\tmargin: 50px 0;\r\n}\r\n\r\n.cart-footer {\r\n\tpadding: 20px;\r\n\tborder-top: 1px solid #eee;\r\n}\r\n\r\n.cart-checkout {\r\n\twidth: 100%;\r\n\tpadding: 15px;\r\n\tbackground: var(--color-accent);\r\n\tcolor: white;\r\n\tborder: none;\r\n\tborder-radius: var(--border-radius-large);\r\n\tfont-size: 1rem;\r\n\tcursor: pointer;\r\n}\r\n\r\n.cart-checkout:hover {\r\n\topacity: 0.9;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CartItem/CartItem.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CartItem/CartItem.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cart-item {
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 16px;
	background: rgba(255, 255, 255, 0.7);
	border-radius: var(--border-radius-medium);
	backdrop-filter: blur(4px);
	border: 1px solid rgba(0, 0, 0, 0.05);
}

.cart-item__image {
	width: 60px;
	height: 60px;
	object-fit: cover;
	border-radius: var(--border-radius-small);
	flex-shrink: 0;
}

.cart-item__info {
	flex: 1;
	min-width: 0;
}

.cart-item__name {
	font-size: 1rem;
	font-weight: 600;
	color: var(--color-dark);
	margin-bottom: 4px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.cart-item__price {
	font-size: 0.95rem;
	color: var(--color-primary);
	font-weight: 600;
}

.cart-item__controls {
	display: flex;
	align-items: center;
	gap: 8px;
}

.cart-item__control-btn {
	width: 32px;
	height: 32px;
	border: none;
	background: var(--color-accent);
	color: var(--color-light);
	border-radius: 50%;
	font-size: 1.1rem;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.2s;
}

.cart-item__control-btn:hover {
	background: var(--color-accent-hover);
}

.cart-item__quantity {
	min-width: 24px;
	text-align: center;
	font-weight: 600;
	color: var(--color-dark);
}
`, "",{"version":3,"sources":["webpack://./src/components/CartItem/CartItem.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,aAAa;CACb,oCAAoC;CACpC,0CAA0C;CAC1C,0BAA0B;CAC1B,qCAAqC;AACtC;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,yCAAyC;CACzC,cAAc;AACf;;AAEA;CACC,OAAO;CACP,YAAY;AACb;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,wBAAwB;CACxB,kBAAkB;CAClB,mBAAmB;CACnB,gBAAgB;CAChB,uBAAuB;AACxB;;AAEA;CACC,kBAAkB;CAClB,2BAA2B;CAC3B,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,QAAQ;AACT;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,+BAA+B;CAC/B,yBAAyB;CACzB,kBAAkB;CAClB,iBAAiB;CACjB,iBAAiB;CACjB,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,iCAAiC;AAClC;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,wBAAwB;AACzB","sourcesContent":[".cart-item {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 16px;\r\n\tpadding: 16px;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tborder-radius: var(--border-radius-medium);\r\n\tbackdrop-filter: blur(4px);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.cart-item__image {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tobject-fit: cover;\r\n\tborder-radius: var(--border-radius-small);\r\n\tflex-shrink: 0;\r\n}\r\n\r\n.cart-item__info {\r\n\tflex: 1;\r\n\tmin-width: 0;\r\n}\r\n\r\n.cart-item__name {\r\n\tfont-size: 1rem;\r\n\tfont-weight: 600;\r\n\tcolor: var(--color-dark);\r\n\tmargin-bottom: 4px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n}\r\n\r\n.cart-item__price {\r\n\tfont-size: 0.95rem;\r\n\tcolor: var(--color-primary);\r\n\tfont-weight: 600;\r\n}\r\n\r\n.cart-item__controls {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 8px;\r\n}\r\n\r\n.cart-item__control-btn {\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\tborder: none;\r\n\tbackground: var(--color-accent);\r\n\tcolor: var(--color-light);\r\n\tborder-radius: 50%;\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\ttransition: background-color 0.2s;\r\n}\r\n\r\n.cart-item__control-btn:hover {\r\n\tbackground: var(--color-accent-hover);\r\n}\r\n\r\n.cart-item__quantity {\r\n\tmin-width: 24px;\r\n\ttext-align: center;\r\n\tfont-weight: 600;\r\n\tcolor: var(--color-dark);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CommonCSS/Variables.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CommonCSS/Variables.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
	--color-dark: #000000;

	--color-light: #ffffff;
	--color-background-accent: #f8f8f8;

	--color-accent: #fe7743;
	--color-accent-hover: #d75523;

	--color-success: #4ebd6c;
	--color-success-hover: #1e893a;

	--color-err: #f45959;
	--color-err-hover: #da1f1f;

	--color-primary: #3e586b;
	--color-secondary: #447d9b;
	--color-hover: #273f4f;

	--color-input-stroke: #ccc;
	--color-blue: #0000ff;

	--color-dark-transparent: rgba(0, 0, 0, 0.3);
	--color-dark-transparent-hover: rgba(0, 0, 0, 0.5);

	--shadow: 0 4px 12px rgba(0.2, 0.2, 0.2, 0.2);
	--shadow-hover: 0 4px 12px rgba(0.5, 0.5, 0.5, 0.5);

	--border-radius-small: 8px;
	--border-radius-medium: 16px;
	--border-radius-large: 24px;
}

::-webkit-scrollbar {
	width: 0;
}

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

\\body {
	margin: 0;
	padding: 0;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
}
`, "",{"version":3,"sources":["webpack://./src/components/CommonCSS/Variables.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;;CAErB,sBAAsB;CACtB,kCAAkC;;CAElC,uBAAuB;CACvB,6BAA6B;;CAE7B,wBAAwB;CACxB,8BAA8B;;CAE9B,oBAAoB;CACpB,0BAA0B;;CAE1B,wBAAwB;CACxB,0BAA0B;CAC1B,sBAAsB;;CAEtB,0BAA0B;CAC1B,qBAAqB;;CAErB,4CAA4C;CAC5C,kDAAkD;;CAElD,6CAA6C;CAC7C,mDAAmD;;CAEnD,0BAA0B;CAC1B,4BAA4B;CAC5B,2BAA2B;AAC5B;;AAEA;CACC,QAAQ;AACT;;AAEA;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,SAAS;CACT,UAAU;AACX;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAiFC,SAAS;CACT,UAAU;CACV,SAAS;AACV","sourcesContent":[":root {\r\n\t--color-dark: #000000;\r\n\r\n\t--color-light: #ffffff;\r\n\t--color-background-accent: #f8f8f8;\r\n\r\n\t--color-accent: #fe7743;\r\n\t--color-accent-hover: #d75523;\r\n\r\n\t--color-success: #4ebd6c;\r\n\t--color-success-hover: #1e893a;\r\n\r\n\t--color-err: #f45959;\r\n\t--color-err-hover: #da1f1f;\r\n\r\n\t--color-primary: #3e586b;\r\n\t--color-secondary: #447d9b;\r\n\t--color-hover: #273f4f;\r\n\r\n\t--color-input-stroke: #ccc;\r\n\t--color-blue: #0000ff;\r\n\r\n\t--color-dark-transparent: rgba(0, 0, 0, 0.3);\r\n\t--color-dark-transparent-hover: rgba(0, 0, 0, 0.5);\r\n\r\n\t--shadow: 0 4px 12px rgba(0.2, 0.2, 0.2, 0.2);\r\n\t--shadow-hover: 0 4px 12px rgba(0.5, 0.5, 0.5, 0.5);\r\n\r\n\t--border-radius-small: 8px;\r\n\t--border-radius-medium: 16px;\r\n\t--border-radius-large: 24px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n\twidth: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\\body {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer/Footer.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Footer/Footer.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	justify-self: center;
	width: 90%;
	padding: 20px;
	box-sizing: border-box;
	background-color: var(--color-background-accent);
	border-radius: var(--border-radius-large);
	box-shadow: var(--shadow);
}
`, "",{"version":3,"sources":["webpack://./src/components/Footer/Footer.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,oBAAoB;CACpB,UAAU;CACV,aAAa;CACb,sBAAsB;CACtB,gDAAgD;CAChD,yCAAyC;CACzC,yBAAyB;AAC1B","sourcesContent":[".footer {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tjustify-self: center;\r\n\twidth: 90%;\r\n\tpadding: 20px;\r\n\tbox-sizing: border-box;\r\n\tbackground-color: var(--color-background-accent);\r\n\tborder-radius: var(--border-radius-large);\r\n\tbox-shadow: var(--shadow);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/IconButton/IconButton.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/IconButton/IconButton.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon-button {
	display: flex;
	flex-direction: column;
	align-items: center;
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
	border-radius: var(--border-radius-small);
	min-width: 60px;
	outline: none;
}

.icon-button:hover {
	opacity: 0.9;
}

.icon-button__image {
	width: 20px;
	height: 20px;
	object-fit: contain;
	display: block;
	margin: 0;
}

.icon-button__text {
	font-size: 0.85rem;
	color: var(--color-dark);
	margin-top: 4px;
	white-space: nowrap;
}
`, "",{"version":3,"sources":["webpack://./src/components/IconButton/IconButton.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,gBAAgB;CAChB,YAAY;CACZ,UAAU;CACV,eAAe;CACf,yCAAyC;CACzC,eAAe;CACf,aAAa;AACd;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,cAAc;CACd,SAAS;AACV;;AAEA;CACC,kBAAkB;CAClB,wBAAwB;CACxB,eAAe;CACf,mBAAmB;AACpB","sourcesContent":[".icon-button {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground: none;\r\n\tborder: none;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\tborder-radius: var(--border-radius-small);\r\n\tmin-width: 60px;\r\n\toutline: none;\r\n}\r\n\r\n.icon-button:hover {\r\n\topacity: 0.9;\r\n}\r\n\r\n.icon-button__image {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tobject-fit: contain;\r\n\tdisplay: block;\r\n\tmargin: 0;\r\n}\r\n\r\n.icon-button__text {\r\n\tfont-size: 0.85rem;\r\n\tcolor: var(--color-dark);\r\n\tmargin-top: 4px;\r\n\twhite-space: nowrap;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.login-form {
	display: flex;
	flex-direction: column;
	gap: 15px;

	max-width: 400px;
	width: 100%;
	padding: 30px 25px;

	background: var(--color-light);
	border: 1px solid var(--color-background-accent);
	border-radius: 20px;
	box-shadow: var(--shadow);

	margin: 10vh auto 0;
	align-items: center;
}

.login-form__inner {
	display: flex;
	flex-direction: column;
	gap: 15px;
	max-width: 400px;
	width: 100%;
}

.login-form__field input {
	padding: 12px;
	border: 1px solid var(--color-input-stroke);
	border-radius: var(--border-radius-large);
	font-size: 16px;
	width: 100%;
	box-sizing: border-box;
	text-align: left;
}

.login-form__field input:focus {
	border-color: var(--color-primary);
	outline: none;
}

.login-form__submit,
.login-form__toggle {
	width: 100%;
}

.login-form__error {
	font-size: 15px;
	color: var(--color-err);
	display: none;
	align-self: center;
}

.login-form__error.active {
	display: block;
}

.login-form__error.inactive,
.login-form__field.inactive {
	display: none;
}

.login-form__input--error {
	border-color: var(--color-err) !important;
}
`, "",{"version":3,"sources":["webpack://./src/components/LoginForm/LoginForm.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET,gBAAgB;CAChB,WAAW;CACX,kBAAkB;;CAElB,8BAA8B;CAC9B,gDAAgD;CAChD,mBAAmB;CACnB,yBAAyB;;CAEzB,mBAAmB;CACnB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,gBAAgB;CAChB,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,2CAA2C;CAC3C,yCAAyC;CACzC,eAAe;CACf,WAAW;CACX,sBAAsB;CACtB,gBAAgB;AACjB;;AAEA;CACC,kCAAkC;CAClC,aAAa;AACd;;AAEA;;CAEC,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,uBAAuB;CACvB,aAAa;CACb,kBAAkB;AACnB;;AAEA;CACC,cAAc;AACf;;AAEA;;CAEC,aAAa;AACd;;AAEA;CACC,yCAAyC;AAC1C","sourcesContent":[".login-form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 15px;\r\n\r\n\tmax-width: 400px;\r\n\twidth: 100%;\r\n\tpadding: 30px 25px;\r\n\r\n\tbackground: var(--color-light);\r\n\tborder: 1px solid var(--color-background-accent);\r\n\tborder-radius: 20px;\r\n\tbox-shadow: var(--shadow);\r\n\r\n\tmargin: 10vh auto 0;\r\n\talign-items: center;\r\n}\r\n\r\n.login-form__inner {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 15px;\r\n\tmax-width: 400px;\r\n\twidth: 100%;\r\n}\r\n\r\n.login-form__field input {\r\n\tpadding: 12px;\r\n\tborder: 1px solid var(--color-input-stroke);\r\n\tborder-radius: var(--border-radius-large);\r\n\tfont-size: 16px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n\ttext-align: left;\r\n}\r\n\r\n.login-form__field input:focus {\r\n\tborder-color: var(--color-primary);\r\n\toutline: none;\r\n}\r\n\r\n.login-form__submit,\r\n.login-form__toggle {\r\n\twidth: 100%;\r\n}\r\n\r\n.login-form__error {\r\n\tfont-size: 15px;\r\n\tcolor: var(--color-err);\r\n\tdisplay: none;\r\n\talign-self: center;\r\n}\r\n\r\n.login-form__error.active {\r\n\tdisplay: block;\r\n}\r\n\r\n.login-form__error.inactive,\r\n.login-form__field.inactive {\r\n\tdisplay: none;\r\n}\r\n\r\n.login-form__input--error {\r\n\tborder-color: var(--color-err) !important;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Navbar/Navbar.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Navbar/Navbar.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	background: var(--color-light);
	border-bottom: 1px solid var(--color-input-stroke);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	height: 5rem;
	z-index: 1;
	border-radius: 0 0 var(--border-radius-medium) var(--border-radius-medium);
}

.navbar__left {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.navbar__right {
	display: flex;
	gap: 1rem;
	align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/components/Navbar/Navbar.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,aAAa;CACb,8BAA8B;CAC9B,kDAAkD;CAClD,wCAAwC;CACxC,gBAAgB;CAChB,MAAM;CACN,YAAY;CACZ,UAAU;CACV,0EAA0E;AAC3E;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,SAAS;CACT,mBAAmB;AACpB","sourcesContent":[".navbar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding: 1rem;\r\n\tbackground: var(--color-light);\r\n\tborder-bottom: 1px solid var(--color-input-stroke);\r\n\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n\tposition: sticky;\r\n\ttop: 0;\r\n\theight: 5rem;\r\n\tz-index: 1;\r\n\tborder-radius: 0 0 var(--border-radius-medium) var(--border-radius-medium);\r\n}\r\n\r\n.navbar__left {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n}\r\n\r\n.navbar__right {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n\talign-items: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ProductCard/ProductCard.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ProductCard/ProductCard.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.product-card {
	background: var(--color-light);
	border-radius: var(--border-radius-large);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	transition:
		transform 0.2s,
		box-shadow 0.2s;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.product-card:hover {
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.product-card__image-wrapper {
	position: relative;
	width: 100%;
	height: 200px;
	overflow: hidden;
}

.product-card__image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}

.product-card__content {
	padding: 16px;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.product-card__name {
	margin: 0;
	font-size: 1.1rem;
	font-weight: 600;
	color: var(--color-dark);
	line-height: 1.3;
}

.product-card__description {
	margin: 0;
	font-size: 0.9rem;
	color: #666;
	line-height: 1.4;
	flex: 1;
	display: -webkit-box;
	overflow: hidden;
}

.product-card__footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: auto;
}

.product-card__price {
	font-size: 1.2rem;
	font-weight: 700;
	color: var(--color-dark);
}

.product-card__add-btn {
	width: 40px;
	height: 40px;
	border: none;
	background: var(--color-accent);
	color: var(--color-light);
	border-radius: 50%;
	font-size: 1.5rem;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition:
		background-color 0.2s,
		transform 0.2s;
}

.product-card__add-btn:hover {
	background: var(--color-accent-hover);
}
`, "",{"version":3,"sources":["webpack://./src/components/ProductCard/ProductCard.css"],"names":[],"mappings":"AAAA;CACC,8BAA8B;CAC9B,yCAAyC;CACzC,wCAAwC;CACxC,gBAAgB;CAChB;;iBAEgB;CAChB,YAAY;CACZ,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,0CAA0C;AAC3C;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,cAAc;AACf;;AAEA;CACC,aAAa;CACb,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,SAAS;CACT,iBAAiB;CACjB,gBAAgB;CAChB,wBAAwB;CACxB,gBAAgB;AACjB;;AAEA;CACC,SAAS;CACT,iBAAiB;CACjB,WAAW;CACX,gBAAgB;CAChB,OAAO;CACP,oBAAoB;CACpB,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,+BAA+B;CAC/B,yBAAyB;CACzB,kBAAkB;CAClB,iBAAiB;CACjB,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB;;gBAEe;AAChB;;AAEA;CACC,qCAAqC;AACtC","sourcesContent":[".product-card {\r\n\tbackground: var(--color-light);\r\n\tborder-radius: var(--border-radius-large);\r\n\tbox-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n\toverflow: hidden;\r\n\ttransition:\r\n\t\ttransform 0.2s,\r\n\t\tbox-shadow 0.2s;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.product-card:hover {\r\n\tbox-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.product-card__image-wrapper {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 200px;\r\n\toverflow: hidden;\r\n}\r\n\r\n.product-card__image {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tobject-fit: cover;\r\n\tdisplay: block;\r\n}\r\n\r\n.product-card__content {\r\n\tpadding: 16px;\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 12px;\r\n}\r\n\r\n.product-card__name {\r\n\tmargin: 0;\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 600;\r\n\tcolor: var(--color-dark);\r\n\tline-height: 1.3;\r\n}\r\n\r\n.product-card__description {\r\n\tmargin: 0;\r\n\tfont-size: 0.9rem;\r\n\tcolor: #666;\r\n\tline-height: 1.4;\r\n\tflex: 1;\r\n\tdisplay: -webkit-box;\r\n\toverflow: hidden;\r\n}\r\n\r\n.product-card__footer {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tmargin-top: auto;\r\n}\r\n\r\n.product-card__price {\r\n\tfont-size: 1.2rem;\r\n\tfont-weight: 700;\r\n\tcolor: var(--color-dark);\r\n}\r\n\r\n.product-card__add-btn {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tborder: none;\r\n\tbackground: var(--color-accent);\r\n\tcolor: var(--color-light);\r\n\tborder-radius: 50%;\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: 600;\r\n\tcursor: pointer;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\ttransition:\r\n\t\tbackground-color 0.2s,\r\n\t\ttransform 0.2s;\r\n}\r\n\r\n.product-card__add-btn:hover {\r\n\tbackground: var(--color-accent-hover);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ProductsBatch/ProductsBatch.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ProductsBatch/ProductsBatch.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.store-products {
	width: 100%;
	margin-top: 1rem;
}

.store-products__title {
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0 0 16px;
	color: var(--color-dark);
}

.store-products__grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 24px;
	width: 100%;
}

.products-empty {
	text-align: center;
	color: #666;
	font-size: 1.1rem;
	padding: 32px 0;
}
`, "",{"version":3,"sources":["webpack://./src/components/ProductsBatch/ProductsBatch.css"],"names":[],"mappings":"AAAA;CACC,WAAW;CACX,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;CAChB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,4DAA4D;CAC5D,SAAS;CACT,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,iBAAiB;CACjB,eAAe;AAChB","sourcesContent":[".store-products {\r\n\twidth: 100%;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n.store-products__title {\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: 600;\r\n\tmargin: 0 0 16px;\r\n\tcolor: var(--color-dark);\r\n}\r\n\r\n.store-products__grid {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\r\n\tgap: 24px;\r\n\twidth: 100%;\r\n}\r\n\r\n.products-empty {\r\n\ttext-align: center;\r\n\tcolor: #666;\r\n\tfont-size: 1.1rem;\r\n\tpadding: 32px 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Search/Search.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Search/Search.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.search-bar {
	display: flex;
	align-items: center;
	border: 0.1rem solid var(--color-accent);
	border-radius: var(--border-radius-large);
	background-color: var(--color-light);
	height: 2.4rem;
}

.search-icon {
	width: 1rem;
	height: 1rem;
	margin: 1rem;
}

.search-bar input {
	border: none;
	outline: none;
	width: 20rem;
	text-align: left;
	background-color: transparent;
	padding: 0.5rem 0;
}

.search-bar button {
	border: none;
	background: var(--color-accent);
	color: var(--color-light);
	padding: 0.5rem 1rem;
	cursor: pointer;
	width: 7rem;
	height: 100%;
	border-radius: var(--border-radius-medium);
	font-size: var(--button-font-size);
}

.search-bar:hover {
	border-color: var(--color-accent-hover);
}

.search-bar button:hover {
	background-color: var(--color-accent-hover);
}
`, "",{"version":3,"sources":["webpack://./src/components/Search/Search.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,mBAAmB;CACnB,wCAAwC;CACxC,yCAAyC;CACzC,oCAAoC;CACpC,cAAc;AACf;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,YAAY;CACZ,gBAAgB;CAChB,6BAA6B;CAC7B,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,+BAA+B;CAC/B,yBAAyB;CACzB,oBAAoB;CACpB,eAAe;CACf,WAAW;CACX,YAAY;CACZ,0CAA0C;CAC1C,kCAAkC;AACnC;;AAEA;CACC,uCAAuC;AACxC;;AAEA;CACC,2CAA2C;AAC5C","sourcesContent":[".search-bar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tborder: 0.1rem solid var(--color-accent);\r\n\tborder-radius: var(--border-radius-large);\r\n\tbackground-color: var(--color-light);\r\n\theight: 2.4rem;\r\n}\r\n\r\n.search-icon {\r\n\twidth: 1rem;\r\n\theight: 1rem;\r\n\tmargin: 1rem;\r\n}\r\n\r\n.search-bar input {\r\n\tborder: none;\r\n\toutline: none;\r\n\twidth: 20rem;\r\n\ttext-align: left;\r\n\tbackground-color: transparent;\r\n\tpadding: 0.5rem 0;\r\n}\r\n\r\n.search-bar button {\r\n\tborder: none;\r\n\tbackground: var(--color-accent);\r\n\tcolor: var(--color-light);\r\n\tpadding: 0.5rem 1rem;\r\n\tcursor: pointer;\r\n\twidth: 7rem;\r\n\theight: 100%;\r\n\tborder-radius: var(--border-radius-medium);\r\n\tfont-size: var(--button-font-size);\r\n}\r\n\r\n.search-bar:hover {\r\n\tborder-color: var(--color-accent-hover);\r\n}\r\n\r\n.search-bar button:hover {\r\n\tbackground-color: var(--color-accent-hover);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Selector/Selector.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Selector/Selector.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.city-selector {
	position: relative;
	width: 180px;
}

.city-selector__trigger {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 8px 12px;
	border-radius: var(--border-radius-medium);
	background: var(--color-light);
	cursor: pointer;
}

.city-selector__icon {
	width: 20px;
	height: 20px;
	object-fit: contain;
	flex-shrink: 0;
}

.city-selector__value {
	flex: 1;
	min-width: 0;
	font-size: 14px;
	color: #333;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.city-selector__arrow {
	width: 8px;
	height: 8px;
	border-right: 2px solid var(--color-accent);
	border-bottom: 2px solid var(--color-accent);
	transform: rotate(45deg);
	flex-shrink: 0;
}

.city-selector__dropdown {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: var(--color-light);
	border: 1px solid var(--color-input-stroke);
	border-radius: var(--border-radius-medium);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	margin-top: 4px;
}

.city-selector__search {
	width: 100%;
	padding: 8px 12px;
	border: none;
	border-bottom: 1px solid var(--color-input-stroke);
	outline: none;
	font-size: 14px;
}

.city-selector__list {
	max-height: 200px;
	overflow-y: auto;
}

.city-selector__option {
	padding: 10px 12px;
	cursor: pointer;
	font-size: 14px;
	color: #333;
	border-radius: var(--border-radius-medium);
}

.city-selector__option:hover {
	background-color: var(--color-background-accent);
}

.city-selector__empty {
	padding: 10px 12px;
	color: #666;
	font-size: 14px;
	text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/components/Selector/Selector.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,iBAAiB;CACjB,0CAA0C;CAC1C,8BAA8B;CAC9B,eAAe;AAChB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,cAAc;AACf;;AAEA;CACC,OAAO;CACP,YAAY;CACZ,eAAe;CACf,WAAW;CACX,mBAAmB;CACnB,gBAAgB;CAChB,uBAAuB;AACxB;;AAEA;CACC,UAAU;CACV,WAAW;CACX,2CAA2C;CAC3C,4CAA4C;CAC5C,wBAAwB;CACxB,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,OAAO;CACP,QAAQ;CACR,8BAA8B;CAC9B,2CAA2C;CAC3C,0CAA0C;CAC1C,yCAAyC;CACzC,aAAa;CACb,eAAe;AAChB;;AAEA;CACC,WAAW;CACX,iBAAiB;CACjB,YAAY;CACZ,kDAAkD;CAClD,aAAa;CACb,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,eAAe;CACf,WAAW;CACX,0CAA0C;AAC3C;;AAEA;CACC,gDAAgD;AACjD;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,eAAe;CACf,kBAAkB;AACnB","sourcesContent":[".city-selector {\r\n\tposition: relative;\r\n\twidth: 180px;\r\n}\r\n\r\n.city-selector__trigger {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 10px;\r\n\tpadding: 8px 12px;\r\n\tborder-radius: var(--border-radius-medium);\r\n\tbackground: var(--color-light);\r\n\tcursor: pointer;\r\n}\r\n\r\n.city-selector__icon {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tobject-fit: contain;\r\n\tflex-shrink: 0;\r\n}\r\n\r\n.city-selector__value {\r\n\tflex: 1;\r\n\tmin-width: 0;\r\n\tfont-size: 14px;\r\n\tcolor: #333;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n}\r\n\r\n.city-selector__arrow {\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tborder-right: 2px solid var(--color-accent);\r\n\tborder-bottom: 2px solid var(--color-accent);\r\n\ttransform: rotate(45deg);\r\n\tflex-shrink: 0;\r\n}\r\n\r\n.city-selector__dropdown {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbackground: var(--color-light);\r\n\tborder: 1px solid var(--color-input-stroke);\r\n\tborder-radius: var(--border-radius-medium);\r\n\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n\tz-index: 1000;\r\n\tmargin-top: 4px;\r\n}\r\n\r\n.city-selector__search {\r\n\twidth: 100%;\r\n\tpadding: 8px 12px;\r\n\tborder: none;\r\n\tborder-bottom: 1px solid var(--color-input-stroke);\r\n\toutline: none;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.city-selector__list {\r\n\tmax-height: 200px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.city-selector__option {\r\n\tpadding: 10px 12px;\r\n\tcursor: pointer;\r\n\tfont-size: 14px;\r\n\tcolor: #333;\r\n\tborder-radius: var(--border-radius-medium);\r\n}\r\n\r\n.city-selector__option:hover {\r\n\tbackground-color: var(--color-background-accent);\r\n}\r\n\r\n.city-selector__empty {\r\n\tpadding: 10px 12px;\r\n\tcolor: #666;\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/StoreInfo/StoreInfo.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/StoreInfo/StoreInfo.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.store-info {
	position: relative;
	width: 100%;
	height: 300px;
	background: var(--color-light);
	border-radius: var(--border-radius-large);
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
	overflow: hidden;
}

.store-info__image-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.store-info__image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}

.store-info__top-left {
	position: absolute;
	top: 24px;
	left: 24px;
	color: var(--color-light);
	background: rgba(0, 0, 0, 0.6);
	padding: 8px 12px;
	border-radius: var(--border-radius-small);
}

.store-info__title {
	margin: 0;
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1.2;
	display: inline;
}

.store-info__rating {
	font-size: 1.1rem;
	font-weight: 600;
	display: inline;
	margin-left: 8px;
}

.store-info__bottom-left {
	position: absolute;
	bottom: 24px;
	left: 24px;
	color: var(--color-light);
	background: rgba(0, 0, 0, 0.6);
	padding: 8px 12px;
	border-radius: var(--border-radius-small);
	max-width: 80%;
}

.store-info__detail {
	font-size: 0.95rem;
	line-height: 1.4;
	margin: 4px 0;
}

.store-info__detail strong {
	color: var(--color-light);
	font-weight: 600;
}
`, "",{"version":3,"sources":["webpack://./src/components/StoreInfo/StoreInfo.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,WAAW;CACX,aAAa;CACb,8BAA8B;CAC9B,yCAAyC;CACzC,yCAAyC;CACzC,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,WAAW;CACX,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,UAAU;CACV,yBAAyB;CACzB,8BAA8B;CAC9B,iBAAiB;CACjB,yCAAyC;AAC1C;;AAEA;CACC,SAAS;CACT,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,UAAU;CACV,yBAAyB;CACzB,8BAA8B;CAC9B,iBAAiB;CACjB,yCAAyC;CACzC,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,aAAa;AACd;;AAEA;CACC,yBAAyB;CACzB,gBAAgB;AACjB","sourcesContent":[".store-info {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 300px;\r\n\tbackground: var(--color-light);\r\n\tborder-radius: var(--border-radius-large);\r\n\tbox-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\r\n\toverflow: hidden;\r\n}\r\n\r\n.store-info__image-container {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n}\r\n\r\n.store-info__image {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tobject-fit: cover;\r\n\tdisplay: block;\r\n}\r\n\r\n.store-info__top-left {\r\n\tposition: absolute;\r\n\ttop: 24px;\r\n\tleft: 24px;\r\n\tcolor: var(--color-light);\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n\tpadding: 8px 12px;\r\n\tborder-radius: var(--border-radius-small);\r\n}\r\n\r\n.store-info__title {\r\n\tmargin: 0;\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.2;\r\n\tdisplay: inline;\r\n}\r\n\r\n.store-info__rating {\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 600;\r\n\tdisplay: inline;\r\n\tmargin-left: 8px;\r\n}\r\n\r\n.store-info__bottom-left {\r\n\tposition: absolute;\r\n\tbottom: 24px;\r\n\tleft: 24px;\r\n\tcolor: var(--color-light);\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n\tpadding: 8px 12px;\r\n\tborder-radius: var(--border-radius-small);\r\n\tmax-width: 80%;\r\n}\r\n\r\n.store-info__detail {\r\n\tfont-size: 0.95rem;\r\n\tline-height: 1.4;\r\n\tmargin: 4px 0;\r\n}\r\n\r\n.store-info__detail strong {\r\n\tcolor: var(--color-light);\r\n\tfont-weight: 600;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Batch/Batch.css":
/*!****************************************!*\
  !*** ./src/components/Batch/Batch.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Batch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Batch.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Batch/Batch.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Batch_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Batch_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Batch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Batch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Batch/Batch.tsx":
/*!****************************************!*\
  !*** ./src/components/Batch/Batch.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Batch: () => (/* binding */ Batch)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _modules_storeApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/storeApi */ "./src/modules/storeApi.ts");
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ "./src/components/Card/Card.tsx");
/* harmony import */ var _Batch_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Batch.css */ "./src/components/Batch/Batch.css");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var Batch = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      stores: [],
      isLoading: false,
      hasMore: true,
      lastId: null
    };
  },
  observer: null,
  loadStores: function loadStores() {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var isLoadMore, response, _newStores, newStores, newLastId, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            isLoadMore = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
            if (!_this.state.isLoading) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _this.updateState({
              isLoading: true
            });
            _context.p = 2;
            _context.n = 3;
            return _modules_storeApi__WEBPACK_IMPORTED_MODULE_1__.StoreApi.getStores({
              limit: _this.props.batchSize || 12,
              lastId: isLoadMore ? _this.state.lastId : null
            });
          case 3:
            response = _context.v;
            if (response && Array.isArray(response)) {
              newStores = response;
              newLastId = ((_newStores = newStores[newStores.length - 1]) === null || _newStores === void 0 ? void 0 : _newStores.id) || null;
              _this.updateState({
                stores: isLoadMore ? [].concat(_toConsumableArray(_this.state.stores), _toConsumableArray(newStores)) : newStores,
                lastId: newLastId,
                hasMore: newStores.length === (_this.props.batchSize || 12),
                isLoading: false
              });
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.warn(_t);
            _this.updateState({
              isLoading: false
            });
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4]]);
    }))();
  },
  loadMore: function loadMore() {
    if (this.state.hasMore && !this.state.isLoading) {
      this.loadStores(true);
    }
  },
  onMounted: function onMounted() {
    var _this2 = this;
    this.loadStores();
    queueMicrotask(function () {
      var trigger = document.getElementById('loadTrigger');
      if (trigger && _this2.state.hasMore) {
        _this2.observer = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting && _this2.state.hasMore && !_this2.state.isLoading) {
            _this2.loadMore();
          }
        });
        _this2.observer.observe(trigger);
      }
    });
  },
  onUnmounted: function onUnmounted() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  render: function render() {
    var _this3 = this;
    var _this$state = this.state,
      stores = _this$state.stores,
      isLoading = _this$state.isLoading,
      hasMore = _this$state.hasMore;
    return h("div", {
      class: "batch"
    }, h("div", {
      class: "stores-grid"
    }, stores.map(function (store) {
      return h(_Card_Card__WEBPACK_IMPORTED_MODULE_2__.Card, {
        key: store.store_id,
        store: store,
        onCardClick: _this3.props.onCardClick
      });
    })), h("div", {
      id: "loadTrigger",
      class: "batch-load-trigger",
      style: {
        display: hasMore && !isLoading ? 'block' : 'none'
      }
    }));
  }
});

/***/ }),

/***/ "./src/components/Button/Button.css":
/*!******************************************!*\
  !*** ./src/components/Button/Button.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Button.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Button/Button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.css */ "./src/components/Button/Button.css");


var Button = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'accent' : _props$variant,
      onClick = props.onClick,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      text = props.text,
      children = props.children,
      type = props.type;
    var buttonClasses = ['button', "button--".concat(variant), className].filter(Boolean).join(' ');
    var content = text || children || 'КНОПКА';
    return h("button", {
      type: type,
      class: buttonClasses,
      on: {
        click: function click(e) {
          onClick === null || onClick === void 0 || onClick(e);
        }
      }
    }, h("span", {
      class: "button__content"
    }, content));
  }
});

/***/ }),

/***/ "./src/components/Card/Card.css":
/*!**************************************!*\
  !*** ./src/components/Card/Card.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Card.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Card/Card.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Card/Card.tsx":
/*!**************************************!*\
  !*** ./src/components/Card/Card.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/api */ "./src/modules/api.ts");
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.css */ "./src/components/Card/Card.css");




var Card = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var store = props.store,
      onCardClick = props.onCardClick;
    var handleCardClick = function handleCardClick() {
      onCardClick === null || onCardClick === void 0 || onCardClick(store.id);
      (0,_modules_router__WEBPACK_IMPORTED_MODULE_1__.navigate)("/store/".concat(store.id));
    };
    var handleFavClick = function handleFavClick(e) {
      e.stopPropagation();
      e.preventDefault();
    };
    return h("div", {
      class: "store-card",
      on: {
        click: handleCardClick
      }
    }, h("div", {
      class: "store-card__container"
    }, h("div", {
      class: "store-card__image-wrapper"
    }, store.card_img && h("img", {
      class: "store-card__image",
      src: "".concat(_modules_api__WEBPACK_IMPORTED_MODULE_2__.API.BASE_URL, "/image").concat(store.card_img),
      alt: store.name
    }), h("div", {
      class: "store-card__fav",
      on: {
        click: handleFavClick
      }
    }, h("img", {
      src: "/static/icons/fav.png",
      alt: "fav",
      class: "store-card__fav-image"
    }))), h("div", {
      class: "store-card__content"
    }, h("div", {
      class: "store-card__name"
    }, store.name), h("div", {
      class: "store-card__info"
    }, h("div", {
      class: "store-card__time"
    }, h("img", {
      src: "/static/icons/car.png",
      alt: "car",
      class: "store-card__time-icon"
    }), h("div", {
      class: "store-card__time-value"
    }, "30 \u043C\u0438\u043D")), h("div", {
      class: "store-card__rating"
    }, h("img", {
      src: "/static/icons/star.png",
      alt: "star",
      class: "store-card__rating-icon"
    }), h("div", {
      class: "store-card__rating-value"
    }, store.rating))))));
  }
});

/***/ }),

/***/ "./src/components/CardsHeader/CardsHeader.css":
/*!****************************************************!*\
  !*** ./src/components/CardsHeader/CardsHeader.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_CardsHeader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./CardsHeader.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CardsHeader/CardsHeader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_CardsHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_CardsHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_CardsHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_CardsHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CardsHeader/CardsHeader.tsx":
/*!****************************************************!*\
  !*** ./src/components/CardsHeader/CardsHeader.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsHeader: () => (/* binding */ CardsHeader)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _CardsHeader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsHeader.css */ "./src/components/CardsHeader/CardsHeader.css");


var CardsHeader = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var handleFilterClick = function handleFilterClick(filter) {
      var _props$onFilterChange;
      (_props$onFilterChange = props.onFilterChange) === null || _props$onFilterChange === void 0 || _props$onFilterChange.call(props, filter);
    };
    var handleSortClick = function handleSortClick() {
      var _props$onSortToggle;
      (_props$onSortToggle = props.onSortToggle) === null || _props$onSortToggle === void 0 || _props$onSortToggle.call(props);
    };
    var filters = [{
      key: 'all',
      label: 'Все',
      active: true
    }, {
      key: 'pickup',
      label: 'Самовывоз'
    }, {
      key: 'burgers',
      label: 'Бургеры'
    }, {
      key: 'sushi',
      label: 'Суши'
    }, {
      key: 'pizza',
      label: 'Пицца'
    }, {
      key: 'wok',
      label: 'Вок'
    }, {
      key: 'pasta',
      label: 'Паста'
    }, {
      key: 'breakfast',
      label: 'Завтраки'
    }];
    return h("div", {
      class: "cards-header"
    }, h("h2", {
      class: "cards-header__title"
    }, "\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"), h("div", {
      class: "cards-header__filters filters"
    }, filters.map(function (filter) {
      return h("button", {
        class: "filters__button ".concat(filter.active ? 'filters__button--active' : ''),
        on: {
          click: function click() {
            return handleFilterClick(filter.key);
          }
        }
      }, filter.label);
    }), h("div", {
      class: "filters__more more"
    }, h("button", {
      class: "more__button filters__button",
      on: {
        click: function click() {
          return handleFilterClick('more');
        }
      }
    }, "\u0415\u0449\u0451")), h("div", {
      class: "filters__sort sort",
      on: {
        click: handleSortClick
      }
    }, h("span", {
      class: "sort__text"
    }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"))));
  }
});

/***/ }),

/***/ "./src/components/Cart/Cart.css":
/*!**************************************!*\
  !*** ./src/components/Cart/Cart.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Cart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Cart.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Cart/Cart.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Cart_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Cart_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Cart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Cart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Cart/Cart.tsx":
/*!**************************************!*\
  !*** ./src/components/Cart/Cart.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cart: () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _modules_cartManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/cartManager */ "./src/modules/cartManager.ts");
/* harmony import */ var _CartItem_CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CartItem/CartItem */ "./src/components/CartItem/CartItem.tsx");
/* harmony import */ var _Cart_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart.css */ "./src/components/Cart/Cart.css");




var Cart = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      items: (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)()
    };
  },
  onMounted: function onMounted() {
    this.updateState({
      items: (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)()
    });
  },
  handleIncrease: function handleIncrease(id) {
    var item = this.state.items.find(function (i) {
      return i.id === id;
    });
    if (item) {
      (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.updateQuantity)(id, item.quantity + 1);
      this.updateState({
        items: (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)()
      });
    }
  },
  handleDecrease: function handleDecrease(id) {
    var item = this.state.items.find(function (i) {
      return i.id === id;
    });
    if (!item) {
      return;
    }
    if (item.quantity <= 1) {
      (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.removeFromCart)(id);
      this.updateState({
        items: (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)()
      });
    } else {
      (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.updateQuantity)(id, item.quantity - 1);
      this.updateState({
        items: (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)()
      });
    }
  },
  handleRemove: function handleRemove(id) {
    (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.removeFromCart)(id);
    this.updateState({
      items: (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)()
    });
  },
  getTotal: function getTotal() {
    return this.state.items.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);
  },
  render: function render() {
    var _this = this;
    var props = this.props;
    var items = this.state.items;
    var total = this.getTotal();
    return h("div", {
      class: "cart-overlay",
      on: {
        click: function click(e) {
          if (e.target === e.currentTarget) {
            props.onClose();
          }
        }
      }
    }, h("div", {
      class: "cart-panel"
    }, h("div", {
      class: "cart-header"
    }, h("h3", {
      class: "cart-title"
    }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"), h("div", {
      class: "cart-total"
    }, "\u0418\u0442\u043E\u0433\u043E: ", total, " \u20BD"), h("button", {
      class: "cart-close",
      on: {
        click: props.onClose
      }
    }, "\u2715")), h("div", {
      class: "cart-body"
    }, h("div", {
      class: "cart-items"
    }, items.length > 0 ? items.map(function (item) {
      return h(_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_2__.CartItem, {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        card_img: item.card_img,
        onIncrease: function onIncrease() {
          return _this.handleIncrease(item.id);
        },
        onDecrease: function onDecrease() {
          return _this.handleDecrease(item.id);
        },
        onRemove: function onRemove() {
          return _this.handleRemove(item.id);
        }
      });
    }) : h("p", {
      class: "cart-empty"
    }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430"))), h("div", {
      class: "cart-footer"
    }, h("button", {
      class: "cart-checkout"
    }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044E"))));
  }
});

/***/ }),

/***/ "./src/components/CartItem/CartItem.css":
/*!**********************************************!*\
  !*** ./src/components/CartItem/CartItem.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_CartItem_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./CartItem.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CartItem/CartItem.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_CartItem_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_CartItem_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_CartItem_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_CartItem_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CartItem/CartItem.tsx":
/*!**********************************************!*\
  !*** ./src/components/CartItem/CartItem.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartItem: () => (/* binding */ CartItem)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _CartItem_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem.css */ "./src/components/CartItem/CartItem.css");


var CartItem = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var id = props.id,
      name = props.name,
      price = props.price,
      quantity = props.quantity,
      card_img = props.card_img,
      onIncrease = props.onIncrease,
      onDecrease = props.onDecrease;
    var handleIncrease = function handleIncrease(e) {
      e.stopPropagation();
      e.preventDefault();
      onIncrease === null || onIncrease === void 0 || onIncrease(id);
    };
    var handleDecrease = function handleDecrease(e) {
      e.stopPropagation();
      e.preventDefault();
      if (quantity > 0) {
        onDecrease === null || onDecrease === void 0 || onDecrease(id);
      }
    };
    return h("div", {
      class: "cart-item"
    }, card_img && h("img", {
      class: "cart-item__image",
      src: "http://localhost:8080/api/v0/image".concat(card_img),
      alt: name
    }), h("div", {
      class: "cart-item__info"
    }, h("div", {
      class: "cart-item__name"
    }, name), h("div", {
      class: "cart-item__price"
    }, price, " \u20BD")), h("div", {
      class: "cart-item__controls"
    }, h("button", {
      class: "cart-item__control-btn",
      on: {
        click: handleDecrease
      }
    }, "\u2013"), h("span", {
      class: "cart-item__quantity"
    }, quantity), h("button", {
      class: "cart-item__control-btn",
      on: {
        click: handleIncrease
      }
    }, "+")));
  }
});

/***/ }),

/***/ "./src/components/CommonCSS/Variables.css":
/*!************************************************!*\
  !*** ./src/components/CommonCSS/Variables.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CommonCSS/Variables.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/Footer.css":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer/Footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ "./src/components/Footer/Footer.css");


var Footer = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    return h("div", {
      class: "footer"
    }, h("div", {
      class: "left-part"
    }, "\xA9 2025 \u041E\u041E\u041E AppleClub"), h("div", {
      class: "right-part"
    }, "appleclub.support@mail.ru \u041F\u0440\u043E\u0435\u043A\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \"\u042F\u0431\u043B\u043E\u043A\u043E\""));
  }
});

/***/ }),

/***/ "./src/components/IconButton/IconButton.css":
/*!**************************************************!*\
  !*** ./src/components/IconButton/IconButton.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_IconButton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./IconButton.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/IconButton/IconButton.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_IconButton_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_IconButton_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_IconButton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_IconButton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/IconButton/IconButton.tsx":
/*!**************************************************!*\
  !*** ./src/components/IconButton/IconButton.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconButton: () => (/* binding */ IconButton)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _IconButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconButton.css */ "./src/components/IconButton/IconButton.css");


var IconButton = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var src = props.src,
      alt = props.alt,
      text = props.text,
      onClick = props.onClick;
    return h("button", {
      class: "icon-button",
      type: "button",
      on: {
        click: function click(e) {
          onClick === null || onClick === void 0 || onClick(e);
        }
      }
    }, h("img", {
      src: src,
      alt: alt,
      class: "icon-button__image"
    }), text && h("span", {
      class: "icon-button__text"
    }, text));
  }
});

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.css":
/*!************************************************!*\
  !*** ./src/components/LoginForm/LoginForm.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_LoginForm_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./LoginForm.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_LoginForm_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_LoginForm_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_LoginForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_LoginForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/LoginForm/LoginForm.tsx":
/*!************************************************!*\
  !*** ./src/components/LoginForm/LoginForm.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginForm: () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo/Logo */ "./src/components/Logo/Logo.tsx");
/* harmony import */ var _LoginForm_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm.css */ "./src/components/LoginForm/LoginForm.css");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var LoginForm = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      isAuth: true,
      email: '',
      password: '',
      confirmPassword: '',
      isAwaiting: false,
      authErr: '',
      emailErr: '',
      passErr: '',
      passConfErr: ''
    };
  },
  handleSubmit: function handleSubmit(e) {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _this$state, isAuth, isAwaiting, message, authError;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e.preventDefault();
            _this$state = _this.state, isAuth = _this$state.isAuth, isAwaiting = _this$state.isAwaiting;
            if (!isAwaiting) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _this.updateState({
              isAwaiting: true,
              authErr: ''
            });
            try {
              Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../modules/router */ "./src/modules/router.ts")).then(function (router) {
                return router.navigate('/');
              });
            } catch (error) {
              message = 'Ошибка авторизации';
              if (error && _typeof(error) === 'object') {
                authError = error;
                if (authError !== null && authError !== void 0 && authError.response) {
                  if (typeof authError.response === 'string') {
                    message = authError.response;
                  } else if (_typeof(authError.response) === 'object' && authError.response.message) {
                    message = authError.response.message;
                  }
                } else if (authError !== null && authError !== void 0 && authError.message) {
                  message = authError.message;
                }
              } else if (typeof error === 'string') {
                message = error;
              }
              console.error('Auth error:', error);
              _this.updateState({
                authErr: message
              });
            } finally {
              _this.updateState({
                isAwaiting: false
              });
            }
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  toggleMode: function toggleMode() {
    this.updateState({
      isAuth: !this.state.isAuth,
      confirmPassword: '',
      authErr: ''
    });
  },
  handleEmailChange: function handleEmailChange(e) {
    var value = e.target.value;
    this.updateState({
      email: value,
      emailErr: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__.validateEmail)(value)
    });
  },
  handlePasswordChange: function handlePasswordChange(e) {
    var value = e.target.value;
    this.updateState({
      password: value,
      passErr: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__.validatePassword)(value)
    });
  },
  handleConfirmPasswordChange: function handleConfirmPasswordChange(e) {
    var value = e.target.value;
    this.updateState({
      confirmPassword: value,
      passConfErr: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__.validateConfirmPassword)(value, this.state.password)
    });
  },
  render: function render() {
    var _this2 = this;
    var _this$state2 = this.state,
      isAuth = _this$state2.isAuth,
      email = _this$state2.email,
      password = _this$state2.password,
      confirmPassword = _this$state2.confirmPassword,
      isAwaiting = _this$state2.isAwaiting,
      authErr = _this$state2.authErr,
      passErr = _this$state2.passErr,
      emailErr = _this$state2.emailErr,
      passConfErr = _this$state2.passConfErr;
    return h("div", {
      class: "login-form"
    }, h(_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__.Logo, {
      size: "large"
    }), h("form", {
      class: "login-form__inner",
      novalidate: true,
      on: {
        submit: function submit(e) {
          return _this2.handleSubmit(e);
        }
      }
    }, h("div", {
      class: "login-form__field"
    }, h("input", {
      type: "email",
      placeholder: "Email",
      value: email,
      on: {
        input: function input(e) {
          return _this2.handleEmailChange(e);
        }
      },
      disabled: isAwaiting || undefined,
      class: emailErr ? 'login-form__input--error' : ''
    })), h("div", {
      class: "login-form__error",
      style: {
        display: emailErr ? 'block' : 'none'
      }
    }, emailErr), h("div", {
      class: "login-form__field"
    }, h("input", {
      type: "password",
      placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
      value: password,
      on: {
        input: function input(e) {
          return _this2.handlePasswordChange(e);
        }
      },
      disabled: isAwaiting || undefined,
      class: passErr ? 'login-form__input--error' : ''
    })), h("div", {
      class: "login-form__error",
      style: {
        display: passErr ? 'block' : 'none'
      }
    }, passErr), h("div", {
      class: "login-form__field",
      style: {
        display: isAuth ? 'none' : 'block'
      }
    }, h("input", {
      type: "password",
      placeholder: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
      value: confirmPassword,
      on: {
        input: function input(e) {
          return _this2.handleConfirmPasswordChange(e);
        }
      },
      disabled: isAwaiting || undefined,
      class: passConfErr ? 'login-form__input--error' : ''
    })), h("div", {
      class: "login-form__error",
      style: {
        display: passConfErr ? 'block' : 'none'
      }
    }, passConfErr), h("div", {
      class: "login-form__error",
      style: {
        display: authErr ? 'block' : 'none'
      }
    }, authErr), h(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: "submit-".concat(isAuth),
      type: "submit",
      variant: "accent",
      class: "login-form__submit",
      disabled: isAwaiting || undefined,
      text: isAwaiting ? 'Загрузка...' : isAuth ? 'Войти' : 'Зарегистрироваться'
    }), h(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: "toggle-".concat(isAuth),
      type: "button",
      variant: "accent",
      class: "login-form__toggle",
      onClick: function onClick() {
        return _this2.toggleMode();
      },
      disabled: isAwaiting || undefined,
      text: isAuth ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'
    })));
  }
});

/***/ }),

/***/ "./src/components/Logo/Logo.tsx":
/*!**************************************!*\
  !*** ./src/components/Logo/Logo.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logo: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");

var Logo = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var size = props.size || 'medium';
    var sizes = {
      small: '32px',
      medium: '48px',
      large: '192px'
    };
    return h("div", {
      on: {
        click: props.onClick
      }
    }, h("img", {
      src: "/static/icons/logo.png",
      alt: "logo",
      style: {
        height: sizes[size],
        width: sizes[size],
        objectFit: 'cover',
        marginRight: '15px'
      }
    }));
  }
});

/***/ }),

/***/ "./src/components/Navbar/Navbar.css":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Navbar/Navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navbar: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/store */ "./src/modules/store.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../IconButton/IconButton */ "./src/components/IconButton/IconButton.tsx");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Logo/Logo */ "./src/components/Logo/Logo.tsx");
/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Search/Search */ "./src/components/Search/Search.tsx");
/* harmony import */ var _Selector_Selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Selector/Selector */ "./src/components/Selector/Selector.tsx");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Navbar.css */ "./src/components/Navbar/Navbar.css");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }











var Navbar = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      userAuthed: _modules_store__WEBPACK_IMPORTED_MODULE_3__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_IS_AUTHENTICATED) === true
    };
  },
  onMounted: function onMounted() {
    var _this = this;
    this.unsubscribe = _modules_store__WEBPACK_IMPORTED_MODULE_3__.store.subscribe(_utils_auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_IS_AUTHENTICATED, function () {
      _this.updateState({
        userAuthed: _modules_store__WEBPACK_IMPORTED_MODULE_3__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_IS_AUTHENTICATED) === true
      });
    });
  },
  onUnmounted: function onUnmounted() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
  render: function render() {
    var props = this.props;
    var userAuthed = this.state.userAuthed;
    return h("header", {
      class: "navbar"
    }, h("div", {
      class: "navbar__left"
    }, h(_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__.Logo, {
      size: "medium",
      onClick: props.onLogoClick
    }), h(_Search_Search__WEBPACK_IMPORTED_MODULE_8__.SearchBar, {
      placeholder: "\u041F\u043E\u0438\u0441\u043A \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432 \u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",
      onSearch: props.onSearch
    }), h(_Selector_Selector__WEBPACK_IMPORTED_MODULE_9__.CitySelector, null)), h("div", {
      class: "navbar__right"
    }, h(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
      src: "/static/icons/cart.png",
      alt: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
      text: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
      onClick: props.onCartClick
    }), userAuthed ? [h(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
      src: "/static/icons/bell.png",
      alt: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
      text: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
    }), h(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
      src: "/static/icons/user.png",
      alt: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
      text: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.logout();
            case 1:
              return _context.a(2, _context.v);
          }
        }, _callee);
      }))
    })] : h(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "accent",
      text: "\u0412\u043E\u0439\u0442\u0438",
      onClick: function onClick() {
        return (0,_modules_router__WEBPACK_IMPORTED_MODULE_2__.navigate)('/auth');
      }
    })));
  }
});

/***/ }),

/***/ "./src/components/ProductCard/ProductCard.css":
/*!****************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ProductCard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./ProductCard.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ProductCard/ProductCard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ProductCard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ProductCard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ProductCard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ProductCard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProductCard/ProductCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCard: () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/api */ "./src/modules/api.ts");
/* harmony import */ var _ProductCard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard.css */ "./src/components/ProductCard/ProductCard.css");



var ProductCard = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var product = props.product,
      onAddToCart = props.onAddToCart;
    var handleAddClick = function handleAddClick(e) {
      e.stopPropagation();
      e.preventDefault();
      onAddToCart === null || onAddToCart === void 0 || onAddToCart(product.id);
    };
    return h("div", {
      class: "product-card"
    }, h("div", {
      class: "product-card__image-wrapper"
    }, product.card_img && h("img", {
      class: "product-card__image",
      src: "".concat(_modules_api__WEBPACK_IMPORTED_MODULE_1__.API.BASE_URL, "/image").concat(product.card_img),
      alt: product.name
    })), h("div", {
      class: "product-card__content"
    }, h("h3", {
      class: "product-card__name"
    }, product.name), product.description && h("p", {
      class: "product-card__description"
    }, product.description), h("div", {
      class: "product-card__footer"
    }, h("div", {
      class: "product-card__price"
    }, product.price, " \u20BD"), h("button", {
      class: "product-card__add-btn",
      on: {
        click: handleAddClick
      }
    }, "+"))));
  }
});

/***/ }),

/***/ "./src/components/ProductsBatch/ProductsBatch.css":
/*!********************************************************!*\
  !*** ./src/components/ProductsBatch/ProductsBatch.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ProductsBatch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./ProductsBatch.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ProductsBatch/ProductsBatch.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ProductsBatch_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ProductsBatch_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ProductsBatch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ProductsBatch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProductsBatch/ProductsBatch.tsx":
/*!********************************************************!*\
  !*** ./src/components/ProductsBatch/ProductsBatch.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsBatch: () => (/* binding */ ProductsBatch)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductCard/ProductCard */ "./src/components/ProductCard/ProductCard.tsx");
/* harmony import */ var _ProductsBatch_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsBatch.css */ "./src/components/ProductsBatch/ProductsBatch.css");



var ProductsBatch = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var products = props.products,
      onAddToCart = props.onAddToCart;
    return h("div", {
      class: "store-products"
    }, h("div", {
      class: "store-products__grid"
    }, products.map(function (product) {
      return h(_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_1__.ProductCard, {
        product: product,
        onAddToCart: onAddToCart
      });
    })));
  }
});

/***/ }),

/***/ "./src/components/Search/Search.css":
/*!******************************************!*\
  !*** ./src/components/Search/Search.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Search_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Search.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Search/Search.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Search_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Search_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Search_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Search_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Search/Search.tsx":
/*!******************************************!*\
  !*** ./src/components/Search/Search.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchBar: () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _Search_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.css */ "./src/components/Search/Search.css");


var SearchBar = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      searchQuery: ''
    };
  },
  render: function render() {
    var _this = this;
    var props = this.props;
    var searchQuery = props.value || this.state.searchQuery;
    return h("form", {
      class: "search-bar",
      on: {
        submit: function submit(e) {
          var _props$onSearch;
          e.preventDefault();
          (_props$onSearch = props.onSearch) === null || _props$onSearch === void 0 || _props$onSearch.call(props, searchQuery);
        }
      }
    }, h("img", {
      src: "/static/icons/search.png",
      alt: "search",
      class: "search-icon"
    }), h("input", {
      type: "text",
      placeholder: props.placeholder || 'Поиск ресторанов и категорий',
      value: searchQuery,
      on: {
        input: function input(e) {
          var target = e.target;
          _this.updateState({
            searchQuery: target.value
          });
        }
      }
    }), h("button", {
      type: "submit"
    }, "\u041D\u0430\u0439\u0442\u0438"));
  }
});

/***/ }),

/***/ "./src/components/Selector/Selector.css":
/*!**********************************************!*\
  !*** ./src/components/Selector/Selector.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Selector_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Selector.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Selector/Selector.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Selector_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Selector_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Selector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Selector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Selector/Selector.tsx":
/*!**********************************************!*\
  !*** ./src/components/Selector/Selector.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CitySelector: () => (/* binding */ CitySelector)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_storeApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/storeApi */ "./src/modules/storeApi.ts");
/* harmony import */ var _Selector_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Selector.css */ "./src/components/Selector/Selector.css");




var CITY_KEY = 'selected_city';
function loadSelectedCity() {
  try {
    var data = localStorage.getItem(CITY_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
var CitySelector = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      cities: [],
      selectedCity: loadSelectedCity(),
      query: '',
      isOpen: false
    };
  },
  onMounted: function onMounted() {
    var _this = this;
    var handleDocumentClick = function handleDocumentClick(e) {
      var target = e.target;
      if (!target.closest('.city-selector')) {
        _this.updateState({
          isOpen: false
        });
      }
    };
    document.addEventListener('click', handleDocumentClick);
    this.handleDocumentClick = handleDocumentClick;
    _modules_storeApi__WEBPACK_IMPORTED_MODULE_2__.StoreApi.getCities().then(function (cities) {
      _this.updateState({
        cities: cities
      });
      if (!_this.state.selectedCity && cities.length > 0) {
        _this.handleSelect(cities[0]);
      }
    }).catch(function (error) {
      console.error(error);
    });
  },
  onUnmounted: function onUnmounted() {
    if (this.handleDocumentClick) {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  },
  saveSelectedCity: function saveSelectedCity(city) {
    if (!_modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.isAuthenticated()) {
      try {
        localStorage.setItem(CITY_KEY, JSON.stringify(city));
      } catch (error) {
        console.error(error);
      }
    }
    this.updateState({
      selectedCity: city
    });
  },
  handleSelect: function handleSelect(city) {
    this.saveSelectedCity(city);
    this.updateState({
      isOpen: false,
      query: ''
    });
  },
  toggleDropdown: function toggleDropdown() {
    this.updateState({
      isOpen: !this.state.isOpen
    });
  },
  render: function render() {
    var _this2 = this;
    var _this$state = this.state,
      cities = _this$state.cities,
      selectedCity = _this$state.selectedCity,
      query = _this$state.query,
      isOpen = _this$state.isOpen;
    var filteredCities = cities.filter(function (city) {
      return city.name.toLowerCase().includes(query.toLowerCase());
    });
    return h("div", {
      class: "city-selector"
    }, h("div", {
      class: "city-selector__trigger",
      on: {
        click: function click(e) {
          e.stopPropagation();
          _this2.toggleDropdown();
        }
      }
    }, h("img", {
      src: "/static/icons/address.png",
      alt: "\u0413\u043E\u0440\u043E\u0434",
      class: "city-selector__icon"
    }), h("span", {
      class: "city-selector__value"
    }, selectedCity ? selectedCity.name : 'Выберите город'), h("div", {
      class: "city-selector__arrow"
    })), isOpen ? h("div", {
      class: "city-selector__dropdown",
      on: {
        click: function click(e) {
          return e.stopPropagation();
        }
      }
    }, h("input", {
      type: "text",
      class: "city-selector__search",
      placeholder: "\u041F\u043E\u0438\u0441\u043A...",
      value: query,
      on: {
        input: function input(e) {
          _this2.updateState({
            query: e.target.value
          });
        }
      }
    }), h("div", {
      class: "city-selector__list"
    }, filteredCities.length > 0 ? filteredCities.map(function (city) {
      return h("div", {
        class: "city-selector__option",
        on: {
          click: function click() {
            return _this2.handleSelect(city);
          }
        }
      }, city.name);
    }) : h("div", {
      class: "city-selector__empty"
    }, "\u0413\u043E\u0440\u043E\u0434 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"))) : null, ' ');
  }
});

/***/ }),

/***/ "./src/components/StoreInfo/StoreInfo.css":
/*!************************************************!*\
  !*** ./src/components/StoreInfo/StoreInfo.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_StoreInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./StoreInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/StoreInfo/StoreInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_StoreInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_StoreInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_StoreInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_StoreInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/StoreInfo/StoreInfo.tsx":
/*!************************************************!*\
  !*** ./src/components/StoreInfo/StoreInfo.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreInfo: () => (/* binding */ StoreInfo)
/* harmony export */ });
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _StoreInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreInfo.css */ "./src/components/StoreInfo/StoreInfo.css");


var StoreInfo = (0,_framework_component__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var store = props.store;
    return h("div", {
      class: "store-info"
    }, h("div", {
      class: "store-info__image-container"
    }, store.card_img && h("img", {
      class: "store-info__image",
      src: "http://localhost:8080/api/v0/image".concat(store.card_img),
      alt: store.name
    }), h("div", {
      class: "store-info__top-left"
    }, h("h1", {
      class: "store-info__title"
    }, store.name), store.rating && h("span", {
      class: "store-info__rating"
    }, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ", store.rating)), h("div", {
      class: "store-info__bottom-left"
    }, store.address && h("div", {
      class: "store-info__detail"
    }, h("strong", null, "\u0410\u0434\u0440\u0435\u0441:"), " ", store.address), store.open_at && store.closed_at && h("div", {
      class: "store-info__detail"
    }, h("strong", null, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:"), " ", store.open_at, " -", ' ', store.closed_at), store.city_id && h("div", {
      class: "store-info__detail"
    }, h("strong", null, "\u0413\u043E\u0440\u043E\u0434:"), " ", store.city_id))));
  }
});

/***/ }),

/***/ "./src/framework/app.ts":
/*!******************************!*\
  !*** ./src/framework/app.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createApp: () => (/* binding */ createApp)
/* harmony export */ });
/* harmony import */ var _destroy_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy-dom */ "./src/framework/destroy-dom.ts");
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h */ "./src/framework/h.ts");
/* harmony import */ var _mount_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mount-dom */ "./src/framework/mount-dom.ts");



function createApp(RootComponent) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parentEl = null;
  var isMounted = false;
  var vdom = null;
  function reset() {
    parentEl = null;
    isMounted = false;
    vdom = null;
  }
  if (typeof RootComponent !== "function") {
    throw new Error("RootComponent must be a component class");
  }
  return {
    mount: function mount(_parentEl) {
      if (isMounted) {
        throw new Error('app is already mounted');
      }
      parentEl = _parentEl;
      vdom = (0,_h__WEBPACK_IMPORTED_MODULE_1__.h)(RootComponent, props);
      (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.mountDOM)(vdom, parentEl, null);
      isMounted = true;
    },
    unmount: function unmount() {
      if (!isMounted) {
        throw new Error('app is already unmounted');
      }
      if (vdom) {
        (0,_destroy_dom__WEBPACK_IMPORTED_MODULE_0__.destroyDOM)(vdom);
      }
      reset();
    }
  };
}

/***/ }),

/***/ "./src/framework/component.ts":
/*!************************************!*\
  !*** ./src/framework/component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineComponent: () => (/* binding */ defineComponent)
/* harmony export */ });
/* harmony import */ var _destroy_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy-dom */ "./src/framework/destroy-dom.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispatcher */ "./src/framework/dispatcher.ts");
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h */ "./src/framework/h.ts");
/* harmony import */ var _mount_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mount-dom */ "./src/framework/mount-dom.ts");
/* harmony import */ var _patch_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patch-dom */ "./src/framework/patch-dom.ts");
/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/objects */ "./src/framework/utils/objects.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["render", "state", "onMounted", "onUnmounted"];
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }






var emptyFn = function emptyFn() {};
function defineComponent(_ref) {
  var _render = _ref.render,
    state = _ref.state,
    _ref$onMounted = _ref.onMounted,
    _onMounted = _ref$onMounted === void 0 ? emptyFn : _ref$onMounted,
    _ref$onUnmounted = _ref.onUnmounted,
    _onUnmounted = _ref$onUnmounted === void 0 ? emptyFn : _ref$onUnmounted,
    methods = _objectWithoutProperties(_ref, _excluded);
  var _isMounted = /*#__PURE__*/new WeakMap();
  var _vdom = /*#__PURE__*/new WeakMap();
  var _hostEl = /*#__PURE__*/new WeakMap();
  var _eventHandlers = /*#__PURE__*/new WeakMap();
  var _parentComponent = /*#__PURE__*/new WeakMap();
  var _dispatcher = /*#__PURE__*/new WeakMap();
  var _subscriptions = /*#__PURE__*/new WeakMap();
  var _Component_brand = /*#__PURE__*/new WeakSet();
  var Component = /*#__PURE__*/function () {
    function Component() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var eventHandlers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var parentComponent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck(this, Component);
      _classPrivateMethodInitSpec(this, _Component_brand);
      _classPrivateFieldInitSpec(this, _isMounted, false);
      _classPrivateFieldInitSpec(this, _vdom, null);
      _classPrivateFieldInitSpec(this, _hostEl, null);
      _classPrivateFieldInitSpec(this, _eventHandlers, null);
      _classPrivateFieldInitSpec(this, _parentComponent, null);
      _classPrivateFieldInitSpec(this, _dispatcher, _dispatcher__WEBPACK_IMPORTED_MODULE_1__.dispatcher);
      _classPrivateFieldInitSpec(this, _subscriptions, []);
      this.props = props;
      this.state = state ? state(props) : {};
      _classPrivateFieldSet(_eventHandlers, this, eventHandlers);
      _classPrivateFieldSet(_parentComponent, this, parentComponent);
    }
    return _createClass(Component, [{
      key: "onMounted",
      value: function onMounted() {
        return Promise.resolve(_onMounted.call(this));
      }
    }, {
      key: "onUnmounted",
      value: function onUnmounted() {
        return Promise.resolve(_onUnmounted.call(this));
      }
    }, {
      key: "elements",
      get: function get() {
        if (_classPrivateFieldGet(_vdom, this) == null) {
          return [];
        }
        if (_classPrivateFieldGet(_vdom, this).type == _h__WEBPACK_IMPORTED_MODULE_2__.DOM_TYPES.FRAGMENT) {
          return (0,_h__WEBPACK_IMPORTED_MODULE_2__.extractChildren)(_classPrivateFieldGet(_vdom, this)).flatMap(function (child) {
            if (child.type === _h__WEBPACK_IMPORTED_MODULE_2__.DOM_TYPES.COMPONENT) {
              return child.component.elements;
            }
            return [child.el];
          });
        }
        return [_classPrivateFieldGet(_vdom, this).el];
      }
    }, {
      key: "firstElement",
      get: function get() {
        return this.elements[0];
      }
    }, {
      key: "offset",
      get: function get() {
        var _classPrivateFieldGet2;
        if (((_classPrivateFieldGet2 = _classPrivateFieldGet(_vdom, this)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.type) === _h__WEBPACK_IMPORTED_MODULE_2__.DOM_TYPES.FRAGMENT && _classPrivateFieldGet(_hostEl, this)) {
          return Array.from(_classPrivateFieldGet(_hostEl, this).children).indexOf(this.firstElement);
        }
        return 0;
      }
    }, {
      key: "updateProps",
      value: function updateProps(props) {
        this.props = _objectSpread(_objectSpread({}, this.props), props);
        _assertClassBrand(_Component_brand, this, _patch).call(this);
      }
    }, {
      key: "updateState",
      value: function updateState(state) {
        this.state = _objectSpread(_objectSpread({}, this.state), state);
        _assertClassBrand(_Component_brand, this, _patch).call(this);
      }
    }, {
      key: "emit",
      value: function emit(eventName, payload) {
        _classPrivateFieldGet(_dispatcher, this).dispatch(eventName, payload);
      }
    }, {
      key: "render",
      value: function render() {
        return _render.call(this);
      }
    }, {
      key: "mount",
      value: function mount(hostEl) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (_classPrivateFieldGet(_isMounted, this) === true) {
          throw new Error('Component is already mounted');
        }
        _classPrivateFieldSet(_vdom, this, this.render());
        (0,_mount_dom__WEBPACK_IMPORTED_MODULE_3__.mountDOM)(_classPrivateFieldGet(_vdom, this), hostEl, index, this);
        _assertClassBrand(_Component_brand, this, _wireEventsHandlers).call(this);
        _classPrivateFieldSet(_hostEl, this, hostEl);
        _classPrivateFieldSet(_isMounted, this, true);
      }
    }, {
      key: "unmount",
      value: function unmount() {
        if (_classPrivateFieldGet(_isMounted, this) === false) {
          throw new Error('Component is not mounted');
        }
        if (_classPrivateFieldGet(_vdom, this)) {
          (0,_destroy_dom__WEBPACK_IMPORTED_MODULE_0__.destroyDOM)(_classPrivateFieldGet(_vdom, this));
          _classPrivateFieldGet(_subscriptions, this).forEach(function (unsubscribe) {
            return unsubscribe();
          });
          _classPrivateFieldSet(_vdom, this, null);
          _classPrivateFieldSet(_hostEl, this, null);
          _classPrivateFieldSet(_isMounted, this, false);
          _classPrivateFieldSet(_subscriptions, this, []);
        }
      }
    }]);
  }();
  function _wireEventsHandlers() {
    var _this = this;
    _classPrivateFieldSet(_subscriptions, this, Object.entries(_classPrivateFieldGet(_eventHandlers, this)).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        eventName = _ref3[0],
        handler = _ref3[1];
      return _assertClassBrand(_Component_brand, _this, _wireEventHandler).call(_this, eventName, handler);
    }));
  }
  function _wireEventHandler(eventName, handler) {
    var _this2 = this;
    return _classPrivateFieldGet(_dispatcher, this).subscribe(eventName, function (payload) {
      if (_classPrivateFieldGet(_parentComponent, _this2)) {
        handler.call(_classPrivateFieldGet(_parentComponent, _this2), payload);
      } else {
        handler(payload);
      }
    });
  }
  function _patch() {
    if (_classPrivateFieldGet(_isMounted, this) === false) {
      throw new Error('Component is not mounted');
    }
    if (_classPrivateFieldGet(_vdom, this) && _classPrivateFieldGet(_hostEl, this)) {
      var vdom = this.render();
      _classPrivateFieldSet(_vdom, this, (0,_patch_dom__WEBPACK_IMPORTED_MODULE_4__.patchDOM)(_classPrivateFieldGet(_vdom, this), vdom, _classPrivateFieldGet(_hostEl, this), this));
    }
  }
  for (var methodName in methods) {
    if ((0,_utils_objects__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(Component.prototype, methodName)) {
      throw new Error("Method '".concat(methodName, "' already exists in this component"));
    }
    ;
    Component.prototype[methodName] = methods[methodName];
  }
  return Component;
}

/***/ }),

/***/ "./src/framework/destroy-dom.ts":
/*!**************************************!*\
  !*** ./src/framework/destroy-dom.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroyDOM: () => (/* binding */ destroyDOM)
/* harmony export */ });
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ "./src/framework/h.ts");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler */ "./src/framework/scheduler.ts");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/events */ "./src/framework/utils/events.ts");



function destroyDOM(vNode) {
  switch (vNode.type) {
    case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.TEXT:
      {
        destroyTextNode(vNode);
        break;
      }
    case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.ELEMENT:
      {
        destroyElementNode(vNode);
        break;
      }
    case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.FRAGMENT:
      {
        destroyFragmentNode(vNode);
        break;
      }
    case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.COMPONENT:
      {
        vNode.component.unmount();
        (0,_scheduler__WEBPACK_IMPORTED_MODULE_1__.enqueueJob)(function () {
          return vNode.component.onUnmounted();
        });
        break;
      }
    default:
      {
        throw new Error("Invalid type to destroy DOM: ".concat(vNode.type));
      }
  }
}
function destroyTextNode(vNode) {
  var el = vNode.el;
  if (el) {
    el.remove();
  }
}
function destroyElementNode(vNode) {
  var el = vNode.el,
    children = vNode.children,
    listeners = vNode.listeners;
  if (el) {
    el.remove();
    if (listeners) {
      (0,_utils_events__WEBPACK_IMPORTED_MODULE_2__.removeEventListeners)(listeners, el);
      delete vNode.listeners;
    }
  }
  children.forEach(destroyDOM);
}
function destroyFragmentNode(vNode) {
  var el = vNode.el,
    children = vNode.children;
  children.forEach(destroyDOM);
  if (el) {
    delete vNode.el;
  }
}

/***/ }),

/***/ "./src/framework/dispatcher.ts":
/*!*************************************!*\
  !*** ./src/framework/dispatcher.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatcher: () => (/* binding */ dispatcher)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _subs = /*#__PURE__*/new WeakMap();
var _afterHandlers = /*#__PURE__*/new WeakMap();
var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);
    _classPrivateFieldInitSpec(this, _subs, new Map());
    _classPrivateFieldInitSpec(this, _afterHandlers, new Set());
  }
  return _createClass(Dispatcher, [{
    key: "subscribe",
    value: function subscribe(commandName, handler) {
      var _this = this;
      if (!_classPrivateFieldGet(_subs, this).has(commandName)) {
        _classPrivateFieldGet(_subs, this).set(commandName, new Set());
      }
      var handlers = _classPrivateFieldGet(_subs, this).get(commandName);
      return function () {
        handlers.delete(handler);
        if (handlers.size == 0) {
          _classPrivateFieldGet(_subs, _this).delete(commandName);
        }
      };
    }
  }, {
    key: "afterEveryCommand",
    value: function afterEveryCommand(handler) {
      var _this2 = this;
      _classPrivateFieldGet(_afterHandlers, this).add(handler);
      return function () {
        _classPrivateFieldGet(_afterHandlers, _this2).delete(handler);
      };
    }
  }, {
    key: "dispatch",
    value: function dispatch(commandName, payload) {
      if (_classPrivateFieldGet(_subs, this).has(commandName)) {
        _classPrivateFieldGet(_subs, this).get(commandName).forEach(function (handler) {
          return handler(payload);
        });
      }
      _classPrivateFieldGet(_afterHandlers, this).forEach(function (handler) {
        return handler();
      });
    }
  }]);
}();
var dispatcher = new Dispatcher();


/***/ }),

/***/ "./src/framework/h.ts":
/*!****************************!*\
  !*** ./src/framework/h.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM_TYPES: () => (/* binding */ DOM_TYPES),
/* harmony export */   extractChildren: () => (/* binding */ extractChildren),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   hFragment: () => (/* binding */ hFragment),
/* harmony export */   hString: () => (/* binding */ hString)
/* harmony export */ });
/* harmony import */ var _utils_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/arrays */ "./src/framework/utils/arrays.ts");


function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

var DOM_TYPES = /*#__PURE__*/function (DOM_TYPES) {
  DOM_TYPES["TEXT"] = "text";
  DOM_TYPES["ELEMENT"] = "element";
  DOM_TYPES["FRAGMENT"] = "fragment";
  DOM_TYPES["COMPONENT"] = "component";
  return DOM_TYPES;
}({});
function h(tag) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  if (typeof tag === 'string') {
    return {
      type: DOM_TYPES.ELEMENT,
      tag: tag,
      props: props,
      children: mapTextNodes((0,_utils_arrays__WEBPACK_IMPORTED_MODULE_0__.withoutNulls)(children))
    };
  } else {
    return {
      type: DOM_TYPES.COMPONENT,
      tag: tag,
      props: props,
      children: mapTextNodes((0,_utils_arrays__WEBPACK_IMPORTED_MODULE_0__.withoutNulls)(children))
    };
  }
  // removed by dead control flow

}
function deepFlattenAndClean(arr) {
  return arr.flat(Infinity).filter(function (item) {
    return item != null;
  });
}
function mapTextNodes(children) {
  return children.reduce(function (acc, child) {
    if (child == null) {
      return acc;
    }
    var vnode = null;
    if (typeof child === 'string' || typeof child === 'number') {
      vnode = {
        type: DOM_TYPES.TEXT,
        value: String(child)
      };
    } else if (Array.isArray(child) && child.every(function (item) {
      return (item === null || item === void 0 ? void 0 : item.type) && Object.values(DOM_TYPES).includes(item.type);
    })) {
      vnode = {
        type: DOM_TYPES.FRAGMENT,
        children: child
      };
    } else if (child.type && Object.values(DOM_TYPES).includes(child.type)) {
      vnode = child;
    } else {
      console.warn('Unexpected child type in mapTextNodes:', _typeof(child), child);
      return acc;
    }
    if (vnode != null) {
      acc.push(vnode);
    }
    return acc;
  }, []);
}
function hString(str) {
  return {
    type: DOM_TYPES.TEXT,
    value: str
  };
}
function hFragment(children) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(deepFlattenAndClean(children))
  };
}
function extractChildren(vNode) {
  if (!hasChildren(vNode)) {
    return [];
  }
  var children = [];
  var _iterator = _createForOfIteratorHelper(vNode.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      if (child.type === DOM_TYPES.FRAGMENT) {
        children.push.apply(children, _toConsumableArray(extractChildren(child)));
      } else {
        children.push(child);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return children;
}
function hasChildren(node) {
  return 'children' in node && node.children !== undefined;
}

/***/ }),

/***/ "./src/framework/mount-dom.ts":
/*!************************************!*\
  !*** ./src/framework/mount-dom.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mountDOM: () => (/* binding */ mountDOM),
/* harmony export */   removeAttribute: () => (/* binding */ removeAttribute),
/* harmony export */   removeStyle: () => (/* binding */ removeStyle),
/* harmony export */   setAttribute: () => (/* binding */ setAttribute),
/* harmony export */   setClass: () => (/* binding */ setClass),
/* harmony export */   setStyle: () => (/* binding */ setStyle)
/* harmony export */ });
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ "./src/framework/h.ts");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler */ "./src/framework/scheduler.ts");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/events */ "./src/framework/utils/events.ts");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/props */ "./src/framework/utils/props.ts");
var _excluded = ["class", "style"];
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




function mountDOM(vNode, parentEl, index) {
  var hostComponent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  switch (vNode.type) {
    case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.TEXT:
      {
        createTextNode(vNode, parentEl, index);
        break;
      }
    case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.ELEMENT:
      {
        createElementNode(vNode, parentEl, index, hostComponent);
        break;
      }
    case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.FRAGMENT:
      {
        createFragmentNode(vNode, parentEl, index, hostComponent);
        break;
      }
    case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.COMPONENT:
      {
        createComponentNode(vNode, parentEl, index, hostComponent);
        (0,_scheduler__WEBPACK_IMPORTED_MODULE_1__.enqueueJob)(function () {
          return vNode.component.onMounted();
        });
        break;
      }
    default:
      {
        throw new Error("Invalid type to mount DOM: ".concat(vNode.type));
      }
  }
}
function createTextNode(vNode, parentEl, index) {
  var value = vNode.value;
  var textNode = document.createTextNode(value);
  vNode.el = textNode;
  insert(textNode, parentEl, index);
}
function createElementNode(vNode, parentEl, hostComponent, index) {
  var tag = vNode.tag,
    children = vNode.children;
  var element = document.createElement(tag);
  addProps(element, vNode, hostComponent);
  vNode.el = element;
  children.forEach(function (child) {
    return mountDOM(child, element, null, hostComponent);
  });
  insert(element, parentEl, index);
}
function createFragmentNode(vNode, parentEl, hostComponent, index) {
  var children = vNode.children;
  vNode.el = parentEl;
  children.forEach(function (child, i) {
    return mountDOM(child, parentEl, index !== null && index !== undefined ? index + i : null, hostComponent);
  });
}
function createComponentNode(vNode, parentEl, hostComponent, index) {
  var Component = vNode.tag;
  var _extractPropsAndEvent = (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.extractPropsAndEvents)(vNode),
    props = _extractPropsAndEvent.props,
    events = _extractPropsAndEvent.events;
  var component = new Component(props, events, hostComponent);
  component.mount(parentEl, index);
  vNode.component = component;
  vNode.el = component.firstElement;
}
function addProps(element, vNode, hostComponent) {
  var _extractPropsAndEvent2 = (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.extractPropsAndEvents)(vNode),
    attrs = _extractPropsAndEvent2.props,
    events = _extractPropsAndEvent2.events;
  vNode.listeners = (0,_utils_events__WEBPACK_IMPORTED_MODULE_2__.addEventListeners)(events, element, hostComponent);
  setAttributes(element, attrs);
}
function setAttributes(element, attrs) {
  var className = attrs.class,
    style = attrs.style,
    otherAttrs = _objectWithoutProperties(attrs, _excluded);
  if (className) {
    setClass(element, className);
  }
  if (style) {
    Object.entries(style).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        prop = _ref2[0],
        value = _ref2[1];
      setStyle(element, prop, value);
    });
  }
  for (var _i = 0, _Object$entries = Object.entries(otherAttrs); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      name = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (value !== false) {
      setAttribute(element, name, value);
    }
  }
}
function setClass(element, className) {
  element.className = '';
  if (typeof className === 'string') {
    element.className = className;
  }
  if (Array.isArray(className)) {
    var _element$classList;
    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(className));
  }
}
function setStyle(element, name, value) {
  if (value == null || value === '') {
    element.style.removeProperty(name);
  } else {
    element.style.setProperty(name, String(value));
  }
}
function removeStyle(element, name) {
  element.style.removeProperty(name);
}
function setAttribute(element, name, value) {
  if (value == null) {
    element.removeAttribute(name);
  } else {
    element.setAttribute(name, value);
  }
}
function removeAttribute(element, name) {
  element.removeAttribute(name);
}
function insert(element, parentEl, index) {
  if (index == null) {
    parentEl.append(element);
    return;
  }
  if (index < 0) {
    throw new Error('index must be positive');
  }
  var children = parentEl.childNodes;
  if (index >= children.length) {
    parentEl.append(element);
  } else {
    parentEl.insertBefore(element, children[index]);
  }
}

/***/ }),

/***/ "./src/framework/nodes-equal.ts":
/*!**************************************!*\
  !*** ./src/framework/nodes-equal.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areNodesEqual: () => (/* binding */ areNodesEqual)
/* harmony export */ });
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ "./src/framework/h.ts");

function areNodesEqual(nodeOne, nodeTwo) {
  if (nodeOne === null || nodeTwo === null) {
    return nodeOne === nodeTwo;
  }
  if (nodeOne === undefined || nodeTwo === undefined) {
    return nodeOne === nodeTwo;
  }
  if (nodeOne.type !== nodeTwo.type) {
    return false;
  }
  var getKey = function getKey(node) {
    if ('props' in node && node.props && 'key' in node.props) {
      return node.props.key || null;
    }
    return null;
  };
  var getTag = function getTag(node) {
    return 'tag' in node ? node.tag : null;
  };
  if (nodeOne.type === _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.ELEMENT && nodeTwo.type === _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.ELEMENT) {
    var tagOne = getTag(nodeOne);
    var tagTwo = getTag(nodeTwo);
    var keyOne = getKey(nodeOne);
    var keyTwo = getKey(nodeTwo);
    return tagOne === tagTwo && keyOne === keyTwo;
  }
  if (nodeOne.type === _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.COMPONENT && nodeTwo.type === _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.COMPONENT) {
    var componentOne = getTag(nodeOne);
    var componentTwo = getTag(nodeTwo);
    var _keyOne = getKey(nodeOne);
    var _keyTwo = getKey(nodeTwo);
    return componentOne === componentTwo && _keyOne === _keyTwo;
  }
  return true;
}

/***/ }),

/***/ "./src/framework/patch-dom.ts":
/*!************************************!*\
  !*** ./src/framework/patch-dom.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patchDOM: () => (/* binding */ patchDOM)
/* harmony export */ });
/* harmony import */ var _destroy_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy-dom */ "./src/framework/destroy-dom.ts");
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h */ "./src/framework/h.ts");
/* harmony import */ var _mount_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mount-dom */ "./src/framework/mount-dom.ts");
/* harmony import */ var _nodes_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodes-equal */ "./src/framework/nodes-equal.ts");
/* harmony import */ var _utils_arrays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/arrays */ "./src/framework/utils/arrays.ts");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/events */ "./src/framework/utils/events.ts");
/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/objects */ "./src/framework/utils/objects.ts");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/props */ "./src/framework/utils/props.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








function patchDOM(oldVNode, newVNode, parentEl) {
  var hostComponent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  if (!(0,_nodes_equal__WEBPACK_IMPORTED_MODULE_3__.areNodesEqual)(oldVNode, newVNode)) {
    var index = null;
    if (oldVNode !== undefined && oldVNode.el) {
      index = findIndexInParent(parentEl, oldVNode.el);
    }
    (0,_destroy_dom__WEBPACK_IMPORTED_MODULE_0__.destroyDOM)(oldVNode);
    (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.mountDOM)(newVNode, parentEl, index, hostComponent);
    return newVNode;
  }
  newVNode.el = oldVNode.el;
  switch (newVNode.type) {
    case _h__WEBPACK_IMPORTED_MODULE_1__.DOM_TYPES.TEXT:
      {
        patchText(oldVNode, newVNode);
        break;
      }
    case _h__WEBPACK_IMPORTED_MODULE_1__.DOM_TYPES.ELEMENT:
      {
        patchElement(oldVNode, newVNode, hostComponent);
        break;
      }
    case _h__WEBPACK_IMPORTED_MODULE_1__.DOM_TYPES.COMPONENT:
      {
        patchComponent(oldVNode, newVNode);
        break;
      }
  }
  patchChildren(oldVNode, newVNode, hostComponent);
  return newVNode;
}
function findIndexInParent(parentEl, el) {
  if (!el) {
    return null;
  }
  var index = Array.from(parentEl.childNodes).indexOf(el);
  if (index < 0) {
    return null;
  }
  return index;
}
function patchText(oldVNode, newVNode) {
  var el = oldVNode.el;
  var oldText = oldVNode.value;
  var newText = newVNode.value;
  if (oldText !== newText && el) {
    el.nodeValue = newText;
  }
}
function patchElement(oldVNode, newVNode, hostComponent) {
  if (!oldVNode || !newVNode) {
    return;
  }
  var el = oldVNode.el;
  if (!el) {
    return;
  }
  var oldProps = oldVNode.props || {};
  var newProps = newVNode.props || {};
  var oldClass = oldProps.class;
  var oldStyle = oldProps.style;
  var oldEvents = oldProps.on;
  var newClass = newProps.class;
  var newStyle = newProps.style;
  var newEvents = newProps.on;
  var oldAttrs = _objectSpread({}, oldProps);
  delete oldAttrs.class;
  delete oldAttrs.style;
  delete oldAttrs.on;
  var newAttrs = _objectSpread({}, newProps);
  delete newAttrs.class;
  delete newAttrs.style;
  delete newAttrs.on;
  var oldListeners = oldVNode.listeners || {};
  patchAttrs(el, oldAttrs, newAttrs);
  patchStyles(el, oldStyle, newStyle);
  patchClasses(el, oldClass, newClass);
  newVNode.listeners = patchEvents(el, oldListeners, oldEvents, newEvents, hostComponent);
}
function patchComponent(oldVNode, newVNode) {
  var component = oldVNode.component;
  var _extractPropsAndEvent = (0,_utils_props__WEBPACK_IMPORTED_MODULE_7__.extractPropsAndEvents)(newVNode),
    props = _extractPropsAndEvent.props;
  component.updateProps(props);
  newVNode.component = component;
  newVNode.el = component.firstElement;
}
function patchAttrs(el, oldAttrs, newAttrs) {
  if (!el) {
    return;
  }
  var _objectDiff = (0,_utils_objects__WEBPACK_IMPORTED_MODULE_6__.objectDiff)(oldAttrs, newAttrs),
    added = _objectDiff.added,
    removed = _objectDiff.removed,
    updated = _objectDiff.updated;
  var _iterator = _createForOfIteratorHelper(removed),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var attr = _step.value;
      (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.removeAttribute)(el, attr);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(added.concat(updated)),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _attr = _step2.value;
      (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.setAttribute)(el, _attr, newAttrs[_attr]);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function patchStyles(el, oldStyle, newStyle) {
  if (!el) {
    return;
  }
  var _objectDiff2 = (0,_utils_objects__WEBPACK_IMPORTED_MODULE_6__.objectDiff)(oldStyle, newStyle),
    added = _objectDiff2.added,
    removed = _objectDiff2.removed,
    updated = _objectDiff2.updated;
  var _iterator3 = _createForOfIteratorHelper(removed),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var style = _step3.value;
      (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.removeStyle)(el, style);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(added.concat(updated)),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _style = _step4.value;
      (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, _style, newStyle[_style]);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}
function patchClasses(el, oldClass, newClass) {
  if (!el) {
    return;
  }
  var oldClasses = toClassList(oldClass);
  var newClasses = toClassList(newClass);
  var _arrayDiff = (0,_utils_arrays__WEBPACK_IMPORTED_MODULE_4__.arrayDiff)(oldClasses, newClasses),
    removed = _arrayDiff.removed,
    added = _arrayDiff.added;
  if (removed.length > 0) {
    var _el$classList;
    (_el$classList = el.classList).remove.apply(_el$classList, _toConsumableArray(removed));
  }
  if (added.length > 0) {
    var _el$classList2;
    (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(added));
  }
  function toClassList() {
    var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    if (!classes) {
      return [];
    }
    return Array.isArray(classes) ? classes.filter(_utils_arrays__WEBPACK_IMPORTED_MODULE_4__.isNotBlankOrEmptyString) : String(classes).split(/(\s+)/).filter(_utils_arrays__WEBPACK_IMPORTED_MODULE_4__.isNotBlankOrEmptyString);
  }
}
function patchEvents(el) {
  var oldListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var oldEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var newEvents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var hostComponent = arguments.length > 4 ? arguments[4] : undefined;
  if (!el) {
    return {};
  }
  var _objectDiff3 = (0,_utils_objects__WEBPACK_IMPORTED_MODULE_6__.objectDiff)(oldEvents, newEvents),
    removed = _objectDiff3.removed,
    added = _objectDiff3.added,
    updated = _objectDiff3.updated;
  var _iterator5 = _createForOfIteratorHelper(removed.concat(updated)),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var eventName = _step5.value;
      el.removeEventListener(eventName, oldListeners[eventName]);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var addedListeners = {};
  var _iterator6 = _createForOfIteratorHelper(added.concat(updated)),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _eventName = _step6.value;
      var listener = (0,_utils_events__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(_eventName, newEvents[_eventName], el, hostComponent);
      addedListeners[_eventName] = listener;
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return _objectSpread(_objectSpread({}, oldListeners), addedListeners);
}
function patchChildren(oldVNode, newVNode, hostComponent) {
  var oldChildren = (0,_h__WEBPACK_IMPORTED_MODULE_1__.extractChildren)(oldVNode);
  var newChildren = (0,_h__WEBPACK_IMPORTED_MODULE_1__.extractChildren)(newVNode);
  var parentEl = oldVNode.el;
  var diffSeq = (0,_utils_arrays__WEBPACK_IMPORTED_MODULE_4__.arrayDiffSequence)(oldChildren, newChildren, _nodes_equal__WEBPACK_IMPORTED_MODULE_3__.areNodesEqual);
  var _iterator7 = _createForOfIteratorHelper(diffSeq),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _hostComponent$offset;
      var operation = _step7.value;
      var _ref = operation,
        op = _ref.op,
        fromIndex = _ref.fromIndex,
        index = _ref.index,
        item = _ref.item;
      var offset = (_hostComponent$offset = hostComponent === null || hostComponent === void 0 ? void 0 : hostComponent.offset) !== null && _hostComponent$offset !== void 0 ? _hostComponent$offset : 0;
      switch (op) {
        case _utils_arrays__WEBPACK_IMPORTED_MODULE_4__.ARRAY_DIFF_OP.ADD:
          {
            (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.mountDOM)(item, parentEl, index + offset, hostComponent);
            break;
          }
        case _utils_arrays__WEBPACK_IMPORTED_MODULE_4__.ARRAY_DIFF_OP.REMOVE:
          {
            (0,_destroy_dom__WEBPACK_IMPORTED_MODULE_0__.destroyDOM)(item);
            break;
          }
        case _utils_arrays__WEBPACK_IMPORTED_MODULE_4__.ARRAY_DIFF_OP.NOOP:
          {
            var oldChild = oldChildren[index];
            var newChild = newChildren[index];
            if (oldChild != null && newChild != null) {
              patchDOM(oldChild, newChild, parentEl, hostComponent);
            }
            break;
          }
        case _utils_arrays__WEBPACK_IMPORTED_MODULE_4__.ARRAY_DIFF_OP.MOVE:
          {
            var _oldChild = oldChildren[fromIndex];
            var _newChild = newChildren[index];
            if (_oldChild != null && _newChild != null) {
              var el = _oldChild.el;
              var elAtTargetIndex = parentEl.childNodes[index + offset];
              if (el) {
                parentEl.insertBefore(el, elAtTargetIndex || null);
              }
              patchDOM(_oldChild, _newChild, parentEl, hostComponent);
            }
            break;
          }
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}

/***/ }),

/***/ "./src/framework/scheduler.ts":
/*!************************************!*\
  !*** ./src/framework/scheduler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enqueueJob: () => (/* binding */ enqueueJob)
/* harmony export */ });
var isScheduler = false;
var jobs = [];
function enqueueJob(job) {
  jobs.push(job);
  schedulerUpdate();
}
function schedulerUpdate() {
  if (isScheduler) {
    return;
  }
  isScheduler = true;
  queueMicrotask(processJobs);
}
function processJobs() {
  while (jobs.length > 0) {
    var job = jobs.shift();
    if (job) {
      var result = job();
      Promise.resolve(result).then(function () {}, function (error) {
        console.error("[scheduler]: ".concat(error));
      });
    }
  }
  isScheduler = false;
}

/***/ }),

/***/ "./src/framework/utils/arrays.ts":
/*!***************************************!*\
  !*** ./src/framework/utils/arrays.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARRAY_DIFF_OP: () => (/* binding */ ARRAY_DIFF_OP),
/* harmony export */   arrayDiff: () => (/* binding */ arrayDiff),
/* harmony export */   arrayDiffSequence: () => (/* binding */ arrayDiffSequence),
/* harmony export */   isNotBlankOrEmptyString: () => (/* binding */ isNotBlankOrEmptyString),
/* harmony export */   isNotEmptyString: () => (/* binding */ isNotEmptyString),
/* harmony export */   withoutNulls: () => (/* binding */ withoutNulls)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function withoutNulls(arr) {
  if (!Array.isArray(arr)) {
    console.warn('withoutNulls: expected array, got', _typeof(arr), arr);
    return [];
  }
  return arr.filter(function (child) {
    return child != null;
  });
}
function arrayDiff(oldArray, newArray) {
  return {
    added: newArray.filter(function (newItem) {
      return !oldArray.includes(newItem);
    }),
    removed: oldArray.filter(function (oldItem) {
      return !newArray.includes(oldItem);
    })
  };
}
var ARRAY_DIFF_OP = {
  ADD: 'add',
  REMOVE: 'remove',
  MOVE: 'move',
  NOOP: 'noop'
};
function arrayDiffSequence(oldArray, newArray) {
  var equalFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a, b) {
    return a === b;
  };
  var sequence = [];
  var array = new ArrayWithOriginalIndices(oldArray, equalFn);
  for (var index = 0; index < newArray.length; index++) {
    if (array.isRemoval(index, newArray)) {
      sequence.push(array.removeItem(index));
      index--;
      continue;
    }
    if (array.isNoop(index, newArray)) {
      sequence.push(array.noopItem(index));
      continue;
    }
    var item = newArray[index];
    if (array.isAdditional(item, index)) {
      sequence.push(array.addItem(item, index));
      continue;
    }
    sequence.push(array.addItem(item, index));
  }
  sequence.push.apply(sequence, _toConsumableArray(array.removeItemsAfter(newArray.length)));
  return sequence;
}
var _array = /*#__PURE__*/new WeakMap();
var _originalIndices = /*#__PURE__*/new WeakMap();
var _equalsFn = /*#__PURE__*/new WeakMap();
var ArrayWithOriginalIndices = /*#__PURE__*/function () {
  function ArrayWithOriginalIndices(array, equalsFn) {
    _classCallCheck(this, ArrayWithOriginalIndices);
    _classPrivateFieldInitSpec(this, _array, void 0);
    _classPrivateFieldInitSpec(this, _originalIndices, void 0);
    _classPrivateFieldInitSpec(this, _equalsFn, void 0);
    _classPrivateFieldSet(_array, this, _toConsumableArray(array));
    _classPrivateFieldSet(_originalIndices, this, array.map(function (_, i) {
      return i;
    }));
    _classPrivateFieldSet(_equalsFn, this, equalsFn);
  }
  return _createClass(ArrayWithOriginalIndices, [{
    key: "length",
    get: function get() {
      return _classPrivateFieldGet(_array, this).length;
    }
  }, {
    key: "isRemoval",
    value: function isRemoval(index, newArray) {
      var _this = this;
      if (index >= this.length) {
        return false;
      }
      var item = _classPrivateFieldGet(_array, this)[index];
      var indexInNewArray = newArray.findIndex(function (newItem) {
        return _classPrivateFieldGet(_equalsFn, _this).call(_this, item, newItem);
      });
      return indexInNewArray === -1;
    }
  }, {
    key: "removeItem",
    value: function removeItem(index) {
      var operation = {
        op: ARRAY_DIFF_OP.REMOVE,
        index: index,
        item: _classPrivateFieldGet(_array, this)[index]
      };
      _classPrivateFieldGet(_array, this).splice(index, 1);
      _classPrivateFieldGet(_originalIndices, this).splice(index, 1);
      return operation;
    }
  }, {
    key: "isNoop",
    value: function isNoop(index, newArray) {
      if (index >= this.length) {
        return false;
      }
      var item = _classPrivateFieldGet(_array, this)[index];
      var newItem = newArray[index];
      return _classPrivateFieldGet(_equalsFn, this).call(this, item, newItem);
    }
  }, {
    key: "originalIndexAt",
    value: function originalIndexAt(index) {
      return _classPrivateFieldGet(_originalIndices, this)[index];
    }
  }, {
    key: "noopItem",
    value: function noopItem(index) {
      return {
        op: ARRAY_DIFF_OP.NOOP,
        originalIndex: this.originalIndexAt(index),
        index: index,
        item: _classPrivateFieldGet(_array, this)[index]
      };
    }
  }, {
    key: "isAdditional",
    value: function isAdditional(item, fromIdx) {
      return this.findIndexFrom(item, fromIdx);
    }
  }, {
    key: "findIndexFrom",
    value: function findIndexFrom(item, fromIdx) {
      for (var i = fromIdx; i < this.length; i++) {
        if (_classPrivateFieldGet(_equalsFn, this).call(this, item, _classPrivateFieldGet(_array, this)[i])) {
          return i;
        }
      }
      return -1;
    }
  }, {
    key: "addItem",
    value: function addItem(item, index) {
      var operation = {
        op: ARRAY_DIFF_OP.ADD,
        index: index,
        item: item
      };
      _classPrivateFieldGet(_array, this).splice(index, 0, item);
      _classPrivateFieldGet(_originalIndices, this).splice(index, 0, -1);
      return operation;
    }
  }, {
    key: "moveItem",
    value: function moveItem(item, index) {
      var oldIndex = this.findIndexFrom(item, index);
      var operation = {
        op: ARRAY_DIFF_OP.MOVE,
        originalIndex: this.originalIndexAt(item),
        from: oldIndex,
        index: index,
        item: _classPrivateFieldGet(_array, this)[oldIndex]
      };
      var _classPrivateFieldGet2 = _classPrivateFieldGet(_array, this).splice(oldIndex, 1),
        _classPrivateFieldGet3 = _slicedToArray(_classPrivateFieldGet2, 1),
        _item = _classPrivateFieldGet3[0];
      _classPrivateFieldGet(_array, this).splice(index, 0, _item);
      var _classPrivateFieldGet4 = _classPrivateFieldGet(_originalIndices, this).splice(oldIndex, 1),
        _classPrivateFieldGet5 = _slicedToArray(_classPrivateFieldGet4, 1),
        originalIndex = _classPrivateFieldGet5[0];
      _classPrivateFieldGet(_originalIndices, this).splice(index, 0, originalIndex);
      return operation;
    }
  }, {
    key: "removeItemsAfter",
    value: function removeItemsAfter(index) {
      var operations = [];
      while (this.length > index) {
        operations.push(this.removeItem(index));
      }
      return operations;
    }
  }]);
}();
function isNotEmptyString(str) {
  return str !== '';
}
function isNotBlankOrEmptyString(str) {
  return isNotEmptyString(str.trim());
}

/***/ }),

/***/ "./src/framework/utils/events.ts":
/*!***************************************!*\
  !*** ./src/framework/utils/events.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListener: () => (/* binding */ addEventListener),
/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners),
/* harmony export */   removeEventListeners: () => (/* binding */ removeEventListeners)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function addEventListeners(events, element) {
  var hostComponent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var listeners = {};
  Object.entries(events).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      eventName = _ref2[0],
      eventHandler = _ref2[1];
    var listener = addEventListener(eventName, eventHandler, element, hostComponent);
    listeners[eventName] = listener;
  });
  return listeners;
}
function addEventListener(eventName, eventHandler, element) {
  var hostComponent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  function boundHandler(event) {
    if (hostComponent) {
      eventHandler.call(hostComponent, event);
    } else {
      eventHandler(event);
    }
  }
  element.addEventListener(eventName, boundHandler);
  return boundHandler;
}
function removeEventListeners() {
  var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var element = arguments.length > 1 ? arguments[1] : undefined;
  Object.entries(listeners).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      eventName = _ref4[0],
      eventHandler = _ref4[1];
    element.removeEventListener(eventName, eventHandler);
  });
}

/***/ }),

/***/ "./src/framework/utils/objects.ts":
/*!****************************************!*\
  !*** ./src/framework/utils/objects.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty),
/* harmony export */   objectDiff: () => (/* binding */ objectDiff)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function objectDiff(oldObj, newObj) {
  if (oldObj == null || newObj == null) {
    return {
      added: [],
      removed: [],
      updated: []
    };
  }
  if (_typeof(oldObj) !== 'object' || _typeof(newObj) !== 'object') {
    return {
      added: [],
      removed: [],
      updated: []
    };
  }
  try {
    var oldKeys = Object.keys(oldObj);
    var newKeys = Object.keys(newObj);
    var diff = {
      added: newKeys.filter(function (key) {
        return !(key in oldObj);
      }),
      removed: oldKeys.filter(function (key) {
        return !(key in newObj);
      }),
      updated: newKeys.filter(function (key) {
        return key in newObj && oldObj[key] !== newObj[key];
      })
    };
    return diff;
  } catch (error) {
    console.warn(error);
    return {
      added: [],
      removed: [],
      updated: []
    };
  }
}
function hasOwnProperty(obj, prop) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),

/***/ "./src/framework/utils/props.ts":
/*!**************************************!*\
  !*** ./src/framework/utils/props.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractPropsAndEvents: () => (/* binding */ extractPropsAndEvents)
/* harmony export */ });
var _excluded = ["on"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function extractPropsAndEvents(vdom) {
  if (!vdom.props) {
    return {
      props: {},
      events: {}
    };
  }
  var _vdom$props = vdom.props,
    _vdom$props$on = _vdom$props.on,
    events = _vdom$props$on === void 0 ? {} : _vdom$props$on,
    props = _objectWithoutProperties(_vdom$props, _excluded);
  delete props.key;
  return {
    props: props,
    events: events
  };
}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CommonCSS_Variables_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CommonCSS/Variables.css */ "./src/components/CommonCSS/Variables.css");
/* harmony import */ var _framework_h__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework/h */ "./src/framework/h.ts");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/router */ "./src/modules/router.ts");




window.h = _framework_h__WEBPACK_IMPORTED_MODULE_1__.h;
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    }).then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function (error) {
      console.error('Service Worker registration failed:', error);
    });
  });
}
if (typeof document !== 'undefined') {
  await _modules_authManager__WEBPACK_IMPORTED_MODULE_2__.authManager.checkAuth();
  (0,_modules_router__WEBPACK_IMPORTED_MODULE_3__.initRouter)();
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/api.ts":
/*!****************************!*\
  !*** ./src/modules/api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API: () => (/* binding */ API)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var API = /*#__PURE__*/function () {
  function API() {
    _classCallCheck(this, API);
  }
  return _createClass(API, null, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(inputRelative, init) {
        var response;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!init) {
                init = {};
              }
              if (!init.headers) {
                init.headers = {
                  'Content-Type': 'application/json'
                };
              }
              init.credentials = 'include';
              _context.n = 1;
              return fetch(API.BASE_URL + inputRelative, init);
            case 1:
              response = _context.v;
              return _context.a(2, response);
          }
        }, _callee);
      }));
      return function (_x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(url, data) {
        var response;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return API.fetch(url, {
                method: 'POST',
                body: data ? JSON.stringify(data) : undefined
              });
            case 1:
              response = _context2.v;
              return _context2.a(2, this.parseResponse(response));
          }
        }, _callee2, this);
      }));
      function post(_x5, _x6) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(url) {
        var response;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return API.fetch(url, {
                method: 'GET'
              });
            case 1:
              response = _context3.v;
              return _context3.a(2, this.parseResponse(response));
          }
        }, _callee3, this);
      }));
      function get(_x7) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "put",
    value: function () {
      var _put = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(url, data) {
        var response;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return this.fetch(url, {
                method: 'PUT',
                body: data ? JSON.stringify(data) : undefined
              });
            case 1:
              response = _context4.v;
              return _context4.a(2, this.parseResponse(response));
          }
        }, _callee4, this);
      }));
      function put(_x8, _x9) {
        return _put.apply(this, arguments);
      }
      return put;
    }()
  }, {
    key: "del",
    value: function () {
      var _del = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(url) {
        var response;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return this.fetch(url, {
                method: 'DELETE'
              });
            case 1:
              response = _context5.v;
              return _context5.a(2, this.parseResponse(response));
          }
        }, _callee5, this);
      }));
      function del(_x0) {
        return _del.apply(this, arguments);
      }
      return del;
    }()
  }, {
    key: "parseResponse",
    value: function () {
      var _parseResponse = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(response) {
        var rawData, _t;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return response.json();
            case 1:
              rawData = _context6.v;
              return _context6.a(2, {
                service: {
                  success: 'OK',
                  error: ''
                },
                body: rawData
              });
            case 2:
              _context6.p = 2;
              _t = _context6.v;
              return _context6.a(2, {
                service: {
                  success: '',
                  error: "HTTP ".concat(response.status, ": failed to parse response")
                },
                body: null
              });
          }
        }, _callee6, null, [[0, 2]]);
      }));
      function parseResponse(_x1) {
        return _parseResponse.apply(this, arguments);
      }
      return parseResponse;
    }()
  }]);
}();
_defineProperty(API, "BASE_URL", 'http://localhost:8080/api/v0');

/***/ }),

/***/ "./src/modules/authManager.ts":
/*!************************************!*\
  !*** ./src/modules/authManager.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthManager: () => (/* binding */ AuthManager),
/* harmony export */   authManager: () => (/* binding */ authManager)
/* harmony export */ });
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _profileManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileManager */ "./src/modules/profileManager.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/modules/store.ts");
/* harmony import */ var _userApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userApi */ "./src/modules/userApi.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var AuthManager = /*#__PURE__*/function () {
  function AuthManager() {
    _classCallCheck(this, AuthManager);
  }
  return _createClass(AuthManager, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(email, password) {
        var response, userData;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.login({
                email: email,
                password: password
              });
            case 1:
              response = _context.v;
              userData = response.body;
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER, userData);
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED, true);
              _context.n = 2;
              return _profileManager__WEBPACK_IMPORTED_MODULE_1__.profileManager.syncGuestData();
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(email, password) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.register({
                email: email,
                password: password
              });
            case 1:
              _context2.n = 2;
              return this.login(email, password);
            case 2:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function register(_x3, _x4) {
        return _register.apply(this, arguments);
      }
      return register;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _t;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.logout();
            case 1:
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t = _context3.v;
              console.warn('Logout API failed', _t);
            case 3:
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER, null);
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED, false);
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }));
      function logout() {
        return _logout.apply(this, arguments);
      }
      return logout;
    }()
  }, {
    key: "checkAuth",
    value: function () {
      var _checkAuth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, userData, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.refresh();
            case 1:
              response = _context4.v;
              userData = response.body;
              if (!(userData && userData.id)) {
                _context4.n = 2;
                break;
              }
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER, userData);
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED, true);
              return _context4.a(2, true);
            case 2:
              this.logout();
              return _context4.a(2, false);
            case 3:
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t2 = _context4.v;
              this.logout();
              return _context4.a(2, false);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 4]]);
      }));
      function checkAuth() {
        return _checkAuth.apply(this, arguments);
      }
      return checkAuth;
    }()
  }, {
    key: "getUser",
    value: function getUser() {
      return _store__WEBPACK_IMPORTED_MODULE_2__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER);
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return _store__WEBPACK_IMPORTED_MODULE_2__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED);
    }
  }]);
}();
var authManager = new AuthManager();

/***/ }),

/***/ "./src/modules/cartManager.ts":
/*!************************************!*\
  !*** ./src/modules/cartManager.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToCart: () => (/* binding */ addToCart),
/* harmony export */   clearCart: () => (/* binding */ clearCart),
/* harmony export */   getCartFromStorage: () => (/* binding */ getCartFromStorage),
/* harmony export */   removeFromCart: () => (/* binding */ removeFromCart),
/* harmony export */   saveCartToStorage: () => (/* binding */ saveCartToStorage),
/* harmony export */   updateQuantity: () => (/* binding */ updateQuantity)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CART_KEY = 'guest_cart';
function getCartFromStorage() {
  try {
    var data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Cart parse error', e);
    return [];
  }
}
function saveCartToStorage(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Cart save error', e);
  }
}
function addToCart(item) {
  var cart = getCartFromStorage();
  var existing = cart.find(function (i) {
    return i.id === item.id;
  });
  var newCart;
  if (existing) {
    newCart = cart.map(function (i) {
      return i.id === item.id ? _objectSpread(_objectSpread({}, i), {}, {
        quantity: i.quantity + item.quantity
      }) : i;
    });
  } else {
    newCart = [].concat(_toConsumableArray(cart), [item]);
  }
  saveCartToStorage(newCart);
}
function updateQuantity(id, quantity) {
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }
  var cart = getCartFromStorage();
  var newCart = cart.map(function (item) {
    return item.id === id ? _objectSpread(_objectSpread({}, item), {}, {
      quantity: quantity
    }) : item;
  });
  saveCartToStorage(newCart);
}
function removeFromCart(id) {
  var cart = getCartFromStorage();
  var newCart = cart.filter(function (item) {
    return item.id !== id;
  });
  saveCartToStorage(newCart);
}
function clearCart() {
  try {
    localStorage.removeItem(CART_KEY);
  } catch (e) {
    console.error('Cart clear error', e);
  }
}

/***/ }),

/***/ "./src/modules/cityManager.ts":
/*!************************************!*\
  !*** ./src/modules/cityManager.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSelectedCity: () => (/* binding */ clearSelectedCity),
/* harmony export */   loadSelectedCity: () => (/* binding */ loadSelectedCity),
/* harmony export */   saveSelectedCity: () => (/* binding */ saveSelectedCity)
/* harmony export */ });
var CITY_KEY = 'selected_city';
function loadSelectedCity() {
  try {
    var data = localStorage.getItem(CITY_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.warn(error);
    return null;
  }
}
function saveSelectedCity(city) {
  try {
    localStorage.setItem(CITY_KEY, JSON.stringify(city));
  } catch (e) {
    console.error('Failed to save city', e);
  }
}
function clearSelectedCity() {
  localStorage.removeItem(CITY_KEY);
}

/***/ }),

/***/ "./src/modules/profileManager.ts":
/*!***************************************!*\
  !*** ./src/modules/profileManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileManager: () => (/* binding */ ProfileManager),
/* harmony export */   profileManager: () => (/* binding */ profileManager)
/* harmony export */ });
/* harmony import */ var _authManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _cartManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartManager */ "./src/modules/cartManager.ts");
/* harmony import */ var _cityManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityManager */ "./src/modules/cityManager.ts");
/* harmony import */ var _storeApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeApi */ "./src/modules/storeApi.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var ProfileManager = /*#__PURE__*/function () {
  function ProfileManager() {
    _classCallCheck(this, ProfileManager);
  }
  return _createClass(ProfileManager, [{
    key: "syncGuestData",
    value: function () {
      var _syncGuestData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (_authManager__WEBPACK_IMPORTED_MODULE_0__.authManager.isAuthenticated()) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _context.n = 2;
              return this.syncCart();
            case 2:
              _context.n = 3;
              return this.syncCity();
            case 3:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function syncGuestData() {
        return _syncGuestData.apply(this, arguments);
      }
      return syncGuestData;
    }()
  }, {
    key: "syncCart",
    value: function () {
      var _syncCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var cartItems, _authManager$getUser, userId, cartUpdate, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              cartItems = (0,_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)();
              if (!(cartItems.length === 0)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.p = 1;
              userId = (_authManager$getUser = _authManager__WEBPACK_IMPORTED_MODULE_0__.authManager.getUser()) === null || _authManager$getUser === void 0 ? void 0 : _authManager$getUser.id;
              if (userId) {
                _context2.n = 2;
                break;
              }
              throw new Error('User ID not found');
            case 2:
              cartUpdate = {
                items: cartItems.map(function (item) {
                  return {
                    id: item.id,
                    quantity: item.quantity
                  };
                })
              };
              _context2.n = 3;
              return _storeApi__WEBPACK_IMPORTED_MODULE_3__.StoreApi.updateCart(userId, cartUpdate);
            case 3:
              (0,_cartManager__WEBPACK_IMPORTED_MODULE_1__.clearCart)();
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t = _context2.v;
              console.error('Cart sync failed', _t);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 4]]);
      }));
      function syncCart() {
        return _syncCart.apply(this, arguments);
      }
      return syncCart;
    }()
  }, {
    key: "syncCity",
    value: function () {
      var _syncCity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var savedCity, _authManager$getUser2, userId, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              savedCity = (0,_cityManager__WEBPACK_IMPORTED_MODULE_2__.loadSelectedCity)();
              if (savedCity) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              _context3.p = 1;
              userId = (_authManager$getUser2 = _authManager__WEBPACK_IMPORTED_MODULE_0__.authManager.getUser()) === null || _authManager$getUser2 === void 0 ? void 0 : _authManager$getUser2.id;
              if (userId) {
                _context3.n = 2;
                break;
              }
              throw new Error('User ID not found');
            case 2:
              _context3.n = 3;
              return _storeApi__WEBPACK_IMPORTED_MODULE_3__.StoreApi.syncCity(userId, savedCity.id);
            case 3:
              (0,_cityManager__WEBPACK_IMPORTED_MODULE_2__.clearSelectedCity)();
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t2 = _context3.v;
              console.error('City sync failed', _t2);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 4]]);
      }));
      function syncCity() {
        return _syncCity.apply(this, arguments);
      }
      return syncCity;
    }()
  }]);
}();
var profileManager = new ProfileManager();

/***/ }),

/***/ "./src/modules/router.ts":
/*!*******************************!*\
  !*** ./src/modules/router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRouter: () => (/* binding */ initRouter),
/* harmony export */   loadPath: () => (/* binding */ loadPath),
/* harmony export */   navigate: () => (/* binding */ navigate)
/* harmony export */ });
/* harmony import */ var _framework_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/app */ "./src/framework/app.ts");
/* harmony import */ var _pages_LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/LoginPage */ "./src/pages/LoginPage.tsx");
/* harmony import */ var _pages_MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/MainPage */ "./src/pages/MainPage.tsx");
/* harmony import */ var _pages_StorePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/StorePage */ "./src/pages/StorePage.tsx");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// src/modules/router.ts




var pathsPages = {
  '/': {
    component: _pages_MainPage__WEBPACK_IMPORTED_MODULE_2__.MainPage,
    title: 'AppleClub - рестораны'
  },
  '/auth': {
    component: _pages_LoginPage__WEBPACK_IMPORTED_MODULE_1__.LoginPage,
    title: 'AppleClub - авторизация'
  },
  '/store/:id': {
    component: _pages_StorePage__WEBPACK_IMPORTED_MODULE_3__.StorePage,
    title: 'AppleClub - магазин'
  }
};
var currentApp = null;
function loadPath(_x) {
  return _loadPath.apply(this, arguments);
}
function _loadPath() {
  _loadPath = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(path) {
    var state,
      replace,
      route,
      nextTitle,
      nextURL,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          state = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          replace = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
          if (!path.startsWith('/')) {
            path = '/' + path;
          }
          route = path;
          if (path.startsWith('/store/') && !(path in pathsPages)) {
            route = '/store/:id';
          }
          if (!(route in pathsPages)) {
            route = '/auth';
          }
          nextTitle = pathsPages[route].title;
          nextURL = location.origin + path;
          if (replace) {
            history.replaceState(state, nextTitle, nextURL);
          } else {
            history.pushState(state, nextTitle, nextURL);
          }
          _context.n = 1;
          return renderPage(path, route);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _loadPath.apply(this, arguments);
}
function renderPage(_x2, _x3) {
  return _renderPage.apply(this, arguments);
}
function _renderPage() {
  _renderPage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(path, route) {
    var page, rootElement;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          page = pathsPages[route];
          rootElement = document.getElementById('root');
          if (rootElement) {
            _context2.n = 1;
            break;
          }
          console.error('Root element #root not found');
          return _context2.a(2);
        case 1:
          if (currentApp && typeof currentApp.unmount === 'function') {
            currentApp.unmount();
          }
          rootElement.innerHTML = '';
          try {
            currentApp = (0,_framework_app__WEBPACK_IMPORTED_MODULE_0__.createApp)(page.component);
            currentApp.mount(rootElement);
            document.title = page.title;
          } catch (error) {
            console.error('Error rendering page:', error);
            rootElement.innerHTML = '<div>Ошибка загрузки страницы</div>';
          }
        case 2:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _renderPage.apply(this, arguments);
}
window.addEventListener('popstate', function () {
  var path = location.pathname;
  var route = path;
  if (path.startsWith('/store/') && !(path in pathsPages)) {
    route = '/store/:id';
  } else if (!(path in pathsPages)) {
    route = '/auth';
  }
  renderPage(path, route);
});
function navigate(path) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  loadPath(path, state);
}
function initRouter() {
  var path = location.pathname;
  var route = path;
  if (path.startsWith('/store/') && !(path in pathsPages)) {
    route = '/store/:id';
  } else if (!(path in pathsPages)) {
    route = '/auth';
  }
  renderPage(path, route);
}

/***/ }),

/***/ "./src/modules/store.ts":
/*!******************************!*\
  !*** ./src/modules/store.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
    _defineProperty(this, "data", {
      'auth.isAuthenticated': false,
      'auth.user': null
    });
    _defineProperty(this, "listeners", {
      'auth.isAuthenticated': [],
      'auth.user': []
    });
  }
  return _createClass(Store, [{
    key: "get",
    value: function get(key) {
      return this.data[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
      this.listeners[key].forEach(function (fn) {
        return fn();
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(key, callback) {
      var _this = this;
      this.listeners[key].push(callback);
      return function () {
        _this.listeners[key] = _this.listeners[key].filter(function (fn) {
          return fn !== callback;
        });
      };
    }
  }]);
}();
var store = new Store();

/***/ }),

/***/ "./src/modules/storeApi.ts":
/*!*********************************!*\
  !*** ./src/modules/storeApi.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreApi: () => (/* binding */ StoreApi)
/* harmony export */ });
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/api */ "./src/modules/api.ts");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var StoreApi = /*#__PURE__*/function () {
  function StoreApi() {
    _classCallCheck(this, StoreApi);
  }
  return _createClass(StoreApi, null, [{
    key: "getStores",
    value: (
    /**
     * Получить список магазинов
     */
    function () {
      var _getStores = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var params,
          body,
          response,
          data,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              body = {
                limit: params.limit || 12,
                last_id: params.lastId || '',
                tag_id: params.tagId || '',
                sorted: params.sorted || '',
                desc: params.desc || false,
                search: params.search || '',
                category: params.category || '',
                cityID: params.cityID || ''
              };
              _context.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.post('/stores', body);
            case 1:
              response = _context.v;
              data = response.body;
              return _context.a(2, data);
          }
        }, _callee);
      }));
      function getStores() {
        return _getStores.apply(this, arguments);
      }
      return getStores;
    }()
    /**
     * Получить магазин по ID
     */
    )
  }, {
    key: "getStoreById",
    value: (function () {
      var _getStoreById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(storeId) {
        var _response$body;
        var response;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get("/stores/".concat(storeId));
            case 1:
              response = _context2.v;
              return _context2.a(2, (_response$body = response.body) !== null && _response$body !== void 0 ? _response$body : null);
          }
        }, _callee2);
      }));
      function getStoreById(_x) {
        return _getStoreById.apply(this, arguments);
      }
      return getStoreById;
    }()
    /**
     * Поиск магазинов
     */
    )
  }, {
    key: "searchStores",
    value: (function () {
      var _searchStores = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(query) {
        var limit,
          _args3 = arguments;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              limit = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 12;
              return _context3.a(2, this.getStores({
                search: query,
                limit: limit
              }));
          }
        }, _callee3, this);
      }));
      function searchStores(_x2) {
        return _searchStores.apply(this, arguments);
      }
      return searchStores;
    }()
    /**
     * Получить магазины по категории
     */
    )
  }, {
    key: "getStoresByCategory",
    value: (function () {
      var _getStoresByCategory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(category) {
        var limit,
          _args4 = arguments;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              limit = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 12;
              return _context4.a(2, this.getStores({
                category: category,
                limit: limit
              }));
          }
        }, _callee4, this);
      }));
      function getStoresByCategory(_x3) {
        return _getStoresByCategory.apply(this, arguments);
      }
      return getStoresByCategory;
    }()
    /**
     * Получить магазины по городу
     */
    )
  }, {
    key: "getStoresByCity",
    value: (function () {
      var _getStoresByCity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(cityId) {
        var limit,
          _args5 = arguments;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              limit = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 12;
              return _context5.a(2, this.getStores({
                cityID: cityId,
                limit: limit
              }));
          }
        }, _callee5, this);
      }));
      function getStoresByCity(_x4) {
        return _getStoresByCity.apply(this, arguments);
      }
      return getStoresByCity;
    }()
    /**
     * Получить магазины по тегу
     */
    )
  }, {
    key: "getStoresByTag",
    value: (function () {
      var _getStoresByTag = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(tagId) {
        var limit,
          _args6 = arguments;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              limit = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 12;
              return _context6.a(2, this.getStores({
                tagId: tagId,
                limit: limit
              }));
          }
        }, _callee6, this);
      }));
      function getStoresByTag(_x5) {
        return _getStoresByTag.apply(this, arguments);
      }
      return getStoresByTag;
    }()
    /**
     * Получить список товаров магазина по его ID
     * @param storeId - UUID магазина
     * @returns Массив товаров магазина
     */
    )
  }, {
    key: "getStoreItems",
    value: (function () {
      var _getStoreItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(storeId) {
        var response;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get("/stores/".concat(storeId, "/items"));
            case 1:
              response = _context7.v;
              return _context7.a(2, Array.isArray(response.body) ? response.body : []);
          }
        }, _callee7);
      }));
      function getStoreItems(_x6) {
        return _getStoreItems.apply(this, arguments);
      }
      return getStoreItems;
    }()
    /**
     * Получить корзину пользователя
     */
    )
  }, {
    key: "getUserCart",
    value: (function () {
      var _getUserCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(userId) {
        var response;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get("/users/".concat(userId, "/cart"));
            case 1:
              response = _context8.v;
              return _context8.a(2, Array.isArray(response.body) ? response.body : []);
          }
        }, _callee8);
      }));
      function getUserCart(_x7) {
        return _getUserCart.apply(this, arguments);
      }
      return getUserCart;
    }()
    /**
     * Обновить корзину
     */
    )
  }, {
    key: "updateCart",
    value: (function () {
      var _updateCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(cartId, cartUpdate) {
        var response;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _context9.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.put("/carts/".concat(cartId), cartUpdate);
            case 1:
              response = _context9.v;
              return _context9.a(2, response.body);
          }
        }, _callee9);
      }));
      function updateCart(_x8, _x9) {
        return _updateCart.apply(this, arguments);
      }
      return updateCart;
    }()
    /**
     * Синхронизировать выбранный город пользователя
     */
    )
  }, {
    key: "syncCity",
    value: (function () {
      var _syncCity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(userId, cityId) {
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              _context0.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.post("/users/".concat(userId, "/city"), {
                city_id: cityId
              });
            case 1:
              return _context0.a(2);
          }
        }, _callee0);
      }));
      function syncCity(_x0, _x1) {
        return _syncCity.apply(this, arguments);
      }
      return syncCity;
    }())
  }, {
    key: "getCities",
    value: function () {
      var _getCities = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var _response$body2;
        var response;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _context1.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get("/stores/cities");
            case 1:
              response = _context1.v;
              return _context1.a(2, (_response$body2 = response.body) !== null && _response$body2 !== void 0 ? _response$body2 : []);
          }
        }, _callee1);
      }));
      function getCities() {
        return _getCities.apply(this, arguments);
      }
      return getCities;
    }()
  }]);
}();

/***/ }),

/***/ "./src/modules/userApi.ts":
/*!********************************!*\
  !*** ./src/modules/userApi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAPI: () => (/* binding */ UserAPI),
/* harmony export */   userApi: () => (/* binding */ userApi)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/modules/api.ts");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/**
 * Класс для взаимодействия с API аутентификации и управления пользователем.
 */
var UserAPI = /*#__PURE__*/function () {
  function UserAPI() {
    _classCallCheck(this, UserAPI);
  }
  return _createClass(UserAPI, [{
    key: "register",
    value: (
    /**
     * Регистрирует нового пользователя.
     * @param {UserData} userdata - Данные пользователя: email и пароль.
     * @returns {Promise<APIresponse>} Ответ API, содержащий статус операции и, при успехе, дополнительные данные в `body`.
     */
    function () {
      var _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(userdata) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, _api__WEBPACK_IMPORTED_MODULE_0__.API.post('/auth/signup', {
                service: {
                  email: userdata.email,
                  password: userdata.password
                }
              }));
          }
        }, _callee);
      }));
      function register(_x) {
        return _register.apply(this, arguments);
      }
      return register;
    }()
    /**
     * Выполняет вход пользователя в систему.
     * @param {UserData} userdata - Данные для входа: email и пароль.
     * @returns {Promise<APIresponse>} Ответ API. При успехе в `body` может содержаться токен или профиль пользователя.
     */
    )
  }, {
    key: "login",
    value: (function () {
      var _login = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(userdata) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, _api__WEBPACK_IMPORTED_MODULE_0__.API.post('/auth/login', {
                email: userdata.email,
                password: userdata.password
              }));
          }
        }, _callee2);
      }));
      function login(_x2) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
    /**
     * Выполняет выход пользователя из системы (уничтожает сессию на сервере).
     * @returns {Promise<APIresponse>} Ответ API, подтверждающий завершение сессии.
     */
    )
  }, {
    key: "logout",
    value: (function () {
      var _logout = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              return _context3.a(2, _api__WEBPACK_IMPORTED_MODULE_0__.API.post('/auth/logout'));
          }
        }, _callee3);
      }));
      function logout() {
        return _logout.apply(this, arguments);
      }
      return logout;
    }()
    /**
     * Обновляет access-токен с использованием refresh-токена.
     * @returns {Promise<APIresponse>} Ответ API с новым токеном (обычно в `body.token`).
     */
    )
  }, {
    key: "refresh",
    value: (function () {
      var _refresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2, _api__WEBPACK_IMPORTED_MODULE_0__.API.post('/auth/refresh'));
          }
        }, _callee4);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }())
  }]);
}();

/**
 * Экземпляр API для работы с пользователем.
 * @type {UserAPI}
 */
var userApi = new UserAPI();

/***/ }),

/***/ "./src/pages/LoginPage.tsx":
/*!*********************************!*\
  !*** ./src/pages/LoginPage.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.tsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/router */ "./src/modules/router.ts");




var LoginPage = (0,_framework_component__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  state: function state() {
    return {
      batchSize: 8
    };
  },
  render: function render() {
    return h("div", {
      class: "login-page"
    }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
      userAuthed: false,
      onLogoClick: function onLogoClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_3__.navigate)('/');
      }
      //onSearch={query => console.log('Search:', query)}
      ,
      onLoginClick: function onLoginClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_3__.navigate)('/auth');
      }
    }), h("div", {
      class: "container",
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        minHeight: '80vh',
        padding: '2rem',
        boxSizing: 'border-box'
      }
    }, h(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_0__.LoginForm, null)));
  }
});

/***/ }),

/***/ "./src/pages/MainPage.tsx":
/*!********************************!*\
  !*** ./src/pages/MainPage.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPage: () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var _components_Batch_Batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Batch/Batch */ "./src/components/Batch/Batch.tsx");
/* harmony import */ var _components_CardsHeader_CardsHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CardsHeader/CardsHeader */ "./src/components/CardsHeader/CardsHeader.tsx");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart/Cart */ "./src/components/Cart/Cart.tsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.tsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/router */ "./src/modules/router.ts");







var MainPage = (0,_framework_component__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({
  state: function state() {
    return {
      batchSize: 8,
      isCartOpen: false
    };
  },
  openCart: function openCart() {
    this.updateState({
      isCartOpen: true
    });
  },
  closeCart: function closeCart() {
    this.updateState({
      isCartOpen: false
    });
  },
  render: function render() {
    var _this = this;
    var props = this.props;
    return h("div", {
      class: "main-page"
    }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
      userAuthed: false,
      onLogoClick: function onLogoClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_6__.navigate)('/');
      }
      //onSearch={query => console.log('Search:', query)}
      ,
      onLoginClick: function onLoginClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_6__.navigate)('/auth');
      },
      onCartClick: function onCartClick() {
        return _this.openCart();
      }
    }), h(_components_CardsHeader_CardsHeader__WEBPACK_IMPORTED_MODULE_1__.CardsHeader, null), h("div", {
      class: "container",
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '90%',
        minHeight: '80vh',
        padding: '2rem',
        boxSizing: 'border-box',
        margin: '0 auto'
      }
    }, h(_components_Batch_Batch__WEBPACK_IMPORTED_MODULE_0__.Batch, {
      batchSize: this.state.batchSize,
      onCardClick: props.onCardClick
    })), h(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__.Footer, null), this.state.isCartOpen ? h(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_2__.Cart, {
      onClose: function onClose() {
        return _this.closeCart();
      }
    }) : '');
  }
});

/***/ }),

/***/ "./src/pages/StorePage.tsx":
/*!*********************************!*\
  !*** ./src/pages/StorePage.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorePage: () => (/* binding */ StorePage)
/* harmony export */ });
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Cart/Cart */ "./src/components/Cart/Cart.tsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _components_ProductsBatch_ProductsBatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsBatch/ProductsBatch */ "./src/components/ProductsBatch/ProductsBatch.tsx");
/* harmony import */ var _components_StoreInfo_StoreInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StoreInfo/StoreInfo */ "./src/components/StoreInfo/StoreInfo.tsx");
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../framework/component */ "./src/framework/component.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _modules_cartManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/cartManager */ "./src/modules/cartManager.ts");
/* harmony import */ var _modules_storeApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/storeApi */ "./src/modules/storeApi.ts");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var StorePage = (0,_framework_component__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  state: function state() {
    return {
      store: null,
      products: [],
      isCartOpen: false
    };
  },
  openCart: function openCart() {
    this.updateState({
      isCartOpen: true
    });
  },
  closeCart: function closeCart() {
    this.updateState({
      isCartOpen: false
    });
  },
  onMounted: function onMounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadStore();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  loadStore: function loadStore() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var pathParts, storeId, store, products, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            pathParts = window.location.pathname.split('/');
            storeId = pathParts[pathParts.length - 1];
            if (!(!storeId || storeId === 'undefined')) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return _modules_storeApi__WEBPACK_IMPORTED_MODULE_7__.StoreApi.getStoreById(storeId);
          case 2:
            store = _context2.v;
            _context2.n = 3;
            return _modules_storeApi__WEBPACK_IMPORTED_MODULE_7__.StoreApi.getStoreItems(storeId);
          case 3:
            products = _context2.v;
            if (store) {
              _this2.updateState({
                store: store,
                products: products
              });
            }
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            console.error('Error loading store:', _t);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }))();
  },
  render: function render() {
    var _this3 = this;
    var _this$state = this.state,
      store = _this$state.store,
      products = _this$state.products,
      isCartOpen = _this$state.isCartOpen;
    if (!store) {
      return h("div", {
        class: "store-page"
      }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
        userAuthed: false,
        onLogoClick: function onLogoClick() {
          Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../modules/router */ "./src/modules/router.ts")).then(function (router) {
            return router.navigate('/');
          });
        }
        //Search={query => console.log('Search:', query)}
        ,
        onLoginClick: function onLoginClick() {
          Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../modules/router */ "./src/modules/router.ts")).then(function (router) {
            return router.navigate('/auth');
          });
        },
        onCartClick: function onCartClick() {
          return _this3.openCart();
        }
      }), h("div", {
        style: {
          width: '90%',
          minHeight: '80vh',
          padding: '2rem',
          boxSizing: 'border-box',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, h("button", {
        style: {
          marginTop: '16px'
        },
        onClick: function onClick() {
          return window.history.back();
        }
      }, "\u041D\u0430\u0437\u0430\u0434")), isCartOpen ? h(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_0__.Cart, {
        onClose: function onClose() {
          return _this3.closeCart();
        }
      }) : null);
    }
    return h("div", {
      class: "store-page"
    }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
      userAuthed: false,
      onLogoClick: function onLogoClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_5__.navigate)('/');
      }
      //onSearch={query => console.log('Search:', query)}
      ,
      onLoginClick: function onLoginClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_5__.navigate)('/auth');
      },
      onCartClick: function onCartClick() {
        return _this3.openCart();
      }
    }), h("div", {
      style: {
        width: '90%',
        minHeight: '80vh',
        padding: '2rem',
        boxSizing: 'border-box',
        margin: '0 auto'
      }
    }, h(_components_StoreInfo_StoreInfo__WEBPACK_IMPORTED_MODULE_3__.StoreInfo, {
      store: store
    }), h("div", {
      style: {
        marginTop: '24px'
      }
    }, h(_components_ProductsBatch_ProductsBatch__WEBPACK_IMPORTED_MODULE_2__.ProductsBatch, {
      products: products,
      onAddToCart: function onAddToCart(productId) {
        var product = products.find(function (p) {
          return p.id === productId;
        });
        if (product) {
          (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_6__.addToCart)({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            card_img: product.card_img
          });
        }
      }
    }))), isCartOpen ? h(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_0__.Cart, {
      onClose: function onClose() {
        return _this3.closeCart();
      }
    }) : null);
  }
});

/***/ }),

/***/ "./src/utils/auth.ts":
/*!***************************!*\
  !*** ./src/utils/auth.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_ACCESS_TOKEN: () => (/* binding */ AUTH_ACCESS_TOKEN),
/* harmony export */   AUTH_IS_AUTHENTICATED: () => (/* binding */ AUTH_IS_AUTHENTICATED),
/* harmony export */   AUTH_REFRESH_TOKEN: () => (/* binding */ AUTH_REFRESH_TOKEN),
/* harmony export */   AUTH_USER: () => (/* binding */ AUTH_USER),
/* harmony export */   validateConfirmPassword: () => (/* binding */ validateConfirmPassword),
/* harmony export */   validateEmail: () => (/* binding */ validateEmail),
/* harmony export */   validatePassword: () => (/* binding */ validatePassword)
/* harmony export */ });
var AUTH_IS_AUTHENTICATED = 'auth.isAuthenticated';
var AUTH_ACCESS_TOKEN = 'auth.accessToken';
var AUTH_REFRESH_TOKEN = 'auth.refreshToken';
var AUTH_USER = 'auth.user';
function validateEmail(email) {
  if (!email) {
    return 'Email обязателен';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Некорректный email';
  }
  return '';
}
function validatePassword(password) {
  if (!password) {
    return 'Пароль обязателен';
  }
  if (password.length < 8) {
    return 'Пароль должен быть не короче 8 символов';
  }
  var uppercaseCount = (password.match(/[A-Z]/g) || []).length;
  var lowercaseCount = (password.match(/[a-z]/g) || []).length;
  var digitCount = (password.match(/[0-9]/g) || []).length;
  var specialCharCount = (password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g) || []).length;
  if (uppercaseCount < 2) {
    return 'Пароль должен содержать минимум 2 заглавные буквы';
  }
  if (lowercaseCount < 2) {
    return 'Пароль должен содержать минимум 2 строчные буквы';
  }
  if (digitCount < 2) {
    return 'Пароль должен содержать минимум 2 цифры';
  }
  if (specialCharCount < 1) {
    return 'Пароль должен содержать минимум 1 спецсимвол (!@#$%^&* и т.д.)';
  }
  return '';
}
function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return 'Подтверждение пароля обязательно';
  }
  if (password !== confirmPassword) {
    return 'Пароли не совпадают';
  }
  return '';
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map