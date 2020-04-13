import React, { Component } from "react";
import TodoListTemplate from "./Components/TodoListTemplate";
import TodoList from "./Components/TodoList";
import TodoInsert from "./Components/TodoInsert";
import { observer } from "mobx-react";
import globalState from "./config/mobx";

class App extends Component {
  mobx = globalState;

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
