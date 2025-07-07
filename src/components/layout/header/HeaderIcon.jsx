import "./HeaderIcon.css"
import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

import ConfigImage from "../../../assets/config.svg"

const HeaderIcon = () => {
    const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useAuth();

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeDropdown = () => setShowDropdown(false);

  return (
    <div className="header-icon-container">
    
      <img
        src={ConfigImage}
        className="header-icon"
        alt="Configuración"
        onClick={toggleDropdown}
      />


      {showDropdown && (
        <div className="dropdown-menu">
          <p className="user-info">{user ? user.email : "Invitado"}</p>
          <button className="logout-btn" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      )}

  
      {showDropdown && <div className="backdrop" onClick={closeDropdown}></div>}
    </div>
  );
};

export default HeaderIcon;