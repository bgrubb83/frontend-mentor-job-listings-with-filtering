import React from 'react';

import { ActiveTagData } from './ActiveTag.d'
import './ActiveTag.css';

import { remove } from '../../images';

const Tag: React.FC<ActiveTagData> = ({ tag, onClick }) => {
    return (
        <section className='active-tag-wrapper'>
            <section className='tag-label-wrapper'>
                <p>{tag}</p>
            </section>
            <section className='close-button' onClick={(e) => onClick(tag)}><img src={remove} /></section>
        </section>
    )
}

export default Tag;
