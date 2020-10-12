import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
