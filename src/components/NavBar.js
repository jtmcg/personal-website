import 'bootstrap/dist/css/bootstrap.min.css';
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
        <li className="nav-item nav-link nav-bar-page-item" id={"nav-bar-page-item"+page} onClick={() => props.changePage(page)} key={page}>{page}</li>
      )
    })
  
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-brand">
          <div className="nav-bar-current-page">
           <div className="nav-wheel-container" id="nav-wheel-container" onClick={() => console.log("nav bar wheel clicked") }>
             <img src={wheeltwo} alt="nav-wheel-two" className="nav-wheel-image-component nav-wheel-image-component-two" />
             <img src={wheelone} alt="nav-wheel-one" className="nav-wheel-image-component nav-wheel-image-component-one" />
             <h1 className="nav-wheel-text" id="nav-wheel-text">{currentPage}</h1>
           </div>
          </div>
        </div>

        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div id="navbarNavDropdown" class="navbar-collapse collapse ml-auto">
          <ul class="navbar-nav ml-auto nav-bar-pages">
            {pages}
          </ul>
        </div>
      </nav>
    )
    // return(
    //   <div className="nav-bar-container" id="nav-bar-container">
    //     <div className="nav-bar-current-page">
    //       <div className="nav-wheel-container" id="nav-wheel-container" onClick={() => console.log("nav bar wheel clicked") }>
    //         <img src={wheeltwo} alt="nav-wheel-two" className="nav-wheel-image-component nav-wheel-image-component-two" />
    //         <img src={wheelone} alt="nav-wheel-one" className="nav-wheel-image-component nav-wheel-image-component-one" />
    //         <h1 className="nav-wheel-text" id="nav-wheel-text">{currentPage}</h1>
    //       </div>
    //     </div>
    //     <div className="nav-bar-pages">
    //       {pages}
    //     </div>
    //   </div>
    // )
  }