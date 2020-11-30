import React from 'react';
import './Menu.css';
import Logo from '../../assets/image/logoFlix.png';
import Button from '../Button/';

const Menu = () => {
    return(
        <nav className="Menu">
            <a  href="/">
                <img  className="Logo" src={Logo} alt="Logo"/>
            </a>

            <Button 
                as="a" 
                className="ButtonLink" 
                href="/" 
                title="Novo video"
            />           
        </nav>
    );
}

export default Menu;