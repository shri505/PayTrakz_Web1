import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import "../styles/Statistic.css"; // Add your CSS here
import bellLogo from "../assets/bellLogo.png"; // Replace with actual paths
import profileLogo from "../assets/profileLogo.png";
// import { SemiCircleProgress } from "react-semicircle-progressbar";

function Statistic() {
  const summaryData = {
    inward: "2.00Cr",
    expenses: "0.00Cr",
    net: "2.00Cr",
  };

  const barChartData = [
    { name: "Project 1", orange: 3, green: 2 },
    { name: "Project 2", orange: 2, green: 1.5 },
    { name: "Project 3", orange: 2.5, green: 2 },
    { name: "Project 4", orange: 2, green: 1.5 },
    { name: "Project 5", orange: 2.8, green: 1.8 },
    { name: "Project 6", orange: 2, green: 1.2 },
    { name: "Project 7", orange: 3, green: 2.5 },
    { name: "Project 8", orange: 2.8, green: 2 },
    { name: "Project 9", orange: 2.2, green: 1.7 },
    { name: "Project 10", orange: 3, green: 2.2 },
  ];

  const topSpending = [
    { category: "Miscellaneous", amount: "2.00Cr", date: "28 Sep 2024", id: "t1" },
  ];

  return (
    <div className="statistic-page">
      <header className="statistic-header">
        <h1>STATISTIC</h1>
        <div className="header-right">
          <img src={bellLogo} alt="Notifications" className="header-icon" />
          <img src={profileLogo} alt="Profile" className="profile-icon" />
          <span>Rowena Ravenclaw</span>
        </div>
      </header>

      <div className="statistic-summary">
        <div className="statistic-summary-box">
          <div className="summary-content">
            <div className="summary-item">
              <h3>Inward</h3>
              <p className="green">{summaryData.inward}</p>
            </div>
            <div className="summary-item">
              <h3>Expenses</h3>
              <p className="red">{summaryData.expenses}</p>
            </div>
            <div className="summary-item">
              <h3>Net</h3>
              <p className="black">{summaryData.net}</p>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>Total Invested</h3>
          {/* <SemiCircleProgress
            percentage={80}
            size={{
              width: 200,
              height: 200,
            }}
            strokeWidth={10}
            strokeColor="#f00"
          /> */}
        </div>
        <div className="chart-card">
          <h3>Profit</h3>
          {/* <SemiCircleProgress
            percentage={45}
            size={{
              width: 200,
              height: 200,
            }}
            strokeWidth={10}
            strokeColor="#0f0"
          /> */}
        </div>
      </div>

      <div className="partner-analysis">
        <h2>Partner wise Investment Analysis</h2>
        <BarChart
          width={1400}
          height={500}
          data={barChartData}
          margin={{ top: 40, right: 30, left: 20, bottom: 25 }}
          barGap={-2} // Add space between bars in the same group
          barCategoryGap="30%" // Add space between groups of bars
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="orange"
            stackId="a"
            fill="orange"
            name="Orange"
            radius={[25, 25, 25, 25]}
          />
          <Bar
            dataKey="green"
            stackId="a"
            fill="lightgreen"
            name="Green"
            radius={[25, 25, 25, 25]}
          />
        </BarChart>
      </div>

      <div className="top-spending">
        <h2>Top Spending</h2>
        {topSpending.map((spend) => (
          <div key={spend.id} className="spending-item">
            <span className="spending-category">{spend.category}</span>
            <span className="spending-date">{spend.date}</span>
            <span className="spending-amount">{spend.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistic;
