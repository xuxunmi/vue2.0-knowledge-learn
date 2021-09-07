import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// productionTip设置为 false ，可以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

// vue-devtools 浏览器开发调试
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
