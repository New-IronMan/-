// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//引入动画
import 'animate.css'
//引入UI框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//axios请求
import axios from 'axios'
Vue.prototype.$http = axios
//引入全局组件
import commonCom from './components/common'
for (var i in commonCom) {
  Vue.component(i, commonCom[i])
};
//过滤器
import Filter from './filter'
for (var i in Filter) {
  Vue.filter(i, Filter[i])
}
//非父子之间传值
Vue.prototype.ev = new Vue();
/////////////////////////////////////
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
