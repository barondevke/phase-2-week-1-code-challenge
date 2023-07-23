import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import TranscationList from './components/TranscationList';



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
      <h3>Transactions</h3>
      <TranscationList data={data} />
      <button className='addBtn' type='button' onClick={handleAddBtn} >{isPressed ? <button>X</button> : 'Add Transaction'}</button>

    </div>
  );
}

export default App;
