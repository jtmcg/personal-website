import React, { Component } from 'react';
import './NavigationSpinner.css';
import * as wheelone from '../assets/wheel-one.png' ;
import * as wheeltwo from '../assets/wheel-two.png';

export default class NavigationSpinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orientation: this.props.orientation,
            text: this.props.text,
            toggleAnimation: "paused",
            wheelOneRotation: 0,
            wheelTwoRotation: 0,
        }
    }

    componentDidMount() {
        const wheelTextDOM = document.getElementById(this.state.text);
        const orientation = this.state.orientation;

        if (orientation === "right") {
            wheelTextDOM.style.right = "40%";
            wheelTextDOM.style.textAlign = "right";
        } else if (orientation === "left") {
            wheelTextDOM.style.left = "40%";
            wheelTextDOM.style.textAlign = "left";
        }

        if (this.props.isRunning) {
            document.getElementById("wheel-image-component-one"+this.state.text).style.animationPlayState = "running";
            document.getElementById("wheel-image-component-two"+this.state.text).style.animationPlayState = "running";
            document.getElementById("wheel-container"+this.state.text).style.opacity = "1.0";
        }
    }

    checkToggle = () => {
        if (!this.props.isRunning) {
            this.toggleAnimation()
        }
    }

    flashText = () => {
        //const wheelTextDOM = document.getElementById(this.state.text);
        // Create flashing animation
    }

    toggleAnimation = () => {
        const wheelOneDOM = document.getElementById("wheel-image-component-one"+this.state.text);
        const wheelTwoDOM = document.getElementById("wheel-image-component-two"+this.state.text);
        const wheelTextDOM = document.getElementById(this.state.text);
        const wheelContainerDOM = document.getElementById("wheel-container"+this.state.text);
        var toggleAnimation = this.state.toggleAnimation;

        if (toggleAnimation === "paused") {
            toggleAnimation = "running";
            wheelContainerDOM.style.opacity = "1.0";
            console.log("starting animation")
        } else if (toggleAnimation === "running") {
            toggleAnimation = "paused";
            wheelContainerDOM.style.opacity = "0.25";
            console.log("pausing animation")
        }

        wheelOneDOM.style.animationPlayState = toggleAnimation;
        wheelTwoDOM.style.animationPlayState = toggleAnimation;
        wheelTextDOM.style.animationPlayState = toggleAnimation;

        this.setState({
            toggleAnimation: toggleAnimation,
        })
    }

    render() {
        return (
            <div className="wheel-container" id={"wheel-container"+this.state.text} onMouseOver={this.checkToggle} onMouseOut={this.checkToggle} onClick={this.props.changePage}>
                <img src={wheeltwo} alt="wheel-two" className="wheel-image-component wheel-image-component-two" id={"wheel-image-component-two"+this.state.text}  />
                <img src={wheelone} alt="wheel-one" className="wheel-image-component wheel-image-component-one" id={"wheel-image-component-one"+this.state.text}  />
                <h1 className="wheel-text" id={this.state.text}>{this.state.text}</h1>
            </div>
        )
    }
}