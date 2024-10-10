import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import TodoList from './Components/TodoList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;