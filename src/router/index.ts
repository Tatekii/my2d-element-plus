import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "../views/Home.vue"
import Container from "../components/myContainer/src/index.vue"
import IconSelector from "../views/iconSelector/index.vue"


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [{
      path: "/",
      component: Home
    },
    {
      path: 'iconSelect',
      component: IconSelector
    }]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router