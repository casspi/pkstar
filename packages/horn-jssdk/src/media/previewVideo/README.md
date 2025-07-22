## `jssdk.previewVideo`

> `jssdk.previewVideo(Object object)`
<br/>
> 版本无要求

### 功能描述

在新页面中全屏预览视频。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| current | string	 |  | 是 | 当前需要播放的视频路径 支持本地图片路径 |
| mute | boolean	 | 否 | 否 | 是否静音 |
| autoplay | boolean	 | 否 | 否 | 是否播放 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

### 示例代码

```js
jssdk.previewVideo({
    current: 'http://localhost/temps/1.mp4',
}).then(res => {
    // 成功
    console.log(res.filePath)
}).catch(err => {
    // 错误
})
```

