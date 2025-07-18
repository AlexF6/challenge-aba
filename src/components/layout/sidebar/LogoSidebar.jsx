import React from "react";
import PlumaImage from "../../../assets/logopluma.png";
import "./LogoSidebar.css";

const LogoSidebar = ({ name }) => {
  return (
    <h2 className="logo-container">
      <img src={PlumaImage} className="logo-image"/>
      {name}
    </h2>
  );
};

export default LogoSidebar;
