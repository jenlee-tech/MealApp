import React from "react";
import MealsAvailable from "./MealsAvailable";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>

      <MealsAvailable></MealsAvailable>
    </React.Fragment>
  );
};

export default Meals;
