
## `jssdk.chooseDocument`

> `jssdk.chooseDocument(Object object)`
<br/>
> 版本无要求

### 功能描述

从本地选项文件。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| count | Number | 1 | 否 | 最多可以选择的文件数 |
| fileTypes | Array[string] | 否 | 文件类型 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |


#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| tempFilePaths | Array[string] | 图片的本地临时文件路径列表 (本地路径) |  |
| tempFiles | Array[object] | 图片的本地临时文件列表 |  |

fileTypes
```
('doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'pdf')[]
```

```json5
{
  "tempFilePaths": ["https://localhost/images/1.jpg", "https://localhost/images/2.jpg"],
  "tempFiles": [
    {
      "path": "https://localhost/images/1.jpg",
      "size": 1234, // 单位 字节（B）
    },
    {
      "path": "https://localhost/images/2.jpg",
      "size": 1234, // 单位 字节（B）
    }
  ]
}
```

### 示例代码

```js
jssdk.chooseDocument({
    count: 1,
    fileTypes: ['pdf']
}).then(res => {
    // tempFilePaths 可以作为 img 标签的 src 属性显示图片
    const tempFilePaths = res.tempFilePaths
})
```
