import React from "react";
import "../styles/Subscription.css";

function Subscription() {
  return (
  <div className="subscription-page">
    <div className="subscription-box">
        <h2 className="subscription-title">Subscription</h2>
      <div className="subscription-card">
        
        <div className="plan-price">
          <span className="currency">RS</span>
          <span className="price">100</span>
          <span className="duration">/yr</span>
        </div>
        <div className="plan-header-box">
          <span className="plan-header-text">STANDARD</span>
        </div>
        <p className="plan-description">
          Tailored plans for seamless tracking and advanced analytics. Upgrade
          anytime, manage effortlessly!
        </p>
        <ul className="plan-features">
          <li>
            <span className="checkmark">✔</span> Access To Rest API
          </li>
          <li>
            <span className="checkmark">✔</span> Seamless Collaboration
          </li>
          <li>
            <span className="checkmark">✔</span> Budget Management
          </li>
        </ul>
        <button className="get-started-button">GET STARTED</button>
      </div>
    </div>
 </div>
  );
}

export default Subscription;
