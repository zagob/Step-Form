import styled from 'styled-components';

import banner from '../../../../assets/image/banner2.png';
import predios from '../../../../assets/svg/predios.svg';
import { InputText } from 'primereact/inputtext';



const HomeContainer = styled.div`
    
    background-color: #F9F9FA !important;
    
    display:flex;
    flex-direction: column;
    align-items:center;
`;

const Container1 = styled.div`

    background-image: url(${predios});
    text-align: center;
    margin-top: 11%;

`;

const Steps = styled.div`
text-align: center;
img{
    height: 20%;
    width: 70%;
    margin-top: 11%;
}`;

const Card = styled.div`

    max-width:300px;
    background:#F0F1F1;
    display:flex;
    flex-direction: column;

    margin-bottom: 11%;
    justify-content: center;
    align-items: center;
    margin-left:15%;
    margin-right:5%;
    padding:2rem;
    border-radius:5%;

`;


const grupoBtnSelector = styled.div `

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
    font-weight: 700;
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
};