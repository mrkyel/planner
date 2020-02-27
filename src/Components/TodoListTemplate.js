import React, { Component } from "react";
import "./TodoListTemplate.scss";

class TodoListTemplate extends Component {
  render() {
    return (
      <>
        <div className="wrapper-top">오늘 해야함</div>
        <div className="wrapper-down">할일들</div>
      </>
    );
  }
}

export default TodoListTemplate;
