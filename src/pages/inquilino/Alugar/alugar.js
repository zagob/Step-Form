import React from 'react';

import {
    MainContainer,
    ContainerBanner,
    TextoBanner,
    Titulo,
    Row,
    ContainerBtn,
    ContainerPredios,
    CardInfo,
    ContainerCard,
    LinhaCinza,
    LabelSection,
    LabelCinza,

    ContainerColor,
    Endereco,
    IconCard,
} from './styled'
import SelectorComponnent from './components/selector'
import {
    BtnAzulEscuro,
    BtnAzulClaro,
} from '../../../components/Buttons/Buttons'

import { Link } from 'react-router-dom';

import CardImovelComponent from '../../../components/CardImovel/CardImovel'

import icon from '../../../assets/svg/iconSpot.svg'
import foto from '../../../assets/image/fotoAp.png'
import tamanho from '../../../assets/svg/tamanho.svg'
import quarto from '../../../assets/svg/quarto.svg'
import { Label } from '../ImoveisDetails/style';
// import { Container } from './styles';

function Alugar() {


    const data = [{
        foto: foto,
        titulo: 'Apartamento para alugar',
        endereco: 'R. Doutor Vila, 100 Praia de Itaparica, Vila Velha',
        tamanho: '45',
        quarto: '1',
        aluguel: '1.050,00',
        total: '1.650,00',
    },
    {
        foto: foto,
        titulo: 'Apartamento para alugar',
        endereco: 'R. Doutor Vila, 100 Praia de Itaparica, Vila Velha',
        tamanho: '45',
        quarto: '1',
        aluguel: '1.050,00',
        total: '1.650,00',
    },{
        foto: foto,
        titulo: 'Apartamento para alugar',
        endereco: 'R. Doutor Vila, 100 Praia de Itaparica, Vila Velha',
        tamanho: '45',
        quarto: '1',
        aluguel: '1.050,00',
        total: '1.650,00',
    },]


    return (
        <MainContainer>
            <ContainerBanner>
                <TextoBanner>Alugue seu imóvel
                <h1>sem burocracia</h1>
                </TextoBanner>
            </ContainerBanner>

            <Titulo>Negocie diretamente com o proprietário</Titulo>
            <Row>
                <SelectorComponnent
                    label='Escolha a cidade '
                    item1='Cariacica'
                    item2='Vila Velha'
                    item3='Vitoria'
                />
                <SelectorComponnent
                    label='Escolha o bairro '
                    item1='Cariacica'
                    item2='Vila Velha'
                    item3='Vitoria'
                />

            </Row>
            <Row>
                <SelectorComponnent
                    label='Qual o valor do aluguel?'
                    item1='Cariacica'
                    item2='Vila Velha'
                    item3='Vitoria'
                />
                <SelectorComponnent
                    label='Número de quartos'
                    item1='Cariacica'
                    item2='Vila Velha'
                    item3='Vitoria'
                />
                

            </Row>
            <ContainerPredios>
                <ContainerBtn>
                    <Link  to="/EncontrarImoveis" >
                    <BtnAzulEscuro >
                        encontrar imóveis
                    </BtnAzulEscuro>
                    </Link>
                   
                </ContainerBtn>

                <Row>
                    
                    <CardInfo>
                        <img src={icon} />
                        <p>Alugue um imóvel rapidamente,</p>
                        <p>agende visitas em minutos e </p>
                        <p>negocie diretamente com o </p>
                        <p>proprietário</p>
                    </CardInfo>

                    <CardInfo>
                        <img src={icon} />
                        <p>Tomamos conta de toda a</p>
                        <p>documentação do aluguel, sem</p>
                        <p>burocracias ou filas de cartório!</p>
                        <p>Com a Spotimob é rápido e 100%</p>
                        <p>digital</p>
                    </CardInfo>
                    <CardInfo>
                        <img src={icon} />
                        <p>Alugue um imóvel sem fiador ou </p>
                        <p>deposito caução, tudo da forma</p>
                        <p>mais eficiente, segura e  sem sair </p>
                        <p>de casa!</p>
                    </CardInfo>
                </Row>

                <ContainerBtn>
                    <BtnAzulClaro>É proprietário? Anuncie seu imóvel grátis!</BtnAzulClaro>
                </ContainerBtn>
                <ContainerColor>
                    <ContainerCard>
                        <LabelSection>Destaques</LabelSection>
                        <LinhaCinza />
                        <LabelCinza>Vila Velha</LabelCinza>
                        <Row>
                            {data.map(d => (
                                <CardImovelComponent

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


                        <LabelSection>Destaques</LabelSection>
                        <LinhaCinza />
                        <Label>ssss</Label>
                        <LabelCinza>Vitoria</LabelCinza>
                        <Row>
                            {data.map(d => (
                                <CardImovelComponent

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
                </ContainerColor>
            </ContainerPredios>
        </MainContainer>



    );
}

export default Alugar;