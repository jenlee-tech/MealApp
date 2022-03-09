import CartIcon from "../Cart/CartIcon"; //the actual image of a little whittle cart (svg)
import React from "react";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext); //the useContext hook, has to use the object(CartContext)

  //using reduce method that uses the previous value and current value, check out MDN for fuller explanation on reduce method.
  const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0); //the context helps interject state data into components without the use of pop drilling.

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${btnISHighLighted ? classes.bump : ''`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      {" "}
      {/*pop driling instead of context*/}
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
