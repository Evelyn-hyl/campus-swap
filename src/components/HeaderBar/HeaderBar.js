import './HeaderBar.css';
import logo from '../../assets/Campus-Swap-Logo.svg'
import { useAuth0 } from "@auth0/auth0-react";

export function HeaderBar() {
    const { loginWithRedirect, logout, isAuthenticated }= useAuth0();
    console.log("Redirect URI:", window.location.origin);

    return (
        <div className="header-bar">
            <img src={logo} id='logo-img' alt='CAMPUS SWAP'></img>

            {/* login section wrapper */}
            <div className='login-button-wrapper'>
                {isAuthenticated ? (
                    <>
                    <button className='nav-button'>Profile</button>
                    <button className='nav-button'>Wishlist</button>
                    <button className='nav-button'>Inbox</button>
                    <button 
                        className='logout-button' 
                        onClick={() => logout({ returnTo: window.location.origin })}>
                        Logout
                    </button>
                    </>
                ) : (
                    <button className='login-button' onClick={ ()=> loginWithRedirect() }>LOGIN</button>
                )}
            </div>
        </div>
    );
}