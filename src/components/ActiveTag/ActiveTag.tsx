import React from 'react';

import { ActiveTagData } from './ActiveTag.d'
import './ActiveTag.css';

import { remove } from '../../images';

const Tag: React.FC<ActiveTagData> = ({ tag, onClick }) => {
    return (
        <section className='active-tag-wrapper' onClick={(e) => onClick(tag)}>
            <section className='tag-label-wrapper'>
                <p>{tag}</p>
            </section>
            <section className='close-button'><img src={remove} /></section>
        </section>
    )
}

export default Tag;
