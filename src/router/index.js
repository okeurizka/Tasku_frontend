import { createRouter, createWebHistory } from 'vue-router'

import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ForgotPasswordPage from '../views/ForgotPasswordPage.vue'
import ResetPasswordPage from '../views/ResetPasswordPage.vue'
import DashboardPage from '../views/DashboardPage.vue'

const routes = [
  { path: '/', redirect: '/register' },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/forgot-password', component: ForgotPasswordPage },
  { path: '/reset-password', component: ResetPasswordPage },
  { path: '/dasboard', component: DashboardPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
