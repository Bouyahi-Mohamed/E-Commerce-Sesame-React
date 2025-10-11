
import { useParams } from "react-router-dom";
import Header1 from "../components/header1";
function CartItemDetail(cart) {
  const { id } = useParams();

  return (
    <>
      <Header1 carts={cart} />
      <div className="container">
        <p>This is a placeholder for the Cart Item Detail page {id}.</p>
      </div>
    </>
  );
}
export default CartItemDetail;