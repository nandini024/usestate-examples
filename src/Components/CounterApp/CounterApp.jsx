import React, { useState } from 'react';
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    if (value === 0) {
      setCount(0);
    } else {
      setCount(prev => prev + value);
    }
  };

  return (
    <div className="counter-container">
      <h1 className="title"> Counter App </h1>
      <h2 className="count-display">{count}</h2>
      <div className="btn-group">
        <button className="btn increment" onClick={() => handleClick(1)}>+</button>
        <button className="btn decrement" onClick={() => handleClick(-1)} disabled={count === 0}>-</button>
        <button className="btn reset" onClick={() => handleClick(0)}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
