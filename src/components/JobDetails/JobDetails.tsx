import React from 'react';
import { JobDetailsProps } from './JobDetails.d';
import './JobDetails';
import './JobDetails.css'

import Pill from '../Pill';

const JobDetails: React.FC<JobDetailsProps> = ({ company, new: isNew, featured, position, postedAt, contract, location }) => {
    return (
        <div className='jobDetailsWrapper'>
            <section className='row top'>
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

            <section className='row middle'>
                <p>{position}</p>
            </section>

            <section className='row bottom'>
                <p>{postedAt}</p>
                <p>{contract}</p>
                <p>{location}</p>
            </section>

        </div>
    )
}

export default JobDetails;
