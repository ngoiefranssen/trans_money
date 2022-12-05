import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
  
export default function Dropdown() {

    const [state, setState] = useState();
    const showDropdown = () =>{
        setState(true);
    };

    const hideDropdown = () =>{
        setState(false);
    };


  return (
    <div className='dropdown'>
        <div className='dropdown-menu' onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}>
        Lists
            <ul onMouseEnter={showDropdown}>
                <li className="nav-item ms-4">
                      <NavLink className="nav-Link" to="/listdepot">
                        List Depot
                      </NavLink>
                    </li>
                    <li className="nav-item ms-4">
                      <NavLink className="nav-Link" to="/list_transfert">
                        List Transfert
                      </NavLink>
                    </li>
            </ul>
        </div>
    </div>
  )
};
