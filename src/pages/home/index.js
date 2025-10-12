// start import component 
import  Footer  from '../../components/footer.js';
import Header1 from '../../components/header1.js';
import ProductList from './productList.js';
// end import component 

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
