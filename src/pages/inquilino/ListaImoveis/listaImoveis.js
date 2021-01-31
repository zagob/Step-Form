import React, { useState } from "react";

import {
  MainContainer,
  Logo,
  RowFilter,
  LabelInfo,
  BtnCustom,
  ContainerDestaque,
  Row,
  ContainerBtn,
  ContainerCard,
  LinhaCinza,
  LabelSection,
  LabelCinza,
} from "./styled";
import CardImovelComponent from "../../../components/CardImovel/CardImovel";

import Modal from "./components/modal";

import { TextField } from "@material-ui/core";
import { BtnAzulEscuro } from "../../../components/Buttons/Buttons";
import logo from "../../../assets/svg/iconSpot.svg";
import IconFilter from "../../../assets/svg/Iconfilter.svg";
import IconDown from "../../../assets/svg/down.svg";
import foto from "../../../assets/image/fotoAp.png";

function ListaImoveis() {
  const [data, setData] = useState([
    {
      id: 1,
      foto: foto,
      titulo: "Apartamento para alugar",
      endereco: "R. Doutor Vila, 100 Praia de Itaparica, Vila Velha",
      tamanho: "45",
      quarto: "1",
      aluguel: "1.050,00",
      total: "1.650,00",
    },
    {
      id: 2,
      foto: foto,
      titulo: "Apartamento para alugar",
      endereco: "R. Doutor Vila, 100 Praia de Itaparica, Vila Velha",
      tamanho: "45",
      quarto: "1",
      aluguel: "1.050,00",
      total: "1.650,00",
    },
    {
      id: 3,
      foto: foto,
      titulo: "Apartamento para alugar",
      endereco: "R. Doutor Vila, 100 Praia de Itaparica, Vila Velha",
      tamanho: "45",
      quarto: "1",
      aluguel: "1.050,00",
      total: "1.650,00",
    },
    {
      id: 4,
      foto: foto,
      titulo: "Apartamento para alugar",
      endereco: "R. Doutor Vila, 100 Praia de Itaparica, Vila Velha",
      tamanho: "45",
      quarto: "1",
      aluguel: "1.050,00",
      total: "1.650,00",
    },

    {
      id: 5,
      foto: foto,
      titulo: "Apartamento para alugar",
      endereco: "R. Doutor Vila, 100 Praia de Itaparica, Vila Velha",
      tamanho: "45",
      quarto: "1",
      aluguel: "1.050,00",
      total: "1.650,00",
    },
    {
      id: 6,
      foto: foto,
      titulo: "Apartamento para alugar",
      endereco: "R. Doutor Vila, 100 Praia de Itaparica, Vila Velha",
      tamanho: "45",
      quarto: "1",
      aluguel: "1.050,00",
      total: "1.650,00",
    },
  ]);

  return (
    <MainContainer>
      <RowFilter>
        <Logo>
          <img src={logo} />
        </Logo>
        <TextField id="outlined-basic" label="Buscar" variant="outlined" />
        <ContainerBtn>
          <BtnAzulEscuro>
            <BtnCustom>
              <img src={IconFilter} />
            </BtnCustom>
            filtrar
          </BtnAzulEscuro>
        </ContainerBtn>
        <ContainerBtn>
          <BtnAzulEscuro>
            <BtnCustom>
              <img src={IconDown} />
            </BtnCustom>
            filtrar
          </BtnAzulEscuro>
        </ContainerBtn>
      </RowFilter>
      <LabelInfo>
        48 imóveis encontrados em: Praia de Itaparica, Vila Velha - ES e
        arredores
      </LabelInfo>
      <ContainerCard>
        <Row>
          {data.map((d) => (
            <CardImovelComponent
              key={d.id}
              foto={d.foto}
              titulo={d.titulo}
              endereco={d.endereco}
              tamanho={d.tamanho}
              quarto={d.quarto}
              aluguel={d.aluguel}
              total={d.total}
            />
          ))}
        </Row>
      </ContainerCard>

      <ContainerDestaque>
        <LabelSection>Destaques</LabelSection>
        <LinhaCinza />
        <LabelCinza>Vila Velha</LabelCinza>
        <Row>
          {data.map((d) => (
            <CardImovelComponent
              key={d.id}
              foto={d.foto}
              titulo={d.titulo}
              endereco={d.endereco}
              tamanho={d.tamanho}
              quarto={d.quarto}
              aluguel={d.aluguel}
              total={d.total}
            />
          ))}
        </Row>
      </ContainerDestaque>
      <Modal />
    </MainContainer>
  );
}

export default ListaImoveis;
