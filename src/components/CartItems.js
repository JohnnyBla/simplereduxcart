import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../redux/cartReducer";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row d-flex px-4">
        <img
          className="img-fluid pb-3"
          src={img}
          alt={title}
          style={{ maxWidth: "60px" }}
        />
        <div className="col-6 mx-2 mb-1">
          <h5>{title}</h5>
          <p>
            Price: ${price}
            <MDBBtn size="sm"
             color="link"
             onClick={()=> dispatch(removeItem(id))}
             >
              Remove
            </MDBBtn>
          </p>
        </div>
        <div className="col d-grid  justify-content-end">
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            onClick={() => dispatch(increase({id}))}
            style={{ color: "#3b5998" }}
          >
            <MDBIcon fas icon="angle-up" size="sm" />
          </MDBBtn>
          <div className="mx-1">{amount}</div>
          <div className="row">
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#3b5998" }}
              onClick={() => {
                if(amount === 1){
                  dispatch(removeItem(id))
                  return
                }
                dispatch(decrease({id}))}}
            >
              <MDBIcon fas icon="angle-down" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
