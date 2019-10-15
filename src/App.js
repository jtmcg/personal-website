import React, {Component} from 'react';
import NavigationSpinner from './components/NavigationSpinner';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }

  render() {
    return(
      <div className="app-container">
        <h1 id="title-banner">J. Tyler McGoffin</h1>
        <h5 id="subtitle-banner">Designing the Future</h5>
        <NavigationSpinner
          target={null}
          orientation={"left"}
          text="Portfolio"
        />
      </div>
    )
  }
};
