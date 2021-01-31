
import React, { useState } from "react";
import styled from "styled-components";
// import { Container } from './styles';

const Container = styled.div`
  display: flex;
`;

const BtnSelector = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.active ? "#CF3033" : "#fff")};
  border: ${(props) => (props.active ? "none" : "1px solid #CFCECD")};
  border-radius: 50%;
  color: ${(props) => (props.active ? "#fff" : "#182849")};
  outline: none;
  margin-left: 3px;
`;

const ButtonSelector =(props)=> {
    
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    // const [value, setValue] = useState();
   const setValue= props.setState

  const handleClick = (props) => {
    setActive(true);
    console.log(setValue)
    const { value } = props.target;
    setValue(value);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const handleClick2 = (props) => {
    setActive2(true);
    const { value } = props.target;
    setValue(value);
    console.log(value);
    setActive(false);
    setActive3(false);
    setActive4(false);
  };
  const handleClick3 = (props) => {
    setActive3(true);
    const { value } = props.target;
    setValue(value);
    console.log(value);
    setActive2(false);
    setActive(false);
    setActive4(false);
  };
  const handleClick4 = (props) => {
    setActive4(true);
    const { value } = props.target;
    setValue(value);
    console.log(value);
    setActive2(false);
    setActive3(false);
    setActive(false);
  };

  return (
    <Container>
      <BtnSelector value={1} active={active} onClick={handleClick}>
       1
      </BtnSelector>

      <BtnSelector value={2} active={active2} onClick={handleClick2}>
        2
      </BtnSelector>

      <BtnSelector value={3} active={active3} onClick={handleClick3}>
        3
      </BtnSelector>

      <BtnSelector value={`${4}+`} active={active4} onClick={handleClick4}>
        4+
      </BtnSelector>
    </Container>
  );
}

export default ButtonSelector;
