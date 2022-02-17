import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* special React feature, only for inputs, it looks like deconstruction but not exactly, React converst, props.input(key:value) into key=value and places it as a HTML attribute feature */}
    </div>
  );
};

export default Input;
