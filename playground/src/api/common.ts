import { curl } from './curl'
import type { Userinfo } from '@/types'

// 密码登录
export const doUserLoginByPassword = (data: { username: string; password: string }) =>
  curl<Userinfo>(`/user/login.json`, data, { method: 'POST' })
