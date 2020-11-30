import React from 'react';
import ButtonBase from './styles.js'

const Button = (props) => {
    return (
        <ButtonBase as="a" className={props.className} href={props.href}>
            {props.title}
        </ButtonBase>
    );
}

export default Button;