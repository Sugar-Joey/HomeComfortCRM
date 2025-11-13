// src/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('@/views/Sign/SigninPage.vue'),
    meta: { layout: false }, // 登录页不使用 PageLayout
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/SettingsView.vue'),
  },
  {
    path: '/StoreMainData',
    name: 'StoreMainData',
    component: () => import('@/views/StoreManage/StoreMainDataView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
