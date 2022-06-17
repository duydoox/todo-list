import './App.css';
import Header from './components/Header'
import React from 'react';
import Todos from './components/Todos';
import TodoContextProvider from './context/TodoContext';
import DeleteAll from './components/DelAllTodos';

const App = ()=>{
  return (
    <div className="box">
      <TodoContextProvider>
        <Header />
        <Todos />
        <DeleteAll/>
      </TodoContextProvider>
    </div>
  )
}

export default App;