import React, { useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import "./Dashboard.css";
import Banner from "../components/banner/Banner";
import UserIp from "../components/userIP/UserIp";
import Latency from "../components/latency/Latency";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="dashboard">
      <Banner text="SEXTANT" />
      <div className="content">
          <SideBar onComponentClick={handleComponentClick}/>
        <div className="main-content">
          {selectedComponent === 'userIP' ? <UserIp/> : ""}
          {selectedComponent === 'latency' ? <Latency/> : ""}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
