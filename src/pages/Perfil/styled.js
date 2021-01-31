import styled from 'styled-components';

const MainContainer = styled.div`
    display:flex;
    background-color:#F5F5F5;
    flex-direction: column;
    align-items:center;
    

`

const TituloPrincipal = styled.h2`
    color: #182849;
    font-size: 29px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top:1em;
`;

const ContainerMenu = styled.div`
    display:flex;
    flex-direction: column;
    width:70vw;
    

`;

const LabelSection = styled.p`
    color:#182849;
    font-size: 22px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-top:2em;
`;
const LinhaVermelha = styled.div`
    margin-top:0.5em;
    margin-bottom:1em;
    border: 1px solid #CF3033;

`;

const Row = styled.div`
    display:flex;
    flex-direction:row;
    

`;
const Opcao = styled.div`

    img{
       
        height:50px;
        margin-bottom:1em;
        
    }
    display:flex;
    flex-direction: column;
    align-items:center;
    max-width:100px;
    margin-right:2em;
    
`;
const Label = styled.p`
    color:#182849;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
   

`

export {
    MainContainer,
    TituloPrincipal,
    ContainerMenu,
    LabelSection,
    LinhaVermelha,
    Row,
    Label,
    Opcao,
}