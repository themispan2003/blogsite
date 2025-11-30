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
exports.id = "pages/api/posts-with-image";
exports.ids = ["pages/api/posts-with-image"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"\";\nif (!MONGODB_URI) {\n    throw new Error(\"❌ Δεν έχεις ορίσει το MONGODB_URI στο .env.local!\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLElBQUlGLGVBQWU7QUFFL0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFBTTtBQUNsQjtBQUVBLElBQUlDLFNBQVMsT0FBZ0JMO0FBRTdCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTLE9BQWdCTCxXQUFXO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ2xFO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxNQUFNLE9BQU9GLE9BQU9FO0lBRS9CLElBQUksQ0FBQ0YsT0FBT0csU0FBUztRQUNuQkgsT0FBT0csVUFBVVIsdURBQWdCVSxDQUFDVCxhQUFhO1lBQzdDVSxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBTixPQUFPRSxPQUFPLE1BQU1GLE9BQU9HO0lBQzNCLE9BQU9ILE9BQU9FO0FBQ2hCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zY2llbmNlLWJsb2cvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgXCJcIjtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCLinYwgzpTOtc69IM6tz4fOtc65z4Igzr/Pgc6vz4POtc65IM+Ezr8gTU9OR09EQl9VUkkgz4PPhM6/IC5lbnYubG9jYWwhXCIpO1xufVxuXG5sZXQgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSAoZ2xvYmFsIGFzIGFueSkubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJjb25uZWN0IiwiYnVmZmVyQ29tbWFuZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./models/Post.ts":
/*!************************!*\
  !*** ./models/Post.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PostSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    author: {\n        type: String,\n        required: true\n    },\n    // 🔥 αλλάζουμε το default ώστε να δείχνει στο /uploads/\n    thumbnail: {\n        type: String,\n        default: \"/uploads/default.jpg\"\n    }\n}, {\n    timestamps: true\n});\nconst Post = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Post\", PostSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUG9zdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUU7QUFXckUsTUFBTUcsYUFBYSxJQUFJRiw0Q0FBTUEsQ0FDM0I7SUFDRUcsT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENDLFNBQVM7UUFBRUgsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3hDRSxRQUFRO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN2Qyx3REFBd0Q7SUFDeERHLFdBQVc7UUFBRUwsTUFBTUM7UUFBUUssU0FBUztJQUF1QjtBQUM3RCxHQUNBO0lBQUVDLFlBQVk7QUFBSztBQUdyQixNQUFNQyxPQUNKWCw0Q0FBTUEsQ0FBQ1csUUFBUWIscURBQWNjLENBQVEsUUFBUVg7QUFFL0MsaUVBQWVVLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zY2llbmNlLWJsb2cvLi9tb2RlbHMvUG9zdC50cz81Y2YzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50LCBNb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmludGVyZmFjZSBJUG9zdCBleHRlbmRzIERvY3VtZW50IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5jb25zdCBQb3N0U2NoZW1hID0gbmV3IFNjaGVtYTxJUG9zdD4oXG4gIHtcbiAgICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgY29udGVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgYXV0aG9yOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAvLyDwn5SlIM6xzrvOu86szrbOv8+FzrzOtSDPhM6/IGRlZmF1bHQgz47Pg8+EzrUgzr3OsSDOtM61zq/Ph869zrXOuSDPg8+Ezr8gL3VwbG9hZHMvXG4gICAgdGh1bWJuYWlsOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCIvdXBsb2Fkcy9kZWZhdWx0LmpwZ1wiIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG5jb25zdCBQb3N0OiBNb2RlbDxJUG9zdD4gPVxuICBtb2RlbHMuUG9zdCB8fCBtb25nb29zZS5tb2RlbDxJUG9zdD4oXCJQb3N0XCIsIFBvc3RTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwibW9kZWxzIiwiUG9zdFNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiY29udGVudCIsImF1dGhvciIsInRodW1ibmFpbCIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiUG9zdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Post.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\nconsole.log(process.env.MONGODB_URI);\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async session ({ session, token }) {\n            session.user.id = token.sub;\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQzVCO0FBQzVCRSxvREFBYUM7QUFFYkMsUUFBUUMsSUFBSUMsUUFBUUMsSUFBSUM7QUFFakIsTUFBTUMsY0FBYztJQUN6QkMsV0FBVztRQUNUVCxpRUFBY0EsQ0FBQztZQUNiVSxVQUFVTCxRQUFRQyxJQUFJSztZQUN0QkMsY0FBY1AsUUFBUUMsSUFBSU87UUFDNUI7S0FDRDtJQUNEQyxRQUFRVCxRQUFRQyxJQUFJUztJQUNwQkMsV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDOUJELFFBQVFFLEtBQUtDLEtBQUtGLE1BQU1HO1lBQ3hCLE9BQU9KO1FBQ1Q7SUFDRjtBQUNGLEVBQUU7QUFFRixpRUFBZWxCLGdEQUFRQSxDQUFDUyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktc2NpZW5jZS1ibG9nLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmRvdGVudi5jb25maWcoKTtcblxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWI7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsImRvdGVudiIsImNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImlkIiwic3ViIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/posts-with-image.ts":
/*!***************************************!*\
  !*** ./pages/api/posts-with-image.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/Post */ \"(api)/./models/Post.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_3__]);\n([formidable__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/api/posts-with-image.ts\n\n\n\n\n\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_6__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_7__.authOptions);\n    if (!session) return res.status(401).json({\n        message: \"Unauthorized\"\n    });\n    if (req.method !== \"POST\") return res.status(405).end();\n    const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm({\n        multiples: false,\n        keepExtensions: true\n    });\n    const uploadDir = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"public/uploads\");\n    if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(uploadDir)) {\n        fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(uploadDir, {\n            recursive: true\n        });\n    }\n    form.uploadDir = uploadDir;\n    form.parse(req, async (err, fields, files)=>{\n        if (err) return res.status(500).json({\n            message: \"Upload error\"\n        });\n        // ✅ Μορφοποίηση πεδίων\n        const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;\n        const content = Array.isArray(fields.content) ? fields.content[0] : fields.content;\n        let thumbnail = \"/images/default.jpg\";\n        // ✅ Έλεγχος και μετακίνηση εικόνας\n        const file = Array.isArray(files.image) ? files.image[0] : files.image;\n        if (file && file.filepath) {\n            const ext = path__WEBPACK_IMPORTED_MODULE_2___default().extname(file.originalFilename || \".jpg\");\n            const filename = `${(0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()}${ext}`;\n            const destPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(uploadDir, filename);\n            fs__WEBPACK_IMPORTED_MODULE_1___default().renameSync(file.filepath, destPath);\n            thumbnail = `/uploads/${filename}`;\n        }\n        try {\n            await (0,_lib_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n            const newPost = new _models_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n                title,\n                content,\n                author: session.user.name,\n                thumbnail\n            });\n            await newPost.save();\n            return res.status(200).json({\n                message: \"Το άρθρο αποθηκεύτηκε!\"\n            });\n        } catch (error) {\n            console.error(error);\n            return res.status(500).json({\n                message: \"Database error\"\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMtd2l0aC1pbWFnZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQWdDO0FBRVU7QUFDdEI7QUFDSTtBQUNZO0FBQ0g7QUFDQTtBQUNZO0FBQ007QUFFNUMsTUFBTVMsU0FBUztJQUNwQkMsS0FBSztRQUFFQyxZQUFZO0lBQU07QUFDM0IsRUFBRTtBQUVhLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxNQUFNQyxVQUFVLE1BQU1SLDJEQUFnQkEsQ0FBQ00sS0FBS0MsS0FBS04sd0RBQVdBO0lBQzVELElBQUksQ0FBQ08sU0FBUyxPQUFPRCxJQUFJRSxPQUFPLEtBQUtDLEtBQUs7UUFBRUMsU0FBUztJQUFlO0lBRXBFLElBQUlMLElBQUlNLFdBQVcsUUFBUSxPQUFPTCxJQUFJRSxPQUFPLEtBQUtJO0lBRWxELE1BQU1DLE9BQU8sSUFBSXJCLG9EQUFZQSxDQUFDO1FBQUVzQixXQUFXO1FBQU9DLGdCQUFnQjtJQUFLO0lBQ3ZFLE1BQU1DLFlBQVl0QixnREFBU3VCLENBQUNDLFFBQVFDLE9BQU87SUFFM0MsSUFBSSxDQUFDMUIsb0RBQWEyQixDQUFDSixZQUFZO1FBQzdCdkIsbURBQVk0QixDQUFDTCxXQUFXO1lBQUVNLFdBQVc7UUFBSztJQUM1QztJQUVBVCxLQUFLRyxZQUFZQTtJQUVqQkgsS0FBS1UsTUFBTWxCLEtBQUssT0FBT21CLEtBQUtDLFFBQVFDO1FBQ2xDLElBQUlGLEtBQUssT0FBT2xCLElBQUlFLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxTQUFTO1FBQWU7UUFFL0QsdUJBQXVCO1FBQ3ZCLE1BQU1pQixRQUFRQyxNQUFNQyxRQUFRSixPQUFPRSxTQUFTRixPQUFPRSxLQUFLLENBQUMsRUFBRSxHQUFHRixPQUFPRTtRQUNyRSxNQUFNRyxVQUFVRixNQUFNQyxRQUFRSixPQUFPSyxXQUFXTCxPQUFPSyxPQUFPLENBQUMsRUFBRSxHQUFHTCxPQUFPSztRQUUzRSxJQUFJQyxZQUFZO1FBRWhCLG1DQUFtQztRQUNuQyxNQUFNQyxPQUFPSixNQUFNQyxRQUFRSCxNQUFNTyxTQUFTUCxNQUFNTyxLQUFLLENBQUMsRUFBRSxHQUFHUCxNQUFNTztRQUNqRSxJQUFJRCxRQUFRQSxLQUFLRSxVQUFVO1lBQ3pCLE1BQU1DLE1BQU16QyxtREFBWTBDLENBQUNKLEtBQUtLLG9CQUFvQjtZQUNsRCxNQUFNQyxXQUFXLENBQUMsRUFBRTFDLHdDQUFNQSxHQUFHLEVBQUV1QyxJQUFJLENBQUM7WUFDcEMsTUFBTUksV0FBVzdDLGdEQUFTdUIsQ0FBQ0QsV0FBV3NCO1lBQ3RDN0Msb0RBQWErQyxDQUFDUixLQUFLRSxVQUFVSztZQUM3QlIsWUFBWSxDQUFDLFNBQVMsRUFBRU8sU0FBUyxDQUFDO1FBQ3BDO1FBRUEsSUFBSTtZQUNGLE1BQU16QyxtREFBU0E7WUFFZixNQUFNNEMsVUFBVSxJQUFJM0Msb0RBQUlBLENBQUM7Z0JBQ3ZCNkI7Z0JBQ0FHO2dCQUNBWSxRQUFRbkMsUUFBUW9DLEtBQUtDO2dCQUNyQmI7WUFDRjtZQUVBLE1BQU1VLFFBQVFJO1lBQ2QsT0FBT3ZDLElBQUlFLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsU0FBUztZQUF5QjtRQUNsRSxFQUFFLE9BQU9vQyxPQUFPO1lBQ2RDLFFBQVFELE1BQU1BO1lBQ2QsT0FBT3hDLElBQUlFLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsU0FBUztZQUFpQjtRQUMxRDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zY2llbmNlLWJsb2cvLi9wYWdlcy9hcGkvcG9zdHMtd2l0aC1pbWFnZS50cz8xOGUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9wb3N0cy13aXRoLWltYWdlLnRzXG5cbmltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gXCJmb3JtaWRhYmxlXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiQC9tb2RlbHMvUG9zdFwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4vYXV0aC9bLi4ubmV4dGF1dGhdXCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaTogeyBib2R5UGFyc2VyOiBmYWxzZSB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpO1xuICBpZiAoIXNlc3Npb24pIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSk7XG5cbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuXG4gIGNvbnN0IGZvcm0gPSBuZXcgSW5jb21pbmdGb3JtKHsgbXVsdGlwbGVzOiBmYWxzZSwga2VlcEV4dGVuc2lvbnM6IHRydWUgfSk7XG4gIGNvbnN0IHVwbG9hZERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpYy91cGxvYWRzXCIpO1xuXG4gIGlmICghZnMuZXhpc3RzU3luYyh1cGxvYWREaXIpKSB7XG4gICAgZnMubWtkaXJTeW5jKHVwbG9hZERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gIH1cblxuICBmb3JtLnVwbG9hZERpciA9IHVwbG9hZERpcjtcblxuICBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiVXBsb2FkIGVycm9yXCIgfSk7XG5cbiAgICAvLyDinIUgzpzOv8+Bz4bOv8+Azr/Or863z4POtyDPgM61zrTOr8+Jzr1cbiAgICBjb25zdCB0aXRsZSA9IEFycmF5LmlzQXJyYXkoZmllbGRzLnRpdGxlKSA/IGZpZWxkcy50aXRsZVswXSA6IGZpZWxkcy50aXRsZTtcbiAgICBjb25zdCBjb250ZW50ID0gQXJyYXkuaXNBcnJheShmaWVsZHMuY29udGVudCkgPyBmaWVsZHMuY29udGVudFswXSA6IGZpZWxkcy5jb250ZW50O1xuXG4gICAgbGV0IHRodW1ibmFpbCA9IFwiL2ltYWdlcy9kZWZhdWx0LmpwZ1wiO1xuXG4gICAgLy8g4pyFIM6IzrvOtc6zz4fOv8+CIM66zrHOuSDOvM61z4TOsc66zq/Ovc63z4POtyDOtc65zrrPjM69zrHPglxuICAgIGNvbnN0IGZpbGUgPSBBcnJheS5pc0FycmF5KGZpbGVzLmltYWdlKSA/IGZpbGVzLmltYWdlWzBdIDogZmlsZXMuaW1hZ2U7XG4gICAgaWYgKGZpbGUgJiYgZmlsZS5maWxlcGF0aCkge1xuICAgICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGUub3JpZ2luYWxGaWxlbmFtZSB8fCBcIi5qcGdcIik7XG4gICAgICBjb25zdCBmaWxlbmFtZSA9IGAke3V1aWR2NCgpfSR7ZXh0fWA7XG4gICAgICBjb25zdCBkZXN0UGF0aCA9IHBhdGguam9pbih1cGxvYWREaXIsIGZpbGVuYW1lKTtcbiAgICAgIGZzLnJlbmFtZVN5bmMoZmlsZS5maWxlcGF0aCwgZGVzdFBhdGgpO1xuICAgICAgdGh1bWJuYWlsID0gYC91cGxvYWRzLyR7ZmlsZW5hbWV9YDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XG5cbiAgICAgIGNvbnN0IG5ld1Bvc3QgPSBuZXcgUG9zdCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBhdXRob3I6IHNlc3Npb24udXNlci5uYW1lLFxuICAgICAgICB0aHVtYm5haWwsIC8vIOKchSDOks61zrLOsc65z47Pg86/z4Ugz4zPhM65IM+Ezr8gc2NoZW1hIM6tz4fOtc65IHRodW1ibmFpbCAozrTOtc+CIM+AzrHPgc6xzrrOrM+Ez4kpXG4gICAgICB9KTtcblxuICAgICAgYXdhaXQgbmV3UG9zdC5zYXZlKCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIs6kzr8gzqzPgc64z4HOvyDOsc+Azr/OuM63zrrOtc+Nz4TOt866zrUhXCIgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJEYXRhYmFzZSBlcnJvclwiIH0pO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiSW5jb21pbmdGb3JtIiwiZnMiLCJwYXRoIiwidjQiLCJ1dWlkdjQiLCJkYkNvbm5lY3QiLCJQb3N0IiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJtZXRob2QiLCJlbmQiLCJmb3JtIiwibXVsdGlwbGVzIiwia2VlcEV4dGVuc2lvbnMiLCJ1cGxvYWREaXIiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJyZWN1cnNpdmUiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwidGl0bGUiLCJBcnJheSIsImlzQXJyYXkiLCJjb250ZW50IiwidGh1bWJuYWlsIiwiZmlsZSIsImltYWdlIiwiZmlsZXBhdGgiLCJleHQiLCJleHRuYW1lIiwib3JpZ2luYWxGaWxlbmFtZSIsImZpbGVuYW1lIiwiZGVzdFBhdGgiLCJyZW5hbWVTeW5jIiwibmV3UG9zdCIsImF1dGhvciIsInVzZXIiLCJuYW1lIiwic2F2ZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts-with-image.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts-with-image.ts"));
module.exports = __webpack_exports__;

})();