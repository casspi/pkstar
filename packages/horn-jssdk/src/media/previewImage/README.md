## `jssdk.previewImage`

> `jssdk.previewImage(Object object)`
<br/>
> 版本无要求

### 功能描述

在新页面中全屏预览图片。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| current | string	 |  | 否 | 当前显示图片的链接 支持本地图片路径 |
| urls | string[]	 |  | 是 | 需要预览的图片链接列表 支持本地图片路径 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

### 示例代码

```js
jssdk.previewImage({
    current: 'http://localhost/temps/1.jpg',
    urls: [
        'http://localhost/temps/1.jpg',
        'http://localhost/temps/2.jpg',
        'http://localhost/temps/3.jpg'
    ]
}).then(res => {
    // 成功
    console.log(res)
}).catch(err => {
    // 错误
})
```
