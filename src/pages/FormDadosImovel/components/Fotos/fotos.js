import React, { useState } from 'react';

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
import { BtnAzulEscuro, BtnCinza,BtnVermelho } from '../../../../components/Buttons/Buttons'

import step3 from '../../../../assets/svg/steps3.svg'
import camera from '../../../../assets/svg/camera.svg'

function Fotos({ setForm, formData, navigation }) {
    const [date, setDate] = useState(new Date());
    const { calendario, ComExclusividade, SemExclusividade, turno } = formData;

    const onDateChange = (newDate) => {
        console.log(newDate); // dê uma olhada no que vem dentro desse objeto ou se é uma data
        setDate({newDate: calendario}); // se ele for uma data, envie ele assim. Caso contrário, tente achar a data internamente :)
      }

    console.log(formData)

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
                <Label style={{ marginBottom: '10px' }}>
                    Agora, vamos agendar uma sessão de fotos do seu imóvel.
                    Como você prefere receber o fotografo?
                </Label>
                <FormContainer>
                    <RadioGroup 
                        aria-label="gender" 
                        name="SemExclusividade"
                        value={SemExclusividade} 
                        onChange={setForm}
                    >
                        <FormControlLabel 
                            value="Sem exclusividade" 
                            label={<Label>Liberar entrada do fotografo durante horário comercial
                            pelos próximos 04 dias úteis</Label>} 
                            control={<Radio />}
                        />
                    <RadioGroup
                        type="radiob"
                        aria-label="gender" 
                        name="SemExclusividade" 
                        value={SemExclusividade} 
                        onChange={setForm}
                    >
                        <FormControlLabel
                            label={<Label>Agendar um horário para receber o fotografo</Label>}
                            value="Com horario" 
                            control={<Radio />}
                        />
                    </RadioGroup>
                    </RadioGroup>
                    

                </FormContainer>
                {SemExclusividade == 'Com horario' &&  <FormContainer>
                    <div>
                        {/* <Calendar 
                            value={date}
                            onChange={onDateChange}
                        /> */}
                        <div >
                           <TextField
                                id="datetime-local"
                                // label="Next appointment"
                                type="datetime-local"
                                value={calendario}
                                onChange={setForm}
                                name="calendario"
                                defaultValue="2017-05-24T10:30"
                                // disabled={Comexclusividade ? `${Comexclusividade}` : `${Comexclusividade}`}
                                // className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                            }}
                            />
                        </div>
                    </div>


                    <div style={{ marginLeft: '20px' }}>
                        <Label>
                            Qual turno?
                        </Label>
                        <RadioGroup 
                            aria-label="gender" 
                            name="turno" 
                            value={turno} 
                            onChange={setForm}>
                            <FormControlLabel 
                                value="Manhã" 
                                control={<Radio />} 
                                label={<Label>Manhã</Label>} 
                            />
                            <FormControlLabel 
                                value="Tarde" 
                                control={<Radio />} 
                                label={<Label>Tarde</Label>} 
                            />


                        </RadioGroup>
                    </div>

                </FormContainer> }

               {SemExclusividade == 'Com horario' && <div>
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
               </div> }
                <FormContainer>

                    {/* <BtnCinza style={{ marginRight: 10 }}>Voltar</BtnCinza> */}

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
            </div>
        </ContainerContent>

    </HomeContainer>
 );
}

export default Fotos;