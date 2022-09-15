import React from 'react';

import { LinkData } from './Link.d'
import './Link.css';

const Link: React.FC<LinkData> = ({ label, onClick }) => {
    return (
        <span onClick={onClick} >
            <p>{label}</p>
        </span>
    )
}

export default Link;
