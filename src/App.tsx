import React from 'react';
import './App.css';

import rawData from './dataStore/data.json';

import JobCard from './components/JobCard'

function App() {
  console.log(rawData)
  return (
    <>
    {rawData.map((job) => {
      return <JobCard {...job} key={job.id} />
    })}
    </>
  );
}

export default App;
