import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "../views/Home.vue"
import Container from "../components/CustomContainer/src/index.vue"

// 批量注册route的view
import viewMap from '../views/index'


const viewRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  }
  , ...viewMap.map(item => {
    return {
      path: item.name,
      component: item.comp
    }
  }),
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
    meta: {
      breadName: '404找不到页面',
      title: '404找不到页面'
    }
  }
]

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: viewRoutes
  }
]

const router = createRouter({
  routes: mainRoutes,
  history: createWebHistory()
})

export default router