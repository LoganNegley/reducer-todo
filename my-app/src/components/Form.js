import React, {useReducer} from 'react';


function Form() {

  return (
    <div className="form-container">
        <form>
            <input 
                type='text'
                name='todo'
                value=''
            ></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    </div>
  );
}

export default Form;