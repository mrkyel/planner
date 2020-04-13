import React, { Component } from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";
import { observer } from "mobx-react";
import globalState from "../config/mobx";

class TodoList extends Component {
  mobx = globalState;

  render() {
    return (
      <div className="TodoList">
        {this.mobx.todoList.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </div>
    );
  }
}

export default observer(TodoList);
