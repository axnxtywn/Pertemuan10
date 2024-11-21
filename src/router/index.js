import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import LoginComponent from '@/components/LoginComponent.vue'

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/login-component',
    name: 'LoginComponent',
    component: LoginComponent,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
