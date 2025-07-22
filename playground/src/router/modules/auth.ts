import { defineRoutes } from '@/router/defineRoutes'
import SigninView from '@/views/auth/SigninView.vue'

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
])
