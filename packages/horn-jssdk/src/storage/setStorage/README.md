
## `jssdk.setStorage`

> `jssdk.setStorage(Object object)`
<br/>
> 版本无要求

### 功能描述

将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| key | String |  | 是 | 本地缓存中指定的 key |
| data | any |   | 是 | 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

### 示例代码

```js
jssdk.setStorage({
    key: 'key',
    data: 'value'
})
```
