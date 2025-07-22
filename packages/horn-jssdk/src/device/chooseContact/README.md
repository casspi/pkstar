
## `jssdk.chooseContact`

> `jssdk.chooseContact(Object object)`
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
| phoneNumber | string | 手机号 |  |
| displayName | string | 联系人姓名 |  |
| phoneNumberList | string | 选定联系人的所有手机号（部分 Android 系统只能选联系人而不能选特定手机号） |  |

### 示例代码

```js
jssdk.chooseContact().then(res => {
    const phoneNumber = res.phoneNumber
})
```
