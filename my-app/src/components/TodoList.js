import React, {useReducer} from 'react';
import App from '../App';
import Todo from '../components/Todo';

function TodoList(props) {
    console.log(props.state.list)

  return (
    <div className="list-container">
        {props.state.list.map(item =>(
            <div className='todo-container'>
                <Todo todo={item}/>
            </div>
        ))}
    </div>
  );
}

export default TodoList;