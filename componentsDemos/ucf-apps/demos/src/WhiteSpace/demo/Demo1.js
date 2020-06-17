import React, { Component } from "react";
import { WhiteSpace } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const WhiteSpaceExample = () => (
  <div>
    <WhiteSpace size="xs" />
    <PlaceHolder />
    <WhiteSpace size="sm" />
    <PlaceHolder />
    <WhiteSpace />
    <PlaceHolder />
    <WhiteSpace size="lg" />
    <PlaceHolder />
    <WhiteSpace size="xl" />
    <PlaceHolder />
  </div>
);

export default WhiteSpaceExample;

//@title 基础示例
//@description 基本使用方式