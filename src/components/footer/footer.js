import React from "react";
import './styles.css';
import Logo from '../../assets/logo.png'
import { Link, } from 'react-router-dom';
import '../../App.js';



function Footer() {
    return (
      <div>
  <footer>
  <img id='logo' src={Logo} />
  <span>Todos os direitos reservados ©</span>
  <span>Desenvolvido por: Arthur Miranda</span>

        <nav className="footer-navigationdois">
            <ul className="footer-listdois">
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
            </ul>
        </nav>
    </footer>
  
      </div>
    );
  }
  
  export default Footer;