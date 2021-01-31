import styled from 'styled-components';

const MainContainer = styled.div`
    display:flex;
    background-color:#F5F5F5;
    flex-direction: column;
    align-items:Start;
    align-items:center;
    height:100vh;
`

const TituloPrincipal = styled.h2`
    color: #182849;
    font-size: 29px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top:1em;
    align-self:center
`;

const ContainerInfo = styled.div`
    display:flex;
    flex-direction: column;
    width:70vw;
   
    

`;
const SubtituloPrincipal = styled.div`
    color: #182849;
    font-size: 23px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  
    
`;
const LabelInfo = styled.p`
    color:#182849;
    font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
   
`;

const RowOneSession = styled.div`
    display:flex;
    flex-direction:column;
    


    img{
        height:40px;
        width:40px;
    }

`

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
    ContainerInfo,
    LabelInfo,
    Row,
    Label,
    Opcao,
    SubtituloPrincipal,
}