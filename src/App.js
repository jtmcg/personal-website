import React, {Component} from 'react';
import NavigationSpinner from './components/NavigationSpinner';
import Portfolio from './components/Portfolio';
import DesignProcess from './components/DesignProcess';
import WorkLife from './components/WorkLife';
import PersonalLife from './components/PersonalLife';

import * as wheelone from './assets/wheel-one.png' ;
import * as wheeltwo from './assets/wheel-two.png';

import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Design Process",
      pages: ["Home", "Portfolio", "Design Process", "Work Life", "Personal Life"]
    }
  }

  _changePage = (newPage) => {
    this.setState({
      currentPage: newPage
    });
  }

  render() {
    const currentPage = this.state.currentPage;
    if (currentPage ==="Home") {
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
      )
    } else if (currentPage === "Portfolio") {
      return (
        <div>
          <NavBar
            currentPage={this.state.currentPage}
            pages={this.state.pages}
            changePage={this._changePage}
          />
          <Portfolio/>
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
          <DesignProcess/>
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
            <WorkLife/>
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
            <PersonalLife/>
          </div>
        )
    }
  }
};

function NavBar(props) {
  const currentPage = props.currentPage;
  var pages = props.pages.filter(page => {
    if (page === currentPage) {
      return false
    } else {
      return true
    }
  })

  pages = pages.map(page => {
    return(
      <h3 className="nav-bar-page-item" id={"nav-bar-page-item"+page} onClick={() => props.changePage(page)} key={page}>{page}</h3>
    )
  })

  return(
    <div className="nav-bar-container">
      <div className="nav-bar-current-page">
        <div className="nav-wheel-container" id="nav-wheel-container" onClick={() => console.log("nav bar wheel clicked") }>
          <img src={wheeltwo} alt="nav-wheel-two" className="nav-wheel-image-component nav-wheel-image-component-two" />
          <img src={wheelone} alt="nav-wheel-one" className="nav-wheel-image-component nav-wheel-image-component-one" />
          <h1 className="nav-wheel-text" id="nav-wheel-text">{currentPage}</h1>
        </div>
      </div>
      <div className="nav-bar-pages">
        {pages}
      </div>
    </div>
  )
}