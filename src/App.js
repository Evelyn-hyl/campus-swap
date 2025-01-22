import logo from './assets/Campus-Swap-Logo.svg'
import { Navbar } from './components/Navbar/Navbar.js';
import { SidepeekMenu } from './components/SidepeekMenu/SidepeekMenu.js'
import { SidepeekCart } from './components/SidepeekCart/SidepeekCart.js';
import { ProductGrid } from './components/ProductGrid/ProductGrid.js';

import { useState } from 'react';
import './App.css';


export default function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isCartOpened, setIsCartOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(true);
    console.log("menu opened");
  }

  const closeMenu = () => {
    setIsMenuOpened(false);
    console.log("menu closed");
  }

  const handleMenuClick = () => {
    if (isMenuOpened === false) {
      openMenu();
    } 
    if (isMenuOpened === true) {
      closeMenu();
    }
  }

  const closeCart = () => {
    setIsCartOpened(false);
    console.log("cart closed");
  }

  const handleCartClick = () => {
    if (isCartOpened === false) {
      setIsCartOpened(true);
      console.log("cart opened");
    } else {
      closeCart();
    }
  }

  return (
    <>
      <header className='bar-wrapper'>

        <div className='top-bar'></div>

        {/* Header Bar */}
        <div className="header-bar">
          <img src={logo} id='logo-img' alt='CAMPUS SWAP'></img>

          {/* login section wrapper */}
          <div className=''></div>
        </div>

        {/* Nav Bar */}
        <Navbar handleMenuClick={handleMenuClick} handleCartClick={handleCartClick}/>
      </header>

      {/* Side Peek Menu */}
      <SidepeekMenu isOpened={isMenuOpened} onClose={closeMenu}/>

      <SidepeekCart isOpened={isCartOpened} onClose={closeCart}/>
      
      {/* Items */}
      <div className='main-content-wrapper'>
        <ProductGrid />
      </div>
    </>
  );
}