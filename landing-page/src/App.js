import React from 'react';
import './css/styles.css';

import { InicialPage } from './components/inicialPage';
import { AboutUs } from './components/about-us';
import { ContactUs } from './components/contact-us.js';
import { Plans } from './components/plans';
import { SubscribePersonal } from './components/subscribe/subscribe-personal-info.js';
import { SubscribeAddress } from './components/subscribe/subscribe-address-info.js';
import { SubscribePayment } from './components/subscribe/subscribe-payment-info.js';
import { SubscribeFinish } from './components/subscribe/subscribe-finish';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicialPage />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/subscribe/personal" element={<SubscribePersonal />}/>
        <Route path="/subscribe/address" element={<SubscribeAddress />}/>
        <Route path="/subscribe/payment" element={<SubscribePayment />}/>
        <Route path='/subscribe/finish' element={<SubscribeFinish />}/>
      </Routes>
      
    </Router>
    
  );
}

export default App;
