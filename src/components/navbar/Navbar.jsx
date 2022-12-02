

const Navbar = () =>{

    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-light bg-white py-4 shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold fs-4" href="/">
              Collection
            </a>
            <buthrefn
              className="navbar-hrefggler"
              type="buthrefn"
              data-bs-hrefggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="hrefggle navigation"
            >
              <span className="navbar-hrefggler-icon"></span>
            </buthrefn>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auhref mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-a active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" href="/products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="buthrefns">
                <a className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1" href="/login"></i> Login
                </a>
                <a className="btn btn-outline-success ms-2">
                  <i className="fa fa-user-plus me-2 ms" href="/sing_up"></i>
                  Sing-Up
                </a>
                <a className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1" href="/cart"></i> Cart;
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>   
    );
};

export default Navbar;