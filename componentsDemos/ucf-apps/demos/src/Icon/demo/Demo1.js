import React from 'react'
import { Icon, Grid } from 'antd-mobile';

const list = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'loading',
];

const Demo = () => {
  const data = list.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
  }));
  return (
    <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />
  );
};

export default Demo;

//@title 基础示例
//@description 基本使用方式