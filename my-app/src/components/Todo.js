import React  from 'react';

function Todo (props) {
console.log(props)
console.log(props.todo.completed)
  return (
    <div className="todo" onClick={props.toggleCompleted}>
        <p style={props.todo.completed ? {textDecoration:'line-through'}:null}>{props.todo.item}</p>
    </div>
  );
}

export default Todo;