import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {

  const activityData = [30,10,29,37,49, 50, 40, 60, 10, 19, 35];

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointments on this week</p>
      </div>

      <div className="activity-chart">
        {activityData.map((height, index) => (
          <div key={index} className="activity-bar-wrapper">
            <div
              className="activity-bar"
              style={{ height: `${height}px` }}
            ></div>
            <span className="day-label">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
