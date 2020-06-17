import React from 'react'
import { Icon, Grid } from 'antd-mobile';

//@title 大小示例

const Demo = () => {
  const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
  const data = size.map(item => ({
    icon: (<Icon type="search" size={item} />),
    text: item,
  }));
  return (<Grid data={data} columnNum={5} hasLine={false} activeStyle={false} />);
};

export default Demo;