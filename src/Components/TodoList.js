import React, { Component } from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";
import { observer } from "mobx-react";
import globalState from "../config/mobx";

class TodoList extends Component {
  mobx = globalState.todoList;

  onToggle = id => {
    console.log(this.props.id);
    console.log(
      this.props.value.map(todo => (todo.id === id ? alert("dtd") : null))
    );
  };

  render() {
    return (
      <div className="TodoList">
        {this.props.value.map(todo => (
          <TodoListItem todo={todo} key={todo.id} onToggle={this.onToggle} />
        ))}
      </div>
    );
  }
}

export default observer(TodoList);
