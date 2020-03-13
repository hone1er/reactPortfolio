import React from "react";
import Card from "./card";
import "./card.scss";

import img1 from "./images/undraw_setup_analytics_8qkl (1).svg";
import img2 from "./images/undraw_progressive_app_m9ms (1).svg";
import img3 from "./images/undraw_feeling_proud_qne1 (1).svg";

let viewport = document.documentElement.clientWidth;
const service1 = {
  img: img1,
  title: "data analytics/visualization",
  paragraph:
    "professional data analysis & web-based interactive data visualizations",
  fade: "bounceInLeft",
  delay: viewport > 768 ? "575" : "0"
};
const service2 = {
  img: img2,
  title: "responsive websites",
  paragraph:
    "high quality responsive websites that look wonderful on any device",
  fade: viewport > 768 ? "bounceInUp" : "bounceInRight",
  delay: "0"
};
const service3 = {
  img: img3,
  title: "scripting/automations",
  paragraph:
    "scripts & automations to replace tedius/repetitive task on the computer",
  fade: viewport > 768 ? "bounceInRight" : "bounceInUp",
  delay: viewport > 768 ? "575" : "0"
};

const services = [service1, service2, service3];

export default class Cards extends React.Component {
  render(props) {
    return (
      <div id="mainCardDiv">
        <div id="recentJobs" className="cardsDiv">
          <h1 id="servicesHeader">what i do</h1>
          {services.map(x => (
            <Card
              imgsrc={x.img}
              title={x.title}
              paragraph={x.paragraph}
              id={x.img}
              fade={x.fade}
              delay={x.delay}
              alt="responsive websites"
            />
          ))}
        </div>
      </div>
    );
  }
}
