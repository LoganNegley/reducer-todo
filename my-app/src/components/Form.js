import React, {useReducer} from 'react';


function Form() {

  // const handleSubmit = (event){
  //   event.preventDefault;

  // };

  // const handleChange =(){

  // };

  return (
    <div className="form-container">
        <form>
            <input 
                type='text'
                name='todo-input'
                value=''
                // onChange={handleChange}
            ></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    </div>
  );
}

export default Form;