import axios from 'axios';
import './App.css';
import {useState ,useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import ProductDetails from './pages/ProductDetails';
import Order from './pages/order';
import Cart from './pages/cart';
import Login from './pages/login';
import Logout from './pages/logout';
import Signup from './pages/signup';
import CartItemDetail from './pages/CartItemDetail';  
// import context

function App() {

 const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const products = await axios.get('http://localhost:5000/products/');
      setProducts(products.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
    useEffect(() => {
       fetchProducts();
    }, [products]);

    const [carts, setCarts] = useState([]);
  const fetchCarts = async () => {
            try {
              const carts = await axios.get('http://localhost:5000/cart/');
              setCarts(carts.data);
            } catch (error) {
              console.error("Error fetching carts:", error);
            }
        };
    useEffect(() => {
        fetchCarts();
    }, [carts]);

  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home products={products} carts={carts} />}/>
        <Route path='/home' element={<Home products={products} carts={carts} />}/>

        <Route path='/product/:id' element={<ProductDetails carts={carts} />}/>
        <Route path='/orders' element={<Order carts={carts} />}/>
        <Route path='/cart' element={<Cart carts={carts} />}/>
        <Route path='/cart/:id' element={<CartItemDetail carts={carts} />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<div>404 Not Found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
