import "./App.css";
import "./ToDoList";
import uuidv4 from "uuid/dist/v4";
import ToDoList from "./ToDoList";
import React, { useState, useRef, useEffect } from "react";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);

  const todoNAmeRef = useRef();

  useEffect(() => {
    const storgedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storgedTodos) setTodos(storgedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  

  function handleAddTodo(e) {
    const todoName = todoNAmeRef.current.value;
    if (todoName === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, {
        id: uuidv4(),
        name: todoName,
        complete: false,
      }];
    });

    todoNAmeRef.current.value = null;
  }

  return (
    <>
      <ToDoList todos={todos} />
      Todo Item : <input ref={todoNAmeRef} type="text" />
      <br />
      <button onClick={handleAddTodo}>Add Todo</button>

      <button>Clear Completed Todo</button>
      <br />
      <div>0 to do left</div>
    </>
  );
}

export default App;
