import React, { Component } from "react";
import { WingBlank, WhiteSpace } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const WingBlankExample = () => (
  <div style={{ padding: '15px 0' }}>
    <WingBlank><PlaceHolder /></WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="md"><PlaceHolder /></WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="sm"><PlaceHolder /></WingBlank>
  </div>
);

export default WingBlankExample;

//@title 基础示例
//@description 基本使用方式