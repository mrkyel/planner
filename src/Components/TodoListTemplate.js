import React, { Component } from "react";
import "./TodoListTemplate.scss";
import { observer } from "mobx-react";

class TodoListTemplate extends Component {
  render() {
    return (
      <div className="TodoTemplate">
        <div className="wrapper-top">오늘 해야함</div>
        <div className="wrapper-down">{this.props.children}</div>
      </div>
    );
  }
}

export default observer(TodoListTemplate);
