import styled from "styled-components";

const ContainerFooter = styled.div`
    background-color: #182849;
    height: 366px;
`;

const ConteudoEsquerdo = styled.div`
    /* background-color: green; */
    display: flex;
`;

const ConteudoDireito = styled.div`
    display: flex;
    position:relative;
`;

const ContainerEsquerdo = styled.div`
    margin-left: 209px; 
    margin-top: 75px;
`;
const LogoMarca = styled.div`
     span {
        color: #FFF;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        margin-top:14px;
        font-size:10px;
        margin-left:85px;
    };
`;
const Lista = styled.div`
    margin-top: 75px;
    margin-left:86px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #FFF;
    h6 {
        font-size:16px;
        margin-bottom:10px;
    };
    li {
        padding-bottom: 5px;
    };
    a {
        color: #FFF;
        font-size:12px;
        font-weight: 400;
        text-decoration: none;
        &:hover{
            color: #FFF; 
        }
    };
`;

const Contatos = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #FFF;
    margin-top:56px;
`;

const Telefone = styled.div`
    display: flex;
    align-items: center;
    span {
        margin-left:12px;
        color: #FFF;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size:12px;
    };
`;

const Localizacao = styled.div`
    display: flex;
    margin-top:14px;
`;

const Endereco = styled.div`
    display: flex;
    flex-direction:column;
    span {
        margin-left:12px;
        color: #FFF;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size:12px;
    };
`;

export {
    ContainerFooter,
    ConteudoEsquerdo,
    ConteudoDireito,
    ContainerEsquerdo,
    Lista,
    LogoMarca,
    Contatos,
    Telefone,
    Endereco,
    Localizacao,
};