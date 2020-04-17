import React, { useCallback } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert, input, changeInput }) => {
  const handleChange = (e) => changeInput(e.target.value);

  const handleSubmit = useCallback(
    (e) => {
      onInsert(input);
      changeInput("");
      e.preventDefault();
    },
    [onInsert, changeInput, input]
  );

  return (
    <form className="TodoInsert" onSubmit={handleSubmit} value={input}>
      <input
        placeholder="할 일을 입력하세요"
        onChange={handleChange}
        value={input}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
