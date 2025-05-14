

import React, { useState } from 'react'
import "./CounterApp.css"

function CounterApp() {
    const  [count,setCount]=useState(0)

    const handleClick=(clk)=>{
        setCount(count+clk)
        if(clk==0)
        {
            setCount(0)
        }
    }

  return (
    <div>
      
      <h1>Countee App</h1>
      <h1>  {count}</h1>
      <button onClick={()=>handleClick(+1)} >+</button>
      <button onClick={()=>handleClick(-1)} disabled={count===0}>-</button>
      <button onClick={()=>handleClick(0)}>Reset</button>

    </div>
  )
}

export default CounterApp
