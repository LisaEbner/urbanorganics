import React from "react";
import {Link} from 'react-router-dom'
function About(props) {
  const perfectImageStyle = {
    backgroundImage: `url(./images/smoothiephone.jpg)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  };

  return (
    <div>
<Link to='/about'>
<button>ABOUT</button>
    </Link>
    <Link to='/'>
<button>HOME</button>
    </Link>
    <Link to='/store'>
<button>STORE</button>
    </Link>
      <div style={perfectImageStyle} className="homePageImage text-center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div style={{ paddingTop: "10rem" }} className="name-and-logo">
            <div
              style={{
                height: "200px",
                width: "200px",
                background: "red",
                opacity: "0.3"
              }}
              className="urbanOrganicsLogo mx-auto"
            >
              <h4 className="mx-auto">LOGO</h4>
            </div>

            <h1 className="">Urban Organics</h1>
          </div>

          <div
            style={{
              height: "auto",
              width: "fit-content",
              border: "solid lightgray 1px",
              background: "black",
              opacity: "0.5"
            }}
            className="btn pb-2 pt-2 pr-4 pl-4"
          >
            <h2 className="text-light mb-0">GO SHOPPING</h2>
            <h2 className="text-light">------></h2>
          </div>

          <div className="btn" id="arrowButton">
            <img
              src="./logos/arrow.png"
              alt="down arrow"
              className="flex-bottom"
            ></img>
          </div>
        </div>
      </div>
      <h1>About</h1>
      <br></br>
      <h2>
        Better farms, better quality, better products. That’s our promise.
      </h2>
      <br></br>
      <h2>
        Urban Organics is a Portland, Oregon based meal planning service
        delivering seasonal, organic, wellness smoothies for affordable prices.
        Designed for competitive athletes, these specially formulated blends are
        optimized to fuel your performance, promote wellness and provide maximum
        nutritional support. We reveal the ingredients behind every product from
        our ethical manufacturing process to our transparent pricing breakdown.
        Urban Organics is a wellness brand that sparks joy inspires simplifies
        and simplifies healthful living through freshly blended whole fruit,
        leafy greens, vegetables, and powerful antioxidants.
      </h2>
      <br></br>
      <strong>Why Urban Organics?</strong>
      <br></br>
      <strong>Stay Fit</strong>
      <br></br>
      <p>
        Traditional restaurant fare is associated with a daily increase in
        calories, fat, saturated fat and sodium. Studies have shown that fat
        mass increases and muscle mass decreases with age. Smart competitors
        know that abs are made in the kitchen.
      </p>
      <br></br>
      <strong>
        Save time and keep your meal budget on track By signing up for our
        affordable weekly meal delivery service, you create a predictable food
        budget and sustainable diet without the hassle of shopping, chopping,
        and cleaning up the kitchen.
      </strong>
      <br></br>
      <strong>
        Be part of a solution 5% of all profits provide support for the Portland
        homeless community
      </strong>
      <strong>Employee Benefits & Wellness Plans</strong>
      <p>
        Attract and maintain top talent with our employee wellness plans.
        Portland’s highest-rated employers care not just about the bottom line,
        but employee satisfaction, and wellbeing. Contact us today to discuss
        your custom catering needs.
      </p>
    </div>
  );
}

export default About;
