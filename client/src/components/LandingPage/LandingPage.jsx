import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/home">
        <button>Enter</button>
      </Link>
    </div>
  );
};

export default LandingPage;
