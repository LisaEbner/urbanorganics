import React, { useState } from "react";

function StorePage() {

  const [foodName, setFoodName] = useState("Food Name");
  const [foodImage, setFoodImage] = useState("./placeHolders/286x180.svg")
  const [foodDescription, setFoodDescription] = useState("This is the decription for the above food item.");
  const [foodIngredients, setFoodIngredients] = useState("Bananas, nuts, flower, honey, egg.");
  const [nutritionFacts, setNutritionFacts] = useState("Nutitrional Facts not found.");
  const [foodPrice, setFoodPrice] = useState(9.99);


  function StoreCard(props) {

    return (
      <div>


        <div className="card" style={{ width: "18rem", border: "solid 1px black" }}>
          <img className="card-img-top" src={props.foodImage} alt="food item image"></img>
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">{props.foodDescription}</p>
            <div className="row">
              <div className="col-sm-12">
                <button className="btn btn-info text-light h1" data-toggle="modal" data-target="#storeCardModal">🔽</button>
                <button className="btn btn-info text-light h1 float-right" href="#">${props.foodPrice} 🛒</button>
              </div>
              <div className="col-sm-6">
              </div>
            </div>

          </div>
        </div>


        {/* Modal */}
        <div className="modal fade" id="storeCardModal" tabindex="-1" role="dialog" aria-labelledby="storeCardModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalFoodTitle">{props.foodName}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img className="pb-2" src="./placeHolders/572x360.svg" alt="bigFoodImage"></img>

                <p className="card-text">Description: {props.foodDescription}</p>
                <p className="card-text">Ingredients: {props.foodIngredients}</p>
                <p className="card-text">Nutitrional Facts: {props.nutritionFacts}</p>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
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
      <StoreCard foodName={foodName} foodImage={foodImage} foodIngredients={foodIngredients} foodDescription={foodDescription} nutritionFacts={nutritionFacts} foodPrice={foodPrice} />

    </div>
  )

}

export default StorePage;