import React, {useReducer, useState} from 'react';


function Form(props) { 

  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault;

  };

  const handleChange =(event)=>{
    console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  return (
    <div className="form-container">
        <form  onClick={handleSubmit}>
            <input 
                type='text'
                name='todo-input'
                value={newTodo}
                onChange={handleChange}
            ></input>
            <button type='submit'onClick={props.addTodo(newTodo)}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    </div>
  );
}

export default Form;