import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve)
    },
    {
      path: '/Solve',
      name: 'Solve',
      redirect:'/Solve/wisdomReligion',
      component: resolve => require(['@/components/Solve'], resolve),
      children:[
        {
          path: 'wisdomReligion',
          name: 'wisdomReligion',
          component: resolve => require(['@/components/wisdomReligion'], resolve)
        },
        {
          path: 'wisdomFood',
          name: 'wisdomFood',
          component: resolve => require(['@/components/wisdomFood'], resolve)
        },
      ]
    },
    {
      path: '/Person_recruit',
      name: 'Person_recruit',
      component: resolve => require(['@/components/Person_recruit'], resolve)
    },
    {
      path: '/Customer_support',
      name: 'Customer_support',
      component: resolve => require(['@/components/Customer_support'], resolve)
    },
    {
      path: '/Customer_service',
      name: 'Customer_service',
      component: resolve => require(['@/components/Customer_service'], resolve)
    },
    {
      path: '/CompanyIndex',
      name: 'CompanyIndex',
       redirect:'/CompanyIndex/Company',
       component: resolve => require(['@/components/CompanyIndex'], resolve),
      children:[
        {
          path: 'Company',
          name: 'Company',
          component: resolve => require(['@/components/Company'], resolve)
        },
        {
          path: 'history',
          name: 'history',
          component: resolve => require(['@/components/history'], resolve)
        }
      ]

    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
