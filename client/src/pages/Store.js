import React, { useState } from "react";
import StoreCard from "../components/StoreCard";
import FilterDropdown from "../components/FilterDropdown"

const tempArray = Array(12).fill("");

function StorePage() {

  const [foodName, setFoodName] = useState("Food Name");
  const [foodImage, setFoodImage] = useState("./placeHolders/286x180.svg")
  const [foodDescription, setFoodDescription] = useState("This is the decription for the above food item.");
  const [foodIngredients, setFoodIngredients] = useState("Bananas, nuts, flower, honey, egg.");
  const [nutritionFacts, setNutritionFacts] = useState("Nutitrional Facts not found.");
  const [foodPrice, setFoodPrice] = useState(9.99);
  const [menuItemsArray, setMenuItemsArray] = useState([])







  return (
    <div className="container-fluid ">
      <div className="row">
        <FilterDropdown />
      </div>
      <div className="container mx-auto">

        <div className="row">

          {tempArray.map(
            () => <StoreCard foodName={foodName} foodImage={foodImage} foodIngredients={foodIngredients} foodDescription={foodDescription} nutritionFacts={nutritionFacts} foodPrice={foodPrice} />
          )}

        </div>
      </div>

    </div>
  )

}

export default StorePage;