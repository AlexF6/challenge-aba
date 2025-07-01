//src/components/layout/header/Header.jsx
//estilos en src/styles/Layout/Header/header.css
import "./Header.css"
import HeaderIcon from "./HeaderIcon";
import HeaderTitle from "./HeaderTitle"
import SearchBar from "./SearchBar";
import { useState } from "react";

const Header = () => {

    return (
        <header className="header">
            <HeaderTitle title="All Notes"/>
            <div className="left-section">
                <SearchBar/>
                <HeaderIcon/>
            </div>
        </header>
    );
};

export default Header;