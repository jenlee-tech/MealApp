import React from "react";
import classes from "./Input.module.css";

//this component is used to style the input tag of the MealItemForm component

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* special React feature {...props.input}, only for inputs, it looks like deconstruction but not exactly, React converts, props.input(key:value) into key=value and places it as a HTML attribute feature */}
    </div>
  );
});

export default Input;
