import { defineRoutes } from '@/router/defineRoutes'
import MainView from '@/views/main/MainView.vue'
import TodoView from '@/views/oa/TodoView.vue'
import WorkView from '@/views/work/WorkView.vue'
import MineViewVue from '@/views/mine/MineView.vue'
import MessageView from '@/views/message/MessageView.vue'

export default defineRoutes([
  {
    path: '/',
    name: 'MainView',
    component: MainView,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: MessageView,
        meta: {
          title: '消息',
          requiresAuth: 1,
          icon: 'chat',
          enterClass: '',
          statusTheme: 'light',
        },
      },
      {
        path: '/work',
        name: 'WorkView',
        component: WorkView,
        meta: {
          title: '工作',
          requiresAuth: 1,
          icon: 'bag',
        },
      },
      {
        path: '/todo',
        name: 'TodoView',
        component: TodoView,
        meta: {
          title: '待我审批',
          requiresAuth: 1,
          icon: 'clock',
        },
      },
      {
        path: '/mine',
        name: 'MineView',
        component: MineViewVue,
        meta: {
          title: '我的',
          requiresAuth: 1,
          icon: 'manager-o',
          statusTheme: 'light',
        },
      },
    ],
  },

  {
    path: '/webview',
    name: 'WebviewView',
    component: () => import('@/views/webview/WebviewView.vue'),
    meta: { title: '详情', requiresAuth: 0 },
  },

  {
    path: '/location/lift',
    name: 'LocationNameView',
    component: () => import('@/views/common/LocationNameView.vue'),
    meta: { title: '我在这里', requiresAuth: 0 },
  },

  {
    path: '/preview/image',
    name: 'PreviewImageView',
    component: () => import('@/views/preview/PreviewImageView.vue'),
    meta: {
      title: '预览',
      requiresAuth: 0,
      enterClass: '',
      leaveClass: '',
    },
  },

  // 404
  // https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html
  { path: '/:pathMatch(.*)*', name: '404', redirect: '/' },
])
