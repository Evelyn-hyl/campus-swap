// import { useState } from 'react';
import './SidepeekMenu.css';

export function SidepeekMenu({ isOpened, onClose }) {
    
    return (
      <>
      {/* Overlay */}
        <div className={`overlay ${isOpened? 'overlay--visible' : ''}`} onClick={onClose}></div>

      {/* Sidepeek Menu */}
        <nav className={`sidepeek-menu ${isOpened ? 'sidepeek-menu--open' : ''}`}>
          <ul className='menu_list'>
            <li>New In</li>
            <li>Dorm Accessories</li>
            <li>Furniture</li>
            <li>Electronics</li>
            <li>Fashion</li>
          </ul>
        </nav>
      </>
    );
}