import React from 'react';
import './App.css';

import rawData from './dataStore/data.json';

import JobCard from './components/JobCard'

function App() {
  console.log(rawData)
  return (
    <div className='jobsListWrapper'>
    {rawData.map((job) => {
      return <JobCard {...job} key={job.id} />
    })}
    </div>
  );
}

export default App;
