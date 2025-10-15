import styles from "./cart-main.module.css";
import { useState, useEffect } from "react";
// date-fns
import { format, addDays } from 'date-fns';
//import images
import arrowUp from "../../../assets/icons/arrow-up.png";
import arrowDown from "../../../assets/icons/arrow-down.png";
//end import images
import { Link } from "react-router-dom";
import axios from "axios";
import DeliveryOptions from "./DeliveryOptions";
export default function CartList({ carts }) {

  // fetch delivery options from backend
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  const fetchDeliveryOptions = async () => {
    try {
      const options = await axios.get("http://localhost:5000/deliverOptions");
      setDeliveryOptions(options.data);
    } catch (error) {
      console.error("Error fetching delivery options:", error);
    }
  };
  useEffect(() => {
    fetchDeliveryOptions();
  }, [deliveryOptions]);

  // calculate totals
  const totalCart = () => {
    let total = 0;
    carts.forEach((item) => {
      total += item.product.priceCents * item.quantity / 100;
    });
    return total.toFixed(2);
  };

  // calculate total shipping
  let  totalShipping = () => {
    let shippingCost = 0;
    carts.forEach((item) => {
      shippingCost += item.deliveryOption.priceCents / 100;
    });
    return shippingCost.toFixed(2);
  };

  // calculate tax and total after tax
  let totalBeforeTax = (parseFloat(totalCart()) + parseFloat(totalShipping())).toFixed(2);

  // calculate tax
  let tax = (totalBeforeTax * 0.1).toFixed(2);

  // calculate total after tax
  let totalAfterTax = (parseFloat(totalBeforeTax) + parseFloat(tax)).toFixed(2);

  // handle increase quantity
  const handleIncreaseQuantity = (cart) => {
    axios.patch(`http://localhost:5000/cart/`, {
      id: cart._id,
      quantity: cart.quantity + 1,
    });
  };
  // handle decrease quantity
  const handleDecreaseQuantity = (cart) => {
    if (cart.quantity > 1) {
      axios.patch(`http://localhost:5000/cart/`, {
        id: cart._id,
        quantity: cart.quantity - 1,
      });
    } else {
      axios.delete(`http://localhost:5000/cart/`, {
        data: { id: cart._id },
      });
    }
  };

  // handle delete item
  const handleDeleteItem = (cart) => {
    axios.delete(`http://localhost:5000/cart/`, {
      data: { id: cart._id },
    });
  };

  // create cart items
  let cartItems = carts.map((cart) => (
    <div className={styles["cart-item-container"]} key={cart._id}>
      <div className={styles["delivery-date"]}>
        Delivery date:{" "}
        {format(addDays(new Date(), cart.deliveryOption.estimatedDays), 'MMMM dd, yyyy')}
      </div>
      <div className={styles["cart-item-details-grid"]}>
        <img
          className={styles["product-image"]}
          src={`/${cart.product.image}`}
          alt={cart.name}
        />

        <div className={styles["cart-item-details"]}>
          <div className={styles["product-name"]}>{cart.product.name}</div>
          <div className={styles["product-price"]}>{cart.price}</div>
          <div className={styles["product-quantity"]}>
            <span>
              Quantity:{cart.quantity}
              <span className={styles[`quantity-label`]}>
                {" "}
                {cart.product.quantity}{" "}
              </span>
            </span>
            <div className="quantity-link">
              <div className="update-quantity-link link-primary">
                <img
                  className={`${styles["chg-quantity"]} ${styles["update-cart"]} ${styles["img-arrow"]}`}
                  src={arrowUp}
                  alt="Increase quantity"
                  onClick={() => handleIncreaseQuantity(cart)}
                />
                <img
                  className={`${styles["chg-quantity"]} ${styles["update-cart"]} ${styles["img-arrow"]}`}
                  src={arrowDown}
                  alt="Decrease quantity"
                  onClick={() => handleDecreaseQuantity(cart)}
                />
              </div>
            </div>
            <span
              className={`${styles["delete-quantity-link"]} ${"link-primary"}`}
              onClick={() => handleDeleteItem(cart)}
            >
              Delete{" "}
            </span>
          </div>
        </div>

        <div className={styles["delivery-options"]}>
          <div className={styles["delivery-options-title"]}>
            Choose a delivery option:
          </div>
          {deliveryOptions.map((option) => (
            <DeliveryOptions
              key={option._id}
              deliveryOptions={[option]}
              cart={cart}
            />
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className={styles.main}>
        <div className={styles["page-title"]}>Review your order</div>

        <div className={styles["checkout-grid"]}>
          <div className={styles["order-summary"]}>{cartItems}</div>

          <div className={styles["payment-summary"]}>
            <div className={styles["payment-summary-title"]}>Order Summary</div>

            <div className={styles["payment-summary-row"]}>
              <div>Items ({carts.length}):</div>
              <div className={styles["payment-summary-money"]}>
                ${totalCart()}
              </div>
            </div>

            <div className={styles["payment-summary-row"]}>
              <div>Shipping &amp; handling:</div>
              <div className={styles["payment-summary-money"]}>
                $
                {totalShipping()}
              </div>
            </div>

            <div
              className={`${styles["payment-summary-row"]} ${styles["subtotal-row"]}`}
            >
              <div>Total before tax:</div>
              <div className={styles["payment-summary-money"]}>${totalBeforeTax}</div>
            </div>

            <div className={styles["payment-summary-row"]}>
              <div>Estimated tax (10%):</div>
              <div className={styles["payment-summary-money"]}>${tax}</div>
            </div>

            <div
              className={`${styles["payment-summary-row"]} ${styles["total-row"]}`}
            >
              <div>Order total:</div>
              <div className={styles["payment-summary-money"]}>${totalAfterTax}</div>
            </div>

            <Link to="/orders">
              <button
                className={`${
                  styles["place-order-button"]
                } ${"button-primary"}`}
              >
                Place your order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
