import '../styles/pages/sesame.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import nbCartContext from '../context/contextProduit';
export default function ProductList({ products = [] }) {
  const {nbCart, setNbCart} = useContext(nbCartContext);

  let ProductItems = products.map((product) => {
    return (
      <div className="product-container" key={product._id}>
        <Link to={`/product/${product._id}`}>
          <div className="product-image-container">
            <img className="product-image"
              src={product.image} alt={product.name} />
          </div>
        </Link>
          <div className="product-name limit-text-to-2-lines">
            {product.name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={`../images/ratings/rating-${product.rating.stars * 10}.png`} alt={`${product.rating.stars} stars`} />
            <div className="product-rating-count link-primary">
              {product.rating.count} 
            </div>
          </div>

          <div className="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={`images/icons/checkmark.png`} alt="Added to cart" />
            Added
          </div>
        
          <button className="add-to-cart-button button-primary"
          onClick={() => {
            setNbCart((e) => e + 1);
            alert(product.image);
          }}>
            Add to Cart
          </button>
        </div>
    );
  });

  return (
    <div className="main">
      <div className="products-grid">
        {ProductItems}
      </div>
    </div>
  );
}