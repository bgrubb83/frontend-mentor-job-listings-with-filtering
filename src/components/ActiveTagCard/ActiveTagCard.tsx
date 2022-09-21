import React from 'react';

import { ActiveTagCardData } from './ActiveTagCard.d'
import './ActiveTagCard.css';

import ActiveTag from '../ActiveTag';
import Link from '../Link';

const ActiverTagCard: React.FC<ActiveTagCardData> = ({ tags, handleClearTags, handleRemoveTags }) => {
    return (
        <section className='active-tag-card-wrapper'>
            {tags.map((tag) => {
                return <ActiveTag key={tag} tag={tag} onClick={handleRemoveTags}/>
            })}
            <Link label='clear' onClick={handleClearTags} />
        </section>
    )
}

export default ActiverTagCard;
