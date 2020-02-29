import React, {useReducer} from 'react';
import './App.css';
import {initialState, todoReducer} from '../src/reducer/index';
import TodoList from '../src/components/TodoList';
import Form from '../src/components/Form';
import Todo from '../src/components/Todo.js';

function App() {

const [state, dispatch] = useReducer(todoReducer,initialState);

const addTodo = newTodo => {
  dispatch({type: 'ADD TODO', payload:newTodo})
};

const toggleCompleted = (id) => {
dispatch({type:'TOGGLE COMPLETED', payload: id})
};

const clearTodo = ()=>{
dispatch({type:'CLEAR TODO'})
};

  return (
    <div className="App">
    <Form addTodo={addTodo} clearTodo={clearTodo}/>
    <TodoList state={state} toggleCompleted={toggleCompleted}/>
    </div>
  );
}

export default App;
