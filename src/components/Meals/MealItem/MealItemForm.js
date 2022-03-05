import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

//detailed code just for one input field, which is the amount of a particular meal - LOL

//useRef is used to hold values without a rerendering of the page (instead of two way binding)

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //the plus sign will convert a string number to a numbe type

    //validation here to see if input is valid, from lines 17 - 26
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit"> + Add </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
