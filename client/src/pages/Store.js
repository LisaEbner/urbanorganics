import React, { useState } from "react";

function StorePage() {

  const [foodName, setFoodName] = useState("Food Name");
  const [foodDescription, setFoodDescription] = useState("This is the decription for the above food item. it has banannas, nuts, and other ingreidents.");
  const [nutritionFacts, setNutritionFacts] = useState("Nutitrional Facts not found.")


  function StoreCard(props) {

    return (
      <div className="card" style={{ width: "18rem", border: "solid 1px black" }}>
        <img className="card-img-top" src="./placeHolders/286x180.svg" alt="food item image"></img>
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">{props.foodDescription}</p>
          <a className="btn btn-info text-light h1 float-right" href="#">></a>
        </div>
      </div>
    )
  }

  function FilterDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
          Filter
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">
            <input type="checkbox" className="form-check-input" id="filterItem1CheckBox"></input>
            <label className="form-check-label" htmlFor="filterItem1CheckBox">filter one</label>
          </div>
          <div className="dropdown-item">
            <input type="checkbox" className="form-check-input" id="filterItem2CheckBox"></input>
            <label className="form-check-label" htmlFor="filterItem2CheckBox">filter two</label>
          </div>
          <div className="dropdown-item">
            <input type="checkbox" className="form-check-input" id="filterItem3CheckBox"></input>
            <label className="form-check-label" htmlFor="filterItem3CheckBox">filter three</label>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid mx-auto">
      <div className="row">
        <div className="col-sm-12 col-md-2">
          <FilterDropdown />
        </div>
      </div>
      <StoreCard foodName={foodName} foodDescription={foodDescription} />

    </div>
  )

}

export default StorePage;