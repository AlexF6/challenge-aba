import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { House, Archive } from "lucide-react";
import TagItem from "./TagItem";
import ArrowImage from "../../../assets/arrow.svg";
import LogoSidebar from "./LogoSidebar";
import Menu from "./Menu";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("All Notes");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      try {
        const res = await fetch("/api/tags/all", {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch tags");
        const data = await res.json();
        setTags(data);
      } catch (err) {
        console.error("Error fetching tags:", err);
      }
    }

    fetchTags();
  }, []);

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
            onClick={() => setSelectedMenu("All Notes")}
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
          {tags.map(tag => (
            <TagItem key={tag.id || tag.name} name={tag.name} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
