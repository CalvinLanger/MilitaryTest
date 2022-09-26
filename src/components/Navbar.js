import React from 'react';
import { FaBars } from 'react-icons/fa';


function Navbar(props) {
    return (
        <div className='nav-bar'>
            <div className='navbar-logo' onClick={props.mainPage}>
                TESTYWOJSKOWE.PL
            </div>
            <div className='navbar-menu'>
                <div className='navbar-login' onClick={props.login}>
                    Zaloguj
                </div>
                <div className='navbar-contact' onClick={props.contact}>
                    Kontakt
                </div>
                <FaBars className='fabars-icon' />
            </div>
        </div>
    );
};

export default Navbar;