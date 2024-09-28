import React from 'react';
import '../styles/home.css';
import TodoList from '../components/TodoList';

function HomePage() {
  return (
    <div className="home-container">
      <h1>My To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default HomePage;
