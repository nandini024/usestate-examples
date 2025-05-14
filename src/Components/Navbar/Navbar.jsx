import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // ✅ Import CSS file

function Navbar() {
  return (
    <div className="navbar">
   

      <Link to='/' className="navbar-link">
        <h3>🏠 Home</h3>
      </Link>
    </div>
  );
}

export default Navbar;
