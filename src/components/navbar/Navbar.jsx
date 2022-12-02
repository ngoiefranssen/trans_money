// import { a } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


const Navbar = () =>{



    return(
             <div>
             <nav classNameName="navbar navbar-expand-lg bg-light bg-white py-4 shadow-sm">
                <div classNameName="container">
                    <a classNameName="navbar-brand fw-bold fs-4" to="">
                        Trans_Money
                    </a>
          {/* <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button> */}
          <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classNameName="navbar-nav mx-auto mb-2 mb-lg-0">
              <li classNameName="nav-item">
                <a
                  classNameName="nav-a active"
                  aria-current="page"
                  to=""
                >
                  Home
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-a" to="">
                  List
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-a" to="">
                  About
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-a" to="">
                  Contact
                </a>
              </li>
            </ul>
            {/* <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle"
                    to="#" role="button" id="actions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
                </a>
                <div className="dropdown-menu" aria-labelledby="actions">
                    <a className="dropdown-item" to="#">Login</a>
                    <a className="dropdown-item" to="#">Register</a>
                    <a className="dropdown-item" to="#">Profil</a>
                </div>
            </div> */}
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;