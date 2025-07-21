## `jssdk.launchWxMiniProgram`

> `jssdk.launchWxMiniProgram(Object object)` <br/> 版本无要求

### 功能描述

打开微信小程序。

### 参数

#### `Object object`

|      属性       |  类型  | 默认值 | 必填 |                    说明                    |
| :-------------: | :----: | :----: | :--: | :----------------------------------------: |
|      appId      | string |        |  是  | 填移动应用(App)的 AppId，非小程序的 AppID  |
|    userName     | string |        |  是  |               小程序原始 id                |
|      path       | string |        |  是  |                 小程序路径                 |
| miniprogramType | number |        |  是  | 小程序版本（0-正式版，1-开发版，2-体验版） |

### 示例代码

```js
jssdk.launchWxMiniProgram({
  appId: 'xxx',
  userName: 'xx',
  path: 'home/index?a=1',
  miniprogramType: 0,
})
```
