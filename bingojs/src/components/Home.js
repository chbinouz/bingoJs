import React from "react";
import "./Home.css";
import logo from "./image/Capture.png";
import Description from "./image/Description.jpg";
import Jumbotron from "../../node_modules/react-bootstrap/Jumbotron";
import Button from "../../node_modules/react-bootstrap/Button";
import Hunter from "./image/hunters-race-MYbhN8KaaEc-unsplash.jpg";
import Carousel from "../../node_modules/react-bootstrap/Carousel";
import ph1 from "./image/dylan-gillis-KdeqA3aTnBY-unsplash.jpg";
import ph2 from "./image/logan-jeffrey-mJ6E0ZQDMQ8-unsplash.jpg";
import ph3 from "./image/scott-graham-5fNmWej4tAA-unsplash.jpg";

export default function Home() {
  return (
    <div className="top">
      <div className="container-fluid">
        <br></br>
        <br></br>
        <br></br>
        <div>
          {" "}
          <img src={logo} className="logo img-fluid" alt="logo" />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <div>
            <img src={Description} className="desc img-fluid" alt="logo" />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Jumbotron id="jumb">
          <div className="hunterDiv">
            <h1>
              Why our website is so important <br></br> for your business
            </h1>
            <p>Imagine working few hours instead of a whole day</p>
            <p>
              <Button variant="primary">Read more</Button>
            </p>
          </div>
          <div className="hunterIMG">
            <img src={Hunter} className="hunt" alt="logo" />
          </div>
        </Jumbotron>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h1 className="quote">
            “Nothing we do is more important than hiring people. At the end of
            the day, you bet on people, not strategies.”
          </h1>
          <h5 className="aut">-Lawrence Bossidy</h5>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ph1}
              alt="First slide"
              className="cars"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ph2}
              alt="Second slide"
              className="cars"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ph3}
              alt="Third slide"
              className="cars"
            />
          </Carousel.Item>
        </Carousel>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
