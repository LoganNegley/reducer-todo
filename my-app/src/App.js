import React, {useReducer} from 'react';
import './App.css';
import {initialState, todoReducer} from '../src/reducer/index';
import TodoList from '../src/components/TodoList';

function App() {

const [state, dispatch] = useReducer(todoReducer,initialState)

  return (
    <div className="App">
    <TodoList state={state}/>
    </div>
  );
}

export default App;
