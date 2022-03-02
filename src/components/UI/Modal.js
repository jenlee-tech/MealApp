import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

//This modal wraps around the Cart component to make the Cart a modal
//Createportal, creates a node that is outside the hierarchy of the DOM component.

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {" "}
      {/*so the components could be side by side*/}
      {/*this is the background (dark gray) when the cart is clicked on */}
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalElement
      )}
      {/*this is where the cart appears in */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
