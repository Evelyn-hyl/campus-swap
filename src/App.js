import { HeaderBar } from './components/HeaderBar/HeaderBar.js';
import { Navbar } from './components/Navbar/Navbar.js';
import { SidepeekMenu } from './components/SidepeekMenu/SidepeekMenu.js'
import { SidepeekCart } from './components/SidepeekCart/SidepeekCart.js';
import { SidepeekFilters } from './components/SidepeekFilters/SidepeekFilters.js';
import { ProductGrid } from './components/ProductGrid/ProductGrid.js';
import { Footer } from './components/Footer/Footer.js'

import { useState } from 'react';
import './App.css';

export default function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isFiltersOpened, setIsFiltersOpened] = useState(false);

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

  const handleFiltersClick = () => {
    if (isFiltersOpened === false) {
      setIsFiltersOpened(true);
      console.log("filters menu opened");
    } else {
      closeFilters();
    }
  }

  const closeFilters = () => {
    setIsFiltersOpened(false);
    console.log("filters closed");
  }

  return (
    <>
      <header className='bar-wrapper'>

        <div className='top-bar'></div>

        {/* Header Bar */}
        <HeaderBar/>

        {/* Nav Bar */}
        <Navbar handleMenuClick={handleMenuClick} handleCartClick={handleCartClick}/>
      </header>

      {/* Sidepeeks*/}
      <SidepeekMenu isOpened={isMenuOpened} onClose={closeMenu}/>

      <SidepeekCart isOpened={isCartOpened} onClose={closeCart}/>
      
      <SidepeekFilters isOpened={isFiltersOpened} onClose={closeFilters}/>

      {/* Items */}
      <main className='main-content-wrapper'>
        <ProductGrid handleFiltersClick={handleFiltersClick}/>
      </main>

      <footer className='footer-wrapper'>
        <Footer />
      </footer>
    </>
  );
}