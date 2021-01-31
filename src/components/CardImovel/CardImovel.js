import React from "react";
import { useHistory } from "react-router-dom";
import {
  Row,
  LinhaCinza,
  Titulo,
  CardImovel,
  Endereco,
  IconCard,
  LabelAluguel,
  LabelValor,
} from "./style";

import tamanho from "../../assets/svg/tamanho.svg";
import quarto from "../../assets/svg/quarto.svg";

function CardImovelComponent(props) {
  const history = useHistory();

  const redirect = () => {
      
    history.replace("/ImoveisDetails");
  };

  return (
    <button onClick={redirect}>
      <CardImovel>
        <img src={props.foto} />
        <div>
          <Titulo>{props.titulo}</Titulo>
          <Endereco>{props.endereco}</Endereco>

          <Row>
            <IconCard>
              <img src={tamanho} />
              <p>{props.tamanho} m²</p>
            </IconCard>
            <IconCard>
              <img src={quarto} />
              <p>{props.quarto} quarto</p>
            </IconCard>
          </Row>
          <LinhaCinza />
          <LabelAluguel>Aluguel: R${props.aluguel}</LabelAluguel>
          <LabelValor>Total: R${props.total}</LabelValor>
        </div>
      </CardImovel>
    </button>
  );
}

export default CardImovelComponent;
