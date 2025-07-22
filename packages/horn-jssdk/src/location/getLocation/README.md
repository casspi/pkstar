
## `jssdk.getLocation`

> `jssdk.getLocation(Object object)`
<br/>
> 版本无要求

### 功能描述

拉起手机通讯录，选择联系人。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| latitude | number | 纬度，范围为 -90~90，负数表示南纬 |  |
| longitude | number | 经度，范围为 -180~180，负数表示西经 |  |

### 示例代码

```js
jssdk.getLocation().then(res => {
    console.log(res)
})
```
