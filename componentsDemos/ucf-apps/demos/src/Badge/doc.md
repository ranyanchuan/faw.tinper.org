# 徽标数 Badge

图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。


## 如何使用

```
import { Badge } from 'antd-mobile';

```

## 代码演示


## API


|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
|size | 大小，可选 `large` `small` | string | `small`
|text | 展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为 ${overflowCount}+，为 0 时隐藏 | ||string\|number | -
|corner | 置于角落 | boolean | `false`
|dot | 不展示数字，只有一个小红点 | boolean | `false`
|overflowCount | 展示封顶的数字值 | number | `99`
|hot | 营销样式 | boolean | `false`



## 注意事项

暂无

## 更新日志
