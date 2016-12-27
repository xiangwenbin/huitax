import  '../../../css/base.css';
import '../../../scss/module.scss';
import 'element-ui/lib/theme-default/index.css';
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
Vue.use(ElementUI);

new Vue({
  template:`<app :options="options"></app>`,
  el: '#app',
  data: function () {
    return {
      options:{
      }
    }
  },
  components: { App }
})
