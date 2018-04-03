import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import Navheader from '@/page/Navheader'
import Navfooter from '@/page/Navfooter'
import logoin from '@/page/logoin'
import logoOut from '@/page/logoOut'
import home from '@/page/home'
import detail from '@/page/detail'
import FormLogoin from '@/components/FormLogoin'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/logoin',
      name: 'logoin',
      component: logoin
    },{
      path: '/logoOut',
      name: 'logoOut',
      component: logoOut
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    },{
      path: '/Navheader',
      name: 'Navheader',
      component: Navheader
    },{
      path: '/Navfooter',
      name: 'Navfooter',
      component: Navfooter
    },{
      path: '/FormLogoin',
      name: 'FormLogoin',
      component: FormLogoin
    }
  ]
})
