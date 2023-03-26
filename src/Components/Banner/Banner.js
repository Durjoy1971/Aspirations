import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="caro">
      <Carousel fade>

      

        <Carousel.Item>
          <div className="banner_size">
            <img
              className="image-size"
              src="https://i.ibb.co/Qjpf4VS/first-logo.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>

    

        <Carousel.Item>
          <div className="banner_size">
            <img
              className="image-size"
              src="https://i.ibb.co/Qjpf4VS/first-logo.png"
              // src="https://i.ibb.co/3WK5nR2/second-logo.png"
              alt="First slide"
            />

          </div>
        </Carousel.Item>  

      

        <Carousel.Item>
          <div className="banner_size">
            <img
              className="image-size"
              src="https://i.ibb.co/Qjpf4VS/first-logo.png"
              // src="https://i.ibb.co/GC6bDhP/Third-logo.png"
              alt="First slide"
            />

          </div>
        </Carousel.Item>

      

        <Carousel.Item>
          <div className="banner_size">
            <img
              className="image-size"
              src="https://i.ibb.co/Qjpf4VS/first-logo.png"
              // src="https://i.ibb.co/x1Nd2ts/Fourth-logo.png"
              alt="First slide"
            />

          </div>
        </Carousel.Item>  

    

        <Carousel.Item>
          <div className="banner_size">
            <img
              className="image-size"
              src="https://i.ibb.co/Qjpf4VS/first-logo.png"
              // src="https://i.ibb.co/G9mTw3p/Fifth-logo.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>  

      </Carousel>
    </div>
  );
};

export default Banner;
