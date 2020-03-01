import React from "react";
import "./portfolio.scss";
import Carousel from './carousel'


export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="outer-portfolio">
      <div id="portfolioDiv">
        <section id="portfolio">
            <h1 id="portfolioHeader">portfolio</h1>
            <Carousel />
        </section>
      </div>
      </div>
    );
  }
}
