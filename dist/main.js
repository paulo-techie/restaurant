/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\r\n  const menuItemTitle = document.createElement('h3');\r\n  const menuItemBody = document.createElement('p');\r\n  const tabcontent = document.getElementById('aboutus');\r\n  menuItemTitle.textContent = 'About Us';\r\n  menuItemBody.textContent = 'We are a small start-up restaurant '\r\n    + 'offering convenient and affordable meals to our clients';\r\n  tabcontent.appendChild(menuItemTitle);\r\n  tabcontent.appendChild(menuItemBody);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n  const menuItemTitle = document.createElement('h3');\r\n  const menuItemBody = document.createElement('p');\r\n  const tabcontent = document.getElementById('contactus');\r\n  menuItemTitle.textContent = 'Contact Us';\r\n  menuItemBody.textContent = 'We are located at Plainsview Plaza off Mombasa Road in Nairobi.';\r\n  tabcontent.appendChild(menuItemTitle);\r\n  tabcontent.appendChild(menuItemBody);\r\n  tabcontent.style.display = 'none';\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loaders */ \"./src/loaders.js\");\n\r\n\r\nfunction loadTab(evt, tabName) {\r\n  // Get all elements with class=\"tabcontent\" and hide them\r\n  const tabcontent = document.getElementsByClassName('tabcontent');\r\n  for (let i = 0; i < tabcontent.length; i += 1) {\r\n    tabcontent[i].style.display = 'none';\r\n  }\r\n\r\n  // Get all elements with class=\"tablinks\" and remove the class \"active\"\r\n  const tablinks = document.getElementsByClassName('tablinks');\r\n  for (let i = 0; i < tablinks.length; i += 1) {\r\n    tablinks[i].className = tablinks[i].className.replace(' active', '');\r\n  }\r\n\r\n  // Show the current tab, and add an \"active\" class to the button that opened the tab\r\n  document.getElementById(tabName).style.display = 'block';\r\n  evt.currentTarget.className += ' active';\r\n}\r\n\r\n(0,_loaders__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\nconst aboutBtn = document.getElementById('aboutBtn');\r\nconst menuBtn = document.getElementById('menuBtn');\r\nconst contactBtn = document.getElementById('contactBtn');\r\n\r\naboutBtn.addEventListener('click', (event) => loadTab(event, 'aboutus') );\r\nmenuBtn.addEventListener('click', (event) => loadTab(event, 'menu') );\r\ncontactBtn.addEventListener('click', (event) => loadTab(event, 'contactus') );\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/loaders.js":
/*!************************!*\
  !*** ./src/loaders.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction loadPage() {\r\n  const content = document.getElementById('content');\r\n  const h1 = document.createElement('h1');\r\n  const h2 = document.createElement('h2');\r\n\r\n  h1.textContent = 'Furaha Restaurant';\r\n  h2.textContent = '\"Best place to eat in town\"';\r\n  content.appendChild(h1);\r\n  content.appendChild(h2);\r\n\r\n  const tabcontainer = document.createElement('div');\r\n  tabcontainer.classList.add('tab');\r\n\r\n  content.appendChild(tabcontainer);\r\n\r\n  const aboutbutton = document.createElement('button');\r\n  aboutbutton.innerText = 'About';\r\n  aboutbutton.classList.add('tablinks');\r\n  aboutbutton.id = 'aboutBtn';\r\n\r\n  const menubutton = document.createElement('button');\r\n  menubutton.innerText = 'Menu';\r\n  menubutton.classList.add('tablinks');\r\n  menubutton.id = 'menuBtn';\r\n\r\n  const contactbutton = document.createElement('button');\r\n  contactbutton.innerText = ('Contact');\r\n  contactbutton.classList.add('tablinks');\r\n  contactbutton.id = 'contactBtn';\r\n\r\n  tabcontainer.appendChild(aboutbutton);\r\n  tabcontainer.appendChild(menubutton);\r\n  tabcontainer.appendChild(contactbutton);\r\n\r\n  const aboutTab = document.createElement('div');\r\n  aboutTab.classList.add('tabcontent');\r\n  aboutTab.id = 'aboutus';\r\n  const menuTab = document.createElement('div');\r\n  menuTab.classList.add('tabcontent');\r\n  menuTab.id = 'menu';\r\n  const contactTab = document.createElement('div');\r\n  contactTab.classList.add('tabcontent');\r\n  contactTab.id = 'contactus';\r\n\r\n  content.appendChild(aboutTab);\r\n  content.appendChild(menuTab);\r\n  content.appendChild(contactTab);\r\n\r\n  (0,_about__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/loaders.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const menuItemTitle = document.createElement('h3');\r\n  const menuItemBody = document.createElement('p');\r\n  const tabcontent = document.getElementById('menu');\r\n  menuItemTitle.textContent = 'Menu';\r\n  menuItemBody.textContent = 'BREAKFAST\\r\\nToast, bacon, sausages, eggs, black pudding,'\r\n    + 'baked beans, tomatoes, mushrooms and a mug of coffee or tea.\\r\\n\\r\\n'\r\n    + 'LUNCH\\r\\nMouthwatering chunks of Certified Angus Beef brisket, juicy pork or chunks of delicious '\r\n    + 'polish sausage served with coleslaw, French fries, Texas toast and pickles.\\n\\r\\n'\r\n    + 'DINNER\\r\\nGrilled Chicken. Served with leftover brown rice seasoned with salt, pepper, '\r\n    + 'and cilantro. Topped with sliced avocado.';\r\n  tabcontent.appendChild(menuItemTitle);\r\n  tabcontent.appendChild(menuItemBody);\r\n  tabcontent.style.display = 'none';\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;