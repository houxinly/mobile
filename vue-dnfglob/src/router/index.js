import Vue from 'vue'
import Router from 'vue-router'
import Indexof from '@/page/indexof'
import Order from '@/page/order'
import Payment from '@/page/payment'
import Myorder from '@/page/myorder'
import Login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Indexof',
      component: Indexof
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/payment',
      component:Payment
    },
    {
      path:'/myorder',
      component:Myorder
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
