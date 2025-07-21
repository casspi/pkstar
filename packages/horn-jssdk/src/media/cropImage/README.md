## `jssdk.cropImage`

> `jssdk.cropImage(Object object)`
<br/>
> 版本无要求

### 功能描述

图片按比例裁剪

### 参数

#### `Object object`

|    属性     |   类型   | 默认值 | 必填 |          说明          |
| :---------: | :------: | :----: | :--: | :--------------------: |
|  filePath   |  string  |        |  是  |        文件路径        |
| widthRatio  |  number  |        |  是  |         宽度比         |
| heightRatio |  number  |        |  是  |         高度比         |
|   success   | Function |        |  否  | 接口调用成功的回调函数 |
|    fail     | Function |        |  否  | 接口调用失败的回调函数 |

#### `object.success` 回调函数

|   属性   |  类型  | 说明 | 最低版本 |
| :------: | :----: | :--: | :------: |
| filePath | string | 路径 |          |

```json5
{
	filePath: 'https://localhost/images/1.jpg',
}
```

### 示例代码

```js
jssdk.cropImage({
  filePath: 'https://localhost/images/1.jpg',
}).then((res) => {
  // filePath 可以作为 img 标签的 src 属性显示图片
  const filePath = res.filePath
})
```