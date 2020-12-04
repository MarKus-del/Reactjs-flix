import styled from 'styled-components';

export const Logo = styled.img`
  max-width: 168px;
  
  @media (max-width: 800px) { 
      max-width: 105px; 
  }
`;

export const MenuWrapper = styled.nav`
  width: 15vw;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0px;
  
  background:  #141414;
  border-right: 2px solid #fff;

  
  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }

  
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    height: 40px;
    justify-content: center;
    border: none;
    border-bottom: 2px solid #fff;

    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }

`;

export const YourPlaylist = styled.details`
    margin-top: 50px;
    color: var(--white);
    width: 100%;
    display: flex;
    background: initial;

    justify-self: end;

    summary{
      height: initial;
      padding: 15px 0px 10px;
      font-weight:bold;
      outline: 0;
    }

    &[open] > summary{
      background: rgb(38, 38, 38);
    }

    ul{
      list-style: none;
      width:100% ;
      padding: 0px;
      text-align: justify;
      margin: 0px;
    }

    ul li {
      padding: 15px
    }

    ul li:hover {
      background: rgb(38, 38, 38);
    }

    ul li a{
      text-decoration: none
    }

    @media(max-width: 800px){
      display: none;
    }
`; 