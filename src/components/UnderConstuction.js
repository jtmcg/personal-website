import React from 'react';
import './UnderConstruction.css';

export default function UnderConstruction(props) {
    return (
        <div className="under-construction-container">
            <div className="under-construction-header">
                <h1 className="under-construction-header-text">Sorry, the { props.pageName } page is currently under construction.</h1>
            </div>
            
        </div>
    )

}
