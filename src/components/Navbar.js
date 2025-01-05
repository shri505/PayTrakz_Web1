import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import brandLogo from "../assets/brandLogo.png";
import homeLogo from "../assets/homeLogo.png";
import transactionLogo from "../assets/transactionLogo.png";
import approvalLogo from "../assets/approvalLogo.png";
import stasticLogo from "../assets/stasticLogo.png";
import settingLogo from "../assets/settingLogo.png";

const SidebarData = [
  { title: "Home", path: "/", logo: homeLogo, className: "nav-item" },
  { title: "Transaction", path: "/transaction", logo: transactionLogo, className: "nav-item" },
  { title: "Approval", path: "/approval", logo: approvalLogo, className: "nav-item" },
  { title: "Statistic", path: "/statistic", logo: stasticLogo, className: "nav-item" },
  { title: "Setting", path: "/setting", logo: settingLogo, className: "nav-item" },
];

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <button onClick={toggleSidebar}>☰</button>
      </div>
      {sidebar && (
        <div className="sidebar">
          <div className="brand-logo-container">
            <img src={brandLogo} alt="Brand Logo" className="brand-logo" />
          </div>
          <ul>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  <img src={item.logo} alt={`${item.title} logo`} className="sidebar-logo" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
      )}
    </>
  );
}

export default Navbar;
