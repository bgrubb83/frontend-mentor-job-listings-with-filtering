import React from 'react';

import { TagsListData } from './TagsList.d'
import './TagsList.css';

import Tag from '../Tag';

const TagsList: React.FC<TagsListData> = ({ tags }) => {
    return (
        <section className='tags-list-wrapper'>
            {tags && tags.map((tag) => {
                return <Tag tag={tag} />
            })}
        </section>
    )
}

export default TagsList;
