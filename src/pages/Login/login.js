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
    Center,
    BtnRegister,
    BtnEntrar,
    BtnRegisterFacebook,
} from './stytled'

import {
    Checkbox,
    TextField,
    RadioGroup,
    Radio,
    FormControlLabel,
    Button,
} from '@material-ui/core';

import step5 from '../../assets/svg/steps5.svg'
import user from '../../assets/svg/usuario.svg'

function Login() {
    return (

        <HomeContainer>
            <Container1>
                <Steps>
                    <img src={step5}></img>
                </Steps>
                <Titulo>Login</Titulo>

                <SubtituloPrincipal>Já estamos quase terminando!</SubtituloPrincipal>
                <Label>Faça o login para completar o cadastro do seu imóvel</Label>

            </Container1>
            <Center>
                <Card>
                    <img src={user}></img>
                    <TextField
                        color='secondary'
                        fullWidth
                        label="E-mail"
                        margin="dense"
                    ></TextField>
                    <TextField
                        
                        color='secondary'
                        fullWidth
                        label="senha"
                        margin="dense"></TextField>

                    <BtnEntrar>
                        Entrar
                     </BtnEntrar>
                     <Label>Não possui conta?</Label>
                     <BtnRegister>cadastre-se</BtnRegister>
                     <Label>ou</Label>
                     
                </Card>
                <BtnEntrar>cadastre-se com o Google</BtnEntrar>
                <BtnRegisterFacebook>cadastre-se com o Facebook</BtnRegisterFacebook>
            </Center>
        </HomeContainer>


    );
}

export default Login;