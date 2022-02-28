import classes from "./Card.module.css";
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

//this is just a wrapper component to style the CSS of another component - can be used in different places.
