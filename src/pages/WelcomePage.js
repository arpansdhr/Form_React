import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-wrapper">
      {/* Background Image */}
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="Technology background"
          className="background-image"
        />
      </div>

      {/* Content */}
      <div className="content">
        <h1 className="title">
          Welcome to <span className="highlight">TechVerse</span>
        </h1>
        <p className="subtitle">Innovate. Integrate. Elevate.</p>
        <button
          className="start-button"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
