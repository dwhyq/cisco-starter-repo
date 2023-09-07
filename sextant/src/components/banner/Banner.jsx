import React from "react";
import "./Banner.css";

const Banner = ({text}) => {
  return (
      <div className="banner">
        <h1 className="banner-title">{text}</h1>
      </div>
  );
};

export default Banner;
