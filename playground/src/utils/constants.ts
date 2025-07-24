import jssdk from '@pkstar/horn-jssdk'

// 是否是开发环境
export const __DEV__ = process.env.NODE_ENV === 'development'

export const NAME = 'BXKQ-APP'

// 是否是app
export const isApp = jssdk.canIUse()

// 是否安卓
export const isAndroid = /os-name\/android/.test(navigator.userAgent.toLowerCase())

// 是否ios
export const isIOS = navigator.userAgent.includes('HornIOSApp')

// app 下载页
export const DOWNLOAD_URL = `https://gyzj.gongyujjh.org.cn/app/#/download`

// 提醒方式
export const NOTICE_METHOD = [
  { label: 'app', value: 'app' },
  { label: '邮件', value: 'email' },
  { label: '短信', value: 'sms' },
]
