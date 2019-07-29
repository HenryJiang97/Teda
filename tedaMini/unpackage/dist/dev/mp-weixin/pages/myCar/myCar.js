(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/myCar/myCar"],{

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{\"page\":\"pages%2FmyCar%2FmyCar\"}":
/*!***********************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{"page":"pages%2FmyCar%2FmyCar"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _myCar = _interopRequireDefault(__webpack_require__(/*! ./pages/myCar/myCar.vue */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_myCar.default));

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue":
/*!****************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myCar_vue_vue_type_template_id_cf863e0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myCar.vue?vue&type=template&id=cf863e0e&scoped=true& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=template&id=cf863e0e&scoped=true&");
/* harmony import */ var _myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myCar.vue?vue&type=script&lang=js& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _myCar_vue_vue_type_style_index_0_id_cf863e0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myCar.vue?vue&type=style&index=0&id=cf863e0e&scoped=true&lang=css& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=style&index=0&id=cf863e0e&scoped=true&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _myCar_vue_vue_type_template_id_cf863e0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _myCar_vue_vue_type_template_id_cf863e0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cf863e0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./myCar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=style&index=0&id=cf863e0e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=style&index=0&id=cf863e0e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_style_index_0_id_cf863e0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./myCar.vue?vue&type=style&index=0&id=cf863e0e&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=style&index=0&id=cf863e0e&scoped=true&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_style_index_0_id_cf863e0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_style_index_0_id_cf863e0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_style_index_0_id_cf863e0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_style_index_0_id_cf863e0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_style_index_0_id_cf863e0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=template&id=cf863e0e&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=template&id=cf863e0e&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_template_id_cf863e0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./myCar.vue?vue&type=template&id=cf863e0e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=template&id=cf863e0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_template_id_cf863e0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCar_vue_vue_type_template_id_cf863e0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));


































































































































































































































































































































































































var _data = _interopRequireDefault(__webpack_require__(/*! @/common/data.js */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/common/data.js"));
var _parse = _interopRequireDefault(__webpack_require__(/*! ../../common/parse.js */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/common/parse.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  data: function data() {
    return {
      myCarList1: [],
      myCarList2: [],
      modalName: null,
      TabCur: 0,
      longitude: "121.436761",
      latitude: "31.189120",
      swiperGoodList: [],
      goodlist: [],
      goodlist2: [],
      goodList3: [],
      goodList4: [],
      goodList5: [],
      goodList6: [],
      goodList7: [],
      carlist: [],
      x: {},
      price: '',
      stock: '',
      desc: '',
      // modalName: null,

      groupBuys: [] };


  },

  onLoad: function onLoad() {
    this.getItemDetail(); // 拿到细节
    this.getStock(); // 拿到库存
    this.getGroupBuy();
    this.goodlist = _data.default.goodlist;
    this.goodlist2 = _data.default.goodlist2;
    this.goodList3 = _data.default.goodList3;
    this.goodList4 = _data.default.goodList4;
    this.goodList5 = _data.default.goodList5;
    this.goodList6 = _data.default.goodList6;
    this.goodList7 = _data.default.goodList7;
    this.carlist = _data.default.carlist;
    this.swiperGoodList = _data.default.swiperGoodList;
    this.myCarList1 = _data.default.myCarList1;
    this.myCarList2 = _data.default.myCarList2;
  },


  methods: {
    BackPage: function BackPage() {
      uni.navigateBack({
        delta: 1 });

    },
    tabSelect: function tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    },

    pay: function pay() {
      // Parse.Cloud.run('pay').then( r => {
      // 	console.log('r' + JSON.stringify(r));
      // }).catch( e => console.log('e' + JSON.stringify(e))	)
      this.launchGroupBuy('test1');
    },
    launchGroupBuy: function launchGroupBuy(sku) {
      _parse.default.Cloud.run('newGroupBuy', {
        sku: sku }).
      then(function (r) {
        console.log(r);
      }).catch(function (e) {return console.log('e' + JSON.stringify(e));});
    },

    scrollLeft: function scrollLeft(e) {
      console.log('e' + JSON.stringify(e));
    },
    getStock: function () {var _getStock = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var s;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _parse.default.Cloud.run('getItemStock', {
                    sku: 'test1' }).
                  then());case 2:s = _context.sent;
                this.stock = s.qty;
                console.log('库存' + JSON.stringify(this.stock));case 5:case "end":return _context.stop();}}}, _callee, this);}));function getStock() {return _getStock.apply(this, arguments);}return getStock;}(),


    getGroupBuy: function () {var _getGroupBuy = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var r;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (

                  new _parse.default.Query('Pin').
                  include('user').equalTo('itemSku', 'test1').find().then());case 2:r = _context2.sent;

                console.log('r' + JSON.stringify(r));

                this.groupBuys = r.map(function (x) {
                  return {
                    nickName: x.toJSON().user.wxProfile.nickName,
                    avatarUrl: x.toJSON().user.wxProfile.avatarUrl };

                });case 5:case "end":return _context2.stop();}}}, _callee2, this);}));function getGroupBuy() {return _getGroupBuy.apply(this, arguments);}return getGroupBuy;}(),




    getItemDetail: function () {var _getItemDetail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var r;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  _parse.default.Cloud.run('Gproducts', {
                    sku: 'test1' }).
                  then());case 2:r = _context3.sent;
                console.log(r);
                this.x = r.products.items[0];case 5:case "end":return _context3.stop();}}}, _callee3, this);}));function getItemDetail() {return _getItemDetail.apply(this, arguments);}return getItemDetail;}(),



    showModal: function showModal(e) {
      this.modalName = e;
    },
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    jump: function jump(x) {
      // 在产品详情页面，想要看任何功能都要先登录

      //this.$store.commit('needLogin')

      uni.redirectTo({
        url: "../".concat(x, "/").concat(x),
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {} });

    } },


  onShareAppMessage: function onShareAppMessage(options) {
    var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {
      title: "Wudi 微信小程序商城Demo", // 默认是小程序的名称(可以写slogan等)
      success: function success(res) {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') {}
      },
      fail: function fail() {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete: function complete() {
        // 转发结束之后的回调（转发成不成功都会执行）
      } };

    return shareObj;
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=style&index=0&id=cf863e0e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=style&index=0&id=cf863e0e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=template&id=cf863e0e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/myCar/myCar.vue?vue&type=template&id=cf863e0e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    [
      _c(
        "cu-custom",
        { attrs: { bgColor: "bg-teda", isBack: true, mpcomid: "085272ac-0" } },
        [_c("block", { slot: "content" }, [_vm._v("我的车辆")])],
        1
      ),
      _c(
        "view",
        { staticClass: "main" },
        [
          _c(
            "swiper",
            {
              staticClass: "screen-swiper",
              attrs: {
                circular: true,
                autoplay: true,
                interval: "5000",
                duration: "500"
              }
            },
            _vm._l(_vm.swiperGoodList, function(item, index) {
              return _c(
                "swiper-item",
                { key: index, attrs: { mpcomid: "085272ac-1-" + index } },
                [_c("image", { attrs: { src: item.url, mode: "aspectFill" } })]
              )
            })
          ),
          _vm._m(0),
          _vm._m(1),
          _vm._m(2),
          _c(
            "scroll-view",
            { staticClass: "bg-white nav", attrs: { "scroll-x": "" } },
            [
              _c(
                "view",
                { staticClass: "flex text-center" },
                _vm._l(_vm.goodList5, function(item, index) {
                  return _c(
                    "view",
                    {
                      key: index,
                      staticClass: "cu-item flex-sub text-gray",
                      class: index == _vm.TabCur ? "text-teda cur" : "",
                      attrs: {
                        "data-id": index,
                        eventid: "085272ac-0-" + index
                      },
                      on: { tap: _vm.tabSelect }
                    },
                    [_vm._v(_vm._s(item.name))]
                  )
                })
              )
            ]
          ),
          _vm._m(3),
          _vm._m(4),
          _vm._m(5),
          _vm._l(_vm.myCarList1, function(x, index) {
            return _c(
              "view",
              {
                key: index,
                staticClass: "cu-bar bg-white padding-tb-xs solid-bottom",
                staticStyle: { "min-height": "auto" }
              },
              [
                _c("view", { staticClass: "padding-left " }, [
                  _c("text", {}, [
                    _c("text", {
                      staticClass: "cuIcon-title text-gray padding-right-xs"
                    }),
                    _vm._v(_vm._s(x.desc))
                  ])
                ]),
                _c("view", { staticClass: "padding-right" }, [
                  _c("text", { staticClass: "text-sm text-gray" }, [
                    _vm._v(_vm._s(x.num))
                  ])
                ])
              ]
            )
          }),
          _vm._m(6),
          _vm._l(_vm.myCarList2, function(x, index) {
            return _c(
              "view",
              {
                key: index,
                staticClass: "cu-bar bg-white padding-tb-xs solid-bottom",
                staticStyle: { "min-height": "auto" }
              },
              [
                _c("view", { staticClass: "padding-left " }, [
                  _c("text", {}, [
                    _c("text", {
                      staticClass: "cuIcon-title text-gray padding-right-xs"
                    }),
                    _vm._v(_vm._s(x.desc))
                  ])
                ]),
                _c("view", { staticClass: "padding-right" }, [
                  _c("text", { staticClass: "text-sm text-gray" }, [
                    _vm._v(_vm._s(x.num))
                  ])
                ])
              ]
            )
          })
        ],
        2
      ),
      _c("view", {
        staticClass: "cu-bar",
        staticStyle: { "margin-bottom": "100rpx" }
      }),
      _c("footMenu", {
        attrs: { pageUrl: "categorylist", mpcomid: "085272ac-2" }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      {
        staticClass: "cu-bar bg-white padding-tb-xs",
        staticStyle: { "min-height": "auto" }
      },
      [
        _c("view", { staticClass: "padding-left padding-tb-sm" }, [
          _c("text", {}, [_vm._v("2014款 奥迪 A8L 3.0T 自动 45TFSI豪华型四驱")])
        ]),
        _c("view", { staticClass: "action" }, [
          _c("view", {
            staticClass: "cu-avatar round margin-left",
            staticStyle: {
              "background-image":
                "url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg')",
              "margin-left": "30rpx"
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      {
        staticClass: "cu-bar bg-white padding-tb-xs",
        staticStyle: { "min-height": "auto" }
      },
      [
        _c(
          "view",
          { staticClass: "padding cu-tag bg-white text-gray text-sm" },
          [
            _vm._v("第1067位认证车主："),
            _c("text", { staticClass: "text-bold text-gray text-sm" }, [
              _vm._v("GaryLee")
            ])
          ]
        ),
        _c("view", { staticClass: "action" }, [
          _c("view", { staticClass: "cu-tag bg-red radius" }, [_vm._v("关注")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      {
        staticClass: "cu-bar bg-white margin-bottom-sm padding-tb-xs",
        staticStyle: { "min-height": "auto" }
      },
      [
        _c("view", {}, [
          _c(
            "view",
            { staticClass: "padding cu-tag bg-white text-gray text-sm" },
            [
              _vm._v("2347围观 218赞"),
              _c("text", { staticClass: "cuIcon-appreciate text-gray" })
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white" }, [
      _c("view", { staticClass: "padding-left " }, [
        _c("text", { staticClass: "text-lg" }, [_vm._v("配置清单")])
      ]),
      _c("view", { staticClass: "padding-left padding-tb-xs" }, [
        _c("text", { staticClass: "text-lg padding-right" }, [
          _vm._v("¥141,900")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      {
        staticClass: "cu-bar bg-white padding-bottom-xs solid-bottom",
        staticStyle: { "min-height": "auto" }
      },
      [
        _c("view", { staticClass: "padding-left " }, [
          _c("text", { staticClass: "text-sm text-gray" }, [
            _vm._v("奥迪 A8L 2014款 45TFSI豪华型四驱")
          ])
        ]),
        _c("view", { staticClass: "padding-right" }, [
          _c("text", { staticClass: "text-sm text-gray" }, [
            _vm._v("合计16,890")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white padding-left" }, [
      _c("text", {}, [_vm._v("性能")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white padding-left" }, [
      _c("text", {}, [_vm._v("操控")])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{\"page\":\"pages%2FmyCar%2FmyCar\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/myCar/myCar.js.map