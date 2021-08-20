import React from 'react';
import { Link } from 'react-router-dom';


const Home =() =>{
   return (
        <>
            <div className="homePage">
                <img className="mainPic" src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
                <Link id="order-pizza" className="pizzaButton" to="/pizza">Pizza?</Link>
            </div>
        </>
   )
}


export default Home;