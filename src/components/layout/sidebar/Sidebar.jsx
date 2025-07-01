import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import HouseImage from "../../../assets/house.svg";
import ArchiveImage from "../../../assets/archive.svg";
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
      <LogoSidebar name="Notes" />
      <nav className="menu">
        <Menu 
          image={HouseImage} 
          image2={ArrowImage} 
          name="All Notes" 
          selected={selectedMenu === "All Notes"}
          onClick = {() => setSelectedMenu("All Notes")}
        />
        <Menu 
          image={ArchiveImage} 
          image2={ArrowImage} 
          name="Archived Notes" 
          selected={selectedMenu === "Archived Notes"}
          onClick={() => setSelectedMenu("Archived Notes")}
        />
      </nav>
      <div className="sidebar-tags">
        <h3>Tags</h3>
        <ul>
          {tags.map(tag => <TagItem key={tag} name={tag} />)}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
