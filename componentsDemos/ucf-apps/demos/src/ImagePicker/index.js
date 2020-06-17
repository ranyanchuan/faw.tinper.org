import React, { Component } from "react";
import Demo1 from './demo/Demo1.js'
import Demo2 from './demo/Demo2.js'
import Demo3 from './demo/Demo3.js'
import Demo4 from './demo/Demo4.js'



class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 基本示例</div><Demo1/></div>
<div className='demo-item'><div className='demo-item-title'> 自定义选择图片的方法</div><Demo2/></div>
<div className='demo-item'><div className='demo-item-title'> 自定义文件类型</div><Demo3/></div>
<div className='demo-item'><div className='demo-item-title'> 自定义数量</div><Demo4/></div>
      </div>
    );
  }
}

export default Exmple;