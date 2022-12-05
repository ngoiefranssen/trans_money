import { NavLink } from 'react-router-dom';
import "../navbar/css/NavbarCss.css";
import "../list/listStyle/listStyle.css"
import { useState } from 'react';


const Navbar = () =>{

  const {state, setState} = useState(false);
  const showDropdown = () => {
    setState(true);
  }

  const hideDropdown = () =>{
    setState(false);
  }

  return(
    <>
      <nav className="navbar navbar-expand-lg bg-light bg-white 
                      py-4 shadow-sm">
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
                <li className="nav-item ms-4">
                  <NavLink className="nav-Link" to="/list_depot">ListDepot</NavLink>
                </li>
                <li className="nav-item ms-4">
                  <NavLink className="nav-Link" to="/list_transfert"> ListTransfert</NavLink>
                </li>
              </ul>
              <div className='dropdown'>
                  <div className='dropdown-menu' onMouseEnter={showDropdown}
                       onMouseLeave={hideDropdown}>
                        Parametre
                        {
                          state ?(
                          <ul className='dropdown-list' onMouseEnter={showDropdown}>
                            <li>
                              <NavLink to="/login" >
                                <i className="fa fa-sign-in me-1" ></i> Login
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/sing_up">
                               <i className="fa fa-user-plus me-2 ms" ></i>
                                 Sing-Up
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/profil">
                                <i className="fa fa-profil me-1" ></i> Profil
                              </NavLink>
                            </li>
                           
                          </ul>):null
                        }; 
              </div>
            </div>
          </div>
          </div>
      </nav>
    </>  
  );
};

export default Navbar;