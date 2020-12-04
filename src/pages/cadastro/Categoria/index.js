import React from 'react';
import PageDefault from '../../../components/PageDefault';


const CadastroCategoria = () => {
    return (
        <PageDefault>
            <h1>cadastro de categoria</h1>
            <form>
                <label>Insirar o nome da categoria</label>
                <input type="text"/>
                <button>Enviar</button>
            </form>
        </PageDefault>
    );
}

export default CadastroCategoria;