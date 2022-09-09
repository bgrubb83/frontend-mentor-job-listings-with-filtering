import React from 'react';

import { JobCardData } from './JobCard.d'
import './JobCard.css';

import CompanyLogo from '../CompanyLogo';
import JobDetails from '../JobDetails';

const JobCard: React.FC<JobCardData> = (job) => {
    return (
        <div className={job.featured ? 'jobCardWrapper' : 'jobCardWrapper not-featured'}>
            
            {/* Featured indicator */}
            {job.featured ?
            <section className='featured-indicator' />
            : null}
            
            {/* Company Logo */}
            <CompanyLogo logo={job.logo} />
            
            {/* Job Details */}
            <JobDetails
                company={job.company}
                new={job.new}
                featured={job.featured}
                position={job.position}
                postedAt={job.postedAt}
                contract={job.contract}
                location={job.location}
            />
        </div>
    )
}

export default JobCard;
