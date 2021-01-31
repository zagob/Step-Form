import React from 'react';

import {
    MainContainer,
    TituloPrincipal,
    ContainerMenu,
    LabelSection,
    LinhaVermelha,
    Row,
    Label,
    Opcao,
} from './styled'



function OpcaoComponent(props) {
    return (
    <Row>
        <Opcao>
            <img src={props.img1} />
            <Label>{props.label1}</Label>
        </Opcao>
        <Opcao>
            <img src={props.img2} />
            <Label>{props.label2}</Label>
        </Opcao>
        <Opcao>
            <img src={props.img3} />
            <Label>{props.label3}</Label>
        </Opcao>
    </Row>);
}

export default OpcaoComponent;