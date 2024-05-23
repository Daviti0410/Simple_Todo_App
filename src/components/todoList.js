"use client";
import { useEffect } from "react";

export default function TodoList({ apiUrl, todoState, refreshTodos }) {
  useEffect(async () => {
    await refreshTodos();
  }, []);

  async function deleteTodo(id) {
    await fetch(`${apiUrl}/deleteTodoes`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    });
    await refreshTodos();
  }
  //ჩეკბოქს გამოსატანი ფუნქცია
  // async function handleCheckboxClick(isChecked, id) {
  //   await fetch(`${apiUrl}/editTodoes`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ completed: isChecked }),
  //   });
  //   await refreshTodos();
  // }

  async function editTodo(task, id) {
    await fetch(`${apiUrl}/editTodoes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: task, id: id }),
    });
    await refreshTodos();
  }

  return (
    <div class="todoList">
      {todoState.map((todo) => {
        return (
          <div class="todoItem">
            <div class="todoCheckbox">
              <input
                onChange={(event) => {
                  handleCheckboxClick(event.target.checked, todo.id);
                }}
                type="checkbox"
              />
            </div>
            <div class="todoName">{todo.task}</div>
            <div class="actions">
              <span
                class="btnEdit"
                onClick={() => {
                  {
                    editTodo(prompt("Edit task", todo.task), todo.id);
                  }
                }}
              >
                Edit
              </span>
              <span
                class="btnDelete"
                onClick={() => {
                  {
                    deleteTodo(todo.id);
                  }
                }}
              >
                Delete
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
