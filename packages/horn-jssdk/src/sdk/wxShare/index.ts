import { type FailCallbackResult, call, type PickOptions } from '../../core'

// 参数参考wx文档：https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Share_and_Favorites/Android.html

// 目标渠道
export enum WXScene {
  // 分享到对话
  WXSceneSession = 0,
  // 分享到朋友圈
  WXSceneTimeline = 1,
  // WXSceneFavorite
  WXSceneFavorite = 2,
}

// 小程序类型
enum MiniptogramType {
  TEST = 0,
  PREVIEW = 1,
  RELEASE = 2,
}

// 文本
export interface WXTextObject {
  text: string
}

// 图片
export interface WXImageObject {
  imageData: string
}

// 视频
export interface WXVideoObject {
  videoUrl: string // 视频链接
  videoLowBandUrl?: string // 供低带宽的环境下使用的视频链接
}

// 文件
export interface WXFileObject {
  fileExtension: string // 文件后缀名
  filePath: string // 文件路径
}

// 网页
export interface WXWebpageObject {
  webpageUrl: string // 网页链接
}

// 小程序
export interface WXMiniProgramObject {
  webpageUrl?: string // 兼容低版本的网页链接	限制长度不超过 10KB
  userName: string //小程序的原始 id	小程序原始 ID 获取方法：登录小程序管理后台-设置-基本设置-账号信息
  path: string //小程序的 path	小程序页面路径；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"
  withShareTicket: boolean //是否使用带 shareTicket 的分享	通常开发者希望分享出去的小程序被二次打开时可以获取到更多信息，例如群的标识。可以设置 withShareTicket 为 true，当分享卡片在群聊中被其他用户打开时，可以获取到 shareTicket，用于获取更多分享信息。详见小程序获取更多分享信息 ，最低客户端版本要求：6.5.13
  miniprogramType: MiniptogramType
}

export enum WxShareMediaObjectType {
  WXShareText = 1,
  WXShareImage = 2,
  WXShareVideo = 3,
  WXShareFile = 4,
  WXShareWebpage = 5,
  WXShareMiniProgram = 6,
}

export interface WXMediaMessage<T> {
  title: string //消息标题
  description?: string // 消息描述
  thumbData?: string // 缩略图的二进制数据
  mediaObject: T
}

export type WxShareOptions<T = any> = {
  scene?: WXScene // 发送的目标场景
  success?: (result: T) => void
  fail?: (err: FailCallbackResult) => void
} & (
  | {
      type: WxShareMediaObjectType.WXShareText
      message: WXMediaMessage<WXTextObject>
    }
  | {
      type: WxShareMediaObjectType.WXShareFile
      message: WXMediaMessage<WXFileObject>
    }
  | {
      type: WxShareMediaObjectType.WXShareImage
      message: WXMediaMessage<WXImageObject>
    }
  | {
      type: WxShareMediaObjectType.WXShareVideo
      message: WXMediaMessage<WXVideoObject>
    }
  | {
      type: WxShareMediaObjectType.WXShareWebpage
      message: WXMediaMessage<WXWebpageObject>
    }
  | {
      type: WxShareMediaObjectType.WXShareMiniProgram
      message: WXMediaMessage<WXMiniProgramObject>
    }
)

export const wxShare = <P = any, T extends WxShareOptions<P> = WxShareOptions<P>>(options: T) =>
  call<PickOptions<T>, WxShareOptions<P>>(
    Object.assign({ type: 1, scene: 1 }, options, {
      service: 'wxSDK',
      action: 'share',
    }),
  )
