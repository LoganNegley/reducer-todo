import React  from 'react';

function Todo (props) {
console.log(props)
console.log(props.todo.id)


  return (
    <div className="todo" >
        <p style={props.todo.completed ? {textDecoration:'line-through'}:null}

          onClick={ event =>{
              event.preventDefault();
              props.toggleCompleted(props.todo.id);
          }}>
          {props.todo.item}
        </p>
    </div>
  );
}

export default Todo;