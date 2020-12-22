import styled from 'styled-components';

const Button = styled.button`
        color: var(--white);
        box-sizing: border-box;
        cursor: pointer;
        padding: 16px 24px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        outline: none;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
        transition: background 0.5s;
        background-color: #2980b9;
        box-sizing: border-box;
        margin: 0px 15px;
        margin-bottom: 10px;
    
    &:hover,
    &:focus {
        background-color: #fff;
        color: #2980b9;
    }

    @media (max-width: 900px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0px;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;
    
  }

`;

export default Button;
