## `jssdk.wxShare`

> `jssdk.wxShare(Object object)` <br/> 版本无要求

### 功能描述

分享微信好友、朋友圈。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| type | number | 1 | 是 | 消息类型:WXShareText = 1,WXShareImage = 2,WXShareVideo = 3,WXShareFile = 4,WXShareWebpage = 5,WXShareMiniProgram = 6, |
| scene | number | 1 | 是 | 目标场景:WXSceneSession=0(分享到对话),WXSceneTimeline=1(分享到朋友圈)，WXSceneFavorite=2(分享到收藏) |
| message | WXMediaMessage |  | 是 | 消息内容 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

##### `消息内容，WXMediaMessag`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| title | string |  | 是 | 消息标题 |
| description | string |  | 否 | 消息描述 |
| thumbData | string[] |  | 视频、文件必填，其他非必填 | 缩略图(支持本地、网络、base64 图片) |
| mediaObject | WXTextObject、 WXImageObject、 WXVideoObject、WXFileObject、 WXWebpageObject、 WXMiniProgramObject |  | 是 | 消息内容 |

##### `文字类型分享,WXTextObject`

| 属性 |  类型  | 默认值 | 必填 |   说明   |
| :--: | :----: | :----: | :--: | :------: |
| text | string |        |  是  | 文本数据 |

##### `图片类型,WXImageObject`

|   属性    |   类型   | 默认值 | 必填 |                  说明                   |
| :-------: | :------: | :----: | :--: | :-------------------------------------: |
| imageData | string[] |        |  是  | 图片地址（支持本地、网络、base64 图片） |

##### `视频类型,WXVideoObject`

|   属性   |  类型  | 默认值 | 必填 |   说明   |
| :------: | :----: | :----: | :--: | :------: |
| videoUrl | string |        |  是  | 视频链接 |

##### `文件类型,WXFileObject`

|     属性      |  类型  | 默认值 | 必填 |   说明   |
| :-----------: | :----: | :----: | :--: | :------: |
| fileExtension | string |        |  是  | 文件后缀 |
|   filePath    | string |        |  是  | 文件路径 |

##### `网页类型,WXWebpageObject`

|    属性    |  类型  | 默认值 | 必填 |   说明   |
| :--------: | :----: | :----: | :--: | :------: |
| webpageUrl | string |        |  是  | 网页链接 |

##### `小程序类型,WXMiniProgramObject`

|      属性       |  类型   | 默认值 | 必填 |             说明              |
| :-------------: | :-----: | :----: | :--: | :---------------------------: |
|   webpageUrl    | string  |        |  否  |     兼容低版本的网页链接      |
|    userName     | string  |        |  是  |         小程序的原始          |
|      path       | string  |        |  是  |         小程序的 path         |
| withShareTicket | boolean |        |  是  | 是否使用带 shareTicket 的分享 |
| miniprogramType | number  |        |  是  |          小程序版本           |

### 示例代码

```js
jssdk.wxShare({
  scene: 1,
  type: 1,
  message: {
    title: '标题111',
    thumbData: ['base64xxxxxxx'],
    mediaObject: {
      text: '文本内容',
    },
  },
})
```
