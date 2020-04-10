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
  mobx = globalState.todoList;

  onRemove = (id) => {
    console.log(id);
    console.log(this.mobx.filter((todo) => todo.id !== id));
    this.mobx = this.mobx.filter((todo) => todo.id !== id);
  };

  render() {
    return (
      <div className="TodoListItem">
        {this.props.todo.checked ? (
          <div className="checkBox checked">
            <MdCheckBox
              onClick={() => this.props.onToggle(this.props.todo.id)}
            />
            <div className="text">{this.props.todo.text}</div>
          </div>
        ) : (
          <div className="checkBox">
            <MdCheckBoxOutlineBlank
              onClick={() => this.props.onToggle(this.props.todo.id)}
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
});

export default observer(TodoListItem);
