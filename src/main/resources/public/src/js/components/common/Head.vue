<template>
	
	<el-col :span="24" class="header">
		<el-col :span="20" style="font-size:26px;">
			<img src="../../../assets/logo4.png" class="logo"> <span>SAAS<i style="color:#20a0ff">后台管理系统</i></span>
		</el-col>
		<el-col :span="4">
			<el-tooltip class="item tip-logout" effect="dark" content="退出" placement="bottom">
				<i class="logout" v-on:click="logout"></i>
				<i class="fa fa-sign-out" aria-hidden="true" v-on:click="logout"></i>
			</el-tooltip>
		</el-col>
	</el-col>
	
</template>

<script>
	export default {
    data() {
      return {
		  
      }
    },
	watch: {
		
	},
    methods: {
			handleopen(){
				//console.log('handleopen');
			},
			handleclose(){
				//console.log('handleclose');
			},
            handleselect:function(a,b){
            },
			//退出登录
			logout:function(){
				var _this=this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					console.log("退出")
				}).catch(() => {
							
				});

				
			}
    }
  }
</script>

<!-- 加入scoped是为了防止本组件中的css渗透到其他组件，可以去掉看看结果 -->
<style lang="scss" scoped >
	.header {
		height: 60px;
		line-height: 60px;
		background: #1F2D3D;
		color: #c0ccda;
		.logout {
			background: url(../../../assets/logout_36.png);
			background-size: contain;
			width: 20px;
			height: 20px;
			float: left;
		}
		.logo {
			width: 40px;
			float: left;
			margin: 10px 10px 10px 18px;
		}
		
		.tip-logout {
			float: right;
			margin-right: 20px;
			padding-top: 5px;
		}
		
		.tip-logout i {
			cursor: pointer;
		}
	}
	
</style>