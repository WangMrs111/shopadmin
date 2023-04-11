//ts中引入路由

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'main',
    component: () => import('../pages/main.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/404.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

//路由导出
export default router
