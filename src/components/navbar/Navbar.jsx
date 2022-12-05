// import { NavLink } from 'react-router-dom';
// import "../navbar/css/NavbarCss.css";
// import "../list/listStyle/listStyle.css"
// import { useState } from 'react';


// const Navbar = () =>{

//   // const {state, setState} = useState(false);
//   // const showDropdown = () => {
//   //   setState(true);
//   // }

//   // const hideDropdown = () =>{
//   //   setState(false);
//   // }

//   return(
//     <>

//        {/* <nav className="navbar navbar-expand-lg navbar-fixed bg-light bg-white py-4 shadow-sm">
//           <div className="container header">
//             <NavLink className="navbar-brand fw-bold fs-4" to="/home_client">
//               TransMoney
//             </NavLink>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse " id="navbarSupportedContent">
//               <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
//                 <li className="nav-item">
//                   <NavLink
//                     className="nav-Link active"
//                     aria-current="page"
//                     to="/home_client"
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="nav-item ms-4">
//                   <NavLink className="nav-Link" to="/list_depot">ListDepot</NavLink>
//                 </li>
//                 <li className="nav-item ms-4">
//                   <NavLink className="nav-Link" to="/list_transfert"> List Transfert</NavLink>
//                 </li>
               
//                <li className="nav-item">
//                   <NavLink className="nav-Link" to="/contact">
//                     Contact
//                   </NavLink>
//                 </li> 
//               </ul>
//               <div className='dropdown'>
//                   <div className='dropdown-menu' onMouseEnter={showDropdown}
//                        onMouseLeave={hideDropdown}>
//                         Parametre
//                         {
//                           state ?(
//                           <ul className='dropdown-list' onMouseEnter={showDropdown}>
//                             <li>
//                               <NavLink to="/login" >
//                                 <i className="fa fa-sign-in me-1" ></i> Login
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink to="/sing_up">
//                                <i className="fa fa-user-plus me-2 ms" ></i>
//                                  Sing-Up
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink to="/profil">
//                                 <i className="fa fa-profil me-1" ></i> Profil
//                               </NavLink>
//                             </li>
                           
//                           </ul>):null
//                         }; 
//               </div>
//             </div>
//           </div>
//           </div>
//       </nav> */}
//     </>  
//   );
// };

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;