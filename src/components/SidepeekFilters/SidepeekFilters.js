import { RxCross2 } from "react-icons/rx";
import { IconContext } from "react-icons"

import './SidepeekFilters.css';

export function SidepeekFilters({ isOpened, onClose }) {

    const conditionCategory = ["New", "Like New", "Used - Excellent", "Used - Good", "Used - Fair"];

    const handleShowResultsClick = () => {
        console.log("Applied filters!");
    }

    return (
        <>
        <div className={`filters-overlay ${isOpened? 'overlay--visible' : ''}`} onClick={onClose}></div>

        {/* Sidepeek Filters */}
        <div className='sidepeek-filters-wrapper'>
            <nav className={`sidepeek-filters ${isOpened ? 'sidepeek-filters--open' : ''}`}>
                <div className='sidepeek-filters_top'>
                    <h3 className='h3'>Filters</h3>
                    <button className='exit-button' onClick={onClose}>
                        <IconContext.Provider value={{ className:'exit-icon' }}>
                        <div>
                            <RxCross2 />
                        </div>
                        </IconContext.Provider>
                    </button>
                </div>

                <div className='divider'></div>

                <div className='sidepeek-filters_content'>
                    <h4 className="h4">Price</h4>
                    <h4 className="h4">Condition</h4>
                    <ul className='filters-list'>
                        {conditionCategory.map((condition) => (
                            <label className="filters-checkbox">
                                <input 
                                type="checkbox"
                                value={condition}
                                />
                                {condition}
                            </label>
                        ))}
                    </ul>
                </div>

                <div className='sidepeek-cart_bottom'>
                    <button className='show-results-button' onClick={handleShowResultsClick}>Show Results</button>
                </div>
            </nav>
        </div>
        </>
    );
}