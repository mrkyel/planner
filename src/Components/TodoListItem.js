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
    return (
      <div className="TodoListItem">
        {this.props.todo.checked ? (
          <div className="checkBox checked" onClick={this.props.onToggle}>
            <MdCheckBox />
            <div className="text">{this.props.todo.text}</div>
          </div>
        ) : (
          <div className="checkBox" onClick={this.props.onToggle}>
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
