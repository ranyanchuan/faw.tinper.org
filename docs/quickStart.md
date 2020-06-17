# 快速开始

&nbsp;&nbsp;antd-mobile 组件库 致力于提供给程序员愉悦快速的开发体验。



## 一、安装 antd-mobile
可使用 npm、cnpm、yarn 以及 ynpm 来安装组件库以及组件。

```
ynpm install --save antd-mobile
```

## 二、项目中使用 antd-mobile

为了方便用户单独处理样式和js文件，所以我们对js和css进行了单独的打包。

```js
import React,{ Component } from 'react';

//antd-mobile 组件库js引用
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

//antd-mobile 组件库 css 引用
import 'antd-mobile/dist/antd-mobile.css';

//项目样式
import './index.less';

class Example extends Component{
  constructor(props) {
   super(props);
 }

  render(){
    return (
    <WingBlank>
      <Button>default</Button>
    </WingBlank>)
  }
}

export default Example；

```



## 三、使用CDN

[版本号查阅](http://mobile.tinper.org/antd-mobile/changelog)

- css样式

```js
//引入指定版本号
<link href="//design.yonyoucloud.com/static/antd-mobile/[版本号]/antd-mobile.css">

//始终引入最新版本
<link href="//design.yonyoucloud.com/static/antd-mobile/antd-mobile.css">
```

- js

```js
//始终引入最新版本
<script src="//design.yonyoucloud.com/static/antd-mobile/[版本号]/antd-mobile.js"></script>

//引入指定版本号
<script src="//design.yonyoucloud.com/static/antd-mobile/antd-mobile.js"></script>

```

并且，在你的webpack处，配置

```
externals: {
   'antd-mobile': 'AntdMobile'
}
```
