import React from "react";

function StoreCard(props) {

  return (
    <div>


      <div className="card" style={{ width: "18rem", border: "solid 1px black", margin: "2rem" }}>
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
      <div className="modal fade" id="storeCardModal" tab-index="-1" role="dialog" aria-labelledby="storeCardModalTitle" aria-hidden="true">
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

export default StoreCard;