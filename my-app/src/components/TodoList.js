import React, {useReducer} from 'react';
import App from '../App';
import Todo from '../components/Todo';

function TodoList(props) {
    console.log(props.state.list)

  return (
    <div className="list-container">
        {props.state.list.map(item => {
          return(
                <Todo toggleCompleted={props.toggleCompleted} 
                      todo={item} 
                      key={item.id}/>
          );
          })}
   </div>
  );
};

export default TodoList;