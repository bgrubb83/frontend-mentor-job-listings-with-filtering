import React from 'react';
import './App.css';

import rawData from './dataStore/data.json';

import JobCard from './components/JobCard';
import { JobCardData } from './components/JobCard/JobCard.d'

import processData from './helpers/processData';

function App() {
  console.log(rawData)
  const processedData = processData(rawData);

  return (
    <div className='jobsListWrapper'>
    {processedData.map((job: JobCardData) => {
      return <JobCard {...job} key={job.id} />
    })}
    </div>
  );
}

export default App;
