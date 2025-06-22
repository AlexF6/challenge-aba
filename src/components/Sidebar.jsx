//src/components/Sidebar.jsx

import React from "react";
import "../styles/Sidebar.css";
import TagItem from "./TagItem";
import LogoSidebar from "./LogoSidebar";
import Menu from "./Menu";

export function Sidebar() {

    const tags = [
        "Cooking",
        "Dev",
        "Fitness",
        "Health",
        "Personal",
        "React",
        "Recipes",
        "Shopping",
        "Travel",
        "TypeScript",
    ];

    return(
        <aside className="sidebar">
            <LogoSidebar name="Notes"/>
            <nav className="menu">
                <Menu name = "All Notes"/>
                <Menu name = "Archived Notes"/>
            </nav>    

            <div className="tags">
                <h3>Tags</h3>
                <ul>
                    {tags.map(tag => <TagItem name={tag} />)}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;