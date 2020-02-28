import React, {useReducer} from 'react';


function Form() {
  const 

  // const handleSubmit = (event){
  //   event.preventDefault;

  // };

  const handleChange =(event)=>{
    console.log(event.target.value)


  };

  return (
    <div className="form-container">
        <form>
            <input 
                type='text'
                name='todo-input'
                value=''
                onChange={handleChange}
            ></input>
            <button type='submit'>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    </div>
  );
}

export default Form;