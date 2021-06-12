import React, { useEffect, useState } from "react";
import { TodoItem } from "./todoitem";
let active = false;
let data = [
  ["Hello World", false],
  ["Hy Wrold", false],
  ["How are you", false],
];

function App(props) {
  let add = 1;
  if (props.data && !active) {
    active = true;
    add++;
    data = props.data;
    console.log(props.data, add, active);
  }
  const [todos, setTodo] = useState(data);

  const [inputText, setInputText] = useState("");

  console.log(add, active);
  //! Change Text of Input
  const changeText = (e) => {
    const { value } = e.target;
    setInputText(value);
  };
  // !Add todo to todos Arrays
  const addTodo = () => {
    inputText &&
      setTodo((prevTodo) => {
        return [...prevTodo, [inputText, false]];
      });
    // saveLocalStorage();

    setInputText("");
  };

  //! Mark line Through todo ITem
  const linethrough = (item) => {
    setTodo((prevTodo) => {
      prevTodo[item][1] = !prevTodo[item][1];
      return [...prevTodo];
    });
    // saveLocalStorage();
  };
  //! Remove Completed One
  const removeCompleted = (item) => {
    setTodo((prevTodo) => {
      prevTodo.splice(item, 1);
      return [...prevTodo];
    });
    // saveLocalStorage();
  };

  // ! Store local Storage
  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Return
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeText} type="text" value={inputText} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, i) => (
            <TodoItem
              handler={linethrough}
              completed={removeCompleted}
              key={Math.random()}
              item={i}
              text={todo[0]}
              checked={todo[1]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
