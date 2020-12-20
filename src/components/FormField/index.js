import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Input } from './style';

const Label = styled.label``;
Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute; 
    top: 0;
    left: 16px;
  
    display: flex;
    align-items: center;
  
    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
  
    transition: .1s ease-in-out;
`;

function FormField({
  conteudo, name, type, value, functionHandle,
}) {
  const formFieldID = `id_${name}`;
  const hasValue = Boolean(value.length);
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={formFieldID}
      >
        <Input
          as={tag}
          name={name}
          id={formFieldID}
          type={type}
          value={value}
          hasValue={hasValue}
          onChange={functionHandle}
        />
        <Label.Text>
          {conteudo}
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  functionHandle: () => {},
};

FormField.propTypes = {
  conteudo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  functionHandle: PropTypes.func,
};

export default FormField;
