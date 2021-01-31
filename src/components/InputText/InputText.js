
import React from "react";
import styled from "styled-components";

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

  ::-webkit-input-placeholder {
    opacity: 0.4;
  }
`;
// import { Container } from './styles';

const  TextInput=(props)=>{
  return (
    <InputTex
      placeholder={props.placeholder}
      width={props.width}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
    ></InputTex>
  );
}

export default TextInput;
