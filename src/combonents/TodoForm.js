import React, { useState,useEffect,useRef } from "react";

function TodoForm(props) {
  const [input, setInuput] = useState(props.edit ? props.edit.value: '');

const inputRef = useRef(null)
useEffect(()=>{
  inputRef.current.focus()
})

//   hanle the changes in the inputfeald
const handleChange = e =>{
    setInuput(e.target.value)
 
}


//   preventing the form submiting default
  const handleSubmit = e =>{
    e.preventDefault()
    props.onSubmit({
        id:Date.now(),
        text:input
    }) 
  setInuput('')
  }


  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ?(
        <>
        <input
        type="text"
        placeholder="Update your item"
        value={input}
        name="text"
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef}
      />
      <button  className="todo-button edit">Update</button>
        </>
      ):(
        <>
        <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button  className="todo-button 1">Add todo</button>
        </>
      )
      }
    </form>
  );
}

export default TodoForm;
