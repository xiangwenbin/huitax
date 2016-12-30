<template>
  <div class="m-profile">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="100px" class="">
      <h3 class="title">帐号信息</h3>
      <el-form-item prop="username"  label="用户名">
        <el-col :span="10">
          <el-input type="text" v-model="ruleForm.username"  placeholder=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="nickname" label="昵称">
        <el-col :span="10">
          <el-input  v-model="ruleForm.nickname" auto-complete="off" placeholder=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="mobile" label="手机号">
        <el-input  v-model="ruleForm.mobile" auto-complete="off" placeholder=""></el-input>
      </el-form-item>
      <el-form-item prop="address" label="地址">
        <region-picker  :placeholder="{province: '选择省份', city: '选择市', district: '选择地区'}" :province="ruleForm.address.province" :city="ruleForm.address.city" :district="ruleForm.address.district" @onchange="onAddressChange"></region-picker>
      </el-form-item>
      <el-form-item prop="address" label="">
         <el-input  v-model="ruleForm.address.street" auto-complete="off" placeholder="街道,小区"></el-input>
      </el-form-item>
      <el-form-item style="width:20%;">
        <el-button type="primary" @click.native.prevent="handleSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Request from '../../../util/request';
  import CONST from '../../../const';
  import RegionPicker from 'vue-region-picker';
  import CHINA_REGION from 'china-area-data';
  import Vue from 'vue';
  Vue.use(RegionPicker, {
    region: CHINA_REGION,
    vueVersion: 2
  })
   var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }else if(!CONST.PATTERN.mobile.test(value)){
          return callback(new Error('请输入正确的手机号'));
        }else{
          callback()
        }
   };
  //基础数据
  let _data={
        ruleForm: {
          username: '',
          password: '',
          address:{
            province:"",
            city:"",
            district:"",
            street:""
          }
        },
        btnValue:'获取验证码',
        rules: {
          username: [
            { required: true,validator:checkUserName,trigger: 'blur' }
          ]
        },
        checked: true
  };
  export default {
    props:['options'],
    data() {
      return _data;
    },
    computed: {
    // a computed getter
      valBtnDisabled: function () {
        return !(this.btnValue=="获取验证码"||this.btnValue=="重新获取");
      }
    },
    methods: {
      //获取验证码
      onAddressChange(address){
          console.log(address);
      },
      handleSubmit(ev) {
        var _this=this;
        this.$refs.ruleForm.validate((valid) => {
          if (valid&&this.ruleForm.prototype) {
            // Request.get(`/ajax/index`, {
            //   params:{
            //     username:this.ruleForm.username,
            //     password:this.ruleForm.password
            //   }
            // }).then((result)=>{
            //     console.log(result);
            //     // window.location.href="/index";
            // });
            console.log("todo")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" >
  .m-profile{
    width:500px;
    h3{
      margin:20px;

    }
    
  }
  
</style>