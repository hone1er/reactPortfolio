import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Cards from "./components/jobs/cards";
import Header from "./components/header/header";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Open+Sans|Oxanium|Roboto|Roboto+Slab&display=swap"
            rel="stylesheet"
          />
        </head>
        <Header />
        <section id="sectionScroll"></section>
        <Cards />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
