import React from 'react';

import { ActiveTagCardData } from './ActiveTagCard.d'
import './ActiveTagCard.css';

import Link from '../Link';

const ActiverTagCard: React.FC<ActiveTagCardData> = ({ tags, handleClearTags }) => {
    return (
        <section className='active-tag-card-wrapper'>
            {tags.map((tag) => {
                return <span key={tag}>{tag}</span>
            })}
            <Link label='clear' onClick={handleClearTags} />
        </section>
    )
}

export default ActiverTagCard;
