import React from 'react';

import { JobData } from './JobCard.d'
import './JobCard.css';

import CompanyLogo from '../CompanyLogo';
import JobDetails from '../JobDetails';
import TagsList from '../TagsList';

const JobCard: React.FC<JobData> = ({ job, handleAddTag }) => {
    return (
        <div className={job.featured ? 'job-card-wrapper' : 'job-card-wrapper not-featured'}>
            
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

            {/* Tags List */}
            <TagsList tags={job.tags} handleAddTag={handleAddTag} />

        </div>
    )
}

export default JobCard;
