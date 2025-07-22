## `jssdk.openDocument`

> `jssdk.openDocument(Object object)`
<br/>
> 版本无要求

### 功能描述

调用手机第三方应用打开文档。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| filePath | string	 |  | 是 | 文件路径仅支持本地路径 |
| fileType | string	 |  | 是 | 文件类型，指定文件类型打开文件 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

fileType: 
- doc	doc 格式
- docx	docx 格式
- xls	xls 格式
- xlsx	xlsx 格式
- ppt	ppt 格式
- pptx	pptx 格式
- pdf	pdf 格式

### 示例代码

```js
jssdk.openDocument({
    fileType: 'ppt',
    filePath: 'http://localhost/temps/1.ppt',
}).then(res => {
    // 成功
}).catch(err => {
    // 错误
})
```