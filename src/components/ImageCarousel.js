import React, { Component } from 'react';
import './ImageCarousel.css';
import * as designProcessIntro from '../assets/design-process-intro.png';
import * as understandIdeaDump from '../assets/understand-idea-dump.png';
import * as sketch from '../assets/sketch.png';
import * as mockUp from '../assets/mock-up.png';
import * as buildTestIterate from '../assets/build-test-iterate.png';
import * as deployment from '../assets/deployment.png';
import * as processSummary from '../assets/process-summary.png';

const slideData = [
    {
        img: designProcessIntro,
        header: "My Design Process",
        text: (<React.Fragment><p>The following slides are an introduction to the way I approach design problems, from websites to games. Through this introduction, I will showcase the design process of the <i>player tab</i> from the game <i>Exodus: Proxima Centauri</i> that I worked on while with Offworld Games.</p></React.Fragment>),
        label: "Summary",
    },

    {
        img: understandIdeaDump,
        header: "Understanding the Problem/Idea Dump",
        text: (<React.Fragment><p>The first step of my process is to understand the design problem or task as thoroughly as possible. Typically, I use something I call an <i>Idea Dump</i>, which involves me writing down everything I can think of related to the task, from overarching ideas to niche details. This way, I map out the approach on paper/whiteboard and in my head, so I can design with the full picture.</p>
        <p><span style={{color: "#ff0000"}}><b>Player Tab: </b></span>The design of the <i>player tab</i> was to implement an analog to the board game's player mat seen here. We knew its design was originally constrained to physical medium, so my idea dump involved reviewing how the constraints changed for the digital medium, and how we could leverage the new design space to make a more effective player tab than a copy of the physical component.</p></React.Fragment>),
        label: "Design",
    },

    {
        img: sketch,
        header: "Sketch",
        text: (<React.Fragment><p>After my Idea Dump, I have plenty of notes to work with to sketch some ideas. Sometimes these sketches are done by hand, google slides, photoshop, or other similar media. I typically refer to sketching as "roughs", while the next step of the process is reserved for more detailed designs.</p>
        <p><span style={{color: "#ff0000"}}><b>Player Tab: </b></span>Here we see one of the first sketches of the <i>player tab</i> done in google slides. I chose google slides for this particular sketch so I could share it with the team and we could edit and comment on it in real time. The main design choice to call out here is that we limited the amount of information we were displaying to only relevant information at the time, unlike the need to show all the information on the player mat shown previously. This can be seen clearly in the Research area.</p></React.Fragment>),
        label: "Design",
    },

    {
        img: mockUp,
        header: "Mock-up",
        text: (<React.Fragment><p>After completing completing and iterating on sketches, I move on to "sophisticated sketching" in photoshop or similar. Here, we begin to establish styles, colors, fonts, animations, etc. associated with the design. The Mock-ups are much closer in look to what we are targeting for the final design, and are handed off to development as the guide.</p>
        <p><span style={{color: "#ff0000"}}><b>Player Tab: </b></span>Here is a screenshot of the actual photoshop document I made while Mocking-up the <i>player tab</i>. You can see many of the sketch elements from the previous slide on this design, but the colors, styles, fonts, and features are all starting to take shape.</p></React.Fragment>),
        label: "Design",
    },

    {
        img: buildTestIterate,
        header: "Build, Test, and Iterate",
        text: (<React.Fragment><p>Once the initial Mock-ups are complete, development begins. Myself or the team begins to build out the features as designed in the previous processes. The two of the most important parts of this step are testing and iteration. Once I have a workable prototype, I test it myself (or with the team) to see if it is behaving appropriately, and I check (with the team) to see if the features feel right or fulfill their intended purposes. I iterate accordingly. Eventually, I extend this testing to external testers, and consider their feedback as I continue to iterate.</p>
        <p><span style={{color: "#f8a63e"}}><b>Player Tab: </b></span>Here is an example feature added after feedback from our beta testers during the Exodus Development. We needed to show another resource, population, to players and the player tab seemed the logical place to put this information. Thus, I went back to the mock-up and added the population tracker.</p></React.Fragment>),
        label: "Development",
    },

    {
        img: deployment,
        header: "Deployment",
        text: (<React.Fragment><p>The final step in the process is Deployment, where I ship the finished product to production, whether that is hosting of the website or app online, or putting the game up for sale on Steam. As a designer, I always feel that there is more to do on the project when it ships. However, it is important to set goals for deployment or an app or game will stay in development indefinitely. Additionally, I continue to iterate after deployment, but these iterations are prioritized among other projects and bugs (like any development project).</p>
        <p><span style={{color: "#00a800"}}><b>Player Tab: </b></span>Here we see a screenshot of <i>player tab</i> as it appeared in the game after going on sale on Steam. The final product looks different than the mock-up, as designs like these usually do, but the stylings, positionings, and relative designs from the mock-up can all be seen in the final product.</p></React.Fragment>),
        label: "Deployment",
    },

    {
        img: processSummary,
        header: "",
        text: "",
        label: "Summary",
    },
]

export default class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            imgs: slideData.map((slide) => slide.img),
            currentText: "",
            currentHeader: "",
        };
    }

    componentDidMount() {
        const currentImageIndex = this.state.currentImageIndex;
        const currentSlide = slideData[currentImageIndex];

        this.setState({
            currentText: currentSlide.text,
            currentHeader: currentSlide.header,
        })
    }

    previousSlide = () => {
        const lastIndex = this.state.imgs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.transitionText(index)

        this.setState({
            currentImageIndex: index,
        });
    }

    nextSlide = () => {
        const lastIndex = this.state.imgs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.transitionText(index)
        
        this.setState({
            currentImageIndex: index,
        });
    }

    transitionText =  (index) => {

        const slideHeaderDOM = document.getElementById("slide-header");
        const slideTextDOM = document.getElementById("slide-text");
        const currentSlide = slideData[index]

        const currentOpacity = slideTextDOM.style.opacity;
        
        slideHeaderDOM.style.opacity = 0;
        slideTextDOM.style.opacity = 0;

        setTimeout(() => {
            this.setState({
                currentText: currentSlide.text,
                currentHeader: currentSlide.header,
            });

            slideHeaderDOM.style.opacity = currentOpacity;
            slideTextDOM.style.opacity = currentOpacity;

            if (index === 0) {
                slideHeaderDOM.style.opacity = 1.0;
            }

            const label = currentSlide.label    
            
            if (label === "Design") {
                slideHeaderDOM.style.color = "#ff0000";
            } else if (label === "Development") {
                slideHeaderDOM.style.color = "#f8a63e";
            } else if (label === "Deployment") {
                slideHeaderDOM.style.color = "#00a800";
            } else {
                slideHeaderDOM.style.color = "#e3e9ea";
            }
        }, 400);
    }

    onMouseOver = () => {
        const slideHeaderDOM = document.getElementById("slide-header");
        const slideTextDOM = document.getElementById("slide-text");

        slideHeaderDOM.style.opacity = 1.0;
        slideTextDOM.style.opacity = 1.0;
    }

    onMouseOut = () => {

        const slideTextDOM = document.getElementById("slide-text");
        slideTextDOM.style.opacity = 0.1;

        if (this.state.currentImageIndex !== 0) {
            const slideHeaderDOM = document.getElementById("slide-header");

            slideHeaderDOM.style.opacity = 0.1;
        };
    }

    render() {

        const { currentImageIndex, imgs, currentHeader, currentText } = this.state;
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
                        <h1 className="slide-text" id="slide-header">{ currentHeader }</h1>
                        <img src={ this.state.imgs[0] } className="carousel-invisible-hover-trigger" onClick={ this.nextSlide } onMouseOver={ this.onMouseOver } onMouseOut={ this.onMouseOut } alt="invisible placeholder"/>
                        <img src={this.state.imgs[0]} className="carousel-size-placeholder" alt="placeholder" />
                        { slides }
                        <div className="slide-text" id="slide-text">{ currentText }</div>
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