import styled from 'styled-components';
import banner from '../../../assets/image/bannerAlugue.png'
import predios from '../../../assets/svg/predios.svg';



const MainContainer = styled.div`
    display:flex;
    background-color:#F5F5F5;
    flex-direction: column;
    align-items:Start;
    align-items:center;
   

`;

const TextoBanner = styled.h2`
    color:#fff;
    font-size: 45px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    z-index: 1;
    margin-right:90px;
    h1{
        color:#fff;
        font-size: 45px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        z-index: 1;
        margin-bottom:90px;
    }
    
`;

const ContainerBanner = styled.div`
margin-bottom:2em;
display:flex;
justify-content: flex-end;
flex-direction: column;
align-items: flex-end;
background: url(${banner});
height: 400px;
width:100%;
background-repeat: no-repeat;
background-position: center;
&:after{
    content: '';
    background-color: #E83F40;
    opacity: 0.3;
    position: absolute;
    background-position: center;
    height: 400px;
    width:100%;
    background-repeat: no-repeat; 
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
const ComboBox = styled.select`
width:30px;


`;
const CardInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:311px;
    margin-right:2em;
    img{
       height:70px;
       width:70px;
    }
    p{
        text-align: center;
        color: #182849;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

`;
const Row = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;

`;
const ContainerBtn = styled.div`
    padding-top:2em;
    margin-bottom:2em;
`;
const ContainerPredios = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-image: url(${predios});
    background-repeat: no-repeat;
    width:100%;
`;

const ContainerCard = styled.div`
    width:70vw;
    background-color:#F0F1F1;

`;
const LinhaCinza = styled.div`
    margin-top:0.5em;
    margin-bottom:0.5em;
    border: 1px solid #BCBCBC;

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
   
`;
const Endereco = styled.p`
    color:#182849;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
   
`;

const CardImovel = styled.div`
    max-width:260px;
    background-color:#FFF;
    border-radius:10px;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:0px 1px 5px 0px rgba(50, 50, 50, 0.75);
    box-shadow:0px 1px 5px 0px rgba(50, 50, 50, 0.75);
    margin-bottom:2em;
    img{
        width:100%;
        height:194px;
        border-radius:10px;
    }
    div{
        margin-right:5px;
        margin-left:5px;
    }
   p{
    color:#182849;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
   }

`;

const IconCard = styled.div`
    display:flex;
    flex-direction:row;
    
img{
    height:30px;
    width:30px;
}
p{  margin-top:10px;
    color:#757575;
    margin-right:10px;
}

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
    ContainerBanner,
    TextoBanner,
    Titulo,
    Row,
    ContainerBtn,
    ContainerPredios,
    CardInfo,
    ContainerCard,
    LinhaCinza,
    LabelSection,
    LabelCinza,
    CardImovel,
    ContainerColor,
    Endereco,
    IconCard,
}