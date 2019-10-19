import React from 'react';
import wheelone from '../assets/wheel-one.png';
import wheeltwo from '../assets/wheel-two.png';
import './NavBar.css';

export default function NavBar(props) {
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