
## `jssdk.getStorage`

> `jssdk.getStorage(Object object)`
<br/>
> 版本无要求

### 功能描述

从本地缓存中异步获取指定 key 的内容。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| key | String |  | 是 | 本地缓存中指定的 key |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| data | any | key对应的内容 |  |

### 示例代码

```js
jssdk.getStorage({
    key: 'key',
}).then(res => {
    console.log(res.data)
})
```