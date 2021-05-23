import React from 'react';
import { Header } from './components/Header.js'
import { Balance } from './components/Balance.js'
import { Cashflow } from './components/Cashflow.js'

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Cashflow />
      </div>
    </div>
  );
}

export default App;
