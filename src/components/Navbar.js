import React from 'react';

function Navbar() {
    return (
        <div className='nav-bar'>
            <div className='navbar-logo'>
                TESTYWOJSKOWE.PL
            </div>
            <div className='navbar-menu'>
                <div className='navbar-login'>
                    Zaloguj
                </div>
                <div className='navbar-contact'>
                    Kontakt
                </div>
            </div>
        </div>
    );
}

export default Navbar;