import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      {checked ? (
        <div className="checkBox checked">
          <MdCheckBox onClick={() => onToggle(id)} />
          <div className="text">{text}</div>
        </div>
      ) : (
        <div className="checkBox">
          <MdCheckBoxOutlineBlank onClick={() => onToggle(id)} />
          <div className="text">{text}</div>
        </div>
      )}
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
