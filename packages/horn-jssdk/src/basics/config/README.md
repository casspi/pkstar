
## `jssdk.setConfig`

> `jssdk.setConfig(Object object)`
<br/>
> 版本无要求

### 功能描述

提供给 `h5` 设置应用配置。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| branch | String |  | 是 | `h5` 资源分支名 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |


### 示例代码

```js
jssdk.setConfig({
    branch: 'test',
})
```



## `jssdk.getConfig`

> `jssdk.getConfig(Object object)`
<br/>
> 版本无要求

### 功能描述

获取应用配置。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :--: | :--: | :--: | :--: | :--: |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

#### `object.success` 回调函数

| 属性 | 类型 | 说明 | 最低版本 |
| :--: | :--: | :--: | :--: |
| branch | String | `h5` 资源分支名 |  |

### 示例代码

```js
jssdk.getConfig({
    success (res) {
        console.log(res)
    }
})
```
