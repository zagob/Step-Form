/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Form } from '@unform/web';
import {
  HomeContainer,
  Container_1,
  TituloPrincipal,
  SubtituloPrincipal,
  FormContainer,
  Steps,
  ModalidadeImovel,
  ContainerForm,
  ContainerForm2,
  TextInfo,
  Label,
  Texto,
} from "./stytled";
// import { Container } from './styles';
import step1 from "../../../../assets/image/steps1.png";
// import step1 from "../../assets/svg/steps2.svg";
import btnApartamento from "../../../../assets/svg/btnApartamento.svg";
import TextInput from "../../../../components/InputText/InputText";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
// import { Checkbox } from 'primereact/checkbox';
import {
  Checkbox,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@material-ui/core";

import { Input } from '@material-ui/core'
import { Link } from "react-router-dom";
import {
  BtnAzulEscuro,
  BtnVermelho,
  BtnCinza,
} from "../../../../components/Buttons/Buttons";
import "primeflex/primeflex.css";

// import Input from '../../../../components/Input';

function DadosImovel({ formData, setForm, navigation }) {
  const { 
    rua, 
    numero, 
    bairro, 
    complemento, 
    descricao, 
    imovel, 
    outros 
  } = formData;

  console.log(formData.imovel)
  console.log(formData)
  // const [value, setValue] = useState("");
     const [checked, setChecked] = useState([]);

     const handleCheckBox = (e) => {
      console.log(e)
    }
     

  return (
    <HomeContainer>
      <Container_1>
        <Steps>
          <img src={step1}></img>
        </Steps>

        <TituloPrincipal>
          <h1>Dados do imóvel</h1>
        </TituloPrincipal>

        <SubtituloPrincipal>
          QUAL TIPO DE IMÓVEL DESEJA ANUNCIAR?
        </SubtituloPrincipal>
        <ModalidadeImovel>
          <a>
            <img src={btnApartamento}></img>
          </a>
          <a>
            <img src={btnApartamento}></img>
          </a>
          <a>
            <img src={btnApartamento}></img>
          </a>
        </ModalidadeImovel>

        {/* <Input></Input> */}
        <ContainerForm>
          <SubtituloPrincipal>INFORME O ENDEREÇO</SubtituloPrincipal>
          <div>
            <TextField
              style={{ marginBottom: '10px', marginTop: '10px' }}
              fullWidth
              variant="outlined"
              name="rua"
              value={rua}
              onChange={setForm}

            />
            <TextField
              style={{ marginBottom: '10px' }}
              name="numero"
              value={numero}
              onChange={setForm}
              variant="outlined"
              fullWidth
              // width={100}
            />
            <TextField
              // name="bairro"
              style={{ marginBottom: '10px' }}
              value={bairro}
              onChange={setForm}
              width={100}
              variant="outlined"
              fullWidth
            />
            <TextField
              style={{ marginBottom: '10px' }}
              name="complemento"
              value={complemento}
              onChange={setForm}
              width={100}
              variant="outlined"
              fullWidth
            />
          </div>
        </ContainerForm>

        <SubtituloPrincipal>
          Faça uma descriação do seu imovel
        </SubtituloPrincipal>

        <ContainerForm2>
          <InputTextarea 
            rows={5} 
            cols={50} 
            name="descricao"
            value={descricao} 
            onChange={setForm} />
        </ContainerForm2>

        <SubtituloPrincipal>NOS CONTE MAIS SOBRE O IMÓVEL</SubtituloPrincipal>
        <TextInfo>Marque os itens que o seu imóvel possui</TextInfo>

        <FormContainer>
          <div
            style={{
              marginRight: "5%",
              flexDirection: "column",
              display: "flex",
              justifyItems: "self-start",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox 
                  // checked={}
                  type="checkbox"
                  value={setForm.imovel}
                  onChange={setForm.imovel} 
                  name="Armario-de-cozinha" 
                />
              }
              label="Armário de cozinha"
            />

            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm} 
                  name="Armário no quarto"
                />
              }
              label="Armário no quarto"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm}  
                  name="Armário no banheiro" 
                />
              }
              label="Armário no banheiro"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm} 
                  name="Cama" 
                />
              }
              label="Cama"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm}
                  name="Sofá" 
                />
              }
              label="Sofá"
            />
          </div>

          <div
            style={{
              marginRight: "5%",
              flexDirection: "column",
              display: "flex",
              justifyItems: "self-start",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm}
                  name="Mesa" 
                />
              }
              label="Mesa"
            />

            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm}
                  name="Cadeiras" 
                />
              }
              label="Cadeiras"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm}
                  name="Geladeira"
                />
              }
              label="Geladeira"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm} 
                  name="Fogão" 
                />
              }
              label="Fogão"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm}
                  name="Poltrona" 
                />
              }
              label="Poltrona"
            />
          </div>
        </FormContainer>
        <SubtituloPrincipal>OUTRAS INFORMAÇÕES</SubtituloPrincipal>
        <TextInfo>Marque os itens que o seu imóvel possui</TextInfo>

        <FormContainer>
          <div
            style={{
              marginRight: "5%",
              flexDirection: "column",
              display: "flex",
              justifyItems: "self-start",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={outros}
                  onChange={setForm} 
                  name="Cobertura"
                />
              }
              label="Cobertura"
            />

            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm} 
                  name="Piscina" 
                />
              }
              label="Piscina"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm} 
                  name="Aceita animais" 
                />
              }
              label="Aceita animais de estimação"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm} 
                  name="possui áreas comuns" 
                />
              }
              label="O condomínio possui áreas comuns"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  type="checkbox" 
                  value={imovel}
                  onChange={setForm} 
                  name="imóvel está ocupado atualmente" 
                />
              }
              label="O imóvel está ocupado atualmente"
            />
          </div>
        </FormContainer>
        <FormContainer>

          <div
            style={{
              marginRight: "5%",
              flexDirection: "column",
              display: "flex",
              justifyItems: "self-start",
            }}
          >
            {/* <Link to="/Custos">
              <BtnVermelho>continuar</BtnVermelho>
            </Link> */}
            {/* <Button
              variant="contained"
              fullWidth
              color="primary"
              style={{ marginTop: "1rem" }}
              onClick={() => navigation.next(window.scrollTo({
                top: 100,
                behavior: 'smooth'
              }))}
            >
              Next
            </Button> */}

            <BtnVermelho
              onClick={() => navigation.next(window.scrollTo({
                top: 100,
                behavior: 'smooth'
              }))}
            >continuar</BtnVermelho>
          </div>
        </FormContainer>
      </Container_1>
    </HomeContainer>
  );
}

export default DadosImovel;
