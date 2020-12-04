import React from 'react';
import { FooterBase, Links, Thanks } from './styles';

function Footer() {
  return (
    <FooterBase>

      <Thanks>
        <p>
          developed and customized 
          <br/>
          by
          <br/>
          Marcos Rodrigues
          <br/>
        </p>
        
        <Links href="https://github.com/MarKus-del" target="_blank">
          Markus-del on github
        </Links>
      </Thanks>

      <Thanks>
      <Links href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </Links>
      <p>
        Orgulhosamente criado durante a
        <br/>
        <Links href="https://www.alura.com.br/" target="_blank">
          Imersão React da Alura
        </Links>
      </p>
      </Thanks>
      
    </FooterBase>
  );
}

export default Footer;