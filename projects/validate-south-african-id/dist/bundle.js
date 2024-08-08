/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dom-scripts.js":
/*!************************!*\
  !*** ./dom-scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { isIdNumberValid } = __webpack_require__(/*! ./src/validate_sa_id */ \"./src/validate_sa_id.js\");\r\n\r\nconst inputId = document.getElementById(\"input-id\");\r\nconst checkIdBtn = document.getElementById(\"check-btn\");\r\nconst clearBtn = document.getElementById(\"clear-btn\");\r\nconst resultsElement = document.getElementById(\"results\");\r\n\r\nfunction checkIdNumber() {\r\n  let idString = inputId.value.toString();\r\n\r\n  if (isIdNumberValid(idString) === true) {\r\n    resultsElement.innerHTML += `ID number ${inputId.value} is valid`;\r\n    getDOB(idString);\r\n    detailedInfo(idString);\r\n  } else if (isIdNumberValid(idString) === false) {\r\n    resultsElement.innerHTML += `ID number ${inputId.value} is invalid`;\r\n  }\r\n  checkIdBtn.disabled = true;\r\n  inputId.disabled = true;\r\n}\r\n//*\r\n\r\nfunction detailedInfo(_idString) {\r\n  let genderStr = _idString.substring(6, 10);\r\n  let citizenshipStr = _idString.substring(10, 11);\r\n  let genderNum = parseInt(genderStr);\r\n\r\n  if (genderNum >= 0 && genderNum < 5000) {\r\n    resultsElement.innerHTML += `<br>You are female. `;\r\n  } else if (genderNum >= 5000 && genderNum <= 9999) {\r\n    resultsElement.innerHTML += `<br>You are male. `;\r\n  }\r\n\r\n  if (citizenshipStr === \"0\") {\r\n    resultsElement.innerHTML += `<br>You are a South African citizen.`;\r\n  } else {\r\n    resultsElement.innerHTML += `<br>You are a permanent resident.`;\r\n  }\r\n}\r\n\r\nfunction getDOB(inputDobStr) {\r\n  let dobStr = inputDobStr.substring(0, 6);\r\n\r\n  let year = dobStr.substring(0, 2);\r\n  let month = dobStr.substring(2, 4);\r\n  let day = dobStr.substring(4, 6);\r\n\r\n  let currentYear = new Date().getFullYear();\r\n  let centuryPrefix = currentYear.toString().substring(0, 2);\r\n\r\n  // Determine if the year belongs to the 1900s or 2000s\r\n  let fullYear = parseInt(centuryPrefix + year);\r\n  if (fullYear > currentYear) {\r\n    fullYear -= 100;\r\n  }\r\n\r\n  let formattedDOB = `${day}-${month}-${fullYear}`;\r\n  resultsElement.innerHTML += `<br>Date of Birth: ${formattedDOB}.`;\r\n}\r\n\r\nfunction resetInput(){\r\n  checkIdBtn.disabled = false;\r\n  inputId.disabled = false;\r\n  resultsElement.innerHTML = \"\";\r\n  inputId.value = \"\";\r\n}\r\ncheckIdBtn.addEventListener(\"click\", checkIdNumber);\r\nclearBtn.addEventListener(\"click\", resetInput)\n\n//# sourceURL=webpack://package/./dom-scripts.js?");

/***/ }),

/***/ "./src/validate_sa_id.js":
/*!*******************************!*\
  !*** ./src/validate_sa_id.js ***!
  \*******************************/
/***/ ((module) => {

eval("function isIdNumberValid(idNumber) {\r\n  if (checkDataType(idNumber) !== \"string\") {\r\n    return false;\r\n  } else {\r\n    const numRegex = /^[0-9]+$/;\r\n    const citizenshipNum = parseInt(idNumber.substring(10, 11));\r\n    return (\r\n      idNumber.length === 13 &&\r\n      numRegex.test(idNumber) &&\r\n      checkDateOfBirth(idNumber) &&\r\n      (citizenshipNum === 0 || citizenshipNum === 1) &&\r\n      checkSumDigit(idNumber)\r\n    );\r\n  }\r\n}\r\n\r\nfunction checkDataType(dataType) {\r\n  return typeof dataType;\r\n}\r\n\r\nfunction checkDateOfBirth(idNumber) {\r\n  const year = idNumber.substring(0, 2);\r\n  const month = idNumber.substring(2, 4);\r\n  const day = idNumber.substring(4, 6);\r\n  if (\r\n    day === 0o0 ||\r\n    day > 31 ||\r\n    month > 12 ||\r\n    month < 1 ||\r\n    (month === 2 && day > 29) ||\r\n    (year % 4 !== 0 && month === 2 && day > 28) ||\r\n    (month === (4 || 0 || 0 || 0) && day > 30)\r\n  ) {\r\n    return false;\r\n  }\r\n  return true;\r\n}\r\n\r\nfunction checkSumDigit(idNumber) {\r\n  let digits = idNumber.split(\"\").map((i) => Number(i));\r\n  let sum = 0;\r\n\r\n  if (digits.length % 2 === 0) return false;\r\n\r\n  digits = digits\r\n    .map((digit, index) => (index % 2 === 1 ? digit * 2 : digit))\r\n    .map((digit) => (digit > 9 ? digit - 9 : digit));\r\n  sum = digits.reduce((total, curr) => (total += curr), 0);\r\n  return sum % 10 === 0;\r\n}\r\n\r\nmodule.exports = {\r\n  isIdNumberValid,\r\n};\n\n//# sourceURL=webpack://package/./src/validate_sa_id.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dom-scripts.js");
/******/ 	
/******/ })()
;