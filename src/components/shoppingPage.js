import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import CartItem from "./CartItems";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../redux/modalReducer";

const ShoppingBag = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems, total, amount);

  if (amount < 1) {
    return (
      <div className="container text-center mt-5">
        <h1 className="font-monospace">Your Bag</h1>
        <div className="row my-1">
          <p className="font-monospace text-muted"> is currently Empty</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <h1 className="font-monospace text-center">Your Bag</h1>
      <div className="row my-4 d-grid mb-5">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* footer */}
      <hr />
      <div className="row d-grid justify-content-end">
        <h5 className="fw-bolder">
          Total: <span>{total.toFixed(2)}</span>
        </h5>
      </div>
      <div className="d-grid justify-content-end pb-4">
        <MDBBtn color="warning" onClick={() => dispatch(openModal())}>
          clear cart
        </MDBBtn>
      </div>
    </div>
  );
};

export default ShoppingBag;
