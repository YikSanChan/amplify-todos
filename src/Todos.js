import Todo from "./Todo";
import React from "react";

const Todos = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

export default Todos;
