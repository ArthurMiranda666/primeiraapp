import React from 'react';
import { Link, } from 'react-router-dom';
import '../header/styles.css';
import Logo from '../../assets/logo.png';
import '../../App.js';


function Header() {
   
    return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/Curiosidades'>
                        <li>Curiosidades</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/história'>
                        <li>História</li>
                    </Link>
                 
                </ul>
            </nav>

        </header>
    );
}

export default Header;