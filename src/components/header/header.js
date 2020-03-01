import React from "react";
import "./header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div id="outer-head">
        <div id="head" className="box header">
          {/* <img id="profilePic" src={profile} alt="Paddington Bear" /> */}
          <section id="section02" className="demo">
            <div id="scrolldiv" className="scrolldivclass">
              <a id="scroll" className="bounce5" href="#sectionScroll">
                <span className="arrow-down"></span>
              </a>
            </div>
          </section>
          <h2 id="headerText">
            Hi, I'm Joe! <span id="passionate">welcome</span> to my{" "}
            <span id="experience"> portfolio</span>
          </h2>
        </div>
      </div>
    );
  }
}
