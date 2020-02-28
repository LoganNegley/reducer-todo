import React, {useReducer} from 'react';
import './App.css';
import {initialState, todoReducer} from '../src/reducer/index';

function App() {

const [state, dispatch] = useReducer(todoReducer,initialState)

  return (
    <div className="App">
    </div>
  );
}

export default App;
