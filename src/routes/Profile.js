import React from "react";
import "../styles/Profile.css"; // Ensure this CSS file exists
import logo from "../assets/profileLogo.png"; // Adjust the path to your logo file

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-box">
        <div className="profile-header">
          
          <h1 className="profile-title">Profile Details</h1>
          <img src={logo} alt="Logo" className="profile-logo1" />
        </div>
        <div className="profile-form">
          <input type="text" className="profile-input1" placeholder="Enter your Name" />
          <input type="text" className="profile-input1" placeholder="Enter your Name" />
          <input type="text" className="profile-input1" placeholder="Enter your Name" />
          <div className="input-container">
            <input type="text" className="profile-input2" placeholder="Enter your Name" />
            <input type="text" className="profile-input3" placeholder="Enter your Name" />
          </div>
          <button className="update-button">Update</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
