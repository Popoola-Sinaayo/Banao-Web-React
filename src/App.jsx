import React, { useState } from "react";
import "./App.css";
/* Card */
import card2 from "./static/images/card2.png";
import card3 from "./static/images/card3.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import avatar2 from "./static/images/avatar2.png";
import avatar3 from "./static/images/avatar3.png";
import avatar4 from "./static/images/avatar4.png";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventIcon from "@mui/icons-material/Event";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import "./static/css/Card.css";
/* */
import Header from "./components/Header";
import HeaderMain from "./components/HeaderMain";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditIcon from "@mui/icons-material/Edit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Card from "./components/Card";

function App() {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div>
      <Header />
      <HeaderMain />
      <div className="body">
        <div className="body-sub1">
          <a href="/" className="active">
            All Post(32)
          </a>
          <a href="/">Article</a>
          <a href="/">Event</a>
          <a href="/">Education</a>
          <a href="/">Job</a>
        </div>
        <div className="body-sub1-mobile">
          <a href="/" className="active">
            Posts(168)
          </a>
        </div>
        <div className="body-sub2">
          <button className="button-post">
            <span className="button-text">
              Write a Post <ArrowDropDownIcon />
            </span>
          </button>
          <button className="button-join">
            <span className="button-text">
              <GroupsIcon className="group-icon" /> Join group
            </span>
          </button>
        </div>
        <div className="body-sub2-mobile">
          <button className="button-post">
            <span className="button-text">
              Filter:All <ArrowDropDownIcon />
            </span>
          </button>
        </div>
      </div>
      <div className="card-main">
        <div className="card-division">
          <Card />
          <div className="card">
            <img src={card2} alt="card1" />
            <p className="article-text">
              <span className="article-emoji">&#128300; </span>
              <span className="article-text-inner">Education</span>
            </p>
            <div className="card-title">
              <p>
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </p>
              <MoreHorizIcon />
            </div>
            <div className="card-content">
              <p>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
            </div>
            <div className="card-extras"></div>
            <div className="card-footer">
              <div className="footer-info-sub1">
                <img src={avatar2} alt="avatar" className="image-avatar" />
                <p>
                  Sarah West <br />
                  <span className="view-text-mobile">1.4k Views</span>
                </p>
              </div>
              <div className="footer-info-sub2">
                <div className="view-icon">
                  <VisibilityIcon />{" "}
                  <span className="view-text">1.4k Views</span>
                </div>
                <div className="share">
                  <ShareIcon /> <span className="share-text-mobile">Share</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={card3} alt="card1" />
            <p className="article-text">
              <span className="article-emoji">&#128467; </span>{" "}
              <span className="article-text-inner">Meetup</span>
            </p>
            <div className="card-title">
              <p>Finance & Investment Elite Social Mixer @Lujiazui</p>
              <MoreHorizIcon
                className={showDetails && "active-more-icon"}
                onClick={() => setShowDetails(!showDetails)}
              />
            </div>
            {showDetails && (
              <div className="card-info">
                <p>Edit</p>
                <p>Report</p>
                <p>Option 3</p>
              </div>
            )}
            <div className="card-extras">
              <div className="section1">
                <div className="section1-subsection">
                  <EventIcon />{" "}
                  <span className="section1-subsection-text">
                    Fri, 12 Oct, 2018
                  </span>
                </div>
                <div className="section1-subsection">
                  <LocationOnOutlinedIcon />
                  <span className="section1-subsection-text">
                    Ahmedabad, India
                  </span>
                </div>
                <div></div>
              </div>
              <div className="section2">
                <p className="section2-text">Visit Website</p>
              </div>
            </div>
            <div className="card-footer">
              <div className="footer-info-sub1">
                <img src={avatar3} alt="avatar" className="image-avatar" />
                <p>
                  Ronal Jones <br />
                  <span className="view-text-mobile">800 Views</span>
                </p>
              </div>
              <div className="footer-info-sub2">
                <div className="view-icon">
                  <VisibilityIcon />{" "}
                  <span className="view-text">800 Views</span>
                </div>
                <div className="share">
                  <ShareIcon /> <span className="share-text-mobile">Share</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <p className="article-text">
              <span className="article-emoji">&#128188; </span>{" "}
              <span className="article-text-inner">Job</span>
            </p>
            <div className="card-title">
              <p>Software Developer</p>
              <MoreHorizIcon />
            </div>
            <div className="card-extras">
              <div className="section1">
                <div className="section1-subsection">
                  <WorkOutlineIcon />
                  <span className="section1-subsection-text">
                    Innovaccer Analytics Private Ltd.
                  </span>
                </div>
                <div className="section1-subsection">
                  <LocationOnOutlinedIcon />
                  <span className="section1-subsection-text">
                    Ahmedabad, India
                  </span>
                </div>
                <div></div>
              </div>
              <div className="section2">
                <p className="section2-text-green">Apply on Timeline</p>
              </div>
            </div>
            <div className="card-footer">
              <div className="footer-info-sub1">
                <img src={avatar4} alt="avatar" className="image-avatar" />
                <p>
                  Joseph Gray <br />
                  <span className="view-text-mobile">1.7k Views</span>
                </p>
              </div>
              <div className="footer-info-sub2">
                <div className="view-icon">
                  <VisibilityIcon />{" "}
                  <span className="view-text">1.7k Views</span>
                </div>
                <div className="share">
                  <ShareIcon /> <span className="share-text-mobile">Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-left">
          <div className="card-left-title">
            <div className="card-left-text">
              <LocationOnOutlinedIcon />{" "}
              <span className="location-icon-tect">Noida, India</span>
            </div>
            <div>
              <EditIcon />
            </div>
          </div>
          <div className="card-left-info">
            <InfoOutlinedIcon />{" "}
            <span>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
