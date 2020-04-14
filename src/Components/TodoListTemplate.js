import React from "react";
import "./TodoListTemplate.scss";

const TodoListTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="wrapper-top">오늘 해야함</div>
      <div className="wrapper-down">{children}</div>
    </div>
  );
};

export default TodoListTemplate;
