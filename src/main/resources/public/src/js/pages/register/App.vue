<template>
  <div class="m-register">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="100px" class=" card-box loginform">
      <h3 class="title">用户注册</h3>
      <el-form-item prop="username"  label="手机号">
        <el-input type="text" v-model="ruleForm.username"  placeholder="请输入您的手机号"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="valCode" label="短信校验码">
        <el-col :span="10">
          <el-input  v-model="ruleForm.valCode" auto-complete="off" placeholder="校验码为4位数字"></el-input>
        </el-col>
        <el-col :span="1">&nbsp;</el-col>
        <el-col :span="7">
          <el-button type="info" @click="onGetValCode" :disabled="valBtnDisabled">{{btnValue}}</el-button>
        </el-col>
      </el-form-item>
      <el-form-item prop="prototype" label=" ">
          <el-checkbox v-model="ruleForm.prototype"><a href="#" target="_blank">注册协议</a></el-checkbox>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Request from '../../util/request';
  import CONST from '../../const';
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
          valCode:'',
          prototype:true
        },
        btnValue:'获取验证码',
        rules: {
          username: [
            { validator:checkUserName,trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          valCode: [
            { required: true, len:4, message: '请输入正确校验码', trigger: 'blur' }
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
      onGetValCode(){
        let index=60;
        // this.btnValue=""
        this.btnValue=`${index}s后可重新获取`;
        this.interval=window.setInterval(()=>{
          this.btnValue=`${--index}s后可重新获取`;
          if(index==0){
            window.clearInterval(this.interval);
            this.btnValue="重新获取";
          }
        },1000);
        //todo
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

<style lang="scss" scoped>
  .m-register{
      position:relative;
      height:620px;
      .card-box {
          padding: 50px;
          border:1px solid #ccc;
          box-shadow:0 0 5px #c7c5c5;
          width: 500px;
          box-sizing:border-box;
          position:absolute;
          left:50%;
          top:50%;
          margin:-210px 0 0 -250px;
          .title {
            margin: 0px auto 30px auto;
            text-align: left;
            color: #505458;
            font-size:16px;
          }
      }
  }
  
</style>