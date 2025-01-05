import React, { useState } from "react";
import "../styles/Projects.css";
import bellLogo from "../assets/bellLogo.png";
import profileLogo from "../assets/profileLogo.png";
import Vector from "../assets/Vector.png";
import Rectangle from "../assets/Rectangle 4256.png";
import blackdarrow from "../assets/blackdarrow.png";
import whitedarrow from "../assets/whitedarrow.png";

function Projects() {
  // Sample Projects Data
  const Projects = [
    { status: "Pending", color: "pending", amount: "8.00K", date: "2024-09-20" },
    { status: "Approved", color: "approved", amount: "8.00K", date: "2024-09-21" },
    { status: "Approved", color: "approved", amount: "8.00K", date: "2024-09-22" },
    { status: "Declined", color: "declined", amount: "8.00K", date: "2023-10-20" },
    { status: "Approved", color: "approved", amount: "8.00K", date: "2023-10-20" },
    { status: "Pending", color: "pending", amount: "8.00K", date: "2024-09-20" },
    { status: "Complete", color: "complete", amount: "8.00K", date: "2024-09-20" },
    { status: "Complete", color: "complete", amount: "8.00K", date: "2024-12-20" },
    { status: "Declined", color: "declined", amount: "8.00K", date: "2023-12-15" },
    { status: "Declined", color: "declined", amount: "8.00K", date: "2023-12-19" },
    { status: "Declined", color: "declined", amount: "8.00K", date: "2023-12-23" },




  ];

  // State to manage the selected filter
  const [filter, setFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState(null); // New date filter state

  // Function to filter Projects by date
  const filterByDate = (range) => {
    const now = new Date();
    let startDate;

    if (range === "Day") {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (range === "Week") {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    } else if (range === "Year") {
      startDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    }

    setDateFilter(startDate); // Update date filter state
  };

  // Filter Projects based on the selected status and date range
  const filteredTransactions = Projects.filter((item) => {
    const isStatusMatch = filter === "All" || item.status === filter;

    if (dateFilter) {
      const transactionDate = new Date(item.date);
      return isStatusMatch && transactionDate >= dateFilter;
    }

    return isStatusMatch;
  });

  return (
    <div className="Projects-page">
      <main className="Projects-main">
        <header className="topbar">
          <h1>Projects</h1>
          <div className="topbar-right">
            <img src={bellLogo} alt="Notification" className="icon" />
            <img src={profileLogo} alt="Profile" className="profile-icon" />
            <span>Rowena Ravenclaw</span>
          </div>
        </header>
        <div className="Projects-box">
          <div className="search-section">
            <div className="logo-container">
              <img src={Rectangle} alt="Rectangle" className="rectangle" />
              <img src={Vector} alt="Vector" className="vector" />
            </div>
              <div className="search-filter">
                <input type="text" placeholder="Search" className="search-bar" />
              <div className="filter-buttons">
                {/* Status Filter */}
                <div className="filter-button">
                  <button>
                    <img src={blackdarrow} alt="Black Arrow" className="arrow-icon" />
                    {filter}
                  </button>
                  <div className="dropdown">
                    <button onClick={() => setFilter("All")}>All</button>
                    <button onClick={() => setFilter("Pending")}>Pending</button>
                    <button onClick={() => setFilter("Approved")}>Approved</button>
                    <button onClick={() => setFilter("Declined")}>Declined</button>
                    <button onClick={() => setFilter("Complete")}>Complete</button>
                  </div>
                </div>

                {/* Date Filter */}
                <div className="filter-button select-days">
                  <button>
                    <img src={whitedarrow} alt="White Arrow" className="arrow-icon" />
                    Select Days
                  </button>
                  <div className="dropdown">
                    <button onClick={() => filterByDate("Day")}>Day</button>
                    <button onClick={() => filterByDate("Week")}>Week</button>
                    <button onClick={() => filterByDate("Year")}>Year</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="Projects-grid">
            {filteredTransactions.map((item, index) => (
              <div key={index} className="Projects-card">
                <h4 className="Projects-title">Laborer</h4>
                <p>Project name: Laborer</p>
                <p>Party: Pranav</p>
                <p>Amount: {item.amount}</p>
                <p>Date: {item.date}</p>
                <span className={`status ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Projects;
