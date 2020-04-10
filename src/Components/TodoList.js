import React, { Component } from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";
import { observer } from "mobx-react";
import globalState from "../config/mobx";

class TodoList extends Component {
  mobx = globalState.todoList;

  render() {
    return (
      <div className="TodoList">
        {this.props.value.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onToggle={this.props.onToggle}
          />
        ))}
      </div>
    );
  }
}

export default observer(TodoList);
