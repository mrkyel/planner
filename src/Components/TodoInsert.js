import React, { Component } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";
import { observer } from "mobx-react";
import globalState from "../config/mobx";

class TodoInsert extends Component {
  mobx = globalState;

  handleChange = (e) => {
    this.mobx.input = e.target.value;
    console.log(this.mobx.input);
  };

  handleSubmit = (e) => {
    this.mobx.todoList = this.mobx.todoList.concat({
      id: this.mobx.id++,
      text: this.mobx.input,
      checked: false,
    });
    e.preventDefault();
    this.mobx.input = "";
  };

  render() {
    return (
      <form
        className="TodoInsert"
        onSubmit={this.handleSubmit}
        value={this.mobx.input}
      >
        <input
          placeholder="할 일을 입력하세요"
          onChange={this.handleChange}
          value={this.mobx.input}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    );
  }
}

export default observer(TodoInsert);
