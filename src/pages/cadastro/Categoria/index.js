/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import { ContainerPrincipal } from './style';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function clearForm() {
    setValues(valoresIniciais);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);

    clearForm();
  }
  function handleChange(event) {
    const attribute = event.target.getAttribute('name');
    setValue(attribute, event.target.value);
  }

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';
    // E a ju ama variáveis
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <ContainerPrincipal>
        <h1>
          cadastro de categoria:
          {values.nome}
        </h1>
        <form onSubmit={handleSubmit}>
          <FormField
            conteudo="Nome da categoria"
            name="nome"
            type="text"
            value={values.nome}
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

          <Button>Enviar</Button>
        </form>

        {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
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
