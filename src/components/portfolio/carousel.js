import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './carousel.scss'
import img1 from "./images/nameTrender (2).JPG";
// import img2 from "./images/undraw_progressive_app_m9ms.svg";
// import img3 from "./images/undraw_feeling_proud_qne1.svg";

const service1 = {
  img: img1,
  title: "Name Trender",
  para:
    "Enter a name and see how it has been trending in the U.S. since 1881!"
};
const service2 = {
  img: img1,
  title: "responsive websites",
  para:
    "high quality responsive websites that will look wonderful on any device"
};
const service3 = {
  img: img1,
  title: "general scripting/automations",
  para:
    "scripts & automations to replace tedius/repetitive task on the computer"
};

const services = [service1, service2, service3];

function ControlledCarousel(props) {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      id="carousel"
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
    >
      {services.map(props => (
        <Carousel.Item key={props.img}>
          <div className="carousel-img  w-100">
          <img  src={props.img} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>{props.title}</h3>
            <p>{props.para}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
