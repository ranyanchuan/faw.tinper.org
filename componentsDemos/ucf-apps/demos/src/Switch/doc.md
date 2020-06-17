# 滑动开关 Switch

允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。

## 如何使用

```
import { Switch } from 'antd-mobile';

```

## 代码演示


## API

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| checked    | 是否默认选中    | Boolean       |   false  |
| disabled   | 是否不可修改    | Boolean       |   false  |
| onChange   | change 事件触发的回调函数 | (checked: bool): void |  无  |
| color | 开关打开后的颜色 | String | #4dd865 |
| name | switch 的 name    | String   |      |
| platform |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|
| onClick   | click事件触发的回调函数，当switch为disabled时，入参的值始终是默认传入的checked值。 | (checked: bool): void |  无  |



## 注意事项

暂无

## 更新日志
