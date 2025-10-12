import Header2 from "../../components/header2";
import CartList from "./CartList";

export default function Cart({ carts }) {



  return (
    <div>
      <Header2 carts={carts} />
      <CartList carts={carts} />
    </div>
  );
}