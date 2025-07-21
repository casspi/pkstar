## `jssdk.request`

> `jssdk.request(Object object)` <br/> 版本无要求

### 功能描述

发起 `HTTP`、`HTTPS` 网络请求。

### 参数

#### `Object object`

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| url | String |  | 是 | 服务器接口地址 |
| data | String/Object/ArrayBuffer |  | 否 | 请求的参数 |
| header | Object |  | 否 | 设置请求的 header，`content-type` 默认为 `application/json` |
| timeout | Number | `60000` | 否 | 超时时间，单位为毫秒 |
| method | String | `GET` | 否 | HTTP 请求方法 [详细](/02_容器/02_API/02_网络.html#method-http-请求方法) |
| dataType | String | `json` | 否 | 返回的数据格式 |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |

##### `method` HTTP 请求方法

- `OPTIONS` HTTP 请求 OPTIONS
- `GET` HTTP 请求 GET
- `HEAD` HTTP 请求 HEAD
- `POST` HTTP 请求 POST
- `PUT` HTTP 请求 PUT
- `DELETE` HTTP 请求 DELETE
- `TRACE` HTTP 请求 TRACE
- `CONNECT` HTTP 请求 CONNECT

#### `object.success` 回调函数

| 属性 |           类型            |       说明       | 最低版本 |
| :--: | :-----------------------: | :--------------: | :------: |
| data | String/Object/Arraybuffer | 服务器返回的数据 |          |

#### `object.fail` 回调函数

|  属性  |           类型            |   说明   |        最低版本        |
| :----: | :-----------------------: | :------: | :--------------------: |
| errMsg | String/Object/Arraybuffer | 错误信息 |                        |
| errno  |          Number           |  错误码  | **错误码详情设计待定** |

### 示例代码

```js
jssdk.request({
  success(res) {
    console.log(res.data)
  },
})
```
