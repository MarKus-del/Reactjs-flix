import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/image/logoFlix.png';
import {
  MenuWrapper, Logo, YourPlaylist, ContainerLinks, Title,
  LinkToPlaylist, ItemLink, Divisor,
} from './styles';
import Button from '../Button';
import categoryRepository from '../../repositories/categoria';

function MenuLateral() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoryRepository.getAll().then((data) => {
      const categoriasTitulos = data.map((categoria) => categoria.titulo);
      setCategorias([
        ...categoriasTitulos,
      ]);
    });
  }, []);

  return (
    <MenuWrapper>
      <div>
        <Link to="/">
          <Logo src={Image} alt="Logo" />
        </Link>
        {categorias && (
        <YourPlaylist>
          <Title>Your Playlist</Title>
          <Divisor />
          <ContainerLinks>
            {categorias.map((linkDaCategoria) => (
              <LinkToPlaylist href={`/#${linkDaCategoria.split(' ')[0]}`} key={`id_${linkDaCategoria.split(' ')[0]}`}>
                <ItemLink>{linkDaCategoria}</ItemLink>
              </LinkToPlaylist>
            ))}
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

export default MenuLateral;
