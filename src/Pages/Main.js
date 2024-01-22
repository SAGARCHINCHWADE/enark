import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import {CourserList} from './../List/CourserList'
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
        {CourserList.map((ele)=>(
           <Carousel.Item interval={500}>
           <img className="d-block w-100" src={ele.images} alt="four" />
         </Carousel.Item>
        ))}
       
      </Carousel>
    </div>
  );
};

export default Main;
