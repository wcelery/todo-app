import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  return (
    <div className="App">
      <h1>ToDo</h1>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        todo={todo}
        setTodo={setTodo}
      />
      <List todo={todo} />
    </div>
  );
}

export default App;
