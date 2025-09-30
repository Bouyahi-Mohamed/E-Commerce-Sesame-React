import './App.css';
import {useState,useContext} from 'react';
import {Routes, Route,Link} from 'react-router-dom';
import Home from './pages/index';
import ProductDetails from './pages/ProductDetails';
import Order from './pages/order';
import Cart from './pages/cart';
import Login from './pages/login';
import Logout from './pages/logout';
import Signup from './pages/signup';
// import context
import nbCartContext from './context/contextProduit';

function App() {
  const [nbCart, setNbCart] = useState(0);

  return (
     <nbCartContext.Provider value={{ nbCart, setNbCart }}>
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>

        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<div>404 Not Found</div>}/>
      </Routes>
    </div>
    </nbCartContext.Provider>
  );
}

export default App;
