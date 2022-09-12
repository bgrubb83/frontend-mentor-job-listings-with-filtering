import React from 'react';

import { TagsListData } from './TagsList.d'
import './TagsList.css';

import Tag from '../Tag';

const TagsList: React.FC<TagsListData> = ({ tags, handleAddTag }) => {
    return (
        <section className='tags-list-wrapper'>
            {tags && tags.map((tag) => {
                return <Tag tag={tag} key={tag} onClick={handleAddTag} />
            })}
        </section>
    )
}

export default TagsList;
