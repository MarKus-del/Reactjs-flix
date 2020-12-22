import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import { ContainerPrincipal } from '../style';
import FormField from '../../../components/FormField';
import categoryRepository from '../../../repositories/categoria';

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoryRepository.getAll().then((resposta) => {
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    categoryRepository.saveCategory(values).then((categoria) => {
      console.log(categoria.id);
      history.push(`/cadastro/video/${categoria.id}`);
    });
    setCategorias([
      ...categorias,
      values,
    ]);

    clearForm();
  }

  return (
    <PageDefault>
      <ContainerPrincipal>
        <h1>
          cadastro de categoria:
          {values.titulo}
        </h1>
        <form onSubmit={handleSubmit}>
          <FormField
            conteudo="titulo da categoria"
            name="titulo"
            type="text"
            value={values.titulo}
            functionHandle={handleChange}
          />
          <FormField
            conteudo="descrição"
            name="descricao"
            type="textarea"
            value={values.descricao}
            functionHandle={handleChange}
          />
          <FormField
            conteudo="Cor"
            name="cor"
            type="color"
            value={values.cor}
            functionHandle={handleChange}
          />

          <Button>Cadastrar</Button>
        </form>

        {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </ContainerPrincipal>
    </PageDefault>
  );
}

export default CadastroCategoria;
