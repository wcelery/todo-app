import React from "react";

const Form = ({ inputValue, setInputValue, todos, setTodos }) => {
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

  return (
    <form>
      <input value={inputValue} onChange={inputHandler} type="text" />
      <button onClick={submitHandler} type="submit">
        +
      </button>
      <select className="select">
        <option value="">1</option>
        <option value="">2</option>
      </select>
    </form>
  );
};

export default Form;
