import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IconContext } from "react-icons"

import './Navbar.css';

export function Navbar({ handleMenuClick, handleCartClick }) {
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
              <IconContext.Provider value={{ className: "location-icon"}}>
                <div>
                  <FaLocationDot />
                </div>
              </IconContext.Provider>
            </div>
            <input className='search-box school' type='text' placeholder='Enter School...'></input>
            <div className='logo-wrapper--search'>
              <IconContext.Provider value={{ className: "location-icon"}}>
                <div>
                  <FaSearch />
                </div>
              </IconContext.Provider>
            </div>
            <input className='search-box search' type='text' placeholder='Search...'></input>
          </div>
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