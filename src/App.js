import React from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import DashboardMainContent from './components/dashboard/dashboardmaincontent/DashboardMainContent'


const App = () => {
  return (
      <div className="main-layout">
     
       <div className='app-layout'>
      <Sidebar/>
      <DashboardMainContent/>
      </div>
   </div>
  )
}

export default App
