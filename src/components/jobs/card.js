import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Card = props => {
  return (
    <ScrollAnimation
      animateIn={props.fade}
      animateOnce="true"
      duration="1.35"
      delay="100"
      animatePreScroll="false"
    >
      <div id={props.id} className="brd-rd card">
        <img className="brd-rd-top" src={props.imgsrc} alt="Avatar" />
        <div className="brd-rd-btm">
          <h4>
            <b>{props.title}</b>
          </h4>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Card;
