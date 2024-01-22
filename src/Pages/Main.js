import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        padding: 30,
      }}
    >
      <h1 >Expand your career opportunities with OUR COURSES</h1>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src="/image/1.jpg" alt="One" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="/image/2.jpg" alt="Two" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="/image/3.jpg" alt="Two" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Main;
