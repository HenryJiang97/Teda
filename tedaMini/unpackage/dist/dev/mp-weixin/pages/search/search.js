(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/search/search"],{

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{\"page\":\"pages%2Fsearch%2Fsearch\"}":
/*!*************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{"page":"pages%2Fsearch%2Fsearch"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _search = _interopRequireDefault(__webpack_require__(/*! ./pages/search/search.vue */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_search.default));

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue":
/*!******************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_46f611a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=46f611a7&scoped=true& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=template&id=46f611a7&scoped=true&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_46f611a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_46f611a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46f611a7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=template&id=46f611a7&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=template&id=46f611a7&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_46f611a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=46f611a7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=template&id=46f611a7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_46f611a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_46f611a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));




























































var _utils = __webpack_require__(/*! ../../utils */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/utils/index.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =



{
  created: function created() {},
  mounted: function mounted() {
    this.openid = wx.getStorageSync("openid") || "";
    this.getHotData();
  },
  data: function data() {
    return {
      nowIndex: 0,
      words: "",
      historyData: [],
      hotData: [],
      tipsData: [],
      listData: [],
      openid: "",
      order: "",
      isHot: "",
      isNew: "" };

  },
  components: {},
  methods: {
    goodsDetail: function goodsDetail(id) {
      wx.navigateTo({
        url: "/pages/goods/goods?id=" + id });

    },
    cancel: function cancel() {
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
    clearInput: function clearInput() {
      this.words = "";
      this.listData = [];
      this.tipsData = [];
    },
    inputFocus: function inputFocus() {
      //商品清空
      this.listData = [];
      //展示搜索提示信息
      this.tipsearch();
    },
    getlistData: function () {var _getlistData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

                  (0, _utils.get)("/search/helperaction", {
                    keyword: this.words,
                    order: this.order }));case 2:data = _context.sent;

                this.listData = data.keywords;
                this.tipsData = [];case 5:case "end":return _context.stop();}}}, _callee, this);}));function getlistData() {return _getlistData.apply(this, arguments);}return getlistData;}(),

    changeTab: function changeTab(index) {
      this.nowIndex = index;
      if (index == 1) {
        this.order = this.order == "asc" ? "desc" : "asc";
      } else {
        this.order = "";
      }
      this.getlistData();
    },
    clearHistory: function () {var _clearHistory = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var data;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  (0, _utils.post)("/search/clearhistoryAction", {
                    openId: this.openid }));case 2:data = _context2.sent;

                console.log(data);
                if (data) {
                  this.historyData = [];
                }case 5:case "end":return _context2.stop();}}}, _callee2, this);}));function clearHistory() {return _clearHistory.apply(this, arguments);}return clearHistory;}(),

    searchWords: function () {var _searchWords = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {var vaule, data;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                vaule = e.currentTarget.dataset.value;
                this.words = vaule || this.words;_context3.next = 4;return (
                  (0, _utils.post)("/search/addhistoryaction", {
                    openId: this.openid,
                    keyword: vaule || this.words }));case 4:data = _context3.sent;

                console.log(data);
                //获取历史数据
                this.getHotData();
                //获取商品列表
                this.getlistData();case 8:case "end":return _context3.stop();}}}, _callee3, this);}));function searchWords(_x) {return _searchWords.apply(this, arguments);}return searchWords;}(),

    getHotData: function () {var _getHotData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(first) {var data;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                  (0, _utils.get)("/search/indexaction?openId=" + this.openid));case 2:data = _context4.sent;
                this.hotData = data.hotKeywordList;
                this.historyData = data.historyData;case 5:case "end":return _context4.stop();}}}, _callee4, this);}));function getHotData(_x2) {return _getHotData.apply(this, arguments);}return getHotData;}(),

    tipsearch: function () {var _tipsearch = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {var data;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                  (0, _utils.get)("/search/helperaction", {
                    keyword: this.words }));case 2:data = _context5.sent;

                this.tipsData = data.keywords;case 4:case "end":return _context5.stop();}}}, _callee5, this);}));function tipsearch(_x3) {return _tipsearch.apply(this, arguments);}return tipsearch;}(),

    topicDetail: function topicDetail(id) {
      wx.navigateTo({
        url: "/pages/topicdetail/topicdetail?id=" + id });

    } },

  computed: {} };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=template&id=46f611a7&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/search/search.vue?vue&type=template&id=46f611a7&scoped=true& ***!
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
  return _c("div", { staticClass: "search" }, [
    _c("div", { staticClass: "head" }, [
      _c("div", [
        _c("img", {
          attrs: {
            src:
              "http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png",
            alt: ""
          }
        }),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.words,
              expression: "words"
            }
          ],
          attrs: {
            type: "text",
            "confirm-type": "search",
            focus: "true",
            placeholder: "商品搜索",
            eventid: "7f5f639a-0"
          },
          domProps: { value: _vm.words },
          on: {
            focus: _vm.inputFocus,
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.words = $event.target.value
              },
              _vm.tipsearch
            ],
            confirm: _vm.searchWords
          }
        }),
        _c("img", {
          staticClass: "del",
          attrs: {
            src:
              "http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png",
            alt: "",
            eventid: "7f5f639a-1"
          },
          on: { click: _vm.clearInput }
        })
      ]),
      _c(
        "div",
        { attrs: { eventid: "7f5f639a-2" }, on: { click: _vm.cancel } },
        [_vm._v("取消")]
      )
    ]),
    _vm.words
      ? _c(
          "div",
          { staticClass: "searchtips" },
          [
            _vm._l(_vm.tipsData, function(item, index) {
              return _vm.tipsData.length != 0
                ? _c(
                    "div",
                    {
                      key: index,
                      attrs: {
                        "data-value": item.name,
                        eventid: "7f5f639a-3-" + index
                      },
                      on: { click: _vm.searchWords }
                    },
                    [_vm._v(_vm._s(item.name))]
                  )
                : _vm._e()
            }),
            _vm.tipsData.length == 0
              ? _c("div", { staticClass: "nogoods" }, [
                  _vm._v("数据库暂无此类商品...")
                ])
              : _vm._e()
          ],
          2
        )
      : _vm._e(),
    _vm.historyData.length != 0
      ? _c("div", { staticClass: "history" }, [
          _c("div", { staticClass: "t" }, [
            _c("div", [_vm._v("历史记录")]),
            _c("div", {
              attrs: { eventid: "7f5f639a-4" },
              on: { click: _vm.clearHistory }
            })
          ]),
          _c(
            "div",
            { staticClass: "cont" },
            _vm._l(_vm.historyData, function(item, index) {
              return _c(
                "div",
                {
                  key: index,
                  attrs: {
                    "data-value": item.keyword,
                    eventid: "7f5f639a-5-" + index
                  },
                  on: { click: _vm.searchWords }
                },
                [_vm._v(_vm._s(item.keyword))]
              )
            })
          )
        ])
      : _vm._e(),
    _c("div", { staticClass: "history hotsearch" }, [
      _vm._m(0),
      _c(
        "div",
        { staticClass: "cont" },
        _vm._l(_vm.hotData, function(item, index) {
          return _c(
            "div",
            {
              key: index,
              class: { active: 0 == index },
              attrs: {
                "data-value": item.keyword,
                eventid: "7f5f639a-6-" + index
              },
              on: { click: _vm.searchWords }
            },
            [_vm._v(_vm._s(item.keyword))]
          )
        })
      )
    ]),
    _vm.listData.length != 0
      ? _c("div", { staticClass: "goodsList" }, [
          _c("div", { staticClass: "sortnav" }, [
            _c(
              "div",
              {
                class: [0 == _vm.nowIndex ? "active" : ""],
                attrs: { eventid: "7f5f639a-7" },
                on: {
                  click: function($event) {
                    _vm.changeTab(0)
                  }
                }
              },
              [_vm._v("综合")]
            ),
            _c(
              "div",
              {
                staticClass: "price",
                class: [
                  1 == _vm.nowIndex ? "active" : "",
                  _vm.order == "desc" ? "desc" : "asc"
                ],
                attrs: { eventid: "7f5f639a-8" },
                on: {
                  click: function($event) {
                    _vm.changeTab(1)
                  }
                }
              },
              [_vm._v("价格")]
            ),
            _c(
              "div",
              {
                class: [2 == _vm.nowIndex ? "active" : ""],
                attrs: { eventid: "7f5f639a-9" },
                on: {
                  click: function($event) {
                    _vm.changeTab(2)
                  }
                }
              },
              [_vm._v("分类")]
            )
          ]),
          _c(
            "div",
            { staticClass: "sortlist" },
            _vm._l(_vm.listData, function(item, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: "item",
                  class: [_vm.listData.length % 2 == 0 ? "active" : "none"],
                  attrs: { eventid: "7f5f639a-10-" + index },
                  on: {
                    click: function($event) {
                      _vm.goodsDetail(item.id)
                    }
                  }
                },
                [
                  _c("img", { attrs: { src: item.list_pic_url, alt: "" } }),
                  _c("p", { staticClass: "name" }, [_vm._v(_vm._s(item.name))]),
                  _c("p", { staticClass: "price" }, [
                    _vm._v("￥" + _vm._s(item.retail_price))
                  ])
                ],
                1
              )
            })
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "t" }, [_c("div", [_vm._v("热门搜索")])])
  }
]
render._withStripped = true



/***/ })

},[["../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{\"page\":\"pages%2Fsearch%2Fsearch\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search.js.map