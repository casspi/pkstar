import { doFileUpload } from './file'
import { curl } from './curl'
import type { PagingParams, Userinfo, UserinfoContent } from '@/types'
import type { DepItem, SysConfig } from '@/types/common'

// 密码登录
export const doUserLoginByPassword = (data: { username: string; password: string }) =>
  curl<Userinfo>(`/user/login.json`, data, { method: 'POST' })

// 修改密码
export const doUserPasswordReset = (data: { password: string; oldPassword: string }) =>
  curl<Userinfo>(`/user/mofidypass.json`, data, { method: 'POST' })

// 切换角色
export const doUserRoleReset = (data: { roleId: number }) =>
  curl<Userinfo>(`/user/switchRole.json`, data, { method: 'POST' })

// 修改个人信息
export const doUserInfoUpdate = (data: Partial<UserinfoContent>) =>
  curl<Userinfo>(`/user/updateinfo.json`, { content: data }, { method: 'POST' })

// 获取部门列表
export const getDepList = (data: PagingParams) =>
  curl<DepItem[]>(`/oa/depList.json`, data, { method: 'POST' })

// 系统配置
export const reqConfig = () => curl<SysConfig>(`/version/down.json`, {}, { method: 'POST' })
