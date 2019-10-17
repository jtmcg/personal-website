import React, { Component } from 'react';
import './ImageCarousel.css';
import * as understandIdeaDump from '../assets/understand-idea-dump.png';
import * as sketch from '../assets/sketch.png';
import * as mockUp from '../assets/mock-up.png';
import * as buildTestIterate from '../assets/build-test-iterate.png';
import * as deployment from '../assets/deployment.png';
import * as processSummary from '../assets/process-summary.png';

export default class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            imgs: [
                understandIdeaDump,
                sketch,
                mockUp,
                buildTestIterate,
                deployment,
                processSummary,
            ],
        };
    }

    previousSlide = () => {
        const lastIndex = this.state.imgs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index,
        });
    }

    nextSlide = () => {
        const lastIndex = this.state.imgs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        
        this.setState({
            currentImageIndex: index,
        });
    }

    render() {

        const { currentImageIndex, imgs } = this.state;
        var nextIdx = currentImageIndex + 1;
        var prevIdx = currentImageIndex - 1;

        if ( nextIdx >= imgs.length ) {
            nextIdx = 0
        } 

        if ( prevIdx <= -1 ) {
            prevIdx = imgs.length-1
        }

        const slides = imgs.map( (img, idx) => {
            
            var position = "hidden";
            var onClick = null;
            
            if ( idx === currentImageIndex) {
                position = "current"
                onClick = this.nextSlide
            } else if ( idx === nextIdx ) {
                position = "next";
                onClick = this.nextSlide
            } else if ( idx === prevIdx ) {
                position = "previous";
                onClick = this.previousSlide
            }

            return(
                <ImageSlide
                    img={ img }
                    position={ position }
                    onClick={ onClick }
                    idx={ idx }
                    key={ idx }
                />
            )

        })

        return (
            <div id="image-carousel-container">
                <div className="image-carousel">
                    <Arrow 
                        direction="left"
                        clickFunction={ this.previousSlide }
                        glyph="&#9664;"/>
                    <div className="image-carousel">
                        <img src={this.state.imgs[0]} className="carousel-size-placeholder" alt="placeholder" />
                        { slides }
                    </div>
                    <Arrow  
                        direction="right"
                        clickFunction={ this.nextSlide }
                        glyph="&#9654;"/>
                </div>
            </div>
        )
    }
}

function Arrow(props) {
    return(
        <div className={ `slide-arrow ${ props.direction }` } onClick={props.clickFunction}>
            { props.glyph }
        </div>
    )
} 

// Receives and image url (string) and creates a div containing said image url
function ImageSlide(props) {
    return(
        <img src={props.img} className={"image-carousel-slide-"+props.position+" image-carousel-slide"} id={props.idx} onClick={props.onClick} alt={props.idx}/>
    );
}