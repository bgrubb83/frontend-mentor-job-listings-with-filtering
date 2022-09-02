import React from 'react';

import { JobCardData } from './JobCard.d'
import './JobCard.css';

import CompanyLogo from '../CompanyLogo';

const JobCard: React.FC<JobCardData> = (job) => {
    return (
        <div className='jobCardWrapper'>
            <CompanyLogo logo={job.logo}/>
            {job.company}
        </div>
    )
}

export default JobCard;
