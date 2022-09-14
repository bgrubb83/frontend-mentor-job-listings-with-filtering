import React, { useState } from 'react';
import './App.css';

import rawData from './dataStore/data.json';

import JobCard from './components/JobCard';
import { JobCardData } from './components/JobCard/JobCard.d'

import processData from './helpers/processData';


function App() {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (tag: string): void => {
    if (!tags.includes(tag)) {
      const updatedTags: string[] = [...tags];
      updatedTags.push(tag);
      setTags(updatedTags);
    }
  }
  
  let processedData = processData(rawData);

  if (tags && tags.length) {
    processedData = processedData.filter((job: JobCardData) => {
      let tagged: boolean = true;
      tags.forEach((tag: string) => {
        if (!job.tags?.includes(tag)) {
          tagged = false;
        }
      })
      return tagged;
    })
  }

  return (
    <div className='jobsListWrapper'>
      {processedData.map((job: JobCardData) => {
        return <JobCard job={job} handleAddTag={handleAddTag} key={job.id} />
      })}
    </div>
  );
}

export default App;
