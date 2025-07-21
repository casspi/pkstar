## `jssdk.getSystemInfo`

> `jssdk.getSystemInfo(Object object)` <br/> 版本无要求

### 功能描述

获取系统信息。

### 参数

#### `Object object`

|  属性   |   类型   | 默认值 | 必填 |          说明          |
| :-----: | :------: | :----: | :--: | :--------------------: |
| success | function |        |  否  | 接口调用成功的回调函数 |
|  fail   | function |        |  否  | 接口调用失败的回调函数 |

#### `object.success` 回调函数

|      属性      |  类型  |             说明             | 最低版本 |
| :------------: | :----: | :--------------------------: | :------: |
|     brand      | string |           设备品牌           |          |
|     model      | string |           设备型号           |          |
|    version     | string |          容器版本号          |          |
|     system     | string |        操作系统及版本        |          |
|    platform    | string | 客户端平台 `ios` 、`android` |          |
|      imei      | string |      国际移动设备识别码      |          |
|      mac       | string |           mac 地址           |          |
|    deviceId    | string |           设备 ID            |          |
|    bundleId    | string |          app 包 Id           |          |
| appVersionCode | string |        app 版本 code         |          |
| appVersionName | string |        app 版本 name         |          |

**注：** 设备信息这块涉及到用户隐私，[点我查看兼容](https://zhuanlan.zhihu.com/p/395387972)

### 示例代码

```js
jssdk.getSystemInfo({
  success(res) {
    console.log(res.model)
  },
})
```

`or`

```js
jssdk
  .getSystemInfo()
  .then((res) => {
    console.log(res.model)
  })
  .catch((err) => {})
```
