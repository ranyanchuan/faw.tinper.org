import React, { Component } from "react";
import { DatePickerView } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';

class DatePickerViewExample extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };
  onValueChange = (...args) => {
    console.log(args);
  };
  render() {
    return (<div>
      <div className="sub-title">Start datetime</div>
      <DatePickerView
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
      <div className="sub-title">End datetime</div>
      <DatePickerView
        locale={enUs}
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
    </div>);
  }
}

export default DatePickerViewExample;

//@title 基础示例
//@description 基本使用方式