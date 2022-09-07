import React from 'react';

import { PillData } from './Pill.d'
import './Pill.css';

const Pill: React.FC<PillData> = ({ text, dark = false }) => {
    return (
        <span className={!dark ? 'pill-wrapper' : 'pill-wrapper dark'}>
            <p>{text}</p>
        </span>
    )
}

export default Pill;
