import React, { Component } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import globalState from "../config/mobx";
import { observer } from "mobx-react";
import { decorate, action } from "mobx";

class TodoListItem extends Component {
  mobx = globalState;

  onRemove = (id) => {
    console.log(id);
    console.log(this.mobx.todoList.filter((todo) => todo.id !== id));
    this.mobx.todoList = this.mobx.todoList.filter((todo) => todo.id !== id);
  };

  onToggle = (id) => {
    console.log(id);
    this.mobx.todoList = this.mobx.todoList.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
  };

  render() {
    return (
      <div className="TodoListItem">
        {this.props.todo.checked ? (
          <div className="checkBox checked">
            <MdCheckBox onClick={() => this.onToggle(this.props.todo.id)} />
            <div className="text">{this.props.todo.text}</div>
          </div>
        ) : (
          <div className="checkBox">
            <MdCheckBoxOutlineBlank
              onClick={() => this.onToggle(this.props.todo.id)}
            />
            <div className="text">{this.props.todo.text}</div>
          </div>
        )}
        <div
          className="remove"
          onClick={() => this.onRemove(this.props.todo.id)}
        >
          <MdRemoveCircleOutline />
        </div>
      </div>
    );
  }
}

decorate(TodoListItem, {
  onRemove: action,
  onToggle: action,
});

export default observer(TodoListItem);
