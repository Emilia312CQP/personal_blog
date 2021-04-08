import Vue from 'vue';
import VueRouter from 'vue-router';
import LayoutIndex from '../layout/layoutIndex/index.vue';
import HeaderLayout from '@/layout/HeaderLayout';
import NoBannerLayout from '@/layout/NoBannerLayout';
import CateLayout from '@/layout/CateLayout';
Vue.use(VueRouter)
 

const routes = [
  {
    path: '/',
    redirect:'/home',
    name: 'Home',
    component: LayoutIndex,
    children:[{
      path:'/home',
      name:'home',
      component:()=>import ('../views/Home.vue')
    }]
  },
  {
    path: '/cate',
    redirect:'/cate/base/html',
    component: CateLayout,
    children:[{
      path:'/cate/base/html',
      name:'Html',
      component:()=>import ('../views/Cate')
    }]
  },
  {
    path: '/tag',
    redirect:'/tag',
    component: NoBannerLayout,
    children:[{
      path:'/tag',
      name:'Tag',
      component:()=>import ('../views/Tag.vue')
    }]
  },
  {
    path: '/timeline',
    redirect:'/timeline',
    
    component: NoBannerLayout,
    children:[{
      path:'/timeline',
      name: 'TimeLine',
      component:()=>import ('../views/TimeLine.vue')
    }
  ]
  },
  {
    path: '/about',
    redirect:'/about',
    name: 'About',
    component: HeaderLayout,
    children:[{
      path:'/about',
      name:'About',
      component:()=>import ('../views/About.vue')
    }
  ]
  },
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
