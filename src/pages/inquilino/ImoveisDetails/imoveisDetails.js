import React from 'react';
import {
    Container,
    ImageView,
    Row,
    Titulo,
    RowIcon,
    IconDetails,
    Label,
    SubTitulo,
    CardValues,
    LinhaCinza,
    LinhaTracejada,
    EndereçoContainer,
    Section,
    SectionCard,
    // Calendar
} from './style';
import { useHistory } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Calendar from 'react-calendar';
import CardImovelComponent from '../../../components/CardImovel/CardImovel'
import { BtnAzulEscuro, BtnCinza } from '../../../components/Buttons/Buttons'


import tamanho from '../../.././assets/svg/iconPageDetails/metros.svg'
import suite from '../../.././assets/svg/iconPageDetails/suite.svg'
import quarto from '../../.././assets/svg/iconPageDetails/quarto.svg'
import banheiro from '../../.././assets/svg/iconPageDetails/banheiro.svg'
import pet from '../../.././assets/svg/iconPageDetails/pet.svg'
import garagem from '../../.././assets/svg/iconPageDetails/garagem.svg'
import mobiliado from '../../.././assets/svg/iconPageDetails/mobiliado.svg'
import logo from '../../.././assets/svg/iconSpot.svg'
import foto from '../../.././assets/image/fotoAp.png'


function ImoveisDetails() {


    const history = useHistory();

    function handleClick() {
        history.push("/Agendar");
    }


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
    }, {
        foto: foto,
        titulo: 'Apartamento para alugar',
        endereco: 'R. Doutor Vila, 100 Praia de Itaparica, Vila Velha',
        tamanho: '45',
        quarto: '1',
        aluguel: '1.050,00',
        total: '1.650,00',
    },]



    return (<Container>
        <Row>
            <ImageView>

                <Carousel>
                    <div>
                        <img src={foto} />

                    </div>
                    <div>
                        <img src={foto} />

                    </div>
                    <div>
                        <img src={foto} />

                    </div>
                </Carousel>



            </ImageView>

            <div>
                <Titulo>
                    Apartamento amplo, mobiliado e perto da praia!
            </Titulo>
                <RowIcon>
                    <IconDetails>
                        <img src={tamanho} />
                        <Label>45 m²</Label>
                    </IconDetails>
                    <IconDetails>
                        <img src={suite} />
                        <Label>1 suíte</Label>
                    </IconDetails>
                    <IconDetails>
                        <img src={quarto} />
                        <Label>2 quartos</Label>
                    </IconDetails>
                    <IconDetails>
                        <img src={banheiro} />
                        <Label>1 banheiro</Label>
                    </IconDetails>
                </RowIcon>
                <RowIcon>
                    <IconDetails>
                        <img src={pet} />
                        <Label>aceita pet</Label>
                    </IconDetails>
                    <IconDetails>
                        <img src={garagem} />
                        <Label>1 vaga</Label>
                    </IconDetails>
                    <IconDetails>
                        <img src={mobiliado} />
                        <Label>mobiliado</Label>
                    </IconDetails>

                </RowIcon>
                <SubTitulo>Sobre o imóvel</SubTitulo>
                <Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                . Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat
             </Label>

                <Row>
                    <CardValues>
                        <div>
                            <Label>Aluguel</Label>
                            <Label>R$ 1.050,00</Label>
                        </div>
                        <div>
                            <Label>Condomínio</Label>
                            <Label>R$ 600,00</Label>
                        </div>
                        <div>
                            <Label>IPTU</Label>
                            <Label>R$ 0</Label>
                        </div>
                        <div>
                            <Label>Seguro incêndio</Label>
                            <Label>R$ 30,00</Label>
                        </div>
                        <LinhaTracejada />
                        <div>
                            <Label>Aluguel</Label>
                            <Label>R$ 1.680,00</Label>
                        </div>
                        <BtnAzulEscuro onClick={handleClick}>
                            agendar visita
                    </BtnAzulEscuro>
                        <BtnCinza>fazer uma proposta</BtnCinza>
                    </CardValues>
                    <EndereçoContainer>
                        <Row>
                            <img src={logo} />
                            <p> R. Doutor Vila 100
                            Praia de Itaparica, Vila Velha
                    </p>
                        </Row>
                        <BtnAzulEscuro>ver no mapa</BtnAzulEscuro>
                        <LinhaCinza />
                    </EndereçoContainer>
                </Row>

            </div>
        </Row>
        <Section>
            <SubTitulo>Aqui você aluga um imóvel sem fiador</SubTitulo>
            <Label>Basta passar pela nossa avaliação de
            crédito e comprovar a renda necessária
            para alugar seu imóvel.
        </Label>
            <button>Ver documentos necessários para a análise de crédito</button>

            <SubTitulo>Alugue online, sem complicação</SubTitulo>
            <Label>Agende visitas online e negocie direto com
                 o proprietário.</Label>

            <SubTitulo>Sem surpresas nos custos</SubTitulo>
            <Label>Detalhamos todas as informações de valores para
            você, sem cobranças extras ou escondidas.
             </Label>

        </Section>
        <SectionCard>
            <SubTitulo>Imóveis parecidos</SubTitulo>
            <LinhaCinza />
            <Label>Vitória</Label>

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
           
        </SectionCard>
    </Container>);
}

export default ImoveisDetails;