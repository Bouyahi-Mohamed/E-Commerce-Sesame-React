import './App.css';
import {useState,useContext} from 'react';
import {Routes, Route,Link} from 'react-router-dom';
import Home from './pages';
import ProductDetails from './pages/ProductDetails';
import Order from './pages/order';
import Checkout from './pages/checkout';
import nbCartContext from './context/contextProduit';

function App() {
  const [nbCart, setNbCart] = useState(0);

  return (
     <nbCartContext.Provider value={{ nbCart, setNbCart }}>
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<div>404 Not Found</div>}/>
      </Routes>
    </div>
    </nbCartContext.Provider>
  );
}

export default App;
