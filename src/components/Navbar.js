import React from 'react';

function login() {
    alert('Login');
}

function contact() {
    alert('hello world');
}

function Navbar() {
    return (
        <div className='nav-bar'>
            <div className='navbar-logo'>
                TESTYWOJSKOWE.PL
            </div>
            <div className='navbar-menu'>
                <div className='navbar-login' onClick={login}>
                    Zaloguj
                </div>
                <div className='navbar-contact' onClick={contact}>
                    Kontakt
                </div>
            </div>
        </div>
    );
}

export default Navbar;