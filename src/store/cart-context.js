import React from "react";

const CartContext = React.createContext({
  items: [], //number of items in the cart
  totalAmount: 0, //total dollar amount
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
