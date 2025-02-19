import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IconContext } from "react-icons"

import { useState } from 'react';
import './Navbar.css';

export function Navbar({ handleMenuClick, handleCartClick }) {
  const [isSchoolDropdownOpened, setIsSchoolDropdownOpened] = useState(false);
    return (
        <nav className='nav-bar'>
          <div className='logo-wrapper'>
            <button id='menu-button' onClick={handleMenuClick}>
              <IconContext.Provider value={{ className:'menu-icon'}}>
                <div>
                  <TiThMenu />
                </div>
              </IconContext.Provider>
            </button>
          </div>
          <div className='search-bar-wrapper'>
            <div className='logo-wrapper--location'>
              <IconContext.Provider value={{ className: 'location-icon'}}>
                <div>
                  <FaLocationDot />
                </div>
              </IconContext.Provider>
            </div>
            <input className='search-box school' type='text' placeholder='Enter School...' onFocus={() => setIsSchoolDropdownOpened(true)}/>

            <div className='logo-wrapper--search'>
              <IconContext.Provider value={{ className: "location-icon"}}>
                <div>
                  <FaSearch />
                </div>
              </IconContext.Provider>
            </div>
            <input className='search-box search' type='text' placeholder='Search...'></input>
          </div>
          <div className={`search-box-dropdown ${isSchoolDropdownOpened ? 'school-dropdown--open' : ''}`}></div>
          <div className='logo-wrapper'>
            <button className='shopping-bag-button' onClick={handleCartClick}>
            <IconContext.Provider value={{ className: "shopping-bag-icon" }}>
              <div>
                <FaBagShopping />
              </div>
            </IconContext.Provider>
            </button>
          </div>
        </nav>
    );
}