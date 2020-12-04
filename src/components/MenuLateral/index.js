import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/image/logoFlix.png';
import { MenuWrapper, Logo, YourPlaylist  } from './styles';
import Button from '../Button';


const MenuLateral = ({categoryLinks}) => {
    const Links = categoryLinks;
    return(
        <MenuWrapper >
                <div>
                <Link  to="/">
                    <Logo   src={Image} alt="Logo"/>
                </Link>
                <YourPlaylist>
                    <summary>Your Playlist</summary>
                    <ul>
                        {Links.map((item) => {
                            return (
                                <li>
                                    <a href={"#" + item.split(" ")}>
                                        {item}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    
                </YourPlaylist>
                </div>
                
           
            

            <Button as={Link}  to="/cadastro/video"> 
                Novo Video
            </Button>           
        </MenuWrapper>
    );
}

export default MenuLateral;