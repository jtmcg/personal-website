import React, {Component} from 'react';
import NavigationSpinner from './components/NavigationSpinner';
import Portfolio from './components/Portfolio';
import DesignProcess from './components/DesignProcess';
import WorkLife from './components/WorkLife';
import PersonalLife from './components/PersonalLife';
import NavBar from './components/NavBar';

import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      pages: ["Home", "Portfolio", "Design Process", "Work Life", "Personal Life"]
    }
  }

  _changePage = (newPage) => {

    const appContainerDOM = document.getElementById("app-container");

    appContainerDOM.style.opacity = 0;

    setTimeout(() => {

      this.setState({
        currentPage: newPage
      });

      appContainerDOM.style.opacity = 1.0;
    }, 500);
  }

  render() {
    const currentPage = this.state.currentPage;
    if (currentPage ==="Home") {
      return(
        <div className="app-container" id="app-container">
          <div className="banner-container">
            <h1 className="banner" id="title">J. Tyler McGoffin</h1>
            <h5 className="banner" id="subtitle">Designing the Future</h5>
          </div>
          <div className="navigation-spinners-container">
            <div className="navigation-spinner" id="portfolio">
              <NavigationSpinner
                orientation="left"
                text="Portfolio"
                changePage={() => this._changePage("Portfolio")}
              />
            </div>
            <div className="navigation-spinner" id="design-process">
              <NavigationSpinner
                orientation="right"
                text="Design Process"
                changePage={() => this._changePage("Design Process")}
              />
            </div>
            <div className="navigation-spinner" id="work-life">
              <NavigationSpinner
                orientation="left"
                text="Work Life"
                changePage={() => this._changePage("Work Life")}
              />
            </div>
            <div className="navigation-spinner" id="personal-life">
              <NavigationSpinner
                orientation="right"
                text="Personal Life"
                changePage={() => this._changePage("Personal Life")}
              />
            </div>
          </div>
        </div>
      )
    } else if (currentPage === "Portfolio") {
      return (
        <div>
          <NavBar
            currentPage={this.state.currentPage}
            pages={this.state.pages}
            changePage={this._changePage}
          />
          <div className="app-container" id="app-container">
            <Portfolio/>
          </div>
        </div>
      )
    } else if (currentPage === "Design Process") {
      return (
        <div>
          <NavBar
            currentPage={this.state.currentPage}
            pages={this.state.pages}
            changePage={this._changePage}
          />
          <div className="app-container" id="app-container">
            <DesignProcess/>
          </div>
        </div>
      )
    } else if (currentPage === "Work Life") {
        return(
          <div>
            <NavBar
              currentPage={this.state.currentPage}
              pages={this.state.pages}
              changePage={this._changePage}
            />
            <div className="app-container" id="app-container">
              <WorkLife/>
            </div>
          </div>
        )
    } else if (currentPage === "Personal Life") {
        return (
          <div>
            <NavBar
              currentPage={this.state.currentPage}
              pages={this.state.pages}
              changePage={this._changePage}
            />
            <div className="app-container" id="app-container">
              <PersonalLife/>
            </div>
          </div>
        )
    }
  }
};
