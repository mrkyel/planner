import React, { Component } from "react";
import TodoListTemplate from "./Components/TodoListTemplate";
import TodoList from "./Components/TodoList";
import TodoInsert from "./Components/TodoInsert";
import { observer } from "mobx-react";
import globalState from "./config/mobx";

class App extends Component {
  mobx = globalState;

  handleChange = e => {
    this.mobx.input = e.target.value;
    console.log(this.mobx.input);
  };

  handleSubmit = e => {
    this.mobx.todoList = this.mobx.todoList.concat({
      id: this.mobx.id++,
      text: this.mobx.input,
      checked: false
    });
    e.preventDefault();
    this.mobx.input = "";
  };

  render() {
    return (
      <>
        <TodoListTemplate>
          <TodoInsert
            onSubmit={this.handleSubmit}
            value={this.mobx.input}
            onChange={this.handleChange}
          />
          <TodoList value={this.mobx.todoList} />
        </TodoListTemplate>
      </>
    );
  }
}

export default observer(App);
