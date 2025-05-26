import React from 'react';
import './DashboardMainContent.css';
import { Bell,Plus,Menu} from 'lucide-react';
import AnatomySection from '../anatomysection/AnatomySection';
import HealthStatusCards from '../heathstatuscard/HealthStatusCards';
import CalendarView from '../calenderview/CalenderView';
import UpcomingSchedule from '../upcomingschedule/UpcomingSchedule';
import ActivityFeed from '../activityfeed/ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="left-column">
         <h1 className="heading1">
          <span style={{ color: "#47dde7" }}>Health</span>
          <span style={{ color: "#1c1443" }}>care.</span>
        </h1>
        <div className="container">
        <button className="hamburger" aria-label="Menu">
          <Menu />
        </button>
        <div className="header-right">
          
       <input className="search-input" placeholder="Search..." disabled />
        <Bell className="icon" size={20} />
         </div>
      </div>
       <h2>DASHBOARD</h2>
        <div className="top-left">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="bottom-left">
          <ActivityFeed />
        </div>
      </div>

      <div className="right-column">
        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="avatar"
          />
        <button className="add-btn">
          <Plus size={16} />
        </button>
        </div>
        <div className="top-right">
          <CalendarView />
        </div>
        <div className="bottom-right">
          <UpcomingSchedule />
        </div>
        </div>
    </div>
      
  );
};

export default DashboardMainContent;
