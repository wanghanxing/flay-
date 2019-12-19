import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pageLogn from '../pages/Logn/page-logn'
import homePage from '../pages/Index/home-page'
import testPageone from '../pages/menu1/test-pageone.vue'
import testPagetwo from '../pages/menu1/test-pagetwo.vue';
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page-logn',
      name: 'page-logn',
      component: pageLogn,
      meta: {
        name: 'page-logn'
      }
    },
    {
      path: '/',
      redirect: '/test-pageone',
      name: 'home-page',
      component: homePage,
      meta: {
        name: '首页'
      },
      children: [
        {
          path: 'test-pageone',
          name: 'test-pageone',
          component: testPageone,
          meta: {
            name: '演示页面1'
          }
        },
        {
          path: 'test-pagetwo',
          name: 'test-pagetwo',
          component: testPagetwo,
          meta: {
            name: "演示页面2"
          }
        }
      ]
    },

  ]
})