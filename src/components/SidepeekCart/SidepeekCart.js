import './SidepeekCart.css';
import { RxCross2 } from "react-icons/rx";
import { IconContext } from "react-icons";

export function SidepeekCart({ isOpened, onClose }) {
    return (
        <>
            {/* Sidepeek Cart */}
            <div className={`sidepeek-cart ${isOpened? 'sidepeek-cart--open' : ''}`}>
        
                {/* Sidepeek Cart - Top */}
                <div className='sidepeek-cart_top'>
                    <h3 className='h3'>Your cart</h3>

                    <div className='logo-wrapper'>
                        <button className='exit-button' onClick={onClose}>
                            <IconContext.Provider value={{ className:'exit-icon' }}>
                            <div>
                                <RxCross2 />
                            </div>
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>

                <div className='divider'></div>

                <div className='sidepeek-cart_content'>
                    {/* Sidepeek Cart - Items */}
                    <div className='sidepeek-cart_item-list'>
                    
                    </div>

                    {/* Sidepeek Cart - Checkout Button */}
                    <div className='sidepeek-cart_checkout-button-wrapper'>
                        <button className='checkout-button'>CHECKOUT</button>
                    </div>
                </div>

            </div>
        </>
    );
}