import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: #141414;
  padding: 32px 16px;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  } 
`;

export const Links = styled.a`
  display: inline-block;
  padding-top: 12px;
`;

export const Thanks = styled.section`
  width: 50%;

  text-align: center;
  line-height: 1,5px;
  
  display: flex;
  flex-direction: column;

  p {
    text-transform: capitalize;
  }

`;
