(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/communityDetail/communityDetail"],{

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{\"page\":\"pages%2FcommunityDetail%2FcommunityDetail\"}":
/*!*******************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{"page":"pages%2FcommunityDetail%2FcommunityDetail"} ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _communityDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/communityDetail/communityDetail.vue */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_communityDetail.default));

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue":
/*!************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _communityDetail_vue_vue_type_template_id_b1b31446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./communityDetail.vue?vue&type=template&id=b1b31446& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=template&id=b1b31446&");
/* harmony import */ var _communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communityDetail.vue?vue&type=script&lang=js& */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _communityDetail_vue_vue_type_template_id_b1b31446___WEBPACK_IMPORTED_MODULE_0__["render"],
  _communityDetail_vue_vue_type_template_id_b1b31446___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./communityDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_communityDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=template&id=b1b31446&":
/*!*******************************************************************************************************************************!*\
  !*** /Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=template&id=b1b31446& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_communityDetail_vue_vue_type_template_id_b1b31446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./communityDetail.vue?vue&type=template&id=b1b31446& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=template&id=b1b31446&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_communityDetail_vue_vue_type_template_id_b1b31446___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_communityDetail_vue_vue_type_template_id_b1b31446___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































































































var _parse = _interopRequireDefault(__webpack_require__(/*! ../../common/parse.js */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/common/parse.js"));
var _comment = _interopRequireDefault(__webpack_require__(/*! ../../components/comment.vue */ "../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/components/comment.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  components: {
    Comment: _comment.default },

  data: function data() {

    return {
      item: {},
      user: {},
      commentInitData: {},
      locationId: '',
      InputBottom: 0,
      swiperList: [],
      TabCur: 0,
      scrollLeft: 0,
      tags: [],
      cardData: [] };


  },
  onLoad: function onLoad(option) {
    this.id = option.id;
    this.locationId = this.$root.$mp.query.id;
    this.getDetail();

  },
  methods: {

    getDetail: function getDetail() {var _this = this;

      console.log('jznvoia' + JSON.stringify(this.idlist));
      var r = _parse.default.Cloud.run('getStatusDetail', {
        id: this.locationId }).
      then(function (r) {
        _this.item = r._toFullJSON();
        _this.user = r._toFullJSON().user;
        var temp = _this.item.image.map(function (x) {
          x = 'http://tedacar.oss-us-east-1.aliyuncs.com/' + x;
          return x;
        });
        for (var num = 0; num < temp.length; num++)
        {
          var tempt = {};
          tempt.id = num;
          tempt.type = 'image';
          tempt.url = temp[num].toString();
          _this.swiperList.push(tempt);
        }


        _this.commentInitData = _objectSpread({},
        _this.item, {
          targetName: 'Publish' // 规定评论类型
        }); // 把当前页面的信息给子组件

        _this.$set(item, 'comment', c);

        console.log('vuahfouh' + JSON.stringify(_this.commentInitData));


      }).
      catch(function (e) {

      });




    },
    follow: function follow() {

      var r = _parse.default.Cloud.run('follow', {
        id: this.item.user.objectId }).
      then();

    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=template&id=b1b31446&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/henryjiang/Documents/Proj/teda/tedaMini/pages/communityDetail/communityDetail.vue?vue&type=template&id=b1b31446& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { bgColor: "bg-white", isBack: true, mpcomid: "3a194610-0" } },
        [
          _c(
            "block",
            {
              attrs: { eventid: "3a194610-1" },
              on: {
                click: function($event) {
                  _vm.jump("my")
                }
              },
              slot: "backText"
            },
            [
              _vm.user.wxProfile
                ? _c("view", {
                    staticClass: "cu-avatar round",
                    style:
                      "background-image:url(" +
                      _vm.user.wxProfile.avatarUrl +
                      "); margin: 0 ;"
                  })
                : _vm._e(),
              _vm.user.wxProfile
                ? _c("p", { staticClass: "margin-lr" }, [
                    _vm._v(_vm._s(_vm.user.wxProfile.nickName))
                  ])
                : _vm._e(),
              _c(
                "div",
                {
                  staticClass: "cu-tag bg-red radius",
                  attrs: { eventid: "3a194610-0" },
                  on: { click: _vm.follow }
                },
                [_vm._v("关注")]
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "main" },
        [
          _c(
            "swiper",
            {
              staticClass: "screen-swiper",
              class: _vm.dotStyle ? "square-dot" : "round-dot",
              attrs: {
                "indicator-dots": true,
                circular: true,
                autoplay: true,
                interval: "5000",
                duration: "500"
              }
            },
            _vm._l(_vm.swiperList, function(item, index) {
              return _c(
                "swiper-item",
                { key: index, attrs: { mpcomid: "3a194610-1-" + index } },
                [
                  item.type == "image"
                    ? _c("image", {
                        attrs: { src: item.url, mode: "aspectFill" }
                      })
                    : _vm._e(),
                  item.type == "video"
                    ? _c("video", {
                        attrs: {
                          src: item.url,
                          autoplay: "",
                          loop: "",
                          muted: "",
                          "show-play-btn": false,
                          controls: false,
                          objectFit: "cover"
                        }
                      })
                    : _vm._e()
                ]
              )
            })
          ),
          _c("div", { staticClass: "text-black padding bg-white" }, [
            _vm._v(_vm._s(_vm.item.title))
          ]),
          _c("div", { staticClass: "text-black padding bg-white" }, [
            _vm._v(_vm._s(_vm.item.desc))
          ]),
          _vm.commentInitData.length > 0
            ? _c("Comment", {
                attrs: { initData: _vm.commentInitData, mpcomid: "3a194610-2" }
              })
            : _vm._e(),
          _vm._m(0)
        ],
        1
      )
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
      { staticClass: "cu-list menu-avatar comment solids-top" },
      [
        _c("view", { staticClass: "cu-item" }, [
          _c("view", {
            staticClass: "cu-avatar round",
            staticStyle: {
              "background-image":
                "url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"
            }
          }),
          _c("view", { staticClass: "content" }, [
            _c("view", { staticClass: "text-grey" }, [_vm._v("莫甘娜")]),
            _c("view", { staticClass: "text-gray text-content text-df" }, [
              _vm._v("凯尔，你被自己的光芒变的盲目。")
            ]),
            _c(
              "view",
              {
                staticClass: "bg-grey padding-sm radius margin-top-sm  text-sm"
              },
              [
                _c("view", { staticClass: "flex" }, [
                  _c("view", [_vm._v("凯尔：")]),
                  _c("view", { staticClass: "flex-sub" }, [
                    _vm._v("妹妹，你在帮他们给黑暗找借口吗?")
                  ])
                ])
              ]
            ),
            _c("view", { staticClass: "margin-top-sm flex justify-between" }, [
              _c("view", { staticClass: "text-gray text-df" }, [
                _vm._v("2018年12月4日")
              ]),
              _c("view", [
                _c("text", { staticClass: "cuIcon-appreciatefill text-red" }),
                _c("text", {
                  staticClass: "cuIcon-messagefill text-gray margin-left-sm"
                })
              ])
            ])
          ])
        ]),
        _c("view", { staticClass: "cu-item" }, [
          _c("view", {
            staticClass: "cu-avatar round",
            staticStyle: {
              "background-image":
                "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"
            }
          }),
          _c("view", { staticClass: "content" }, [
            _c("view", { staticClass: "text-grey" }, [_vm._v("凯尔")]),
            _c("view", { staticClass: "text-gray text-content text-df" }, [
              _vm._v("妹妹，如果不是为了飞翔，我们要这翅膀有什么用?")
            ]),
            _c(
              "view",
              {
                staticClass: "bg-grey padding-sm radius margin-top-sm  text-sm"
              },
              [
                _c("view", { staticClass: "flex" }, [
                  _c("view", [_vm._v("莫甘娜：")]),
                  _c("view", { staticClass: "flex-sub" }, [
                    _vm._v("如果不能立足于大地，要这双脚又有何用?")
                  ])
                ])
              ]
            ),
            _c("view", { staticClass: "margin-top-sm flex justify-between" }, [
              _c("view", { staticClass: "text-gray text-df" }, [
                _vm._v("2018年12月4日")
              ]),
              _c("view", [
                _c("text", { staticClass: "cuIcon-appreciate text-gray" }),
                _c("text", {
                  staticClass: "cuIcon-messagefill text-gray margin-left-sm"
                })
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

},[["../../../../../../Users/henryjiang/Documents/Proj/teda/tedaMini/main.js?{\"page\":\"pages%2FcommunityDetail%2FcommunityDetail\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/communityDetail/communityDetail.js.map