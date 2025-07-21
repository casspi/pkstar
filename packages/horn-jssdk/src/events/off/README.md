
## `jssdk.off`

> `jssdk.off(Object object)`
<br/>
> 版本无要求

### 功能描述

事件取消。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| name | string |  | 是 | 事件名称 |
| key | string |  | 否 | 事件回调标识 |

### 示例代码

```js
// 取消单个
jssdk.off({
    name: 'hello',
    key: '1'
})

// 取消全部
jssdk.off({ name: 'hello world' })
```