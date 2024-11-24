import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo, toggleComplete, isCompleted } = props;

  return (
    <li className={`todoItem ${isCompleted ? "completed" : ""}`}>
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <button onClick={() => toggleComplete(index)}>
          <i className={`fa-${isCompleted ? "solid fa-check-circle" : "regular fa-circle"}`}></i>
        </button>
      </div>
    </li>
  );
}
