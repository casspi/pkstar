import { createTrapInstance } from '@pkstar/utils'

// 我的位置地名选择
export const locationNameTrap = createTrapInstance('trap:notice-list:refresh')

// 通用页面刷新 & 筛选
export const refreshTrap = createTrapInstance<Record<string, any>>('trap:view:refresh')
