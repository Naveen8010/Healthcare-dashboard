import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time ,icon}) => {
  return (
    <div className="simple-card">
      <div className="card-icon">
        {icon && <img src={icon} alt={`${title} icon`} className="icon-image" />}
      </div>
      <div>
        <div className="card-title">{title}</div>
        <div className="card-time">{time}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
