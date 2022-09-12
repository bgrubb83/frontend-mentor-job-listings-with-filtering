import React from 'react';
import { JobDetailsProps } from './JobDetails.d';
import './JobDetails';
import './JobDetails.css'

import Pill from '../Pill';

const JobDetails: React.FC<JobDetailsProps> = ({ company, new: isNew, featured, position, postedAt, contract, location }) => {
    return (
        <div className='jobDetailsWrapper'>
            {/* Top row */}
            <section className='row'>
                <span className='company-name' >{company}</span>
                {/* New Pill */}
                {isNew ?
                    <Pill
                        text={`New!`}
                        dark={false}
                    />
                    : null}
                {/* Featured Pill */}
                {featured ?
                    <Pill
                        text='featured'
                        dark={true}
                    />
                    : null}
            </section>

            {/* Middle row */}
            <section className='row'>
                <p className='role'>{position}</p>
            </section>

            {/* Bottom row */}
            <section className='row'>
                <p className='job-stat'>{postedAt}</p>
                <span className='bullet'>&#8226;</span>
                <p className='job-stat'>{contract}</p>
                <span className='bullet'>&#8226;</span>
                <p className='job-stat'>{location}</p>
            </section>

        </div>
    )
}

export default JobDetails;
