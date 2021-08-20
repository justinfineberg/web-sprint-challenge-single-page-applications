import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Home from './Home'
import Form from './Form';

const initalFormValues = {
  name: '',
  size: '',
  onions: false,
  sasuage: false,
  mushrooms: false,
  bacon: false,
  special: ''
}

const initalFormErrors = {
  name: '',
  size: '',
  onions: '',
  sasuage: '',
  mushrooms: '',
  bacon: '',
  special: ''
}

const initalDisabled = true;

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <div className="navLinks">
        <Link className="mainLink" to="/"> Home </Link>
        <Link className="mainLink" to="/pizza"> Order Pizza </Link>
        </div>
      </header>
      <Route exact path="/" component={Home} /> 
      <Route path="/pizza" component={Form} />
    
    </>
  );
};
export default App;
