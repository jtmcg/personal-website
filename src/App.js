import React, {Component} from 'react';
import NavigationSpinner from './components/NavigationSpinner';
import Portfolio from './components/Portfolio';

import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    }
  }

  _changePage(newPage) {
    this.setState({
      currentPage: newPage
    });
  }

  render() {
    const currentPage = this.state.currentPage;
    if (currentPage ==="home") {
      return(
        <div className="app-container">
          <div className="banner-container">
            <h1 className="banner" id="title">J. Tyler McGoffin</h1>
            <h5 className="banner" id="subtitle">Designing the Future</h5>
          </div>
          <div className="navigation-spinner" id="portfolio">
            <NavigationSpinner
              orientation="left"
              text="Portfolio"
              onClick={() => this._changePage("portfolio")}
            />
          </div>
          <div className="navigation-spinner" id="design-process">
            <NavigationSpinner
              orientation="right"
              text="Design Process"
              onClick={() => this._changePage("designProcess")}
            />
          </div>
          <div className="navigation-spinner" id="work-life">
            <NavigationSpinner
              orientation="left"
              text="Work Life"
              onClick={() => this._changePage("workLife")}
            />
          </div>
          <div className="navigation-spinner" id="personal-life">
            <NavigationSpinner
              orientation="right"
              text="Personal Life"
              onClick={() => this._changePage("personalLife")}
            />
          </div>
        </div>
      )
    } else if (currentPage === "portfolio") {
      return (
        <Portfolio/>
      )
    }
  }
};