//src/components/layout/sidebar/Sidebar.jsx
import React from "react";
import "../../../styles/Layout/sidebar/Sidebar.css";
import HouseImage from "../../../assets/house.svg";
import ArchiveImage from "../../../assets/archive.svg";
import TagItem from "./TagItem";
import LogoSidebar from "./LogoSidebar";
import Menu from "./Menu";

const Sidebar = () => {
  const tags = [
    "Cooking", "Dev", "Fitness", "Health", "Personal",
    "React", "Recipes", "Shopping", "Travel", "TypeScript"
  ];

  return (
    <aside className="sidebar">
      <LogoSidebar name="Notes" />
      <nav className="menu">
        <Menu image={HouseImage} name="All Notes" />
        <Menu image={ArchiveImage} name="Archived Notes" />
      </nav>
      <div className="tags">
        <h3>Tags</h3>
        <ul>
          {tags.map(tag => <TagItem key={tag} name={tag} />)}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
