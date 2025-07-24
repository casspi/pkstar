import { defineRoutes } from '@/router/defineRoutes'
import SigninView from '@/views/auth/SigninView.vue'
import PasswordResetView from '@/views/auth/PasswordResetView.vue'

export default defineRoutes([
  {
    path: '/signin',
    name: 'SigninView',
    component: SigninView,
    meta: {
      title: '登录',
      requiresAuth: -1,
      enterClass: 'popup-up',
      leaveClass: 'popup-down',
    },
  },
  {
    path: '/password-reset',
    name: 'PasswordResetView',
    component: PasswordResetView,
    meta: {
      title: '修改密码',
      requiresAuth: 0,
    },
  },
])
