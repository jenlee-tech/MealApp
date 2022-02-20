import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../components/Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
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
