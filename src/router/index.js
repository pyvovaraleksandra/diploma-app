import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/pages/Welcome'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import AddTask from '@/pages/AddTask'
import EditTask from '@/pages/EditTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    { 
      path: '/addTask',
      name: 'AddTask',
      component: AddTask
    },
    { 
      path: 'editTask',
      name: 'EditTask',
      component: EditTask
    }
  ]  
})

