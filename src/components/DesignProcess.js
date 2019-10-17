import React from 'react';
import './DesignProcess.css';



export default function DesignProcess(props) {
    return (
        <div className="design-process-container">
            <div className="design-process-header">
                <h1>Design Process</h1> 
            </div>
            <div className="design-process-carousel-container">
                    <div className="design-process-carousel-previous" id="previous">1</div>
                    <div className="design-process-carousel-current" id="current">2</div>
                    <div className="design-process-carousel-next" id="next">3</div>
            </div>
            <button onClick={() => rotateDivs()}>rotate divs</button>
           
        </div>
    )
}


const rotateDivs = () => {
    const nextElement = document.getElementById("next");
    const currentElement = document.getElementById("current");
    const prevElement = document.getElementById("previous");

    const nextClass = nextElement.className;
    const currentClass = currentElement.className;
    const prevClass = prevElement.className;

    nextElement.className = currentClass;
    currentElement.className = prevClass;
    prevElement.className = nextClass;
}