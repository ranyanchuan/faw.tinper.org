import React from "react";
import { Carousel, WingBlank } from 'antd-mobile';

class App extends React.Component{
  render(){
    return <WingBlank>
    <Carousel className="my-carousel"
      vertical
      dots={false}
      dragging={false}
      swiping={false}
      autoplay
      infinite
    >
      <div className="v-item">carousel 1</div>
      <div className="v-item">carousel 2</div>
      <div className="v-item">carousel 3</div>
    </Carousel>
    </WingBlank>
  }
}

export default App;

//@title 竖向


