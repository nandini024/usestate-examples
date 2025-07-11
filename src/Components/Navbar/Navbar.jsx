import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">💻 10kCoders</div>
      <ul className="nav-links">
        <li><Link to="/">View All Tasks</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
