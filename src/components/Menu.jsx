import React from "react";
import "../styles/Menu.css";

const Menu = ({ name, image }) => {
  return (
    <div className="menu-item">
      <img src={image} className="menu-icon"/>
      <a href="#">{name}</a>
    </div>
  );
};

export default Menu;
