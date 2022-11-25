import React from "react";
import logo from "../static/images/logo.png";
import "../static/css/Header.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div>
      <header>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="header-input">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search for other favourite groups in ATG"
          />
        </div>
        <p className="header-left">
          Create Account <span className="header-left-blue">It's Free!</span>
          <ArrowDropDownIcon />
        </p>
      </header>
    </div>
  );
}

export default Header;
