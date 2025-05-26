import React from 'react';
import './AnatomySection.css';
import anatomyImg from '../../../assets/anatomy.png';

const AnatomySection = () => {
  return (
   
    <div className="anatomy-container">
      <img src={anatomyImg} alt="Anatomical Body" className="anatomy-image" />    
    </div>
  );
};

export default AnatomySection;
