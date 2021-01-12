import React from 'react'
import './App.css';

const itens = ['Estudar','EstudarMais','Formar','beSucessful'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const listTask = itens.map((item) => {
  return task(item);
})

function App() {
  return (
    <div id='list'>
      <h1>Learning React</h1>
      <div>{listTask}</div>
    </div>
  );
}

export default App;
