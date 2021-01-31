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
    Card,
    Texto,
    ContainerContent,

} from './stytled'
import { Link } from 'react-router-dom';
import {

    TextField,
    RadioGroup,
    Radio,
    FormControlLabel,
    Button,
} from '@material-ui/core';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BtnAzulEscuro, BtnCinza,BtnVermelho } from '../../components/Buttons/Buttons'

import step3 from '../../assets/svg/steps3.svg'
import camera from '../../assets/svg/camera.svg'

function Fotos() {
    return (<HomeContainer>
        <Container1>
            <Steps>
                <img src={step3}></img>
            </Steps>

        </Container1>
        <ContainerContent>

            <Card>
                <img src={camera}></img>
                <Texto>Não precisa de preocupar, a
            fotografia é por nossa conta!</Texto>
                <Texto>A Spotimob tem o auxílio de
                um time de fotógrafos profissionais
                para garantir imagens incríveis
            do seu anúncio.</Texto>
            </Card>
            <div style={{ maxWidth: '40%' }}>
                <Label>
                    Agora, vamos agendar uma sessão de fotos do seu imóvel.
                    Como você prefere receber o fotografo?
            </Label>
                <FormContainer>
                    <RadioGroup aria-label="gender" name="gender1" value={null} onChange={null}>
                        <FormControlLabel value="Com exclusividade" control={<Radio />} label={<Label>Liberar entrada do fotografo durante horário comercial
                        pelos próximos 04 dias úteis</Label>} />
                        <FormControlLabel value="Com exclusividade" control={<Radio />} label={<Label>Agendar um horário para receber o fotografo</Label>} />


                    </RadioGroup>

                </FormContainer>
                <FormContainer>
                    <div>
                        <Calendar />
                    </div>


                    <div >
                        <Label>
                            Qual turno?
                        </Label>
                        <RadioGroup aria-label="gender" name="gender1" value={null} onChange={null}>
                            <FormControlLabel value="Com exclusividade" control={<Radio />} label={<Label>Manhã</Label>} />
                            <FormControlLabel value="Com exclusividade" control={<Radio />} label={<Label>Tarde</Label>} />


                        </RadioGroup>
                    </div>

                </FormContainer>

                <Label>Qual o melhor horário?</Label>
                <form noValidate>
                    <TextField
                        id="time"
                        type="time"
                        defaultValue="07:30"

                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </form>
                <Label>
                    Atenção: o horário de chegada do fotografo poderá ser um pouco diferente do qual
                    você escolheu, devido ao tempo, trânsito e demais eventualidades.
                    Contamos com a sua compreensão :)
            </Label>
                <FormContainer>

                    <BtnCinza style={{ marginRight: 10 }}>Voltar</BtnCinza>
                    <Link to='Visita'>
                        <BtnVermelho >
                            continuar
                         </BtnVermelho>
                    </Link>


                </FormContainer>
            </div>
        </ContainerContent>

    </HomeContainer>);
}

export default Fotos;