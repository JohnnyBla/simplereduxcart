import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import { clearCart } from "../redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../redux/modalReducer";

const Popup = () => {
  const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <MDBModal show={() => dispatch(openModal())} tabIndex="-1">
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>
              {" "}
              <MDBIcon
                color="warning"
                className="mx-2"
                fas
                icon="shopping-cart"
              />{" "}
              Shopping Cart
            </MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={() => {
                dispatch(closeModal());
              }}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody className="font-monosapce">
            {" "}
            Are you Sure you want to Remove all {amount} items from your
            shopping car?
          </MDBModalBody>

          <MDBModalFooter>
            <div className="row">
              <div className="col-6">
                <MDBBtn
                  color="secondary"
                  onClick={() => {
                    dispatch(closeModal());
                    dispatch(clearCart());
                  }}
                >
                  Confirm
                </MDBBtn>
              </div>
              <div className="col-6">
                <MDBBtn
                  onClick={() => {
                    dispatch(closeModal());
                  }}
                >
                  Cancel
                </MDBBtn>
              </div>
            </div>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default Popup;
