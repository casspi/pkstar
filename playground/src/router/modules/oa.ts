import { defineRoutes } from '@/router/defineRoutes'

export default defineRoutes([
  {
    path: '/oa/notice',
    name: 'NoticeView',
    component: () => import('@/views/oa/NoticeView.vue'),
    meta: { title: '公告', requiresAuth: 1 },
  },
  {
    path: '/oa/notice-deatil',
    name: 'NoticeDetailView',
    component: () => import('@/views/oa/NoticeDetailView.vue'),
    meta: { title: '公告', requiresAuth: 1 },
  },
  {
    path: '/oa/attend',
    name: 'AttendView',
    component: () => import('@/views/oa/AttendView.vue'),
    meta: { title: '打卡', requiresAuth: 1 },
  },
])
