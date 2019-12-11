import React from "react";
//import perfectImage from "../../public/images/homepage-avacadomango-unsplash.jpg"
function Home() {
  const perfectImageStyle = {
    backgroundImage: `url(./images/homepage-avacadomango-unsplash.jpg)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  }
  return (
    <div style={perfectImageStyle} className="homePageImage">
      <h1 style={{ padding: "23rem" }} className="text-center">Urban Organics</h1>

    </div>
  );
}

export default Home;