import React from 'react';
import './css/styles.css';

import { InitialPage } from './pages/initialPage';
import { AboutUs } from './pages/about-us';
import { ContactUs } from './pages/contact-us';
import { Plans } from './pages/plans';
import { SubscribePersonal } from './components/subscribe/subscribe-personal-info';
import { SubscribeAddress } from './components/subscribe/subscribe-address-info';
import { SubscribePayment } from './components/subscribe/subscribe-payment-info';
import { SubscribeFinish } from './components/subscribe/subscribe-finish';
import { ClientArea } from './pages/client-area';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/subscribe/personal" element={<SubscribePersonal />} />
        <Route path="/subscribe/address" element={<SubscribeAddress />} />
        <Route path="/subscribe/payment" element={<SubscribePayment />} />
        <Route path='/subscribe/finish' element={<SubscribeFinish />} /> 
        <Route path='/client-area' element={<ClientArea />} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
