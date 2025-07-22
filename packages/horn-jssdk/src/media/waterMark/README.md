## `jssdk.waterMark`

> `jssdk.waterMark(Object object)`
<br/>
> 版本无要求

### 功能描述

图片增加水印功能

### 参数

#### `Object object`

|   属性   |                                  类型                                  | 默认值 | 必填 |          说明          |
| :------: | :--------------------------------------------------------------------: | :----: | :--: | :--------------------: |
| filePath |                                 string                                 |        |  是  |        文件路径        |
|   text   |                                 string                                 |        |  是  |          文案          |
| fontSize |                                 number                                 |   20   |  是  |        字体大小        |
|  color   |                                 string                                 |        |  是  |          色值          |
| padding  |                                 number                                 |   30   |  否  |          边距          |
| position | 'left-top' 、 'right-top' 、'right-bottom'、 'left-bottom' 、 'center' | center |  否  |        文件路径        |
| success  |                                Function                                |        |  否  | 接口调用成功的回调函数 |
|   fail   |                                Function                                |        |  否  | 接口调用失败的回调函数 |

#### `object.success` 回调函数

|   属性   |  类型  |   说明   | 最低版本 |
| :------: | :----: | :------: | :------: |
| filePath | string | 本地路径 |          |

```json5
{
	filePath: 'https://localhost/images/1.jpg',
}
```

### 示例代码

```js
jssdk
	.waterMark({
		filePath: 'https://localhost/images/1.jpg',
	})
	.then((res) => {
		// filePath 可以作为 img 标签的 src 属性显示图片
		const filePath = res.filePath
	})
```