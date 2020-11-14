// import Navbar from './components/Navbar/Navbar';
// import Tourlist from './components/Tourlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
//showin vs code guthubt
export default function App() {
  return (
    <div>
      <div className="container">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </div>
  );
}
