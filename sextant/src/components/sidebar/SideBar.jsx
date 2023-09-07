import React from "react";
import "./SideBar.css";

const SideBar = ({ onComponentClick }) => {

  return (
    <div className="sidebar">
      <span onClick={() => onComponentClick("userIP")}>User IP</span>
      <span onClick={() => onComponentClick("latency")}>Latency</span>
    </div>
  );
};

export default SideBar;
