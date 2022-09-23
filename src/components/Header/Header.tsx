import React from 'react';

import './Header.css';

import { headerDesktopImage, headerMobileImage } from '../../images';

const Tag: React.FC = () => {
    return (
        <section
        className='page-header'
        style={{ 
            backgroundImage: `url(${headerDesktopImage})`,
          }}
        />
    )
}

export default Tag;
