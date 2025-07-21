
## `jssdk.saveVideoToPhotosAlbum`

> `jssdk.saveVideoToPhotosAlbum(Object object)`
<br/>
> 版本无要求

### 功能描述

保存视频到系统相册。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| filePath | string |  | 是 | 视频文件路径(本地路径) ，不支持网络路径 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |


### 示例代码

```js
jssdk.saveVideoToPhotosAlbum({
    filePath: 'https://localhost/1.mp4',
}).then(() => {
    console.log('成功')
})
```