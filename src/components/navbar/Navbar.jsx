import { Link } from 'react-router-dom'

const Navbar = () =>{

    return(
        <div>
      <nav className="navbar navbar-expand-lg bg-light bg-white py-4 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            TransMoney
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-Link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to="/list_depot">
                  ListsDepot
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to="list_transfert">
                  ListTransfert
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-Link" to="/contact">
                  Contact
                </Link>
              </li> */}
            </ul>
            <div className="buttons">
              <Link className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1" to="/login"></i> Login
              </Link>
              <Link className="btn btn-outline-success ms-2">
                <i className="fa fa-user-plus me-2 ms" to="/sing_up"></i>
                Sing-Up
              </Link>
              <Link className="btn btn-outline-dark ms-2">
                <i className="fa fa-profil me-1" to="/cart"></i> Profil;
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>  
    );
};

export default Navbar;