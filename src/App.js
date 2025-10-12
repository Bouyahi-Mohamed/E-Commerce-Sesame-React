// start import css is like a general css 
import './App.css';
// end css import 
import axios from 'axios';// axios for fetching 
import {useState ,useEffect} from 'react'; // usehooks 
import {Routes, Route} from 'react-router-dom'; //hooks for do routing in react 
//start import pages
import Home from './pages/home/index';
import Cart from './pages/cart/cart';
import ProductDetails from './pages/ProductDetails';
import Order from './pages/order';
import Login from './pages/login';
import Logout from './pages/logout';
import Signup from './pages/signup';
import CartItemDetail from './pages/CartItemDetail';
// end impot pages  

function App() {

  // start fetch products from backend

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
  
  // end fetch product 

  //fetch cart from backend
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

    // ---end fetch products from backend---

  return (
    // start making routes
    <div className="App">
  
      <Routes>
        <Route path='/' element={<Home products={products} carts={carts} />}/>
        <Route path='/home' element={<Home products={products} carts={carts} />}/>

        <Route path='/product/:id' element={<ProductDetails carts={carts} />}/>
        <Route path='/orders' element={<Order carts={carts} />}/>
        <Route path='/cart' element={<Cart carts={carts} />}/>
        <Route path='/cart/:id' element={<CartItemDetail carts={carts} />}/>
        <Route path='/login' element={<Login carts={carts} />}/>
        <Route path='/logout' element={<Logout carts={carts} />}/>
        <Route path='/signup' element={<Signup carts={carts} />}/>
        <Route path='*' element={<div>404 Not Found</div>}/>
      </Routes>
    </div>
    //end routes
  );
}

export default App;
