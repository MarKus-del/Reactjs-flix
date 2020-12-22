/* eslint-disable radix */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { ContainerPrincipal } from '../style';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/video';
import categoriasRepository from '../../../repositories/categoria';

function CadastroVideo() {
  const { id } = useParams();

  const history = useHistory();
  const [category, setCategory] = useState('');
  const { values, handleChange } = useForm({
    titulo: '',
    url: '',
    categoriaId: id,
  });

  useEffect(() => {
    categoriasRepository.getOneCategory(id)
      .then((categoriaFromServer) => {
        setCategory(categoriaFromServer.titulo);
      })
      .catch((err) => {
        console.log('erro pego', err);
        history.push('/404');
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: parseInt(id),
    })
      .then(() => {
        history.push('/');
      });
  }
  return (
    <PageDefault>
      <ContainerPrincipal>
        <h1>
          cadastro de video:
        </h1>
        <form onSubmit={handleSubmit}>
          <FormField
            conteudo="Titulo do video"
            name="titulo"
            type="text"
            value={values.titulo}
            functionHandle={handleChange}
          />
          <FormField
            conteudo="URL"
            name="url"
            value={values.url}
            type="url"
            functionHandle={handleChange}
          />
          <FormField
            conteudo="Categoria"
            name="categoria"
            type="text"
            value={category}
            functionHandle={handleChange}
          />

          <Button>Cadastrar</Button>
        </form>

        <Link to="/">
          ir para home
        </Link>
      </ContainerPrincipal>
    </PageDefault>
  );
}

export default CadastroVideo;
