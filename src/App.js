import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Home from './Home'
import Form from './Form';
import axios from "axios";
import * as yup from 'yup';
import schema from './formSchema'

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
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(initalDisabled);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }
  
  const changeForm = (name, value) =>{
    validate(name, value)
    setFormValues({
      ...formValues, [name]:value 
    })
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      onions: formValues.onions,
      mushrooms: formValues.mushrooms,
      bacon: formValues.bacon,
      special: formValues.special.trim()
    }

    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res=>{
      console.log(res.data);
      setOrders([...orders, res.data])
    })
    .catch(err=>{
      console.log(err)
    })
    setFormValues(initalFormValues)
  }
 
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


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
      <Route path="/pizza">
        <Form formErrors={formErrors} disabled={disabled} changeForm={changeForm} values={formValues} submit={submitForm} orders={orders}/>
      </Route>
    
    </>
  );
};
export default App;
