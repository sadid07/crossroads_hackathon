import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import slider1 from "./CarouselImage/slider1.jpg"
import slider2 from "./CarouselImage/slider2.jpg"
import slider3 from "./CarouselImage/slider3.jpg"
import slider4 from "./CarouselImage/slider4.jpg"

export default () => (
  <Carousel
    autoPlay
    infiniteLoop
    showArrows={true}
    showThumbs={false}
    stopOnHover={false}
    interval={3000}
    showStatus={false}
  >




    <div>
      <img
        className="home__image"
        src={slider1}
        alt="amazon-banner"
      />
    </div>



    <div>
      <img
        className="home__image"
        src={slider2}
        alt="amazon-banner"
      />
    </div>

    <div>
      <img
        className="home__image"
        src={slider3}
        alt="amazon-banner"
      />
    </div>

    <div>
      <img
        className="home__image"
        src={slider4}
        alt="amazon-banner"
      />
    </div>




  </Carousel>
);
