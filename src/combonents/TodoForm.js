import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInuput] = useState("");

//   hanle the changes in the inputfeald
const handleChange = e =>{
    setInuput(e.target.value)
 
}

//   preventing the form submiting default
  const handleSubmit = e =>{
    e.preventDefault()
    // props.onSubmit({
    //     id:Date.now(),
    //     text:input
    // }) 
  setInuput('')
  }


  return (
    <form onSubmit={handleSubmit} className="todo-from">
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button  className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
