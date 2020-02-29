import React  from 'react';

function Todo (props) {
console.log(props)
  return (
    <div className="todo">
        <p>{props.todo.item}</p>
    </div>
  );
}

export default Todo;