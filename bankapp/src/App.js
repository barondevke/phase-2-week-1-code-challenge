import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import TranscationList from './components/TranscationList';



function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(res => res.json())
      .then(json => {
        setData(json)
      })
  }, [])


  return (
    <div className="App">
      <h2 className='header'>Welcome to Flatiron Bank</h2>

      <TranscationList data={data} />

    </div>
  );
}

export default App;
