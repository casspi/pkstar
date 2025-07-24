import { defineRoutes } from '@/router/defineRoutes'

export default defineRoutes([
  {
    path: '/profile',
    name: 'ProfileView',
    component: () => import('@/views/mine/ProfileView.vue'),
    meta: { title: '个人资料', requiresAuth: 1 },
  },
])
