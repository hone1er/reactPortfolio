import React, { Component } from 'react'
import { DiReact, DiMongodb, DiHtml5, DiSass } from 'react-icons/di';
import "./footer.scss";
import Python from './python-seeklogo.com.svg'

export default class Tech extends Component {
    render() {
        return (
            <div className="techstack">
                <h1>Stack</h1>
                <ul>
                    <li><DiReact fill="aqua" className="icon" id="react" /><h4>reactJS</h4></li>
                    <li><img className="icon" src={Python} alt="python"/><h4>python</h4></li>
                    <li><DiMongodb fill="#13aa52" className="icon" id="mongo" /><h4>mongodb</h4></li>
                    <li><DiHtml5 fill="tomato" className="icon" id="html-svg" /><h4>html5</h4></li>
                    <li><DiSass fill="palevioletred" className="icon" id="sass-svg" /><h4>sass</h4></li>
                </ul>
            </div>
        )
    }
}

