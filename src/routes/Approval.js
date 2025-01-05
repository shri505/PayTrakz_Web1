import React, { useState } from "react";
import "../styles/Approval.css";
import bellLogo from "../assets/bellLogo.png";
import profileLogo from "../assets/profileLogo.png";
import Vector from "../assets/Vector.png";
import Rectangle from "../assets/Rectangle 4256.png";
import blackdarrow from "../assets/blackdarrow.png";

function Approval() {
  const buttons = [
    { title: "Transactions", id: "transactions" },
    { title: "Invitations", id: "invitations" },
    { title: "Projects", id: "projects" },
  ];

  const [activeSection, setActiveSection] = useState("approvals");
  const [filter, setFilter] = useState("All");

  const approvals = [
    { status: "Pending", color: "pending", amount: "8.00K", date: "2024-09-20" },
    { status: "Approved", color: "approved", amount: "8.00K", date: "2024-09-21" },
    { status: "Approved", color: "approved", amount: "8.00K", date: "2024-09-22" },
    { status: "Declined", color: "declined", amount: "8.00K", date: "2023-10-20" },
    { status: "Approved", color: "approved", amount: "8.00K", date: "2023-10-20" },
    { status: "Pending", color: "pending", amount: "8.00K", date: "2024-09-20" },
    { status: "Complete", color: "complete", amount: "8.00K", date: "2024-09-20" },
  ];

  const transactions = [
    { status: "Pending", color: "pending", amount: "5.00K", date: "2024-08-15" },
    { status: "Approved", color: "approved", amount: "10.00K", date: "2024-08-16" },
    { status: "Declined", color: "declined", amount: "6.00K", date: "2023-12-01" },
    { status: "Complete", color: "complete", amount: "9.00K", date: "2024-02-10" },
  ];

  const invitations = [
    { partyName: "Mayank", phoneNo: "8679397790", date: "09-08-2024", gst: "Non-GST" },
  ];

  const projects = [
    { status: "In Progress", color: "pending", budget: "20.00K", date: "2024-11-01" },
    { status: "Completed", color: "complete", budget: "50.00K", date: "2024-11-05" },
  ];

  const getFilteredData = () => {
    if (activeSection === "approvals") {
      return filter === "All" ? approvals : approvals.filter((item) => item.status === filter);
    }
    if (activeSection === "transactions") {
      return filter === "All" ? transactions : transactions.filter((item) => item.status === filter);
    }
    return invitations; // No filter for invitations as it's static content
  };

  return (
    <div className="approval-page">
      <main className="approval-main">
        <header className="approval-topbar">
          <h1>Approval</h1>
          <div className="approval-topbar-right">
            <img src={bellLogo} alt="Notification" className="approval-icon" />
            <img src={profileLogo} alt="Profile" className="approval-profile-icon" />
            <span>Rowena Ravenclaw</span>
          </div>
        </header>
        <div className="approval-box">
          <div className="approval-search-section">
            <div className="approval-logo-container">
              <img src={Rectangle} alt="Rectangle" className="approval-rectangle" />
              <img src={Vector} alt="Vector" className="approval-vector" />
            </div>
            <div className="approval-search-filter">
              <div className="approval-filter-buttons">
                <input type="text" placeholder="Search" className="approval-search-bar" />
                <div className="approval-filter-button">
                  <button>
                    <img src={blackdarrow} alt="Black Arrow" className="approval-arrow-icon" />
                    {filter}
                  </button>
                  <div className="approval-dropdown">
                    <button onClick={() => setFilter("All")}>All</button>
                    <button onClick={() => setFilter("Pending")}>Pending</button>
                    <button onClick={() => setFilter("Approved")}>Approved</button>
                    <button onClick={() => setFilter("Declined")}>Declined</button>
                    <button onClick={() => setFilter("Complete")}>Complete</button>
                  </div>
                </div>
              </div>
              <div className="approval-right-buttons">
                {buttons.map((btn, index) => (
                  <button
                    key={index}
                    className={`approval-right-button ${
                      activeSection === btn.id ? "active" : ""
                    }`}
                    onClick={() => setActiveSection(btn.id)}
                  >
                    {btn.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Section Rendering */}
          {activeSection === "approvals" && (
            <section className="approval-grid">
              {getFilteredData().map((item, index) => (
                <div key={index} className="approval-card">
                  <h4 className="approval-title">Approval</h4>
                  <p>Amount: {item.amount}</p>
                  <p>Date: {item.date}</p>
                  <span className={`approval-status ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </section>
          )}

          {activeSection === "transactions" && (
            <section className="approval-grid">
              {getFilteredData().map((item, index) => (
                <div key={index} className="approval-card">
                  <h4 className="approval-title">Transaction</h4>
                  <p>Amount: {item.amount}</p>
                  <p>Date: {item.date}</p>
                  <span className={`approval-status ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </section>
          )}

          {activeSection === "invitations" && (
            <section className="invitations-section">
              {invitations.map((invite, index) => (
                <div key={index} className="invitations-card">
                  <h2 className="party-name">Party Name: {invite.partyName}</h2>
                  <h3 className="phone-no">Phone No: {invite.phoneNo}</h3>
                  <h3 className="date">Date: {invite.date}</h3>
                  <div className="inv-gst-text-box">
                    <span className="inv-gst-text">{invite.gst}</span>
                  </div>
                </div>
              ))}
            </section>
          )}

           {/* Projects Section */}
           {activeSection === "projects" && (
            <section className="approval-grid">
              {getFilteredData(projects).map((item, index) => (
                <div key={index} className="approval-card">
                  <h4 className="approval-title">Project</h4>
                  <p>Budget: {item.budget}</p>
                  <p>Date: {item.date}</p>
                  <span className={`approval-status ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Approval;
