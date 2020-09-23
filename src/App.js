import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="App">
      <h1>ToDo</h1>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
      />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
