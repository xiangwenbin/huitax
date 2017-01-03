webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(18);
	
	__webpack_require__(17);
	
	__webpack_require__(16);
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(199);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _elementUi = __webpack_require__(13);
	
	var _elementUi2 = _interopRequireDefault(_elementUi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_elementUi2.default);
	
	new _vue2.default({
	  template: '<app :options="options"></app>',
	  el: '#app',
	  data: function data() {
	    return {
	      options: {}
	    };
	  },
	  components: { App: _App2.default }
	});

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _request = __webpack_require__(8);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _urlUtil = __webpack_require__(47);
	
	var _urlUtil2 = _interopRequireDefault(_urlUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _data = {
	  ruleForm: {
	    username: '',
	    password: ''
	  },
	  rules: {
	    username: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
	    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
	  },
	  checked: true
	};
	exports.default = {
	  props: ['options'],
	  data: function data() {
	    return _data;
	  },
	
	  methods: {
	    handleReset2: function handleReset2() {
	      this.$refs.ruleForm.resetFields();
	    },
	    handleSubmit2: function handleSubmit2(ev) {
	      var _this2 = this;
	
	      var _this = this;
	      this.$refs.ruleForm.validate(function (valid) {
	        if (valid) {
	          _request2.default.get('/ajax/index', {
	            params: {
	              username: _this2.ruleForm.username,
	              password: _this2.ruleForm.password
	            }
	          }).then(function (result) {
	            console.log(result);
	          });
	        } else {
	          console.log('error submit!!');
	          return false;
	        }
	      });
	    }
	  }
	};

/***/ },

/***/ 179:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(179)
	
	/* script */
	__vue_exports__ = __webpack_require__(118)
	
	/* template */
	var __vue_template__ = __webpack_require__(206)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },

/***/ 206:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-login"
	  }, [_c('el-form', {
	    ref: "ruleForm",
	    staticClass: "demo-ruleForm card-box loginform",
	    attrs: {
	      "model": _vm.ruleForm,
	      "rules": _vm.rules,
	      "label-position": "left",
	      "label-width": "0px"
	    }
	  }, [_c('h3', {
	    staticClass: "title"
	  }, [_vm._v("用户登录")]), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "username"
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm.username),
	      expression: "ruleForm.username"
	    }],
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入您的手机号"
	    },
	    domProps: {
	      "value": (_vm.ruleForm.username)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm.username = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "password"
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm.password),
	      expression: "ruleForm.password"
	    }],
	    attrs: {
	      "type": "password",
	      "auto-complete": "off",
	      "placeholder": "密码"
	    },
	    domProps: {
	      "value": (_vm.ruleForm.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm.password = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    staticStyle: {
	      "margin": "0px 0px 35px 0px"
	    },
	    attrs: {
	      "checked": ""
	    },
	    domProps: {
	      "value": (_vm.checked)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checked = $event
	      }
	    }
	  }, [_vm._v("10天内免登录")]), _vm._v(" "), _c('el-form-item', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('el-button', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "type": "primary"
	    },
	    nativeOn: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.handleSubmit2($event)
	      }
	    }
	  }, [_vm._v("登录")])], 1)], 1)], 1)
	},staticRenderFns: []}

/***/ }

});
//# sourceMappingURL=login.js.map