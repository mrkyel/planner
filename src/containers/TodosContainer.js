import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import TodoInsert from "../Components/TodoInsert";
import TodoListTemplate from "../Components/TodoListTemplate";
import TodoList from "../Components/TodoList";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <TodoListTemplate>
      <TodoInsert onInsert={insert} input={input} changeInput={changeInput} />
      <TodoList todos={todos} onRemove={remove} onToggle={toggle} />
    </TodoListTemplate>
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
