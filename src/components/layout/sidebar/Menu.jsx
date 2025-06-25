//src/components/layout/sidebar/Menu.jsx
import React from "react";
import "../../../styles/layout/sidebar/Menu.css";

const Menu = ({ name, image, image2, selected, onClick }) => {
  return (
    <div className={`menu-item ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img src={image} className="menu-icon"/>
      <a href="#">{name}</a>
      {selected && <img src={image2} className="menu-icon2"/>}
    </div>
  );
};

export default Menu;
