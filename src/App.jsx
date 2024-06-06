import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './pages/Home/Home';
import TaData from './pages/TaData/TaData';
import AddTaData from './pages/AddTaData/AddTaData';


function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path='/add' element= {<AddTaData/>} />
        <Route path="/ta-data" element={<TaData />} />
      </Routes>
    </Router>
  );
}

export default App;
