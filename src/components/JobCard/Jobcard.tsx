import React from 'react';

import { JobCardData } from './JobCard.d'

const JobCard: React.FC<JobCardData> = (job) => {
    return (
        <p>{job.id}</p>
    )
  }

export default JobCard;
