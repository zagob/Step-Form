import styled from 'styled-components';

import banner from '../../assets/image/banner2.png';
import predios from '../../assets/svg/predios.svg';
import { InputText } from 'primereact/inputtext';

import Button from '@material-ui/core/Button';
const HomeContainer = styled.div`
    
    background-color: #F9F9FA !important;
    
    display:flex;
    flex-direction: column;
   

    `;

const Container1 = styled.div`

    background-image: url(${predios});
    text-align: center;
    margin-top: 2%;
    background-repeat: no-repeat;

`;

const Steps = styled.div`
text-align: center;
img{
    height: 20%;
    width: 70%;
    margin-top: 4%;
}`;

const Center = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 100%;

`

const Card = styled.div`

    width:30%;
    background:#EBEBEB;
    display:flex;
    flex-direction: column;
    margin-top:5rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
    padding:2rem;
    padding-top:0;
    border-radius:5%;
    
    img{
        margin-top:-3.5rem;
    }
    Button{
        margin-top:2rem;
        margin-bottom:1rem;
    }

`;

const BtnEntrar= styled(Button)`
    && {
        margin-bottom:1rem;
        background-color: #CF3033;
        color: #fff;
        border-radius:20px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        padding: 7px 14px;
        &:hover {
            background-color: #D84547;
          }
    }
  
`;
const BtnRegister = styled(Button)`
    && {
        margin-bottom:1rem;
        background-color: #182849;
        color: #fff;
        border-radius:20px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        padding: 7px 14px;
        &:hover {
          background-color: #233864;
        }
    }
  
`;
const BtnRegisterFacebook = styled(Button)`
    && {
        margin-bottom:1rem;
        background-color: #3382A6;
        color: #fff;
        border-radius:20px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        padding: 7px 14px;
        &:hover {
          background-color: #4B91B1;
        }
    }
  
`;



const grupoBtnSelector = styled.div`
`



const ContainerContent = styled.div`
    display:flex;
    flex-direction:row;
    background:#fff;
    margin-top: 11%;
    padding-top:1rem;
`
const Texto = styled.div`
    color:#182849;
    font-size:12;
    margin-bottom:1.5rem;
`;

const Titulo = styled.div`
text-align: center;
color: #182849;
font-size: 34px;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
margin-bottom:5%;



`;
const SubtituloPrincipal = styled.div`
    color: #182849;
    font-size: 23px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-align: center;
    margin-bottom:2rem;
    
`;
const TextInfo = styled.div`
    color: #649FBC;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-top:1%;

`;

const Label = styled.div`
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color:#182849;
    font-weight: 600;

`;

const FormContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom:20px;
    margin-top:2%;

`;

const BackgroundColorido = styled.div`
    background-color:#F0F1F1;
    
    margin-bottom:2%
`;

export {
    HomeContainer,
    Container1,
    Steps,
    Card,
    Titulo,
    SubtituloPrincipal,
    TextInfo,
    FormContainer,
    BackgroundColorido,
    ContainerContent,
    Label,
    Texto,
    Center,
    BtnRegister,
    BtnEntrar,
    BtnRegisterFacebook,
};