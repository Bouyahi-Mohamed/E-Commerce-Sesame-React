import './App.css';
import React from 'react';
import {Routes, Route,Link} from 'react-router-dom';
import Home from './pages';
import ProductDetails from './pages/ProductDetails';
import Order from './pages/order';
import Checkout from './pages/checkout';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>E-commerce Site</h1>
        <Link to="/">Home</Link> | <Link to="/order">Order</Link> | <Link to="/checkout">Checkout</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<div>404 Not Found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
