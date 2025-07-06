import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import { House } from "lucide-react";
import { Archive } from "lucide-react";
import TagItem from "./TagItem";
import ArrowImage from "../../../assets/arrow.svg";
import LogoSidebar from "./LogoSidebar";
import Menu from "./Menu";

const Sidebar = () => {

  const [selectedMenu, setSelectedMenu] = useState("All Notes")

  const tags = [
    "Cooking", "Dev", "Fitness", "Health", "Personal",
    "React", "Recipes", "Shopping", "Travel", "TypeScript"
  ];

  return (
    <aside className="sidebar">
      <div className="logo-sidebar-container">
        <LogoSidebar name="Notes" />
      </div>
      <div className="sidebar-menu-container">
        <nav className="menu">
          <Menu 
            icon={<House />}
            image2={ArrowImage} 
            name="All Notes" 
            selected={selectedMenu === "All Notes"}
            onClick = {() => setSelectedMenu("All Notes")}
          />
          <Menu 
            icon={<Archive />} 
            image2={ArrowImage} 
            name="Archived Notes" 
            selected={selectedMenu === "Archived Notes"}
            onClick={() => setSelectedMenu("Archived Notes")}
          />
        </nav>
      </div>
      <div className="sidebar-tags-container">
          <h3>Tags</h3>
          <ul>
            {tags.map(tag => <TagItem key={tag} name={tag} />)}
          </ul>
      </div>

    </aside>
  );
};

export default Sidebar;
