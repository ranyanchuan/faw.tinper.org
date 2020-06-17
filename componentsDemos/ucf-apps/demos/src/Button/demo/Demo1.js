import React, { Component } from "react";
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

class ButtonExample extends Component{
    render(){
        return (
        <WingBlank>
          <Button>default</Button>
          <Button disabled>default disabled</Button>
          <Button type="primary">primary</Button>
          <Button type="primary" disabled>primary disabled</Button>
          <Button type="warning">warning</Button>
          <Button type="warning" disabled>warning disabled</Button>
          <Button loading>loading button</Button>
          <Button icon="check-circle-o">with icon</Button>
          <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button>
          <Button icon="check-circle-o" inline size="small" style={{ marginRight: '4px' }}>with icon and inline</Button>
          <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
          <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
          <Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">inline ghost</Button>
          <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button>
          <Button type="primary" inline size="small" disabled>primary disabled</Button>
          <Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</Button>
          <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost disabled</Button>
      </WingBlank>)
    }
}
export default ButtonExample;

//@title 基础示例
//@description 基本使用方式