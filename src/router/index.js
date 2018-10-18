import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMq from 'vue-mq'
import Main from '../pages/MainPage'
import Detail from '../pages/DetailPage'

Vue.use(VueRouter)
Vue.use(VueMq, {
  breakpoints: {
    small: 480,
    large: Infinity,
  }
})

const NotFound = { template: '<div>잘못된 접근입니다</div>'}

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/:posts',
      name: 'detail',
      component: Detail

      },
    { path: '*', component: NotFound}
  ]
})
