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

  // Handle Adding a new tag
  const handleAddTag = (tag: string): void => {
    if (!tags.includes(tag)) {
      const updatedTags: string[] = [...tags];
      updatedTags.push(tag);
      setTags(updatedTags);
    }
  }

  // handle Removing an active tag
  const handleRemoveTag = (tag: string): void => {
    let updatedTags: string[] = [...tags];
    updatedTags = updatedTags.filter((updatedTag) => {
      return updatedTag !== tag
    })
    setTags(updatedTags);
  }

  // Handle clearing all active tags
  const handleClearTags = (): void => {
    setTags([]);
  }

  // Format raw data
  let processedData = processData(rawData);

  // If actice tags, filter jobs against them
  if (tags && tags.length) processedData = filterByTags(processedData, tags);

  return (
    <div className='jobs-list-wrapper'>
      {tags && tags.length ? <ActiveTagCard tags={tags} handleClearTags={handleClearTags} handleRemoveTag={handleRemoveTag} /> : null}
      {processedData.map((job: JobCardData) => {
        return <JobCard job={job} handleAddTag={handleAddTag} key={job.id} />
      })}
    </div>
  );
}

export default App;
