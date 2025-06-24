//src/components/layout/sidebar/LogoSidebar.jsx
import React from "react";
import PlumaImage from "../../../assets/pluma.webp";
import "../../../styles/layout/sidebar/LogoSidebar.css";

const LogoSidebar = ({ name }) => {
  return (
    <h2 className="logo-container">
      <img src={PlumaImage} className="logo-image"/>
      {name}
    </h2>
  );
};

export default LogoSidebar;
