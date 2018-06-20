Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'
import Navheader from '@/components/Navheader'
import Navfooter from '@/components/Navfooter'
import logoin from '@/page/logoin'
import logoOut from '@/page/logoOut'
import Home from '@/page/Home'
import detail from '@/page/detail'
import Help from '@/page/Help'
import Open from '@/page/Open'
import Recharge from '@/page/Recharge'
import Register from '@/page/Register'
import User from '@/page/User'
import FormLogoin from '@/components/FormLogoin'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
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
    },{
      path: '/Help',
      name: 'Help',
      component: Help
    },{
    	path: '/Open',
      name: 'Open',
      component: Open
    },{
    	path: '/User',
      name: 'User',
      component: User
    },{
    	path: '/Register',
      name: 'Register',
      component: Register
    },{
    	path: '/Recharge',
      name: 'Recharge',
      component: Recharge
    }


  ]
})
