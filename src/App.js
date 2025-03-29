import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';
import Basket from './components/Basket';


function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Welcome to Tripoli Socks</h1>
        <p className="header-subtitle">Delivery all over Lebanon</p>
        <p className="header-subtitle">Cash on delivery</p>
      </header>

      <div className="container">
        <Basket basket={basket} setBasket={setBasket} />
        <Products addToBasket={addToBasket} />
      </div>
      <div className="aboutus">
        <h1 className="h1about">
          About US
        </h1>
        <a className="linkinsta" href="https://www.instagram.com/tripoli_socks?igsh=bmcxbTZvYWF6anFt&utm_source=qr" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <p className="nbr">Number : 81365212</p>
        
        <p className="para">
          At Tripoli Socks, we blend quality and style with a touch of Tripoli’s vibrant spirit.
          At Tripoli Socks, we blend quality and style with a touch of Tripoli’s vibrant spirit.
        </p>
      </div>
    </div>
  );
}

export default App;
