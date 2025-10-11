import Header2 from "../components/header2";
import CheckoutList from "../components/Checkout-list";

export default function Checkout({ carts }) {



  return (
    <div>
      <Header2 carts={carts} />
      <CheckoutList carts={carts} />
    </div>
  );
}