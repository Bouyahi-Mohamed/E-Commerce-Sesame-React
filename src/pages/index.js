import { useEffect ,useState} from 'react';
import axios from 'axios';
import  Footer  from '../components/footer.js';
import Header1 from '../components/header1.js';
import ProductList from '../components/productList.js';
function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await axios.get('http://localhost:5000/products/');
            setProducts(products.data);
        };
        fetchProducts();
    }, []);

  return (
   <>
    <Header1 />
    <ProductList products={products} />
    <Footer />
  </>
  );
}
export default Home;
