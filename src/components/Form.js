import React from "react";

const Form = ({ inputValue, setInputValue, todos, setTodos, setStatus }) => {
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputValue, completed: false, id: Math.random() * 100 },
    ]);
    setInputValue("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input value={inputValue} onChange={inputHandler} type="text" />
      <button onClick={submitHandler} type="submit">
        +
      </button>
      <select onChange={statusHandler} className="select">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default Form;
