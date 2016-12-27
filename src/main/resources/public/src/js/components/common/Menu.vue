<template>
	<aside style="width:230px;">
		<h5 class="admin"><i class="fa fa-user" aria-hidden="true" style="margin-right:5px;"></i>欢迎系统管理员：测试</h5>
		<el-menu style="border-top: 1px solid #475669;" :default-active="activeUrl" class="el-menu-vertical-demo" @open="handleopen"
			@close="handleclose" @select="handleselect" theme="dark" unique-opened >
			<el-submenu index="1">
				<template slot="title">角色管理</template>
				<el-menu-item index="/table">角色列表</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">权限管理</template>
				<el-menu-item index="/page4">选项4</el-menu-item>
				<el-menu-item index="/page5">选项5</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">字典管理</template>
				<el-menu-item index="/page6">XX字典</el-menu-item>
				<el-menu-item index="/page7">YY字典</el-menu-item>
			</el-submenu>
			<el-menu-item index="/page8">风控管理</el-menu-item>
		</el-menu>
		<!--<el-menu style="border-top: 1px solid #475669;" default-active="/table" class="el-menu-vertical-demo" @open="handleopen"
			@close="handleclose" @select="handleselect" theme="dark" unique-opened router>
			<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
				<el-submenu :index="index+''" v-if="!item.leaf">
					<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
					<el-menu-item v-for="child in item.children" :index="child.path">{{child.name}}</el-menu-item>
				</el-submenu>
				<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
			</template>
		</el-menu>-->
	</aside>
	
</template>

<script>

	export default {
		
		data() {
			console.log(window.location.pathname);
			return {
				activeUrl:window.location.pathname
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
				window.location.href=a;
			}	
		}
  }
</script>

<!-- 加入scoped是为了防止本组件中的css渗透到其他组件，可以去掉看看结果 -->
<style scoped>
	.panel-center {
		background: #324057;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
	}
	.admin {
		color: #c0ccda;
		text-align: center;
		height:56px;
		line-height:56px;
	}
</style>