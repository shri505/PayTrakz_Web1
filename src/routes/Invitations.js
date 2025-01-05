import React from "react";
import "../styles/Invitations.css"; 

function Invitations() {
  return (
    <div className="invitations-page">
      <div className="invitations-box">
        <div className="invitations-header">
          
          <h1 className="invitations-title">Invitations</h1>
          <div className="invitations-card">
            <h2 className="party-name">Party Name: Mayank</h2>
            <h3 className="phone-no">Phone No: 8679397790</h3>
            <h3 className="date">Date: 09-08-2024</h3>
            <div className="inv-gst-text-box">
            <span className="inv-gst-text">Non-GST</span>
            </div>

          </div>
        </div>
       
        </div>
      </div>
  );
}

export default Invitations;
