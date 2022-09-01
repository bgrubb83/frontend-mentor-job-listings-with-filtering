import React from 'react';
import './App.css';

import rawData from './dataStore/data.json';

import JobCard from './components/JobCard'

function App() {
  console.log(rawData)
  return (
    <>
    <p>App</p>
    {rawData.map((job) => {
      return <JobCard {...job}/>
    })}
    </>
  );
}

export default App;
