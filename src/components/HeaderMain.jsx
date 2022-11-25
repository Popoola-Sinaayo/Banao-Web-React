import React from 'react'
import "../static/css/HeaderMain.css"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function HeaderMain() {
  return (
    <div className="main">
      <div className="nav-mobile">
        <div className="icon-mobile-container">
          <ArrowBackIcon className="icon-mobile" />
        </div>
        <div className="button-mobile-container">
          <button className="button-mobile">Join Group</button>
        </div>
      </div>
      <div className="text">
        <p className="big">Computer Engineering</p>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
}

export default HeaderMain