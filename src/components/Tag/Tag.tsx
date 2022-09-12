import React from 'react';

import { TagData } from './Tag.d'
import './Tag.css';

const Tag: React.FC<TagData> = ({ tag, onClick }) => {
    return (
        <section className='tag-wrapper' onClick={(e) => onClick(tag)} >
            <p>{tag}</p>
        </section>
    )
}

export default Tag;
