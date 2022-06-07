import React from "react";
import { useSelector } from "react-redux";
import {
  MDBContainer,
  MDBNavbarLink,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBBadge,
} from "mdb-react-ui-kit";

const CartNavigation = () => {
  const amount = useSelector((store) => store.cart.amount);

  return (
    <MDBNavbar dark bgColor="dark">
      <MDBContainer>
        <MDBNavbarBrand href="#" className="mb-2 mb-lg-0">
          Redux Simple Cart
        </MDBNavbarBrand>
        <MDBNavbarLink href="#" className="mx-3">
          <MDBIcon
            fas
            color="white-50"
            size="lg"
            icon="shopping-cart"
            className="me-3"
          />
          <MDBBadge className="fs-6" notification color="danger">
            {amount}
          </MDBBadge>
        </MDBNavbarLink>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default CartNavigation;
