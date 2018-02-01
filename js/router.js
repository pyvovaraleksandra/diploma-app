var routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  { 
  	path: '/dashboard',
    name: 'dashboard',
  	component: Dashboard
  },
  { 
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  { 
    path: '/addTask',
    name: 'addTask',
    component: AddTask
  },
  { 
    path: 'editTask',
    name: 'editTask',
    component: EditTask
  }
]

var router = new VueRouter({
  routes: routes
})