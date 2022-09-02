import React from 'react';
import images from '../../images';
import { CompanyLogoProps } from './CompanyLogo.d';
import './CompanyLogo.css';

const CompanyLogo: React.FC<CompanyLogoProps> = ({ logo }) => {
    console.log(logo)
    return (
        <img src={images[logo]} />
    )
  }

export default CompanyLogo;
