import React from 'react';
import './App.css';
import rawData from './dataStore/data.json';

function App() {
  console.log(rawData)
  return (
    <>
    <p>App</p>
    {rawData.map((data) => {
      return <p key={data.id}>{data.id}</p>
    })}
    </>
  );
}

export default App;
