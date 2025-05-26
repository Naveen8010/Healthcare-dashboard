import React from "react";
import "./Sidebar.css";
import {
  LayoutDashboard,
  Clock,
  Calendar,
  Stethoscope,
  BarChart2,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="top-bar">
        <h1 className="heading">
          <span style={{ color: "#47dde7" }}>Health</span>
          <span style={{ color: "#1c1443" }}>care.</span>
        </h1>
      </div>
      <div className="sidebar-content">
        <h2 className="sidebar-heading">General</h2>
        <nav className="nav-links">
          <div className="nav-link">
            <span className="nav-icon">
              <LayoutDashboard />
            </span>
            <span className="nav-label">Dashboard</span>
          </div>
          <div className="nav-link">
            <span className="nav-icon">
              <Clock />
            </span>
            <span className="nav-label">History</span>
          </div>
          <div className="nav-link">
            <span className="nav-icon">
              <Calendar />
            </span>
            <span className="nav-label">Calendar</span>
          </div>
          <div className="nav-link">
            <span className="nav-icon">
              <Stethoscope />
            </span>
            <span className="nav-label">Appointments</span>
          </div>
          <div className="nav-link">
            <span className="nav-icon"><BarChart2 /></span>
            <span className="nav-label">Statistics</span>
          </div>
          <h3>Tools</h3>
          <div className="nav-link">
            <span className="nav-icon"> <MessageCircle /></span>
            <span className="nav-label">Chat</span>
          </div>
          <div className="nav-link">
            <span className="nav-icon"><HelpCircle /></span>
            <span className="nav-label">Support</span>
          </div>
          <br />
          <div className="nav-link">
             <span className="nav-icon"> <Settings /></span>
            <span className="nav-label">Setting</span>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
