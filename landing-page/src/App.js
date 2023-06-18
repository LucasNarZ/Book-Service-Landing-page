import React from 'react';
import './css/styles.css';


import { Header } from './components/header.js'
import { Hero } from './components/hero.js'
import { Features } from './components/features.js'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Features />
    </React.Fragment>
    
  );
}

export default App;
