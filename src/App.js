import React from 'react';
import './App.css';
import TodoList from './combonents/TodoList';

function App() {
  return (
    <div className='todo-app-wrapp'>
        <div className='todo-app'> 
   <TodoList/>
    </div>
    </div>
  
  );
}

export default App;