import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to Todo App</h1>
      <p className="description">Click this button to view your todo list</p>
      <button className="view-button" onClick={() => window.location.href = '/todo-list'}>View Todo List</button>
      <div className="footer">
       
      </div>
    </div>
  );
};

export default Home;