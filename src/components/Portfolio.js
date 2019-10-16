import React from 'react';

export default function Portfolio() {
    return(
        <div className="portfolio-container">
          <h1>Portfolio</h1>
          <AppPreview
            app={null}
            />
        </div>
    )
}

function AppPreview(props) {
    return(
        <div className="app-preview-container">
            {props.app}
        </div>
    )
}