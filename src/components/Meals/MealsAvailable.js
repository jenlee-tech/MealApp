import classes from "./MealsAvailable.module.css";
import React from "react";
import Card from "../UI/Card"; //wrapper component to style the components within
import MealItem from "../Meals/MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

//nifty way to map out component wit styling that already contains li tags from MealItem component.

const mealsList = DUMMY_MEALS.map((meal) => (
  <MealItem
    id={meal.id}
    key={meal.id}
    name={meal.name}
    price={meal.price}
    description={meal.description}
  />
));

const MealsAvailable = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
