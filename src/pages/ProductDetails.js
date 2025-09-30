import "../styles/pages/produit.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import nbCartContext from '../context/contextProduit';
import Header from "../components/header1";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { nbCart, setNbCart } = useContext(nbCartContext);
  // state for select content
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const { id } = useParams();
  //  fetch for product details

  useEffect(() => {
    //fetch data
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProduct(null);
      });
  }, [id]);

  return (
    <div className="product-details-page">
      <Header />
      {/* start Close Button */}
      <Link to="/" className="back-button">
        <div className="close-button">
          <i className="fa-solid fa-circle-xmark fa-2xl"></i>
        </div>
      </Link>
      {/* end Close Button */}

      {product ? (
        <div className="container" key={product.id}>
          <div className="product-image">
            <img src={`/${product.image}`} alt={product.name} />
          </div>
          <div className="product-details">
            <img
              src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
              alt={`${product.rating.stars} stars`}
            />
            <h1>{product.name}</h1>

            <h2>${(product.priceCents / 100).toFixed(2)}</h2>
            <div className="product-description">
              <h3>Description:</h3>
              <p>{product.description}</p>
            </div>
            <div className="product-rating-count">
              <div className="add-to-cart">
                <select
                  className="quantity-select"
                  value={selectedQuantity}
                  onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button
                  className="button-primary"
                  onClick={() => {
                    setNbCart((e) => e + selectedQuantity);
                    alert(product.image);
                  }}
                >
                  {" "}
                  Add to Cart{" "}
                </button>
              </div>
              <div className="review-count">{product.rating.count} reviews</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">Loading product details...</div>
      )}
    </div>
  );
}