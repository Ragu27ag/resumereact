import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Caroussel = () => {
  return (
    <div style={{ width: "700px", marginBottom: "10px" }}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={require("./180962511-there-is-a-blue-notebook-on-a-light-gray-background-above-are-three-wooden-blocks-with-the-words.webp")}
            alt="First slide"
            height={300}
            width={300}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={require("./247392.webp")}
            alt="First slide"
            height={300}
            width={300}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={require("./work-hard-think-fast-and-youll-last-quote-1.jpg")}
            alt="First slide"
            height={300}
            width={300}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caroussel;
