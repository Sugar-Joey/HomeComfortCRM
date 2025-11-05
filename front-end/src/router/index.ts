// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/TesView.vue'),
  },
  {
    path: '/',
    redirect: '/home', // 默认跳转
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
