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

// 安卓 apk
export const ANDROID_DOWNLOAD_URL = `https://gyzj.gongyujjh.org.cn/app/apk/app_release.apk`

// ios 应用地址
export const ISO_DOWNLOAD_URL = `https://apps.apple.com/cn/app/%E5%85%B1%E6%84%88%E4%B9%8B%E5%AE%B6/id6476586829`

// 第三方应用 下载页
export const THIRD_DOWNLOAD_URL = `https://gyzj.gongyujjh.org.cn/app/#/third-download`

// edc_ios 应用地址
export const EDC_ISO_DOWNLOAD_URL = `https://apps.apple.com/cn/app/%E5%BE%AA%E8%AF%81%E5%AE%9E%E8%B7%B5/id1672851299`
