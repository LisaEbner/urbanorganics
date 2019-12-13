import React from "react";
function Home() {
  const perfectImageStyle = {
    backgroundImage: `url(./images/homepage-avacadomango-unsplash.jpg)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh",
  }


  return (
    <div style={perfectImageStyle} className="homePageImage text-center">
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-between", alignItems: "center" }}>

        <div style={{ paddingTop: "10rem" }} className="name-and-logo">

          <div style={{ height: "200px", width: "200px", background: "red", opacity: "0.3", }} className="urbanOrganicsLogo mx-auto">
            <h4 className="mx-auto">LOGO</h4>
          </div>

          <h1 className="">Urban Organics</h1>

        </div>

        <div style={{ height: "auto", width: "fit-content", border: "solid lightgray 1px", background: "black", opacity: "0.5", }} className="btn pb-2 pt-2 pr-4 pl-4">
          <h2 className="text-light mb-0">GO SHOPPING</h2>
          <h2 className="text-light">------></h2>
        </div>

        <div className="btn" id="arrowButton">
          <img src="./logos/arrow.png" alt="down arrow" className="flex-bottom"></img>
        </div>

      </div>

    </div>
  );
}

export default Home;