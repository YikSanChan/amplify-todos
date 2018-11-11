import React from "react";

const Todo = ({ completed, content }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {content}
  </li>
);

export default Todo;
