# mobile.tinper.org

移动组件库官网

## demo规范

- `//@title` 为demo标题，不可换行
- `//@description` 为demo简单描述，不可换行
- `//@title` 和 `//@description` 建议写到demojs最底部

## doc.md 规范

```
# 图标 Icon // 1、标题，文字+空格+组件名称

图标  //2、描述


## 如何使用 //3、下边写如何引入等


import { Icon } from 'antd-mobile';

<Icon type="check" />



## 代码演示 //4、下边内容不写，用于展示demo


## API //5、下边写 API，以表格形式。 可增加 三级标题


|属性 | 说明 | 类型 | 默认值
|----|-----|------|------
| type    |   内置 icon 名称   | String   |
| size    |   图标大小    | 'xxs'/'xs'/'sm'/'md'/'lg'  | `md` |
| color   | 图标颜色  | Color | '#000' |



## 注意事项 // 可选项

暂无

## 更新日志 // 可选项


```

## 如何发布官网

- 1、组件demo修改完成之后，在 `componentsDemos` 目录下执行 `npm run build `产出dist目录
- 2、提交代码，执行流水线