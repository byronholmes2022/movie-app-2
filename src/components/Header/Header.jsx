import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="logo">
        MovieFanatic
      </Link>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search movies..."
        />
      </div>
      <div className="header-buttons-container">
        <div className="theme-buttons">
          <MdOutlineLightMode className="theme-icon" />
          <MdOutlineDarkMode className="theme-icon theme-icon-active" />
        </div>
        <div>
          <button className="create-account">Create an Account</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
