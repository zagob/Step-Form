import styled from 'styled-components';


const Row = styled.div`
    display:flex;
    flex-direction:row;
    

`;


const LinhaCinza = styled.div`
    margin-top:0.5em;
    margin-bottom:0.5em;
    border: 1px solid #BCBCBC;

`;

const Titulo = styled.p`
    color:#747272;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-bottom:0.5em;
   
`;
const Endereco = styled.p`
    color:#182849;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-bottom:0.5em;
   
`;

const CardImovel = styled.div`
    max-width:20vw;
    min-width:200px;
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
    
    padding-bottom:1em;
    margin-right:2em;
`;
const containerTextCard= styled.div`

`;
const LabelAluguel = styled.p`
    color:#182849;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;

`;
const LabelValor = styled.p`
    color:#182849;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;

`


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

export {
    Row,
    LinhaCinza,
    Titulo,
    CardImovel,
    Endereco,
    IconCard,
    LabelAluguel,
    LabelValor
}