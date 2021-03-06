import styled from 'styled-components';

export const Logo = styled.img`
  margin-top: 15px;
  max-width: 130px;
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
  //padding: 15px 0px;
  
  background:  #141414;
  border-right: 2px solid #fff;

  div{
    height: inherit;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }

  
  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    height: 65px;
    justify-content: center;
    align-items: center;
    border: none;
    border-bottom: 2px solid #fff;

    
    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }

`;

export const YourPlaylist = styled.div`
    margin-top: 50px;
    color: var(--white);
    width: 100%;
    display: flex;
    justify-self: end;

    @media(max-width: 900px){
      display: none;
    }
`;

export const Title = styled.summary`
  padding: 10px 0px 15px;
  font-weight:bold;
  outline: 0;
  @media(max-width: 900px){
      display: none;
    }
`;

export const Divisor = styled.hr`
  width: 70%;
  @media(max-width: 900px){
      display: none;
    }
`;

export const ContainerLinks = styled.ul`
  list-style: none;
  width: 100%;
  padding-top: 25px;
  padding-left: 0px;
  margin: 0px;
  @media(max-width: 900px){
      display: none;
    }
  `;

export const LinkToPlaylist = styled.a`
  text-decoration: none;
  height: 40px;
  padding: 0px;
  margin: 0px;
`;

export const ItemLink = styled.li`

  padding: 0px 15px;
  height:40px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  &:hover{
    background: rgb(38, 38, 38);
  }
`;
