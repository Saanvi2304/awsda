import React from 'react';
import '../styles/todo.css';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'todo-completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-item-text">{todo.text}</span>
      {todo.time && (
        <span className="todo-time">{todo.time}</span> // Display time if set
      )}
      <button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
