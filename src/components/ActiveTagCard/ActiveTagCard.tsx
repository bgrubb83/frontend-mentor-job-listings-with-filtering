import React from 'react';

import { ActiveTagCardData } from './ActiveTagCard.d'
import './ActiveTagCard.css';

const ActiverTagCard: React.FC<ActiveTagCardData> = ({ tags }) => {
    return (
        <section className='active-tag-card-wrapper'>
            {tags.map((tag) => {
                return <span>{tag}</span>
            })}
        </section>
    )
}

export default ActiverTagCard;
