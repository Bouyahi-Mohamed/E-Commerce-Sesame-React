
import { useState, useEffect } from "react";
import "../styles/pages/order/orders.css";
import { Link } from "react-router-dom";
import Header1 from '../components/header1.js';
function Order() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart/")
      .then((response) => response.json())
      .then((data) => {
        // Handle the cart data
        setCarts(data);
      });
  }, []);
  const total = carts.reduce(
    (sum, item) => sum + Number(item.product.priceCents) * item.quantity,
    0
  );
  const cartList = carts.map((item) => {
    return (
      <Link to={`/cart/${item.product._id}`} className="cart-row" key={item._id}>
          <img src={item.product.image} alt="Product" />
          <p>{item.product.name}</p>
          <p>${item.product.priceCents / 100}</p>
          <p>x{item.quantity}</p>
      </Link>
    );
  });
  return (
    <>
      <Header1 />
      <div className="container">
        <div className="form-container">
          <form id="form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name.." required />
            <input type="email" name="email" placeholder="Email.." required />
          </div>

          <hr />
          <p className="section-title">Shipping Information:</p>
          <hr />

          <div className="form-group">
            <input type="text" name="address" placeholder="Address.." />
            <input type="text" name="city" placeholder="City.." />
            <input type="text" name="state" placeholder="State.." />
            <input type="text" name="zipcode" placeholder="Zip code.." />
            <input type="text" name="country" placeholder="Country.." />
          </div>

          <input type="submit" value="Continue" className="button-primary orderbtn" onClick={(e) => {
            e.preventDefault();
            alert("Order placed successfully!");
          }} />
        </form>
      </div>

      <div className="summary-container">
        <Link to="/cart" className="back-link">← Back to Cart</Link>
        <h3>Order Summary</h3>
        <br />
        <div className="cart-items">{cartList}</div>
        <h5>Items: {carts.length}</h5>
        <h5>Total: ${total / 100}</h5>
      </div>
    </div>
      </>

  );
}
export default Order;
