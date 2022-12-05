import { NavLink } from 'react-router-dom';
import "../navbar/css/NavbarCss.css";
import "../list/listStyle/listStyle.css"
import { useState } from 'react';


const Navbar = () =>{

  const {state, setState} = useState(false);
  const {showDropdown} = () => {
    setState(true);
  }

  const {hideDropdown} = () =>{
    setState(false);
  }

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-fixed bg-light bg-white py-4 shadow-sm">
          <div className="container header">
            <NavLink className="navbar-brand fw-bold fs-4" to="/home_client">
              TransMoney
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                  <NavLink
                    className="nav-Link active"
                    aria-current="page"
                    to="/home_client"
                  >
                    Home
                  </NavLink>
                </li>
                <div className='dropdown'>
                  <div className='dropdown-menu' onMouseEnter={showDropdown}
                       onMouseLeave={hideDropdown}>
                        <p>Lists</p>
                        (state ?
                          <ul className='dropdown-list' onMouseEnter={showDropdown}>
                       
                            <li className="nav-item ms-4">
                              <NavLink className="nav-Link" to="/list_depot">
                                List Depot
                              </NavLink>
                            </li>
                            <li className="nav-item ms-4">
                              <NavLink className="nav-Link" to="/list_transfert">
                                List Transfert
                              </NavLink>
                            </li>
                            </ul>) : null
                  </div>
                </div>
               
                {/* <li className="nav-item">
                  <NavLink className="nav-Link" to="/contact">
                    Contact
                  </NavLink>
                </li> */}
              </ul>
              <div className="buttons">
                <NavLink className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1" to="/login"></i> Login
                </NavLink>
                <NavLink className="btn btn-outline-success ms-2">
                  <i className="fa fa-user-plus me-2 ms" to="/sing_up"></i>
                  Sing-Up
                </NavLink>
                <NavLink className="btn btn-outline-dark ms-2">
                  <i className="fa fa-profil me-1" to="/cart"></i> Profil
                </NavLink>
              </div>
            </div>
          </div>
      </nav>
    </>  
  );
};

export default Navbar;