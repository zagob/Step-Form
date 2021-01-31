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
import { BtnAzulEscuro, BtnCinza,BtnVermelho } from '../../../../components/Buttons/Buttons'

import { Link } from 'react-router-dom';
import step2 from '../../../../assets/svg/steps2.svg'

function Custos({ setForm, formData, navigation }) {
    const { 
        Taxa, 
        IPTU_anual, 
        SeguroIncendio, 
        valorAluguel, 
        TaxaAdministracaoCom,
        TaxaAdministracaoSem
    } = formData;

    console.log(formData)
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
                        <TextField
                            label="Taxa de condominio" 
                            type="number"
                            id="outlined-basic" 
                            variant="outlined"
                            value={Taxa}
                            onChange={setForm}
                            name="Taxa"
                        />
                    </div>
                </FormContainer>
                <FormContainer>

                    <Label>
                        R$
                </Label>
                    <div>
                        <TextField 
                            label={<Label>
                            IPTU anual
                            </Label>}
                            type="number"
                            id="outlined-basic" 
                            variant="outlined"
                            value={IPTU_anual}
                            onChange={setForm}
                            name="IPTU_anual"
                        />
                    </div>
                </FormContainer>
                <FormContainer>

                    <Label>
                        R$
                </Label>
                    <div>
                        <TextField 
                            label={<Label>
                            Seguro incêndio
                            </Label>} 
                            type="number"
                            id="outlined-basic" 
                            variant="outlined"
                            value={SeguroIncendio}
                            onChange={setForm}
                            name="SeguroIncendio" 
                        />
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
                    <TextField 
                        label={<Label>
                        Valor de aluguel
                        </Label>} 
                        type="number"
                        id="outlined-basic" 
                        variant="outlined"
                        value={valorAluguel}
                        onChange={setForm}
                        name="valorAluguel" 
                    />
                </div>
            </FormContainer>

            <BackgroundColorido>
                <SubtituloPrincipal>
                    TAXA DE ADMINISTRAÇÃO
            </SubtituloPrincipal>
                <FormContainer>
                    <RadioGroup 
                        aria-label="gender" 
                        name="TaxaAdministracaoCom" 
                        value={TaxaAdministracaoCom} 
                        onChange={setForm}
                    >
                        <FormControlLabel 
                            value="+ 8%" 
                            control={<Radio />} 
                            label="Com exclusividade" 
                        />


                    </RadioGroup>
                    <Label>
                        1º aluguel
                    <br>
                        </br>
                    + 8% ao mês
                </Label>
                </FormContainer>
                <FormContainer>
                    <RadioGroup
                        type="radiob"
                        aria-label="gender" 
                        name="TaxaAdministracaoCom" 
                        value={TaxaAdministracaoCom} 
                        onChange={setForm}
                    >
                        <FormControlLabel 
                            value="+ 10%" 
                            control={<Radio />} 
                            label="Sem exclusividade" 
                        />
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
                    <BtnCinza
                    onClick={() => navigation.previous(window.scrollTo({
                        top: 100,
                        behavior: 'smooth'
                    }))}
                    >Voltar</BtnCinza>
                    
                    <BtnVermelho
                    onClick={() => navigation.next(window.scrollTo({
                        top: 100,
                        behavior: 'smooth'
                    }))}
                    >continuar</BtnVermelho>


                </FormContainer>


            </BackgroundColorido>


        </HomeContainer>


    );
}

export default Custos; 