
const Navbar = () =>{

    return(
        <div>
            <nav className="navbar navbar-expand-lg nav-fixed bg-light bg-white py-4 shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="/">
                TransMoney
                </a>s
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
                </div>
            </div>
            </nav>

            
        </div>   
    );
};

export default Navbar;