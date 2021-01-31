import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Container, Row, ContainerBtn, Grid } from "./stytled";
import { BtnCinza, BtnVermelho } from "../../components/Buttons/Buttons";
import TextInput from "../../components/InputText/InputText";

import user from "../../assets/svg/user.svg";
function CadastroUser() {
  const [value, setValue] = useState("");
  return (
    <Container>
      <div className="title">
        <h1>Seu cadastro</h1>
        <h3>JÁ ESTAMOS QUASE TERMINANDO</h3>
          <h4>Faça o cadastro para completar o cadastro do seu imóvel</h4>
      </div>
      <Grid>
        <div>
          <img src={user} />
          <BtnCinza>adicione uma foto</BtnCinza>
        </div>
        <div>
          <TextInput placeholder="CEP" onChange={setValue} value={value} width={90} />
          <TextInput placeholder="Logradouro" onChange={setValue} value={value} width={90}></TextInput>
          <Row>
            <TextInput placeholder="N°" onChange={setValue} value={value} width={30}></TextInput>
            <TextInput placeholder="Complemento" onChange={setValue} value={value} width={58}></TextInput>
          </Row>
          <TextInput placeholder="Bairro" onChange={setValue} value={value} width={90}></TextInput>
          <TextInput placeholder="Cidade" onChange={setValue} value={value} width={90}></TextInput>
        </div>
        <div>
          <p>Tipo de documento</p>
        </div>
        <div>
          <TextInput placeholder="RG" onChange={setValue} value={value} width={90}></TextInput>
        </div>
        <div>
          <p>Nº de documento</p>
        </div>
        <div>
          <TextInput onChange={setValue} value={value} width={90}></TextInput>
        </div>
        <div>
          <p>E-mail</p>
        </div>
        <div>
          <TextInput onChange={setValue} value={value} width={90}></TextInput>
        </div>
        <div>
          <p>Senha</p>
        </div>
        <div>
          <TextInput onChange={setValue} value={value} width={90}></TextInput>
        </div>
        <div>
          <p>Confirme a senha </p>
        </div>
        <div>
          <TextInput onChange={setValue} value={value} width={90}></TextInput>
        </div>
      </Grid>

      <ContainerBtn>
        <BtnCinza>voltar</BtnCinza>
        <BtnVermelho>continuar</BtnVermelho>
      </ContainerBtn>
    </Container>
  );
}

export default CadastroUser;
