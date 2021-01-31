import React from "react";
import {
  MainContainer,
  TituloPrincipal,
  SubtituloPrincipal,
  ContainerInfo,
  LabelInfo,
  Row,
  Label,
} from "./styled";
// import { Container } from './styles';

function MeusDados() {
  return (
    <MainContainer>
      <TituloPrincipal>Meus dados</TituloPrincipal>
      <ContainerInfo>
        <SubtituloPrincipal>Olá, Amanda!</SubtituloPrincipal>
        <LabelInfo>
          Lembre-se de manter todos os seus dados sempre atualizados :)
        </LabelInfo>

        <Row>
          
        </Row>
      </ContainerInfo>
    </MainContainer>
  );
}

export default MeusDados;
