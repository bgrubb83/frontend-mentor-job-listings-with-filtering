import React from 'react';

import { TagData } from './Tag.d'
import './Tag.css';

const Tag: React.FC<TagData> = ({ tag }) => {
    return (
        <section className='tag-wrapper'>
            <p>{tag}</p>
        </section>
    )
}

export default Tag;
