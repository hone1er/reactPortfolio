import React from "react";
import "./portfolio.scss";
import Carousel from './carousel'


export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="outer-portfolio">
      <div id="portfolioDiv">
        <section id="portfolio">
            <h1 id="portfolioHeader">What i've done</h1>
            <Carousel />
            <div className="other">
            <h3>Other projects</h3>
            <ul>
              <li><a href="http://whatsappchatanalyzer.herokuapp.com/">WhatsApp chat analyzer</a></li>
              <li><a href="http://incometracker.herokuapp.com/">Income & expense tracker</a></li>
            </ul>
            </div>
        </section>
      </div>
      </div>
    );
  }
}
