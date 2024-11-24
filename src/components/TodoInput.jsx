import React from "react";

export default function TodoInput({ todoValue, setTodoValue, handleAddTodos }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && todoValue.trim() !== "") {
      handleAddTodos(todoValue);
      setTodoValue("");
    }
  };

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a new todo..."
      />
      <button className="InputButton"
        onClick={() => {
          if (todoValue.trim() !== "") {
            handleAddTodos(todoValue);
            setTodoValue("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
}
