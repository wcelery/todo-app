import React from "react";
import "../App.css";
import Todo from "./Todo";

const List = ({ todo }) => {
  return (
    <div className="content">
      <ul className="ul">
        {todo.map((todo) => (
          <Todo text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
