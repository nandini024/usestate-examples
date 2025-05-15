import React, { useState } from 'react';
import './Theme.css';
import { FaMoon } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";

const Theme = () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={`theme-container ${theme ? 'dark' : 'light'}`}>
      <div className="theme-box">
        <h1 className="theme-title">{theme ? "Dark Mode" : "Light Mode"}</h1>

        <div className="switch-container" onClick={handleTheme}>
          <div className={`switch-toggle ${theme ? 'switch-dark' : 'switch-light'}`}>
            {theme ? <CiBrightnessUp /> : <FaMoon/>}
          </div>
        </div>

        <p className="theme-description">
          Switch the mood & enjoy the vibe 🌗✨
        </p>
      </div>
    </div>
  );
};

export default Theme;
