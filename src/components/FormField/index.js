import React from 'react';

function FormField({ conteudo, nome, type, value, functionHandle, isTextArea }){
    
    function renderInput(){
        return(
            <input name={nome} type={type}  value={value} onChange={functionHandle} />
        )
    }

    function renderTextArea(){
        return(
            <textarea name={nome} type={type}  value={value} onChange={functionHandle} />
        )
    }
    
    
    return (
        <div>
            <label>
                {conteudo}
                {isTextArea ? renderTextArea(): renderInput()}
            </label> 
        </div>
    )
}

export default FormField;