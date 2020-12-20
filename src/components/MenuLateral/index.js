import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../assets/image/logoFlix.png';
import {
  MenuWrapper, Logo, YourPlaylist, ContainerLinks, Title, ItemLink, LinkToPlaylist,
} from './styles';
import Button from '../Button';

function MenuLateral({ categoryLinks }) {
  const Links = categoryLinks;

  const renderListPlaylist = (item) => (
    <LinkToPlaylist href={`/#${item.split(' ')[0]}`} key={`id_${item.split(' ')[0]}`}>
      <ItemLink>{item}</ItemLink>
    </LinkToPlaylist>
  );

  return (
    <MenuWrapper>
      <div>
        <Link to="/">
          <Logo src={Image} alt="Logo" />
        </Link>
        {Links && (
        <YourPlaylist>
          <Title>Your Playlist</Title>
          <ContainerLinks>
            {Links.map(renderListPlaylist)}
          </ContainerLinks>
        </YourPlaylist>
        )}

      </div>

      <Button as={Link} to="/cadastro/categoria">
        New Category
      </Button>
    </MenuWrapper>
  );
}

MenuLateral.propTypes = {
  categoryLinks: PropTypes.arrayOf(String).isRequired,
};

export default MenuLateral;
