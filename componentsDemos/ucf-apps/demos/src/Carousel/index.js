import React, { Component } from "react";
import Demo1 from './demo/Demo1.js'
import Demo2 from './demo/Demo2.js'
import Demo3 from './demo/Demo3.js'
import Demo4 from './demo/Demo4.js'
import Demo5 from './demo/Demo5.js'
import Demo6 from './demo/Demo6.js'



class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 基础示例</div><Demo1/></div>
<div className='demo-item'><div className='demo-item-title'> 子元素数量变化</div><Demo2/></div>
<div className='demo-item'><div className='demo-item-title'> 带间距</div><Demo3/></div>
<div className='demo-item'><div className='demo-item-title'> 带间距</div><Demo4/></div>
<div className='demo-item'><div className='demo-item-title'> 竖向</div><Demo5/></div>
<div className='demo-item'><div className='demo-item-title'> 抽奖</div><Demo6/></div>
      </div>
    );
  }
}

export default Exmple;