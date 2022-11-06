import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";

function Todo({ todos, completeTodo,removeTodo,updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
const submintUpdate = value =>{
 updateTodo(edit.id,value)
 setEdit({
    id:null,
    value:''
 })
}


if(edit.id){
    return <TodoForm edit={edit} onSubmit={submintUpdate} />
}




  return todos.map((todo, index) => (
    <div
    className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key={index}
  >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <AiOutlineCloseCircle
        onClick={()=>removeTodo(todo.id)}
        className='delet-icon' />
        <TbEdit   onClick={()=>setEdit({id:todo.id,value:todo.text})} className='edit-icon' />
      </div>
    </div>
  ));
}

export default Todo;
