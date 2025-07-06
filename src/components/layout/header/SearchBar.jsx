import React from "react";
import { useState } from "react";
import "./SearchBar.css"
import LupaImage from "../../../assets/lupa.svg"

const SearchBar = ( {onClick} ) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="search-container">
            <img
                className = {`search-icon`}
                src={LupaImage}
            />
            
            <input
                type="text"     
                className={`search-input ${isActive? "go-right" : ""}`}
                onClick={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                placeholder={isActive ? "" : "         Search by title, content or tags..."}
            />
        </div>
    );
};

export default SearchBar;