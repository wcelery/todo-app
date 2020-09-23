import React from "react";
import "../App.css";
import Todo from "./Todo";

const List = ({ todos, setTodos }) => {
  return (
    <div className="content">
      <ul className="ul">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
