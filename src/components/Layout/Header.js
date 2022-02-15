import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../components/Assets/meals.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <button>Cart</button>
      </header>
      <div>
        <img
          src={mealsImage}
          alt="A table of yummy food"
          className={classes["main-image"]}
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
