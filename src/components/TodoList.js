import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import '../styles/todo.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputTime, setInputTime] = useState(''); // State for time input

  const addTodo = (e) => {
    e.preventDefault();
    const currentTime = new Date();
    const selectedTime = new Date(inputTime);

    // Validate time
    if (inputTime && selectedTime <= currentTime) {
      alert('Selected time must be in the future.');
      return;
    }

    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        time: inputTime || null, // Store time if provided
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
      setInputTime(''); // Reset time input
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Alert when the current time exceeds set task times
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      todos.forEach(todo => {
        if (todo.time && new Date(todo.time) < currentTime && !todo.completed) {
          alert(`You haven't completed the task: "${todo.text}"`);
          // Optionally, you can mark the task as incomplete or completed here
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [todos]); // Re-run when todos change

  return (
    <div className="todo-container">
      <h2 className="todo-header">My To-Do List</h2>
      <form className="todo-input-container" onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          className="todo-input"
        />
        <input
          type="datetime-local" // Time input field
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          className="todo-time-input"
        />
        <button type="submit" className="todo-add-btn">Add</button>
      </form>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="todo-empty">No tasks available!</li>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
