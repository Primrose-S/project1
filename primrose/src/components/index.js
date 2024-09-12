import React from "react";
import "./styles.css"; // Add CSS for additional styling

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>More Powerful Than Platinum</h1>
        <p>
          Gain Complete Command Over Your Company's Expenses, Ensuring Absolute
          Transparency In Real-Time.
        </p>
        <div className="email-input">
          <input
            type="email"
            placeholder="Enter your email address"
            className="email"
          />
          <button className="apply-btn">Apply Now</button>
        </div>
        <p className="note">* We Never Use Any Email For Sales, Its Private</p>
      </header>

      <div className="card-container">
        <div className="arrow left-arrow">←</div>
        <div className="cards">
          <div className="card">
            <div className="card-image corporate"></div>
            <h3>Corporate Premium Elite</h3>
            <p>UMO</p>
          </div>
          <div className="card">
            <div className="card-image business"></div>
            <h3>Business Premium Elite</h3>
            <p>UMO</p>
          </div>
          <div className="card">
            <div className="card-image platinum"></div>
            <h3>Business Platinum Plus</h3>
            <p>UMO</p>
          </div>
        </div>
        <div className="arrow right-arrow">→</div>
      </div>
    </div>
  );
}

export default App;
