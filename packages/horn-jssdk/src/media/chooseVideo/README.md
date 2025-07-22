
## `jssdk.chooseVideo`

> `jssdk.chooseVideo(Object object)`
<br/>
> 版本无要求

### 功能描述

拍摄视频或从手机相册中选视频。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| count | Number | 9 | 否 | 最多可以选择的视频数 |
| compressed | boolean | true | 否 | 是否压缩 (暂未实现)|
| maxDuration | Number | 60 | 否 | 拍摄视频最长拍摄时间，单位秒 |
| sourceType | Array[string] | ['album', 'camera'] | 否 | 选择视频的来源 `album` 相册中选择，`camera` 相机拍摄 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |


#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| tempFilePaths | Array[string] | 视频的本地临时文件路径列表 (本地路径) |  |
| tempFiles | Array[object] | 视频的本地临时文件列表 |  |


```json5
{
  "tempFilePaths": ["https://localhost/videos/1.mp4", "https://localhost/videos/2.mp4"],
  "tempFiles": [
    {
      "path": "https://localhost/videos/1.mp4",
      "size": 1234, // 单位 字节（B）
      "duration": 100, // 秒
      "width": 100,
      "height": 100,
      "cover": "https://localhost/images/1.jpg" // 视频第一帧图片
    },
    {
      "path": "https://localhost/videos/2.mp4",
      "size": 1234, // 单位 字节（B）
      "duration": 100, // 秒
      "width": 100,
      "height": 100,
      "cover": "https://localhost/images/2.jpg" // 视频第一帧图片
    },
  ]
}
```

### 示例代码

```js
jssdk.chooseVideo({
    sourceType: ['album', 'camera'],
}).then(res => {
    // tempFilePaths 可以作为 vidoe 标签的 src 属性
    const tempFilePaths = res.tempFilePaths
})
```
