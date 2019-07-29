(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/categorylist/categorylist"],{

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{\"page\":\"pages%2Fcategorylist%2Fcategorylist\"}":
/*!*************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{"page":"pages%2Fcategorylist%2Fcategorylist"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _categorylist = _interopRequireDefault(__webpack_require__(/*! ./pages/categorylist/categorylist.vue */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_categorylist.default));

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue":
/*!******************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categorylist_vue_vue_type_template_id_2b22c632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorylist.vue?vue&type=template&id=2b22c632& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=template&id=2b22c632&");
/* harmony import */ var _categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorylist.vue?vue&type=script&lang=js& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _categorylist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorylist.vue?vue&type=style&index=0&lang=css& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _categorylist_vue_vue_type_template_id_2b22c632___WEBPACK_IMPORTED_MODULE_0__["render"],
  _categorylist_vue_vue_type_template_id_2b22c632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./categorylist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./categorylist.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=template&id=2b22c632&":
/*!*************************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=template&id=2b22c632& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_template_id_2b22c632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./categorylist.vue?vue&type=template&id=2b22c632& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=template&id=2b22c632&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_template_id_2b22c632___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categorylist_vue_vue_type_template_id_2b22c632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));




























































































































var _footMenu = _interopRequireDefault(__webpack_require__(/*! @/components/footMenu.vue */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/components/footMenu.vue"));
var _data = _interopRequireDefault(__webpack_require__(/*! @/common/data.js */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/common/data.js"));
var _utils = __webpack_require__(/*! ../../utils */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/utils/index.js");



var _item = _interopRequireDefault(__webpack_require__(/*! ../../components/item.vue */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/components/item.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  components: {
    footMenu: _footMenu.default,
    SingleItem: _item.default },

  created: function created() {},
  mounted: function mounted() {
    //获取页面传的参数
    this.categoryId = this.$root.$mp.query.id;
    // this.getAllData();
  },
  data: function data() {
    return {
      list: [],
      carlist: [],
      CustomBar: this.CustomBar,
      modalName: null,
      priceList: [],
      checkbox4: [],
      checkbox5: [] };

  },
  onLoad: function onLoad() {
    console.log(_data.default);
    this.carlist = _data.default.carlist;
    this.list = _data.default.list;
    this.priceList = _data.default.priceList;
    this.checkbox4 = _data.default.checkbox4;
    this.checkbox5 = _data.default.checkbox5;
  },
  methods: {
    ChoosePriceList: function ChoosePriceList(e) {
      var items = this.priceList;
      var values = e.currentTarget.dataset.value;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        if (items[i].value == values) {
          items[i].checked = !items[i].checked;
          break;
        }
      }
    },
    ChooseCheckbox4: function ChooseCheckbox4(e) {
      var items = this.checkbox4;
      var values = e.currentTarget.dataset.value;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        if (items[i].value == values) {
          items[i].checked = !items[i].checked;
          break;
        }
      }
    },
    ChooseCheckbox5: function ChooseCheckbox5(e) {
      var items = this.checkbox5;
      var values = e.currentTarget.dataset.value;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        if (items[i].value == values) {
          items[i].checked = !items[i].checked;
          break;
        }
      }
    },


    jump: function jump(pageName) {
      uni.navigateTo({
        url: "../".concat(pageName, "/").concat(pageName),
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {} });

    },

    showModal: function showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    goDetail: function goDetail() {
      uni.navigateTo({
        url: '../goods/goods' });

    },
    tabSelect: function tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    },

    changeTab: function () {var _changeTab = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(index, id) {var listdata;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                this.nowIndex = index;_context.next = 3;return (
                  get('/goods/goodsList', {
                    categoryId: id }));case 3:listdata = _context.sent;

                this.goodsList = listdata.data;
                this.currentNav = listdata.currentNav;
                //需要让导航滚动到可见区域
                if (this.nowIndex > 4) {
                  this.scrollLeft = this.nowIndex * 60;
                }case 7:case "end":return _context.stop();}}}, _callee, this);}));function changeTab(_x, _x2) {return _changeTab.apply(this, arguments);}return changeTab;}(),

    getAllData: function () {var _getAllData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _this = this;var navdata, allPromise;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (


                  get("/categories/".concat(this.categoryId, "/products")));case 2:navdata = _context2.sent;
                console.log('拿到列表页全部产品SKU');
                console.log(navdata);


                allPromise = navdata.map(function (x) {
                  var promise = get("/products/".concat(x.sku));
                  return promise;
                });
                console.log('全部的请求' + allPromise);

                //       this.navData = navdata.navData;
                //       this.currentNav = navdata.currentNav;
                //
                //       for (let i = 0; i < this.navData.length; i++) {
                //         const id = this.navData[i].id;
                //         if (id == this.currentNav.id) {
                //           this.nowIndex = i;
                //         }
                //       }
                //
                //       //需要让导航滚动到可见区域
                //       if (this.nowIndex > 4) {
                //         this.scrollLeft = this.nowIndex * 60;
                //       } else {
                //         this.scrollLeft = 0;
                //       }

                Promise.all(allPromise).
                then(function (r) {
                  console.log('拿到产品信息' + r);
                  _this.goodsList = r;
                }).
                catch(function (e) {
                  console.log(e);
                });

                //       const listdata = await get("/goods/goodsList", {
                //         categoryId: this.categoryId
                //       });
                //       this.goodsList = listdata.data;
              case 8:case "end":return _context2.stop();}}}, _callee2, this);}));function getAllData() {return _getAllData.apply(this, arguments);}return getAllData;}(),
    goodsDetail: function goodsDetail(id) {
      console.log(id);
      wx.navigateTo({
        url: '/pages/goods/goods?id=' + id });

    } },

  computed: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=template&id=2b22c632&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/categorylist/categorylist.vue?vue&type=template&id=2b22c632& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "categoryList" },
    [
      _c(
        "cu-custom",
        { attrs: { bgColor: "bg-teda text-white", mpcomid: "ce1d534c-0" } },
        [_c("block", { slot: "content" }, [_vm._v("买车")])],
        1
      ),
      _c(
        "view",
        {
          staticClass: "cu-bar bg-white search padding-bottom",
          staticStyle: { "padding-top": "24rpx" }
        },
        [
          _c("view", { staticClass: "search-form round" }, [
            _c("text", { staticClass: "cuIcon-search text-gray" }),
            _c("input", {
              attrs: {
                "adjust-position": false,
                type: "text",
                placeholder: "家用省油",
                "confirm-type": "search",
                eventid: "ce1d534c-0"
              },
              on: { click: _vm.toSearch }
            })
          ])
        ]
      ),
      _c("div", { staticClass: "cu-bar bg-white padding-lr solid" }, [
        _c(
          "div",
          {
            staticClass: "item",
            attrs: { eventid: "ce1d534c-1" },
            on: {
              tap: function($event) {
                _vm.jump("carBrand")
              }
            }
          },
          [
            _vm._v("品牌"),
            _c("text", { staticClass: "cuIcon-unfold margin-left-xs" })
          ]
        ),
        _c(
          "div",
          {
            staticClass: "item",
            attrs: { "data-target": "ChooseModal", eventid: "ce1d534c-2" },
            on: { tap: _vm.showModal }
          },
          [
            _vm._v("车价"),
            _c("text", { staticClass: "cuIcon-unfold margin-left-xs" })
          ]
        ),
        _c(
          "view",
          {
            staticClass: "cu-modal bottom-modal",
            class: _vm.modalName == "ChooseModal" ? "show" : "",
            attrs: { eventid: "ce1d534c-7" },
            on: { tap: _vm.hideModal }
          },
          [
            _c(
              "view",
              {
                staticClass: "cu-dialog",
                attrs: { eventid: "ce1d534c-6" },
                on: {
                  tap: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              [
                _c("view", { staticClass: "cu-bar bg-white" }, [
                  _c(
                    "view",
                    {
                      staticClass: "action text-blue",
                      attrs: { eventid: "ce1d534c-3" },
                      on: { tap: _vm.hideModal }
                    },
                    [_vm._v("取消")]
                  ),
                  _c("view", { staticClass: "content" }, [_vm._v("车价分类")]),
                  _c(
                    "view",
                    {
                      staticClass: "action text-green",
                      attrs: { eventid: "ce1d534c-4" },
                      on: { tap: _vm.hideModal }
                    },
                    [_vm._v("确定")]
                  )
                ]),
                _c("view", { staticClass: "padding-top padding-left flex" }, [
                  _vm._v("选择价格区间")
                ]),
                _c(
                  "view",
                  { staticClass: "grid col-3 padding-sm" },
                  _vm._l(_vm.priceList, function(item, index) {
                    return _c(
                      "view",
                      { key: index, staticClass: "padding-xs" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "cu-btn gray block",
                            class: item.checked ? "bg-teda" : "line-gray",
                            attrs: {
                              "data-value": item.value,
                              eventid: "ce1d534c-5-" + index
                            },
                            on: { tap: _vm.ChoosePriceList }
                          },
                          [_vm._v(_vm._s(item.name))]
                        )
                      ],
                      1
                    )
                  })
                )
              ]
            )
          ]
        ),
        _c(
          "div",
          {
            staticClass: "item",
            attrs: { "data-target": "ChooseModal2", eventid: "ce1d534c-8" },
            on: { tap: _vm.showModal }
          },
          [
            _vm._v("分期"),
            _c("text", { staticClass: "cuIcon-unfold margin-left-xs" })
          ]
        ),
        _c(
          "view",
          {
            staticClass: "cu-modal",
            class: _vm.modalName == "ChooseModal2" ? "show" : "",
            attrs: { eventid: "ce1d534c-14" },
            on: { tap: _vm.hideModal }
          },
          [
            _c(
              "view",
              {
                staticClass: "cu-dialog",
                attrs: { eventid: "ce1d534c-13" },
                on: {
                  tap: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              [
                _c("view", { staticClass: "cu-bar bg-white" }, [
                  _c(
                    "view",
                    {
                      staticClass: "action text-blue",
                      attrs: { eventid: "ce1d534c-9" },
                      on: { tap: _vm.hideModal }
                    },
                    [_vm._v("取消")]
                  ),
                  _c("view", { staticClass: "content" }, [_vm._v("分期付款")]),
                  _c(
                    "view",
                    {
                      staticClass: "action text-green",
                      attrs: { eventid: "ce1d534c-10" },
                      on: { tap: _vm.hideModal }
                    },
                    [_vm._v("确定")]
                  )
                ]),
                _c("view", { staticClass: "padding-top padding-left flex" }, [
                  _vm._v("月供（元）")
                ]),
                _c(
                  "view",
                  { staticClass: "grid col-3 padding-sm" },
                  _vm._l(_vm.checkbox4, function(item, index) {
                    return _c(
                      "view",
                      { key: index, staticClass: "padding-xs" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "cu-btn gray block",
                            class: item.checked ? "bg-teda" : "line-gray",
                            attrs: {
                              "data-value": item.value,
                              eventid: "ce1d534c-11-" + index
                            },
                            on: { tap: _vm.ChooseCheckbox4 }
                          },
                          [_vm._v(_vm._s(item.name))]
                        )
                      ],
                      1
                    )
                  })
                ),
                _c("view", { staticClass: "padding-top padding-left flex" }, [
                  _vm._v("首付（元）")
                ]),
                _c(
                  "view",
                  { staticClass: "grid col-3 padding-sm" },
                  _vm._l(_vm.checkbox5, function(item, index) {
                    return _c(
                      "view",
                      { key: index, staticClass: "padding-xs" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "cu-btn gray block",
                            class: item.checked ? "bg-teda" : "line-gray",
                            attrs: {
                              "data-value": item.value,
                              eventid: "ce1d534c-12-" + index
                            },
                            on: { tap: _vm.ChooseCheckbox5 }
                          },
                          [_vm._v(_vm._s(item.name))]
                        )
                      ],
                      1
                    )
                  })
                )
              ]
            )
          ]
        ),
        _c(
          "div",
          {
            staticClass: "item",
            attrs: { "data-target": "DrawerModalR", eventid: "ce1d534c-15" },
            on: {
              tap: function($event) {
                _vm.jump("filter")
              }
            }
          },
          [
            _vm._v("筛选"),
            _c("text", { staticClass: "cuIcon-filter margin-left-xs" })
          ]
        )
      ]),
      _c(
        "view",
        {
          staticClass: "cu-card article margin-bottom",
          class: _vm.isCard ? "no-card" : "",
          attrs: { eventid: "ce1d534c-16" },
          on: {
            tap: function($event) {
              _vm.jump("goods")
            }
          }
        },
        _vm._l(_vm.carlist, function(item, index) {
          return _c("view", { key: index, staticClass: "cu-item shadow " }, [
            _c("view", { staticClass: "content margin-top" }, [
              _c("image", { attrs: { src: item.url } }),
              _c("view", { staticClass: "desc" }, [
                _c("view", { staticClass: "text-black " }, [
                  _vm._v(_vm._s(item.name))
                ]),
                _c("view", { staticClass: "text-black" }, [
                  _vm._v(_vm._s(item.desc))
                ]),
                _c("div", [
                  _c("div", [
                    _c("view", { staticClass: "text-gray text-xs" }, [
                      _vm._v(_vm._s(item.dist))
                    ]),
                    _c("view", { staticClass: "text-black" }, [
                      _vm._v(_vm._s(item.price))
                    ])
                  ])
                ]),
                _c("view", [
                  _c("view", { staticClass: "cu-tag bg-teda sm text-white" }, [
                    _vm._v("一成购")
                  ]),
                  _c(
                    "text",
                    { staticClass: "padding-left-xs text-teda text-sm" },
                    [_vm._v(_vm._s(item.monthpay))]
                  )
                ])
              ])
            ])
          ])
        })
      ),
      _c("view", {
        staticClass: "cu-bar  ",
        staticStyle: { "margin-bottom": "100rpx" }
      }),
      _c("footMenu", {
        attrs: { pageUrl: "categorylist", mpcomid: "ce1d534c-1" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{\"page\":\"pages%2Fcategorylist%2Fcategorylist\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/categorylist/categorylist.js.map