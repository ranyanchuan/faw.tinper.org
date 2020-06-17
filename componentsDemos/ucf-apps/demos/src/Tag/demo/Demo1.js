import React, { Component } from "react";
import { Tag } from 'antd-mobile';

function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}

const TagDemo = () => (
  <div className="tag-container">
    <Tag data-seed="logId">Basic</Tag>
    <Tag selected>Selected</Tag>
    <Tag disabled>Disabled</Tag>
    <Tag onChange={onChange}>Callback</Tag>
    <Tag closable
      onClose={() => {
        console.log('onClose');
      }}
      afterClose={() => {
        console.log('afterClose');
      }}
    >
      Closable
    </Tag>
    <Tag small>Small and Readonly</Tag>
  </div>
);

export default TagDemo;

//@title 基础示例
//@description 基本使用方式