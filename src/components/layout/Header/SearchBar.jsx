import React from "react";
import "../../../styles/Layout/Header/SearchBar.css"
import LupaImage from "../../../assets/lupa.svg"

const SearchBar = () => {
    return (
        <div className="search-container">
            <img className="search-icon" src={LupaImage}/>
            <input
                type="text"  
                className="search-input"
                placeholder="         Search by title, content or tags..."
            />
        </div>
    );
};

export default SearchBar;