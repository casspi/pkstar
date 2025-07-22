import { createTrapInstance } from '@pkstar/utils'

// 公告列表刷新
export const noticeListTrap = createTrapInstance('trap:notice-list:refresh')

// 通用页面刷新 & 筛选
export const refreshTrap = createTrapInstance<Record<string, any>>('trap:view:refresh')
