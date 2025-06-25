//src/components/layout/sidebar/LogoSidebar.jsx
import React from "react";
import PlumaImage from "../../../assets/feather2.svg";
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
