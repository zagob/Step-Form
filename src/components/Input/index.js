
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useField } from '@unform/core';

export const InputTex = styled.input.attrs({ type: "text" })`
  width: ${(props) => `${props.width}%`};
  border: 2px solid #cfcecd;
  border-radius: 30px;
  height: 40px;
  outline: none;
  padding: 10px;
  margin-bottom:10px;
  &:focus {
    border: 2px solid #182849;
  }
`;
// import { Container } from './styles';

const  Input = (props, name, ...rest)=>{
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputTex
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
    ></InputTex>
  );
}

export default Input;
