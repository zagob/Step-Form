import styled from 'styled-components';
import banner from '../../../assets/image/bannerAlugue.png'
import predios from '../../../assets/svg/predios.svg';

const MainContainer = styled.div`
    display:flex;
    background-color:#fff;
    flex-direction: column;
    align-items:Start;
    padding:2em;
    // align-items:center;
   

`;

const Logo = styled.div `
    margin-right:1em;
    margin-top:0.5em;
    img{
        height:40px;
        width:40px;
    }

`
const ContainerBtn = styled.div`
  
    margin-left:3em;
`;

const BtnCustom = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;

    margin-right:1em;
    img{
        height:20px;
        width:20px;
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

const Row = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;

`;
const RowFilter = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center
    

`;



const ContainerCard = styled.div`
    padding-top:2em;
    display:flex;
    flex-direction:column;
    align-self: center;
    width:70vw;
    background-color:#fff;

`;

const ContainerDestaque = styled.div`
    padding-top:2em;
    display:flex;
    flex-direction:column;
    align-self: center;
    width:60vw;

`;
const LinhaCinza = styled.div`
    margin-top:0.5em;
    margin-bottom:0.5em;
    border: 1px solid #BCBCBC;

`;

const LabelInfo =  styled.p`
    color:#182849;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-top:2em;
    margin-left:3.5em;
 `;

const LabelSection = styled.p`
    color:#182849;
    font-size: 22px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-top:2em;
`;
const LabelCinza = styled.p`
    color:#747272;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-bottom:1em;
   
`;
const Endereco = styled.p`
    color:#182849;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
   
`;



const ContainerColor = styled.div`
    display:flex;
    background-color:#F0F1F1;
    flex-direction: column;
    align-items:Start;
    align-items:center;
    width:100%;
   

`;
export {
    MainContainer,
    Logo,
    BtnCustom,
    Titulo,
    RowFilter,
    Row,
    ContainerBtn,
    ContainerCard,
    LabelInfo,
    LinhaCinza,
    LabelSection,
    LabelCinza,
    ContainerColor,
    Endereco,
    ContainerDestaque,
}