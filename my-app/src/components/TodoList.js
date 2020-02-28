import React, {useReducer} from 'react';
import App from '../App';

function TodoList(props) {
    console.log(props.state.list)

  return (
    <div className="list-container">
        {props.state.list.map(item =>(
            <div className='todo'>
                <p>{item.item}</p>
            </div>
        ))}
    </div>
  );
}

export default TodoList;