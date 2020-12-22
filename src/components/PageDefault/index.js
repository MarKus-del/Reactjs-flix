/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '../Footer';
import MenuLateral from '../MenuLateral';

const AppWrapper = styled.div`
    background: linear-gradient(#000000, rgb(34, 42, 49));
    
    color: var(--white);
    margin-left: 15vw;
    display: flex;
    flex-direction: column;
    flex: 1;

    @media(max-width: 900px){
      margin-left: 0;
      padding-top: 65px;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

function PageDefault({ children }) {
  return (
    <>
      <MenuLateral />
      <AppWrapper>
        <Main>
          {children}
        </Main>
        <Footer />
      </AppWrapper>
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;
