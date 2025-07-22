import { withLoading } from '@/utils'
import { curl } from './curl'

// 登出
export const doUserLogOut = () => curl(`app/user/loginOut`, {}, { method: 'POST' })
