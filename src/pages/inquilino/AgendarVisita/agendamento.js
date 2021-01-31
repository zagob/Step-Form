import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import logo from "../../../assets/svg/iconSpot.svg";
import {
  Container,
  Titulo,
  Quadrado,
  RadioBtn,
  Label,
  ButtonSelector,
} from "./style";

function AgendarVisita(props) {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const [value,setValue] = useState();



  const handleClick = (props) => {
    setActive(true);
    const {value} = props.target
    setValue(value)
    console.log(value)
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const handleClick2 = (props) => {
    setActive2(true);
    const {value} = props.target
    setValue(value)
    console.log(value)
    setActive(false);
    setActive3(false);
    setActive4(false);
  };
  const handleClick3 = (props) => {
    setActive3(true);
    const {value} = props.target
    setValue(value)
    console.log(value)
    setActive2(false);
    setActive(false);
    setActive4(false);
  };
  const handleClick4 = (props) => {
    setActive4(true);
    const {value} = props.target
    setValue(value)
    console.log(value)
    setActive2(false);
    setActive3(false);
    setActive(false);
  };

  return (
    <Container>
      <Titulo>Agendar visita</Titulo>
      <ButtonSelector value={1} active={active} onClick={handleClick}>
        1
      </ButtonSelector>

      <ButtonSelector value={2} active={active2} onClick={handleClick2}>
        2
      </ButtonSelector>

      <ButtonSelector value={3} active={active3} onClick={handleClick3}>
        3
      </ButtonSelector>

      <ButtonSelector value={`${4}+`} active={active4} onClick={handleClick4}>
        4+
      </ButtonSelector>
    </Container>
  );
}

export default AgendarVisita;
