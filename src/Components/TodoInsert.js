import React, { Component } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";
import { observer } from "mobx-react";

class TodoInsert extends Component {
  render() {
    return (
      <form
        className="TodoInsert"
        onSubmit={this.props.onSubmit}
        value={this.props.value}
      >
        <input
          placeholder="할 일을 입력하세요"
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    );
  }
}

export default observer(TodoInsert);
