import React, { Component } from 'react';
import './NavigationSpinner.css';
import * as wheelone from '../assets/wheel-one.png' ;
import * as wheeltwo from '../assets/wheel-two.png';

export default class NavigationSpinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: this.props.target,
            orientation: this.props.orientation,
            text: this.props.text,
            mouseOver: false,
        }
    }
    
    mouseOver = () => {
        const wheelOneDOM = document.getElementById("wheel-image-component-one");
        const wheelTwoDOM = document.getElementById("wheel-image-component-two");

        wheelOneDOM.id = "wheel-image-component-one-hover";
        wheelTwoDOM.id = "wheel-image-component-two-hover";

        console.log("Mouse Over")
    }

    mouseOut = () => {
        const wheelOneDOM = document.getElementById("wheel-image-component-one-hover");
        const wheelTwoDOM = document.getElementById("wheel-image-component-two-hover");

        wheelOneDOM.id = "wheel-image-component-one";
        wheelTwoDOM.id = "wheel-image-component-two";

        console.log("Mouse Out")
    }

    render() {
        return (
            <div className="wheel-container" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <img src={wheeltwo} alt="wheel-two" className="wheel-image-component" id="wheel-image-component-two"  />
                <img src={wheelone} alt="wheel-one" className="wheel-image-component" id="wheel-image-component-one"  />
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}