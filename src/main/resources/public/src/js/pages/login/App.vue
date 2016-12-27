<template>
  <div class="m-login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm card-box loginform">
      <h3 class="title">用户登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm.username"  placeholder="请输入您的手机号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked style="margin:0px 0px 35px 0px;">10天内免登录</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2">登录</el-button>
        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Request from '../../util/request';
  //基础数据
  let _data={
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
            //{ validator: validaePass }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
            //{ validator: validaePass2 }
          ]
        },
        checked: true
  };
  export default {
    props:['options'],
    data() {
      return _data;
    },
    methods: {
      
      handleReset2() {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit2(ev) {
        var _this=this;
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            Request.get(`/ajax/index`, {
              params:{
                username:this.ruleForm.username,
                password:this.ruleForm.password
              }
            }).then((result)=>{
                console.log(result);
                // window.location.href="/index";
            });
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
  .m-login{
      position:relative;
      height:520px;
      .card-box {
          padding: 20px;
          border:1px solid #ccc;
          background-color: #F9FAFC;
          width: 280px;
          position:absolute;
          right:10px;
          top:50%;
          margin-top:-150px;
          .title {
            margin: 0px auto 30px auto;
            text-align: left;
            color: #505458;
            font-size:16px;
          }
      }
    
    
    
    
  }
  
</style>