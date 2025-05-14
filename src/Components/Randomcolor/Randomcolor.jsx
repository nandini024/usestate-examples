import React, { useState } from 'react';
import './Randomcolor.css'; 

function Randomcolor() {
    const [randomColor, setRandomColor] = useState("");

    const changeColor = () => {
        let char = "abcdef1234567890";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * char.length);
            color += char[randomIndex];
        }
        setRandomColor(color);
    };

    return (
        <div className="container" style={{ backgroundColor: randomColor }}>
            <h2 className="color-code">{randomColor}</h2>
            <button className="btn" onClick={changeColor}>
                Change Color
            </button>
        </div>
    );
}

export default Randomcolor;
