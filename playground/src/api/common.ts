import { doFileUpload } from './file'
import { curl } from './curl'
import type { Userinfo } from '@/types'

// 密码登录
export const doUserLoginByPassword = (data: { username: string; password: string }) =>
  curl<Userinfo>(`/user/login.json`, data, { method: 'POST' })

// 修改密码
export const doUserPasswordReset = (data: { password: string; oldPassword: string }) =>
  curl<Userinfo>(`/user/mofidypass.json`, data, { method: 'POST' })

// 修改角色
export const doUserRoleReset = (data: { roleId: number }) =>
  curl<Userinfo>(`/user/switchRole.json`, data, { method: 'POST' })
