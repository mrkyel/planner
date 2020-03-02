import React, { Component } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";
import "./TodoListItem.scss";
import globalState from "../config/mobx";
import { observer } from "mobx-react";

class TodoListItem extends Component {
  mobx = globalState.todoList;

  render() {
    console.log(this.props.todo.checked);
    return (
      <div className="TodoListItem">
        {this.props.todo.checked ? (
          <div className="checkBox checked">
            <MdCheckBox />
            <div className="text">{this.props.todo.text}</div>
          </div>
        ) : (
          <div className="checkBox">
            <MdCheckBoxOutlineBlank />
            <div className="text">{this.props.todo.text}</div>
          </div>
        )}
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </div>
    );
  }
}

export default observer(TodoListItem);
