import { observable } from "mobx";

const globalState = observable({
  input: "",
  todoList: [
    {
      id: 1,
      text: "직접 만들어보자",
      checked: true
    },
    {
      id: 2,
      text: "리액트 왜케어렵냐",
      checked: true
    },
    {
      id: 3,
      text: "몹엑스는 또 왜이리 어렵지",
      checked: false
    }
  ],
  id: 4
});

export default globalState;
