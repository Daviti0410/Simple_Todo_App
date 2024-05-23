import React, { useState } from "react";
import MyBtn from "./MyBtn";
import Input from "./Myinput";

export default function CreateTodo({ apiUrl, refreshTodos }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div class="createTodo">
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <MyBtn
        apiUrl={apiUrl}
        inputValue={inputValue}
        refreshTodos={refreshTodos}
      />
    </div>
  );
}
