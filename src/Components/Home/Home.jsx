import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // ✅ Importing the CSS

const Home = () => {
  return (
   
     
      <div className="link-wrapper">
        <Link to="counterapp" className="home-link">
          <span>🧮 CounterApp</span>
        </Link>

        <Link to="colorchanger" className="home-link">
          <span>🎨 Colour Changer</span>
        </Link>

        <Link to="randomcolor" className="home-link">
          <span>🌈 Random Color</span>
        </Link>

        <Link to="theme" className="home-link">
          <span>🌓 Theme Changer</span>
        </Link>
      </div>
   
  );
};

export default Home;
