
## `jssdk.addPhoneContact`

> `jssdk.addPhoneContact(Object object)`
<br/>
> 版本无要求

### 功能描述

添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| name | String |  | 是 | 名字 |
| phoneNumber | String |  | 是 | 手机号 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |


### 示例代码

```js
jssdk.chooseContact({
    name: '张三',
    phoneNumber: '13111111111',
})
```
