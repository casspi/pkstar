## `jssdk.closePage`

> `jssdk.closePage(Object object)` 

<br/> 版本无要求

### 功能描述

关闭新BOS页面，回退到老BOS

```js
{
  service: 'basics',
  action: 'closePage',
}
```

### 参数

#### `Object object`

| 属性  |  类型  | 默认值 | 必填 |                         说明                          |
| :---: | :----: | :----: | :--: | :---------------------------------------------------: |
| delta | number |   1    |  否  | 返回的页面数，如果 delta 大于现有页面数，则返回到首页 |

### 示例代码

```js
jssdk.closePage()
```
