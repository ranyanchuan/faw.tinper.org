import React, { Component } from "react";
import Demo1 from './demo/Demo1.js'
import Demo2 from './demo/Demo2.js'
import Demo3 from './demo/Demo3.js'
import Demo4 from './demo/Demo4.js'
import './demo/Demo3.less'
import './demo/Demo4.less'


class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 自定义容器</div><Demo1/></div>
<div className='demo-item'><div className='demo-item-title'> body 容器</div><Demo2/></div>
<div className='demo-item'><div className='demo-item-title'> 标题吸顶（body 容器)</div><Demo3/></div>
<div className='demo-item'><div className='demo-item-title'> 索引列表（标题吸顶）</div><Demo4/></div>
      </div>
    );
  }
}

export default Exmple;