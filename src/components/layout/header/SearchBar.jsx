import React, { useState } from "react";
import "./SearchBar.css";
import LupaImage from "../../../assets/lupa.svg";

const SearchBar = ({ onTagClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (value) => {
    setQuery(value);

    if (value.trim().length === 0) {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(`/api/tags/search?q=${encodeURIComponent(value)}`, {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setResults(data);
      } else {
        console.error("Failed to search tags");
      }
    } catch (err) {
      console.error("Error while searching tags:", err);
    }
  };

  return (
    <div className="search-container">
      <img className="search-icon" src={LupaImage} />

      <input
        type="text"
        className={`search-input ${isActive ? "go-right" : ""}`}
        onFocus={() => setIsActive(true)}
        onBlur={() => {
          setIsActive(false);
          setTimeout(() => setResults([]), 200); // para evitar que se borre al hacer clic
        }}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={isActive ? "" : "Search tags"}
      />

      {results.length > 0 && (
        <ul className="search-results">
          {results.map((tag) => (
            <li key={tag.id} onMouseDown={() => onTagClick(tag.name)}>
              #{tag.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
