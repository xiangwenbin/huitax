<template>
	
	<el-col :span="24" class="panel-center">
		<vmenu></vmenu>
		<section class="panel-c-c">
			<slot></slot>
	    </section>
	</el-col>
	
</template>

<script>
import vmenu from './Menu.vue'
	export default {
    data() {
      return {
		  
      }
    },
	watch: {
		
	},
    methods: {

    },
	components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vmenu
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
	.panel-c-c {
		background: #f1f2f7;
		position: absolute;
		right: 0px;
		top: 0px;
		bottom: 0px;
		left: 230px;
		overflow-y: scroll;
		padding: 20px;
	}
</style>