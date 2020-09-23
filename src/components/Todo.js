import React from "react";

const Todo = ({ text }) => {
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check-circle"></i>
      </button>
      <button className="delete-btn">
        <i className="fas fa-minus-square"></i>
      </button>
    </div>
  );
};

export default Todo;
