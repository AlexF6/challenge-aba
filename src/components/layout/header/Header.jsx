import LogoSidebar from "../sidebar/LogoSidebar";
import "./Header.css"
import HeaderIcon from "./HeaderIcon";
import HeaderTitle from "./HeaderTitle"
import SearchBar from "./SearchBar";
import { useState } from "react";

const Header = () => {

    return (
        <header>
            <div className="responsive-header"><LogoSidebar name="Notes"/></div>
            <div className="header-container">
                <HeaderTitle title="All Notes"/>
                <div className="left-section">
                    <SearchBar/>
                    <HeaderIcon/>
                </div>
            </div>
        </header>
    );
};

export default Header;