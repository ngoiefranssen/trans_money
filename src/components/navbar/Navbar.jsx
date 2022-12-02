

const Navbar = () =>{

    return(
        <div>
            <nav className="navbar navbar-expand-lg nav-fixed bg-light bg-white py-4 shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="/">
                TransMoney
                </a>
                {/* <buthrefn
                className="navbar-hrefggler"
                type="buthrefn"
                data-bs-hrefggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="hrefggle navigation"
                >
                <span className="navbar-hrefggler-icon"></span>
                </buthrefn> */}
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
                        ListDepot
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-a" href="/about">
                        ListTransfert
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
                    <i className="fa fa-shopping-cart me-1" href="/cart"></i> Cart
                    </a>
                </div>
                </div>
            </div>
            </nav>

            {/*<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
       <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> 
    </div>
  </div>
</nav>*/}
        </div>   
    );
};

export default Navbar;