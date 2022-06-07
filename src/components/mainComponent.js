import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../redux/cartReducer";
import CartNavigation from "./cartNavigation";
import ShoppingBag from "./shoppingPage";
import Popup from "./Modal";

const MainComponent = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <div>
      {isOpen && <Popup />}
      <CartNavigation />
      <ShoppingBag />
    </div>
  );
};

export default MainComponent;
