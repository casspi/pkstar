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
    path: '/attend',
    name: 'AttendView',
    component: () => import('@/views/attend/AttendView.vue'),
    meta: { title: '打卡', requiresAuth: 1 },
  },
  {
    path: '/attend/attend-list',
    name: 'AttendListView',
    component: () => import('@/views/attend/AttendListView.vue'),
    meta: { title: '考勤统计', requiresAuth: 1 },
  },
  {
    path: '/sign',
    name: 'SignView',
    component: () => import('@/views/sign/SignView.vue'),
    meta: { title: '签到', requiresAuth: 1 },
  },
  {
    path: '/sign-list',
    name: 'SignListView',
    component: () => import('@/views/sign/SignListView.vue'),
    meta: { title: '足迹', requiresAuth: 1 },
  },
])
