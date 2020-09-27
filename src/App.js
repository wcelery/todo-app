import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [status, setStatus] = React.useState("all");
  const [filteredTodos, setFilter] = React.useState([]);

  React.useEffect(() => {
    getLocalTodos();
  }, []);

  React.useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [status, todos]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilter(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilter(todos);
        break;
    }
  };

  //local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  };

  return (
    <div className="App">
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
