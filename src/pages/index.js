import { useEffect ,useState} from 'react';
import axios from 'axios';
import  Footer  from '../components/footer.js';
import Header1 from '../components/header1.js';
import ProductList from '../components/productList.js';
function Home({ products, carts }) {

  return (
   <>
    <Header1 carts={carts} />
    <ProductList products={products} />
    <Footer />
  </>
  );
}
export default Home;
