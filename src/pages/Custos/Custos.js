import React from 'react';
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

} from './stytled'
import {

    TextField,
    RadioGroup,
    Radio,
    FormControlLabel,
    Button,
} from '@material-ui/core';
import { BtnAzulEscuro, BtnCinza,BtnVermelho } from '../../components/Buttons/Buttons'

import { Link } from 'react-router-dom';
import step2 from '../../assets/svg/steps2.svg'

function Custos() {
    return (
        <HomeContainer>
            <Container1>
                <Steps>
                    <img src={step2}></img>
                </Steps>
                <Titulo>
                    Custos e aluguel
                </Titulo>
                <SubtituloPrincipal>
                    CUSTOS DO IMÓVEL
                </SubtituloPrincipal>
                <TextInfo>
                    Insira os custos abaixo
                </TextInfo>
            </Container1>
            <BackgroundColorido>


                <FormContainer>

                    <Label>
                        R$
                    </Label>
                    <div>
                        <TextField id="outlined-basic" label={<Label>
                            Taxa de condomínio
                    </Label>} variant="outlined" />
                    </div>
                </FormContainer>
                <FormContainer>

                    <Label>
                        R$
                </Label>
                    <div>
                        <TextField id="outlined-basic" label={<Label>
                            IPTU anual
                    </Label>} variant="outlined" />
                    </div>
                </FormContainer>
                <FormContainer>

                    <Label>
                        R$
                </Label>
                    <div>
                        <TextField id="outlined-basic" label={<Label>
                            Seguro incêndio
                </Label>} variant="outlined" />
                    </div>
                </FormContainer>

            </BackgroundColorido>

            <SubtituloPrincipal>
                PREÇO DO ALUGUEL
            </SubtituloPrincipal>

            <FormContainer>

                <Label>
                    R$
                </Label>
                <div>
                    <TextField id="outlined-basic" label={<Label>
                        Valor de aluguel
                </Label>} variant="outlined" />
                </div>
            </FormContainer>

            <BackgroundColorido>
                <SubtituloPrincipal>
                    TAXA DE ADMINISTRAÇÃO
            </SubtituloPrincipal>
                <FormContainer>
                    <RadioGroup aria-label="gender" name="gender1" value={null} onChange={null}>
                        <FormControlLabel value="Com exclusividade" control={<Radio />} label="Com exclusividade" />


                    </RadioGroup>
                    <Label>
                        1º aluguel
                    <br>
                        </br>
                    + 8% ao mês
                </Label>
                </FormContainer>
                <FormContainer>
                    <RadioGroup aria-label="gender" name="gender1" value={null} onChange={null}>
                        <FormControlLabel value="Com exclusividade" control={<Radio />} label="Sem exclusividade" />


                    </RadioGroup>
                    <Label>
                        1º aluguel
                    <br>
                        </br>
                    + 10% ao mês
                </Label>
                </FormContainer>


                <FormContainer>

                    <Label>
                        Você vai receber:
                    </Label>
                    <div>
                        R$ 2.300,00
                    </div>
                </FormContainer>
                <FormContainer>
                    <div>
                        <Label>
                            Aluguel:
                        </Label>
                        <Label>
                            Condomínio:
                            </Label>
                        <Label>
                            Aluguel:
                             </Label>
                    </div>

                    <div>
                        <p>R$ 200,00</p>
                        <p> R$ 200,00</p>
                        <p> R$ 235,00</p>
                    </div>
                </FormContainer>
                <FormContainer>

                    <Label>
                        Valor total para o inquilino:
                    </Label>
                    <div>
                        R$ 2.735,00
                    </div>
                </FormContainer>
                <FormContainer>

                    <BtnCinza style={{ marginRight: 10 }}>Voltar</BtnCinza>
                    <Link to='/Fotos'>
                        <BtnVermelho >
                            continuar
                    </BtnVermelho>
                    </Link>


                </FormContainer>


            </BackgroundColorido>


        </HomeContainer>


    );
}

export default Custos; 