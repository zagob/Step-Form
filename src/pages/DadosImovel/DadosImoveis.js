/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import {
  HomeContainer,
  Container_1,
  TituloPrincipal,
  SubtituloPrincipal,
  FormContainer,
  Steps,
  ModalidadeImovel,
  Input,
  ContainerForm,
  ContainerForm2,
  TextInfo,
  Label,
  Texto,
} from "./stytled";
// import { Container } from './styles';
import step1 from "../../assets/image/steps1.png";
// import step1 from "../../assets/svg/steps2.svg";
import btnApartamento from "../../assets/svg/btnApartamento.svg";
import TextInput from "../../components/InputText/InputText";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
// import { Checkbox } from 'primereact/checkbox';
import {
  Checkbox,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  BtnAzulEscuro,
  BtnVermelho,
  BtnCinza,
} from "../../components/Buttons/Buttons";
import "primeflex/primeflex.css";

function DadosImovel() {
  const [value, setValue] = useState("");
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
            <TextInput
              onChange={setValue}
              value={value}
              width={100}
            ></TextInput>
            <TextInput
              onChange={setValue}
              value={value}
              width={100}
            ></TextInput>
            <TextInput
              onChange={setValue}
              value={value}
              width={100}
            ></TextInput>
            <TextInput
              onChange={setValue}
              value={value}
              width={100}
            ></TextInput>
          </div>
        </ContainerForm>

        <SubtituloPrincipal>
          Faça uma descriação do seu imovel
        </SubtituloPrincipal>

        <ContainerForm2>
          <InputTextarea rows={5} cols={50} value={null} onChange={null} />
        </ContainerForm2>

        {/* <ContainerForm2>

                    <view>
                        <InputNumber value={null} onValueChange={null} mode="decimal" showButtons buttonLayout="vertical" style={{ width: '6em' }}
                            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />

                    </view>
                </ContainerForm2>
                <ContainerForm2>

                    <view>
                        <InputNumber value={null} onValueChange={null} mode="decimal" showButtons buttonLayout="vertical" style={{ width: '6em' }}
                            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />

                    </view>
                </ContainerForm2> */}
        <SubtituloPrincipal>NOS CONTE MAIS SOBRE O IMÓVEL</SubtituloPrincipal>
        <TextInfo>Marque os itens que o seu imóvel possui</TextInfo>

        {/* <ContainerForm>
                    <div className="p-col-12">
                        <Checkbox inputId="cb1" value="New York" onChange={null} checked={null}></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Armário de cozinha</label>
                    </div>
                    <div className="p-col-12">
                        <Checkbox inputId="cb2" value="San Francisco" onChange={null} checked={null}></Checkbox>
                        <label htmlFor="cb2" className="p-checkbox-label">Armário no quarto</label>
                    </div>
                    <div className="p-col-12">
                        <Checkbox inputId="cb3" value="Los Angeles" onChange={null} checked={null}></Checkbox>
                        <label htmlFor="cb3" className="p-checkbox-label">Armário no banheiro</label>
                    </div>

                </ContainerForm> */}
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
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Armário de cozinha"
            />

            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Armário no quarto"
            />
            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Armário no banheiro"
            />
            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Cama"
            />
            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
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
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Mesa"
            />

            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Cadeiras"
            />
            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Geladeira"
            />
            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Fogão"
            />
            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Poltrona"
            />
          </div>
        </FormContainer>
        <SubtituloPrincipal>OUTRAS INFIRMAÇÕES</SubtituloPrincipal>
        <TextInfo>Marque os itens que o seu imóvel possui</TextInfo>
        {/* <ContainerForm2>
                    <div className="p-col-12">
                        <Checkbox inputId="cb1" value="New York" onChange={null} checked={null}></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Cobertura</label>
                    </div>
                    <div className="p-col-12">
                        <Checkbox inputId="cb2" value="San Francisco" onChange={null} checked={null}></Checkbox>
                        <label htmlFor="cb2" className="p-checkbox-label">Piscina</label>
                    </div>
                    <div className="p-col-12">
                        <Checkbox inputId="cb3" value="Los Angeles" onChange={null} checked={null}></Checkbox>
                        <label htmlFor="cb3" className="p-checkbox-label">Armário no banheiro</label>
                    </div>

                </ContainerForm2> */}

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
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Cobertura"
            />

            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Piscina"
            />
            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="Aceita animais de estimação"
            />
            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
              }
              label="O condomínio possui áreas comuns"
            />
            <FormControlLabel
              control={
                <Checkbox checked={null} onChange={null} name="antoine" />
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
            <BtnCinza>voltar</BtnCinza>
          </div>

          <div
            style={{
              marginRight: "5%",
              flexDirection: "column",
              display: "flex",
              justifyItems: "self-start",
            }}
          >
            <Link to="/Custos">
              <BtnVermelho>continuar</BtnVermelho>
            </Link>
          </div>
        </FormContainer>
      </Container_1>
    </HomeContainer>
  );
}

export default DadosImovel;
