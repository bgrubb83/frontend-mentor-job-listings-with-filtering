import React, { useState } from 'react';
import './App.css';

import rawData from './dataStore/data.json';

import JobCard from './components/JobCard';
import { JobCardData } from './components/JobCard/JobCard.d'
import ActiveTagCard from './components/ActiveTagCard';

import processData from './helpers/processData';
import filterByTags from './helpers/filterByTags';

function App() {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (tag: string): void => {
    if (!tags.includes(tag)) {
      const updatedTags: string[] = [...tags];
      updatedTags.push(tag);
      setTags(updatedTags);
    }
  }

  const handleRemoveTags = (tag: string): void => {
    console.log('removing', tag);
  }

  const handleClearTags = (): void => {
    setTags([]);
  }

  let processedData = processData(rawData);

  if (tags && tags.length) processedData = filterByTags(processedData, tags);


  return (
    <div className='jobsListWrapper'>
      {tags && tags.length ? <ActiveTagCard tags={tags} handleClearTags={handleClearTags} handleRemoveTags={handleRemoveTags} /> : null}
      {processedData.map((job: JobCardData) => {
        return <JobCard job={job} handleAddTag={handleAddTag} key={job.id} />
      })}
    </div>
  );
}

export default App;
