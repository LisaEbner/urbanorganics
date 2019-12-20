import React from "react";
function About() {


  return (
    <div style={{ backgroundColor: "rgba(85,239,196, 0.85)", fontFamily: "Lora, serif" }}>

      <h1 style={{ padding: "3rem 0" }}>About Us</h1>
      <br></br>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ minHeight: "40vh" }}>
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ padding: "0 15vw" }}>
            <h2>
              Better farms, better quality, better products. That’s our promise.</h2>
            <br></br>
            <p style={{ fontSize: "1.5rem", }}>
              Urban Organics is a Portland, Oregon based meal planning service
              delivering seasonal, organic, wellness smoothies for affordable prices.
              Designed for competitive athletes, these specially formulated blends are
              optimized to fuel your performance, promote wellness and provide maximum
              nutritional support. We reveal the ingredients behind every product from
              our ethical manufacturing process to our transparent pricing breakdown.
              Urban Organics is a wellness brand that sparks joy inspires simplifies
              and simplifies healthful living through freshly blended whole fruit,
              leafy greens, vegetables, and powerful antioxidants.
      </p>
          </div>
          <div className="carousel-item " style={{ padding: "0 15vw" }}>
            <h2>Why Urban Organics?</h2>
            <br></br>
            <strong style={{ fontSize: "1.5rem" }}> Stay Fit</strong>
            <br></br>
            <p style={{ fontSize: "1.5rem" }}>
              Traditional restaurant fare is associated with a daily increase in
              calories, fat, saturated fat and sodium. Studies have shown that fat
              mass increases and muscle mass decreases with age. Smart competitors
              know that abs are made in the kitchen.
      </p>
            <p style={{ fontSize: "1rem" }}>Save time and keep your meal budget on track By signing up for our
              affordable weekly meal delivery service, you create a predictable food
              budget and sustainable diet without the hassle of shopping, chopping,
        and cleaning up the kitchen.</p>
          </div>
          <div className="carousel-item" style={{ padding: "0 15vw" }}>
            <h2><strong>More Info</strong></h2>
            <h3 className=" mb-3">
              Be part of a solution 5% of all profits provide support for the Portland
              homeless community.</h3> <br />
            <h2 style={{ fontSize: "1.5rem" }}><strong>Employee Benefits & Wellness Plans</strong></h2>
            <p className="">
              Attract and maintain top talent with our employee wellness plans.
              Portland’s highest-rated employers care not just about the bottom line,
              but employee satisfaction, and wellbeing. Contact us today to discuss
              your custom catering needs.
      </p>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div >
  );
}

export default About;