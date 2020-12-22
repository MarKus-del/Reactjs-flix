import React, { useState, useEffect } from 'react';

// import dadosIniciais from '../../data/dados_iniciais.json';
import categoriasRepository from '../../repositories/categoria';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      });
  }, []);

  return (
    <PageDefault>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((playlist, index) => {
        if (index === 0) {
          return (
            <>
              <BannerMain
                videoTitle={playlist.titulo}
                url={playlist.videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos
          HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e
          desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel
                key={playlist.id}
                ignoreFirstVideo
                category={playlist}
              />
            </>
          );
        }
        return (
          <Carousel
            key={playlist.id}
            category={playlist}
          />

        );
      })}

    </PageDefault>
  );
}

export default Home;
