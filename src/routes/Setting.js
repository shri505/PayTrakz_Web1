import React from "react";
import "../styles/Setting.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import bellLogo from "../assets/bellLogo.png";
import profileLogo from "../assets/profileLogo.png";

function Setting() {
  const location = useLocation(); // Hook to get the current path

  const buttons = [
    { title: "Profile", path: "/setting/profile" },
    { title: "Subscription", path: "/setting/subscription" },
    { title: "Invitations", path: "/setting/invitations" },
    { title: "Parties", path: "/setting/parties" },
    { title: "Privacy Policy", path: "/setting/privacy-policy" },
    { title: "Terms and Conditions", path: "/setting/terms-and-conditions" },
    { title: "Help", path: "/setting/help" },
  ];

  return (
    <div className="setting">
      <div className="bell-logo">
        <img src={bellLogo} alt="Bell Logo" className="bell-logo-img" />
      </div>
      <div className="profile-logo">
        <img src={profileLogo} alt="Profile Logo" className="profile-logo-img" />
        <h5 className="profile-name">user name</h5>
      </div>

      <h1>ACCOUNT AND SETTING</h1>
      <div className="button-container">
        {buttons.map((button, index) => (
          <Link
            key={index}
            to={button.path}
            className={`nav-button ${location.pathname === button.path ? "active" : ""}`}
          >
            {button.title}
          </Link>
        ))}
      </div>
      <div className="setting-content">
        <Outlet />
      </div>
      <div className="custom-line"></div>
    </div>
  );
}

export default Setting;
