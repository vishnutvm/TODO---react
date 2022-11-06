import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //gettin value enterd in the input feald
  const addTodo = (todo) => {
    console.log("workng");
    // for form validation in  input todo feald
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

// edit todo function
const updateTodo=(todoId, newvalue)=>{
        // for form validation in  input todo feald
        if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
            return;
          }
          setTodos(prev => prev.map(item=> (item.id === todoId ? newvalue : item)))
}




//   remove todo function
const removeTodo = id =>{
   const removeArr = [...todos].filter(todo => todo.id !== id)
   setTodos(removeArr)
}




  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Stuff I need To Do</h1>
      <TodoForm onSubmit={addTodo} />
      <h2 id="empty-task">
        {
          todos.length==0 ? "What's today's plan ? " : ""
        }
      </h2>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo
      } />
    </div>
  );
}

export default TodoList;
