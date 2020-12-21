import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  conteudo, nome, type, value, functionHandle, isTextArea,
}) {
  const formfieldID = `id_${nome}`;

  function renderInput() {
    return (<input name={nome} type={type} value={value} onChange={functionHandle} />);
  }

  function renderTextArea() {
    return (
      <textarea name={nome} type={type} value={value} onChange={functionHandle} />
    );
  }

  return (
    <div>
      <label
        htmlFor={formfieldID}
      >
        {conteudo}
        {isTextArea ? renderTextArea() : renderInput()}
      </label>
    </div>
  );
}

FormField.defaultProps = {
  isTextArea: false,
};

FormField.propTypes = {
  conteudo: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  functionHandle: PropTypes.func.isRequired,
  isTextArea: PropTypes.bool,
};

export default FormField;
