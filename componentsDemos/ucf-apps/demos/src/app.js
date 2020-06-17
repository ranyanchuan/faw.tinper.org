/**
 * 整个应用的入口，包含路由，数据管理加载
 */

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Accordion from "./Accordion/index";
import Badge from "./Badge/index";
import Button from "./Button/index";
import Calendar from "./Calendar/index";
import Card from "./Card/index";
import Carousel from "./Carousel/index";
import Checkbox from "./Checkbox/index";
import DatePicker from "./DatePicker/index";
import DatePickerView from "./DatePickerView/index";
import Flex from "./Flex/index";
import Grid from "./Grid/index";
import Icon from "./Icon/index";
import ImagePicker from "./ImagePicker/index";
import InputItem from "./InputItem/index";
import List from "./List/index";
import ListView from "./ListView/index";
import Picker from "./Picker/index";
import PickerView from "./PickerView/index";
import Progress from "./Progress/index";
import Radio from "./Radio/index";
import Range from "./Range/index";
import SearchBar from "./SearchBar/index";
import Slider from "./Slider/index";
import Stepper from "./Stepper/index";
import Switch from "./Switch/index";
import Tag from "./Tag/index";
import TextareaItem from "./TextareaItem/index";
import WhiteSpace from "./WhiteSpace/index";
import WingBlank from "./WingBlank/index";
import "./app.less";

class App extends Component{
    render(){
        return (<div className='link'>
        <Link to="/Accordion">Accordion</Link>
<Link to="/Badge">Badge</Link>
<Link to="/Button">Button</Link>
<Link to="/Calendar">Calendar</Link>
<Link to="/Card">Card</Link>
<Link to="/Carousel">Carousel</Link>
<Link to="/Checkbox">Checkbox</Link>
<Link to="/DatePicker">DatePicker</Link>
<Link to="/DatePickerView">DatePickerView</Link>
<Link to="/Flex">Flex</Link>
<Link to="/Grid">Grid</Link>
<Link to="/Icon">Icon</Link>
<Link to="/ImagePicker">ImagePicker</Link>
<Link to="/InputItem">InputItem</Link>
<Link to="/List">List</Link>
<Link to="/ListView">ListView</Link>
<Link to="/Picker">Picker</Link>
<Link to="/PickerView">PickerView</Link>
<Link to="/Progress">Progress</Link>
<Link to="/Radio">Radio</Link>
<Link to="/Range">Range</Link>
<Link to="/SearchBar">SearchBar</Link>
<Link to="/Slider">Slider</Link>
<Link to="/Stepper">Stepper</Link>
<Link to="/Switch">Switch</Link>
<Link to="/Tag">Tag</Link>
<Link to="/TextareaItem">TextareaItem</Link>
<Link to="/WhiteSpace">WhiteSpace</Link>
<Link to="/WingBlank">WingBlank</Link>
    </div>)
    }
}

class Routers extends Component{
    render(){
        return (
            <Router path="/" >
                <div className='demo-sidebar'>
                    <Route exact path="/Accordion" component={Accordion} /> 
<Route exact path="/Badge" component={Badge} /> 
<Route exact path="/Button" component={Button} /> 
<Route exact path="/Calendar" component={Calendar} /> 
<Route exact path="/Card" component={Card} /> 
<Route exact path="/Carousel" component={Carousel} /> 
<Route exact path="/Checkbox" component={Checkbox} /> 
<Route exact path="/DatePicker" component={DatePicker} /> 
<Route exact path="/DatePickerView" component={DatePickerView} /> 
<Route exact path="/Flex" component={Flex} /> 
<Route exact path="/Grid" component={Grid} /> 
<Route exact path="/Icon" component={Icon} /> 
<Route exact path="/ImagePicker" component={ImagePicker} /> 
<Route exact path="/InputItem" component={InputItem} /> 
<Route exact path="/List" component={List} /> 
<Route exact path="/ListView" component={ListView} /> 
<Route exact path="/Picker" component={Picker} /> 
<Route exact path="/PickerView" component={PickerView} /> 
<Route exact path="/Progress" component={Progress} /> 
<Route exact path="/Radio" component={Radio} /> 
<Route exact path="/Range" component={Range} /> 
<Route exact path="/SearchBar" component={SearchBar} /> 
<Route exact path="/Slider" component={Slider} /> 
<Route exact path="/Stepper" component={Stepper} /> 
<Route exact path="/Switch" component={Switch} /> 
<Route exact path="/Tag" component={Tag} /> 
<Route exact path="/TextareaItem" component={TextareaItem} /> 
<Route exact path="/WhiteSpace" component={WhiteSpace} /> 
<Route exact path="/WingBlank" component={WingBlank} /> 
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routers/>, document.getElementById('testPhone'));