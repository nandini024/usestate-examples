import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">🚀 Explore Mini Projects</h1>
      <div className="card-grid">
        <Link to="counterapp" className="card">
          <div className="emoji">🧮</div>
          <h2>Counter App</h2>
        </Link>
        <Link to="colorchanger" className="card">
          <div className="emoji">🎨</div>
          <h2>Color Changer</h2>
        </Link>
        <Link to="randomcolor" className="card">
          <div className="emoji">🌈</div>
          <h2>Random Color</h2>
        </Link>
        <Link to="theme" className="card">
          <div className="emoji">🌓</div>
          <h2>Theme Changer</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
