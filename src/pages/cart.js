import Header2 from "../components/header2";
import CheckoutList from "../components/Checkout-list";
import {useState, useEffect } from "react";

export default function Checkout() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart/")
    .then((response) => response.json())
    .then((data) => {
      // Handle the cart data
      setCarts(data);
    });
  }, []);

  return (
    <div>
      <Header2 />
      <CheckoutList carts={carts} />
    </div>
  );
}