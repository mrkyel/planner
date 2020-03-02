import React, { Component } from "react";
import TodoListTemplate from "./Components/TodoListTemplate";
import TodoList from "./Components/TodoList";
import TodoInsert from "./Components/TodoInsert";
import { observer } from "mobx-react";

class App extends Component {
  render() {
    return (
      <>
        <TodoListTemplate>
          <TodoInsert />
          <TodoList />
        </TodoListTemplate>
      </>
    );
  }
}

export default observer(App);
