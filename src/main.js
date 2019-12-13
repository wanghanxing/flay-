// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less'
import echarts from 'echarts'
import store from './store/store'//引入store
Vue.prototype.$echarts = echarts
Vue.use(less)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
