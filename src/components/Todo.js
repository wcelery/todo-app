import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check-circle"></i>
      </button>
      <button onClick={deleteHandler} className="delete-btn">
        <i className="fas fa-minus-square"></i>
      </button>
    </div>
  );
};

export default Todo;
