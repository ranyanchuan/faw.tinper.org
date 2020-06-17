import React, { Component } from "react";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Test extends Component{
  render(){
    return <div>
    <WhiteSpace size="lg" />
    <Card full>
      <Card.Header
        title="This is title"
        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        extra={<span>this is extra</span>}
      />
      <Card.Body>
        <div>This is content of `Card`</div>
      </Card.Body>
      <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
    </Card>
  </div>
  }
}

export default Test;

//@title 通栏
//@description Card 通栏样式
