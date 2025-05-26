import React from 'react';
import './UpcomingSchedule.css';
import SimpleAppointmentCard from '../simpleappointmentcard/SimpleAppointmentCard';
import ToothIMG from "../../../assets/tooth.png"
import Eye from "../../../assets/eye.png"
import Physiotherapy from "../../../assets/physical-therapy.png"
import Heart from "../../../assets/heart.png"

const UpcomingSchedule = () => {
  return (
    <div className="schedule-container">
      <h3 className="schedule-heading">The Upcoming Schedule</h3>

      <div className="schedule-block">
        <div className="schedule-day">Monday</div>
        <div className="schedule-cards">
          <SimpleAppointmentCard title="Dental Checkup" time="09:00 AM" icon={ToothIMG} />
          <SimpleAppointmentCard title="Eye Appointment" time="11:00 AM" icon={Eye} />
        </div>
      </div>

    
      <div className="schedule-block">
        <div className="schedule-day">Tuesday</div>
        <div className="schedule-cards">
          <SimpleAppointmentCard title="Cardiology Review" time="10:30 AM"icon={Heart} />
          <SimpleAppointmentCard title="Physiotherapy" time="02:00 PM"icon={Physiotherapy} />
        </div>
      </div>
      
    </div>
  );
};

export default UpcomingSchedule;

