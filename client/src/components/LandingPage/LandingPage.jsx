import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Welcome</h1>
      <Link to="/home">
        <button>Play</button>
      </Link>
    </div>
  );
};

export default LandingPage;
