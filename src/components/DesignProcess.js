import React from 'react';
import './DesignProcess.css';
import ImageCarousel from './ImageCarousel';



export default function DesignProcess(props) {
    return (
        <div className="design-process-container">
            <div className="design-process-header">
                <h1>Design Process</h1> 
            </div>
            
            <ImageCarousel />
           
        </div>
    )
}
