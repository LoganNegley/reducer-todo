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

const toggleCompleted = () => {

};

const clearTodo = ()=>{

};

  return (
    <div className="App">
    <Form addTodo={addTodo} toggleCompleted={toggleCompleted}/>
    <TodoList state={state}/>
    </div>
  );
}

export default App;
