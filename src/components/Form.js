import React from "react";

const Form = ({ inputValue, setInputValue, todos, setTodos, setStatus }) => {
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const regexp = /^\w+( +\w+)*$/;

  const isDisabled = regexp.exec(inputValue) ? false : true;

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
      <div className="wrapper">
        <input
          value={inputValue}
          onChange={inputHandler}
          type="text"
          id="name"
          placeholder="your thoughts"
        />
        <button
          disabled={isDisabled}
          onClick={submitHandler}
          type="submit"
          className="add-btn"
        >
          Add
        </button>
        <select onChange={statusHandler} className="select">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
