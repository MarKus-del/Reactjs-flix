import React from 'react';
import Footer from '../Footer';
import MenuLateral from '../MenuLateral';
import styled from 'styled-components';


const AppWrapper = styled.div`
    background: linear-gradient(#000000, rgb(34, 42, 49));
    
    color: var(--white);
    margin-left: 15vw;

    @media(max-width: 800px){
      margin-left: 0;
      padding-top: 40px;
    }
`;

const Main = styled.main`
    
`;

const PageDefault = (  {categoryLinks,children}) => {

    return (
        <>
            <MenuLateral categoryLinks={categoryLinks}/>
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