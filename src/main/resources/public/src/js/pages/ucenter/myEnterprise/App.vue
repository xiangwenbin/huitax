<template>
  <div class="m-enterprise">
    <el-button type="primary" size="small" @click="dialogFormVisible=true">添加企业</el-button>

    <el-dialog title="企业信息"  size="small" v-model="dialogFormVisible" >
      <div>
        <el-form :model="ruleForm" label-width="100px">
            
            <el-row :gutter="20">
              <el-col :span="12">
               <el-form-item label="纳税人名称" >
                  <el-input type="text" v-model="ruleForm.name" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="纳税人识别码" >
                  <el-input v-model="ruleForm.idcode" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="法定代表人" >
                  <el-input v-model="ruleForm.legalperson" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="企业会计主管" >
                  <el-input v-model="ruleForm.accountofficer" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="所属行业" >
                  <el-input v-model="ruleForm.industry" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="营业执照号" >
                  <el-input v-model="ruleForm.busliscnum" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="注册资本" >
                  <el-input v-model="ruleForm.registcaptil" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="公司成立时间" >
                  <el-date-picker v-model="ruleForm.comesttime" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row >
              <el-col :span="24">
                <el-form-item label="经营范围" >
                  <el-input v-model="ruleForm.busscope" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
        dialogFormVisible:false,
        ruleForm: {
          name: '',
          comesttime: '',
          address:{
            province:"",
            city:"",
            district:"",
            street:""
          }
        },
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
        this.$refs.ruleruleForm.validate((valid) => {
          if (valid&&this.ruleruleForm.prototype) {
            // Request.get(`/ajax/index`, {
            //   params:{
            //     username:this.ruleruleForm.username,
            //     password:this.ruleruleForm.password
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
  .m-enterprise{
    background:#fff;
  }
  
</style>