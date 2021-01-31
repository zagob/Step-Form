import styled from 'styled-components';

import banner from '../../assets/image/banner2.png';
import predios from '../../assets/svg/predios.svg';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
const HomeContainer = styled.div`
    
    background-color: #F9F9FA !important;
    height:100%;
    display:flex;
    flex-direction: column;
    algn-item:center;
`;

const Container1 = styled.div`
    height:50%;
    background-image: url(${predios});
    background-size:cover;
    background-repeat: no-repeat;  
    background-position: bottom;
    text-align: center;
   

`;

const Steps = styled.div`
text-align: center;
img{
    height: 20%;
    width: 70%;
    margin-top: 11%;
}

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
    margin-right:20px;

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
    Titulo,
    SubtituloPrincipal,
    TextInfo,
    FormContainer,
    BackgroundColorido,
    Label,
};