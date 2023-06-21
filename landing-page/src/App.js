import React from 'react';
import './css/styles.css';

import { InicialPage } from './components/inicialPage';
import { AboutUs } from './components/about-us';
import { ContactUs } from './components/contact-us.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicialPage />}/>
        <Route path='about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
