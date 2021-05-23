import React from 'react';
import { Header } from './components/Header.js'
import { Balance } from './components/Balance.js'
import { Cashflow } from './components/Cashflow.js'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction.js'

import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Cashflow />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
