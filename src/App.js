import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
