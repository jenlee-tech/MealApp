import React from "react";

const CartContext = React.createContext({
  items: [], //number of items in the cart
  totalAmount: 0, //total dollar amount
  addItem: (item) => {}, //this is a function
  removeItem: (id) => {}, //this is a function
});

export default CartContext;
