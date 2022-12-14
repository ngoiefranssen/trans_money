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
      <div className='header'>
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
                                  <i classNam="fa fa-profil me-1" ></i> Profil
                                </NavLink>
                              </li>
                            
                            </ul>):null
                          }; 
                </div>
              </div>
            </div>
            </div>
        </nav>
      </div>
      {/* <div className='footer'>
        <footer className="bg-primary text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Footer Content</h5>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iste atque ea quis molestias. Fugiat pariatur maxime quis
                    culpa corporis vitae repudiandae aliquam voluptatem veniam,
                    est atque cumque eum delectus sint!
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white" />@Link 1
                  </li>
                  <li>
                    <a href="#!" className="text-white">@Link 2</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">@Link 3</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">@Link 4</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          <section className="mb-4">
            <a className="btn btn-primary btn-floating m-1"
               style="background-color: #3b5998" href="#!" 
               role="button"><i class="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-primary btn-floating m-1"
                style="background-color: #55acee" href="#!"
                role="button"><i class="fab fa-twitter"></i>
            </a>
            <a className="btn btn-primary btn-floating m-1"
                style="background-color: #dd4b39" href="#!" 
                role="button"><i class="fab fa-google"></i>
            </a>
            <a className="btn btn-primary btn-floating m-1" 
                style="background-color: #ac2bac" href="#!" 
                role="button"><i class="fab fa-instagram"></i>
            </a>
            <a className="btn btn-primary btn-floating m-1"
               style="background-color: #0082ca" href="#!" 
               role="button"><i class="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-primary btn-floating m-1"
               style="background-color: #333333" href="#!" role="button"><i class="fab fa-github"></i></a>
          </section>
          <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            ?? 202 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">ngoiefrassen.com</a>
          </div>
        </footer>
      </div> */}
    </>  
  );
};

export default Navbar;