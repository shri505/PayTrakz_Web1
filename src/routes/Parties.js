import React from "react";
import "../styles/Parties.css"; 

function Parties() {
  return (
    <div className="parties-page">
      <div className="parties-box">
        <div className="parties-header">
          
          <h1 className="parties-title">Parties</h1>
          <div className="parties-card">
            <h2 className="parties-message">You have an invitation approval!</h2>
            <h3 className="phone-no">Phone No: 8679397790</h3>
            <h3 className="date">Date: 09-08-2024</h3>
            <div className="prt-gst-text-box">
            <span className="prt-gst-text">Non-GST</span>
            </div>

          </div>
        </div>
       
        </div>
      </div>
  );
}

export default Parties;
