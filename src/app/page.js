"use client";
import TodoList from "@/components/todoList";
import "./main.css";
import { useState } from "react";
import CreateTodo from "@/components/CreateTodo";

export default function Home() {
  const [apiUrl, setApiUrl] = useState("http://localhost:3000/api");
  const [todoState, setTodoState] = useState([]);

  async function refreshTodos() {
    let response = await fetch(`${apiUrl}/getTodoes`);
    let todos = await response.json();
    todos = getUncomplitedTodos(todos);
    setTodoState(todos);
  }

  function getUncomplitedTodos(todos) {
    return todos.filter((todo) => !todo.completed);
  }

  return (
    <>
      <div class="container">
        <div class="todoApp">
          <div class="todoHeader">
            Todos (<span class="todosCount">{todoState.length}</span>)
          </div>
          <div class="todoBody">
            <CreateTodo apiUrl={apiUrl} refreshTodos={refreshTodos} />
            <TodoList
              apiUrl={apiUrl}
              todoState={todoState}
              refreshTodos={refreshTodos}
            />
          </div>
        </div>
      </div>
      <script src="main.js"></script>
    </>
  );
}
