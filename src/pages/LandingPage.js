import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Add styles

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Houseplant Haven</h1>
      <p>Your one-stop shop for all things green and beautiful!</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
