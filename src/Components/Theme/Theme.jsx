import React, { useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";

const Theme = () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div
      style={{
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
        height: "100vh",
        display: "flex", /* Flexbox for centering */
        flexDirection: "column", /* Aligning items in column */
        justifyContent: "center", /* Vertically center */
        alignItems: "center", /* Horizontally center */
        textAlign: "center",
        padding: "50px"
      }}
    >
      <h2>{theme ? "Dark Mode" : "Light Mode"}</h2>
      <button
        onClick={handleTheme}
        style={{
          fontSize: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: theme ? "white" : "black",
          color: theme ? "black" : "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px"
        }}
      >
        {theme ? <CiBrightnessUp />:<FaMoon /> }
      </button>
    </div>
  );
};

export default Theme;
