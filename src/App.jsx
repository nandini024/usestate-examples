// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'; // ✅ Import Navbar
// import Home from './Components/Home/Home';
import CounterApp from './Components/CounterApp/CounterApp';
import Colorchanger from './Components/Colorchanger/Colorchanger';
import Randomcolor from './Components/Randomcolor/Randomcolor';
import Theme from './Components/Theme/Theme';

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
       
        <Route path='/counterapp' element={<CounterApp />} />
        <Route path='/colorchanger' element={<Colorchanger />} />
        <Route path='/randomcolor' element={<Randomcolor />} />
        <Route path='/theme' element={<Theme />} />
      </Routes>
    </>
  );
}

export default App;
