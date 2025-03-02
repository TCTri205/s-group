import { createWebHistory, createRouter } from 'vue-router'

import HomeVue from '@/pages/HomeVue.vue'
import DetailVue from '@/pages/DetailVue.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: HomeVue,
  },
  {
    path: '/detail/:name',
    name: 'Detail',
    component: DetailVue,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router // các file ở ngoài có thể sử dụng

