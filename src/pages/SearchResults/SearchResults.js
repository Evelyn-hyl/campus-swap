import { HeaderBar } from '../../components/HeaderBar/HeaderBar.js';
import { NavBar } from '../../components/NavBar/NavBar.js';
import { SidepeekMenu } from '../../components/SidepeekMenu/SidepeekMenu.js';
import { SidepeekCart } from '../../components/SidepeekCart/SidepeekCart.js'
import { SidepeekFilters } from '../../components/SidepeekFilters/SidepeekFilters.js';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid.js';
import { Footer } from '../../components/Footer/Footer.js'

import { useState } from 'react';
import { IconContext } from "react-icons"
import { MdFilterListAlt } from "react-icons/md";
import './SearchResults.css';

export default function SearchResults() {
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
    setIsCartOpened((prev) => !prev); 
    console.log(isCartOpened ? "cart closed" : "cart opened");
    }

    const handleFiltersClick = () => {
    setIsFiltersOpened((prev) => !prev);
    console.log(isCartOpened ? "filters menu closed" : "filters menu opened");
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
        <NavBar handleMenuClick={handleMenuClick} handleCartClick={handleCartClick}/>
        </header>

        {/* Sidepeeks*/}
        <SidepeekMenu isOpened={isMenuOpened} onClose={closeMenu}/>

        <SidepeekCart isOpened={isCartOpened} onClose={closeCart}/>
        
        <SidepeekFilters isOpened={isFiltersOpened} onClose={closeFilters}/>

        {/* Items */}
        <main className='search-results-main-content-wrapper'>
        <div className='filters-wrapper'>
                <button className='filters-button' onClick={ handleFiltersClick }>
                    <IconContext.Provider value={{ className: 'filters-icon' }}>
                        <MdFilterListAlt />
                    </IconContext.Provider>
                    Filters 
                </button>
                <div className='item-count-wrapper'>
                    <h6 className='item-count'>16 Items</h6>
                </div>
            </div>
            
            <ProductGrid />
        </main>

        <footer className='footer-wrapper'>
        <Footer />
        </footer>
    </>
    );
}