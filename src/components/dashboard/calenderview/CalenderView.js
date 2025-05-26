import React from 'react';
import './CalenderView.css';
import { User, Activity } from 'lucide-react';
import ToothIMG from "../../../assets/tooth.png"
import Zeroa from "../../../assets/zeroa.png"


const CalendarView = () => {
 
  const times = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];
  const days = ['Mon 26', 'Tue 27', 'Wed 28', 'Thu 29', 'Fri 30', 'Sat 31'];

 
  const appointmentData = {
    'Tue 27': { '09:00': 'Dentist' },
    'Thu 29': { '11:00': 'Physio' },
    'Sat 31': { '12:00': 'Checkup', '13:00': 'X-Ray' },
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>May 2025</h3>
        <div className="calendar-nav">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-column time-column">
          <div className="day-label">Time</div>
          {times.map((time, i) => (
            <div key={i} className="time-slot">{time}</div>
          ))}
        </div>

        {days.map((day, i) => (
          <div key={i} className="calendar-column">
            <div className="day-label">{day}</div>
            {times.map((time, j) => {
              const slotContent = appointmentData[day]?.[time];
              return (
                <div
                  key={j}
                  className={`time-slot ${slotContent ? 'highlight' : ''}`}
                >
                  {slotContent || ''}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        <div className="appointment-card dentist">
          <User size={16} />
          <div>
            <strong>Dentist</strong><br />
            09:00–11:00<br />
            Dr. Prasad
          </div>
          <img src={ToothIMG} alt="" style={{ width: '20px', height: '20px' }}/>
        </div>

        <div className="appointment-card physio">
          <Activity size={16} />
          <div>
            <strong>Physiotherapy</strong><br />
            11:00–12:00<br />
            Dr. Vats
          </div>
          <img src={Zeroa} alt="" style={{ width: '20px', height: '20px' }}/>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
