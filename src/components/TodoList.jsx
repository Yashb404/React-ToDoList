import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo, toggleComplete } = props;

  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          index={index}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
          toggleComplete={toggleComplete}
          isCompleted={todo.completed}
        >
          <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
