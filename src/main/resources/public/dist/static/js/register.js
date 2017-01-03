webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(18);
	
	__webpack_require__(17);
	
	__webpack_require__(16);
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(200);
	
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

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _request = __webpack_require__(8);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _const = __webpack_require__(21);
	
	var _const2 = _interopRequireDefault(_const);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var checkUserName = function checkUserName(rule, value, callback) {
	  if (!value) {
	    return callback(new Error('手机号不能为空'));
	  } else if (!_const2.default.PATTERN.mobile.test(value)) {
	    return callback(new Error('请输入正确的手机号'));
	  } else {
	    callback();
	  }
	};
	
	var _data = {
	  ruleForm: {
	    username: '',
	    password: '',
	    valCode: '',
	    prototype: true
	  },
	  btnValue: '获取验证码',
	  rules: {
	    username: [{ required: true, validator: checkUserName, trigger: 'blur' }],
	    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
	    valCode: [{ required: true, len: 4, message: '请输入正确校验码', trigger: 'blur' }]
	  },
	  checked: true
	};
	exports.default = {
	  props: ['options'],
	  data: function data() {
	    return _data;
	  },
	
	  computed: {
	    valBtnDisabled: function valBtnDisabled() {
	      return !(this.btnValue == "获取验证码" || this.btnValue == "重新获取");
	    }
	  },
	  methods: {
	    onGetValCode: function onGetValCode() {
	      var _this2 = this;
	
	      var index = 60;
	
	      this.btnValue = index + 's\u540E\u53EF\u91CD\u65B0\u83B7\u53D6';
	      this.interval = window.setInterval(function () {
	        _this2.btnValue = --index + 's\u540E\u53EF\u91CD\u65B0\u83B7\u53D6';
	        if (index == 0) {
	          window.clearInterval(_this2.interval);
	          _this2.btnValue = "重新获取";
	        }
	      }, 1000);
	    },
	    handleSubmit: function handleSubmit(ev) {
	      var _this3 = this;
	
	      var _this = this;
	      this.$refs.ruleForm.validate(function (valid) {
	        if (valid && _this3.ruleForm.prototype) {
	          console.log("todo");
	        } else {
	          console.log('error submit!!');
	          return false;
	        }
	      });
	    }
	  }
	};

/***/ },

/***/ 183:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(183)
	
	/* script */
	__vue_exports__ = __webpack_require__(119)
	
	/* template */
	var __vue_template__ = __webpack_require__(210)
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

/***/ 210:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-register"
	  }, [_c('el-form', {
	    ref: "ruleForm",
	    staticClass: " card-box loginform",
	    attrs: {
	      "model": _vm.ruleForm,
	      "rules": _vm.rules,
	      "label-position": "right",
	      "label-width": "100px"
	    }
	  }, [_c('h3', {
	    staticClass: "title"
	  }, [_vm._v("用户注册")]), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "username",
	      "label": "手机号"
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
	      "prop": "password",
	      "label": "密码"
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
	  })], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "valCode",
	      "label": "短信校验码"
	    }
	  }, [_c('el-col', {
	    attrs: {
	      "span": 10
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm.valCode),
	      expression: "ruleForm.valCode"
	    }],
	    attrs: {
	      "auto-complete": "off",
	      "placeholder": "校验码为4位数字"
	    },
	    domProps: {
	      "value": (_vm.ruleForm.valCode)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm.valCode = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 1
	    }
	  }, [_vm._v(" ")]), _vm._v(" "), _c('el-col', {
	    attrs: {
	      "span": 7
	    }
	  }, [_c('el-button', {
	    attrs: {
	      "type": "info",
	      "disabled": _vm.valBtnDisabled
	    },
	    on: {
	      "click": _vm.onGetValCode
	    }
	  }, [_vm._v(_vm._s(_vm.btnValue))])], 1)], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "prototype",
	      "label": " "
	    }
	  }, [_c('el-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm.prototype),
	      expression: "ruleForm.prototype"
	    }],
	    domProps: {
	      "value": (_vm.ruleForm.prototype)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm.prototype = $event
	      }
	    }
	  }, [_c('a', {
	    attrs: {
	      "href": "#",
	      "target": "_blank"
	    }
	  }, [_vm._v("注册协议")])])], 1), _vm._v(" "), _c('el-form-item', {
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
	        _vm.handleSubmit($event)
	      }
	    }
	  }, [_vm._v("注册")])], 1)], 1)], 1)
	},staticRenderFns: []}

/***/ }

});
//# sourceMappingURL=register.js.map