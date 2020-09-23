import React from "react";
import "../App.css";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed && "completed"}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check-circle"></i>
      </button>
      <button onClick={deleteHandler} className="delete-btn">
        <i className="fas fa-minus-square"></i>
      </button>
    </div>
  );
};

export default Todo;
