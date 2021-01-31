import React from "react";
import {
  HomeContainer,
  Container1,
  Steps,
  Titulo,
  SubtituloPrincipal,
  TextInfo,
  FormContainer,
  BackgroundColorido,
  Label,
  Card,
  Texto,
  ContainerContent,
} from "./styled";

import {
  Checkbox,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import { Container } from './styles';
import step4 from "../../assets/svg/steps4.svg";
import {
  BtnAzulEscuro,
  BtnCinza,
  BtnVermelho,
} from "../../components/Buttons/Buttons";

function Visita() {
  return (
    <HomeContainer>
      <Container1>
        <Steps>
          <img src={step4}></img>
        </Steps>
        <Titulo>Visitas</Titulo>
        <SubtituloPrincipal>
          QUAL O MELHOR HORÁRIO PARA VISITAS?
        </SubtituloPrincipal>

        <Label>
          Escolha o melhor horário para receber os interessados em alugar seu
          imóvel
        </Label>
      </Container1>
      <FormContainer>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={null}
          onChange={null}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label={<Label>Horário comercial padrão</Label>}
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label={<Label>Montar minha agenda</Label>}
          />
        </RadioGroup>
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
          <Label>Quais os melhores dias?</Label>
          <FormControlLabel
            control={<Checkbox checked={null} onChange={null} name="antoine" />}
            label="Segunda"
          />

          <FormControlLabel
            control={<Checkbox checked={null} onChange={null} name="antoine" />}
            label="Terça"
          />
          <FormControlLabel
            control={<Checkbox checked={null} onChange={null} name="antoine" />}
            label="Quarta"
          />
          <FormControlLabel
            control={<Checkbox checked={null} onChange={null} name="antoine" />}
            label="Quinta"
          />
          <FormControlLabel
            control={<Checkbox checked={null} onChange={null} name="antoine" />}
            label="Sexta"
          />
          <FormControlLabel
            control={<Checkbox checked={null} onChange={null} name="antoine" />}
            label="Sabado"
          />
          <FormControlLabel
            control={<Checkbox checked={null} onChange={null} name="antoine" />}
            label="Domingo"
          />
        </div>

        <div style={{ width: "20%" }}>
          <Label>Qual turno?</Label>

          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={null}
            onChange={null}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label={<Label>Manhã</Label>}
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label={<Label>Tarde</Label>}
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label={<Label>O dia todo</Label>}
            />
          </RadioGroup>
          <Texto>
            OBS: Defina um horário flexível para você receber os visitantes,
            sabendo que podem haver eventualidades causadas pelo trânsito, tempo
            e etc. Contamos com a sua compreensão :)
          </Texto>
        </div>
      </FormContainer>

      <FormContainer>
        <div>
          <Label>Se desejar, escreva aqui uma observação</Label>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={4}
            defaultValue=""
          />
        </div>
      </FormContainer>
      <FormContainer>
        <BtnCinza style={{ marginRight: 10 }}>
          Voltar
        </BtnCinza>
        <Link to="Login">
          <BtnVermelho>continuar</BtnVermelho>
        </Link>
      </FormContainer>
    </HomeContainer>
  );
}

export default Visita;
