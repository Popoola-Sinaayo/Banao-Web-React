import React from "react";
import card1 from "../static/images/card1.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import avatar1 from "../static/images/avatar1.png";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../static/css/Card.css";

function Card() {
  return (
    <div className="card">
      <img src={card1} alt="card1" />
      <p className="article-text">
        <span className="article-emoji">&#9997; </span> <span>Article</span>
      </p>
      <div className="card-title">
        <p>What if famous brands had regular fonts? Meet RegulaBrands!</p>
        <MoreHorizIcon />
      </div>
      <div className="card-content">
        <p>
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
      </div>
      <div className="card-extras"></div>
      <div className="card-footer">
        <div className="footer-info-sub1">
          <img src={avatar1} alt="avatar" className="image-avatar" />
          <p>
            Sarthak Kamra <br />
            <span className="view-text-mobile">1.4k Views</span>
          </p>
        </div>
        <div className="footer-info-sub2">
          <div className="view-icon">
            <VisibilityIcon /> <span className="view-text">1.4k Views</span>
          </div>
          <div className="share">
            <ShareIcon /> <span className="share-text-mobile">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
