
## `jssdk.chooseImage`

> `jssdk.chooseImage(Object object)`
<br/>
> 版本无要求

### 功能描述

从本地相册选择图片或使用相机拍照。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| count | Number | 9 | 否 | 最多可以选择的图片张数 |
| sizeType | Array[string] | ['original', 'compressed'] | 否 | 所选的图片的尺寸, `original` 原图 ，`compressed` 压缩|
| sourceType | Array[string] | ['album', 'camera'] | 否 | 选择图片的来源 `album` 相册中选图，`camera` 相机选图 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |


#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| tempFilePaths | Array[string] | 图片的本地临时文件路径列表 (本地路径) |  |
| tempFiles | Array[object] | 图片的本地临时文件列表 |  |


```json5
{
  "tempFilePaths": ["https://localhost/images/1.jpg", "https://localhost/images/2.jpg"],
  "tempFiles": [
    {
      "path": "https://localhost/images/1.jpg",
      "size": 1234, // 单位 字节（B）
      "width": 100,
      "height": 100
    },
    {
      "path": "https://localhost/images/2.jpg",
      "size": 1234, // 单位 字节（B）
      "width": 100,
      "height": 100
    }
  ]
}
```

### 示例代码

```js
jssdk.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
}).then(res => {
    // tempFilePaths 可以作为 img 标签的 src 属性显示图片
    const tempFilePaths = res.tempFilePaths
})
```
