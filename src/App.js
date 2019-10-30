import React, {Component} from 'react';
import NavigationSpinner from './components/NavigationSpinner';
import Portfolio from './components/Portfolio';
import DesignProcess from './components/DesignProcess';
import Skills from './components/Skills';
import PersonalLife from './components/PersonalLife';
import NavBar from './components/NavBar';

import './App.css';
import './components/NavBar.css';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      pages: ["Home", "Portfolio", "Design Process", "Skills", "Personal Life"]
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
    var pageBuild = null;
    var navBar = null;
    if (currentPage === "Home") {
      pageBuild = <React.Fragment>
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
            <div className="navigation-spinner" id="skills">
              <NavigationSpinner
                orientation="left"
                text="Skills"
                changePage={() => this._changePage("Skills")}
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
        </React.Fragment>

    } else {
      navBar = <NavBar
                  currentPage={this.state.currentPage}
                  pages={this.state.pages}
                  changePage={this._changePage}
                />

      if (currentPage === "Portfolio") {
        pageBuild = <Portfolio/>
      } else if (currentPage === "Design Process") {
        pageBuild = <DesignProcess/>
      } else if (currentPage === "Skills") {
          pageBuild = <Skills/>
      } else if (currentPage === "Personal Life") {
          pageBuild = <PersonalLife/>
      }
    }

    return(
      <div className="app-container" id="app-container">
        {/*<div className="parallax-image parallax-midground-nebula" alt="parallax nebula" />
        <div className="parallax-image parallax-foreground-stars" alt="parallax foreground" />
      */}
        {navBar}
        {pageBuild}
      </div>
    )
  };
}
