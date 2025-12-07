"use client";
import { useState, useEffect } from "react";
function Todo() {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      setTodo(data);
    }
    fetchTodo();
  }, []);
  return (
    <div>
      <div>Clint Component</div>
      <h2>Title : {todo.title}</h2>
    </div>
  );
}

export default Todo;
