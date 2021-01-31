import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import { BtnVermelho, BtnCinza } from "../../../../components/Buttons/Buttons";
import Slider from "@material-ui/core/Slider";
import ButtonSelector from "./ButtonSelector";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
`;
const ModalArea = styled.div`
  background-color: #fff;
  border-radius: 1em;
  padding: 1.5em;

  .Initial {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      margin-top: 15px;
    }
  }
`;
const LinhaCinza = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid #bcbcbc;
`;

const Titulo = styled.p`
  color: #182849;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin-left: 0.5em;
`;
const Label = styled.p`
  color: #182849;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  margin-top: 1em;
  margin-right: 3em;
`;
const Row = styled.div`
  display: flex;
  justify-content:space-between;
  button {
    margin-top: 1em;
  }
  input {
    margin-top: 1em;
    margin-right: 2em;
  }

  section {
    .check {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;
const Input = styled.input`
  display: flex;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  height: 40px;
  width: 10em;
  border-radius: 20px;
  border-color: #cfcecd;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px blue;
  }
`;
const CustomSlider = styled(Slider)`
  && {
    color: #cf3033;
    width: 62%;
    cursor: pointer;
    height: 2px;
    display: inline-block;
    padding: 13px 0;
    position: relative;
    box-sizing: content-box;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
  }
`;



function Modal() {
  const history = useHistory();
  const [valorMin, SetValorMin] = useState("");

  const [quarto, setQuarto] = useState();
  const [banheiro, setBanheiro] = useState();

  return (
    <Container>
      <ModalArea>
        <div className="Initial">
          <Titulo>Filtros</Titulo>
          <div><BtnVermelho onClick={() => history.goBack()} >X</BtnVermelho></div>
        </div>
        <Label>Valor</Label>
        <Row>
          <BtnVermelho>aluguel</BtnVermelho>
          <BtnCinza>Valor Final</BtnCinza>
        </Row>

        <Row>
          <div>
            <Label>Valor mínimo </Label>
            <Input type="text" value={valorMin} disabled="disabled" />
          </div>

          <div>
            <Label>Valor Maximo </Label>
            <Input type="text" value={valorMin} disabled="disabled" />
          </div>
        </Row>
        <CustomSlider
          valueLabelDisplay="auto"    
          defaultValue={[0, 3000]}
          max={10000}
        />

        <Row>
          <Label>Número de quartos</Label>
          <ButtonSelector setState={setQuarto} />
         
        </Row>
        <LinhaCinza />
        <Row>
          <Label>Banheiros</Label>
          <ButtonSelector setState={setBanheiro} />
          
        </Row>
        <LinhaCinza />
        
        <Row>
          <section>
            <Label>Tipo de imóvel</Label>
            <div>
              <div className="check">
                <input type="checkbox" />
                <Label>Apartamento</Label>

                <input type="checkbox" />
                <Label>Casa</Label>
              </div>
              <div className="check">
                <input type="checkbox" />
                <Label>Kitnet</Label>

                <input type="checkbox" />
                <Label>Casa e condominio</Label>
              </div>
            </div>

            <BtnVermelho>Aplicar</BtnVermelho>
          </section>
        </Row>
      
        
       
      </ModalArea>
    </Container>
  );
}

export default Modal;
