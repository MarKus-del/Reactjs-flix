import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { ContainerPrincipal } from './style';
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: 'Nome da Categoria',
        descricao: 'Descrição da Categoria',
        cor: '#00cec9'
    }
    const [values, setValues] = useState(valoresIniciais)
    
    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        })
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    function handleChange(event){
        const attribute = event.target.getAttribute('name')
        setValue(attribute, event.target.value)
    }

    return (
        <PageDefault>
            <ContainerPrincipal>
                <h1>cadastro de categoria</h1>
                <form onSubmit={handleSubmit}>
                    <FormField
                        conteudo="Nome da categoria"
                        name="nome"
                        type="text"
                        value={values.nome}
                        functionHandle={handleChange}
                    />
                    <FormField
                        conteudo="descrição:"
                        name="descrição:"
                        type="text"
                        value={values.descricao}
                        functionHandle={handleChange}
                        isTextArea={true}
                    />
                    <FormField
                        conteudo="Cor"
                        name="cor"
                        type="color"
                        value={values.cor}
                        functionHandle={handleChange}
                    />
                         
                    <button  onClick={() => console.log(values)}>Enviar</button>
                </form>

                <Link to="/">
                    Ir para home
                </Link>
            </ContainerPrincipal> 
        </PageDefault>
    );
}

export default CadastroCategoria;