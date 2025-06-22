//src/components/Sidebar.jsx

import React from "react";
import "../styles/Sidebar.css";
import PlumaImage from "../assets/feather.svg"
import HouseImage from "../assets/house.svg"
import TagItem from "./TagItem";

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
            <h2 className="logo-container"> 
                <img src={PlumaImage} className="logo-image"/>
                Notes
            </h2>
            <nav className="menu">
                <div className="menu-item">
                    <img src={HouseImage} className="menu-icon"/>
                    <a href="#">All Notes</a>
                </div>
                <br/>
                <div className="menu-item">
                    <img src={HouseImage} className="menu-icon"/>
                    <a href="#">Archived Notes</a>
                </div>
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