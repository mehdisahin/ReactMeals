import MealsSummary from "./MealsSummary";
import AvaliableMeals from "./AvaliableMeals";
import { Fragment } from "react";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaliableMeals />
    </Fragment>
  );
};
export default Meals;
