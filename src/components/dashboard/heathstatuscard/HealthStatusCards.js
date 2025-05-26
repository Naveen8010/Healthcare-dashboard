import React from 'react';
import './HealthStatusCard.css';
import healthStatus from '../../../data/healthData';
import LungsImg from '../../../assets/lungs.png'
import ToothImg from '../../../assets/tooth.png'
import ZeroaImg from '../../../assets/zeroa.png'


const imageMap = {
  Lungs: LungsImg,
  tooth: ToothImg,
  zeroa: ZeroaImg,
  
};
const HealthStatusCards = () => {
  return (
    <div className="health-status-container">
      {healthStatus.map((item, index) => (
        <div className="health-card" key={index}>
          <div className="health-header">
            <span className="organ-name">{item.organ}</span>
            <span
              className="status-indicator"
              style={{ backgroundColor: item.statusColor }}
            ></span>
          </div>

      <img
        src={imageMap[item.image]}
        alt={item.organ}
        width="40"
        height="40"
        className="organ-image"
      />

          <div className="health-date">Date: {item.date}</div>
        
     <div
        className="status-bar">
        <div
        className='status-bar-fill'
        style={{ width:'70%', backgroundColor: item.statusColor }}
        ></div>

        
        </div>
        </div>
        ))}
    </div>
  );
};

export default HealthStatusCards;
