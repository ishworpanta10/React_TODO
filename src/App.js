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

  function toggleTodo(id) {
    const newTodo = [...todos];
    const todo = newTodo.find((todos) => todos.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodo);
  }

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

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <div class="todoApp">
        <h2>TODO App with React</h2>

        <div class="todo">
          <h3>Todo List</h3>
          <ToDoList todos={todos} toggleTodo={toggleTodo} />
        </div>
        Todo Name : <input ref={todoNAmeRef} type="text" />
        <br />

        <button class="btn" onClick={handleAddTodo}>Add Todo</button>

        <button class="btn" onClick={handleClearTodos}>
          Clear Completed Todo
        </button>

        <br />
        <div>{todos.filter((todo) => !todo.complete).length} to do left</div>
      </div>
    </>
  );
}

export default App;
