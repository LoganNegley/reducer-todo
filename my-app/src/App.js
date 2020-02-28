import React, {useReducer} from 'react';
import './App.css';
import {initialState, todoReducer} from '../src/reducer/index';
import TodoList from '../src/components/TodoList';
import Form from '../src/components/Form';

function App() {

const [state, dispatch] = useReducer(todoReducer,initialState);

// const addTodo = () => {

// };

// const toggleCompleted = () => {

// };

// const clearTodo = ()=>{

// };

  return (
    <div className="App">
    <Form/>
    <TodoList state={state}/>
    </div>
  );
}

export default App;
