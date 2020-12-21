import React from 'react';
import Footer from '../Footer';
import MenuLateral from '../MenuLateral';
import styled from 'styled-components';
import dadosIniciais from './../../data/dados_iniciais.json';

const AppWrapper = styled.div`
    background: linear-gradient(#000000, rgb(34, 42, 49));
    
    color: var(--white);
    margin-left: 15vw;
    display: flex;
    flex-direction: column;
    flex: 1;

    @media(max-width: 800px){
      margin-left: 0;
      padding-top: 40px;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const PageDefault = ({ children }) => {

    const getCategoryLinks = () => {
        const dataLinks = dadosIniciais.categorias.map(({titulo}) => titulo);
        return dataLinks;
    }
    return (
        <>
            <MenuLateral categoryLinks={getCategoryLinks()}/>
            <AppWrapper>
                <Main>
                    {children}
                </Main>
                <Footer/> 
            </AppWrapper>  
        </> 
    );
}



export default PageDefault;