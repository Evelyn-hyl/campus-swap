import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IconContext } from "react-icons"

import { useState, useRef } from 'react';
import states from '../../data/usStates'
import './Navbar.css';

export function Navbar({ handleMenuClick, handleCartClick }) {
  const [isSchoolDropdownOpened, setIsSchoolDropdownOpened] = useState(false);
  const schoolInputRef = useRef(null);


  const handleSchoolSelect = (stateName) => {
    if (schoolInputRef.current) {
      schoolInputRef.current.value = stateName;
    }
    setIsSchoolDropdownOpened(false);
  }

  const handleSchoolDropdown = () => {
    setIsSchoolDropdownOpened((prev) => !prev);
  }

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
            <div className='school-search-bar-wrapper'>
              <div className='logo-wrapper--location'>
                <IconContext.Provider value={{ className: 'location-icon'}}>
                  <div>
                    <FaLocationDot />
                  </div>
                </IconContext.Provider>
              </div>
              <input className='search-box school' type='text' ref={schoolInputRef} placeholder='Enter School...' onFocus={handleSchoolDropdown}/>
              <div className={`search-box-dropdown ${isSchoolDropdownOpened ? 'school-dropdown--open' : ''}`}>
                <p className='dropdown-inline-title'>Select State</p>
                <div className='divider'></div>
                <ul className="dropdown-options">
                  {states.slice(0, 10).map((item, index) => (
                    <li key={index} onClick={() => handleSchoolSelect(item.name)}>{ item.name }</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='search-search-bar-wrapper'>
              <div className='logo-wrapper--search'>
                <IconContext.Provider value={{ className: "location-icon"}}>
                  <div>
                    <FaSearch />
                  </div>
                </IconContext.Provider>
              </div>
              <input className='search-box search' type='text' placeholder='Search...'></input>
            </div>
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