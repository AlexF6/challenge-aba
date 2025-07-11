import React from "react";
import "./Menu.css";

const Menu = ({ name, icon, image2, selected, onClick }) => {
  return (
    <div className={`menu-item ${selected ? 'selected' : ''}`}onClick={onClick}>
      <div>
        {icon && <span className="menu-icon">{icon}</span>}
        <a href="/">{name}</a>
      </div>
          {selected && <img src={image2} className="menu-icon2"/>}
    </div>
  );
};

export default Menu;
