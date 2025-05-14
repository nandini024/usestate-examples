import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // ✅ Import CSS file

function Navbar() {
  return (
    <div className="navbar">
      <div className="link-wrapper">
        <Link to="counterapp" className="navbar-link">
          🧮 CounterApp
        </Link>
        <Link to="colorchanger" className="navbar-link">
          🎨 Colour Changer
        </Link>
        <Link to="randomcolor" className="navbar-link">
          🌈 Random Color
        </Link>
        <Link to="theme" className="navbar-link">
          🌓 Theme Changer
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
