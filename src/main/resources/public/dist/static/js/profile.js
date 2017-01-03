webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(18);
	
	__webpack_require__(17);
	
	__webpack_require__(16);
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(203);
	
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

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _request = __webpack_require__(8);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _const = __webpack_require__(21);
	
	var _const2 = _interopRequireDefault(_const);
	
	var _vueRegionPicker = __webpack_require__(73);
	
	var _vueRegionPicker2 = _interopRequireDefault(_vueRegionPicker);
	
	var _chinaAreaData = __webpack_require__(48);
	
	var _chinaAreaData2 = _interopRequireDefault(_chinaAreaData);
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRegionPicker2.default, {
	  region: _chinaAreaData2.default,
	  vueVersion: 2
	});
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
	    address: {
	      province: "",
	      city: "",
	      district: "",
	      street: ""
	    }
	  },
	  btnValue: '获取验证码',
	  rules: {
	    username: [{ required: true, validator: checkUserName, trigger: 'blur' }]
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
	    onAddressChange: function onAddressChange(address) {
	      console.log(address);
	    },
	    handleSubmit: function handleSubmit(ev) {
	      var _this2 = this;
	
	      var _this = this;
	      this.$refs.ruleForm.validate(function (valid) {
	        if (valid && _this2.ruleForm.prototype) {
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

/***/ 182:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(182)
	
	/* script */
	__vue_exports__ = __webpack_require__(122)
	
	/* template */
	var __vue_template__ = __webpack_require__(209)
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

/***/ 209:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-profile"
	  }, [_c('el-form', {
	    ref: "ruleForm",
	    attrs: {
	      "model": _vm.ruleForm,
	      "rules": _vm.rules,
	      "label-position": "right",
	      "label-width": "100px"
	    }
	  }, [_c('h3', {
	    staticClass: "title"
	  }, [_vm._v("帐号信息")]), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "username",
	      "label": "用户名"
	    }
	  }, [_c('el-col', {
	    attrs: {
	      "span": 10
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
	      "placeholder": ""
	    },
	    domProps: {
	      "value": (_vm.ruleForm.username)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm.username = $event
	      }
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "nickname",
	      "label": "昵称"
	    }
	  }, [_c('el-col', {
	    attrs: {
	      "span": 10
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm.nickname),
	      expression: "ruleForm.nickname"
	    }],
	    attrs: {
	      "auto-complete": "off",
	      "placeholder": ""
	    },
	    domProps: {
	      "value": (_vm.ruleForm.nickname)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm.nickname = $event
	      }
	    }
	  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "mobile",
	      "label": "手机号"
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm.mobile),
	      expression: "ruleForm.mobile"
	    }],
	    attrs: {
	      "auto-complete": "off",
	      "placeholder": ""
	    },
	    domProps: {
	      "value": (_vm.ruleForm.mobile)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm.mobile = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "address",
	      "label": "地址"
	    }
	  }, [_c('region-picker', {
	    attrs: {
	      "placeholder": {
	        province: '选择省份',
	        city: '选择市',
	        district: '选择地区'
	      },
	      "province": _vm.ruleForm.address.province,
	      "city": _vm.ruleForm.address.city,
	      "district": _vm.ruleForm.address.district
	    },
	    on: {
	      "onchange": _vm.onAddressChange
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', {
	    attrs: {
	      "prop": "address",
	      "label": ""
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ruleForm.address.street),
	      expression: "ruleForm.address.street"
	    }],
	    attrs: {
	      "auto-complete": "off",
	      "placeholder": "街道,小区"
	    },
	    domProps: {
	      "value": (_vm.ruleForm.address.street)
	    },
	    on: {
	      "input": function($event) {
	        _vm.ruleForm.address.street = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('el-form-item', {
	    staticStyle: {
	      "width": "20%"
	    }
	  }, [_c('el-button', {
	    attrs: {
	      "type": "primary"
	    },
	    nativeOn: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.handleSubmit($event)
	      }
	    }
	  }, [_vm._v("保存")])], 1)], 1)], 1)
	},staticRenderFns: []}

/***/ }

});
//# sourceMappingURL=profile.js.map