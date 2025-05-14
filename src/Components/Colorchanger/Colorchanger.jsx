import React, { useState } from 'react';
import "./Colorchanger.css"

function ColorChanger() {
  const [color, setColor] = useState('');

  const handleColor = (clr) => {
    setColor(clr);
  };

  return (
    <div className="color-changer-container" style={{ backgroundColor: color }}>
      <h1 className="color-title">🎨 Pick a Color</h1>
      <div className="button-group">
        <button className="color-btn red" onClick={() => handleColor('red')}>Red</button>
        <button className="color-btn green" onClick={() => handleColor('green')}>Green</button>
        <button className="color-btn purple" onClick={() => handleColor('purple')}>Purple</button>
      </div>
    </div>
  );
}

export default ColorChanger;
