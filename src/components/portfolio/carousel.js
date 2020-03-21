import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './carousel.scss'
import img1 from "./images/nameTrender4.JPG";
import img2 from "./images/responsive1.JPG";
// import img3 from "./images/thirsty.jpg";
import img4 from "./images/andres-urena-tsBropDpnwE-unsplash.jpg";
import img5 from "./images/christopher-gower-m_HRfLhgABo-unsplash.jpg";
// import img2 from "./images/undraw_progressive_app_m9ms.svg";
// import img3 from "./images/undraw_feeling_proud_qne1.svg";

const service1 = {
  img: img1,
  title: "Name Trender",
  para:
    "Created as a personal project. Enter a name and see how it has been trending in the U.S. since 1881!",
    link: "https://www.nametrender.com"
};
const service2 = {
  img: img2,
  title: "Crony Creative",
  para:
    "Implemented a responsive Adobe XD design for client with HTML5/CSS3",
  link: "https://www.cronycreative.com"
};
// const service3 = {
//   img: img3,
//   title: "Worldwide Water Analysis",
//   para:
//     "Created interactive graphs/maps with Ploty.js ",
//     link: "http://thirsty2thrive.world/"
// };

const service4 = {
  img: img4,
  title: "Amazon Alexa Skill",
  para:
    "Designed, implemented, & deployed an Amazon Alexa skill in Python 3.6",
    link: "https://www.amazon.com/Hone-Thrasher-video/dp/B07RLBPR8F"
};

const service5 = {
  img: img5,
  title: "Teacher Assistant",
  para:
    "Automated the process of transerring grade data between websites for a local teacher with Selenium",
    link: "https://github.com/hone1er/teachersAid"
};
const services = [service1, service4,  service2, service5];

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
          {props.link? <a  href={props.link}>
          <div className="carousel-img  w-100">
          <img  src={props.img} alt="First slide" />
          </div>
          </a> : null}
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
