import React, {useReducer, useState} from 'react';


function Form(props){ 
// State for to add a todo
  const [newTodo, setNewTodo] = useState('');

// handling of form functions
  // const handleSubmit(event) =>{
  //   event.preventDefault;
  // props.addTodo(newTodo);
  // setNewTodo('')
  // };

  const handleChange =(event)=>{
    console.log(event.target.value);
    setNewTodo(event.target.value);
  };

// form 
  return (
    <div className="form-container">
        <form>
            <input 
                type='text'
                name='todo-input'
                value={newTodo}
                onChange={handleChange}
            ></input>
            <button onClick={event => {event.preventDefault(); props.addTodo(newTodo); setNewTodo('');}}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    </div>
  );
}

export default Form;
