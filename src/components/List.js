import React from "react";
import "../App.css";
import Todo from "./Todo";

const List = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="content">
      <ul className="ul">
        {filteredTodos.map((todo) => (
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
