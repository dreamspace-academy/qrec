import React from 'react'
// import css
import './Dash-board.css';
// import Bootstrap-css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap-js
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import link tag
import { Link } from "react-router-dom";

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';




function Dash() {

  const arrow = () => {
    let A = document.getElementById("dash");
    A.style.minWidth = "75px";
    A.style.maxWidth = "75px";
    A.style.backgroundColor = "Black"
    let B = document.getElementById("Right-arrow");
    B.style.opacity = "1";
    B.style.visibility = "visible"
    let C = document.getElementById("left-arrow");
    C.style.opacity = "0";
    C.style.visibility = "hidden"
  };
  const arrowRit = () => {
    let D = document.getElementById("dash");
    D.style.minWidth = " 340px";
    D.style.maxWidth = " 340px";
    let B = document.getElementById("Right-arrow");
    B.style.opacity = "0";
    B.style.visibility = "hidden";
    let C = document.getElementById("left-arrow");
    C.style.opacity = "1";
    C.style.visibility = "visible";
  };
  return (
    <div className="DashBoard" id="dash">
      <header className="fs-1 text fw-bold text-danger text-center p-3 header">
        <p>qRec</p>
      </header>
      <div className="container-fluid text-light">
        <button
          className="btn border-0  btn-outline-dark"
          id="left-arrow"
          onClick={arrow}
          type="button"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} ></FontAwesomeIcon>
        </button>
        <button
          className="btn border-0 btn-outline-dark "
          id="Right-arrow"
          onClick={arrowRit}
          type="button"
        >
          <FontAwesomeIcon icon={faArrowRightLong} ></FontAwesomeIcon>
        </button>
        <ul className="navbar-nav">
          <button className='btn btn-outline-info border-0 mt-4 mb-4'>
            <p className='h4 fs-3'><Link to={"/"} className="nav-link">View All</Link> </p>
          </button>
          <button className='btn btn-outline-info border-0 mt-4 mb-4'>
            <p className='h4 fs-3'><Link to={"/Staff"} className="nav-link">Staff</Link> </p>
          </button>
          <button className='btn btn-outline-info border-0 mt-4 mb-4'>
            <p className='h4 fs-3'><Link to={"/Attend"} className="nav-link">Attendance</Link> </p>
          </button>
          <button className='btn btn-outline-info border-0 mt-4 mb-4'>
            <p className='h4 fs-3'><Link to={"/Settings"} className="nav-link">Setting</Link> </p>
          </button>
          <button className='btn btn-outline-info border-0 mt-4 mb-4'>
            <p className='h4 fs-3'><Link to={"/"} className="nav-link"></Link>Logout </p>
          </button>
        </ul>
      </div>
    </div>

  )

}
export default Dash
