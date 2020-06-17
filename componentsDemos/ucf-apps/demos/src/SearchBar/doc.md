# 搜索栏 SearchBar

一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。

## 如何使用

```
import { SearchBar } from 'antd-mobile';

```

## 代码演示


## API

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| defaultValue |    搜索框的默认值     | String |    |
| value      |  搜索框的当前值  | String |    |
| placeholder    |    placeholder     | String |    |
| onSubmit    |  submit 事件 (点击键盘的 enter)  | (val: string): void |    |
| onChange    |    change 事件的回调     | (val: string): void |    |
| onFocus    |    focus 事件的回调     | (): void |    |
| onBlur    |    blur 事件的回调     | (): void |    |
| onCancel  | 点击`取消`按钮触发 (不再自动清除输入框的文字) | (val: string): void |    |
| showCancelButton    |    是否一直显示`取消`按钮     | bool |  `false`  |
| cancelText    |   定制`取消`按钮的文字     | String |  `取消`  |
| disabled    |  设置禁用   | bool |  `false`  |
| onClear    |    点击 clear 图标触发  | (val: string): void |    |
| maxLength      |  最多允许输入的字符个数    | number | -  |


### SearchBar Instance methods

|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| focus     | 使 SearchBar 聚焦  | (): void |  -  |


## 注意事项

RN 版本更多 API 请参考 [http://facebook.github.io/react-native/docs/textinput.html](http://facebook.github.io/react-native/docs/textinput.html)

## 更新日志
