import React from 'react';
import navbar from './cmponents/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import home from './cmponents/pages/home'
import services from './cmponents/pages/services'
import products from './cmponents/pages/products'
import signup from './cmponents/pages/sign-up'

function App() {
  return (
    <>
    <Router>
    <navbar />
    <Switch>
      <Route path='/' exact cmponent={home}/>
      <Route path='/services' cmponent={services} />
      <Route path='/products' cmponent={products} />
      <Route path='/sign-up' cmponent={sign-up} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
