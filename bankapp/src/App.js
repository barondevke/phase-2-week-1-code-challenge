import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import TranscationList from './components/TranscationList';
import Form from './components/AddTransaction';


function App() {
  const [data, setData] = useState([])
  const [isPressed, setPressed] = useState(false)
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(res => res.json())
      .then(json => {
        setData(json)
      })
  }, [])

  function handleAddBtn() {
    if (isPressed) {
      setPressed(false)
    }
    else {
      setPressed(true)
    }

  }

  return (
    <div className="App">
      <h2 className='header'>Welcome to Flatiron Bank</h2>
      <h4>Transactions</h4>
      <TranscationList data={data} />
      <button className='addBtn' type='button' onClick={handleAddBtn} >{isPressed ? <button>X</button> : 'Add Transaction'}</button>
      {isPressed ? <Form /> : ''}
    </div>
  );
}

export default App;
