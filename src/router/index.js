import Vue from 'vue'
import Router from 'vue-router'
//知乎日报首页路由
import index from '../components/pages/index.vue'
//详情页路由
import details from '../components/pages/details.vue'
//评论页路由
import page from '../components/pages/page.vue'
//收藏
import shoucang from '../components/pages/shoucang.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // 知乎日报首页
    {
      path: '/index',
      component: index,
    },
    {
      path: '/details/:id',
      component: details
    },
    {
      path: '/page/:id',
      component: page
    },
    {
      path:'/shoucang',
      component:shoucang
    },
    {
      path: '*',
      redirect: 'index'
    }
  ]
})
